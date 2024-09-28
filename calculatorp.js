let a = document.querySelectorAll('[type*="button"]')
let b = document.getElementById('result')
let exp = '';

a.forEach(button=>{
    button.addEventListener('click',(e)=>{
        let buttvalue= e.target.value;
        if(buttvalue=='c')
        {
            exp='';
            b.value = '';
        }
        else if(buttvalue ==='=')
        {
            try {
                exp = eval(b.value)
                b.value = exp;
                
            } 
            catch (error) {
                b.value = 'Error'
                
            }
        }
        else
        {
            exp = exp + buttvalue;
            b.value = exp;
        }

    })
})