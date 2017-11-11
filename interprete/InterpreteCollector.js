/**
 * Created by BryanH on 31/10/2017.
 **/

var collectorVisitor = require('../generated/miniCSharpParserVisitor').miniCSharpParserVisitor;

//se llama asi -- operadores[signo](2,3)
var operadores = {"+": function (x,y) {return x + y;},
                  "-": function (x,y) {return x - y;},
                  "*": function (x,y) {return x * y},
                  "/": function (x,y) {return x / y;},
                  "%": function (x,y) {return x / y;}
};

//Constructor para el objeto AlmacenLocal
function AlmacenLocal() { //representa el almacen local de una función.
    this.identifiers = []; //se guardara una lista de parametros y una lista con variables locales. todas de tipo Variable.
    this.pilaDeExpresiones = [];

    this.buscar = function (nombre) {
        for (var i = 0; i < this.identifiers.length; i++) {
            for (var j = 0; j < this.identifiers[i].length; j++) {
                if (this.identifiers[i][j].nombre == nombre) {
                    return this.identifiers[i][j];
                }
            }
        }
        return null;
    };
}

var almacenGlobal = [];
var ejecutar = false;
var pilaDeLlamadas = [];//Esta pila cargara objetos de tipo Método(El metodo que este en el tope de la pila es el que esta ejecutando, cada metodo tiene su propio almacen local).
var salirPorBreakOReturn = false; //bandera que indica si se debe cortar la lectura de statements de un método(a causa de un break o un return).
var ejecuntandoBlockAnidado = false;

function Variable(nombre,valor,ctx){
    this.nombre = nombre;
    this.valor = valor; //valor que toma la variable. ESte valor puede ser un objeto del tipo clase, es decir una instanciacion de alguna clase.
    this.contexto = ctx;
}

function Clase(nombre,ctx){
    this.nombre = nombre;
    this.atributos = []; //se guardan objetos de tipo variable.
    this.contexto = ctx;

    this.buscarAtributos = function (nombre) {
        for(var i = 0; i < this.atributos.length; i++){
            if(this.atributos[i].nombre == nombre){
                return this.atributos[i];
            }
        }
        return null;
    }
}

function Metodo(nombre,bodyContext) {
    this.nombre = nombre;
    this.parametros = []; //parametros de la función.
    this.variablesLocales = []; //variables locales declaradas en el método.
    this.blockContext = bodyContext; //Se utiliará para ejecutar el cuerpo del metodo haciendo visit a este contexto.

    this.almacenLocal = null; //guardara un objeto que representa el almacen local de un metodo.
    //Este se instancia cada vez que se ingresa a ejecutar statements en un metodo, en la regla block.
}

// This class defines a complete generic visitor for a parse tree produced by miniCSharpParser.
function InterpreteCollector() {
    almacenGlobal = [];
    ejecutar = false; //se indica que no se entrara en modo de ejecucion sino de recoleccion para el almacen.
    salirPorBreakOReturn = false;
    ejecuntandoBlockAnidado = false;
    collectorVisitor.call(this);
    return this;
}

InterpreteCollector.prototype = Object.create(collectorVisitor.prototype);
InterpreteCollector.prototype.constructor = InterpreteCollector;

//Busca variables en el metodo que se este ejecutando actualmente.
InterpreteCollector.prototype.buscarLocal = function (nombre) {
    var metodoActual = pilaDeLlamadas[pilaDeLlamadas.length-1]; //Se obtiene el metodo en el tope de la pila.

    alert("Se esta buscando el metodo " + nombre);

    var variableLocal = metodoActual.almacenLocal.buscar(nombre);

    alert(variableLocal instanceof Array);

    return variableLocal;
};

InterpreteCollector.prototype.buscarGlobal = function (nombre) {
    for (var i = 0; i < almacenGlobal.length; i++) {
        if (almacenGlobal[i].nombre == nombre) {
            return almacenGlobal[i];
        }
    }
    return null;
};

