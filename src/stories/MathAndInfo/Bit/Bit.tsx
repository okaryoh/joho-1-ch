import Decimal from "decimal.js";
import { Power } from "../Power/Power";

interface BitProps {
    /**
     * 正規化する2進数の数。
     */
    bin: number | string
    /**
     * 桁数。0埋めも行う。
     */
    numberOfDigits?: number
}

export const Bit = ({
    bin,
    numberOfDigits,
}: BitProps) => {
    let stringBit = '';
    stringBit = numberOfDigits
        ? `${bin}${"0".repeat(numberOfDigits)}`.substring(0, numberOfDigits)
        : `${bin}`
    const array = stringBit.split('').map(Number);
    return (
        <div style={{ display: 'flex' }}>
            {array.map((bit, index) => (
                <div style={{
                    borderTop: '1px solid #000',
                    borderBottom: '1px solid #000',
                    borderLeft: index === 0 ? '1px solid #000' : '1px dotted #000',
                    borderRight: index === array.length - 1 ? '1px solid #000' : '',
                    padding: '0px 5px'
                }}>{bit}</div>
            ))}
        </div>
    );
};