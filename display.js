function tabu(){
    var mult = document.getElementById("multiplicado").value;
    var mult = Number(mult)
    if(mult == 0){
        window.alert("todas as respostas seram 0")
    }
    else{
        res1 = mult*1
        res2 = mult*2
        res3 = mult*3
        res4 = mult*4
        res5 = mult*5
        res6 = mult*6
        res7 = mult*7
        res8 = mult*8
        res9 = mult*9
        res10 = mult*10
        console.log(res1, res2, res3, res4, res5, res6, res7, res8, res9, res10)
       document.getElementById("tabuada").innerHTML = `1 X ${mult} = ${res1} <br> 2 X ${mult} = ${res2} <br> 3 X ${mult} = ${res3} <br> 4 X ${mult} = ${res4} <br> 5 X ${mult} = ${res5} <br> 6 X ${mult} = ${res6} <br> 7 X ${mult} = ${res7} <br> 8 X ${mult} = ${res8} <br> 9 X ${mult} = ${res9} <br> 10 X ${mult} = ${res10}`
    }
}