//Busca local y globalmente y retorna null en caso de no encontrar nada o el objeto variable encontrado.
InterpreteCollector.prototype.buscarLocalYglobalmente = function (nombre) {
    var local = this.buscarLocal(nombre);
    var global = this.buscarGlobal(nombre);

    if (local != null){
        return local;
    }
    if(global != null){
        return global;
    }

    return null;
};


InterpreteCollector.prototype.resetearAlmacen = function () {
    almacenGlobal = [];
};

InterpreteCollector.prototype.activarEjecucion = function () {
    ejecutar = true;
};

InterpreteCollector.prototype.obtenerMetodos = function () {
    var lista = [];
    almacenGlobal.forEach(function (object) {
        if (object instanceof Metodo){
            lista.push(object);
        }
    });
    return lista; //retorna la lista de metodos recolectados.
};

InterpreteCollector.prototype.copiarVariables = function (arregloAcopiar) {
    var copia = [];
    arregloAcopiar.forEach(function (objetoVariable) {
        //Se asume que todos los objetos en el arreglo son del tipo Variable.
        copia.push(new Variable(objetoVariable.nombre,objetoVariable.valor,objetoVariable.contexto));
    });
    return copia; //retorna la lista de variables copiadas.
};

// Visit a parse tree produced by miniCSharpParser#programN.
InterpreteCollector.prototype.visitProgramN = function(ctx) {

    for (var i = 0; i < ctx.constDecl().length; i++)
    {
        this.visit(ctx.constDecl(i));
    }

    for (var j = 0; j < ctx.varDecl().length; j++)
    {
        var contexto = this.visit(ctx.varDecl(j));//type (CORCHETEIZQ CORCHETEDER)? IDENTIFIER ( COMA IDENTIFIER )* PyCOMA
        var tipoDato = this.visit(contexto.type());//Devuelve el tipo de dato. Se necesita para saber el valor por default de la variable.

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

        if (contexto.CORCHETEIZQ() !== null){
            for (var b = 0;b<contexto.IDENTIFIER().length;b++){
                var variableArreglo = new Variable(contexto.IDENTIFIER(b).getSymbol().text,[],contexto);
                almacenGlobal.push(variableArreglo);
            }
        }else{
            for (var c = 0;c<contexto.IDENTIFIER().length;c++){
                almacenGlobal.push(new Variable(contexto.IDENTIFIER(c).getSymbol().text,DefaultValue,contexto));
            }
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
    });
    return almacenGlobal; //se retorna el almacen con todas las variables ya creadas.
};


// Visit a parse tree produced by miniCSharpParser#constDeclaRule.
InterpreteCollector.prototype.visitConstDeclaRule = function(ctx) {

    //CONST type IDENTIFIER ASIGN ( NUMBER | CHARCONST ) PyCOMA
    var tipo = this.visit(ctx.type()); //Se obtiene el tipo de la declaración.
    var identifierName = ctx.IDENTIFIER().getSymbol().text;
    var valorDeConstante = null;

    if (ctx.NUMBER() !== null){
        var contenido = ctx.NUMBER().getSymbol().text;
        if (contenido.indexOf(".") === -1){
            valorDeConstante = parseInt(contenido);
        }
        else{
            valorDeConstante = parseFloat(contenido);
        }
    }else if(ctx.CHARCONST() !== null) {
        valorDeConstante = ctx.CHARCONST().getSymbol().text;
    }

    almacenGlobal.push(new Variable(identifierName,valorDeConstante,ctx));
};


// Visit a parse tree produced by miniCSharpParser#varDeclaRule.
InterpreteCollector.prototype.visitVarDeclaRule = function(ctx) {
    return ctx;//type (CORCHETEIZQ CORCHETEDER)? IDENTIFIER ( COMA IDENTIFIER )* PyCOMA
};


