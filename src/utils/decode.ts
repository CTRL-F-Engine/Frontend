export function decode(token: string) {
    try {
        return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
        console.log("error decoding token");
    }
}