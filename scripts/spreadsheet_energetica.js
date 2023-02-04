//https://asbnotebook.com/fetch-google-spread-sheet-data-using-javascript

const sheetId = '124VxWXwG5TQI8jZ7d74qMV91omSHSiaLn9OFg876pPw';
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const sheetName = 'CLER-Enerxetica';
const query = encodeURIComponent('Select *')
const url = `${base}&sheet=${sheetName}&tq=${query}`

const data = []
document.addEventListener('DOMContentLoaded', init)
const output = document.querySelector('.output')

function init() {
    fetch(url)
        .then(res => res.text())
        .then(rep => {
            //Remove additional text and extract only JSON:
            const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
            console.log(rep)
            const colz = [];
            const tr = document.createElement('tr');
            //Extract column labels
            jsonData.table.cols.forEach((heading) => {
                if (heading.label) {
                    let column = heading.label;
                    colz.push(column);
                    const th = document.createElement('th');
                    th.innerText = column;
                    tr.appendChild(th);
                }
            })
            output.appendChild(tr);
            //extract row data:
            jsonData.table.rows.forEach((rowData) => {
                const row = {};
                colz.forEach((ele, ind) => {
                    row[ele] = (rowData.c[ind] != null) ? rowData.c[ind].v : '';
                })
                data.push(row);
            })
            processRows(data);
        })
}

function processRows(json) {
    json.forEach((row) => {
        const tr = document.createElement('tr');
        const keys = Object.keys(row);
        let firstIndex = true;
        let day = "";
        let month = "";
        let year = "";

        keys.forEach((key) => {
            const td = document.createElement('td');
            if (firstIndex){
                // Date(2023,0,31)
                year = row[key].split('(')[1].substring(0, 4);
                month = (parseInt(row[key].split(',')[1]) + 1).toString();
                day = row[key].split(',')[2].split(')')[0];

                if (month.length === 1) month = "0" + month;
                if (day.length === 1) day = "0" + day;

                td.textContent = day+"/"+month+"/"+year;
                firstIndex = false;
            } else td.textContent = row[key];
            tr.appendChild(td);
        })
        output.appendChild(tr);
    })
}