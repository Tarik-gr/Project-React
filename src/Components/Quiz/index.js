import React, { Component, Fragment } from 'react'
import Levels from '../Levels'
import { Questions } from '../Questions'
import Results from '../Results'

class Quiz extends Component {

    constructor(props) {
        super(props)
    
        this.initialState = {
            levels : ['facile','moyen','difficile'],
            quizLevel :0,
            storedQuestions : [],
            question:null,
            options:[],
            idQuestion : 0,
            maxQuestions : 10,
            disabledButton: true,
            userAnswer:null,
            score : 0,
            displayResults : false,
        }
        this.state = this.initialState

        // storage of data in ref (questions and answers)
        this.storedDataRef = React.createRef();
    }

    // Load Question after mounting the component
    loadQuestion =(level)=>{
        const toBeFetched = Questions[0].quiz[level]
        // extract the question and save them on storedQuestions
        this.storedDataRef.current = toBeFetched

        this.setState(
            {
                storedQuestions : toBeFetched.map(({answer,...rest})=> rest)
            }
        )
    }
    // loading questions on mounting
    componentDidMount() {
        this.loadQuestion(this.state.levels[this.state.quizLevel])
        
    }

    // loading questions on updating
    componentDidUpdate(prevProps, prevState) {
        if (this.state.storedQuestions !== prevState.storedQuestions){
            this.setState({
                question : this.state.storedQuestions[this.state.idQuestion].question,
                options : this.state.storedQuestions[this.state.idQuestion].options
            })
        }
        // updating question when idQuestion is different
        if(this.state.idQuestion !== prevState.idQuestion){
            this.setState({
                question : this.state.storedQuestions[this.state.idQuestion].question,
                options : this.state.storedQuestions[this.state.idQuestion].options,
                userAnswer:null,
                disabledButton: true,
            })
        }
    }
    
    // handle the click on any option on
    handleClick = optionSelected =>{
        this.setState({
            userAnswer : optionSelected,
            disabledButton: false,
        })

    }

    // handle Next Button => to load the next questions 
    nextQuestion = ()=>{
        if (this.state.idQuestion === this.state.maxQuestions-1){
            //Display Results at the end
            this.setState(prevState=>(
                {
                    displayResults : true,
                    quizLevel : prevState.quizLevel+1,
                }
            ))
        }else{
            this.setState(prevState=>(
                {
                    idQuestion : prevState.idQuestion+1,
                }
            ))
        }
        // add score if good answer
        const goodAnswer = this.storedDataRef.current[this.state.idQuestion].answer
        if (this.state.userAnswer === goodAnswer){
            this.setState(prevState=>(
                {
                    score : prevState.score+1,
                }
            ))
        }
        
    }
    //load next level questions
    loadNextLevel= ()=>{
        this.setState(prevState=>(
            {
                ...this.initialState,
                quizLevel:prevState.quizLevel
            }
        ))
        this.loadQuestion(this.state.levels[this.state.quizLevel])
    }


    render(){
        // Options displays logic
        const displayOptions = this.state.options.map((option, index) =>{
            return (
                <p key={index} onClick={()=> this.handleClick(option)} className={`answerOptions ${this.state.userAnswer === option ? 'selectedOption' : null}`}>{option}</p>
            )
        })

        // TWO CASES : if last Question => Display Result = true => we display results
        // if not whe display the quiz 

        return !this.state.displayResults ? (
            <>
                <Levels idQuestion={this.state.idQuestion+1} level={this.state.levels[this.state.quizLevel]} score={this.state.score}/>
                <h2>{this.state.question}</h2>
                {displayOptions}
                <div className="nextBtn">
                    <button type="button" 
                        className="btn btn-success"
                        onClick={this.nextQuestion} 
                        disabled={this.state.disabledButton}>
                        {this.state.idQuestion != this.state.maxQuestions -1  ? 'Suivant' : 'Terminer'}
                    </button>
                </div>
            </>
        ):(
            <Results score={this.state.score} loadNextLevel={this.loadNextLevel} datas={this.storedDataRef.current} />
        )
    }
}

export default Quiz
