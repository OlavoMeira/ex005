function contador() {
    let n1 = window.document.querySelector('input#txtn1')
    let n2 = window.document.querySelector('input#txtn2')
    let n3 = window.document.querySelector('input#txtn3')
    let res = window.document.querySelector('div#res')
    if (n1.value === '' || n2.value === '' || n3.value === '')
        res.innerHTML = `o valor não foi encontrado por favor digite um numero no espaço em branco.`

}