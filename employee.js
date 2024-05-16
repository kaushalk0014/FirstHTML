

function submitForm() {
    let employee = {};
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let address = document.getElementById("address").value;
    let mobile = document.getElementById("mobile").value;
    let gender= document.getElementById("gender").value;
    let date= document.getElementById("date").value;
    let media= document.getElementById("media").value;

    employee.name = name;
    employee.age = age;
    employee.address = address;
    employee.mobile = mobile;
    employee.gender= gender;
    employee.date = date;
    employee.media = media;

    console.log(employee)
    
    $("#submitConfirm").modal('toggle');
    alert(`Ready to submit form ${JSON.stringify(employee)}`);
   
}

function submitFormConfirm(){
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let address = document.getElementById("address").value;
    let mobile = document.getElementById("mobile").value;
    let gender = document.getElementById("gender").value;
    let date = document.getElementById("date").value;
    let media = document.getElementById("media").value;
    



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
    if (mobile == null || mobile === "") {
        alert("Please enter mobile");
        return;
    }
    if (gender == null || gender === "") {
        alert("Please select gender");
        return;
    }
    if (date == null || date === "") {
        alert("Please enter DOB");
        return;
    }
    if (media == null || media === "") {
        alert("Please select media");
        return;
    }

    $("#submitConfirm").modal('toggle');
}

function resetFormConfirm() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let address = document.getElementById("address").value;
    let mobile = document.getElementById("moble").value;
    let gender = document.getElementById("gender").value;
    let date = document.getElementById("date").value;
    let media = document.getElementById("media").value;
    
    if((name!==null&&name!=="")||(age!==null&&age!=="")||(address!==null&&address!=="")||(mobile!==null&&mobile!=="")||(gender!==null&&gender!=="")||(date!==null&&date!=="")||(media!==null&&media!=="")){
        $("#resetConfirm").modal('toggle');
    }

    
}
function resetForm() {
    document.getElementById("name").value="";
    document.getElementById("age").value="";
    document.getElementById("address").value="";
    document.getElementById("mob").value="";
    document.getElementById("gender").value="";
    document.getElementById("date").value="";
    document.getElementById("media").value="";
    $("#resetConfirm").modal('toggle');
}
