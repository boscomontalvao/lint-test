// ========== Violações de Espaçamento ==========
function test() {// space-before-function-paren, space-in-parens
  const x = 1 + 2;  // space-infix-ops, no-multi-spaces
  return x;
}

class MyClass {// brace-style, keyword-spacing
  method() {// object-curly-spacing, space-before-blocks
    const obj = { key: 'value' }; // object-curly-spacing
    const arr = [1, 2, 3];// array-bracket-spacing
  }
}

// ========== Violações de Declaração ==========
const a = 1;
const b = 2; // one-var, no-multi-spaces

// ========== Violações de Formatação ==========
function noSemi() {
  return 'missing semicolon';
}

const anyVar: string = 'value';

// ========== Violações de Nomenclatura ==========
const pascalCaseVar = 1; // @typescript-eslint/naming-convention
function UPPER_CASE_FUNC() { } // @typescript-eslint/naming-convention
enum MyEnum {
  lowerCaseMember = 1 // @typescript-eslint/naming-convention
}

// ========== Violações de Tipos ==========
function badType(param: String) { } // @typescript-eslint/ban-types
let badObj: Object = {} // @typescript-eslint/ban-types

// ========== Violações de Strings ==========
const doubleQuotes = "hello" // quotes
const backticks = `hello` // quotes

