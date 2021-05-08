

const blogs = [
    {

        blogImage: "../images/js string blog medium.png",
        blogName: 'Important Properties and Methods In Javascript ',
        blogDetail: `Strings are super helpful to store text type data. In JavaScript strings are also object. So , we can use properties and methods of a string type variable as like objects.Let's start`,
        blogLink: 'https://tanzim-tahid02.medium.com/10-most-important-properties-and-methods-of-string-in-javascript-f0641b567b90'
    },
    {
        blogImage: "../images/data type js blog.jpg",
        blogName: 'Data Types in JavaScript For absolute Beginners',
        blogDetail: `Programming languages have variables to holds data . These data may differ for varity of uses and necessity. Today we will learn and discuss about important data types in javascript.`,
        blogLink: 'https://tanzim-tahid02.medium.com/data-types-in-javascript-for-beginners-aa06d8b6ad0f'
    },
    {
        blogImage: "../images/react props blog.jpeg",
        blogName: 'Things you did not know about react.js  props',
        blogDetail: `We all know , in react , props are used to send data from parent component to child component as an attribute. Today we will learn about advanced about props in react.js   `,
        blogLink: 'https://tanzim-tahid02.medium.com/things-you-didnt-know-about-react-props-5c0756e78c25'
    },




]


const blog = document.getElementById('blog')

blogs.map(blogInfo => {
    blog.innerHTML += `
        <div class="col-md-4 col-sm-6 col-12 item ${blogInfo.technology} ">



        <div class="card h-100 bg-dark ">
            <div class="centerItem"> 
                <img src='${blogInfo.blogImage}' class="card-img-top mt-2 p-2" alt="..." style="width:100%;background-color:#2e3135">
            </div>     
        <div class="card-body">
            <h5 class="card-title"> ${blogInfo.blogName} </h5>
            <p class="card-text " style="font-size:1rem"> ${blogInfo.blogDetail}...</p>
        </div>
        <div class="card-footer text-end pt-0 border-none bg-transparent">
            <a href="${blogInfo.blogLink}">
                <button class="sendMessage " style="font-size:1rem">Learn More </button>
            </a>
        </div>
    </div>




           
        </div>
    `
})