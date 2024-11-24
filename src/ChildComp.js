const ChildComp = ({ setFunc }) => {
  return (
    <>
      <h3>Hello React I'm Child</h3>
      {setFunc("My Name is Bob")}
    </>
  );
};

export default ChildComp;
