
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


// last payment process 

let app_img=document.getElementsByClassName('img'),



button=document.getElementById('continueBtn'),

form=document.getElementById('payForm'),


select_name=" ",

bill_amount=localStorage.getItem("billAmount") || 0;
console.log('img:',app_img)
console.log('button:',button)
console.log('form:',form)
console.log('bill',bill_amount)


function showing(img){
     for (let i = 0; i < app_img.length; i++) {
        app_img[i].classList.remove('selected_img');
    }

    if (img=='Gpay'){
        app_img[0].classList.add('selected_img')
       
    }

    else if(img=='Paytem'){
        app_img[2].classList.add('selected_img')
       
    }
      else if(img=='PhonePe'){
        app_img[1].classList.add('selected_img')
       
    }

    else{
         app_img[3].classList.add('selected_img')
        
    }



    select_name=img
    console.log(img)
    console.log(select_name)

    button.disabled=false
}


function Continue(){

    form.style="top:30%;transition:all 1s"
   
    document.getElementById('welcome').innerText=`${select_name}`

    document.getElementById('existamount').value=`₹ ${bill_amount}`

}


