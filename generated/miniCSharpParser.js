// Generated from C:/Users/Kenneth/Desktop/MiniCSProject\miniCSharpParser.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var miniCSharpParserVisitor = require('./miniCSharpParserVisitor').miniCSharpParserVisitor;

var grammarFileName = "miniCSharpParser.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00036\u013d\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0007\u00020\n\u0002\f\u0002\u000e\u00023\u000b\u0002",
    "\u0003\u0002\u0003\u0002\u0007\u00027\n\u0002\f\u0002\u000e\u0002:\u000b",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0005\u0004H\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007",
    "\u0004M\n\u0004\f\u0004\u000e\u0004P\u000b\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005X\n\u0005",
    "\f\u0005\u000e\u0005[\u000b\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0005\u0006a\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0005\u0006f\n\u0006\u0003\u0006\u0003\u0006\u0007\u0006j\n\u0006\f",
    "\u0006\u000e\u0006m\u000b\u0006\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007",
    "w\n\u0007\f\u0007\u000e\u0007z\u000b\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0005\b\u0082\n\b\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0005\t\u0089\n\t\u0003\t\u0003\t\u0003\t\u0005\t\u008e\n\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0005\t\u0099\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t",
    "\u00a0\n\t\u0003\t\u0003\t\u0005\t\u00a4\n\t\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0005\t\u00b4\n\t\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005",
    "\t\u00c2\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u00c9\n",
    "\t\u0003\n\u0003\n\u0007\n\u00cd\n\n\f\n\u000e\n\u00d0\u000b\n\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u00d7\n\u000b",
    "\f\u000b\u000e\u000b\u00da\u000b\u000b\u0003\f\u0003\f\u0003\f\u0007",
    "\f\u00df\n\f\f\f\u000e\f\u00e2\u000b\f\u0003\r\u0003\r\u0003\r\u0007",
    "\r\u00e7\n\r\f\r\u000e\r\u00ea\u000b\r\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0005\u000f\u00f1\n\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0007\u000f\u00f7\n\u000f\f\u000f",
    "\u000e\u000f\u00fa\u000b\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0007\u0010\u0100\n\u0010\f\u0010\u000e\u0010\u0103\u000b\u0010",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u0108\n\u0011\u0003",
    "\u0011\u0005\u0011\u010b\n\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0005\u0011\u0118\n\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u011e\n\u0011\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0007\u0012\u0127\n\u0012\f\u0012\u000e\u0012\u012a\u000b\u0012\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0005",
    "\u0013\u0132\n\u0013\u0003\u0014\u0003\u0014\u0005\u0014\u0136\n\u0014",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u013b\n\u0015\u0003",
    "\u0015\u0002\u0002\u0016\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \"$&(\u0002\u0004\u0004\u00020022\u0003",
    "\u0002\u0015\u0016\u0002\u0165\u0002*\u0003\u0002\u0002\u0002\u0004",
    "=\u0003\u0002\u0002\u0002\u0006D\u0003\u0002\u0002\u0002\bS\u0003\u0002",
    "\u0002\u0002\n`\u0003\u0002\u0002\u0002\fp\u0003\u0002\u0002\u0002\u000e",
    "\u0081\u0003\u0002\u0002\u0002\u0010\u00c8\u0003\u0002\u0002\u0002\u0012",
    "\u00ca\u0003\u0002\u0002\u0002\u0014\u00d3\u0003\u0002\u0002\u0002\u0016",
    "\u00db\u0003\u0002\u0002\u0002\u0018\u00e3\u0003\u0002\u0002\u0002\u001a",
    "\u00eb\u0003\u0002\u0002\u0002\u001c\u00f0\u0003\u0002\u0002\u0002\u001e",
    "\u00fb\u0003\u0002\u0002\u0002 \u011d\u0003\u0002\u0002\u0002\"\u011f",
    "\u0003\u0002\u0002\u0002$\u0131\u0003\u0002\u0002\u0002&\u0135\u0003",
    "\u0002\u0002\u0002(\u013a\u0003\u0002\u0002\u0002*+\u0007\u0003\u0002",
    "\u0002+1\u00071\u0002\u0002,0\u0005\u0004\u0003\u0002-0\u0005\u0006",
    "\u0004\u0002.0\u0005\b\u0005\u0002/,\u0003\u0002\u0002\u0002/-\u0003",
    "\u0002\u0002\u0002/.\u0003\u0002\u0002\u000203\u0003\u0002\u0002\u0002",
    "1/\u0003\u0002\u0002\u000212\u0003\u0002\u0002\u000224\u0003\u0002\u0002",
    "\u000231\u0003\u0002\u0002\u000248\u0007\u001e\u0002\u000257\u0005\n",
    "\u0006\u000265\u0003\u0002\u0002\u00027:\u0003\u0002\u0002\u000286\u0003",
    "\u0002\u0002\u000289\u0003\u0002\u0002\u00029;\u0003\u0002\u0002\u0002",
    ":8\u0003\u0002\u0002\u0002;<\u0007\u001f\u0002\u0002<\u0003\u0003\u0002",
    "\u0002\u0002=>\u0007\t\u0002\u0002>?\u0005\u000e\b\u0002?@\u00071\u0002",
    "\u0002@A\u0007\u001b\u0002\u0002AB\t\u0002\u0002\u0002BC\u0007\u0019",
    "\u0002\u0002C\u0005\u0003\u0002\u0002\u0002DG\u0005\u000e\b\u0002EF",
    "\u0007#\u0002\u0002FH\u0007$\u0002\u0002GE\u0003\u0002\u0002\u0002G",
    "H\u0003\u0002\u0002\u0002HI\u0003\u0002\u0002\u0002IN\u00071\u0002\u0002",
    "JK\u0007\u001a\u0002\u0002KM\u00071\u0002\u0002LJ\u0003\u0002\u0002",
    "\u0002MP\u0003\u0002\u0002\u0002NL\u0003\u0002\u0002\u0002NO\u0003\u0002",
    "\u0002\u0002OQ\u0003\u0002\u0002\u0002PN\u0003\u0002\u0002\u0002QR\u0007",
    "\u0019\u0002\u0002R\u0007\u0003\u0002\u0002\u0002ST\u0007\u0003\u0002",
    "\u0002TU\u00071\u0002\u0002UY\u0007\u001e\u0002\u0002VX\u0005\u0006",
    "\u0004\u0002WV\u0003\u0002\u0002\u0002X[\u0003\u0002\u0002\u0002YW\u0003",
    "\u0002\u0002\u0002YZ\u0003\u0002\u0002\u0002Z\\\u0003\u0002\u0002\u0002",
    "[Y\u0003\u0002\u0002\u0002\\]\u0007\u001f\u0002\u0002]\t\u0003\u0002",
    "\u0002\u0002^a\u0005\u000e\b\u0002_a\u0007\n\u0002\u0002`^\u0003\u0002",
    "\u0002\u0002`_\u0003\u0002\u0002\u0002ab\u0003\u0002\u0002\u0002bc\u0007",
    "1\u0002\u0002ce\u0007\u001c\u0002\u0002df\u0005\f\u0007\u0002ed\u0003",
    "\u0002\u0002\u0002ef\u0003\u0002\u0002\u0002fg\u0003\u0002\u0002\u0002",
    "gk\u0007\u001d\u0002\u0002hj\u0005\u0006\u0004\u0002ih\u0003\u0002\u0002",
    "\u0002jm\u0003\u0002\u0002\u0002ki\u0003\u0002\u0002\u0002kl\u0003\u0002",
    "\u0002\u0002ln\u0003\u0002\u0002\u0002mk\u0003\u0002\u0002\u0002no\u0005",
    "\u0012\n\u0002o\u000b\u0003\u0002\u0002\u0002pq\u0005\u000e\b\u0002",
    "qx\u00071\u0002\u0002rs\u0007\u001a\u0002\u0002st\u0005\u000e\b\u0002",
    "tu\u00071\u0002\u0002uw\u0003\u0002\u0002\u0002vr\u0003\u0002\u0002",
    "\u0002wz\u0003\u0002\u0002\u0002xv\u0003\u0002\u0002\u0002xy\u0003\u0002",
    "\u0002\u0002y\r\u0003\u0002\u0002\u0002zx\u0003\u0002\u0002\u0002{\u0082",
    "\u00071\u0002\u0002|\u0082\u0007\u0004\u0002\u0002}\u0082\u0007\u0005",
    "\u0002\u0002~\u0082\u0007\u0006\u0002\u0002\u007f\u0082\u0007\u0007",
    "\u0002\u0002\u0080\u0082\u0007\b\u0002\u0002\u0081{\u0003\u0002\u0002",
    "\u0002\u0081|\u0003\u0002\u0002\u0002\u0081}\u0003\u0002\u0002\u0002",
    "\u0081~\u0003\u0002\u0002\u0002\u0081\u007f\u0003\u0002\u0002\u0002",
    "\u0081\u0080\u0003\u0002\u0002\u0002\u0082\u000f\u0003\u0002\u0002\u0002",
    "\u0083\u008d\u0005\"\u0012\u0002\u0084\u0085\u0007\u001b\u0002\u0002",
    "\u0085\u008e\u0005\u001c\u000f\u0002\u0086\u0088\u0007\u001c\u0002\u0002",
    "\u0087\u0089\u0005\u0014\u000b\u0002\u0088\u0087\u0003\u0002\u0002\u0002",
    "\u0088\u0089\u0003\u0002\u0002\u0002\u0089\u008a\u0003\u0002\u0002\u0002",
    "\u008a\u008e\u0007\u001d\u0002\u0002\u008b\u008e\u0007\u000b\u0002\u0002",
    "\u008c\u008e\u0007\f\u0002\u0002\u008d\u0084\u0003\u0002\u0002\u0002",
    "\u008d\u0086\u0003\u0002\u0002\u0002\u008d\u008b\u0003\u0002\u0002\u0002",
    "\u008d\u008c\u0003\u0002\u0002\u0002\u008e\u008f\u0003\u0002\u0002\u0002",
    "\u008f\u0090\u0007\u0019\u0002\u0002\u0090\u00c9\u0003\u0002\u0002\u0002",
    "\u0091\u0092\u0007\r\u0002\u0002\u0092\u0093\u0007\u001c\u0002\u0002",
    "\u0093\u0094\u0005\u0016\f\u0002\u0094\u0095\u0007\u001d\u0002\u0002",
    "\u0095\u0098\u0005\u0010\t\u0002\u0096\u0097\u0007\u000e\u0002\u0002",
    "\u0097\u0099\u0005\u0010\t\u0002\u0098\u0096\u0003\u0002\u0002\u0002",
    "\u0098\u0099\u0003\u0002\u0002\u0002\u0099\u00c9\u0003\u0002\u0002\u0002",
    "\u009a\u009b\u0007\u000f\u0002\u0002\u009b\u009c\u0007\u001c\u0002\u0002",
    "\u009c\u009d\u0005\u001c\u000f\u0002\u009d\u009f\u0007\u0019\u0002\u0002",
    "\u009e\u00a0\u0005\u0016\f\u0002\u009f\u009e\u0003\u0002\u0002\u0002",
    "\u009f\u00a0\u0003\u0002\u0002\u0002\u00a0\u00a1\u0003\u0002\u0002\u0002",
    "\u00a1\u00a3\u0007\u0019\u0002\u0002\u00a2\u00a4\u0005\u0010\t\u0002",
    "\u00a3\u00a2\u0003\u0002\u0002\u0002\u00a3\u00a4\u0003\u0002\u0002\u0002",
    "\u00a4\u00a5\u0003\u0002\u0002\u0002\u00a5\u00a6\u0007\u001d\u0002\u0002",
    "\u00a6\u00a7\u0005\u0010\t\u0002\u00a7\u00c9\u0003\u0002\u0002\u0002",
    "\u00a8\u00a9\u0007\u0010\u0002\u0002\u00a9\u00aa\u0007\u001c\u0002\u0002",
    "\u00aa\u00ab\u0005\u0016\f\u0002\u00ab\u00ac\u0007\u001d\u0002\u0002",
    "\u00ac\u00ad\u0005\u0010\t\u0002\u00ad\u00c9\u0003\u0002\u0002\u0002",
    "\u00ae\u00c9\u0007\u0011\u0002\u0002\u00af\u00b0\u0007\u0012\u0002\u0002",
    "\u00b0\u00c9\u0007\u0019\u0002\u0002\u00b1\u00b3\u0007\u0013\u0002\u0002",
    "\u00b2\u00b4\u0005\u001c\u000f\u0002\u00b3\u00b2\u0003\u0002\u0002\u0002",
    "\u00b3\u00b4\u0003\u0002\u0002\u0002\u00b4\u00b5\u0003\u0002\u0002\u0002",
    "\u00b5\u00c9\u0007\u0019\u0002\u0002\u00b6\u00b7\u0007\u0017\u0002\u0002",
    "\u00b7\u00b8\u0007\u001c\u0002\u0002\u00b8\u00b9\u0005\"\u0012\u0002",
    "\u00b9\u00ba\u0007\u001d\u0002\u0002\u00ba\u00bb\u0007\u0019\u0002\u0002",
    "\u00bb\u00c9\u0003\u0002\u0002\u0002\u00bc\u00bd\u0007\u0018\u0002\u0002",
    "\u00bd\u00be\u0007\u001c\u0002\u0002\u00be\u00c1\u0005\u001c\u000f\u0002",
    "\u00bf\u00c0\u0007\u001a\u0002\u0002\u00c0\u00c2\u00070\u0002\u0002",
    "\u00c1\u00bf\u0003\u0002\u0002\u0002\u00c1\u00c2\u0003\u0002\u0002\u0002",
    "\u00c2\u00c3\u0003\u0002\u0002\u0002\u00c3\u00c4\u0007\u001d\u0002\u0002",
    "\u00c4\u00c5\u0007\u0019\u0002\u0002\u00c5\u00c9\u0003\u0002\u0002\u0002",
    "\u00c6\u00c9\u0005\u0012\n\u0002\u00c7\u00c9\u0007\u0019\u0002\u0002",
    "\u00c8\u0083\u0003\u0002\u0002\u0002\u00c8\u0091\u0003\u0002\u0002\u0002",
    "\u00c8\u009a\u0003\u0002\u0002\u0002\u00c8\u00a8\u0003\u0002\u0002\u0002",
    "\u00c8\u00ae\u0003\u0002\u0002\u0002\u00c8\u00af\u0003\u0002\u0002\u0002",
    "\u00c8\u00b1\u0003\u0002\u0002\u0002\u00c8\u00b6\u0003\u0002\u0002\u0002",
    "\u00c8\u00bc\u0003\u0002\u0002\u0002\u00c8\u00c6\u0003\u0002\u0002\u0002",
    "\u00c8\u00c7\u0003\u0002\u0002\u0002\u00c9\u0011\u0003\u0002\u0002\u0002",
    "\u00ca\u00ce\u0007\u001e\u0002\u0002\u00cb\u00cd\u0005\u0010\t\u0002",
    "\u00cc\u00cb\u0003\u0002\u0002\u0002\u00cd\u00d0\u0003\u0002\u0002\u0002",
    "\u00ce\u00cc\u0003\u0002\u0002\u0002\u00ce\u00cf\u0003\u0002\u0002\u0002",
    "\u00cf\u00d1\u0003\u0002\u0002\u0002\u00d0\u00ce\u0003\u0002\u0002\u0002",
    "\u00d1\u00d2\u0007\u001f\u0002\u0002\u00d2\u0013\u0003\u0002\u0002\u0002",
    "\u00d3\u00d8\u0005\u001c\u000f\u0002\u00d4\u00d5\u0007\u001a\u0002\u0002",
    "\u00d5\u00d7\u0005\u001c\u000f\u0002\u00d6\u00d4\u0003\u0002\u0002\u0002",
    "\u00d7\u00da\u0003\u0002\u0002\u0002\u00d8\u00d6\u0003\u0002\u0002\u0002",
    "\u00d8\u00d9\u0003\u0002\u0002\u0002\u00d9\u0015\u0003\u0002\u0002\u0002",
    "\u00da\u00d8\u0003\u0002\u0002\u0002\u00db\u00e0\u0005\u0018\r\u0002",
    "\u00dc\u00dd\u0007 \u0002\u0002\u00dd\u00df\u0005\u0018\r\u0002\u00de",
    "\u00dc\u0003\u0002\u0002\u0002\u00df\u00e2\u0003\u0002\u0002\u0002\u00e0",
    "\u00de\u0003\u0002\u0002\u0002\u00e0\u00e1\u0003\u0002\u0002\u0002\u00e1",
    "\u0017\u0003\u0002\u0002\u0002\u00e2\u00e0\u0003\u0002\u0002\u0002\u00e3",
    "\u00e8\u0005\u001a\u000e\u0002\u00e4\u00e5\u0007!\u0002\u0002\u00e5",
    "\u00e7\u0005\u001a\u000e\u0002\u00e6\u00e4\u0003\u0002\u0002\u0002\u00e7",
    "\u00ea\u0003\u0002\u0002\u0002\u00e8\u00e6\u0003\u0002\u0002\u0002\u00e8",
    "\u00e9\u0003\u0002\u0002\u0002\u00e9\u0019\u0003\u0002\u0002\u0002\u00ea",
    "\u00e8\u0003\u0002\u0002\u0002\u00eb\u00ec\u0005\u001c\u000f\u0002\u00ec",
    "\u00ed\u0005$\u0013\u0002\u00ed\u00ee\u0005\u001c\u000f\u0002\u00ee",
    "\u001b\u0003\u0002\u0002\u0002\u00ef\u00f1\u0007%\u0002\u0002\u00f0",
    "\u00ef\u0003\u0002\u0002\u0002\u00f0\u00f1\u0003\u0002\u0002\u0002\u00f1",
    "\u00f2\u0003\u0002\u0002\u0002\u00f2\u00f8\u0005\u001e\u0010\u0002\u00f3",
    "\u00f4\u0005&\u0014\u0002\u00f4\u00f5\u0005\u001e\u0010\u0002\u00f5",
    "\u00f7\u0003\u0002\u0002\u0002\u00f6\u00f3\u0003\u0002\u0002\u0002\u00f7",
    "\u00fa\u0003\u0002\u0002\u0002\u00f8\u00f6\u0003\u0002\u0002\u0002\u00f8",
    "\u00f9\u0003\u0002\u0002\u0002\u00f9\u001d\u0003\u0002\u0002\u0002\u00fa",
    "\u00f8\u0003\u0002\u0002\u0002\u00fb\u0101\u0005 \u0011\u0002\u00fc",
    "\u00fd\u0005(\u0015\u0002\u00fd\u00fe\u0005 \u0011\u0002\u00fe\u0100",
    "\u0003\u0002\u0002\u0002\u00ff\u00fc\u0003\u0002\u0002\u0002\u0100\u0103",
    "\u0003\u0002\u0002\u0002\u0101\u00ff\u0003\u0002\u0002\u0002\u0101\u0102",
    "\u0003\u0002\u0002\u0002\u0102\u001f\u0003\u0002\u0002\u0002\u0103\u0101",
    "\u0003\u0002\u0002\u0002\u0104\u010a\u0005\"\u0012\u0002\u0105\u0107",
    "\u0007\u001c\u0002\u0002\u0106\u0108\u0005\u0014\u000b\u0002\u0107\u0106",
    "\u0003\u0002\u0002\u0002\u0107\u0108\u0003\u0002\u0002\u0002\u0108\u0109",
    "\u0003\u0002\u0002\u0002\u0109\u010b\u0007\u001d\u0002\u0002\u010a\u0105",
    "\u0003\u0002\u0002\u0002\u010a\u010b\u0003\u0002\u0002\u0002\u010b\u011e",
    "\u0003\u0002\u0002\u0002\u010c\u011e\u00070\u0002\u0002\u010d\u011e",
    "\u00072\u0002\u0002\u010e\u011e\t\u0003\u0002\u0002\u010f\u0110\u0007",
    "\u0014\u0002\u0002\u0110\u011e\u00071\u0002\u0002\u0111\u0112\u0007",
    "\u0014\u0002\u0002\u0112\u0117\u0005\u000e\b\u0002\u0113\u0114\u0007",
    "#\u0002\u0002\u0114\u0115\u0005\u001c\u000f\u0002\u0115\u0116\u0007",
    "$\u0002\u0002\u0116\u0118\u0003\u0002\u0002\u0002\u0117\u0113\u0003",
    "\u0002\u0002\u0002\u0117\u0118\u0003\u0002\u0002\u0002\u0118\u011e\u0003",
    "\u0002\u0002\u0002\u0119\u011a\u0007\u001c\u0002\u0002\u011a\u011b\u0005",
    "\u001c\u000f\u0002\u011b\u011c\u0007\u001d\u0002\u0002\u011c\u011e\u0003",
    "\u0002\u0002\u0002\u011d\u0104\u0003\u0002\u0002\u0002\u011d\u010c\u0003",
    "\u0002\u0002\u0002\u011d\u010d\u0003\u0002\u0002\u0002\u011d\u010e\u0003",
    "\u0002\u0002\u0002\u011d\u010f\u0003\u0002\u0002\u0002\u011d\u0111\u0003",
    "\u0002\u0002\u0002\u011d\u0119\u0003\u0002\u0002\u0002\u011e!\u0003",
    "\u0002\u0002\u0002\u011f\u0128\u00071\u0002\u0002\u0120\u0121\u0007",
    "\"\u0002\u0002\u0121\u0127\u00071\u0002\u0002\u0122\u0123\u0007#\u0002",
    "\u0002\u0123\u0124\u0005\u001c\u000f\u0002\u0124\u0125\u0007$\u0002",
    "\u0002\u0125\u0127\u0003\u0002\u0002\u0002\u0126\u0120\u0003\u0002\u0002",
    "\u0002\u0126\u0122\u0003\u0002\u0002\u0002\u0127\u012a\u0003\u0002\u0002",
    "\u0002\u0128\u0126\u0003\u0002\u0002\u0002\u0128\u0129\u0003\u0002\u0002",
    "\u0002\u0129#\u0003\u0002\u0002\u0002\u012a\u0128\u0003\u0002\u0002",
    "\u0002\u012b\u0132\u0007*\u0002\u0002\u012c\u0132\u0007+\u0002\u0002",
    "\u012d\u0132\u0007,\u0002\u0002\u012e\u0132\u0007.\u0002\u0002\u012f",
    "\u0132\u0007-\u0002\u0002\u0130\u0132\u0007/\u0002\u0002\u0131\u012b",
    "\u0003\u0002\u0002\u0002\u0131\u012c\u0003\u0002\u0002\u0002\u0131\u012d",
    "\u0003\u0002\u0002\u0002\u0131\u012e\u0003\u0002\u0002\u0002\u0131\u012f",
    "\u0003\u0002\u0002\u0002\u0131\u0130\u0003\u0002\u0002\u0002\u0132%",
    "\u0003\u0002\u0002\u0002\u0133\u0136\u0007&\u0002\u0002\u0134\u0136",
    "\u0007%\u0002\u0002\u0135\u0133\u0003\u0002\u0002\u0002\u0135\u0134",
    "\u0003\u0002\u0002\u0002\u0136\'\u0003\u0002\u0002\u0002\u0137\u013b",
    "\u0007\'\u0002\u0002\u0138\u013b\u0007(\u0002\u0002\u0139\u013b\u0007",
    ")\u0002\u0002\u013a\u0137\u0003\u0002\u0002\u0002\u013a\u0138\u0003",
    "\u0002\u0002\u0002\u013a\u0139\u0003\u0002\u0002\u0002\u013b)\u0003",
    "\u0002\u0002\u0002%/18GNY`ekx\u0081\u0088\u008d\u0098\u009f\u00a3\u00b3",
    "\u00c1\u00c8\u00ce\u00d8\u00e0\u00e8\u00f0\u00f8\u0101\u0107\u010a\u0117",
    "\u011d\u0126\u0128\u0131\u0135\u013a"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'class'", "'char'", "'int'", "'float'", "'boolean'", 
                     "'string'", "'const'", "'void'", "'++'", "'--'", "'if'", 
                     "'else'", "'for'", "'while'", "'foreach'", "'break'", 
                     "'return'", "'new'", "'true'", "'false'", "'read'", 
                     "'write'", "';'", "','", "'='", "'('", "')'", "'{'", 
                     "'}'", "'||'", "'&&'", "'.'", "'['", "']'", "'-'", 
                     "'+'", "'*'", "'/'", "'%'", "'=='", "'!='", "'>'", 
                     "'<'", "'>='", "'<='" ];

