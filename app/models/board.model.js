module.exports = (sequelize, Sequelize) => {
    const Board = sequelize.define("board", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      bindata: {
        type: Sequelize.BLOB
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
    return Board;
  };