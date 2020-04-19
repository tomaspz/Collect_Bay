module.exports = function (sequelize, DataTypes){
  const Collection = sequelize. define("Collection", {
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    itemNum: DataTypes.INTEGER,
  });

  // Collection.associate = models => {
  //   Collection.belongsToMany(models.User, { 
  //     through: models.EbayCollections,
  //     foreignKey: "collectionId"
  //   });
  // }
  
  return Collection;
};

