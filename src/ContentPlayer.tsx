import {
  PlayerHandlers,
  PlayerListeners,
  PlayerWrapper,
} from "@infinitas/app-player";
import React, { useMemo, useState } from "react";

const Player = ({ item }: any): JSX.Element => {
  const [externalHandlers, setExternalHandlers] =
    useState<Omit<PlayerHandlers, "destroy">>();

  const handleSupersubmit = () => {
    console.log("externalHandlers in superSubmit");
    console.log(externalHandlers);
  };

  const listeners: PlayerListeners = {
    onSuperSubmitAnswer: handleSupersubmit,
  };

  const playerData = useMemo(
    () => ({
      topics:
        item.contentSets
          ?.filter((ig: any) => ig.content?.length)
          .map((ig: any) =>
            ig.content!.map((ci: any) => ci.playerPayload as unknown as any)
          ) ?? [],
      interactions: {},
    }),
    [item.contentSets]
  );

  return (
    <PlayerWrapper
      id={"constId"}
      key={"constKey"}
      setExternalHandlers={setExternalHandlers}
      initialData={playerData}
      listeners={listeners}
    />
  );
};

export const ContentPlayer = ({ item, enhance }: any): JSX.Element => {
  const WrappedPlayer = useMemo(
    () => (enhance ? enhance(Player) : Player),
    [enhance]
  );

  return <WrappedPlayer item={item} />;
};
