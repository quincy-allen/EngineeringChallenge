import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetMachine, updateMachine } from "../redux/features/machineSlice";

export const useMachineData = () => {
  const dispatch = useDispatch();
  const { machineData } = useSelector((state) => state.machines);
  console.log(machineData, "machine data");

  const resetMachineData = useCallback(async () => {
    dispatch(resetMachine());
  }, []);

  const updateMachineData = useCallback(async (newMachineData) => {
    dispatch(updateMachine(newMachineData));
  }, []);

  const setScores = useCallback(
    async (newScores) => {
      try {
        if (!machineData) {
          return;
        }

        const newMachineData = JSON.parse(JSON.stringify(machineData)); // Deep copy machine parts

        newMachineData.scores = newScores;

        // Update the state with the new machine data
        dispatch(updateMachine(newMachineData));

        // Persist the updated machine data to local storage

        JSON.stringify(newMachineData);
      } catch (error) {
        console.error(error);
        // Handle storage saving error
      }
    },
    [machineData]
  );

  return {
    machineData,
    updateMachineData,
    resetMachineData,
    setScores,
  };
};
