const fs = require('fs');

fs.readFile('./data/zadanieDnia/test.txt', 'utf8', (err, data) => {
    if(err === null){
        console.log('odczytano poprawnie', data);
        fs.writeFile('./data/zadanieDnia/test.txt','Hello, World!', err => {
            if (err === null) {
                console.log('zapisano poprawnie');
            } else {
                console.log('błąd zapisu');
            }
        });
     } else {
        console.log('błędny odczyt', err);
     }
    });