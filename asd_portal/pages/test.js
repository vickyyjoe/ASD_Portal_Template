import axios from "axios";
import ourServices from "../components/OurServices";



const url = 'http://localhost:1337'

function test({ data }) {
  return (
    <div>
      {" "}
      Halo
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

// const test = ({ ourservices }) => {
//   return (
//     <div>
//       {" "}
//       Halo

//       <ul>
//         {ourservices.map((ourservice) => (
          
//           <li key={ourservice.id}>Title : {ourservice.Title} Description : {ourservice.Desc} name : {ourservice.name}<img src={ url+ourservice.Image.formats.small.url}/></li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// test.getInitialProps = async ctx => {
//   const res = await axios.get("http://localhost:1337/our-services");
//   const ourservices = res.data;
//   console.log(ourServices);
//   return { ourservices };
// };

export default test;
