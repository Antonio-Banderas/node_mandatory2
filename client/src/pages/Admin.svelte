<script>
    // --- store --- //
    import { BASE_URL } from "../store/global.js";

    // --- emails --- //
    async function fetchEmails() {
        const response = await fetch($BASE_URL + "/admin/getEmails");
        const data = await response.json();

        const emails = data.data;
        console.log(emails);

        if (response.ok) {
            return emails;
        }
    }

    // --- delete all emails --- //
    async function deleteEmails() {
        await fetch($BASE_URL + "/admin/deleteEmails", {
            credentials: "include",
            method: "DELETE",
        }).then((response) => {
            if (response.ok) {
                alert("You freed them!");
            } else {
                alert("Wrong credentials!");
            }
        });
    }
</script>

<button on:click={deleteEmails}>Free the souls 👻</button>

<p>List of our subjects:</p>
{#await fetchEmails()}
    <p>Loading...</p>
{:then items}
    {#each items as item}
        <p>{item}</p>
    {/each}
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}
