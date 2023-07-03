import Script from "next/script";
interface IClient {
  tiktok?: React.ReactNode | string;
  instagram?: React.ReactNode | string;
  hiddenMobile?: boolean;
}

const Client: React.FunctionComponent<IClient> = ({
  tiktok,
  instagram,
  hiddenMobile,
}) => (
  <div>
    {tiktok && (
      <div>
        {tiktok}
        <Script async src="https://www.tiktok.com/embed.js" />
      </div>
    )}
    {instagram && (
      <div className="hidden lg:block">
        {instagram} <Script async src="//www.instagram.com/embed.js" />
      </div>
    )}
  </div>
);
export default Client;
