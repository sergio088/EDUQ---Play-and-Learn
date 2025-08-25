interface props {
  txt: string;
  img: React.ReactNode;
  bg: string;
  onclick: () => void;
}

export default function ButtonWinScreen({ txt, img, bg, onclick }: props) {
  return (
    <button
      type="button"
      onClick={onclick}
      className={`flex justify-center items-center py-1 px-5 w-[50%] text-black ${bg}`}
    >
      <div className="flex justify-start">{img}</div>
      <div className="flex justify-center font-bold">{txt}</div>
    </button>
  );
}
