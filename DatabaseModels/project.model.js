"use strict";

module.exports = (sequelize, DataTypes) => {
  const projects = sequelize.define("project", {
    studentFirstName: {
      type: DataTypes.STRING,
      allowull: false,
      unique: true,
    },
    studentLastName: {
      type: DataTypes.STRING,
      allowull: false,
      unique: true,
    },
    degree: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    projectName: {
      type: DataTypes.STRING,
    },
    projectImg: {
      type: DataTypes.STRING,
      defaultValue:
        "https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small/default-avatar-photo-placeholder-profile-picture-vector.jpg",
      allowNull: false,
    },
  });
  return projects;
};
