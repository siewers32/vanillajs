function activateNav(el) {
    const navlist = el.parentElement.parentElement;
    for (let i = 0; i < navlist.children.length; i++) {
        if (navlist.children[i].classList.contains('active')) {
            navlist.children[i].classList.remove('active')
        }
    }
    el.parentElement.classList.add('active');
}

