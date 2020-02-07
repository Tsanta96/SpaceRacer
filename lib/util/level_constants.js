export const levelConstants = (level) => {
    switch (level) {
        case "Mercury":
            return {
                ASTEROID_SPEED: 3,
                ASTEROID_SPACING: 300,
                WARM_UP_SECONDS: 1,
                NUM_ASTEROIDS: 4
            }
        case "Venus":
            return {
                ASTEROID_SPEED: 4.5,
                ASTEROID_SPACING: 300,
                WARM_UP_SECONDS: 1,
                NUM_ASTEROIDS: 4
            }
        case "Earth":
            return {
                ASTEROID_SPEED: 6,
                ASTEROID_SPACING: 300,
                WARM_UP_SECONDS: 1,
                NUM_ASTEROIDS: 3
            }
        case "Mars":
            return {
                ASTEROID_SPEED: 8,
                ASTEROID_SPACING: 300,
                WARM_UP_SECONDS: 1,
                NUM_ASTEROIDS: 3
            }
        case "Jupiter":
            return {
                ASTEROID_SPEED: 10,
                ASTEROID_SPACING: 300,
                WARM_UP_SECONDS: 1,
                NUM_ASTEROIDS: 3
            }
        case "Saturn":
            return {
                ASTEROID_SPEED: 11,
                ASTEROID_SPACING: 300,
                WARM_UP_SECONDS: 1,
                NUM_ASTEROIDS: 4
            }
        case "Uranus":
            return {
                ASTEROID_SPEED: 12,
                ASTEROID_SPACING: 300,
                WARM_UP_SECONDS: 1,
                NUM_ASTEROIDS: 4
            }
        case "Neptune":
            return {
                ASTEROID_SPEED: 13,
                ASTEROID_SPACING: 300,
                WARM_UP_SECONDS: 1,
                NUM_ASTEROIDS: 4
            }
        case "Pluto":
            return {
                ASTEROID_SPEED: 13,
                ASTEROID_SPACING: 300,
                WARM_UP_SECONDS: 1,
                NUM_ASTEROIDS: 5
            }
        default:
            break;
    }
}

export default levelConstants;