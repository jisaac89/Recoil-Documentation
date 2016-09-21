import * as React from 'react';
import {Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../recoil/src/index';


const LayerProperties = [
  {name: 'border', type: '', options: '', description: ''},
  {name: 'overflow', type: '', options: '', description: ''},
  {name: 'left', type: '', options: '', description: ''},
  {name: 'right', type: '', options: '', description: ''},
  {name: 'scrollY', type: '', options: '', description: ''},
  {name: 'scrollX', type: '', options: '', description: ''},
  {name: 'fill', type: '', options: '', description: ''},
  {name: 'type', type: '', options: '', description: ''},
  {name: 'children', type: '', options: '', description: ''},
  {name: 'className', type: '', options: '', description: ''},
  {name: 'style', type: '', options: '', description: ''},
  {name: 'onClick', type: '', options: '', description: ''},
  {name: 'block', type: '', options: '', description: ''},
  {name: 'key', type: '', options: '', description: ''},
  {name: 'align', type: '', options: '', description: ''},
  {name: 'flex', type: '', options: '', description: ''},
  {name: 'flow', type: '', options: '', description: ''},
  {name: 'justify', type: '', options: '', description: ''}
]

export default class TutorialLayer extends React.Component<any,any>{
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

        <h1>Layer</h1>

        <Layer className="ptb10">
          <h2 className="pb10">Description</h2>
          <p>The Layer component is an advanced version of the standard div control.</p>
        </Layer>

        <Layer className="ptb10">
          <h2 className="pb10">Examples</h2>
          <Layer className="ptb10">
            <Layer className="p10 dark">
              <Layer theme="light" className="p10">
                This is a Layer
              </Layer>
            </Layer>
          </Layer>
        </Layer>

        <Layer className="ptb10">
          <h2 className="pb10">Options</h2>
          <Button checked={this.state.showProps} onClick={this.toggleShowProps.bind(this)}>Toggle Options</Button>
          <Open if={this.state.showProps}>
            <Layer className="ptb10">
              <Table sortable columns={columns} dataSource={LayerProperties} />
            </Layer>
          </Open>
        </Layer>

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
