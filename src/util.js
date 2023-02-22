import { v4 as uuidv4 } from 'uuid'
import mohsenYeganehBehetGholMidamCover from './assets/img/covers/Mohsen-Yeganeh-Behet-Ghol-Midam.jpg'
import mohsenYeganehBehetGholMidamAudio from './assets/audio/Mohsen-Yeganeh-Behet-Ghol-Midam.mp3'
import xaniarKhosraviRiskCover from './assets/img/covers/Xaniar-Khosravi-Risk.jpg'
import xaniarKhosraviRiskAudio from './assets/audio/Xaniar-Khosravi-Risk.mp3'
import alirezaTalischiGhafCover from './assets/img/covers/Alireza-Talischi-Ghaf.jpg'
import alirezaTalischiGhafAudio from './assets/audio/Alireza-Talischi-Ghaf.mp3'
import haamimSiahSefidCover from './assets/img/covers/Haamim-Siah-Sefid.jpg'
import haamimSiahSefidAudio from './assets/audio/Haamim-Siah-Sefid.mp3'
import ashvanBadeManCover from './assets/img/covers/Ashvan-Bade-Man.jpg'
import ashvanBadeManAudio from './assets/audio/Ashvan-Bade-Man.mp3'
import mohsenChavoshiGandomgoonCover from './assets/img/covers/Mohsen-Chavoshi-Gandomgoon.jpg'
import mohsenChavoshiGandomgoonAudio from './assets/audio/Mohsen-Chavoshi-Gandomgoon.mp3'
import sirvanKhosraviBonbastCover from './assets/img/covers/Sirvan-Khosravi-Bonbast.jpg'
import sirvanKhosraviBonbastAudio from './assets/audio/Sirvan-Khosravi-Bonbast.mp3'
import homayounShajarianCheraRaftiCover from './assets/img/covers/Homayoun-Shajarian-Chera-Rafti.jpg'
import homayounShajarianCheraRaftiAudio from './assets/audio/Homayoun-Shajarian-Chera-Rafti.mp3'
import farzadFarzinCheraToCover from './assets/img/covers/Farzad-Farzin-Chera-To.jpg'
import farzadFarzinCheraToAudio from './assets/audio/Farzad-Farzin-Chera-To.mp3'
import behnamBaniKojayeInShahriCover from './assets/img/covers/Behnam-Bani-Kojaye-In-Shahri.jpg'
import behnamBaniKojayeInShahriAudio from './assets/audio/Behnam-Bani-Kojaye-In-Shahri.mp3'
import shadmehrAghiliTasvirCover from './assets/img/covers/Shadmehr-Aghili-Tasvir.jpg'
import shadmehrAghiliTasvirAudio from './assets/audio/Shadmehr-Aghili-Tasvir.mp3'
import siavashGhomayshiFereshtehCover from './assets/img/covers/Siavash-Ghomayshi-Fereshteh.jpg'
import siavashGhomayshiFereshtehAudio from './assets/audio/Siavash-Ghomayshi-Fereshteh.mp3'
import siamakAbbasiBebinCheghadrDoosetDaramCover from './assets/img/covers/Siamak-Abbasi-Bebin-Cheghadr-Dooset-Daram.jpg'
import siamakAbbasiBebinCheghadrDoosetDaramAudio from './assets/audio/Siamak-Abbasi-Bebin-Cheghadr-Dooset-Daram.mp3'
import rezaYazdaniKhateraatePinehBastehCover from './assets/img/covers/Reza-Yazdani-Khateraate-Pineh-Basteh.jpg'
import rezaYazdaniKhateraatePinehBastehAudio from './assets/audio/Reza-Yazdani-Khateraate-Pineh-Basteh.mp3'
import aliYasiniNadeGholCover from './assets/img/covers/Ali-Yasini-Nade-Ghol.jpg'
import aliYasiniNadeGholAudio from './assets/audio/Ali-Yasini-Nade-Ghol.mp3'
import amirAzimiDelamTangeCover from './assets/img/covers/Amir-Azimi-Delam-Tange.jpg'
import amirAzimiDelamTangeAudio from './assets/audio/Amir-Azimi-Delam-Tange.mp3'
import moeinZandiCheHeyfCover from './assets/img/covers/Moein-Zandi-Che-Heyf.jpg'
import moeinZandiCheHeyfAudio from './assets/audio/Moein-Zandi-Che-Heyf.mp3'
import majidRazaviManamCover from './assets/img/covers/Majid-Razavi-Manam.jpg'
import majidRazaviManamAudio from './assets/audio/Majid-Razavi-Manam.mp3'
import puzzleBandBeSaramZadehCover from './assets/img/covers/Puzzle-Band-Be-Saram-Zadeh.jpg'
import puzzleBandBeSaramZadehAudio from './assets/audio/Puzzle-Band-Be-Saram-Zadeh.mp3'
import mehdiYarahiAyneyeGhadiCover from './assets/img/covers/Mehdi-Yarahi-Ayneye-Ghadi.jpg'
import mehdiYarahiAyneyeGhadiAudio from './assets/audio/Mehdi-Yarahi-Ayneye-Ghadi.mp3'

