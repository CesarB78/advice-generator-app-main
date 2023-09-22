const ida = document.getElementById("item");
const advice = document.getElementById("text");
const btn = document.querySelector("#btnGenera");

btn.addEventListener('click',async()=>{

  try{
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    ida.innerText = data.slip.id;
    advice.innerText = '"' + data.slip.advice + '"';
    

  }catch(err){
    console.log(err)
  }


 
})