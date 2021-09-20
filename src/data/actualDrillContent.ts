export const actualDrillContent = {
  __typename: "Drilling",
  latestAttempt: {
    __typename: "AssignmentAttempt",
    legacyContentInfo: null,
    id: "d449f113-8c15-4f1a-a513-caba954154fd",
    score: 0,
    status: "Completed",
    progress: 100,
    duration: "PT5S",
    resultTypeCategory: null,
    cmi5Statements: [
      {
        id: "102585f9-2e65-4888-b24f-6b8792b95269",
        timestamp: "2021-09-16T15:41:40.049Z",
        actor: {
          name: "",
          mbox: null,
          objectType: "Agent",
          account: {
            homePage: "https://identity.noordhoff.nl",
            name: "328118ef-98bd-4bda-8f3b-9fdbd4ecd029",
          },
        },
        verb: {
          id: "https://adlnet.gov/expapi/verbs/scored",
          display: {
            "nl-NL": null,
            "en-GB": null,
            "en-US": null,
            en: "scored",
          },
        },
        result: {
          completion: true,
          success: false,
          duration: "PT3S",
          response: {
            "id-abdf828b-dca3-477f-ca64-1f751597507b": "sdf",
          },
          player2State: {
            particleId:
              "c7e610d8-d738-48f9-96a4-de559a145d1e_id-ee53936d-db36-4131-f659-6a3068c844d6",
            answerOptions: [
              {
                _id: "id-c41b3d01-cb8c-4dd2-864e-5e71d3305715",
                _type: "p",
                children: [
                  {
                    _type: "span",
                    marks: [],
                    text: "cadmium: ",
                  },
                  {
                    _id: "id-abdf828b-dca3-477f-ca64-1f751597507b",
                    _type: "answerContentInline",
                    predefinedAnswer: false,
                    children: [
                      {
                        _type: "span",
                        marks: [],
                        text: "Cd",
                      },
                    ],
                    correctResponseFeedback: [],
                    incorrectResponseFeedback: [],
                    alternativeAnswers: [],
                  },
                ],
              },
            ],
            _type: "textEntry",
            startingTime: 1631806896926,
            answer: {
              "id-abdf828b-dca3-477f-ca64-1f751597507b": "sdf",
            },
            score: 0,
            class: "",
            evaluation: true,
            numberOfGaps: 1,
            isSubmitted: true,
            isSelfAssessment: false,
            maxScoreAllowed: 1,
            isReadyToBeSubmitted: true,
            duration: 3121,
            dataForAnalysis: {
              dict: {},
              keyStrokes: [
                {
                  character: "s",
                  keyCode: 83,
                  timeDown: 9439.39999999851,
                  timeUp: 9653.300000000745,
                },
                {
                  character: "d",
                  keyCode: 68,
                  timeDown: 9559.300000000745,
                  timeUp: 9707.199999999255,
                },
                {
                  character: "f",
                  keyCode: 70,
                  timeDown: 9625.199999999255,
                  timeUp: 9768.300000000745,
                },
              ],
            },
            isCorrect: {
              "id-abdf828b-dca3-477f-ca64-1f751597507b": false,
            },
            rightAnswers: {
              "id-abdf828b-dca3-477f-ca64-1f751597507b": "Cd",
            },
            accumulatedRetryPenalty: 0.3,
            submittingTime: 1631806900047,
            config: {},
            completed: true,
            shouldShowRightAnswerRetries: false,
          },
          extensions: {
            "http://xapi.infinitaslearning.com/xapi/extensions/attempts": 0,
            "http://xapi.infinitaslearning.com/xapi/extensions/interactionType":
              null,
            "https://w3id.org/xapi/cmi5/result/extensions/progress": 0,
            "http://xapi.infinitaslearning.com/xapi/extensions/correctCount": 0,
            "http://xapi.infinitaslearning.com/xapi/extensions/incorrectCount": 0,
          },
          score: {
            scaled: 0,
            raw: 0,
            min: 0,
            max: 1,
          },
        },
        context: {
          registration: "d449f113-8c15-4f1a-a513-caba954154fd",
          contextActivities: {
            parent: null,
            category: [
              {
                id: "https://w3id.org/xapi/cmi5/context/categories/cmi5",
                definition: null,
                objectType: "Activity",
              },
            ],
            grouping: [
              {
                id: "http://infinitaslearning.com/types/method/95e29a9b-c284-4849-a60c-6e87cdd82c00",
              },
              {
                id: "d1045e1a-f98f-4ceb-9b8e-3b0e273beb6e",
              },
              {
                id: "85b3ea71-a816-406f-9da7-e763f0683014",
              },
              {
                id: "8f3d56c7-d0f4-482a-a7eb-770ff0c82d62",
              },
              {
                id: "22d40a67-4a37-4702-a1db-5ca762835d29",
              },
            ],
          },
          extensions: {
            "https://w3id.org/xapi/cmi5/context/extensions/sessionid":
              "ri4bnOsqW1Os6ve4WK_BkQ",
            "http://xapi.infinitaslearning.com/contextactivities/evaluationlogic/":
              "ilplayer2",
            "http://xapi.infinitaslearning.com/contextactivities/specification/CMI5":
              "2016-06",
            "http://xapi.infinitaslearning.com/contextactivities/specification/ILxAPI":
              "2018-06",
          },
          language: "en-GB",
          platform: "SE-Platform",
        },
        object: {
          id: "https://icom.infinitas.nl/xapi/activities/contentitemidentifier/c7e610d8-d738-48f9-96a4-de559a145d1e_id-ee53936d-db36-4131-f659-6a3068c844d6",
          objectType: "Activity",
          definition: {
            type: "https://adlnet.gov/expapi/activities/lesson/module",
            extensions: null,
            name: {
              "nl-NL": null,
              "en-GB": "Text entry drilling 2.0 - with Slim Stampen",
              "en-US": null,
            },
          },
        },
        stored: "2021-09-16T15:41:43.1866941",
        authority: null,
        version: null,
        attachments: null,
      },
      {
        id: "3f6c6947-8107-4baf-b2fa-f2948dd3180d",
        timestamp: "2021-09-16T15:41:40.049Z",
        actor: {
          name: "",
          mbox: null,
          objectType: "Agent",
          account: {
            homePage: "https://identity.noordhoff.nl",
            name: "328118ef-98bd-4bda-8f3b-9fdbd4ecd029",
          },
        },
        verb: {
          id: "https://adlnet.gov/expapi/verbs/answered",
          display: {
            "nl-NL": null,
            "en-GB": null,
            "en-US": null,
            en: "answered",
          },
        },
        result: {
          completion: true,
          success: false,
          duration: "PT3S",
          response: {
            "id-abdf828b-dca3-477f-ca64-1f751597507b": "sdf",
          },
          player2State: {
            particleId:
              "c7e610d8-d738-48f9-96a4-de559a145d1e_id-ee53936d-db36-4131-f659-6a3068c844d6",
            answerOptions: [
              {
                _id: "id-c41b3d01-cb8c-4dd2-864e-5e71d3305715",
                _type: "p",
                children: [
                  {
                    _type: "span",
                    marks: [],
                    text: "cadmium: ",
                  },
                  {
                    _id: "id-abdf828b-dca3-477f-ca64-1f751597507b",
                    _type: "answerContentInline",
                    predefinedAnswer: false,
                    children: [
                      {
                        _type: "span",
                        marks: [],
                        text: "Cd",
                      },
                    ],
                    correctResponseFeedback: [],
                    incorrectResponseFeedback: [],
                    alternativeAnswers: [],
                  },
                ],
              },
            ],
            _type: "textEntry",
            startingTime: 1631806896926,
            answer: {
              "id-abdf828b-dca3-477f-ca64-1f751597507b": "sdf",
            },
            score: 0,
            class: "",
            evaluation: true,
            numberOfGaps: 1,
            isSubmitted: true,
            isSelfAssessment: false,
            maxScoreAllowed: 1,
            isReadyToBeSubmitted: true,
            duration: 3121,
            dataForAnalysis: {
              dict: {},
              keyStrokes: [
                {
                  character: "s",
                  keyCode: 83,
                  timeDown: 9439.39999999851,
                  timeUp: 9653.300000000745,
                },
                {
                  character: "d",
                  keyCode: 68,
                  timeDown: 9559.300000000745,
                  timeUp: 9707.199999999255,
                },
                {
                  character: "f",
                  keyCode: 70,
                  timeDown: 9625.199999999255,
                  timeUp: 9768.300000000745,
                },
              ],
            },
            isCorrect: {
              "id-abdf828b-dca3-477f-ca64-1f751597507b": false,
            },
            rightAnswers: {
              "id-abdf828b-dca3-477f-ca64-1f751597507b": "Cd",
            },
            accumulatedRetryPenalty: 0.3,
            submittingTime: 1631806900047,
            config: {},
            completed: true,
            shouldShowRightAnswerRetries: false,
          },
          extensions: {
            "http://xapi.infinitaslearning.com/xapi/extensions/attempts": 0,
            "http://xapi.infinitaslearning.com/xapi/extensions/interactionType":
              null,
            "https://w3id.org/xapi/cmi5/result/extensions/progress": 0,
            "http://xapi.infinitaslearning.com/xapi/extensions/correctCount": 0,
            "http://xapi.infinitaslearning.com/xapi/extensions/incorrectCount": 0,
          },
          score: {
            scaled: 0,
            raw: 0,
            min: 0,
            max: 1,
          },
        },
        context: {
          registration: "d449f113-8c15-4f1a-a513-caba954154fd",
          contextActivities: {
            parent: null,
            category: [
              {
                id: "https://w3id.org/xapi/cmi5/context/categories/cmi5",
                definition: null,
                objectType: "Activity",
              },
            ],
            grouping: [
              {
                id: "http://infinitaslearning.com/types/method/95e29a9b-c284-4849-a60c-6e87cdd82c00",
              },
              {
                id: "d1045e1a-f98f-4ceb-9b8e-3b0e273beb6e",
              },
              {
                id: "85b3ea71-a816-406f-9da7-e763f0683014",
              },
              {
                id: "8f3d56c7-d0f4-482a-a7eb-770ff0c82d62",
              },
              {
                id: "22d40a67-4a37-4702-a1db-5ca762835d29",
              },
            ],
          },
          extensions: {
            "https://w3id.org/xapi/cmi5/context/extensions/sessionid":
              "ri4bnOsqW1Os6ve4WK_BkQ",
            "http://xapi.infinitaslearning.com/contextactivities/evaluationlogic/":
              "ilplayer2",
            "http://xapi.infinitaslearning.com/contextactivities/specification/CMI5":
              "2016-06",
            "http://xapi.infinitaslearning.com/contextactivities/specification/ILxAPI":
              "2018-06",
          },
          language: "en-GB",
          platform: "SE-Platform",
        },
        object: {
          id: "https://icom.infinitas.nl/xapi/activities/contentitemidentifier/c7e610d8-d738-48f9-96a4-de559a145d1e_id-ee53936d-db36-4131-f659-6a3068c844d6",
          objectType: "Activity",
          definition: {
            type: "https://adlnet.gov/expapi/activities/lesson/module",
            extensions: null,
            name: {
              "nl-NL": null,
              "en-GB": "Text entry drilling 2.0 - with Slim Stampen",
              "en-US": null,
            },
          },
        },
        stored: "2021-09-16T15:41:43.1856939",
        authority: null,
        version: null,
        attachments: null,
      },
      {
        id: "64a884ef-6285-433c-b5ba-9a8018e8ba0d",
        timestamp: "2021-09-16T15:41:36.927Z",
        actor: {
          name: "",
          mbox: null,
          objectType: "Agent",
          account: {
            homePage: "https://identity.noordhoff.nl",
            name: "328118ef-98bd-4bda-8f3b-9fdbd4ecd029",
          },
        },
        verb: {
          id: "https://adlnet.gov/expapi/verbs/initialized",
          display: {
            "nl-NL": null,
            "en-GB": null,
            "en-US": null,
            en: "initialized",
          },
        },
        result: null,
        context: {
          registration: "d449f113-8c15-4f1a-a513-caba954154fd",
          contextActivities: {
            parent: null,
            category: [
              {
                id: "https://w3id.org/xapi/cmi5/context/categories/cmi5",
                definition: null,
                objectType: "Activity",
              },
            ],
            grouping: [
              {
                id: "http://infinitaslearning.com/types/method/95e29a9b-c284-4849-a60c-6e87cdd82c00",
              },
              {
                id: "d1045e1a-f98f-4ceb-9b8e-3b0e273beb6e",
              },
              {
                id: "85b3ea71-a816-406f-9da7-e763f0683014",
              },
              {
                id: "8f3d56c7-d0f4-482a-a7eb-770ff0c82d62",
              },
              {
                id: "22d40a67-4a37-4702-a1db-5ca762835d29",
              },
            ],
          },
          extensions: {
            "https://w3id.org/xapi/cmi5/context/extensions/sessionid":
              "ri4bnOsqW1Os6ve4WK_BkQ",
            "http://xapi.infinitaslearning.com/contextactivities/evaluationlogic/":
              "ilplayer2",
            "http://xapi.infinitaslearning.com/contextactivities/specification/CMI5":
              "2016-06",
            "http://xapi.infinitaslearning.com/contextactivities/specification/ILxAPI":
              "2018-06",
          },
          language: "en-GB",
          platform: "SE-Platform",
        },
        object: {
          id: "https://icom.infinitas.nl/xapi/activities/contentitemidentifier/undefined",
          objectType: "Activity",
          definition: {
            type: "https://adlnet.gov/expapi/activities/lesson/module",
            extensions: null,
            name: {
              "nl-NL": null,
              "en-GB": "Text entry drilling 2.0 - with Slim Stampen",
              "en-US": null,
            },
          },
        },
        stored: "2021-09-16T15:41:43.1856939",
        authority: null,
        version: null,
        attachments: null,
      },
      {
        id: "ae22ac00-ea7a-4ff1-b126-0af804b54c9a",
        timestamp: "2021-09-16T15:38:37.51Z",
        actor: {
          name: "",
          mbox: null,
          objectType: "Agent",
          account: {
            homePage: "https://identity.noordhoff.nl",
            name: "328118ef-98bd-4bda-8f3b-9fdbd4ecd029",
          },
        },
        verb: {
          id: "https://adlnet.gov/expapi/verbs/initialized",
          display: {
            "nl-NL": null,
            "en-GB": null,
            "en-US": null,
            en: "initialized",
          },
        },
        result: null,
        context: {
          registration: "d449f113-8c15-4f1a-a513-caba954154fd",
          contextActivities: {
            parent: null,
            category: [
              {
                id: "https://w3id.org/xapi/cmi5/context/categories/cmi5",
                definition: null,
                objectType: "Activity",
              },
            ],
            grouping: [
              {
                id: "http://infinitaslearning.com/types/method/95e29a9b-c284-4849-a60c-6e87cdd82c00",
              },
              {
                id: "d1045e1a-f98f-4ceb-9b8e-3b0e273beb6e",
              },
              {
                id: "85b3ea71-a816-406f-9da7-e763f0683014",
              },
              {
                id: "8f3d56c7-d0f4-482a-a7eb-770ff0c82d62",
              },
              {
                id: "22d40a67-4a37-4702-a1db-5ca762835d29",
              },
            ],
          },
          extensions: {
            "https://w3id.org/xapi/cmi5/context/extensions/sessionid":
              "ri4bnOsqW1Os6ve4WK_BkQ",
            "http://xapi.infinitaslearning.com/contextactivities/evaluationlogic/":
              "ilplayer2",
            "http://xapi.infinitaslearning.com/contextactivities/specification/CMI5":
              "2016-06",
            "http://xapi.infinitaslearning.com/contextactivities/specification/ILxAPI":
              "2018-06",
          },
          language: "en-GB",
          platform: "SE-Platform",
        },
        object: {
          id: "https://icom.infinitas.nl/xapi/activities/contentitemidentifier/undefined",
          objectType: "Activity",
          definition: {
            type: "https://adlnet.gov/expapi/activities/lesson/module",
            extensions: null,
            name: {
              "nl-NL": null,
              "en-GB": "Text entry drilling 2.0 - with Slim Stampen",
              "en-US": null,
            },
          },
        },
        stored: "2021-09-16T15:39:38.6787282",
        authority: null,
        version: null,
        attachments: null,
      },
      {
        id: "cd556e5d-d335-4a87-94c8-9798d720d9cd",
        timestamp: "2021-09-16T15:28:24.138Z",
        actor: {
          name: "",
          mbox: null,
          objectType: "Agent",
          account: {
            homePage: "https://identity.noordhoff.nl",
            name: "328118ef-98bd-4bda-8f3b-9fdbd4ecd029",
          },
        },
        verb: {
          id: "https://adlnet.gov/expapi/verbs/initialized",
          display: {
            "nl-NL": null,
            "en-GB": null,
            "en-US": null,
            en: "initialized",
          },
        },
        result: null,
        context: {
          registration: "d449f113-8c15-4f1a-a513-caba954154fd",
          contextActivities: {
            parent: null,
            category: [
              {
                id: "https://w3id.org/xapi/cmi5/context/categories/cmi5",
                definition: null,
                objectType: "Activity",
              },
            ],
            grouping: [
              {
                id: "http://infinitaslearning.com/types/method/95e29a9b-c284-4849-a60c-6e87cdd82c00",
              },
              {
                id: "d1045e1a-f98f-4ceb-9b8e-3b0e273beb6e",
              },
              {
                id: "85b3ea71-a816-406f-9da7-e763f0683014",
              },
              {
                id: "8f3d56c7-d0f4-482a-a7eb-770ff0c82d62",
              },
              {
                id: "22d40a67-4a37-4702-a1db-5ca762835d29",
              },
            ],
          },
          extensions: {
            "https://w3id.org/xapi/cmi5/context/extensions/sessionid":
              "ri4bnOsqW1Os6ve4WK_BkQ",
            "http://xapi.infinitaslearning.com/contextactivities/evaluationlogic/":
              "ilplayer2",
            "http://xapi.infinitaslearning.com/contextactivities/specification/CMI5":
              "2016-06",
            "http://xapi.infinitaslearning.com/contextactivities/specification/ILxAPI":
              "2018-06",
          },
          language: "en-GB",
          platform: "SE-Platform",
        },
        object: {
          id: "https://icom.infinitas.nl/xapi/activities/contentitemidentifier/undefined",
          objectType: "Activity",
          definition: {
            type: "https://adlnet.gov/expapi/activities/lesson/module",
            extensions: null,
            name: {
              "nl-NL": null,
              "en-GB": "Text entry drilling 2.0 - with Slim Stampen",
              "en-US": null,
            },
          },
        },
        stored: "2021-09-16T15:29:21.0363659",
        authority: null,
        version: null,
        attachments: null,
      },
      {
        id: "f51d66dc-0e91-41e3-8a85-03d006dc09cc",
        timestamp: "2021-09-16T15:41:42.083Z",
        actor: {
          name: "",
          mbox: null,
          objectType: "Agent",
          account: {
            homePage: "https://identity.noordhoff.nl",
            name: "328118ef-98bd-4bda-8f3b-9fdbd4ecd029",
          },
        },
        verb: {
          id: "https://adlnet.gov/expapi/verbs/completed",
          display: {
            "nl-NL": null,
            "en-GB": null,
            "en-US": null,
            en: "completed",
          },
        },
        result: {
          completion: false,
          success: false,
          duration: "PT5S",
          response: null,
          player2State: {
            "c7e610d8-d738-48f9-96a4-de559a145d1e_id-ee53936d-db36-4131-f659-6a3068c844d6":
              {
                particleId:
                  "c7e610d8-d738-48f9-96a4-de559a145d1e_id-ee53936d-db36-4131-f659-6a3068c844d6",
                answerOptions: [
                  {
                    _id: "id-c41b3d01-cb8c-4dd2-864e-5e71d3305715",
                    _type: "p",
                    children: [
                      {
                        _type: "span",
                        marks: [],
                        text: "cadmium: ",
                      },
                      {
                        _id: "id-abdf828b-dca3-477f-ca64-1f751597507b",
                        _type: "answerContentInline",
                        predefinedAnswer: false,
                        children: [
                          {
                            _type: "span",
                            marks: [],
                            text: "Cd",
                          },
                        ],
                        correctResponseFeedback: [],
                        incorrectResponseFeedback: [],
                        alternativeAnswers: [],
                      },
                    ],
                  },
                ],
                _type: "textEntry",
                startingTime: 1631806896926,
                answer: {
                  "id-abdf828b-dca3-477f-ca64-1f751597507b": "sdf",
                },
                score: 0,
                class: "",
                evaluation: true,
                numberOfGaps: 1,
                isSubmitted: true,
                isSelfAssessment: false,
                maxScoreAllowed: 1,
                isReadyToBeSubmitted: true,
                duration: 3141,
                dataForAnalysis: {
                  keyStrokes: [
                    {
                      character: "s",
                      keyCode: 83,
                      timeDown: 9439.39999999851,
                      timeUp: 9653.300000000745,
                    },
                    {
                      character: "d",
                      keyCode: 68,
                      timeDown: 9559.300000000745,
                      timeUp: 9707.199999999255,
                    },
                    {
                      character: "f",
                      keyCode: 70,
                      timeDown: 9625.199999999255,
                      timeUp: 9768.300000000745,
                    },
                  ],
                  factId:
                    "c7e610d8-d738-48f9-96a4-de559a145d1e_id-ee53936d-db36-4131-f659-6a3068c844d6",
                  presentationDuration: 3141,
                  givenResponse: ["sdf"],
                  correct: false,
                  reactionTime: 9,
                  presentationStartTime: 1631806896925,
                  backSpaceUsed: false,
                  backSpacedFirstLetter: false,
                },
                isCorrect: {
                  "id-abdf828b-dca3-477f-ca64-1f751597507b": false,
                },
                rightAnswers: {
                  "id-abdf828b-dca3-477f-ca64-1f751597507b": "Cd",
                },
                accumulatedRetryPenalty: 0.3,
                submittingTime: 1631806900047,
                config: {},
                completed: true,
                shouldShowRightAnswerRetries: false,
              },
          },
          extensions: {
            "http://xapi.infinitaslearning.com/xapi/extensions/attempts": 0,
            "http://xapi.infinitaslearning.com/xapi/extensions/interactionType":
              null,
            "https://w3id.org/xapi/cmi5/result/extensions/progress": 0,
            "http://xapi.infinitaslearning.com/xapi/extensions/correctCount": 0,
            "http://xapi.infinitaslearning.com/xapi/extensions/incorrectCount": 1,
          },
          score: {
            scaled: 0,
            raw: 0,
            min: 0,
            max: 1,
          },
        },
        context: {
          registration: "d449f113-8c15-4f1a-a513-caba954154fd",
          contextActivities: {
            parent: null,
            category: [
              {
                id: "https://w3id.org/xapi/cmi5/context/categories/cmi5",
                definition: null,
                objectType: "Activity",
              },
            ],
            grouping: [
              {
                id: "http://infinitaslearning.com/types/method/95e29a9b-c284-4849-a60c-6e87cdd82c00",
              },
              {
                id: "d1045e1a-f98f-4ceb-9b8e-3b0e273beb6e",
              },
              {
                id: "85b3ea71-a816-406f-9da7-e763f0683014",
              },
              {
                id: "8f3d56c7-d0f4-482a-a7eb-770ff0c82d62",
              },
              {
                id: "22d40a67-4a37-4702-a1db-5ca762835d29",
              },
            ],
          },
          extensions: {
            "https://w3id.org/xapi/cmi5/context/extensions/sessionid":
              "ri4bnOsqW1Os6ve4WK_BkQ",
            "http://xapi.infinitaslearning.com/contextactivities/evaluationlogic/":
              "ilplayer2",
            "http://xapi.infinitaslearning.com/contextactivities/specification/CMI5":
              "2016-06",
            "http://xapi.infinitaslearning.com/contextactivities/specification/ILxAPI":
              "2018-06",
          },
          language: "en-GB",
          platform: "SE-Platform",
        },
        object: {
          id: "https://icom.infinitas.nl/xapi/activities/contentitemidentifier/undefined",
          objectType: "Activity",
          definition: {
            type: "https://adlnet.gov/expapi/activities/lesson/module",
            extensions: null,
            name: {
              "nl-NL": null,
              "en-GB": "Text entry drilling 2.0 - with Slim Stampen",
              "en-US": null,
            },
          },
        },
        stored: "2021-09-16T15:41:43.1866941",
        authority: null,
        version: null,
        attachments: null,
      },
    ],
  },
  breadcrumbs: [
    {
      __typename: "Breadcrumb",
      id: "d1045e1a-f98f-4ceb-9b8e-3b0e273beb6e",
      title: "Refset NU SE content Edify to new content model",
      type: "PACKAGE",
    },
    {
      __typename: "Breadcrumb",
      id: "85b3ea71-a816-406f-9da7-e763f0683014",
      title: "2- Math example Edify-CDP-PLP chain",
      type: "THEME",
    },
    {
      __typename: "Breadcrumb",
      id: "8f3d56c7-d0f4-482a-a7eb-770ff0c82d62",
      title: "extraMaterials",
      type: "EXTRAMATERIALS",
    },
    {
      __typename: "Breadcrumb",
      id: "22d40a67-4a37-4702-a1db-5ca762835d29",
      title: "Text entry drilling 2.0 - with Slim Stampen",
      type: "DRILLING",
    },
  ],
  id: "22d40a67-4a37-4702-a1db-5ca762835d29",
  title: "Text entry drilling 2.0 - with Slim Stampen",
  type: "DRILLING",
  subType: null,
  contentSets: [
    {
      __typename: "ContentSet",
      id: "0f9ab505-10d3-4b25-88b1-800b78190a7d",
      title: "",
      type: "CONTENTSET",
      content: [
        {
          __typename: "Content",
          id: "0f9ab505-10d3-4b25-88b1-800b78190a7d_id-ee53936d-db36-4131-f659-6a3068c844d6",
          playerPayload: {
            id: "0f9ab505-10d3-4b25-88b1-800b78190a7d_id-ee53936d-db36-4131-f659-6a3068c844d6",
            portableTextContent: {
              _id: "id-ee53936d-db36-4131-f659-6a3068c844d6",
              _type: "textEntry",
              predefinedAnswer: false,
              flashCard: false,
              intro: {},
              instruction: {},
              instructionFolio: {},
              question: [
                {
                  _id: "id-9ded76fc-c104-4dc1-a6b0-43a2e62cdaaf",
                  _type: "p",
                  children: [
                    {
                      _type: "span",
                      marks: [],
                      text: "Vul de naam in van dit element.",
                    },
                  ],
                },
              ],
              explanation: [],
              answer: [
                {
                  _id: "id-cbf50ddf-6585-4dbb-a886-a88200191f63",
                  _type: "p",
                  children: [
                    {
                      _type: "span",
                      marks: [],
                      text: "aluminium:",
                    },
                    {
                      _id: "id-b28c879b-2cc8-4957-df4d-5e48929e95ae",
                      _type: "answerContentInline",
                      predefinedAnswer: false,
                      children: [
                        {
                          _type: "span",
                          marks: [],
                          text: "Al",
                        },
                      ],
                      correctResponseFeedback: [],
                      incorrectResponseFeedback: [],
                      alternativeAnswers: [],
                    },
                  ],
                },
              ],
              correctResponseFeedback: {},
              incorrectResponseFeedback: {},
              score: 1,
            },
            metadata: {
              deliveryTarget: "",
              packageSiteName: "noordhoff-test-site",
              packageClass: "package",
              businessUnit: "Noordhoff",
              discipline: "Engels",
              edition: ["2"],
              grade: ["VO"],
              method: "Componentenboek [method]",
              schoolType: ["havo"],
              targetAudienceLanguage: "nl-NL",
              targetYear: ["1"],
              vocabularyForeignLanguage: "",
              vocabularyLocalLanguage: "",
              endUser: ["learner"],
              isSelfAssessment: false,
              strictSpelling: false,
              evaluation: true,
              assets: [],
            },
          },
        },
      ],
    },
    {
      __typename: "ContentSet",
      id: "14f1d1b5-664c-4d78-ad3d-e39f245d160d",
      title: "",
      type: "CONTENTSET",
      content: [
        {
          __typename: "Content",
          id: "14f1d1b5-664c-4d78-ad3d-e39f245d160d_id-ee53936d-db36-4131-f659-6a3068c844d6",
          playerPayload: {
            id: "14f1d1b5-664c-4d78-ad3d-e39f245d160d_id-ee53936d-db36-4131-f659-6a3068c844d6",
            portableTextContent: {
              _id: "id-ee53936d-db36-4131-f659-6a3068c844d6",
              _type: "textEntry",
              predefinedAnswer: false,
              flashCard: false,
              intro: {},
              instruction: {},
              instructionFolio: {},
              question: [
                {
                  _id: "id-89c016aa-061e-419b-8e5c-4d1df11a9e58",
                  _type: "p",
                  children: [
                    {
                      _type: "span",
                      marks: [],
                      text: "Vul de naam in van dit element.",
                    },
                  ],
                },
              ],
              explanation: [],
              answer: [
                {
                  _id: "id-a2b15890-e54b-4120-988d-1872aa201a4c",
                  _type: "p",
                  children: [
                    {
                      _type: "span",
                      marks: [],
                      text: "argon: ",
                    },
                    {
                      _id: "id-a245e97b-1b64-4393-8203-fe391ce67941",
                      _type: "answerContentInline",
                      predefinedAnswer: false,
                      children: [
                        {
                          _type: "span",
                          marks: [],
                          text: "Ar",
                        },
                      ],
                      correctResponseFeedback: [],
                      incorrectResponseFeedback: [],
                      alternativeAnswers: [],
                    },
                  ],
                },
              ],
              correctResponseFeedback: {},
              incorrectResponseFeedback: {},
              score: 1,
            },
            metadata: {
              deliveryTarget: "",
              packageSiteName: "noordhoff-test-site",
              packageClass: "package",
              businessUnit: "Noordhoff",
              discipline: "Engels",
              edition: ["2"],
              grade: ["VO"],
              method: "Componentenboek [method]",
              schoolType: ["havo"],
              targetAudienceLanguage: "nl-NL",
              targetYear: ["1"],
              vocabularyForeignLanguage: "",
              vocabularyLocalLanguage: "",
              endUser: ["learner"],
              isSelfAssessment: false,
              strictSpelling: false,
              evaluation: true,
              assets: [],
            },
          },
        },
      ],
    },
    {
      __typename: "ContentSet",
      id: "dc790d9d-632e-4261-ae7b-802acf63aee5",
      title: "",
      type: "CONTENTSET",
      content: [
        {
          __typename: "Content",
          id: "dc790d9d-632e-4261-ae7b-802acf63aee5_id-ee53936d-db36-4131-f659-6a3068c844d6",
          playerPayload: {
            id: "dc790d9d-632e-4261-ae7b-802acf63aee5_id-ee53936d-db36-4131-f659-6a3068c844d6",
            portableTextContent: {
              _id: "id-ee53936d-db36-4131-f659-6a3068c844d6",
              _type: "textEntry",
              predefinedAnswer: false,
              flashCard: false,
              intro: {},
              instruction: {},
              instructionFolio: {},
              question: [
                {
                  _id: "id-9f900e9a-dd84-4ed7-ef74-39615ec52fbf",
                  _type: "p",
                  children: [
                    {
                      _type: "span",
                      marks: [],
                      text: "Vul de naam in van dit element.",
                    },
                  ],
                },
              ],
              explanation: [],
              answer: [
                {
                  _id: "id-95890438-134b-4d2a-bb27-b49713ecdcfb",
                  _type: "p",
                  children: [
                    {
                      _type: "span",
                      marks: [],
                      text: "arseen: ",
                    },
                    {
                      _id: "id-ec11ea09-fe5d-4d59-c8fd-932a198882f4",
                      _type: "answerContentInline",
                      predefinedAnswer: false,
                      children: [
                        {
                          _type: "span",
                          marks: [],
                          text: "As",
                        },
                      ],
                      correctResponseFeedback: [],
                      incorrectResponseFeedback: [],
                      alternativeAnswers: [],
                    },
                  ],
                },
              ],
              correctResponseFeedback: {},
              incorrectResponseFeedback: {},
              score: 1,
            },
            metadata: {
              deliveryTarget: "",
              packageSiteName: "noordhoff-test-site",
              packageClass: "package",
              businessUnit: "Noordhoff",
              discipline: "Engels",
              edition: ["2"],
              grade: ["VO"],
              method: "Componentenboek [method]",
              schoolType: ["havo"],
              targetAudienceLanguage: "nl-NL",
              targetYear: ["1"],
              vocabularyForeignLanguage: "",
              vocabularyLocalLanguage: "",
              endUser: ["learner"],
              isSelfAssessment: false,
              strictSpelling: false,
              evaluation: true,
              assets: [],
            },
          },
        },
      ],
    },
    {
      __typename: "ContentSet",
      id: "47fc04b2-a568-42da-8b51-8a19ff968806",
      title: "",
      type: "CONTENTSET",
      content: [
        {
          __typename: "Content",
          id: "47fc04b2-a568-42da-8b51-8a19ff968806_id-ee53936d-db36-4131-f659-6a3068c844d6",
          playerPayload: {
            id: "47fc04b2-a568-42da-8b51-8a19ff968806_id-ee53936d-db36-4131-f659-6a3068c844d6",
            portableTextContent: {
              _id: "id-ee53936d-db36-4131-f659-6a3068c844d6",
              _type: "textEntry",
              predefinedAnswer: false,
              flashCard: false,
              intro: {},
              instruction: {},
              instructionFolio: {},
              question: [
                {
                  _id: "id-cb2af016-7ae1-42f8-b366-52cf70a3e528",
                  _type: "p",
                  children: [
                    {
                      _type: "span",
                      marks: [],
                      text: "Vul de naam in van dit element.",
                    },
                  ],
                },
              ],
              explanation: [],
              answer: [
                {
                  _id: "id-226e690f-ed7c-4814-a243-de527d6abb57",
                  _type: "p",
                  children: [
                    {
                      _type: "span",
                      marks: [],
                      text: "barium: ",
                    },
                    {
                      _id: "id-28500298-9879-44f0-f99e-ef9ea42144ef",
                      _type: "answerContentInline",
                      predefinedAnswer: false,
                      children: [
                        {
                          _type: "span",
                          marks: [],
                          text: "Ba",
                        },
                      ],
                      correctResponseFeedback: [],
                      incorrectResponseFeedback: [],
                      alternativeAnswers: [],
                    },
                  ],
                },
              ],
              correctResponseFeedback: {},
              incorrectResponseFeedback: {},
              score: 1,
            },
            metadata: {
              deliveryTarget: "",
              packageSiteName: "noordhoff-test-site",
              packageClass: "package",
              businessUnit: "Noordhoff",
              discipline: "Engels",
              edition: ["2"],
              grade: ["VO"],
              method: "Componentenboek [method]",
              schoolType: ["havo"],
              targetAudienceLanguage: "nl-NL",
              targetYear: ["1"],
              vocabularyForeignLanguage: "",
              vocabularyLocalLanguage: "",
              endUser: ["learner"],
              isSelfAssessment: false,
              strictSpelling: false,
              evaluation: true,
              assets: [],
            },
          },
        },
      ],
    },
    {
      __typename: "ContentSet",
      id: "6d031172-c9d8-49cb-a110-2d7fa831471b",
      title: "",
      type: "CONTENTSET",
      content: [
        {
          __typename: "Content",
          id: "6d031172-c9d8-49cb-a110-2d7fa831471b_id-ee53936d-db36-4131-f659-6a3068c844d6",
          playerPayload: {
            id: "6d031172-c9d8-49cb-a110-2d7fa831471b_id-ee53936d-db36-4131-f659-6a3068c844d6",
            portableTextContent: {
              _id: "id-ee53936d-db36-4131-f659-6a3068c844d6",
              _type: "textEntry",
              predefinedAnswer: false,
              flashCard: false,
              intro: {},
              instruction: {},
              instructionFolio: {},
              question: [
                {
                  _id: "id-7e0c5eeb-c47c-4ea7-d960-4556d543a7b8",
                  _type: "p",
                  children: [
                    {
                      _type: "span",
                      marks: [],
                      text: "Vul de naam in van dit element.",
                    },
                  ],
                },
              ],
              explanation: [],
              answer: [
                {
                  _id: "id-3e9ecf66-4f9b-4c84-8beb-05e64d685f12",
                  _type: "p",
                  children: [
                    {
                      _type: "span",
                      marks: [],
                      text: "beryllium: ",
                    },
                    {
                      _id: "id-d10e1936-d51b-4e74-cc17-70b0cf0b4812",
                      _type: "answerContentInline",
                      predefinedAnswer: false,
                      children: [
                        {
                          _type: "span",
                          marks: [],
                          text: "Be",
                        },
                      ],
                      correctResponseFeedback: [],
                      incorrectResponseFeedback: [],
                      alternativeAnswers: [],
                    },
                  ],
                },
              ],
              correctResponseFeedback: {},
              incorrectResponseFeedback: {},
              score: 1,
            },
            metadata: {
              deliveryTarget: "",
              packageSiteName: "noordhoff-test-site",
              packageClass: "package",
              businessUnit: "Noordhoff",
              discipline: "Engels",
              edition: ["2"],
              grade: ["VO"],
              method: "Componentenboek [method]",
              schoolType: ["havo"],
              targetAudienceLanguage: "nl-NL",
              targetYear: ["1"],
              vocabularyForeignLanguage: "",
              vocabularyLocalLanguage: "",
              endUser: ["learner"],
              isSelfAssessment: false,
              strictSpelling: false,
              evaluation: true,
              assets: [],
            },
          },
        },
      ],
    },
    {
      __typename: "ContentSet",
      id: "89e8e3ef-8d49-4fbf-85df-1cd4916a0eea",
      title: "",
      type: "CONTENTSET",
      content: [
        {
          __typename: "Content",
          id: "89e8e3ef-8d49-4fbf-85df-1cd4916a0eea_id-ee53936d-db36-4131-f659-6a3068c844d6",
          playerPayload: {
            id: "89e8e3ef-8d49-4fbf-85df-1cd4916a0eea_id-ee53936d-db36-4131-f659-6a3068c844d6",
            portableTextContent: {
              _id: "id-ee53936d-db36-4131-f659-6a3068c844d6",
              _type: "textEntry",
              predefinedAnswer: false,
              flashCard: false,
              intro: {},
              instruction: {},
              instructionFolio: {},
              question: [
                {
                  _id: "id-415e414c-db46-45e9-c640-ba6256fbc8cf",
                  _type: "p",
                  children: [
                    {
                      _type: "span",
                      marks: [],
                      text: "Vul de naam in van dit element.",
                    },
                  ],
                },
              ],
              explanation: [],
              answer: [
                {
                  _id: "id-f7d67ec3-52a2-4a0f-cbab-6e4f723490bf",
                  _type: "p",
                  children: [
                    {
                      _type: "span",
                      marks: [],
                      text: "boor: ",
                    },
                    {
                      _id: "id-a04ac3d5-c3dc-4b80-d674-a339bd5c06bb",
                      _type: "answerContentInline",
                      predefinedAnswer: false,
                      children: [
                        {
                          _type: "span",
                          marks: [],
                          text: "B",
                        },
                      ],
                      correctResponseFeedback: [],
                      incorrectResponseFeedback: [],
                      alternativeAnswers: [],
                    },
                  ],
                },
              ],
              correctResponseFeedback: {},
              incorrectResponseFeedback: {},
              score: 1,
            },
            metadata: {
              deliveryTarget: "",
              packageSiteName: "noordhoff-test-site",
              packageClass: "package",
              businessUnit: "Noordhoff",
              discipline: "Engels",
              edition: ["2"],
              grade: ["VO"],
              method: "Componentenboek [method]",
              schoolType: ["havo"],
              targetAudienceLanguage: "nl-NL",
              targetYear: ["1"],
              vocabularyForeignLanguage: "",
              vocabularyLocalLanguage: "",
              endUser: ["learner"],
              isSelfAssessment: false,
              strictSpelling: false,
              evaluation: true,
              assets: [],
            },
          },
        },
      ],
    },
    {
      __typename: "ContentSet",
      id: "37f0a42f-b869-4fc2-8ea6-17a83d61bbb5",
      title: "",
      type: "CONTENTSET",
      content: [
        {
          __typename: "Content",
          id: "37f0a42f-b869-4fc2-8ea6-17a83d61bbb5_id-ee53936d-db36-4131-f659-6a3068c844d6",
          playerPayload: {
            id: "37f0a42f-b869-4fc2-8ea6-17a83d61bbb5_id-ee53936d-db36-4131-f659-6a3068c844d6",
            portableTextContent: {
              _id: "id-ee53936d-db36-4131-f659-6a3068c844d6",
              _type: "textEntry",
              predefinedAnswer: false,
              flashCard: false,
              intro: {},
              instruction: {},
              instructionFolio: {},
              question: [
                {
                  _id: "id-f13922ab-f101-4dc3-e2c9-7e7df6814c1e",
                  _type: "p",
                  children: [
                    {
                      _type: "span",
                      marks: [],
                      text: "Vul de naam in van dit element.",
                    },
                  ],
                },
              ],
              explanation: [],
              answer: [
                {
                  _id: "id-60b2a539-74e6-4c2e-c1d4-89eeab1d872d",
                  _type: "p",
                  children: [
                    {
                      _type: "span",
                      marks: [],
                      text: "broom:",
                    },
                    {
                      _id: "id-9403bfd3-0030-4f4b-ac2c-c104e076da06",
                      _type: "answerContentInline",
                      predefinedAnswer: false,
                      children: [
                        {
                          _type: "span",
                          marks: [],
                          text: "Br",
                        },
                      ],
                      correctResponseFeedback: [],
                      incorrectResponseFeedback: [],
                      alternativeAnswers: [],
                    },
                  ],
                },
              ],
              correctResponseFeedback: {},
              incorrectResponseFeedback: {},
              score: 1,
            },
            metadata: {
              deliveryTarget: "",
              packageSiteName: "noordhoff-test-site",
              packageClass: "package",
              businessUnit: "Noordhoff",
              discipline: "Engels",
              edition: ["2"],
              grade: ["VO"],
              method: "Componentenboek [method]",
              schoolType: ["havo"],
              targetAudienceLanguage: "nl-NL",
              targetYear: ["1"],
              vocabularyForeignLanguage: "",
              vocabularyLocalLanguage: "",
              endUser: ["learner"],
              isSelfAssessment: false,
              strictSpelling: false,
              evaluation: true,
              assets: [],
            },
          },
        },
      ],
    },
    {
      __typename: "ContentSet",
      id: "d28de9df-fa95-4de8-9309-7f5c70275207",
      title: "",
      type: "CONTENTSET",
      content: [
        {
          __typename: "Content",
          id: "d28de9df-fa95-4de8-9309-7f5c70275207_id-ee53936d-db36-4131-f659-6a3068c844d6",
          playerPayload: {
            id: "d28de9df-fa95-4de8-9309-7f5c70275207_id-ee53936d-db36-4131-f659-6a3068c844d6",
            portableTextContent: {
              _id: "id-ee53936d-db36-4131-f659-6a3068c844d6",
              _type: "textEntry",
              predefinedAnswer: false,
              flashCard: false,
              intro: {},
              instruction: {},
              instructionFolio: {},
              question: [
                {
                  _id: "id-cf0c084b-cae7-456d-c314-cf4c6ffb3b70",
                  _type: "p",
                  children: [
                    {
                      _type: "span",
                      marks: [],
                      text: "Vul de naam in van dit element.",
                    },
                  ],
                },
              ],
              explanation: [],
              answer: [
                {
                  _id: "id-9eb3f245-ced4-49ac-ee3a-8642ab38db4d",
                  _type: "p",
                  children: [
                    {
                      _type: "span",
                      marks: [],
                      text: "calcium: ",
                    },
                    {
                      _id: "id-80b76347-6446-4a16-9b62-411cd5261f45",
                      _type: "answerContentInline",
                      predefinedAnswer: false,
                      children: [
                        {
                          _type: "span",
                          marks: [],
                          text: "Ca",
                        },
                      ],
                      correctResponseFeedback: [],
                      incorrectResponseFeedback: [],
                      alternativeAnswers: [],
                    },
                  ],
                },
              ],
              correctResponseFeedback: {},
              incorrectResponseFeedback: {},
              score: 1,
            },
            metadata: {
              deliveryTarget: "",
              packageSiteName: "noordhoff-test-site",
              packageClass: "package",
              businessUnit: "Noordhoff",
              discipline: "Engels",
              edition: ["2"],
              grade: ["VO"],
              method: "Componentenboek [method]",
              schoolType: ["havo"],
              targetAudienceLanguage: "nl-NL",
              targetYear: ["1"],
              vocabularyForeignLanguage: "",
              vocabularyLocalLanguage: "",
              endUser: ["learner"],
              isSelfAssessment: false,
              strictSpelling: false,
              evaluation: true,
              assets: [],
            },
          },
        },
      ],
    },
    {
      __typename: "ContentSet",
      id: "c7e610d8-d738-48f9-96a4-de559a145d1e",
      title: "",
      type: "CONTENTSET",
      content: [
        {
          __typename: "Content",
          id: "c7e610d8-d738-48f9-96a4-de559a145d1e_id-ee53936d-db36-4131-f659-6a3068c844d6",
          playerPayload: {
            id: "c7e610d8-d738-48f9-96a4-de559a145d1e_id-ee53936d-db36-4131-f659-6a3068c844d6",
            portableTextContent: {
              _id: "id-ee53936d-db36-4131-f659-6a3068c844d6",
              _type: "textEntry",
              predefinedAnswer: false,
              flashCard: false,
              intro: {},
              instruction: {},
              instructionFolio: {},
              question: [
                {
                  _id: "id-0609244a-62d5-4f93-f9a7-f626c12f9961",
                  _type: "p",
                  children: [
                    {
                      _type: "span",
                      marks: [],
                      text: "Vul de naam in van dit element.",
                    },
                  ],
                },
              ],
              explanation: [],
              answer: [
                {
                  _id: "id-c41b3d01-cb8c-4dd2-864e-5e71d3305715",
                  _type: "p",
                  children: [
                    {
                      _type: "span",
                      marks: [],
                      text: "cadmium: ",
                    },
                    {
                      _id: "id-abdf828b-dca3-477f-ca64-1f751597507b",
                      _type: "answerContentInline",
                      predefinedAnswer: false,
                      children: [
                        {
                          _type: "span",
                          marks: [],
                          text: "Cd",
                        },
                      ],
                      correctResponseFeedback: [],
                      incorrectResponseFeedback: [],
                      alternativeAnswers: [],
                    },
                  ],
                },
              ],
              correctResponseFeedback: {},
              incorrectResponseFeedback: {},
              score: 1,
            },
            metadata: {
              deliveryTarget: "",
              packageSiteName: "noordhoff-test-site",
              packageClass: "package",
              businessUnit: "Noordhoff",
              discipline: "Engels",
              edition: ["2"],
              grade: ["VO"],
              method: "Componentenboek [method]",
              schoolType: ["havo"],
              targetAudienceLanguage: "nl-NL",
              targetYear: ["1"],
              vocabularyForeignLanguage: "",
              vocabularyLocalLanguage: "",
              endUser: ["learner"],
              isSelfAssessment: false,
              strictSpelling: false,
              evaluation: true,
              assets: [],
            },
          },
        },
      ],
    },
  ],
  metadata: {
    __typename: "Metadata",
    slimStampen: true,
  },
};
