import * as React from "react";
import * as ReactDOM from "react-dom";

import {ObjectAssignPolyfill} from '../recoil/src/components/DataSource/Utils.ts'
import '../recoil/src/less/Recoil.less';
import './less/Main.less';


ObjectAssignPolyfill();

import AppRouter from "./router/AppRouter";

ReactDOM.render(
    <AppRouter />,
    document.getElementById("root")
);