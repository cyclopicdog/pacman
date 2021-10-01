class Entity {
    constructor(x, y, type) {
        (this.x = x), (this.y = y), (this.type = type);
    }

    render() {
        this.entity = this.elementFromHTML(
            `<div class="entity entity--${this.type}"></div>`
        );
    }

    mount() {
        this.render();
        this.update();
        this_stage.array.push({
            x: this.x,
            y: this.y,
            type: this.type,
        });
        console.log(this_stage.array);
        return this.entity;
    }

    update() {
        this.xPos = this.x * TILE_SIZE;
        this.yPos = this.y * TILE_SIZE;

        this.entity.style.top = `${this.xPos}px`;
        this.entity.style.left = `${this.yPos}px`;
    }

    // unmount(x, y) {
    //     const isMatch = this.array.filter((element) => {
    //         if (element.x === x && element.y === y) {
    //             if (element.type === 'apple') {
    //                 return
    //             }
    //         }

    elementFromHTML(html, parent = 'div') {
        const div = document.createElement(parent);
        div.innerHTML = html;
        return div.firstChild;
    }
}
