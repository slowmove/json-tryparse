Json TryParse
===

``` npm install json-tryparse ```

A small extension of the native JSON class to have methods that can handle a parse or stringify even if the object already are one or another.

## Background

In projects where there are several developers working we've often been in situation where everybody doesn't know if the object passing around after we've called some api is the parsed json object or the stringified object as string.

To be able to handle this I've implemented a simple extension of the native JSON class.

## Usage

```javascript
require('json-tryparse');
```

### Parsing to object

Instead of

```javascript
JSON.parse(variable);
```
use 

```javascript
JSON.tryParse(variable);
```

### Stringify

Instead of

```javascript 
JSON.stringify(variable);
```
use

```javascript
JSON.tryStringify(variable);
```