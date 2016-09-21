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
      showMenu: false
    }
  }

  gotoSlideIndex(n) {
    this.setState({
      slideIndex : n.index,
      showMenu: false
    })
  }

  gotoSlideIndexNumber(n) {
    this.setState({
      slideIndex : n,
      showMenu: false
    })
  }

  toggleMenu() {
    this.setState({
      showMenu : !this.state.showMenu
    })
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
      <Layer fill overflow>
        <SlideIn className="z3 h100" from="left" if={state.showMenu}>
          <Layer scrollY className="w300px h100">
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
          <Transform type="translate" axis="X" amount={"300px"} if={state.showMenu}>
            <Toolbar block>
              <Button simple iconPointer="left" icon={state.showMenu ? "times" : "bars"} onClick={this.toggleMenu.bind(this)}></Button>
              <Toolbar flush right>
                <Button theme="primary" icon="github">Grab Latest Version</Button>
                <Button icon="moon-o" />
              </Toolbar>
            </Toolbar>
            <Shrink opacity={50} if={state.showMenu}>
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
            </Shrink>
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