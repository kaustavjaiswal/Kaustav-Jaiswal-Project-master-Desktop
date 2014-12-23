$(document).ready(function()
	{

	var user=sessionStorage.getItem('UserLoggedOn');
	console.log(user);

	$(".name").append(user);

	var usersRef = new Firebase('https://blinding-inferno-4519.firebaseio.com/');
	usersRef.orderByChild("Name").equalTo(user).once("child_added", function(snapshot)
	{

	key=snapshot.key();
	Attendance=snapshot.child('Attendance').val();
	$(".Attendance").append(Attendance);

	Address=snapshot.child('Address').val();
	$(".Address").append(Address);

	Dob=snapshot.child('Dob').val();
	$(".Dob").append(Dob);

	Email=snapshot.child('Email').val();
	$(".Email").append(Email);

	Numbers=snapshot.child('Number').val();
	$(".Phone").append(Numbers);

	FathersName=snapshot.child('FathersName').val();
	$(".FathersName").append(FathersName);

	FeePaid=snapshot.child('FeePaid').val();
	if(FeePaid.localeCompare("Yes")!=-1)
	{
		$(".feesCheck").addClass("fa fa-check-square-o")
	}
	else
	{
		$(".feesCheck").addClass("fa fa-bolt")
	}
	$(".feesCondition").append(FeePaid);


    Gender=snapshot.child('Gender').val();
    $(".Gender").append(Gender);

    var img= $(".avatar1");
	if(Gender.localeCompare("Male")!=-1) 
	{
	img.attr("src", "./students/male.jpg");	
	}
	else
	{
	img.attr("src", "./students/female.jpg");	
	}

    Name=snapshot.child('Name').val();

    Score=snapshot.child('Score').val();
	$(".Score").append(Score);

	});

	/*var userIn = new Firebase('https://blinding-inferno-4519.firebaseio.com/');
	userIn.once('value', function(nameSnapshot) {
  	var val = nameSnapshot.val(key);
  	console.log(val);*/
  		/*$.each(val,function(index,currentValue) 
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
		  	
		});*/

	});