import React from "react";

function Menu({ menuItems }) {
  return (
    <div className="section-center">
      {menuItems.map((menuItem) => {
        // propsları menuItem'a destructuring ediyoruz.
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img src={img} className="photo" alt="img" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price} $</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Menu;
