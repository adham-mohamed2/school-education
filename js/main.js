
let nav = document.querySelector(".navbar-expand-md");
window.addEventListener("scroll" , ()=>{
    if(window.scrollY > 100){
        nav.classList.add("nav-background");
    }
    else{
        nav.classList.remove("nav-background");
    }
})

// ********************************************************************************** strat section testemonis responseve

try{
    var multyply_item_carousel = document.querySelector('#carouselExampleIndicators')

if(window.matchMedia("(min-width:767px)").matches){
    multyply_item_carousel.classList.remove("slide");
    var carousel = new bootstrap.Carousel(multyply_item_carousel, {
        interval: false,
    })
    var carousel_width = $('.carousel-inner')[0].scrollWidth;
    var carousel_item = $('.carousel-item').width();
    let posation = 0;
    let btn_next = document.querySelector(".carousel-control-next");
    let btn_prev = document.querySelector(".carousel-control-prev");

    btn_next.addEventListener("click" , ()=>{
        if(posation < (carousel_width - (carousel_item * 4))){
            console.log("next")
            posation = posation + (carousel_item + 10);
            console.log(carousel_item)
            console.log(carousel_item*2)
            $('.carousel-inner').animate({scrollLeft:posation},600)
        }
        else{
            console.log("eroro")
        }
    })
    btn_prev.addEventListener("click" , ()=>{
        if(posation > 0){
            console.log("prev")
            posation = posation - (carousel_item + 10);
            $('.carousel-inner').animate({scrollLeft:posation},600)
        }
        
    })

}

else{
    multyply_item_carousel.classList.add("slide")
}
}
catch(e){
    console.log(e);
}


// ********************************************************************* contact and send me in email
try{
    let f_name = document.querySelector("#f-name").value;
    let l_name = document.querySelector("#l-name").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;
    let message_body = `first name: ${ f_name} </br> last name: ${l_name}  </br> email: ${email}  </br> message: ${ message}`;
    function emailsend(){
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "aqswdefr1234qqqw2@gmail.com",
            Password : "A9C3081B2C34DDA7F332DCD8313FFA6792C5",
            To : 'aqswdefr1234qqqw2@gmail.com',
            From : "aqswdefr1234qqqw2@gmail.com",
            Subject : "This is the subject",
            Body : message_body,
        }).then(
            message => {
                if(message == 'OK'){
                    swal("success!", "You clicked the button!", "success");
                }
                else{
                    swal("Error!", "You clicked the button!", "Error");
                }
            }
        );
    }
}catch(e){
    console.log(e);
}

// ************************************************************************ get data to about course

try{
    let course = document.querySelectorAll(".see-more");
    course.forEach((item)=>{
        item.addEventListener("click" , show_details);
    })

    let container = [];
    function show_details(){
        let parent = this.parentElement;
        let parent2 = parent.parentElement;
        let name = parent2.querySelector(".name-course3").innerHTML;
        console.log(name)
        let img = parent2.querySelector(".img-course").src;
        console.log(img)
        let proitem = {name , img};
        container.push(proitem);
        localStorage.setItem("course" , JSON.stringify(container))
        window.location = "about-course.html";
    }
}catch(e){
    console.log(e);
}
try{
    function putdata(){
        let name_course = document.querySelector(".title-course");
        let img_course = document.querySelector(".img-course");
        let data = JSON.parse(localStorage.getItem("course"));
        data.map((item)=>{
            name_course.innerHTML = item.name;
            img_course.src=item.img;
        })
    }
    putdata()

    function back(){
    window.location = "courses.html";
    }
}catch(e){
    console.log(e);
}
// ****************************************************************** transation related course
try{
    function scrolll(){
        console.log("hello");
        var left = document.querySelector(".content-carousel");
        left.scrollBy(350 , 0);
    }
    function scrollr(){
        console.log("right")
        var right = document.querySelector(".content-carousel");
        right.scrollBy(-350 , 0);
    }
}catch(e){
    console.log(e);
}
