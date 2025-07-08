import { DataTypes } from "sequelize";
import sequelize from "../config/dbSql.js";

const EmployementInfo = sequelize.define(
  "EmployementInfo",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    employerName: DataTypes.STRING,
    jobTitle: DataTypes.STRING,
    monthlyIncome: DataTypes.DECIMAL(10, 2),
    employmentType: DataTypes.STRING, // e.g., "permanent", "contract", "self-employed"
    workAddress: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    }
  },
  {
    timestamps: false,
  }
);

export default EmployementInfo;
