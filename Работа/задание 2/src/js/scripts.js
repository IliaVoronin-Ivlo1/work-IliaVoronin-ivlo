const phoneBox=document.querySelectorAll('.phone-container');
const sampleBox=document.querySelectorAll('.sample');
let activeSamples=[];
let unActiveSamples=[];
let count=0;
let lengthSample;
let activePhone=[];


document.querySelector('nav').addEventListener('click',event=>{

if(event.target.tagName!=='INPUT')return false;

    activeSamples=[];
    
    unActiveSamples=[];

    activePhone=[];

    let filterData=event.target.dataset['tipe'];

    if(event.target.checked){

        CheckSamples(activeSamples);

        UnCheckedSamples(unActiveSamples);
 
        phoneBox.forEach(elem=>{

            for(let i=0;i<lengthSample;i++){

                if(elem.dataset['tipe'].includes(activeSamples[i].dataset['tipe'])){
                    count++;
                }
            }

            if(count!==activeSamples.length){

                elem.classList.add('hide');
            }

            else{
                activePhone.unshift(elem);
            }

            count=0;

        })
        
        unActiveSamples.forEach(sample=>{

            for (let i = 0; i < activePhone.length; i++) {

                if(activePhone[i].dataset['tipe'].includes(sample.dataset['tipe'])){

                    count++;

                } 

            }

            if(count==0){

                sample.disabled=true;

            }

            count=0;

            
        })
    }
    else{

        CheckSamples(activeSamples);

        UnCheckedSamples(unActiveSamples);

        phoneBox.forEach(elem=>{

            for(let i=0;i<lengthSample;i++){

                if(elem.dataset['tipe'].includes(activeSamples[i].dataset['tipe'])){

                    count++;

                }
            }

            if(count!==activeSamples.length){

                elem.classList.add('hide');
            }
            else{
                elem.classList.remove('hide');

                activePhone.unshift(elem);
            }

            count=0;

        })

        unActiveSamples.forEach(sample=>{

            for (let i = 0; i < activePhone.length; i++) {


                if(activePhone[i].dataset['tipe'].includes(sample.dataset['tipe'])){

                    count++;

                } 
            }

            if(count==0){

                sample.disabled=true;

            }
            else{
                
                sample.disabled=false;

            }

            count=0;
            
        })

    }

})

function CheckSamples(array){

    sampleBox.forEach(sample=>{

        if(sample.checked){

            array.unshift(sample);

        }

    })

    lengthSample=array.length;
}

function UnCheckedSamples(array){

    sampleBox.forEach(sample=>{

        if(!sample.checked){

            array.unshift(sample);
            
        }

    })

    
}
 
