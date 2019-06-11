//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include css file into the bundle
import "../styles/style.css";

//import your own components
import Layout from "./layout";

import "jquery";
import "popper.js";
import "bootstrap";

//font awsome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faTrash);

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
