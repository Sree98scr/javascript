document.getElementById('signup form').addEventListener('submit',function(event){
    event.preventDafault();
   
    const username = document.getElementById('username').Value;
    
    const email = document.getElementById('email').Value;
    const dob = document.getElementById('dob').Value;
    
    const password = document.getElementById('password').Value;
    
    const confirmpassword = document.getElementById('confirmpassword').Value;
    if(username && email && password && confirmpassword) {
        localStorage.setItem('username',username);
        localStorage.setItem('email',email);
        localStorage.setItem('dob',dob);
         localStorage.setItem('password',password);
        localStorage.setItem('confirmpassword',confirmpassword);
        alert('Register successfully');
    }
    else{
        alert('please fill out all the fields.');
    }

});