var symbolicNames = [ null, "CLASS", "CHARDECL", "INTDECL", "FLOATDECL", 
                      "BOOLEANDECL", "STRINGDECL", "CONST", "VOID", "DOBLEMAS", 
                      "DOBLEMENOS", "IF", "ELSE", "FOR", "WHILE", "FOREACH", 
                      "BREAK", "RETURN", "NEW", "TRUE", "FALSE", "READ", 
                      "WRITE", "PyCOMA", "COMA", "ASIGN", "PIZQ", "PDER", 
                      "BRACKETIZQ", "BRACKETDER", "OR", "AND", "POINT", 
                      "CORCHETEIZQ", "CORCHETEDER", "MENOS", "MAS", "MUL", 
                      "DIV", "DIVMODULAR", "IGUALIGUAL", "DIFERENTE", "MAYORQUE", 
                      "MENORQUE", "MAYORIGUALQUE", "MENORIGUALQUE", "NUMBER", 
                      "IDENTIFIER", "CHARCONST", "STRING", "LINE_COMMENT", 
                      "SPECIAL_COMMENT", "WS" ];

var ruleNames =  [ "program", "constDecl", "varDecl", "classDecl", "methodDecl", 
                   "formPars", "type", "statement", "block", "actPars", 
                   "condition", "condTerm", "condFact", "expr", "term", 
                   "factor", "designator", "relop", "addop", "mulop" ];

function miniCSharpParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

miniCSharpParser.prototype = Object.create(antlr4.Parser.prototype);
miniCSharpParser.prototype.constructor = miniCSharpParser;

Object.defineProperty(miniCSharpParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

miniCSharpParser.EOF = antlr4.Token.EOF;
miniCSharpParser.CLASS = 1;
miniCSharpParser.CHARDECL = 2;
miniCSharpParser.INTDECL = 3;
miniCSharpParser.FLOATDECL = 4;
miniCSharpParser.BOOLEANDECL = 5;
miniCSharpParser.STRINGDECL = 6;
miniCSharpParser.CONST = 7;
miniCSharpParser.VOID = 8;
miniCSharpParser.DOBLEMAS = 9;
miniCSharpParser.DOBLEMENOS = 10;
miniCSharpParser.IF = 11;
miniCSharpParser.ELSE = 12;
miniCSharpParser.FOR = 13;
miniCSharpParser.WHILE = 14;
miniCSharpParser.FOREACH = 15;
miniCSharpParser.BREAK = 16;
miniCSharpParser.RETURN = 17;
miniCSharpParser.NEW = 18;
miniCSharpParser.TRUE = 19;
miniCSharpParser.FALSE = 20;
miniCSharpParser.READ = 21;
miniCSharpParser.WRITE = 22;
miniCSharpParser.PyCOMA = 23;
miniCSharpParser.COMA = 24;
miniCSharpParser.ASIGN = 25;
miniCSharpParser.PIZQ = 26;
miniCSharpParser.PDER = 27;
miniCSharpParser.BRACKETIZQ = 28;
miniCSharpParser.BRACKETDER = 29;
miniCSharpParser.OR = 30;
miniCSharpParser.AND = 31;
miniCSharpParser.POINT = 32;
miniCSharpParser.CORCHETEIZQ = 33;
miniCSharpParser.CORCHETEDER = 34;
miniCSharpParser.MENOS = 35;
miniCSharpParser.MAS = 36;
miniCSharpParser.MUL = 37;
miniCSharpParser.DIV = 38;
miniCSharpParser.DIVMODULAR = 39;
miniCSharpParser.IGUALIGUAL = 40;
miniCSharpParser.DIFERENTE = 41;
miniCSharpParser.MAYORQUE = 42;
miniCSharpParser.MENORQUE = 43;
miniCSharpParser.MAYORIGUALQUE = 44;
miniCSharpParser.MENORIGUALQUE = 45;
miniCSharpParser.NUMBER = 46;
miniCSharpParser.IDENTIFIER = 47;
miniCSharpParser.CHARCONST = 48;
miniCSharpParser.STRING = 49;
miniCSharpParser.LINE_COMMENT = 50;
miniCSharpParser.SPECIAL_COMMENT = 51;
miniCSharpParser.WS = 52;

miniCSharpParser.RULE_program = 0;
miniCSharpParser.RULE_constDecl = 1;
miniCSharpParser.RULE_varDecl = 2;
miniCSharpParser.RULE_classDecl = 3;
miniCSharpParser.RULE_methodDecl = 4;
miniCSharpParser.RULE_formPars = 5;
miniCSharpParser.RULE_type = 6;
miniCSharpParser.RULE_statement = 7;
miniCSharpParser.RULE_block = 8;
miniCSharpParser.RULE_actPars = 9;
miniCSharpParser.RULE_condition = 10;
miniCSharpParser.RULE_condTerm = 11;
miniCSharpParser.RULE_condFact = 12;
miniCSharpParser.RULE_expr = 13;
miniCSharpParser.RULE_term = 14;
miniCSharpParser.RULE_factor = 15;
miniCSharpParser.RULE_designator = 16;
miniCSharpParser.RULE_relop = 17;
miniCSharpParser.RULE_addop = 18;
miniCSharpParser.RULE_mulop = 19;

function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniCSharpParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;


 
ProgramContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ProgramNContext(parser, ctx) {
	ProgramContext.call(this, parser);
    ProgramContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ProgramNContext.prototype = Object.create(ProgramContext.prototype);
ProgramNContext.prototype.constructor = ProgramNContext;

miniCSharpParser.ProgramNContext = ProgramNContext;

ProgramNContext.prototype.CLASS = function() {
    return this.getToken(miniCSharpParser.CLASS, 0);
};

ProgramNContext.prototype.IDENTIFIER = function() {
    return this.getToken(miniCSharpParser.IDENTIFIER, 0);
};

ProgramNContext.prototype.BRACKETIZQ = function() {
    return this.getToken(miniCSharpParser.BRACKETIZQ, 0);
};

ProgramNContext.prototype.BRACKETDER = function() {
    return this.getToken(miniCSharpParser.BRACKETDER, 0);
};

ProgramNContext.prototype.constDecl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConstDeclContext);
    } else {
        return this.getTypedRuleContext(ConstDeclContext,i);
    }
};

ProgramNContext.prototype.varDecl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VarDeclContext);
    } else {
        return this.getTypedRuleContext(VarDeclContext,i);
    }
};

ProgramNContext.prototype.classDecl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ClassDeclContext);
    } else {
        return this.getTypedRuleContext(ClassDeclContext,i);
    }
};

ProgramNContext.prototype.methodDecl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MethodDeclContext);
    } else {
        return this.getTypedRuleContext(MethodDeclContext,i);
    }
};
ProgramNContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitProgramN(this);
    } else {
        return visitor.visitChildren(this);
    }
};



miniCSharpParser.ProgramContext = ProgramContext;

miniCSharpParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, miniCSharpParser.RULE_program);
    var _la = 0; // Token type
    try {
        localctx = new ProgramNContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 40;
        this.match(miniCSharpParser.CLASS);
        this.state = 41;
        this.match(miniCSharpParser.IDENTIFIER);
        this.state = 47;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCSharpParser.CLASS) | (1 << miniCSharpParser.CHARDECL) | (1 << miniCSharpParser.INTDECL) | (1 << miniCSharpParser.FLOATDECL) | (1 << miniCSharpParser.BOOLEANDECL) | (1 << miniCSharpParser.STRINGDECL) | (1 << miniCSharpParser.CONST))) !== 0) || _la===miniCSharpParser.IDENTIFIER) {
            this.state = 45;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case miniCSharpParser.CONST:
                this.state = 42;
                this.constDecl();
                break;
            case miniCSharpParser.CHARDECL:
            case miniCSharpParser.INTDECL:
            case miniCSharpParser.FLOATDECL:
            case miniCSharpParser.BOOLEANDECL:
            case miniCSharpParser.STRINGDECL:
            case miniCSharpParser.IDENTIFIER:
                this.state = 43;
                this.varDecl();
                break;
            case miniCSharpParser.CLASS:
                this.state = 44;
                this.classDecl();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 49;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 50;
        this.match(miniCSharpParser.BRACKETIZQ);
        this.state = 54;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCSharpParser.CHARDECL) | (1 << miniCSharpParser.INTDECL) | (1 << miniCSharpParser.FLOATDECL) | (1 << miniCSharpParser.BOOLEANDECL) | (1 << miniCSharpParser.STRINGDECL) | (1 << miniCSharpParser.VOID))) !== 0) || _la===miniCSharpParser.IDENTIFIER) {
            this.state = 51;
            this.methodDecl();
            this.state = 56;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 57;
        this.match(miniCSharpParser.BRACKETDER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConstDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniCSharpParser.RULE_constDecl;
    return this;
}

ConstDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstDeclContext.prototype.constructor = ConstDeclContext;


 
ConstDeclContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ConstDeclaRuleContext(parser, ctx) {
	ConstDeclContext.call(this, parser);
    ConstDeclContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ConstDeclaRuleContext.prototype = Object.create(ConstDeclContext.prototype);
ConstDeclaRuleContext.prototype.constructor = ConstDeclaRuleContext;

miniCSharpParser.ConstDeclaRuleContext = ConstDeclaRuleContext;

ConstDeclaRuleContext.prototype.CONST = function() {
    return this.getToken(miniCSharpParser.CONST, 0);
};

ConstDeclaRuleContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

ConstDeclaRuleContext.prototype.IDENTIFIER = function() {
    return this.getToken(miniCSharpParser.IDENTIFIER, 0);
};

ConstDeclaRuleContext.prototype.ASIGN = function() {
    return this.getToken(miniCSharpParser.ASIGN, 0);
};

ConstDeclaRuleContext.prototype.PyCOMA = function() {
    return this.getToken(miniCSharpParser.PyCOMA, 0);
};

ConstDeclaRuleContext.prototype.NUMBER = function() {
    return this.getToken(miniCSharpParser.NUMBER, 0);
};

ConstDeclaRuleContext.prototype.CHARCONST = function() {
    return this.getToken(miniCSharpParser.CHARCONST, 0);
};
ConstDeclaRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitConstDeclaRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};



miniCSharpParser.ConstDeclContext = ConstDeclContext;

miniCSharpParser.prototype.constDecl = function() {

    var localctx = new ConstDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, miniCSharpParser.RULE_constDecl);
    var _la = 0; // Token type
    try {
        localctx = new ConstDeclaRuleContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 59;
        this.match(miniCSharpParser.CONST);
        this.state = 60;
        this.type();
        this.state = 61;
        this.match(miniCSharpParser.IDENTIFIER);
        this.state = 62;
        this.match(miniCSharpParser.ASIGN);
        this.state = 63;
        _la = this._input.LA(1);
        if(!(_la===miniCSharpParser.NUMBER || _la===miniCSharpParser.CHARCONST)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 64;
        this.match(miniCSharpParser.PyCOMA);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VarDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniCSharpParser.RULE_varDecl;
    return this;
}

VarDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarDeclContext.prototype.constructor = VarDeclContext;


 
VarDeclContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function VarDeclaRuleContext(parser, ctx) {
	VarDeclContext.call(this, parser);
    VarDeclContext.prototype.copyFrom.call(this, ctx);
    return this;
}

VarDeclaRuleContext.prototype = Object.create(VarDeclContext.prototype);
VarDeclaRuleContext.prototype.constructor = VarDeclaRuleContext;

miniCSharpParser.VarDeclaRuleContext = VarDeclaRuleContext;

VarDeclaRuleContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

VarDeclaRuleContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(miniCSharpParser.IDENTIFIER);
    } else {
        return this.getToken(miniCSharpParser.IDENTIFIER, i);
    }
};


