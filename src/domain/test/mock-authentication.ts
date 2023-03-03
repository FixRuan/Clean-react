import { AuthenticationParams } from "../usecases/authentication";
import * as fakerjs from "@faker-js/faker";
const { faker } = fakerjs;

export const mockAuthentication = (): AuthenticationParams => {
  return {
    email: faker.internet.email(),
    password: faker.internet.password()
  };
};