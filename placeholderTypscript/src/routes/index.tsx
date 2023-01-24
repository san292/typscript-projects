import { Routes, Route } from 'react-router-dom';
import { Home, PostDetails } from '../Pages';

const RouteIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<PostDetails />} />
    </Routes>
  );
};

export default RouteIndex;
