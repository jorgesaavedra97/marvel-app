export const SELECT_HEROES = 'SELECT heroes.id, heroes.name, heroes.heroe_type, heroes.condition, heroes.image_url, cities.name as city_name, countries.name as country_name FROM heroes, cities, countries WHERE heroes.cities_id = cities.id AND countries.id = cities.countries_id';
export const SELECT_HERO = `${SELECT_HEROES} AND heroes.id = ?`;
export const INSERT_HERO = 'INSERT INTO heroes SET ?';
export const UPDATE_HERO = 'UPDATE heroes SET ? WHERE id = ?';
export const DELETE_HERO = 'DELETE FROM heroes WHERE id = ?';
export const SELECT_VEHICLES = 'SELECT * FROM vehicles';
export const SELECT_VEHICLES_BY_HEROE = 'SELECT * FROM vehicles WHERE heroes_id = ?';
export const SELECT_POWERS_BY_HEROE = 'SELECT heroes_has_powers.heroes_id, heroes_has_powers.powers_id, heroes.name as hero, powers.name as power FROM heroes_has_powers, heroes, powers WHERE heroes_has_powers.heroes_id = heroes.id AND heroes_has_powers.powers_id = powers.id AND heroes_has_powers.heroes_id = ?';
export const SELECT_VEHICLE = 'SELECT * FROM vehicles WHERE id = ?';
export const INSERT_VEHICLE = 'INSERT INTO vehicles SET ?';
export const UPDATE_VEHICLE = 'UPDATE vehicles SET ? WHERE id = ?';
export const DELETE_VEHICLE = 'DELETE FROM vehicles WHERE id = ?';
export const SELECT_CITIES = 'SELECT cities.id, cities.name, cities.countries_id, countries.name as country_name FROM cities, countries WHERE countries.id = cities.countries_id';
export const SELECT_COUNTRIES = 'SELECT * FROM countries';
export const SELECT_POWERS = 'SELECT * FROM powers';
export const INSERT_POWER_BY_HERO = 'INSERT INTO heroes_has_powers SET ?';
export const DELETE_POWER_BY_HERO = 'DELETE FROM heroes_has_powers WHERE heroes_id = ?';
