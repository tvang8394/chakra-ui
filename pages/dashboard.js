import Header from "../components/Dashboard/Header";
import ChartJS from "../components/Dashboard/Chart";

export async function getStaticProps() {
  const symbol = "SPY";
  const res = await fetch(
    `http://localhost:3000/api/alpacaPriceHistory/${symbol}`
  );
  const data = await res.json();

  const alpacaPrice = data;
  return {
    props: {
      alpacaPrice,
    }, // will be passed to the page component as props
  };
}

export default function Dashboad({ alpacaPrice }) {
  return (
    <>
      <Header />
      <ChartJS alpacaPrice={alpacaPrice} />
    </>
  );
}
