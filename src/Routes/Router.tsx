import App from 'app/app';
import { ModernTemplatePdf } from 'app/templates/ModernTemplate';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'download',
    element: <ModernTemplatePdf />,
  },
]);

export { router };
