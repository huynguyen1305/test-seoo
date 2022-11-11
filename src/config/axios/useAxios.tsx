// import { useEffect, useState } from 'react'
// import axiosInstance from './index'
// import { AxiosRequestConfig } from 'axios'

// export type TUseGetAxiosProps = {
//   url: string
//   requestConfig?: AxiosRequestConfig
// }

// export type TApiResponse<T> = {
//   statusCode: number
//   statusMsg: string
//   data: T
//   extra: TPagination
//   loading: boolean
// }

// export type TPagination = {
//   page: number
//   limit: number
//   totalPage: number
//   totalItems: number
// }

// function useGetAxios<T>({ url, requestConfig }: TUseGetAxiosProps) {
//   const [data, setData] = useState<T>()
//   const [isLoading, setIsLoading] = useState<boolean>(false)
//   const [status, setStatus] = useState<number>(0)
//   const [statusText, setStatusText] = useState<string>('')
//   const [extra, setExtra] = useState<TPagination>({
//     page: 0,
//     limit: 0,
//     totalItems: 0,
//     totalPage: 0
//   })

//   useEffect(() => {
//     const controller = new AbortController()

//     const fetchData = async () => {
//       try {
//         setIsLoading(true)
//         const response = await axiosInstance.get<TApiResponse<T>>(url, {
//           ...requestConfig,
//           signal: controller.signal
//         })
//         if (response.data) {
//           setData(response.data.data)
//           setExtra(response.data.extra)
//           setStatus(response.data.statusCode)
//           setStatusText(response.data.statusMsg)
//         }
//       } catch (err) {
//         console.log(err)
//         throw err
//       } finally {
//         setIsLoading(false)
//       }
//     }

//     fetchData().catch(err => {
//       if (err.name === 'AbortError') {
//         console.log('Aborted')
//         return
//       } else {
//         console.log(err)
//       }

//     return () => {
//       controller.abort()
//     }
//   }, [])

//   return { data, isLoading, status, statusText, extra }
// }

// export default { useGetAxios }
