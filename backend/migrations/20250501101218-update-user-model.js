'use strict';

export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'nationalId', {
      type: Sequelize.BIGINT,
      allowNull: true,
    });

    await queryInterface.addColumn('Users', 'gender', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('Users', 'birthDay', {
      type: Sequelize.DATE,
      allowNull: true,
    });

    await queryInterface.addColumn('Users', 'province', {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn('Users', 'district', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'district');
    await queryInterface.removeColumn('Users', 'province');
    await queryInterface.removeColumn('Users', 'birthDay');
    await queryInterface.removeColumn('Users', 'gender');
    await queryInterface.removeColumn('Users', 'nationalId');
  }
};
