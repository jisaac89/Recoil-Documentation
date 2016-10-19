import * as React from "react";
import * as ReactDOM from "react-dom";
// import {ObjectAssignPolyfill} from '../recoil/src/components/Utils.ts'
import '../recoil/src/less/Recoil.less';
import './less/Main.less';
import AppRouter from "./router/AppRouter";
// ObjectAssignPolyfill();

import App from './views/App';

ReactDOM.render(
    <App />,
    document.getElementById("root")
);