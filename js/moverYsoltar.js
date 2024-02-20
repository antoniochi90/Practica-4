const pcContainer = document.querySelectorAll('pc-container');

pcContainer.addEventListener('mousedown', function(event) {
    let shiftX = event.clientX - pcContainer.getBoundingClientRect().left;
    let shiftY = event.clientY - pcContainer.getBoundingClientRect().top;

    pcContainer.style.position = 'absolute';
    pcContainer.style.zIndex = 1000;
    document.body.append(pcContainer);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        pcContainer.style.left = pageX - shiftX + 'px';
        pcContainer.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    pcContainer.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        pcContainer.onmouseup = null;
    };
});

pcContainer.ondragstart = function() {
    return false;
};