import React from "react";
import "../styles/details.css";

function Details() {
  return (
    <div className="Details">
      <div className="container Details-container">
        <div className="Details-1">
          <h1 className="Details-heading">General Rules:</h1>
          <ul className="Details-text">
            <li>
              The decision of the judges will be final and binding in all the
              rounds.
            </li>
            <li>The competition will be conducted in two rounds.</li>
            <li>
              The entries will be judged on the basis of sustainability and
              competitive advantage, value proposition, originality and
              innovation, impact on big problems, identification and addressing
              of major risks, scalability for India, social impacts and
              potential for business.
            </li>
            <li>
              All the participant teams will receive certificates of
              participation.
            </li>
            <li>
              Only the submissions done within the deadline will be considered
              for the competition.
            </li>
            <li>
              It is compulsory that the team leader has an email-ID for
              communication and is mentioned correctly on the D2C event
              registration page.
            </li>
            <li>
              Form for the submissions will be mailed to you before the deadline
              for each round.
            </li>
            <li>
              Participants are advised to be present at the respective meeting
              platforms in advance to avoid last-minute hassles. Any request for
              a delay will not be entertained.
            </li>
            <li>
              It is the participant’s responsibility to have a stable internet
              connection. Dealing with any discontinuity in the event on the
              participant’s side is not the organisers’ responsibility.
            </li>
            <li>
              All submitted entries would be checked for plagiarism and
              appropriate action will be taken if any is found.
            </li>
          </ul>
        </div>

        <div className="Details-2">
          <h1 className="Details-heading">IDEATHON: Stages and Timelines</h1>
          <div className="Details-stage-1">
            <h2 className="Details-subheading">
              Session on <span className="Details-color"> Discord. </span>
            </h2>
            <p className="Details-text">
              In this round, the teams shall have to submit a proposition to the
              judges in form of video presentations, or powerpoint presentations
              or sorts. The judges will then select teams on the basis of set
              rules and regulations who will then proceed to the second and the
              final round.
            </p>
            <p className="Details-date">
              25 Sep'21 12:00 PM IST - 25 Sep'21 06:00 PM IST
            </p>
          </div>

          <div className="Details-stage-2">
            <h2 className="Details-subheading">
              Final Session on{" "}
              <span className="Details-color"> Google Meet. </span>
            </h2>
            <p className="Details-text">
              This will be the final round of the event. The selected
              participants will have 5-10 minutes to present their final
              presentation on the selected topics of their choice to a jury of 3
              judges. It will thus be followed by a QnA session where questions
              will be asked by the jury for better evaluation. The team with the
              maximum points in the end will be declared as the winner. These
              presentations can be in the form of simulations, PowerPoint
              Presentations, Working Models, etc.
            </p>
            <p className="Details-date">
              26 Sep'21 03:00 PM IST - 26 Sep'21 06:00 PM IST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
