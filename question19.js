//Add another key in the same object “version”, value should latest released version of JS (“es6”)

let obj = {
    "primitivetypes": [
        "String", "number", "boolean", "null", "undefined", "symbol", "bigint"
    ]
}

obj["objectDataTypes"]=['Object', 'Array', 'Function', 'Date', 'RegExp'];


obj['version']="es6";


console.log(obj);