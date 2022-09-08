const phoneBox=document.querySelectorAll('.phone-container');
const sampleBox=document.querySelectorAll('.sample');
let sampleTipes=[];
let activeSamples=[];
let activePhone=[];
let count=0;
let letcount=0;
let clickCount=0;
let actions=[];
let activeSamplesBLock=[];
let unActiveSamplesBlock=[];






document.querySelector('nav').addEventListener('click',event=>{

if(event.target.tagName!=='INPUT')return false;

clickCount++;

phoneBox.forEach(phone=>{

    phone.classList.add('hide');
})

    unActiveSamplesBlock=[];

    sampleTipes=[];

    activeSamples=[];
    
    activePhone=[];

    activeSamplesBLock=[];

    CheckSamples(activeSamples);
   

    if(event.target.checked){
        
    if(activeSamples.length==1){

        phoneBox.forEach(elem=>{

            if(elem.dataset['tipe'].includes(event.target.dataset['tipe'])){

                elem.classList.remove('hide');

            }
        })

        actions.unshift(activePhone);

        
      }

      else{

            var lastAction=activeSamples[(activeSamples.length)-1].classList.toString().split(' ');

            for (let i = 0; i < activeSamples.length-1; i++) 
            {
                var allAction=activeSamples[i].classList.toString().split(' ');

                if(lastAction[1]!=allAction[1]){

                    count++;
                }

            }

            if(count==0){

                phoneBox.forEach(phone=>{

                    for (let i = 0; i < activeSamples.length; i++) {
                        
                        if (phone.dataset['tipe'].includes(activeSamples[i].dataset['tipe'])) {

                            letcount++;
                        }
                        
                    }

                    if(letcount!=0){

                        phone.classList.remove('hide');

                    }

                    letcount=0;
                })
                actions.unshift(activePhone);
                

                

               
            }

            else
            {
                phoneBox.forEach(phone=>{

                    if(sampleTipes.length==2){

                        for (let i = 0; i < activeSamples.length; i++) {
                    
                            for (let k = 0; k < activeSamples.length; k++) {
            
                                if(i==k) continue;    

                                var firstAction=activeSamples[i].classList.toString().split(' ');

                                var secondAction=activeSamples[k].classList.toString().split(' ');

                                if(firstAction[1]==secondAction[1]){

                                    continue;
                                }
                                else{
                                   
                                    if((phone.dataset['tipe'].includes(activeSamples[i].dataset['tipe']))&&(phone.dataset['tipe'].includes(activeSamples[k].dataset['tipe'])))
                                    {
       
                                       phone.classList.remove('hide');
       
                                    }
                                }
                            }
                        }

                        actions.unshift(activePhone);
                       
                    }

                    if(sampleTipes.length==3)
                    {

                        for (let i = 0; i < activeSamples.length; i++) {
                    
                            for (let k = 0; k < activeSamples.length; k++) {
            
                                for (let j = 0; j < activeSamples.length; j++) {
                                   
                                    if(i==k && i==j && k==j) continue;

                                var firstAction=activeSamples[i].classList.toString().split(' ');

                                var secondAction=activeSamples[k].classList.toString().split(' ');

                                var thirdAction=activeSamples[j].classList.toString().split(' ');

                                if((firstAction[1]==secondAction[1]) || (firstAction[1]==thirdAction[1]) || (secondAction[1]==thirdAction[1])){

                                    continue;
                                }

                                else{
                                   
                                        if((phone.dataset['tipe'].includes(activeSamples[i].dataset['tipe']))&&(phone.dataset['tipe'].includes(activeSamples[k].dataset['tipe']))&& (phone.dataset['tipe'].includes(activeSamples[j].dataset['tipe'])))
                                        {
                                            phone.classList.remove('hide');
                                        }

                                    }
                                }     
                            }  
                        }
                        actions.unshift(activePhone);
                    }

                    if(sampleTipes.length==4){

                        for (let i = 0; i < activeSamples.length; i++) {
                    
                            for (let k = 0; k < activeSamples.length; k++) {
            
                                for (let j = 0; j < activeSamples.length; j++) {
                                   
                                  for (let n = 0; n < activeSamples.length; n++) {
                                    
                                    if(i==k && i==j && k==j) continue;

                                    var firstAction=activeSamples[i].classList.toString().split(' ');

                                    var secondAction=activeSamples[k].classList.toString().split(' ');

                                    var thirdAction=activeSamples[j].classList.toString().split(' ');

                                    var fourthAction=activeSamples[n].classList.toString().split(' ');
    
                                    if((firstAction[1]==secondAction[1]) || (firstAction[1]==thirdAction[1]) || (firstAction[1]==fourthAction[1]) || (secondAction[1]==thirdAction[1]) || (secondAction[1]==fourthAction[1]) || (thirdAction[1]==fourthAction[1])){
                                        
                                        continue;

                                    }
    
                                    else{
                                       
                                        if((phone.dataset['tipe'].includes(activeSamples[i].dataset['tipe']))&&(phone.dataset['tipe'].includes(activeSamples[k].dataset['tipe']))&& (phone.dataset['tipe'].includes(activeSamples[j].dataset['tipe'])) && (phone.dataset['tipe'].includes(activeSamples[n].dataset['tipe'])))
                                        
                                        {
                                            
                                            phone.classList.remove('hide');
                                       
                                        }
                                    }  
                                }
                            }
                                    
                        }
                            
                    }
                    actions.unshift(activePhone);

                    
                }
            })
        }


    }

  
    // blockSamples();

}
else{
        



}

})

