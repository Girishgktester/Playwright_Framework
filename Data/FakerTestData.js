// utils/testData.js
const { faker } = require('@faker-js/faker');

function generateUser() {
  return {
    name: faker.person.fullName(),
    lastname: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phone: faker.phone.number(),
    cardNumber: faker.finance.creditCardNumber(),
    month: faker.date.month({ abbreviated: true }), // e.g. "Jan"
    year: String(faker.date.future({ years: 5 }).getFullYear()), // future year as string
    cvv: faker.finance.creditCardCVV()
  };
}

module.exports = { generateUser };
