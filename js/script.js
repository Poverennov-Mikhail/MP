window.addEventListener('load', function(){
    
    let btn_skill = document.querySelector('#skill')
    let btn_about = document.querySelector('#about_me');
    let btn_exp_work= document.querySelector('#exp_work')
    let btn_additional = document.querySelector('#btn_additional')
    
//показывает скрытый раздел скилов
    btn_skill.addEventListener('click', function skill(){
        document.getElementById("main_skill").style.display = "";
        document.getElementById("div_about").style.display = "none";
        document.getElementById("additional").style.display = "none";
        document.getElementById("ex_work").style.display = "none";   
    })

//меняет стиль у кнопки "навыки"
    btn_skill.addEventListener('click', function skill_active(){
        btn_skill.classList.add('active_btn');
        btn_about.classList.remove('active_btn');
        btn_exp_work.classList.remove('active_btn');
        btn_additional.classList.remove('active_btn');
    })

//показывает скрытый раздел обо мне
    btn_about.addEventListener('click', function about_me(){
        document.getElementById("div_about").style.display = "";     
        document.getElementById("main_skill").style.display = "none";
        document.getElementById("additional").style.display = "none";
        document.getElementById("ex_work").style.display = "none";
    })

//меняет стиль у кнопки "обо мне"
    btn_about.addEventListener('click', function skill_active(){
        btn_skill.classList.remove('active_btn');
        btn_about.classList.add('active_btn');
        btn_exp_work.classList.remove('active_btn');
        btn_additional.classList.remove('active_btn');
    }) 

//показывает скрытый раздел "Опыт работы"
    btn_exp_work.addEventListener('click', function additional(){
        document.getElementById("ex_work").style.display = "";
        document.getElementById("additional").style.display = "none";
        document.getElementById("div_about").style.display = "none";
        document.getElementById("main_skill").style.display = "none";

    })

//меняет стиль у кнопки "Опыт работы"
    btn_exp_work.addEventListener('click', function about_active(){
        btn_skill.classList.remove('active_btn');
        btn_about.classList.remove('active_btn');
        btn_exp_work.classList.add('active_btn');
        btn_additional.classList.remove('active_btn');
    })
    
//показывает скрытый раздел "Дополнительно"    
    btn_additional.addEventListener('click', function additional(){
        document.getElementById("additional").style.display = "";
        document.getElementById("div_about").style.display = "none";
        document.getElementById("main_skill").style.display = "none";
        document.getElementById("ex_work").style.display = "none";
    })

//меняет стиль у кнопки "Дополнительно"
    btn_additional.addEventListener('click', function about_active(){
        btn_skill.classList.remove('active_btn');
        btn_about.classList.remove('active_btn');
        btn_exp_work.classList.remove('active_btn');
        btn_additional.classList.add('active_btn');
    })


});