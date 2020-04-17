module.exports = function (sequelize, DataTypes){
  const Stamp = sequelize.define("Stamp", {
    origincountry: {
      type: DataTypes.STRING,
      allowNull: false
    },
    class: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postmark: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    grade: {type: DataTypes.STRING,
      allowNull: false}
  });
  return Stamp;
};


