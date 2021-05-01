

const projects = [
    {
        technology:'htmlCss',
        projectImage:"http://p92.com/binaries/content/gallery/p92website/technologies/htmlcssjs-overview.png",
        projectName:'testing',
        projectDetail:'This card has supporting text below as a natural lead-in to additional content.'
       
    },
    {
        technology:'htmlCss',
        projectImage:"http://p92.com/binaries/content/gallery/p92website/technologies/htmlcssjs-overview.png",
        projectName:'testing',
        projectDetail:'This card has supporting text below as a natural lead-in to additional content.'
       
    },
    {
        technology:'javascript',
        projectImage:"http://p92.com/binaries/content/gallery/p92website/technologies/htmlcssjs-overview.png",
        projectName:'testing',
        projectDetail:'This card has supporting text below as a natural lead-in to additional content.'
       
    },
    {
        technology:'node',
        projectImage:"http://p92.com/binaries/content/gallery/p92website/technologies/htmlcssjs-overview.png",
        projectName:'testing',
        projectDetail:'This card has supporting text below as a natural lead-in to additional content.'
       
    },
    {
        technology:'node',
        projectImage:"http://p92.com/binaries/content/gallery/p92website/technologies/htmlcssjs-overview.png",
        projectName:'testing',
        projectDetail:'This card has supporting text below as a natural lead-in to additional content.'
       
    },
    {
        technology:'react',
        projectImage:"http://p92.com/binaries/content/gallery/p92website/technologies/htmlcssjs-overview.png",
        projectName:'testing',
        projectDetail:'This card has supporting text below as a natural lead-in to additional content.'
       
    },
    {
        technology:'javascript',
        projectImage:"http://p92.com/binaries/content/gallery/p92website/technologies/htmlcssjs-overview.png",
        projectName:'testing',
        projectDetail:'This card has supporting text below as a natural lead-in to additional content.'
       
    }
]


const project = document.getElementById('project')

projects.map( projectInfo => {
    project.innerHTML += `
        <div class="col-md-4 col-sm-6 col-12 item ${projectInfo.technology}">

            <div class="card h-100">
                <img src='${projectInfo.projectImage}' class="card-img-top" alt="...">
                    
                <div class="card-body">
                    <h5 class="card-title"> ${projectInfo.projectName} </h5>
                    <p class="card-text"> ${projectInfo.projectDetail}</p>
                </div>
                <div class="card-footer">
                    <button class="btn btn-danger">Live now </button>
                </div>
            </div>
        </div>
    `
})