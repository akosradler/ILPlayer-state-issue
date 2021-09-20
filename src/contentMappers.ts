import { Topic, Particle, ParticleContent } from "@infinitas/app-player";
import { ContentSet } from "./model/ContentSet";
import {} from "@infinitas/app-player";
import { Content } from "./model/Content";

export const mapContentSetToTopics = (
  contentSets: ContentSet[] | null
): Topic[] => {
  if (!contentSets) return [];

  return contentSets?.map((contentSet) => {
    return (
      contentSet.content?.map((content) => ({
        id: content.id,
        portableTextContent: getPlayerPayloadJSON(content).portableTextContent,
      })) ?? []
    );
  });
};

export const getPlayerPayloadJSON = <
  TParticleContent extends ParticleContent = ParticleContent
>(
  content: Content
): Particle<TParticleContent> =>
  typeof content.playerPayload === "object"
    ? content.playerPayload
    : JSON.parse(content.playerPayload);
