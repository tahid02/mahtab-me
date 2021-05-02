

const testimonials = [
    {
        testimonialImage:'https://www.clipartmax.com/png/small/94-947167_standing-man-white-silhouette-in-a-black-rounded-square-silueta-de-persona.png',
        testimonialText:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        testimonialAddress:'Ebony verty , washington'       
    },
    {
        testimonialImage:'https://www.clipartmax.com/png/small/94-947167_standing-man-white-silhouette-in-a-black-rounded-square-silueta-de-persona.png',
        testimonialText:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        testimonialAddress:'licifar'       
    },
    {
        testimonialImage:'https://www.clipartmax.com/png/small/94-947167_standing-man-white-silhouette-in-a-black-rounded-square-silueta-de-persona.png',
        testimonialText:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        testimonialAddress:'jhon weak'       
    },
]

const testimonial = document.getElementById('testimonial')


testimonials.map( card => {
   testimonial.innerHTML +=   `
    <div class="swiper-slide slideAlign " >
        <div class="card">
                    <div class="centerItem testing">
                        <img src=${card.testimonialImage}
                        class="card-img-top  w-25 centerItem " alt="...">
                    </div>
                    <div class="card-body">

                    <p class="card-text text-secondary"> ${card.testimonialText}</p>
                    <div class="name"> ${card.testimonialAddress}</div>
            </div>


        </div>
    </div>   
`
    
})

