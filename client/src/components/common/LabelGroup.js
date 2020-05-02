import React from 'react';
import { Label } from 'semantic-ui-react';
import styled from 'styled-components';

const Group = styled(Label.Group)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LabelGroup = ({ labels, limit, className }) => {
  const labelGroup = [];

  if (limit == -1) {
    limit = labels.length;
  }

  if (!labels) {
    return null;
  }

  for (var i = 0; i < limit; i++) {
    labelGroup.push(<Label as="a">{labels[i]}</Label>);
  }

  return (
    <Group className={className} size="mini" color="black" style={{}}>
      {labelGroup}
    </Group>
  );
};

export { LabelGroup };
