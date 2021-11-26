import { useCallback, useEffect, useState } from "react";

import deepcopy from "deepcopy";

import { v4 } from "uuid";
import { ContentSet } from "./model/ContentSet";
import { ContentUnit } from "./model/ContentUnit";
import { Particle } from "@infinitas/app-player";

export const swapElements = <T>(arr: T[], index1: number, index2: number) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};

export const shuffle = <T>(arr: T[]) =>
  arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

export const isOfContentSetType = (contentSet: ContentSet) =>
  contentSet.type === "CONTENTSET";
export const hasInstructionPage = (item: ContentUnit) =>
  item.contentSets![0].type === "INSTRUCTION";

const changeParticleIds = (contentSets: ContentSet[]): ContentSet[] => {
  return contentSets.map((contentSet) => ({
    ...contentSet,
    content: contentSet.content
      ? contentSet.content.map((content) => ({
          ...content,
          playerPayload: { ...content.playerPayload, id: v4() },
        }))
      : null,
  }));
};

export const useGeneralDrillingContent = (
  item: ContentUnit,
  numberOfTimesQuestionsAppear: number
) => {
  const [generalDrillingItem, setGeneralDrillingItem] = useState<ContentUnit>();

  const getGeneralDrillingContentSets = useCallback(
    (contentSets: ContentSet[]) => {
      const shuffledContentSets: ContentSet[] = shuffle(
        Array(numberOfTimesQuestionsAppear)
          .fill(contentSets.filter(isOfContentSetType))
          .flat()
      );

      // change up the ids in order for the player to recognize repeated questions
      return changeParticleIds(shuffledContentSets);
    },
    [numberOfTimesQuestionsAppear]
  );

  useEffect(() => {
    if (item.contentSets) {
      const copiedItem = deepcopy(item);

      copiedItem.contentSets = [
        ...(hasInstructionPage(item) ? item.contentSets.slice(0, 1) : []),
      ].concat(...getGeneralDrillingContentSets(item.contentSets));

      setGeneralDrillingItem(() => copiedItem);
    }
  }, [getGeneralDrillingContentSets, item]);

  return { generalDrillingItem };
};
