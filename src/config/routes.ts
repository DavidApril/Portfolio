export enum ROUTES {
  HOME = '/',
  THANK_YOU = '/thank-you',

  ABOUT = '/about',
  ARTICLES = '/articles',
  PROJECTS = '/projects',
  SPEAKING = '/speaking',
  USES = '/uses',
}

interface Route {
  label: string
  href: ROUTES
}

export const NAVIGATION_ROUTES: Route[] = [
  {
    label: 'About',
    href: ROUTES.ABOUT,
  },
  {
    label: 'Articles',
    href: ROUTES.ARTICLES,
  },
  {
    label: 'Projects',
    href: ROUTES.PROJECTS,
  },
  {
    label: 'Speaking',
    href: ROUTES.SPEAKING,
  },
  {
    label: 'Uses',
    href: ROUTES.USES,
  },
]