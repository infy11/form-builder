import Text from "@/components/widgets/Text";
import TextInput from "@/components/widgets/TextInput";
import TextArea from "@/components/widgets/TextArea";
import { DatePicker } from "@/components/ui/datePicker";
import Select from "@/components/widgets/Select";

const ComponentsMap = {
  text: Text,
  inputGeneric: TextInput,
  inputNumber: TextInput,
  textArea: TextArea,
  datePicker: DatePicker,
  select: Select,
};

export default ComponentsMap;
