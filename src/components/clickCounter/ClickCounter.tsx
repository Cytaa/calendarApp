import React, { ReactElement, useState} from "react";

const ClickCounter = (): ReactElement => {
    const [counter, setCounter] = useState<number>(0)

    const onClick = () => {
        setCounter(prev => prev + 1)
    }

    return (
        <button type="button" onClick={ onClick }>Clicks: { counter }</button>
    )
}

export { ClickCounter }