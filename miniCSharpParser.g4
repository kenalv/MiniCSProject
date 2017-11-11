parser grammar miniCSharpParser;

/*
Todos los identificadores tipo clase deben ser instanciados conla palabra "new" anteriormente. por ejemplo parallamar "variable.variableinterna"
Agregar corchetes opcionales a la regla varDecl(agregar corchetes opcionales [] para declarar arreglos), despues del type.
*/

/*
FALTA AGREGAR EL foreach statement.
*/

/*
DUDAS
--Como hacer el pretty print de methodDecl ??
--Aclarar el funcionamiento de la regla designator.
*/

options{
    tokenVocab = miniCSharpScanner;
}

program	: CLASS IDENTIFIER (constDecl | varDecl | classDecl)* BRACKETIZQ ( methodDecl )* BRACKETDER             #programN;//ya
constDecl	: CONST type IDENTIFIER ASIGN ( NUMBER | CHARCONST ) PyCOMA                                         #constDeclaRule;//ya
varDecl	: type (CORCHETEIZQ CORCHETEDER)? IDENTIFIER ( COMA IDENTIFIER )* PyCOMA                                #varDeclaRule;//ya
classDecl	: CLASS IDENTIFIER BRACKETIZQ ( varDecl )* BRACKETDER                                               #classDeclRule;//ya
methodDecl	: ( type | VOID ) IDENTIFIER PIZQ formPars? PDER ( varDecl )* block                                 #methodDeclRule;//ya
formPars	: type IDENTIFIER ( COMA type IDENTIFIER )*                                                         #formParamsRule;//ya

type		: IDENTIFIER                                                                                        #typeIdentifierRule//ya
                | CHARDECL                                                                                      #typeCharDeclRule//ya
                | INTDECL                                                                                       #typeIntDeclRule//ya
                | FLOATDECL                                                                                     #typeFloatDeclRule//ya
                | BOOLEANDECL                                                                                   #typeBooleanDeclRule//ya
                | STRINGDECL                                                                                    #typeStringDeclRule;//ya

statement	: designator ( ASIGN expr | PIZQ actPars? PDER  | DOBLEMAS | DOBLEMENOS ) PyCOMA                    #statDesignatorRule//ya
		 |  IF PIZQ condition PDER statement ( ELSE statement )?                                                #statIfRule
		 |  FOR PIZQ expr PyCOMA condition? PyCOMA statement? PDER statement                                    #statForRule
		 |  WHILE PIZQ condition PDER statement                                                                 #statWhileRule
		 | FOREACH                                                                                              #statForeachRule
		 |  BREAK PyCOMA                                                                                        #statBreakRule
		 |  RETURN expr? PyCOMA                                                                                 #statReturnRule
		 |  READ PIZQ designator PDER PyCOMA                                                                    #statReadRule
		 |  WRITE PIZQ expr (COMA NUMBER)? PDER PyCOMA                                                          #statWriteRule
		 |  block                                                                                               #statBlockRule
		 |  PyCOMA                                                                                              #statPyComaRule;

block		: BRACKETIZQ ( statement )* BRACKETDER                                                              #blockRule;//ya
actPars	: expr ( COMA expr )*                                                                                   #actParsRule;
condition	: condTerm ( OR condTerm )*                                                                         #conditionnRule;
condTerm	: condFact ( AND condFact )*                                                                        #condTermRule;
condFact	: expr relop expr                                                                                   #condFactRule;
expr		: MENOS? term ( addop term )*                                                                       #exprRule;
term		: factor ( mulop factor )*                                                                          #termRule;

factor		: designator ( PIZQ actPars? PDER )?                                                                #factDesignatorRule//ya
		 |  NUMBER                                                                                              #factNumberRule//ya
		 |  CHARCONST                                                                                           #factCharConstRule//ya
		 |  (TRUE | FALSE)                                                                                      #factTrueOrFalseRule//ya
		 |  NEW IDENTIFIER                                                                                      #factNewRule//ya
		 | NEW type CORCHETEIZQ expr CORCHETEDER                                                                #factNewArrayRule//ya
		 |  PIZQ expr PDER                                                                                      #factExpreRule;//ya

designator	: IDENTIFIER ( POINT IDENTIFIER | CORCHETEIZQ expr CORCHETEDER )*                                   #designatorRule;//ya

relop		: IGUALIGUAL                                                                                        #relopIgualigualRule
                | DIFERENTE                                                                                     #relopDiferenteRule
                | MAYORQUE                                                                                      #relopMayorqueRule
                | MAYORIGUALQUE                                                                                 #relopMayorigualqueRule
                | MENORQUE                                                                                      #relopMenorQueRule
                | MENORIGUALQUE                                                                                 #relopMenorigualqueRule;

addop		:
              MAS                                                                                               #addopMasRule
              | MENOS                                                                                           #addopMenosRule;

mulop		:
              MUL                                                                                               #mulopMulRule
            | DIV                                                                                               #mulOpDivRule
            | DIVMODULAR                                                                                        #mulOpdivmodularRule;