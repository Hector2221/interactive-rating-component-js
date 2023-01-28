
for (num = 1; num <= 5; num ++){
    const conteiner = document.querySelector(".options")
    const Btn = document.createElement("button")
    Btn.classList.add('numbers')
    conteiner.appendChild(Btn)
    const texto = document.createTextNode(num)
    Btn.appendChild(texto)

    Btn.addEventListener("click",function(){
        const submit = document.querySelector(".submit");
        submit.addEventListener("click",function action() {
            document.querySelector(".item-center").classList.add("active-result");
            document.querySelector(".btn-select").innerHTML =`You selected ${Btn.textContent} out of 5`;
        })
    })
}
