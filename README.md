# Microcosm Debugger

A debugging tool for [Microcosm](https://github.com/vigetlabs/microcosm). Work in progress!

## Usage

Until we publish to NPM, try:


1. Add `"microcosm-debugger":
   "git@github.com:vigetlabs/microcosm-debugger.git"` to your
   package.json
2. Add the plugin to an instance of Microcosm like so:

```javascript
var Debugger = require('microcosm-debugger')

var app = new Microcosm()

app.addPlugin(Debugger)

app.start(function() {
  console.log("Commence debugging")
})
```

## What it looks like

![how-it-works](./docs/debugger.gif)
