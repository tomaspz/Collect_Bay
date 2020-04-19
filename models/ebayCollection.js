module.exports = function (sequelize, DataTypes){
    const EbayCollections = sequelize. define(
      "EbayCollections",
      {
        itemId: DataTypes.INTEGER,
        title: DataTypes.STRING,
        category: DataTypes.STRING,
        location: DataTypes.STRING,
        price: DataTypes.INTEGER,
        condition: DataTypes.STRING,
        url: DataTypes.STRING
      },
      { timestamps: false }
    );
  
    return EbayCollections;
  };