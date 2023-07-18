"use strict";
var Ice;
(function (Ice) {
    window.addEventListener("load", handleLoad);
    let data = [];
    async function handleLoad() {
        let addTask = document.getElementById("button");
        addTask.addEventListener("click", elements);
        loaddata();
    }
    ;
    //dom elemente als HTML Input Elemet erstellen
    async function elements() {
        const IceName = document.getElementById("Name");
        const nameValue = IceName.value;
        const IceSorte = document.getElementById("Sorte");
        const sorteValue = IceSorte.value;
        const IceKugel = document.getElementById("Kugel");
        const kugelValue = IceKugel.value;
        const IcePreis = document.getElementById("Preis");
        const preisValue = IcePreis.value;
        const IceSchokosoße = document.getElementById("Schokosoße");
        const schokosoßeValue = IceSchokosoße.checked;
        const IceErdbeersoße = document.getElementById("Erdbeersoße");
        const erdbeersoßeValue = IceErdbeersoße.checked;
        const IceStreusel = document.getElementById("Streusel");
        const streuselValue = IceStreusel.checked;
        const IceSahne = document.getElementById("Sahne");
        const sahneValue = IceSahne.checked;
        let newid = 0;
        let idExists = true; //idExists wird auf false gesetzt, um zu überprüfen, 
        while (idExists) { //ob die newid einzigartig ist. 
            newid = newid + 1; //ausgehen davon, dass newid einzigartig ist
            idExists = false; // wir setzen idExists auf false. überprüfen durch 
            for (let docId in data) { //durchgehen von allen ids in data. Bei gleicher id  
                let item = data[docId]; //setzen wir idExists auf true, einzigartige id ist nicht einzigartig
                if (item.id == newid) { // dann wird weitergesucht nach einzigartigen ids
                    idExists = true;
                }
            }
        }
        //neues Item kreieren 
        const newItem = {
            id: newid,
            name: nameValue,
            sorte: sorteValue,
            kugel: kugelValue,
            erdbeere: erdbeersoßeValue,
            schoko: schokosoßeValue,
            sahne: sahneValue,
            streusel: streuselValue,
            preis: preisValue,
        };
        //daten in eine data collection pushen 
        data.push(newItem);
        generateContent(newItem);
        await fetch(`https://webuser.hs-furtwangen.de/~ecklmari/Database/?command=insert&collection=data&data=${JSON.stringify(newItem)}`);
        // input felder leeren 
        IceName.value = "";
        IceSorte.value = "";
        IceKugel.value = "";
        IcePreis.value = "";
    }
    ;
    // neues div mit den verschiedenen input elementen und einträgen (daten) kreieren 
    async function generateContent(item) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('newOrder');
        newDiv.innerHTML = `

        <label for="NameEisbecher"> Name des Eisbechers:</label>
        <input type="text" id="Name" placeholder="${item.name}">

        <label for="EisSorte"> Sorte:</label>
        <input type="text" id="Sorte" placeholder="${item.sorte}">
        
        <label for="EisKugel"> Wie viele Kugeln:</label>
        <input type="text" id="Kugel" placeholder=" ${item.kugel}">
        <br>
        <label for="Schokosße">Schokosoße</label>
        <input type="checkbox" id="Schokosoße"  ${item.schoko ? "checked" : ""}>
        
        <label for="Erdbeersoße">Erdbeersoße</label>
        <input type="checkbox" id="Erdbeersoße"  ${item.erdbeere ? "checked" : ""}>
        
        <label for="Streusel">Streusel</label>
        <input type="checkbox" id="Streusel"  ${item.streusel ? "checked" : ""}>
        
        <label for="Sahne">Sahne</label>
        <input type="checkbox" id="Sahne"  ${item.sahne ? "checked" : ""}>
        
        <label for="Preis"> Preis:</label>
        <input type="text" id="Preis" placeholder="${item.preis}">

        <button id="delete" type="submit">Eisbecher löschen</button>
        `;
        // delete button erstellen und eventlistener hinzufügen 
        let deleteButton = newDiv.querySelector('#delete');
        if (deleteButton) {
            deleteButton.addEventListener('click', function (event) {
                deletetaskdom(event);
                deleteDataFromServer(item.id);
            });
        }
        let container = document.querySelector('#OrderList');
        container && container.appendChild(newDiv);
    }
    // Daten in der data collection speichern 
    async function loaddata() {
        const response = await fetch("https://webuser.hs-furtwangen.de/~ecklmari/Database/?command=find&collection=data");
        const dataJSON = await response.json();
        data = dataJSON.data;
        for (let docId in data) {
            let item = data[docId];
            generateContent(item);
        }
    }
    // funktion um das div zu löschen 
    function deletetaskdom(event) {
        const target = event.target;
        const divToDelete = target.closest('div');
        divToDelete && divToDelete.remove();
    }
    // daten von server löschen, wenn der delete button gedrückt wird 
    async function deleteDataFromServer(id) {
        let dataBaseIndex = "";
        for (let docId in data) { // jede docId in Data durchgehen
            let item = data[docId]; // das bestimmte item von data deklarieren und holen 
            if (item.id == id) { // hat docId die gesuchte id von itemId
                dataBaseIndex = docId; // übereinstimmung => wird in dataBaseIndex gespeichert 
            }
            const deleteUrl = `https://webuser.hs-furtwangen.de/~ecklmari/Database/?command=delete&collection=data&id=${dataBaseIndex}`;
            await fetch(deleteUrl);
            // Daten werden von Server gelöscht
        }
    }
})(Ice || (Ice = {}));
//# sourceMappingURL=generateContent.js.map