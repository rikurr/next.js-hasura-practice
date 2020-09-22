import { formatDate } from './data'

describe('formatDate', () => {
  const now = new Date('2020-09-22 09:21:32')
  test('作成してすぐ', () => {
    expect(formatDate(new Date(now), now)).toEqual({
      datetime: '2020-09-22 09:21:32',
      isNew: true,
    })
  })
})
