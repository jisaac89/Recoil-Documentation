import * as React from 'react';
import {Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../recoil/src/index';


const dropData = ['from', 'block', 'contentClass', 'onSelected', 'type', 'data'];

const DropdownProperties = [
  {
    name :'from',
    type: 'string',
    options: 'X X, use top bottom left right',
    description: 'Defines the direction of the drop.'
  },
  {
    name :'block',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the dropdown is a block element with a width of 100%.'
  },
  {
    name :'contentClass',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines a set of class names for the dropdown content container.'
  },
  {
    name :'onSelected',
    type: 'function',
    options: 'true, false',
    description: 'Return the selected value of the array, if the dropdown is of type selection.'
  },
  {
    name :'type',
    type: 'string',
    options: 'selection, button, search.',
    description: 'Defines what type of dropdown it is, omit for default option and pass children.'
  }
]

export default class TutorialDropdown extends React.Component<any,any>{
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

        <h1>Dropdown</h1>

        <Layer className="ptb10">
          <h2 className="pb10">Description</h2>
          <p>The Dropdown component is an advanced version of the standard selection options control.</p>
        </Layer>

        <Layer className="ptb10">
          <h2 className="pb10">Examples</h2>
          <h3>Default</h3>
          <div className="ptb20">
            <Layer className="p10 light">
              <Dropdown rowIsSelectable="single" title="Single Option" dataSource={dropData} />
            </Layer>
          </div>

          <h3>Material</h3>
          <div className="ptb20">
            <Layer className="p10 light">
              <Dropdown material rowIsSelectable="single" title="Material Dropdown" dataSource={dropData} />
            </Layer>
          </div>

          <h3>With Icon</h3>
          <p>To add an icon to a dropdowns, just add an icon prop to it. Icon's are taken from font-awesome, you can omit the fa fa-, for example below it would be a Button compoent with a icon prop of "star"</p>
          <div className="ptb20">
            <Layer className="p10 light">
              <Dropdown icon="star" rowIsSelectable title="Multiple Options" dataSource={dropData} />
            </Layer>
          </div>

          <h3>Custom Content</h3>
          <p>To add custom content to a dropdown, just include it as a child of the component.</p>
          <div className="ptb20">
            <Layer className="p10 light">
              <Dropdown title="Custom Content">
                <div className="w100 p10">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </Dropdown>
            </Layer>
          </div>

          <h3>Advanced Dropdown</h3>
          <p>The example below shows a drop down with the block prop and a <strong>from</strong> prop with the value <strong>top left</strong> and a <strong>contentClass</strong> props of <strong>w300px</strong>.</p>
          <div className="ptb20">
            <Layer className="p10 light">
              <Dropdown block icon="eye" title="Advanced Dropdown">
                <div className="w100 p10">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </Dropdown>
            </Layer>
          </div>
        </Layer>

        <div className="ptb10">
          <h2 className="pb10">Props</h2>
          <div className="ptb10">
            <Table pageSize={20} sortable columns={columns} dataSource={DropdownProperties} />
          </div>
        </div>

        <Layer className="ptb10">
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
