USE collection_db;

INSERT INTO collections (name, category, itemNum, createdAt, updatedAt)
VALUES ("Amazing Spider-Man", "Comics", 300, now(), now());

select * from collections;

INSERT INTO cards (category, manufacturer, player, year, quality, createdAt, updatedAt)
VALUES ("Cards", "Topps", "Barry Bonds", 1987, "Fair", now(), now());

select * from cards;

INSERT INTO Comics (category, publisher, title, issue, quality, createdAt, updatedAt)
VALUES ("Comics","Marvel", "Amazing Fantasy", 15, "Mint", now(), now());

select * from comics;

INSERT INTO Records (category, artist, album, quality, createdAt, updatedAt)
VALUES ("Records","Prince", "Purple Rain", "Mint", now(), now());

select * from records;

INSERT INTO stamps (category, origincountry, class, postmark, quality, createdAt, updatedAt)
VALUES ("Stamps", "United States", "Commerative", TRUE, "Fair", now(), now());

select * from stamps;

INSERT INTO toys (category, manufacturer, make, model, quality, createdAt, updatedAt)
VALUES ("Toys", "Mattel", "Barbie", "Christmas Edition", "Mint", now(), now());

select * from toys;

INSERT INTO wines (category, vineyard, style, variety, vintage, winegrade, createdAt, updatedAt)
VALUES ("Wines", "Mondavi", "Red", "Merlot", 1985, 90, now(), now());

select * from wines;
 
