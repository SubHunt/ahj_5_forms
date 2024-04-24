export default class Popover {
    constructor() {
	}	
		

    createPopover(element) {
        const popoverElement = document.createElement('div');
		popoverElement.className = 'popover';
  
		const h = document.createElement('h3');
		h.className = 'popover-header';
		h.textContent = 'Popover title';
		const popoverText = document.createElement('div');
		popoverText.className = 'popover-body';
		popoverText.textContent = 'And here`s some amazing content. It`s very engaging. Right?';
		
        popoverElement.append(h);
		popoverElement.append(popoverText);

        document.body.appendChild(popoverElement);

        const { left, top, height } = element.getBoundingClientRect();
        popoverElement.style.left = left + element.offsetWidth / 2 - popoverElement.offsetWidth / 2 + 'px';
        popoverElement.style.top = top - height - popoverElement.offsetHeight / 2 + 'px';

    }


    togglePopover() {
        const popoverElement = document.querySelector('.popover');
        popoverElement.classList.toggle('visible')
    }
}