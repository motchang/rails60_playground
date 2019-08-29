import { Selector } from 'testcafe'

import { PageModel } from './types'

const page: PageModel = {
  url: '',
  todoInput: Selector('.new-todo'),
  todoList: Selector('.todo-list .view'),
  completeButton: Selector('.filters li')
    .sibling(-1)
    .find('a'),
}

export const indexPage: PageModel = {
  ...page,
  url: 'http://todomvc.com/examples/react/#/',
}

export const completedPage: PageModel = {
  ...page,
  url: 'http://todomvc.com/examples/react/#/completed',
}
