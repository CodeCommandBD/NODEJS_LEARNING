const mongoose = require('mongoose')

const config = require('./Config')


const dbURL = config.db.url


mongoose.connect(dbURL)
.then(()=>{
    console.log('mongodb is connected');
    
})
.catch((error)=>{
    console.log('error', error);
    process.exit(1)
})