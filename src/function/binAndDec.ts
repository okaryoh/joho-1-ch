/**
 * 10進数を2進数に変換
 * @param dec 10進数
 * @returns 
 */
export function dec2bin(dec: number): number {
    const result = parseInt(dec.toString(2))
    let decimal = dec - Math.floor(dec);
    let times = 0;
    let decimalBin = '';

    while (decimal != 0 || times <= 10) {
        if (times === 0) {
            decimalBin += ".";
        }
        console.log(`${decimal}`);
        decimal = decimal * 2;
        decimalBin += Math.floor(decimal);
        decimal = decimal - Math.floor(decimal)
        times = times + 1;
    }
    return Number(result + decimalBin);
}
/**
 * 10進数を2進数に変換 (桁数の0埋めを行う)
 * @param dec 10進数
 * @returns 
 */
export function dec2binPadding(dec: number, digits: number): string {
    const result = dec2bin(dec);
    const padding = digits - `${result}`.length;
    let paddingZero = "";
    for (let i = 0; i < padding; i++) {
        paddingZero += '0';
    }
    return paddingZero + result;
}