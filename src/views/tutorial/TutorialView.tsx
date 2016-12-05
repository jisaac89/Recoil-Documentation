import * as React from 'react';
import {Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../recoil/src/index';

interface ITutorialViewProps {
  description : string;
  Id : string;
  toggleModal ? : any;
  examples ? : any;
  columnData : any;
  video ? : any;
  mobile ?: boolean;
  scrollIf: boolean;
  scrollToId : string;
}

export default class TutorialView extends React.Component<ITutorialViewProps,any>{
  constructor() {
    super();

    this.state = {
      showProps : true,
      showVideo: false,
      showModal: false
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

  openModal() {
    this.setState({
      showModal: true
    }, ()=>{
      this.props.toggleModal(this.state.showModal);
    })
  }

  closeModal() {
    this.setState({
      showModal: false
    }, ()=>{
      this.props.toggleModal(this.state.showModal);
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
    
    const mobileColumns = [
      {name: 'name'}
    ]

    return (
      <Layer fill offset={-100} flex scrollY scrollIf={props.scrollIf} scrollToId={props.scrollToId}>
          <div className="p10">

          <Layer className="ptb10">
            <h2 id={props.Id} className="pb10">Description</h2>
            <p>{props.description}</p>
          </Layer>

          <Layer className="ptb10">
            <h2 className="pb10">Examples</h2>
            <Layer className="ptb10">
              {props.examples ? props.examples() : null}
            </Layer>
          </Layer>

          <Layer className="ptb10">
            <h2 className="pb10">Props</h2>
            <Button checked={this.state.showProps} onClick={this.toggleShowProps.bind(this)}>Toggle Options</Button>
            <Open if={this.state.showProps}>
              <Layer className="ptb10">
                <Table sortable columns={this.props.mobile ? mobileColumns : columns} dataSource={props.columnData} />
              </Layer>
            </Open>
          </Layer>

          <Layer className="ptb10">
            <h2 className="pb10">Video</h2>
            <Button checked={this.state.showVideo} onClick={this.toggleShowVideo.bind(this)}>Toggle Video Tutorial</Button>
            <Open if={this.state.showVideo}>
              <Layer className="ptb10">
                {props.video ? props.video : 'Coming soon...'}
              </Layer>
            </Open>
          </Layer>

        </div>
      </Layer>
    )
  }
}
