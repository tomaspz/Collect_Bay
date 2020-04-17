USE collection_db;

INSERT INTO collections (name, category, itemNum, createdAt, updatedAt)
VALUES ("Amazing Spider-Man", "Comics", 300, now(), now());

select * from collections;

INSERT INTO Cards (manufacturer, player, year, grade)
VALUES ("Topps", "Barry Bonds", 1987, "Fair");

select * from Cards;

INSERT INTO Comics (publisher, title, issue, grade)
VALUES ("Marvel", "Amazing Fantasy", 15, "Mint");

select * from Comics;

INSERT INTO Records (artist, album, grade)
VALUES ("Prince", "Purple Rain", "Mint");

select * from Records;

INSERT INTO Stamps (origincountry, class, postmark, grade)
VALUES ("United States", "Commerative", TRUE, "Fair");

select * from Stamps;

INSERT INTO Toys (manufacturer, make, model, grade)
VALUES ("Mattel", "Barbie", "Christmas Edition", "Mint");

select * from Toys;

INSERT INTO Wines (vineyard, style, variety, vintage, winegrade)
VALUES ("Mondavi", "Red", "Merlot", 1985, "Mint");

select * from Wines;
 
