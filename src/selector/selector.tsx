const Selector = (props: any) => {
  return (
    <div className="flex">
      <select className="flex shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-4"
        name = {props.name}
        value={props.selectedValue} 
        onChange={props.onChange} 
      >
      { 
        props.list.map((l: any) => (<option key={l.id} value={l.id}>{l.name}</option>))
      }
      </select>
    </div>
  );
};

export default Selector;