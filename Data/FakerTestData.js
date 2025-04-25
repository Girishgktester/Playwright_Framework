// utils/testData.js
const { faker } = require('@faker-js/faker');

function generateUser() {
  return {
    name: faker.person.fullName(),
    lastname: faker.person.lastName(),

    email: faker.internet.email(),
    password: faker.internet.password(),
    phone: faker.phone.number()

  };
}


module.exports = { generateUser };
