import * as angular from 'angular'
import * as angularMaterial from 'angular-material'

const raiz ="./componentes/"
const nombreComponente = 'configuracion'


angular.module(nombreComponente, ['ngMaterial'])
    .component(nombreComponente, {
        templateUrl: `${raiz}${nombreComponente}/${nombreComponente}.html`
    })

export default nombreComponente