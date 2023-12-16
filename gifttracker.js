//this is a var that acts as a counter for rows added to the table. 
let id = 0;


//Grabbing the Log It button by its ID 'log' and adding an event listner that upon clicking 
//creates a var named table that is grabbing the table by its id 'list'
//creates a car named row that inserts a row into the table at position 1, 0 is the th
//creates a var named arrivalDate that grabs the users input at 'new-arrival-date'
//then made an if statement that says if the arrival date is later than the christmasDate, then display a pop up, if not run
//the addtoTable function. The construsctor 'new Date' is used to let it to know to expect a date format string. All I know
//is without it it doesnt work. 

// Since row is inside the eventListner it is not accessible to other functions. I passed it in in to each function to solve this


document.getElementById('log').addEventListener('click', () => {
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    let arrivalDate = document.getElementById('new-arrival-date').value;
    let christmasDate = new Date('2023-12-25');
    if (new Date(arrivalDate) > christmasDate) {
        displayPopup(row);
    } else {
        addToTable(row);
    }
});

//This function is ran on the event listner, click, at the end, becuase it will always happen, no matter the outcome
//It gives the row var an attribute of the id, so it can increment it once the createDeletebutton is  executed.
//it then inserts cells into the row, with the users input
//it creates a var named actions that inserts cell in posotion 4
//Then the createdeleteButton function is appended to actions, which calls that funcion to run
// it then clears out all input fields for a good user experience. 

 function addToTable(row){
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-name').value;
    row.insertCell(1).innerHTML = document.getElementById('new-gift').value;
    row.insertCell(2).innerHTML = document.getElementById('new-order-date').value;
    row.insertCell(3).innerHTML = document.getElementById('new-arrival-date').value;
    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-name').value = '';
    document.getElementById('new-gift').value = '';
    document.getElementById('new-order-date').value = '';
    document.getElementById('new-arrival-date').value = '';
    }

// This takes in the row var, to still create a new row once the pop up is clicked, 
//it creates a new var called popup, that creates a div and gives it a class name of popup, 
//so i can style it with CSS class selector
//It creates another that will have the actual content, so that the screen is partially hidden by the first pop up, and a
//smaller window appears on top of that. It has the messeage in the <p>.
//It also creates a var called okButton, that when clicked makes the pop up disapper and run the addToTable function.
// At the end  the button is appended to the second div, then that div is appended to the first div. 
//Finally the popup is appended to the document body of the DOM

 function displayPopup(row){
    let popup = document.createElement('div');
    popup.className = 'popup';

    let content = document.createElement('div');
    content.className = 'popup-content';
    content.innerHTML = '<p>Gift arrives after Christmas!<p>';

    let okButton = document.createElement('button');
    okButton.innerHTML = 'I know!';
    okButton.addEventListener('click', () => {
        document.body.removeChild(popup);
        addToTable(row);
    });

    content.appendChild(okButton);
    popup.appendChild(content);

    document.body.appendChild(popup);
 }



// this is the function called in the addToTable function, it takes in the id var, so that it can increment
//it creates the var btn and creates an element 'button
//gives btn a class name and some CSS styling
//gives it an id of the var id
//The text inside the button is created
//an event is added to the btn var, that once clicked 
//logs the index of the item deleted to the console
//creates a var elementToDelete that is the id of the item assigend by the setAttribute 
// in the addToTable function, which on the first one at that time would have been 0 (for example)
//whatever the id is (elementToDelete) it is removed from it's parent node, the table.
//it then returns the button so another entry could be deleted

 function createDeleteButton (id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Relief';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}
    