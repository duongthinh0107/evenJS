function doS() {
    let input = document.getElementById('input').value;
    let select1 = document.getElementById('select1').value;
    let select2 = document.getElementById('select2').value;
    // alert(document.getElementById('1'))
    if (select1 == 'VND' && select2 == 'USD') {
       document.getElementById('result').innerText = "Result:"+input / 24000 + '$'
    }
    if (select1 == 'USD' && select2 == 'VND') {
       document.getElementById('result').innerText = "Result: "+input * 24000 + 'dong'
    }
}
