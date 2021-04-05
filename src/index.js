/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

import { interpolateName } from "loader-utils";

import schema from "./options.json";

export default function loader(content) {
  const options = this.getOptions(schema);

  const name = interpolateName(
    this,
    typeof options.name !== "undefined" ? options.name : "[contenthash].[ext]",
    {
      context: this.rootContext,
      content,
    }
  );

  this.emitFile(name, content);

  return `
try {
  process.dlopen(module, __dirname + require("path").sep + __webpack_public_path__ + ${JSON.stringify(
    name
  )}${
    typeof options.flags !== "undefined"
      ? `, ${JSON.stringify(options.flags)}`
      : ""
  });
} catch (error) {
  throw new Error('node-loader:\\n' + error);
}
`;
}

export const raw = true;
