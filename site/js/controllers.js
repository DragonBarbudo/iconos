app.run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams){
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
}]);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'site/views/home.html',
      controller: 'SiteCtrl',
      stateName: 'Inicio'
    })
    .state('programas',{
      url:'/programas/:prg',
      templateUrl: 'site/views/programas.html',
      controller:'ProgramasCtrl',
      stateName: 'Programas de estudio'
    })
    .state('educacion-continua',{
      url:'/educacion-continua',
      templateUrl: 'site/views/educacion-continua.html',
      controller:'EducacionContinuaCtrl',
      stateName: 'Educación continua'
    })
    .state('cursos-empresariales',{
      url:'/cursos-empresariales',
      templateUrl: 'site/views/cursos-empresariales.html',
      controller:'SiteCtrl',
      stateName: 'Cursos empresariales'
    })
    .state('nuestros-docentes',{
      url:'/nuestros-docentes',
      templateUrl: 'site/views/nuestros-docentes.html',
      controller:'DocentesCtrl',
      stateName: 'Nuestros docentes'
    })
    .state('docente', {
      url: '/nuestros-docentes/:docente',
      templateUrl: 'site/views/docente.html',
      controller:'DocenteCtrl',
      stateName: 'Docente'
    })
    .state('portafolio-de-estudiantes', {
      url: '/portafolio-de-estudiantes',
      templateUrl: 'site/views/portafolio-de-estudiantes.html',
      controller:'EstudiantesCtrl',
      stateName: 'Portafolio de estudiantes'
    })
    .state('biblioteca-digital',{
      url:'/biblioteca-digital',
      templateUrl: 'site/views/biblioteca-digital.html',
      controller:'SiteCtrl',
      stateName: 'Biblioteca digital'
    })
    .state('noticias', {
      url: '/noticias',
      templateUrl: 'site/views/noticias.html',
      controller:'NoticiasCtrl',
      stateName: 'Noticias'
    })
    .state('noticia', {
      url: '/nota/:nota',
      templateUrl: 'site/views/noticias_nota.html',
      controller:'NotaCtrl',
      stateName: 'Noticias'
    })
    .state('investigacion', {
      url: '/investigacion',
      templateUrl: 'site/views/investigacion.html',
      controller:'InvestigacionCtrl',
      stateName: 'Investigación'
    })
    .state('documento', {
      url: '/investigacion/:documento',
      templateUrl: 'site/views/investigacion_documento.html',
      controller:'DocumentoCtrl',
      stateName: 'Investigación'
    })
    .state('galeria', {
      url: '/galeria',
      templateUrl: 'site/views/galeria.html',
      controller:'GaleriaCtrl',
      stateName: 'Galería digital'
    })
    .state('contacto', {
      url: '/contacto',
      templateUrl: 'site/views/contacto.html',
      controller:'SiteCtrl',
      stateName: 'Contacto'
    })
    .state('aviso-de-privacidad',{
      url:'/aviso-de-privacidad',
      templateUrl: 'site/views/aviso-de-privacidad.html',
      controller:'SiteCtrl',
      stateName: 'Aviso de privacidad'
    })
    .state('administrador',{
      url:'/administrador',
      templateUrl: 'site/views/administrador.html',
      controller:'AdministradorCtrl',
      stateName: 'Administrador'
    });

});


app.config(function($disqusProvider){
    $disqusProvider.setShortname('iconos');
 });

app.config(function($disqusProvider, $locationProvider){
      $locationProvider.hashPrefix('!');
   })

app.controller('SiteCtrl', ['$scope', function($scope){
  postplugins();
}]);

app.controller('ProgramasCtrl', ['$scope', '$rootScope', '$stateParams', '$http', function($scope, $rootScope, $stateParams, $http){
  $scope.slug = $stateParams.prg;
  $http.get('site/dbase/programas.php?clave='+$scope.slug).then(function(res){
    $scope.datos = res.data;

    $rootScope.$state.current.stateName = res.data.nombre;

    $scope.descripcionMD = $scope.datos.descripcion;
    $scope.objetivosMD = $scope.datos.objetivos_particulares;
    $scope.perfilMD = $scope.datos.perfil_de_ingreso;
    $scope.planMD = $scope.datos.plan;
    $scope.requisitosMD = $scope.datos.requisitos;
    postplugins();
  });
}]);

app.controller('NoticiasCtrl', ['$scope', '$stateParams', '$http', function($scope, $stateParams, $http){
  closeMenu();
  $scope.slug = $stateParams.prg;
  $http.get('site/dbase/noticias.php?all').then(function(res){
    $scope.datos = res.data;
    postplugins();
  });
  $scope.updateSVG = function(){
    setTimeout(function(){
    createSVGs();
    }, 1000);
  }
}]);

