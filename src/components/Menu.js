import { useState } from "react";

const Menu = () => {
    const [bar, setBar] = useState(false);

    return (
        <div>
            <h1 onClick={()=>setBar(!bar)}>Menu test</h1>
            {bar &&
                <h2>menu opened</h2>
            }
        </div>
    )

}

export default Menu;