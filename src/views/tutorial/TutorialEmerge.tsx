import * as React from 'react';
import {Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../recoil/src/index';


const EmergeProperties = [
  {
    name :'if',
    type: 'boolean',
    options: 'true, false. True by default.',
    description: 'Defines if the element should emerge and stagger its children.'
  },
  {
    name :'enter',
    type: 'string',
    options: 'Uses animate.css',
    description: 'Add the type of animations the staggered children will display as on enter.'
  },
  {
    name :'exit',
    type: 'string',
    options: 'Uses animate.css',
    description: 'Add the type of animations the staggered children will display as on exit.'
  },
  {
    name :'delay',
    type: 'number',
    options: '',
    description: 'Set the delay in milliseconds for each staggered child to appears.'
  },
  {
    name :'overflow',
    type: 'string',
    options: 'true, false',
    description: 'Defines if the elements overflow is visible.'
  },
  {
    name :'className',
    type: 'string',
    options: '',
    description: 'Defines a list of class names for the element.'
  },
  {
    name :'style',
    type: 'string',
    options: '',
    description: 'Add inline styles to the element.'
  }
]

export default class TutorialEmerge extends React.Component<any,any>{
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

        <h1>Emerge</h1>

        <Layer className="ptb20">
          <h2 className="pb10">Description</h2>
          <p>The Emerge component staggers children into view if a certain event happens.</p>
        </Layer>

        <Layer className="pb20">
          <h2 className="pb10">Examples</h2>
          <Layer className="ptb10">
            <Layer className="p10 light">
              <Emerge delay={300} if={this.props.slideIndex === 6}>
                <Button className="mr10">
                  A
                </Button>
                <Button className="mr10">
                  B
                </Button>
                <Button className="mr10">
                  C
                </Button>
                <Button className="">
                  D
                </Button>
              </Emerge>
            </Layer>
          </Layer>
        </Layer>

        <Layer className="pb20">
          <h2 className="pb10">Props</h2>
          <Layer className="ptb10">
            <Table sortable columns={columns} dataSource={EmergeProperties} />
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
