<script>
  import { onMount, afterUpdate } from "svelte";

  import { get_file } from "./utils/network";
  import { parseAndTransform, WebSlides } from "./show";

  let contents;

  onMount(async () => {
    let search = window.location.search;
    if (search.length > 0) {
      let markdown = await get_file(search.substring(1));
      contents = parseAndTransform(markdown);
    } else {
      contents = "No show available!";
    }
  });

  afterUpdate(async () => {
    const ws = new WebSlides({
      loop: false
    });
    window.wsInstance = ws;
  });
</script>

<style>

</style>

<div>
  <article id="webslides">
    {@html contents}
  </article>
</div>
