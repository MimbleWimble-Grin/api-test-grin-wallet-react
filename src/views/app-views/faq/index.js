import "./css/index.css";

const FaqView = () => {
  return (
    <>
      <div id="faq-view" className="w-full">
        <div className="flex flex-column justify-content-center align-items-center">
          <div className="faq-box titan-bg-6 flex flex-row justify-content-center align-items-center">
            <div className="faq-caption">Question: How does the game work?</div>
          </div>
          <div className="faq-box w-full titan-bg-6 mt-5 flex flex-row justify-content-center align-items-center">
            <div className="faq-text">
              The game is build by point system. Whoever has the most points at
              the end of the competition wins the game. The titans in the games
              must build a roster of creators & depending on how well the
              creators perform in the competition will determine how many points
              you have.
            </div>
          </div>
        </div>
        <div className="flex flex-column justify-content-center align-items-center mt-5">
          <div className="faq-box titan-bg-6 flex flex-row justify-content-center align-items-center">
            <div className="faq-caption">
              Question : How are points measured in the games{" "}
            </div>
          </div>
          <div className="faq-box w-full titan-bg-6 mt-5 flex flex-row justify-content-center align-items-center">
            <div className="faq-text">
              Points are measured by how many likes & comments the creators
              receive on their post. [1 like = 1 point] [ 1 comment = 3 points]
              after the creators make post on instagram they are monitored for
              the course of that game.
            </div>
          </div>
        </div>
        <div className="flex flex-column justify-content-center align-items-center mt-5">
          <div className="faq-box titan-bg-6 flex flex-row justify-content-center align-items-center">
            <div className="faq-caption">
              Question : How many creators can you have in your roster
            </div>
          </div>
          <div className="faq-box w-full titan-bg-6 mt-5 flex flex-row justify-content-center align-items-center">
            <div className="faq-text">
              Everyone in the games have cap limit of 10,000,000 followers they
              can add to their roster. If someone chooses 10 accounts with 400k
              followers that means they used 4,000,000 of the 10,000,000.
            </div>
          </div>
        </div>
        <div className="flex flex-column justify-content-center align-items-center mt-5">
          <div className="faq-box titan-bg-6 flex flex-row justify-content-center align-items-center">
            <div className="faq-caption">
              Question : When do the games start ?{" "}
            </div>
          </div>
          <div className="faq-box w-full titan-bg-6 mt-5 flex flex-row justify-content-center align-items-center">
            <div className="faq-text">
              The game start’s on monday at 1am pst & ends on friday at 11pm
              pst. You have until sunday 11:30pm pst to edit your roster.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqView;
