import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, Footer, Repositories } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Works />
        <Repositories />
        <Experience />
        <Feedbacks />
        <Tech />
        <div className='relative z-0'>
          <Contact />
        </div>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
