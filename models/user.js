module.exports = function (sequelize, DataTypes){
  const User = sequelize.define("User", {
    username: DataTypes.STRING,
  });
 
  // User.associate = models => {
  //   User.belongsToMany(models.Collection, { 
  //     through: models.EbayCollections,
  //     foreignKey: "userId"
  //   });
  // };

  // User.associate = models => {
  //   User.hasMany(models.Collection, {
  //     as: "collectionId"
  //   });
  // };
  return User;
};

