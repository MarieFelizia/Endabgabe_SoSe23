"use strict";
var Ice;
(function (Ice) {
    window.addEventListener("load", handleLoad);
    async function handleLoad() {
        let addTask = document.getElementById("button");
        addTask.addEventListener("click", elements);
        let response = await fetch("https://webuser.hs-furtwangen.de/~ecklmari/Database/?command=find&collection=TaskList");
        let content = await response.text();
        let data = JSON.parse(content);
        generateContent(data);
    }
    ;
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
        const newOrder = {
            Input: [
                {
                    name: nameValue,
                    sorte: sorteValue,
                    kugel: kugelValue,
                    erdbeere: erdbeersoßeValue,
                    schoko: schokosoßeValue,
                    sahne: sahneValue,
                    streusel: streuselValue,
                    preis: preisValue,
                }
            ]
        };
        generateContent(newOrder);
        IceName.value = "";
        IceSorte.value = "";
        IceKugel.value = "";
        IcePreis.value = "";
    }
    ;
    async function generateContent(_data) {
        const taskList = document.getElementById("OrderList");
        for (let x = 0; x < _data.Input.length; x++) {
            const newTaskElement = document.createElement("div");
            newTaskElement.classList.add("newOrder");
            newTaskElement.classList.add("border");
            newTaskElement.innerHTML = `

        <label for="NameEisbecher"> Name des Eisbechers:</label>
        <input type="text" id="Name" placeholder="${_data.Input[x].name}">

        <label for="EisSorte"> Sorte:</label>
        <input type="text" id="Sorte" placeholder="${_data.Input[x].sorte}">
        
        <label for="EisKugel"> Wie viele Kugeln:</label>
        <input type="text" id="Kugel" placeholder=" ${_data.Input[x].kugel}">
        <br>
        <label for="Schokosße">Schokosoße</label>
        <input type="checkbox" id="Schokosoße"  ${_data.Input[x].schoko ? "checked" : ""}>
        
        <label for="Erdbeersoße">Erdbeersoße</label>
        <input type="checkbox" id="Erdbeersoße"  ${_data.Input[x].erdbeere ? "checked" : ""}>
        
        <label for="Streusel">Streusel</label>
        <input type="checkbox" id="Streusel"  ${_data.Input[x].streusel ? "checked" : ""}>
        
        <label for="Sahne">Sahne</label>
        <input type="checkbox" id="Sahne"  ${_data.Input[x].sahne ? "checked" : ""}>
        
        <label for="Preis"> Preis:</label>
        <input type="text" id="Preis" placeholder="${_data.Input[x].preis}">

        <button id="delete" type="submit">Eisbecher löschen</button>
        `;
            let formData = new FormData(document.forms[0]);
            let json = {};
            for (let key of formData.keys())
                if (!json[key]) {
                    let values = formData.getAll(key);
                    json[key] = values.length > 1 ? values : values[0];
                }
            let query = new URLSearchParams();
            query.set("command", "insert");
            query.set("collection", "List");
            query.set("data", JSON.stringify(json));
            await fetch("https://webuser.hs-furtwangen.de/~ecklmari/Database/?" + query.toString());
            taskList.appendChild(newTaskElement);
            const deleteButton = newTaskElement.querySelector("#delete");
            if (deleteButton) {
                deleteButton.addEventListener("click", async function () {
                    newTaskElement.remove();
                    let query = new URLSearchParams();
                    query.set("command", "delete");
                    query.set("collection", "TaskList");
                    query.set("data", JSON.stringify(json));
                    await fetch("https://webuser.hs-furtwangen.de/~ecklmari/Database/?" + query.toString());
                });
            }
            ;
        }
        ;
    }
    ;
})(Ice || (Ice = {}));
;
//# sourceMappingURL=generateContent.js.map