// // console.log('1');
// // setTimeout(()=>{
// //     console.log('2')
// // },1000);
// // console.log('3')

// const vaqt=document.getElementById('vaqt1');
// const vaqt2=document.getElementById('vaqt2')

// vaqt.innerText=new Date().toLocaleTimeString();
// const id=document.getElementById('id');
// setTimeout(()=>{
//     id.innerText='2 sekund otdi';
// },2000);    

// setInterval(() => {
//     vaqt.innerText=new Date().toLocaleTimeString();
// }, 1000);


// setTimeout(()=>{
//     clearInterval(setIntervalID);
//     vaqt1.innerText='10 sekund otib soat toxta'
// },1000)

// setTimeout(() => {
//     vaqt2.innerText=new Date().toDateString()
// }, 1000);

const minutEL=document.getElementById('minut');
const sekundEL=document.getElementById('sekund');
let id;

function startCaund(){
    let minut=parseInt(minutEL.innerText)
    let sekund=parseInt(sekundEL.innerText);

    id=setInterval(()=>{
       if(minut===0 && sekund===0){
    clearInterval(id)
    
    return;
}
        if(sekund===0){
            minut--;
            sekund=59;
            minutEL.innerText=minut;
        }else{
            sekund--;
        }
        sekundEL.innerText=sekund;
    },1000);
    

}




let u=document.getElementById('u');
let z=document.getElementById('z');
let b=document.getElementById('b');

u.addEventListener('click',function(){
    document.body.style.background='#22C55E';
    document.body.style.transition='0.9s';
    minutEL.innerHTML='1';
    sekundEL.innerHTML='10';
 
    
})

z.addEventListener('click',function(){
    document.body.style.background='#991B1B';
     document.body.style.transition='0.9s';
     sekundEL.innerHTML='59';
})

b.addEventListener('click',function(){
    document.body.style.background='#1E40AF';
     document.body.style.transition='0.9s';
     sekundEL.innerHTML='07'
})




function stop(){
    clearInterval(id)
}
