import express, { Request, Response } from 'express';
import mariadb from 'mariadb';
import authConfig from '../../auth_config.json';
import helmet from 'helmet';
import cors from 'cors';
const { auth } = require('express-oauth2-jwt-bearer');

const app = express();
app.use(helmet());
app.use(
  cors({
    origin: authConfig.appUri,
  })
);



const port = 3000;

var hostname = "hv-par6-022.clvrcld.net";
var database = "bukgebxvabjxjq4l0z0z";
var dbport = 14610;
var username = "uhtkr1qwkqpl21ct";
var password = "S15b8oi7JqisR5pgQlL";

const pool = mariadb.createPool({
    host: hostname, 
    user: username, 
    password: password,
    database:database,
    connectionLimit: 5,
    port: dbport
});

const checkJwt = auth({
  audience: authConfig.authorizationParams.audience,
  issuerBaseURL: `https://${authConfig.domain}`,
});

app.get('/api/external', checkJwt, (req, res) => {
  res.send({
    msg: 'Your access token was successfully validated!',
  });
});


async function asyncFunction() {
    let conn;
    try {
      conn = await pool.getConnection();
      console.log("Connected to DB")
      var rows = await pool.query("SELECT * FROM products;");
      console.log("Tables: ")
      console.log(rows); //[ {val: 1}, meta: ... ]
    //   const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
    //   console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
  
    } catch (err) {
      throw err;
    } finally {
      if (conn) return conn.end();
    }
}
asyncFunction();


app.get('/api/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
});

app.post('api', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express!');
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


