module.exports = function (sequelize, DataTypes) {
  const EbayCollections = sequelize.define(
    "EbayCollections",
    {
      itemid: DataTypes.BIGINT.UNSIGNED,
      title: DataTypes.TEXT,
      category: DataTypes.TEXT,
      location: DataTypes.STRING,
      price: {
        type: DataTypes.INTEGER.UNSIGNED,
        notEmpty: false,
        defaultValue: null
      },
      ebayurl: DataTypes.STRING,
      image: DataTypes.STRING
    },
    { timestamps: false }
  );

  return EbayCollections;
};