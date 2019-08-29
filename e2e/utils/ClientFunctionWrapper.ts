import { ClientFunction } from 'testcafe'

export const getLocation = ClientFunction(() => window.location.href)
