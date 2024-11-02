import { HeaderLinkProps } from '../types/header-types'

const headerLinks = (path: string): HeaderLinkProps[] => [
  {
    textKey: 'Home',
    linkKey: '/',
    active: path === '/'
  },
  {
    textKey: 'Who We Are',
    linkKey: '/who-we-are',
    active: path === '/who-we-are'
  },
  {
    textKey: 'Services',
    linkKey: '/services',
    active: path === '/services'
  },
  {
    textKey: 'Our Work',
    linkKey: '/our-work',
    active: path === '/our-work'
  },
  {
    textKey: 'Contact Us',
    linkKey: '/contact-us',
    active: path === '/contact-us'
  }
]

export default headerLinks
