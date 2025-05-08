
# OpenAPI to Bruno Converter

This Node.js script fetches an OpenAPI JSON schema from a given URL, saves it locally, converts it into a [Bruno](https://www.usebruno.com/) collection using the `@usebruno/converters` package, and writes the output to a file.

## 📦 Requirements

- Node.js v14 or higher
- `@usebruno/converters`
- `minimist`

Install dependencies with:

```bash
npm install
```

## 🚀 Usage

```bash
node bruno-convert.js [-i <input_url>] [-o <openapi_output_file>] [-t <bruno_output_file>]
```

### Options

| Flag       | Description                                                   | Default                                 |
|------------|---------------------------------------------------------------|-----------------------------------------|
| `-i`       | URL to fetch the OpenAPI schema from                          | `http://localhost:5150/swagger/v1/swagger.json` |
| `-o`       | Path to save the raw OpenAPI JSON schema                      | `./test.json`                           |
| `-t`       | Path to save the generated Bruno collection                   | `./bruno.json`                          |

### Example

```bash
node convert.js -i http://localhost:3000/openapi.json -o ./openapi.json -t ./bruno-collection.json
```

## 📁 Output

- `openapi.json` (or the path you specify with `-o`): Raw OpenAPI schema.
- `bruno-collection.json` (or the path you specify with `-t`): Bruno-formatted collection.

## 🛠️ Notes

- This script uses `fetch`, which is available natively in Node.js 18+. For earlier versions, consider using `node-fetch`.
- Ensure your API server is up and serving the OpenAPI schema at the specified URL.

## 📄 License

MIT

## 🛠️ Automate with .NET Build

You can automate the script to run on each .NET build by adding the following target to your `.csproj` file:

```xml
<Target Name="RunNodeScript" AfterTargets="Build">
  <Exec Command="node ~/code/bruno-convertor/convert-bruno.js -o ./bruno.json"/>
</Target>
```