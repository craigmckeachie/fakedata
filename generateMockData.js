const faker = require('faker');
const _ = require('lodash');

// let result = faker.random.boolean();
// console.log(JSON.stringify(result));

const db = {
  projects: _.times(100, number => {
    return {
      id: number,
      name: faker.company.companyName(),
      description:
        faker.company.catchPhrase() + '. ' + faker.lorem.sentence(10),
      imageUrl:
        'assets/placeimg_500_300_arch' +
        faker.random.number({ min: 1, max: 12 }) +
        '.jpg',
      contractTypeId: faker.random.number({ min: 1, max: 7 }),
      contractSignedOn: faker.date.past(9, '09/10/2018'),
      budget: faker.random.number({ min: 20000, max: 100000, precision: 1 }),
      isActive: faker.random.boolean(),
      editing: false
    };
  })
};
// console.log(db);

json = JSON.stringify(db, null, 2);
// console.log(json);

const fs = require('fs');
fs.writeFile('./api/db.json', json, function(err) {
  if (err) {
    return console.error(err);
  } else {
    console.log('Mock data generated as json.');
  }
});
