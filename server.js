const express = require('express');
const app = express();
const path = require('path');
const babel = require('@babel/core');
const fs = require('fs')

const PORT = process.env.PORT || 3000;

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res, next) =>
	res.sendFile(path.join(__dirname, 'index.html'))
);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));




// Pulling out the pre-compile

// const preCompile = () => {
// 	return new Promise((resolve,reject) => {
// 		babel.transformFile('./client/app.js', {presets: ['@babel/react']},(err,result) => {
// 			if(err){
// 				reject(err)
// 			}
// 			else{
// 				fs.writeFile('./assets/app.js', result.code, (err) => {
// 					if(err){
// 						reject(err)
// 					} else {
// 						resolve()
// 					}
// 				})
// 			}
// 		})
// 	})
// }

// preCompile()
// 	.then(()=> {
// 		app.listen(PORT, () => console.log(`listening on port ${PORT}`));
// 	}) * taking out the webpack and installing webpack
