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

  toggleMobile(isMobile){
    this.setState({
      mobile: isMobile
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

    let {showModal, showMenu, nightmode, slideIndex, mobile} = this.state;
    return (
      <Recoil nightmode={nightmode} onMobile={this.toggleMobile.bind(this)}>
        <Shrink fill if={showModal}>
          <Transform type={mobile ? "translate" : null} push={!mobile ? 'left' : null} axis={'X'} flex fill if={this.state.showMenu} amount="300px" >
            <SlideIn className='z5' if={!showModal} from={'top'}>
              <Layer fill theme="light">
                <Toolbar size="small" block className="p10 border-bottom">
                  <Button simple icon="bars" onClick={this.toggleMenu.bind(this)} />
                  <h1 className="dinblock">Recoil</h1>
                  <Button href="https://www.github.com/jisaac89/recoil" theme="error" right icon="github">github</Button>
                  <Button onClick={this.toggleNightMode.bind(this)} right icon="moon-o" className="mr5"></Button>
                </Toolbar>
                <hr />  
              </Layer>
            </SlideIn>
            <Layer fill overflow className="ps5 ptb50 z4">
              <Wizard fill flex slideIndex={slideIndex}>
                <TutorialAlign scrollIf={slideIndex === 0} scrollToId={SampleData[slideIndex].name} />
                <TutorialButton mobile={mobile} scrollIf={slideIndex === 1} scrollToId={SampleData[slideIndex].name}></TutorialButton>
                <TutorialCheckbox scrollIf={slideIndex === 2} scrollToId={SampleData[slideIndex].name}></TutorialCheckbox>
                <TutorialDropdown mobile={mobile} scrollIf={slideIndex === 3} scrollToId={SampleData[slideIndex].name}></TutorialDropdown>
                <TutorialEmerge scrollIf={slideIndex === 5} scrollToId={SampleData[slideIndex].name} if={slideIndex === 4}></TutorialEmerge>
                <TutorialInput></TutorialInput>
                <TutorialLayer></TutorialLayer>
                <TutorialLoading></TutorialLoading>
                <TutorialModal toggleModal={this.toggleModal.bind(this)}></TutorialModal>
                <TutorialOpen scrollIf={slideIndex === 4} scrollToId={SampleData[slideIndex].name}></TutorialOpen>
                <TutorialSelectable></TutorialSelectable>
                <TutorialShrink></TutorialShrink>
                <TutorialSlideIn></TutorialSlideIn>
                <TutorialTable></TutorialTable>
                <TutorialToggle></TutorialToggle>
                <TutorialToolbar></TutorialToolbar>
                <TutorialTransform></TutorialTransform>
                <TutorialWizard></TutorialWizard>
              </Wizard>    
            </Layer>
            <SlideIn className='z5' if={!showModal && showMenu === false && showModal === false} from={'bottom'}>
              <Layer fill nightmode>
                <Toolbar textCenter flex spacing block className="p10 border-top">
                  {SampleData[slideIndex - 1] ? <Button block onClick={this.gotoSlideIndex.bind(this, SampleData[slideIndex - 1])}>{SampleData[slideIndex - 1].name}</Button> : null}
                  {SampleData[slideIndex + 1] ? <Button block right onClick={this.gotoSlideIndex.bind(this, SampleData[slideIndex + 1])}>{SampleData[slideIndex + 1].name}</Button> : null}
                </Toolbar>
              </Layer>
            </SlideIn>
          </Transform>
        </Shrink>
        <SlideIn if={this.state.showMenu} from="left" className={mobile ? "w300px h100" : "w300px h100 pt50"}>
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