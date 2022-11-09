import { FormWrapper } from "./FormWrapper";

type AddressData = {
    street: string
    city: string
    state: string
    zip: string
}

type AddressFormProps = AddressData & {
    updateField: (fields: Partial<AddressData>) => void
}

export function AddressForm({ street, city, state, zip, updateField } : AddressFormProps) {
    return (
      <FormWrapper title="Address">
        <label>Street</label>
        <input
          autoFocus
          required
          type="text"
          value={street}
          onChange={(e) => updateField({ street: e.target.value })}
        />
        <label>City</label>
        <input
          required
          type="text"
          value={city}
          onChange={(e) => updateField({ city: e.target.value })}
        />
        <label>State</label>
        <input
          required
          type="text"
          value={state}
          onChange={(e) => updateField({ state: e.target.value })}
        />
        <label>Zip</label>
        <input
          required
          type="text"
          value={zip}
          onChange={(e) => updateField({ zip: e.target.value })}
        />
      </FormWrapper>
    );
}