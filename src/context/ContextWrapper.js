import React, { useState } from 'react';
import CandidateContext from './CandidateContext';
import CandidateDataContext from './CandidateDataContext';


function ContextWrapper({ children }) {
    const [candidate, setCandidate] = useState('');
    const [candidateArr, setCandidateArr] = useState('') ;
    return (
        // <CandidateDataContext.Provider>
            <CandidateContext.Provider value={{ candidate, setCandidate }}>
                {children}
            </CandidateContext.Provider>
        // </CandidateDataContext.Provider>
    )
}

export default ContextWrapper;
