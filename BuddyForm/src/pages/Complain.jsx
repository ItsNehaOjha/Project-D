import { useState } from "react";
import Section from "../component/Section";
import Button from "../component/Button";
import Heading from "../component/Heading";
import gridBackground from "../assets/grid.png";
import policy from "../assets/paper.jpg";

const Complain = () => {
  const [name, setName] = useState("");
  const [feedbackId, setFeedbackId] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [attachments, setAttachments] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, feedbackId, subject, description, attachments });
  };

  const handleFileChange = (e) => {
    setAttachments(e.target.files[0]);
  };

  return (
    <Section id="complain">
      <div className="container">
        <Heading
          title="Register Your Complaint"
          text="Share your complaints and feedback to help shape a positive and collaborative community."
        />
        {/* mb-5 p-8 */}
        <div className="relative z-1 flex justify-center items-center h-[46rem] p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
            <img
              src={policy}
              className="object-cover opacity-30"
              alt="Policy GIF"
              height={930}
            />
          </div>
          <div className="relative z-1 max-w-[32rem] ">
            <form
              onSubmit={handleSubmit}
              className="rounded-lg shadow-lg space-y-4"
            >
              {/* Display User Name */}
              <div>
                <label htmlFor="name" className="h7 ml-3 mb-2">
                  User Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border rounded-3xl p-3 mt-3 w-full bg-cover"
                  style={{
                    backgroundImage: `url(${gridBackground})`,
                    backgroundSize: "cover",
                  }}
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Feedback/Suggestion ID */}
              <div>
                <label htmlFor="feedbackId" className="h7 ml-3 mb-2">
                  Feedback ID
                </label>
                <input
                  type="text"
                  id="feedbackId"
                  value={feedbackId}
                  onChange={(e) => setFeedbackId(e.target.value)}
                  className="border rounded-3xl p-3 mt-3 w-full bg-cover"
                  style={{
                    backgroundImage: `url(${gridBackground})`,
                    backgroundSize: "cover",
                  }}
                  placeholder="Enter feedback"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="h7 ml-3 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="border p-3 rounded-3xl mt-3 w-full bg-cover"
                  style={{
                    backgroundImage: `url(${gridBackground})`,
                    backgroundSize: "cover",
                  }}
                  placeholder="Subject of your complaint"
                  required
                />
              </div>

              {/* Description/Attachments */}
              <div>
                <label htmlFor="description" className="h7 ml-3 mb-2">
                  Description/Attac ments
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="border rounded-3xl p-3 mt-3 w-full bg-cover"
                  style={{
                    backgroundImage: `url(${gridBackground})`,
                    backgroundSize: "cover",
                  }}
                  rows="6"
                  placeholder="Describe your issue or attach a file..."
                  required
                ></textarea>
              </div>

              {/* Attachments Button */}
              <div className="flex justify-between items-center">
                <div>
                  <input
                    type="file"
                    id="attachments"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label htmlFor="attachments" className="cursor-pointer">
                    <Button white className="opacity-65">Attachments</Button>
                  </label>
                </div>

                {/* Submit Button */}
                <Button > Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Complain;
