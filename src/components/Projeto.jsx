
function Projeto({ url, img, title, desc }) {
  return (
    <>
      <a href={url} target="_blank">
        <div className="flex gap-5">
          <img src={img} alt={title} className="max-h-60" />
          <div className="flex flex-col">
            <h3 className="text-blue font-bold text-2xl hover:text-darkblue">
              {title}
            </h3>
            <p className="text-sm">{desc}</p>
            <span className="text-blue font-bold">Status</span>
            <p className="text-[#05ff00]">Concluido</p>
          </div>
        </div>
      </a>
    </>
  );
}

export default Projeto;
