import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Slider,
  SxProps,
  Theme,
} from "@mui/material";

import RangeMap from "./RangeMap";
import { useTranslation } from "react-i18next";
import { useCallback, useContext, useState } from "react";
import AppContext from "../../AppContext";
import { Location } from "hk-bus-eta";

interface RangeMapDialogProps {
  open: boolean;
  onClose: () => void;
}

interface RangeMapDialogState {
  geolocation: Location;
  searchRange: number;
}

const RangeMapDialog = ({ open, onClose }: RangeMapDialogProps) => {
  const {
    geolocation,
    manualGeolocation,
    searchRange,
    setManualGeolocation,
    setSearchRange,
  } = useContext(AppContext);

  const { t } = useTranslation();

  const [state, setState] = useState<RangeMapDialogState>({
    geolocation: manualGeolocation ?? geolocation,
    searchRange,
  });

  const handleClose = useCallback(() => {
    setManualGeolocation(state.geolocation);
    setSearchRange(state.searchRange);
    onClose();
  }, [state, setManualGeolocation, setSearchRange, onClose]);

  const updateGeolocation = useCallback((geolocation: Location | null) => {
    setState((prev) => ({
      ...prev,
      geolocation,
    }));
  }, []);

  const updateRange = useCallback((searchRange: number) => {
    setState((prev) => ({
      ...prev,
      searchRange,
    }));
  }, []);

  return (
    <Dialog open={open} onClose={handleClose} sx={rootSx}>
      <DialogTitle sx={titleSx}>{t("自訂搜尋範圍（米）")}</DialogTitle>
      <DialogContent>
        <RangeMap
          range={state.searchRange}
          value={state.geolocation}
          onChange={updateGeolocation}
        />
        <Box sx={{ px: 4, py: 5 }}>
          <Slider
            sx={sliderSx}
            aria-label="Range"
            value={searchRange}
            valueLabelDisplay="on"
            marks={[
              { label: "0", value: 0 },
              { label: "1km", value: 1000 },
              { label: "2km", value: 2000 },
              { label: "3km", value: 3000 },
              { label: "4km", value: 4000 },
              { label: "5km", value: 5000 },
            ]}
            min={0}
            max={5000}
            step={250}
            onChange={(_, value) => updateRange(value as number)}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default RangeMapDialog;

const rootSx: SxProps<Theme> = {
  "& .MuiPaper-root": {
    width: "100%",
    height: "calc(100dvh - 100px)",
  },
  "& .MuiDialogContent-root": {
    p: 0,
    display: "flex",
    flexDirection: "column",
  },
};

const titleSx: SxProps<Theme> = {
  backgroundColor: (theme) =>
    theme.palette.mode === "dark"
      ? theme.palette.background.default
      : theme.palette.primary.main,
  color: (theme) =>
    theme.palette.mode === "dark"
      ? theme.palette.primary.main
      : theme.palette.text.primary,
};

const sliderSx: SxProps<Theme> = {
  "& .MuiSlider-mark": {
    backgroundColor: "#bfbfbf",
    height: 8,
  },
};