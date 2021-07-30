function enterMainPage() {
   const hero = document.querySelector('.hero-wrapper');
   const seconds = 2;
   let counter = 0;
   const countdown = setInterval(() => {
      counter += 2;
      if (counter == 100) {
         hero.style.opacity = 1;
         zoomInBorders();
      }
   }, seconds);
}
function zoomInBorders() {
   const top_border = document.querySelector('.overlay_border-top');
   const right_border = document.querySelector('.overlay_border-right');
   const bottom_border = document.querySelector('.overlay_border-bottom');
   const left_border = document.querySelector('.overlay_border-left');
   const tl_border = new TimelineMax({
      onComplete: () => {
         fadeInTopContent();
         fadeInLeftContent();
      }
   });

   tl_border
      .to(top_border, 2, { height: 60 })
      .to(right_border, 2, { width: 55 }, '-=2')
      .to(bottom_border, 2, { height: 90 }, '-=2')
      .to(left_border, 2, { width: 55 }, '-=2')
}
function fadeInTopContent() {
   const tl_top = new TimelineMax();
   const nav_elements = ['.hero_nav-logo', '.hero_nav-main', '.nav-user'];
   const options = {
      y: 5,
      opacity: 1,
      ease: Power2.easeOut,
   };

   tl_top.staggerTo(nav_elements, 0.2, options, '0.1');
}
function fadeInLeftContent() {
   const copyright = document.querySelector('.hero_social-icons');
   const options = {
      y: -20,
      opacity: 1,
      ease: Power2.easeOut,
   };

   TweenMax.to(copyright, 1, options);
}
function fadeInMainContent() {
   const hero_slider = document.querySelector('.hero_slider-main');
   TweenMax.fromTo (
      hero_slider, 1, {
         opacity: 0
      }, {
         opacity: 1, delay: 0.6
      }
   );
}
fadeInMainContent();

enterMainPage();