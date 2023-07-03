interface IClient {
  tiktok: React.ReactNode | string;
}

const Client: React.FunctionComponent<IClient> = ({ tiktok }) => (
  <div>
    {tiktok}
    <script async src="https://www.tiktok.com/embed.js"></script>
  </div>
);
export default Client;
