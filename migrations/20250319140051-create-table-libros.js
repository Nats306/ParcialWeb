'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.createTable('libros',{
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      autor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      precio:{
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      stock:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      precioTotal:{
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      estado: {
        type: Sequelize.STRING,
        defaultValue: "Activo",
        allowNull: false
      },
    });
  },

  down: async(queryInterface, Sequelize) => {
    await queryInterface.dropTable('libros');
  }
};
