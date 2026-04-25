import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";

const RateLimitedPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <RateLimitedUI />
    </div>
  );
};

export default RateLimitedPage;