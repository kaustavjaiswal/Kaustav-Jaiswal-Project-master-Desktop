$(document).ready(function(){

$('#loginBtn').on('click',function()
	{

		var username = $('#usernameTxt').val();
		var password = $('#passwordTxt').val();
		alert(username +'--'+ password);
		CheckValid(username,password);
	});

function CheckValid(a,b)
{
	var flag=0;
	var usersRef = new Firebase('https://luminous-inferno-228.firebaseio.com/');
	usersRef.once('value', function(nameSnapshot) {
  	var val = nameSnapshot.val();
  	console.log(val);
  	$.each(val,function(index,currentValue) 
		{
		  	if(currentValue.firstName==a && currentValue.passWord==b)
		  	{
		  		flag=1;
		  		sessionStorage.clear();
		  		sessionStorage.setItem("UserLoggedOn",a);
		  		location.href="databaseShow.html"
		  		$('#loginBtn').spin(false);
		  		return false;
		  	}
		  	else
		  	{
		  		console.log(currentValue.firstName);
		  		
		  	}
		  	
		});

  	if(flag==0)
  	{
	  		$('#loginBtn').spin(false);
			$(".space p").removeClass("wrong-password")

  	}

});

}

});
	/*	$.ajax({

	url:"autheticationwebserveice url",
	type: "POST",
	data:{"username":a;"password":b},
	success : function(data)
				{
					if(data.success)
					{
						alert('user authtoicatio succesful');
						location.href="home.html";
						localStorage.fname= data.firstName;
					}
				},	


		});*/


	/*$.getJSON('https://luminous-inferno-228.firebaseio.com/',function(data){
	console.log(JSON.stringify(data))
	 ;
		$.each(data,function(index,currentValue) 
		{
		  	if(currentValue.firstName==a && currentValue.passWord==b)
		  	{
		  		location.href="databaseShow.html"
		  		return false;
		  	}
		  	else
		  	{
		  		console.log(currentValue.firstName);
		  		$(".space p").removeClass("wrong-password")
		  		return false;
		  	}
		  	
		});

	});*/