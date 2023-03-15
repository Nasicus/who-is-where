/**
 * @generated SignedSource<<60148c0e25170dd52c183934b5e8e0a1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
export type WhereSubscription$variables = {
  day: string;
  teamIdentifier: string;
  who: string;
};
export type WhereSubscription$data = {
  readonly whoIsWhereUpdated: {
    readonly day: string;
    readonly memberName: string;
    readonly update: {
      readonly id: string;
      readonly where: string;
    };
  };
};
export type WhereSubscription = {
  response: WhereSubscription$data;
  variables: WhereSubscription$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "day"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "teamIdentifier"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "who"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "day",
        "variableName": "day"
      },
      {
        "kind": "Variable",
        "name": "teamIdentifier",
        "variableName": "teamIdentifier"
      },
      {
        "kind": "Variable",
        "name": "who",
        "variableName": "who"
      }
    ],
    "concreteType": "WhoIsWhereSubscriptionUpdate",
    "kind": "LinkedField",
    "name": "whoIsWhereUpdated",
    "plural": false,
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
        "kind": "ScalarField",
        "name": "day",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "DayInfo",
        "kind": "LinkedField",
        "name": "update",
        "plural": false,
        "selections": [
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
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "WhereSubscription",
    "selections": (v3/*: any*/),
    "type": "WhoIsWhereSubscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "WhereSubscription",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "7631d3208769cedf5d9fd4a5bc8d1d8a",
    "id": null,
    "metadata": {},
    "name": "WhereSubscription",
    "operationKind": "subscription",
    "text": "subscription WhereSubscription(\n  $teamIdentifier: String!\n  $who: String!\n  $day: String!\n) {\n  whoIsWhereUpdated(teamIdentifier: $teamIdentifier, who: $who, day: $day) {\n    memberName\n    day\n    update {\n      id\n      where\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "5ce28058b4ebff7fba57e18a659939ca";

export default node;
