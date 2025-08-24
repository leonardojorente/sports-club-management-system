import { faker } from '@faker-js/faker'

export const registerUserData = (overrides = {}) => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
  roles: ['ROLE_ADMIN'],
  ...overrides // Allow custom overrides
});