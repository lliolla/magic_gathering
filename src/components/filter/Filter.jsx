const Filter = () => {
  return (
    <div className="container">
      <div className="filter_container">
        <span>Filtrer</span>
        <div className="filter_container-color">
          <span>Couleurs</span>
        
          <img src="../../../public/assets/logo/Red_Mana.png" alt="" />
          <img src="../../../public/assets/logo/Black_Mana.png" alt="" />
          <img src="../../../public/assets/logo/Blue_Mana.png" alt="" />
          <img src="../../../public/assets/logo/Green_Mana.png" alt="" />
          <img src="../../../public/assets/logo/White_Mana.png" alt="" />
        </div>
        <div className="filter_container-search">
          <span>Rechercher par nom</span>
          <div className="filter_container-search-form" >         
            <form action="">
              <input
                type="text"
                name=""
                id=""
                placeholder="Rechercher un nom"
              />
            </form>
            <img src="../../../public/assets/logo/search.svg" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
