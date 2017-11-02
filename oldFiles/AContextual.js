// Generated from C:/Users/BryanH/IdeaProjects/miniCSharpEnJavaScript\miniCSharpParser.g4 by ANTLR 4.7
// jshint ignore: start
var parserVisitor = require('../parserVisitor/miniCSharpParserVisitor').miniCSharpParserVisitor;
//var tablaS = require('../parserVisitor/TablaSimbolos');

function VariableToken(nombre,tipo,esConstante){
    this.nombre = nombre;
    this.tipo = tipo;
    this.esConstante = esConstante;
    this.esArreglo = false; //indica si la variable pertenece a un arreglo.
}

function ClassToken(nombre,atributos){
    this.nombre = nombre;
    this.atributos = atributos;//el parametro atributos es una lista con todos los atributos de la clase definida(una lista de tokens);
    this.buscarAtributo = function (nombre) {
        var temp=null;
        this.atributos.forEach(function(element){
            if (element.nombre === nombre)
                temp = element;
        });
        return temp;
    }
}

function ArrayToken(nombre, tipo){
    this.nombre = nombre;
    this.tipo = tipo;
}

function MethodToken(nombre,tipo,parametros){
    this.nombre = nombre;
    this.tipo = tipo;
    this.parametros = parametros;
}

function Ident(tok, decl,nivel){
    this.token = tok;
    this.nivel = nivel;
    this.declaration = decl;
}

function TablaSimbolos(){

    this.tablaVariables = [];
    this.tablaEstructuras = [];
    this.tablaMetodos = [];
    this.variablesLocales = [];

    this.insertar = function (nombre, tipo, parametrosOatributos,nivel, esConstante, declaracion) {
        var token = null; //tok se agregara a la tabla de identificadores.
        var tablaAUtilizar = null;

        if (nivel > 0){
            token = new VariableToken(nombre,tipo,esConstante);
            tablaAUtilizar = "locales";
        }
        else{
            if (tipo !== null){ //el identificador es de un método o una variaable.
                if (parametrosOatributos !== null){ //si parametrosOatributos no es null entonces quiere decir que el identificador pertenece a un método.
                    token = new MethodToken(nombre,tipo,parametrosOatributos);
                    tablaAUtilizar = "metodo";
                }
                else{//pertenece a una variable.
                    token = new VariableToken(nombre,tipo,esConstante);
                    tablaAUtilizar = "variable";
                }
            }
            else{//El identificador pertenece o hace referencia a una clase o estructura.
                token = new ClassToken(nombre,parametrosOatributos);
                tablaAUtilizar = "estructura";
            }
        }

        var i = new Ident(token,declaracion);

        if (tablaAUtilizar === "metodo"){
            this.tablaMetodos.push(i);
        }else if(tablaAUtilizar === "variable"){
            this.tablaVariables.push(i);
        }else if(tablaAUtilizar === "locales"){
            this.variablesLocales.push(i);
        }else{
            this.tablaEstructuras.push(i);
        }
    };

    /*
    this.insertarArreglo = function (nombre, tipo) {
        var objetoArreglo = new VariableToken();
        objetoArreglo.esArreglo = true; //indico que el tipo de variable es un arreglo.
        this.tablaVariables.push();
    };
    */

    this.buscar = function (nombre) {
        var temp=null;

        this.tablaVariables.forEach(function(element){
            if (element.token.nombre === nombre)
                temp = element;
        });

        this.tablaEstructuras.forEach(function(element){
            if (element.token.nombre === nombre)
                temp = element;
        });

        this.tablaMetodos.forEach(function(element){
            if (element.token.nombre === nombre)
                temp = element;
        });


        return temp;
    };


    this.buscarLocalmente = function(nombre){
        var temp=null;
        this.variablesLocales.forEach(function(element){
            if (element.token.nombre === nombre)
                temp = element;
        });
        return temp;
    };

    //Esta funcion elimina las variables locales de un metodo o funcion.
    this.cerrarNivel = function(){
        if (this.variablesLocales.length === 0)
            return;

        var tamañoTabla = this.variablesLocales.length;
        while(tamañoTabla>0){
            this.variablesLocales.pop();
            tamañoTabla = this.variablesLocales.length;
        }
    };

}

// This class defines a complete generic visitor for a parse tree produced by miniCSharpParser.

var objetoTabla = null;

var nivel = 0;

var errors = [];

function AContextual() {
    parserVisitor.call(this);
    objetoTabla = new TablaSimbolos();
	return this;
}

AContextual.prototype = Object.create(parserVisitor.prototype);
AContextual.prototype.constructor = AContextual;

AContextual.prototype.getErrors = function () {
    return errors;
};

