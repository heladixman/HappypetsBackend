'use strict';

const { v4: uuidv4 } = require('uuid');
const {faker} = require('@faker-js/faker')

module.exports = {
 async up(queryInterface, DataTypes) {
  await queryInterface.bulkInsert('cart', [
    {
      uuid: uuidv4(),
      userId: 1,
      itemId: 11,
      qty: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: uuidv4(),
      userId: 1,
      itemId: 12,
      qty: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: uuidv4(),
      userId: 1,
      itemId: 13,
      qty: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
},

  async down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('cart', null, {});
}}
