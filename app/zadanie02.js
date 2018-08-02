const fs = require('fs');

fs.readdir('.app/data/zadanie02/',(err, files)=> {
	if (err === null) {
		console.log(files);
		files.forEach(file => {
			console.log(file);
			fs.readFile('.app/data/zadanie02/'+file, 'utf8', (err, data)=>{
				if (err === null){
					console.log(data);
				} else {
					console.log('Błąd odczytu pliku');
				}
			});
		});


	} else {
		console.log('Błąd');

	}
	


});