import { withAuth } from 'next-auth/middleware';
import createIntlMiddleware from 'next-intl/middleware';

const locales = ['en', 'tr'];
const publicPages = ['/sign-in', '/home', '/search', '/get-started', '/about'];

const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale: 'en'
});

const authMiddleware = withAuth(
  // Note that this callback is only invoked if
  // the `authorized` callback has returned `true`
  // and not for pages listed in `pages`.
  function onSuccess(req) {
    return intlMiddleware(req);
  },
  {
    callbacks: {
      authorized: async ({ token }) => {
        if (token) {
          await fetch("https://jsonplaceholder.typicode.com/todos/1")
          return true;
        }
        return false;
      }
    },
    pages: {
      signIn: '/sign-in'
    }
  }
);

export default function middleware(req) {
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join('|')}))?(${publicPages.join('|')})?/?$`,
    'i'
  );
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  if (isPublicPage) {
    return intlMiddleware(req);
  } else {
    return authMiddleware(req);
  }
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};