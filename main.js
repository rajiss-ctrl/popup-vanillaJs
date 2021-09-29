let popup = document.querySelector('.popup');

window.addEventListener('load', function(){
  setTimeout(
    function open(e){
      document.querySelector('.popup').style.display='block';
    },2000)
});

document.querySelector('.xt').addEventListener('click',function(){
  popup.style.display='none'
})

document.querySelector('.btn').addEventListener('click',function(e){
  let pBg=document.querySelector('.joshua');
  if(pBg.style.backgroundColor == 'black'){
    document.body.backgroundColor='white';
  pBg.style.backgroundColor = 'yellow';
}else{
  pBg.style.backgroundColor = 'black';
  }
  });
  










