
import {observable} from 'mobx';

class AppStore{
    @observable time = '2019'
    @observable todos = []
}

const store = new AppStore()

export default store