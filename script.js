anime({
    targets: '#svg-logo path',
    duration: 3000,
    loop:false,
    strokeDasharray: [anime.setDashoffset, anime.setDashoffset], 
    strokeDashoffset: [anime.setDashoffset, 0],
    direction: 'normal',
    easing: 'easeInOutQuad'
})