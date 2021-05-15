
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
        skillImage:'https://i.ibb.co/b32KxzM/png-clipart-redux-react-logo-javascript-dq-purple-violet-thumbnail-removebg-preview.png',
        skillName:'Redux'
    },
    {
        skillImage:'https://cdn.iconscout.com/icon/free/png-512/html5-10-569380.png',
        skillName:'HTML5'
    },
    {
        skillImage:'https://i.ibb.co/smgysFH/css3-cascading-style-sheets-computer-icons-html-emblem-removebg-preview.png',
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
        skillImage:'https://i.ibb.co/0GPw0kG/kisspng-green-product-design-leaf-mongodb-c-driver-libmongoc-5b6d4a45b32675-6903679515338890937338-r.png',
        skillName:'MongoDB'
    }
    
]


const skill = document.getElementById('skill')

skills.map( info => {
    skill.innerHTML += `<div class=" col col-md-2 col-sm-3 col-4" data-aos='zoom-in'>
    <div><img src=${info.skillImage} style="width:90%;" alt=""></div>
    <div>${info.skillName} </div>
</div>`
})