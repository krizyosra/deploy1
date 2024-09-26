const user = require("../Models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


exports.register= async(req,res)=>{

    const{email, password, role}= req.body
    try {
        if(role){
            return res.status(401).send("non autorisé")
        }
        const emailexist= await user.findOne({email});
        if (emailexist) {
            return res.send("email existe login please")
        }

        let passwordhashed= await bcrypt.hash(password,10)
        req.body.password=passwordhashed
        const newUser= new user(req.body)
        await newUser.save();
        return res.status(201).send("Utilisateur enregistré avec succès.");

        

    } catch (error) {
        console.log(error)
        return res.status(500).send("Erreur serveur.");
    }
}

exports.login = async(req,res)=>{

    const {email, password}= req.body
    try {
        
        const existUser= await user.findOne({email})
        if (!existUser) {
            return res.status(404).json({msg: "user not found"})
            
        }

        const boolmdp= await bcrypt.compare(password, existUser.password)
        if (!boolmdp) {
            return res.status(400).json({msg: "mdp incorrect"})
            
        }


        const token= jwt.sign({ _id: existUser._id }, process.env.secretkey, {expiresIn: '1h'})
        existUser.password=undefined
        
        res.cookie('token', token)
        return res.status(200).json({existUser, token})
    } catch (error) {
        
        console.log(error)
    }
}

exports.current= (req, res) => {
    try{
      res.send(req.user);
  } catch (error) {
      console.log(error);
      }
    }

    exports.updateuser= async(req,res)=>{

        try {

            const result= await user.findByIdAndUpdate(req.params.id,req.body,{ new: true })
            res.status(200).send(result)
            
        } catch (error) {
            console.log(error)
            res.send("")
        }
    }