from urllib.parse import quote
from app.config import setting
import resend
resend.api_key = setting.resend_api_key.get_secret_value()
def send_verification_email(recipient_email:str,verification_token:str)->None:
    encoded_token=quote(
        verification_token,
        safe=""
    )
    verification_url = (
    f"{setting.frontend_verify_url}"
    f"?token={verification_token}"
)
    print("EMAIL_FROM =", repr(setting.email_from))
    print(
    "RESEND_API_KEY prefix =",
    setting.resend_api_key.get_secret_value()[:8],
    )
    resend.Emails.send(
        {
            "from": setting.email_from,
            "to": recipient_email,
            "subject": "Verify your email address",
            "html": f"""
                <h2>Welcome!</h2>

                <p>
                    Thank you for registering.
                    Please verify your email by clicking the button below.
                </p>

                <p>
                    <a
                        href="{verification_url}"
                        style="
                            background:#2563eb;
                            color:white;
                            padding:12px 20px;
                            text-decoration:none;
                            border-radius:6px;
                        "
                    >
                        Verify Email
                    </a>
                </p>

                <p>
                    If the button doesn't work, copy and paste this link into your browser:
                </p>

                <p>{verification_url}</p>

                <p>
                    This link will expire in 60 minutes.
                </p>
            """,
        }
    )
#----------------------------------------------------------------------------

def send_password_reset_email(
    recipient_email: str,
    reset_token: str,
) -> None:
    encoded_token = quote(
        reset_token,
        safe="",
    )

    reset_url = (
        f"{setting.frontend_reset_password_url}"
        f"?token={encoded_token}"
    )

    resend.Emails.send(
        {
            "from": setting.email_from,
            "to": [recipient_email],
            "subject": "Reset your password",
            "html": f"""
                <h2>Reset your password</h2>

                <p>
                    We received a request to reset your password.
                </p>

                <p>
                    <a href="{reset_url}">
                        Reset Password
                    </a>
                </p>

                <p>
                    If the button does not work, copy this link:
                </p>

                <p>{reset_url}</p>

                <p>
                    This link will expire in 15 minutes.
                </p>

                <p>
                    If you did not request a password reset,
                    you can ignore this email.
                </p>
            """,
        }
    )