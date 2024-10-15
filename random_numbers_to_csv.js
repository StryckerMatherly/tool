
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;


function generateRandomNumbers(count, min, max) {
    const randomNumbers = [];
    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomNumbers.push({ id: i + 1, number: randomNumber });
    }
    return randomNumbers;
}


function saveToCsv(filename, data) {
    const csvWriter = createCsvWriter({
        path: filename,
        header: [
            { id: 'id', title: 'ID' },
            { id: 'number', title: 'Random Number' }
        ]
    });

    csvWriter.writeRecords(data)
        .then(() => {
            console.log(`CSV file "${filename}" has been written successfully.`);
        })
        .catch((err) => {
            console.error('Error writing to CSV:', err);
        });
}


const count = 100; 
const min = 1; 
const max = 100; 
const filename = 'random_numbers.csv'; 


const randomNumbers = generateRandomNumbers(count, min, max);
saveToCsv(filename, randomNumbers);
