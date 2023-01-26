<script>
  import { useNavigate, useLocation } from "svelte-navigator";
  import { authenticated } from "../../store/global.js";
  import { notifications } from "../../toastr/notifications.js";

  const navigate = useNavigate();
  const location = useLocation();

  $: if (!$authenticated) {
    notifications.danger("Not authorized to enter!", 5000)
    navigate("/", {
      state: { from: $location.pathname },
      replace: true,
    });
  }
</script>

{#if $authenticated}
  <slot />
{/if}
