document.addEventListener('DOMContentLoaded', function () {
  //  ________________Add active feature on menu items________________

  const menuItems = document.querySelectorAll('#nav-menu ul li a');
  
  menuItems.forEach(item => {
    if (item.getAttribute('href') === window.location.pathname.split('/').pop()) {
      item.parentElement.classList.add('active');
    }

    item.addEventListener('click', function() {
      menuItems.forEach(i => i.parentElement.classList.remove('active'));
      this.parentElement.classList.add('active');
    });
  });



  //  ____________________________Add slide effect____________________
  let slideIndex = 0;
  showSlides(slideIndex);

  document.querySelector('.prev').addEventListener('click', function () {
    plusSlides(-1);
  });

  document.querySelector('.next').addEventListener('click', function () {
    plusSlides(1);
  });

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function showSlides(n) {
    let slides = document.getElementsByClassName('slide');
    if (n >= slides.length) {
      slideIndex = 0;
    }
    if (n < 0) {
      slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'flex';
  }
  
});
