var crsr = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    crsr.style.top=dets.y - 5 +"px"
    crsr.style.left=dets.x - 5 +"px"
})

var Crsr = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    Crsr.style.top=dets.y - 100 +"px"
    Crsr.style.left=dets.x - 100 +"px"
})

var navAll = document.querySelectorAll("#nav h4")
navAll.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale=6
        crsr.style.border= "0.1vh solid #fff"
        crsr.style.backgroundColor = "transparent" 
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale=1
        crsr.style.border= "0.1vh solid rgb(255, 0, 81)"
        crsr.style.backgroundColor = "rgb(255, 0, 81)" 
    })

})

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 1,
    height: "90px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:2,
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller: "body",
        // markers: true,
        start:"top -20%",
        end:"top -80%",
        scrub:2,
    }
})

gsap.from("#aboutus .overlay-image, #aboutus #aboutusin", {
    y:80,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
        start:"top 65%",
        end: "top 55%",
        scrub:3
    }
})

gsap.from("#page3 #col1, #page3 #col3",{
    y:-100,
    x:-100,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"top 40%",
        end:"top 30%",
        scrub:5,
        duration:1
    }
})

gsap.from("#page3 #col2, #page3 #col4",{
    y:100,
    x:100,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        start:"top 40%",
        end:"top 30%",
        scrub:5,
        duration:1
    }
})

gsap.from("#page4 h1", {
    y:120,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        start:"top 65%",
        end:"top 75%",
        scrub:3,
    }
})

// Shery.mouseFollower({
//     //Parameters are optional.
//     // debug: true,
//     skew: true,
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: 1,
//   });

  Shery.makeMagnet("#nav img" /* Element to target.*/, {
    //Parameters are optional.
    debugger: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

//   Shery.makeMagnet("#main #page1 h1" /* Element to target.*/, {
//     //Parameters are optional.
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: 1,
//   });

//   Shery.imageMasker(".arrow" /* Element to target.*/, {
//     //Parameters are optional.
//     debug:true,
//     mouseFollower: true,
//     text: "Scroll Down",
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: 1,
//   });

  Shery.imageMasker(".overlay-image" /* Element to target.*/, {
    //Parameters are optional.
    debug:true,
    mouseFollower: true,
    text: "Lagta hai fools pasand hai aapko",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.imageMasker(".Para" /* Element to target.*/, {
    //Parameters are optional.
    debug:true,
    mouseFollower: true,
    text: "Advices from Senior",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

// parallax script

// class parallaxTiltEffect {

//     constructor({element, tiltEffect}) {
  
//       this.element = element;
//       this.container = this.element.querySelector(".container");
//       this.size = [300, 360];
//       [this.w, this.h] = this.size;
  
//       this.tiltEffect = tiltEffect;
  
//       this.mouseOnComponent = false;
  
//       this.handleMouseMove = this.handleMouseMove.bind(this);
//       this.handleMouseEnter = this.handleMouseEnter.bind(this);
//       this.handleMouseLeave = this.handleMouseLeave.bind(this);
//       this.defaultStates = this.defaultStates.bind(this);
//       this.setProperty = this.setProperty.bind(this);
//       this.init = this.init.bind(this);
  
//       this.init();
//     }
  
//     handleMouseMove(event) {
//       const {offsetX, offsetY} = event;
  
//       let X;
//       let Y;
  
//       if (this.tiltEffect === "reverse") {
//         X = ((offsetX - (this.w/2)) / 3) / 3;
//         Y = (-(offsetY - (this.h/2)) / 3) / 3;
//       }
  
//       else if (this.tiltEffect === "normal") {
//         X = (-(offsetX - (this.w/2)) / 3) / 3;
//         Y = ((offsetY - (this.h/2)) / 3) / 3;
//       }
  
//       this.setProperty('--rY', X.toFixed(2));
//       this.setProperty('--rX', Y.toFixed(2));
  
//       this.setProperty('--bY', (80 - (X/4).toFixed(2)) + '%');
//       this.setProperty('--bX', (50 - (Y/4).toFixed(2)) + '%');
//     }
  
//     handleMouseEnter() {
//       this.mouseOnComponent = true;
//       this.container.classList.add("container--active");
//     }
  
//     handleMouseLeave() {
//       this.mouseOnComponent = false;
//       this.defaultStates();
//     }
  
//     defaultStates() {
//       this.container.classList.remove("container--active");
//       this.setProperty('--rY', 0);
//       this.setProperty('--rX', 0);
//       this.setProperty('--bY', '80%');
//       this.setProperty('--bX', '50%');
//     }
  
//     setProperty(p, v) {
//       return this.container.style.setProperty(p, v);
//     }
  
//     init() {
//       this.element.addEventListener('mousemove', this.handleMouseMove);
//       this.element.addEventListener('mouseenter', this.handleMouseEnter);
//       this.element.addEventListener('mouseleave', this.handleMouseLeave);
//     }
  
//   }
  
//   const $ = e => document.querySelector(e);
  
//   const wrap1 = new parallaxTiltEffect({
//     element: $('.wrap--1'),
//     tiltEffect: 'reverse'
//   });
  
//   const wrap2 = new parallaxTiltEffect({
//     element: $('.wrap--2'),
//     tiltEffect: 'normal'
//   });
  
//   const wrap3 = new parallaxTiltEffect({
//     element: $('.wrap--3'),
//     tiltEffect: 'reverse'
//   });

  // script.js

  $(document).ready(function() {
    var paragraphs = [
        "Try to learn & listen every topics as much as possible which has been taught in class. Along with that Regarding Branch change be Serious from starting and Understand the concepts well that's enough for it & Give your best in the exams. That's how you can also achieve a Department Change from Mech to CSE!<br/> MAINAK JANA(CSE k22)",
        "In chemical engineering, there is a greater emphasis on subjects such as Thermodynamics, Heat Transfer, Fluid Mechanics, and Chemical Process Calculation compared to Physics. Most often, one has to rely on professor's notes or resources from platforms like YouTube for learning. The difficulty level is somewhat easier. The professors are decent, and they are not overly strict.<br/> AKSHAY GUPTA(CHEM k22)",
        "In MNCs, there's plenty of time as there are no assignments or irrelevant subjects. This realization came during the second and third semesters, especially after physics lab and classes. Math seemed easy and less time-consuming compared to the challenges faced while writing practical reports and giving vivas. When it comes to computing subjects, consider starting with either C++ or Java.<br/> HARSH RAJ(MnC k22)",
        // Add more content as needed
    ];

    var currentParagraph = 0;

    function slideContent() {
        $("#para .Para").slideUp(500, function() {
            // Change the content of the paragraph
            $(this).html(paragraphs[currentParagraph]);

            // Increment the currentParagraph counter
            currentParagraph++;

            // Reset the counter to 0 if it exceeds the number of paragraphs
            if (currentParagraph >= paragraphs.length) {
                currentParagraph = 0;
            }

            // Slide down to reveal the updated content
            $(this).slideDown(500);
        });
    }

    // Set an interval to call the slideContent function every few seconds
    setInterval(slideContent, 17000); // Change 3000 to the desired interval in milliseconds
});