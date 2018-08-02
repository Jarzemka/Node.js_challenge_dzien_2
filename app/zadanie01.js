const fs = require('fs');

function czytanie(err, data){
	if (err === null){
		const parsed = JSON.parse(data);
		console.log("jestOk", data);
		console.log("jestOk", parsed);
		let suma = 0;
		for (let i=0; i<parsed.length; i++) {
			console.log(parsed[i]);
			suma += parsed[i];
		}
		console.log(suma);
		fs.writeFile('/Users/jarzemki/Desktop/Node.js_challenge_dzien_2/app/data/zadanie01/output.json', suma, err => {
			if (err === null) {
				console.log('Zapisano poprawnie');
			} else {
				console.log('Błąd',err);
			}
		});

	
	} else {
		console.log("nie ma", err);
	}
}

fs.readFile('/Users/jarzemki/Desktop/Node.js_challenge_dzien_2/app/data/zadanie01/input.json','utf8', czytanie);

