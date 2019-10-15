const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./utlis')
//console.log(chalk.red.bold.underline('Hello Jashwanth')) 

//console.log(process.argv[2])
//console.log(yargs.argv)

yargs.command({ 
    command: 'add',
    describe: 'add item here',
    builder : {
        title : {
              describe: 'My Item',
              demandOption:true, 
              type: 'string'
        },  
        body : {
            describe : 'My Body', 
            demandOption:true,      
            type : 'string'
        } 
    },  
    handler : function(argv){ 
       // console.log('My Item.....'+ argv.title + ' ' + argv.body) 
       notes.addnotes(argv.title,argv.body)  
    }
}) 
   
yargs.command({
    command: 'remove',
    description:'remove item here',
    builder: {
       title :{
           describe: 'remove title',
           demandOption:true,
           type: 'string'  
       } 
    },
    handler : function(argv){  
        //console.log('removing item....',argv.title) 
        notes.removenotes(argv.title) 

    }  
})

yargs.command({ 
    command: 'list',
    description:'list item here', 
    handler: function(){
         notes.listNotes(); 
    }
})

yargs.command({
    command:'read',
    description:'Read item here',
    builder: {
        title : {
            describe : 'Read Title',
            demandOption : true,
            type : 'string'
        }
    },
    handler: function(argv){
       notes.readNotes(argv.title);   
    }
}) 

  
yargs.parse();       
//console.log(yargs.argv)           