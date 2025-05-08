const { openApiToBruno } = require("@usebruno/converters");
const { readFile, writeFile } = require("fs/promises");
const fs = require("fs");
const { argv } = require("node:process");
const minimist = require("minimist");

const args = minimist(argv.slice(2));
let SCHEMA_OUTPUT_FILE = args.o || "./test.json";
let BRUNO_OUTPUT_FILE = args.t || "./bruno.json";
let URL = args.i || "http://localhost:5150/swagger/v1/swagger.json";

async function convertOpenApiToBruno() {
  try {
    const value = await fetch(URL);
    const text = await value.text();
    fs.writeFileSync(SCHEMA_OUTPUT_FILE, text);

    const jsonContent = await readFile(SCHEMA_OUTPUT_FILE, "utf8");

    const openApiSpec = JSON.parse(jsonContent);

    const brunoCollection = openApiToBruno(openApiSpec);

    await writeFile(
      BRUNO_OUTPUT_FILE,
      JSON.stringify(brunoCollection, null, 2)
    );
    console.log("OpenAPI JSON conversion successful!");
  } catch (error) {
    console.error("Error during OpenAPI JSON conversion:", error);
  }
}

convertOpenApiToBruno();
