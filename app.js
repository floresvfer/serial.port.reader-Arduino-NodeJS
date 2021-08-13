const SerialPort = require('serialport');
const ReadLine = require('@serialport/parser-readline');

const port = new SerialPort('COM6', {baudRate: 9600});
const parser = port.pipe(new ReadLine({delimiter: '\n'}));


//mongodb+srv://user:<password>@cluster0.cakir.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const MongoClient = require('mongodb').MongoClient;
const uri = "";



port.on("open", () => {
    console.log('Se abrió la comunicación');
});



parser.on("data", data => {
    console.log(data);
    insertData(data);
});


function insertData(data) {
    MongoClient.connect(uri, (err, db) => {
        if(err) throw err;
        const dbo = db.db('mydb');
        const obj = JSON.parse(data);
        dbo.collection('medidas').insertOne(obj, (err, res) => {
            if(err) throw err;
            db.close();
        });
    });
}