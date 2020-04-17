module.exports = function (sequelize, DataTypes){
  const Card = sequelize.define("Card", {
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
    grade: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Card;
};



