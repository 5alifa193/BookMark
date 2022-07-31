var nameInput = document.getElementById('nameInput');
var urlInput = document.getElementById('urlInput');
var firstInput = nameInput;
var buttonControl = document.getElementById('buttonControl');
// arrayAdd=[];
var arrayAdd;

function setValue(){
    if(nameInput.value!=0 && urlInput.value!=0){
    sites={
        nameInput: nameInput.value,
        urlInput: urlInput.value,
    }
    nameInput.setAttribute('class', ' w-75 my-form');
    nameInput.setAttribute('placeholder' , ' Bookmark Name');
    urlInput.setAttribute('class' , ' w-75 my-form' );
    urlInput.setAttribute('placeholder', ' Website URL');
    arrayAdd.push(sites);
}else{
        nameInput.setAttribute('class', 'alert-danger w-75 my-form');
        nameInput.setAttribute('placeholder' , ' Please enter the BookMark name!');
        urlInput.setAttribute('class' , 'alert-danger w-75 my-form' );
        urlInput.setAttribute('placeholder', ' Please enter the URL!');
}
}
if(localStorage.getItem('items')===null){
    arrayAdd=[];
}else{
    arrayAdd = JSON.parse(localStorage.getItem('items'));
    addSites();
}
function addSites(){
    var siteInner='';
    for(i=0 ; i<arrayAdd.length; i++){
        siteInner+=`<div id="bookMark" class="my-color1 mt-4 p-4">
        <div class="d-flex w-50 justify-content-between mt-2">
        <div>
          <p class=" d-inline fw-bold fs-4">${arrayAdd[i].nameInput}</p>
        </div>
          <div>
            <a href="${arrayAdd[i].urlInput}" target="_blank"><button class=" btn btn-info">Visit</button></a>
          
          <button onclick="deleteMark(${i});" class="btn btn-danger">delete</button>
        </div>
        </div>
        </div>`
    }
    document.getElementById('bookMark2').innerHTML = siteInner;
}
function clearForm(){
    nameInput.value='';
    urlInput.value='';
}
function deleteMark(index){
    arrayAdd.splice(index,1)
    localStorage.setItem('items' ,JSON.stringify(arrayAdd));
    addSites();
}
function setLocalStorage(){
    localStorage.setItem('items' , JSON.stringify(arrayAdd));
}