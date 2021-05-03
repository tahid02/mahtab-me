
const services = [
    {
        serviceIcon:'fas fa-pencil-ruler',
        serviceName:'Website Design',
        serviceDetails:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ex. Lorem ipsum dolor,sit amet consectetur adipisicing.'
            
    },
    {
        serviceIcon:'fas fa-code ',
        serviceName:'Website Develope',
        serviceDetails:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ex. Lorem ipsum dolor,sit amet consectetur adipisicing.'
            
    },
    {
        serviceIcon:'fas fa-cogs ',
        serviceName:'API Integration',
        serviceDetails:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ex. Lorem ipsum dolor,sit amet consectetur adipisicing.'
            
    }
]

const service = document.getElementById('service')

services.map(data => {
    service.innerHTML += `
    <div class="col-md-4 col-sm-6 col-12 ">
        <div class="">
            <i class="${data.serviceIcon} "></i>
        </div>
        <h2 class="service_name">
            ${data.serviceName}
        </h2>
        <div class="service_detail">
            ${data.serviceDetails}
        </div>
    </div>
    `
})