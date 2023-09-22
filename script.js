var MenuItems = document.getElementById("MenuItems");

    MenuItems.style.maxHeight = "0px";
    function menutoggle(){
        if(MenuItems.style.maxHeight == "0px")
        {
            MenuItems.style.maxHeight = "400px"
        }
        else{
            MenuItems.style.maxHeight = "0px"
        }
    }

window.onscroll = () =>{
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrolly > 100);
}




let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top => offset && top < offset + height){
            navlinks.forEach(link =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    }

    )
}


var tablinks = document.getElementsByClassName("tab-links");
            var tabcontents = document.getElementsByClassName("tab-contents");
        
            function opentab(event, tabname) {
                for (tablink of tablinks) {
                    tablink.classList.remove("active-link");
                }
                for (tabcontent of tabcontents) {
                    tabcontent.classList.remove("active-tab");
                }
                event.currentTarget.classList.add("active-link");
                document.getElementById(tabname).classList.add("active-tab");
            }
            var icon = document.getElementById("icon");
            var img1 = document.getElementById("img");
            var img2 = document.getElementById("img-id");
            icon.onclick = function(){
                document.body.classList.toggle("dark-theme");
                if(document.body.classList.contains("dark-theme")){
                    icon.innerHTML = '<i class="bx bxs-moon" ></i>';
                    img1.src = "/loonapix_1693326821862145024.png";
                    img2.src="/loonapix_1693326821862145024.png";
                    img3.src="/loonapix_1693326821862145024.png";
                }
                else{
                    icon.innerHTML = '<i class="bx bx-sun"></i>';
                    img1.src = "/loonapix_16931539801301764528.png";
                    img2.src="/loonapix_16931539801301764528.png";
                    img3.src="/loonapix_16931539801301764528.png";
                }
            }



  const scriptURL = 'https://script.google.com/macros/s/AKfycby4oPIjJHUEPUjf-vsOFJL4KAE50HY-UT-3AIY29FIOD5jAM2F-f7XsRruveGMLjx6k/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("response");
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
