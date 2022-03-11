import type { Handle } from "@sveltejs/kit";

// hack to get argument types from `Handle`
function handler(v: Handle): Handle {
  return v;
}

export const handle = handler(async function ({ event, resolve }) {
  return await resolve(event, { ssr: false });
});
