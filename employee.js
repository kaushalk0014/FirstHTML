

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
    alert(`Ready to submit form ${JSON.stringify(employee)}`);
   
}

function submitFormConfirm(){
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
    if((name!==null&&name!=="")||(address!==null&&address!=="")||(age!==null&&age!=="")){
        $("#resetConfirm").modal('toggle');
    }

    
}
function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
    document.getElementById("age").value = "";
    $("#resetConfirm").modal('toggle');
}
