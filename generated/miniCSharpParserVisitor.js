// Generated from C:/Users/BryanH/WebstormProjects/MiniCSProject\miniCSharpParser.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by miniCSharpParser.

function miniCSharpParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

miniCSharpParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
miniCSharpParserVisitor.prototype.constructor = miniCSharpParserVisitor;

// Visit a parse tree produced by miniCSharpParser#programN.
miniCSharpParserVisitor.prototype.visitProgramN = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#constDeclaRule.
miniCSharpParserVisitor.prototype.visitConstDeclaRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#varDeclaRule.
miniCSharpParserVisitor.prototype.visitVarDeclaRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#classDeclRule.
miniCSharpParserVisitor.prototype.visitClassDeclRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#methodDeclRule.
miniCSharpParserVisitor.prototype.visitMethodDeclRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#formParamsRule.
miniCSharpParserVisitor.prototype.visitFormParamsRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#typeIdentifierRule.
miniCSharpParserVisitor.prototype.visitTypeIdentifierRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#typeCharDeclRule.
miniCSharpParserVisitor.prototype.visitTypeCharDeclRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#typeIntDeclRule.
miniCSharpParserVisitor.prototype.visitTypeIntDeclRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#typeFloatDeclRule.
miniCSharpParserVisitor.prototype.visitTypeFloatDeclRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#typeBooleanDeclRule.
miniCSharpParserVisitor.prototype.visitTypeBooleanDeclRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#typeStringDeclRule.
miniCSharpParserVisitor.prototype.visitTypeStringDeclRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statDesignatorRule.
miniCSharpParserVisitor.prototype.visitStatDesignatorRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statIfRule.
miniCSharpParserVisitor.prototype.visitStatIfRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statForRule.
miniCSharpParserVisitor.prototype.visitStatForRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statWhileRule.
miniCSharpParserVisitor.prototype.visitStatWhileRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statForeachRule.
miniCSharpParserVisitor.prototype.visitStatForeachRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statBreakRule.
miniCSharpParserVisitor.prototype.visitStatBreakRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statReturnRule.
miniCSharpParserVisitor.prototype.visitStatReturnRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statReadRule.
miniCSharpParserVisitor.prototype.visitStatReadRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statWriteRule.
miniCSharpParserVisitor.prototype.visitStatWriteRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statBlockRule.
miniCSharpParserVisitor.prototype.visitStatBlockRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#statPyComaRule.
miniCSharpParserVisitor.prototype.visitStatPyComaRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#blockRule.
miniCSharpParserVisitor.prototype.visitBlockRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#actParsRule.
miniCSharpParserVisitor.prototype.visitActParsRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#conditionnRule.
miniCSharpParserVisitor.prototype.visitConditionnRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#condTermRule.
miniCSharpParserVisitor.prototype.visitCondTermRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#condFactRule.
miniCSharpParserVisitor.prototype.visitCondFactRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#exprRule.
miniCSharpParserVisitor.prototype.visitExprRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#termRule.
miniCSharpParserVisitor.prototype.visitTermRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#factDesignatorRule.
miniCSharpParserVisitor.prototype.visitFactDesignatorRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#factNumberRule.
miniCSharpParserVisitor.prototype.visitFactNumberRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#factCharConstRule.
miniCSharpParserVisitor.prototype.visitFactCharConstRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#factTrueOrFalseRule.
miniCSharpParserVisitor.prototype.visitFactTrueOrFalseRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#factNewRule.
miniCSharpParserVisitor.prototype.visitFactNewRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#factNewArrayRule.
miniCSharpParserVisitor.prototype.visitFactNewArrayRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#factExpreRule.
miniCSharpParserVisitor.prototype.visitFactExpreRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#designatorRule.
miniCSharpParserVisitor.prototype.visitDesignatorRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#relopIgualigualRule.
miniCSharpParserVisitor.prototype.visitRelopIgualigualRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#relopDiferenteRule.
miniCSharpParserVisitor.prototype.visitRelopDiferenteRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#relopMayorqueRule.
miniCSharpParserVisitor.prototype.visitRelopMayorqueRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#relopMayorigualqueRule.
miniCSharpParserVisitor.prototype.visitRelopMayorigualqueRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#relopMenorQueRule.
miniCSharpParserVisitor.prototype.visitRelopMenorQueRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#relopMenorigualqueRule.
miniCSharpParserVisitor.prototype.visitRelopMenorigualqueRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#addopMasRule.
miniCSharpParserVisitor.prototype.visitAddopMasRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#addopMenosRule.
miniCSharpParserVisitor.prototype.visitAddopMenosRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#mulopMulRule.
miniCSharpParserVisitor.prototype.visitMulopMulRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#mulOpDivRule.
miniCSharpParserVisitor.prototype.visitMulOpDivRule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by miniCSharpParser#mulOpdivmodularRule.
miniCSharpParserVisitor.prototype.visitMulOpdivmodularRule = function(ctx) {
  return this.visitChildren(ctx);
};



exports.miniCSharpParserVisitor = miniCSharpParserVisitor;