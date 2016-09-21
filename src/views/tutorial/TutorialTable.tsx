import * as React from 'react';
import {Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../recoil/src/index';


const TableProperties = [
  {
    name :'columns',
    type: '',
    options: '',
    description: 'Defines the columns object.'
  },
  {
    name :'sortable',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the Table is sortable.'
  },
  {
    name :'hideHeader',
    type: 'boolean',
    options: 'true, false',
    description: 'Defines if the Table header is visible.'
  },
  {
    name :'selected',
    type: '',
    options: '',
    description: 'Return item, so user can filter it.'
  },
  {
    name :'onSelect',
    type: '',
    options: '',
    description: 'Define a function of what happens when a user selected a row.'
  },
  {
    name :'dataSource',
    type: '',
    options: '',
    description: 'Define the Tables actual data object.'
  },
  {
    name :'detailTemplate',
    type: '',
    options: 'key, item',
    description: 'Returns a custom row template.'
  },
  {
    name :'selectedKey',
    type: '',
    options: 'key, item',
    description: 'Returns a custom row template.'
  },
  {
    name :'selected',
    type: '',
    options: 'key, item',
    description: 'Returns a custom row template.'
  },
  {
    name :'onRowSelect',
    type: '',
    options: 'key, item',
    description: 'Returns a custom row template.'
  }
]

export default class TutorialTable extends React.Component<any,any>{
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

        <h1>Table</h1>

        <div className="ptb10">
          <h2 className="pb10">Description</h2>
          <p>The Table component is a simple data-Table that currently takes in a object.</p>
        </div>

        <div className="ptb10">
          <h2 className="pb10">Examples</h2>
          <div className="ptb10">
            <Table  pageSize={20} searchableKeys={['name']} sortable columns={columns} dataSource={TableProperties} />
          </div>
        </div>

        <div className="ptb10">
          <h2 className="pb10">Props</h2>
          <div className="ptb10">
            <Table  pageSize={20} sortable columns={columns} dataSource={TableProperties} />
          </div>
        </div>

        <div className="ptb10">
          <h2 className="pb10">Video</h2>
          <Button checked={this.state.showVideo} onClick={this.toggleShowVideo.bind(this)}>Toggle Video Tutorial</Button>
          <Open if={this.state.showVideo}>
            <div className="ptb10">
              VIDEO
            </div>
          </Open>
        </div>

      </div>
      </Emerge>
    )
  }
}
