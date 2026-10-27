import resend
from app.config import setting

resend.api_key = setting.RESEND_API_KEY

def send_verification_email(
        to_email:str,
        verifixation_token:str,
        parent_name:str) -> dict:
    """Send an email verification link to the newly registered parent."""
    display_name = parent_name if parent_name else "Dear Parent"
    verification_link = f"{setting.APP_URL}/auth/verify-email?token={verifixation_token}"
    params = {
        "from": setting.EMAIL_FROM,
        "to": [to_email],
        "subject": "Verify Your Maniarverse Account",
        "html": f"""
            <h2>Welcome to Maniarverse!</h2>
            <p>Thank you for registering. Please verify your email address by clicking the link below:</p>
            <p><a href="{verification_link}">Verify Email</a></p>
            <p>Or copy this link to your browser:</p>
            <p>{verification_link}</p>
        """,
    }

    resend.Emails.send(params)