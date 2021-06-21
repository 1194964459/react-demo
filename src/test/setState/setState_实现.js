class Updater {
    constructor(){
        this.state = { 
            number : 0,
            name : 'test'
        }
        this.queue = []
    }

    setState(newState){
        this.queue.push(newState)
    }

    // React 自动会做
    flush(){
        for(let i = 0; i < this.queue.length; i++){
            // 若是对象
            let update = this.queue[i]
            if(typeof update == 'function'){
                // this.state = update(this.state)
                this.state = {...this.state, ...update(this.state)}
            }else{
                // this.state = update
                this.state = {...this.state, ...update}
            }
        }
    }
}

let updater = new Updater()

updater.setState({number: 1})
updater.setState({number: 2})
updater.setState({number: 3})
updater.setState(state => ({number:state.number + 1}))

updater.flush()

console.log(updater.state)