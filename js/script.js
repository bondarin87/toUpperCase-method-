let inp = document.querySelector('#elem');
inp.addEventListener('blur',function func() {
    let arr = inp.value.split(' '); 
    inp.value = null; 
    for (let i=0; i<arr.length; i++) {
        arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1).toLowerCase();
        inp.value += arr[i] + ' ';
        console.log(inp.value)
    }   
})
