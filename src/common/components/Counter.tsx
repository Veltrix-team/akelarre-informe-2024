import { useState } from "react"





interface CounterProps {
    title: string;
    initialValue: number;
}

export const Counter = ({
    title = 'Counter',
    initialValue = 0 }: CounterProps) => {

    const [count, setCount] = useState(initialValue);



    const onIncrement = () => setCount(count + 1);

    const onDecrement = () => {

        if (count === 0) return;
        setCount(count - 1);

    }

    const onReset = () => setCount(initialValue);



    return (
        <>
            <h2>{title}</h2>

            <p>Este es un componente de react</p>

            <pre style={{fontSize:"2rem"}}>{count}</pre>
            <div style={{ display: "flex", flexDirection: "column", gap:"1rem" }}>
                <button onClick={onIncrement}>
                    Incrementar
                </button>

                <button onClick={onDecrement}>
                    Decrementar
                </button>

                <button onClick={onReset}>
                    Reiniciar
                </button>
            </div>



        </>
    )
}
