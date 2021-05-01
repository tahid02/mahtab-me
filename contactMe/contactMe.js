

const contacts = [
    {
        contactIcon:"fa fa-mobile-alt",
        contactType:'call us on',
        contactBy:'+90893489347849'
    },
    {
        contactIcon:"fa fa-envelope",
        contactType:'email us ',
        contactBy:'example@gmail.com '
    },
    {
        contactIcon:"fa fa-map-marker-alt",
        contactType:'visit office ',
        contactBy:'203 baker street, london ,UK '
    },
]

const contact = document.getElementById('contact');

contacts.map( data => {
    contact.innerHTML += `
        <div class="col-md-4 col-sm-4 col-12 centerItem">
            <div class="text-center">
                <i class='${data.contactIcon}'></i>
                <h4>${data.contactType}</h4>
                <p> ${data.contactBy} </p>
            </div>
        </div>
    `
})