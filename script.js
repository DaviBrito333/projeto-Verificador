function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO!] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if ( idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebe.masculino.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem rapaz.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto.homem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.homem.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if ( idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebe menina.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', '')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto.mulher.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosa mulher.png')
            }
        }
        res.style.textAling = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos. `
        res.appendChild(img)
    }
}