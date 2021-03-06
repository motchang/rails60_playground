import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import '../src/index.less'

const req = require.context('../src/components', true, /.stories.tsx?$/)
const loadStories = () => req.keys().forEach(filename => req(filename))

addDecorator(withKnobs)

configure(loadStories, module)
