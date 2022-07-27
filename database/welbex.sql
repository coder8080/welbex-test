CREATE TABLE item (
  id SERIAL PRIMARY KEY,
  date DATE not null,
  title VARCHAR(255) not null,
  distance INT not null,
);