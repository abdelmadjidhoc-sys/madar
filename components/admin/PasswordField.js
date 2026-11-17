"use client";

import { useState } from "react";

/** Password input with an "إظهار / إخفاء" button so the member can check what they typed. */
export default function PasswordField({ label, name, autoComplete, minLength, autoFocus }) {
  const [visible, setVisible] = useState(false);

  return (
    <label className="admin-login-field">
      <span>{label}</span>
      <span className="admin-password-wrap">
        <input
          type={visible ? "text" : "password"}
          name={name}
          dir="ltr"
          autoComplete={autoComplete}
          minLength={minLength}
          autoFocus={autoFocus}
          required
        />
        <button
          className="admin-password-toggle"
          type="button"
          aria-pressed={visible}
          onClick={() => setVisible((shown) => !shown)}
        >
          {visible ? "إخفاء" : "إظهار"}
        </button>
      </span>
    </label>
  );
}
