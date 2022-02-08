import { RenderItemFormSidebarPanelCtx } from "datocms-plugin-sdk";
import { Canvas } from "datocms-react-ui";
import styles from "./styles.module.css";

type PropTypes = {
  ctx: RenderItemFormSidebarPanelCtx;
};

export default function SidebarLink({ ctx }: PropTypes) {
  const date = new Date();
  date.setDate(date.getDate() - 1);

  const modelMatomoHost = ctx.plugin.attributes.parameters[`matomo-host`];
  const modelMatomoSite = ctx.plugin.attributes.parameters[`matomo-site`];
  const modelMatomoSiteId = ctx.plugin.attributes.parameters[`matomo-siteId`];

  const modelMatomoUrlPattern = (
    (ctx.plugin.attributes.parameters[
      `${ctx.itemType.attributes.name}-urlPattern`
    ] as string) || ``
  )
    .replace(/(idSite=(.*?))&/g, `idSite=${modelMatomoSiteId}&`)
    .replace(
      /(date=(.{10}?))&/g,
      `date=${date.getFullYear()}-${String(date.getMonth()).padStart(
        2,
        `0`
      )}-${String(date.getDate()).padStart(2, `0`)}&`
    );

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
      {modelMatomoHost &&
      modelMatomoSite &&
      modelMatomoSiteId &&
      modelMatomoUrlPattern &&
      modelMatomoSlug ? (
        <a
          className={styles["matomo-link"]}
          target="_blank"
          href={`https://${modelMatomoHost}.matomo.cloud/${modelMatomoUrlPattern}${modelMatomoSite}$2F${modelMatomoSlug
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
