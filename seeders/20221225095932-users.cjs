'use strict';

const { v4: uuidv4 } = require('uuid');
const argon2 = require('argon2')

module.exports = {
 async up(queryInterface, DataTypes) {
  await queryInterface.bulkInsert('user', [
    {
      uuid: uuidv4(),
      Ufname: 'user',
      Uname: 'user',
      email: 'user@happypets.com',
      Uphone: '6282211223344',
      password: await argon2.hash('user12345'),
      UStatus: true,
      isVerif: true,
      Urole: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: uuidv4(),
      Ufname: 'admin',
      Uname: 'admin',
      email: 'admin@happypets.com',
      Uphone: '6282211223344',
      password: await argon2.hash('admin12345'),
      UStatus: true,
      isVerif: true,
      Urole: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: uuidv4(),
      Ufname: 'seller',
      Uname: 'seller',
      email: 'seller@happypets.com',
      Uphone: '6282211223344',
      password: await argon2.hash('seller12345'),
      UStatus: true,
      isVerif: true,
      Urole: 'seller',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: uuidv4(),
      Ufname: 'kurir',
      Uname: 'kurir',
      email: 'user@happypets.com',
      Uphone: '6282211223344',
      password: await argon2.hash('kurir12345'),
      UStatus: true,
      isVerif: true,
      Urole: 'kurir',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
},

  async down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('user', null, {});
}}
