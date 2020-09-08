const fs = require('fs');
const { join } = require('path');
const xlsx = require('node-xlsx');

module.exports = async file => {
    const excelPath = join(__dirname + '/tempExcel.xlsx');

    fs.writeFileSync(excelPath, file.data);

    const [parsedExcel] = await xlsx.parse(fs.readFileSync(excelPath));

    const formattedExcel = [];

    parsedExcel.data.forEach((array, index) => {
        if (index !== 0) {
            const tmp = {};

            array.forEach((item, _index) => {
                tmp[parsedExcel.data[0][_index]] = item;
            });

            formattedExcel.push(tmp);
        }
    });

    return formattedExcel;
};
