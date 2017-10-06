/*function which reset form after saving to table*/
function resetForm() {
	var form=document.getElementById('form');
	form.reset();
}

/*function which check dublicates with same phone or/and email*/
function checkDublicates(p,e) {
	for (var i = 0; i < userArr.length; i++) {
		if((userArr[i].phone.toLowerCase()==p.toLowerCase()) ||
			(userArr[i].email.toLowerCase()==e.toLowerCase())) {
			return true;
		}
	}
	return false;
}

/*function which change visibility data when onclick on tr*/
function changeVisibility() {
	var tr=document.querySelectorAll('tr.data');
	for (i = 0; i < tr.length; i++) {
		tr[i].onclick= (function () {
			var index=this.getAttribute("index");
			userArr[index].changeDataVisibility();
			var $item = $(this.childNodes);
			for(var j=1;j<$item.length;j++) {
				$item[0].style.visibility='visible';

				if(userArr[index].isDataVisible==false) {
					$($item[j]).hide();
				}
				else {
					$($item[j]).show();
				} 
			}
		});
	}
}

/*function which save to table user data if all is ok*/
function toTable(e) {
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
			var newInstanses=new User(name,sex,date,address,phone,email,true);
			userArr.push(newInstanses);
			userArr[userArr.length-1].addUser();
			resetForm();
			changeVisibility();
		}
	}
}
/*click event when saving data to table*/
$('input[type="submit"]').click(function (e) {
	toTable(e);
});