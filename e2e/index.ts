import { Selector } from 'testcafe'

fixture('top').page('http://todomvc.com/examples/react/#/')

test('onload', async t => {
  await t
    .expect(Selector('.new-todo').getAttribute('placeholder'))
    .eql('What needs to be done?')
})