// Visit a parse tree produced by miniCSharpParser#programN.
AContextual.prototype.visitProgramN = function(ctx) {

    //CLASS IDENTIFIER (constDecl | varDecl | classDecl)* BRACKETIZQ ( methodDecl )* BRACKETDER

    //(nombre, tipo, parametrosOatributos,nivel, esConstante, declaracion)
    var identifierName = ctx.IDENTIFIER().getSymbol().text;
    objetoTabla.insertar(identifierName,null,[],nivel,null,ctx); //Se inserta el identificador de la clase que engloba el programa.

    for (var i = 0; i < ctx.constDecl().length; i++)
    {
        this.visit(ctx.constDecl(i));
    }

    //alert("salio de constdeclaration");

    for (var j = 0; j < ctx.varDecl().length; j++)
    {
        var contextoDondeSeDeclararon = this.visit(ctx.varDecl(j));

        var tipo = this.visit(contextoDondeSeDeclararon.type());

        if (contextoDondeSeDeclararon.CORCHETEIZQ() !== null && (tipo !== "int" && tipo !== "char")){ //se declara un arreglo.
            //Reportar error pues los arreglos deben ser del tipo int o char.
            var linea = contextoDondeSeDeclararon.CORCHETEIZQ().getSymbol().line;
            var columna = contextoDondeSeDeclararon.CORCHETEIZQ().getSymbol().column;
            errors.push("Error en linea "+linea+", columna "+columna+ ": los arreglos solo permiten tipo 'char' e 'int'");
        }
        else{
            var primerIdentificador = contextoDondeSeDeclararon.IDENTIFIER(0).getSymbol().text;
            if (objetoTabla.buscar(primerIdentificador) !== null){
                errors.push("El identificador "+" '"+ primerIdentificador + "' ya existe");
            }
            else{
                //(nombre, tipo, parametrosOatributos,nivel, esConstante, declaracion)
                objetoTabla.insertar(primerIdentificador,tipo,null,nivel,false,contextoDondeSeDeclararon);
            }

            for (var k = 1; k <= contextoDondeSeDeclararon.IDENTIFIER().length-1; k++)
            {
                var identificador = contextoDondeSeDeclararon.IDENTIFIER(k).getSymbol().text;
                if (objetoTabla.buscar(identificador) !== null){
                    errors.push("El identificador "+" '"+ identificador + "' ya existe");
                }
                else{
                    objetoTabla.insertar(identificador,tipo,null,nivel,false,contextoDondeSeDeclararon);
                }
            }
        }
    }

    //alert("salio de varDeclaration");

    for (var k = 0; k < ctx.classDecl().length; k++)
    {
        this.visit(ctx.classDecl(k));
    }

    for (var l = 0; l < ctx.methodDecl().length; l++)
    {
        this.visit(ctx.methodDecl(l));
    }

    return null;
};


// Visit a parse tree produced by miniCSharpParser#constDeclaRule.
AContextual.prototype.visitConstDeclaRule = function(ctx) {

    //CONST type IDENTIFIER ASIGN ( NUMBER | CHARCONST ) PyCOMA

    var tipo = this.visit(ctx.type()); //Se obtiene el tipo de la declaración.
    var identifierName = ctx.IDENTIFIER().getSymbol().text;
    var tipoContenido = null;

    console.log("tipo " + tipo);

    if (ctx.NUMBER() !== null){
        var contenido = ctx.NUMBER().getSymbol().text;
        if (contenido.indexOf(".") === -1){
            tipoContenido = "int";
        }
        else{
            tipoContenido = "float";
        }
    }
    else if(ctx.CHARCONST() !== null){
        tipoContenido = "char";
    }

    if (tipo !== tipoContenido){
        //reportar error.
        var linea = ctx.ASIGN().getSymbol().line;
        var columna = ctx.ASIGN().getSymbol().column;

        errors.push("Error de tipos en linea " + linea + ", columna " + columna);
    }
    else{
        //Se agrega a la tabla de simbolos.
        var linea = ctx.IDENTIFIER().getSymbol().line;
        var columna = ctx.IDENTIFIER().getSymbol().column;

        if (objetoTabla.buscar(identifierName) !== null){
            errors.push("El identificador "+ identifierName +" en linea "+linea+", columna "+columna+ " ya existe");
        }
        else{
            //(nombre, tipo, parametrosOatributos,nivel, esConstante, declaracion)
            objetoTabla.insertar(identifierName,tipoContenido,null,nivel,true,ctx);
        }
    }

    return null;
};


// Visit a parse tree produced by miniCSharpParser#varDeclaRule.
AContextual.prototype.visitVarDeclaRule = function(ctx) {

    //type (CORCHETEIZQ CORCHETEDER)? IDENTIFIER ( COMA IDENTIFIER )* PyCOMA
    return ctx;
};


// Visit a parse tree produced by miniCSharpParser#classDeclRule.
AContextual.prototype.visitClassDeclRule = function(ctx) {

    //CLASS IDENTIFIER BRACKETIZQ ( varDecl )* BRACKETDER
    var nombreIdentificador = ctx.IDENTIFIER().getSymbol().text;

    if (objetoTabla.buscar(nombreIdentificador) !== null){
        errors.push("El identificador "+" '"+ nombreIdentificador + "' ya existe");
    }
    else{
        //(nombre, tipo, parametrosOatributos,nivel, esConstante, declaracion)

        //traer los atributos de la clase si los contiene.
        var listaVardecl = [];
        for (var k = 0; k < ctx.varDecl().length; k++)
        {
            var contextoDondeSeDeclararonLosAtributos = this.visit(ctx.varDecl(k));
            //Desmenuzar el contexto de declaracion.
            //type (CORCHETEIZQ CORCHETEDER)? IDENTIFIER ( COMA IDENTIFIER )* PyCOMA
            var tipo = this.visit(contextoDondeSeDeclararonLosAtributos.type());

            for (var y = 0; y < contextoDondeSeDeclararonLosAtributos.IDENTIFIER().length;y++){
                var Identificador = contextoDondeSeDeclararonLosAtributos.IDENTIFIER(y).getSymbol().text;
                var tokenOatributo = new VariableToken(Identificador,tipo,false);
                //Verificar que no se repitan variables dentro de la clase.
                var existe = false;
                for(var o = 0;o<listaVardecl.length;o++){
                    if (listaVardecl[o].nombre === Identificador){
                        existe = true;
                    }
                }

                if (!existe){
                    listaVardecl.push(tokenOatributo);
                }
                else{
                    //Reportar error.
                    var linea = contextoDondeSeDeclararonLosAtributos.IDENTIFIER(y).getSymbol().line;
                    var columna = contextoDondeSeDeclararonLosAtributos.IDENTIFIER(y).getSymbol().column;
                    errors.push("El identificador "+ Identificador +" en linea "+linea+", columna "+columna+ " ya existe para la clase "+nombreIdentificador);
                }
            }
        }
        objetoTabla.insertar(nombreIdentificador,null,listaVardecl,nivel,null,ctx);
    }
    return null;
};

