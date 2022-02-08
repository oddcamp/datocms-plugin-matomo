import { RenderItemFormSidebarPanelCtx } from "datocms-plugin-sdk";
import { Canvas } from "datocms-react-ui";
import styles from "./styles.module.css";

type PropTypes = {
  ctx: RenderItemFormSidebarPanelCtx;
};

export default function SidebarLink({ ctx }: PropTypes) {
  const modelMatomoSite = ctx.plugin.attributes.parameters[`matomo-site`];

  const modelMatomoUrlPattern =
    ctx.plugin.attributes.parameters[
      `${ctx.itemType.attributes.name}-urlPattern`
    ];

  const modelMatomoSlugField: any =
    ctx.plugin.attributes.parameters[
      `${ctx.itemType.attributes.name}-slugField`
    ];

  const modelMatomoSlug =
    modelMatomoSlugField &&
    modelMatomoSlugField.value &&
    ctx.item &&
    ctx.item.attributes[modelMatomoSlugField.value];

  return (
    <Canvas ctx={ctx}>
      {modelMatomoSite && modelMatomoUrlPattern && modelMatomoSlug ? (
        <a
          className={styles["Matomo-link"]}
          target="_blank"
          href={`https://matomo.io/${modelMatomoSite}${modelMatomoUrlPattern}${modelMatomoSlug
            .toLowerCase()
            .replaceAll(` `, `_`)}`}
          rel="noreferrer"
        >
          {ctx.item && `View in Matomo`}
        </a>
      ) : (
        <p>
          No pattern, site or slug available for this model, add it in Matomo
          plugin settings
        </p>
      )}
    </Canvas>
  );
}
