import { ContentSet } from './ContentSet'
import { IModule } from './IModule'
import { IntroText } from './IntroText'
import { LearningGoals } from './LearningGoals'
import { OpeningAssets } from './OpeningAssets'
import { Poll } from './Poll'
import { WarmUp } from './WarmUp'

export interface Introduction extends IModule {
  introText: IntroText | null
  learningGoals: LearningGoals | null
  openingAssets?: OpeningAssets | null
  copyright?: ContentSet | null
  warmUps?: WarmUp[] | null
  polls?: Poll[] | null
  type: 'INTRODUCTION'
}
