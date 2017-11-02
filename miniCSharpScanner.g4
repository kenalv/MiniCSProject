lexer grammar miniCSharpScanner;



//Tokens para palabras reservadas.

CLASS: 'class';
CHARDECL : 'char';
INTDECL : 'int';
FLOATDECL : 'float';
BOOLEANDECL : 'boolean';
STRINGDECL : 'string';

CONST: 'const';
VOID: 'void';
DOBLEMAS: '++';
DOBLEMENOS: '--';
IF : 'if';
ELSE: 'else';
FOR : 'for';
WHILE: 'while';
FOREACH : 'foreach';
BREAK : 'break';
RETURN : 'return';
NEW : 'new';
TRUE: 'true';
FALSE: 'false';

READ : 'read';
WRITE: 'write';



//Tokens para simbolos
PyCOMA	:	';' ;
COMA	:	',' ;
ASIGN	:	'=' ;
PIZQ	:	'(' ;
PDER	:	')' ;
BRACKETIZQ : '{';
BRACKETDER : '}';
OR : '||';
AND : '&&';
POINT : '.';
CORCHETEIZQ : '[';
CORCHETEDER : ']';

//Tokens operadores.
MENOS : '-';
MAS : '+';
MUL		:	'*' ;
DIV : '/';
DIVMODULAR : '%';

//Tokens lógicos
IGUALIGUAL : '==';
DIFERENTE : '!=';
MAYORQUE : '>';
MENORQUE : '<';
MAYORIGUALQUE : '>=';
MENORIGUALQUE : '<=';


//Tokens para expresiones regulares
NUMBER:
    '0'
    | '1'..'9' ('0'..'9')*
    | '0'..'9' '.' ('0'..'9')+
    ;

IDENTIFIER
	:	CharInicial CharContenido*
	;

CHARCONST  :  '\'' ('A'..'Z' | 'a'..'z' | '0'..'9'| '_' | PRINTABLE_CHARS) '\'';

STRING : '"' ('""'|~'"')* '"' ;

fragment
 PRINTABLE_CHARS   : '+' | '-' | '*' | '/' | '@' | '{' | '[' | ']' | '!' | '#' | '$' | '%' | '&' |'(' | ')' | ',' | '.' | ':'| ';' | '<' | '=' | '>'| '?';

fragment
CharContenido
   : CharInicial
   | '0'..'9'
   | '_'
   | '\u00B7'
   | '\u0300'..'\u036F'
   | '\u203F'..'\u2040'
   ;
fragment
CharInicial
   : 'A'..'Z' | 'a'..'z'
   | '\u00C0'..'\u00D6'
   | '\u00D8'..'\u00F6'
   | '\u00F8'..'\u02FF'
   | '\u0370'..'\u037D'
   | '\u037F'..'\u1FFF'
   | '\u200C'..'\u200D'
   | '\u2070'..'\u218F'
   | '\u2C00'..'\u2FEF'
   | '\u3001'..'\uD7FF'
   | '\uF900'..'\uFDCF'
   | '\uFDF0'..'\uFFFD'
   ;

//elementos omitidos
LINE_COMMENT:   '//' .*? '\r'? '\n' -> skip ;

SPECIAL_COMMENT
 : '/*' ( SPECIAL_COMMENT | DELIMITED_COMMENT | . )*? '*/' -> skip
 ;

fragment DELIMITED_COMMENT
 : '/*' .*? '*/'
 ;

WS          :   [ \t\n\r]+ -> skip ;