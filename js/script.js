// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm');
let empTable = document.getElementById('employees');

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    "use strict";
// PREVENT FORM SUBMISSION
    e.preventDefault();

// GET THE VALUES FROM THE TEXT BOXES
    let id =        document.getElementById('id').value;
    let name =      document.getElementById('name').value;
    let extension = document.getElementById('extension').value;
    let email =     document.getElementById('email').value;
    let department =document.getElementById('department').value;
    let addForm =   document.getElementById('addForm');

// INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = empTable.insertRow();

 // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = row.insertCell();
    let cellName =  row.insertCell();
    let cellExtension = row.insertCell();
    let cellEmail = row.insertCell();
    let cellDepartment = row.insertCell();
    let cellDeleteBtn = row.insertCell();

// APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let textID =        document.createTextNode(id);
    let textName =      document.createTextNode(name);
    let textExtension = document.createTextNode(extension);
    let textEmail =     document.createTextNode(email);
    let textDepartment =document.createTextNode(department);
   
    cellID.appendChild(textID);
    cellName.appendChild(textName);
    cellExtension.appendChild(textExtension); 
    cellEmail.appendChild(textEmail);
    cellDepartment.appendChild(textDepartment);
    

// CREATE THE DELETE BUTTON
    let deleteBtn =     document.createElement('button');
    let textDelete =    document.createTextNode('X');
    deleteBtn.appendChild(textDelete);
    deleteBtn.className = 'btn bg-danger text-white';
    cellDeleteBtn.appendChild(deleteBtn);
  
// RESET THE FORM
    addForm.reset();
    
// SET FOCUS BACK TO THE ID TEXT BOX
    addForm.id.focus();

// INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    function count() {
        for (let i = 1; i < empTable.rows.length; i++) {
        empTable[i].value;
        }
    }

    let countText = document.createTextNode(count.innerText);
    empCount.appendChild(countText);
 });

// DELETE EMPLOYEE
    empTable.addEventListener('click', (e) => {
    if(confirm('Are you sure you want to delete employee?')) {
        if(e.target.classList.contains('btn')){
            const btn = e.target;
            btn.closest('tr').remove();
        }
    }
});

