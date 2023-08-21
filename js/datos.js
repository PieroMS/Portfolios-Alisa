(function(){
    const submit = document.querySelector('.submit');
    submit.addEventListener('click',(e)=>{
        const nombre = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        e.preventDefault();
        if(nombre=="" || email=="" || message==""){
            alert("Enter data please");
        }else{
            alert(`Thanks for contacting me ${nombre}`);
            document.getElementById('name').value="";
            document.getElementById('email').value="";
            document.getElementById('message').value="";
        }
    });
})();