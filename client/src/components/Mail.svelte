<script>
    // --- store & toastr --- //
    import { BASE_URL } from "../store/global";
    import { notifications } from "../toastr/notifications";

    let email;
    function sendEmail() {
        fetch($BASE_URL + "/mail/sendEmail", {
            method: "POST",
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify({ email: email }),
        }).then((response) => {
            console.log(response.status);
            if (response.status === 202) {
                notifications.success("Email sent!", 2500);
                email = null;
            } else {
            }
        });
    }
</script>

<form on:submit|preventDefault={sendEmail}>
    <input bind:value={email} type="email" name="user_email" placeholder="Send email & recieve SPAM" />
    <input type="submit" value="Send!" />
</form>