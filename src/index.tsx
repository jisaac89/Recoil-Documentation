import * as React from "react";
import * as ReactDOM from "react-dom";
// import {ObjectAssignPolyfill} from '../recoil/src/components/Utils.ts'
import './less/Main.less';
import AppRouter from "./router/AppRouter";
// ObjectAssignPolyfill();

import App from './views/Entry';

ReactDOM.render(
    <App />,
    document.getElementById("root")
);