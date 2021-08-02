$(document).ready(()=>{
    //Slider
    if(window.location.href.indexOf('index') > -1){
         $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            pager: false
        });
    }
   

    //Posts
    if(window.location.href.indexOf('index') > -1){
        let posts = [
            {
                title:  "Prueba de título 1",
                date: moment().format("MMMM Do YY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sequi ab quaerat. Sunt dolore earum placeat esse vel natus atque odit, praesentium omnis, architecto obcaecati tempora voluptatum neque, dolorem harum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sequi ab quaerat.'
            },
            {
                title:  "Prueba de título 2",
                date: moment().format("MMMM Do YY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sequi ab quaerat. Sunt dolore earum placeat esse vel natus atque odit, praesentium omnis, architecto obcaecati tempora voluptatum neque, dolorem harum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sequi ab quaerat.'
            },
            {
                title:  "Prueba de título 3",
                date: moment().format("MMMM Do YY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sequi ab quaerat. Sunt dolore earum placeat esse vel natus atque odit, praesentium omnis, architecto obcaecati tempora voluptatum neque, dolorem harum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sequi ab quaerat.'
            },
            {
                title:  "Prueba de título 4",
                date: moment().format("MMMM Do YY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sequi ab quaerat. Sunt dolore earum placeat esse vel natus atque odit, praesentium omnis, architecto obcaecati tempora voluptatum neque, dolorem harum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sequi ab quaerat.'
            }
        ];
        posts.forEach((item, index)=>{
            let post = `
            <article>
            <h2>${item.title}</h2>
            <span>${item.date}</span>
            <p>
            ${item.content}
            </p>
            <button>Leer Más</button>
            </article>
            `;

            $("#posts").append(post);
        });
    }

        

    //Selector de temas
    let theme = $("#theme");
    $(".to-green").click(()=>{
        theme.attr("href", "css/green.css");
    });
    $(".to-red").click(()=>{
        theme.attr("href", "css/red.css");
    });
    $(".to-blue").click(()=>{
        theme.attr("href", "css/blue.css");
    });

    //Scroll arriba de la web
    $(".subir").click(()=>{
        $("html, body").animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    //Login falso
    $("form").submit(function(){
        let form_name = $("#form_name").val();
        localStorage.setItem("form_name", form_name)
    });

    let form_name = localStorage.getItem("form_name")

    if(form_name != null && form_name != "undefined"){
        let sidebar_p = $("#sidebar p")
        sidebar_p.html("<strong>Bienvenido, "+form_name+"</strong>")
        sidebar_p.append("<a href='#' class='logout'>Cerrar sesión</a>")
        $("form").hide()
        $(".logout").click(function(){
            localStorage.clear()
            location.reload()
        })
    }
    
    //Acordeon
    if(window.location.href.indexOf("about") > -1){
        $("#acordeon").accordion()
    }

    //Reloj
    if(window.location.href.indexOf('reloj')){
        setInterval(function(){
            let reloj = moment().format("hh:mm:ss")
            $("#reloj").html(reloj)
        }, 1000)
        
    }
});