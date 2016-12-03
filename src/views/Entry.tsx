import * as React from 'react';

import {Align, Recoil, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../recoil/src/index';

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
      showModal: false,
      nightmode: false
    }
  }

  toggleMenu() {
    this.setState({
      showMenu : !this.state.showMenu
    })
  }

  toggleNightMode() {
    this.setState({
      nightmode : !this.state.nightmode,
    })
  }

  toggleModal(){
      this.setState({
        showModal : !this.state.showModal,
        showMenu : false
      })
  }

  gotoSlideIndex(item) {
    this.setState({
      slideIndex : item.index,
      showMenu: false,
      showModal: false
    })
  }

  render() {

    let {showModal, showMenu, nightmode, slideIndex} = this.state;
    return (
      <Recoil nightmode={nightmode}>
        <Shrink fill if={showModal || showMenu}>
          <Transform type="translate" axis={'X'} flex fill if={this.state.showMenu} amount="300px" >
            <Open if={true} openToHeight={'48px'}>
              <Layer fill theme="light">
                <Toolbar size="small" block className="p10 border-bottom">
                  <Button simple icon="bars" onClick={this.toggleMenu.bind(this)} />
                  <h1 className="dinblock">Recoil</h1>
                  <Button theme="error" right icon="github">github</Button>
                  <Button onClick={this.toggleNightMode.bind(this)} right icon="moon-o" className="mr5"></Button>
                </Toolbar>
              </Layer>
            </Open>
            <Layer fill scrollY>
              <Wizard slideIndex={slideIndex}>
                <TutorialAlign />
                <TutorialButton></TutorialButton>
                <TutorialCheckbox></TutorialCheckbox>
                <TutorialDropdown></TutorialDropdown>
                <TutorialOpen></TutorialOpen>
                <TutorialEmerge if={slideIndex === 5}></TutorialEmerge>
                <TutorialTable></TutorialTable>
                <TutorialInput></TutorialInput>
                <TutorialLayer></TutorialLayer>
                <TutorialLoading></TutorialLoading>
                <TutorialModal toggleModal={this.toggleModal.bind(this)}></TutorialModal>
                <TutorialSlideIn></TutorialSlideIn>
                <TutorialSelectable></TutorialSelectable>
                <TutorialShrink></TutorialShrink>
                <TutorialToggle></TutorialToggle>
                <TutorialToolbar></TutorialToolbar>
                <TutorialTransform></TutorialTransform>
                <TutorialWizard></TutorialWizard>
              </Wizard>    
            </Layer>
          </Transform>
        </Shrink>
        <SlideIn if={this.state.showMenu} from="left" className="w300px h100">
          <Layer fill nightmode scrollY className="p10">
            <Table
              dataSource={SampleData}
              pageSize={SampleData.length}
              columns={[{name: 'name'}]}
              hideHeader
              onRowSelect={this.gotoSlideIndex.bind(this)}
              selectedElements={[this.state.slideIndex]}
              selectedKey='index'
              searchableKeys={['name']}
              searchTitle="Find a Component, e.g Table..."
            />
          </Layer>
        </SlideIn>
      </Recoil>
    )
  }
}