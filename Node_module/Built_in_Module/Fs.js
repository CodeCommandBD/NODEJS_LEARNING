const fs = require('fs');


// TODO: #################### FILE CREATE AND DATA ADDING ##################
// TODO: #################### FILE CREATE AND DATA ADDING ##################

fs.writeFile('test.txt', 'this is my test module', function(err){
    if(err){
        console.log(err);
    }else{
        console.log('successful');
        
    }
})


// TODO: #################### DATA ADDING WITH APPEND ##################
// TODO: #################### DATA ADDING WITH APPEND ##################

fs.appendFile('test.txt', 'this is append', (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('successful');
        
    }
})


// TODO: #################### ONLY READ FILE ##################
// TODO: #################### ONLY READ FILE ##################

fs.readFile('test.txt', 'utf-8', (err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
        
    }
})

// TODO: #################### RENAME FILE ##################
// TODO: #################### RENAME FILE ##################
fs.rename('test.txt', 'test2.txt', (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('successful');
        
    }
})


// TODO: #################### DELETE FILE ##################
// TODO: #################### DELETE FILE ##################

fs.unlink('test.txt', (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('successful');
        
    }
})

// TODO: #################### FILE EXIST OR NOT ##################
// TODO: #################### FILE EXIST OR NOT ##################

fs.exists('test.txt', (result)=>{
    if(result){
        console.log('found');
    }else{
        console.log('not found');
        
    }
})