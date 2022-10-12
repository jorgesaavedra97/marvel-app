import { getConnection } from "../database/database";

export const findAllHeroes = async (req, res) => {
  try {
    const db = await getConnection();
    const data = await db.query('SELECT heroes.id, heroes.name, heroes.heroe_type, heroes.condition, heroes.image_url, heroes.cities_id FROM heroes');

    res.json({ data });
  } catch (error) {
    res.status(500)
      .json({ error: error.message });
  }
};

export const findHeroe = async (req, res) => {
  try {
    res.json({ data: { name: 'Super man'} });
  } catch (error) {
    res.status(500)
      .json({ error: error.message });
  }
};

export const createHeroe = async (req, res) => {
  try {
    res.json({
      data: { name: 'Super man'},
      message: 'Hero created succesfully.'
    });
  } catch (error) {
    res.status(500)
      .json({ error: error.message });
  }
};

export const updateHeroe = async (req, res) => {
  try {
    res.json({
      data: { name: 'Super man'},
      message: 'Hero updated succesfully.'
    });
  } catch (error) {
    res.status(500)
      .json({ error: error.message });
  }
};

export const deleteHeroe = async (req, res) => {
  try {
    res.json({
      message: 'Hero removed succesfully.'
    });
  } catch (error) {
    res.status(500)
      .json({ error: error.message });
  }
};
