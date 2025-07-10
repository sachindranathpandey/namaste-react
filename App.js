import React from "react";
import { createRoot } from 'react-dom/client';



const parent=React.createElement("div",{id:"parent" ,key:"parent-div"},"Hello Nameste React");


//const root=ReactDOM.createRoot(document.getElementById("root"));
const root = createRoot(document.getElementById("root"));
root.render(parent);
//console.log(heading);