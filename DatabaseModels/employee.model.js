"use strict";

module.exports = (sequelize, DataTypes) => {
  const employee = sequelize.define("employee", {
    employeename: {
      type: DataTypes.STRING,
      allowull: false,
      unique: true,
    },
    picture: {
      type: DataTypes.STRING,
      defaultValue:
        "https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small/default-avatar-photo-placeholder-profile-picture-vector.jpg",
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return employee;
};
