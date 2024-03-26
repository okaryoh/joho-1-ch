import Decimal from "decimal.js";

/**
 * 10進数を2進数に変換
 * @param dec 10進数
 * @returns 
 */
export function dec2bin(dec: number): number {
    const decim = new Decimal(Math.abs(dec));
    const result = parseInt(decim.toString()).toString(2)
    let decimal = decim.minus(decim.floor());
    let times = 0;
    let decimalBin = '';

    while (!decimal.equals(0)) {
        if (times === 0) {
            decimalBin += ".";
        }

        if (times === 10) {
            /** 
             * 循環小数は小数点10桁で止める。最後の桁が0だと、それ以降の数字も0で省略されてしまうので最後の桁は1にする。
             * (1.0010100100 は、 1.00101001 となってしまう。) 
             */
            decimalBin += "1"
            break;
        }
        decimal = decimal.times(2);
        decimalBin += decimal.floor();
        decimal = decimal.minus(decimal.floor());
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