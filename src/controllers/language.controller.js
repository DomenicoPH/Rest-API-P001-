import { getConnection } from "./../database/database"

const getLanguages = async (req,res) => {
    const connection = await getConnection();
    const result = await connection.query("SELECT id, name, programmers FROM language");
    console.log(result);
    res.json(result);
}

export const methods = {
    getLanguages
}