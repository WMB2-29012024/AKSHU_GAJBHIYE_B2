//Add another key “objectDataTypes” to the same object using square notation, and value should be an array of strings containing names of all object data types in JS, then log the object

let obj = {
    "primitivetypes": [
        "String", "number", "boolean", "null", "undefined", "symbol", "bigint"
    ]
}

obj["objectDataTypes"]=['Object', 'Array', 'Function', 'Date', 'RegExp'];


console.log(obj);