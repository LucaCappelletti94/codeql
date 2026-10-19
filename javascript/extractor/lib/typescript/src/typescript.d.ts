export {
    SyntaxKind, NodeFlags, LanguageVariant, createScanner,
    isRegularExpressionLiteral, isTemplateMiddle, isTemplateTail, isTemplateExpression,
    isTaggedTemplateExpression, isBinaryExpression,
    isExportAssignment, isExportDeclaration, isImportEqualsDeclaration, isImportSpecifier,
    isExportSpecifier, isImportTypeNode,
} from "typescript/ast";
export type { Node, SourceFile } from "typescript/ast";
export { API, JsxEmit } from "typescript/sync";
export type { Diagnostic } from "typescript/sync";

export const version: string;
