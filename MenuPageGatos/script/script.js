
document.addEventListener("DOMContentLoaded", function() {
	const carrosselItems = document.querySelectorAll('.carousel .img img, .carousel2 .img2 img');
	carrosselItems.forEach(item => {
		item.style.cursor = 'pointer'; 
		item.addEventListener('click', function() {
			alert("Imagem clicada!: " + this.src); 
		});
	});
});


document.addEventListener("DOMContentLoaded", function() { 
	const carousel = document.querySelector(".carousel"); 
	const arrowBtns = document.querySelectorAll(".wrapper i"); 
	const wrapper = document.querySelector(".wrapper"); 

	const firstCard = carousel.querySelector(".card"); 
	const firstCardWidth = firstCard.offsetWidth; 

	let isDragging = false, 
		startX, 
		startScrollLeft, 
		timeoutId; 

	const dragStart = (e) => { 
		isDragging = true; 
		carousel.classList.add("dragging"); 
		startX = e.pageX; 
		startScrollLeft = carousel.scrollLeft; 
	}; 

	const dragging = (e) => { 
		if (!isDragging) return; 
	
		// Calculate the new scroll position 
		const newScrollLeft = startScrollLeft - (e.pageX - startX); 
	
		// Check if the new scroll position exceeds 
		// the carousel boundaries 
		if (newScrollLeft <= 0 || newScrollLeft >= 
			carousel.scrollWidth - carousel.offsetWidth) { 
			
			// If so, prevent further dragging 
			isDragging = false; 
			return; 
		} 
	
		// Otherwise, update the scroll position of the carousel 
		carousel.scrollLeft = newScrollLeft; 
	}; 

	const dragStop = () => { 
		isDragging = false; 
		carousel.classList.remove("dragging"); 
	}; 

	const autoPlay = () => { 
	
		// Return if window is smaller than 800 
		if (window.innerWidth < 800) return; 
		
		// Calculate the total width of all cards 
		const totalCardWidth = carousel.scrollWidth; 
		
		// Calculate the maximum scroll position 
		const maxScrollLeft = totalCardWidth - carousel.offsetWidth; 
		
		// If the carousel is at the end, stop autoplay 
		if (carousel.scrollLeft >= maxScrollLeft) return; 
		
		// Autoplay the carousel after every 2500ms 
		timeoutId = setTimeout(() => 
			carousel.scrollLeft += firstCardWidth, 2500); 
	}; 

	carousel.addEventListener("mousedown", dragStart); 
	carousel.addEventListener("mousemove", dragging); 
	document.addEventListener("mouseup", dragStop); 
	wrapper.addEventListener("mouseenter", () => 
		clearTimeout(timeoutId)); 
	wrapper.addEventListener("mouseleave", autoPlay); 

	// Add event listeners for the arrow buttons to 
	// scroll the carousel left and right 
	arrowBtns.forEach(btn => { 
		btn.addEventListener("click", () => { 
			carousel.scrollLeft += btn.id === "left" ? 
				-firstCardWidth : firstCardWidth; 
		}); 
	});
	
	
}); 

/*==============================================================================*/

