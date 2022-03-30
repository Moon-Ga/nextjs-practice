import SEO from "../../components/SEO";

export default function MovieDetail({ params }) {
  const [title, id] = params;
  return (
    <div>
      <SEO title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export async function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
