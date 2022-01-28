import axios from 'axios';
import React, { useContext, useEffect, useRef } from 'react';
import { useState } from 'react/cjs/react.development';
import CandidateContext from '../context/CandidateContext';
import CandidateDataContext from '../context/CandidateDataContext';

function Candidates() {
    const { candidate } = useContext(CandidateContext);
    const [search, setSearch] = useState('');
    const [candidateArr, setCandidateArr] = useState([]);
    const [searchedCandidate, setSearchedCandidate] = useState(null);
    const searchRef = useRef();
    console.log('data', candidate);

    useEffect(() => {
        async function getdata() {
            const resData = await axios.get('data.json');

            setCandidateArr([...resData.data.details, candidate])

        }
        getdata();

    }, [])

    useEffect(() => {
        setCandidateArr([...candidateArr, candidate])
    }, [candidate])


    const handleSearch = () => {
        let obj = candidateArr.find(o => o.first_name === searchRef.current.value);
        // console.log("found", obj) ;
        setSearchedCandidate(obj);
    }

    return (
        <>
            candidates
            <div style={{ margin: "20px" }}>
                <input type='text' ref={searchRef} value={search} onChange={(e) => { setSearch(e.target.value) }}></input>
                <button onClick={handleSearch}>search</button>
            </div>
            <div>
                {
                    searchedCandidate != null ?
                    <div>
                        <span style={{ margin: "20px" }}>{searchedCandidate.id}</span>
                        <span>{searchedCandidate.first_name}</span>
                        <span>{searchedCandidate.last_name}</span>
                        <span>{searchedCandidate.email}</span>
                    </div>
                    :null
                }
            </div>
            <div style={{ margin: "20px" }}>
                <table>
                    <thead></thead>
                    <tbody>
                        {
                            candidateArr.map((ele) => {
                                return (
                                    <tr>
                                        <td>{ele.id}</td>
                                        <td>{ele.first_name}</td>
                                        <td>{ele.last_name}</td>
                                        <td>{ele.email}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>
            </div>
        </>
    )
}

export default Candidates;
