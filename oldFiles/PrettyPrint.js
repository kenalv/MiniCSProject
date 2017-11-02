// Generated from C:/Users/BryanH/IdeaProjects/miniCSharpEnJavaScript\miniCSharpParser.g4 by ANTLR 4.7
// jshint ignore: start

var parserVisitor = require('../parserVisitor/miniCSharpParserVisitor').miniCSharpParserVisitor;
var componente = null; //Componentes donde se imprimiran los resultados en la vista html.

// This class defines a complete generic visitor for a parse tree produced by miniCSharpParser.

function PrettyPrint(comp) {
    parserVisitor.call(this);
    componente = comp;
	return this;
}

PrettyPrint.prototype = Object.create(parserVisitor.prototype);
PrettyPrint.prototype.constructor = PrettyPrint;

var cont=0;

function printtab(n)
{
    for(var num=n; num !== 0; num--)
        componente.value += "+++";
    componente.value += ">";
}

// Visit a parse tree produced by miniCSharpParser#programN.
PrettyPrint.prototype.visitProgramN = function(ctx) {
  printtab(cont);

  //alert("entro");

  componente.value += ctx.constructor.name +'\n';

  cont++;

    for (var i = 0; i < ctx.constDecl().length; i++)
    {
        //alert("entro a constdeclaration");
        //printtab(cont + 1);
        this.visit(ctx.constDecl(i));
        //componente.value += " TokenID --> " + ctx.methodDecl(i).text + '\n';
    }

    //alert("salio de constdeclaration");

    for (var j = 0; j < ctx.varDecl().length; j++)
    {
        //alert("entro a var declaration");
        //printtab(cont + 1);
        this.visit(ctx.varDecl(j));
        //componente.value += " TokenID --> " + ctx.methodDecl(i).text + '\n';
    }

    //alert("salio de varDeclaration");

    for (var k = 0; k < ctx.classDecl().length; k++)
    {
        //alert("va a entrar a classDeclaration");
        //printtab(cont + 1);
        this.visit(ctx.classDecl(k));
        //componente.value += " TokenID --> " + ctx.methodDecl(i).text + '\n';
    }

    //alert("paso classdeclaration");

  for (var l = 0; l < ctx.methodDecl().length; l++)
    {
        //printtab(cont + 1);
        this.visit(ctx.methodDecl(l));
        //componente.value += " TokenID --> " + ctx.methodDecl(i).text + '\n';
    }

  cont--;

  return null;
};

// Visit a parse tree produced by miniCSharpParser#constDeclaRule.
PrettyPrint.prototype.visitConstDeclaRule = function(ctx) {
  printtab(cont);

    componente.value += ctx.constructor.name +'\n';

    var tipo = this.visit(ctx.type()); //Se obtiene el tipo de la declaración.

    //alert("se obtuvo el tipo con éxito: "+ tipo);
    cont++;
    printtab(cont);

    componente.value += tipo + " " + ctx.IDENTIFIER().getSymbol().text + " = ";
    //alert(componente.value);

    if (ctx.NUMBER() !== null){
        componente.value += ctx.NUMBER().getSymbol().text;
    }
    else if(ctx.CHARCONST() !== null){
        componente.value += ctx.CHARCONST().getSymbol().text;
    }

    componente.value += '\n';

    cont--;

  //cont++;
  //this.visit(ctx.type());
  //cont--;

  return null;
};


// Visit a parse tree produced by miniCSharpParser#varDeclaRule.
PrettyPrint.prototype.visitVarDeclaRule = function(ctx) {
    printtab(cont);


    componente.value += ctx.constructor.name +'\n';

    cont++;
    printtab(cont);

    var tipo = this.visit(ctx.type()); //Se obtiene el tipo de la o las declaraciones.

    componente.value += tipo + " " + ctx.IDENTIFIER(0).getSymbol().text + " ";

    for (var i = 1; i <= ctx.IDENTIFIER().length-1; i++)
    {
        componente.value += ctx.IDENTIFIER(i).getSymbol().text + " ";
    }

    componente.value += ";" +'\n';

    cont--;

    return null;
};


