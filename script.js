/* ==========================================================================
   Hotel Annapurna Residence - Core JavaScript Logic
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  
  // Set date bounds for check-in and check-out to prevent booking in the past
  const today = new Date().toISOString().split("T")[0];
  const checkInInput = document.getElementById("check-in");
  const checkOutInput = document.getElementById("check-out");
  
  if (checkInInput && checkOutInput) {
    checkInInput.min = today;
    checkOutInput.min = today;
    
    // Set default dates: check-in tomorrow, check-out in 2 days
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dayAfter = new Date();
    dayAfter.setDate(dayAfter.getDate() + 2);
    
    checkInInput.value = tomorrow.toISOString().split("T")[0];
    checkOutInput.value = dayAfter.toISOString().split("T")[0];
    
    checkInInput.addEventListener("change", () => {
      checkOutInput.min = checkInInput.value;
      if (checkOutInput.value < checkInInput.value) {
        checkOutInput.value = checkInInput.value;
      }
    });
  }

  // Header Scroll Interaction
  const header = document.getElementById("site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      header.classList.add("glass-header");
      header.classList.remove("bg-transparent");
    } else {
      header.classList.remove("glass-header");
      header.classList.add("bg-transparent");
    }
  });

  // Mobile Menu Drawer Controls
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", !isExpanded);
    mobileMenu.classList.toggle("hidden");
    
    // Animated slide down
    setTimeout(() => {
      mobileMenu.classList.toggle("scale-y-0");
      mobileMenu.classList.toggle("scale-y-100");
    }, 10);
  });

  // Close Mobile Menu on link click
  const mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.add("scale-y-0");
      mobileMenu.classList.remove("scale-y-100");
    });
  });

  // GSAP Animations (Check if GSAP library loaded successfully)
  if (typeof gsap !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Load Animations
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.to(".hero-subtitle", { opacity: 1, y: 0, duration: 0.8, delay: 0.2 })
      .to(".hero-title", { opacity: 1, y: 0, duration: 1 }, "-=0.6")
      .to(".hero-text", { opacity: 1, y: 0, duration: 0.8 }, "-=0.7")
      .to(".hero-buttons", { opacity: 1, y: 0, duration: 0.8 }, "-=0.6");

    // Scroll Trigger Reveals
    gsap.from(".scroll-reveal-left", {
      scrollTrigger: {
        trigger: ".scroll-reveal-left",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(".scroll-reveal-right", {
      scrollTrigger: {
        trigger: ".scroll-reveal-right",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Amenities Cards Reveal
    gsap.from(".amenity-card", {
      scrollTrigger: {
        trigger: "#amenities",
        start: "top 75%",
        toggleActions: "play none none none"
      },
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "back.out(1.2)"
    });
  }

  // Room Inventory Array
  const rooms = [
    {
      id: "non-ac",
      name: "Deluxe Non-AC Room",
      type: "Budget Comfort",
      price: 1200,
      image: "https://ik.imagekit.io/hotelzifyprod/970bc32c-8949-4282-bc6b-fb2bc07498ef.jpg",
      size: 180,
      capacity: "2 Adults",
      bed: "Double Bed",
      features: [
        { name: "Free Wi-Fi", icon: "wifi" },
        { name: "Attached Bath", icon: "bathtub" },
        { name: "Flat-screen TV", icon: "tv" },
        { name: "Room Service", icon: "room_service" }
      ],
      description: "Our Deluxe Non-AC room offers a clean, well-ventilated, and budget-friendly sanctuary featuring premium bedding, attached modern bathroom with shower, and 24/7 power backup."
    },
    {
      id: "ac",
      name: "Deluxe AC Room",
      type: "Premium Cool",
      price: 1800,
      image: "https://ik.imagekit.io/hotelzifyprod/6f7d5558-6b3d-4c50-b492-72fb8259ad38.jpg",
      size: 180,
      capacity: "2 Adults",
      bed: "Double Bed",
      features: [
        { name: "Air Conditioning", icon: "ac_unit" },
        { name: "Free Wi-Fi", icon: "wifi" },
        { name: "Attached Bath", icon: "bathtub" },
        { name: "Flat-screen TV", icon: "tv" }
      ],
      description: "Experience premium comfort with air conditioning to beat the Maharashtra summer. Features a cozy queen double bed, high-speed Wi-Fi, attached geyser, and cable TV."
    }
  ];

  // Render Room Cards dynamically
  const roomsGrid = document.getElementById("rooms-grid");
  if (roomsGrid) {
    roomsGrid.innerHTML = rooms.map(room => `
      <div class="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-luxury border border-outline-variant/30 flex flex-col h-full transform hover:-translate-y-1 transition-all duration-300">
        <!-- Room Image Container -->
        <div class="relative h-[280px] overflow-hidden img-zoom-container cursor-pointer">
          <img src="${room.image}" alt="${room.name}" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
          <div class="absolute top-4 left-4 bg-secondary text-on-secondary px-3 py-1.5 font-sans font-semibold text-xs rounded uppercase tracking-wide">
            ${room.type}
          </div>
          <div class="absolute bottom-4 right-4 bg-primary/95 text-white px-4 py-2 font-serif font-bold text-sm rounded shadow">
            ₹${room.price} <span class="text-xs text-white/70 font-sans font-normal">/ Night</span>
          </div>
        </div>
        
        <!-- Room Info -->
        <div class="p-6 md:p-8 flex flex-col flex-1 space-y-6">
          <div class="space-y-2">
            <h3 class="font-serif font-bold text-xl md:text-2xl text-primary">${room.name}</h3>
            <p class="font-sans text-xs text-outline font-semibold tracking-wide uppercase">
              ${room.size} sq.ft. &bull; ${room.capacity} &bull; ${room.bed}
            </p>
          </div>
          
          <p class="font-sans text-on-surface-variant text-sm leading-relaxed flex-1">
            ${room.description}
          </p>
          
          <!-- Features -->
          <div class="flex flex-wrap gap-4 pt-4 border-t border-outline-variant/30">
            ${room.features.map(f => `
              <div class="flex items-center gap-1.5 text-xs text-on-surface-variant font-medium">
                <span class="material-symbols-outlined text-[18px] text-secondary">${f.icon}</span>
                <span>${f.name}</span>
              </div>
            `).join("")}
          </div>
          
          <!-- Action Button -->
          <button onclick="triggerBookingSearch('${room.id}')" class="w-full border border-primary hover:border-secondary hover:bg-secondary text-primary hover:text-on-secondary py-3 rounded-lg font-sans font-semibold text-xs tracking-widest uppercase transition-all duration-300">
            Book Accommodation
          </button>
        </div>
      </div>
    `).join("");
  }

  // Booking Results & Availability Check Simulation
  const searchRoomsBtn = document.getElementById("search-rooms-btn");
  const bookingModal = document.getElementById("booking-modal");
  const closeModal = document.getElementById("close-modal");
  const modalDates = document.getElementById("modal-dates");
  const modalBody = document.getElementById("modal-body");

  // Open helper triggered from individual room cards
  window.triggerBookingSearch = (roomId) => {
    const select = document.getElementById("room-select");
    if (select) {
      select.value = roomId;
    }
    const widgetSection = document.getElementById("booking-section");
    if (widgetSection) {
      widgetSection.scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(() => {
      if (searchRoomsBtn) searchRoomsBtn.click();
    }, 500);
  };

  if (searchRoomsBtn && bookingModal && closeModal) {
    searchRoomsBtn.addEventListener("click", () => {
      const checkInVal = checkInInput.value;
      const checkOutVal = checkOutInput.value;
      const roomTypeSelection = document.getElementById("room-select").value;

      if (!checkInVal || !checkOutVal) {
        showToast("Please select check-in and check-out dates.", "error");
        return;
      }

      if (checkOutVal < checkInVal) {
        showToast("Check-out date cannot be earlier than check-in date.", "error");
        return;
      }

      // Calculate total nights
      const date1 = new Date(checkInVal);
      const date2 = new Date(checkOutVal);
      const diffTime = Math.abs(date2 - date1);
      const diffNights = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;

      // Filter room availability based on check
      let availableRooms = rooms;
      if (roomTypeSelection !== "any") {
        availableRooms = rooms.filter(r => r.id === roomTypeSelection);
      }

      // Update Dates details in Modal
      const options = { month: 'short', day: 'numeric', year: 'numeric' };
      const checkInStr = date1.toLocaleDateString('en-US', options);
      const checkOutStr = date2.toLocaleDateString('en-US', options);
      modalDates.innerText = `${checkInStr} - ${checkOutStr} (${diffNights} Night${diffNights > 1 ? 's' : ''})`;

      // Render availability results in Modal
      modalBody.innerHTML = availableRooms.map(room => {
        const totalCost = room.price * diffNights;
        return `
          <div class="booking-result-card bg-surface-container-low p-5 rounded-2xl border border-outline-variant/40 flex flex-col sm:flex-row gap-5 items-center">
            <img src="${room.image}" alt="${room.name}" class="w-24 h-24 object-cover rounded-xl border border-outline-variant/20 shadow-sm" />
            <div class="flex-1 space-y-2 text-center sm:text-left">
              <h4 class="font-serif font-bold text-base md:text-lg text-primary">${room.name}</h4>
              <p class="font-sans text-xs text-on-surface-variant font-medium">
                Double bed accommodation &bull; AC & amenities included
              </p>
              <div class="flex flex-wrap justify-center sm:justify-start gap-3 pt-1">
                <span class="inline-flex items-center text-[10px] text-green-700 bg-green-50 px-2 py-0.5 rounded font-semibold uppercase border border-green-200">Available</span>
                <span class="inline-flex items-center text-[10px] text-outline">₹${room.price}/night</span>
              </div>
            </div>
            <div class="text-center sm:text-right border-t sm:border-t-0 sm:border-l border-outline-variant/30 pt-4 sm:pt-0 sm:pl-6 min-w-[140px] space-y-3">
              <div class="space-y-0.5">
                <span class="block text-[10px] text-outline uppercase tracking-wider font-semibold">Total Price</span>
                <span class="block font-serif font-bold text-xl text-primary">₹${totalCost}</span>
                <span class="block text-[9px] text-outline">Excluding GST</span>
              </div>
              <button onclick="confirmBooking('${room.name}', '${checkInVal}', '${checkOutVal}', ${totalCost})" class="w-full bg-secondary hover:bg-primary text-on-secondary hover:text-white px-4 py-2.5 rounded-lg font-sans font-bold text-xs tracking-wider uppercase transition-colors">
                Book Direct
              </button>
            </div>
          </div>
        `;
      }).join("");

      // Open Modal
      bookingModal.classList.remove("hidden");
      setTimeout(() => {
        bookingModal.classList.remove("opacity-0");
        bookingModal.querySelector(".transform").classList.remove("scale-95");
      }, 50);
    });

    closeModal.addEventListener("click", hideBookingModal);
    
    // Close modal when clicking outside the box
    bookingModal.addEventListener("click", (e) => {
      if (e.target === bookingModal) hideBookingModal();
    });
  }

  function hideBookingModal() {
    bookingModal.classList.add("opacity-0");
    bookingModal.querySelector(".transform").classList.add("scale-95");
    setTimeout(() => {
      bookingModal.classList.add("hidden");
    }, 300);
  }

  // Booking confirmation simulator
  window.confirmBooking = (roomName, inDate, outDate, cost) => {
    hideBookingModal();
    
    // Trigger successful inquiry toast
    showToast(`Inquiry for ${roomName} registered! Our reception desk will call you to confirm.`, "success");
    
    // Scroll to contact form and populate details
    const messageField = document.getElementById("message");
    const topicField = document.getElementById("inquiry-type");
    if (messageField && topicField) {
      topicField.value = "rooms";
      messageField.value = `Hello, I would like to confirm my room booking for the "${roomName}" from ${inDate} to ${outDate}. Total estimated room cost is ₹${cost}. Please call me back.`;
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Testimonials Slider Logic
  const testimonials = [
    {
      stars: 5,
      quote: "Hotel Annapurna Residence offers exceptionally clean and cool AC rooms. We stayed there for a family wedding, and the banquet facilities were massive. Secure parking and backup generator were super helpful.",
      author: "Shubham Patil, Local Business Owner"
    },
    {
      stars: 5,
      quote: "Best banquet hall in Chalisgaon! The decorations and space were perfect for our function. The room service is quick, and the location is near the main road which makes transit very simple.",
      author: "Rajesh Shinde, Wedding Event Guest"
    },
    {
      stars: 5,
      quote: "Budget luxury hotel with very polite staff. The rooms are neat, geyser was working fine, and the power backup generator kicked in within seconds during load shedding. Highly recommended in Jalgaon area.",
      author: "Amit Mehta, Corporate Traveler"
    }
  ];

  let currentTestimonialIdx = 0;
  const testContainer = document.getElementById("testimonial-container");
  const testDots = document.getElementById("testimonial-dots");
  const prevTestBtn = document.getElementById("prev-test");
  const nextTestBtn = document.getElementById("next-test");

  function renderTestimonial(idx) {
    if (!testContainer) return;
    const test = testimonials[idx];
    
    testContainer.style.opacity = "0";
    setTimeout(() => {
      testContainer.innerHTML = `
        <div class="space-y-6">
          <div class="flex justify-center gap-1.5 text-secondary">
            ${Array(test.stars).fill().map(() => `<span class="material-symbols-outlined icon-filled">star</span>`).join("")}
          </div>
          <blockquote class="font-serif italic text-lg md:text-xl text-primary leading-relaxed max-w-2xl mx-auto">
            "${test.quote}"
          </blockquote>
          <cite class="block font-sans font-bold text-xs tracking-widest text-outline uppercase not-italic">
            &mdash; ${test.author}
          </cite>
        </div>
      `;
      testContainer.style.opacity = "1";
      
      // Update active dot
      const dots = testDots.querySelectorAll(".dot");
      dots.forEach((dot, dIdx) => {
        if (dIdx === idx) {
          dot.classList.add("bg-secondary", "w-6");
          dot.classList.remove("bg-outline-variant", "w-2.5");
        } else {
          dot.classList.remove("bg-secondary", "w-6");
          dot.classList.add("bg-outline-variant", "w-2.5");
        }
      });
    }, 200);
  }

  // Setup slider dots
  if (testDots) {
    testDots.innerHTML = testimonials.map((_, idx) => `
      <button class="dot h-2.5 w-2.5 rounded-full bg-outline-variant transition-all duration-300 focus:outline-none" aria-label="Go to Slide ${idx+1}"></button>
    `).join("");
    
    const dotsList = testDots.querySelectorAll(".dot");
    dotsList.forEach((dot, idx) => {
      dot.addEventListener("click", () => {
        currentTestimonialIdx = idx;
        renderTestimonial(idx);
      });
    });
  }

  // Next / Prev listeners
  if (prevTestBtn && nextTestBtn) {
    prevTestBtn.addEventListener("click", () => {
      currentTestimonialIdx = (currentTestimonialIdx - 1 + testimonials.length) % testimonials.length;
      renderTestimonial(currentTestimonialIdx);
    });
    
    nextTestBtn.addEventListener("click", () => {
      currentTestimonialIdx = (currentTestimonialIdx + 1) % testimonials.length;
      renderTestimonial(currentTestimonialIdx);
    });
  }

  // Render initial slide
  renderTestimonial(0);

  // Autoplay Slider every 6 seconds
  setInterval(() => {
    if (testContainer) {
      currentTestimonialIdx = (currentTestimonialIdx + 1) % testimonials.length;
      renderTestimonial(currentTestimonialIdx);
    }
  }, 6000);

  // FAQ Accordion Toggle Logic
  const faqTriggers = document.querySelectorAll(".faq-trigger");
  faqTriggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
      const faqItem = trigger.parentElement;
      const content = faqItem.querySelector(".faq-content");
      const icon = trigger.querySelector(".material-symbols-outlined");
      const isExpanded = trigger.getAttribute("aria-expanded") === "true";
      
      // Toggle expanded state
      trigger.setAttribute("aria-expanded", !isExpanded);
      content.classList.toggle("hidden");
      icon.classList.toggle("rotate-180");
    });
  });

  // Contact Form Validations
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      let isValid = true;
      
      // Fields
      const nameVal = document.getElementById("name").value.trim();
      const phoneVal = document.getElementById("phone").value.trim();
      const emailVal = document.getElementById("email").value.trim();
      const messageVal = document.getElementById("message").value.trim();
      const inquiryType = document.getElementById("inquiry-type").value;
      
      // Errors Elements
      const nameErr = document.getElementById("name-error");
      const phoneErr = document.getElementById("phone-error");
      const emailErr = document.getElementById("email-error");
      const msgErr = document.getElementById("message-error");
      
      // Validate Name
      if (!nameVal) {
        nameErr.classList.remove("hidden");
        isValid = false;
      } else {
        nameErr.classList.add("hidden");
      }
      
      // Validate Phone (10 digits only)
      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phoneVal || !phoneRegex.test(phoneVal)) {
        phoneErr.classList.remove("hidden");
        isValid = false;
      } else {
        phoneErr.classList.add("hidden");
      }
      
      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailVal || !emailRegex.test(emailVal)) {
        emailErr.classList.remove("hidden");
        isValid = false;
      } else {
        emailErr.classList.add("hidden");
      }
      
      // Validate Message
      if (!messageVal) {
        msgErr.classList.remove("hidden");
        isValid = false;
      } else {
        msgErr.classList.add("hidden");
      }
      
      if (isValid) {
        // Build success feedback toast based on inquiry type
        let successMsg = "Thank you for reaching out! Our reception desk will contact you shortly.";
        if (inquiryType === "banquet") {
          successMsg = "Your Banquet Hall inquiry has been successfully sent! Our events team will contact you to check slot availability.";
        } else if (inquiryType === "rooms") {
          successMsg = "Your room reservation request has been received. We will reach you to finalize details.";
        }
        
        showToast(successMsg, "success");
        contactForm.reset();
      } else {
        showToast("Please correct the errors in the form.", "error");
      }
    });
  }

  // Custom Toast Notification System
  function showToast(message, type = "success") {
    const container = document.getElementById("toast-container");
    if (!container) return;
    
    // Icon selection
    let icon = "check_circle";
    let bgClass = "bg-green-600";
    if (type === "error") {
      icon = "error";
      bgClass = "bg-red-600";
    } else if (type === "info") {
      icon = "info";
      bgClass = "bg-blue-600";
    }
    
    const toast = document.createElement("div");
    toast.className = `toast-animate flex items-center gap-3 ${bgClass} text-white px-5 py-4 rounded-xl shadow-luxury max-w-md w-full pointer-events-auto`;
    toast.role = "alert";
    
    toast.innerHTML = `
      <span class="material-symbols-outlined text-xl flex-shrink-0">${icon}</span>
      <p class="font-sans text-xs md:text-sm font-semibold flex-1 leading-snug">${message}</p>
      <button class="text-white/70 hover:text-white focus:outline-none ml-2" onclick="this.parentElement.remove()" aria-label="Dismiss Alert">
        <span class="material-symbols-outlined text-[18px]">close</span>
      </button>
    `;
    
    container.appendChild(toast);
    
    // Auto remove toast after 5 seconds
    setTimeout(() => {
      toast.classList.add("opacity-0", "translate-y-2");
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 5000);
  }
  
  // Make toast system globally accessible
  window.showToast = showToast;
});
