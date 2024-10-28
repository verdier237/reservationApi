const User = require('../Model/Reservation')

exports.isEmpty = (some) => {
    if (some === "" || some === undefined || some === null) {
        return true;
    }
    return false;
}

exports.isAlreadyExists = async (email) => {
    let user;
        user = await User.findOne({
            email: email.toLowerCase()
        })
    if (user == null) {
        return false
    }
    return true
}

exports.createRes = async(req,res)=>{
    const {positionDriver,positionClient,price} = req.body;

    if (this.isEmpty(positionDriver) || this.isEmpty(positionClient) || this.isEmpty(price)) {
        return res.status(400).send(`Missing informations`)
    }
    // if (!this.isAlreadyExists(email)) {
    //     return res.send(`User already exists`)
    // }

    const reS = {
        user: req.id,
          driver : "QWFFSEFVSVDVVWEFWF",
          date: new Date(),
          positionDriver: positionDriver,
          positionClient: positionClient,
          price:price, 
    }

    const Resc = await User.create(reS)

    if (Resc) return res.send({
        "status" : true,
        "data" : "New reservation",
        "id_reservation" : reS.driver
    })

    return res.send({
        "status" : false,
        "data" : "Error !"
    })

}

exports.getRes = async (req,res)=>{
    let Res;
    Res = await User.find({
        user: req.id
    })

    res.send({
        "status" : true,
        "data" : Res
    })
}

exports.getOneRes = async (req,res)=>{
    const {driver} = req.body;
    const r = await User.findOne({
        user: req.id,
        driver : driver 
    })

    if (!r) {
        return res.status(400).send({
            "status" : false,
            "data" : "Not found"
        })
    } 
    return res.send({
        "status" : true,
        "data" : r
    })
}

exports.updateRes = async (req,res)=>{
    try {
        const {driver} = req.body;
        const updates = req.body
        const r = await User.findOne({
            user: req.id,
            driver : driver
        })
    
        if (!r) {
            return res.status(400).send({
                "status" : false,
                "data" : "Not found"
            })
        }

        Object.keys(updates).forEach(key => {
            r[key] = updates[key];
        });

        await r.save();

        return res.send({
            "status": true,
            "data": "Reservation updated successfully"
        });     

        
    } catch (error) {
        return res.status(500).send({
            "status": false,
            "data": "Error updating reservation",
            "error": error.message
        });
    }
}