
const services = [
    {
        serviceIcon:'fas fa-chart-line',
        serviceName:'Graphic Design',
        serviceDetails:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ex. Lorem ipsum dolor,sit amet consectetur adipisicing.'
            
    },
    {
        serviceIcon:'fas fa-chart-line',
        serviceName:'Graphic Design',
        serviceDetails:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ex. Lorem ipsum dolor,sit amet consectetur adipisicing.'
            
    },
    {
        serviceIcon:'fas fa-chart-line',
        serviceName:'Graphic Design',
        serviceDetails:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ex. Lorem ipsum dolor,sit amet consectetur adipisicing.'
            
    },
    {
        serviceIcon:'fas fa-chart-line',
        serviceName:'Graphic Design',
        serviceDetails:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ex. Lorem ipsum dolor,sit amet consectetur adipisicing.'
            
    }
 
]

const service = document.getElementById('service')

services.map(data => {
    service.innerHTML += `
    <div class="col-md-4 col-sm-6 col-12 ">
        <div class="">
            <i class="${data.serviceIcon} text-light"></i>
        </div>
        <h1 class="service_name">
            ${data.serviceName}
        </h1>
        <div class="service_detail">
            ${data.serviceDetails}
        </div>
    </div>
    `
})