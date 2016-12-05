import * as React from 'react';
import {Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../recoil/src/index';
import TutorialView from './TutorialView';
const ChecboxProperties = [
  {
    name :'checked',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the element is checked.'
  },
  {
    name :'disabled',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the checkbox has a disabled state.'
  }
]

export default class TutorialCheckbox extends React.Component<any,any>{
  constructor() {
    super();

    this.state = {
      showProps : true,
      showVideo: false
    }
  }

  toggleShowProps() {
    this.setState({
      showVideo: false,
      showProps: this.state.showProps ? false : true
    })
  }

  toggleShowVideo() {
    this.setState({
      showProps: false,
      showVideo: this.state.showVideo ? false : true
    })
  }

  render() {

    const self = this;
    const props = self.props;
    let state = self.state;

    const columns = [
      {name: 'name', width:120},
      {name: 'type', width:140},
      {name: 'description'}
    ]
    let example = () => {
      return (
        <div>
            <h3>Default</h3>
            <Layer className="ptb20">
              <Layer className="p10 light">
                <Checkbox title={'Select All'} />
                <Checkbox size="small" title={'Check All'} />
              </Layer>
            </Layer>

            <h3>Checked</h3>
            <Layer className="ptb20">
              <Layer className="p10 light">
                <Checkbox checked />
              </Layer>
            </Layer>

            <h3>Sizes</h3>
            <Layer className="ptb20">
              <Layer className="p10 light">
                <Toolbar spacing>
                  <Checkbox size="small" />
                  <Checkbox />
                  <Checkbox size="large" />
                  <Checkbox size="xlarge" />
                </Toolbar>
              </Layer>
            </Layer>

            <h3>Themes</h3>
            <Layer className="ptb20">
              <Layer className="p10 light">
                <Toolbar spacing>
                  <Checkbox theme="primary" />
                  <Checkbox theme="error" />
                  <Checkbox theme="success" />
                </Toolbar>
              </Layer>
            </Layer>
        </div>
      )
    }

    return (
      <TutorialView 
        description="The Checkbox component is an advanced version of the standard input type='checkbox' control."
        Id="Checkbox"
        columnData={ChecboxProperties}
        examples={example}
        scrollIf={props.scrollIf}
        scrollToId={props.scrollToId}
      />
    )
  }
}
