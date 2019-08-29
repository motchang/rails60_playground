import { Selector } from 'testcafe'

export type PageModel = {
  url: string
  todoInput: Selector
  todoList: Selector
  completeButton: Selector
}
