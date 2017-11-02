/**
 * Created by BryanH on 31/10/2017.
 **/

var collectorVisitor = require('../generated/miniCSharpParserVisitor').miniCSharpParserVisitor;

var almacenGlobal = [];

function Variable(nombre,valor,ctx){
    this.nombre = nombre;
    this.valor = valor; //valor que toma la variable.
    this.contexto = ctx;
}

function Clase(nombre,ctx){
    this.nombre = nombre;
    this.atributos = []; //se guardan objetos de tipo variable.
    this.contexto = ctx;
}

function Metodo(nombre,bodyContext) {
    this.nombre = nombre;
    this.parametros = []; //parametros de la función.
    this.variablesLocales = []; //variables locales declaradas en el método.
    this.blockContext = bodyContext; //Se utiliará para ejecutar el cuerpo del metodo haciendo visit a este contexto.
}

// This class defines a complete generic visitor for a parse tree produced by miniCSharpParser.
function InterpreteCollector() {
    collectorVisitor.call(this);
    return this;
}

InterpreteCollector.prototype = Object.create(collectorVisitor.prototype);
InterpreteCollector.prototype.constructor = InterpreteCollector;

InterpreteCollector.prototype.buscarGlobal = function (nombre) {
    for (var i = 0; i < this.identifiers.length; i++) {
        if (this.identifiers[i].nombre === nombre) {
            return this.identifiers[i];
        }
    }
    return null;
};

InterpreteCollector.prototype.resetearAlmacen = function () {
    almacenGlobal = [];
};
var cont = 0;
// Visit a parse tree produced by miniCSharpParser#programN.
InterpreteCollector.prototype.visitProgramN = function(ctx) {

    for (var i = 0; i < ctx.constDecl().length; i++)
    {
        this.visit(ctx.constDecl(i));
    }

    for (var j = 0; j < ctx.varDecl().length; j++)
    {
        var contexto = this.visit(ctx.varDecl(j));//type (CORCHETEIZQ CORCHETEDER)? IDENTIFIER ( COMA IDENTIFIER )* PyCOMA
        var tipoDato = this.visit(contexto.type()); //Devuelve el tipo de dato. Se necesita para saber el valor por default de la variable.

        var DefaultValue = null;

         if (tipoDato == "string")
            DefaultValue = "";
         else if(tipoDato == "char")
            DefaultValue = '';
         else if(tipoDato == "int")
            DefaultValue = 0;
         else if(tipoDato == "boolean")
            DefaultValue = true;
         else if (tipoDato == "float")
            DefaultValue = 0.0;
         else
            DefaultValue = null; //Porque se trataria de una variable que almacena una clase.

        for (var b = 0;b<contexto.IDENTIFIER().length;b++){
            almacenGlobal.push(new Variable(contexto.IDENTIFIER(b).getSymbol().text,DefaultValue,contexto));
        }
    }

    for (var k = 0; k < ctx.classDecl().length; k++)
    {
        this.visit(ctx.classDecl(k));
    }

    for (var l = 0; l < ctx.methodDecl().length; l++)
    {
        this.visit(ctx.methodDecl(l));
    }

    almacenGlobal.forEach(function (object) {
        if (object instanceof Metodo){
            console.log("El metodo "+object.nombre+" tiene "+object.variablesLocales.length+" variables locales declaradas");
        }

        if (object instanceof Clase){
            console.log("Encontre clase '"+object.nombre+"' y tiene "+object.atributos.length+" atributos");
        }

        if(object instanceof Variable){
            cont++;
        }
    });
    console.log("Se encontraron "+ cont + " VARIABLES GLOBALES");
    return almacenGlobal; //se retorna el almacen con todas las variables ya creadas.
};


// Visit a parse tree produced by miniCSharpParser#constDeclaRule.
InterpreteCollector.prototype.visitConstDeclaRule = function(ctx) {

    //CONST type IDENTIFIER ASIGN ( NUMBER | CHARCONST ) PyCOMA
    var tipo = this.visit(ctx.type()); //Se obtiene el tipo de la declaración.
    var identifierName = ctx.IDENTIFIER().getSymbol().text;
    var DefaultValue = null;

    if (ctx.NUMBER() !== null){
        var contenido = ctx.NUMBER().getSymbol().text;
        if (contenido.indexOf(".") === -1){
            DefaultValue = 0;
        }
        else{
            DefaultValue = 0.0;
        }
    }else if(ctx.CHARCONST() !== null) {
        DefaultValue = '';
    }

    almacenGlobal.push(new Variable(identifierName,DefaultValue,ctx));
};


// Visit a parse tree produced by miniCSharpParser#varDeclaRule.
InterpreteCollector.prototype.visitVarDeclaRule = function(ctx) {
    return ctx;//type (CORCHETEIZQ CORCHETEDER)? IDENTIFIER ( COMA IDENTIFIER )* PyCOMA
};


