/*add SuperUser class*/
function SuperUser() {
	//Super User class
}

/*add SuperUser method which change data visibility*/
SuperUser.prototype.changeDataVisibility=function() {
	this.isDataVisible=!this.isDataVisible;
	return this.isDataVisible;
}

/*add User class*/
function User(name,sex,birthDate,address,phone,email,isDataVisible) {
	this.name=name;
	this.sex=sex;
	this.birthDate=birthDate;
	this.address=address;
	this.phone=phone;
	this.email=email;
	this.isDataVisible=isDataVisible;
}

/*user inherit methods from SuperUser*/
User.prototype = SuperUser.prototype; 

/*create array in which all user instances will be saved*/
var userArr=[];

/*method which add user info to table*/
User.prototype.addUser=function (){
	var tableId=document.getElementById('table');
	var tableRow=tableId.insertRow(-1);
	tableRow.classList.add('data','visible');
	tableRow.setAttribute("index",userArr.length-1);
	var cell1 = tableRow.insertCell(0);
	var cell2 = tableRow.insertCell(1);
	var cell3 = tableRow.insertCell(2);
	var cell4 = tableRow.insertCell(3);
	var cell5 = tableRow.insertCell(4);
	var cell6 = tableRow.insertCell(5);
	cell1.textContent = userArr[userArr.length-1].name;
	cell1.classList.add('show');
	cell2.textContent = userArr[userArr.length-1].sex;
	cell2.classList.add('show');
	cell3.textContent = userArr[userArr.length-1].birthDate;
	cell3.classList.add('show');
	cell4.textContent = userArr[userArr.length-1].address;
	cell4.classList.add('show');
	cell5.textContent = userArr[userArr.length-1].phone;
	cell5.classList.add('show');
	cell6.textContent = userArr[userArr.length-1].email;
	cell6.classList.add('show');
}