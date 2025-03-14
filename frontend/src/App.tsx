import moment from "moment";

const inputString = `30.06.2023, 15:32 - Guși: Ca pe tatal nostru
30.06.2023, 15:37 - Bubu: Danke capitane
30.06.2023, 15:37 - Bubu: cap coada sus jos invat testamentu de mi-l trimesasi
30.06.2023, 15:38 - Bubu: si pe langa astea ma gandesc ca mai trebuie sa stiu cum functioneaza exact fiecare protocol in parte?
30.06.2023, 16:08 - Guși: intreaba-l pe rosu ce intrebari ii picara
30.06.2023, 16:08 - Guși: nu chiar
30.06.2023, 16:08 - Guși: la mine a fost o intrebare de care adresa ipv4 sau ipv6 e gresita
30.06.2023, 16:20 - Bubu: incercai
30.06.2023, 16:20 - Bubu: da rosu e blanc
30.06.2023, 16:23 - Guși: https://youtu.be/epHOF91ZUFk?list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbA
30.06.2023, 16:23 - Guși: nu imi mai amintesc exact
30.06.2023, 16:24 - Guși: mie mi s-au parut intuitive
30.06.2023, 16:25 - Bubu: oki then
05.07.2023, 19:17 - Guși: <Media omitted>`;

function parseWapp() {
  const msgList = inputString.split('\n');

  let msgElem = msgList.map((message) => {
    const mesaj = message.split(" ");
    const msgDay = mesaj[0].slice(0, 10);
    const msgTime = mesaj[1];
    const msgDate = moment(`${msgDay} ${msgTime}`, "DD.MM.YYYY hh:mm").toISOString();
    const msgSender = mesaj[3].slice(0, -1);
    const msgContent = mesaj.slice(4).join(" ");

    return {
      msgDate: msgDate,
      msgSender: msgSender,
      msgContent: msgContent
    }
  })

  msgElem = msgElem.filter((msgElem) => { return !msgElem.msgContent.includes("<Media omitted>") });

  return msgElem;
}


function App() {
  return (
    <>
      hello
    </>
  )
}

export default App
