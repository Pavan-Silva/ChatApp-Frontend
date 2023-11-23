import ProfileIcon from "../assets/profile_user.jpg";
import ChatGptIcon from "../assets/chat-gpt.png";

function Mockup() {
  return (
    <div className="mockup-browser border border-gray-500 border-opacity-50 bg-base-300">
      <div className="mockup-browser-toolbar">
        <div className="input">https://basicai.com/chat</div>
      </div>

      <div className="px-4 py-8 bg-base-200 animate-fade">
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="profile-icon" src={ProfileIcon} />
            </div>
          </div>

          <div className="chat-bubble">Hi, can you find some music for me?</div>
        </div>

        <div className="chat chat-start animate-fade_2">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full opacity-90">
              <img alt="profile-icon" src={ChatGptIcon} />
            </div>
          </div>

          <div className="chat-bubble bg-dark-orange text-white">
            Yes of course, <br /> what kind of music do you prefer?
          </div>
        </div>

        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="profile-icon" src={ProfileIcon} />
            </div>
          </div>

          <div className="chat-bubble">Something I can dance to.</div>
        </div>

        <div className="chat">
          <div className="chat-bubble flex items-center justify-center animate-pulse">
            <div className="w-2 h-2 rounded-full bg-gray-500 mr-1"></div>
            <div className="w-2 h-2 rounded-full bg-gray-500 mr-1"></div>
            <div className="w-2 h-2 rounded-full bg-gray-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mockup;
