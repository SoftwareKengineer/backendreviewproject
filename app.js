
const express = require('express')
const app = express()
const port = 3000
const {Sequelize} = require ("sequelize")
const {customers} = require ("./models")
const sequelize = new Sequelize ("postgres://postgres@127.0.0.1:5432/backendproject")
app.use(express.json())

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.get("/customerdata",async(req,res)=>{
  const customer = await customers.findAll()
  res.send(customer)
})

app.post("/addcustomer",async(req,res)=>{
  await customers.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    number: req.body.number,
    city: req.body.city,
    state: req.body.state,
    gender: req.body.gender
  })
  const newcustomer = await customers.findAll({
    where:{
      firstname:req.body.firstname
    }
  })
  res.send(newcustomer)
})
app.put("/updatedprofile",async(req,res)=>{
let updatedvalue = await customers.update(
  {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    number: req.body.number,
    city: req.body.city,
    state: req.body.state,
    gender: req.body.gender
  },
  {

  where:{
    firstname: req.body.firstname
  }
})
res.send(updatedvalue)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})