
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
        skillImage:'https://e7.pngegg.com/pngimages/413/852/png-clipart-redux-react-logo-javascript-dq-purple-violet-thumbnail.png',
        skillName:'Redux'
    },
    {
        skillImage:'https://cdn.iconscout.com/icon/free/png-512/html5-10-569380.png',
        skillName:'HTML5'
    },
    {
        skillImage:'https://p7.hiclipart.com/preview/653/527/681/css3-cascading-style-sheets-computer-icons-html-emblem.jpg',
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
        skillImage:'https://icon2.cleanpng.com/20180810/kro/kisspng-green-product-design-leaf-mongodb-c-driver-libmongoc-5b6d4a45b32675.6903679515338890937338.jpg',
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