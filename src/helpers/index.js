import Vue from 'vue'

const countObjectProperties = (obj) => {
  return typeof obj === 'object' ? Object.keys(obj).length : 0
}

const appendChildToParentMutationMaker = ({ parent, child }) => {
  return (state, { parentId, childId }) => {
    const resource = state[parent][parentId]
    // if resource doens't have posts property, intialize empty one
    if (!resource[child]) {
      Vue.set(resource, child, {})
    }
    Vue.set(resource[child], childId, childId)
  }
}

export {
  countObjectProperties,
  appendChildToParentMutationMaker
}
