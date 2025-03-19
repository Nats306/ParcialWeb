'use strict'
const {Model, DataTypes} = require('sequelize');

module.exports = (sequelize) => {
  class Libro extends Model {
    static associate(models) {
      // define association here
    }
  }
  Libro.init({
    id: {
      type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    autor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    precio:{
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    stock:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precioTotal:{
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    estado: { //es para el borrado lógico
      type: DataTypes.STRING,
      defaultValue: "Activo",
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Libro',
    tableName: 'libros',
    timestamps: false

  });
  return Libro;
}