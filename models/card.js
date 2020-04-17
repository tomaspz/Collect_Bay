module.exports = function (sequelize, DataTypes){
  const Card = sequelize.define("Card", {
    category: {
      type: DataTypes.STRING,
      validate: {
        equals: "Cards"
      }
    },
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
    quality: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Card;
};



