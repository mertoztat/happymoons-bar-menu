import "./App.css";
import { useState } from "react";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import items from "./components/data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
console.log(allCategories);
// kategori isimlerini setleyerek unique value olacak şekilde kategori isimleriyle match olanları aldım.

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h1>Happy Moon's</h1>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;
