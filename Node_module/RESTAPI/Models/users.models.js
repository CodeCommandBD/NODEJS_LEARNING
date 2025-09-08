const {v4: uuidv4} = require('uuid')

const user = [
    {   
        id: uuidv4(),
        username :"simul khan",
        email: "simul@gmail.com" 
    },
    {   
        id: uuidv4(),
        username :"riday khan",
        email: "riday@gmail.com" 
    },
]

module.exports = user