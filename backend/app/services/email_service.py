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
'''
import os
from urllib.parse import quote
import resend
from dotenv import load_dotenv


load_dotenv()

resend.api_key=os.getenv("RESEND_API_KEY")

EMAIL_FROM=os.getenv(
    "EMAIL_FROM",
    "Maniyarverse <onboarding@resend.dev>"
)

FRONTEND_VERIFY_URL = os.getenv(
    "FRONTEND_VERIFY_URL",
    "http://localhost:3000/verify-email",
)


def send_verification_email(recipient_email: str, verification_token: str) -> None:
    encoded_token=quote(
        verification_token,
        safe=""
    )
    verification_link=(
        f"{FRONTEND_VERIFY_URL}"
        f"?tokrn={encoded_token}"
    )
    resend.Emails.send({
        "from":EMAIL_FROM,
        "to":[recipient_email],
        "subject":"Verify Your Email",
        "html":f"""
        <h2>Verify your email</h2>
        <p>Click the link below to verify your account:</p>
        <p>
            <a href="{verification_link}">
                    Verify email
                </a>
        </p>
        <p>
                This link expires in 30 minutes.
            </p>
        """,
    }
    )
    '''