

const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/F8_education_dev',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('connect sussesfully');
    }catch(error){
        console.log('connect fail !!!');
    }
}

module.exports = {connect}