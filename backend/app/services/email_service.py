import os
from urllib.parse import quote

from dotenv import load_dotenv


load_dotenv()

FRONTEND_VERIFY_URL = os.getenv(
    "FRONTEND_VERIFY_URL",
    "http://localhost:3000/verify-email",
)


def send_verification_email(email: str, token: str) -> None:
    """Display the verification link during local development."""

    verification_url = (
        f"{FRONTEND_VERIFY_URL}?token={quote(token)}"
    )

    print("\n--- EMAIL VERIFICATION ---")
    print(f"Recipient: {email}")
    print(f"Verification link: {verification_url}")
    print("--------------------------\n")