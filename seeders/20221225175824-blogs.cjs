'use strict';

const { v4: uuidv4 } = require('uuid');
const {faker} = require('@faker-js/faker')

module.exports = {
 async up(queryInterface, DataTypes) {
  await queryInterface.bulkInsert('blog', [
    {
      uuid: uuidv4(),
      categoryId: 20,
      BlogTitle: 'Tips Merawat kucing yang sedang sakit',
      BlogContent: faker.random.words(200),
      BlogImage: faker.image.imageUrl(),
      BlogStatus: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: uuidv4(),
      categoryId: 19,
      BlogTitle: 'Lomba Kecantikan Hewan Peliharaan 2023',
      BlogContent: faker.random.words(200),
      BlogImage: faker.image.imageUrl(),
      BlogStatus: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: uuidv4(),
      categoryId: 18,
      BlogTitle: 'Januari Full Happy, Banjir Voucher Diskon',
      BlogContent: faker.random.words(200),
      BlogImage: faker.image.imageUrl(),
      BlogStatus: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: uuidv4(),
      categoryId: 20,
      BlogTitle: 'Tandai gejala hewan peliharaan yang sedang sakit',
      BlogContent: faker.random.words(200),
      BlogImage: faker.image.imageUrl(),
      BlogStatus: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: uuidv4(),
      categoryId: 20,
      BlogTitle: 'Hewan peliharaan jadi lebih cuek? ini penyebabnya',
      BlogContent: faker.random.words(200),
      BlogImage: faker.image.imageUrl(),
      BlogStatus: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: uuidv4(),
      categoryId: 18,
      BlogTitle: 'Promo Akhir tahun, diskon sampai 90%',
      BlogContent: faker.random.words(200),
      BlogImage: faker.image.imageUrl(),
      BlogStatus: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: uuidv4(),
      categoryId: 20,
      BlogTitle: 'Rekomandasi makanan premium sehat dan bergizi untuk kucingmu',
      BlogContent: faker.random.words(200),
      BlogImage: faker.image.imageUrl(),
      BlogStatus: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: uuidv4(),
      categoryId: 20,
      BlogTitle: 'Tanda anjingmu peduli dan sayang terhadapmu',
      BlogContent: faker.random.words(200),
      BlogImage: faker.image.imageUrl(),
      BlogStatus: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: uuidv4(),
      categoryId: 20,
      BlogTitle: 'Tanda tanda anjing akan sakit, apa saja ?',
      BlogContent: faker.random.words(200),
      BlogImage: faker.image.imageUrl(),
      BlogStatus: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: uuidv4(),
      categoryId: 20,
      BlogTitle: 'Virus yang berbahaya bagi hewan peliharaan, apa saja ?',
      BlogContent: faker.random.words(200),
      BlogImage: faker.image.imageUrl(),
      BlogStatus: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
},

  async down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('blog', null, {});
}}
