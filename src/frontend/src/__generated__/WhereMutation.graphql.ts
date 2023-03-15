/**
 * @generated SignedSource<<7f7f923411fbeab08e677f65ec2d5ef5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type WhereMutation$variables = {
  day: string;
  id?: string | null;
  teamIdentifier: string;
  where: string;
  who: string;
};
export type WhereMutation$data = {
  readonly updateWhoIsWhere: {
    readonly id: string;
  };
};
export type WhereMutation = {
  response: WhereMutation$data;
  variables: WhereMutation$variables;
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
  "name": "id"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "teamIdentifier"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "where"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "who"
},
v5 = [
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
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "teamIdentifier",
        "variableName": "teamIdentifier"
      },
      {
        "kind": "Variable",
        "name": "where",
        "variableName": "where"
      },
      {
        "kind": "Variable",
        "name": "who",
        "variableName": "who"
      }
    ],
    "concreteType": "DayInfo",
    "kind": "LinkedField",
    "name": "updateWhoIsWhere",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
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
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "WhereMutation",
    "selections": (v5/*: any*/),
    "type": "WhoIsWhereMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v2/*: any*/),
      (v4/*: any*/),
      (v0/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Operation",
    "name": "WhereMutation",
    "selections": (v5/*: any*/)
  },
  "params": {
    "cacheID": "f50b38380d32e000654696461f8c9edd",
    "id": null,
    "metadata": {},
    "name": "WhereMutation",
    "operationKind": "mutation",
    "text": "mutation WhereMutation(\n  $id: String\n  $teamIdentifier: String!\n  $who: String!\n  $day: String!\n  $where: String!\n) {\n  updateWhoIsWhere(id: $id, teamIdentifier: $teamIdentifier, who: $who, day: $day, where: $where) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "fb539b1bc7842af9f09ca48b3d73d0f1";

export default node;
