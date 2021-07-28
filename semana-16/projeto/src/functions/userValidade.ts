import connection from "../connection";

const userValidade = async (creatorUserId: string): Promise<boolean> => {
  const id = Number(creatorUserId);

  const result = await connection.raw(
    `SELECT * FROM TodoListUser WHERE id = ${id}`
  );

  if (result[0].length === 0) {
    return true;
  } else {
    return false;
  }
};
export default userValidade;
