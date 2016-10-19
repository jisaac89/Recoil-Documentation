import * as React from 'react';

import {Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../recoil/src/index';

const AlignProperties = [
  {
    name :'margin',
    type: 'number',
    options: '',
    description: 'Defines the margin between the aligned components.'
  },
  {
    name :'className',
    type: 'string',
    options: '',
    description: 'Add a list of class names.'
  },
  {
    name :'vertical',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the components are aligned vertically.'
  }
]

export default class TutorialAlign extends React.Component<any,any>{
  constructor() {
    super();

    this.state = {
      showProps : true,
      showVideo: false,
      columns: [1,1,1]
    }
  }

  toggleShowProps() {
    this.setState({
      showVideo: false,
      showProps: this.state.showProps ? false : true
    })
  }

  setColumns(columns){
    this.setState({
      columns : columns
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

          <h1>Align</h1>

          <Layer className="ptb20">
            <h2 className="pb10">Description</h2>
            <p>The Align component is a flex alternative, it aligns components either horizontally or vertically with a option margin set.</p>
          </Layer>

          <Layer className="pb20">
            <h2 className="pb10">Examples</h2>

            <h3>Default</h3>
            <p>By default, the Align component aligns elements horizontally</p>
            <p>Set Columns:</p>
            <Toolbar flush className="mt20">
              <Button onClick={this.setColumns.bind(this, [1,1,1])}>[1,1,1]</Button>
              <Button onClick={this.setColumns.bind(this, [2,1,1])}>[2,1,1]</Button>
              <Button onClick={this.setColumns.bind(this, [1,1,4])}>[3,2,1]</Button>
            </Toolbar>
            <div className="ptb20">
              <div className="dark p10">
                <Align columns={this.state.columns} margin={'10px'}>
                  <Layer theme="light" className="p20">Element 1</Layer>
                  <Layer theme="light" className="p20">Element 2</Layer>
                  <Layer theme="light" className="p20">Element 3</Layer>
                </Align>
              </div>
            </div>

            <h3>Vertical</h3>
            <p>To align elements vertically, pass the <strong>vertical</strong> prop.</p>
            <div className="ptb20">
              <div className="dark h300px p10">
                <Align vertical margin={'10px'} columns={this.state.columns}> 
                  <Layer fill theme="light" className="p10">Element 1</Layer>
                  <Layer fill theme="light" className="p10">Element 2</Layer>
                  <Layer fill theme="light" className="p10">Element 3</Layer>
                </Align>
              </div>
            </div>

            <h3>Multiple Aligns</h3>
            <p>Below shows an example using multiple Align components to achieve the desired effect.</p>
            <div className="ptb20">
              <div className="dark p5 h300px">
                <Align margin={"5px"}>
                  <Layer fill>
                    <Align margin={"5px"} vertical>
                      <Layer theme="light" className="p10" fill>1</Layer>
                      <Layer theme="light" className="p10" fill>2</Layer>
                      <Layer theme="light" className="p10" fill>3</Layer>
                    </Align>
                  </Layer>
                  <Layer fill>
                    <Align margin={"5px"} vertical maxCol={3}>
                      <Layer theme="light" className="p10" fill>4</Layer>
                      <Layer theme="light" className="p10" fill>5</Layer>
                    </Align>
                  </Layer>
                  <Layer fill>
                    <Button fill icon="star" />
                  </Layer>
                </Align>
              </div>
            </div>
          </Layer>

          <div className="pb20">
            <h2 className="pb10">Props</h2>
            <div className="ptb10">
              <Table sortable columns={columns} dataSource={AlignProperties} />
            </div>
          </div>

          <div className="pb20">
            <h2 className="pb10">Video</h2>
            <Button checked={this.state.showVideo} onClick={this.toggleShowVideo.bind(this)}>Toggle Video Tutorial</Button>
            <Open if={this.state.showVideo}>
              <Layer className="ptb10">
                VIDEO
              </Layer>
            </Open>
          </div>

        </div>
      </Emerge>
    )
  }
}
