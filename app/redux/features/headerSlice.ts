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
    title: 'Construction Materials',
    text: `We have all type of construction materials you need, from cement and steel bars to meshes and grids, sourced from trusted brands to ensure quality and reliability.`
  },

  {
    icon: treeIcon,
    title: 'Landscaping Services',
    text: 'We have a dedicated team for landscaping services like fencing , garden making and parking area construction, ensuring your outdoor spaces are beautiful and functional.'
  },
  {
    icon: hammerIcon,
    title: 'Tools & Equipment Accessories',
    text: 'We supply blades,bits and other accessories for tools and equipment, ensuring you have the right tools for every job.'
  },
 
  {
    icon: hardHatIcon,
    title: 'Roofing & Siding',
    text: 'Our durable roofing and siding products ensure homes and buildings are well-protected from weather and sunlight'
  },
  {
    icon: doorOpenIcon,
    title: 'Steel Doors & Windows ',
    text: 'We have a wide range of steel doors and windows that provide security, durability, and aesthetic appeal for residential and commercial properties.'
  },
  {
    icon: waterIcon,
    title: 'Waterproofing & Insulation',
    text: 'Our waterproofing and insulation solutions help protect your home from moisture, drafts, and temperature fluctuations year-round.'
  },
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
