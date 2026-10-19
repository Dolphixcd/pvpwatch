import { HttpInterceptorFn } from '@angular/common/http';

/**
 * Blizzard no longer accepts the access token as a query parameter (`?access_token=...` returns 404).
 * This moves the token from the URL into the Authorization header for all api.blizzard.com requests.
 */
export const blizzardTokenInterceptor: HttpInterceptorFn = (req, next) => {
  if (!req.url.includes('api.blizzard.com')) {
    return next(req);
  }
  const url = new URL(req.url);
  const token = url.searchParams.get('access_token');
  if (!token) {
    return next(req);
  }
  url.searchParams.delete('access_token');
  return next(req.clone({
    url: url.toString(),
    setHeaders: { Authorization: `Bearer ${token}` }
  }));
};
