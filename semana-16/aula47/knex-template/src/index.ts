import connection from "./connection";
import app from "./app";
import { Request } from "express";

app.get("/", async (req, res) => {
  try {
    const result = await connection.raw(`
      select * from Actor;  
    `);

    res.status(200).send("work");
  } catch (error: any) {
    res.status(400).send(error.sqlMessage || error.message);
  }
});

app.post("/actor", async (req, res) => {
  try {
    await connection.raw(`
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        ${Date.now().toString()},
        "${req.body.name},
        "${req.body.birthDate}"
    )
    `);
  } catch (error: any) {
    res.status(400).send(error.sqlMessage || error.message);
  }
});

app.put("/actor/id", async (req: any, res) => {
  try {
    await connection("Actor")
      .update({
        name: req.body.name,
        salary: req.body.salary,
        birth_date: req.body.birth_date,
        gender: req.body.gender,
      })
      .where({ id: req.params.id });
  } catch (error: any) {
    res.status(400).send(error.sqlMessage || error.message);
  }
});

app.delete("/actor/:id", async(req, res) => {
  try {
    .delete().where({id: req.params.id})
  }
  catch(error){
    if(error instanceof Error) {
      res.status(400).send({error.sql || error.message})
    }
  }
})