import connection from "../connection";

const validateUserId = async (id: Number): Promise<boolean> => {
  const userValidate = await connection.raw(
    `SELECT * FROM Actor WHERE ${id} = id`
  );
  if (userValidate[0].length) {
    return false;
  } else {
    return true;
  }
};
export default validateUserId;
