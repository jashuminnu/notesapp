var fs = require('fs')
const chalk = require('chalk')
var name = 'jashwanth'; 

var getSum = function(a,b){
    return a+b;  
} 

var addnotes = function(title,body) 
{
     var notes = loadnotes(); 
     //console.log(notes)
     var duplicate = notes.filter(function(notes){
         return notes.title === title
     })

     if(duplicate.length === 0){ 
        notes.push({  
            title:title, 
            body : body 
        })    
       savenotes(notes)     
       console.log('Added Successfully')
     }
     else{
         console.log('Item Already added')
     }
     
}
 
const savenotes = function(notes){  
    var dataJ = JSON.stringify(notes)  
    fs.writeFileSync('notes.json',dataJ);  
}

const loadnotes = function(){ 
     try{
        var data = fs.readFileSync('notes.json')
        var dataJSON = data.toString(); 
        return JSON.parse(dataJSON)
     } catch(e){ 
         return [] 
     }

}



const removenotes =  function(title){
  const notes = loadnotes(); 
  const checkNotes = notes.filter(function(notes){ 
        return notes.title !== title; 
  }) 
   if(notes.length > checkNotes.length){
    remNotes(checkNotes);   
     console.log(chalk.green('Title Removed Successfully'))
   }else{
       console.log(chalk.red('Sorry Title Not Found'))
   }
      
  }       
  
 
const remNotes = function(checkNotes){ 
    var dataS = JSON.stringify(checkNotes)  
 
    fs.writeFileSync('notes.json',dataS);   
   
}   

const listNotes = ()=>{
    const noteslist = loadnotes(); 
    //console.log(noteslist)
     const list = noteslist.forEach(element => {
          console.log(chalk.blue.inverse(element.title))   
    });
    //console.log(list) 
} 

const readNotes = (title)=>{
    const readList = loadnotes(); 
    const readFind = readList.find(list => list.title === title);  
    if(readFind){
           console.log(chalk.blue(readFind.title + readFind.body))
    }
    else {
        console.log(chalk.red.inverse('Sorry No Item Found'))    
    }

}

module.exports = {
    getSum : getSum, 
    addnotes : addnotes,    
    removenotes:removenotes,
    listNotes : listNotes,
    readNotes: readNotes
};   