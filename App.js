
const heading=React.createElement(
    "h1",{id:"hid"},"Hello World from React!"
);
 const secongHeading=React.createElement(
    "div",{id:"parentdiv"},[React.createElement(
        "div",{id:"childid"},[React.createElement("h1",{id:"h1id"},"I am h1"),React.createElement("h2",{id:"h2id"},"I am h2")]),
    
    React.createElement(
        "div",{id:"childid"},[React.createElement("h1",{id:"h1id"},"I am h1"),React.createElement("h2",{id:"h2id"},"I am h2")])
    
    ]);


const app=React.createElement("div",{id:"appid"},heading,secongHeading);
console.log(secongHeading)
const rootElement=document.getElementById("root");
const reactRoot= ReactDOM.createRoot(rootElement);
reactRoot.render(heading);
reactRoot.render(app);


    
