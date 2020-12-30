input.onButtonPressed(Button.A, function () {
    nave.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    disparar = game.createSprite(nave.get(LedSpriteProperty.X), nave.get(LedSpriteProperty.Y))
    disparar.change(LedSpriteProperty.Brightness, 1)
    for (let index = 0; index < 4; index++) {
        disparar.change(LedSpriteProperty.Y, -1)
        basic.pause(150)
        if (disparar.isTouching(inimigo)) {
            game.addScore(1)
            disparar.delete()
            inimigo.delete()
        }
    }
    if (disparar.get(LedSpriteProperty.Y) <= 0) {
        disparar.delete()
    }
})
input.onButtonPressed(Button.B, function () {
    nave.move(1)
})
let inimigo: game.LedSprite = null
let disparar: game.LedSprite = null
let nave: game.LedSprite = null
nave = game.createSprite(2, 4)
game.setScore(0)
basic.forever(function () {
    inimigo = game.createSprite(randint(0, 4), 2)
    inimigo.set(LedSpriteProperty.Brightness, 150)
    basic.pause(100)
    inimigo.turn(Direction.Right, 90)
    for (let index = 0; index < 4; index++) {
        inimigo.move(1)
        basic.pause(500)
        if (inimigo.isTouching(nave)) {
            game.gameOver()
        }
    }
    if (inimigo.isTouchingEdge()) {
        inimigo.delete()
    }
})
