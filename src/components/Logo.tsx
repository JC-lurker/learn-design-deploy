
import { Infinity } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-brand-primary rounded-full p-2">
        <Infinity className="text-white" size={24} />
      </div>
      <div>
        <h1 className="font-bold text-xl text-brand-text">Learning Legacy</h1>
        <p className="text-xs text-brand-text/70 tracking-widest">FROM THE RED DOT</p>
      </div>
    </div>
  );
};

export default Logo;
