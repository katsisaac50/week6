console.log ("script loaded");
/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
 * Get an array with car objects with random color and speed
 * @param {integer} numberOfCars - The number of cars 
 * @returns {array} Array containing the car objects
 */
function generateCars(numberOfCars) {
    const cars = [];

    const carMakes = ['Honda', 'BMW','Fiat','Skoda','Volvo'];
    const carColors = ['lightgrey', 'lightcyan','lightyellow','lightgreen','lightcoral','lightpink'];
    
    for (let i = 0; i < numberOfCars; i++) {
        const car = {};
        const randomMakeIndex = randomIntFromInterval(0, carMakes.length - 1);
        const randomColorIndex = randomIntFromInterval(0, carColors.length - 1);

        car.make = carMakes[randomMakeIndex];
        car.color = carColors[randomColorIndex];
        car.speed = randomIntFromInterval(0, 100);

        cars.push(car);
        
    }
    // cars with speed between 30 and 60
    function speedcars(cars){
        return cars.speed > 30 && cars.speed < 60;
    };
    
    
    let speeds = cars.filter(speedcars);
    console.log(speeds)

// cars which are not light yellow

const result2=carMakes.filter(car=>car.color!=='lightyellow');
console.log(result2);

// Danish version
function translate(cars){
    return {
        maerke: cars.make,
        farve: cars.color,
        fart: cars.speed
    }
}

let danish = cars.map(translate);
console.log(danish);


}


generateCars(10);
