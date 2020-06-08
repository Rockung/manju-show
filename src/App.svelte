<script>
  import { onMount, afterUpdate } from "svelte";

  import { get_file } from "./utils/network";
  import { parseAndTransform, WebSlides } from "./show";

  let contents;

  onMount(async () => {
    let markdown = await get_file("./ppt.md");
    contents = parseAndTransform(markdown);
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
