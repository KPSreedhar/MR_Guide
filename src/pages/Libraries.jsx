import ContentListPage from './ContentListPage';
import { libraries } from '../data/libraries';

export default function Libraries() {
  return (
    <ContentListPage
      title="React Libraries"
      items={libraries}
      type="library"
    />
  );
}