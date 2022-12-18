// 735. Asteroid Collision
var asteroidCollision = function (asteroids) {
  const stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    stack.push(asteroids[i]);

    while (stack.length >= 2 && stack.at(-1) < 0 && stack.at(-2) > 0) {
      const asteroid1 = stack.pop();
      const asteroid2 = stack.pop();

      if (Math.abs(asteroid1) > Math.abs(asteroid2)) {
        stack.push(asteroid1);
      } else if (Math.abs(asteroid1) < Math.abs(asteroid2)) {
        stack.push(asteroid2);
      }
    }
  }

  return stack;
};
