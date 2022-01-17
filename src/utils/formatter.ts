export const formatCrypto = (
    amount: number,
    unit?: string,
    lang?: string,
    hideUnit?: boolean,
    compact?: boolean
  ): string =>
    `${new Intl.NumberFormat(lang, {
      signDisplay: 'never',
      maximumFractionDigits: compact ? 2 : 6,
      notation: compact ? 'compact' : undefined,
    }).format(amount || 0)}${hideUnit ? '' : ` ${(unit || '').toUpperCase()}`}`