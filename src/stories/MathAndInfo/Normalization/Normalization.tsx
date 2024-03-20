import { Power } from "../Power/Power";

export type NormalizationResult = {
    // 正規化した仮定
    normalizationProcess: Normalize[],
    // 最終的な正規化。normalizationProcess の最後の部分
    normalization: Normalize,
}
export type Normalize = {
    // 符号部。負の時 true
    sign: boolean,
    // 指数部。 1.xx × 2^y の y の部分
    exponent: number,
    // 仮数部。 1.xx × 2^y の 1.xx の部分
    fraction: number,
}

/**
 * 2進数を正規化された値に変換する。
 * @param bin 2進数
 * @returns 
 */
export function convertNormalization(bin: number): NormalizationResult {
    const abs = Math.abs(bin);
    let integer: number = Math.floor(abs);
    let fraction = abs;
    let exponent = 0;
    const isMinus = abs > 0;
    const isLessThanOne = fraction < 1
    const result: Normalize[] = [
        { sign: isMinus, exponent: 0, fraction: abs }
    ];

    while (integer != 1) {
        fraction = isLessThanOne ? fraction * 10 : fraction / 10;
        exponent = exponent + (isLessThanOne ? - 1 : 1);

        integer = Math.floor(fraction);

        result.push({ sign: isMinus, exponent, fraction })
    }
    return {
        normalizationProcess: result,
        normalization: result.slice(-1)[0]
    };
}

interface NormalizationProps {
    /**
     * 正規化する2進数の数。
     */
    bin: number
}

export const Normalization = ({
    bin
}: NormalizationProps) => {
    const normalization = convertNormalization(bin);
    return (
        <div style={{ display: 'flex' }}>
            <div>
                {bin}
            </div>
            <div>
                {normalization.normalizationProcess.map((process) => (
                    <div>= {process.sign && "-"}{process.fraction}×<Power base={2} exponent={process.exponent} /></div>
                ))}
            </div>
        </div>
    );
};