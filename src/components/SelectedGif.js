import React from "react";


function SelectedGif({url}) {
    return (
        <div>
            {url
                ? <img src={url} alt="SELECTED GIF" />
                : <p>Click on any GIF to display it here</p>
            }
        </div>
    )
}


export default SelectedGif