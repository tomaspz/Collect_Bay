module.exports = function (sequelize, DataTypes) {
  const EbayCollections = sequelize.define(
    "EbayCollections",
    {
      itemid: DataTypes.STRING,
      title: DataTypes.TEXT,
      category: DataTypes.TEXT,
      location: DataTypes.STRING,
      price: {
        type: DataTypes.STRING,
        notEmpty: false,
        defaultValue: null
      },
      condition: DataTypes.STRING,
      url: DataTypes.STRING
    },
    { timestamps: false }
  );

  return EbayCollections;
};