// Visit a parse tree produced by miniCSharpParser#classDeclRule.
PrettyPrint.prototype.visitClassDeclRule = function(ctx) {
    printtab(cont);

    componente.value += ctx.constructor.name +'\n';

    cont++;
    printtab(cont);
    componente.value += "class "+ ctx.IDENTIFIER().getSymbol().text + '\n';
    for (var i = 0; i < ctx.varDecl().length; i++)
    {
        this.visit(ctx.varDecl(i));
    }

    cont--;

    return null;
};


// Visit a parse tree produced by miniCSharpParser#methodDeclRule.
PrettyPrint.prototype.visitMethodDeclRule = function(ctx) {
    printtab(cont);

    componente.value += ctx.constructor.name +'\n';

    cont++;

    printtab(cont);
    var tipo = null;

    if (ctx.type() !== null){
        tipo = this.visit(ctx.type());
    }

    if (tipo !== null){
        componente.value += tipo + " " + ctx.IDENTIFIER().getSymbol().text;
    }
    else{
        componente.value += "void " + ctx.IDENTIFIER().getSymbol().text;
    }

    componente.value += '\n';

    if (ctx.formPars() !== null){
        this.visit(ctx.formPars());
    }

    for (var i=0; i < ctx.varDecl().length; i++)
    {
        this.visit(ctx.varDecl(i));
    }

    this.visit(ctx.block());

    cont--;

    return null;
};


// Visit a parse tree produced by miniCSharpParser#formParamsRule.
PrettyPrint.prototype.visitFormParamsRule = function(ctx) {
  printtab(cont);

    componente.value += ctx.constructor.name +'\n';
    //alert (ctx.constructor.name);

  cont++;
  printtab(cont);
  var primerTipo = this.visit(ctx.type(0));
    componente.value += primerTipo + " " + ctx.IDENTIFIER(0).getSymbol().text;
  for (var i=1; i <= ctx.type().length-1; i++)
  {
      var otroTipo = " " + this.visit(ctx.type(i));
      componente.value += otroTipo + " " + ctx.IDENTIFIER(i).getSymbol().text;
  }
  componente.value += '\n';
  cont--;

};


// Visit a parse tree produced by miniCSharpParser#typeIdentifierRule.
PrettyPrint.prototype.visitTypeIdentifierRule = function(ctx) {

    printtab(cont);

    componente.value += ctx.constructor.name +'\n';

    cont++;
    printtab(cont);
    componente.value += " TokenID --> " + ctx.identifier().getSymbol().text + '\n';
    cont--;

    return null;
};


// Visit a parse tree produced by miniCSharpParser#typeCharDeclRule.
PrettyPrint.prototype.visitTypeCharDeclRule = function(ctx) {
  return 'char';
};


// Visit a parse tree produced by miniCSharpParser#typeIntDeclRule.
PrettyPrint.prototype.visitTypeIntDeclRule = function(ctx) {
  return "int";
};


// Visit a parse tree produced by miniCSharpParser#typeFloatDeclRule.
PrettyPrint.prototype.visitTypeFloatDeclRule = function(ctx) {
    return 'float';
};


// Visit a parse tree produced by miniCSharpParser#typeBooleanDeclRule.
PrettyPrint.prototype.visitTypeBooleanDeclRule = function(ctx) {
    return 'boolean';
};


// Visit a parse tree produced by miniCSharpParser#typeStringDeclRule.
PrettyPrint.prototype.visitTypeStringDeclRule = function(ctx) {
    return "string";
};


// Visit a parse tree produced by miniCSharpParser#statDesignatorRule.
PrettyPrint.prototype.visitStatDesignatorRule = function(ctx) {

    printtab(cont);
    componente.value += ctx.constructor.name +'\n';


    this.visit(ctx.designator());

    if (ctx.ASIGN() !== null){
        this.visit(ctx.expr());
    }
    else if(ctx.PIZQ() !== null){
        if (ctx.actPars() !== null){
            this.visit(ctx.actPars());
        }
    }
    else if(ctx.DOBLEMAS() !== null){

    }
    else if(ctx.DOBLEMENOS()){

    }


  return null;
};


