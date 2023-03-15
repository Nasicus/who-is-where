import { Text, Tooltip, UnstyledButton } from "@mantine/core";
import graphql from "babel-plugin-relay/macro";
import { FC, useRef, useState } from "react";
import { useMutation, useSubscription } from "react-relay";
import { WhereMutation as WhereMutationType } from "./__generated__/WhereMutation.graphql";
import {
  WhereSubscription as WhereSubscriptionType,
  WhereSubscription$data,
} from "./__generated__/WhereSubscription.graphql";

const WhereMutation = graphql`
  mutation WhereMutation(
    $id: String
    $teamIdentifier: String!
    $who: String!
    $day: String!
    $where: String!
  ) {
    updateWhoIsWhere(
      id: $id
      teamIdentifier: $teamIdentifier
      who: $who
      day: $day
      where: $where
    ) {
      id
    }
  }
`;

const WhereSubscription = graphql`
  subscription WhereSubscription(
    $teamIdentifier: String!
    $who: String!
    $day: String!
  ) {
    whoIsWhereUpdated(teamIdentifier: $teamIdentifier, who: $who, day: $day) {
      memberName
      day
      update {
        id
        where
      }
    }
  }
`;

interface IWhereInfo {
  readonly id: string;
  readonly where: string;
}

export const Where: FC<{
  where: IWhereInfo;
  member: string;
  teamIdentifier: string;
  day: string;
}> = ({ where, member, teamIdentifier, day }) => {
  const mutationTimeoutHandle = useRef<NodeJS.Timeout>();

  useSubscription<WhereSubscriptionType>({
    subscription: WhereSubscription,
    variables: { teamIdentifier, day, who: member },
    onNext: handleSubscriptionUpdate,
  });

  const [commitMutation] = useMutation<WhereMutationType>(WhereMutation);

  const [state, setState] = useState({
    info: placeInfosByName[where?.where] ?? unknownPlace,
    id: where?.id,
  });

  return (
    <UnstyledButton onClick={handleClick}>
      <Tooltip label={state.info.text}>
        <Text fz="xxl">{state.info.icon}</Text>
      </Tooltip>
    </UnstyledButton>
  );

  function handleClick() {
    clearTimeout(mutationTimeoutHandle.current);

    const next = placeInfosByName[state.info.next];

    setState((s) => ({ ...s, info: next }));

    mutationTimeoutHandle.current = setTimeout(() => {
      commitMutation({
        variables: {
          id: state.id,
          teamIdentifier,
          who: member,
          day,
          where: next.name,
        },
        onCompleted: (result) => {
          setState((s) => ({ ...s, id: result.updateWhoIsWhere.id }));
        },
      });
    }, 1000);
  }

  function handleSubscriptionUpdate(
    subscriptionUpdate: WhereSubscription$data
  ) {
    const data = subscriptionUpdate?.whoIsWhereUpdated;

    if (!data) {
      return;
    }

    if (state.id === data.update.id && data.update.where === state.info.name) {
      return;
    }

    setState((s) => ({
      ...s,
      id: data.update.id,
      info: placeInfosByName[data.update.where] ?? unknownPlace,
    }));
  }
};

interface IPlace {
  name: string;
  text: string;
  icon: string;
  next: string;
}

const unknownPlace = {
  name: "unknown",
  text: "Niemer weiss es...",
  icon: "❓",
  next: "office",
};

const placeInfosByName: { [placeName: string]: IPlace } = {
  office: { name: "office", text: "Büro", icon: "🏢", next: "homo" },
  homo: { name: "homo", text: "Diheime", icon: "🏠", next: "vacating" },
  vacating: {
    name: "vacating",
    text: "Ferie, Out of Office, Chille....",
    icon: "🏖️",
    next: "glitzt",
  },
  glitzt: { name: "glitzt", text: "Glitzt!", icon: "🤒", next: "unknown" },
  unknown: unknownPlace,
};
