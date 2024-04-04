const pluginRss = require("@11ty/eleventy-plugin-rss"); // needed for absoluteUrl feature
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

// Base setup for builds, needed for og tags and correct image paths
// (mostly for github pages deployment, see build-deploy.yaml)
const baseUrl = process.env.BASE_URL || 'https://litlab.stanford.edu/';
// e.g. 'https://mandrasch.github.io/'
const pathPrefix = process.env.PATH_PREFIX || '';
// e.g. '/11ty-plain-boostrap5/'
console.log('baseUrl is set to ...', baseUrl);
console.log('pathPrefix is set to ...', pathPrefix);

// will be accessible in all templates via
// see "eleventyConfig.addGlobalData("site", globalData);"" below
// related: https://github.com/11ty/eleventy/issues/1641
const globalSiteData = {
  title: "Stanford Literary Lab",
  description: "The Stanford Literary Lab is a research collective that applies computational criticism, in all its forms, to the study of literature.",
  locale: 'en',
  lang: 'en',
  baseUrl: baseUrl,
  pathPrefix: pathPrefix,
};
const { DateTime } = require("luxon");

// https://www.11ty.dev/docs/plugins/image/#use-this-in-your-templates
const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes = "100vw") {
  if (alt === undefined) {
    // You bet we throw an error on missing alt (alt="" works okay)
    throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
  }

  // TODO: pathPrefix must be '/path/', check existence of trailing slash?!
  let metadata = await Image(src, {
    widths: [600, 1200],
    formats: ['webp', 'jpeg'],
    urlPath: `${pathPrefix}img`,
    // outputDir: "./img/" is default
    outputDir: './_site/img/' // passthrough below didn't work, write to output dir by now

  });

  let lowsrc = metadata.jpeg[0];
  let highsrc = metadata.jpeg[metadata.jpeg.length - 1];

  return `<picture>
    ${Object.values(metadata).map(imageFormat => {
    return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat.map(entry => entry.srcset).join(", ")}" sizes="${sizes}">`;
  }).join("\n")}
      <img
        src="${lowsrc.url}"
        width="${highsrc.width}"
        height="${highsrc.height}"
        alt="${alt}"
        loading="lazy"
        decoding="async">
    </picture>`;
}

  

module.exports = function (eleventyConfig) {
eleventyConfig.addPlugin(pluginRss);
eleventyConfig.addPassthroughCopy("src/CNAME");

eleventyConfig.addPassthroughCopy({ "src/assets/pdf/LiteraryLabPamphlet1.pdf": "./LiteraryLabPamphlet1.pdf" });
eleventyConfig.addPassthroughCopy({ "src/assets/pdf/LiteraryLabPamphlet2.pdf": "./LiteraryLabPamphlet2.pdf" });
eleventyConfig.addPassthroughCopy({ "src/assets/pdf/LiteraryLabPamphlet3.pdf": "./LiteraryLabPamphlet3.pdf" });
eleventyConfig.addPassthroughCopy({ "src/assets/pdf/LiteraryLabPamphlet4.pdf": "./LiteraryLabPamphlet4.pdf" });
eleventyConfig.addPassthroughCopy({ "src/assets/pdf/LiteraryLabPamphlet5.pdf": "./LiteraryLabPamphlet5.pdf" });
eleventyConfig.addPassthroughCopy({ "src/assets/pdf/LiteraryLabPamphlet6.pdf": "./LiteraryLabPamphlet6.pdf" });
eleventyConfig.addPassthroughCopy({ "src/assets/pdf/LiteraryLabPamphlet7.pdf": "./LiteraryLabPamphlet7.pdf" });
eleventyConfig.addPassthroughCopy({ "src/assets/pdf/LiteraryLabPamphlet8.pdf": "./LiteraryLabPamphlet8.pdf" });
eleventyConfig.addPassthroughCopy({ "src/assets/pdf/LiteraryLabPamphlet9.pdf": "./LiteraryLabPamphlet9.pdf" });
eleventyConfig.addPassthroughCopy({ "src/assets/pdf/LiteraryLabPamphlet10.pdf": "./LiteraryLabPamphlet10.pdf" });
eleventyConfig.addPassthroughCopy({ "src/assets/pdf/LiteraryLabPamphlet11.pdf": "./LiteraryLabPamphlet11.pdf" });
eleventyConfig.addPassthroughCopy({ "src/assets/pdf/LiteraryLabPamphlet12.pdf": "./LiteraryLabPamphlet12.pdf" });
eleventyConfig.addPassthroughCopy({ "src/assets/pdf/LiteraryLabPamphlet13.pdf": "./LiteraryLabPamphlet13.pdf" });
eleventyConfig.addPassthroughCopy({ "src/assets/pdf/LiteraryLabPamphlet14.pdf": "./LiteraryLabPamphlet14.pdf" });
eleventyConfig.addPassthroughCopy({ "src/assets/pdf/LiteraryLabPamphlet15.pdf": "./LiteraryLabPamphlet15.pdf" });
eleventyConfig.addPassthroughCopy({ "src/assets/pdf/LiteraryLabPamphlet16.pdf": "./LiteraryLabPamphlet16.pdf" });
eleventyConfig.addPassthroughCopy({ "src/assets/pdf/LiteraryLabPamphlet17.pdf": "./LiteraryLabPamphlet17.pdf" });


	
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Set site title
  eleventyConfig.addGlobalData("site", globalSiteData);

  // Add plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Copy dist/ files from laravel mix
  eleventyConfig.addPassthroughCopy("dist/"); // path is relative from root

  // Copy (static) files to output (_site)
  eleventyConfig.addPassthroughCopy("src/assets");

  // Copy transformed images
  // TODO: this is executed too soon? imgs not there?
  eleventyConfig.addPassthroughCopy("img/");

  // Important for watch: Eleventy will not add a watch for files or folders that
  // are in .gitignore (--> dist/),unless setUseGitIgnore is turned off. See this chapter:
  // https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets
  eleventyConfig.setUseGitIgnore(false);
  
  
  //Look up members
  eleventyConfig.addFilter("getMembers", (members,label) => {
  	let labels = label.split(',');
  	return members.filter(a => labels.includes(a.key));
  });
  

eleventyConfig.addFilter("postDate", (dateObj) => {
  return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
});

eleventyConfig.addFilter("numericDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
        zone: "UTC-07:00",
    }).setLocale('en').toISODate();
});

  // Watch for changes (and reload browser)
  eleventyConfig.addWatchTarget("./src/assets"); // normal (static) assets
  eleventyConfig.addWatchTarget("./dist") // laravel-mix output changes

  // RandomId function for IDs used by labelled-by
  // Thanks https://github.com/mozilla/nunjucks/issues/724#issuecomment-207581540
  // TODO: replace with addNunjucksGlobal? https://github.com/11ty/eleventy/issues/1498
  eleventyConfig.addFilter("generateRandomIdString", function (prefix) {
    return prefix + "-" + Math.floor(Math.random() * 1000000);
  });

  // eleventy-img config
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  
  //bibtex config
  
  
  eleventyConfig.addPairedShortcode("bibtex", require('eleventy-plugin-bibtex'));
  

  eleventyConfig.addFilter("filterCollectionByProject", (collection, project) =>
    collection.filter((item) => item.data.project == project)
  );

  // Base Config
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "includes", // this path is releative to input-path (src/)
		macros: "macros",
      layouts: "layouts", // this path is releative to input-path (src/)
      data: "data", // this path is releative to input-path (src/)
    },
    templateFormats: ["njk", "md", "html", "liquid"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    // important for github pages build (subdirectory):
    pathPrefix: pathPrefix
  };
};