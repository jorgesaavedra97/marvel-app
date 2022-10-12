import { getConnection } from "../database/database";
import { getBodyFields, validateFields } from "../utils";
import {
  SELECT_HEROES,
  SELECT_HERO,
  INSERT_HERO,
  UPDATE_HERO,
  DELETE_HERO,
} from "../queries";

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
    console.log(`${SELECT_HEROES}${condition}`, '`${SELECT_HEROES}${condition}`')
    const data = await db.query(`${SELECT_HEROES}${condition}`);

    res.json({ data });
  } catch (error) {
    res.status(500)
      .json({ error: error.message });
  }
};

export const findHeroe = async (req, res) => {
  try {
    const { id } = req.params;
    const db = await getConnection();
    const hero = await db.query(SELECT_HERO, id);
    if (hero.length <= 0) {
      return res.status(404)
        .json({ error: 'Hero not found.' });
    }
    const [data] = hero;
    res.json({ data });
  } catch (error) {
    res.status(500)
      .json({ error: error.message });
  }
};

export const createHeroe = async (req, res) => {
  try {
    const body = req.body;
    const validationErrors = validateFields(body);
    
    if (validationErrors.length > 0) {
      return res.status(400)
      .json({
        validationErrors: validationErrors,
        message: 'Some info is missing, please take a look.'
      });
    }

    const db = await getConnection();
    const result = await db.query(INSERT_HERO, getBodyFields(body));
    const [data] = await db.query(SELECT_HERO, result.insertId);
    res.json({
      data,
      message: 'Hero created succesfully.'
    });
  } catch (error) {
    res.status(500)
      .json({ error: error.message });
  }
};

export const updateHeroe = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const validationErrors = validateFields(body)
    if (validationErrors.length > 0) {
      res.status(400)
        .json({
          validationErrors: validationErrors,
          error: 'Some info is missing, please take a look.'
        });
    }

    const db = await getConnection();
    const hero = await db.query(SELECT_HERO, id);
    if (hero.length <= 0) {
      return res.status(404)
        .json({ error: 'Hero not found.' });
    }

    await db.query(UPDATE_HERO, [getBodyFields(body), id]);
    const [data] = await db.query(SELECT_HERO, id);;
    res.json({
      data,
      message: 'Hero updated succesfully.'
    });
  } catch (error) {
    res.status(500)
      .json({ error: error.message });
  }
};

export const deleteHeroe = async (req, res) => {
  try {
    const { id } = req.params;
    const db = await getConnection();
    const hero = await db.query(SELECT_HERO, id);
    
    if (hero.length <= 0) {
      return res.status(404)
        .json({ error: 'Hero not found.' });
    }

    await db.query(DELETE_HERO, id);
    res.json({
      message: 'Hero removed succesfully.'
    });
  } catch (error) {
    res.status(500)
      .json({ error: error.message });
  }
};
