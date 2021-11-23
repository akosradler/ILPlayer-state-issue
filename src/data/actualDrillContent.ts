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
      id: "82fa5827-435c-48fa-b112-6e199568b029",
      title: "Remplis",
      type: "INSTRUCTION",
      content: [
        {
          id: "82fa5827-435c-48fa-b112-6e199568b029_id-0c734bbc-ff50-45e7-c312-e0a596ef1ca7",
          playerPayload: {
            id: "82fa5827-435c-48fa-b112-6e199568b029_id-0c734bbc-ff50-45e7-c312-e0a596ef1ca7",
            portableTextContent: {
              _id: "id-0c734bbc-ff50-45e7-c312-e0a596ef1ca7",
              _type: "p",
              children: [
                {
                  _type: "span",
                  marks: [],
                  text: "Bij elke nieuwe vraag krijg je eerst het juiste antwoord te zien.",
                },
              ],
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
              evaluation: true,
              assets: [],
            },
          },
          class: {
            local: "",
            __typename: "ContentClass",
          },
          __typename: "Content",
        },
        {
          id: "82fa5827-435c-48fa-b112-6e199568b029_id-c85f8a80-230a-4941-dae4-712e84ac7a36",
          playerPayload: {
            id: "82fa5827-435c-48fa-b112-6e199568b029_id-c85f8a80-230a-4941-dae4-712e84ac7a36",
            portableTextContent: {
              _id: "id-c85f8a80-230a-4941-dae4-712e84ac7a36",
              _type: "p",
              children: [
                {
                  _type: "span",
                  marks: [],
                  text: "Klik op het antwoord of typ het over. De volgende keer dat je de vraag krijgt, moet je zelf het juiste antwoord geven.",
                },
              ],
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
              evaluation: true,
              assets: [],
            },
          },
          class: {
            local: "",
            __typename: "ContentClass",
          },
          __typename: "Content",
        },
        {
          id: "82fa5827-435c-48fa-b112-6e199568b029_id-78a43d92-317a-40c5-9234-428126d351d1",
          playerPayload: {
            id: "82fa5827-435c-48fa-b112-6e199568b029_id-78a43d92-317a-40c5-9234-428126d351d1",
            portableTextContent: {
              _id: "id-78a43d92-317a-40c5-9234-428126d351d1",
              _type: "p",
              children: [
                {
                  _type: "span",
                  marks: [],
                  text: "Elke vraag moet je twee keer goed beantwoorden.",
                },
              ],
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
              evaluation: true,
              assets: [],
            },
          },
          class: {
            local: "",
            __typename: "ContentClass",
          },
          __typename: "Content",
        },
      ],
      __typename: "ContentSet",
    },
    {
      id: "e4b96257-d7a2-49cf-86d6-c6ee00588ad1",
      title: "",
      type: "CONTENTSET",
      content: [
        {
          id: "e4b96257-d7a2-49cf-86d6-c6ee00588ad1_id-15bf8da7-6d21-4b18-cb95-323a99fe73fc",
          playerPayload: {
            id: "e4b96257-d7a2-49cf-86d6-c6ee00588ad1_id-15bf8da7-6d21-4b18-cb95-323a99fe73fc",
            portableTextContent: {
              _id: "id-15bf8da7-6d21-4b18-cb95-323a99fe73fc",
              _type: "textEntry",
              predefinedAnswer: false,
              flashCard: false,
              intro: {},
              instruction: {},
              instructionFolio: {},
              question: [
                {
                  _id: "id-227ebcdd-d589-4378-c407-7fcb31c7f09f",
                  _type: "p",
                  children: [
                    {
                      _type: "span",
                      marks: [],
                      text: "Type de juiste vertaling in van",
                    },
                  ],
                },
              ],
              explanation: [],
              answer: [
                {
                  _type: "audio",
                  _id: "id-7e0244c0-1a8f-49ec-8b29-e13b8d07955e",
                  content: {
                    _id: "id-b8fd1097-9340-4a0b-ab79-b1f3b10693c7",
                    _type: "audioInline",
                    xtrf: "elasticsearch$edify-casper.prd-noordhoff.cd756ec8-8788-47f2-ae63-de20eaac392b",
                    data: "https://numsprd-euwe.streaming.media.azure.net/65ea8327-4dce-46c4-a584-06aae6011c84/58b6aa98-0e50-43d6-a819-c8e770e1.ism/manifest",
                  },
                },
                {
                  _type: "image",
                  _id: "id-022595a4-9ed3-484c-b9e5-1ac2d5966e94",
                  content: {
                    _id: "id-e1b62d6d-a06f-4961-9082-6c56f8abc9a1",
                    _type: "imageInline",
                    alt: "",
                    href: "https://damapi-assets.edify.noordhoff.nl/image-output/edify-casper.prd-noordhoff.e0e1882b-9515-453b-9c65-e3ae16f2144d/fontopreview.jpeg?lastmodified=1631718307952",
                    xtrf: "elasticsearch$edify-casper.prd-noordhoff.e0e1882b-9515-453b-9c65-e3ae16f2144d",
                  },
                },
                {
                  _id: "id-e49fcd90-021a-4288-c68e-4eec05f29985",
                  _type: "p",
                  children: [
                    {
                      _type: "span",
                      marks: [],
                      text: "natuurlijk ",
                    },
                    {
                      _id: "id-7094804e-e159-48f6-ce07-9fa9ee503f82",
                      _type: "answerContentInline",
                      predefinedAnswer: false,
                      children: [
                        {
                          _type: "span",
                          marks: [],
                          text: "bien sûr",
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
              ignorePunctions: false,
              caseSensitive: false,
              evaluation: true,
              assets: [],
            },
          },
          class: {
            local: "",
            __typename: "ContentClass",
          },
          __typename: "Content",
        },
      ],
      __typename: "ContentSet",
    },
    {
      id: "424057e0-c096-4861-ae16-4d976d61031c",
      title: "",
      type: "CONTENTSET",
      content: [
        {
          id: "424057e0-c096-4861-ae16-4d976d61031c_id-15bf8da7-6d21-4b18-cb95-323a99fe73fc",
          playerPayload: {
            id: "424057e0-c096-4861-ae16-4d976d61031c_id-15bf8da7-6d21-4b18-cb95-323a99fe73fc",
            portableTextContent: {
              _id: "id-15bf8da7-6d21-4b18-cb95-323a99fe73fc",
              _type: "textEntry",
              predefinedAnswer: false,
              flashCard: false,
              intro: {},
              instruction: {},
              instructionFolio: {},
              question: [
                {
                  _id: "id-3a010912-ced9-4df2-f80b-d9a10b9627f7",
                  _type: "p",
                  children: [
                    {
                      _type: "span",
                      marks: [],
                      text: "Type de juiste vertaling in van",
                    },
                  ],
                },
              ],
              explanation: [],
              answer: [
                {
                  _type: "audio",
                  _id: "id-196035f6-aa8f-4706-f357-1061dbed442d",
                  content: {
                    _id: "id-7e3f347b-ecd2-479d-e24a-9dc35790fe94",
                    _type: "audioInline",
                    xtrf: "elasticsearch$edify-casper.prd-noordhoff.6741798d-e0e8-4f57-b5ae-61c11955a31b",
                    data: "https://numsprd-euwe.streaming.media.azure.net/7bc79f57-a751-46b7-ab7b-4064087480f7/e7e1d0ca-df2d-497e-a78c-093dddb0.ism/manifest",
                  },
                },
                {
                  _type: "image",
                  _id: "id-cf91ba7d-632a-4bad-9871-b6fc6d2127df",
                  content: {
                    _id: "id-a3a7004a-80ef-4793-ea5d-acfd374b2ebb",
                    _type: "imageInline",
                    alt: "",
                    href: "https://damapi-assets.edify.noordhoff.nl/image-output/edify-casper.prd-noordhoff.1ae0e65b-8c7d-49e3-baa8-83645bad76f3/fontopreview.jpeg?lastmodified=1631717996523",
                    xtrf: "elasticsearch$edify-casper.prd-noordhoff.1ae0e65b-8c7d-49e3-baa8-83645bad76f3",
                  },
                },
                {
                  _id: "id-5d56f67a-5312-4f7d-94af-778a2527470b",
                  _type: "p",
                  children: [
                    {
                      _type: "span",
                      marks: [],
                      text: "zoeken ",
                    },
                    {
                      _id: "id-7094804e-e159-48f6-ce07-9fa9ee503f82",
                      _type: "answerContentInline",
                      predefinedAnswer: false,
                      children: [
                        {
                          _type: "span",
                          marks: [],
                          text: "chercher",
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
              evaluation: true,
              assets: [],
            },
          },
          class: {
            local: "",
            __typename: "ContentClass",
          },
          __typename: "Content",
        },
      ],
      __typename: "ContentSet",
    },
    {
      id: "da1bf86d-7102-43a6-a71a-0a9466172040",
      title: "",
      type: "CONTENTSET",
      content: [
        {
          id: "da1bf86d-7102-43a6-a71a-0a9466172040_id-15bf8da7-6d21-4b18-cb95-323a99fe73fc",
          playerPayload: {
            id: "da1bf86d-7102-43a6-a71a-0a9466172040_id-15bf8da7-6d21-4b18-cb95-323a99fe73fc",
            portableTextContent: {
              _id: "id-15bf8da7-6d21-4b18-cb95-323a99fe73fc",
              _type: "textEntry",
              predefinedAnswer: false,
              flashCard: false,
              intro: {},
              instruction: {},
              instructionFolio: {},
              question: [
                {
                  _id: "id-83cbced4-8bbb-4b0d-d0ae-76b979623b4b",
                  _type: "p",
                  children: [
                    {
                      _type: "span",
                      marks: [],
                      text: "Type de juiste vertaling in van",
                    },
                  ],
                },
              ],
              explanation: [],
              answer: [
                {
                  _type: "audio",
                  _id: "id-ee26a73b-13b1-4f62-d39f-da1c86b50de6",
                  content: {
                    _id: "id-801e142a-ad69-4a5e-d52a-72aaf185c57b",
                    _type: "audioInline",
                    xtrf: "elasticsearch$edify-casper.prd-noordhoff.f496172e-eb67-48b6-942e-464b4a7d3567",
                    data: "https://numsprd-euwe.streaming.media.azure.net/2eab1bf4-245c-4927-a903-f40f7ebfa064/2ddbc0f4-fa96-4b57-8d55-070d8e38.ism/manifest",
                  },
                },
                {
                  _type: "image",
                  _id: "id-725d3d4f-a770-4a0c-fd2b-8a56bf821b2d",
                  content: {
                    _id: "id-b90c5ae5-87c1-4d88-fe44-ee8b6a8ef423",
                    _type: "imageInline",
                    alt: "",
                    href: "https://damapi-assets.edify.noordhoff.nl/image-output/edify-casper.prd-noordhoff.365013f6-eedb-4a4d-ba09-1e361884f0a8/fontopreview.jpeg?lastmodified=1631718073986",
                    xtrf: "elasticsearch$edify-casper.prd-noordhoff.365013f6-eedb-4a4d-ba09-1e361884f0a8",
                  },
                },
                {
                  _id: "id-405f0801-8fc5-4344-b1e9-d5045b8084fd",
                  _type: "p",
                  children: [
                    {
                      _type: "span",
                      marks: [],
                      text: "de bed and breakfast ",
                    },
                    {
                      _id: "id-7094804e-e159-48f6-ce07-9fa9ee503f82",
                      _type: "answerContentInline",
                      predefinedAnswer: false,
                      children: [
                        {
                          _type: "span",
                          marks: [],
                          text: "la chambre d'hôte",
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
              ignorePunctions: false,
              caseSensitive: false,
              evaluation: true,
              assets: [],
            },
          },
          class: {
            local: "",
            __typename: "ContentClass",
          },
          __typename: "Content",
        },
      ],
      __typename: "ContentSet",
    },
    {
      id: "67a9aa4a-ea51-48e7-98f0-ceaf27fa2bc4",
      title: "",
      type: "CONTENTSET",
      content: [
        {
          id: "67a9aa4a-ea51-48e7-98f0-ceaf27fa2bc4_id-15bf8da7-6d21-4b18-cb95-323a99fe73fc",
          playerPayload: {
            id: "67a9aa4a-ea51-48e7-98f0-ceaf27fa2bc4_id-15bf8da7-6d21-4b18-cb95-323a99fe73fc",
            portableTextContent: {
              _id: "id-15bf8da7-6d21-4b18-cb95-323a99fe73fc",
              _type: "textEntry",
              predefinedAnswer: false,
              flashCard: false,
              intro: {},
              instruction: {},
              instructionFolio: {},
              question: [
                {
                  _id: "id-23368c92-ec26-4cc9-f28a-d3b857188e3a",
                  _type: "p",
                  children: [
                    {
                      _type: "span",
                      marks: [],
                      text: "Type de juiste vertaling in van",
                    },
                  ],
                },
              ],
              explanation: [],
              answer: [
                {
                  _type: "audio",
                  _id: "id-5fb1681b-a968-4d62-d022-83ddd7aaf58e",
                  content: {
                    _id: "id-667e1e2a-6016-464f-bb57-418af235c06c",
                    _type: "audioInline",
                    xtrf: "elasticsearch$edify-casper.prd-noordhoff.3a6b8ffb-aee3-4dff-8155-d9362ab95a74",
                    data: "https://numsprd-euwe.streaming.media.azure.net/01fbd2c8-acc1-460a-9230-be2dce008d31/908c2192-75d8-49a1-9c1a-761b5c84.ism/manifest",
                  },
                },
                {
                  _type: "image",
                  _id: "id-17e91bdd-63ca-44eb-9f18-d4623dfd4ad9",
                  content: {
                    _id: "id-6e98187f-b2b4-44cd-8fa5-64ff23274d94",
                    _type: "imageInline",
                    alt: "",
                    href: "https://damapi-assets.edify.noordhoff.nl/image-output/edify-casper.prd-noordhoff.1cf71ede-cd96-4393-ae58-c3181c2c8d64/fontopreview.jpeg?lastmodified=1631782927788",
                    xtrf: "elasticsearch$edify-casper.prd-noordhoff.1cf71ede-cd96-4393-ae58-c3181c2c8d64",
                  },
                },
                {
                  _id: "id-af7f7410-696b-4d04-84bb-3dc5fb861c75",
                  _type: "p",
                  children: [],
                },
                {
                  _id: "id-35111357-3058-432a-98eb-28d568e947e4",
                  _type: "p",
                  children: [
                    {
                      _type: "span",
                      marks: [],
                      text: "een ",
                    },
                    {
                      _type: "span",
                      marks: ["bold"],
                      text: "hekel hebben",
                    },
                    {
                      _type: "span",
                      marks: [],
                      text: " aan ",
                    },
                    {
                      _id: "id-7094804e-e159-48f6-ce07-9fa9ee503f82",
                      _type: "answerContentInline",
                      predefinedAnswer: false,
                      children: [
                        {
                          _type: "span",
                          marks: [],
                          text: "détester",
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
              evaluation: true,
              assets: [],
            },
          },
          class: {
            local: "",
            __typename: "ContentClass",
          },
          __typename: "Content",
        },
      ],
      __typename: "ContentSet",
    },
    {
      id: "8b5ad1e6-9321-40bc-ba6f-a47e707a649b",
      title: "",
      type: "CONTENTSET",
      content: [
        {
          id: "8b5ad1e6-9321-40bc-ba6f-a47e707a649b_id-15bf8da7-6d21-4b18-cb95-323a99fe73fc",
          playerPayload: {
            id: "8b5ad1e6-9321-40bc-ba6f-a47e707a649b_id-15bf8da7-6d21-4b18-cb95-323a99fe73fc",
            portableTextContent: {
              _id: "id-15bf8da7-6d21-4b18-cb95-323a99fe73fc",
              _type: "textEntry",
              predefinedAnswer: false,
              flashCard: false,
              intro: {},
              instruction: {},
              instructionFolio: {},
              question: [
                {
                  _id: "id-0509ae8d-c328-4241-a41a-fe651731d360",
                  _type: "p",
                  children: [
                    {
                      _type: "span",
                      marks: [],
                      text: "Type de juiste vertaling in van",
                    },
                  ],
                },
              ],
              explanation: [],
              answer: [
                {
                  _type: "audio",
                  _id: "id-bc17c999-dfd9-4d0e-ffb4-5ed3f1fd92d8",
                  content: {
                    _id: "id-6e989eb1-5e62-4e47-e999-e79631a39301",
                    _type: "audioInline",
                    xtrf: "elasticsearch$edify-casper.prd-noordhoff.5ab79095-fcdd-413b-979e-b373486409d3",
                    data: "https://numsprd-euwe.streaming.media.azure.net/229d49c9-8a5d-4dce-852f-0e8988488c44/2f476d0d-fd32-4a29-ae37-38da5015.ism/manifest",
                  },
                },
                {
                  _type: "image",
                  _id: "id-4c450fc0-4437-4f56-bbcd-a50a78c57dbc",
                  content: {
                    _id: "id-3457a262-03f6-4d84-dbc2-d8088ded7107",
                    _type: "imageInline",
                    alt: "",
                    href: "https://damapi-assets.edify.noordhoff.nl/image-output/edify-casper.prd-noordhoff.804fe113-b1a4-48c3-95c7-84a4c70e7427/fontopreview.jpeg?lastmodified=1631782472104",
                    xtrf: "elasticsearch$edify-casper.prd-noordhoff.804fe113-b1a4-48c3-95c7-84a4c70e7427",
                  },
                },
                {
                  _id: "id-068d943a-0c1f-43f0-89d8-131bd8137eac",
                  _type: "p",
                  children: [
                    {
                      _type: "span",
                      marks: [],
                      text: "waarom ",
                    },
                    {
                      _id: "id-7094804e-e159-48f6-ce07-9fa9ee503f82",
                      _type: "answerContentInline",
                      predefinedAnswer: false,
                      children: [
                        {
                          _type: "span",
                          marks: [],
                          text: "pourquoi",
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
              ignorePunctions: false,
              caseSensitive: false,
              evaluation: true,
              assets: [],
            },
          },
          class: {
            local: "",
            __typename: "ContentClass",
          },
          __typename: "Content",
        },
      ],
      __typename: "ContentSet",
    },
    {
      id: "d02d2e81-19c8-453b-a46f-44f7805b1d4b",
      title: "",
      type: "CONTENTSET",
      content: [
        {
          id: "d02d2e81-19c8-453b-a46f-44f7805b1d4b_id-15bf8da7-6d21-4b18-cb95-323a99fe73fc",
          playerPayload: {
            id: "d02d2e81-19c8-453b-a46f-44f7805b1d4b_id-15bf8da7-6d21-4b18-cb95-323a99fe73fc",
            portableTextContent: {
              _id: "id-15bf8da7-6d21-4b18-cb95-323a99fe73fc",
              _type: "textEntry",
              predefinedAnswer: false,
              flashCard: false,
              intro: {},
              instruction: {},
              instructionFolio: {},
              question: [
                {
                  _id: "id-38a36925-2b47-4552-8aa8-f85079701cdc",
                  _type: "p",
                  children: [
                    {
                      _type: "span",
                      marks: [],
                      text: "Type de juiste vertaling in van",
                    },
                  ],
                },
              ],
              explanation: [],
              answer: [
                {
                  _type: "audio",
                  _id: "id-42a2cef0-6e2e-4e3f-c2aa-57d6e4731d10",
                  content: {
                    _id: "id-5670de67-9f35-4994-d8c5-022785ad3578",
                    _type: "audioInline",
                    xtrf: "elasticsearch$edify-casper.prd-noordhoff.d9f6c3f7-004d-4622-9e39-d7856ec8a125",
                    data: "https://numsprd-euwe.streaming.media.azure.net/44865197-79d5-45f6-bd73-a9025a3a13c9/a7ef66e2-71a6-481c-990c-52b476a8.ism/manifest",
                  },
                },
                {
                  _type: "image",
                  _id: "id-b0b2618d-53ab-47de-e262-2e60e7d72a0f",
                  content: {
                    _id: "id-b2ea1781-cbbd-424c-b77c-95981b685e1f",
                    _type: "imageInline",
                    alt: "",
                    href: "https://damapi-assets.edify.noordhoff.nl/image-output/edify-casper.prd-noordhoff.db807e91-3913-43ef-94e6-04fe86077965/fontopreview.jpeg?lastmodified=1631782557835",
                    xtrf: "elasticsearch$edify-casper.prd-noordhoff.db807e91-3913-43ef-94e6-04fe86077965",
                  },
                },
                {
                  _id: "id-d5263b24-78a4-4ac7-e8fc-857cbfa67c04",
                  _type: "p",
                  children: [
                    {
                      _type: "span",
                      marks: [],
                      text: "kamperen ",
                    },
                    {
                      _id: "id-7094804e-e159-48f6-ce07-9fa9ee503f82",
                      _type: "answerContentInline",
                      predefinedAnswer: false,
                      children: [
                        {
                          _type: "span",
                          marks: [],
                          text: "Faire du camping",
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
              evaluation: true,
              assets: [],
            },
          },
          class: {
            local: "",
            __typename: "ContentClass",
          },
          __typename: "Content",
        },
      ],
      __typename: "ContentSet",
    },
    {
      id: "5075a6b6-dd1d-4ca9-a69d-6895a90cf4f5",
      title: "",
      type: "CONTENTSET",
      content: [
        {
          id: "5075a6b6-dd1d-4ca9-a69d-6895a90cf4f5_id-15bf8da7-6d21-4b18-cb95-323a99fe73fc",
          playerPayload: {
            id: "5075a6b6-dd1d-4ca9-a69d-6895a90cf4f5_id-15bf8da7-6d21-4b18-cb95-323a99fe73fc",
            portableTextContent: {
              _id: "id-15bf8da7-6d21-4b18-cb95-323a99fe73fc",
              _type: "textEntry",
              predefinedAnswer: false,
              flashCard: false,
              intro: {},
              instruction: {},
              instructionFolio: {},
              question: [
                {
                  _id: "id-60f8f07f-6ffc-4351-d132-d8c3905936a3",
                  _type: "p",
                  children: [
                    {
                      _type: "span",
                      marks: [],
                      text: "Type de juiste vertaling in van",
                    },
                  ],
                },
              ],
              explanation: [],
              answer: [
                {
                  _type: "audio",
                  _id: "id-80632cf3-836b-4266-8db6-998ea1c39fe8",
                  content: {
                    _id: "id-d08de76b-abbf-4085-a730-e26098f35669",
                    _type: "audioInline",
                    xtrf: "elasticsearch$edify-casper.prd-noordhoff.d1827e5a-4fc0-4819-8c22-74182b69ec91",
                    data: "https://numsprd-euwe.streaming.media.azure.net/7e4143a3-df0a-4366-9586-8eaba1b469f5/71784497-4b8b-4a14-a624-41ec33e8.ism/manifest",
                  },
                },
                {
                  _type: "image",
                  _id: "id-95cc157c-4bc4-47a8-a6e5-acaed70b2892",
                  content: {
                    _id: "id-1d5ec58c-1163-43f6-cc28-9f1e5573e997",
                    _type: "imageInline",
                    alt: "",
                    href: "https://damapi-assets.edify.noordhoff.nl/image-output/edify-casper.prd-noordhoff.294ab5f5-19a6-4ee9-9845-ce8d4ec662ed/fontopreview.jpeg?lastmodified=1631782733459",
                    xtrf: "elasticsearch$edify-casper.prd-noordhoff.294ab5f5-19a6-4ee9-9845-ce8d4ec662ed",
                  },
                },
                {
                  _id: "id-a451d38a-a68e-4006-94eb-32d12f957b93",
                  _type: "p",
                  children: [
                    {
                      _type: "span",
                      marks: [],
                      text: "vragen ",
                    },
                    {
                      _id: "id-7094804e-e159-48f6-ce07-9fa9ee503f82",
                      _type: "answerContentInline",
                      predefinedAnswer: false,
                      children: [
                        {
                          _type: "span",
                          marks: [],
                          text: "demander",
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
              ignorePunctions: false,
              caseSensitive: false,
              evaluation: true,
              assets: [],
            },
          },
          class: {
            local: "",
            __typename: "ContentClass",
          },
          __typename: "Content",
        },
      ],
      __typename: "ContentSet",
    },
  ],
  metadata: {
    __typename: "Metadata",
    slimStampen: true,
  },
};
