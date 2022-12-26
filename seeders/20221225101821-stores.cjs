'use strict';

const { v4: uuidv4 } = require('uuid');
const {faker} = require('@faker-js/faker')

module.exports = {
 async up(queryInterface, DataTypes) {
  await queryInterface.bulkInsert('store', [
    {
      uuid: uuidv4(),
      userId: 3,
      storeName: 'Dunia Binatang',
      storeProfile: faker.image.imageUrl(),
      storeLevel: 1,
      storeStatus: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
},

  async down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('store', null, {});
}}
