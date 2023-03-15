import { Anchor, Code, Container } from "@mantine/core";
import { FC } from "react";

export const Glitzt: FC<{ error: Error }> = ({ error }) => {
  return (
    <div>
      Gseht so us als hets dich{" "}
      <Anchor
        href="https://es-hät-wieder-eine-glitzt.ch/mich"
        target="_blank"
        rel="noreferrer"
      >
        dich
      </Anchor>{" "}
      glitzt.
      <br />
      <br />
      Mängisch isch dä Server chli langsam (willer gratis isch).
      <br />
      Klick <Anchor onClick={() => window.location.reload()}>da</Anchor> zum
      nomal refreshe und nomal probiere.
      <br />
      <br />
      Error:{" "}
      <Container size="xs" px="xs">
        <Code>{JSON.stringify(error, Object.getOwnPropertyNames(error))}</Code>
      </Container>
    </div>
  );
};
