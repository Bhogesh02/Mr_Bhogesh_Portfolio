import adobeXd from '../Images/svg/skills/adobe-xd.svg';
import adobeaudition from '../Images/svg/skills/adobeaudition.svg';
import afterEffects from '../Images/svg/skills/after-effects.svg';
import angular from '../Images/svg/skills/angular.svg';
import aws from '../Images/svg/skills/aws.svg';
import azure from '../Images/svg/skills/azure.svg';
import blender from '../Images/svg/skills/blender.svg';
import bootstrap from '../Images/svg/skills/bootstrap.svg';
import bulma from '../Images/svg/skills/bulma.svg';
import c from '../Images/svg/skills/c.svg';
import canva from '../Images/svg/skills/canva.svg';
import capacitorjs from '../Images/svg/skills/capacitorjs.svg';
import coffeescript from '../Images/svg/skills/coffeescript.svg';
import cplusplus from '../Images/svg/skills/cplusplus.svg';
import csharp from '../Images/svg/skills/csharp.svg';
import css from '../Images/svg/skills/css.svg';
import dart from '../Images/svg/skills/dart.svg';
import deno from '../Images/svg/skills/deno.svg';
import django from '../Images/svg/skills/django.svg';
import docker from '../Images/svg/skills/docker.svg';
import fastify from '../Images/svg/skills/fastify.svg';
import figma from '../Images/svg/skills/figma.svg';
import firebase from '../Images/svg/skills/firebase.svg';
import flutter from '../Images/svg/skills/flutter.svg';
import gcp from '../Images/svg/skills/gcp.svg';
import gimp from '../Images/svg/skills/gimp.svg';
import git from '../Images/svg/skills/git.svg';
import go from '../Images/svg/skills/go.svg';
import graphql from '../Images/svg/skills/graphql.svg';
import haxe from '../Images/svg/skills/haxe.svg';
import html from '../Images/svg/skills/html.svg';
import illustrator from '../Images/svg/skills/illustrator.svg';
import ionic from '../Images/svg/skills/ionic.svg';
import java from '../Images/svg/skills/java.svg';
import javascript from '../Images/svg/skills/javascript.svg';
import julia from '../Images/svg/skills/julia.svg';
import kotlin from '../Images/svg/skills/kotlin.svg';
import lightroom from '../Images/svg/skills/lightroom.svg';
import markdown from '../Images/svg/skills/markdown.svg';
import materialui from '../Images/svg/skills/materialui.svg';
import matlab from '../Images/svg/skills/matlab.svg';
import memsql from '../Images/svg/skills/memsql.svg';
import microsoftoffice from '../Images/svg/skills/microsoftoffice.svg';
import mongoDB from '../Images/svg/skills/mongoDB.svg';
import mysql from '../Images/svg/skills/mysql.svg';
import nextJS from '../Images/svg/skills/nextJS.svg';
import nginx from '../Images/svg/skills/nginx.svg';
import numpy from '../Images/svg/skills/numpy.svg';
import nuxtJS from '../Images/svg/skills/nuxtJS.svg';
import opencv from '../Images/svg/skills/opencv.svg';
import photoshop from '../Images/svg/skills/photoshop.svg';
import php from '../Images/svg/skills/php.svg';
import picsart from '../Images/svg/skills/picsart.svg';
import postgresql from '../Images/svg/skills/postgresql.svg';
import premierepro from '../Images/svg/skills/premierepro.svg';
import python from '../Images/svg/skills/python.svg';
import pytorch from '../Images/svg/skills/pytorch.svg';
import react from '../Images/svg/skills/react.svg';
import ruby from '../Images/svg/skills/ruby.svg';
import selenium from '../Images/svg/skills/selenium.svg';
import sketch from '../Images/svg/skills/sketch.svg';
import strapi from '../Images/svg/skills/strapi.svg';
import svelte from '../Images/svg/skills/svelte.svg';
import swift from '../Images/svg/skills/swift.svg';
import tailwind from '../Images/svg/skills/tailwind.svg';
import tensorflow from '../Images/svg/skills/tensorflow.svg';
import typescript from '../Images/svg/skills/typescript.svg';
import unity from '../Images/svg/skills/unity.svg';
import vitejs from '../Images/svg/skills/vitejs.svg';
import vue from '../Images/svg/skills/vue.svg';
import vuetifyjs from '../Images/svg/skills/vuetifyjs.svg';
import webix from '../Images/svg/skills/webix.svg';
import wolframalpha from '../Images/svg/skills/wolframalpha.svg';
import wordpress from '../Images/svg/skills/wordpress.svg';


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  let asset;
  switch (skillID) {
    case 'gcp':
      asset = gcp; break;
    case 'html':
      asset = html; break;
    case 'photoshop':
      asset = photoshop; break;
    case 'docker':
      asset = docker; break;
    case 'illustrator':
      asset = illustrator; break;
    case 'adobe xd':
      asset = adobeXd; break;
    case 'after effects':
      asset = afterEffects; break;
    case 'css':
      asset = css; break;
    case 'angular':
      asset = angular; break;
    case 'javascript':
      asset = javascript; break;
    case 'next js':
      asset = nextJS; break;
    case 'nuxt js':
      asset = nuxtJS; break;
    case 'react':
      asset = react; break;
    case 'svelte':
      asset = svelte; break;
    case 'typescript':
      asset = typescript; break;
    case 'vue':
      asset = vue; break;
    case 'bootstrap':
      asset = bootstrap; break;
    case 'bulma':
      asset = bulma; break;
    case 'capacitorjs':
      asset = capacitorjs; break;
    case 'coffeescript':
      asset = coffeescript; break;
    case 'memsql':
      asset = memsql; break;
    case 'mongodb':
      asset = mongoDB; break;
    case 'mysql':
      asset = mysql; break;
    case 'postgresql':
      asset = postgresql; break;
    case 'tailwind':
      asset = tailwind; break;
    case 'vitejs':
      asset = vitejs; break;
    case 'vuetifyjs':
      asset = vuetifyjs; break;
    case 'c':
      asset = c; break;
    case 'c++':
      asset = cplusplus; break;
    case 'c#':
      asset = csharp; break;
    case 'dart':
      asset = dart; break;
    case 'go':
      asset = go; break;
    case 'java':
      asset = java; break;
    case 'kotlin':
      asset = kotlin; break;
    case 'julia':
      asset = julia; break;
    case 'matlab':
      asset = matlab; break;
    case 'php':
      asset = php; break;
    case 'python':
      asset = python; break;
    case 'ruby':
      asset = ruby; break;
    case 'swift':
      asset = swift; break;
    case 'adobe audition':
      asset = adobeaudition; break;
    case 'aws':
      asset = aws; break;
    case 'deno':
      asset = deno; break;
    case 'django':
      asset = django; break;
    case 'firebase':
      asset = firebase; break;
    case 'gimp':
      asset = gimp; break;
    case 'git':
      asset = git; break;
    case 'graphql':
      asset = graphql; break;
    case 'lightroom':
      asset = lightroom; break;
    case 'materialui':
      asset = materialui; break;
    case 'nginx':
      asset = nginx; break;
    case 'numpy':
      asset = numpy; break;
    case 'opencv':
      asset = opencv; break;
    case 'premiere pro':
      asset = premierepro; break;
    case 'pytorch':
      asset = pytorch; break;
    case 'selenium':
      asset = selenium; break;
    case 'strapi':
      asset = strapi; break;
    case 'tensorflow':
      asset = tensorflow; break;
    case 'webix':
      asset = webix; break;
    case 'wordpress':
      asset = wordpress; break;
    case 'azure':
      asset = azure; break;
    case 'blender':
      asset = blender; break;
    case 'fastify':
      asset = fastify; break;
    case 'figma':
      asset = figma; break;
    case 'flutter':
      asset = flutter; break;
    case 'haxe':
      asset = haxe; break;
    case 'ionic':
      asset = ionic; break;
    case 'markdown':
      asset = markdown; break;
    case 'microsoft office':
      asset = microsoftoffice; break;
    case 'picsart':
      asset = picsart; break;
    case 'sketch':
      asset = sketch; break;
    case 'unity':
      asset = unity; break;
    case 'wolframalpha':
      asset = wolframalpha; break;
    case 'canva':
      asset = canva; break;
    default:
      asset = undefined;
  }
  const url = typeof asset === 'string' ? asset : asset && asset.src ? asset.src : '';
  return url;
}
