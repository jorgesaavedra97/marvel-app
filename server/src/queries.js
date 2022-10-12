export const SELECT_HEROES = 'SELECT heroes.id, heroes.name, heroes.heroe_type, heroes.condition, heroes.image_url, heroes.cities_id FROM heroes';
export const SELECT_HERO = `${SELECT_HEROES} WHERE id = ?`;
