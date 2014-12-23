	$('#myTab a').click(function (e) 
	{
  e.preventDefault();
  $(this).tab('show');
})

 $('#loginB')
    .click(function () {
        var btn = $(this)
        btn.button('loading')
        setTimeout(function () {
            btn.button('reset')
        }, 3000)
    });

     $('#loginBtn')
    .click(function () {
        var btn = $(this)
        btn.spin('small','red');
    });



    $('#signUp')
    .click(function () {
        var btn = $(this)
        btn.button('loading')
        setTimeout(function () {
            btn.button('reset')
        }, 3000)
    });
    $('#goBack')
    .click(function () {
        var btn = $(this)
        btn.button('loading')
        setTimeout(function () {
            btn.button('reset')
        }, 3000)
    });

   $('.linkPause')
    .click(function (e) {
    	e.preventDefault();
        setTimeout(function () {
        	location.href="studentData.html"
        }, 3000)
    });

    $("#loginBox").keyup(function(event){
    if(event.keyCode == 13){
        $("#loginBtn").click();
    }
});