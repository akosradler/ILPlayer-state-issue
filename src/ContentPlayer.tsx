import { PlayerListeners, PlayerWrapper } from "@infinitas/app-player";
import React, { useMemo, FC } from "react";

const DummyContentWrapper: React.FC = ({ children }: any): JSX.Element => {
  return <div>{children}</div>;
};

const Player = ({ item, onNext, onSubmitAnswer }: any): JSX.Element => {
  const listeners: PlayerListeners = {
    onNext,
    onSubmitAnswer,
  };

  const playerData = useMemo(
    () => ({
      topics:
        item.contentSets
          ?.filter((ig: any) => ig.content?.length)
          .map((ig: any) =>
            ig.content!.map((ci: any) => (ci.playerPayload as unknown) as any)
          ) ?? [],
      interactions: {},
    }),
    [item.contentSets]
  );

  return (
    <PlayerWrapper
      id={"constId"}
      key={"constKey"}
      config={{ contentWrapper: DummyContentWrapper }}
      initialData={playerData}
      listeners={listeners}
    />
  );
};

export const ContentPlayer = ({ item, enhance }: any): JSX.Element => {
  const WrappedPlayer = useMemo(() => (enhance ? enhance(Player) : Player), [
    enhance,
  ]);

  return <WrappedPlayer item={item} />;
};
