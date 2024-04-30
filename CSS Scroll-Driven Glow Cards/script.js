import gsap from 'https://cdn.skypack.dev/gsap@3.12.0' 
// Import GSAP library for animation

import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap@3.12.0/ScrollTrigger' 
// Import ScrollTrigger plugin from GSAP for scroll-based animations

if (!CSS.supports('animation-timeline: scroll()')) {
  // Check if the browser does not support CSS animation timelines based on scroll
  
  gsap.registerPlugin(ScrollTrigger) 
  // Register the ScrollTrigger plugin for scroll-based animations

  gsap.set('section', { '--base': 0 }) 
  // Initialize a CSS custom property "--base" with value 0 on all "section" elements

  gsap.to('section', {
    '--base': 320, // Target value for "--base" property during the animation
    ease: 'none', // No easing applied to the animation
    scrollTrigger: {
      horizontal: true, // Horizontal scrolling
      scrub: true, // Allows smooth scrolling interaction (scrubbing)
      scroller: 'ul', // The container that controls the scrolling
    },
  })

  const ITEMS = document.querySelectorAll('li') 
  // Get all list items within the document

  ITEMS.forEach((ITEM) => { 
    // Iterate through each list item
    
    gsap
      .timeline() // Create a timeline for the animations
      .set(ITEM, { '--sat': 0 }) 
      // Set initial saturation to 0 for this item

      .to(ITEM, {
        '--sat': 100, 
        // Change the saturation to 100 during the scroll animation
        scrollTrigger: {
          trigger: ITEM, 
          // Element that triggers the animation (this specific list item)
          start: 'right 75%', 
          // Start animation when the right side of the item is at 75% of the viewport
          end: 'center center', 
          // End animation when the center of the item is at the center of the viewport
          horizontal: true, 
          // The scroll direction is horizontal
          scrub: true, 
          // Smooth scrubbing effect for the animation
          scroller: 'ul', 
          // The scroller element is the "ul" containing the list items
        },
      })

      .fromTo(
        ITEM,
        { '--sat': 100 }, 
        // Initial state with saturation at 100
        {
          '--sat': 0, 
          // Final state with saturation reduced back to 0
          scrollTrigger: {
            trigger: ITEM, 
            // Trigger on this list item
            end: 'left 25%', 
            // End animation when the left side of the item is at 25% of the viewport
            start: 'center center', 
            // Start animation when the center of the item is at the center of the viewport
            horizontal: true, 
            // The scroll direction is horizontal
            scrub: true, 
            // Smooth scrubbing interaction
            scroller: 'ul', 
            // The scroller controlling the scroll animations
          },
        }
      )
  })
}


const syncPointer = ({ x, y }) => { 
  // Function to update CSS custom properties based on pointer movement
  document.documentElement.style.setProperty('--px', x.toFixed(2)) 
  // Set "--px" to the X-coordinate of the pointer, formatted with 2 decimal places

  document.documentElement.style.setProperty('--py', y.toFixed(2)) 
  // Set "--py" to the Y-coordinate of the pointer, formatted with 2 decimal places
}

document.body.addEventListener('pointermove', syncPointer) 
// Add an event listener to the body to track pointer movement and call the syncPointer function
