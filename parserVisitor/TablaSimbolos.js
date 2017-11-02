/**
 * Created by BryanH on 03/10/2017.
 */

var parser = require('../antlr4/index');

var tablaVariables;
var tablaEstructuras;
var tablaMetodos;

function ClassToken(nombre,atributos){
    this.nombre = nombre;
    this.atributos = atributos;//el parametro atributos es una lista con todos los atributos de la clase definida(una lista de tokens);
}

function VariableToken(nombre,tipo){
    this.nombre = nombre;
    this.tipo = tipo;
}

function MethodToken(nombre,tipo,parametros){
    this.nombre = nombre;
    this.tipoRetorno = tipo;
    this.parametros = parametros;
}

function Ident(tok, decl){
    this.token = tok;
    this.declaration = decl;
}

function TablaSimbolos() {
    tablaVariables = [];
    tablaEstructuras = [];
    tablaMetodos = [];
    return this;
}

TablaSimbolos.prototype.insertar = function(nombre, tipo, parametrosOatributos, declaracion)
{
    var token = null; //tok se agregara a la tabla de identificadores.
    var tablaAUtilizar = null;

    if (tipo !== null){ //el identificador es de un método o una variaable.
        if (parametrosOatributos !== null){ //si parametrosOatributos no es null entonces quiere decir que el identificador pertenece a un método.
            token = new MethodToken(nombre,tipo,parametrosOatributos);
            tablaAUtilizar = "metodo";
        }
        else{//pertenece a una variable.
            token = new VariableToken(nombre,tipo);
            tablaAUtilizar = "variable";
        }
    }
    else{//El identificador pertenece o hace referencia a una clase o estructura.
        token = new ClassToken(nombre,parametrosOatributos);
        tablaAUtilizar = "estructura";
    }

    var i = new Ident(token,declaracion);

    if (tablaAUtilizar === "metodo"){
        tablaMetodos.push(i);
    }else if(tablaAUtilizar === "variable"){
        tablaVariables.push(i);
    }else{
        tablaEstructuras.push(i);
    }
};

TablaSimbolos.prototype.buscar = function(nombre)
{
    /* Este buscar busca de adelante para atrás pero en realidad debería buscarse de atrás hacia adelante
     para buscar desde el más recientemente agregado hacia el menos recientemente agregado */
    var temp=null;

    tablaVariables.forEach(function(element){
        if (element.token.nombre === nombre)
            temp = element;
    });

    tablaEstructuras.forEach(function(element){
        if (element.token.nombre === nombre)
            temp = element;
    });

    tablaMetodos.forEach(function(element){
        if (element.token.nombre === nombre)
            temp = element;
    });

    return temp;
};

TablaSimbolos.prototype.imprimir = function()
{
    //este recorrido de la tablaVariables se hace de adelante hacia atrás manteniendo el orden en que fueron insertados los elementos
    for (i = 0; i < tablaVariables.length; i++) {
        var s = tablaVariables[i].token;
        console.log("Nombre: " + s.text);
        if (s.type == 0) console.log("\tTipo: Indefinido");
        else if (s.type == 1) console.log("\tTipo: Integer");
        else if (s.type == 2) console.log("\tTipo: String");
    }
};

exports.TablaSimbolos = TablaSimbolos;
