const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

export function appendUtms(baseUrl: string): string {
  if (typeof window === "undefined") return baseUrl;

  const currentParams = new URLSearchParams(window.location.search);
  const utms = new URLSearchParams();

  for (const key of UTM_KEYS) {
    const value = currentParams.get(key);
    if (value) utms.set(key, value);
  }

  const utmsString = utms.toString();
  if (utmsString === "") return baseUrl;

  const separator = baseUrl.includes("?") ? "&" : "?";
  return `${baseUrl}${separator}${utmsString}`;
}
