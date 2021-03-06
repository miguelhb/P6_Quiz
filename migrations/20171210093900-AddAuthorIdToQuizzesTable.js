'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'quizzes',
            'authorId', //añade la columna authorId a la tabla quizzes
            {type: Sequelize.INTEGER}
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('quizzes', 'authorId');
    }
};
