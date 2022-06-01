export class ArrayHelper {
    
    public static shuffle<T>(array: any): T[] {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    public static getRandomIndex(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }
}