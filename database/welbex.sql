CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  date DATE not null,
  title VARCHAR(255) not null,
  count INT not null,
  distance INT not null
);

CREATE INDEX items_title_id_idx ON items (title, id);
CREATE INDEX items_count_id_idx ON items (count, id);
CREATE INDEX items_distance_id_idx ON items (distance, id);