function CheckSamples(array){

    sampleBox.forEach(sample=>{

        if(sample.checked){

            array.unshift(sample);

        }

    })

    for (let i = 0; i < array.length; i++) {
    
     let curentTipes=array[i].classList.toString().split(' ');

     if(!sampleTipes.includes(curentTipes[1])){
        sampleTipes.unshift(curentTipes[1]);
     }
        
     }

}

function CheckActivePhones(){

    activePhone=[];
    phoneBox.forEach(phone=>{
        if (!phone.classList.contains('hide')) {
            activePhone.unshift(phone);
        }
    })
    for (let i = 0; i < activePhone.length; i++) {
      console.log(activePhone[i].dataset['tipe']);  
        
    } 
}


function blockSamples(){

sampleBox.forEach(sample=>{

    if(sample.checked){

       activeSamplesBLock.unshift(sample);
    }
    else{

        unActiveSamplesBlock.unshift(sample);
    }
    sample.dis
})

console.log(unActiveSamplesBlock.length);
console.log(activeSamplesBLock.length);

phoneBox.forEach(phone=>{

    for (let i = 0; i < unActiveSamplesBlock.length; i++) {

        console.log(unActiveSamplesBlock[i].dataset['tipe']);


        for (let k = 0; k < activeSamplesBLock.length; k++) {
            
            if((phone.dataset['tipe'].includes(activeSamplesBLock[k].dataset['tipe']) && phone.dataset['tipe'].includes(unActiveSamplesBlock[i].dataset['tipe'])) 
            || (activeSamplesBLock[k].classList.toString().split(' ')[1] == unActiveSamplesBlock[i].classList.toString().split(' ')[1])){
                count++;

            }

            console.log('_____________________________________________');

            console.log(phone.dataset['tipe'].includes(activeSamplesBLock[k].dataset['tipe']) + " " +phone.dataset['tipe']);

            console.log(phone.dataset['tipe'].includes(unActiveSamplesBlock[i].dataset['tipe']) + " " +phone.dataset['tipe']);
            
            console.log((phone.dataset['tipe'].includes(activeSamplesBLock[k].dataset['tipe'])) && phone.dataset['tipe'].includes(unActiveSamplesBlock[i].dataset['tipe']));

            console.log((activeSamplesBLock[k].classList.toString().split(' ')[1] == unActiveSamplesBlock[i].classList.toString().split(' ')[1]));

            console.log(activeSamplesBLock[k].dataset['tipe']);
            console.log(unActiveSamplesBlock[i].dataset['tipe']);

            console.log(activeSamplesBLock[k].classList.toString().split(' ')[1]);

            console.log(unActiveSamplesBlock[i].classList.toString().split(' ')[1]);
            console.log('_____________________________________________');
            
        }

        if(count!=0){
            unActiveSamplesBlock[i].disabled=false;
        }
        else{
            unActiveSamplesBlock[i].disabled=true;
        }

        count=0;
        
    }


})
}






 
