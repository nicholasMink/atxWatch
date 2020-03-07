import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Main from '../components/layouts/Main';
import Header from '../components/layouts/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Button from '../components/Button/Button';
import InputText from '../components/Input/InputText';
import Accordion from '../components/Accordion/Accordion';
import Toggle from '../components/Toggle/Toggle';
import InputCheckbox from '../components/Input/InputCheckbox';
import InputSelect from '../components/Input/InputSelect';
import { COMPONENTS_LIST, SELECT_ITEMS, CARD_CONTENT } from '../constants/pattern-library';
import Card from '../components/Card/Card';
import Text from '../components/Text/Text';
import Map from '../components/Map/Map';
import { Layer, Feature } from 'react-mapbox-gl';
import { MAP_DEFAULT } from '../constants/map';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';

function PatternLibrary() {
  const [activeComponent, setActiveComponent] = useState('card');
  const [inputValue, setInputValue] = useState('');
  const [toggleStatus, setToggleStatus] = useState(false);
  const [checkboxStatus, setCheckboxStatus] = useState(false);
  const [selectInput, setSelectInput] = useState('');
  const handleComponent = e => setActiveComponent(e.target.id);
  const handleInput = e => setInputValue(e.target.value);
  const handleToggle = () => setToggleStatus(!toggleStatus);
  const handleCheckbox = () => setCheckboxStatus(!checkboxStatus);
  const handleSelect = e => setSelectInput(e.target.id);
  const notify = () => toast('Primary toast message', { position: toast.POSITION.BOTTOM_RIGHT });
  const COMPONENTS = {
    text: {
      title: 'text',
      component: (
        <div>
          <Text size="large">Large text</Text>
          <Text>Default text</Text>
          <Text size="small">Small text</Text>
          <Text size="small" uppercase>
            Small uppercase text
          </Text>
          <Text letterSpacing size="small" uppercase bold>
            Small text with letter spacing uppercase, and bold
          </Text>
        </div>
      ),
    },
    button: {
      title: 'Primary Button',
      component: (
        <Button onClick={e => console.log(e)} id="primary" className="btn-accent">
          Accent Button
        </Button>
      ),
    },
    'input text': {
      title: 'input text',
      component: (
        <InputText
          inputValue={inputValue}
          onChange={e => handleInput(e)}
          placeholder="Single input text..."
          label="Input Text"
          labelPosition="top"
        />
      ),
    },
    accordion: {
      title: 'accordion',
      component: (
        <Accordion
          title="Accordion Title"
          content={<p>Accordion content lives here...</p>}
          defaultOpen={false}
        />
      ),
    },
    toggle: {
      title: 'toggle',
      component: <Toggle isActive={toggleStatus} onClick={() => handleToggle()} />,
    },
    checkbox: {
      title: 'checkbox',
      component: (
        <InputCheckbox
          label="Input Checkbox"
          isActive={checkboxStatus}
          onChange={() => handleCheckbox()}
        />
      ),
    },
    'select input': {
      title: 'select input',
      component: (
        <InputSelect
          isActive={selectInput}
          label="Select Input"
          handleSelect={e => handleSelect(e)}
          items={SELECT_ITEMS}
          placeholder="Select..."
        />
      ),
    },
    card: {
      title: 'card',
      component: <Card card={CARD_CONTENT} accentHeader />,
    },
    toast: {
      title: 'toast',
      component: (
        <div>
          <Button id="primary" className="btn-accent" onClick={notify}>
            Notify !
          </Button>
          <ToastContainer />
        </div>
      ),
    },
    breadcrumbs: {
      title: 'breadcrumbs',
      component: <Breadcrumbs url="components/breadcrumbs" />,
    },
    map: {
      title: 'map',
      component: (
        <Map config={MAP_DEFAULT}>
          <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
            <Feature coordinates={MAP_DEFAULT.center} />
          </Layer>
        </Map>
      ),
    },
  };
  return (
    <div className="app-wrapper">
      <Header title="Pattern Library" />
      <div className="app-wrapper--content">
        <Sidebar
          activeItem={activeComponent}
          sidebarItems={COMPONENTS_LIST}
          onClick={e => handleComponent(e)}
        />
        <Main activeComponent={COMPONENTS[activeComponent].component} />
      </div>
    </div>
  );
}

PatternLibrary.propTypes = {};

export default PatternLibrary;
