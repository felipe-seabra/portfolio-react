import React from 'react';
import '../styles/pages/Home.css';

export default class Main extends React.Component {
  componentDidMount() {
    document.title = 'Felipe Seabra - Desenvolvedor Web';
  }

  render() {
    return (
      <div className="background-home container-fluid">
        <div className="title-home">
          <h4>Olá, meu nome é</h4>
          <h1>
            Felipe
            {' '}
            <span>Seabra</span>
            <span id="animate-flicker">|</span>
          </h1>
          <h3>
            Sou estudante de desenvolvimento web na
            {' '}
            <strong>
              <a className="trybe" href="https://www.betrybe.com/" target="_blank" rel="noreferrer" style={ { textDecoration: 'none' } }>
                Trybe
              </a>
            </strong>
            .
          </h3>
        </div>
      </div>
    );
  }
}
