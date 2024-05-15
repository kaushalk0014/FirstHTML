 
 
 function submitForm(){
    let employee={}; 
    let name=document.getElementById("name").value;
    let address=document.getElementById("address").value;
    let age=document.getElementById("age").value;
     
    
    if(name==null||name===""){
        alert("Please enter name");
        return;
    }
    if(age==null||age===""){
        alert("Please select age");
        return;
    }
    if(address==null||address===""){
        alert("Please enter address");
        return;
    }
   
    employee.name=name;
    employee.address=address;
    employee.age=age;
    console.log(employee    )
    alert(`Ready to submit form ${JSON.stringify(employee)}`);
}

 function resetForm(){
    document.getElementById("name").value="";
    document.getElementById("address").value="";
    document.getElementById("age").value="";
 }