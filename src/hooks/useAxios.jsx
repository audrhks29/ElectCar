import { useEffect, useState } from "react";
import axios from 'axios'

export const useAxios = (url) => {
   const [state, setState] = useState([])
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(null)

   useEffect(() => {
      axios.get(url)
         .then(res => {
            setState(res.data)
            setLoading(true)
            setError(null)
         }).catch(error => {
            setState([])
            setLoading(false)
            setError('주소를 찾을수 없습니다.')
         })
   }, [url])

   return { state, loading, error }
};
