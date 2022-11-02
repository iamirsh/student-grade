const allBtn = document.querySelector(".all");
const passedBtn = document.querySelector(".passed");
const distinctionBtn = document.querySelector(".distinction");
const failedBtn = document.querySelector(".failed");
const table = document.querySelector("table");


const result = async () => {
    const response = await fetch("./api.js");
    const res = await response.json();
    return res;
}

function createEle(element) {
    const row = document.createElement("tr");
    const idCol = document.createElement("td");
    const marksCol = document.createElement("td");

    idCol.innerHTML = element.rollno;
    marksCol.innerHTML = element.marks;

    row.appendChild(idCol);
    row.appendChild(marksCol);
    table.appendChild(row);
    row.classList.add('rows');
}

function addHeaders() {
    const mainTable = document.querySelector(".student-table");
    mainTable.innerHTML = "";
    let headerrow = document.createElement("tr");
    let rollNo = document.createElement("td");
    let marksCol = document.createElement("td");
    rollNo.innerText = "Roll No.";
    marksCol.innerText = "Marks";
    headerrow.appendChild(rollNo);
    headerrow.appendChild(marksCol);
    table.appendChild(headerrow);
    headerrow.classList.add('heading');
   
}

allBtn.addEventListener('click', function studentResults() {
    result().then((data) => {
        addHeaders();
        data.student.forEach(element => {
            createEle(element);
        });
    });
});


passedBtn.addEventListener('click', function studentResults() {
    result().then((data) => {
        addHeaders();
        data.student.forEach(element => {
            if (element.marks >= 33) {
                createEle(element);
            }
        });
    });
});

distinctionBtn.addEventListener('click', function studentResults() {
    result().then((data) => {
        addHeaders();
        data.student.forEach(element => {
            if (element.marks >= 75) {
                createEle(element);
            }
        });
    });
});

failedBtn.addEventListener('click', function studentResults() {
    result().then((data) => {
        addHeaders();
        data.student.forEach(element => {
            if (element.marks < 33) {
                createEle(element);
            }
        });
    });
});