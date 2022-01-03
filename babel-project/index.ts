// import * as babelCore from '@babel/core'
import * as parser from "@babel/parser";
import * as t from "@babel/types";
import template from "@babel/template";
import traverse, { NodePath } from "@babel/traverse";
console.log(template);
console.log(template);

let paramName;
export default function () {
  return {
    visitor: {
      "FunctionDeclaration|ArrowFunctionExpression|FunctionExpression|ClassMethod"(
        path,
        state,
      ) {
        console.log(path, state);
        try {
            
          const body = path.get("body").node.body;
          const name = "my-module";
          const mod = "myModule";
          
          const ast = template.ast`
            var ${mod} = require("${name}");
          `
          path.get("body").node.body.unshift(ast);
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
}
