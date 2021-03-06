const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3
const pool = require("./Config/config");
const cors = require("cors")


//Avoid cors policy issues
app.use(
    cors({
        origin: "http://localhost:3000",
    })
)

//parse in json
//middleware
app.use(express.json());




// Colect user details
app.get('/', async (req, res) => {
    try {
        const { rows } = await pool.query('select * from users;')
        res.status(200).json(rows)
    }
    catch(e) {
        console.log(e)
        res.status(500).json(e)
    }
})

//Delete user
app.post('/remove', async (req, res) => {
    try {
        var user_id = req.body.user_id
        const { rows }  = await pool.query(`DELETE FROM users where user_id in ('${user_id}');`);
    if (rows === null){
        res.status(500)
    }else{
        res.status(200)
    }} catch (e){ 
        console.log(e)
        res.status(500).json(e)
        }
    });

//create user
app.post('/create', async (req, res) => {
    try {
        var first = req.body.firstname;
        var surname = req.body.surname;
        var query = await pool.query(`INSERT INTO users (firstname, surname) VALUES ('${first}', '${surname}');`);
        res.end();
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }});


// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}!`)); //Line 6

