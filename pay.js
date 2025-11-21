
function show(a){
    label=document.querySelector(`label[for=${a.id}]`).innerText
    console.log(label)
    img=document.querySelectorAll('.amount img')

    icon=document.querySelector('.online i')

    if (label=='Card payment'){
       
            icon.style='animation-name:down'
            img.forEach(imgs => {
            imgs.style.display = 'unset';


        });
    

       
    }
    else{
          icon.style='animation-name:round1'
        
            img.forEach(imgs => {
            imgs.style.display = 'none';
        });
    }

}

