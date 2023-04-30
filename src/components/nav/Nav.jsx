const Nav = () => {
  return (
    <div className="nav">
      <div className="nav_box">
    <img className="nav_box_logo" src="../../../public/assets/logo/dota2_logo_symbol.png" alt="" />
   
       <div className="nav_box_items">
        <div className="nav_box_items-link">Jeux </div>
        <div className="nav_box_items-link">Personnages</div>
       </div>
        <div className="nav_box_options" >
            <div className="nav_box_options-link">Connexion </div>
            <div className="nav_box_options-link">langues</div>
        </div> 
      </div>
    </div>
  );
};

export default Nav;
