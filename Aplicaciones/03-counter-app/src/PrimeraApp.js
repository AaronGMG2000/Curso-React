import PropTypes from 'prop-types';

const PrimeraApp = ({saludo, subtitulo}) =>{


    return (
        <>
            <h1> { saludo } </h1>
            <p>{subtitulo}</p>
        </>
    );
    
}

PrimeraApp.protoTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un Subtitulo'
}

export default PrimeraApp;
