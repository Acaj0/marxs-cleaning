import { pushToDataLayer } from '@/utils/gtm';
import { useEffect } from 'react';

const ExampleComponent = () => {
  useEffect(() => {
    pushToDataLayer({
      event: 'pageView',
      pageName: 'Example Component',
    });
  }, []);

  return <div>Example Component</div>;
};

export default ExampleComponent;
