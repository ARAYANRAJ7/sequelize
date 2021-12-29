"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "Credentials", // name of Source model
      "UserDetailId", // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: "UserDetails", // name of Target model
          key: "id", // key in Target model that we're referencing
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "Credentials", // name of Source model
      "UserDetailsId" // key we want to remove
    );
  },
};
