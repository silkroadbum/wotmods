import { Watch } from 'react-loader-spinner';

function Loader() {
  return (
    <div className="loader-wrapper">
      <Watch
        height="80"
        width="80"
        radius="48"
        color="#000000"
        ariaLabel="watch-loading"
        visible={true}
      />
    </div>
  );
}

export default Loader;
