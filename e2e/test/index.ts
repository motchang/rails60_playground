import { indexPage, completedPage } from '../PageModel'
import { getLocation } from '../utils/ClientFunctionWrapper'

fixture('top').page(indexPage.url)
test('onload', async t => {
  await t
    .expect(indexPage.todoInput.getAttribute('placeholder'))
    .eql('What needs to be done?')
})

test('add', async t => {
  await t
    .typeText(indexPage.todoInput, 'buy tomato')
    .pressKey('enter')
    // clear text
    .expect(indexPage.todoInput.value)
    .eql('')
    // add list
    .expect(indexPage.todoList.count)
    .eql(1)
    // filter by completed
    .click(indexPage.completeButton)
    .expect(indexPage.todoList.count)
    .eql(0)
    .expect(getLocation())
    .eql(completedPage.url)
})
