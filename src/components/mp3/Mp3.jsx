import React from "react";
import { beats } from "../db/db";
import { IoNotifications } from "react-icons/io5";
import { TbActivityHeartbeat } from "react-icons/tb";


export default function Mp3s({ currentBeat, setCurrentBeat, filteredBeats }){

    if(!currentBeat || !filteredBeats) {
        return <></>
    }

    const { id, title, category, mp3 } = currentBeat

    const displayMp3s = filteredBeats.map((beat, i) => {
        const { audio, category, title } = beat

        const isSelected = beat.id == id ? true : false

        const selectBeat = () => setCurrentBeat(beat)

        return (
            <div
                key={i}
                className="mb-4 pb-3 clickable"
                style={{
                    borderBottom: '0.2px solid #375B55'
                }}
                onClick={selectBeat}
            >
                <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <div className="mx-3">
                            <h4 className="m-0 p-0 fw-700 openSans txt-20 txt-F1E4C5 mb-1">
                                { title }
                            </h4>                  
                            <p className="m-0 p-0 txt-363928 openSans fw-600 txt-16">
                                { category }
                            </p>
                        </div>  
                    </div>

                    {
                        isSelected 
                        &&
                            <TbActivityHeartbeat size={30} color="#FFF" className="clickable" />                        
                    }
                </div>
            </div>
        )
    })

    return (
        <div>
            {
                filteredBeats.length > 0
                ?
                    displayMp3s
                :
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <IoNotifications size={55} color="#363928" className="mb-4" />
                        <p className="text-center fw-600 txt-15 openSans txt-F1E4C5">
                            No beats found with that search filter. Filter by name or category.
                            Available categories: 
                        </p>
                        <ul>
                            <li className="text-center m-0 p-0 txt-14 fw-600 txt-F1E4C5">category one</li>
                            <li className="text-center m-0 p-0 txt-14 fw-600 txt-F1E4C5">category one</li>
                            <li className="text-center m-0 p-0 txt-14 fw-600 txt-F1E4C5">category one</li>
                            <li className="text-center m-0 p-0 txt-14 fw-600 txt-F1E4C5">category one</li>
                            <li className="text-center m-0 p-0 txt-14 fw-600 txt-F1E4C5">category one</li>
                        </ul>
                    </div>
            }
        </div>
    )
}