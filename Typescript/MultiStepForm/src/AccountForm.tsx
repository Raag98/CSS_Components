import { FormWrapper } from "./FormWrapper";

type AccountData = {
    email: string
    password: string
}

type AccountFormProps = AccountData & {
    updateField: (fields: Partial<AccountData>) => void
}

export function AccountForm({ email, password, updateField } : AccountFormProps) {
    return (
      <FormWrapper title="Account Creation">
        <label>Email</label>
        <input
          autoFocus
          required
          type="email"
          value={email}
          onChange={(e) => updateField({ email: e.target.value })}
        />
        <label>Password</label>
        <input
          required
          type="password"
          value={password}
          onChange={(e) => updateField({ password: e.target.value })}
        />
      </FormWrapper>
    );
}