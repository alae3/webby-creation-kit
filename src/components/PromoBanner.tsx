import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useContentStore } from '@/store/contentStore';
const PromoBanner = () => {
  const {
    images
  } = useContentStore();
  return <div className="relative overflow-hidden my-12" style={{
    backgroundImage: `url(${images.bannerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
      <div className="absolute inset-0 bg-black/50"></div>
      
    </div>;
};
export default PromoBanner;