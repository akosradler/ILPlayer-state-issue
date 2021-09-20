import {
  PlayerHandlers,
  PlayerListeners,
  PlayerWrapper,
} from "@infinitas/app-player";
import { useCallback, useEffect, useMemo, useState } from "react";
import { SlimStampenSuperSubmitButton } from "./SlimStampenSuperSubmitButton";

const PlayerNextEventSync = "playerNext";

const Player = ({ item }: any): JSX.Element => {
  const [externalHandlers, setExternalHandlers] =
    useState<Omit<PlayerHandlers, "destroy">>();
  const [currentTopic, setCurrentTopic] = useState<number>(0);

  const playerSyncNext = useCallback(() => {
    if (externalHandlers) {
      externalHandlers.reset();
      externalHandlers.updateContent([
        item.contentSets
          ?.filter((ig: any) => ig.content?.length)
          .map((ig: any) =>
            ig.content!.map((ci: any) => ci.playerPayload as unknown as any)
          )[currentTopic],
      ]);
    }
  }, [currentTopic, externalHandlers, item.contentSets]);

  useEffect(() => {
    window.addEventListener(PlayerNextEventSync, playerSyncNext);
  }, [playerSyncNext]);

  const handleOnNext = () => {
    window.dispatchEvent(new CustomEvent(PlayerNextEventSync));
  };

  const handleSubmit = (props: any) => {
    setCurrentTopic((prev) => prev);
  };

  const handleSetDataForAnalysis = (data: any) => {
    if (data.givenResponse) {
      console.log(data);
    }
  };

  const listeners: PlayerListeners = {
    onNext: handleOnNext,
    onSuperSubmitAnswer: handleSubmit,
    onSetDataForAnalysis: handleSetDataForAnalysis,
  };

  const playerData = useMemo(
    () => ({
      topics:
        [
          item.contentSets
            ?.filter((ig: any) => ig.content?.length)
            .map((ig: any) =>
              ig.content!.map((ci: any) => ci.playerPayload as unknown as any)
            )[currentTopic],
        ] ?? [],
      interactions: {},
    }),
    [currentTopic, item.contentSets]
  );

  return (
    <PlayerWrapper
      id={"constId"}
      key={"constKey"}
      config={{
        superSubmitButton: SlimStampenSuperSubmitButton,
        submitButton: null,
        collectData: true,
        retryConfig: {
          textEntry: 0,
        },
      }}
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
