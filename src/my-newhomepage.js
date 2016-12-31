<link rel="import" href="../bower_components/polymer/polymer.html">
<link rel="import" href="../bower_components/app-layout/app-scroll-effects/effects/parallax-background.html">
<link rel="import" href="../bower_components/app-layout/demo/sample-content.html">
<link rel="import" href="../bower_components/app-layout/app-box/app-box.html">
<link rel="import" href="../bower_components/parallax-container/parallax-container.html">





<dom-module id="my-homepage">
  <script src="../bower_components/threejs/build/three.js"></script>

  <template>

  <style is="custom-style">
  body {
      font-family: Arial;
      overflow: hidden;
      margin: 0px;
      padding: 0px;
    }
    parallax-container {
      font-size: 200%;
    }
    .title {
      text-align: center;
      position: absolute;
      left: 50%;
      top: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
    #group1 [layer="-1"]{
      background: red;
    }
    #group2{
      background: orange;
    }
    #group3 [layer="-2"]{
      background: green;
    }
    #group4 {
      background: orange;
    }


  </style>

<p>An example of <code>&lt;parallax-container&gt;</code>:</p>

<parallax-container>

<parallax-group id="group1" z=2>
  <parallax-layer>
    <div class="title">
      Base Layer
    </div>
  </parallax-layer>
  <parallax-layer layer="-1">
    <div class="title">
      Background Layer
    </div>
  </parallax-layer>
</parallax-group>

<parallax-group id="group2" z=3>
  <parallax-layer>
    <div id="test" class="title">
    </div>
  </parallax-layer>
  <parallax-layer layer=1>
    <div class="title">
      Foreground Layer
    </div>
  </parallax-layer>
</parallax-group>

<parallax-group id="group3" z=1>
  <parallax-layer>
    <div class="title">
      Base Layer
    </div>
  </parallax-layer>
  <parallax-layer layer=-2>
    <div class="title">
      Deep Background Layer
    </div>
  </parallax-layer>
  <parallax-layer layer=-1>
    <div class="title">
      Background Layer
    </div>
  </parallax-layer>
</parallax-group>

<parallax-group id="group4" z=2>
  <parallax-layer>
    <div class="title">
      Base Layer
    </div>
  </parallax-layer>
</parallax-group>

</parallax-container>




  </template>

  <script>
    Polymer({
      is: 'my-homepage',
      ready: function(){


        var container = Polymer.dom(this.root).querySelector('#test');
        console.log(container);

        window.addEventListener( 'resize', onWindowResize, false );


        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

        var renderer = new THREE.WebGLRenderer({alpha:true});
        renderer.setSize( window.innerWidth, window.innerHeight );
        container.appendChild( renderer.domElement );

        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshNormalMaterial();///THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );

        camera.position.z = 5;

        var render = function () {
        requestAnimationFrame( render );

        cube.rotation.x += 0.1;
        cube.rotation.y += 0.1;

        renderer.render(scene, camera);
        };

        function onWindowResize() {
  				camera.aspect = window.innerWidth / window.innerHeight;
  				camera.updateProjectionMatrix();
  				renderer.setSize( window.innerWidth, window.innerHeight );
			}

        render();

      }
    });
  </script>

</dom-module>
