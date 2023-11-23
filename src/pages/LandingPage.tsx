import { TypeAnimation } from "react-type-animation";
import OpenAiLogo from "../assets/openai.png";
import Mockup from "../components/Mockup";
import Navbar from "../components/Navbar";
import NotificationBar from "../components/NotificationBar";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NotificationBar />
      <Navbar />

      <div className="flex-grow hero">
        <div className="hero-content flex-col lg:flex-row-reverse -mt-28">
          <div className="hidden lg:block absolute w-72 h-72 rounded-full bg-dark-orange filter blur-2xl opacity-20 -mt-32 ml-28 animate-blob"></div>
          <div className="hidden lg:block absolute w-72 h-72 rounded-full bg-dark-orange filter blur-2xl opacity-20 mt-32 right-0 2xl:mr-96 xl:mr-40 animate-blob_rev"></div>

          <div className="hidden lg:block">
            <Mockup />
          </div>

          <div className="mx-2 lg:mr-8 lg:mx-0">
            <div className="max-w-md mr-auto text-center lg:text-left">
              <TypeAnimation
                sequence={[
                  "Work Smarter",
                  2000,
                  "Chat Smarter",
                  2000,
                  "Search Smarter",
                  2000,
                ]}
                wrapper="h1"
                speed={30}
                repeat={Infinity}
                className="text-5xl font-bold text-white"
              />

              <h1 className="text-4xl font-bold text-dark-orange">
                With AI Magic
              </h1>

              <p className="py-6">
                Elevate your communication with AI-driven chats,
                <br className="hidden lg:block" /> available at your fingertips
                whenever you need them.
              </p>

              <Link to="/chat">
                <button className="btn bg-dark-orange text-white">
                  Chat Now
                </button>
              </Link>
              <button className="btn btn-outline ml-3">More Info</button>
            </div>
          </div>
        </div>

        <div className="mt-auto mb-10 text-center">
          <p className="text-sm">Powered by</p>

          <div className="flex items-center">
            <img className="w-28" src={OpenAiLogo} alt="open-ai-logo" />
            <p className="text-xl text-white ml-0.5">ChatGPT</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
