const phoneBox=document.querySelectorAll('.phone-container');
const sampleBox=document.querySelectorAll('.sample');
let sampleTipes=[];
let activeSamples=[];
let activePhone=[];

let count=0;
let letCount=0;
let clickCount=0;
let breakBlock=0;

let allActions=[];

let action=[];

let actionsPhone=[];
let actionActiveSample=[];
let actionUnActiveSample=[];

let activeSamplesBLock=[];
let unActiveSamplesBlock=[];

document.querySelector('nav').addEventListener('click',event=>{

if(event.target.tagName!=='INPUT')return false;

clickCount++;

activeSamples=[];



action=[];

unActiveSamplesBlock=[];

sampleTipes=[];



activePhone=[];

actionsPhone=[];

actionActiveSample=[];

actionUnActiveSample=[];

activeSamplesBLock=[];

CheckSamples(activeSamples);


phoneBox.forEach(phone=>{

    phone.classList.add('hide');
})
        
    filtr();

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

}

function blockSamples(){

    actionsPhone=[];

    action.push(actionsPhone);
    action.push(actionUnActiveSample);
    action.push(actionActiveSample);

    allActions.push(action);

    phoneBox.forEach(phone=>{

        if(!phone.classList.toString().includes('hide')){

            actionsPhone.unshift(phone);

        }
    })

    sampleBox.forEach(sample=>{

        if(!sample.checked){
            actionUnActiveSample.unshift(sample);
        }
        else{
            actionActiveSample.unshift(sample);
        }
    })




    sampleBox.forEach(sample=>{
        if(sample.checked){

            activeSamplesBLock.unshift(sample);

        }else{
            unActiveSamplesBlock.unshift(sample);
        }
    })
    
    let blockSampe=0;
  
   if(unActiveSamplesBlock.length!=0){

    unActiveSamplesBlock.forEach(sample=>{

        sample.disabled=false;

        breakBlock=1;
        sample.click();
        clickCount--;



        if(activePhone.length==0){
            blockSampe++;
        }

        phoneBox.forEach(phone=>{
            phone.classList.add('hide');
        })

        sampleBox.forEach(sampleb=>{

            sampleb.checked=false;
        })



        console.log( allActions.length)
        console.log(clickCount)
        console.log(allActions[clickCount-1].length);
        console.log(allActions[clickCount-1][0].length);
        console.log('____________________________-');



        (allActions[clickCount-1][0]).forEach(first => {
            first.classList.remove('hide');
        });

        (allActions[clickCount-1][2]).forEach(second => {
            second.checked=true;
        });



       sample.checked=false;



        if(blockSampe!==0){
            sample.disabled=true;
        }else{
            sample.disabled=false;
        }

        blockSampe=0;

       
    })
   }


   

   breakBlock=0;


}

function filtr() {

    if(activeSamples.length==0){
        phoneBox.forEach(phone=>{

            phone.classList.remove('hide');
        })

        clickCount=0;

        allActions=[];
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

                    letCount++;
                }
                
            }

            if(letCount!=0){

                phone.classList.remove('hide');

            }

            letCount=0;
            
        })
        

        

       
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
            

            
        }
    })
}


count=0;

CheckActivePhones();
if(breakBlock==0){
    blockSamples();
}

}
}  










 
