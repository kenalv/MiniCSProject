/*
Este codigo se utiliará para ejecutar el codigo de las funciones
 */
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by miniCSharpParser.
function MiniCSharpParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

MiniCSharpParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
MiniCSharpParserVisitor.prototype.constructor = MiniCSharpParserVisitor;

// Visit a parse tree produced by miniCSharpParser#programN.
MiniCSharpParserVisitor.prototype.visitProgramN = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#constDeclaRule.
MiniCSharpParserVisitor.prototype.visitConstDeclaRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#varDeclaRule.
MiniCSharpParserVisitor.prototype.visitVarDeclaRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#classDeclRule.
MiniCSharpParserVisitor.prototype.visitClassDeclRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#methodDeclRule.
MiniCSharpParserVisitor.prototype.visitMethodDeclRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#formParamsRule.
MiniCSharpParserVisitor.prototype.visitFormParamsRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#typeIdentifierRule.
MiniCSharpParserVisitor.prototype.visitTypeIdentifierRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#typeCharDeclRule.
MiniCSharpParserVisitor.prototype.visitTypeCharDeclRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#typeIntDeclRule.
MiniCSharpParserVisitor.prototype.visitTypeIntDeclRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#typeFloatDeclRule.
MiniCSharpParserVisitor.prototype.visitTypeFloatDeclRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#typeBooleanDeclRule.
MiniCSharpParserVisitor.prototype.visitTypeBooleanDeclRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#typeStringDeclRule.
MiniCSharpParserVisitor.prototype.visitTypeStringDeclRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statDesignatorRule.
MiniCSharpParserVisitor.prototype.visitStatDesignatorRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statIfRule.
MiniCSharpParserVisitor.prototype.visitStatIfRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statForRule.
MiniCSharpParserVisitor.prototype.visitStatForRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statWhileRule.
MiniCSharpParserVisitor.prototype.visitStatWhileRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statForeachRule.
MiniCSharpParserVisitor.prototype.visitStatForeachRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statBreakRule.
MiniCSharpParserVisitor.prototype.visitStatBreakRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statReturnRule.
MiniCSharpParserVisitor.prototype.visitStatReturnRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statReadRule.
MiniCSharpParserVisitor.prototype.visitStatReadRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statWriteRule.
MiniCSharpParserVisitor.prototype.visitStatWriteRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statBlockRule.
MiniCSharpParserVisitor.prototype.visitStatBlockRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statPyComaRule.
MiniCSharpParserVisitor.prototype.visitStatPyComaRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#blockRule.
MiniCSharpParserVisitor.prototype.visitBlockRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#actParsRule.
MiniCSharpParserVisitor.prototype.visitActParsRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#conditionnRule.
MiniCSharpParserVisitor.prototype.visitConditionnRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#condTermRule.
MiniCSharpParserVisitor.prototype.visitCondTermRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#condFactRule.
MiniCSharpParserVisitor.prototype.visitCondFactRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#exprRule.
MiniCSharpParserVisitor.prototype.visitExprRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#termRule.
MiniCSharpParserVisitor.prototype.visitTermRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#factDesignatorRule.
MiniCSharpParserVisitor.prototype.visitFactDesignatorRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#factNumberRule.
MiniCSharpParserVisitor.prototype.visitFactNumberRule = function(ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by miniCSharpParser#factCharConstRule.
MiniCSharpParserVisitor.prototype.visitFactCharConstRule = function(ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by miniCSharpParser#factTrueOrFalseRule.
MiniCSharpParserVisitor.prototype.visitFactTrueOrFalseRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#factNewRule.
MiniCSharpParserVisitor.prototype.visitFactNewRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#factExpreRule.
MiniCSharpParserVisitor.prototype.visitFactExpreRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#designatorRule.
MiniCSharpParserVisitor.prototype.visitDesignatorRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#relopIgualigualRule.
MiniCSharpParserVisitor.prototype.visitRelopIgualigualRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#relopDiferenteRule.
MiniCSharpParserVisitor.prototype.visitRelopDiferenteRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#relopMayorqueRule.
MiniCSharpParserVisitor.prototype.visitRelopMayorqueRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#relopMayorigualqueRule.
MiniCSharpParserVisitor.prototype.visitRelopMayorigualqueRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#relopMenorQueRule.
MiniCSharpParserVisitor.prototype.visitRelopMenorQueRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#relopMenorigualqueRule.
MiniCSharpParserVisitor.prototype.visitRelopMenorigualqueRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#addopMasRule.
MiniCSharpParserVisitor.prototype.visitAddopMasRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#addopMenosRule.
MiniCSharpParserVisitor.prototype.visitAddopMenosRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#mulopMulRule.
MiniCSharpParserVisitor.prototype.visitMulopMulRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#mulOpDivRule.
MiniCSharpParserVisitor.prototype.visitMulOpDivRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#mulOpdivmodularRule.
MiniCSharpParserVisitor.prototype.visitMulOpdivmodularRule = function(ctx) {
  return this.visitChildren(ctx);
};

exports.miniCSharpParserVisitor = MiniCSharpParserVisitor;