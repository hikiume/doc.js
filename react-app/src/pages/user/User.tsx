import { useParams } from 'react-router-dom'

export const User = () => {
  const params = useParams()
  console.log(params['*'])
  return <div>note id: {params['*']}</div>
}
