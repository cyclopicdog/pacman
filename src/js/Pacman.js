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
            if (
                event.code === 'ArrowRight' &&
                this.xPos < this_stage.width - 1
            ) {
                this.move('right');
                console.log('right');
            }
        });
        document.addEventListener('keyup', (event) => {
            if (event.code === 'ArrowLeft' && this.xPos > 0) {
                this.move('left');
                console.log('left');
            }
        });
        document.addEventListener('keyup', (event) => {
            if (event.code === 'ArrowUp' && this.yPos > 0) {
                this.move('up');
                console.log('up');
            }
        });
        document.addEventListener('keyup', (event) => {
            if (
                event.code === 'ArrowDown' &&
                this.yPos < this_stage.height - 1
            ) {
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
        if (this.mouth === 'open') {
            this.pacman.style.backgroundPositionX = '100%';
            this.mouth = 'closed';
        } else if (this.mouth === 'closed') {
            this.pacman.style.backgroundPositionX = '0%';
            this.mouth = 'open';
        }
        if (direction === 'right') {
            this.pacman.style.backgroundPositionY = '0%';
            this.xPos++;
        }

        if (direction === 'left') {
            console.log('left');
            this.pacman.style.backgroundPositionY = '27%';
            this.xPos--;
        }

        if (direction === 'up') {
            this.pacman.style.backgroundPositionY = '100%';

            this.yPos--;
        }

        if (direction === 'down') {
            this.pacman.style.backgroundPositionY = '58%';

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
