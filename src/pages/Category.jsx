import { useParams } from "react-router-dom";
import { libraries } from "../data/libraries";
import { apis } from "../data/apis";
import { frameworks } from "../data/frameworks";
import CategoryFilter from '../components/CategoryFilter'; 

export default function Category() {
  const { categoryId } = useParams();
  
  const allItems = [...libraries, ...apis, ...frameworks];
  const filteredItems = allItems.filter(item => 
    item.category === categoryId
  );

  return (
    <div>
      <CategoryFilter /> 
      <h1>{categoryId.replace('-', ' ')}</h1>
      <div className="grid">
        {filteredItems.map(item => (
          <Card key={item.id} item={item} type={item.type} />
        ))}
      </div>
    </div>
  );
}