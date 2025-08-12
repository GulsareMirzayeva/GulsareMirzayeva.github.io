export const QuantityDisplay: FC<{
  value: string | number;
  language: string;
  isCurrency?: boolean;
}> = ({ value, language, isCurrency = false }) => {
  // Azərbaycan dilini dəstəkləmək üçün dil kodunu yoxlayırıq
  const langCode = language === 'aze' ? 'az-Latn-AZ' : language;

  // 1. Aralıq formatı (məsələn: 100-1000)
  if (typeof value === 'string' && value.includes('-')) {
    const rangeParts = value.split('-');

    if (!isNaN(Number(rangeParts[0])) && !isNaN(Number(rangeParts[1]))) {
      const formattedRange = rangeParts
        .map((num) =>
          new Intl.NumberFormat(langCode, {
            style: 'decimal',
          }).format(Number(num))
        )
        .join('–');

      return <span>{formattedRange}</span>;
    }
  }

  // 2. Axırında '+' olan qiymət (məsələn: 1000+)
  if (typeof value === 'string' && value.endsWith('+')) {
    const numericPart = value.slice(0, -1);

    if (!isNaN(Number(numericPart))) {
      const formattedValue = new Intl.NumberFormat(langCode, {
        style: 'decimal',
      }).format(Number(numericPart));

      return <span>{formattedValue}+</span>;
    }
  }

  // 3. Sadə rəqəm formatı
  const numericValue = Number(value);
  const isNumber = !isNaN(numericValue);

  const formattedValue = isNumber
    ? new Intl.NumberFormat(langCode, {
        style: isCurrency ? 'currency' : 'decimal',
        currency: isCurrency ? 'AZN' : undefined,
      }).format(numericValue)
    : value;

  return <span>{formattedValue}</span>;
};
