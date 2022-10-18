import { useRef, useEffect } from "react"

export function useUpdateEffect(callback: React.EffectCallback, deps?: React.DependencyList | undefined) {
    const flag = useRef(false)
    useEffect(() => {
        if (flag.current) {
            return callback()
        } else flag.current = true
    }, deps)
}
