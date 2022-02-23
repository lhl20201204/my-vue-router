let app = null

import  {h, reactive} from 'vue'

export function createWebHistory (options) {
    return true
}



class MyHistory {
    constructor(options) {
        this.current = null
    }
}


class MyRouter {
    constructor(options) {
        if (options.history) {
            this.history = reactive(new MyHistory())
        }

        if (options.routes) {
            this.routes = this.transform(options.routes)
        }

        window.addEventListener('load',()=>{
            this.history.current = location.pathname
        })
        window.addEventListener("popstate",()=>{
            this.history.current = location.pathname
        })
       
    }

    transform(routes, preFix='') {
        return routes.reduce( (o,{path, component, children }) => {
         o[preFix + path] = component
         return {...o, ...this.transform(children || [], preFix + path+'/')}
        }, {})
    }

     push(path) {
       this.history.current = path
       location.pathname = path
     }

    install(vm) {
     console.log('install', vm)  
     app = vm
     app.provide('router', this)
     app.config.globalProperties.$router = this
     app.component('my-router-link', {
        props: ['to'],
        render () {
            return h('span',{attrs:{href:this.to}, onclick:()=>{
                this.$router.history.current = this.to
                location.pathname = this.to
                }
            },this.$slots)
         }
      })

     

     const getComp = ()=> {
         const comp = []
         let path = this.history.current 
         const routes = this.routes
         while(path) {
            if (Reflect.has(routes,path)) {
                comp.unshift(routes[path])
            }
            path = path.slice(0, path.lastIndexOf('/'))
         }
         return comp
     }

     app.component('my-router-view', {
        render () {
         this.isRouterView = true
         const comp = getComp()
         let cur = this
         let index = 0
         while(cur) {
           if (cur.isRouterView)
           {
             index ++
           }
           cur = cur.$parent
         }
         return h(comp[index-1] || {
            render(){
                return <div></div>
            }
         })
        }
     })
    }
}

export function createRouter (options) {
    return new MyRouter(options)
}