// Visit a parse tree produced by miniCSharpParser#methodDeclRule.
AContextual.prototype.visitMethodDeclRule = function(ctx) {

    //( type | VOID ) IDENTIFIER PIZQ formPars? PDER ( varDecl )* block

    var tipo = null;

    if (ctx.type() !== null){
        tipo = this.visit(ctx.type());
    }

    if (tipo === null){ //Si no habia un tipo definido.
        tipo = "void";
    }

    var nombreMetodo = ctx.IDENTIFIER().getSymbol().text;
    var parametros = [];

    if (ctx.formPars() !== null){
        parametros = this.visit(ctx.formPars());
    }

    //Se agrega el metodo a la tabla de simbolos.

    if (objetoTabla.buscar(nombreMetodo) !== null){
        var linea = ctx.IDENTIFIER().getSymbol().line;
        var columna = ctx.IDENTIFIER().getSymbol().column;
        errors.push("El identificador "+ nombreMetodo +" en linea "+linea+", columna "+columna+ " ya existe");
    }
    else{
        //(nombre, tipo, parametrosOatributos,nivel, esConstante, declaracion)
        objetoTabla.insertar(nombreMetodo,tipo,parametros,nivel,null,ctx);
    }

    nivel++;//*******************Aqui se tiene que abrir un scope.

    for (var j=0; j < parametros.length-1; j++)
    {
        var tipo = parametros[j].tipo;
        var nombre = parametros[j].nombre;

        if (objetoTabla.buscarLocalmente(nombre) !== null){

            var contexto = parametros[parametros.length-1]; //El contexto formParams viene de ultimo en la lista de formParams.
            var nombreVariable = contexto.IDENTIFIER(j).getSymbol().text;
            var linea = contexto.IDENTIFIER(j).getSymbol().line;
            var columna = contexto.IDENTIFIER(j).getSymbol().column;
            errors.push("El identificador "+ nombreVariable +" en linea "+linea+", columna "+columna+ " ya existe para el método " + nombreMetodo);
        }
        else{
            objetoTabla.insertar(nombre,tipo,null,nivel,false,parametros[parametros.length-1]);
        }
    }

    for (var x = 0;x<ctx.varDecl().length;x++){
        var contextoDondeSeDeclararon = this.visit(ctx.varDecl(x));
        var tipo = this.visit(contextoDondeSeDeclararon.type());
        var primerIdentificador = contextoDondeSeDeclararon.IDENTIFIER(0).getSymbol().text;
        if (objetoTabla.buscarLocalmente(primerIdentificador) !== null){
            var linea = contextoDondeSeDeclararon.IDENTIFIER(0).getSymbol().line;
            var columna = contextoDondeSeDeclararon.IDENTIFIER(0).getSymbol().column;
            errors.push("El identificador "+ primerIdentificador +" en linea "+linea+", columna "+columna+ " ya existe para el método " + nombreMetodo);
        }
        else{
            //(nombre, tipo, parametrosOatributos,nivel, esConstante, declaracion)
            objetoTabla.insertar(primerIdentificador,tipo,null,nivel,false,contextoDondeSeDeclararon);
        }


        for (var k = 1; k <= contextoDondeSeDeclararon.IDENTIFIER().length-1; k++)
        {
            var identificador = contextoDondeSeDeclararon.IDENTIFIER(k).getSymbol().text;
            if (objetoTabla.buscarLocalmente(identificador) !== null){
                var linea = contextoDondeSeDeclararon.IDENTIFIER(k).getSymbol().line;
                var columna = contextoDondeSeDeclararon.IDENTIFIER(k).getSymbol().column;
                errors.push("El identificador "+ identificador +" en linea "+linea+", columna "+columna+ " ya existe para el método " + nombreMetodo);
            }
            else{
                objetoTabla.insertar(identificador,tipo,null,nivel,false,contextoDondeSeDeclararon);
            }
        }
    }

    this.visit(ctx.block());

    nivel--;//*******************Aqui se cierra el scope.
    objetoTabla.cerrarNivel(); //se sacan todas las variables que se utilizaron en el método.

    return null;
};


// Visit a parse tree produced by miniCSharpParser#formParamsRule.
AContextual.prototype.visitFormParamsRule = function(ctx) {

    //type IDENTIFIER ( COMA type IDENTIFIER )*

    var parametros = [];

    for (var i=0; i < ctx.IDENTIFIER().length; i++)
    {
        var tipo = this.visit(ctx.type(i));
        var nombreIdentificador = ctx.IDENTIFIER(i).getSymbol().text;

        var parametro = new VariableToken(nombreIdentificador,tipo,false);
        parametros.push(parametro);
    }
    parametros.push(ctx); //Se guarda el contexto en el ultimo elemento de la lista de parametros.

    return parametros; //Se retorna la lista con las definiciones de parámetros.
};

// Visit a parse tree produced by miniCSharpParser#typeIdentifierRule.
AContextual.prototype.visitTypeIdentifierRule = function(ctx) {

    var tipo = null;
    //Vetificar que sea una clase lo que se agrega como tipo.
    var nombreIdent = ctx.IDENTIFIER().getSymbol().text;
    var identificador = objetoTabla.buscar(nombreIdent);

    if (identificador !== null){
        if (identificador.token instanceof ClassToken){
            tipo = identificador.token.nombre;
        }
        else{
            //Reportar el error.
            var linea = ctx.IDENTIFIER().getSymbol().line;
            var columna = ctx.IDENTIFIER().getSymbol().column;
            errors.push("El identificador "+ identificador.token.nombre +" en linea "+linea+", columna "+columna+ " ya existe para el método");
        }
    }
    else{
        //Reportar que la clase no ha sido declarada.
        var linea = ctx.IDENTIFIER().getSymbol().line;
        var columna = ctx.IDENTIFIER().getSymbol().column;
        errors.push("No se ha declarado una clase con el nombre "+ identificador.token.nombre +" en linea "+linea+", columna "+columna);
    }

    return tipo;
};


