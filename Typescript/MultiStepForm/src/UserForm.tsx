import { FormWrapper } from "./FormWrapper";

type UserData = {
    firstName: string;
    lastName: string;
    age: string;
};

type UserFormProps = UserData & {
    updateField: (fields: Partial<UserData>) => void;
};

export function UserForm({
    firstName,
    lastName,
    age,
    updateField,
}: UserFormProps) {
    return (
      <FormWrapper title="User Details">
        <label>First Name</label>
        <input
          autoFocus
          required
          type="text"
          value={firstName}
          onChange={(e) => updateField({ firstName: e.target.value })}
        />
        <label>Last Name</label>
        <input
          required
          type="text"
          value={lastName}
          onChange={(e) => updateField({ lastName: e.target.value })}
        />
        <label>Age</label>
        <input
          required
          min={1}
          type="number"
          value={age}
          onChange={(e) => updateField({ age: e.target.value })}
        />
      </FormWrapper>
    );
}
