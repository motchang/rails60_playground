import React from 'react'
import { render } from 'react-dom'

import './index.less'
import { App } from './App'

const root = document.querySelector('#root')

if (root) {
  render(<App />, root)
}