// Visit a parse tree produced by miniCSharpParser#typeCharDeclRule.
AContextual.prototype.visitTypeCharDeclRule = function(ctx) {
    return "char";
};


// Visit a parse tree produced by miniCSharpParser#typeIntDeclRule.
AContextual.prototype.visitTypeIntDeclRule = function(ctx) {
    return "int";
};


// Visit a parse tree produced by miniCSharpParser#typeFloatDeclRule.
AContextual.prototype.visitTypeFloatDeclRule = function(ctx) {
    return "float";
};


// Visit a parse tree produced by miniCSharpParser#typeBooleanDeclRule.
AContextual.prototype.visitTypeBooleanDeclRule = function(ctx) {
    return "boolean";
};


// Visit a parse tree produced by miniCSharpParser#typeStringDeclRule.
AContextual.prototype.visitTypeStringDeclRule = function(ctx) {
    return "string";
};


// Visit a parse tree produced by miniCSharpParser#statDesignatorRule.
AContextual.prototype.visitStatDesignatorRule = function(ctx) {

    //designator ( ASIGN expr | PIZQ actPars? PDER  | DOBLEMAS | DOBLEMENOS ) PyCOMA
                                // X
    var contextoDesignatorRule = this.visit(ctx.designator()); //se obtiene el contexto de designatorRule.
    //IDENTIFIER ( POINT IDENTIFIER | CORCHETEIZQ expr CORCHETEDER )*

    var nombreIdentificador = contextoDesignatorRule.IDENTIFIER(0).getSymbol().text;

    var identificadorLocal = objetoTabla.buscarLocalmente(nombreIdentificador);
    var identificadorGlobal = objetoTabla.buscar(nombreIdentificador);

    var linea = contextoDesignatorRule.IDENTIFIER(0).getSymbol().line;
    var columna = contextoDesignatorRule.IDENTIFIER(0).getSymbol().column;

    if (identificadorLocal === null && identificadorGlobal === null){
        errors.push("El identificador "+ nombreIdentificador +" en linea "+linea+", columna "+columna+ " no ha sido declarado");
    }else{
        var identificadorAusar = null;
        if (identificadorLocal !== null){
            identificadorAusar = identificadorLocal;
        }
        else{
            identificadorAusar = identificadorGlobal;
        }

        var cantidadPuntos = contextoDesignatorRule.POINT().length; //ejemplo variable.variable2.variable3 serian 2 puntos.
        var cantidadCorchetesIzq = contextoDesignatorRule.CORCHETEIZQ().length;

        if (cantidadPuntos > 0){
            if (!(identificadorAusar.token instanceof ClassToken)){
                //Reportar error.
                errors.push("El identificador "+ identificadorAusar.token.nombre +" en linea "+linea+", columna "+columna+ " no es una estructura o clase");
            }
            else{
                var tokenAnterior = identificadorAusar.token; //identificador de tipo Class. (contiene una lista de atributos o variables).
                for (var i=0; i < cantidadPuntos; i++)
                {
                    var nombreIdentDespuesDePunto = contextoDesignatorRule.IDENTIFIER(i+1).getSymbol().text;
                    var atributoDeClase = tokenAnterior.buscarAtributo(nombreIdentDespuesDePunto);

                    var linea = contextoDesignatorRule.IDENTIFIER(i+1).getSymbol().line;
                    var columna = contextoDesignatorRule.IDENTIFIER(i+1).getSymbol().column;

                    if (atributoDeClase !== null){
                        if (!(atributoDeClase instanceof ClassToken) && (i+1) < cantidadPuntos ){
                            //reportar error.
                            linea = contextoDesignatorRule.IDENTIFIER(i+1).getSymbol().line;
                            columna = contextoDesignatorRule.IDENTIFIER(i+1).getSymbol().column;
                            errors.push("El identificador "+ nombreIdentDespuesDePunto +" en linea "+linea+", columna "+columna+ " no es una estructura");
                            break;
                        }else{
                            //Que hacer en caso que lo que este despes del punto sea una variable.
                            if (ctx.ASIGN() !== null){ // se realizara asignamiento de valor a una variable.
                                //verificar el tipo de la variable a la cual se va a asignar un valor y compararlo con el tipo
                                //del visit ctx.expr().
                                var tipoAtributo = atributoDeClase.tipo;
                                var tipoExpresion = this.visit(ctx.expr()); //Se obtiene el tipo de la expresion.


                                if (tipoAtributo !== tipoExpresion){
                                    alert("Se comparo "+tipoAtributo+" con "+tipoExpresion);
                                    //Reportar error pues la variable a la cual se va a asignar el valor, la expresion no coincide
                                    // con su tipo.
                                    linea = ctx.ASIGN().getSymbol().line;
                                    columna = ctx.ASIGN().getSymbol().column;
                                    errors.push("Error de tipos en linea "+linea+", columna "+columna);
                                }
                            }else if (ctx.DOBLEMAS() !== null){
                                if (atributoDeClase.tipo !== "int" || atributoDeClase.tipo !== "float"){
                                    //Reportar error.
                                    linea = ctx.DOBLEMAS().getSymbol().line;
                                    columna = ctx.DOBLEMAS().getSymbol().column;
                                    errors.push("Operacion inválida en "+linea+", columna "+columna + ", se intentó sumar a un dato que no es int ni float");
                                }
                            }
                            else if (ctx.DOBLEMENOS() !== null){
                                if (atributoDeClase.tipo !== "int" || atributoDeClase.tipo !== "float"){
                                    //Reprotar error.
                                    linea = ctx.DOBLEMENOS().getSymbol().line;
                                    columna = ctx.DOBLEMENOS().getSymbol().column;
                                    errors.push("Operacion inválida en "+linea+", columna "+columna + ", se intentó restar a un dato que no es int ni float");
                                }
                            }
                        }
                    }else{
                        //reportar error.
                        linea = contextoDesignatorRule.IDENTIFIER(i+1).getSymbol().line;
                        columna = contextoDesignatorRule.IDENTIFIER(i+1).getSymbol().column;
                        errors.push("El identificador "+ nombreIdentDespuesDePunto +" en linea "+linea+", columna "+columna+ " no pertenece a la clase " + tokenAnterior.nombre);
                        break; //se sale del ciclo pues no tiene sentido seguir analizando.
                    }

                    tokenAnterior = atributoDeClase;
                }
            }
        }else if (cantidadCorchetesIzq > 0){ //se verifica si es un arreglo.

            var contextoDeDeclaracion = identificadorAusar.declaration;

            if (contextoDeDeclaracion.CORCHETEIZQ() !== null){ //Si el identificador fue declarado como arreglo.

                 var tipoIndice = this.visit(ctx.expr()); //devuelve el tipo de dato.(En este caso debe ser un valor entero).
                 if (tipoIndice !== "int"){
                     //reportar error de indice de arreglo.
                     linea = contextoDesignatorRule.CORCHETEIZQ().getSymbol().line;
                     columna = contextoDesignatorRule.CORCHETEIZQ().getSymbol().column;
                     errors.push("Error de indice en linea "+linea+", columna "+columna+ ", el indice debe ser un numero entero");
                 }
                 else{
                     if (ctx.DOBLEMAS() !== null){
                         if (identificadorAusar.token.tipo !== "int" || identificadorAusar.token.tipo !== "float"){
                             //Reportar error.
                             linea = contextoDesignatorRule.DOBLEMAS().getSymbol().line;
                             columna = contextoDesignatorRule.DOBLEMAS().getSymbol().column;
                             errors.push("Operacion inválida en "+linea+", columna "+columna + ", se intentó sumar a un dato que no es int ni float");
                         }
                     }
                     if (ctx.DOBLEMENOS() !== null){
                         if (identificadorAusar.token.tipo !== "int" || identificadorAusar.token.tipo !== "float"){
                             //Reportar error.
                             linea = contextoDesignatorRule.DOBLEMAS().getSymbol().line;
                             columna = contextoDesignatorRule.DOBLEMAS().getSymbol().column;
                             errors.push("Operacion inválida en "+linea+", columna "+columna + ", se intentó restar a un dato que no es int ni float");
                         }
                     }
                 }

            }
            else{
                var nombreIdent = identificadorAusar.token.nombre;
                linea = contextoDesignatorRule.IDENTIFIER(0).getSymbol().line;
                columna = contextoDesignatorRule.IDENTIFIER(0).getSymbol().column;
                errors.push("El identificador "+ nombreIdent +" en linea "+linea+", columna "+columna+ " no hace referencia a un arreglo");
            }
        }else{ //Quiere decir que es simplemente un identificador sin corchetes ni atributos de clase.

            var tokenAqui = identificadorAusar.token;

            if (ctx.ASIGN() !== null){

                var tipoAVerificar = this.visit(ctx.expr());

                if (tokenAqui instanceof MethodToken || tokenAqui instanceof ClassToken){
                    //Reportar error
                    var nombreIdent = tokenAqui.nombre;
                    linea = contextoDesignatorRule.IDENTIFIER(0).getSymbol().line;
                    columna = contextoDesignatorRule.IDENTIFIER(0).getSymbol().column;
                    errors.push("El identificador "+ nombreIdent +" en linea "+linea+", columna "+columna+ " no puede tratarse como una variable");
                }
                else{
                    if (tokenAqui.esConstante){
                        //Reportar error porque es una constante.
                        linea = contextoDesignatorRule.IDENTIFIER(0).getSymbol().line;
                        columna = contextoDesignatorRule.IDENTIFIER(0).getSymbol().column;
                        errors.push("El identificador "+ nombreIdent +" en linea "+linea+", columna "+columna+ " es constante");
                    }
                    else{
                        if (tipoAVerificar != tokenAqui.tipo){
                            //Reportar error porque es una constante.
                            linea = contextoDesignatorRule.IDENTIFIER(0).getSymbol().line;
                            columna = contextoDesignatorRule.IDENTIFIER(0).getSymbol().column;
                            errors.push("Error de tipos" +" en linea "+linea+", columna "+columna);
                        }
                    }
                }
            }
            else if (ctx.DOBLEMAS() !== null || ctx.DOBLEMENOS() !== null){
                if (tokenAqui instanceof MethodToken || tokenAqui instanceof ClassToken){
                    //Reportar error.
                    var nombreIdent = tokenAqui.nombre;
                    linea = ctx.DOBLEMAS().getSymbol().line;
                    columna = ctx.DOBLEMAS().getSymbol().column;
                    errors.push("El identificador "+ nombreIdent +" en linea "+linea+", columna "+columna+ " no puede tratarse como una variable");
                }
                else{
                    if (tokenAqui.esConstante){
                        //Reportar error porque es una constante.
                        linea = ctx.DOBLEMAS().getSymbol().line;
                        columna = ctx.DOBLEMAS().getSymbol().column;
                        errors.push("El identificador "+ nombreIdent +" en linea "+linea+", columna "+columna+ " es constante");
                    }
                }
            }
            else if(ctx.PIZQ() !== null){
                if(!(tokenAqui instanceof MethodToken)){
                    //Reportar error pues no se trata de un método.
                    linea = contextoDesignatorRule.IDENTIFIER(0).getSymbol().line;
                    columna = contextoDesignatorRule.IDENTIFIER(0).getSymbol().column;
                    errors.push("El identificador "+ nombreIdent +" en linea "+linea+", columna "+columna+ " no pertenece a un método");
                }
                else{
                    if (ctx.actPars() !== null){
                        var parametrosActuales = this.visit(ctx.actPars());
                        var parametrosDeclarados = tokenAqui.parametros;
                        if (parametrosDeclarados.length !== parametrosActuales.length){
                            //Reportar error.
                            var nombreIdent = tokenAqui.nombre;
                            linea = ctx.PIZQ().getSymbol().line;
                            columna = ctx.PIZQ().getSymbol().column;
                            errors.push("El método "+ nombreIdent +" en linea "+linea+", columna "+columna+ " tiene diferente cantidad de parametros que con la cantidad que se hace la llamada");
                        }
                        else{
                            var tipoRetorno = true;
                            //verificar que los tipos de los parametros coincidan.
                            for (var t = 0;t<parametrosActuales.length;t++){
                                var ident = parametrosActuales[t];
                                if (ident.tipo !== parametrosActuales[t].tipo){
                                    tipoRetorno = false;
                                    //reportar error.
                                    var linea = ctxTemp.PIZQ().getSymbol().line;
                                    var columna = ctxTemp.PIZQ().getSymbol().column;
                                    errors.push("El método "+ tokenAqui.nombre +" en linea "+linea+", columna "+columna+ " difiere en la cantidad de parametros con que se hace la llamada");
                                    break;
                                }
                            }

                            if (tipoRetorno){
                                tipoExpresion = tokenAqui.tipo;
                            }
                        }
                    }
                    else{
                        tipoExpresion = tokenAqui.tipo;
                    }
                }
            }
        }
    }

    return null;
};


