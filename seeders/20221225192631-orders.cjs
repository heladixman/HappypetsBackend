'use strict';

const { v4: uuidv4 } = require('uuid');
const {faker} = require('@faker-js/faker')

module.exports = {
 async up(queryInterface, DataTypes) {
  await queryInterface.bulkInsert('order', [
    {
      uuid: uuidv4(),
      userId: 1,
      paymentmethodId: 1,
      deliverymethodId: 1,
      paymentCode: 'GHFJ2153KV9412315',
      deliveryCode: 'HPTS1102485182',
      invoice: 'INV/2022/1305912',
      orderTotal: 450000,
      orderStatus: 'pending_payment',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: uuidv4(),
      userId: 1,
      paymentmethodId: 1,
      deliverymethodId: 1,
      paymentCode: 'GHFJ825493498214',
      deliveryCode: 'HPTS753685294',
      invoice: 'INV/2022/7954283',
      orderTotal: 180000,
      orderStatus: 'new_order',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: uuidv4(),
      userId: 1,
      paymentmethodId: 1,
      deliverymethodId: 1,
      paymentCode: 'GHFJ023JGTMAG05',
      deliveryCode: 'HPTS5186116216',
      invoice: 'INV/2022/8921658',
      orderTotal: 80000,
      orderStatus: 'process',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: uuidv4(),
      userId: 1,
      paymentmethodId: 1,
      deliverymethodId: 1,
      paymentCode: 'GHFJJGE8923NGEW0',
      deliveryCode: 'HPTS518378312',
      invoice: 'INV/2022/27591361',
      orderTotal: 85000,
      orderStatus: 'in_shipping',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: uuidv4(),
      userId: 1,
      paymentmethodId: 1,
      deliverymethodId: 1,
      paymentCode: 'GHFJ850672092',
      deliveryCode: 'HPTS9945674',
      invoice: 'INV/2022/8005720',
      orderTotal: 60000,
      orderStatus: 'order_canceled',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      uuid: uuidv4(),
      userId: 1,
      paymentmethodId: 1,
      deliverymethodId: 1,
      paymentCode: 'GHFJ2884502803',
      deliveryCode: 'HPTS12348819',
      invoice: 'INV/2022/008852691',
      orderTotal: 60000,
      orderStatus: 'done',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
},

  async down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('order', null, {});
}}
