CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  date DATE not null,
  title VARCHAR(255) not null,
  count INT not null,
  distance INT not null
);