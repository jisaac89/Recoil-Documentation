import * as React from 'react';

import {Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../recoil/src/index';

import TutorialButton from './tutorial/TutorialButton';
import TutorialAlign from './tutorial/TutorialAlign';
import TutorialCheckbox from './tutorial/TutorialCheckbox';
import TutorialOpen from './tutorial/TutorialOpen';
import TutorialDropdown from './tutorial/TutorialDropdown';
import TutorialEmerge from './tutorial/TutorialEmerge';
import TutorialTable from './tutorial/TutorialTable';
import TutorialInput from './tutorial/TutorialInput';
import TutorialLayer from './tutorial/TutorialLayer';
import TutorialLoading from './tutorial/TutorialLoading';
import TutorialModal from './tutorial/TutorialModal';
import TutorialSlideIn from './tutorial/TutorialSlideIn';
import TutorialSelectable from './tutorial/TutorialSelectable';
import TutorialShrink from './tutorial/TutorialShrink';
import TutorialToggle from './tutorial/TutorialToggle';
import TutorialToolbar from './tutorial/TutorialToolbar';
import TutorialTransform from './tutorial/TutorialTransform';
import TutorialWizard from './tutorial/TutorialWizard';

import SampleData from './tutorial/SampleData';

export default class App extends React.Component<any, any> {

  constructor() {
    super();

    this.state = {
      slideIndex: 0,
<<<<<<< HEAD
      showMenu: false,
      slideIndexs: []
=======
      showMenu: false
>>>>>>> fbb941eca3d1586cf7cd0331e1c789b8f28cc1a7
    }
  }

  gotoSlideIndex(n) {
    this.setState({
      slideIndex : n.index,
<<<<<<< HEAD
      // showMenu: false
    })
    this.state.slideIndexs.push(n)
=======
      showMenu: false
    })
>>>>>>> fbb941eca3d1586cf7cd0331e1c789b8f28cc1a7
  }

  gotoSlideIndexNumber(n) {
    this.setState({
      slideIndex : n,
<<<<<<< HEAD
      // showMenu: false
=======
      showMenu: false
>>>>>>> fbb941eca3d1586cf7cd0331e1c789b8f28cc1a7
    })
  }

  toggleMenu() {
    this.setState({
      showMenu : !this.state.showMenu
    })
  }

<<<<<<< HEAD
  menuTemplate(element) {
    return (
      <Button>a</Button>
    )
  }

  detailTemplate(element) {
    return (
      <div className="p10">
        a
      </div>
    )
  }

  render() {

  const self = this;
=======
  render() {

    const self = this;
>>>>>>> fbb941eca3d1586cf7cd0331e1c789b8f28cc1a7
    const props = self.props;
    let state = self.state;

    let template = (component, key) => {
      return (
        <div key={key}>
          {component.name}
        </div>
      )
    }

    let columns = [
      {name: 'component', template: template}
    ]
 
    return (
      <Layer fill overflow>
        <SlideIn className="w300px z3 h100" from="left" if={state.showMenu}>
          <Layer scrollY className="h100">
            <Table
              selectedElements={[SampleData[0]]}
              hideHeader
              columns={columns}
              dataSource={SampleData}
              rowIsSelectable="single"
              pageSize={SampleData.length}
              onRowSelect={this.gotoSlideIndex.bind(this)}
            />
          </Layer>
        </SlideIn>
        <Layer scrollY fill className="ptb20 p10">
            <Transform  push="left" amount={"300px"} if={state.showMenu}>
            <Toolbar block>
              <Button simple iconPointer="left" icon={state.showMenu ? "times" : "bars"} onClick={this.toggleMenu.bind(this)}></Button>
              <Toolbar flush right>
                <Button theme="primary" icon="github">Grab Latest Version</Button>
                <Button icon="moon-o" />
              </Toolbar>
            </Toolbar>
            <Wizard slideIndex={state.slideIndex}>
                <TutorialAlign />
                <TutorialButton></TutorialButton>
                <TutorialCheckbox></TutorialCheckbox>
                <TutorialDropdown></TutorialDropdown>
                <TutorialEmerge></TutorialEmerge>
                <TutorialInput></TutorialInput>
                <TutorialLayer></TutorialLayer>
                <TutorialLoading></TutorialLoading>
                <TutorialModal></TutorialModal>
                <TutorialOpen></TutorialOpen>
                <TutorialSelectable></TutorialSelectable>
                <TutorialShrink></TutorialShrink>
                <TutorialSlideIn></TutorialSlideIn>
                <TutorialTable></TutorialTable>
                <TutorialToggle></TutorialToggle>
                <TutorialToolbar></TutorialToolbar>
                <TutorialTransform></TutorialTransform>
                <TutorialWizard></TutorialWizard>
              </Wizard>
          </Transform>
        </Layer>
        <SlideIn if={!state.showMenu} from="bottom">
          <Layer className="p10 light border-top" block>
            <Align>
              <Button onClick={this.gotoSlideIndexNumber.bind(this, state.slideIndex - 1 )}>Back</Button>
              <Button onClick={this.gotoSlideIndexNumber.bind(this, state.slideIndex + 1 )}>Forward</Button>
            </Align>
          </Layer>
        </SlideIn>
      </Layer> 
    )
  }
}