// Visit a parse tree produced by miniCSharpParser#classDeclRule.
InterpreteCollector.prototype.visitClassDeclRule = function(ctx) {

    alert("entro");

    //CLASS IDENTIFIER BRACKETIZQ ( varDecl )* BRACKETDER
    var className = ctx.IDENTIFIER().getSymbol().text;

    var objetoClase = new Clase(className,ctx);

    for (var j = 0; j < ctx.varDecl().length; j++)
    {
        var contexto = this.visit(ctx.varDecl(j));//type (CORCHETEIZQ CORCHETEDER)? IDENTIFIER ( COMA IDENTIFIER )* PyCOMA
        var tipoDato = this.visit(contexto.type()); //Devuelve el tipo de dato. Se necesita para saber el valor por default de la variable.

        var DefaultValue = null;

        if (tipoDato == "string")
            DefaultValue = "";
        else if(tipoDato == "char")
            DefaultValue = '';
        else if(tipoDato == "int")
            DefaultValue = 0;
        else if(tipoDato == "boolean")
            DefaultValue = true;
        else if (tipoDato == "float")
            DefaultValue = 0.0;
        else
            DefaultValue = null; //Porque se trataria de una variable que almacena una clase.

        for (var b = 0;b<contexto.IDENTIFIER().length;b++){
            //Se guarda cada atributo
            objetoClase.atributos.push(new Variable(contexto.IDENTIFIER(b).getSymbol().text,DefaultValue,contexto));
        }
    }

    almacenGlobal.push(objetoClase);

    return null;
};


// Visit a parse tree produced by miniCSharpParser#methodDeclRule.
InterpreteCollector.prototype.visitMethodDeclRule = function(ctx) {
    //( type | VOID ) IDENTIFIER PIZQ formPars? PDER ( varDecl )* block

    var nombreMetodo = ctx.IDENTIFIER().getSymbol().text;
    var parametros = [];
    var variablesLocales = [];

    if (ctx.formPars() !== null){
        parametros = this.visit(ctx.formPars());
    }

    for (var j = 0; j < ctx.varDecl().length; j++)
    {
        var contexto = this.visit(ctx.varDecl(j));//type (CORCHETEIZQ CORCHETEDER)? IDENTIFIER ( COMA IDENTIFIER )* PyCOMA
        var tipoDato = this.visit(contexto.type()); //Devuelve el tipo de dato. Se necesita para saber el valor por default de la variable.

        var DefaultValue = null;

        if (tipoDato == "string")
            DefaultValue = "";
        else if(tipoDato == "char")
            DefaultValue = '';
        else if(tipoDato == "int")
            DefaultValue = 0;
        else if(tipoDato == "boolean")
            DefaultValue = true;
        else if (tipoDato == "float")
            DefaultValue = 0.0;
        else
            DefaultValue = null; //Porque se trataria de una variable que almacena una clase.

        for (var b = 0;b<contexto.IDENTIFIER().length;b++){
            variablesLocales.push(new Variable(contexto.IDENTIFIER(b).getSymbol().text,DefaultValue,contexto));
        }
    }

    var cuerpoDeMetodo = this.visit(ctx.block()); //Se obtiene el contexto del cuerpo del metodo(blockContext).

    var objetoMetodo = new Metodo(nombreMetodo,cuerpoDeMetodo);
    objetoMetodo.parametros = parametros;
    objetoMetodo.variablesLocales = variablesLocales;

    almacenGlobal.push(objetoMetodo);
    return null;
};


// Visit a parse tree produced by miniCSharpParser#formParamsRule.
InterpreteCollector.prototype.visitFormParamsRule = function(ctx) {

    //type IDENTIFIER ( COMA type IDENTIFIER )*

    var parametros = [];

    for (var i=0; i < ctx.IDENTIFIER().length; i++)
    {
        var tipoDato = this.visit(ctx.type(i));
        var nombreIdentificador = ctx.IDENTIFIER(i).getSymbol().text;

        var DefaultValue = null;

        if (tipoDato == "string")
            DefaultValue = "";
        else if(tipoDato == "char")
            DefaultValue = '';
        else if(tipoDato == "int")
            DefaultValue = 0;
        else if(tipoDato == "boolean")
            DefaultValue = true;
        else if (tipoDato == "float")
            DefaultValue = 0.0;
        else
            DefaultValue = null; //Porque se trataria de una variable que almacena una clase.

        var parametro = new Variable(nombreIdentificador,DefaultValue,null);
        parametros.push(parametro);
    }

    return parametros; //Se retorna la lista con las definiciones de parámetros.
};


// Visit a parse tree produced by miniCSharpParser#typeIdentifierRule.
InterpreteCollector.prototype.visitTypeIdentifierRule = function(ctx) {
    return ctx.IDENTIFIER().getSymbol().text;
};


