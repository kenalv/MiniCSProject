var inter = null;
var almacenMetodos = []; //Se correra el almacen de métodos creado.

$(document).ready(function(){

    var editor = ace.edit("myEditor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/javascript");

    //editor.getSession().setValue("function something(){}");

    var antlr4 = require('antlr4/index');

    var MyScanner = require('generated/miniCSharpScanner');
    var MyParser = require('generated/miniCSharpParser');
    //var PPVisitor = require('generated/PrettyPrint'); //Obtengo el script del pretty Print.
    //var ACVisitor = require('generated/AContextual');
    var InterpreterCollector = require('./interprete/InterpreteCollector');
    //var Interpreter = require('generated/MiniCSharpParserVisitor');

    $("#play").click(function () {

    	var input = editor.getSession().getValue();//Se obtiene el contenido del editor(el código fuente).

    	if (input.length === 0){
            alert ("No hay codigo fuente");
        }
        else{
            var infoBox = document.getElementById("messages"); //Se obtiene el componente o nodo DOM donde se mostraran mensajes.

            var chars = new antlr4.InputStream(input);
            var lexer = new MyScanner.miniCSharpScanner(chars);

            ListaTokens = lexer.getAllTokens();


            //Se imprime los tokens en la consola.
            ListaTokens.forEach(function(element) {
                console.log(element.type + " : '" + element.text + "'");
            });

            lexer.reset();

            var tokens  = new antlr4.CommonTokenStream(lexer);
            var parser = new MyParser.miniCSharpParser(tokens);

            //var ppVisitor = new PPVisitor.PrettyPrint(infoBox);
            //var acVisitor = new ACVisitor.AContextual();
            //var interpreter = new Interpreter.miniCSharpParserVisitor(infoBox);
            var interpreterCollector = new InterpreterCollector.InterpreterCollector(infoBox);

            parser.buildParseTrees = true; //se le indica al parser que cree arboles.

            var tree = parser.program();

            infoBox.value = ''; //Se limpia el componente.

            //ppVisitor.visit(tree);
            //acVisitor.visit(tree);
            //interpreterCollector.resetearAlmacen();//Vasea el almacen de las variables, clases y metodos recolectados.
            var almacen = interpreterCollector.visit(tree); //Este almacen lo debe utiliar el ejecutador del método.

            inter = interpreterCollector;

            //interpreterCollector.resetearInterprete();

            alert("Tamaño del almacen: " + almacen.length);
            /*
            var listaErrores = acVisitor.getErrors();
            if (listaErrores.length !== 0){
                for(var y = 0 ; y < listaErrores.length;y++){
                    infoBox.value += listaErrores[y] + "\n";
                }
            }
            else{
                infoBox.value += "Compilacion exitosa!!";
            }
            */
        }

    });

    $("#execute").click(function () {
        inter.activarEjecucion();

        var metodoAejecutar = "SetPoints";
        almacenMetodos = inter.obtenerMetodos(); //Se obtienen los metodos recolectados.

        var metodo = null;
        almacenMetodos.forEach(function (met) {
            if (met.nombre == metodoAejecutar){
                metodo = met;
            }
        });

        //alert(metodo.nombre);

        var cuerpoMetodo = metodo.blockContext;
        cuerpoMetodo["parametrosActuales"] = [3]; //lista de los valores de los parametros a enviar.

        inter.visitBlockRule(cuerpoMetodo);

        //inter.visitExprRule(null);

    });

});