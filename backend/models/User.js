import { DataTypes } from "sequelize";
import sequelize from "../config/dbSql.js"; 

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4, // auto-generate UUID
    primaryKey: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phonenumber: {
    type: DataTypes.BIGINT, // Because phone numbers can be big
    allowNull: false,
    unique: true
  },
  role: {
    type: DataTypes.ENUM('borrower', 'admin'),
    defaultValue: 'borrower'
  },
  nationalId:{
    type: DataTypes.BIGINT,
    allowNull: true
  },
  gender:{
    type: DataTypes.STRING,
    allowNull: true
  },
  birthDay:{
    type: DataTypes.DATE,
    allowNull: true
  },
  province:{
    type: DataTypes.STRING,
    allowNull: true
  },
  district:{
    type: DataTypes.STRING,
    allowNull: true
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: false 
});


export default User;
