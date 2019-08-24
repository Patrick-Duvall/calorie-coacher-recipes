'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      // logic for transforming into the new state
       queryInterface.addColumn(
        'Recipes',
        'url',
       Sequelize.STRING
      );
       return queryInterface.addColumn(
        'Recipes',
        'image',
       Sequelize.STRING
      );
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
      'Recipes',
      'url',
    );
    return queryInterface.removeColumn(
      'Recipes',
      'image',
    );
  }
};
