var like=document.querySelector('#like');
var unlike=document.querySelector('#unlike');

function changetoUnlike() {
    like.setAttribute('id','unlike');
    like.setAttribute('onclick','changetoLike()');
    like.textContent = 'unlike';
}

function changetoLike() {
    unlike=document.querySelector('#unlike');
    unlike.setAttribute('id','like');
    unlike.setAttribute('onclick','changetoUnlike()');
    unlike.textContent = 'like';
}