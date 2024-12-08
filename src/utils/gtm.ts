declare global {
    interface Window {
      dataLayer: any[];
    }
  }
  
  export const pushToDataLayer = (data: object) => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(data);
    }
  };
  
  