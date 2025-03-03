import './Contact.css';
function Contact() {
    return (
      <div className="row">
        <div className="col-md-8 mx-auto">
          <h1>Contact</h1>
          <p>
            For inquiries or collaboration, send an email to:
            <a href="mailto:email@example.com"> email@example.com</a>.
          </p>
          <p>
            Also available on LinkedIn, GitHub, or other social media platforms.
          </p>
           
<div class="form-container">
      <form class="form">
        <div class="form-group">
          <label for="email">Company Email</label>
          <input type="text" id="email" name="email" required=""></input>
        </div>
        <div class="form-group">
          <label for="textarea">How Can We Help You?</label>
          <textarea name="textarea" id="textarea" rows="10" cols="50" required="">          </textarea>
        </div>
        <button class="form-submit-btn" type="submit">Submit</button>
      </form>
    </div>
          
        </div>
      </div>
    );
  }
  
  export default Contact;
  