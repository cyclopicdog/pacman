const TILE_SIZE = 85;

class Stage {
    constructor(height = 9, width = 19, array = []) {
        (this.height = height), (this.width = width), (this.array = array);
    }

    render() {
        this.stage = this.elementFromHTML(`<div class="stage"></div>`);
    }

    mount() {
        this.render();
        this.update();
        return this.stage;
    }

    update() {
        this.stage_width = TILE_SIZE * this.width;
        this.stage.style.width = `${this.stage_width}px`;
        this.stage_height = TILE_SIZE * this.height;
        this.stage.style.height = `${this.stage_height}px`;
    }

    collisionDetection(x, y) {
        const isMatch = this.array.filter((element) => {
            if (element.x === x && element.y === y) {
                if (element.type === 'wall') {
                    return true;
                } else {
                    return false;
                }
            }
        });
        return !!isMatch[0];
    }

    // bla
    elementFromHTML(html, parent = 'div') {
        const div = document.createElement(parent);
        div.innerHTML = html;
        return div.firstChild;
    }
}
