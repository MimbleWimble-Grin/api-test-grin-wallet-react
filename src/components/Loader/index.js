import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

const Loader = () => {
    return (
        <>
        <div id="Loader">
                <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s"/>
        </div>
        <style>{`
        #Loader{
            display:flex;
            position:fixed;
            height:100vh;
            width:100vw;
            align-items:center;
        }
        `}</style>
        </>
    );
}

export default Loader;