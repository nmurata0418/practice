const child = document.querySelector('.child')
const cb = function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('inview')
        } else {
            entry.target.classList.remove('inview')
        }
    })
    // alert('intersections')
}
const option = {
    rootMargin: "-100px 0px"
}
const io = new IntersectionObserver(cb, option)

io.observe(child)
// io.observe(child1)
// io.observe(child2)
