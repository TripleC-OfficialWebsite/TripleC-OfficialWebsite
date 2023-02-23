import React from 'react';
import './Body.css';
import Icon from '@mdi/react';
import {mdiAccountGroup, mdiFileDocumentEdit, mdiHandshake, mdiCurrencyUsd} from '@mdi/js';

const Body = () => {
    return(
        <div className="button-container btn-group">
            <button className="btn btn-outline-light">
                <Icon path={mdiAccountGroup} horizontal size={0.75} className='icon'/>
                JOIN THE TEAM
            </button>
            <button className="btn btn-outline-light">
                <Icon path={mdiFileDocumentEdit} size={0.75} className='icon'/>
                SUBMIT A PROPOSAL
            </button>
            <button className="btn btn-outline-light">
                <Icon path={mdiHandshake} size={0.75} className='icon'/>
                SUPPORT US
            </button>
            <button className="btn btn-outline-light">
                <Icon path={mdiCurrencyUsd} size={0.75} className='icon'/>
                BUSINESS COLLAB & SPONSORSHIP
            </button>
        </div>
    )
}

export default Body;