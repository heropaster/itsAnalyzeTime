//Изначальный код, данный в условиях задачи
const table = document.getElementsByClassName('table').item(0);
    let tr = document.createElement('tr');

    for (let i = 0; i < 100; i++) {
        if (i % 10 === 0) {
            table.appendChild(tr);

            tr = document.createElement('tr');
        }

        const td = document.createElement('td');

        td.classList.add('table__cell');
        td.innerText = `${i}`;

        tr.appendChild(td);
    }

    table.appendChild(tr);