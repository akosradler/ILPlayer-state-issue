import { ContentTypes } from '@infinitas/app-player'

import { ContentUnitSubType, ContentUnitType } from './ContentUnitType'

export type ContentHubContentUnitType = Extract<
  'ASSIGNMENT' | 'DRILLING' | 'POLL' | 'WARMUP' | 'TEACHERGUIDE' | 'THEORY' | 'REFERENCEUNIT',
  ContentUnitType
>

export type ContentHubContentType = Extract<'documentAsset' | 'audio' | 'video' | 'image', ContentTypes>

type ContentHubExtendedContentTypes =
  | 'documentAssetInline'
  | 'audioInline'
  | 'externalAudio'
  | 'videoInline'
  | 'imageInline'
  | 'externalVideo'
  | 'externalVideoInline'

export type ContentHubFilterType = ContentHubContentUnitType | ContentHubContentType | ContentUnitSubType

export type ContentHubDiscoFilterTypes =
  | ContentHubContentUnitType
  | ContentHubContentType
  | ContentHubExtendedContentTypes
