module.exports = function (sequelize, DataTypes){
  const Stamp = sequelize.define("Stamp", {
    category: {
      type: DataTypes.STRING,
      validate: {
        equals: "Stamps"
      }
    },
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
    quality: {type: DataTypes.STRING,
      allowNull: false}
  });
  return Stamp;
};


