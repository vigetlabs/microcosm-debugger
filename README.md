# Microcosm Debugger

A debugging tool for [Microcosm](https://github.com/vigetlabs/microcosm). Work in progress!

## Usage

```shell
npm install microcosm-debugger
```

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
