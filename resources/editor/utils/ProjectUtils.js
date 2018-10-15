const uuidv4 = require("uuid/v4");

/**
 *
 * @param cfg
 * @returns {{title: (*|string), pages: {}, pagesOrder: Array, activePage: null, objects: {}, selectedObjectsIds: Array}}
 */
const getEmptyProject = cfg => {
  let project = {
    title: (cfg && cfg.title) || "Empty Project",
    pages: {},
    pagesOrder: [],
    activePage: null,
    objects: {},
    selectedObjectsIds: []
  };
  const emptyPage = getEmptyPage(cfg);
  return {
    ...project,
    pages: {
      [emptyPage.id]: emptyPage
    },
    pagesOrder: [emptyPage.id],
    activePage: emptyPage.id
  };
};

/**
 *
 * @param cfg
 * @returns {{id: *, width: (*|number), height: (*|number), objectsIds: Array, background: {type: string}}}
 */
const getEmptyPage = cfg => {
  return {
    id: uuidv4(),
    width: (cfg && cfg.width) || 1080,
    height: (cfg && cfg.height) || 1080,
    objectsIds: [],
    background: {
      type: "color"
    }
  };
};

const getEmptyObject = cfg => {
  let object = {
    id: uuidv4(),
    type: false
  };

  if (cfg && cfg.type) {
    switch (cfg.type) {
      case "image":
        return {
          ...object,
          type: cfg.type,
          width: cfg.width || 500,
          height: cfg.height || 500,
          left: cfg.left || 500,
          top: cfg.top || 500,
          src:
            "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg"
        };
    }
  }
};

const ProjectUtils = {
  getEmptyProject,
  getEmptyPage,
  getEmptyObject
};

module.exports = ProjectUtils;
