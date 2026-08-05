const iamText = document.querySelector('.section2 .centertitle');
const defaultIamText = iamText?.innerHTML || 'hover over <br> an image!';

const setPosition = (target, x, y) => {
    target.dataset.x = x;
    target.dataset.y = y;
    target.style.transform = `translate(${x}px, ${y}px)`;
};

const setIamText = text => {
    if (iamText) {
        iamText.innerHTML = text;
    };
};

const resetIamText = () => setIamText(defaultIamText);

interact('.section2 .iamImage')
    .draggable({
        listeners: {
            move(event) {
                const target = event.target;
                const x = (parseFloat(target.dataset.x) || 0) + event.dx;
                const y = (parseFloat(target.dataset.y) || 0) + event.dy;

                setPosition(target, x, y);
                target.style.zIndex = 1000;
            },
            end(event) {
                event.target.style.zIndex = '';
            },
        },
    });

document.querySelectorAll('.section2 .iamImage').forEach(image => {
    image.addEventListener('pointerenter', () => setIamText(image.dataset.hoverText || defaultIamText));
    image.addEventListener('pointerleave', resetIamText);
});