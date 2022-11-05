function divCreate(clsName){
let div=document.createElement("div");
div.className=clsName;
return div;
}

function eleCreate(eleName,attName,attValue){
    let ele=document.createElement(eleName);
    ele.setAttribute(attName,attValue);
    return ele;
}

function inputCreate(typeValue,idValue,placeHolderValue){
    let ele=document.createElement("input");
    ele.setAttribute("type",typeValue);
    ele.setAttribute("id",idValue);
    ele.setAttribute("placeholder",placeHolderValue);
    return ele;  
}

function radioCreate(idValue,nameValue,value){
let gender=document.createElement("input");
gender.setAttribute("type","radio");
gender.setAttribute("id",idValue);
gender.setAttribute("name",nameValue);
gender.setAttribute("value",value);
return gender;
}

let form=document.createElement("form");

let main=divCreate("main");

let heading=divCreate("heading");
heading.innerHTML="<h1>Student Database</h1>";

let formRow=divCreate("form-group");

let lableDiv1=divCreate("form-group");
let fname=eleCreate("lable","for","fname");
fname.innerHTML="First Name";
let fnameip=inputCreate("text","fname","First Name");
fnameip.className="form-control";
fnameip.setAttribute("required","");
lableDiv1.append(fname,fnameip);

let lableDiv2=divCreate("form-group");
let lname=eleCreate("lable","for","lname");
lname.innerHTML="Last Name";
let lnameip=inputCreate("text","lname","Last Name");
lnameip.className="form-control";
lableDiv2.append(lname,lnameip);

let lableDiv3=divCreate("form-group");
let email=eleCreate("lable","for","email");
email.innerHTML="E-Mail";
let emailip=inputCreate("email","email","name@example.com");
emailip.className="form-control";
lableDiv3.append(email,emailip);

let lableDiv4=divCreate("form-group");
let address=eleCreate("lable","for","address");
address.innerHTML="Address";
let addressip=inputCreate("textarea","address","Address");
addressip.className="form-control";
lableDiv4.append(address,addressip);

let lableDiv5=divCreate("form-group");
let pincode=eleCreate("lable","for","pincode");
pincode.innerHTML="Pincode";
let pincodeip=inputCreate("text","pincode","Pincode");
pincodeip.className="form-control";
lableDiv5.append(pincode,pincodeip);

let lableDiv6=divCreate("form-group");
let state=eleCreate("lable","for","state");
state.innerHTML="State";
let stateip=eleCreate("select","id","state");
stateip.className="form-control"
let stateopt1=document.createElement("option");
stateopt1.innerHTML="Select State";
let stateopt2=document.createElement("option");
stateopt2.innerHTML="Tamilnadu";
let stateopt3=document.createElement("option");
stateopt3.innerHTML="Bangalore";
let stateopt4=document.createElement("option");
stateopt4.innerHTML="Hyderabad";
stateip.append(stateopt1,stateopt2,stateopt3,stateopt4);
lableDiv6.append(state,stateip);

let lableDiv7=divCreate("form-group");
let district=eleCreate("lable","for","district");
district.innerHTML="District";
let districtip=eleCreate("select","id","district");
districtip.className="form-control"
let districtopt1=document.createElement("option");
districtopt1.innerHTML="Select District";
let districtopt2=document.createElement("option");
districtopt2.innerHTML="Coimbatore";
let districtopt3=document.createElement("option");
districtopt3.innerHTML="Madhurai";
let districtopt4=document.createElement("option");
districtopt4.innerHTML="Salem";
districtip.append(districtopt1,districtopt2,districtopt3,districtopt4);
lableDiv6.append(district,districtip);

let lableDiv8=divCreate("form-group");
let gender=eleCreate("lable","for","gender");
gender.className="genderlb"
gender.innerHTML="Gender:";

let maleDiv=divCreate("form-check form-check-inline");
let male=radioCreate("gender","gender","Male");
male.className="form-check-input";
maleip=eleCreate("lable","for","male");
maleip.className="form-check-label";
maleip.innerHTML="Male";
maleDiv.append(male,maleip);

let femaleDiv=divCreate("form-check form-check-inline");
let female=radioCreate("gender","gender","Female");
female.className="form-check-input";
femaleip=eleCreate("lable","for","female");
femaleip.className="form-check-label";
femaleip.innerHTML="Female";
femaleDiv.append(female,femaleip);
lableDiv8.append(gender,maleDiv,femaleDiv);

let lableDiv9=divCreate("form-group");
let dept=eleCreate("label","for","dept");
dept.innerHTML="Department";
let deptip=eleCreate("select","id","dept");
deptip.className="form-control";
let opt1=document.createElement("option");
opt1.innerHTML="Select Department";
let opt2=document.createElement("option");
opt2.innerHTML="Mechatronics Engineering";
let opt3=document.createElement("option");
opt3.innerHTML="Computer Science Engineering";
let opt4=document.createElement("option");
opt4.innerHTML="Aeronatical Engineering";
deptip.append(opt1,opt2,opt3,opt4)
lableDiv9.append(dept,deptip);


let submit=eleCreate("button","type","button");
submit.className="btn btn-primary";
submit.innerHTML="Submit";
submit.addEventListener("click",displayData);

function displayData(){
let fname=document.getElementById("fname").value;
let lname=document.getElementById("lname").value;
let email=document.getElementById("email").value;

let genderSelect=document.getElementsByName("gender");
let genderValue;
for(let i=0; i<genderSelect.length; i++){
    if(genderSelect[i].checked){
        genderValue=genderSelect[i].value;
    }
}

let dpt=document.getElementById("dept").value;
let add=document.getElementById("address").value;
let pincode=document.getElementById("pincode").value;
let dst=document.getElementById("district").value;
let state=document.getElementById("state").value;
console.log(`Student Name: ${fname} ${lname}`);
console.log("E-mail:" +email);
console.log("Gender:" +genderValue);
console.log("Department:" +dpt);
console.log("Permanant Address:" +add);
console.log("Pincode:" +pincode);
console.log("District:" +dst);
console.log("State:" +state);
}

formRow.append(lableDiv1,lableDiv2,lableDiv3,lableDiv8,lableDiv9,lableDiv4,lableDiv5,lableDiv6,lableDiv7);
form.append(heading,formRow,submit);
main.append(form);
document.body.append(main);