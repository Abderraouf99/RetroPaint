export default class RGB {
  red: number;
  green: number;
  blue: number;

  toString(): string {
    console.log(`rgb(${this.red},${this.green},${this.blue});`);
    return `rgb(${this.red},${this.green},${this.blue});`;
  }
}
