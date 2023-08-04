export default function Toolbar({ filters, selected, onSelectFilter }) {
    return (
      <div className="toolbar">
        {filters.map((f, i) => (
          <button
            className={f === selected ? "toolbar__button button_selected" : "toolbar__button"}
            key={i}
            onClick={() => onSelectFilter(f)}
          >{f}</button>
        ))}
      </div>
    );
  }