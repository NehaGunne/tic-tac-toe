import React from 'react';
import Cell from './board-cell.js';
import Reset from './reset.js';
import Table from './table.js';
let count = 0;
class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            next: 'o',
            cells: [null, null, null, null, null, null, null, null, null],
            player1: this.props.player1,
            player2: this.props.player2,
            player: this.props.player1,
            tableData: []
        }
    }
    handleCellClick = (id) => {
        const squares = this.state.cells.slice();
        if (calculateWinner(squares) || squares[id]) {
            return;
        }
        let curVal = this.state.cells[id];
        if (curVal) {
            return;
        }
        let newCells = [...this.state.cells]
        newCells[id] = this.state.next;
        let newNext = this.state.next === 'x' ? 'o' : 'x';
        let newPlayer = this.state.player === this.state.player1 ? this.state.player2 : this.state.player1;
        this.setState({ next: newNext, cells: newCells, player: newPlayer })
        let newData = [...this.state.tableData]
        newData.push([[++count, id, this.state.player]]);
        this.setState({ tableData: newData })
        if (count % 2 != 0) {
            this.props.start2();
            this.props.stop1();
        }
        else {
            this.props.start1();
            this.props.stop2();
        }

    }
    reset = () => {
        console.log('reset func')
        this.setState({
            next: 'o', cells: [null, null, null, null, null, null, null, null, null],
            player:this.props.player1,tableData: []
        })
        count = 0;
        this.props.stop1();
        this.props.stop2();
        this.props.reset();
    }


    render() {
        const winner = calculateWinner(this.state.cells);
        let status;
        if (winner) {
            this.props.stop1()
            this.props.stop2()
            let player;
            if (winner.name === 'x')
                player = this.state.player1
            player = this.state.player2
            status = 'Winner: ' + winner.name + ' ' + player;
        } else {
            status = 'Next player: ' + this.state.next + '  ' + this.state.player;
        }
        let tie = this.state.cells.filter((each) => each === null)
        if (tie.length === 0) {
            status = 'Game Tied'
        }
        return (
            <div>
                <h1 className='next-player'>{status}</h1>
                <div className='game-card'>
                    <div className="board">
                        {this.state.cells.map((value, index) => {
                            return <Cell isWinning={winner ? winner.winningCells.includes(index) : null}
                                id={index} value={value} onCellClick={this.handleCellClick} />

                        })}
                    </div>
                    <Table values={this.state.tableData} />

                </div>
                <Reset onReset={this.reset} />
            </div>
        )

    }
}


function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return { name: squares[a], winningCells: lines[i] };
        }
    }
    return null;
}

export default Board;