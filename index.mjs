import express from "express";

const app = express();

app.post("/", (req, res) => {
    try {
        const array = []
        const user = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
        }
        array.push(user)
        res.status(201).send({
            message: "Created Succesfully !",
            user
        })
    } catch (error) {
        res.status(500).send({
            error: error.message
        })
    }
})

app.get("/", (req, res) => {
    try {
        res.status(201).send("<h1>My First Server!</h1>")
    } catch (error) {
        res.status(500).send({
            error: error.message
        })
    }
})

app.listen(5000, () => {
    console.log(`Server is Running ${5001}`);
})



app.listen(5001, () => {
    console.log(`Server is Running ${5001}`);
})