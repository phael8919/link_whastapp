//Função para criar o link
function gerar_link(){
    let url = 'https://api.whatsapp.com/send/?phone=55'
    let ddd = document.getElementById('ddd')
    let num = document.getElementById('phone')
    let link = url+ddd.value+num.value      
    
    let container_link = document.getElementById('container-link')
    let copiar = document.getElementById('container-opcoes1') 
    let link_tab = document.getElementById('container-opcoes2')

    if(ddd.value == 'DDD'){
        alert("Insira o DDD do seu estado.")
        ddd.focus()               
    }else if(num.value.length < 9 || num.value == '' || num.value.length > 9){
        alert("Insira o número do seu celular.\nExemplo: 99999-9999")
        num.focus()
    }else{
        container_link.innerHTML = `<div class="link_gerado" id="link_gerado"> ${link}</div>`
        copiar.innerHTML = `<div class="copiar-link" id="copiar-link" onclick="copiar()">COPIAR LINK</div>`
        link_tab.innerHTML = `<a href="${link}" target="_blank" class="link-direto">IR AO LINK</a>`
    }
}

//Função para copiar o link criado
function copiar(){
    let valor = document.getElementById("link_gerado").textContent            
    navigator.clipboard.writeText(valor)
    alert('Link copiado!')
}
        
