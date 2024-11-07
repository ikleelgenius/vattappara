import { clockIcon, plusIcon, smileIcon, tasksIcon } from '@/app/icons'
import React from 'react'
import Picture from '../common/Picture'
import AwesomeIcon from '../common/AwesomeIcon'
import Counter from '../common/Counter'

const statisticsData = [
  {
    id: 1,
    icon: tasksIcon,
    title: 'Projects Completed',
    value: 300
  },
  {
    id: 2,
    icon: smileIcon,
    title: 'Happy Clients',
    value: 100
  },
  {
    id: 3,
    icon: clockIcon,
    title: 'Years in Business',
    value: 25
  }
]

const StatisticsSection = () => {
  return (
    <div className="w-full relative h-[400px]">
      <div className="px-3">
        <div className="absolute top-0 left-0 right-0 h-full">
          <Picture
            src="/images/home-renovation.jpg"
            alt=""
            className="w-full h-full object-cover"
            priority={false}
          />
        </div>

        <div className="bg-black/90 absolute px-3 h-full top-0 left-1/2 -translate-x-1/2 flex-col w-full flex justify-center">
          <div className="max-w-screen-xl mx-auto w-full relative z-40 grid grid-cols-12 gap-y-6">
            {statisticsData.map((obj, i) => (
              <div key={i} className="col-span-12 md:col-span-4 flex items-center gap-x-4">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center relative z-10">
                  <AwesomeIcon icon={obj.icon} className="w-7 h-7 text-sky-500" />
                </div>
                <div className="flex flex-col text-white font-bold">
                  <div className="flex items-center">
                    <Counter targetNumber={obj.value} duration={2000} />
                    <AwesomeIcon icon={plusIcon} className="w-4 h-4 -mt-4 ml-1" />
                  </div>
                  <p className="text-xl sm:text-2xl">{obj.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatisticsSection
