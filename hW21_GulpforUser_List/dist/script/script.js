function getRequestLogin(e){e.preventDefault(),fetch(URL+"/login",{method:"POST",body:JSON.stringify({email:email.value,password:password.value}),headers:{"content-type":"application/json"}}).then(e=>e.json()).then(e=>(addTokkenToLocalStorage(e.token),e)).then(e=>{e.token?successfulLogin():unSuccessfulLogin(e)})}
function hideFormLogin(){form.hidden=!0}function addEventClickToBtn(){for(var a of deleteBtn)a.addEventListener("click",onRemoveUser);for(var e of changeBtn)e.addEventListener("click",onUpdateUser);nextBtn.addEventListener("click",onClickNext),backBtn.addEventListener("click",onClickBack)}function addBtnBackAndNext(){users.append(backBtn,nextBtn)}function searchEl(a){var e;for(e of a.target.parentElement.children)!0===e.className.includes("firstname_value")&&(changeableVar.firstNameValue=e.value),!0===e.className.includes("lastname_value")&&(changeableVar.lastNameValue=e.value),!0===e.className.includes("emailvalue")&&(changeableVar.emailValue=e.value),!0===e.className.includes("avatarvalue")&&(changeableVar.avatarValue=e.value),!0===e.className.includes("first_name")&&(changeableVar.firstName=e),!0===e.className.includes("last_name")&&(changeableVar.lastName=e),!0===e.className.includes("email_inp")&&(changeableVar.emailinp=e),!0===e.className.includes("avatar")&&(changeableVar.avatar=e)}function addTokkenToLocalStorage(a){localStorage.setItem("token",a)}function testForLogin(){localStorage.getItem("token")&&successfulLogin()}
function getUsers(e,s){let c="";e.forEach(r=>{c+=s,Object.keys(r).forEach(e=>{c=c.replaceAll(`{{${e}}}`,r[e])})}),users.innerHTML=c,document.body.append(users)}
let userTemolate=document.getElementById("user_templ");const URL="https://reqres.in/api";let messageToUeser=document.createElement("p"),email=document.getElementById("email"),password=document.getElementById("password"),deleteBtn=document.getElementsByClassName("delete"),changeBtn=document.getElementsByClassName("change"),form=document.getElementById("form"),users=document.createElement("div"),nextBtn=(users.classList.add("users"),document.createElement("button")),backBtn=(nextBtn.innerText="next",nextBtn.style.flexBasis="90%",document.createElement("button")),changeableVar=(backBtn.innerText="back",backBtn.style.flexBasis="90%",{page:1,saveBtn:"",avatar:"",lastName:"",firstName:"",emailinp:"",avatarValue:"",lastNameValue:"",firstNameValue:"",emailValue:""});
function successfulLogin(){fetch(URL+"/users?page="+changeableVar.page).then(e=>e.json()).then(e=>{getUsers(e.data,userTemolate.innerHTML),hideFormLogin(),addEventClickToBtn(),addBtnBackAndNext()})}function unSuccessfulLogin(e){messageToUeser.innerText=Object.values(e)[0],document.body.append(messageToUeser)}
document.addEventListener("DOMContentLoaded",testForLogin),form.addEventListener("submit",getRequestLogin);
function onClickNext(){++changeableVar.page,2<changeableVar.page&&(changeableVar.page=2),successfulLogin(changeableVar.page)}function onClickBack(){--changeableVar.page,changeableVar.page<1&&(changeableVar.page=1),successfulLogin(changeableVar.page)}function onRemoveUser(e){var a=e.target.parentElement.parentElement.children[0].innerText;let n=e.target.parentElement.parentElement;fetch(URL+"/users/"+a,{method:"DELETE"}).then(e=>{204===e.status&&n.remove()})}function onUpdateUser(e){var a;for(a of e.target.parentElement.parentElement.children)!0===a.className.includes("save_btn")&&(changeableVar.saveBtn=a),!0===a.classList.contains("d_none")?(a.classList.remove("d_none"),a.classList.add("d_block")):a.classList.add("d_none");changeableVar.saveBtn.addEventListener("click",onSaveFunc)}function onSaveFunc(a){searchEl(a);var e=a.target.parentElement.children[0].innerText;fetch(URL+"/users/"+e,{method:"PATCH",body:JSON.stringify({id:e,email:changeableVar.emailValue,first_name:changeableVar.firstNameValue,last_name:changeableVar.lastNameValue,avatar:changeableVar.avatarValue}),headers:{"content-type":"application/json"}}).then(e=>{200===e.status&&changeUser(a)})}function changeUser(e){var a,e=e.target.parentElement;changeableVar.firstName.innerText=changeableVar.firstNameValue,changeableVar.lastName.innerText=changeableVar.lastNameValue,changeableVar.emailinp.innerText=changeableVar.emailValue,changeableVar.avatar.src=changeableVar.avatarValue;for(a of e.children)!0===a.classList.contains("d_none")?(a.classList.remove("d_none"),a.classList.add("d_block")):(a.classList.remove("d_block"),a.classList.add("d_none"))}