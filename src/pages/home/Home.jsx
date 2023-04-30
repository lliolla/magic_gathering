import Nav from '../../components/nav/Nav'
import Filter from '../../components/filter/Filter'
import Gird from '../../components/gird/Gird'

const Home = () => {
    return (
        <div className='home'>
           Home 
           <Nav />
           <h1>Qui voulez vous incarner?</h1>
           <p>Magie tactique, force brute, ruse... La liste des personnages de Dota 2 est impressionnante et offre des caractéristiques d une fabuleuse diversité. Lancez des sorts incroyables et des capacités ultimes destructrices pour remporter la victoire.</p>
<Filter/>
<Gird/>
        </div>
     
    );
};

export default Home;