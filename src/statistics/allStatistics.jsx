import { useState } from "react";
import { useEffect } from "react";
import { Statistic } from "./statistic.jsx";
import { Accordion, AccordionTab } from 'primereact/accordion';


export   function AllStatistics({url}) {
    const [isLoading, setIsLoading] = useState(true);
  const [pending, setPending] = useState(null);
  const [accepted, setAccepted] = useState(null);
  const [rejected, setRejected] = useState(null);
  useEffect(() => {
    fetch(`${url}/statistics`)	
      .then((response) => response.json())
      .then((statistics) => {
        setPending(statistics.pending);
        setRejected(statistics.rejected);
        setAccepted(statistics.accepted);
        setIsLoading(false);
      });
  }, []);

    if (isLoading) { 
        return (
        <div className="App">
            <h1>Cargando...</h1>
        </div>
        );
    }
    return (
        <div className="card" style={{color:"var(--primary-color)"}}>
            <Accordion multiple activeIndex={[0]}>
                <AccordionTab header={`Pendientes: ${pending.total}`}>
                    <Statistic stadistic={pending} />
                </AccordionTab>
                <AccordionTab header={`Aceptadas: ${accepted.total}`}>
                    <Statistic stadistic={accepted} />
                </AccordionTab>
                <AccordionTab header={`Rechazadas: ${rejected.total}`}>	
                    <Statistic stadistic={rejected} />
                </AccordionTab>
            </Accordion>
        </div>
    )

        
}