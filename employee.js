

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
        if (xhr.readyState == 4 && xhr.status == 201) {
            console.log(JSON.parse(xhr.responseText));
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };
    xhr.send(body);


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