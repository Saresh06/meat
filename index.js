let add = document.getElementsByClassName("nav_add")
let pic = document.getElementsByClassName("img")
let black = document.getElementsByClassName("home_p")
let p_click = document.getElementsByClassName("item_name")
let about_list = document.getElementsByClassName("about_bottom")
let pro_det=document.getElementById('pro_det'),
change=document.getElementsByClassName("change")

// console.log(add);
console.log(window.open)
function map() {
    window.open("https://maps.app.goo.gl/UjkEiZE757qraeV56", "_blank")



}


a = 0;
if(a<=0){
    a=0
}
function img_for() {
    a++;
if(a>=3){
    a=3
}
    switch (a) {
        case 0:
             pic[0].style = 'left:0'
            black[0].style = 'background-color:black'
            black[1].style = 'background-color:lightgrey'
            black[2].style = 'background-color:lightgrey'
            black[3].style = 'background-color:lightgrey'
            pic[3].style = 'left:-120%'
             pic[1].style = 'left:-120%'
            pic[2].style = 'left:-120%'
            console.log(a);
        case 1:
            pic[1].style = 'left:0'
            black[1].style = 'background-color:black'
            black[0].style = 'background-color:lightgrey'
              black[2].style = 'background-color:lightgrey'
               black[3].style = 'background-color:lightgrey'
            pic[0].style = 'left:-120%'
            console.log(a);

            
            break
        case 2:
            console.log(a)
            pic[2].style = 'left:0'
            black[2].style = 'background-color:black'
            black[0].style = 'background-color:lightgrey'
            black[1].style = 'background-color:lightgrey'
              black[3].style = 'background-color:lightgrey'
            pic[0].style = 'left:-120%'
            pic[1].style = 'left:-120%'


            break



        default:
            console.log(a)
            pic[3].style = 'left:0'
            black[3].style = 'background-color:black'
            black[2].style = 'background-color:lightgrey'
            black[0].style = 'background-color:lightgrey'
            black[1].style = 'background-color:lightgrey'
            pic[0].style = 'left:-120%'
            pic[1].style = 'left:-120%'
            pic[2].style = 'left:-120%'
            
            break

    }


}

// let b=2

function img_back() {
        a--
        if(a<=0){
    a=0
}
      switch (a) {
        
        case 2:
            pic[2].style = 'left:0'
            black[2].style = 'background-color:black'
            black[0].style = 'background-color:lightgrey'
            black[1].style = 'background-color:lightgrey'
            black[3].style = 'background-color:lightgrey'
            pic[0].style = 'left:-120%'
             pic[3].style = 'left:-120%'
            pic[1].style = 'left:-120%'
            console.log(a);

            
            break

        case 1:
            pic[1].style = 'left:0'
            black[1].style = 'background-color:black'
            black[2].style = 'background-color:lightgrey'
            black[3].style = 'background-color:lightgrey'
            black[0].style = 'background-color:lightgrey'
            pic[0].style = 'left:-120%'
            pic[3].style = 'left:-120%'
            pic[2].style = 'left:-120%'
            console.log(a);

            
            break
        default:
             pic[0].style = 'left:0'
            black[0].style = 'background-color:black'
            black[2].style = 'background-color:lightgrey'
            black[3].style = 'background-color:lightgrey'
            black[1].style = 'background-color:lightgrey'
            pic[1].style = 'left:-120%'
            pic[3].style = 'left:-120%'
            pic[2].style = 'left:-120%'
            b=0
            console.log(a);
            break
      }
      


    }


function item(x){
    let given=x.innerText;
    console.log(given)
    switch(given){
        
        case 'Chicken':
            about_list[0].style= "transform: translateX(0%)";
             about_list[1].style= "transform: translateX(-120%)";
              about_list[4].style= "transform: translateX(-120%)";
               about_list[2].style= "transform: translateX(-120%)";
                about_list[3].style= "transform: translateX(-120%)";
                pro_det.innerText='Chicken Meat'
                change[0].innerText='Chicken'
                 change[1].innerText='Chicken'
                  change[2].innerText='Chicken'
                   change[3].innerText='Chicken'
                    change[4].innerText='Chicken'
                     
            
            break
        case 'Goat':
               console.log(about_list[1])
                about_list[1].style= "transform: translateX(0%)";
             about_list[0].style= "transform: translateX(-120%)";
              about_list[4].style= "transform: translateX(-120%)";
               about_list[2].style= "transform: translateX(-120%)";
                about_list[3].style= "transform: translateX(-120%)";
                pro_det.innerText='Goat Meat'
                 change[0].innerText='Goat'
                  change[1].innerText='Goat'
                   change[2].innerText='Goat'
                    change[3].innerText='Goat'
                   change[4].innerText='Goat'
            
            break
        case 'Cow':
              console.log(about_list[2])
               about_list[2].style= "transform: translateX(0%)";
             about_list[1].style= "transform: translateX(-120%)";
              about_list[4].style= "transform: translateX(-120%)";
               about_list[0].style= "transform: translateX(-120%)";
                about_list[3].style= "transform: translateX(-120%)";
                  pro_det.innerText='Cow Meat'
                  change[0].innerText='Cow '
                    change[1].innerText='Cow '
            
                      change[2].innerText='Cow '
                       change[3].innerText='Cow '
                    change[4].innerText='Cow '
            
            
            break
        case 'Pig':
               console.log(about_list[3])
                about_list[3].style= "transform: translateX(0%)";
             about_list[1].style= "transform: translateX(-120%)";
              about_list[4].style= "transform: translateX(-120%)";
               about_list[2].style= "transform: translateX(-120%)";
                about_list[0].style= "transform: translateX(-120%)";
                 pro_det.innerText='Pig Meat'
                   change[0].innerText='Pig'
                     change[1].innerText='Pig'
            
                       change[2].innerText='Pig'
                       change[3].innerText='Pig'
            
                       change[4].innerText='Pig'
            
            
            
            break
        default:
                console.log(about_list[4])
                 about_list[4].style= "transform: translateX(0%)";
             about_list[1].style= "transform: translateX(-120%)";
              about_list[0].style= "transform: translateX(-120%)";
               about_list[2].style= "transform: translateX(-120%)";
                about_list[3].style= "transform: translateX(-120%)";
                 pro_det.innerText='Fish Meat'
                  change[0].innerText='Fish'
                  change[1].innerText='Fish'
                  change[2].innerText='Fish'
                  change[3].innerText='Fish'
                  change[4].innerText='Fish'
            
            
            break





    }
  
   
}


