// lib/fb-pixel.ts
export const fbq = (event: string, data?: Record<string, any>) => {
  if (typeof window.fbq === "function") {
    window.fbq("track", event, data);
  }
};