// Visit a parse tree produced by miniCSharpParser#classDeclRule.
InterpreteCollector.prototype.visitClassDeclRule = function(ctx) {

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
            //Se guarda cada atributo.
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

    cuerpoDeMetodo["nombreDeMetodo"] = nombreMetodo; //se guarda el nombre del metodo al que pertenec el cuerpo del método.

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

    /*
    Porque seguramente este statement pertenece a un for o while y su contexto(ctx) se utiliza para saber si es DOBLEMAS Ó
    DOBLEMENOS para saber si se incrementa o decrementa el ciclo o for que se ejecutará.
     */
    if (ejecuntandoBlockAnidado){
        return ctx;
    }
    else{
        var designatorContext = this.visit(ctx.designator());
        //IDENTIFIER ( POINT IDENTIFIER | CORCHETEIZQ expr CORCHETEDER )*

        var identDesignator = designatorContext.IDENTIFIER(0);

        var puntosDespuesDelPrimerIdentificador = designatorContext.POINT().length;
        var corchetesDespuesDelPrimerIdentificador = designatorContext.CORCHETEIZQ().length;

        if(puntosDespuesDelPrimerIdentificador > 0) {

            var variableConClase = this.buscarLocalYglobalmente(identDesignator);
            var nombreAtributo = designatorContext.IDENTIFIER(1);
            var objetoVariable = variableConClase.valor.buscarAtributos(nombreAtributo);

            if (ctx.ASIGN() !== null){ //Se asignara algun valor a un atributo de clase.
                var valorAasignar = this.visit(ctx.expr());
                alert("Se asignó a un atributo de clase el valor"+ valorAasignar);
                objetoVariable.valor = valorAasignar;
                alert(objetoVariable.valor);
            }

            if(ctx.DOBLEMAS() !== null){
                alert("Se aumento una unidad el atributo de la clase");
                objetoVariable.valor += 1;
            }

            if(ctx.DOBLEMENOS() !== null){
                alert("Se decremento una unidad el atributo de la clase");
                objetoVariable.valor += -1;
            }
        }else if(corchetesDespuesDelPrimerIdentificador > 0){ //si es una asignacion a un arreglo.
            var variableQueAlmacenaArreglo = this.buscarLocalYglobalmente(identDesignator);
            var valorEntreCorchetes = this.visit(designatorContext.expr()); //indice del elemento del arreglo al que se le va a realizar alguna operacion.

            if (ctx.ASIGN() !== null){ //Se asignara algun valor a un atributo de clase.
                var valorDelELemento = this.visit(ctx.expr());
                variableQueAlmacenaArreglo.valor[valorEntreCorchetes] = valorDelELemento;
                alert("SE asigno valor al indice de un arreglo"+ valorDelELemento+" en el indice "+valorEntreCorchetes);
            }

            if(ctx.DOBLEMAS() !== null){
                alert("Se aumento una unidad el elemento de un arreglo");
                variableQueAlmacenaArreglo.valor[valorEntreCorchetes] += 1;
            }

            if(ctx.DOBLEMENOS() !== null){
                alert("Se decrementa una unidad el elemento del arreglo");
                variableQueAlmacenaArreglo.valor[valorEntreCorchetes] -= 1;
            }
        }
        else{ //Si no existe un punto ni un corchete quiere decir que se trata de una variable normal.
            var variableNormal = this.buscarLocalYglobalmente(identDesignator);

            if (ctx.ASIGN() !== null){
                variableNormal.valor = this.visit(ctx.expr()); //Puede ser un valor primitivo o un objeto tipo clase.
                alert("Se asignó "+variableNormal.valor+" a la variable "+variableNormal.nombre);
            }

            if (ctx.PIZQ() !== null){ //Se hara una llamada a funcion.
                var objetoMetodo = this.buscarGlobal(identDesignator);// se obtiene el objeto metodo de la declaracion.

                //Se setean los parametros que vienen en actPars

                if (ctx.actPars() !== null){//si la llamada a metodo es con parametros.

                }

                this.visitBlockRule(objetoMetodo.blockContext);//Se llama el visit block con el contexto del metodo ya declarado.
                alert("Termino la ejecucion del método " + objetoMetodo.nombre);
            }

            if (ctx.DOBLEMAS() !== null){ //Se hará un incremento a la variable.
                alert("Se incremento en 1 el valor de la variable "+variableNormal.nombre);
                variableNormal.valor += 1;
            }

            if (ctx.DOBLEMENOS() !== null){ //Se hara un decremento a una variable.
                alert("Se decrementó en 1 el valor de la variable "+variableNormal.nombre);
                variableNormal.valor += -1;
            }
        }
    }

    return null;
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
    salirPorBreakOReturn = true;
    var metodoEjecutandose = pilaDeLlamadas[pilaDeLlamadas.length-1];
    metodoEjecutandose.almacenLocal.pilaDeExpresiones.push(null);
    return null;
};


