import { getConnection } from "../database/database";
import { SELECT_VEHICLES } from "../queries";

export const findAllVehicles = async (req, res) => {
  try {
    const { id } = req.params;
    const db = await getConnection();
    const data = await db.query(SELECT_VEHICLES, id);

    res.json({ data });
  } catch (error) {
    res.status(500)
      .json({ error: error.message });
  }
};

