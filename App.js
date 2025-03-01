const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },[
    React.createElement("h1", { id: 'h1' }, "I'm an h1 tag"),
    React.createElement("h2", { id: 'h2' }, "I'm an h2 tag")
  ]),
  React.createElement(
    "div",
    { id: "child2" },[
    React.createElement("h1", { id: 'h1' }, "I'm an h1 tag"),
    React.createElement("h2", { id: 'h2' }, "I'm an h2 tag")
  ])
);

// const head = React.createElement(
//   "h1",
//   { id: "header", className: "header" },
//   "hello from react"
// );
console.log(parent); // it is just an object (create element)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
