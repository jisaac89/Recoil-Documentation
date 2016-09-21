import * as React from 'react';
import {Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../recoil/src/index';

const ModalProperties = [
  {
    name :'open',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the Modal should show.'
  },
  {
    name :'className',
    type: 'string',
    options: '',
    description: 'Defines a list of class names for the element.'
  },
  {
    name :'icon',
    type: 'string',
    options: 'Omit to fa fa-',
    description: 'Defines a font awesome icon for the modal.'
  },
  {
    name :'title',
    type: 'string',
    options: '',
    description: 'Defines a title for the modal element.'
  },
  {
    name :'float',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the modal element is floating.'
  },
  {
    name :'ghost',
    type: 'string',
    options: '',
    description: 'Defines if the modal is in ghost mode.'
  },
  {
    name :'fullScreen',
    type: 'boolean',
    options: 'true, false',
    description: 'Sets the modal to full-screen mode.'
  },
  {
    name :'onClose',
    type: 'string',
    options: '',
    description: 'Defines an onClose event for the modal.'
  },
  {
    name :'min',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the modal is minified.'
  }
]

export default class TutorialModal extends React.Component<any,any>{
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

  toggleModal() {
    this.setState({
      showModal: this.state.showModal ? false : true
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

          <h1>Modal</h1>

          <Layer className="ptb10">
            <h2 className="pb10">Description</h2>
            <p>The Modal component shows a simple modal if a certain event happens.</p>
          </Layer>

          <Layer className="ptb10">
            <h2 className="pb10">Examples</h2>
            <Layer className="ptb10">
              <Layer className="p10 light">
                <Button onClick={this.toggleModal.bind(this)}>Show Modal</Button>
              </Layer>
            </Layer>
          </Layer>

          <Layer className="ptb10">
            <h2 className="pb10">Options</h2>
            <Button checked={this.state.showProps} onClick={this.toggleShowProps.bind(this)}>Toggle Options</Button>
            <Open if={this.state.showProps}>
              <Layer className="ptb10">
                <Table sortable columns={columns} dataSource={ModalProperties} />
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

          <Modal open={this.state.showModal}>
            <Layer className="p10">
              <p className="mb10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Button onClick={this.toggleModal.bind(this)}>Close Modal</Button>
            </Layer>
          </Modal>

        </div>
      </Emerge>
    )
  }
}
