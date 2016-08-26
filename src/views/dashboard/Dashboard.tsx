import * as React from 'react';
import {observer} from 'mobx-react';
import {appState} from '../../state/_Store';
import {Align, Button, Toolbar, Checkbox, Grid, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../recoil/src/index';

interface P {
    children: React.ReactChild
}

interface S {}

@observer
export default class Dashboard extends React.Component<P,S>{
    render() {
        const self = this;
        return (
            <Emerge className="text-center w100">
                <h1 className="super mtb30"><strong>React</strong> Recoil</h1>
            </Emerge>
        )
    }
}