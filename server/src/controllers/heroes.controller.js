import { getConnection } from "../database/database";
import { SELECT_HEROES } from "../queries";

export const findAllHeroes = async (req, res) => {
  try {
    const db = await getConnection();
    let condition = ' WHERE 1=1'
    const { name, cities_id } = req.query;
    if (name) {
      condition += ` AND name LIKE ${db.escape(`%${name}%`)}`
    }
    if (cities_id) {
      condition += ` AND cities_id = ${db.escape(cities_id)}`
    }
    const data = await db.query(`${SELECT_HEROES}${condition}`);

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
