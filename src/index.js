import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import Main from './layouts/Main'
import Header from './layouts/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Button from './components/Button/Button'
import InputText from './components/Input/InputText'
import Accordion from './components/Accordion/Accordion'
import Toggle from './components/Toggle/Toggle'
import InputCheckbox from './components/Input/InputCheckbox'
import InputSelect from './components/Input/InputSelect'

const COMPONENTS_LIST = ['button', 'accordion', 'input text', 'select input', 'toggle', 'checkbox']

const SELECT_ITEMS = ['Option 1', 'Option 2', 'Option 3', 'Option 4']

export default function App() {
  const [activeComponent, setActiveComponent] = useState('button');
  const [inputValue, setInputValue] = useState('');
  const [toggleStatus, setToggleStatus] = useState(false);
  const [checkboxStatus, setCheckboxStatus] = useState(false);
  const [selectInput, setSelectInput] = useState('');
  const handleComponent = e => setActiveComponent(e.target.id);
  const handleInput = e => setInputValue(e.target.value);
  const handleToggle = () => setToggleStatus(!toggleStatus);
  const handleCheckbox = () => setCheckboxStatus(!checkboxStatus);
  const handleSelect = e => setSelectInput(e.target.id);
  const COMPONENTS = {
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
        <InputText inputValue={inputValue} onChange={e => handleInput(e)} placeholder="Single input text..." label="Input Text" labelPosition="top" />
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
      )
    },
    toggle: {
      title: 'toggle',
      component: (
        <Toggle isActive={toggleStatus} onClick={() => handleToggle()} />
      )
    },
    checkbox: {
      title: 'checkbox',
      component: (
        <InputCheckbox label="Input Checkbox" isActive={checkboxStatus} onChange={() => handleCheckbox()} />
      )
    },
    'select input': {
      title: 'select input',
      component: (
        <InputSelect isActive={selectInput} label="Select Input" handleSelect={e => handleSelect(e)} items={SELECT_ITEMS} placeholder="Select..." />
      )
    }
  };
  return (
    <div className="page-wrapper">
      <Header />
      <div className="sidebar-main-wrapper">
        <Sidebar isActive={activeComponent} components={COMPONENTS_LIST} onClick={e => handleComponent(e)} />
        <Main activeComponent={COMPONENTS[activeComponent].component} />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
