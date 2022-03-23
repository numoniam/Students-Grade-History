var student = [{ name: "Vivek Dhameliya", Enrolment: "190010107001", Branch: "Computer Engineering", sem: [{ SEM: 1, sub: { PPS: "AA", BME: "AB", BE: "AA", MATHS: "AA" } }, { SEM: 2, sub: { ENG: "AB", BEE: "AA", EGD: "AA", PHYSICS: "AB" } }, { SEM: 3, sub: { ETC: "AA", DS: "AA", DBMS: "BB", DF: "AA" } }] },
    { name: "Jay Kapuriya", Enrolment: "190010107002", Branch: "Computer Engineering", sem: [{ SEM: 1, sub: { PPS: "AA", BME: "AB", BE: "AA", MATHS: "AA" } }, { SEM: 2, sub: { ENG: "AA", BEE: "AB", EGD: "AA", PHYSICS: "AA" } }, { SEM: 3, sub: { ETC: "AA", DS: "AB", DBMS: "AA", DF: "AA" } }] },
    { name: "Smit Dholiya", Enrolment: "190010107003", Branch: "Computer Engineering", sem: [{ SEM: 1, sub: { PPS: "AA", BME: "AB", BE: "AA", MATHS: "AA" } }, { SEM: 2, sub: { ENG: "AA", BEE: "AB", EGD: "AA", PHYSICS: "AA" } }, { SEM: 3, sub: { ETC: "AA", DS: "AB", DBMS: "AA", DF: "AA" } }] },
    { name: "Ajay Kapuriya", Enrolment: "190010107004", Branch: "Computer Engineering", sem: [{ SEM: 1, sub: { PPS: "AA", BME: "AB", BE: "AA", MATHS: "AA" } }, { SEM: 2, sub: { ENG: "AA", BEE: "AB", EGD: "AA", PHYSICS: "AA" } }, { SEM: 3, sub: { ETC: "AA", DS: "AB", DBMS: "AA", DF: "AA" } }] },
    { name: "Savan Ghori", Enrolment: "190010107005", Branch: "Computer Engineering", sem: [{ SEM: 1, sub: { PPS: "AA", BME: "AB", BE: "AA", MATHS: "AA" } }, { SEM: 2, sub: { ENG: "AA", BEE: "AB", EGD: "AA", PHYSICS: "AA" } }, { SEM: 3, sub: { ETC: "AA", DS: "AB", DBMS: "AA", DF: "AA" } }] },
    { name: "Chirag Haraniya", Enrolment: "190010107006", Branch: "Computer Engineering", sem: [{ SEM: 1, sub: { PPS: "AA", BME: "AB", BE: "AA", MATHS: "AA" } }, { SEM: 2, sub: { ENG: "AA", BEE: "AB", EGD: "AA", PHYSICS: "AA" } }, { SEM: 3, sub: { ETC: "AA", DS: "AB", DBMS: "AA", DF: "AA" } }] },
    { name: "sunil patel", Enrolment: "190010107007", Branch: "Computer Engineering", sem: [{ SEM: 1, sub: { PPS: "AA", BME: "AB", BE: "AA", MATHS: "AA" } }, { SEM: 2, sub: { ENG: "AA", BEE: "AB", EGD: "AA", PHYSICS: "AA" } }, { SEM: 3, sub: { ETC: "AA", DS: "AB", DBMS: "AA", DF: "AA" } }] },
    { name: "Ramesh Desai", Enrolment: "190010107008", Branch: "Computer Engineering", sem: [{ SEM: 1, sub: { PPS: "AA", BME: "AB", BE: "AA", MATHS: "AA" } }, { SEM: 2, sub: { ENG: "AA", BEE: "AB", EGD: "AA", PHYSICS: "AA" } }, { SEM: 3, sub: { ETC: "AA", DS: "AB", DBMS: "AA", DF: "AA" } }] },
    { name: "Jenil shah ", Enrolment: "190010107009", Branch: "Computer Engineering", sem: [{ SEM: 1, sub: { PPS: "AA", BME: "AB", BE: "AA", MATHS: "AA" } }, { SEM: 2, sub: { ENG: "AA", BEE: "AB", EGD: "AA", PHYSICS: "AA" } }, { SEM: 3, sub: { ETC: "AA", DS: "AB", DBMS: "AA", DF: "AA" } }] },
    { name: "Parth ramani", Enrolment: "190010107010", Branch: "Computer Engineering", sem: [{ SEM: 1, sub: { PPS: "AA", BME: "AB", BE: "AA", MATHS: "AA" } }, { SEM: 2, sub: { ENG: "AA", BEE: "AB", EGD: "AA", PHYSICS: "AA" } }, { SEM: 3, sub: { ETC: "AA", DS: "AB", DBMS: "AA", DF: "AA" } }] }
];

var data1 = JSON.stringify(student);
var data = JSON.parse(data1);

function f1() {
    var ab = document.getElementById("src").value;

    for (i = 0; i < 10; i++) {
        if (ab === data[i].Enrolment) {
            document.getElementById("ab1").style.display = "inline-block";
            document.getElementById("a0").style.display = "inline-block";
            document.getElementById("a1").style.display = "inline-block";
            document.getElementById("a2").style.display = "inline-block";
            document.getElementById("a3").style.display = "inline-block";

            document.getElementById("p1").innerHTML = data[i]["name"];
            document.getElementById("p2").innerHTML = data[i]["Enrolment"];
            document.getElementById("p3").innerHTML = data[i]["Branch"];

            document.getElementById("sem_1").innerHTML = "SEM " + data[i].sem[0].SEM;
            document.getElementById("g1").innerHTML = data[i].sem[0].sub.PPS;
            document.getElementById("g2").innerHTML = data[i].sem[0].sub.BME;
            document.getElementById("g3").innerHTML = data[i].sem[0].sub.BE;
            document.getElementById("g4").innerHTML = data[i].sem[0].sub.MATHS;

            document.getElementById("sem_2").innerHTML = "SEM " + data[i].sem[1].SEM;
            document.getElementById("g5").innerHTML = data[i].sem[1].sub.ENG;
            document.getElementById("g6").innerHTML = data[i].sem[1].sub.BEE;
            document.getElementById("g7").innerHTML = data[i].sem[1].sub.EGD;
            document.getElementById("g8").innerHTML = data[i].sem[1].sub.PHYSICS;

            document.getElementById("sem_3").innerHTML = "SEM " + data[i].sem[2].SEM;
            document.getElementById("g9").innerHTML = data[i].sem[2].sub.ETC;
            document.getElementById("g10").innerHTML = data[i].sem[2].sub.DS;
            document.getElementById("g11").innerHTML = data[i].sem[2].sub.DBMS
            document.getElementById("g12").innerHTML = data[i].sem[2].sub.DF;

        }
    }
}