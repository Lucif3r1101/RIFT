type ForgotPasswordModalProps = {
  open: boolean;
  step: "request" | "reset";
  email: string;
  token: string;
  password: string;
  confirmPassword: string;
  passwordVisible: boolean;
  confirmVisible: boolean;
  error: string;
  message: string;
  onEmailChange: (value: string) => void;
  onTokenChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onConfirmPasswordChange: (value: string) => void;
  onTogglePasswordVisible: () => void;
  onToggleConfirmVisible: () => void;
  onRequestReset: () => void;
  onSubmitReset: () => void;
  onChangeStep: (step: "request" | "reset") => void;
  onClose: () => void;
};

export function ForgotPasswordModal(props: ForgotPasswordModalProps) {
  const {
    open,
    step,
    email,
    token,
    password,
    confirmPassword,
    passwordVisible,
    confirmVisible,
    error,
    message,
    onEmailChange,
    onTokenChange,
    onPasswordChange,
    onConfirmPasswordChange,
    onTogglePasswordVisible,
    onToggleConfirmVisible,
    onRequestReset,
    onSubmitReset,
    onChangeStep,
    onClose
  } = props;

  if (!open) {
    return null;
  }

  const isRequest = step === "request";

  return (
    <div className="legal-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <div className="auth-modal-head">
          <div>
            <span className="auth-hero-kicker">Account recovery</span>
            <h3>{isRequest ? "Reset your password" : "Set a new password"}</h3>
          </div>
          <button className="icon-close" type="button" onClick={onClose} aria-label="Close">×</button>
        </div>

        <p className="auth-hint">
          {isRequest
            ? "Enter your account email and we'll send a reset link. Open it on this device to continue."
            : "Paste the token from your email (or use the emailed link) and choose a new password."}
        </p>

        {isRequest ? (
          <div className="auth-form">
            <label className="label">
              Account Email
              <input
                className="input"
                value={email}
                onChange={(e) => onEmailChange(e.target.value)}
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@example.com"
              />
            </label>
            <button className="button primary auth-submit" type="button" onClick={onRequestReset}>
              Send Reset Link
            </button>
            <p className="auth-switch">
              Already have a token?{" "}
              <button type="button" className="link" onClick={() => onChangeStep("reset")}>Enter it</button>
            </p>
          </div>
        ) : (
          <div className="auth-form">
            <label className="label">
              Reset Token
              <input
                className="input"
                value={token}
                onChange={(e) => onTokenChange(e.target.value)}
                type="text"
                placeholder="Paste your reset token"
              />
            </label>
            <label className="label">
              New Password
              <div className="input-wrap">
                <input
                  className="input"
                  value={password}
                  onChange={(e) => onPasswordChange(e.target.value)}
                  type={passwordVisible ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="••••••••"
                />
                <button className="peek" type="button" onClick={onTogglePasswordVisible} aria-label={passwordVisible ? "Hide password" : "Show password"}>
                  {passwordVisible ? "Hide" : "Show"}
                </button>
              </div>
            </label>
            <label className="label">
              Confirm Password
              <div className="input-wrap">
                <input
                  className="input"
                  value={confirmPassword}
                  onChange={(e) => onConfirmPasswordChange(e.target.value)}
                  type={confirmVisible ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="Re-enter password"
                />
                <button className="peek" type="button" onClick={onToggleConfirmVisible} aria-label={confirmVisible ? "Hide password" : "Show password"}>
                  {confirmVisible ? "Hide" : "Show"}
                </button>
              </div>
            </label>
            <p className="auth-hint">Must include uppercase, lowercase, a number, and a symbol.</p>
            <button className="button primary auth-submit" type="button" onClick={onSubmitReset}>
              Update Password
            </button>
            <p className="auth-switch">
              <button type="button" className="link" onClick={() => onChangeStep("request")}>← Back to email</button>
            </p>
          </div>
        )}

        {error ? <p className="error">{error}</p> : null}
        {message ? <p className="good">{message}</p> : null}
      </div>
    </div>
  );
}
