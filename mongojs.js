var express = require('express'),
    bodyParser = require('body-parser'),
    mongojs = require('mongojs'),
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Cadastrando um usuário
app.post('/usr', function( req, res, next ){
	db.usr.save(req.body, function(err){
		console.info( 'err000' );
		console.info( err );
	});

    res.status( 200 ).json(req.body);
});

//Listando todos os usuarios
app.get('/usrs', function( req, res, next ){
	db.usr.find(function(err, list){
		console.info( 'GET /usrs' );
		console.info( err );
		console.info( list );

	    res.status( 200 ).json(list);
	});
});

//Buscar usuario pelo email
app.get('/usr/:email', function( req, res, next ){
	db.usr.find({email: req.params.email}, function(err, item){
		console.info( err );
		console.info( item );

	    res.status( 200 ).json(item);
	});

	console.info( 'GET /usr' );

});

var server = app.listen( 8700 );

var db = mongojs('base', ['usr']);
