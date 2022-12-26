'use strict';

const { v4: uuidv4 } = require('uuid');
const {faker} = require('@faker-js/faker')

module.exports = {
 async up(queryInterface, DataTypes) {
  await queryInterface.bulkInsert('deliverymethod', [
    {
      uuid: uuidv4(),
      deliveryName: 'Ambil Ditoko',
      deliveryStatus: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: uuidv4(),
      deliveryName: 'Kurir Happypets',
      deliveryStatus: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
},

  async down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('deliverymethod', null, {});
}}
