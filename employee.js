
let currentEmployeeId=0;
function formLoad() {
    currentEmployeeId=0;
    var form = document.getElementById("employeeListForm");
    form.classList.add("hideSubmitForm");
}


function submitForm() {
    let employee = {};
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let age = document.getElementById("age").value;

    employee.name = name;
    employee.address = address;
    employee.age = age;
    console.log(employee)

    $("#submitConfirm").modal('toggle');
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8088/api/save/customer");
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8")

    const body = JSON.stringify({
        name: name,
        age: age,
        address: address,
        gender: "Male"
    });
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(JSON.parse(xhr.responseText));
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };
    xhr.send(body);

    viewEmployee();
}

function submitFormConfirm() {
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let age = document.getElementById("age").value;


    if (name == null || name === "") {
        alert("Please enter name");
        return;
    }
    if (age == null || age === "") {
        alert("Please select age");
        return;
    }
    if (address == null || address === "") {
        alert("Please enter address");
        return;
    }
    $("#submitConfirm").modal('toggle');


}

function resetFormConfirm() {
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let age = document.getElementById("age").value;
    if ((name !== null && name !== "") || (address !== null && address !== "") || (age !== null && age !== "")) {
        $("#resetConfirm").modal('toggle');
    }


}
function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
    document.getElementById("age").value = "";
    $("#resetConfirm").modal('toggle');
}

function viewEmployee() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8088/api/getAll/customer");
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8")
    xhr.onload = () => {

        if (xhr.readyState == 4 && xhr.status == 200) {
            var element = document.getElementById("employeeSaveForm");
            element.classList.remove("displaySubmitForm");
            element.classList.add("hideSubmitForm");
            var formList = document.getElementById("employeeListForm");
            formList.classList.add("displaySubmitForm");

         
            let tBody = document.getElementById("renderList");
            

            while (tBody.hasChildNodes()) {
                tBody.removeChild(tBody.firstChild);
              }

            let responseData = JSON.parse(xhr.responseText);
            for (let i = 0; i < responseData.length; i++) {
                console.log(responseData[i]);
                let trData = document.createElement("tr");

                let tdEditBtn = document.createElement("td");
                
                let editBtn = document.createElement("button");
              
                editBtn.textContent = 'Edit';
                editBtn.className="btn btn-primary";
                editBtn.addEventListener('click', () => {
                    onClickEdit(responseData[i])
                });

                let deleteBtn = document.createElement("button");
              
                deleteBtn.textContent = 'Delete';
                deleteBtn.className="btn btn-danger marginLeft";
                deleteBtn.addEventListener('click', () => {
                    onClickDelete(responseData[i].id)
                });


                tdEditBtn.appendChild(editBtn);
                tdEditBtn.appendChild(deleteBtn);
                trData.appendChild(tdEditBtn);

                let tdName = document.createElement("td");
                let textName = document.createTextNode(responseData[i].name);
                tdName.appendChild(textName);
                trData.appendChild(tdName);

                let tdAge = document.createElement("td");
                let textAge = document.createTextNode(responseData[i].age);
                tdAge.appendChild(textAge);
                trData.appendChild(tdAge);


                let tdaddress = document.createElement("td");
                let textAddress = document.createTextNode(responseData[i].address);
                tdaddress.appendChild(textAddress);
                trData.appendChild(tdaddress);

                tBody.appendChild(trData);
            }
        } else {
            var element = document.getElementById("employeeSaveForm");
            element.classList.add("displaySubmitForm");
        }
    };
    xhr.send();
}

function onClickEdit(data){
    console.log(data);
}

function onClickDelete(id){
    currentEmployeeId=id;
    $("#deleteConfirm").modal('toggle');
}

function deleteEmployee(){
    console.log(currentEmployeeId);
    $("#deleteConfirm").modal('toggle');
}

function openForm() {
    var element = document.getElementById("employeeSaveForm");

    element.classList.add("displaySubmitForm");
    var formList = document.getElementById("employeeListForm");
    formList.classList.remove("displaySubmitForm");
    formList.classList.add("hideSubmitForm");

}