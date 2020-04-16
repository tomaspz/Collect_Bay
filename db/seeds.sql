USE collection_db;

INSERT INTO collections (name, category, itemNum, createdAt, updatedAt)
VALUES ("Amazing Spider-Man", "Comics", 300, 1, now(), now());

select * from collections;