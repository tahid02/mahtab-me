function sendmail(){
       
    var name = $('#Name').val();
    var email = $('#Sender').val();
    var subject = $('#Subject').val();
var message = $('#Message').val();

    // var body = $('#body').val();

    var Body='Name: '+name+'<br>Email: '+email+'<br>Subject: '+subject+'<br>Message: '+message;
    //console.log(name, phone, email, message);

    Email.send({
SecureToken:"fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
        To: 'tanzim1463@gmail.com',
        From: email,
        Subject: "New message on portfolio contact from "+name,
        Body: Body
    }).then(
        message =>{
            //console.log (message);
            if(message=='OK'){
            alert('Your mail has been send. Thank you for connecting.');
            $('#myForm')[0].reset();
            }
            else{
                console.error (message);
                alert('There is error at sending message. ');
                
            }

        }
    );



}
