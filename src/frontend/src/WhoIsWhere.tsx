import { Center, createStyles, Table, Title } from "@mantine/core";
import graphql from "babel-plugin-relay/macro";
import { FC } from "react";
import { useLazyLoadQuery } from "react-relay";
import { Where } from "./Where";
import {
  WhoIsWhereQuery as WhoIsWhereQueryType,
  WhoIsWhereQuery$data,
} from "./__generated__/WhoIsWhereQuery.graphql";

const WhoIsWhereQuery = graphql`
  query WhoIsWhereQuery($teamIdentifier: String!) {
    whoIsWhere(teamIdentifier: $teamIdentifier) {
      weekInfo {
        isCurrentWeek
        monday
        friday
      }
      whoIsWhere {
        memberName
        monday {
          id
          where
        }
        tuesday {
          id
          where
        }
        wednesday {
          id
          where
        }
        thursday {
          id
          where
        }
        friday {
          id
          where
        }
      }
    }
  }
`;

const useStyles = createStyles((theme) => ({
  table: {
    tableLayout: "fixed",
  },
  cell: {
    width: "16.6666666667%",
  },
  headerCell: {
    wordBreak: "break-all",
  },
}));

export const WhoIsWhere: FC<{
  teamIdentifier: string;
  teamName: string;
  teamMembers: string[];
}> = ({ teamIdentifier, teamName, teamMembers }) => {
  const data = useLazyLoadQuery<WhoIsWhereQueryType>(WhoIsWhereQuery, {
    teamIdentifier,
  });
  const { classes, cx } = useStyles();

  if (!data) {
    return null;
  }

  const weekInfo = data.whoIsWhere.weekInfo;

  return (
    <>
      <Center>
        <Title>
          Wo lungeret d'Lüt vo {teamName}{" "}
          {weekInfo.isCurrentWeek ? "diä Wuche" : "nächst Wuche"} (
          {formatDate(weekInfo.monday)} - {formatDate(weekInfo.friday)}) ume?
        </Title>
      </Center>
      <Table mt="xl" striped className={classes.table}>
        <thead>
          <tr>
            <th className={cx(classes.cell, classes.headerCell)}></th>
            <th className={cx(classes.cell, classes.headerCell)}>Mäntig</th>
            <th className={cx(classes.cell, classes.headerCell)}>Zischtig</th>
            <th className={cx(classes.cell, classes.headerCell)}>Mittwuch</th>
            <th className={cx(classes.cell, classes.headerCell)}>Dunnschtig</th>
            <th className={cx(classes.cell, classes.headerCell)}>Fritig</th>
          </tr>
        </thead>
        <tbody>
          {teamMembers.sort().map((m) => (
            <MemberRow
              key={m}
              teamIdentifier={teamIdentifier}
              member={m}
              data={data}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
};

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return (
    date.getDate().toString().padStart(2, "0") +
    "." +
    (date.getMonth() + 1).toString().padStart(2, "0")
  );
}

const MemberRow: FC<{
  member: string;
  teamIdentifier: string;
  data: WhoIsWhereQuery$data;
}> = ({ member, teamIdentifier, data }) => {
  const info = data.whoIsWhere.whoIsWhere.find(
    (wiw) => wiw.memberName === member
  );
  const { classes } = useStyles();

  return (
    <tr>
      <td className={classes.cell}>{member}</td>
      <td className={classes.cell}>
        <Where
          where={info?.monday}
          teamIdentifier={teamIdentifier}
          member={member}
          day="Monday"
        />
      </td>
      <td className={classes.cell}>
        <Where
          where={info?.tuesday}
          teamIdentifier={teamIdentifier}
          member={member}
          day="Tuesday"
        />
      </td>
      <td className={classes.cell}>
        <Where
          where={info?.wednesday}
          teamIdentifier={teamIdentifier}
          member={member}
          day="Wednesday"
        />
      </td>
      <td className={classes.cell}>
        <Where
          where={info?.thursday}
          teamIdentifier={teamIdentifier}
          member={member}
          day="Thursday"
        />
      </td>
      <td className={classes.cell}>
        <Where
          where={info?.friday}
          teamIdentifier={teamIdentifier}
          member={member}
          day="Friday"
        />
      </td>
    </tr>
  );
};
