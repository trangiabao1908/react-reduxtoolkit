const InputValue = (props) => {
  const { data, setData, lableName, type, classValue } = props;

  return (
    <>
      <label className="font-semibold mt-3 mb-1">{lableName}</label>
      {type === "textarea" ? (
        <textarea
          className={`text-black h-[100px] p-1 text-sm border-none rounded text-start ${classValue}`}
          onChange={(e) => setData(e.target.value)}
          placeholder={data}
        ></textarea>
      ) : (
        <input
          className="text-black text-sm h-[25px] p-1 border-none rounded"
          type="text"
          onChange={(e) => setData(e.target.value)}
          placeholder={data}
        ></input>
      )}
    </>
  );
};

export default InputValue;
