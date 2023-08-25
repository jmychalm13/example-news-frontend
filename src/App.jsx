import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-r from-violet-500 via-violet-500 to-pink-500">
      <Header />
      <div className="container mx-4 p-4">
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
