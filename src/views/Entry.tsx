import * as React from 'react';
import {observer} from 'mobx-react';
import {appState} from '../state/_Store';
import {Align, Button, Toolbar, Checkbox, Grid, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../recoil/src/index';

interface P {
    children: any;
    location: any;
}

interface S {}

@observer
export default class Entry extends React.Component<P,S>{
    componentDidMount() {
        appState.initializeApp();
    }
    render() {        
        const self = this;
        let {children, location} = self.props;
        let content = React.cloneElement(this.props.children || <div />, { key: location })
        return (
            <Layer fill scrollY>
                {content}
            </Layer>
        )
    }
}