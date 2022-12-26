'use strict';

const { v4: uuidv4 } = require('uuid');
const {faker} = require('@faker-js/faker')

module.exports = {
 async up(queryInterface, DataTypes) {
  await queryInterface.bulkInsert('orderdetail', [
    {
      uuid: uuidv4(),
      orderId: 1,
      itemId: 11,
      qty: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: uuidv4(),
      orderId: 1,
      itemId: 12,
      qty: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: uuidv4(),
      orderId: 2,
      itemId: 12,
      qty: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: uuidv4(),
      orderId: 2,
      itemId: 13,
      qty: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: uuidv4(),
      orderId: 3,
      itemId: 13,
      qty: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: uuidv4(),
      orderId: 3,
      itemId: 14,
      qty: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: uuidv4(),
      orderId: 4,
      itemId: 14,
      qty: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: uuidv4(),
      orderId: 4,
      itemId: 15,
      qty: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: uuidv4(),
      orderId: 5,
      itemId: 15,
      qty: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: uuidv4(),
      orderId: 5,
      itemId: 16,
      qty: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: uuidv4(),
      orderId: 6,
      itemId: 15,
      qty: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: uuidv4(),
      orderId: 6,
      itemId: 16,
      qty: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
},

  async down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('orderdetail', null, {});
}}
