class Pacman {
    constructor(xPos = 520.1000366210938, mouth = 'open', direction = 'left') {
        (this.xPos = xPos), (this.mouth = mouth), (this.direction = direction);
    }

    render() {
        this.pacman = this.elementFromHTML(
            `<div class="entity entity--pac pacboy-active-light"></div>`
        );
        document.addEventListener('keyup', (event) => {
            if (event.code === 'ArrowRight') {
                this.move('right');
                console.log('right');
            }
        });
    }

    mount() {
        this.render();
        this.update();
        return this.pacman;
    }

    update() {
        this.pacman.style.left = `${this.xPos}px`;
        console.log('updated');
        console.log(this.xPos);
        console.log(this.pacman);
        console.log(this.pacman.style.left);
    }

    move(direction) {
        if (direction === 'right') {
            this.xPos += 85;
        }
        return this.mount();
    }

    elementFromHTML(html, parent = 'div') {
        const div = document.createElement(parent);
        div.innerHTML = html;
        return div.firstChild;
    }
}
