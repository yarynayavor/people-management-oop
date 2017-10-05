function SuperUser() {
	// this.changeDataVisibility=function(data) {
	// 	if(this.isDataVisible) {
	// 		$(data).removeClass( "hidden" ).addClass('visible');
	// 	}
	// 	else {
	// 		$(data).removeClass( "visible" ).addClass('hidden');
	// 	}
	// }
}

SuperUser.prototype.changeDataVisibility=function() {
	if(this.classList.contains('visible')){
		this.isDataVisible=true;
		return true;
	} 
	return false;
}



function User(name,sex,birthDate,address,phone,email) {
	this.name=name;
	this.sex=sex;
	this.birthDate=birthDate;
	this.address=address;
	this.phone=phone;
	this.email=email;

	this.isDataVisible=true;
}

User.prototype = new SuperUser();

var userArr=[];

User.prototype.addUser=function (){ 
	var tableId=document.getElementById('table');
	var tableRow=tableId.insertRow(1);
	tableRow.classList.add('data','visible');
	var cell1 = tableRow.insertCell(0);
	var cell2 = tableRow.insertCell(1);
	var cell3 = tableRow.insertCell(2);
	var cell4 = tableRow.insertCell(3);
	var cell5 = tableRow.insertCell(4);
	var cell6 = tableRow.insertCell(5);
	cell1.textContent = this.name;
	cell2.textContent = this.sex;
	cell3.textContent = this.birthDate;
	cell4.textContent = this.address;
	cell5.textContent = this.phone;
	cell6.textContent = this.email;
}

function resetForm() {
	var form=document.getElementById('form');
	form.reset();
}

function checkDublicates(p,e) {
	for (var i = 0; i < userArr.length; i++) {
		if((userArr[i].phone.toLowerCase()==p.toLowerCase()) ||
			(userArr[i].email.toLowerCase()==e.toLowerCase())) {
			return true;
	    }
    }
	return false;
}

$('input[type="submit"]').click(function (e) {

	nm=/^[^\d]*$/;
	pm=/[\+]\d{2}[\(]\d{3}[\)]\d{3}[\-]\d{2}[\-]\d{2}/;
	em=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;

	var name=document.getElementById('name').value;
	var sex=document.getElementById('sex').value;
	var date=document.getElementById('date').value;
	var address=document.getElementById('address').value;
	var phone=document.getElementById('phone').value;
	var email=document.getElementById('email').value;

	if(((name.match(nm))&&(name)) && (sex) && (date) && (address) && ((phone.match(pm))&&phone) && ((email.match(em))&&email)) {
		e.preventDefault();
		if(checkDublicates(phone,email)) {
			alert("Sorry. This user already exist in our system. \n\
				Write another pnone number or/and email!");
		} else {
			var newInstanses=new User(name,sex,date,address,phone,email);
			userArr.push(newInstanses);
			userArr[userArr.length-1].addUser();
			resetForm();

			button=document.querySelectorAll('tr.data');
	for (i = 0; i < button.length; i++) {
		button[i].onclick= (function () {
			var $item = $(this.childNodes);
			for(var j=1;j<$item.length;j++) {
				if($item[j].classList.contains('hide')) {
					$($item[j]).removeClass('hide');
					$($item[j]).addClass('show');
				} 
				else {
					$($item[j]).removeClass('show');
					$($item[j]).addClass('hide');
				} 
				$item[0].style.visibility='visible';
			}
			//this.style.visibility='hidden';
			// $item.hide('slow', function() { 
			// 	$item.remove(); 
				
			// });
		});
	}

			}
		
		//console.log(userArr[userArr.length-1].length);
	}
});

