"use strict";

module.exports = (sequelize, DataTypes) => {
  const events = sequelize.define("event", {
    eventTitle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    eventCoordinator: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    eventIntroducer: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    eventDate: {
      type: DataTypes.DATE,
      defaultValue: new Date(Date.now()),
      allowNull: true,
    },
    eventContent: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  return events;
};
