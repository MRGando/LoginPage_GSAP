gsap.registerPlugin(ScrollTrigger);
          gsap.from(".content",{
          scrollTrigger:{
                    trigger:".content",
                    toggleActions:"restart none none none"
          },
          opacity:0,
          y:200,
          duration:1
          });