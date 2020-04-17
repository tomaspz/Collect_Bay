module.exports = function (sequelize, DataTypes){
  const Toy = sequelize. define("Toy", {
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    make: {
      type: DataTypes.STRING,
      allowNull: false
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: false}
  });
  return Toy;
};

