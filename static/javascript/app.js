var user_input = {
    user_name: "",
    user_lname: "",
    user_email: "",
    user_password: "",
  };
  
  var firstname = document.getElementById("name");
  var lname = document.getElementById("lname");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var button = document.getElementById("btn");
  
  function post_data(user_input) {
    const request = new XMLHttpRequest();
  
    const url = "https://jsonplaceholder.typicode.com/posts";
  
    request.open("POST", url);
    request.setRequestHeader("Content-Type", "application/json");
  
    const PROCESS_CLAIM = {
      requestId: "115",
      title: "PROCESS_CLAIM",
      body: user_input,
    };
  
    request.onload = function () {
      const PROCESS_CLAIM = request.responseText;
      console.log(PROCESS_CLAIM);
    };
  
    request.send(JSON.stringify(PROCESS_CLAIM));
  }
  
  
  
  
  function check_info(firstname,lname, email, password, button){
    button.addEventListener('click', function(){
      user_input.user_name = firstname.value;
      user_input.user_lname = lname.value;
      user_input.user_email = email.value;
      user_input.user_password = password.value;
      if(user_input.user_name == '' || user_input.user_lname == '' || user_input.user_email == '' || user_input.user_password == ''){
        if(user_input.user_name == ''){
          firstname.style.borderColor = 'hsl(0, 100%, 74%)'
          firstname.placeholder = 'First name must not be empty!'
          firstname.style.backgroundImage = 'url(/images/icon-error.svg)'
          firstname.style.backgroundRepeat = 'no-repeat'
          firstname.style.backgroundPosition = 'right'
          firstname.style.backgroundPositionX = '350px'
        }
        if(user_input.user_lname == ''){
          lname.style.borderColor = 'hsl(0, 100%, 74%)'
          lname.placeholder = 'Last name must not be empty!'
          lname.style.backgroundImage = 'url(/images/icon-error.svg)'
          lname.style.backgroundRepeat = 'no-repeat'
          lname.style.backgroundPosition = 'right'
          lname.style.backgroundPositionX = '350px'
        }
        if(user_input.user_email == ''){
          email.style.borderColor = 'hsl(0, 100%, 74%)'
          email.placeholder = 'Empty/Invalid Email!'
          email.style.backgroundImage = 'url(static/images/icon-error.svg)'
          email.style.backgroundRepeat = 'no-repeat'
          email.style.backgroundPosition = 'right'
          email.style.backgroundPositionX = '350px'
        }
        if(user_input.user_password == ''){
          password.style.borderColor = 'hsl(0, 100%, 74%)'
          password.placeholder = 'Empty/Invalid Password!'
          password.style.backgroundImage = 'url(static/images/icon-error.svg)'
          password.style.backgroundRepeat = 'no-repeat'
          password.style.backgroundPosition = 'right'
          password.style.backgroundPositionX = '350px'
        }
      } else {
        Eclass = document.getElementsByClassName('inputs')
        for(var i=0, len=Eclass.length; i<len; i++)
      {
          Eclass[i].style["background-image"] = '';
          Eclass[i].style["background-repeat"] = '';
          Eclass[i].style["background-position-x"] = '';
          Eclass[i].style["border-color"] = 'gray';
          Eclass[i].placeholder = ''
      }
        return post_data(user_input);
      }
    })
  }
  
  
  check_info(firstname, lname, email, password, button)
  