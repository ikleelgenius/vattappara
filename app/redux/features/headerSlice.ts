import { Reducer, createSlice } from '@reduxjs/toolkit'

import { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import {
  doorOpenIcon,
  hammerIcon,
  hardHatIcon,
  homeIcon,
  paintRollerIcon,
  plugIcon,
  toiletIcon,
  treeIcon,
  waterIcon
} from '../../icons'
import { faBath } from '@fortawesome/free-solid-svg-icons'

export interface ServicesProps {
  icon: IconDefinition
  title: string
  text: string
}

export const services: ServicesProps[] = [
  {
    icon: homeIcon,
    title: 'Home Renovations',
    text: `We transform homes with renovations that enhance style and functionality, tailored to meet each family's unique needs.`
  },
  {
    icon: faBath,
    title: 'Kitchen & Bath Remodeling',
    text: 'Our team brings quality and attention to detail in every kitchen and bathroom remodel, creating spaces that are both beautiful and practical.'
  },
  {
    icon: treeIcon,
    title: 'Outdoor Spaces',
    text: 'From patios to decks, we create outdoor living spaces designed for comfort and enjoyment, tailored to New England’s changing seasons.'
  },
  {
    icon: hammerIcon,
    title: 'Custom Carpentry',
    text: 'From built-in shelving to custom cabinetry, we craft unique woodwork that adds beauty and function to any room.'
  },
  {
    icon: paintRollerIcon,
    title: 'Painting & Finishing',
    text: 'We provide professional painting and finishing services to refresh and protect interiors and exteriors, enhancing the look and longevity of your space.'
  },
  {
    icon: hardHatIcon,
    title: 'Roofing & Siding',
    text: 'Our durable roofing and siding services ensure homes are well-protected from New England’s elements with quality materials and expert installation.'
  },
  {
    icon: doorOpenIcon,
    title: 'Door & Window Installation',
    text: 'We install energy-efficient doors and windows that improve security, insulation, and aesthetics for every home.'
  },
  {
    icon: waterIcon,
    title: 'Waterproofing & Insulation',
    text: 'Our waterproofing and insulation solutions help protect your home from moisture, drafts, and temperature fluctuations year-round.'
  },
  {
    icon: plugIcon,
    title: 'Electrical Services',
    text: 'From lighting installations to full electrical upgrades, our certified team ensures safe and efficient electrical systems.'
  },
  {
    icon: toiletIcon,
    title: 'Plumbing Services',
    text: 'We provide reliable plumbing solutions for new installations, repairs, and upgrades to keep water flowing smoothly.'
  }
]

export interface HeaderStatePayload {
  loading: boolean
  success: boolean
  error: string | false | null
  navigationDrawer: boolean
  keywordModal: boolean
  keyword: string
  servicesData: ServicesProps[]
  filteredServicesData: ServicesProps[]
}

const initialHeaderState: HeaderStatePayload = {
  loading: false,
  success: false,
  error: null,
  navigationDrawer: false,
  keywordModal: false,
  keyword: '',
  servicesData: services,
  filteredServicesData: services
}

export const headerSlice = createSlice({
  name: 'header',
  initialState: initialHeaderState,
  reducers: {
    openNavigationDrawer: (state) => {
      state.navigationDrawer = true
    },
    closeNavigationDrawer: (state) => {
      state.navigationDrawer = false
    },
    openKeywordModal: (state) => {
      state.keywordModal = true
    },
    closeKeywordModal: (state) => {
      state.keywordModal = false
    },
    setKeyword: (state, { payload }) => {
      state.keyword = payload.keyword

      headerSlice.caseReducers.filterServices(state)
    },
    filterServices: (state) => {
      const lowerCaseKeyword = state.keyword?.toLowerCase()
      state.filteredServicesData = services.filter(
        (service) =>
          service.title.toLowerCase().includes(lowerCaseKeyword) ||
          service.text.toLowerCase().includes(lowerCaseKeyword)
      )
    },
    resetKeyword: (state) => {
      state.keyword = ''
    }
  }
})

export const headerReducer = headerSlice.reducer as Reducer<HeaderStatePayload>

export const {
  openNavigationDrawer,
  closeNavigationDrawer,
  openKeywordModal,
  closeKeywordModal,
  setKeyword,
  resetKeyword
} = headerSlice.actions
