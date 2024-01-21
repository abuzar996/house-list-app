import HouseList from "./components/house-list";
import { useEffect } from "react";
import { useAppDispatch, RootState } from "./redux/store";
import { getData } from "./redux/slice/data-slice";
import { useSelector } from "react-redux";
import { Flex, Spin } from "antd";

function App() {
  const { loading } = useSelector((state: RootState) => state.data);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  return (
    <div className="app-container">
      {loading ? (
        <Flex flex={1} justify="center" align="center">
          <Spin tip="loading" />
        </Flex>
      ) : (
        <HouseList />
      )}
    </div>
  );
}

export default App;
