let http = require("http")//inbuild module nodejs ke ssath aaya, ye ek objetc lekar aaaata hai or ek function



let server = http.createServer(
    (req, res) => {

        if (req.url == "/product") {//http://localhost:7000/product
            //req=body,query,params
            let obj = {
                _status: true,//ek tarh ka flag hai
                _message: "record found.",
                _data: [
                    {
                        "id": 47,
                        "name": "Ashapurna Girls Hostel Mumbai"
                    },
                    {
                        "id": 101, "name": "Shivneri Girls Hostel Mumbai"
                    },
                    {
                        "id": 102, "name": "Saraswati Women's Residency Mumbai"
                    },
                    {
                        "id": 103, "name": "Gauri Girls Hostel Mumbai"
                    },
                    {
                        "id": 104, "name": "Sea View Ladies Hostel Mumbai"
                    },
                    {
                        "id": 105, "name": "Sakhi Women's PG Mumbai"
                    },
                    {
                        "id": 106, "name": "Annapurna Girls Hostel Mumbai"
                    },
                    {
                        "id": 107, "name": "Harmony Ladies Hostel Mumbai"
                    },
                    {
                        "id": 108, "name": "Shakti Women's Stay Mumbai"
                    },
                    {
                        "id": 109, "name": "Golden Nest Girls Hostel Mumbai"
                    },
                    {
                        "id": 110, "name": "Comfort Women's Residency Mumbai"
                    }
                ]
            };

            res.end(JSON.stringify(obj))//obj kabhi res me kabhi direst nhi jaayega, isko json.stringfy me bhejna padega, ye obj ko string me convert karti hai

        }
        if (req.url == "/news") {//http://localhost:7000/news

        }
        res.end("welome")//res is obejct
    })

server.listen("7000")
//http://locakhost:8000