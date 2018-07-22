const faker = require('faker');
const _ = require('lodash');

// card = faker.helpers.createCard();
// // let product = faker.fake('{{image.business}}');
// console.log(JSON.stringify(card));

const db = {
  users: _.times(10000, number => {
    return {
      id: number,
      name: faker.name.findName(),
      avatar: faker.internet.avatar()
    };
  })
};

json = JSON.stringify(db);
// console.log(json);

const fs = require('fs');
fs.writeFile('./api/db.json', json, function(err) {
  if (err) {
    return console.error(err);
  } else {
    console.log('Mock data generated.');
  }
});
