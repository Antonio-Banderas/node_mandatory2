<script>
    // @ts-nocheck

    // --- store & toastr --- //
    import { BASE_URL, authenticated } from "../store/global";
    import { notifications } from "../toastr/notifications";

    const isAuthenticated = $authenticated;

    // --- login --- //
    let password;
    async function login(password) {
        console.log("sending in: ", password);
        await fetch($BASE_URL + "/login/api/login", {
            credentials: "include",
            method: "POST",
            body: JSON.stringify({ password }),
            headers: { "content-type": "application/json" },
        }).then((response) => {
            if (response.ok) {
                $authenticated = true;
                notifications.success("Logged in!", 2500);
            } else {
                notifications.warning("ERROR login!", 2500);
            }
        });
    }

    // --- logout --- //
    async function logout() {
        await fetch($BASE_URL + "/login/api/logout", {
            credentials: "include",
            method: "POST",
        }).then((response) => {
            if (response.ok) {
                $authenticated = false;
                notifications.success("Logged out!", 2500);
            } else {
                notifications.warning("ERROR logout!", 2500);
            }
        });
    }
</script>

{#if !isAuthenticated}
    <div class="login">
        <h3>Login:</h3>
        <form on:submit|preventDefault={login(password)}>
            <input
                bind:value={password}
                type="password"
                name="admin_password"
                placeholder="password"
            />
            <input type="submit" value="Send" />
        </form>
    </div>
{/if}

{#if isAuthenticated}
    <div class="logout">
        <h3>Welcome administrator.</h3>
        <button class="card-button" on:click={logout}>Logout now</button>
    </div>
{/if}