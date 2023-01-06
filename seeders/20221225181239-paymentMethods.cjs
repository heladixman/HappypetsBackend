'use strict';

const { v4: uuidv4 } = require('uuid');
const {faker} = require('@faker-js/faker')

module.exports = {
 async up(queryInterface, DataTypes) {
  await queryInterface.bulkInsert('paymentmethod', [
    {
      uuid: uuidv4(),
      paymentName: 'Bayar Ditoko',
      paymentCategory: "Bayar Ditoko",
      paymentDesc: 'Silahkan bayar pesanan sesuai dengan biaya total yang tertera',
      paymentStatus: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: uuidv4(),
      paymentName: 'Bayar Ditempat',
      paymentCategory: "Bayar Ditempat",
      paymentDesc: 'Bayar pesanan sesuai dengan biaya total yang tertera ketika pesanan sampai',
      paymentStatus: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
},

  async down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('paymentmethod', null, {});
}}
