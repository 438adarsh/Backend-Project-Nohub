const express = require("express");
const multer = require("multer");

const app = express();
const port = 9000;

const storage = multer.diskStorage({
    destination: (req, file, callbackFunc) => {
        callbackFunc(null, 'uploaded/')
    },
    filename: (req, file, callbackFunc) => {
        console.log(file);
        callbackFunc(null, file.originalname)
    }
})

const upload = multer({ storage: storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/static', express.static('public'));

app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/public/html/index.html')
})

app.post('/upload', upload.single('invoice'), (req, res) => {
    console.log(req.body, req.file);
    res.send("Created post request");
})

app.get('/login', (req, res) => {
    console.log(req.body)
    res.send("hello world! get");
})

app.post('/register', (req, res) => {
    console.log(req.body);
    res.send("Created post request");
})

app.put('/', (req, res) => {
    res.send("hello world! put");
})

app.delete('/', (req, res) => {
    res.send("hello world! delete");
})

app.listen(port, () => {
    console.log(`server started at port ${port}`);
}) 