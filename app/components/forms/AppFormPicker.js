import { StyleSheet } from "react-native";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";

const AppFormPicker = ({
  items,
  name,
  numberOfColumns,
  PickerItemComponent,
  placeholder,
  width,
}) => {
  const { setFieldValue, errors, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;

const styles = StyleSheet.create({});
