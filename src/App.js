import { useRoutes } from 'react-router-dom';
import { routers } from '@/router/index.js';
import '@/App.scss';

export default function App() {
  const elements = useRoutes(routers)
  return (
    <div className="App">
      {elements}
    </div>
  );
}
