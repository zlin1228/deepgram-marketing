import Text from 'quarks/Text';

const singleColorizedText = (segment: any[], colorReg: RegExp, color: string) => {
  let colorizedArray: any[] = [];
  segment.map(subSegment => {
    const colorized =
      typeof subSegment === 'string'
        ? subSegment.split(colorReg).map((seg: any, index: number) => {
            if (index % 2 === 1) {
              return (
                <Text className="colorized-text" key={seg} css={{ color }}>
                  {seg}&nbsp;
                </Text>
              );
            }

            return seg;
          })
        : [subSegment];
    colorizedArray = [...colorizedArray, ...colorized];

    return;
  });

  return colorizedArray;
};

const colorizeText = (string: string) => {
  if (!string) {
    return '';
  }
  const redColorized = singleColorizedText([string], /<[/]*Red>/, '#EE028B');
  const blueColorized = singleColorizedText(redColorized, /<[/]*Blue>/, '#7686FF');
  const greenColorized = singleColorizedText(blueColorized, /<[/]*Green>/, '#38edac');
  const yellow3Colorized = singleColorizedText(greenColorized, /<[/]*Yellow3>/, '#fd8383');
  const yellow2Colorized = singleColorizedText(yellow3Colorized, /<[/]*Yellow2>/, '#ff9d29');
  const yellow1Colorized = singleColorizedText(yellow2Colorized, /<[/]*Yellow1>/, '#ffd34b');
  const blue1Colorized = singleColorizedText(yellow1Colorized, /<[/]*Blue1>/, '#38edac');
  const blue2Colorized = singleColorizedText(blue1Colorized, /<[/]*Blue2>/, '#c287fc');
  const blue3Colorized = singleColorizedText(blue2Colorized, /<[/]*Blue3>/, '#69a5ff');
  const pinkColorized = singleColorizedText(blue3Colorized, /<[/]*Pink>/, '#fb5cfe');

  return pinkColorized;
};

export default colorizeText;
