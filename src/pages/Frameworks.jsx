import ContentListPage from './ContentListPage';
import { frameworks } from '../data/frameworks';

export default function Frameworks() {
  return (
    <ContentListPage
      title="React Frameworks"
      items={frameworks}
      type="framework"
    />
  );
}