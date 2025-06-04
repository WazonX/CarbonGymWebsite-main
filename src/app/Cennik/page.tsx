export default function Home(){
    const silownia = [{
        rodzaj: "Jednorazowe wejście",
        cena: "40 zł"
    },{
        rodzaj: "Open",
        cena: "210 zł"
    },{
        rodzaj: "6 miesięczny",
        cena: "1200 zł"
    },{
        rodzaj: "12 miesięczny",
        cena: "2280 zł"
    },{
        rodzaj: "Morning",
        cena: "180 zł"
    },{
        rodzaj: "Student",
        cena: "180 zł"
    },{
        rodzaj: "Junior",
        cena: "170 zł"
    },{
        rodzaj: "Senior",
        cena: "160 zł"
    },    {
        rodzaj: "Karnet 12 wejść",
        cena: "190 zł"
    },{
        rodzaj: "Karnet 8 wejść",
        cena: "150 zł"
    },{
        rodzaj: "Karnet 4 wejścia",
        cena: "110 zł"
    },    {
        rodzaj: "Pakiet para",
        cena: "400 zł"
    },{
        rodzaj: "Pakiet rodzinny 1+1",
        cena: "360 zł"
    }

]

    const treningi = [    {
        rodzaj: "Trening personalny 1 osoba - pojedynczy",
        cena: "140 zł"
    },{
        rodzaj: "Trening personalny 1 osoba - 4 wejścia",
        cena: "440 zł"
    },{
        rodzaj: "Trening personalny 1 osoba - 8 wejść",
        cena: "800 zł"
    },{
        rodzaj: "Trening personalny 1 osoba - 12 wejść",
        cena: "1140 zł"
    },    {
        rodzaj: "Trening personalny 2 osoby - pojedynczy",
        cena: "200 zł"
    },{
        rodzaj: "Trening personalny 2 osoby - 4 wejścia",
        cena: "300 zł/osoba"
    },{
        rodzaj: "Trening personalny 2 osoby - 8 wejść",
        cena: "560 zł/osoba"
    }
]

    const grupowe = [    {
        rodzaj: "Zajęcia grupowe - 4 wejścia",
        cena: "110 zł"
    },{
        rodzaj: "Zajęcia grupowe - 8 wejść",
        cena: "180 zł"
    },{
        rodzaj: "Zajęcia grupowe - 12 wejść",
        cena: "240 zł"
    },{
        rodzaj: "Zajęcia grupowe - open z siłownią",
        cena: "300 zł"
    }
]

    const boks = [    {
        rodzaj: "Boks - pojedynczy trening",
        cena: "100 zł"
    },{
        rodzaj: "Boks - pakiet 8 treningów",
        cena: "760 zł"
    }
]



    return(
        <>
            <h1 className="text-center col-12 pt-5 heading-center-column text-uppercase headingSize">
                Cennik
            </h1>
            <h2 className="headingSize text-center pt-5 pb-5">
                Siłownia
            </h2>
            <div className="container text-center spanSmall">
                        {
                            silownia.map((i) => {return(<><div className="row row-underline"><div className="col-6">{i.rodzaj}</div><div className="col-6 pb-3">{i.cena}</div></div></>)})
                        }
            </div>
            <h2 className="headingSize text-center pt-5 pb-5">
                Trening Personalny
            </h2>
            <div className="container text-center spanSmall">
                        {
                            treningi.map((i) => {return(<><div className="row row-underline"><div className="col-6">{i.rodzaj}</div><div className="col-6 pb-3">{i.cena}</div></div></>)})
                        }
            </div>
            <h2 className="headingSize text-center pt-5 pb-5">
                grupowe
            </h2>
            <div className="container text-center spanSmall">
                        {
                            grupowe.map((i) => {return(<><div className="row row-underline"><div className="col-6">{i.rodzaj}</div><div className="col-6 pb-3">{i.cena}</div></div></>)})
                        }
            </div>
            <h2 className="headingSize text-center pt-5 pb-5">
                Boks
            </h2>
            <div className="container text-center spanSmall">
                        {
                            boks.map((i) => {return(<><div className="row row-underline"><div className="col-6">{i.rodzaj}</div><div className="col-6 pb-3">{i.cena}</div></div></>)})
                        }
            </div>
        </>
    )
}