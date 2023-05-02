const Nav = () => {
  return (
    <div className="nav">
      <div className="nav_box">
    <img className="nav_box_logo" src="../../../public/assets/logo/dota2_logo_symbol.png" alt="" />
   
       <div className="nav_box_items">
        <div className="nav_box_items-link">Cartes </div>
        <div className="nav_box_items-link">Marché</div>
       </div>
        <div className="nav_box_options" >
            <div className="nav_box_options-link">Compte</div>
            <div className="nav_box_options-link">magasins</div>
        </div> 
      </div>
    </div>
  );
};

export default Nav;
