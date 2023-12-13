import { darkButton } from 'molecules/Button/button.theme';
import { darkButtonGroup } from 'molecules/ButtonGroup/buttonGroup.theme';
import { darkCheckbox } from 'molecules/Checkbox/checkbox.theme';
import { darkCircularProgress } from 'molecules/CircularProgress/circularProgress.theme';
import { darkLinearProgress } from 'molecules/LinearProgress/linearProgress.theme';
import { darkRadio } from 'molecules/Radio/radio.theme';
import { darkSelect } from 'molecules/Select/Select.theme';
import { darkSlider } from 'molecules/Slider/slider.theme';
import { darkSwitch } from 'molecules/Switch/switch.theme';
import { darkTextField } from 'molecules/TextField/TextField.theme';
import { darkTooltip } from 'molecules/Tooltip/tooltip.theme';

import { darkPalette, lightPalette, standardPalette } from 'theme/colorPalettes';
import { darkFormControl } from 'theme/formControl.theme';
import typography from 'theme/typography';

export const getAppTheme = (mode: 'light' | 'dark') => {
  const isDark = mode === 'dark';

  return {
    components: {
      ...darkButton,
      ...darkTextField,
      ...darkSwitch,
      ...darkRadio,
      ...darkTooltip,
      ...darkButtonGroup,
      ...darkLinearProgress,
      ...darkSlider,
      ...darkCheckbox,
      ...darkSelect,
      ...darkFormControl,
      ...darkCircularProgress,
    },
    palette: {
      mode,
      ...(isDark ? darkPalette : lightPalette),
      ...standardPalette,
      contrastThreshold: 3,
    },
    ...typography,
  };
};

export type AppTheme = ReturnType<typeof getAppTheme>;

export type CSSProps = { theme: AppTheme };
