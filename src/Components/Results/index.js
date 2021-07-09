import React from 'react'

const Results = (props) => {

    //console.log(props.datas)
    // display questions and good answers using props.datas
    const displayResults = props.datas.map((data, index)=>{
        console.log(data)
        return (
            <tr key={index}>
                <th scope="row">{data.id+1}</th>
                <td>{data.question}</td>
                <td>{data.answer}</td>
            </tr>
        )
    }

    )

    return (
        <div>
            <div className="row">
                <div className="col">
                    Votre score est de {`${props.score*10}%`}
                </div>
                <div className="col">
                <button onClick={()=>props.loadNextLevel()} type="button" className="btn btn-outline-secondary">Niveau Suivant</button>
                </div>
            </div>
            <br />
            <h2>Récapitulatif du Quiz</h2>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Question</th>
                    <th scope="col">Réponse</th>
                    </tr>
                </thead>
                <tbody>
                    {displayResults}
                </tbody>
                </table>
        </div>
    )
}

export default Results
