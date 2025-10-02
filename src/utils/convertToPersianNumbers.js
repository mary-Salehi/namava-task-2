const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
export function convertToPersianNumbers(number) {
  return number.toString().replace(/\d/g, (digit) => farsiDigits[parseInt(digit)]);
}
