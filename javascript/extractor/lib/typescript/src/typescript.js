import { createRequire } from "node:module";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const overridePath = process.env["SEMMLE_TYPESCRIPT_HOME"];
const require = createRequire(overridePath == null
    ? import.meta.url
    : resolve(overridePath, "package.json"));
if (overridePath != null
    && require.resolve("typescript/package.json") !== require.resolve("./package.json")) {
    throw new Error("SEMMLE_TYPESCRIPT_HOME must point to an installed TypeScript package with the native 7.1 API");
}
const ast = await import(pathToFileURL(require.resolve("typescript/ast")).href);
const sync = await import(pathToFileURL(require.resolve("typescript/sync")).href);

export const { API, JsxEmit } = sync;
export const {
    SyntaxKind, NodeFlags, LanguageVariant, createScanner,
    isRegularExpressionLiteral, isTemplateMiddle, isTemplateTail, isTemplateExpression,
    isTaggedTemplateExpression, isBinaryExpression,
    isExportAssignment, isExportDeclaration, isImportEqualsDeclaration, isImportSpecifier,
    isExportSpecifier, isImportTypeNode,
} = ast;
export const version = require("typescript").version;
