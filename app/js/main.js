$(function () {

  $('.top_inner').slick({
    
    fade: true
  });



    $('.advant_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1
      });



     var mixer = mixitup ('.categories_block', {
      load: {
        filter: '.bed'
      }
     }); 


     document.addEventListener('DOMContentLoaded', () => {

      const menuBtns = document.querySelectorAll('.header_menu_list_link');
      const drops = document.querySelectorAll('.dropdown');

    
      menuBtns.forEach(el => {
        el.addEventListener('click', (e) => {
          let currentBtn = e.currentTarget; 
          let drop = currentBtn.closset ('.header_menu_list_item').querySelectorAll('.dropdown');
    
          console.log(currentBtn);
          console.log(drop);

          menuBtns.forEach(el => {
            if (el !== currentBtn){
              el.classList.remove('.header_menu_list_link_active')
            }
          })

          drops.forEach(el => {
            if( el !== drop ){
              el.classList.remove('dropdown_active');
            }
          });

          drop.classList.toggle('dropdown_active')
    
          currentBtn.classList.add('.header_menu_list_link_active');
        });
      });

      document.addEventListener('click', (e) => {
        if (!e.target .closset('header_menu')){
          menuBtns.forEach(el => {
           
              el.classList.remove('.header_menu_list_link_active')
          })

          drops.forEach(el => {
              el.classList.remove('dropdown_active');
          });
        }
      });
    });
    


});

