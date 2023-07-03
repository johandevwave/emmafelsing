interface IMenuItem {
  link: string;
  text: string;
  isVisible: (value: boolean) => void;
}

const MenuItem: React.FunctionComponent<IMenuItem> = ({
  link,
  text,
  isVisible,
}) => (
  <a
    href={link}
    onClick={() => isVisible(false)}
    className="w-full hover-underline-animation block lg:text-2xl py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
  >
    {text}
  </a>
);
export default MenuItem;
