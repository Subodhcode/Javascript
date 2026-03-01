const express = require("express")
// express framework import kiya → API & server banane ke liye

const { dbConnection } = require("./App/config/dbConfig")
// dbConfig file se database connection function import

const { ObjectId } = require("mongodb")
// ObjectId ek class hai → string id ko MongoDB _id format me convert karta hai

let cors=require("cors")

let app = express()
// express ka app instance create kiya

require("dotenv").config()
// .env file ke variables ko load karta hai (PORT, DBNAME etc.)

app.use(cors());

app.use(express.json())
// middleware → JSON data ko read karke req.body me convert karta hai



app.post('/student/create',
    async (req, res) => {

        let db = await dbConnection()//server+db->return
        // pehle MongoDB server se connect → fir database milta hai

        let studentCollection = await db.createCollection('student')
        // collection create karta hai
        // ⚠ production me har request me createCollection nahi karte
        // directly db.collection("student") use karte hai

        let data = await studentCollection.findOne({
            studentEmail: req.body.studentEmail
        });
        // check kar rahe → email already exist hai ya nahi

        if (data) {
            res.send({
                _status: false,
                _message: "Email Id Already Exits",
                
            })
        }
        else {
            // {
            //     studentName: 'subodh',
            //     studentEmail: 'subodh@123',
            //     studentPhone: 6354727987
            // }

            let insertRes = await studentCollection.insertOne(req.body)
            // req.body ka pura object MongoDB me insert

            //console.log(req.body)

            res.send({
                _status: true,
                _message: "Enquiry created",
                insertRes
            })
        }

    }
)



app.get('/student/view', async (req, res) => {

    let db = await dbConnection()
    // DB connection

    let studentCollection = await db.collection("student")//to use collection
    // existing collection use kar rahe hai

    let data = await studentCollection.find().toArray()
    // find() → cursor return karta hai
    // toArray() → actual data array me convert

    res.send({
        _status: true,
        _message: "Enquiry found",
        data
    })
})



app.delete('/student/delete/:id', async (req, res) => {

    let { id } = req.params
    // URL se id nikali

    let db = await dbConnection()

    let studentCollection = await db.collection("student")

    let delRes = await studentCollection.deleteOne({ _id: new ObjectId(id) })//objid ek class hai
    // string id ko ObjectId me convert karke delete

    res.send({
        _status: true,
        _message: "Entry Deleted",
        delRes
    })
})


app.get('/student/view/:id', async (req, res) => {
    let {id}=req.params

    let db = await dbConnection()
    // DB connection

    let studentCollection = await db.collection("student")//to use collection
    // existing collection use kar rahe hai

    let data = await studentCollection.findOne({_id:new ObjectId(id)})
    // find() → cursor return karta hai
    // toArray() → actual data array me convert

    res.send({
        _status: true,
        _message: "Enquiry found",
        data
    })
})



app.put('/student/update/:id', async (req, res) => {
    let {id}=req.params
     let db = await dbConnection()//server+db->return
        // pehle MongoDB server se connect → fir database milta hai

        let studentCollection = await db.createCollection('student')
        // collection create karta hai
        // ⚠ production me har request me createCollection nahi karte
        // directly db.collection("student") use karte hai

        let data = await studentCollection.findOne({
            studentEmail: req.body.studentEmail,
            _id:{
                $ne:new ObjectId(id)//$ne means not equal to , ye mongo db me use hota hai
            }
        });
        // check kar rahe → email already exist hai ya nahi

        if (data) {
            res.send({
                _status: false,
                _message: "Email Id Already Exits",
                
            })
        }
        else {
            // {
            //     studentName: 'subodh',
            //     studentEmail: 'subodh@123',
            //     studentPhone: 6354727987
            // }

            let updateRes = await studentCollection.updateOne(
                {
                _id:new ObjectId(id)
                },
                {
                    $set:req.body//$set  is ued to update
                }
        )
        

            res.send({
                _status: true,
                _message: "Enquiry updated",
                updateRes
            })
        }
})



app.listen(process.env.PORT, () => {
    console.log("Server Start")
})
// process reserve keyword hai,sessitive info eve file me store hote hai jaiske ki toekn, payemnt gateway key etc...

// req.body->ek object hi hai