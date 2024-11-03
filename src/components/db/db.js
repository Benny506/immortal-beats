import { shuffleArr } from "../globals/globals"

export const allBeats = [
    //in hall && dance hall
    {
        id: 1,
        title: 'Avalon Ambience',
        category: 'In house. Dance hall',
        mp3: 'https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663927/immortal_beat/inhouse_dancehall/Avalon_Ambience_dbvjky.mp3'
    },
    {
        id: 2,
        title: 'Dance now',
        category: 'In house. Dance hall',
        mp3: 'https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663928/immortal_beat/inhouse_dancehall/Dance_now_ivgsee.mp3'
    },
    {
        id: 3,
        title: 'Say my name',
        category: 'In house. Dance hall',
        mp3: 'https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663928/immortal_beat/inhouse_dancehall/saymyname_s73zkx.mp3'
    },
    {
        id: 4,
        title: 'Undisputed',
        category: 'In house. Dance hall',
        mp3: 'https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663927/immortal_beat/inhouse_dancehall/Undisputed_iqbwax.mp3'
    },
    {
        id: 5,
        title: 'Tell me something',
        category: 'In house. Dance hall',
        mp3: 'https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663922/immortal_beat/inhouse_dancehall/tell_me_something_rjdglv.mp3'
    },
    {
        id: 6,
        title: 'Hee-hee',
        category: 'In house. Dance hall',
        mp3: 'https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663919/immortal_beat/inhouse_dancehall/Hee-hee_cse0ga.mp3'
    },
    {
        id: 7,
        title: 'Birds do fly',
        category: 'In house. Dance hall',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663918/immortal_beat/inhouse_dancehall/birds_do_fly_resh7a.mp3"
    },


    //afro
    {
        id: 8,
        title: `Ayra star x Wizkid type beat 'Roses'`,
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663933/immortal_beat/afro/Ayra_star_x_Wizkid_type_beat_Roses_uwv835.mp3"
    },
    {
        id: 9,
        title: `Omah lay type beat 'Girl for you'`,
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730664063/immortal_beat/afro/Omah_lay_type_beat_Girl_for_you_kt2exe.mp3"
    },
    {
        id: 10,
        title: `Omah lay type beat 'Vibration'`,
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730664082/immortal_beat/afro/Omah_lay_type_beat_Vibration_t0q1in.mp3"
    },
    {
        id: 11,
        title: 'Really like me',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730664126/immortal_beat/afro/Really_like_me_dhq01a.mp3"
    },
    {
        id: 12,
        title: `Wurld type beat 'Bonquet'`,
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730664166/immortal_beat/afro/Wurld_type_beat_Bonquet_hstmot.mp3"
    },    
    {
        id: 13,
        title: `Wizkid x Burna boy type beat 'street life'`,
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730664157/immortal_beat/afro/Wizkid_x_Burna_boy_type_beat_street_life_qzsaeo.mp3"
    },
    {
        id: 14,
        title: `Peace of mind`,
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730664129/immortal_beat/afro/Peace_of_mind_o5pgzw.mp3"
    },
    {
        id: 15,
        title: `Wizkid x MHD Type beat 'Musique'`,
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730664127/immortal_beat/afro/Wizkid_x_MHD_Type_beat_Musique_goi3to.mp3"
    },
    {
        id: 16,
        title: `Rema type beat 'Bambi'`,
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730664118/immortal_beat/afro/Rema_type_beat_Bambi_h8nyyf.mp3"
    },
    {
        id: 17,
        title: 'Saxy heaven',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730664114/immortal_beat/afro/Saxy_heaven_ax3pwp.mp3"
    },
    {
        id: 18,
        title: `Wizkid Skepta type beat 'Tell me baby'`,
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730664107/immortal_beat/afro/Wizkid_Skepta_type_beat_Tell_me_baby_d6ov5m.mp3"
    },
    {
        id: 19,
        title: 'Night cruise',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730664057/immortal_beat/afro/Night_cruise_gqgmnk.mp3"
    },
    {
        id: 20,
        title: 'Midnight party',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730664056/immortal_beat/afro/Midnight_party_mfwbov.mp3"
    },
    {
        id: 21,
        title: 'Olosho',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730664056/immortal_beat/afro/Olosho_jymrm5.mp3"
    },
    {
        id: 22,
        title: 'Nothing above you',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730664050/immortal_beat/afro/Nothing_above_you_c0o6dt.mp3"
    },
    {
        id: 23,
        title: 'Made up',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730664044/immortal_beat/afro/made_up_yuuvw2.mp3"
    },
    {
        id: 24,
        title: 'Love life',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730664039/immortal_beat/afro/Love_life_fwh5z2.mp3"
    },
    {
        id: 25,
        title: 'Love me',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730664033/immortal_beat/afro/Love_me_kie35z.mp3"
    },
    {
        id: 26,
        title: `Joeboy x Fireboy type beat 'don't break my heart`,
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730664019/immortal_beat/afro/Joeboy_x_Fireboy_type_beat_dont_break_my_heart_ye4x8s.mp3"
    },
    {
        id: 27,
        title: 'In tune',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730664000/immortal_beat/afro/In_tune_yajwyh.mp3"
    },
    {
        id: 28,
        title: `Joro type vk3`,
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663981/immortal_beat/afro/joro_type_vk3_qrondm.mp3"
    },
    {
        id: 29,
        title: 'Ginger',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663975/immortal_beat/afro/Ginger_oszvsd.mp3"
    },
    {
        id: 30,
        title: 'For comfort',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663967/immortal_beat/afro/For_comfort_bxij0m.mp3"
    },
    {
        id: 31,
        title: `Fireboy type beat 'Sunshine'`,
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663966/immortal_beat/afro/Fireboy_type_beat_Sunshine_es6uyv.mp3"
    },
    {
        id: 32,
        title: `Fireboy type beat 'piano_man'`,
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663944/immortal_beat/afro/Fireboy_type_beat_piano_man_lh0ugo.mp3"
    },
    {
        id: 33,
        title: 'Feel the same',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663942/immortal_beat/afro/feel_the_same_uiiqj8.mp3"
    },
    {
        id: 34,
        title: 'Bonjour',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663940/immortal_beat/afro/Bonjour_oebg5p.mp3"
    },
    {
        id: 35,
        title: 'Casio',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663937/immortal_beat/afro/Casio_cepek7.mp3"
    },
    {
        id: 36,
        title: 'Control',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663936/immortal_beat/afro/Control_jphc9a.mp3"
    },
    // {   SOLD!
    //     id: 37,
    //     title: 'Anger Issues',
    //     category: 'afro',
    //     mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663927/immortal_beat/afro/Anger_issues_sold_n6o7xx.mp3"
    // },


    //trap
    {
        id: 38,
        title: `Travis scott x Future x Metro boomin Type beat Type piece`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663906/immortal_beat/trap/Travis_scott_x_Future_x_Metro_boomin_Type_beat_Type_piece_z6jrri.mp3"
    },
    {
        id: 39,
        title: `Travis Scott x Don toliver type beat 'can't say'`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663891/immortal_beat/trap/Travis_Scott_x_Don_toliver_type_beat_cant_say_fj3p7k.mp3"
    },
    {
        id: 40,
        title: 'Timeless',
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663891/immortal_beat/trap/Timeless_ao2qdd.mp3"
    },
    {
        id: 41,
        title: `Playboi carti x Lil uzi type beat 'Still driftin'`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663890/immortal_beat/trap/Playboi_carti_x_Lil_uzi_type_beat_Still_driftin_cnecrv.mp3"
    },
    {
        id: 42,
        title: `Playboi carti x Kanye west type beat 'Ketamine Vulture'`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663881/immortal_beat/trap/Playboi_carti_x_Kanye_west_type_beat_Ketamine_Vulture_kiba60.mp3"
    },
    {
        id: 43,
        title: `Travis scott type beat 'fishing boat'`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663873/immortal_beat/trap/Travis_scott_type_beat_fishing_boat_gyhk9s.mp3"
    },
    {
        id: 44,
        title: 'Not okay',
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663872/immortal_beat/trap/Not_okay_nftckl.mp3"
    },
    {
        id: 45,
        title: `Playboi carti type beat 'Quater back'`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663865/immortal_beat/trap/Playboi_carti_type_beat_Quater_back_a9jxuh.mp3"
    },
    {
        id: 46,
        title: `Jack Harlow x Chris brown type beat 'I need you'`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663861/immortal_beat/trap/Jack_Harlow_x_Chris_brown_type_beat_I_need_you_ltar5l.mp3"
    },
    {
        id: 47,
        title: `Kendrick lamar x baby keem 'Not too late'`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663860/immortal_beat/trap/Kendrick_lamar_x_baby_keem_Not_too_late_sniemo.mp3"
    },
    {
        id: 48,
        title: `Lil Durk x King Von type beat 'Double tap'`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663858/immortal_beat/trap/Lil_Durk_x_King_Von_type_beat_Double_tap_fgqzjb.mp3"
    },
    {
        id: 49,
        title: 'Jazzy bap',
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663857/immortal_beat/trap/Jazzy_bap_suibho.mp3"
    },
    {
        id: 50,
        title: `Juice Wrld x Don toliver type beat 'Retro shi'`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663854/immortal_beat/trap/Juice_Wrld_x_Don_toliver_type_beat_Retro_shi_sxuwdb.mp3"
    },
    {
        id: 51,
        title: `J cole X J.I.D type beat 'Riany days'`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663845/immortal_beat/trap/J_cole_X_J.I.D_type_beat_Riany_days_mh73r8.mp3"
    },
    {
        id: 52,
        title: `Gunna type beat 'idk that bitch'`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663840/immortal_beat/trap/Gunna_type_beat_idk_that_bitch_xpts8i.mp3"
    },
    {
        id: 53,
        title: `Glo rilla x Megan thee stallion type beat 'good goodly moogly'`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663837/immortal_beat/trap/Glo_rilla_x_Megan_thee_stallion_type_beat_good_goodly_moogly_lsx8cz.mp3"
    },
    {
        id: 54,
        title: `Future x Metro boomin type beat 'Never trusted you'`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663834/immortal_beat/trap/Future_x_Metro_boomin_type_beat_Never_trusted_you_qjj8cd.mp3"
    },
    {
        id: 55,
        title: 'Get lit like me',
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663833/immortal_beat/trap/Get_lit_like_me_hnxf8n.mp3"
    },
    {
        id: 56,
        title: `Future type beat 'Too wick'`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663828/immortal_beat/trap/Future_type_beat_Too_wick_ycwyjy.mp3"
    },
    {
        id: 57,
        title: `Future x Metro type beat`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663821/immortal_beat/trap/Future_x_Metro_type_beat_ygzfxf.mp3"
    },
    {
        id: 58,
        title: 'Focus vibey beat',
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663814/immortal_beat/trap/Focus_vibey_beat_v2awyn.mp3"
    },
    {
        id: 59,
        title: `Future type beat 'messy'`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663818/immortal_beat/trap/Future_type_beat_messy_dpiknq.mp3"
    },
    {
        id: 60,
        title: `Drake x Sza type beat 'freezing cold'`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663811/immortal_beat/trap/Drake_x_Sza_type_beat_freezing_cold_dhc8g3.mp3"
    },
    {
        id: 61,
        title: `Future x EST gee type beat 'represent'`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663810/immortal_beat/trap/Future_x_EST_gee_type_beat_represent_ag8rvm.mp3"
    },
    {
        id: 62,
        title: `Finding your way`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663810/immortal_beat/trap/finding_your_way_aa6xfg.mp3"
    },
    {
        id: 63,
        title: `Drake x 21 savage type beat 'more_'`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663806/immortal_beat/trap/Drake_x_21_savage_type_beat_more_ps_y1xbr1.mp3"
    },
    {
        id: 64,
        title: 'Beanie_b',
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663806/immortal_beat/trap/Beanie_b6bvur.mp3"
    },
    {
        id: 65,
        title: `Drake type beat 'on my mind'`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663805/immortal_beat/trap/Drake_type_beat_on_my_mind_tr07by.mp3"
    },
    {
        id: 66,
        title: 'By my side',
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663803/immortal_beat/trap/By_my_side_mxm8wz.mp3"
    },
    {
        id: 67,
        title: `Drake type beat 'Bad times'`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663798/immortal_beat/trap/Drake_type_beat_Bad_times_qhbgq2.mp3"
    },
    {
        id: 68,
        title: `Doja cat x Metro boomin type beat 'Agoura hills'`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663794/immortal_beat/trap/Doja_cat_x_Metro_boomin_type_beat_Agoura_hills_nd4cgf.mp3"
    },
    {
        id: 69,
        title: 'Deep thoughts',
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663793/immortal_beat/trap/Deep_thoughts_pl5ooc.mp3"
    },
    {
        id: 70,
        title: `Drake type beat '3am in dreamville'`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663792/immortal_beat/trap/Drake_type_beat_3am_in_dreamville_m7adwc.mp3"
    },
    {
        id: 71,
        title: `21 savage type beat 'murder'`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663791/immortal_beat/trap/21_savage_type_beat_murder_wjzzje.mp3"
    },


    //amapiano
    {
        id: 72,
        title: `Shalipopi type beat 'look well'`,
        category: 'amapiano',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663780/immortal_beat/amapiano/Shalipopi_type_beat_look_well_x8ngm8.mp3"
    },
    {
        id: 73,
        title: 'Soft boy',
        category: 'amapiano',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663773/immortal_beat/amapiano/Soft_boy_dpuv6p.mp3"
    },
    {
        id: 74,
        title: 'Olulufe',
        category: 'amapiano',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663771/immortal_beat/amapiano/Ololufe_vxiobg.mp3"
    },
    {
        id: 75,
        title: 'Zulu',
        category: 'amapiano',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663770/immortal_beat/amapiano/Zulu_smooco.mp3"
    },
    {
        id: 76,
        title: 'Vibe amapiano',
        category: 'amapiano',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663769/immortal_beat/amapiano/Vibe_amapiano_uhdvg1.mp3"
    },
    {
        id: 77,
        title: 'No disturb',
        category: 'amapiano',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663763/immortal_beat/amapiano/no_disturb_svhvob.mp3"
    },
    {
        id: 78,
        title: `Burna boy x Davido 'Second plate'`,
        category: 'amapiano',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663761/immortal_beat/amapiano/Burna_boy_x_Davido_Second_plate_yosjua.mp3"
    },
    {
        id: 79,
        title: `Davido x MusaKeys type beat 'Jungle fever'`,
        category: 'amapiano',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663761/immortal_beat/amapiano/Davido_x_Musa_Keys_type_beat_Jungle_fever_rl1mis.mp3"
    },
    {
        id: 80,
        title: `Asake type beat 'Here i come'`,
        category: 'amapiano',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663759/immortal_beat/amapiano/Asake_type_beat_Here_i_come_i86o9t.mp3"
    },
    {
        id: 81,
        title: `Ama afro type beat`,
        category: 'amapiano',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663757/immortal_beat/amapiano/ama-afro_type_beat_gxl1qg.mp3"
    },
    {
        id: 82,
        title: 'Chilly amapiano',
        category: 'amapiano',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663754/immortal_beat/amapiano/Chilly_amapiano_mjnliy.mp3"
    },
    {
        id: 83,
        title: 'Lazers',
        category: 'amapiano',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663753/immortal_beat/amapiano/lazers_auiaar.mp3"
    },
]

export const beats = shuffleArr({ arr: allBeats })