// Visit a parse tree produced by miniCSharpParser#statIfRule.
AContextual.prototype.visitStatIfRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statForRule.
AContextual.prototype.visitStatForRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statWhileRule.
AContextual.prototype.visitStatWhileRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statForeachRule.
AContextual.prototype.visitStatForeachRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statBreakRule.
AContextual.prototype.visitStatBreakRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statReturnRule.
AContextual.prototype.visitStatReturnRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statReadRule.
AContextual.prototype.visitStatReadRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statWriteRule.
AContextual.prototype.visitStatWriteRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statBlockRule.
AContextual.prototype.visitStatBlockRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statPyComaRule.
AContextual.prototype.visitStatPyComaRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#blockRule.
AContextual.prototype.visitBlockRule = function(ctx) {

    //BRACKETIZQ ( statement )* BRACKETDER

    for (var i=0; i < ctx.statement().length; i++)
    {
        this.visit(ctx.statement(i));
    }

    return null;
};


// Visit a parse tree produced by miniCSharpParser#actParsRule.
AContextual.prototype.visitActParsRule = function(ctx) {

    //expr ( COMA expr )*

    //Retornar una lista de tipos de dato de parametros.
    var listaParamtetros = [];

    for (var k = 0; k < ctx.expr().length; k++)
    {
        var tipo = this.visit(ctx.expr(k));
        listaParamtetros.push(tipo);
    }

    return listaParamtetros;
};


