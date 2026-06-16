/** クラス名を結合する小さなヘルパ（falsy は捨てる）。 */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
