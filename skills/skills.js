
const skills = [
    {
        skillImage:'https://coursekaro.in/wp-content/uploads/2019/10/ck-javascript.png',
        skillName:'Javascript'
    },
    {
        skillImage:'https://miro.medium.com/max/512/1*zXu2vsYPZ5mqF0tOB7kupA.png',
        skillName:'React'
    },
    {
        skillImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtQZutuVAXi7boyDVdqMC_4xGIHBVaIUT7X8_bCZa6AYItzKGimXQg7rUXoEx-hLCnsaw&usqp=CAU',
        skillName:'Redux'
    },
    {
        skillImage:'https://cdn.iconscout.com/icon/free/png-512/html5-10-569380.png',
        skillName:'HTML5'
    },
    {
        skillImage:'data:image/png;base64,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',
        skillName:'CSS3'
    },
    {
        skillImage:'https://www.mbejda.com/content/images/2015/12/node.png',
        skillName:'Node.js'
    },
    
    {
        skillImage:'https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/expressjs.png',
        skillName:'Express.js'
    },
    
    {
        skillImage:'https://icon2.cleanpng.com/20180402/cjw/kisspng-mongodb-inc-computer-software-business-software-d-bay-leaves-5ac2915d780ea2.2723311115227006374918.jpg',
        skillName:'MongoDB'
    }
    
]


const skill = document.getElementById('skill')

skills.map( info => {
    skill.innerHTML += `<div class=" col col-md-2 col-sm-3 col-4">
    <div><img src=${info.skillImage} style="width:90%;" alt=""></div>
    <div>${info.skillName} </div>
</div>`
})