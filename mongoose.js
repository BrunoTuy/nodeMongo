var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Cadastrando um usuário
app.post('/usr', function( req, res, next ){
	novo = new usr(req.body);

	novo.save(function(err){
		console.info( 'err000' );
		console.info( err );
	})

    res.status( 200 ).json(req.body);
});

//Listando todos os usuarios
app.get('/usrs', function( req, res, next ){
	usr.find(function(err, list){
		console.info( 'GET /usr' );
		console.info( err );
		console.info( list );

	    res.status( 200 ).json(list);
	});
});

//Buscar usuario pelo email
app.get('/usr/:email', function( req, res, next ){
	usr.find({email: req.params.email}, function(err, item){
		console.info( err );
		console.info( item );

	    res.status( 200 ).json(item);
	});

	console.info( 'GET /usr' );

});

var server = app.listen( 8700 );

mongoose.connect('mongodb://localhost:27017/base');
var usr = mongoose.model('usr', {
	nome: String,
	sobrenome: String,
	email: String
});