VarDeclaRuleContext.prototype.PyCOMA = function() {
    return this.getToken(miniCSharpParser.PyCOMA, 0);
};

VarDeclaRuleContext.prototype.CORCHETEIZQ = function() {
    return this.getToken(miniCSharpParser.CORCHETEIZQ, 0);
};

VarDeclaRuleContext.prototype.CORCHETEDER = function() {
    return this.getToken(miniCSharpParser.CORCHETEDER, 0);
};

VarDeclaRuleContext.prototype.COMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(miniCSharpParser.COMA);
    } else {
        return this.getToken(miniCSharpParser.COMA, i);
    }
};

VarDeclaRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitVarDeclaRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};



miniCSharpParser.VarDeclContext = VarDeclContext;

miniCSharpParser.prototype.varDecl = function() {

    var localctx = new VarDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, miniCSharpParser.RULE_varDecl);
    var _la = 0; // Token type
    try {
        localctx = new VarDeclaRuleContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 66;
        this.type();
        this.state = 69;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===miniCSharpParser.CORCHETEIZQ) {
            this.state = 67;
            this.match(miniCSharpParser.CORCHETEIZQ);
            this.state = 68;
            this.match(miniCSharpParser.CORCHETEDER);
        }

        this.state = 71;
        this.match(miniCSharpParser.IDENTIFIER);
        this.state = 76;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===miniCSharpParser.COMA) {
            this.state = 72;
            this.match(miniCSharpParser.COMA);
            this.state = 73;
            this.match(miniCSharpParser.IDENTIFIER);
            this.state = 78;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 79;
        this.match(miniCSharpParser.PyCOMA);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ClassDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniCSharpParser.RULE_classDecl;
    return this;
}

ClassDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClassDeclContext.prototype.constructor = ClassDeclContext;


 
ClassDeclContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ClassDeclRuleContext(parser, ctx) {
	ClassDeclContext.call(this, parser);
    ClassDeclContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ClassDeclRuleContext.prototype = Object.create(ClassDeclContext.prototype);
ClassDeclRuleContext.prototype.constructor = ClassDeclRuleContext;

miniCSharpParser.ClassDeclRuleContext = ClassDeclRuleContext;

ClassDeclRuleContext.prototype.CLASS = function() {
    return this.getToken(miniCSharpParser.CLASS, 0);
};

ClassDeclRuleContext.prototype.IDENTIFIER = function() {
    return this.getToken(miniCSharpParser.IDENTIFIER, 0);
};

ClassDeclRuleContext.prototype.BRACKETIZQ = function() {
    return this.getToken(miniCSharpParser.BRACKETIZQ, 0);
};

ClassDeclRuleContext.prototype.BRACKETDER = function() {
    return this.getToken(miniCSharpParser.BRACKETDER, 0);
};

ClassDeclRuleContext.prototype.varDecl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VarDeclContext);
    } else {
        return this.getTypedRuleContext(VarDeclContext,i);
    }
};
ClassDeclRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitClassDeclRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};



miniCSharpParser.ClassDeclContext = ClassDeclContext;

miniCSharpParser.prototype.classDecl = function() {

    var localctx = new ClassDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, miniCSharpParser.RULE_classDecl);
    var _la = 0; // Token type
    try {
        localctx = new ClassDeclRuleContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 81;
        this.match(miniCSharpParser.CLASS);
        this.state = 82;
        this.match(miniCSharpParser.IDENTIFIER);
        this.state = 83;
        this.match(miniCSharpParser.BRACKETIZQ);
        this.state = 87;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCSharpParser.CHARDECL) | (1 << miniCSharpParser.INTDECL) | (1 << miniCSharpParser.FLOATDECL) | (1 << miniCSharpParser.BOOLEANDECL) | (1 << miniCSharpParser.STRINGDECL))) !== 0) || _la===miniCSharpParser.IDENTIFIER) {
            this.state = 84;
            this.varDecl();
            this.state = 89;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 90;
        this.match(miniCSharpParser.BRACKETDER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MethodDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniCSharpParser.RULE_methodDecl;
    return this;
}

MethodDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MethodDeclContext.prototype.constructor = MethodDeclContext;


 
MethodDeclContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function MethodDeclRuleContext(parser, ctx) {
	MethodDeclContext.call(this, parser);
    MethodDeclContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MethodDeclRuleContext.prototype = Object.create(MethodDeclContext.prototype);
MethodDeclRuleContext.prototype.constructor = MethodDeclRuleContext;

miniCSharpParser.MethodDeclRuleContext = MethodDeclRuleContext;

MethodDeclRuleContext.prototype.IDENTIFIER = function() {
    return this.getToken(miniCSharpParser.IDENTIFIER, 0);
};

MethodDeclRuleContext.prototype.PIZQ = function() {
    return this.getToken(miniCSharpParser.PIZQ, 0);
};

MethodDeclRuleContext.prototype.PDER = function() {
    return this.getToken(miniCSharpParser.PDER, 0);
};

MethodDeclRuleContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

MethodDeclRuleContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

MethodDeclRuleContext.prototype.VOID = function() {
    return this.getToken(miniCSharpParser.VOID, 0);
};

MethodDeclRuleContext.prototype.formPars = function() {
    return this.getTypedRuleContext(FormParsContext,0);
};

MethodDeclRuleContext.prototype.varDecl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VarDeclContext);
    } else {
        return this.getTypedRuleContext(VarDeclContext,i);
    }
};
MethodDeclRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitMethodDeclRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};



miniCSharpParser.MethodDeclContext = MethodDeclContext;

miniCSharpParser.prototype.methodDecl = function() {

    var localctx = new MethodDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, miniCSharpParser.RULE_methodDecl);
    var _la = 0; // Token type
    try {
        localctx = new MethodDeclRuleContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 94;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case miniCSharpParser.CHARDECL:
        case miniCSharpParser.INTDECL:
        case miniCSharpParser.FLOATDECL:
        case miniCSharpParser.BOOLEANDECL:
        case miniCSharpParser.STRINGDECL:
        case miniCSharpParser.IDENTIFIER:
            this.state = 92;
            this.type();
            break;
        case miniCSharpParser.VOID:
            this.state = 93;
            this.match(miniCSharpParser.VOID);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 96;
        this.match(miniCSharpParser.IDENTIFIER);
        this.state = 97;
        this.match(miniCSharpParser.PIZQ);
        this.state = 99;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCSharpParser.CHARDECL) | (1 << miniCSharpParser.INTDECL) | (1 << miniCSharpParser.FLOATDECL) | (1 << miniCSharpParser.BOOLEANDECL) | (1 << miniCSharpParser.STRINGDECL))) !== 0) || _la===miniCSharpParser.IDENTIFIER) {
            this.state = 98;
            this.formPars();
        }

        this.state = 101;
        this.match(miniCSharpParser.PDER);
        this.state = 105;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCSharpParser.CHARDECL) | (1 << miniCSharpParser.INTDECL) | (1 << miniCSharpParser.FLOATDECL) | (1 << miniCSharpParser.BOOLEANDECL) | (1 << miniCSharpParser.STRINGDECL))) !== 0) || _la===miniCSharpParser.IDENTIFIER) {
            this.state = 102;
            this.varDecl();
            this.state = 107;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 108;
        this.block();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FormParsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniCSharpParser.RULE_formPars;
    return this;
}

FormParsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormParsContext.prototype.constructor = FormParsContext;


 
FormParsContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function FormParamsRuleContext(parser, ctx) {
	FormParsContext.call(this, parser);
    FormParsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FormParamsRuleContext.prototype = Object.create(FormParsContext.prototype);
FormParamsRuleContext.prototype.constructor = FormParamsRuleContext;

miniCSharpParser.FormParamsRuleContext = FormParamsRuleContext;

FormParamsRuleContext.prototype.type = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TypeContext);
    } else {
        return this.getTypedRuleContext(TypeContext,i);
    }
};

FormParamsRuleContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(miniCSharpParser.IDENTIFIER);
    } else {
        return this.getToken(miniCSharpParser.IDENTIFIER, i);
    }
};


FormParamsRuleContext.prototype.COMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(miniCSharpParser.COMA);
    } else {
        return this.getToken(miniCSharpParser.COMA, i);
    }
};

FormParamsRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitFormParamsRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};



miniCSharpParser.FormParsContext = FormParsContext;

