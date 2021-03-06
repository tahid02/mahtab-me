

const projects = [
    {
        technology: 'htmlCss',
        projectImage: "https://i.ibb.co/9TkMNTK/car-rental.png",
        projectName: 'CAR RENTAL',
        projectDetail: `A platform where one can easily rent cars .

        <b>technologies:</b> bootstrap, react.js , node.js , express.js , mongodb , firebase authentication .`,
        githubLink:'https://github.com/tahid02/car-rental-client',
        liveSite:'https://car-rental-site.web.app/',
        projectAOS:'slide-left'
    },
    {
        technology: 'react',
        projectImage: "https://i.ibb.co/gtc7R1L/eshop-image.png",
        projectName: 'E-SHOP',
        projectDetail: `An e-commerce site to buy daily commodities       
        <b>technologies:</b> bootstrap , react , express.js, mongodb , firebase authentication , stripe payment.`,
        githubLink:'https://github.com/tahid02/e-shop-client',
        liveSite:'https://github.com/tahid02/e-shop-client',
        projectAOS:'zoom-in'
 
    },
    {
        technology: 'javascript',
        projectImage: "https://raw.githubusercontent.com/ProgrammingHero1/urban-riders/main/screenhots/PNG/1%20Home.png",
        projectName: 'SECURE-RIDERS',
        projectDetail: `A web app provides ride sharing services.        
        <b>technologies:</b> bootstrap , react , firebase authentication. google map.`,
        githubLink:'https://github.com/tahid02/secure-rider',
        liveSite:'https://github.com/tahid02/secure-rider',
        projectAOS:'slide-right'

    },




]


const project = document.getElementById('project')

projects.map(projectInfo => {
    project.innerHTML += `
        <div class="col-md-4 col-sm-6 col-12 item ${projectInfo.technology} " data-aos="${projectInfo.projectAOS}">

            <div class="card h-100 bg-dark ">
                <div class="centerItem"> 
                    <img src='${projectInfo.projectImage}' class="card-img-top mt-2 p-2" alt="..." style="width:100%;background-color:#2e3135">
               </div>     
                <div class="card-body">
                    <h5 class="card-title"> ${projectInfo.projectName} </h5>
                    <p class="card-text " style="font-size:1rem"> ${projectInfo.projectDetail}</p>
                </div>
                <div class="card-footer">
                <a href="${projectInfo.githubLink}">
                    <span><i class="fab fa-github text-light "></i></span>
                </a>   
                <a href="${projectInfo.liveSite}">
                    <span><i class="fas fa-external-link-alt text-light " style="font-size:1.7rem"></i></span>
                </a>
                </div>
            </div>
        </div>
    `
})