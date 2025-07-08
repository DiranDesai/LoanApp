import { DataTypes } from "sequelize";
import sequelize from "../config/dbSql.js";

const Loan = sequelize.define("Loan", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  amount: DataTypes.DECIMAL(10, 2),
  interestRate: DataTypes.DECIMAL(5, 2),
  durationMonths: DataTypes.INTEGER,
  status: {
    type: DataTypes.ENUM(
      "pending",
      "approved",
      "rejected",
      "disbursed",
      "repaid"
    ),
    defaultValue: "pending",
  },
  purpose: DataTypes.STRING,
  startDate: DataTypes.DATE,
  dueDate: DataTypes.DATE,
  remainingBalance: DataTypes.DECIMAL(10, 2),
});

export default Loan;