// Visit a parse tree produced by miniCSharpParser#conditionnRule.
AContextual.prototype.visitConditionnRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#condTermRule.
AContextual.prototype.visitCondTermRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#condFactRule.
AContextual.prototype.visitCondFactRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#exprRule.
AContextual.prototype.visitExprRule = function(ctx) {

    //MENOS? term ( addop term )*

    var tipoInicial = this.visit(ctx.term(0));
    var cantidadDeaddOp = ctx.addop().length;
    var seMantieneFloat = false;
    var tipoRetorno = null;

    if (cantidadDeaddOp > 0){
        if (tipoInicial !== "int" && tipoInicial !== "float"){
            //REPORTAR ERROR
            var linea = this.visit(ctx.mulop(0)).getSymbol().line;
            var columna = this.visit(ctx.mulop(0)).getSymbol().column;
            errors.push("Error de operacion en linea "+linea+" columna "+columna);
        }else{
            var tipoAnterior = tipoInicial;
            if (tipoAnterior === "float"){
                seMantieneFloat = true;
            }

            for (var i=1; i <= ctx.term().length-1; i++)
            {
                var tipoSiguiente = this.visit(ctx.term(i));

                if (tipoSiguiente === "float"){
                    seMantieneFloat = true;
                    tipoRetorno = "float";
                }
                else if (tipoSiguiente === "int"){
                    if (seMantieneFloat){
                        tipoRetorno = "float";
                    }
                    else{
                        tipoRetorno = "int";
                    }
                }
                else{
                    //Reportar error.
                    tipoRetorno = null;
                    var linea = this.visit(ctx.addop(i-1)).getSymbol().line;
                    var columna = this.visit(ctx.addop(i-1)).getSymbol().column;
                    errors.push("Error de operación en linea "+linea+" columna "+columna);
                    break;
                }
            }
        }
    }
    else{
        tipoRetorno = tipoInicial;
    }

    return tipoRetorno; //DEBE RETORNAR EL TIPO.
};


// Visit a parse tree produced by miniCSharpParser#termRule.
AContextual.prototype.visitTermRule = function(ctx) {

    //factor ( mulop factor )*
    var tipoInicial = this.visit(ctx.factor(0));
    var cantidadDePors = ctx.mulop().length;
    var seMantieneFloat = false;
    var tipoRetorno = null;

    if (cantidadDePors > 0){
        if (tipoInicial !== "int" && tipoInicial !== "float"){
            //REPORTAR ERROR
            var linea = this.visit(ctx.mulop(0)).getSymbol().line;
            var columna = this.visit(ctx.mulop(0)).getSymbol().column;
            errors.push("Error de operacion en fila "+linea+" columna "+columna);
        }else{
            var tipoAnterior = tipoInicial;
            if (tipoAnterior === "float"){
                seMantieneFloat = true;
            }

            for (var i=1; i <= ctx.factor().length-1; i++)
            {
                var tipoSiguiente = this.visit(ctx.factor(i));

                if (tipoSiguiente === "float"){
                    seMantieneFloat = true;
                    tipoRetorno = "float";
                }
                else if (tipoSiguiente === "int"){
                    if (seMantieneFloat){
                        tipoRetorno = "float";
                    }
                    else{
                        tipoRetorno = "int";
                    }
                }
                else{
                    //Reportar error.
                    tipoRetorno = null;
                    var linea = this.visit(ctx.mulop(i-1)).getSymbol().line;
                    var columna = this.visit(ctx.mulop(i-1)).getSymbol().column;
                    errors.push("Error de operacion en linea "+linea+" columna "+columna);
                    break;
                }
            }
        }
    }
    else{
        tipoRetorno = tipoInicial;
    }

    return tipoRetorno;
};