// Visit a parse tree produced by miniCSharpParser#statReturnRule.
InterpreteCollector.prototype.visitStatReturnRule = function(ctx) {

    //RETURN expr? PyCOMA

    salirPorBreakOReturn = true; //se indica que el metodo en el tope de la pila de llamadas debe terminar por una instruccion return.

    var metodoEjecutandose = pilaDeLlamadas[pilaDeLlamadas.length-1];
    var resultadoExpresion = null;

    if (ctx.expr() != null){
        resultadoExpresion = this.visit(ctx.expr());
    }

    metodoEjecutandose.almacenLocal.pilaDeExpresiones.push(resultadoExpresion);

    return null;
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

    ejecuntandoBlockAnidado = true; //Se indica que es un bloke pero no pertenece al cuerpo de un metodo.

    this.visit(ctx.block());

    ejecuntandoBlockAnidado = false; //Se deja la bandera como estaba para que pueda ser utilizada por otros.

    return null;
};


// Visit a parse tree produced by miniCSharpParser#statPyComaRule.
InterpreteCollector.prototype.visitStatPyComaRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#blockRule.
InterpreteCollector.prototype.visitBlockRule = function(ctx) {
    //BRACKETIZQ ( statement )* BRACKETDER

    if (ejecutar){

        if (ejecuntandoBlockAnidado){ //si el block va a pertenecer a un statement tipo IF o FOR O WHILE, etc...
            for (var x=0; x < ctx.statement().length; x++)
            {
                this.visit(ctx.statement(x));
            }
        }
        else{
            var objetoMetodoOriginal = this.buscarGlobal(ctx.nombreDeMetodo);

            var copiaVariablesLocales = this.copiarVariables(objetoMetodoOriginal.variablesLocales);
            var copiaParametros = this.copiarVariables(objetoMetodoOriginal.parametros);

            var copiaObjetoMetodo = new Metodo(objetoMetodoOriginal.nombre,objetoMetodoOriginal.blockContext);
            copiaObjetoMetodo.parametros = copiaParametros;
            copiaObjetoMetodo.variablesLocales = copiaVariablesLocales;


            copiaObjetoMetodo.almacenLocal = new AlmacenLocal(); //se crea un almacen local para el metodo que corre actualmente.
            copiaObjetoMetodo.almacenLocal.identifiers.push(copiaObjetoMetodo.parametros);
            copiaObjetoMetodo.almacenLocal.identifiers.push(copiaObjetoMetodo.variablesLocales);


            pilaDeLlamadas.push(copiaObjetoMetodo); //en el tope de la pila de llamadas se encuentra el metodo que esta ejecutando.

            for (var i=0; i < ctx.statement().length; i++)
            {
                this.visit(ctx.statement(i));

                //Aqui se debe cortar la lectura de statements en caso de que haya un return dentro del cuerpo del metodo.
                if (salirPorBreakOReturn){
                    var metodoEjecutandose = pilaDeLlamadas.pop();
                    salirPorBreakOReturn = false;
                    return metodoEjecutandose.almacenLocal.pilaDeExpresiones.pop();
                }
            }
            pilaDeLlamadas.pop(); //El metodo finalisa y se quita de la pila de llamadas.
        }
        //return null;
    }
    else{
        return ctx;
    }

    return null;
};

