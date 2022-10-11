import { pool } from "../database";

export const getEscuelas = async (req, res) => {
  try {
    pool.query(
      "SELECT est.idestudiante, est.nombre, est.apellidos, est.edad, est.peso, est.idescuela, esc.nombre escuela FROM estudiante est join escuela esc on est.idescuela=esc.idescuela ;",
      function (err, result) {
        console.log(result);
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al listar estudiante");
        }
      }
    );
  } catch (error) {
    return res.status(500).json("Error al listar estudiante");
  }
};

export const getEscuela = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    pool.query(
      "SELECT est.idestudiante, est.nombre, est.apellidos, est.edad, est.peso, est.idescuela, esc.nombre escuela FROM estudiante est join escuela esc on est.idescuela=esc.idescuela where est.idestudiante=?",
      [id],
      function (err, result) {
        console.log(result);
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al listar estudiante");
        }
      }
    );
  } catch (error) {
    return res.status(500).json("Error al listar estudiante");
  }
};

export const createEscuela = async (req, res) => {
  try {
    const nombre = req.body.nombre;
    const apellidos = req.body.apellidos;
    const edad = parseInt(req.body.edad);
    const peso = parseFloat(req.body.peso);
    const idescuela = parseInt(req.body.idescuela);
    pool.query(
      "INSERT INTO estudiante (nombre, apellidos, edad, peso, idescuela) VALUES(?,?,?,?,?); ",
      [nombre, apellidos, edad, peso, idescuela],
      function (err, result) {
        console.log(result);
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al listar estudiante");
        }
      }
    );
  } catch (error) {
    return res.status(500).json("Error al listar estudiante");
  }
};
export const updateEscuela = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const nombre = req.body.nombre;
    const apellidos = req.body.apellidos;
    const edad = parseInt(req.body.edad);
    const peso = parseFloat(req.body.peso);
    pool.query(
      "update estudiante SET nombre=?, apellidos=?, edad=?, peso=? WHERE idestudiante=?; ",
      [nombre, apellidos, edad, peso, id],
      function (err, result) {
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al listar estudiante");
        }
      }
    );
  } catch (error) {
    return res.status(500).json("Error al listar estudiante");
  }
};
export const deleteEscuela = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    pool.query(
      "DELETE FROM estudiante WHERE idestudiante=?; ",
      [id],
      function (err, result) {
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al listar estudiante");
        }
      }
    );
  } catch (error) {
    return res.status(500).json("Error al listar estudiante");
  }
};
