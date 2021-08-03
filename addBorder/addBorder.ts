export function addBorder(picture: string[]): any {
    const wall = "*".repeat(picture[0].length + 2);
    // let wall = "";
    
    // for (let i = 0; i <= displayWall; i++) {
    //     wall = wall.concat("*");
    // }

    picture.push(wall);
    picture.unshift(wall);

    for (let i = 1; i < picture.length - 1; i++) {
        picture[i] = "*".concat(picture[i] + "*");
    }

    return picture;
}

console.log(addBorder(["abc", "ded"]));