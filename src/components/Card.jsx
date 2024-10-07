import React from "react";
import go from '../assets/go.svg'
import sqlite from '../assets/sqlite.svg'
import git from '../assets/git.svg'
import gorm from '../assets/gorm.svg'
import fiber from '../assets/fiber.svg'

import html from '../assets/hmtl.svg'
import css from '../assets/css.svg'
import ts from '../assets/ts.svg'
import react from '../assets/react.svg'
import sass from '../assets/sass.svg'
import tailwind from '../assets/tailwind.svg'
import vite from '../assets/vite.svg'

import { Code, BracketsCurly } from '@phosphor-icons/react'


function Card(){
    return(
        <div className='flex flex-row gap-8 flex-wrap justify-center'>
            <div className='flex flex-col items-center mt-5 w-60 rounded-2xl bg-[##f0f0f0] shadow-lg text-center p-8'>
                <BracketsCurly size={64} color="#53a8b2" weight='light' className='icon'/>
                <span className="text-xl font-bold text-blue">Backend</span>
                <p className="text-sm mb-2">Gosto de resolver problemas que envolvem logica</p>

                <span>Linguanges Familiares</span>
                <img src={go} alt="" className='go'/>

                <span>Dev Tools</span>
                <ul className="flex items-center justify-evenly list-none w-full">
                    <li><img src={sqlite} alt="" /></li>
                    <li><img src={git} alt="" /></li>
                    <li><img src={gorm} alt="" /></li>
                    <li><img src={fiber} alt="" /></li>
                </ul>
            </div>
            <div className='flex flex-col items-center mt-5 w-60 rounded-2xl bg-[##f0f0f0] shadow-lg text-center p-8'>
                <Code size={64} color="#53a8b2" weight='light' className='icon'/>
                <span className="text-xl font-bold text-blue">Frontend</span>
                <p className="text-sm mb-2">Gosto de transformar ideias em realidade usando codigo</p>

                <span>Linguanges Familiares</span>
                <div className='flex'>
                    <img src={html} alt="" />
                    <img src={css} alt="" />
                    <img src={ts} alt="" />
                </div>

                <span>Dev Tools</span>
                <ul className="flex items-center justify-evenly list-none w-full">
                    <li><img src={react} alt="" /></li>
                    <li><img src={sass} alt="" /></li>
                    <li><img src={tailwind} alt="" /></li>
                    <li><img src={vite} alt="" /></li>
                </ul>
            </div>
        </div>
    )
}
export default Card