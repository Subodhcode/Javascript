//middlewear function,next is callback function aaage jaane ki permission dega

let backendToken = "123456"
// ye server ka original token hai → isko database / env file me rakhte hai in real project
// client se aane wala token isi se compare hoga


let checkToken = (req, res, next) => {

    let { token } = req.query;
    // query se token nikal rahe hai
    // URL example → /product?token=123456


    if (req.query.token == "" || token == undefined || token == null) {
        // token empty / undefined / null → matlab client ne token bheja hi nahi

        obj = {
            _status: false,
            _message: "Please send the token"
        }

        return res.send(obj)
        // return → request yahi stop → next() nahi chalega → route protected
    }


    if (token != backendToken) {
        // agar token galat hai → access deny

        obj = {
            _status: false,
            _message: "Please send the correct token value"
        }

        return res.send(obj)
        // wrong token → request end
    }

    next()//product api
    // token correct → request ko next route par bhej do

}

module.exports = { checkToken }

//middle wear me error check kiya jaata hai
// authentication / validation / security ka common logic yaha likhte hai