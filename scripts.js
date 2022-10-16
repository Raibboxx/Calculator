<script>
    function somar() {
        var tn1 = window.document.getElementById('txtn1')
        var tn2 = window.document.querySelector('input#txtn2')
        var res = window.document.getElementById('res')
        var n1 = Number(tn1.value)
        var n2 = Number(tn2.value)
        var s = n1 + n2
        res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong>`
        }
     function multiplicar() {
            var tn3 = window.document.getElementById('txtn3')
            var tn4 = window.document.querySelector('input#txtn4')
            var res2 = window.document.getElementById('res2')
            var n3 = Number(tn3.value)
            var n4 = Number(tn4.value)
            var multiplicação = n3 * n4 
            res2.innerHTML = `A multiplicação entre ${n3} e ${n4} é igual a <strong>${multiplicação}</strong>`
        }
     function subtração() {
        var tn5 = window.document.getElementById("sub1")
        var tn6 = window.document.querySelector('input#sub2')
        var res3 = window.document.getElementById("res3")
        var n5 = Number(tn5.value)
        var n6 = Number(tn6.value)
        var subtração = n5 - n6 
        res3.innerHTML = `A subtração entre ${n5} e ${n6} é igual <strong>${subtração}</strong>`
     }
     function divisão() {
        var tn7 = window.document.getElementById("div1")
        var tn8 = window.document.querySelector('input#div2')
        var res4 = window.document.getElementById("res4")
        var n7 = Number(tn7.value)
        var n8 = Number(tn8.value)
        var divisão = n7 / n8 
        res4.innerHTML = `A divisão entre ${n7} e ${n8} é igual a <strong>${divisão}</strong>`
     }
     function Porcentagem() {
        var tn9 = window.document.getElementById("porc1")
        var tn10 = window.document.querySelector('input#porc2')
        var res5 = window.document.getElementById("res5")
        var n9 = Number(tn9.value)
        var n10 = Number(tn10.value)
        var porcentagem = n9*n10/100 
        res5.innerHTML = `O valor da porcentagem é <strong>${porcentagem}</strong>`
     }
     function Resolver(){
        var tn11 = document.getElementById("reg1")
        var tn12 =document.getElementById("reg2")
        var tn13 = document.getElementById("reg3")
        var res6 = document.getElementById("res6")
        var n11 = Number(tn11.value)
        var n12 = Number(tn12.value)
        var n13 = Number(tn13.value)
        var regra = n13*n12 / n11 
        var regra2 = parseFloat(regra.toFixed(2));
        res6.innerHTML = `O valor de X é` + regra2
     }
    
</script>
