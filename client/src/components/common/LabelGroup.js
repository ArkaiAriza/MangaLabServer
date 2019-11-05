import React from 'react';
import { Grid, Card, Image, Label, Icon, Accordion } from 'semantic-ui-react';

const LabelGroup = ({ labels, limit }) => {
  const labelGroup = [];

  if (limit == -1) {
    limit = labels.length;
  }

  for (var i = 0; i < limit; i++) {
    labelGroup.push(<Label as="a">{labels[i]}</Label>);
  }

  return (
    <Label.Group size="small" color="black">
      {labelGroup}
    </Label.Group>
  );
};

export { LabelGroup };
