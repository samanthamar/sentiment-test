import React from 'react';

const Journal = (props) => {

    const renderRow = props.log.map((data) =>
        <tr key={Date.now}>
            <td>{new Date().toISOString().slice(0,10).split('T')[0]}</td>
            <td>{data.log}</td>
            <td>{data.sentiment}</td>
        </tr>
    );

    // Output in card style instead
    // const cards = props.log.map((data) =>
    //     <div className="card" style={{width: '18rem', margin: '10px'}}>
    //         <div className="card-body">
    //             <h5 className="card-title">Date</h5>
    //             <h6 className="card-subtitle mb-2 text-muted">Journal</h6>
    //             <p className="card-text">{data.log}</p>
    //             <h6 className="card-subtitle mb-2 text-muted">Sentiment</h6>
    //             <p className="card-text">{data.sentiment}</p>
    //         </div>
    //     </div>
    // ); 

    return (
        <div>
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>Date</th>
                        <th>Log</th>
                        <th>Sentiment Polarity</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRow}
                </tbody>
            </table>
        </div>
    );
};

export default Journal; 
