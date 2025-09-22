import ContentListPage from './ContentListPage';
import { apis } from '../data/apis';

export default function Apis() {
  return (
    <ContentListPage
      title="Developer APIs"
      items={apis}
      type="api"
    />
  );
}