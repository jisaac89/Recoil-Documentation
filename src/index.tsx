import * as React from "react";
import * as ReactDOM from "react-dom";

import {ObjectAssignPolyfill} from '../recoil/src/components/Utils.ts'
import '../recoil/src/less/Recoil.less';
import './less/Main.less';

ObjectAssignPolyfill();

import AppRouter from "./router/AppRouter";

import App from './views/App.tsx';

ReactDOM.render(
    <App />,
    document.getElementById("root")
);