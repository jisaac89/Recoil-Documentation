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
      showMenu: false,
      nightmode: false,
      slideIndexs: []
    }
  }

  gotoSlideIndex(n) {
    this.setState({
      slideIndex : n.index,
      // showMenu: false
    })
    this.state.slideIndexs.push(n);
  }

  gotoSlideIndexNumber(n) {
    this.setState({
      slideIndex : n,// showMenu: false
      showMenu: false
    })
  }

  toggleMenu() {
    this.setState({
      showMenu : !this.state.showMenu
    })
  }

  toggleNightMode() {
    this.setState({
      nightmode : !this.state.nightmode
    })
  }

  menuTemplate(element) {
    return (
      <Button>a</Button>
    )
  }

  detailTemplate(element) {
    return (
      <div className="p10">
        <small>{element.description}</small>
      </div>
    )
  }

  render() {

  const self = this;
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
      <Layer fill overflow className={self.state.nightmode ? "e-NightMode" : ""}>
        <SlideIn className="w300px z3 h100" from="left" if={state.showMenu}>
          <Layer scrollY className="h100 p10">
            <Table
              selectedElements={[SampleData[0]]}
              hideHeader
              columns={columns}
              dataSource={SampleData}
              rowIsSelectable="single"
              pageSize={SampleData.length}
              onRowSelect={this.gotoSlideIndex.bind(this)}
              detailTemplate={this.detailTemplate.bind(this)}
              detailTemplateOpenOnRowSelect="single"
              searchableKeys={['name']}
              searchTitle={"Search for a Component, e.g. Button"}
              detailTemplateHideToggle
            />
          </Layer>
        </SlideIn>
        <Layer scrollY fill className="ptb20 p10">
            <Transform  push="left" amount={"300px"} if={state.showMenu}>
            <Toolbar block>
              <Button simple iconPointer="left" icon={state.showMenu ? "times" : "bars"} onClick={this.toggleMenu.bind(this)}></Button>
              <Toolbar flush right>
                <Button theme="primary" icon="github">Grab Latest Version</Button>
                <Button onClick={self.toggleNightMode.bind(self)} icon="moon-o" />
              </Toolbar>
            </Toolbar>
              <Wizard overflow slideIndex={state.slideIndex}>
                <TutorialAlign />
                <TutorialButton></TutorialButton>
                <TutorialCheckbox></TutorialCheckbox>
                <TutorialDropdown></TutorialDropdown>
                <TutorialOpen></TutorialOpen>
                <TutorialEmerge if={state.slideIndex === 5}></TutorialEmerge>
                <TutorialTable></TutorialTable>
                <TutorialInput></TutorialInput>
                <TutorialLayer></TutorialLayer>
                <TutorialLoading></TutorialLoading>
                <TutorialModal></TutorialModal>
                <TutorialSlideIn></TutorialSlideIn>
                <TutorialSelectable></TutorialSelectable>
                <TutorialShrink></TutorialShrink>
                <TutorialToggle></TutorialToggle>
                <TutorialToolbar></TutorialToolbar>
                <TutorialTransform></TutorialTransform>
                <TutorialWizard></TutorialWizard>
              </Wizard>
          </Transform>
        </Layer>
        <SlideIn if={!state.showMenu} from="bottom">
          <Layer className="p10 light border-top" block>
            <Align margin={"10px"}>
              <Button icon="chevron-left" onClick={this.gotoSlideIndexNumber.bind(this, state.slideIndex - 1 )}>Back</Button>
              <Button icon="chevron-right" onClick={this.gotoSlideIndexNumber.bind(this, state.slideIndex + 1 )}>Forward</Button>
            </Align>
          </Layer>
        </SlideIn>
      </Layer> 
    )
  }
}