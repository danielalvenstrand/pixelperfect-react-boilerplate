import React, { Component } from 'react';
import { connect } from 'react-redux';
import Resident from '../resident/Resident';
import { toggleResident } from "./Home.actions"
import { setReady } from '../app/App.actions';
import './Home.css';

class Home extends Component {

    componentDidMount() {
    }

    setReady() {
        this.props.setReady();
    }

    toggleResident(residentId) {
        this.props.toggleResident(residentId);
    }

    render() {
        return (
            <div className="Home">
                <header id="header">
                    <section>
                        <h2>This is Home</h2>
                    </section>
                </header>
                {this.props.ready ? <div className="residents">
                    {this.props.residents.map(resident => (
                            <Resident
                                key={resident.id}
                                toggleResident={() => this.toggleResident(resident.id)}
                                {...resident}
                            ></Resident>
                    ))}
                </div> : (<button onClick={() => this.setReady()}>I'm ready, start the app!</button>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ready: state.app.ready,
    residents: state.home.residents
});

const mapDispatchToProps = (dispatch) => ({
    setReady: () => {dispatch(setReady)},
    toggleResident: (residentId) => {dispatch(toggleResident(residentId))}
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);