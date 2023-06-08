import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadSynthsActionCreator } from "../../store/synths/synthSlice";
import SynthsPageStyled from "./SynthsPageStyled";
import SynthList from "../../components/SynthList/SynthList";
import useSynths from "../../hooks/useSynths/useSynths";

const SynthsPage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getSynths } = useSynths();
  const islogged = useAppSelector((state) => state.users.isLogged);

  useEffect(() => {
    islogged &&
      (async () => {
        const synths = await getSynths();
        if (synths) {
          dispatch(loadSynthsActionCreator(synths));
        }
      })();
  }, [dispatch, getSynths, islogged]);

  return (
    <SynthsPageStyled className="header">
      <h1 className="header__title">Synths</h1>
      <SynthList />
    </SynthsPageStyled>
  );
};

export default SynthsPage;
