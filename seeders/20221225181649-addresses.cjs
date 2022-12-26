'use strict';

const { v4: uuidv4 } = require('uuid');
const {faker} = require('@faker-js/faker')

module.exports = {
 async up(queryInterface, DataTypes) {
  await queryInterface.bulkInsert('address', [
    {
      uuid: uuidv4(),
      userId: 1,
      province: 'Kepulauan Riau',
      city: 'Batam',
      distric: 'Batu Aji',
      addressDetail: 'Jl. Letjend Suprapto, Tembesi, Kec. Batu Aji, Kota Batam, Kepulauan Riau 29439',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: uuidv4(),
      userId: 1,
      province: 'Kepulauan Riau',
      city: 'Batam',
      distric: 'Kota Batam',
      addressDetail: 'Jl. Ruko Greenland No.3A, Tlk. Tering, Kec. Batam Kota, Kota Batam, Kepulauan Riau 29432',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: uuidv4(),
      userId: 1,
      province: 'Kepulauan Riau',
      city: 'Batam',
      distric: 'Lubu Baja',
      addressDetail: 'Jl. Bunga Raya No.03, Baloi Indah, Kec. Lubuk Baja, Kota Batam, Kepulauan Riau 29444',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
},

  async down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('address', null, {});
}}
