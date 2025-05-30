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
    textKey: 'Products',
    linkKey: '/products',
    active: path === '/products'
  },
  {
    textKey: 'Fullfilments',
    linkKey: '/fullfilments',
    active: path === '/fullfilments'
  },
  {
    textKey: 'Contact Us',
    linkKey: '/contact-us',
    active: path === '/contact-us'
  }
]

export default headerLinks
