import { shuffleArr } from "../globals/globals"

export const allBeats = [
    //in hall && dance hall
    {
        id: 1,
        title: 'Sticky',
        category: 'Pop. Dance Hall',
        mp3: 'https://res.cloudinary.com/dqcmfizfd/video/upload/v1741761412/immortal_beat/inhouse_dancehall/Sticky_n7q6ww.mp3'
    },
    {
        id: 2,
        title: 'Sleep',
        category: 'Pop. Dance Hall',
        mp3: 'https://res.cloudinary.com/dqcmfizfd/video/upload/v1741761409/immortal_beat/inhouse_dancehall/Sleep_1_h0jq24.mp3'
    },
    {
        id: 3,
        title: 'Say my name',
        category: 'Pop. Dance Hall',
        mp3: 'https://res.cloudinary.com/dqcmfizfd/video/upload/v1741761408/immortal_beat/inhouse_dancehall/saymyname_lmqbxc.mp3'
    },
    {
        id: 4,
        title: 'Avalon Ambience',
        category: 'Pop. Dance Hall',
        mp3: 'https://res.cloudinary.com/dqcmfizfd/video/upload/v1741761407/immortal_beat/inhouse_dancehall/Avalon_Ambience_nzywnu.mp3'
    },
    {
        id: 5,
        title: 'Dont let me know',
        category: 'Pop. Dance Hall',
        mp3: 'https://res.cloudinary.com/dqcmfizfd/video/upload/v1741761404/immortal_beat/inhouse_dancehall/Don_t_let_me_know_hnsafv.mp3'
    },
    {
        id: 6,
        title: 'Work type',
        category: 'Pop. Dance Hall',
        mp3: 'https://res.cloudinary.com/dqcmfizfd/video/upload/v1741761402/immortal_beat/inhouse_dancehall/work_type_sbvpm3.mp3'
    },
    {
        id: 7,
        title: 'Dance now',
        category: 'Pop. Dance Hall',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741761402/immortal_beat/inhouse_dancehall/Dance_now_mjw6k2.mp3"
    },
    {
        id: 84,
        title: 'Undisputed',
        category: 'Pop. Dance Hall',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741761400/immortal_beat/inhouse_dancehall/Undisputed_jyu30x.mp3"
    },
    {
        id: 85,
        title: 'Dance till we love',
        category: 'Pop. Dance Hall',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741761397/immortal_beat/inhouse_dancehall/Dance_till_we_love_1_sxnvt9.mp3"
    },
    {
        id: 86,
        title: 'Boogie man',
        category: 'Pop. Dance Hall',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741761395/immortal_beat/inhouse_dancehall/Boogie_man_c5vq0s.mp3"
    }, 
    {
        id: 87,
        title: 'Birds do fly',
        category: 'Pop. Dance Hall',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741761393/immortal_beat/inhouse_dancehall/birds_do_fly_b99qzc.mp3"
    },
    {
        id: 88,
        title: 'Such a freak',
        category: 'Pop. Dance Hall',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741761392/immortal_beat/inhouse_dancehall/such_a_freak_plntsr.mp3"
    },
    {
        id: 89,
        title: 'Black bird demo',
        category: 'Pop. Dance Hall',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741761392/immortal_beat/inhouse_dancehall/Black_bird_demo_p1shh7.mp3"
    },                        


    //afro
    {
        id: 8,
        title: `Wurld type beat bonquet`,
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741762293/immortal_beat/afro/Wurld_type_beat_Bonquet_qix3zq.mp3"
    },
    {
        id: 9,
        title: `Wizkid x MHD type beat musique`,
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741762286/immortal_beat/afro/Wizkid_x_MHD_Type_beat_Musique_myyej2.mp3"
    },
    {
        id: 10,
        title: `Zlatan x Zinoleesky type beat Zanku`,
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741762285/immortal_beat/afro/Zlatan_x_Zinoleesky_type_beat_Zanku_jp2so3.mp3"
    },
    {
        id: 11,
        title: 'Seyi vibes Shaolin type beat',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741762282/immortal_beat/afro/Seyi_vibes_Shaolin_type_beat_tgrzvl.mp3"
    },
    {
        id: 12,
        title: `Wizxid x Burna boy type beat street life`,
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741762274/immortal_beat/afro/Wizkid_x_Burna_boy_type_beat_street_life_q4aip3.mp3"
    },    
    {
        id: 13,
        title: `Show some love`,
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741762268/immortal_beat/afro/Show_some_love_ayd11h.mp3"
    },
    {
        id: 14,
        title: `Really like me`,
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741762264/immortal_beat/afro/Really_like_me_ymkfx4.mp3"
    },
    {
        id: 15,
        title: `Sexy heaven`,
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741762262/immortal_beat/afro/Saxy_heaven_g13lwg.mp3"
    },
    {
        id: 16,
        title: `Peace of mind`,
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741762249/immortal_beat/afro/Peace_of_mind_ipkdxb.mp3"
    },
    {
        id: 17,
        title: 'Show me',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741762248/immortal_beat/afro/show_me_ae72dm.mp3"
    },
    {
        id: 18,
        title: `Rema type beat bambi`,
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741762230/immortal_beat/afro/Rema_type_beat_Bambi_yzvcws.mp3"
    },
    {
        id: 19,
        title: 'Piano man',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741762229/immortal_beat/afro/Piano_man_jccmsj.mp3"
    },
    {
        id: 20,
        title: 'Omah lay type beat girl for you',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741762214/immortal_beat/afro/Omah_lay_type_beat_Girl_for_you_qyx7oa.mp3"
    },
    {
        id: 21,
        title: 'Omah lay type beat vibration',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741762204/immortal_beat/afro/Omah_lay_type_beat_Vibration_basqee.mp3"
    },
    {
        id: 22,
        title: 'Midnight party',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741762200/immortal_beat/afro/Midnight_party_uprf9l.mp3"
    },
    {
        id: 23,
        title: 'Paul and silas 2 instrumental',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741762199/immortal_beat/afro/Paul_and_silas2_instrumental_dhhq4y.mp3"
    },
    {
        id: 24,
        title: 'Nothing above you',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741762196/immortal_beat/afro/Nothing_above_you_jacumc.mp3"
    },
    {
        id: 25,
        title: 'On the floor',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741762192/immortal_beat/afro/On_the_floor_ce1h0j.mp3"
    },
    {
        id: 26,
        title: `Olosho`,
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741762175/immortal_beat/afro/Olosho_zjnkry.mp3"
    },
    {
        id: 27,
        title: 'Night cruise',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741762168/immortal_beat/afro/Night_cruise_nzyj92.mp3"
    },
    {
        id: 28,
        title: `Mood swing`,
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741762165/immortal_beat/afro/Mood_Swing_fe84uc.mp3"
    },
    {
        id: 29,
        title: 'Move',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741762156/immortal_beat/afro/Move_sme2k7.mp3"
    },
    {
        id: 30,
        title: 'For comfort',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663967/immortal_beat/afro/For_comfort_bxij0m.mp3"
    },
    {
        id: 31,
        title: `No gree`,
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741762139/immortal_beat/afro/No_gree_hafbjw.mp3"
    },
    {
        id: 32,
        title: `Made up`,
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741762131/immortal_beat/afro/made_up_zqs4f6.mp3"
    },
    {
        id: 33,
        title: 'For krizz',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741762130/immortal_beat/afro/for_krizz_o4azth.mp3"
    },
    {
        id: 34,
        title: 'For comfort',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741762122/immortal_beat/afro/For_comfort_lozgi6.mp3"
    },
    {
        id: 35,
        title: 'Go with the flow',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741762118/immortal_beat/afro/go_with_the_flow_so3uee.mp3"
    },
    {
        id: 36,
        title: 'Ginger',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741762124/immortal_beat/afro/Ginger_nywq5i.mp3"
    },
    {
        id: 90,
        title: 'Joeboy x Fireboy type beat dont break my heart',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741762109/immortal_beat/afro/Joeboy_x_Fireboy_type_beat_don_t_break_my_heart_rvdqj3.mp3"
    },
    {
        id: 91,
        title: 'Burna boy x J Hus XX',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741762088/immortal_beat/afro/Burna_boy_x_J_hus_xx_i2t5zr.mp3"
    }, 
    {
        id: 92,
        title: 'Fireboy type beat sunshine',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741762070/immortal_beat/afro/Fireboy_type_beat_Sunshine_nz2tmy.mp3"
    },
    {
        id: 93,
        title: 'Casio',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741762072/immortal_beat/afro/Casio_qr34wi.mp3"
    },
    {
        id: 94,
        title: 'Feel the same',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741762072/immortal_beat/afro/Feel_the_same_gzehg0.mp3"
    },
    {
        id: 95,
        title: 'Boogie man',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741762051/immortal_beat/afro/Boogie_man_napshj.mp3"
    },
    {
        id: 96,
        title: 'Ayra star x Wizkid type beat roses',
        category: 'afro',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741762032/immortal_beat/afro/Ayra_star_x_Wizkid_type_beat_Roses_rpg7mg.mp3"
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
        title: `Young thug type beat twin `,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741763442/immortal_beat/trap/Young_thug_type_beat_Twin_vhohwa.mp3"
    },
    {
        id: 39,
        title: `West coast`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741763438/immortal_beat/trap/West_coast_1_xabybs.mp3"
    },
    {
        id: 40,
        title: 'Travis scott x Future x Metro boomin type beat type piece',
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741763437/immortal_beat/trap/Travis_scott_x_Future_x_Metro_boomin_Type_beat_Type_piece_sagj4y.mp3"
    },
    {
        id: 41,
        title: `Travis scott x Don toliver type beat cant say`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741763435/immortal_beat/trap/Travis_Scott_x_Don_toliver_type_beat_cant_say_cikhez.mp3"
    },
    {
        id: 42,
        title: `Travis scott type beat fishing boat`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741763433/immortal_beat/trap/Travis_scott_type_beat_fishing_boat_vs7poh.mp3"
    },
    {
        id: 43,
        title: `Timeless`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741763430/immortal_beat/trap/Timeless_xzhxkq.mp3"
    },
    {
        id: 44,
        title: 'Thompson jr',
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741763429/immortal_beat/trap/thompson_Jr_m43ymt.mp3"
    },
    {
        id: 45,
        title: `Rainy days piano`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741763429/immortal_beat/trap/Rainy_days_piano_de1hyq.mp3"
    },
    {
        id: 46,
        title: `Travis scott type beat - dystopia`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741763427/immortal_beat/trap/Travis_scott_type_beat_-_dystopia_b3uqk6.mp3"
    },
    {
        id: 47,
        title: `Skepta`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741763428/immortal_beat/trap/Skepta_vhkupr.mp3"
    },
    {
        id: 48,
        title: `Murder`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741763427/immortal_beat/trap/murder_dxwoa1.mp3"
    },
    {
        id: 49,
        title: 'Not too late to love',
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741763421/immortal_beat/trap/Not_too_late_to_love_npx6t8.mp3"
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
        title: `Glo_rilla x Megan thee stallion type beat good goodly moogly`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741763421/immortal_beat/trap/Glo_rilla_x_Megan_thee_stallion_type_beat_good_goodly_moogly_golzkk.mp3"
    },
    {
        id: 53,
        title: `Glo rilla x Megan thee stallion type beat 'good goodly moogly'`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1730663837/immortal_beat/trap/Glo_rilla_x_Megan_thee_stallion_type_beat_good_goodly_moogly_lsx8cz.mp3"
    },
    {
        id: 54,
        title: `Ketamine`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741763420/immortal_beat/trap/ketamine_vv8nxq.mp3"
    },
    {
        id: 55,
        title: 'Keep you warm',
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741763417/immortal_beat/trap/Keep_you_warm_dzc94s.mp3"
    },
    {
        id: 56,
        title: `Lil durk x Rod wave type beat`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741763417/immortal_beat/trap/Lil_durk_x_Rod_wave_type_beat_jkqbcb.mp3"
    },
    {
        id: 57,
        title: `Lil durk x King Von type beat double tap`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741763416/immortal_beat/trap/Lil_Durk_x_King_Von_type_beat_Double_tap_lqtr6j.mp3"
    },
    {
        id: 58,
        title: 'Jazzy bap',
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741763414/immortal_beat/trap/Jazzy_bap_tdj2uz.mp3"
    },
    {
        id: 59,
        title: `Evil jordan`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741763413/immortal_beat/trap/evil_jordan_rjmgiy.mp3"
    },
    {
        id: 60,
        title: `Juice wrld x Don toliver type beat Retro shi`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741763412/immortal_beat/trap/Juice_Wrld_x_Don_toliver_type_beat_Retro_shi_cyc7pf.mp3"
    },
    {
        id: 61,
        title: `Future x Metro type beat`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741763411/immortal_beat/trap/Future_x_Metro_type_beat_yi5bu9.mp3"
    },
    {
        id: 62,
        title: `Jack`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741763408/immortal_beat/trap/jack_ulubn3.mp3"
    },
    {
        id: 63,
        title: `Glass of wine`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741763408/immortal_beat/trap/glass_of_wine_iij7fi.mp3"
    },
    {
        id: 64,
        title: 'Ahhh ha',
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741763404/immortal_beat/trap/ahhh_ha_mrvog6.mp3"
    },
    {
        id: 65,
        title: `Jach Harlow x Chris Brown type beat I need you`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741763400/immortal_beat/trap/Jack_Harlow_x_Chris_brown_type_beat_I_need_you_gfshjz.mp3"
    },
    {
        id: 66,
        title: 'Focus sample',
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741763402/immortal_beat/trap/Focus_sample_zbeob8.mp3"
    },
    {
        id: 67,
        title: `Hear no evil`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741763400/immortal_beat/trap/Hear_no_evil_un1nlz.mp3"
    },
    {
        id: 68,
        title: `Gunna 6am type beat`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741763399/immortal_beat/trap/Gunna_6am_type_beat_zhfbpy.mp3"
    },
    {
        id: 69,
        title: 'Gr8ness',
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741763399/immortal_beat/trap/gr8ness_aw8gtm.mp3"
    },
    {
        id: 70,
        title: `Gold piece`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741763398/immortal_beat/trap/Gold_piece_rua99o.mp3"
    },
    {
        id: 71,
        title: `Hours`,
        category: 'trap',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741763394/immortal_beat/trap/hours_ahjbad.mp3"
    },





    //amapiano
    {
        id: 72,
        title: `Sarz x Asake type beat new`,
        category: 'amapiano',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741764410/immortal_beat/amapiano/Sarz_x_Asake_type_beat_New_dpzxu9.mp3"
    },
    {
        id: 73,
        title: 'Vibe amapiano',
        category: 'amapiano',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741764406/immortal_beat/amapiano/Vibe_amapiano_hcklfs.mp3"
    },
    {
        id: 74,
        title: 'Shalipopi type beat look well',
        category: 'amapiano',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741764405/immortal_beat/amapiano/Shalipopi_type_beat_look_well_gvfowh.mp3"
    },
    {
        id: 75,
        title: 'Zulu',
        category: 'amapiano',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741764405/immortal_beat/amapiano/Zulu_wqxsmh.mp3"
    },
    {
        id: 76,
        title: 'Na so',
        category: 'amapiano',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741764403/immortal_beat/amapiano/na_so_lzbuic.mp3"
    },
    {
        id: 77,
        title: 'Soft boyy',
        category: 'amapiano',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741764400/immortal_beat/amapiano/Soft_boyy_nxezp1.mp3"
    },
    {
        id: 78,
        title: `Amapiano beat Shay Imoto`,
        category: 'amapiano',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741764399/immortal_beat/amapiano/Amapiano_beat_Shay_imoto_lh1viz.mp3"
    },
    {
        id: 79,
        title: `No disturb`,
        category: 'amapiano',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741764398/immortal_beat/amapiano/no_distiurb_yrl66r.mp3"
    },
    {
        id: 80,
        title: `Maye`,
        category: 'amapiano',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741764393/immortal_beat/amapiano/Maye_uotkrc.mp3"
    },
    {
        id: 81,
        title: `Shalipopi synth amapiano beat`,
        category: 'amapiano',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741764398/immortal_beat/amapiano/Shalipopi_synth_amapiano_beat_ldmwdm.mp3"
    },
    {
        id: 82,
        title: 'Ololufe',
        category: 'amapiano',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741764393/immortal_beat/amapiano/Ololufe_xesocj.mp3"
    },
    {
        id: 83,
        title: 'Ama afro type beat',
        category: 'amapiano',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741764392/immortal_beat/amapiano/ama-afro_type_beat_vbtrgl.mp3"
    },
    {
        id: 97,
        title: 'Jungle fever',
        category: 'amapiano',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741764389/immortal_beat/amapiano/jungle_fever_olcjb4.mp3"
    },
    {
        id: 98,
        title: 'Burna box x Davido Second plate',
        category: 'amapiano',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741764386/immortal_beat/amapiano/Burna_boy_x_Davido_Second_plate_vllokt.mp3"
    }, 
    {
        id: 99,
        title: 'Amapiano beat gimme sum',
        category: 'amapiano',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741764386/immortal_beat/amapiano/Amapiano_beat_Gimme_sum_npaeyn.mp3"
    },
    {
        id: 100,
        title: 'Dey hear word',
        category: 'amapiano',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741764385/immortal_beat/amapiano/Dey_hear_word_onzyp8.mp3"
    },
    {
        id: 101,
        title: 'Hereb',
        category: 'amapiano',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741764385/immortal_beat/amapiano/hereb_awo3pe.mp3"
    },
    {
        id: 102,
        title: 'Here I come',
        category: 'amapiano',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741764383/immortal_beat/amapiano/Here_i_come_evdz9q.mp3"
    },
    {
        id: 103,
        title: 'Come to my kian',
        category: 'amapiano',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741764379/immortal_beat/amapiano/come_to_my_kian_lf5662.mp3"
    },  
    

    


    //drill
    {
        id: 104,
        title: 'Drill top boy',
        category: 'drill',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741764911/immortal_beat/drill/Drill_Top_boy_e6icks.mp3"
    }, 





    //films and games
    {
        id: 105,
        title: 'Humming man',
        category: 'films and games',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741765043/immortal_beat/films%20and%20games/humming_man_b2k6nd.mp3"
    },
    {
        id: 106,
        title: 'New dawn',
        category: 'films and games',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741765038/immortal_beat/films%20and%20games/new_dawn_qgdn0y.mp3"
    },
    {
        id: 107,
        title: 'Video game',
        category: 'films and games',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741765036/immortal_beat/films%20and%20games/video_game_shbmom.mp3"
    },
    {
        id: 108,
        title: 'Dash dealer',
        category: 'films and games',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741765035/immortal_beat/films%20and%20games/Deah_dealer_1_tpo1wm.mp3"
    },
    {
        id: 109,
        title: 'Good heavens',
        category: 'films and games',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741765034/immortal_beat/films%20and%20games/good_heavens_ib3bua.mp3"
    }, 
    

    


    // rnb
    {
        id: 110,
        title: 'Mariah',
        category: 'rnb',
        mp3: "https://res.cloudinary.com/dqcmfizfd/video/upload/v1741765480/immortal_beat/rnb/Mariah_x6tfye.mp3"
    },    
]

export const beats = shuffleArr({ arr: allBeats })