import { Selector } from 'testcafe'

const url = 'http://todomvc.com/examples/react/#/'
const selectorInput = '.new-todo'

fixture('top').page(url)
test('onload', async t => {
  await t
    .expect(Selector(selectorInput).getAttribute('placeholder'))
    .eql('What needs to be done?')
})

test('add', async t => {
  const todoList = Selector('.todo-list .view')
  const completeButton = Selector('.filters li')
    .sibling(-1)
    .find('a')

  await t
    .typeText(selectorInput, 'buy tomato')
    .pressKey('enter')
    // clear text
    .expect(Selector(selectorInput).value)
    .eql('')
    // add list
    .expect(todoList.count)
    .eql(1)
    // filter completed
    .click(completeButton)
    .expect(todoList.count)
    .eql(0)
})
