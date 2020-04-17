module.exports = function (sequelize, DataTypes){
  const Stamp = sequelize.define("Stamp", {
    origincountry: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postmark: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    condition: {type: DataTypes.STRING,
      allowNull: false}
  });
  return Stamp;
};


