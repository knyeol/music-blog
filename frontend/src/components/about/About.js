import { useQuery } from "@apollo/client";
import { GET_ABOUT } from "../../apollo";
import ReactMarkdown from "react-markdown";

function About() {
  const { loading, error, data } = useQuery(GET_ABOUT);

  return (
    <div className="container posts">
      <h3>About Me</h3>
      {data ? (
        <div>
          <img
            src={process.env.REACT_APP_URL + data.page.image.formats.medium.url}
            alt={data.page.image.name}
          />
          <ReactMarkdown>{data.page.content}</ReactMarkdown>
        </div>
      ) : null}
    </div>
  );
}

export default About;