document.addEventListener("DOMContentLoaded", function() {
	// Script original com as classes novas
	const carousel2 = document.querySelector(".carousel2"); 
	const arrowBtns2 = document.querySelectorAll(".wrapper2 i"); 
	const wrapper2 = document.querySelector(".wrapper2"); 

	const firstCard2 = carousel2.querySelector(".card2"); 
	const firstCardWidth2 = firstCard2.offsetWidth; 

	let isDragging2 = false, 
		startX2, 
		startScrollLeft2, 
		timeoutId2; 

	const dragStart2 = (e) => { 
		isDragging2 = true; 
		carousel2.classList.add("dragging"); 
		startX2 = e.pageX; 
		startScrollLeft2 = carousel2.scrollLeft; 
	}; 

	const dragging2 = (e) => { 
		if (!isDragging2) return; 
	
		// Calculate the new scroll position 
		const newScrollLeft2 = startScrollLeft2 - (e.pageX - startX2); 
	
		// Check if the new scroll position exceeds 
		// the carousel boundaries 
		if (newScrollLeft2 <= 0 || newScrollLeft2 >= 
			carousel2.scrollWidth - carousel2.offsetWidth) { 
			
			// If so, prevent further dragging 
			isDragging2 = false; 
			return; 
		} 
	
		// Otherwise, update the scroll position of the carousel 
		carousel2.scrollLeft = newScrollLeft2; 
	}; 

	const dragStop2 = () => { 
		isDragging2 = false; 
		carousel2.classList.remove("dragging"); 
	}; 

	const autoPlay2 = () => { 
	
		// Return if window is smaller than 800 
		if (window.innerWidth < 800) return; 
		
		// Calculate the total width of all cards 
		const totalCardWidth2 = carousel2.scrollWidth; 
		
		// Calculate the maximum scroll position 
		const maxScrollLeft2 = totalCardWidth2 - carousel2.offsetWidth; 
		
		// If the carousel is at the end, stop autoplay 
		if (carousel2.scrollLeft >= maxScrollLeft2) return; 
		
		// Autoplay the carousel after every 2500ms 
		timeoutId2 = setTimeout(() => 
			carousel2.scrollLeft += firstCardWidth2, 2500); 
	}; 

	carousel2.addEventListener("mousedown", dragStart2); 
	carousel2.addEventListener("mousemove", dragging2); 
	document.addEventListener("mouseup", dragStop2); 
	wrapper2.addEventListener("mouseenter", () => 
		clearTimeout(timeoutId2)); 
	wrapper2.addEventListener("mouseleave", autoPlay2); 

	// Add event listeners for the arrow buttons to 
	// scroll the carousel left and right 
	arrowBtns2.forEach(btn => { 
		btn.addEventListener("click", () => { 
			carousel2.scrollLeft += btn.id === "left2" ? 
				-firstCardWidth2 : firstCardWidth2; 
		}); 
	});

	// Script duplicado para as classes originais
	const carousel = document.querySelector(".carousel"); 
	const arrowBtns = document.querySelectorAll(".wrapper i"); 
	const wrapper = document.querySelector(".wrapper"); 

	const firstCard = carousel.querySelector(".card"); 
	const firstCardWidth = firstCard.offsetWidth; 

	let isDragging = false, 
		startX, 
		startScrollLeft, 
		timeoutId; 

	const dragStart = (e) => { 
		isDragging = true; 
		carousel.classList.add("dragging"); 
		startX = e.pageX; 
		startScrollLeft = carousel.scrollLeft; 
	}; 

	const dragging = (e) => { 
		if (!isDragging) return; 
	
		// Calculate the new scroll position 
		const newScrollLeft = startScrollLeft - (e.pageX - startX); 
	
		// Check if the new scroll position exceeds 
		// the carousel boundaries 
		if (newScrollLeft <= 0 || newScrollLeft >= 
			carousel.scrollWidth - carousel.offsetWidth) { 
			
			// If so, prevent further dragging 
			isDragging = false; 
			return; 
		} 
	
		// Otherwise, update the scroll position of the carousel 
		carousel.scrollLeft = newScrollLeft; 
	}; 

	const dragStop = () => { 
		isDragging = false; 
		carousel.classList.remove("dragging"); 
	}; 

	const autoPlay = () => { 
	
		// Return if window is smaller than 800 
		if (window.innerWidth < 800) return; 
		
		// Calculate the total width of all cards 
		const totalCardWidth = carousel.scrollWidth; 
		
		// Calculate the maximum scroll position 
		const maxScrollLeft = totalCardWidth - carousel.offsetWidth; 
		
		// If the carousel is at the end, stop autoplay 
		if (carousel.scrollLeft >= maxScrollLeft) return; 
		
		// Autoplay the carousel after every 2500ms 
		timeoutId = setTimeout(() => 
			carousel.scrollLeft += firstCardWidth, 2500); 
	}; 

	carousel.addEventListener("mousedown", dragStart); 
	carousel.addEventListener("mousemove", dragging); 
	document.addEventListener("mouseup", dragStop); 
	wrapper.addEventListener("mouseenter", () => 
		clearTimeout(timeoutId)); 
	wrapper.addEventListener("mouseleave", autoPlay); 

	// Add event listeners for the arrow buttons to 
	// scroll the carousel left and right 
	arrowBtns.forEach(btn => { 
		btn.addEventListener("click", () => { 
			carousel.scrollLeft += btn.id === "left" ? 
				-firstCardWidth : firstCardWidth; 
		}); 
	});
});
