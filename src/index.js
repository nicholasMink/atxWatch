import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import PatternLibrary from './templates/PatternLibrary'

export default function App() {
  const patternLibrary = <PatternLibrary />
  return patternLibrary;
}

ReactDOM.render(<App />, document.getElementById('app'))
