const para1=document.getElementById('randam')
function getdate(){
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then((data)=>data.json())
    .then((dis)=>display(dis))
    .catch((err)=>console.log(err))
    
}
getdate()

function display(dis){
   let div= document.createElement('div')
   let p1=document.createElement('p')
   p1.textContent=dis.setup
   let p2=document.createElement('p')
   p2.textContent=dis.punchline
   div.append(p1,p2)
   para1.appendChild(div)


}