// Visit a parse tree produced by miniCSharpParser#statIfRule.
PrettyPrint.prototype.visitStatIfRule = function(ctx) {

    printtab(cont);
    componente.value += ctx.constructor.name +'\n';

    //alert("Numero de statements: " + ctx.statement().length);

    if (ctx.ELSE() !== null){
        alert("Existe un else");
    }

    cont++;
    this.visit(ctx.condition());
    this.visit(ctx.statement());
    cont--;




  return null;
};


// Visit a parse tree produced by miniCSharpParser#statForRule.
PrettyPrint.prototype.visitStatForRule = function(ctx) {

    printtab(cont);
    componente.value += ctx.constructor.name +'\n';

    cont++;
    this.visit(ctx.expr());

    if (ctx.condition() !== null){
        this.visit(ctx.condition());
    }

    if (ctx.statement().length > 1){
        this.visit(ctx.statement(0));
        this.visit(ctx.statement(1));
    }
    else{
        this.visit(ctx.statement(0));
    }

    cont--;

  return null;
};


// Visit a parse tree produced by miniCSharpParser#statWhileRule.
PrettyPrint.prototype.visitStatWhileRule = function(ctx) {

    printtab(cont);
    componente.value += ctx.constructor.name +'\n';

    cont++;
    this.visit(ctx.condition());
    this.visit(ctx.statement());

    cont--;

  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statForeachRule.
PrettyPrint.prototype.visitStatForeachRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statBreakRule.
PrettyPrint.prototype.visitStatBreakRule = function(ctx) {

    printtab(cont);
    componente.value += ctx.constructor.name +'\n';

  return null;
};


// Visit a parse tree produced by miniCSharpParser#statReturnRule.
PrettyPrint.prototype.visitStatReturnRule = function(ctx) {
    printtab(cont);
    componente.value += ctx.constructor.name +'\n';

    cont++;
    if (ctx.expr() !== null){
        this.visit(ctx.expr());
    }
    cont--;

  return null;
};


// Visit a parse tree produced by miniCSharpParser#statReadRule.
PrettyPrint.prototype.visitStatReadRule = function(ctx) {

    printtab(cont);
    componente.value += ctx.constructor.name +'\n';

    this.visit(ctx.designator());

  return null;
};


// Visit a parse tree produced by miniCSharpParser#statWriteRule.
PrettyPrint.prototype.visitStatWriteRule = function(ctx) {

    printtab(cont);
    componente.value += ctx.constructor.name +'\n';

    cont++;
    this.visit(ctx.expr());
    cont--;

    if (ctx.NUMBER() !== null){
        alert("La instruccion WRITE lleva un numero como segundo parametro");
    }


  return null;
};


// Visit a parse tree produced by miniCSharpParser#statBlockRule.
PrettyPrint.prototype.visitStatBlockRule = function(ctx) {

    printtab(cont);
    componente.value += ctx.constructor.name +'\n';

    cont++;
    this.visit(ctx.block());
    cont--;

  return null;
};


// Visit a parse tree produced by miniCSharpParser#statPyComaRule.
PrettyPrint.prototype.visitStatPyComaRule = function(ctx) {

    printtab(cont);
    componente.value += ctx.constructor.name +'\n';

  return null;
};


// Visit a parse tree produced by miniCSharpParser#blockRule.
PrettyPrint.prototype.visitBlockRule = function(ctx) {
    printtab(cont);

    componente.value += ctx.constructor.name +'\n';

    cont++;
    for (i=0; i < ctx.statement().length; i++)
    {
        this.visit(ctx.statement(i));
    }
    cont--;

    return null;
};

// Visit a parse tree produced by miniCSharpParser#actParsRule.
PrettyPrint.prototype.visitActParsRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#conditionnRule.
PrettyPrint.prototype.visitConditionnRule = function(ctx) {


    printtab(cont);
    componente.value += ctx.constructor.name +'\n';

    cont++;
    this.visit(ctx.condTerm(0));
    for (var i = 1; i <= ctx.condTerm().length-1; i++)
    {
        this.visit(ctx.condTerm(i));
    }
    cont--;

  return null;
};

// Visit a parse tree produced by miniCSharpParser#condTermRule.
PrettyPrint.prototype.visitCondTermRule = function(ctx) {

    printtab(cont);
    componente.value += ctx.constructor.name +'\n';

    cont++;
    this.visit(ctx.condFact(0));
    for (var i = 1; i <= ctx.condFact().length-1; i++)
    {
        this.visit(ctx.condFact(i));
    }
    cont--;


    return null;
};


// Visit a parse tree produced by miniCSharpParser#condFactRule.
PrettyPrint.prototype.visitCondFactRule = function(ctx) {

    printtab(cont);
    componente.value += ctx.constructor.name +'\n';

    cont++;
    this.visit(ctx.expr(0));
    this.visit(ctx.expr(1));
    cont--;

  return null;
};


// Visit a parse tree produced by miniCSharpParser#exprRule.
PrettyPrint.prototype.visitExprRule = function(ctx) {

    printtab(cont);
    componente.value += ctx.constructor.name +'\n';

    alert(ctx.MENOS());

    cont++;
    this.visit(ctx.term(0));
    for (var i=1; i <= ctx.term().length-1; i++)
    {
        this.visit(ctx.term(i));
    }
    cont--;

  return null;
};


// Visit a parse tree produced by miniCSharpParser#termRule.
PrettyPrint.prototype.visitTermRule = function(ctx) {
    printtab(cont);
    componente.value += ctx.constructor.name +'\n';

    cont++;
    this.visit(ctx.factor(0));
    for (var i=1; i <= ctx.factor().length-1; i++)
    {
        this.visit(ctx.factor(i));
    }
    cont--;

  return null;
};


// Visit a parse tree produced by miniCSharpParser#factDesignatorRule.
PrettyPrint.prototype.visitFactDesignatorRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#factNumberRule.
PrettyPrint.prototype.visitFactNumberRule = function(ctx) {

    printtab(cont);
    componente.value += ctx.constructor.name +'\n';

    cont++;
    printtab(cont);
    componente.value += " NUMBER --> " + ctx.NUMBER().getSymbol().text + '\n';
    cont--;

  return null;
};


// Visit a parse tree produced by miniCSharpParser#factCharConstRule.
PrettyPrint.prototype.visitFactCharConstRule = function(ctx) {

    printtab(cont);
    componente.value += ctx.constructor.name +'\n';

    cont++;
    printtab(cont);
    componente.value += " CHARCONST --> " + ctx.CHARCONST().getSymbol().text + '\n';
    cont--;

  return null;
};


// Visit a parse tree produced by miniCSharpParser#factTrueOrFalseRule.
PrettyPrint.prototype.visitFactTrueOrFalseRule = function(ctx) {

    printtab(cont);
    componente.value += ctx.constructor.name +'\n';

    var boleano = null;

    if (ctx.TRUE !== false){
        booleano = "true";
    }
    else{
        booleano = "false";
    }

    cont++;
    printtab(cont);
    componente.value += " BOOLEAN --> " + booleano + '\n';
    cont--;

  return null;
};


// Visit a parse tree produced by miniCSharpParser#factNewRule.
PrettyPrint.prototype.visitFactNewRule = function(ctx) {

    printtab(cont);
    componente.value += ctx.constructor.name +'\n';

    cont++;
    printtab(cont);
    componente.value += " NEW " + ctx.IDENTIFIER().getSymbol().text + '\n';
    cont--;


    return null;
};


// Visit a parse tree produced by miniCSharpParser#factExpreRule.
PrettyPrint.prototype.visitFactExpreRule = function(ctx) {

    printtab(cont);
    componente.value += ctx.constructor.name +'\n';

    cont++;
    this.visit(ctx.expr());
    cont--;

  return null;
};


// Visit a parse tree produced by miniCSharpParser#designatorRule.
PrettyPrint.prototype.visitDesignatorRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#relopIgualigualRule.
PrettyPrint.prototype.visitRelopIgualigualRule = function(ctx) {

    printtab(cont);
    componente.value += ctx.constructor.name +'\n';

    cont++;
    printtab(cont);
    componente.value += " Operador relacional -->" + ctx.IGUALIGUAL().getSymbol().text + '\n';
    cont--;

  return null;
};


// Visit a parse tree produced by miniCSharpParser#relopDiferenteRule.
PrettyPrint.prototype.visitRelopDiferenteRule = function(ctx) {

    printtab(cont);
    componente.value += ctx.constructor.name +'\n';

    cont++;
    printtab(cont);
    componente.value += " Operador relacional -->" + ctx.DIFERENTE().getSymbol().text + '\n';
    cont--;

    return null;
};


// Visit a parse tree produced by miniCSharpParser#relopMayorqueRule.
PrettyPrint.prototype.visitRelopMayorqueRule = function(ctx) {

    printtab(cont);
    componente.value += ctx.constructor.name +'\n';

    cont++;
    printtab(cont);
    componente.value += " Operador relacional -->" + ctx.MAYORQUE().getSymbol().text + '\n';
    cont--;

    return null;
};


// Visit a parse tree produced by miniCSharpParser#relopMayorigualqueRule.
PrettyPrint.prototype.visitRelopMayorigualqueRule = function(ctx) {
    printtab(cont);
    componente.value += ctx.constructor.name +'\n';

    cont++;
    printtab(cont);
    componente.value += " Operador relacional -->" + ctx.MAYORIGUALQUE().getSymbol().text + '\n';
    cont--;

    return null;
};


// Visit a parse tree produced by miniCSharpParser#relopMenorQueRule.
PrettyPrint.prototype.visitRelopMenorQueRule = function(ctx) {
    printtab(cont);
    componente.value += ctx.constructor.name +'\n';

    cont++;
    printtab(cont);
    componente.value += " Operador relacional -->" + ctx.MENORQUE().getSymbol().text + '\n';
    cont--;

    return null;
};


// Visit a parse tree produced by miniCSharpParser#relopMenorigualqueRule.
PrettyPrint.prototype.visitRelopMenorigualqueRule = function(ctx) {
    printtab(cont);
    componente.value += ctx.constructor.name +'\n';

    cont++;
    printtab(cont);
    componente.value += " Operador relacional -->" + ctx.MENORIGUALQUE().getSymbol().text + '\n';
    cont--;

    return null;
};


// Visit a parse tree produced by miniCSharpParser#addopMasRule.
PrettyPrint.prototype.visitAddopMasRule = function(ctx) {

    printtab(cont);
    componente.value += ctx.constructor.name +'\n';

    cont++;
    printtab(cont);
    componente.value += " Operador matematico -->" + ctx.MAS().getSymbol().text + '\n';
    cont--;

    return null;
};


// Visit a parse tree produced by miniCSharpParser#addopMenosRule.
PrettyPrint.prototype.visitAddopMenosRule = function(ctx) {
    printtab(cont);
    componente.value += ctx.constructor.name +'\n';

    cont++;
    printtab(cont);
    componente.value += " Operador matematico -->" + ctx.MENOS().getSymbol().text + '\n';
    cont--;

    return null;
};


// Visit a parse tree produced by miniCSharpParser#mulopMulRule.
PrettyPrint.prototype.visitMulopMulRule = function(ctx) {
    printtab(cont);
    componente.value += ctx.constructor.name +'\n';

    cont++;
    printtab(cont);
    componente.value += " Operador matematico -->" + ctx.MUL().getSymbol().text + '\n';
    cont--;

    return null;
};


// Visit a parse tree produced by miniCSharpParser#mulOpDivRule.
PrettyPrint.prototype.visitMulOpDivRule = function(ctx) {

    printtab(cont);
    componente.value += ctx.constructor.name +'\n';

    cont++;
    printtab(cont);
    componente.value += " Operador matematico -->" + ctx.DIV().getSymbol().text + '\n';
    cont--;

    return null;
};


// Visit a parse tree produced by miniCSharpParser#mulOpdivmodularRule.
PrettyPrint.prototype.visitMulOpdivmodularRule = function(ctx) {

    printtab(cont);
    componente.value += ctx.constructor.name +'\n';

    cont++;
    printtab(cont);
    componente.value += " Operador matematico -->" + ctx.DIVMODULAR().getSymbol().text + '\n';
    cont--;

    return null;
};



exports.PrettyPrint = PrettyPrint;