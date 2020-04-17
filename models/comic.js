module.exports = function (sequelize, DataTypes){
  const Comic = sequelize.define("Comic", {
    publisher: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    issue: {
      type: DataTypes.INTEGER,
      isNumeric: true
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Comic;
};

