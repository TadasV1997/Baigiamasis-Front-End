module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      nickname: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      }
    });
    return User;
  };