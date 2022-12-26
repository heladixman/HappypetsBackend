'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
 async up(queryInterface, DataTypes) {
  await queryInterface.bulkInsert('category', [
    {
      categoryName: 'pets',
      uuid: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: 'product',
      uuid: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: 'article',
      uuid: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: 'anjing',
      uuid: uuidv4(),
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: 'kucing',
      uuid: uuidv4(),
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: 'ikan',
      uuid: uuidv4(),
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: 'Kelinci',
      uuid: uuidv4(),
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: 'kura-kura',
      uuid: uuidv4(),
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: 'Burung',
      uuid: uuidv4(),
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: 'Reptil',
      uuid: uuidv4(),
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: 'Makanan & Cemilan',
      uuid: uuidv4(),
      categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: 'Alat Kebersihan',
      uuid: uuidv4(),
      categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: 'Obat & Vitamin',
      uuid: uuidv4(),
      categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: 'Kandang & Tempat Tidur',
      uuid: uuidv4(),
      categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: 'Mainan & Dekorasi',
      uuid: uuidv4(),
      categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: 'Aquarium & Jaring',
      uuid: uuidv4(),
      categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: 'Aksesori',
      uuid: uuidv4(),
      categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: 'Promo',
      uuid: uuidv4(),
      categoryId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: 'Event',
      uuid: uuidv4(),
      categoryId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      categoryName: 'Kesehatan',
      uuid: uuidv4(),
      categoryId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
},

  async down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('category', null, {});
}}
