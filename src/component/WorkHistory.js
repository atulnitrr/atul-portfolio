import React from "react";
import "../css/WorkHistory.css";

function WorkHistory(props) {
  return (
    <div>
      <header>Work history</header>
      <div className="wh-detail-wrapper">
        {/* MMT */}
        <div className="wh-company-card">
          <div className="wh-comany-detail">
            <span>MakeMyTrip, Bengaluru</span>
            <span>Senior Software Engineer II</span>
            <span>October 2019</span>
            <span>Present</span>
          </div>

          <div className="wh-work-detail">
            <div className="project-name">
              <span>Project : MMT, GOIBIBO common data store</span>
              <ul>
                <li>
                  <strong>Goal : </strong>
                  Project wast to buid a common data store for bookings for both
                  MMT and GOIBIBO brand.
                </li>
                <li>
                  Designed common data store in mongo DB for both GOIBIBO and
                  MMT.
                </li>
                <li>
                  This data store, keeps all info releated to a booking(i.e.
                  FlightDetails, UserDetails, PlatformDetails, PaymentInfo etc).
                </li>
                <li>
                  Built very critical backend pnr service in java, that
                  interacts with data store.
                </li>
                <li>
                  Pnr service handles around{" "}
                  <strong>260K GET, 114K POST</strong> request per day.
                </li>

                <li>
                  Have faced race condition from multple server while putting
                  data in mongo, and fixed the same.
                </li>
                <li>5 differnt teams are dependent on this service.</li>
                <li>
                  <strong>Imapct : </strong> Every single booking on MakeMyTrip
                  and GOIBIBO uses the pnr service. If pnr service is down for
                  even 30 mins, aroud 100 customer wont get ticket on time.
                </li>
                <li>
                  <strong>Award : </strong>
                  Got champion of the quarter award, for this work.
                </li>
              </ul>
            </div>

            <div className="project-name">
              <span>Project : SQ(Singapore) airline integration</span>
              <ul>
                <li>
                  <strong>Goal : </strong>
                  Project was to onboard SQ airline on MMT platform using ALT18
                  supplier.
                </li>
                <li>
                  Built search, review backend service, that fetches the
                  inventory detail from SQ airline. These results are shown to
                  users when he searches on MMT platform.
                </li>
                <li>
                  Built booking backend service, that creates the actual
                  booking.
                </li>
                <li>
                  Built ancillaries backend service, this service getting used
                  when user select seats during booking.
                </li>
                <li>
                  <strong>Impact : </strong>
                  If you booked a ticket from DELHI to SINGAPORE on MMT platform
                  using SQ airline, that internally using the search and book
                  service i built.
                </li>
              </ul>
            </div>

            <div className="project-name">
              <span>Project : Credit shell</span>
              <ul>
                <li>
                  <strong>Goal : </strong>
                  Project was to build credit shell system, so user can use
                  amount in future bookings.
                </li>
                <li>
                  This requirement came, as due to COVID users started
                  cancelling their bookings, but airline were not returing
                  amount in bank accout, but keeping amount as credit shell so
                  user can use in future.
                </li>
                <li>
                  Built common data store (in mongo db) to store credit shell
                  info for both MMT and GOIBIBO platform.
                </li>
                <li>
                  Built backend service in sprig boot to load, retrieve and
                  apply credit shell.{" "}
                </li>
                <li>
                  Backend service handles <strong>96K GET</strong> request per
                  day.
                </li>
                <li>
                  <strong>Impact : </strong>
                  If user has cancelled any ticket during COVID, that is stored
                  as credit shell, now if user books again on MMT or GOIBIBO
                  platform then credit shell info comes from the service i
                  wrote.
                </li>
              </ul>
            </div>

            <div className="project-name">
              <span>Project : Cancellation and Penalty</span>
              <ul>
                <li>
                  <strong>Goal : </strong>
                  Project was to get FareRule (Cancellation/Reschedule charges )
                  and baggage info from 4 different suppliers.
                </li>
                <li>
                  Built 4 different services for 4 different suppliers in spring
                  boot, within 3 months and made it fully operational with
                  metrics and logging.
                </li>
                <li>
                  These services are being used by ​MMT platform to show
                  cancellation, date change penalty (FareRule) and baggage info
                  (checkin and cabin baggage), while search/book.
                </li>
                <li>
                  Sample example{" "}
                  <a
                    href="https://tinyurl.com/wfmq258"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://tinyurl.com/wfmq258
                  </a>
                </li>

                <li>
                  <strong>Impact : </strong>
                  If user search/book flights from DEL-HKT(Phuket) on MMT
                  platform, and he sees what are cancellation/reschedule
                  charges, cabin/checking baggage allowed limit, that info comes
                  from the api i built.
                </li>
              </ul>
            </div>

            <div className="project-name">
              <span>Project : Credit shell tool (self initiated project)</span>
              <ul>
                <li>
                  <strong>Goal : </strong>
                  Project was to make a web app tool, so operation team can use
                  that to upload , delete, or check credit shell info.
                </li>
                <li>
                  Built a wep app tool to upload, delete, check credit shell
                  info in reactjs.
                </li>
                <li>Built backend service used by wep app tool in nodejs.</li>
                <li>
                  <strong>Impact : </strong>
                  It reduced credit shell upload time, as operation team no
                  longer needed tech team help. They can just give excel file in
                  correct format to upload, delete credit shell info.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="wh-company-card">
          <div className="wh-comany-detail">
            <span>Paypal (payroll - Altimetrik)</span>
            <span>Senior Software Engineer</span>
            <span>March 2019</span>
            <span>October 2019</span>
          </div>

          <div className="wh-work-detail">
            <div className="project-name">
              <span>Project : Rule app tool</span>
              <ul>
                <li>
                  <strong>Goal : </strong>
                  Project was to automate rule app processing.
                </li>
                <li>Built rule app web tool from scratch. </li>
                <li>
                  Used <strong>ReactJs</strong> for frontend part.
                </li>

                <li>Built backend service used by rule app in spring boot.</li>
                <li>
                  <strong>Impact : </strong> This tool improved developer
                  efficiency and collaboration between India and USA team.
                </li>
                <li>
                  <strong>Recognition : </strong>
                  Got director level appreciation for this work.
                  <p>
                    <q>
                      {" "}
                      <em>
                        This is great work, Atul, to improve developer
                        efficiency
                      </em>
                    </q>
                  </p>
                  <p>
                    <q>
                      {" "}
                      <em>
                        I am already impressed by single handedly working on
                        tool. Good job Atul, Luv the spirit !!!!.
                      </em>
                    </q>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="wh-company-card">
          <div className="wh-comany-detail">
            <span>Amazon, Chennai</span>
            <span>Software development engineer</span>
            <span>Feb 2016</span>
            <span>March 2019</span>
          </div>

          <div className="wh-work-detail">
            <div className="project-name">
              <span>Project : ITB quality measurement</span>
              <ul>
                <li>
                  <strong>Goal : </strong> Project was to measure quality of the
                  book and give score between 1 to 5.
                </li>
                <li>Built workflow using in house framework (java)</li>
                <li>Wrote handler for each step of the workflow </li>
                <li>
                  Wrote backend service using inhouse framework to persist data
                  in dynamo Db.
                </li>
                <li>
                  Wrote java application to listen to changes from SQS for
                  different sources.
                </li>
                <li>
                  <strong>Impact: </strong> System handles around 1k book per
                  day.
                </li>
              </ul>
            </div>

            <div className="project-name">
              <span>Project : NFCX GOK (Great on Kindle) </span>
              <ul>
                <li>
                  <strong>Goal : </strong>Project was to increase sales of non
                  fiction books, by giving GOK(Great on Kindle) badge on amazon
                  detail page.
                </li>
                <li>
                  Wrote service using amazon in house query language to compare
                  ebook price to pbook price.
                </li>
                <li>
                  Amzon.com detail page uses this service to check price diff
                  between ebook and pbook, and if a book meet certain threshold
                  then only it gets GOK badge.
                </li>
                <li>
                  <strong>Impact : </strong>
                  Every book, having GOK badge on amazon.com detail page use the
                  service i wrote.
                </li>
              </ul>
            </div>

            <div className="project-name">
              <span>Project : QUASER </span>
              <ul>
                <li>
                  <strong>Goal : </strong>Project was to get pusblisher
                  feedback/action for issue that have been reported in their
                  book.
                </li>
                <li>
                  Built backend service to get publisher note, using in house
                  coral framework.
                </li>
                <li>Service is used by QUASER front end app.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="wh-company-card">
          <div className="wh-comany-detail">
            <span>MAQ Software, Hyderbad </span>
            <span>Software development engineer</span>
            <span>Feb 2014</span>
            <span>April 2015</span>
          </div>

          <div className="wh-work-detail">
            <div className="project-name">
              <span>Project : GSG Reporting</span>
              <ul>
                <li>
                  <strong>Goal : </strong>
                  Project was to build SLA reporting dashboard for client.
                </li>
                <li>
                  Created ETL to fetch data from different sources, and persist
                  that data in staging table.
                </li>
                <li>
                  Wrote stored procedures, these stored procedures were consumed
                  by front end app.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkHistory;
