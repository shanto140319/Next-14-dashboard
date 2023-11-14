/**
 * @Author: Jahidul Haque Shanto
 * @Date:   2023-11-13 09:58:44
 * @Last Modified by:   Jahidul Haque Shanto
 * @Last Modified time: 2023-11-13 14:35:51
 */
import {CheckIcon, ClockIcon} from '@heroicons/react/24/outline'
import clsx from 'clsx'

export default function InvoiceStatus({status}: {status: string}) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
        }
      )}
    >
      {status === 'pending' ? (
        <>
          Pending
          <ClockIcon className='ml-1 w-4 text-gray-500' />
        </>
      ) : null}
      {status === 'paid' ? (
        <>
          Paid
          <CheckIcon className='ml-1 w-4 text-white' />
        </>
      ) : null}
    </span>
  )
}
