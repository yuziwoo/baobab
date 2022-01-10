window.addEventListener('DOMContentLoaded', () => {
    const menu_btn = document.getElementsByClassName("menu_btn")[0];
    const m_nav = document.getElementsByClassName("m_nav")[0];

    menu_btn.addEventListener("click", () => {
      menu_btn.classList.toggle("menu_off");
      menu_btn.classList.toggle("menu_on");
      m_nav.classList.toggle("nav_off");
      m_nav.classList.toggle("nav_on");
    })

    window.addEventListener("resize", (e) => {
      if (document.body.offsetWidth > 640) {
        m_nav.classList.toggle("nav_off", true);
        m_nav.classList.toggle("nav_on", false);
      }
    })

    const footer = document.getElementsByClassName("pc_footer")[0];
    footer.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.innerHTML = "경기도 김포시 운양동 739";
    footer.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerHTML = "Tel) 031-988-6543 / 070-8866-8585<br>Fax) 031-988-8584";

    /* header 숨김 효과 */

    let header = document.getElementsByClassName("pc_header")[0];
    let header_m = document.getElementsByClassName("m_header")[0];
/*wheel*/
document.documentElement.addEventListener("wheel", (e) => {
  if(e.deltaY > 0){
    if(!header.classList.contains("header_hide")){
      header.classList.add("header_hide");
      header_m.classList.add("header_hide");
    }
  }
  if(e.deltaY < 0){
    if(header.classList.contains("header_hide")){
      header.classList.remove("header_hide");
      header_m.classList.remove("header_hide");
    }
  }
})

/*scroll*/
  let scroll_pagey = 0;
  window.addEventListener("scroll", (e) => {
    if(window.scrollY > scroll_pagey){
      if(!header.classList.contains("header_hide")){
        header.classList.add("header_hide");
        header_m.classList.add("header_hide");
      }
    }else if(window.scrollY < scroll_pagey){
      if(header.classList.contains("header_hide")){
        header.classList.remove("header_hide");
        header_m.classList.remove("header_hide");
      }
    }
    scroll_pagey = window.scrollY;
  })

  /*touch*/
  let touch_pagey = 0;
  document.documentElement.addEventListener("touchmove", (e) => {
     for (i=0; i < e.changedTouches.length; i++){
       if (e.changedTouches[i].pageY > touch_pagey){
         if(!header.classList.contains("header_hide")){
           header.classList.add("header_hide");
           header_m.classList.add("header_hide");
         }
       }else if(e.changedTouches[i].pageY < touch_pagey){
         if(header.classList.contains("header_hide")){
           header.classList.remove("header_hide");
           header_m.classList.remove("header_hide");
         }
       }

       if(document.documentElement.scrollTop < 500){
         header.classList.remove("header_hide");
         header_m.classList.remove("header_hide");
       }

        touch_pagey = e.changedTouches[i].pageY
     }
  }, false);

}); /*end*/
