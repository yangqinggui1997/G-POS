import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { TryLocalLogin } from "../hooks/user"

const ResolveAuthScreen = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        TryLocalLogin(dispatch).catch(err => console.log(err))
    }, [])

    return null
}
export default ResolveAuthScreen