// Visit a parse tree produced by miniCSharpParser#factDesignatorRule.
AContextual.prototype.visitFactDesignatorRule = function(ctxTemp) {

    //designator ( PIZQ actPars? PDER )?

    var tipoExpresion = null; //indicara el tipo que retornará la expresion.

    var contextoDesignatorRule = this.visit(ctxTemp.designator());
    //IDENTIFIER ( POINT IDENTIFIER | CORCHETEIZQ expr CORCHETEDER )*

    var nombreIdentificador = contextoDesignatorRule.IDENTIFIER(0).getSymbol().text;

    var identificadorLocal = objetoTabla.buscarLocalmente(nombreIdentificador);
    var identificadorGlobal = objetoTabla.buscar(nombreIdentificador);

    var linea = contextoDesignatorRule.IDENTIFIER(0).getSymbol().line;
    var columna = contextoDesignatorRule.IDENTIFIER(0).getSymbol().column;

    if (identificadorLocal === null && identificadorGlobal === null){
        errors.push("El identificador "+ nombreIdentificador +" en linea "+linea+", columna "+columna+ " no ha sido declarado");
    }else{
        var identificadorAusar = null;
        if (identificadorLocal !== null){
            identificadorAusar = identificadorLocal;
        }
        else{
            identificadorAusar = identificadorGlobal;
        }

        var cantidadPuntos = contextoDesignatorRule.POINT().length; //ejemplo variable.variable2.variable3 serian 2 puntos.
        var cantidadCorchetesIzq = contextoDesignatorRule.CORCHETEIZQ().length;

        if (cantidadPuntos > 0){
            if (!(identificadorAusar.token instanceof ClassToken)){
                //Reportar error.
                errors.push("El identificador "+ identificadorAusar.token.nombre +" en linea "+linea+", columna "+columna+ " no es una estructura o clase");
            }
            else{
                var tokenAnterior = identificadorAusar.token; //identtificador de tipo Class. (contiene una lista de atributos o variables).
                for (var i=0; i < cantidadPuntos; i++)
                {
                    var nombreIdentDespuesDePunto = contextoDesignatorRule.IDENTIFIER(i+1).getSymbol().text;
                    var atributoDeClase = tokenAnterior.buscarAtributo(nombreIdentDespuesDePunto);

                    if (atributoDeClase !== null){
                        if (!(atributoDeClase instanceof ClassToken) && (i+1) < cantidadPuntos ){
                            //reportar error.
                            linea = contextoDesignatorRule.IDENTIFIER(i+1).getSymbol().line;
                            columna = contextoDesignatorRule.IDENTIFIER(i+1).getSymbol().column;
                            errors.push("El identificador "+ nombreIdentDespuesDePunto +" en linea "+linea+", columna "+columna+ " no es una estructura");
                            break;
                        }
                        else{
                            tipoExpresion = atributoDeClase.tipo;
                        }
                    }else{
                        //reportar error.
                        linea = contextoDesignatorRule.IDENTIFIER(i+1).getSymbol().line;
                        columna = contextoDesignatorRule.IDENTIFIER(i+1).getSymbol().column;
                        errors.push("El identificador "+ nombreIdentDespuesDePunto +" en linea "+linea+", columna "+columna+ " no pertenece a la clase " + tokenAnterior.nombre);
                        break; //se sale del ciclo pues no tiene sentido seguir analizando.
                    }

                    tokenAnterior = atributoDeClase;
                }
            }
        }else if (cantidadCorchetesIzq > 0){ //se verifica si es un arreglo.

            var contextoDeDeclaracion = identificadorAusar.declaration;

            if (contextoDeDeclaracion.CORCHETEIZQ() !== null){

                 var tipoIndice = this.visit(contextoDesignatorRule.expr()); //devuelve el tipo de dato.(En este caso debe ser un valor entero).
                 if (tipoIndice !== "int"){
                 //reportar error de indice de arreglo.
                 }
                 else{
                     tipoExpresion = identificadorAusar.token.tipo;
                 }
            }
            else{
                var nombreIdent = identificadorAusar.token.nombre;
                linea = contextoDesignatorRule.IDENTIFIER(0).getSymbol().line;
                columna = contextoDesignatorRule.IDENTIFIER(0).getSymbol().column;
                errors.push("El identificador "+ nombreIdent +" en linea "+linea+", columna "+columna+ " no hace referencia a un arreglo");
            }
        }else{
            if (ctxTemp.PIZQ() !== null){ //Quiere decir que se esta tratando de hacer la llamada a un método.
                if (!(identificadorAusar.token instanceof MethodToken)){
                    //Reportar error que indique que el identificador no corresponde a un método.
                    var nombreIdent = identificadorAusar.token.nombre;
                    linea = contextoDesignatorRule.IDENTIFIER(0).getSymbol().line;
                    columna = contextoDesignatorRule.IDENTIFIER(0).getSymbol().column;
                    errors.push("El identificador "+ nombreIdent +" en linea "+linea+", columna "+columna+ " no hace referencia a un método");
                }
                else{
                    //revisar que el método se encuentre bien armado y indicar el tipo de valor que retorna.
                    if (ctxTemp.actPars() !== null){
                        var parametrosActuales = this.visit(ctx.actPars());
                        var parametrosDeclarados = identificadorAusar.token.parametros;
                        if (parametrosDeclarados.length !== parametrosActuales.length){
                            //Reportar error
                            var nombreIdent = identificadorAusar.token.nombre;
                            linea = contextoDesignatorRule.IDENTIFIER(0).getSymbol().line;
                            columna = contextoDesignatorRule.IDENTIFIER(0).getSymbol().column;
                            errors.push("El método "+ nombreIdent +" en linea "+linea+", columna "+columna+ " tiene diferente cantidad de parametros que con la cantidad que se hace la llamada");
                        }
                        else{
                            var tipoRetorno = true;
                            //verificar que los tipos de los parametros coincidan.
                            for (var t = 0;t<parametrosActuales.length;t++){
                                var ident = parametrosActuales[t];
                                if (ident.tipo !== parametrosActuales[t].tipo){
                                    tipoRetorno = false;
                                    //reportar error.
                                    var linea = ctxTemp.PIZQ().getSymbol().line;
                                    var columna = ctxTemp.PIZQ().getSymbol().column;
                                    errors.push("El método "+ identificadorAusar.token.nombre +" en linea "+linea+", columna "+columna+ " difiere en la cantidad de parametros con que se hace la llamada");
                                    break;
                                }
                            }

                            if (tipoRetorno){
                                tipoExpresion = identificadorAusar.token.tipo;
                            }
                        }
                    }
                }
            }
            else{
                //Verificar  que el identificador sea una variable normal o constante.
                if (identificadorAusar.token instanceof VariableToken){
                    tipoExpresion = identificadorAusar.token.tipo;
                }
                else if (identificadorAusar.token instanceof ClassToken){
                    tipoExpresion = identificadorAusar.token.tipo; //**************************REVISAR************
                }
                else{
                    var nombreIdent = identificadorAusar.token.nombre;
                    linea = contextoDesignatorRule.IDENTIFIER(0).getSymbol().line;
                    columna = contextoDesignatorRule.IDENTIFIER(0).getSymbol().column;
                    errors.push("El identificador "+ nombreIdent +" en linea "+linea+", columna "+columna+ " no pertenece a una variable");
                }
            }
        }
    }

    return tipoExpresion;//*********************SE DEBE RETORNAR UN TIPO.
};


