module.exports = function (sequelize, DataTypes){
  const Card = sequelize. define("Comic", {
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    player: {
      type: DataTypes.STRING,
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      isNumeric: true
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Card;
};

