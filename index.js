let lead =[]

const inputel =  document.getElementById("input")
const button = document.getElementById("input-btn")
const ulEL = document.getElementById("ulel")
const deletebtn= document.getElementById("delete")
const savebtn=document.getElementById("SAVE-btn")

let getlocalstorage = JSON.parse(localStorage.getItem("my lead"))
if(getlocalstorage)
{
   lead=getlocalstorage
   render(lead)
}

deletebtn.addEventListener("dblclick",function(){

   localStorage.clear()
   lead=[]
   render(lead)
})
savebtn.addEventListener("click",function(){


   chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
     
   lead.push(tabs[0].url)
   localStorage.setItem("my lead", JSON.stringify(lead))
   render(lead)
  
  })


})

button.addEventListener("click",function(){
   lead.push(inputel.value)
   console.table(lead)
   inputel.value=""
   localStorage.setItem("my lead", JSON.stringify(lead))
   render(lead)
 
})
function render(leads){
let listItmes = ""
for( let i=0;i<lead.length;i++){
   listItmes +=
    `<li>
    <a  target = '_blank' href='${leads[i] }'>
     ${leads[i] }
    </a>
    </li>`
  
}
ulEL.innerHTML =  listItmes
}
