import { useState, useEffect } from "react";
import { useGetScreenSizeHook } from "@hooks";
import { common } from "@styles";
import * as R from "ramda";

export const useMobileNavHook = () => {
  const { isDesktop } = useGetScreenSizeHook();
  // const { width } = windowSize;
  const [state, setState] = useState<{
    isMenu?: boolean;
  }>({
    isMenu: false,
  });

  useEffect(() => {
    if (isDesktop) {
      closeAll();
    }
  }, [isDesktop]);

  const handleSetState = (stateChange: typeof state) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  // closes menu if opened and opens menu if
  // closed and hamburger icon is clicked
  const toggleNavMenus = () => {
    // console.log("check", state.isMenu);
    if (state.isMenu) {
      closeAll();
    } else {
      // console.log("here ");
      // if initial state is closed then we open navbar
      handleSetState({
        isMenu: true,
      });
    }
  };

  // const openItem = () => {
  //   // make sure everything else is closed first
  //   if (state.isMenu) {
  //     console.log(state);
  //     handleSetState({ isMenu: false });
  //     closeAll();
  //   }
  //   // handleSetState({
  //   //   isNetwork: true,
  //   // });
  // };

  /**
   * Helper that will check and turn off any open tabs
   */
  const closeAll = () => {
    handleSetState({
      isMenu: false,
    });
  };

  return {
    toggleNavMenus,
    closeAll,
    // openItem,
    // isNetwork: state.isNetwork,
    isMenu: state.isMenu,
    isOpen: state.isMenu,
  };
};
