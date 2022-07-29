function cambiar(){
    let content = `
        <p>
            este es un parrafo
        </p>   
    `
   
    let title = document.getElementById('title')
    title.innerText = 'titulo modificado'
    let div = document.getElementById('div')
    div.innerHTML = content
    document.getElementById('imag').setAttribute('src', 'https://www.aerocivil.gov.co/Style%20Library/CEA/img/img.jpg')
    // document.getElementById("imag").src="https://www.aerocivil.gov.co/Style%20Library/CEA/img/img.jpg";
}


