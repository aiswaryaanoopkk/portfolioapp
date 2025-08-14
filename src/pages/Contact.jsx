function Contact() {
  return (
    <div>
      <h3>Contact</h3>
      <form>
        <label>Enter your name:</label>
        <input type="text" name="name"/><br/><br/>
        <label>Enter your message:</label>
        <input type="text" name="message"/><br/><br/>
        <button type="submit">Send</button>
    </form>
    </div>
  );
}

export default Contact;