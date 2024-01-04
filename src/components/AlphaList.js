import React from "react";

export const AlphaList = ({ data, alphaClass }) => {
    const parsedData = React.useMemo(() => {
      const obj = data.reduce((r, { Name }) => {
        const l = Name[0];
        if (!r[l]) r[l] = [Name];
        else r[l].push(Name);
        return r;
      }, {});
  
      const sorted = Object.entries(obj).sort(([a], [b]) => a.localeCompare(b));
  
      return sorted;
    }, [data]);
  
    return (
        <div>
            <div className="text-start alpha-nav mb-2">
                {parsedData.map(([key]) => (
                <a href={'#' + key}>{key}</a>
                ))}
            </div>
            <div className={alphaClass + " text-start"}>
                {parsedData.map(([key, value]) => (
                    <div id={key}  key={key}>
                        <strong style= {{color: "#b90000"}}>{key}</strong>
                        <div >
                        {value.map(v => (
                            <p key={v}>{v}</p>
                        ))}
                        </div>
                    </div>
                ))}
            </div> 
        </div>
        
    );
  }
