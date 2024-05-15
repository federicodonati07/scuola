import React from 'react'
import TitlePage from '@/components/TitlePage'
import { ThemeProvider } from '@/components/theme-provider'
import HomeCard from '@/components/HomeCard'
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

const Home = () => {
  return (
    <div>
      <TitlePage title="LICEO TALETE" subtext="Studenti - Home"></TitlePage>

      <div className='z-1 fixed h-3/6 inset-0 flex justify-center items-center'>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
          <Link href="/eventi">
            <div className='transition-all duration-75 m-3 text-left hover:border-l-4 rounded-xl border-slate-200 max-w-md'>
              <HomeCard title="Gli Eventi del Talete" description="per tutti gli studenti del Liceo Talete di Roma" content="Comprendi meglio quali sono le attività che caratterizzano l'anno scolastico." contentSecond="Accedi alla sezione eventi per rimanere aggiornato" footer="">
              </HomeCard>
            </div>
          </Link>
          <Link href="/annunci">
            <div className='transition-all duration-75 m-3 text-center hover:border-y-4 rounded-xl border-slate-200 max-w-md'>
              <HomeCard title="Bacheca degli Annunci" description="per tutti gli studenti del Liceo Talete di Roma" content="Rimani sempre informato sulla vita scolastica senza perderti alcuna notizia importante" contentSecond="Accedi alla sezione annunci per rimanere aggiornato" footer="">
              </HomeCard>
            </div>
          </Link>
          <Link href="/voti">
            <div className='transition-all duration-75 m-3 text-right hover:border-r-4 rounded-xl border-slate-200 max-w-md'>
              <HomeCard title="Reverse" description="per tutti gli studenti del Liceo Talete di Roma" content="Qui non saranno i professori a votare gli alunni, " contentSecond=" infatti potrai lasciare una valutazione al tuo professore preferito" footer="">
              </HomeCard>
            </div>
          </Link>
        </ThemeProvider>
      </div>
    </div>
  )
}

export default Home