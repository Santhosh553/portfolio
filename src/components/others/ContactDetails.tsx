import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
export default function ContactDetails () {
  return (
    <div className='w-full flex flex-col items-start justify-start space-y-3'>
      <div className="w-full flex flex-row items-center justify-start space-x-3">
        <FaMapMarkerAlt className="text-xl fill-alternate dark:fill-snow duration-500 ease-in-out" />
        <p className="text-base font-medium tracking-wider">
          Chennai, TamilNadu, India
        </p>
      </div>
      <div className="w-full flex flex-row items-center justify-start space-x-3">
        <FaPhoneAlt className="text-xl fill-alternate dark:fill-snow duration-500 ease-in-out" />
        <a href='tel:+6281335488360' className="text-base font-medium tracking-wider">+917358360447</a>
      </div>
    </div>
  )
}