// Visit a parse tree produced by miniCSharpParser#actParsRule.
InterpreteCollector.prototype.visitActParsRule = function(ctx) {
    //expr ( COMA expr )*
    var parametrosAretornar = [];

    for (var j = 0; j < ctx.expr().length; j++)
    {
        var valor = this.visit(ctx.expr(j));
        parametrosAretornar.push(valor);
    }

    return parametrosAretornar;
};


// Visit a parse tree produced by miniCSharpParser#conditionnRule.
InterpreteCollector.prototype.visitConditionnRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#condTermRule.
InterpreteCollector.prototype.visitCondTermRule = function(ctx) {
    return this.visitChildrn(ctx);
};


// Visit a parse tree produced by miniCSharpParser#condFactRule.
InterpreteCollector.prototype.visitCondFactRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#exprRule.
InterpreteCollector.prototype.visitExprRule = function(ctx) {
    //MENOS? term ( addop term )*

    //Como la expresion pertenece a algun scope de algun metodo entonces se obtiene dicho metodo
    var metodoActual = pilaDeLlamadas[pilaDeLlamadas.length-1]; //Se optiene el elemento en el tope de la pila de llamadas.

    var valorInicial = this.visit(ctx.term(0));

    var listaOPeradores = [];

    for (var x=0; x < ctx.addop().length; x++)
    {
        var operadorAddOp = this.visit(ctx.addop(x));
        listaOPeradores.push(operadorAddOp);
    }

    metodoActual.almacenLocal.pilaDeExpresiones.push(valorInicial);

    if (listaOPeradores.length > 0){ //si existe algun operador de suma o resta.
        for (var i=1; i <= ctx.term().length-1; i++)
        {
            var valorVariante = this.visit(ctx.term(i));
            var valorAnt = metodoActual.almacenLocal.pilaDeExpresiones.pop();

            var operador = listaOPeradores[i-1]; //se obtiene "+" o "-"

            metodoActual.almacenLocal.pilaDeExpresiones.push(operadores[operador](valorAnt,valorVariante));
        }
    }

    return metodoActual.almacenLocal.pilaDeExpresiones.pop(); //se retorna el resultado que quedo en la pila y de una vez queda vacía la pila del almacen local.
};


// Visit a parse tree produced by miniCSharpParser#termRule.
InterpreteCollector.prototype.visitTermRule = function(ctx) {
    //factor ( mulop factor )*

    //Como la expresion pertenece a algun scope de algun metodo entonces se obtiene dicho metodo
    var metodoActual = pilaDeLlamadas[pilaDeLlamadas.length-1]; //Se optiene el elemento en el tope de la pila de llamadas.

    var valorInicial = this.visit(ctx.factor(0));

    var listaOPeradores = [];

    for (var x=0; x < ctx.mulop().length; x++)
    {
        var operadorMulOp = this.visit(ctx.mulop(x));
        listaOPeradores.push(operadorMulOp);
    }

    metodoActual.almacenLocal.pilaDeExpresiones.push(valorInicial);

    if (listaOPeradores.length > 0){ //si existe algun operador de suma o resta.
        for (var i=1; i <= ctx.factor().length-1; i++)
        {
            var valorVariante = this.visit(ctx.factor(i));
            var valorAnt = metodoActual.almacenLocal.pilaDeExpresiones.pop();

            var operador = listaOPeradores[i-1]; //se obtiene "*" o "/" o "%"

            metodoActual.almacenLocal.pilaDeExpresiones.push(operadores[operador](valorAnt,valorVariante));
        }
    }

    return metodoActual.almacenLocal.pilaDeExpresiones.pop();
};


// Visit a parse tree produced by miniCSharpParser#factDesignatorRule.
InterpreteCollector.prototype.visitFactDesignatorRule = function(ctx) {
    alert("falta el valor de retorno despues del asign");
    return null;
};

// Visit a parse tree produced by miniCSharpParser#factNumberRule.
InterpreteCollector.prototype.visitFactNumberRule = function(ctx) {
    var contenido = ctx.NUMBER().getSymbol().text;
    var numero = null;
    if (contenido.indexOf(".") === -1){
        numero = parseInt(contenido);
    }
    else{
        numero = parseFloat(contenido);
    }
    return numero;
};


// Visit a parse tree produced by miniCSharpParser#factCharConstRule.
InterpreteCollector.prototype.visitFactCharConstRule = function(ctx) {
    return ctx.CHARCONST().getSymbol().text; //Retorna el caracter.
};


// Visit a parse tree produced by miniCSharpParser#factTrueOrFalseRule.
InterpreteCollector.prototype.visitFactTrueOrFalseRule = function(ctx) {

    //(TRUE | FALSE)
    if(ctx.TRUE() !== null){
        return true;
    }
    return false;
};

// Visit a parse tree produced by miniCSharpParser#factNewRule.
InterpreteCollector.prototype.visitFactNewRule = function(ctx) {

    var clase = this.buscarGlobal(ctx.IDENTIFIER().getSymbol().text); //Se obtiene el objeto clase.

    var instancia =  new Clase(clase.nombre,clase.contexto);

    var atrib = []; //se guardaran los atributos de la clase.

    for(var i = 0; i < clase.atributos.length; i++){
        atrib.push(new Variable(clase.atributos[i].nombre),clase.atributos[i].valor,clase.atributos[i].contexto);
    }
    instancia.atributos = atrib;

    return instancia;
};

// Visit a parse tree produced by miniCSharpParser#factExpreRule.
InterpreteCollector.prototype.visitFactExpreRule = function(ctx) {
    return this.visit(ctx.expr()); //se retorna el valor devuelto por el visit de la expresion expr.
};

InterpreteCollector.prototype.visitFactNewArrayRule = function(ctx) {


    //NEW type CORCHETEIZQ expr CORCHETEDER
    var tipo = this.visit(ctx.type());

    var arregloPorDefault = [];

    var valorPorDefecto = null;

    switch(tipo) {
        case "int":
            valorPorDefecto = 0;
            break;
        case "char":
            valorPorDefecto = '';
            break;
        case "float":
            valorPorDefecto = 0.0;
            break;
        case "boolean":
            valorPorDefecto = true;
            break;
        case "string":
            valorPorDefecto = "";
            break;
        default:
            valorPorDefecto = null;
    }

    var tamanoArreglo = this.visit(ctx.expr()); //devuelve la cantidad de elementos que tendrá el arreglo.

    for(var i = 0; i < tamanoArreglo; i++){
        arregloPorDefault.push(valorPorDefecto);
    }

    return arregloPorDefault; //retorna la instancia del arreglo con los valores por defecto.
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
    return "+";
};


// Visit a parse tree produced by miniCSharpParser#addopMenosRule.
InterpreteCollector.prototype.visitAddopMenosRule = function(ctx) {
    return "-";
};


// Visit a parse tree produced by miniCSharpParser#mulopMulRule.
InterpreteCollector.prototype.visitMulopMulRule = function(ctx) {
    return "*";
};


// Visit a parse tree produced by miniCSharpParser#mulOpDivRule.
InterpreteCollector.prototype.visitMulOpDivRule = function(ctx) {
    return "/";
};


// Visit a parse tree produced by miniCSharpParser#mulOpdivmodularRule.
InterpreteCollector.prototype.visitMulOpdivmodularRule = function(ctx) {
    return "%";
};



exports.InterpreterCollector = InterpreteCollector;
