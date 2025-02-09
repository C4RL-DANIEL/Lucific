import javax.mail.*;
import javax.mail.internet.*;
import java.util.Properties;

public class SendEmail {

    public static void main(String[] args) {

        // Replace with your actual email credentials
        String from = "your_email@example.com";
        String password = "your_email_password"; 
        String to = "recipient_email@example.com";
        String subject = "Contact Form Submission";
        String body = "This is a test email sent from Java.";

        // Get system properties
        Properties props = System.getProperties();
        props.put("mail.smtp.host", "smtp.gmail.com"); // Specify your SMTP server
        props.put("mail.smtp.port", "587"); // Use port 587 for TLS
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");

        // Create a session object
        Session session = Session.getInstance(props,
                new javax.mail.Authenticator() {
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication(from, password);
                    }
                });

        try {
            // Create a message
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(from));
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(to));
            message.setSubject(subject);
            message.setText(body);

            // Send message
            Transport.send(message);

            System.out.println("Email sent successfully!");

        } catch (MessagingException e) {
            e.printStackTrace();
            System.out.println("Error sending email: " + e.getMessage());
        }
    }
}