import { env } from '@/infrastructure/config/env';

export class HttpError extends Error {
  constructor(
    public readonly status: number,
    public readonly statusText: string,
  ) {
    super(`HTTP ${status}: ${statusText}`);
  }
}

async function parseBody<T>(response: Response): Promise<T | undefined> {
  const text = await response.text();
  if (!text) return undefined;
  return JSON.parse(text) as T;
}

async function request<T>(path: string, init: RequestInit): Promise<T | undefined> {
  const response = await fetch(`${env.apiBaseUrl}${path}`, {
    ...init,
    credentials: 'include',
    redirect: 'manual',
    headers: {
      'Content-Type': 'application/json',
      ...init.headers,
    },
  });

  if (response.type === 'opaqueredirect' || (response.status >= 300 && response.status < 400)) {
    return undefined;
  }

  if (!response.ok) {
    throw new HttpError(response.status, response.statusText);
  }

  return parseBody<T>(response);
}

export const httpClient = {
  get: <T>(path: string) =>
    request<T>(path, { method: 'GET' }),

  post: <T>(path: string, body?: unknown) =>
    request<T>(path, { method: 'POST', body: JSON.stringify(body) }),

  put: <T>(path: string, body?: unknown) =>
    request<T>(path, { method: 'PUT', body: JSON.stringify(body) }),

  patch: <T>(path: string, body?: unknown) =>
    request<T>(path, { method: 'PATCH', body: JSON.stringify(body) }),

  delete: <T>(path: string) =>
    request<T>(path, { method: 'DELETE' }),
};
