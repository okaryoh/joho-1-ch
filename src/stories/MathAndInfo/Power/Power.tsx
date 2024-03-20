interface PowerProps {
  /**
   * 底。a^x の a の部分
   */
  base: number,
  /**
   * 指数。a^x の x の部分
   */
  exponent: number,
}

export const Power = ({
  base,
  exponent
}: PowerProps) => {
  return (
    <span>{base}<sup>{exponent}</sup></span>
  );
};
