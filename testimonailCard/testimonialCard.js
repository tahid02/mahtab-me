

const testimonials = [
    {
        testimonialImage:'https://i.ibb.co/6wz2j8z/Ellipse-3.png',
        testimonialText:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        testimonialAddress:'Ebony verty , washington'       
    },
    {
        testimonialImage:'https://i.ibb.co/hKcDBtC/Ellipse-2.png',
        testimonialText:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        testimonialAddress:'licifar'       
    },
    {
        testimonialImage:'https://i.ibb.co/DzkfTxS/Ellipse-1.png',
        testimonialText:"Some quick example text to build on the card title and make up the bulk of the card's content.",
        testimonialAddress:'jhon weak'       
    },
]

const testimonial = document.getElementById('testimonial')


testimonials.map( card => {
   testimonial.innerHTML +=   `
    <div class="swiper-slide slideAlign " >
        <div class="card bg-transparent ">
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

