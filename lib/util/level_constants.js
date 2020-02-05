export const levelConstants = (level) => {
    switch (level) {
        case "Mercury":
            return {
                ASTEROID_SPEED: 3,
                ASTEROID_SPACING: 300,
                WARM_UP_SECONDS: 1,
            }
        case "Venus":
            return {
                ASTEROID_SPEED: 4,
                ASTEROID_SPACING: 300,
                WARM_UP_SECONDS: 1,
            }
        case "Earth":
            return {
                ASTEROID_SPEED: 5,
                ASTEROID_SPACING: 300,
                WARM_UP_SECONDS: 1,
            }
        case "Mars":
            return {
                ASTEROID_SPEED: 7,
                ASTEROID_SPACING: 300,
                WARM_UP_SECONDS: 1,
            }
        case "Jupiter":
            return {
                ASTEROID_SPEED: 9,
                ASTEROID_SPACING: 300,
                WARM_UP_SECONDS: 1,
            }
        case "Saturn":
            return {
                ASTEROID_SPEED: 11,
                ASTEROID_SPACING: 300,
                WARM_UP_SECONDS: 1,
            }
        case "Uranus":
            return {
                ASTEROID_SPEED: 12,
                ASTEROID_SPACING: 300,
                WARM_UP_SECONDS: 1,
            }
        case "Neptune":
            return {
                ASTEROID_SPEED: 13,
                ASTEROID_SPACING: 300,
                WARM_UP_SECONDS: 1,
            }
        case "Pluto":
            return {
                ASTEROID_SPEED: 14,
                ASTEROID_SPACING: 300,
                WARM_UP_SECONDS: 1,
            }
        default:
            break;
    }
}

export default levelConstants;