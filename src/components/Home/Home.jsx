import React, { useEffect } from 'react'
import './Home.css'
import * as THREE from 'three'
import moonImage from "../../images/moon.jpg"
import venusImage from "../../images/venus.jpg"
import spaceImage from "../../images/space.jpg"
import { Typography } from '@mui/material'
import TimeLine from '../TimeLine/TimeLine'
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si"
import YoutubeCard from '../YoutubeCard/YoutubeCard'


const Home = () => {
  
  useEffect( ()=>{
    const textureLoader = new THREE.TextureLoader()
    const moonTexture = textureLoader.load(moonImage)
    const venusTexture = textureLoader.load(venusImage)
    const spaceTexture = textureLoader.load(spaceImage)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.set(4, 4, 8)
  
    const canvas = document.querySelector('.homeCanvas')
    const render = new THREE.WebGL1Renderer({ canvas: canvas })
    
    const moonGeometry = new THREE.SphereGeometry(2, 64, 64)
    const moonMaterial = new THREE.MeshStandardMaterial({map: moonTexture})
    const moon = new THREE.Mesh(moonGeometry, moonMaterial)

    const venusGeometry = new THREE.SphereGeometry(3, 64, 64)
    const venusMaterial = new THREE.MeshBasicMaterial({map: venusTexture})
    const venus = new THREE.Mesh(venusGeometry, venusMaterial)
    venus.position.set(8, 5, 5);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    const pointLight2 = new THREE.PointLight(0xffffff, 0.1);

    pointLight.position.set(8, 5, 5)
    pointLight2.position.set(-8, -5, -5)

    const lightHelper = new THREE.PointLightHelper(pointLight)
    
    scene.add(moon)
    scene.add(venus)
    scene.add(pointLight)
    scene.add(pointLight2)
    scene.add(lightHelper)
    scene.background = spaceTexture

    const constSpeed = 0.01
    window.addEventListener('mousemove', (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.y += constSpeed
        moon.rotation.x -= constSpeed
        venus.rotation.x -= constSpeed
        venus.rotation.y += constSpeed
      }

      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed
        moon.rotation.y -= constSpeed
        venus.rotation.x -= constSpeed
        venus.rotation.y -= constSpeed
      }

      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed
        moon.rotation.y += constSpeed
        venus.rotation.x -= constSpeed
        venus.rotation.y += constSpeed
      }

      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed
        moon.rotation.y -= constSpeed
        venus.rotation.x -= constSpeed
        venus.rotation.y -= constSpeed
      }
    })
    
    const animation = () =>{
      requestAnimationFrame(animation)
      moon.rotation.y += 0.01
      render.setSize(window.innerWidth, window.innerHeight)
      render.render(scene, camera)
    }

    animation()
  
  }, [])
  
  return (
    <div className='home'>
        <canvas className='homeCanvas' />
        <div className='homeContainer'>
          <Typography variant='h3'>TIMELINE</Typography>
          <TimeLine timelines = {[1, 2, 3, 4]} />
        </div>
        <div className='homeSkills'>
          <Typography variant='h3'>SKILLS</Typography>
          <div className='homeCubeSkills'>
            <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
              <img src='https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg' alt="Face1" />
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
              <img src='https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg' alt="Face2" />
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
              <img src='https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg' alt="Face3" />
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
              <img src='https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg' alt="Face4" />
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
              <img src='https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg' alt="Face5" />
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
              <img src='https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg' alt="Face6" />
            </div>
          </div>
          <div className='cubeShadow' />
          <div className="homeskillsBox" id="homeskillsBox">
            <SiCplusplus />
            <SiHtml5 />
            <SiCss3 />
            <SiJavascript />
            <SiMongodb />
            <SiExpress />
            <SiReact />
            <SiNodedotjs />
            <SiThreedotjs />
          </div>
        </div>
        <div className='homeYoutube'>
          <Typography variant='h3'>YOUTUBE VIDEO</Typography>
          <div className='homeYoutubeWrapper'>
            <YoutubeCard />
          </div>
        </div>
    </div>
  )
}

export default Home