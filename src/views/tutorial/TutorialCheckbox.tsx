import * as React from 'react';
import {Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../recoil/src/index';

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

    return (
      <Emerge enter="fadeIn">
        <div className="p10">

          <h1>Checkbox</h1>

          <Layer className="ptb20">
            <h2 className="pb10">Description</h2>
            <p>The Checkbox component is an advanced version of the standard input type='checkbox' control.</p>
          </Layer>

          <Layer className="pb20">
            <h2 className="pb10">Examples</h2>
            <h3>Default</h3>
            <Layer className="ptb20">
              <Layer className="p10 light">
                <Checkbox />
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
          </Layer>

          <Layer className="pb20">
            <h2 className="pb10">Props</h2>
            <Layer className="ptb10">
              <Table columns={columns} dataSource={ChecboxProperties} />
            </Layer>
          </Layer>

          <Layer className="pb20">
            <h2 className="pb10">Video</h2>
            <Button checked={this.state.showVideo} onClick={this.toggleShowVideo.bind(this)}>Toggle Video Tutorial</Button>
            <Open if={this.state.showVideo}>
              <Layer className="ptb10">
                VIDEO
              </Layer>
            </Open>
          </Layer>

        </div>
      </Emerge>
    )
  }
}