miniCSharpParser.prototype.formPars = function() {

    var localctx = new FormParsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, miniCSharpParser.RULE_formPars);
    var _la = 0; // Token type
    try {
        localctx = new FormParamsRuleContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 110;
        this.type();
        this.state = 111;
        this.match(miniCSharpParser.IDENTIFIER);
        this.state = 118;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===miniCSharpParser.COMA) {
            this.state = 112;
            this.match(miniCSharpParser.COMA);
            this.state = 113;
            this.type();
            this.state = 114;
            this.match(miniCSharpParser.IDENTIFIER);
            this.state = 120;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniCSharpParser.RULE_type;
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;


 
TypeContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function TypeBooleanDeclRuleContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TypeBooleanDeclRuleContext.prototype = Object.create(TypeContext.prototype);
TypeBooleanDeclRuleContext.prototype.constructor = TypeBooleanDeclRuleContext;

miniCSharpParser.TypeBooleanDeclRuleContext = TypeBooleanDeclRuleContext;

TypeBooleanDeclRuleContext.prototype.BOOLEANDECL = function() {
    return this.getToken(miniCSharpParser.BOOLEANDECL, 0);
};
TypeBooleanDeclRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitTypeBooleanDeclRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TypeIntDeclRuleContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TypeIntDeclRuleContext.prototype = Object.create(TypeContext.prototype);
TypeIntDeclRuleContext.prototype.constructor = TypeIntDeclRuleContext;

miniCSharpParser.TypeIntDeclRuleContext = TypeIntDeclRuleContext;

TypeIntDeclRuleContext.prototype.INTDECL = function() {
    return this.getToken(miniCSharpParser.INTDECL, 0);
};
TypeIntDeclRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitTypeIntDeclRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TypeFloatDeclRuleContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TypeFloatDeclRuleContext.prototype = Object.create(TypeContext.prototype);
TypeFloatDeclRuleContext.prototype.constructor = TypeFloatDeclRuleContext;

miniCSharpParser.TypeFloatDeclRuleContext = TypeFloatDeclRuleContext;

TypeFloatDeclRuleContext.prototype.FLOATDECL = function() {
    return this.getToken(miniCSharpParser.FLOATDECL, 0);
};
TypeFloatDeclRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitTypeFloatDeclRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TypeStringDeclRuleContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TypeStringDeclRuleContext.prototype = Object.create(TypeContext.prototype);
TypeStringDeclRuleContext.prototype.constructor = TypeStringDeclRuleContext;

miniCSharpParser.TypeStringDeclRuleContext = TypeStringDeclRuleContext;

TypeStringDeclRuleContext.prototype.STRINGDECL = function() {
    return this.getToken(miniCSharpParser.STRINGDECL, 0);
};
TypeStringDeclRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitTypeStringDeclRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TypeIdentifierRuleContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TypeIdentifierRuleContext.prototype = Object.create(TypeContext.prototype);
TypeIdentifierRuleContext.prototype.constructor = TypeIdentifierRuleContext;

miniCSharpParser.TypeIdentifierRuleContext = TypeIdentifierRuleContext;

TypeIdentifierRuleContext.prototype.IDENTIFIER = function() {
    return this.getToken(miniCSharpParser.IDENTIFIER, 0);
};
TypeIdentifierRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitTypeIdentifierRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TypeCharDeclRuleContext(parser, ctx) {
	TypeContext.call(this, parser);
    TypeContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TypeCharDeclRuleContext.prototype = Object.create(TypeContext.prototype);
TypeCharDeclRuleContext.prototype.constructor = TypeCharDeclRuleContext;

miniCSharpParser.TypeCharDeclRuleContext = TypeCharDeclRuleContext;

TypeCharDeclRuleContext.prototype.CHARDECL = function() {
    return this.getToken(miniCSharpParser.CHARDECL, 0);
};
TypeCharDeclRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitTypeCharDeclRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};



miniCSharpParser.TypeContext = TypeContext;

miniCSharpParser.prototype.type = function() {

    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, miniCSharpParser.RULE_type);
    try {
        this.state = 127;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case miniCSharpParser.IDENTIFIER:
            localctx = new TypeIdentifierRuleContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 121;
            this.match(miniCSharpParser.IDENTIFIER);
            break;
        case miniCSharpParser.CHARDECL:
            localctx = new TypeCharDeclRuleContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 122;
            this.match(miniCSharpParser.CHARDECL);
            break;
        case miniCSharpParser.INTDECL:
            localctx = new TypeIntDeclRuleContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 123;
            this.match(miniCSharpParser.INTDECL);
            break;
        case miniCSharpParser.FLOATDECL:
            localctx = new TypeFloatDeclRuleContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 124;
            this.match(miniCSharpParser.FLOATDECL);
            break;
        case miniCSharpParser.BOOLEANDECL:
            localctx = new TypeBooleanDeclRuleContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 125;
            this.match(miniCSharpParser.BOOLEANDECL);
            break;
        case miniCSharpParser.STRINGDECL:
            localctx = new TypeStringDeclRuleContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 126;
            this.match(miniCSharpParser.STRINGDECL);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniCSharpParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;


 
StatementContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function StatForeachRuleContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StatForeachRuleContext.prototype = Object.create(StatementContext.prototype);
StatForeachRuleContext.prototype.constructor = StatForeachRuleContext;

miniCSharpParser.StatForeachRuleContext = StatForeachRuleContext;

StatForeachRuleContext.prototype.FOREACH = function() {
    return this.getToken(miniCSharpParser.FOREACH, 0);
};
StatForeachRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitStatForeachRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StatForRuleContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StatForRuleContext.prototype = Object.create(StatementContext.prototype);
StatForRuleContext.prototype.constructor = StatForRuleContext;

miniCSharpParser.StatForRuleContext = StatForRuleContext;

StatForRuleContext.prototype.FOR = function() {
    return this.getToken(miniCSharpParser.FOR, 0);
};

StatForRuleContext.prototype.PIZQ = function() {
    return this.getToken(miniCSharpParser.PIZQ, 0);
};

StatForRuleContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

StatForRuleContext.prototype.PyCOMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(miniCSharpParser.PyCOMA);
    } else {
        return this.getToken(miniCSharpParser.PyCOMA, i);
    }
};


StatForRuleContext.prototype.PDER = function() {
    return this.getToken(miniCSharpParser.PDER, 0);
};

StatForRuleContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

StatForRuleContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};
StatForRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitStatForRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StatPyComaRuleContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StatPyComaRuleContext.prototype = Object.create(StatementContext.prototype);
StatPyComaRuleContext.prototype.constructor = StatPyComaRuleContext;

miniCSharpParser.StatPyComaRuleContext = StatPyComaRuleContext;

StatPyComaRuleContext.prototype.PyCOMA = function() {
    return this.getToken(miniCSharpParser.PyCOMA, 0);
};
StatPyComaRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitStatPyComaRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StatIfRuleContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StatIfRuleContext.prototype = Object.create(StatementContext.prototype);
StatIfRuleContext.prototype.constructor = StatIfRuleContext;

miniCSharpParser.StatIfRuleContext = StatIfRuleContext;

StatIfRuleContext.prototype.IF = function() {
    return this.getToken(miniCSharpParser.IF, 0);
};

StatIfRuleContext.prototype.PIZQ = function() {
    return this.getToken(miniCSharpParser.PIZQ, 0);
};

StatIfRuleContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};

StatIfRuleContext.prototype.PDER = function() {
    return this.getToken(miniCSharpParser.PDER, 0);
};

StatIfRuleContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

StatIfRuleContext.prototype.ELSE = function() {
    return this.getToken(miniCSharpParser.ELSE, 0);
};
StatIfRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitStatIfRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StatReturnRuleContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StatReturnRuleContext.prototype = Object.create(StatementContext.prototype);
StatReturnRuleContext.prototype.constructor = StatReturnRuleContext;

miniCSharpParser.StatReturnRuleContext = StatReturnRuleContext;

StatReturnRuleContext.prototype.RETURN = function() {
    return this.getToken(miniCSharpParser.RETURN, 0);
};

StatReturnRuleContext.prototype.PyCOMA = function() {
    return this.getToken(miniCSharpParser.PyCOMA, 0);
};

StatReturnRuleContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
StatReturnRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitStatReturnRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StatDesignatorRuleContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StatDesignatorRuleContext.prototype = Object.create(StatementContext.prototype);
StatDesignatorRuleContext.prototype.constructor = StatDesignatorRuleContext;

miniCSharpParser.StatDesignatorRuleContext = StatDesignatorRuleContext;

StatDesignatorRuleContext.prototype.designator = function() {
    return this.getTypedRuleContext(DesignatorContext,0);
};

StatDesignatorRuleContext.prototype.PyCOMA = function() {
    return this.getToken(miniCSharpParser.PyCOMA, 0);
};

StatDesignatorRuleContext.prototype.ASIGN = function() {
    return this.getToken(miniCSharpParser.ASIGN, 0);
};

StatDesignatorRuleContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

StatDesignatorRuleContext.prototype.PIZQ = function() {
    return this.getToken(miniCSharpParser.PIZQ, 0);
};

StatDesignatorRuleContext.prototype.PDER = function() {
    return this.getToken(miniCSharpParser.PDER, 0);
};

StatDesignatorRuleContext.prototype.DOBLEMAS = function() {
    return this.getToken(miniCSharpParser.DOBLEMAS, 0);
};

StatDesignatorRuleContext.prototype.DOBLEMENOS = function() {
    return this.getToken(miniCSharpParser.DOBLEMENOS, 0);
};

StatDesignatorRuleContext.prototype.actPars = function() {
    return this.getTypedRuleContext(ActParsContext,0);
};
StatDesignatorRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitStatDesignatorRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StatWhileRuleContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StatWhileRuleContext.prototype = Object.create(StatementContext.prototype);
StatWhileRuleContext.prototype.constructor = StatWhileRuleContext;

miniCSharpParser.StatWhileRuleContext = StatWhileRuleContext;

StatWhileRuleContext.prototype.WHILE = function() {
    return this.getToken(miniCSharpParser.WHILE, 0);
};

StatWhileRuleContext.prototype.PIZQ = function() {
    return this.getToken(miniCSharpParser.PIZQ, 0);
};

StatWhileRuleContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};

StatWhileRuleContext.prototype.PDER = function() {
    return this.getToken(miniCSharpParser.PDER, 0);
};

StatWhileRuleContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};
StatWhileRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitStatWhileRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StatBreakRuleContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StatBreakRuleContext.prototype = Object.create(StatementContext.prototype);
StatBreakRuleContext.prototype.constructor = StatBreakRuleContext;

miniCSharpParser.StatBreakRuleContext = StatBreakRuleContext;

StatBreakRuleContext.prototype.BREAK = function() {
    return this.getToken(miniCSharpParser.BREAK, 0);
};

StatBreakRuleContext.prototype.PyCOMA = function() {
    return this.getToken(miniCSharpParser.PyCOMA, 0);
};
StatBreakRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitStatBreakRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StatReadRuleContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StatReadRuleContext.prototype = Object.create(StatementContext.prototype);
StatReadRuleContext.prototype.constructor = StatReadRuleContext;

miniCSharpParser.StatReadRuleContext = StatReadRuleContext;

StatReadRuleContext.prototype.READ = function() {
    return this.getToken(miniCSharpParser.READ, 0);
};

StatReadRuleContext.prototype.PIZQ = function() {
    return this.getToken(miniCSharpParser.PIZQ, 0);
};

StatReadRuleContext.prototype.designator = function() {
    return this.getTypedRuleContext(DesignatorContext,0);
};

StatReadRuleContext.prototype.PDER = function() {
    return this.getToken(miniCSharpParser.PDER, 0);
};

StatReadRuleContext.prototype.PyCOMA = function() {
    return this.getToken(miniCSharpParser.PyCOMA, 0);
};
StatReadRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitStatReadRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StatBlockRuleContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StatBlockRuleContext.prototype = Object.create(StatementContext.prototype);
StatBlockRuleContext.prototype.constructor = StatBlockRuleContext;

miniCSharpParser.StatBlockRuleContext = StatBlockRuleContext;

StatBlockRuleContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};
StatBlockRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitStatBlockRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StatWriteRuleContext(parser, ctx) {
	StatementContext.call(this, parser);
    StatementContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StatWriteRuleContext.prototype = Object.create(StatementContext.prototype);
StatWriteRuleContext.prototype.constructor = StatWriteRuleContext;

miniCSharpParser.StatWriteRuleContext = StatWriteRuleContext;

StatWriteRuleContext.prototype.WRITE = function() {
    return this.getToken(miniCSharpParser.WRITE, 0);
};

StatWriteRuleContext.prototype.PIZQ = function() {
    return this.getToken(miniCSharpParser.PIZQ, 0);
};

StatWriteRuleContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

StatWriteRuleContext.prototype.PDER = function() {
    return this.getToken(miniCSharpParser.PDER, 0);
};

StatWriteRuleContext.prototype.PyCOMA = function() {
    return this.getToken(miniCSharpParser.PyCOMA, 0);
};

StatWriteRuleContext.prototype.COMA = function() {
    return this.getToken(miniCSharpParser.COMA, 0);
};

StatWriteRuleContext.prototype.NUMBER = function() {
    return this.getToken(miniCSharpParser.NUMBER, 0);
};
StatWriteRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitStatWriteRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};



miniCSharpParser.StatementContext = StatementContext;

miniCSharpParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, miniCSharpParser.RULE_statement);
    var _la = 0; // Token type
    try {
        this.state = 198;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case miniCSharpParser.IDENTIFIER:
            localctx = new StatDesignatorRuleContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 129;
            this.designator();
            this.state = 139;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case miniCSharpParser.ASIGN:
                this.state = 130;
                this.match(miniCSharpParser.ASIGN);
                this.state = 131;
                this.expr();
                break;
            case miniCSharpParser.PIZQ:
                this.state = 132;
                this.match(miniCSharpParser.PIZQ);
                this.state = 134;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(((((_la - 18)) & ~0x1f) == 0 && ((1 << (_la - 18)) & ((1 << (miniCSharpParser.NEW - 18)) | (1 << (miniCSharpParser.TRUE - 18)) | (1 << (miniCSharpParser.FALSE - 18)) | (1 << (miniCSharpParser.PIZQ - 18)) | (1 << (miniCSharpParser.MENOS - 18)) | (1 << (miniCSharpParser.NUMBER - 18)) | (1 << (miniCSharpParser.IDENTIFIER - 18)) | (1 << (miniCSharpParser.CHARCONST - 18)))) !== 0)) {
                    this.state = 133;
                    this.actPars();
                }

                this.state = 136;
                this.match(miniCSharpParser.PDER);
                break;
            case miniCSharpParser.DOBLEMAS:
                this.state = 137;
                this.match(miniCSharpParser.DOBLEMAS);
                break;
            case miniCSharpParser.DOBLEMENOS:
                this.state = 138;
                this.match(miniCSharpParser.DOBLEMENOS);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 141;
            this.match(miniCSharpParser.PyCOMA);
            break;
        case miniCSharpParser.IF:
            localctx = new StatIfRuleContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 143;
            this.match(miniCSharpParser.IF);
            this.state = 144;
            this.match(miniCSharpParser.PIZQ);
            this.state = 145;
            this.condition();
            this.state = 146;
            this.match(miniCSharpParser.PDER);
            this.state = 147;
            this.statement();
            this.state = 150;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
            if(la_===1) {
                this.state = 148;
                this.match(miniCSharpParser.ELSE);
                this.state = 149;
                this.statement();

            }
            break;
        case miniCSharpParser.FOR:
            localctx = new StatForRuleContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 152;
            this.match(miniCSharpParser.FOR);
            this.state = 153;
            this.match(miniCSharpParser.PIZQ);
            this.state = 154;
            this.expr();
            this.state = 155;
            this.match(miniCSharpParser.PyCOMA);
            this.state = 157;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 18)) & ~0x1f) == 0 && ((1 << (_la - 18)) & ((1 << (miniCSharpParser.NEW - 18)) | (1 << (miniCSharpParser.TRUE - 18)) | (1 << (miniCSharpParser.FALSE - 18)) | (1 << (miniCSharpParser.PIZQ - 18)) | (1 << (miniCSharpParser.MENOS - 18)) | (1 << (miniCSharpParser.NUMBER - 18)) | (1 << (miniCSharpParser.IDENTIFIER - 18)) | (1 << (miniCSharpParser.CHARCONST - 18)))) !== 0)) {
                this.state = 156;
                this.condition();
            }

            this.state = 159;
            this.match(miniCSharpParser.PyCOMA);
            this.state = 161;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCSharpParser.IF) | (1 << miniCSharpParser.FOR) | (1 << miniCSharpParser.WHILE) | (1 << miniCSharpParser.FOREACH) | (1 << miniCSharpParser.BREAK) | (1 << miniCSharpParser.RETURN) | (1 << miniCSharpParser.READ) | (1 << miniCSharpParser.WRITE) | (1 << miniCSharpParser.PyCOMA) | (1 << miniCSharpParser.BRACKETIZQ))) !== 0) || _la===miniCSharpParser.IDENTIFIER) {
                this.state = 160;
                this.statement();
            }

            this.state = 163;
            this.match(miniCSharpParser.PDER);
            this.state = 164;
            this.statement();
            break;
        case miniCSharpParser.WHILE:
            localctx = new StatWhileRuleContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 166;
            this.match(miniCSharpParser.WHILE);
            this.state = 167;
            this.match(miniCSharpParser.PIZQ);
            this.state = 168;
            this.condition();
            this.state = 169;
            this.match(miniCSharpParser.PDER);
            this.state = 170;
            this.statement();
            break;
        case miniCSharpParser.FOREACH:
            localctx = new StatForeachRuleContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 172;
            this.match(miniCSharpParser.FOREACH);
            break;
        case miniCSharpParser.BREAK:
            localctx = new StatBreakRuleContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 173;
            this.match(miniCSharpParser.BREAK);
            this.state = 174;
            this.match(miniCSharpParser.PyCOMA);
            break;
        case miniCSharpParser.RETURN:
            localctx = new StatReturnRuleContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 175;
            this.match(miniCSharpParser.RETURN);
            this.state = 177;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 18)) & ~0x1f) == 0 && ((1 << (_la - 18)) & ((1 << (miniCSharpParser.NEW - 18)) | (1 << (miniCSharpParser.TRUE - 18)) | (1 << (miniCSharpParser.FALSE - 18)) | (1 << (miniCSharpParser.PIZQ - 18)) | (1 << (miniCSharpParser.MENOS - 18)) | (1 << (miniCSharpParser.NUMBER - 18)) | (1 << (miniCSharpParser.IDENTIFIER - 18)) | (1 << (miniCSharpParser.CHARCONST - 18)))) !== 0)) {
                this.state = 176;
                this.expr();
            }

            this.state = 179;
            this.match(miniCSharpParser.PyCOMA);
            break;
        case miniCSharpParser.READ:
            localctx = new StatReadRuleContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 180;
            this.match(miniCSharpParser.READ);
            this.state = 181;
            this.match(miniCSharpParser.PIZQ);
            this.state = 182;
            this.designator();
            this.state = 183;
            this.match(miniCSharpParser.PDER);
            this.state = 184;
            this.match(miniCSharpParser.PyCOMA);
            break;
        case miniCSharpParser.WRITE:
            localctx = new StatWriteRuleContext(this, localctx);
            this.enterOuterAlt(localctx, 9);
            this.state = 186;
            this.match(miniCSharpParser.WRITE);
            this.state = 187;
            this.match(miniCSharpParser.PIZQ);
            this.state = 188;
            this.expr();
            this.state = 191;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===miniCSharpParser.COMA) {
                this.state = 189;
                this.match(miniCSharpParser.COMA);
                this.state = 190;
                this.match(miniCSharpParser.NUMBER);
            }

            this.state = 193;
            this.match(miniCSharpParser.PDER);
            this.state = 194;
            this.match(miniCSharpParser.PyCOMA);
            break;
        case miniCSharpParser.BRACKETIZQ:
            localctx = new StatBlockRuleContext(this, localctx);
            this.enterOuterAlt(localctx, 10);
            this.state = 196;
            this.block();
            break;
        case miniCSharpParser.PyCOMA:
            localctx = new StatPyComaRuleContext(this, localctx);
            this.enterOuterAlt(localctx, 11);
            this.state = 197;
            this.match(miniCSharpParser.PyCOMA);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniCSharpParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;


 
BlockContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function BlockRuleContext(parser, ctx) {
	BlockContext.call(this, parser);
    BlockContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BlockRuleContext.prototype = Object.create(BlockContext.prototype);
BlockRuleContext.prototype.constructor = BlockRuleContext;

miniCSharpParser.BlockRuleContext = BlockRuleContext;

BlockRuleContext.prototype.BRACKETIZQ = function() {
    return this.getToken(miniCSharpParser.BRACKETIZQ, 0);
};

BlockRuleContext.prototype.BRACKETDER = function() {
    return this.getToken(miniCSharpParser.BRACKETDER, 0);
};

BlockRuleContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};
BlockRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitBlockRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};



miniCSharpParser.BlockContext = BlockContext;

miniCSharpParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, miniCSharpParser.RULE_block);
    var _la = 0; // Token type
    try {
        localctx = new BlockRuleContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 200;
        this.match(miniCSharpParser.BRACKETIZQ);
        this.state = 204;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << miniCSharpParser.IF) | (1 << miniCSharpParser.FOR) | (1 << miniCSharpParser.WHILE) | (1 << miniCSharpParser.FOREACH) | (1 << miniCSharpParser.BREAK) | (1 << miniCSharpParser.RETURN) | (1 << miniCSharpParser.READ) | (1 << miniCSharpParser.WRITE) | (1 << miniCSharpParser.PyCOMA) | (1 << miniCSharpParser.BRACKETIZQ))) !== 0) || _la===miniCSharpParser.IDENTIFIER) {
            this.state = 201;
            this.statement();
            this.state = 206;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 207;
        this.match(miniCSharpParser.BRACKETDER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ActParsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniCSharpParser.RULE_actPars;
    return this;
}

ActParsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ActParsContext.prototype.constructor = ActParsContext;


 
ActParsContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ActParsRuleContext(parser, ctx) {
	ActParsContext.call(this, parser);
    ActParsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ActParsRuleContext.prototype = Object.create(ActParsContext.prototype);
ActParsRuleContext.prototype.constructor = ActParsRuleContext;

miniCSharpParser.ActParsRuleContext = ActParsRuleContext;

ActParsRuleContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ActParsRuleContext.prototype.COMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(miniCSharpParser.COMA);
    } else {
        return this.getToken(miniCSharpParser.COMA, i);
    }
};

ActParsRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitActParsRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};



miniCSharpParser.ActParsContext = ActParsContext;

miniCSharpParser.prototype.actPars = function() {

    var localctx = new ActParsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, miniCSharpParser.RULE_actPars);
    var _la = 0; // Token type
    try {
        localctx = new ActParsRuleContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 209;
        this.expr();
        this.state = 214;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===miniCSharpParser.COMA) {
            this.state = 210;
            this.match(miniCSharpParser.COMA);
            this.state = 211;
            this.expr();
            this.state = 216;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniCSharpParser.RULE_condition;
    return this;
}

ConditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionContext.prototype.constructor = ConditionContext;


 
ConditionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ConditionnRuleContext(parser, ctx) {
	ConditionContext.call(this, parser);
    ConditionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ConditionnRuleContext.prototype = Object.create(ConditionContext.prototype);
ConditionnRuleContext.prototype.constructor = ConditionnRuleContext;

miniCSharpParser.ConditionnRuleContext = ConditionnRuleContext;

ConditionnRuleContext.prototype.condTerm = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CondTermContext);
    } else {
        return this.getTypedRuleContext(CondTermContext,i);
    }
};

ConditionnRuleContext.prototype.OR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(miniCSharpParser.OR);
    } else {
        return this.getToken(miniCSharpParser.OR, i);
    }
};

ConditionnRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitConditionnRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};



miniCSharpParser.ConditionContext = ConditionContext;

miniCSharpParser.prototype.condition = function() {

    var localctx = new ConditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, miniCSharpParser.RULE_condition);
    var _la = 0; // Token type
    try {
        localctx = new ConditionnRuleContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 217;
        this.condTerm();
        this.state = 222;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===miniCSharpParser.OR) {
            this.state = 218;
            this.match(miniCSharpParser.OR);
            this.state = 219;
            this.condTerm();
            this.state = 224;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CondTermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniCSharpParser.RULE_condTerm;
    return this;
}

CondTermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CondTermContext.prototype.constructor = CondTermContext;


 
CondTermContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function CondTermRuleContext(parser, ctx) {
	CondTermContext.call(this, parser);
    CondTermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CondTermRuleContext.prototype = Object.create(CondTermContext.prototype);
CondTermRuleContext.prototype.constructor = CondTermRuleContext;

miniCSharpParser.CondTermRuleContext = CondTermRuleContext;

CondTermRuleContext.prototype.condFact = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CondFactContext);
    } else {
        return this.getTypedRuleContext(CondFactContext,i);
    }
};

CondTermRuleContext.prototype.AND = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(miniCSharpParser.AND);
    } else {
        return this.getToken(miniCSharpParser.AND, i);
    }
};

CondTermRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitCondTermRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};



