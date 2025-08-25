interface props {
  bg: string;
  txt: string;
  onClick: () => void;
}

export default function ButtonIdade({ bg, txt, onClick }: props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-12 py-3 hover text-2xl text-black font-semibold rounded ${bg}`}
    >
      {txt}
    </button>
  );
}