app.controller('NotaCtrl', ['$scope', '$rootScope', '$stateParams', '$http', function($scope, $rootScope, $stateParams, $http){
  $scope.nota = $stateParams.nota;
  $http.get('site/dbase/noticias.php?id='+$scope.nota).then(function(res){
    $scope.datos = res.data;
    $rootScope.$state.current.stateName = res.data.titulo;

    $scope.descripcionMD = $scope.datos.descripcion;
    $scope.texto1MD = $scope.datos.texto1;
    $scope.texto2MD = $scope.datos.texto2;

    postplugins();

  });
}]);



app.controller('InvestigacionCtrl', ['$scope', '$stateParams', '$http', function($scope, $stateParams, $http){
  closeMenu();
  $scope.slug = $stateParams.prg;
  $http.get('site/dbase/investigacion.php?all').then(function(res){
    $scope.datos = res.data;
    postplugins();
  });
}]);

app.controller('DocumentoCtrl', ['$scope', '$rootScope', '$stateParams', '$http', function($scope, $rootScope, $stateParams, $http){
  $scope.documento = $stateParams.documento;
  $http.get('site/dbase/investigacion.php?id='+$scope.documento).then(function(res){
    $scope.datos = res.data;
    $rootScope.$state.current.stateName = res.data.titulo;
    $scope.justificacionMD = $scope.datos.justificacion;
    $scope.objetivosMD = $scope.datos.objetivos;
    $scope.hipotesisMD = $scope.datos.hipotesis;
    postplugins();
  });
}]);




app.controller('DocentesCtrl', ['$scope', '$stateParams', '$http', function($scope, $stateParams, $http){
  closeMenu();
  $scope.slug = $stateParams.prg;
  $http.get('site/dbase/docentes.php?all').then(function(res){
    $scope.datos = res.data;
    postplugins();
  });
}]);

app.controller('DocenteCtrl', ['$scope', '$rootScope', '$stateParams', '$http', function($scope, $rootScope, $stateParams, $http){
  $scope.docente = $stateParams.docente;
  $http.get('site/dbase/docentes.php?id='+$scope.docente).then(function(res){
    $scope.datos = res.data;
    $rootScope.$state.current.stateName = res.data.nombre;
    $scope.curriculumMD = $scope.datos.curriculum;
    postplugins();
    setTimeout(function(){
      unslickall();
      buildsliders();
    }, 3000);
  });
}]);



app.controller('EducacionContinuaCtrl', ['$scope', '$stateParams', '$http', function($scope, $stateParams, $http){
  closeMenu();
  $scope.counter = 0;
  $scope.slug = $stateParams.prg;
  $http.get('site/dbase/educacion-continua.php?all').then(function(res){
    $scope.datos = res.data;
    postplugins();
    $scope.updateSVG = function(){
      $scope.counter++;
      console.log($scope.counter);
      if($scope.counter==2){
        setTimeout(function(){
          createSVGs();
          dateRead();
        }, 1000);
      }
    }
  });
}]);





app.controller('GaleriaCtrl', ['$scope', '$stateParams', '$http', function($scope, $stateParams, $http){
  closeMenu();
  $scope.counter = 0;
  $scope.slug = $stateParams.prg;
  $http.get('files/galeria/').then(function(res){
    $scope.datos = res.data;
    postplugins();
  });

  $scope.updateSVG = function(){
    $scope.counter++;
    if($scope.counter==4){
      setTimeout(function(){
        createSVGs();
        unslickall();
        buildsliders();
        modalboxinit();
      }, 1000);
    }
  }

}]);








app.controller('AdministradorCtrl', ['$scope', '$stateParams', '$http', function($scope, $stateParams, $http){
  $scope.slug = $stateParams.prg;
  $http.get('site/dbase/administrador.php?all').then(function(res){
    $scope.datos = res.data;
    postplugins();
  });

  $scope.update = function(){
    $http.get('site/dbase/administrador.php?type='+$scope.selector).then(function(res){
      $scope.bean = res.data;
      $scope.formulario = {};
    });
  }

  $scope.addNew = function(){
    console.log('Agregadou | '+$scope.newField);
    $scope.bean[$scope.newField] = " ";
    console.log($scope.bean);
  }


  $scope.submitForm = function(){
      var config = {
        params: {
          add : $scope.selector,
          formulario : $scope.formulario
        }
      };
      $http.get('site/dbase/administrador.php', config).then(function(res){
          console.log(res.data);
          $scope.bean=null;
          $scope.selector=null;
        });
  }


}]);
