
import React from 'react'

export const JournalEntry = ({ journal }) => {


    return (
        <div className="journal__entry pointer">
            
            <div className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://st-listas.20minutos.es/images/2012-07/336907/3617604_640px.jpg?1342006393)'
                }}
            >
            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Algo xxx
                </p>
                <p className="journal__entry-content">
                     usahdiusag dsuiagiug ugfiusgfusdguifgdsiugds   sdf gdisg iuds dius gfg u gduf gsduuydsguydsg fudg udsgufusd gfuds fuyd uyfu fds
                </p>
            </div>

            <div className="-journal__entry-date-box">
                <span> Lunes </span>
                <h4> 00-55 </h4>
            </div>
            
        </div>
    )
}