// Visit a parse tree produced by miniCSharpParser#factNumberRule.
AContextual.prototype.visitFactNumberRule = function(ctx) {

    var contenido = ctx.NUMBER().getSymbol().text;
    var tipoContenido = null;
    if (contenido.indexOf(".") === -1){
        tipoContenido = "int";
    }
    else{
        tipoContenido = "float";
    }
    return tipoContenido;
};


// Visit a parse tree produced by miniCSharpParser#factCharConstRule.
AContextual.prototype.visitFactCharConstRule = function(ctx) {
    return "char";
};


// Visit a parse tree produced by miniCSharpParser#factTrueOrFalseRule.
AContextual.prototype.visitFactTrueOrFalseRule = function(ctx) {
    return "boolean";
};


// Visit a parse tree produced by miniCSharpParser#factNewRule.
AContextual.prototype.visitFactNewRule = function(ctx) {

    var tipo = null;

    var nombreIdentificador = ctx.IDENTIFIER().getSymbol().text;

    var Identificador = objetoTabla.buscar(nombreIdentificador);

    if (Identificador !== null){
        if (!(Identificador.token instanceof ClassToken)){
            //reportar error.
            var nombreIdent = Identificador.token.nombre;
            var linea = ctx.IDENTIFIER().getSymbol().line;
            var columna = ctx.IDENTIFIER().getSymbol().column;
            errors.push("El identificador "+ nombreIdent +" en linea "+linea+", columna "+columna+ " no pertenece a una clase");
        }
        else{
            tipo = Identificador.token.nombre; //El tipo se guarda como el nombre de la clase.
        }
    }

    return tipo;
};


// Visit a parse tree produced by miniCSharpParser#factExpreRule.
AContextual.prototype.visitFactExpreRule = function(ctx) {
    var tipo = this.visit(ctx.expression());

    return tipo;
};


// Visit a parse tree produced by miniCSharpParser#designatorRule.
AContextual.prototype.visitDesignatorRule = function(ctx) {

    //IDENTIFIER ( POINT IDENTIFIER | CORCHETEIZQ expr CORCHETEDER )*
    return ctx;
};


// Visit a parse tree produced by miniCSharpParser#relopIgualigualRule.
AContextual.prototype.visitRelopIgualigualRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#relopDiferenteRule.
AContextual.prototype.visitRelopDiferenteRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#relopMayorqueRule.
AContextual.prototype.visitRelopMayorqueRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#relopMayorigualqueRule.
AContextual.prototype.visitRelopMayorigualqueRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#relopMenorQueRule.
AContextual.prototype.visitRelopMenorQueRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#relopMenorigualqueRule.
AContextual.prototype.visitRelopMenorigualqueRule = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#addopMasRule.
AContextual.prototype.visitAddopMasRule = function(ctx) {
    return ctx.MAS();
};


// Visit a parse tree produced by miniCSharpParser#addopMenosRule.
AContextual.prototype.visitAddopMenosRule = function(ctx) {
    return ctx.MENOS();
};


// Visit a parse tree produced by miniCSharpParser#mulopMulRule.
AContextual.prototype.visitMulopMulRule = function(ctx) {
    return ctx.MUL();
};


// Visit a parse tree produced by miniCSharpParser#mulOpDivRule.
AContextual.prototype.visitMulOpDivRule = function(ctx) {
    return ctx.DIV();
};


// Visit a parse tree produced by miniCSharpParser#mulOpdivmodularRule.
AContextual.prototype.visitMulOpdivmodularRule = function(ctx) {
    return ctx.DIVMODULAR();
};



exports.AContextual = AContextual;