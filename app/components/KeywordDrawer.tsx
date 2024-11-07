import React, { FormEvent } from 'react'
import { RootState, useAppDispatch, useAppSelector } from '../redux/store'
import Logo from './common/Logo'
import useRemoveScroll from '../hooks/useRemoveScroll'
import { closeKeywordModal, resetKeyword, setKeyword } from '../redux/features/headerSlice'
import useForm from '../hooks/useForm'
import AwesomeIcon from './common/AwesomeIcon'
import { magnifyingGlassIcon, timesIcon } from '../icons'
import Link from 'next/link'
import highlightText from '../utils/hightlightText'

const KeywordDrawer = () => {
  const { keywordModal, filteredServicesData, keyword } = useAppSelector(
    (state: RootState) => state.header
  )
  useRemoveScroll(keywordModal)
  const dispatch = useAppDispatch()
  const { inputs, handleInput, setInputs } = useForm(['keyword'])

  const handleKeywordSearch = (e: FormEvent) => {
    e.preventDefault()
    if (inputs.keyword !== '' && inputs.keyword !== null) {
      dispatch(setKeyword({ keyword: inputs.keyword }))
    }
  }

  return (
    <div
      className={`${keywordModal ? 'translate-y-0' : 'translate-y-[-100%]'} 
      max-h-[768px] h-full w-full fixed top-0 left-0 z-[60] bg-black/80 transition-transform duration-300 ease-in-out backdrop-blur-[16px] pt-16 px-16 pb-20`}
    >
      <AwesomeIcon
        onClick={() => {
          dispatch(resetKeyword())
          dispatch(closeKeywordModal())
          setInputs({})
        }}
        icon={timesIcon}
        className="text-white w-5 h-5 absolute top-4 right-4 z-10 cursor-pointer"
      />
      <div className="max-w-screen-xl mx-auto w-full flex flex-col">
        <Logo className="w-44 h-auto" src="/images/logo-01.png" />
        <form onSubmit={handleKeywordSearch} className="flex items-center h-20 w-full mt-32">
          <input
            id="keyword"
            name="keyword"
            onChange={handleInput}
            placeholder="Type here to search..."
            className="form-control h-full w-full border-b-[1px] bg-transparent border-b-gray-400 text-2xl text-white focus:outline-none"
            aria-label="Keyword"
            value={(inputs.keyword as string) || ''}
          />
          <button
            type="submit"
            className="flex items-center h-full px-4 border-b-[1px] border-b-gray-400"
          >
            <AwesomeIcon
              icon={magnifyingGlassIcon}
              className="w-5 h-5 text-gray-100 duration-300 hover:text-sky-400"
            />
          </button>
        </form>
        <p
          onClick={() => {
            dispatch(resetKeyword())
            setInputs({})
          }}
          className="text-white w-fit cursor-pointer mt-3 flex self-end duration-300 hover:text-sky-400"
        >
          Clear
        </p>
        <div className="flex flex-col gap-y-4 max-h-40 h-full overflow-y-scroll mt-7">
          {filteredServicesData?.length > 0 && keyword
            ? filteredServicesData.map((obj, i) => (
                <Link
                  onClick={() => dispatch(closeKeywordModal())}
                  href="/services"
                  key={i}
                  className="text-white hover:text-sky-400 duration-300"
                >
                  {highlightText(obj.text, keyword)}
                </Link>
              ))
            : keyword && <p className="text-white">No Matches</p>}
        </div>
      </div>
    </div>
  )
}

export default KeywordDrawer
