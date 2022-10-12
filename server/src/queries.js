export const SELECT_HEROES = 'SELECT heroes.id, heroes.name, heroes.heroe_type, heroes.condition, heroes.image_url, heroes.cities_id FROM heroes';
export const SELECT_HERO = `${SELECT_HEROES} WHERE id = ?`;
export const INSERT_HERO = 'INSERT INTO heroes SET ?';
export const UPDATE_HERO = 'UPDATE heroes SET ? WHERE id = ?';
export const DELETE_HERO = 'DELETE FROM heroes WHERE id = ?';
export const SELECT_VEHICLES = 'SELECT * FROM vehicles WHERE id = ?';
