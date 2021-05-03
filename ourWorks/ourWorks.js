

const projects = [
    {
        technology:'htmlCss',
        projectImage:"https://t3.ftcdn.net/jpg/02/00/09/66/360_F_200096607_ddMpEWJW7MI9JL3JKLX0NZefAPat8a7b.jpg",
        projectName:'testing',
        projectDetail:'This card has supporting text below as a natural lead-in to additional content.supporting text below as a natural lead-in to additional content'
       
    },
    {
        technology:'react',
        projectImage:"https://t3.ftcdn.net/jpg/02/00/09/66/360_F_200096607_ddMpEWJW7MI9JL3JKLX0NZefAPat8a7b.jpg",
        projectName:'testing',
        projectDetail:'This card has supporting text below as a natural lead-in to additional content.supporting text below as a natural lead-in to additional content'
       
    },
    {
        technology:'javascript',
        projectImage:"https://t3.ftcdn.net/jpg/02/00/09/66/360_F_200096607_ddMpEWJW7MI9JL3JKLX0NZefAPat8a7b.jpg",
        projectName:'testing',
        projectDetail:'This card has supporting text below as a natural lead-in to additional content.supporting text below as a natural lead-in to additional content'
       
    },
   
  
   
    
]


const project = document.getElementById('project')

projects.map( projectInfo => {
    project.innerHTML += `
        <div class="col-md-4 col-sm-6 col-12 item ${projectInfo.technology} ">

            <div class="card h-100 bg-dark ">
                <div class="centerItem"> 
                    <img src='${projectInfo.projectImage}' class="card-img-top mt-2" alt="..." style="width:95%">
               </div>     
                <div class="card-body">
                    <h5 class="card-title"> ${projectInfo.projectName} </h5>
                    <p class="card-text"> ${projectInfo.projectDetail}</p>
                </div>
                <div class="card-footer">
                    <button class="btn btn-danger shadow-lg">Live now  </button>
                    <button class="btn btn-danger">github </button>
                </div>
            </div>
        </div>
    `
})