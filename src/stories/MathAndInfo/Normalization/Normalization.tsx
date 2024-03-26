import Decimal from "decimal.js";
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
    const abs = new Decimal(Math.abs(bin));
    let integer: Decimal = abs.floor()
    let fraction = abs;
    let exponent = 0;

    /** 桁表示を統一するために桁数を準備 */
    // let digit = String(abs).length;

    const isMinus = bin < 0;
    const isLessThanOne = fraction.lessThan(1);
    const result: Normalize[] = [
        { sign: isMinus, exponent: 0, fraction: abs.toNumber() }
    ];

    while (!integer.equals(1)) {
        fraction = isLessThanOne ? fraction.times(10) : fraction.dividedBy(10);
        exponent = exponent + (isLessThanOne ? - 1 : 1);

        integer = fraction.floor();

        result.push({ sign: isMinus, exponent, fraction: fraction.toNumber() })
    }
    return {
        normalizationProcess: result,
        normalization: result.slice(-1)[0]
    };
}

/** 最終結果だけ */
export function getFinalNormalization(bin: number): Normalize {
    return convertNormalization(bin).normalization;
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
    if (bin === 0) {
        return <></>
    }
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