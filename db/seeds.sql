USE collection_db;

INSERT INTO Collections (name, category, itemNum, createdAt, updatedAt)
VALUES ("Amazing Spider-Man", "Comics", 300, now(), now());

select * from Collections;