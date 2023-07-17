namespace Ice { 
    window.addEventListener("load", handleLoad);
    
    export interface Item {
        id: number;
        name: string;
        sorte: string;
        kugel: string;
        schoko: boolean;
        erdbeere: boolean;
        streusel: boolean;
        sahne: boolean;
        preis: string;
      
    }

    let data: Item[] =[]



    async function handleLoad(): Promise<void> {
        let addTask: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button");
        addTask.addEventListener("click", elements);
        loaddata();
        
    };

    async function elements(): Promise<void> {
        const IceName = document.getElementById("Name") as HTMLInputElement;
        const nameValue = IceName.value;

        const IceSorte = document.getElementById("Sorte") as HTMLInputElement;
        const sorteValue = IceSorte.value;

        const IceKugel = document.getElementById("Kugel") as HTMLInputElement;
        const kugelValue = IceKugel.value;

        const IcePreis = document.getElementById("Preis") as HTMLInputElement;
        const preisValue = IcePreis.value;

        const IceSchokosoße = document.getElementById("Schokosoße") as HTMLInputElement;
        const schokosoßeValue = IceSchokosoße.checked;

        const IceErdbeersoße = document.getElementById("Erdbeersoße") as HTMLInputElement;
        const erdbeersoßeValue = IceErdbeersoße.checked;

        const IceStreusel = document.getElementById("Streusel") as HTMLInputElement;
        const streuselValue = IceStreusel.checked;

        const IceSahne = document.getElementById("Sahne") as HTMLInputElement;
        const sahneValue = IceSahne.checked;

        let newid = 0;
        let idExists = true//hier wird idExists auf false gesetzt, um zu überprüfen, 
        while (idExists) {//ob die aktuelle Nummer (newid) einzigartig ist. 
            newid = newid + 1//Wir gehen zunächst davon aus, dass sie einzigartig ist, 
            idExists = false//indem wir idExists auf false setzen. Dann überprüfen wir das, 
            for (let docId in data) {//indem wir alle vorhandenen IDs in data durchgehen. Wenn wir eine gleiche ID finden, 
                let item = data[docId]//setzen wir idExists auf true, um zu zeigen, dass die aktuelle Nummer doch nicht einzigartig ist.
                if (item.id == newid) {// Dann suchen wir weiter nach einer einzigartigen Nummer.
                    idExists = true; 
                }
            }
        }


        const newItem: Item = {
            
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


        data.push(newItem);

        generateContent(newItem);
        await fetch(`https://webuser.hs-furtwangen.de/~ecklmari/Database/?command=insert&collection=data&data=${JSON.stringify(newItem)}`);

        IceName.value = "";
        IceSorte.value = "";
        IceKugel.value = "";
        IcePreis.value = "";

        
    };


    async function generateContent(item: Item): Promise<void> {
        let newDiv = document.createElement('div');
        newDiv.classList.add('newOrder')
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
    async function loaddata(): Promise<void> {
        const response = await fetch("https://webuser.hs-furtwangen.de/~ecklmari/Database/?command=find&collection=data");
        const dataJSON = await response.json();
        data = dataJSON.data;
        for (let docId in data) {
            let item = data[docId] 

            generateContent(item);
        }
    }

    function deletetaskdom(event: Event): void {
        const target = event.target as HTMLElement;
        const divToDelete = target.closest('div');
        divToDelete && divToDelete.remove();
    }


    async function deleteDataFromServer(id: number): Promise<void> {
        let dataBaseIndex = ""
        for (let docId in data) { //wir gehen durch jede docId(z.B.644cdd7d5caa0) in data durch 
            let item = data[docId] // wir holen uns das item für eine docId 
            if (item.id == id) {    // wir schauen ob das item mit docId die gesuchte item.id(man geht in ein item und vergleicht dort die "id") hat
                dataBaseIndex = docId // wenn wir die übereinstimmende id gefunden haben, speichern wir diese in dataBaseIndex
            }
            const deleteUrl = `https://webuser.hs-furtwangen.de/~ecklmari/Database/?command=delete&collection=data&id=${dataBaseIndex}`;
            await fetch(deleteUrl);
        }
    }
    }

