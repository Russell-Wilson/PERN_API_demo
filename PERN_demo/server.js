const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3
const pool = require("./Config/config");
const cors = require("cors")

app.use(
    cors({
        origin: "http://localhost:3000",
    })
)


//middleware
app.use(express.json());


// Colect user details
app.get('/', async (req, res) => {
    try {
        const { rows } = await pool.query('select * from users;')
        console.log(rows)
        res.status(200).json(rows)
    }
    catch(e) {
        console.log(e)
        res.status(500).json(e)
    }
})


// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}!`)); //Line 6