// Visit a parse tree produced by miniCSharpParser#typeCharDeclRule.
InterpreteCollector.prototype.visitTypeCharDeclRule = function(ctx) {
    return "char";
};


// Visit a parse tree produced by miniCSharpParser#typeIntDeclRule.
InterpreteCollector.prototype.visitTypeIntDeclRule = function(ctx) {
    return "int";
};


// Visit a parse tree produced by miniCSharpParser#typeFloatDeclRule.
InterpreteCollector.prototype.visitTypeFloatDeclRule = function(ctx) {
    return "float";
};


// Visit a parse tree produced by miniCSharpParser#typeBooleanDeclRule.
InterpreteCollector.prototype.visitTypeBooleanDeclRule = function(ctx) {
    return "boolean";
};


// Visit a parse tree produced by miniCSharpParser#typeStringDeclRule.
InterpreteCollector.prototype.visitTypeStringDeclRule = function(ctx) {
    return "string";
};


// Visit a parse tree produced by miniCSharpParser#statDesignatorRule.
InterpreteCollector.prototype.visitStatDesignatorRule = function(ctx) {
    //designator ( ASIGN expr | PIZQ actPars? PDER  | DOBLEMAS | DOBLEMENOS ) PyCOMA

    var designatorContext = this.visit(ctx.designator());

    if(ctx.ASIGN){

    }

    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statIfRule.
InterpreteCollector.prototype.visitStatIfRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statForRule.
InterpreteCollector.prototype.visitStatForRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statWhileRule.
InterpreteCollector.prototype.visitStatWhileRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statForeachRule.
InterpreteCollector.prototype.visitStatForeachRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statBreakRule.
InterpreteCollector.prototype.visitStatBreakRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statReturnRule.
InterpreteCollector.prototype.visitStatReturnRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statReadRule.
InterpreteCollector.prototype.visitStatReadRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statWriteRule.
InterpreteCollector.prototype.visitStatWriteRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statBlockRule.
InterpreteCollector.prototype.visitStatBlockRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statPyComaRule.
InterpreteCollector.prototype.visitStatPyComaRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#blockRule.
InterpreteCollector.prototype.visitBlockRule = function(ctx) {
    //BRACKETIZQ ( statement )* BRACKETDER
    return ctx;
};


// Visit a parse tree produced by miniCSharpParser#actParsRule.
InterpreteCollector.prototype.visitActParsRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#conditionnRule.
InterpreteCollector.prototype.visitConditionnRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#condTermRule.
InterpreteCollector.prototype.visitCondTermRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#condFactRule.
InterpreteCollector.prototype.visitCondFactRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#exprRule.
InterpreteCollector.prototype.visitExprRule = function(ctx) {
    alert("jaja");
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#termRule.
InterpreteCollector.prototype.visitTermRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#factDesignatorRule.
InterpreteCollector.prototype.visitFactDesignatorRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#factNumberRule.
InterpreteCollector.prototype.visitFactNumberRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#factCharConstRule.
InterpreteCollector.prototype.visitFactCharConstRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#factTrueOrFalseRule.
InterpreteCollector.prototype.visitFactTrueOrFalseRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#factNewRule.
InterpreteCollector.prototype.visitFactNewRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#factExpreRule.
InterpreteCollector.prototype.visitFactExpreRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#designatorRule.
InterpreteCollector.prototype.visitDesignatorRule = function(ctx) {
    //IDENTIFIER ( POINT IDENTIFIER | CORCHETEIZQ expr CORCHETEDER )*



    return ctx;
};


// Visit a parse tree produced by miniCSharpParser#relopIgualigualRule.
InterpreteCollector.prototype.visitRelopIgualigualRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#relopDiferenteRule.
InterpreteCollector.prototype.visitRelopDiferenteRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#relopMayorqueRule.
InterpreteCollector.prototype.visitRelopMayorqueRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#relopMayorigualqueRule.
InterpreteCollector.prototype.visitRelopMayorigualqueRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#relopMenorQueRule.
InterpreteCollector.prototype.visitRelopMenorQueRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#relopMenorigualqueRule.
InterpreteCollector.prototype.visitRelopMenorigualqueRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#addopMasRule.
InterpreteCollector.prototype.visitAddopMasRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#addopMenosRule.
InterpreteCollector.prototype.visitAddopMenosRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#mulopMulRule.
InterpreteCollector.prototype.visitMulopMulRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#mulOpDivRule.
InterpreteCollector.prototype.visitMulOpDivRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#mulOpdivmodularRule.
InterpreteCollector.prototype.visitMulOpdivmodularRule = function(ctx) {
    return this.visitChildren(ctx);
};



exports.InterpreterCollector = InterpreteCollector;
