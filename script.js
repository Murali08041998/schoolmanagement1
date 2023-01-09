var selectedrow=null
function onformsubmit(){
    
    if(validate()){
        var formdata=readformdata();
        if(selectedrow==null)
        {
            insertrecord(formdata);
        }
        else
        {
            updaterecord(formdata);
        }
        resetform();
    }
}
function readformdata(){
    var formdata={};
    formdata["username"]=document.getElementById("username").value;
    formdata["parentname"]=document.getElementById("parentname").value;
    formdata["sage"]=document.getElementById("sage").value;
    formdata["subjectname"]=document.getElementById("subjectname").value;
    return formdata;
}
function insertrecord(data){
    var table=document.getElementById("studentlist").getElementsByTagName('tbody')[0];
    var newrow=table.insertRow(table.length);
    cell1=newrow.insertCell(0);
    cell1.innerHTML=data.username;
    cell2=newrow.insertCell(1);
    cell2.innerHTML=data.parentname;
    cell3=newrow.insertCell(2);
    cell3.innerHTML=data.sage;
    cell4=newrow.insertCell(3);
    cell4.innerHTML=data.subjectname;
    cell4=newrow.insertCell(4);
    cell4.innerHTML=`<a onClick="onedit(this)">Edit</a>
    <a onClick="ondelete(this)">Delete</a>`;
}
function resetform(){
    document.getElementById("username").value = "";
    document.getElementById("parentname").value = "";
    document.getElementById("sage").value = "";
    document.getElementById("subjectname").value = "";
    selectedrow=null;
}
function onedit(td){
    selectedrow=td.parentElement.parentElement;
    document.getElementById("username").value=selectedrow.cells[0].innerHTML;
    document.getElementById("parentname").value=selectedrow.cells[1].innerHTML;
    document.getElementById("sage").value=selectedrow.cells[2].innerHTML;
    document.getElementById("subjectname").value=selectedrow.cells[3].innerHTML;
}
function updaterecord(formdata){
    selectedrow.cells[0].innerHTML=formdata.username;
    selectedrow.cells[1].innerHTML=formdata.parentname;
    selectedrow.cells[2].innerHTML=formdata.sage;
    selectedrow.cells[3].innerHTML=formdata.subjectname;  
}
function ondelete(td){
    if(confirm("Are you  want to delete it")){
        row=td.parentElement.parentElement;
        document.getElementById("studentlist").deleteRow(row.rowIndex);
        resetform();
    }
}
function validate(){
    var name=document.getElementById("username").value;
    var parent=document.getElementById("parentname").value;
    var age=document.getElementById("sage").value;
    var sub=document.getElementById("subjectname").value;
    if(name=""){
        alert("Please enter your name correctly");
        name.focus();
        return false;
    }
    if(parent=""){
        alert("Please enter your parent name correctly");
        parent.focus();
        return false;
    }
    if(age=""){
        alert("Please enter your age correctly");
        age.focus();
        return false;
    }
    if(sub=""){
        alert("Please enter your subject correctly");
        sub.focus();
        return false;
    }
    return true;
}