

const contacts = [
    {
        contactIcon:"fa fa-mobile-alt",
        contactType:'call me on',
        contactBy:'+88 01848378134'
    },
    {
        contactIcon:"fa fa-envelope",
        contactType:'email me ',
        contactBy:'tanzim1463@gmail.com '
    },
    {
        contactIcon:"fa fa-map-marker-alt",
        contactType:'visit office ',
        contactBy:'Mirpur, Dhaka , Bangladesh '
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