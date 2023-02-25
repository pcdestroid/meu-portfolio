import React from 'react'
import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image';
import imgStoneForge from '../public/assets/images/forge.png';
import imgCarvao from '../public/assets/images/carvao.png';


const Forge = () => {
  const mostrarHome = () => {
    window.open('./app', '_self')
  }

  return (
    <>
      <Head>
        <title>Forja</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@700&family=Space+Mono&display=swap" rel="stylesheet" />
      </Head>

      <div class="main">

        <StoneForge />

        <button
          class="text-white border px-4 py-2 rounded-lg font-space-mono text-lg uppercase tracking-wide mt-8 hover:bg-white hover:text-gray-800 inline-block"
          type="button" onClick={mostrarHome}>Voltar
        </button>

      </div>
      { }
    </>
  )
}

function StoneForge() {
  return (
    <div>
      <FireCanvas />
    </div>
  )
}

function FireCanvas() {
  return (
    <div class="main">
      
      <div class="botoes">
        <button class="border px-4 py-2 rounded-lg font-space-mono text-lg uppercase tracking-wide mt-8 hover:bg-white hover:text-gray-800 inline-block" id="acenderFogo">Acender Fogo</button>
        <button class="border px-4 py-2 rounded-lg font-space-mono text-lg uppercase tracking-wide mt-8 hover:bg-white hover:text-gray-800 inline-block" id="reduzirFogo">Reduzir Fogo</button>
        <button class="border px-4 py-2 rounded-lg font-space-mono text-lg uppercase tracking-wide mt-8 hover:bg-white hover:text-gray-800 inline-block" id="apagarFogo">Apagar Fogo</button>
      </div>

      <ImagemCarvao />

      <div class="forja">

        <div id="fireCanvas"></div>

        <ImgStoneForge />

      </div>

    </div>

  )
}

function ImgStoneForge() {
  return (

    <Image src={imgStoneForge} class="stoneforge" alt="Forge Image" />

  );
}

function ImagemCarvao() {
  return (
    <Image src={imgCarvao} class="carvao" alt="Carvão Image" />
  );
}


export default Forge