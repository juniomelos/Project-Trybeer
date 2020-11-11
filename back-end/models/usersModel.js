const connection = require('./connection');

const getUserByEmailMod = async (userEmail) => {
  try {
    const db = await connection();
    const usersDB = await db
      .getTable('users')
      .select()
      .where('email = :email')
      .bind('email', userEmail)
      .execute();
    const [id, name, email, password, role] = await usersDB.fetchOne();
    return {
      id,
      name,
      email,
      password,
      role,
    };
  } catch (error) {
    return error;
  }
};

// const createUsersMod = async (name, email, password, role) => {
//   try {
//     const db = await connection();
//     const usersDB = await db
//       .getTable('users')
//       .insert('email', 'name', 'password', 'role')
//       .values(email, name, password, role)
//       .execute();
//     return {
//       id   /*  : usersDB.getAutoIncrementValue() */,
//       name,
//       email,
//       password,
//       role,
//     };
//   } catch (error) {
//     return error;
//   }
// };

// const getUserByIdMod = async (userEmail) => {
//   try {
//     const db = await connection();
//     const usersDB = await db
//       .getTable('users')
//       .select()
//       .where('email = :email')
//       .bind('email', userEmail)
//       .execute();
//     const [id, name, email, password, role] = await usersDB.fetchAll();
//     return {
//       id,
//       name,
//       email,
//       password,
//       role,
//     };
//   } catch (error) {
//     return error;
//   }
// };

module.exports = {
  getUserByEmailMod,
  //   createUsersMod,
  //   getUserByIdMod,
};
