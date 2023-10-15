(function () {
  const elem = document.querySelector(".menu-items");
  const style = window.getComputedStyle(elem, null).getPropertyValue("transform");
  let statu = false;
  const id = '#label_file';

  
  console.log(style)
  if(style == 'matrix(1, 0, 0, 1, 0, 0)'){
    document.querySelector(id).style.zIndex = '-1';
  }
 

  document.querySelector('.checkbox__burg').addEventListener('click', function () {
    statu = !statu;
    if (statu) {
      document.querySelector(id).style.zIndex = '-1';
    }
    else {
      document.querySelector(id).style.zIndex = '0';
    }
  });

})()