import {
  AnswerEventProps,
  NavProps,
  Particle,
  PlayerHandlers,
  PlayerListeners,
  PlayerWrapper,
} from "@infinitas/app-player";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Content, ContentSet } from "./model";
import { ContentUnit } from "./model/ContentUnit";
import { SlimStampenSuperSubmitButton } from "./SlimStampenSuperSubmitButton";
import { useGeneralDrillingContent } from "./useGeneralDrillingContent";

export const hasInstructionPage = (item: ContentUnit) =>
  item.contentSets![0].type === "INSTRUCTION";

const Player = ({ item }: any): JSX.Element => {
  const [externalHandlers, setExternalHandlers] =
    useState<Omit<PlayerHandlers, "destroy">>();
  const [playerNavigator, setPlayerNavigator] = useState<NavProps>();
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    await new Promise((res) => setTimeout(() => res("p1"), 10));
    setIsSubmitted(() => false);
    playerNavigator?.next();
  }, [isOnInstructionPage, playerNavigator, setNotInstructionPage]);

  const { generalDrillingItem } = useGeneralDrillingContent(item, 2);

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (
        (event.code === "Enter" || event.code === "NumpadEnter") &&
        externalHandlers
      ) {
        event.preventDefault();
        if (isSubmitted || isOnInstructionPage) {
          handleOnNext();
        } else if (playerNavigator && generalDrillingItem?.contentSets) {
          const currentContentSet =
            generalDrillingItem.contentSets[playerNavigator.current];

          if (currentContentSet?.content) {
            externalHandlers.submitAnswer(
              (currentContentSet.content[0].playerPayload as unknown as any).id
            );
          }
        }
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [
    externalHandlers,
    generalDrillingItem?.contentSets,
    handleOnNext,
    isOnInstructionPage,
    isSubmitted,
    playerNavigator,
  ]);

  // This is necessary, in order to sync back the Player's React context to the App's
  const handleOnSubmitAnswer = async (event: AnswerEventProps) => {
    console.log(event);
    setIsSubmitted(() => true);
  };

  const syncNav = (navData: NavProps) => {
    setPlayerNavigator(() => navData);
  };

  const listeners: PlayerListeners = {
    onNext: handleOnNext,
    onSubmitAnswer: handleOnSubmitAnswer,
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
            retryConfig: {
              textEntry: 0,
            },
            flattenTopics: false,
          }}
          setExternalHandlers={setExternalHandlers}
          syncNav={syncNav}
          initialData={playerData}
          listeners={listeners}
        />
      ) : null}
      {!isOnInstructionPage ? (
        <p>
          Submit and Submit All buttons are both disabled, however when you
          press enter, the non-existent answer can still be submitted. The Next
          button is also disabled, but the Player can still be forced to
          navigate via the enter key.
        </p>
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
