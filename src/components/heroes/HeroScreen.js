import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { heroImages } from '../../helpers/heroImages';
import { getHeroById } from '../../selectors/getHeroById';

// import batman from '../../assets/heroes/dc-batman.jpg'; // estático
// const heroImages = require.context('../../assets/heroes', true );



export const HeroScreen = ({ history }) => {

    const { heroeId } = useParams();  // get url params

    const hero = useMemo(() => getHeroById( heroeId ), [ heroeId ]); // mayor rapidez


    if ( !hero ) {
        return <Redirect to="/" />;
    }

    const handleReturn = () => {

        if( history.length <= 2 ) { //  si el historial esta vacio
            history.push('/');
        } else {
            history.goBack();
        }
    };

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;
    
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    // src={ `../assets/heroes/${ heroeId }.jpg` } // desde public/assets
                    // src={ batman } // import
                    src={ heroImages(`./${ heroeId }.jpg`) }
                    alt={ superhero }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3> { superhero } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter ego: </b> { alter_ego } </li>
                    <li className="list-group-item"> <b> Publisher: </b> { publisher } </li>
                    <li className="list-group-item"> <b> First appearance: </b> { first_appearance } </li>
                </ul>

                <h5> Characters </h5>
                <p> { characters } </p>

                <button 
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>

            </div>

        </div>
    )
}
