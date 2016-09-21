import * as React from 'react';
import {Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../recoil/src/index';


const SlideInProperties = [
  {
    name :'wrapper',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the pane has a wrapper element surrounding it.'
  },
  {
    name :'open',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the pane is open.'
  },
  {
    name :'fill',
    type: 'boolean',
    options: 'true, false',
    description: 'Give the pane element a height and width of 100%.'
  },
  {
    name :'direction',
    type: 'string',
    options: '',
    description: 'Defines the direction the pane slides in from.'
  },
  {
    name :'offset',
    type: 'string, number',
    options: '',
    description: 'Defines the starting offset of the pane.'
  },
  {
    name :'wrapperClick',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines a function the runs when the user clicks the pane wrapper.'
  }
]

export default class TutorialSlideIn extends React.Component<any,any>{
  constructor() {
    super();

    this.state = {
      showProps : true,
      showVideo: false,
      paneOpen: false
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

  toggleSlideIn() {
    this.setState({
      paneOpen: this.state.paneOpen ? false : true
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

          <h1>SlideIn</h1>

          <Layer className="ptb10">
            <h2 className="pb10">Description</h2>
            <p>The SlideIn slides in an element if a certain event happens, user must state the direction as well.</p>
          </Layer>

          <Layer className="ptb10">
            <h2 className="pb10">Examples</h2>
            <Layer className="ptb10">
              <Layer overflow className="p10 dark text-center w100 h200px">
                <Button onClick={this.toggleSlideIn.bind(this)}>Toggle SlideIn</Button>
                <SlideIn from='bottom' if={this.state.paneOpen}>
                  <Layer className="light text-center p10">
                    <Toolbar spacing>
                      <Emerge delay={50} if={this.state.paneOpen}>
                          <Button onClick={this.toggleSlideIn.bind(this)} icon="user"></Button>
                          <Button onClick={this.toggleSlideIn.bind(this)} icon="search"></Button>
                          <Button onClick={this.toggleSlideIn.bind(this)} icon="plus"></Button>
                      </Emerge>
                    </Toolbar>
                  </Layer>
                </SlideIn>
              </Layer>
            </Layer>
          </Layer>

          <Layer className="ptb10">
            <h2 className="pb10">Options</h2>
            <Layer className="ptb10">
              <Table sortable columns={columns} dataSource={SlideInProperties} />
            </Layer>
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
