import React, { ReactElement } from "react";
import { ClickCounter } from "./components/clickCounter/ClickCounter";

const App = (): ReactElement => {

    return (
        <div>
            Siemandero
            <ClickCounter />
        </div>
    )
}

export { App }