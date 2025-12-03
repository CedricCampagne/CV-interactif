function ShowGrid(grid)
{   
  const divmain = document.querySelectorAll('.main_container_all');
  
  divmain.forEach(div =>{
      div.style.display ="none";
  })
  
  if(grid !== 'home'){
    const description = document.querySelector('#description');
    const nav = document.querySelector('.nav');

    description.style.display='none';
    nav.classList.add('open');
  }else{
    description.style.display='block';
    nav.classList.remove('open');
  }
  const gridToShow = document.getElementById(grid);
  gridToShow.style.display = "grid";
}

document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('.toggle_btn').forEach(btn =>{
    btn.addEventListener('click', ()=>{
      const targetSelector = btn.getAttribute('data-target');
      const target = document.querySelector(targetSelector);

      if(target){
        target.classList.toggle('open');
        btn.classList.toggle('open');

        if(target.classList.contains('open')){
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
      }
    });
  });
});
