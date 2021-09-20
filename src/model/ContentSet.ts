import { Content } from "./Content";
import { ContentSetParent } from "./ContentSetParent";
import { ContentSetType } from "./ContentSetType";
import { DiscoType } from "./DiscoType";
import { Metadata } from "./Metadata";

export interface ContentSet extends DiscoType {
  id: string;
  title: string | null;
  type?: ContentSetType;
  content: Content[] | null;
  parent?: ContentSetParent;
  metadata?: Metadata | null;
}
