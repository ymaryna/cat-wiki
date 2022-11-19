import React from "react";

const Dots = (numberInfo) => {
    const num = numberInfo.numberInfo
    return(
        <>
        {console.log(num)}
        {(() => {
            switch (num) {
            case 1:
                return (
                    <>
                    <div className="dot yes"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    </>
                )
            case 2:
                return (
                    <>
                    <div className="dot yes"></div>
                    <div className="dot yes"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    </>
                )
            case 3:
                return (
                    <>
                    <div className="dot yes"></div>
                    <div className="dot yes"></div>
                    <div className="dot yes"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    </>
                )
            case 4:
                return (
                    <>
                    <div className="dot yes"></div>
                    <div className="dot yes"></div>
                    <div className="dot yes"></div>
                    <div className="dot yes"></div>
                    <div className="dot"></div>
                    </>
                )
            case 5:
                return (
                    <>
                    <div className="dot yes"></div>
                    <div className="dot yes"></div>
                    <div className="dot yes"></div>
                    <div className="dot yes"></div>
                    <div className="dot yes"></div>
                    </>
                )
            default:
                return null
            }
        })()}
        </>
    )
}

export default Dots
