import * as React from 'react';
import {Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../recoil/src/index';

const WizardProperties = [
  {name : 'slideIndex', type: '', options: '', description: 'The active index to show.'},
  {name : 'fill', type: '', options: '', description: 'Add a width and height of 100% to the Wizard.'},
  {name : 'className', type: '', options: '', description: ''}
]

export default class TutorialWizard extends React.Component<any,any>{
  constructor() {
    super();

    this.state = {
      showProps : true,
      showVideo: false,
      slideIndex: 0,
      slideIndex2: 0
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

  gotoSlideIndex(n) {
    this.setState({
      slideIndex : n
    })
  }

  gotoSlideIndex2(n) {
    this.setState({
      slideIndex2 : n
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

          <h1>Wizard</h1>

          <Layer className="ptb10">
            <h2 className="pb10">Description</h2>
            <p>The Wizard component allows you to create multi-step processes where users will move through screens in a specified order.</p>
          </Layer>

          <Layer className="ptb10">
            <h2 className="pb10">Examples</h2>
            <h3>Default</h3>
            <Layer className="h300px p20 mb10" theme="dark">
              <Wizard fill slideIndex={this.state.slideIndex}>
                <Layer fill theme="light p20">1</Layer>
                <Layer fill theme="light p20">2</Layer>
                <Layer fill theme="light p20">3</Layer>
              </Wizard>
            </Layer>
            <Toolbar flush block>
                <Button advanced checked={state.slideIndex === 0} onClick={this.gotoSlideIndex.bind(this, 0)}>1</Button>
                <Button advanced checked={state.slideIndex === 1} onClick={this.gotoSlideIndex.bind(this, 1)}>2</Button>
                <Button advanced checked={state.slideIndex === 2} onClick={this.gotoSlideIndex.bind(this, 2)}>3</Button>
            </Toolbar>

            <h3 className="pt20 pb10">Vertical</h3>
            <Layer className="h300px p20 mb10" theme="dark">
              <Wizard vertical fill slideIndex={this.state.slideIndex2}>
                <Layer fill theme="light p20">1</Layer>
                <Layer fill theme="light p20">2</Layer>
                <Layer fill theme="light p20">3</Layer>
              </Wizard>
            </Layer>
            <Toolbar flush block>
                <Button advanced checked={state.slideIndex2 === 0} onClick={this.gotoSlideIndex2.bind(this, 0)}>1</Button>
                <Button advanced checked={state.slideIndex2 === 1} onClick={this.gotoSlideIndex2.bind(this, 1)}>2</Button>
                <Button advanced checked={state.slideIndex2 === 2} onClick={this.gotoSlideIndex2.bind(this, 2)}>3</Button>
            </Toolbar>
          </Layer>

          <Layer className="ptb10">
            <h2 className="pb10">Options</h2>
            <Button checked={this.state.showProps} onClick={this.toggleShowProps.bind(this)}>Toggle Options</Button>
            <Open if={this.state.showProps}>
              <Layer className="ptb10">
                <Table sortable columns={columns} dataSource={WizardProperties} />
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
