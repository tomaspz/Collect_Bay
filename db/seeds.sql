USE collection_db;

INSERT INTO collections (name, category, itemNum, createdAt, updatedAt)
VALUES ("Amazing Spider-Man", "Comics", 300, now(), now());

select * from collections;

INSERT INTO Cards (manufacturer, player, year, quality, createdAt, updatedAt)
VALUES ("Topps", "Barry Bonds", 1987, "Fair", now(), now());

select * from Cards;

INSERT INTO Comics (publisher, title, issue, quality, createdAt, updatedAt)
VALUES ("Marvel", "Amazing Fantasy", 15, "Mint", now(), now());

select * from Comics;

INSERT INTO Records (artist, album, quality, createdAt, updatedAt)
VALUES ("Prince", "Purple Rain", "Mint", now(), now());

select * from Records;

INSERT INTO Stamps (origincountry, class, postmark, quality, createdAt, updatedAt)
VALUES ("United States", "Commerative", TRUE, "Fair", now(), now());

select * from Stamps;

INSERT INTO Toys (manufacturer, make, model, quality, createdAt, updatedAt)
VALUES ("Mattel", "Barbie", "Christmas Edition", "Mint", now(), now());

select * from Toys;

INSERT INTO Wines (vineyard, style, variety, vintage, winegrade, createdAt, updatedAt)
VALUES ("Mondavi", "Red", "Merlot", 1985, 90, now(), now());

select * from Wines;
 