export default function musicsList() {
  return [
    {
      id: uuidv4(),
      cover: mohsenYeganehBehetGholMidamCover,
      artist: 'Mohsen Yeganeh',
      name: 'Behet Ghol Midam',
      isFavorite: false,
      audio: mohsenYeganehBehetGholMidamAudio,
      duration: 0,
      played: 0
    },
    {
      id: uuidv4(),
      cover: xaniarKhosraviRiskCover,
      artist: 'Xaniar Khosravi',
      name: 'Risk',
      isFavorite: false,
      audio: xaniarKhosraviRiskAudio,
      duration: 0,
      played: 0
    },
    {
      id: uuidv4(),
      cover: alirezaTalischiGhafCover,
      artist: 'Alireza Talischi',
      name: 'Ghaf',
      isFavorite: false,
      audio: alirezaTalischiGhafAudio,
      duration: 0,
      played: 0
    },
    {
      id: uuidv4(),
      cover: haamimSiahSefidCover,
      artist: 'Haamim',
      name: 'Siah Sefid',
      isFavorite: false,
      audio: haamimSiahSefidAudio,
      duration: 0,
      played: 0
    },
    {
      id: uuidv4(),
      cover: ashvanBadeManCover,
      artist: 'Ashvan',
      name: 'Bade Man',
      isFavorite: false,
      audio: ashvanBadeManAudio,
      duration: 0,
      played: 0
    },
    {
      id: uuidv4(),
      cover: mohsenChavoshiGandomgoonCover,
      artist: 'Mohsen Chavoshi',
      name: 'Gandomgoon',
      isFavorite: false,
      audio: mohsenChavoshiGandomgoonAudio,
      duration: 0,
      played: 0
    },
    {
      id: uuidv4(),
      cover: sirvanKhosraviBonbastCover,
      artist: 'Sirvan Khosravi',
      name: 'Bonbast',
      isFavorite: false,
      audio: sirvanKhosraviBonbastAudio,
      duration: 0,
      played: 0
    },
    {
      id: uuidv4(),
      cover: homayounShajarianCheraRaftiCover,
      artist: 'Homayoon Shajarian',
      name: 'Chera Rafti',
      isFavorite: false,
      audio: homayounShajarianCheraRaftiAudio,
      duration: 0,
      played: 0
    },
    {
      id: uuidv4(),
      cover: farzadFarzinCheraToCover,
      artist: 'Farzad Farzin',
      name: 'Chera To',
      isFavorite: false,
      audio: farzadFarzinCheraToAudio,
      duration: 0,
      played: 0
    },
    {
      id: uuidv4(),
      cover: behnamBaniKojayeInShahriCover,
      artist: 'Behnam Bani',
      name: 'Kojaye In Shahri',
      isFavorite: false,
      audio: behnamBaniKojayeInShahriAudio,
      duration: 0,
      played: 0
    },
    {
      id: uuidv4(),
      cover: shadmehrAghiliTasvirCover,
      artist: 'Shadmehr Aghili',
      name: 'Tasvir',
      isFavorite: false,
      audio: shadmehrAghiliTasvirAudio,
      duration: 0,
      played: 0
    },
    {
      id: uuidv4(),
      cover: siavashGhomayshiFereshtehCover,
      artist: 'Siavash Ghomayshi',
      name: 'Fereshteh',
      isFavorite: false,
      audio: siavashGhomayshiFereshtehAudio,
      duration: 0,
      played: 0
    },
    {
      id: uuidv4(),
      cover: siamakAbbasiBebinCheghadrDoosetDaramCover,
      artist: 'Siamak Abbasi',
      name: 'Bebin Cheghadr Dooset Daram',
      isFavorite: false,
      audio: siamakAbbasiBebinCheghadrDoosetDaramAudio,
      duration: 0,
      played: 0
    },
    {
      id: uuidv4(),
      cover: rezaYazdaniKhateraatePinehBastehCover,
      artist: 'Reza Yazdani',
      name: 'Khateraate Pineh Basteh',
      isFavorite: false,
      audio: rezaYazdaniKhateraatePinehBastehAudio,
      duration: 0,
      played: 0
    },
    {
      id: uuidv4(),
      cover: aliYasiniNadeGholCover,
      artist: 'Ali Yasini',
      name: 'Nade Ghol',
      isFavorite: false,
      audio: aliYasiniNadeGholAudio,
      duration: 0,
      played: 0
    },
    {
      id: uuidv4(),
      cover: amirAzimiDelamTangeCover,
      artist: 'Amir Azimi',
      name: 'Delam Tange',
      isFavorite: false,
      audio: amirAzimiDelamTangeAudio,
      duration: 0,
      played: 0
    },
    {
      id: uuidv4(),
      cover: moeinZandiCheHeyfCover,
      artist: 'Moein Z',
      name: 'Che Heyf',
      isFavorite: false,
      audio: moeinZandiCheHeyfAudio,
      duration: 0,
      played: 0
    },
    {
      id: uuidv4(),
      cover: majidRazaviManamCover,
      artist: 'Majid Razavi',
      name: 'Manam',
      isFavorite: false,
      audio: majidRazaviManamAudio,
      duration: 0,
      played: 0
    },
    {
      id: uuidv4(),
      cover: puzzleBandBeSaramZadehCover,
      artist: 'Puzzle Band',
      name: 'Be Saram Zadeh',
      isFavorite: false,
      audio: puzzleBandBeSaramZadehAudio,
      duration: 0,
      played: 0
    },
    {
      id: uuidv4(),
      cover: mehdiYarahiAyneyeGhadiCover,
      artist: 'Mehdi Yarahi',
      name: 'Ayeneye Ghadi',
      isFavorite: false,
      audio: mehdiYarahiAyneyeGhadiAudio,
      duration: 0,
      played: 0
    }
  ]
}