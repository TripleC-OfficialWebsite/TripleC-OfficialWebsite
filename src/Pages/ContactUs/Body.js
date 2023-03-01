import React from 'react';
import './Body.css';
import Icon from '@mdi/react';
import {mdiAccountGroup, mdiFileDocumentEdit, mdiHandshake, mdiCurrencyUsd} from '@mdi/js';

const Body = () => {
    return(
        <div className="button-container">
            <button className="btn btn-outline-light" onClick={() => window.location = 'https://mp.weixin.qq.com/s?__biz=Mzg2ODAyNjYwNg==&mid=2247486639&idx=1&sn=6e84905554cfe5f121f85938ab2dc9bd&chksm=ceb3dd2ef9c45438656988fca7400851e941a759507c409bc365b38f5cf65630c571a62caf38&scene=126&sessionid=1677545426#rd'}>
                <Icon path={mdiAccountGroup} horizontal size={0.75} className='icon'/>
                JOIN THE TEAM 
            </button>
            <button className="btn btn-outline-light" onClick={() => window.location = 'https://docs.google.com/forms/d/e/1FAIpQLSd8jHxs9Dym5lnzKWheXFFnLXsxWYEM7E4lzoO9rRQ19c8PGg/viewform'}>
                <Icon path={mdiFileDocumentEdit} size={0.75} className='icon'/>
                SUBMIT A PROPOSAL 
            </button>
            <button className="btn btn-outline-light" onClick={() => window.location = 'mailto:ucsdtriplec@gmail.com'}>
                <Icon path={mdiHandshake} size={0.75} className='icon'/>
                SUPPORT US
            </button>
            <button className="btn btn-outline-light" onClick={() => window.location = 'mailto:ucsdtriplec@gmail.com'}>
                <Icon path={mdiCurrencyUsd} size={0.75} className='icon'/>
                BUSINESS COLLAB & SPONSORSHIP
            </button>
        </div>
    )
}

export default Body;