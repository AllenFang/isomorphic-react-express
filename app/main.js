var React = require("react");
var Demo = React.createFactory(require("./components/Demo"));

if (typeof window !== "undefined") {
  window.onload = function() {
    React.render(Demo(), document.getElementById("content"));
  };
}
