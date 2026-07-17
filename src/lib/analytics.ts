type AnalyticsPayload = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

/** Track custom funnel events without PII. Uses Meta Pixel when available. */
export function track(event: string, payload: AnalyticsPayload = {}) {
  const clean: Record<string, string | number | boolean> = {}
  for (const [key, value] of Object.entries(payload)) {
    if (value === undefined) continue
    clean[key] = value
  }
  try {
    window.fbq?.('trackCustom', event, clean)
  } catch {
    /* ignore third-party failures */
  }
}

export function trackCtaClick(location: string, label: string, destination = '/aplicacao') {
  track('application_cta_click', {
    cta_location: location,
    cta_label: label,
    destination,
    page_variant: 'landing_v4',
  })
}
