import moment from "moment";

export function parseWapp(inputString: string) {


    //TO DO: Multiline messages contains enter in exported file. Fix it.
  const msgList = inputString.split('\n').slice(1).filter(msg => msg!== '');

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