miniCSharpParser.CondTermContext = CondTermContext;

miniCSharpParser.prototype.condTerm = function() {

    var localctx = new CondTermContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, miniCSharpParser.RULE_condTerm);
    var _la = 0; // Token type
    try {
        localctx = new CondTermRuleContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 225;
        this.condFact();
        this.state = 230;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===miniCSharpParser.AND) {
            this.state = 226;
            this.match(miniCSharpParser.AND);
            this.state = 227;
            this.condFact();
            this.state = 232;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CondFactContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniCSharpParser.RULE_condFact;
    return this;
}

CondFactContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CondFactContext.prototype.constructor = CondFactContext;


 
CondFactContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function CondFactRuleContext(parser, ctx) {
	CondFactContext.call(this, parser);
    CondFactContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CondFactRuleContext.prototype = Object.create(CondFactContext.prototype);
CondFactRuleContext.prototype.constructor = CondFactRuleContext;

miniCSharpParser.CondFactRuleContext = CondFactRuleContext;

CondFactRuleContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

CondFactRuleContext.prototype.relop = function() {
    return this.getTypedRuleContext(RelopContext,0);
};
CondFactRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitCondFactRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};



miniCSharpParser.CondFactContext = CondFactContext;

miniCSharpParser.prototype.condFact = function() {

    var localctx = new CondFactContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, miniCSharpParser.RULE_condFact);
    try {
        localctx = new CondFactRuleContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 233;
        this.expr();
        this.state = 234;
        this.relop();
        this.state = 235;
        this.expr();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniCSharpParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;


 
ExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ExprRuleContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ExprRuleContext.prototype = Object.create(ExprContext.prototype);
ExprRuleContext.prototype.constructor = ExprRuleContext;

miniCSharpParser.ExprRuleContext = ExprRuleContext;

ExprRuleContext.prototype.term = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TermContext);
    } else {
        return this.getTypedRuleContext(TermContext,i);
    }
};

ExprRuleContext.prototype.MENOS = function() {
    return this.getToken(miniCSharpParser.MENOS, 0);
};

ExprRuleContext.prototype.addop = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AddopContext);
    } else {
        return this.getTypedRuleContext(AddopContext,i);
    }
};
ExprRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitExprRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};



miniCSharpParser.ExprContext = ExprContext;

miniCSharpParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, miniCSharpParser.RULE_expr);
    var _la = 0; // Token type
    try {
        localctx = new ExprRuleContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 238;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===miniCSharpParser.MENOS) {
            this.state = 237;
            this.match(miniCSharpParser.MENOS);
        }

        this.state = 240;
        this.term();
        this.state = 246;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===miniCSharpParser.MENOS || _la===miniCSharpParser.MAS) {
            this.state = 241;
            this.addop();
            this.state = 242;
            this.term();
            this.state = 248;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniCSharpParser.RULE_term;
    return this;
}

TermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TermContext.prototype.constructor = TermContext;


 
TermContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function TermRuleContext(parser, ctx) {
	TermContext.call(this, parser);
    TermContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TermRuleContext.prototype = Object.create(TermContext.prototype);
TermRuleContext.prototype.constructor = TermRuleContext;

miniCSharpParser.TermRuleContext = TermRuleContext;

TermRuleContext.prototype.factor = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FactorContext);
    } else {
        return this.getTypedRuleContext(FactorContext,i);
    }
};

TermRuleContext.prototype.mulop = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MulopContext);
    } else {
        return this.getTypedRuleContext(MulopContext,i);
    }
};
TermRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitTermRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};



miniCSharpParser.TermContext = TermContext;

miniCSharpParser.prototype.term = function() {

    var localctx = new TermContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, miniCSharpParser.RULE_term);
    var _la = 0; // Token type
    try {
        localctx = new TermRuleContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 249;
        this.factor();
        this.state = 255;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (miniCSharpParser.MUL - 37)) | (1 << (miniCSharpParser.DIV - 37)) | (1 << (miniCSharpParser.DIVMODULAR - 37)))) !== 0)) {
            this.state = 250;
            this.mulop();
            this.state = 251;
            this.factor();
            this.state = 257;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FactorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniCSharpParser.RULE_factor;
    return this;
}

FactorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FactorContext.prototype.constructor = FactorContext;


 
FactorContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function FactTrueOrFalseRuleContext(parser, ctx) {
	FactorContext.call(this, parser);
    FactorContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FactTrueOrFalseRuleContext.prototype = Object.create(FactorContext.prototype);
FactTrueOrFalseRuleContext.prototype.constructor = FactTrueOrFalseRuleContext;

miniCSharpParser.FactTrueOrFalseRuleContext = FactTrueOrFalseRuleContext;

FactTrueOrFalseRuleContext.prototype.TRUE = function() {
    return this.getToken(miniCSharpParser.TRUE, 0);
};

FactTrueOrFalseRuleContext.prototype.FALSE = function() {
    return this.getToken(miniCSharpParser.FALSE, 0);
};
FactTrueOrFalseRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitFactTrueOrFalseRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FactCharConstRuleContext(parser, ctx) {
	FactorContext.call(this, parser);
    FactorContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FactCharConstRuleContext.prototype = Object.create(FactorContext.prototype);
FactCharConstRuleContext.prototype.constructor = FactCharConstRuleContext;

miniCSharpParser.FactCharConstRuleContext = FactCharConstRuleContext;

FactCharConstRuleContext.prototype.CHARCONST = function() {
    return this.getToken(miniCSharpParser.CHARCONST, 0);
};
FactCharConstRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitFactCharConstRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FactDesignatorRuleContext(parser, ctx) {
	FactorContext.call(this, parser);
    FactorContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FactDesignatorRuleContext.prototype = Object.create(FactorContext.prototype);
FactDesignatorRuleContext.prototype.constructor = FactDesignatorRuleContext;

miniCSharpParser.FactDesignatorRuleContext = FactDesignatorRuleContext;

FactDesignatorRuleContext.prototype.designator = function() {
    return this.getTypedRuleContext(DesignatorContext,0);
};

FactDesignatorRuleContext.prototype.PIZQ = function() {
    return this.getToken(miniCSharpParser.PIZQ, 0);
};

FactDesignatorRuleContext.prototype.PDER = function() {
    return this.getToken(miniCSharpParser.PDER, 0);
};

FactDesignatorRuleContext.prototype.actPars = function() {
    return this.getTypedRuleContext(ActParsContext,0);
};
FactDesignatorRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitFactDesignatorRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FactExpreRuleContext(parser, ctx) {
	FactorContext.call(this, parser);
    FactorContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FactExpreRuleContext.prototype = Object.create(FactorContext.prototype);
FactExpreRuleContext.prototype.constructor = FactExpreRuleContext;

miniCSharpParser.FactExpreRuleContext = FactExpreRuleContext;

FactExpreRuleContext.prototype.PIZQ = function() {
    return this.getToken(miniCSharpParser.PIZQ, 0);
};

FactExpreRuleContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

FactExpreRuleContext.prototype.PDER = function() {
    return this.getToken(miniCSharpParser.PDER, 0);
};
FactExpreRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitFactExpreRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FactNewRuleContext(parser, ctx) {
	FactorContext.call(this, parser);
    FactorContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FactNewRuleContext.prototype = Object.create(FactorContext.prototype);
FactNewRuleContext.prototype.constructor = FactNewRuleContext;

miniCSharpParser.FactNewRuleContext = FactNewRuleContext;

FactNewRuleContext.prototype.NEW = function() {
    return this.getToken(miniCSharpParser.NEW, 0);
};

FactNewRuleContext.prototype.IDENTIFIER = function() {
    return this.getToken(miniCSharpParser.IDENTIFIER, 0);
};
FactNewRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitFactNewRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FactNewArrayRuleContext(parser, ctx) {
	FactorContext.call(this, parser);
    FactorContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FactNewArrayRuleContext.prototype = Object.create(FactorContext.prototype);
FactNewArrayRuleContext.prototype.constructor = FactNewArrayRuleContext;

miniCSharpParser.FactNewArrayRuleContext = FactNewArrayRuleContext;

FactNewArrayRuleContext.prototype.NEW = function() {
    return this.getToken(miniCSharpParser.NEW, 0);
};

FactNewArrayRuleContext.prototype.type = function() {
    return this.getTypedRuleContext(TypeContext,0);
};

FactNewArrayRuleContext.prototype.CORCHETEIZQ = function() {
    return this.getToken(miniCSharpParser.CORCHETEIZQ, 0);
};

FactNewArrayRuleContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

FactNewArrayRuleContext.prototype.CORCHETEDER = function() {
    return this.getToken(miniCSharpParser.CORCHETEDER, 0);
};
FactNewArrayRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitFactNewArrayRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FactNumberRuleContext(parser, ctx) {
	FactorContext.call(this, parser);
    FactorContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FactNumberRuleContext.prototype = Object.create(FactorContext.prototype);
FactNumberRuleContext.prototype.constructor = FactNumberRuleContext;

miniCSharpParser.FactNumberRuleContext = FactNumberRuleContext;

FactNumberRuleContext.prototype.NUMBER = function() {
    return this.getToken(miniCSharpParser.NUMBER, 0);
};
FactNumberRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitFactNumberRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};



miniCSharpParser.FactorContext = FactorContext;

miniCSharpParser.prototype.factor = function() {

    var localctx = new FactorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, miniCSharpParser.RULE_factor);
    var _la = 0; // Token type
    try {
        this.state = 283;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
        switch(la_) {
        case 1:
            localctx = new FactDesignatorRuleContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 258;
            this.designator();
            this.state = 264;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===miniCSharpParser.PIZQ) {
                this.state = 259;
                this.match(miniCSharpParser.PIZQ);
                this.state = 261;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(((((_la - 18)) & ~0x1f) == 0 && ((1 << (_la - 18)) & ((1 << (miniCSharpParser.NEW - 18)) | (1 << (miniCSharpParser.TRUE - 18)) | (1 << (miniCSharpParser.FALSE - 18)) | (1 << (miniCSharpParser.PIZQ - 18)) | (1 << (miniCSharpParser.MENOS - 18)) | (1 << (miniCSharpParser.NUMBER - 18)) | (1 << (miniCSharpParser.IDENTIFIER - 18)) | (1 << (miniCSharpParser.CHARCONST - 18)))) !== 0)) {
                    this.state = 260;
                    this.actPars();
                }

                this.state = 263;
                this.match(miniCSharpParser.PDER);
            }

            break;

        case 2:
            localctx = new FactNumberRuleContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 266;
            this.match(miniCSharpParser.NUMBER);
            break;

        case 3:
            localctx = new FactCharConstRuleContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 267;
            this.match(miniCSharpParser.CHARCONST);
            break;

        case 4:
            localctx = new FactTrueOrFalseRuleContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 268;
            _la = this._input.LA(1);
            if(!(_la===miniCSharpParser.TRUE || _la===miniCSharpParser.FALSE)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;

        case 5:
            localctx = new FactNewRuleContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 269;
            this.match(miniCSharpParser.NEW);
            this.state = 270;
            this.match(miniCSharpParser.IDENTIFIER);
            break;

        case 6:
            localctx = new FactNewArrayRuleContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 271;
            this.match(miniCSharpParser.NEW);
            this.state = 272;
            this.type();
            this.state = 277;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===miniCSharpParser.CORCHETEIZQ) {
                this.state = 273;
                this.match(miniCSharpParser.CORCHETEIZQ);
                this.state = 274;
                this.expr();
                this.state = 275;
                this.match(miniCSharpParser.CORCHETEDER);
            }

            break;

        case 7:
            localctx = new FactExpreRuleContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 279;
            this.match(miniCSharpParser.PIZQ);
            this.state = 280;
            this.expr();
            this.state = 281;
            this.match(miniCSharpParser.PDER);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DesignatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniCSharpParser.RULE_designator;
    return this;
}

DesignatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DesignatorContext.prototype.constructor = DesignatorContext;


 
DesignatorContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function DesignatorRuleContext(parser, ctx) {
	DesignatorContext.call(this, parser);
    DesignatorContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DesignatorRuleContext.prototype = Object.create(DesignatorContext.prototype);
DesignatorRuleContext.prototype.constructor = DesignatorRuleContext;

miniCSharpParser.DesignatorRuleContext = DesignatorRuleContext;

DesignatorRuleContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(miniCSharpParser.IDENTIFIER);
    } else {
        return this.getToken(miniCSharpParser.IDENTIFIER, i);
    }
};


DesignatorRuleContext.prototype.POINT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(miniCSharpParser.POINT);
    } else {
        return this.getToken(miniCSharpParser.POINT, i);
    }
};


DesignatorRuleContext.prototype.CORCHETEIZQ = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(miniCSharpParser.CORCHETEIZQ);
    } else {
        return this.getToken(miniCSharpParser.CORCHETEIZQ, i);
    }
};


DesignatorRuleContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

DesignatorRuleContext.prototype.CORCHETEDER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(miniCSharpParser.CORCHETEDER);
    } else {
        return this.getToken(miniCSharpParser.CORCHETEDER, i);
    }
};

DesignatorRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitDesignatorRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};



miniCSharpParser.DesignatorContext = DesignatorContext;

miniCSharpParser.prototype.designator = function() {

    var localctx = new DesignatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, miniCSharpParser.RULE_designator);
    var _la = 0; // Token type
    try {
        localctx = new DesignatorRuleContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 285;
        this.match(miniCSharpParser.IDENTIFIER);
        this.state = 294;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===miniCSharpParser.POINT || _la===miniCSharpParser.CORCHETEIZQ) {
            this.state = 292;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case miniCSharpParser.POINT:
                this.state = 286;
                this.match(miniCSharpParser.POINT);
                this.state = 287;
                this.match(miniCSharpParser.IDENTIFIER);
                break;
            case miniCSharpParser.CORCHETEIZQ:
                this.state = 288;
                this.match(miniCSharpParser.CORCHETEIZQ);
                this.state = 289;
                this.expr();
                this.state = 290;
                this.match(miniCSharpParser.CORCHETEDER);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 296;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RelopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniCSharpParser.RULE_relop;
    return this;
}

RelopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RelopContext.prototype.constructor = RelopContext;


 
RelopContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function RelopMenorigualqueRuleContext(parser, ctx) {
	RelopContext.call(this, parser);
    RelopContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RelopMenorigualqueRuleContext.prototype = Object.create(RelopContext.prototype);
RelopMenorigualqueRuleContext.prototype.constructor = RelopMenorigualqueRuleContext;

miniCSharpParser.RelopMenorigualqueRuleContext = RelopMenorigualqueRuleContext;

RelopMenorigualqueRuleContext.prototype.MENORIGUALQUE = function() {
    return this.getToken(miniCSharpParser.MENORIGUALQUE, 0);
};
RelopMenorigualqueRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitRelopMenorigualqueRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function RelopMenorQueRuleContext(parser, ctx) {
	RelopContext.call(this, parser);
    RelopContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RelopMenorQueRuleContext.prototype = Object.create(RelopContext.prototype);
RelopMenorQueRuleContext.prototype.constructor = RelopMenorQueRuleContext;

miniCSharpParser.RelopMenorQueRuleContext = RelopMenorQueRuleContext;

RelopMenorQueRuleContext.prototype.MENORQUE = function() {
    return this.getToken(miniCSharpParser.MENORQUE, 0);
};
RelopMenorQueRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitRelopMenorQueRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function RelopDiferenteRuleContext(parser, ctx) {
	RelopContext.call(this, parser);
    RelopContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RelopDiferenteRuleContext.prototype = Object.create(RelopContext.prototype);
RelopDiferenteRuleContext.prototype.constructor = RelopDiferenteRuleContext;

miniCSharpParser.RelopDiferenteRuleContext = RelopDiferenteRuleContext;

RelopDiferenteRuleContext.prototype.DIFERENTE = function() {
    return this.getToken(miniCSharpParser.DIFERENTE, 0);
};
RelopDiferenteRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitRelopDiferenteRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function RelopMayorqueRuleContext(parser, ctx) {
	RelopContext.call(this, parser);
    RelopContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RelopMayorqueRuleContext.prototype = Object.create(RelopContext.prototype);
RelopMayorqueRuleContext.prototype.constructor = RelopMayorqueRuleContext;

miniCSharpParser.RelopMayorqueRuleContext = RelopMayorqueRuleContext;

RelopMayorqueRuleContext.prototype.MAYORQUE = function() {
    return this.getToken(miniCSharpParser.MAYORQUE, 0);
};
RelopMayorqueRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitRelopMayorqueRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function RelopIgualigualRuleContext(parser, ctx) {
	RelopContext.call(this, parser);
    RelopContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RelopIgualigualRuleContext.prototype = Object.create(RelopContext.prototype);
RelopIgualigualRuleContext.prototype.constructor = RelopIgualigualRuleContext;

miniCSharpParser.RelopIgualigualRuleContext = RelopIgualigualRuleContext;

RelopIgualigualRuleContext.prototype.IGUALIGUAL = function() {
    return this.getToken(miniCSharpParser.IGUALIGUAL, 0);
};
RelopIgualigualRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitRelopIgualigualRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function RelopMayorigualqueRuleContext(parser, ctx) {
	RelopContext.call(this, parser);
    RelopContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RelopMayorigualqueRuleContext.prototype = Object.create(RelopContext.prototype);
RelopMayorigualqueRuleContext.prototype.constructor = RelopMayorigualqueRuleContext;

miniCSharpParser.RelopMayorigualqueRuleContext = RelopMayorigualqueRuleContext;

RelopMayorigualqueRuleContext.prototype.MAYORIGUALQUE = function() {
    return this.getToken(miniCSharpParser.MAYORIGUALQUE, 0);
};
RelopMayorigualqueRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitRelopMayorigualqueRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};



miniCSharpParser.RelopContext = RelopContext;

miniCSharpParser.prototype.relop = function() {

    var localctx = new RelopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, miniCSharpParser.RULE_relop);
    try {
        this.state = 303;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case miniCSharpParser.IGUALIGUAL:
            localctx = new RelopIgualigualRuleContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 297;
            this.match(miniCSharpParser.IGUALIGUAL);
            break;
        case miniCSharpParser.DIFERENTE:
            localctx = new RelopDiferenteRuleContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 298;
            this.match(miniCSharpParser.DIFERENTE);
            break;
        case miniCSharpParser.MAYORQUE:
            localctx = new RelopMayorqueRuleContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 299;
            this.match(miniCSharpParser.MAYORQUE);
            break;
        case miniCSharpParser.MAYORIGUALQUE:
            localctx = new RelopMayorigualqueRuleContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 300;
            this.match(miniCSharpParser.MAYORIGUALQUE);
            break;
        case miniCSharpParser.MENORQUE:
            localctx = new RelopMenorQueRuleContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 301;
            this.match(miniCSharpParser.MENORQUE);
            break;
        case miniCSharpParser.MENORIGUALQUE:
            localctx = new RelopMenorigualqueRuleContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 302;
            this.match(miniCSharpParser.MENORIGUALQUE);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AddopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniCSharpParser.RULE_addop;
    return this;
}

AddopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AddopContext.prototype.constructor = AddopContext;


 
AddopContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function AddopMenosRuleContext(parser, ctx) {
	AddopContext.call(this, parser);
    AddopContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddopMenosRuleContext.prototype = Object.create(AddopContext.prototype);
AddopMenosRuleContext.prototype.constructor = AddopMenosRuleContext;

miniCSharpParser.AddopMenosRuleContext = AddopMenosRuleContext;

AddopMenosRuleContext.prototype.MENOS = function() {
    return this.getToken(miniCSharpParser.MENOS, 0);
};
AddopMenosRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitAddopMenosRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AddopMasRuleContext(parser, ctx) {
	AddopContext.call(this, parser);
    AddopContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddopMasRuleContext.prototype = Object.create(AddopContext.prototype);
AddopMasRuleContext.prototype.constructor = AddopMasRuleContext;

miniCSharpParser.AddopMasRuleContext = AddopMasRuleContext;

AddopMasRuleContext.prototype.MAS = function() {
    return this.getToken(miniCSharpParser.MAS, 0);
};
AddopMasRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitAddopMasRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};



miniCSharpParser.AddopContext = AddopContext;

miniCSharpParser.prototype.addop = function() {

    var localctx = new AddopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, miniCSharpParser.RULE_addop);
    try {
        this.state = 307;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case miniCSharpParser.MAS:
            localctx = new AddopMasRuleContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 305;
            this.match(miniCSharpParser.MAS);
            break;
        case miniCSharpParser.MENOS:
            localctx = new AddopMenosRuleContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 306;
            this.match(miniCSharpParser.MENOS);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MulopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = miniCSharpParser.RULE_mulop;
    return this;
}

MulopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MulopContext.prototype.constructor = MulopContext;


 
MulopContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function MulOpDivRuleContext(parser, ctx) {
	MulopContext.call(this, parser);
    MulopContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MulOpDivRuleContext.prototype = Object.create(MulopContext.prototype);
MulOpDivRuleContext.prototype.constructor = MulOpDivRuleContext;

miniCSharpParser.MulOpDivRuleContext = MulOpDivRuleContext;

MulOpDivRuleContext.prototype.DIV = function() {
    return this.getToken(miniCSharpParser.DIV, 0);
};
MulOpDivRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitMulOpDivRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MulOpdivmodularRuleContext(parser, ctx) {
	MulopContext.call(this, parser);
    MulopContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MulOpdivmodularRuleContext.prototype = Object.create(MulopContext.prototype);
MulOpdivmodularRuleContext.prototype.constructor = MulOpdivmodularRuleContext;

miniCSharpParser.MulOpdivmodularRuleContext = MulOpdivmodularRuleContext;

MulOpdivmodularRuleContext.prototype.DIVMODULAR = function() {
    return this.getToken(miniCSharpParser.DIVMODULAR, 0);
};
MulOpdivmodularRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitMulOpdivmodularRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MulopMulRuleContext(parser, ctx) {
	MulopContext.call(this, parser);
    MulopContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MulopMulRuleContext.prototype = Object.create(MulopContext.prototype);
MulopMulRuleContext.prototype.constructor = MulopMulRuleContext;

miniCSharpParser.MulopMulRuleContext = MulopMulRuleContext;

MulopMulRuleContext.prototype.MUL = function() {
    return this.getToken(miniCSharpParser.MUL, 0);
};
MulopMulRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof miniCSharpParserVisitor ) {
        return visitor.visitMulopMulRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};



miniCSharpParser.MulopContext = MulopContext;

miniCSharpParser.prototype.mulop = function() {

    var localctx = new MulopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, miniCSharpParser.RULE_mulop);
    try {
        this.state = 312;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case miniCSharpParser.MUL:
            localctx = new MulopMulRuleContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 309;
            this.match(miniCSharpParser.MUL);
            break;
        case miniCSharpParser.DIV:
            localctx = new MulOpDivRuleContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 310;
            this.match(miniCSharpParser.DIV);
            break;
        case miniCSharpParser.DIVMODULAR:
            localctx = new MulOpdivmodularRuleContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 311;
            this.match(miniCSharpParser.DIVMODULAR);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.miniCSharpParser = miniCSharpParser;
