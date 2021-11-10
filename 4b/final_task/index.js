const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
//const session = require('express-session')
app.use(express.json());
app.use(express.static('express')); 
app.set('view engine', 'hbs');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.set('views', path.join(__dirname, 'views'));
const dbConnection = require('./connection/db')
const uploadFile = require('./middleware/uploadFile')
const pathFile = 'http://localhost:3000/uploads/'
app.get('/', function (request, response) {
    const query =`SELECT * from heroes_tb`
  
    dbConnection.getConnection(function (err, conn) {
      if (err) throw err;
  
      conn.query(query, function (err, results) {
        if (err) throw err
  
        // console.log(results)
        // const play = {
        //   musics: pathFileMusic + results[0].music,
        //   photos : pathFile + results[0].photo
        // }
        
        var data = []
       
        
        for (let result of results) {
          data.push({
            id:result.id,
            name: result.name,
            photo : pathFile + result.photo,
            
         
  
            
            
          
          })
        }
        console.log(data)
        response.render('index', {
          
          
          data
         
         
  
        })
        
      })
    })
  });

  app.get('/heroes/:id', function (request, response) {
    var id = request.params.id;
  
    const query = `SELECT * from heroes_tb WHERE id=${id}`
  
    dbConnection.getConnection(function (err, conn) {
      if (err) throw err;
  
      conn.query(query, function (err, results) {
        if (err) throw err
  
        const data = {
          id: results[0].id,
          name: results[0].name,
          photo: pathFile + results[0].photo,
         
        }
  console.log(data.name)
        
  
        response.render('heroes', {
          title: "Article",
       
          data,
         
        })
  
      })
    })
  });
  
        app.get('/add', function(request, response){
  
    response.render('add',{
        title:"andre"
        
    });
});





app.post('/add', uploadFile('photo'), function(request,response){
    const {name, type_id} = request.body  
    
  let photo = ''
  if (request.file) {
    photo = request.file.filename
  }
console.log(name)
  if (name == ''   ) {
   
    response.redirect('/add')
  }
  const query = `INSERT INTO heroes_tb (name,type_id, photo) VALUES ("${name}","${type_id}","${photo}" )`
  dbConnection.getConnection(function (err, conn) {
    if (err) throw err;

    conn.query(query, function (err, results) {
      if (err) throw err

     
      response.redirect('/add')
    })
  })
})



app.get('/edit/:id', function (request, response) {
  const { id } = request.params
  const title = "Edit Article"

  console.log(id)

  const query = `SELECT * FROM heroes_tb WHERE id = ${id}`

  dbConnection.getConnection(function (err, conn) {
    if (err) throw err;

    conn.query(query, function (err, results) {
      if (err) throw err

      const data   = {
        ...results[0],
        photo: pathFile + results[0].photo
      }

      response.render('edit', {
        title,
       
      data
      })
    })
  })
});
app.post('/edit-heroes', uploadFile('photo'), function (req, res) {
  let { id, name, type_id, oldImage } = req.body;
console.log(id)
  let photo = oldImage.replace(pathFile, '');

  if (req.file) {
    photo = req.file.filename;
  }

  const query = `UPDATE heroes_tb SET name = "${name}", type_id ="${type_id}", photo = "${photo}" WHERE id = ${id}`;

  dbConnection.getConnection((err, conn) => {
    // if (err) throw err;
    if (err) {
      console.log(err);
    }

    conn.query(query, (err, results) => {
      // if (err) throw err;

      if (err) {
        console.log(err);
      }
      res.redirect(`/`);
    });
  });
});
app.get('/delete/:id', function (request, response) {
  const id = request.params.id

  const query = `DELETE FROM heroes_tb WHERE id=${id}`
  dbConnection.getConnection(function (err, conn) {
    if (err) throw err;

    conn.query(query, function (err, results) {
      if (err) throw err

      response.redirect('/')
    })
  })
})
const server = http.createServer(app);
const port = 3000;
server.listen(port);


