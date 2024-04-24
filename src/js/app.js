import Popover from "./popover";

document.addEventListener('DOMContentLoaded', () => {
	
    const popover = new Popover();
	
    const btn = document.querySelector('.btn');
    popover.createPopover(btn);
	
    btn.addEventListener('click', () => {
        popover.togglePopover();
    });

})