const monemt = require ('moment');
const faker = require('faker');
const { company } = require('faker');

const data = [];
for (let i = 0 ; i<10; i ++){
    data.push({
      address: `${faker.address.streetAddress()} ${faker.address.city()} ${faker.address.zipCode()}`,
      company: `${faker.company.companyName()} ${faker.company.catchPhraseDescriptor()}`,
      finance:`${faker.finance.account()} ${faker.finance.accountName()}`,
      name: i + 1, //`${faker.name.findName()} ${faker.name.jobTitle()}`
    })
}
console.log(data)

module.exports = data;