import {
  NavProps,
  Particle,
  PlayerListeners,
  PlayerWrapper,
} from "@infinitas/app-player";
import { useCallback, useMemo, useState } from "react";
import { Content, ContentSet } from "./model";
import { ContentUnit } from "./model/ContentUnit";
import { SlimStampenSuperSubmitButton } from "./SlimStampenSuperSubmitButton";
import { useGeneralDrillingContent } from "./useGeneralDrillingContent";

export const hasInstructionPage = (item: ContentUnit) =>
  item.contentSets![0].type === "INSTRUCTION";

const Player = ({ item }: any): JSX.Element => {
  const [playerNavigator, setPlayerNavigator] = useState<NavProps>();
  const [isOnInstructionPage, setIsOnInstructionPage] = useState(
    hasInstructionPage(item)
  );

  const setNotInstructionPage = useCallback(
    () => setIsOnInstructionPage(() => false),
    []
  );

  const handleOnNext = useCallback(async () => {
    if (isOnInstructionPage) {
      setNotInstructionPage();
    }

    playerNavigator?.next();
  }, [isOnInstructionPage, playerNavigator, setNotInstructionPage]);

  const { generalDrillingItem } = useGeneralDrillingContent(item, 2);

  const syncNav = (navData: NavProps) => {
    setPlayerNavigator(() => navData);
  };

  const listeners: PlayerListeners = {
    onNext: handleOnNext,
  };

  const playerData = useMemo(() => {
    const topics =
      generalDrillingItem?.contentSets
        ?.filter((ig: ContentSet) => ig.content?.length)
        .map((ig: ContentSet) =>
          ig.content!.map(
            (ci: Content) => ci.playerPayload as unknown as Particle
          )
        ) ?? [];
    return {
      topics,
      interactions: {},
    };
  }, [generalDrillingItem]);

  return (
    <>
      {generalDrillingItem ? (
        <PlayerWrapper
          id={"constId"}
          key={"constKey"}
          config={{
            collectData: true,
            submitButton: null,
            superSubmitButton: SlimStampenSuperSubmitButton,
            retryConfig: {
              textEntry: 0,
            },
            flattenTopics: false,
          }}
          syncNav={syncNav}
          initialData={playerData}
          listeners={listeners}
        />
      ) : null}
    </>
  );
};

export const ContentPlayer = ({ item, enhance }: any): JSX.Element => {
  const WrappedPlayer = useMemo(
    () => (enhance ? enhance(Player) : Player),
    [enhance]
  );

  return <WrappedPlayer item={item} />;
};
