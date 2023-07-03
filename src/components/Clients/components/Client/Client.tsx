import Script from "next/script";
interface IClient {
  tiktok: React.ReactNode | string;
}

const Client: React.FunctionComponent<IClient> = ({ tiktok }) => (
  <div>
    {tiktok}
    <Script async src="https://www.tiktok.com/embed.js" />
  </div>
);
export default Client;
