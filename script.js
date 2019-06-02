


function carregar(){
     

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   // var hora = 19
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'fotomanha1.png'
        document.body.style.background = '#e2cd8f'
    }else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#bb9a5a'
    } else {
        //Boa Noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }
}

