// Import React, ReactDOM and the DummyComponent.
import React from 'react'
import ReactDOM from 'react-dom'
import { Main } from './main.jsx'
import './scss/main.scss'
import '../lib/scss/main.scss'

const root = document.querySelector('#app')
ReactDOM.render(<Main />, root)
