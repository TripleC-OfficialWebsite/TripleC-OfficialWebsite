import React from 'react';
const Popup = () => {
    return(
        <div>
            <button
              type="button"
              className="btn btn-primary tab"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              CONTACT US
            </button>
        </div>
    );
}

export default Popup;