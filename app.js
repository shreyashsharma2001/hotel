 let s=document.querySelector('button')
 let j=true
 s.addEventListener('click',()=>{

    let  k=document.createElement('link')
 
    k.rel = 'stylesheet';      
    k.type = 'text/css'; 

 if(j){
     
    k.href = 'style.css';  
    let d=document.querySelector("body")
    d.appendChild(k)
    console.log("hello")
    j=false
    s.innerHTML="light mode"
  
 }else{
    k.href = 'style2.css';  
    let d=document.querySelector("body")
    d.appendChild(k)
    console.log("hello")
    s.innerHTML='Dark mode'
    j=true
 }
 
     


 
 })