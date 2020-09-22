import { formatDate } from './data'

describe('formatDate', () => {
  const now = new Date('2020-09-22 09:21:32')
  test('作成してすぐ', () => {
    expect(formatDate(new Date(now), now)).toEqual({
      datetime: '2020/09/22 09:21',
      isNew: true,
    })
  })
  test('一週間経過', () => {
    expect(formatDate(new Date('2020-09-14 09:21:32'), now)).toEqual({
      datetime: '2020/09/14 09:21',
      isNew: false,
    })
  })
})
