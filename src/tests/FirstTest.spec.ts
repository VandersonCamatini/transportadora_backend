import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Vanderson'

  expect(user.name).toEqual('Vanderson')
})
