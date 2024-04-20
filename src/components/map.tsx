export default function Map({
  open,
  setOpen
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <img
      onClick={() => {
        setOpen(!open);
      }}
      src='/map.png'
      className='h-screen w-screen object-cover'
    />
  );
}
