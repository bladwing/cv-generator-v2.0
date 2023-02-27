import EduPreview from "../education/EduPreview";
import useLocalStorage from "react-use-localstorage";

import "./resume.scss";

const Resume = () => {
  const [educationCenter] = useLocalStorage("educationCenter");
  const [selectQuality] = useLocalStorage("selectQuality");
  const [endEduDate] = useLocalStorage("endEduDate");
  const [eduDescription] = useLocalStorage("eduDescription");

  return (
    <div className="Resume-Container">
      <EduPreview
        educationCenter={educationCenter}
        selectQuality={selectQuality}
        endEduDate={endEduDate}
        eduDescription={eduDescription}
      />
    </div>
  );
};

export default Resume;
