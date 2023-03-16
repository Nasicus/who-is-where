import { Center, Loader } from "@mantine/core";
import { FC, useEffect, useMemo, useState } from "react";

export const AppLoader: FC = () => {
  const startTime = useMemo(() => getCurrentSeconds(), []);
  const [funnyMessage, setFunnyMessage] = useState("");

  useEffect(() => {
    const interValHandle = setInterval(setNextFunnyMessage, 900);

    return () => clearInterval(interValHandle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Center maw={400} h={100} mx="auto">
        <Loader />
      </Center>
      <Center>
        <div>{funnyMessage}</div>
      </Center>
    </div>
  );

  function setNextFunnyMessage() {
    const diff = getCurrentSeconds() - startTime;

    if (diff > 65) {
      setFunnyMessage(
        `Du los. Mir sind jetzt fäng bi ${diff.toFixed(0)} Sekunde lade ziit. Jetzt eifach nomal en Gang abefahre, zrugglehne und nomal warte. Wenn ich säg es chunt, dän chunts au!`
      );
    } else if (diff > 60) {
      setFunnyMessage("🎶Momoll ich lose scho no, So halbwägs zue🎶");
    } else if (diff > 55) {
      setFunnyMessage("🎶GÖÖÖÖÖÖÖÖÖSCHENE - AIROOOOOOOOLO🎶");
    } else if (diff > 50) {
      setFunnyMessage("🎶Aha, aha, mm hm, so, so🎶");
    } else if (diff > 45) {
      setFunnyMessage("🎶Wär so öppis für mich🎶");
    } else if (diff > 40) {
      setFunnyMessage("🎶Yoga hend sie sich denn überleit🎶");
    } else if (diff > 35) {
      setFunnyMessage("🎶Chli bewegig tät der guet häts gmeint🎶");
    } else if (diff > 30) {
      setFunnyMessage(
        "Am beschte singemer zäme churz eis: 🎶Mach mal echli Sport händs gseit🎶"
      );
    } else if (diff > 20) {
      setFunnyMessage(
        "Luueg...dä Server woni ha isch gratis...dä schaltet amigs ab und muss dän neu starte....Es chunt no!"
      );
    } else if (diff > 15) {
      setFunnyMessage("Nöd nervös werde...iiiischnuuufe....uuuusschnuufe!");
    } else if (diff > 10) {
      setFunnyMessage("Nei ganz im Ernscht - das chunt schono!");
    } else if (diff > 5) {
      setFunnyMessage("Geduld min junge Padawan!");
    }
  }
};

function getCurrentSeconds() {
  return new Date().getTime() / 1000;
}
