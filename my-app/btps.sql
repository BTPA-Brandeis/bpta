CREATE DATABASE btpa;
USE btpa;
SHOW TABLES;

CREATE TABLE users (
  id INT auto_increment,
  userFirstName VARCHAR(255) NOT NULL,
  userLastName VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  accessLevel INT,
  email VARCHAR(255) NOT NULL,
  DOB VARCHAR(255) NOT NULL,
  profileImage VARCHAR(255) NOT NULL,
  securityQuestionOne VARCHAR(255) NOT NULL,
  securityQuestionTwo VARCHAR(255) NOT NULL,
  locationZone INT,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id)
);

CREATE TABLE fitness (
  id INT auto_increment,
  userID INT,
  pushUps INT,
  sitUps INT,
  boxJumps INT,
  kilometersRan INT,
  waterIntakeOz INT,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id)
  );
  
  CREATE TABLE userFitnessLinkings (
  userID INT,
  fitnessID INT,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  FOREIGN KEY (userID) REFERENCES users(id),
  FOREIGN KEY (fitnessID) REFERENCES fitness(id)
);

CREATE TABLE posts (
  id INT auto_increment,
  accessLevelReq INT,
  body INT,
  userID INT,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id),
FOREIGN KEY (userID) REFERENCES users(id)
  );
  
  CREATE TABLE resources (
  id INT auto_increment,
  url VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  createdAt DATETIME DEFAULT NOW(),
  updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
  deletedAt DATETIME,
  PRIMARY KEY(id)
  );
  