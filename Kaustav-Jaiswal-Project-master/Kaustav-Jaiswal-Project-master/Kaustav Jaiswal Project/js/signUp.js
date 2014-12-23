$(document).ready(function(){

	var user=sessionStorage.getItem('userNameChosen');
	console.log(user);
	$(window).load(function(){
        $('#myModal').modal('show');
     $('#name').append(user);
    });

	$( "#chosenDob" ).datepicker({
      changeMonth: true,//this option for allowing user to select month
      changeYear: true, //this option for allowing user to select from year range
      dateFormat: "dd/mm/yy",
      appendText: "(dd/mm/yyyy)"
    });

    $('#doneBtn').on('click',function()
{
	var flag=0;
	$('#chosenAddress').removeClass("unfilled")
	$('#chosenEmail').removeClass("unfilled")
	$('#chosenDob').removeClass("unfilled")
	$('#chosenFathersName').removeClass("unfilled")
	$('#chosenPhone').removeClass("unfilled")
	var Address = $('#chosenAddress').val();
	var FathersName = $('#chosenFathersName').val();
	var Dob = $('#chosenDob').val();
	var Email = $('#chosenEmail').val();
	var Phone = $('#chosenPhone').val();

	if ($('#chosenAddress').val()=="")
	{
		flag=1;
		$('#chosenAddress').addClass("unfilled")

	};
		if ($('#chosenEmail').val()=="")
	{
		flag=1;
		$('#chosenEmail').addClass("unfilled")

	};
		if ($('#chosenDob').val()=="")
	{
		flag=1;
		$('#chosenFathersName').addClass("unfilled")

	};
		if ($('#chosenPhone').val()=="" || $('#chosenPhone').val().length<10)
	{
		flag=1;
		$('#chosenPhone').addClass("unfilled")
		$('#chosenPhone').attr("placeholder","Please Enter a valid 10 digit Mobile Number")


	};
		if ($('#chosenAddress').val()=="")
	{
		flag=1;
		$('#chosenAddress').addClass("unfilled")


	};
	if(flag==1)
	{
		alert("Please Check the required fields. Highlighted in Red")
	}
	/*CheckValid(username,password);*/
});

/*function CheckValid(a,b)
{
	var flag=0;
	var usersRef = new Firebase('https://luminous-inferno-228.firebaseio.com/');
	usersRef.once('value', function(nameSnapshot) {
  	var val = nameSnapshot.val();
  	console.log(val);
  	$.each(val,function(index,currentValue) 
		{
		  	if(currentValue.firstName==a)
		  	{
		  		flag=1;
		  		$('#signUpBtn').spin(false);
		  		alert('This username is already taken');
		  		$(".space1 p").removeClass("wrong-password")
		  		return false;
		  	}
		  	
		});
  			if (flag==0) 
  		{
  			UploadData(a,b);
  			sessionStorage.setItem("userNameChosen",a);
  			$('#signUpBtn').spin(false);
  			alert('Sign Up Successfully Done');
  			location.href="signUpForm.html"
  		}

});
}
function UploadData(username,password)
{	
	var usersRefs = new Firebase('https://luminous-inferno-228.firebaseio.com/');
	usersRefs.push({ 'firstName': username, 'passWord': password });
}*/
});
