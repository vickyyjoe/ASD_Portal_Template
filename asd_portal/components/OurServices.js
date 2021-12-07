import axios from "axios";

const url = "http://localhost:1337";

function ourServices({ data }) {
  return (
    <div>
      <ul>
        {data.map((ourservice) => (
          <li key={ourservice.id}>
            Title : {ourservice.Title} Description : {ourservice.Desc} name :{" "}
            {ourservice.name}
            <img src={url + ourservice.Image.formats.small.url} />
          </li>
        ))}
      </ul>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await axios("http://localhost:1337/our-services");
  const data = res.data;

  // Pass data to the page via props
  return { props: { data } };
}


// const ourServices = ({ ourservices }) => {};

// ourServices.getServerSideProps = async (ctx) => {
//   const res = await axios.get("http://localhost:1337/our-services");
//   const ourservices = res.data;
//   console.log(res);
//   return { ourservices };
// };

export default ourServices;
