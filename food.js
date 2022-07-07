import { onSnake, expandSnake } from './snake.js'

let food = getRandomFoodPosition()
const EXPANSION_RATE = 5;

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = { x: 20, y: 10 };
  }
}

export function draw(gameBoard) {
  const foodElement = document.currentElement('div');
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPositionx)){
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}
