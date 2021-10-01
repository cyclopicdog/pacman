const TILE_SIZE = 85;

class Pacman {
    constructor(xPos = 0, yPos = 0, mouth = 'open', direction = 'left') {
        (this.xPos = xPos),
            (this.yPos = yPos),
            (this.mouth = mouth),
            (this.direction = direction);
    }

    render() {
        this.pacman = this.elementFromHTML(
            `<div class="entity entity--pac pacboy-active-light">`
        );
        document.addEventListener('keyup', (event) => {
            if (event.code === 'ArrowRight') {
                this.move('right');
                console.log('right');
            }
        });
        document.addEventListener('keyup', (event) => {
            if (event.code === 'ArrowLeft') {
                this.move('left');
                console.log('left');
            }
        });
        document.addEventListener('keyup', (event) => {
            if (event.code === 'ArrowUp') {
                this.move('up');
                console.log('up');
            }
        });
        document.addEventListener('keyup', (event) => {
            if (event.code === 'ArrowDown') {
                this.move('down');
                console.log('down');
            }
        });
    }

    mount() {
        this.render();
        this.update();
        return this.pacman;
    }

    update() {
        this.pacman.style.left = `${this.xPos * TILE_SIZE}px`;
        this.pacman.style.top = `${this.yPos * TILE_SIZE}px`;
    }

    move(direction) {
        if (direction === 'right') {
            this.xPos++;
        }

        if (direction === 'left') {
            this.xPos--;
        }

        if (direction === 'up') {
            this.yPos--;
        }

        if (direction === 'down') {
            this.yPos++;
        }
        return this.update();
    }

    elementFromHTML(html, parent = 'div') {
        const div = document.createElement(parent);
        div.innerHTML = html;
        return div.firstChild;
    }
}
