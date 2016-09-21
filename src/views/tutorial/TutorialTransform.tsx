import * as React from 'react';
import {Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../recoil/src/index';


const TransformProperties = [
  {name : 'fill', type: '', options: '', description: ''},
  {name : 'type', type: '', options: '', description: ''},
  {name : 'className', type: '', options: '', description: ''},
  {name : 'if', type: '', options: '', description: ''},
  {name : 'amount', type: '', options: '', description: ''},
  {name : 'push', type: '', options: '', description: ''},
  {name : 'axis', type: '', options: '', description: ''},
]

export default class TutorialTransform extends React.Component<any,any>{
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

          <h1>Transform</h1>

          <Layer className="ptb10">
            <h2 className="pb10">Description</h2>
            <p>The Transform component is an allows you to transform an element, add a type (translate, scale etc) and an amount (interger or string) to an element if a certain event happens.</p>
          </Layer>

          <Layer className="ptb10">
            <h2 className="pb10">Examples</h2>
            <Layer className="ptb10">
              <Layer className="p10 light">
                <Checkbox />
              </Layer>
            </Layer>
          </Layer>

          <Layer className="ptb10">
            <h2 className="pb10">Options</h2>
            <Button checked={this.state.showProps} onClick={this.toggleShowProps.bind(this)}>Toggle Options</Button>
            <Open if={this.state.showProps}>
              <Layer className="ptb10">
                <Table sortable columns={columns} dataSource={TransformProperties} />
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
