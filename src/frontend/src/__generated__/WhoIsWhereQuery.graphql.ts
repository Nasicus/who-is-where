/**
 * @generated SignedSource<<f51a240f632e634b9da324638eb20ece>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type WhoIsWhereQuery$variables = {
  teamIdentifier: string;
};
export type WhoIsWhereQuery$data = {
  readonly whoIsWhere: {
    readonly weekInfo: {
      readonly friday: any;
      readonly isCurrentWeek: boolean;
      readonly monday: any;
    };
    readonly whoIsWhere: ReadonlyArray<{
      readonly friday: {
        readonly id: string;
        readonly where: string;
      } | null;
      readonly memberName: string;
      readonly monday: {
        readonly id: string;
        readonly where: string;
      } | null;
      readonly thursday: {
        readonly id: string;
        readonly where: string;
      } | null;
      readonly tuesday: {
        readonly id: string;
        readonly where: string;
      } | null;
      readonly wednesday: {
        readonly id: string;
        readonly where: string;
      } | null;
    }>;
  };
};
export type WhoIsWhereQuery = {
  response: WhoIsWhereQuery$data;
  variables: WhoIsWhereQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "teamIdentifier"
  }
],
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "where",
    "storageKey": null
  }
],
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "teamIdentifier",
        "variableName": "teamIdentifier"
      }
    ],
    "concreteType": "WhoIsWhereQueryResult",
    "kind": "LinkedField",
    "name": "whoIsWhere",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "WeekInfo",
        "kind": "LinkedField",
        "name": "weekInfo",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isCurrentWeek",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "monday",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "friday",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "WhoIsWhere",
        "kind": "LinkedField",
        "name": "whoIsWhere",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "memberName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "DayInfo",
            "kind": "LinkedField",
            "name": "monday",
            "plural": false,
            "selections": (v1/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "DayInfo",
            "kind": "LinkedField",
            "name": "tuesday",
            "plural": false,
            "selections": (v1/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "DayInfo",
            "kind": "LinkedField",
            "name": "wednesday",
            "plural": false,
            "selections": (v1/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "DayInfo",
            "kind": "LinkedField",
            "name": "thursday",
            "plural": false,
            "selections": (v1/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "DayInfo",
            "kind": "LinkedField",
            "name": "friday",
            "plural": false,
            "selections": (v1/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "WhoIsWhereQuery",
    "selections": (v2/*: any*/),
    "type": "WhoIsWhereQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "WhoIsWhereQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "665430c91918d12417679eb1267ffaaa",
    "id": null,
    "metadata": {},
    "name": "WhoIsWhereQuery",
    "operationKind": "query",
    "text": "query WhoIsWhereQuery(\n  $teamIdentifier: String!\n) {\n  whoIsWhere(teamIdentifier: $teamIdentifier) {\n    weekInfo {\n      isCurrentWeek\n      monday\n      friday\n    }\n    whoIsWhere {\n      memberName\n      monday {\n        id\n        where\n      }\n      tuesday {\n        id\n        where\n      }\n      wednesday {\n        id\n        where\n      }\n      thursday {\n        id\n        where\n      }\n      friday {\n        id\n        where\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "15be571adbe38c219149c73d5d27e3b0";

export default node;
