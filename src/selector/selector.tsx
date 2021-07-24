const Selector = (props: any) => {
  return (
    <div>
    <select 
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