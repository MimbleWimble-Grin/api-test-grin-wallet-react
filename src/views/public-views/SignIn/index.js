import "./css/SignIn.css";
import Images from "constants/image/public/SignIn";
import SubscriberCard from "./components/SubscriberCard";
import { SubscriberData } from "datas/public/SignIn";
import SignInForm from "./components/SignInForm";

const SignInView = () => {
  return (
    <>
      <main id="SignInView">
        <div className="Logo">TITAN</div>
        <section
          id="TitanIntro"
          className="flex flex-column justify-content-center align-items-center"
        >
          <div className="w-10 flex align-items-center InRow">
            <div className="flex flex-column" id="IntroText">
              <h1>Sign in to</h1>
              <h3>Titan is very interesting</h3>
              <p className="mt-4">
                Titan is one of the most popular websites for its user-friendly
                face-to-face and interesting content.
              </p>
            </div>
            <img src={Images.IntroImage} className="IntroImage" alt="Intro" />
            <span className="Split" />
          </div>
        </section>
        <SignInForm />
        <section
          id="AvidSubscriber"
          className="flex flex-column justify-content-center align-items-center"
        >
          <div className="w-10 flex flex-column SubscriberList">
            <h3 className="flex">Avid Subscriber</h3>
            <div className="mt-4 flex flex-row">
              <SubscriberCard data={SubscriberData} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SignInView;
