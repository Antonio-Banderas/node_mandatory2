<script>
  // --- components --- //
  import Mail from "../components/Mail.svelte";
  import Footer from "../components/Footer.svelte";

  // --- img --- //
  import rotatingSpam from "../../public/rotating spam.gif";
</script>

<img src={rotatingSpam} alt="rotating can of SPAM" />

<Mail />

<h3>Welcome to the Spamclub! ©</h3>
<p>
  By inserting and sending your email to us, you agree <br />
  to periodically recieve spam-messages from us.
</p>
<p>Only the administrator can free you from this prison.</p>

<Footer />