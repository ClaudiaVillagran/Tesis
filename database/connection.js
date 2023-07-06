const mongoose = require ('mongoose');

const connection = async() => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/SocialUbb",{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("conectado de forma correcta a la bd socialubb");
    } catch (error) {
        console.log(error)
    }
}

module.exports = connection