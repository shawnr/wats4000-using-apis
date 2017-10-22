import Vue from 'vue'
import Router from 'vue-router'
import Rhymesaurus from '@/components/Rhymesaurus'
import RhymeAdjective from '@/components/RhymeAdjective'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Rhymesaurus',
      component: Rhymesaurus
    },
    {
      path: '/rhyme-adjective',
      name: 'RhymeAdjective',
      component: RhymeAdjective
    }
  ]
})
