const URL="https://v6.exchangerate-api.com/v6/2e8568fdcdc06fb6eaebcb02/latest/USD";
let data="";
let oneCountry=0
let anotherCountry=0
const call=async (from,to)=>{
    let respone= await fetch(URL)
    data=await respone.json()
    oneCountry=data.conversion_rates[from]
    anotherCountry=data.conversion_rates[to]
    console.log(1)
    console.log(oneCountry)
    console.log(anotherCountry)
}
let but1=document.querySelector("#but1")
let but2=document.querySelector("#but2")
but1.addEventListener("click",async ()=>{
    let from=document.querySelector("#from")
    let to=document.querySelector("#to")
    let temp=from.value
    from.value=to.value
    to.value=temp
})
but2.addEventListener("click",async()=>{
    let from=document.querySelector("#from")
    let to=document.querySelector("#to")
    if(from.value===to.value){
        let para1=document.querySelector("#paraOutput")
        para1.innerText="Check Currency Code"
        para1.style.color="red"
        para1.style.display="block"
        return
    }
    let amount=document.querySelector("#amount")
    await call(from.value,to.value)
    calculate(oneCountry,anotherCountry,amount.value,from.value,to.value)
})
async function calculate(oneCountry,anotherCountry,amount,from,to){
    let oneCurrenyValue=(anotherCountry/oneCountry)
    console.log(oneCurrenyValue)
    let totalAmount=amount*oneCurrenyValue
    console.log(totalAmount)
    await result(totalAmount,amount,from,to)
}
function result(totalAmount,amount,from,to){
    let para1=document.querySelector("#paraOutput")
    para1.innerText=`${amount} ${from} = ${totalAmount} ${to}`
    para1.style.display="block"
    para1.style.color="black"
}
