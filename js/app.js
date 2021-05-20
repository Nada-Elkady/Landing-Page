
 /*Global Variables*/

const navigation =document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
const fragment = document.createDocumentFragment();


//loop for adding li and a to each section
    for (const section of sections) {
        // getting section name on navbar from its attribute 
      let linktext = section.getAttribute("data-nav");
      // add link 
      let sectionLink = document.createElement("a");
      sectionLink.textContent=linktext;
      sectionLink.classList.add("menu__link");
      // add list 
      let sectionList = document.createElement("li")
      sectionList.appendChild(sectionLink);

    // scroll to the section when clicking on its link from navbar 
      sectionLink.addEventListener("click",() =>{
          section.scrollIntoView({behavior: "smooth"});
      });
    // add list to the fragment
      fragment.appendChild(sectionList);
    }
 // add the fragment to the navbar
 navigation.appendChild(fragment);



 window.addEventListener("scroll",()=>{
  for (section of sections) {
   //get rect for each section to check if the top of the section is within the viewport or not
      const rect = section.getBoundingClientRect();
      //if it is within the viewport then 
   if (rect.top > 0 && rect.top <= 584) {
      //for loop to remove all sections from the activeclass
       for (s of sections) {
           s.classList.remove("your-active-class");
          
       }
       //then add this section to the active class
         section.classList.add("your-active-class");
      }
    }
  })

