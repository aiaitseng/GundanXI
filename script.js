import { initExperience } from './experience.js';

/**
 * MS ARCHIVE — Universal Century Mobile Suit Interactive Application
 * Written in pure Vanilla ES6+ JavaScript (zero framework runtime required).
 */

/**
 * @typedef {Object} SuitRatings
 * @property {number} output
 * @property {number} mobility
 * @property {number} armor
 * @property {number} firepower
 * @property {number} psycho
 */

/**
 * @typedef {'melee' | 'short' | 'mid' | 'long'} RangeTier
 */

/**
 * @typedef {Object} WeaponProfile
 * @property {string} role
 * @property {string} name
 * @property {string} rangeLabel
 * @property {string} killRadiusLabel
 * @property {string} extremeRangeLabel
 * @property {RangeTier} tier
 * @property {number} zoneStart
 * @property {number} zoneEnd
 * @property {number} effectiveRadiusPct
 * @property {number} extremeRadiusPct
 * @property {number} arcDegrees
 * @property {string} arcLabel
 * @property {string} note
 */

/**
 * @typedef {Object} MobileSuit
 * @property {string} id
 * @property {string} code
 * @property {string} name
 * @property {string} era
 * @property {number} eraNumber
 * @property {'uc' | 'ce' | 'au'} universe
 * @property {string} faction
 * @property {string} factionLabel
 * @property {boolean} psychoFrame
 * @property {'real' | 'model'} photoType
 * @property {string} kitGrade
 * @property {string} pilot
 * @property {number} height
 * @property {number} weight
 * @property {number} [weightMax]
 * @property {number} output
 * @property {number} overdriveOutput
 * @property {number} thruster
 * @property {number} overdriveThruster
 * @property {string} armor
 * @property {string} [manufacturer]
 * @property {string} [engineeringNote]
 * @property {string} image
 * @property {string} summary
 * @property {string} modeStandardLabel
 * @property {string} modeOverdriveLabel
 * @property {string[]} armaments
 * @property {WeaponProfile[]} weaponProfiles
 * @property {SuitRatings} ratings
 */

/** @type {MobileSuit[]} */
const MOBILE_SUITS = [
  {
    id: 'rx-78-2',
    code: 'RX-78-2',
    name: '鋼彈 (Gundam)',
    era: 'U.C. 0079',
    eraNumber: 79,
    universe: 'uc',
    faction: 'efsf',
    factionLabel: '地球聯邦軍',
    psychoFrame: false,
    photoType: 'real',
    kitGrade: '實機格納庫檔案',
    pilot: '阿姆羅·雷',
    height: 18.0,
    weight: 43.4,
    weightMax: 60.0,
    output: 1380,
    overdriveOutput: 1510,
    thruster: 55500,
    overdriveThruster: 61200,
    armor: '月神鈦合金 (Luna Titanium)',
    manufacturer: '地球聯邦軍（Side 7 研發）',
    engineeringNote:
      '採用核心戰機系統（Core Block System）確保戰術資料與駕駛員生還率；後期加裝磁氣覆膜技術大幅提升關節追蹤反應速度，以跟上新人類駕駛員的極限操作。',
    image: './src/assets/images/hero_gundam_hangar_1794989043756.jpg',
    summary:
      '地球聯邦軍 V 作戰核心泛用試作機，首度在機動戰士上搭載戰艦級光束步槍與核心戰機逃生系統，改寫宇宙世紀地面與軌道戰術。',
    modeStandardLabel: '標準作戰出力模式 (1,380 kW)',
    modeOverdriveLabel: '磁氣覆膜強化反應模式 (1,510 kW)',
    armaments: [
      '60mm 頭部火神砲 × 2',
      '光束軍刀 × 2（背包儲存）',
      'BOWA·XBR-M-79-07G 光束步槍',
      'BLASH·XHB-L-03/N-STD 超絕火箭砲',
      '月神鈦合金專用防盾',
    ],
    weaponProfiles: [
      {
        role: '頭頂機砲',
        name: '60mm 頭部火神砲 × 2',
        rangeLabel: '50–380 m',
        killRadiusLabel: '240 m',
        extremeRangeLabel: '380 m',
        tier: 'short',
        zoneStart: 18,
        zoneEnd: 45,
        effectiveRadiusPct: 26,
        extremeRadiusPct: 38,
        arcDegrees: 110,
        arcLabel: '前方 110° 彈幕扇區',
        note: '近距防空與飛彈攔截，適合貼身纏鬥牽制，對重裝甲貫穿力有限。',
      },
      {
        role: '近戰光劍',
        name: '光束軍刀（背包雙持）× 2',
        rangeLabel: '2–18 m',
        killRadiusLabel: '14 m',
        extremeRangeLabel: '18 m',
        tier: 'melee',
        zoneStart: 0,
        zoneEnd: 22,
        effectiveRadiusPct: 14,
        extremeRadiusPct: 22,
        arcDegrees: 160,
        arcLabel: '前方 160° 揮砍扇區',
        note: '零距離高熱等離子斬擊，可一擊貫穿多數實彈護盾與裝甲。',
      },
      {
        role: '光束射擊',
        name: 'BOWA·XBR-M-79-07G 光束步槍',
        rangeLabel: '350–1,900 m',
        killRadiusLabel: '1,350 m',
        extremeRangeLabel: '1,900 m',
        tier: 'mid',
        zoneStart: 46,
        zoneEnd: 84,
        effectiveRadiusPct: 58,
        extremeRadiusPct: 82,
        arcDegrees: 24,
        arcLabel: '前方 24° 精密射界',
        note: '單發具備戰艦主砲級貫穿力，為中遠距離點名狙擊之主力武裝。',
      },
      {
        role: '重砲轟擊',
        name: 'BLASH·XHB-L-03/N-STD 超絕火箭砲',
        rangeLabel: '250–1,400 m',
        killRadiusLabel: '980 m',
        extremeRangeLabel: '1,400 m',
        tier: 'mid',
        zoneStart: 40,
        zoneEnd: 76,
        effectiveRadiusPct: 48,
        extremeRadiusPct: 72,
        arcDegrees: 36,
        arcLabel: '前方 36° 爆破射界',
        note: '不受抗光束塗層影響的實體高爆彈頭，適合中距面壓制與對艦打擊。',
      },
      {
        role: '裝甲防禦',
        name: '月神鈦合金專用防盾',
        rangeLabel: '0–12 m',
        killRadiusLabel: '8 m',
        extremeRangeLabel: '12 m',
        tier: 'melee',
        zoneStart: 0,
        zoneEnd: 16,
        effectiveRadiusPct: 11,
        extremeRadiusPct: 17,
        arcDegrees: 135,
        arcLabel: '前方 135° 近距護盾',
        note: '高速突入與近戰格鬥時掩護本體正面，偏轉實彈火網與衝擊。',
      },
    ],
    ratings: {
      output: 62,
      mobility: 68,
      armor: 74,
      firepower: 72,
      psycho: 25,
    },
  },
  {
    id: 'ms-06s',
    code: 'MS-06S',
    name: '夏亞專用薩克 II',
    era: 'U.C. 0079',
    eraNumber: 79,
    universe: 'uc',
    faction: 'zeon',
    factionLabel: '吉翁公國軍',
    psychoFrame: false,
    photoType: 'real',
    kitGrade: '實機檔案寫真',
    pilot: '夏亞·阿茲納布爾',
    height: 17.5,
    weight: 56.2,
    weightMax: 74.5,
    output: 976,
    overdriveOutput: 1090,
    thruster: 51600,
    overdriveThruster: 68400,
    armor: '超高張力鋼 (Super Hard Steel Alloy)',
    manufacturer: '吉翁尼克公司 (Zeonic)',
    engineeringNote:
      '雖然推進劑消耗量提升且極限速度受限於機體強度，但在實戰中透過推進器微調與指揮官專用天線強化通訊，成為吉翁王牌駕駛員的象徵性機體。',
    image: './src/assets/images/suit_zaku_red_1794989045618.jpg',
    summary:
      '以 MS-06F 為基礎取消出力限制器並強化推進噴嘴的指揮官專用機。憑藉深紅塗裝與高推重比機動性，在魯烏姆戰役留下三倍速戰果。',
    modeStandardLabel: '通常巡航限制模式 (976 kW)',
    modeOverdriveLabel: '解除限制器突擊模式 (1,090 kW)',
    armaments: [
      '120mm 薩克機槍（彈鼓供彈）',
      '280mm 薩克火箭砲',
      '熱能斧 (Heat Hawk)',
      '肩部衝撞裝甲盾',
    ],
    weaponProfiles: [
      {
        role: '實彈掃射',
        name: '120mm 薩克機槍（彈鼓式）',
        rangeLabel: '100–650 m',
        killRadiusLabel: '420 m',
        extremeRangeLabel: '650 m',
        tier: 'short',
        zoneStart: 24,
        zoneEnd: 56,
        effectiveRadiusPct: 36,
        extremeRadiusPct: 54,
        arcDegrees: 75,
        arcLabel: '前方 75° 連射扇區',
        note: '高射速持續彈幕壓制，搭配三倍速機動執行中近距側翼包抄。',
      },
      {
        role: '重型火箭',
        name: '280mm 薩克火箭砲',
        rangeLabel: '300–1,600 m',
        killRadiusLabel: '1,120 m',
        extremeRangeLabel: '1,600 m',
        tier: 'mid',
        zoneStart: 44,
        zoneEnd: 80,
        effectiveRadiusPct: 56,
        extremeRadiusPct: 78,
        arcDegrees: 32,
        arcLabel: '前方 32° 重砲射界',
        note: '大口徑高威力火箭彈，專精於中距離對艦突襲與據點破壞。',
      },
      {
        role: '近戰格鬥',
        name: '熱能斧 (Heat Hawk)',
        rangeLabel: '1.5–14 m',
        killRadiusLabel: '10 m',
        extremeRangeLabel: '14 m',
        tier: 'melee',
        zoneStart: 0,
        zoneEnd: 20,
        effectiveRadiusPct: 14,
        extremeRadiusPct: 21,
        arcDegrees: 150,
        arcLabel: '前方 150° 劈砍扇區',
        note: '高推重比高速突進貼身劈砍武裝，極近距突襲爆發力強悍。',
      },
      {
        role: '右肩防禦',
        name: '高剛性衝撞裝甲盾',
        rangeLabel: '0–15 m',
        killRadiusLabel: '10 m',
        extremeRangeLabel: '15 m',
        tier: 'melee',
        zoneStart: 0,
        zoneEnd: 18,
        effectiveRadiusPct: 12,
        extremeRadiusPct: 19,
        arcDegrees: 110,
        arcLabel: '右前 110° 衝撞扇區',
        note: '兼具實彈格擋與高速體當衝撞的近身攻防複合護具。',
      },
    ],
    ratings: {
      output: 46,
      mobility: 76,
      armor: 58,
      firepower: 56,
      psycho: 15,
    },
  },
  {
    id: 'msz-006',
    code: 'MSZ-006',
    name: 'Z 鋼彈 (Zeta Gundam)',
    era: 'U.C. 0087',
    eraNumber: 87,
    universe: 'uc',
    faction: 'efsf',
    factionLabel: '幽谷 / 卡拉巴',
    psychoFrame: false,
    photoType: 'real',
    kitGrade: '實機檔案寫真',
    pilot: '卡密兒·維丹',
    height: 19.85,
    weight: 28.7,
    output: 2020,
    overdriveOutput: 2450,
    thruster: 112600,
    overdriveThruster: 138000,
    armor: '鋼彈尼姆合金 γ (Gundarium Gamma)',
    image: './src/assets/images/suit_zeta_waverider_1794989044955.jpg',
    summary:
      '結合可動骨架與穿波機 (Wave Rider) 變形機構的可變形機動戰士，能單機突破大氣層並兼顧宙間高速格鬥與長距離狙擊。',
    modeStandardLabel: 'MS 泛用人型戰鬥模式 (2,020 kW)',
    modeOverdriveLabel: '生物感測器共鳴 + Wave Rider 推力 (2,450 kW)',
    armaments: [
      '60mm 頭部火神砲 × 2',
      '腕部榴彈發射器 × 2',
      '光束軍刀 / 長程光束槍模式 × 2',
      'XBR-M87A2 專用光束步槍',
      '超絕米加粒子砲 (Hyper Mega Launcher)',
    ],
    weaponProfiles: [
      {
        role: '頭頂機砲',
        name: '60mm 頭部火神砲 × 2',
        rangeLabel: '50–400 m',
        killRadiusLabel: '260 m',
        extremeRangeLabel: '400 m',
        tier: 'short',
        zoneStart: 18,
        zoneEnd: 46,
        effectiveRadiusPct: 24,
        extremeRadiusPct: 36,
        arcDegrees: 110,
        arcLabel: '前方 110° 攔截扇區',
        note: '穿波機高速掠過時的近距點防禦與追擊補射武裝。',
      },
      {
        role: '近戰光劍',
        name: '光束軍刀／長程光束槍 × 2',
        rangeLabel: '2–24 m',
        killRadiusLabel: '18 m',
        extremeRangeLabel: '24 m',
        tier: 'melee',
        zoneStart: 0,
        zoneEnd: 24,
        effectiveRadiusPct: 15,
        extremeRadiusPct: 23,
        arcDegrees: 165,
        arcLabel: '前方 165° 雙態扇區',
        note: '兼顧近身光劍格鬥與雙腕光束連射的變換型高機動近戰兵器。',
      },
      {
        role: '主戰射擊',
        name: 'XBR-M87A2 專用光束步槍',
        rangeLabel: '400–2,100 m',
        killRadiusLabel: '1,550 m',
        extremeRangeLabel: '2,100 m',
        tier: 'mid',
        zoneStart: 48,
        zoneEnd: 86,
        effectiveRadiusPct: 60,
        extremeRadiusPct: 82,
        arcDegrees: 22,
        arcLabel: '前方 22° 狙擊射線',
        note: '可加載長光束軍刀並於 Wave Rider 機首維持高速精準射擊。',
      },
      {
        role: '副武支援',
        name: '腕部雙聯榴彈發射器',
        rangeLabel: '80–520 m',
        killRadiusLabel: '360 m',
        extremeRangeLabel: '520 m',
        tier: 'short',
        zoneStart: 22,
        zoneEnd: 52,
        effectiveRadiusPct: 32,
        extremeRadiusPct: 48,
        arcDegrees: 85,
        arcLabel: '前方 85° 散射扇區',
        note: '近中距實體彈牽制與彈道擾亂，填補主步槍冷卻空檔。',
      },
      {
        role: '長程重砲',
        name: '超絕米加粒子砲',
        rangeLabel: '800–3,600 m+',
        killRadiusLabel: '2,600 m',
        extremeRangeLabel: '3,600 m+',
        tier: 'long',
        zoneStart: 62,
        zoneEnd: 100,
        effectiveRadiusPct: 76,
        extremeRadiusPct: 98,
        arcDegrees: 16,
        arcLabel: '前方 16° 超遠射線',
        note: '艦隊戰等級超遠程高能量光束砲，擁有全武裝最長直擊距離。',
      },
    ],
    ratings: {
      output: 76,
      mobility: 88,
      armor: 70,
      firepower: 84,
      psycho: 65,
    },
  },
  {
    id: 'rx-93',
    code: 'RX-93',
    name: 'ν 鋼彈 (Nu Gundam)',
    era: 'U.C. 0093',
    eraNumber: 93,
    universe: 'uc',
    faction: 'efsf',
    factionLabel: '地球聯邦軍（隆德·貝爾）',
    psychoFrame: true,
    photoType: 'real',
    kitGrade: '實機檔案寫真',
    pilot: '阿姆羅·雷',
    height: 22.0,
    weight: 27.9,
    weightMax: 63.0,
    output: 2980,
    overdriveOutput: 3560,
    thruster: 97800,
    overdriveThruster: 118500,
    armor: '鋼彈尼姆合金（局部精神感應框架）',
    manufacturer: '阿納海姆電子公司 (馮·布勞恩工廠)',
    engineeringNote:
      '駕駛艙周圍導入極機密的精神感應框架，徹底消除腦波傳導延遲；在阿克西斯墜落事件中展現出超越物理極限的精神共鳴現象。',
    image: './src/assets/images/suit_nu_finfunnel_1794989045055.jpg',
    summary:
      '由阿姆羅·雷親自參與設計、亞納海姆電子公司承造的新人類專用旗艦機。左背搭載六枚自帶發電機的翼狀感應砲，可兼作攻擊與 I 力場防禦罩。',
    modeStandardLabel: '標準翼狀感應砲部署 (2,980 kW)',
    modeOverdriveLabel: '精神感應框架最大共振出力 (3,560 kW)',
    armaments: [
      '60mm 頭部火神砲 × 2',
      '翼狀感應砲 (Fin Funnel) × 6',
      '專用高出力光束步槍',
      '新超絕火箭砲 (New Hyper Bazooka)',
      '內藏式光束砲防盾與飛彈',
    ],
    weaponProfiles: [
      {
        role: '頭頂機砲',
        name: '60mm 頭部火神砲 × 2',
        rangeLabel: '60–420 m',
        killRadiusLabel: '280 m',
        extremeRangeLabel: '420 m',
        tier: 'short',
        zoneStart: 18,
        zoneEnd: 46,
        effectiveRadiusPct: 24,
        extremeRadiusPct: 36,
        arcDegrees: 110,
        arcLabel: '前方 110° 近防扇區',
        note: '近距離攔截敵方浮游砲與飛彈，確保近戰纏鬥安全圈。',
      },
      {
        role: '感應兵器',
        name: '翼狀感應砲 (Fin Funnel) × 6',
        rangeLabel: '400–3,200 m+',
        killRadiusLabel: '2,350 m',
        extremeRangeLabel: '3,200 m+',
        tier: 'long',
        zoneStart: 48,
        zoneEnd: 100,
        effectiveRadiusPct: 74,
        extremeRadiusPct: 98,
        arcDegrees: 360,
        arcLabel: '360° 全方位立體網',
        note: '透過新人類感應波進行超遠距全方位多向齊射，並可展開 I 力場防護罩。',
      },
      {
        role: '主戰射擊',
        name: '專用高出力光束步槍',
        rangeLabel: '450–2,300 m',
        killRadiusLabel: '1,700 m',
        extremeRangeLabel: '2,300 m',
        tier: 'mid',
        zoneStart: 50,
        zoneEnd: 88,
        effectiveRadiusPct: 62,
        extremeRadiusPct: 84,
        arcDegrees: 20,
        arcLabel: '前方 20° 精密射界',
        note: '具備高出力單發狙擊與連射切換，中遠距離點射精準度極高。',
      },
      {
        role: '近戰光劍',
        name: '高出力特製光束軍刀',
        rangeLabel: '2–22 m',
        killRadiusLabel: '16 m',
        extremeRangeLabel: '22 m',
        tier: 'melee',
        zoneStart: 0,
        zoneEnd: 24,
        effectiveRadiusPct: 14,
        extremeRadiusPct: 22,
        arcDegrees: 170,
        arcLabel: '前方 170° 雙刃扇區',
        note: '主副雙向刃部出力可隨戰況調整，近距對劍壓制力優異。',
      },
      {
        role: '複合防盾',
        name: '內藏光束砲＆飛彈專用盾',
        rangeLabel: '40–750 m',
        killRadiusLabel: '520 m',
        extremeRangeLabel: '750 m',
        tier: 'short',
        zoneStart: 20,
        zoneEnd: 62,
        effectiveRadiusPct: 40,
        extremeRadiusPct: 58,
        arcDegrees: 95,
        arcLabel: '前方 95° 複合射界',
        note: '集正面盾防、近中距速射光束砲與四枚牽制飛彈於一體。',
      },
    ],
    ratings: {
      output: 88,
      mobility: 86,
      armor: 82,
      firepower: 92,
      psycho: 90,
    },
  },
  {
    id: 'msn-04',
    code: 'MSN-04',
    name: '沙薩比 (Sazabi)',
    era: 'U.C. 0093',
    eraNumber: 93,
    universe: 'uc',
    faction: 'zeon',
    factionLabel: '新生吉翁（夏亞艦隊）',
    psychoFrame: true,
    photoType: 'real',
    kitGrade: '實機檔案寫真',
    pilot: '夏亞·阿茲納布爾',
    height: 23.0,
    weight: 30.5,
    output: 3960,
    overdriveOutput: 4480,
    thruster: 133000,
    overdriveThruster: 152000,
    armor: '鋼彈尼姆合金（駕駛艙周邊感應框架）',
    image: './src/assets/images/suit_sazabi_crimson_1794989106067.jpg',
    summary:
      '總帥夏亞專用全領域重裝指揮機。高達 23 公尺的機身配置大推力燃料槽與腹部擴散米加粒子砲，並首度於駕駛艙結構整合微型精神感應框架。',
    modeStandardLabel: '全領域指揮作戰模式 (3,960 kW)',
    modeOverdriveLabel: '多向感應砲齊射峰值出力 (4,480 kW)',
    armaments: [
      '腹部擴散米加粒子砲',
      '光束散彈步槍 (Beam Shot Rifle)',
      '背部感應砲 (Funnel) × 6',
      '光束戰斧 (Beam Tomahawk)',
      '內藏飛彈防盾',
    ],
    weaponProfiles: [
      {
        role: '機體內砲',
        name: '腹部擴散米加粒子砲',
        rangeLabel: '120–950 m',
        killRadiusLabel: '680 m',
        extremeRangeLabel: '950 m',
        tier: 'mid',
        zoneStart: 28,
        zoneEnd: 68,
        effectiveRadiusPct: 46,
        extremeRadiusPct: 66,
        arcDegrees: 90,
        arcLabel: '前方 90° 廣域擴散',
        note: '反應爐直連輸出廣域高熱光束，於中近距離具備極強面狀清場能力。',
      },
      {
        role: '主戰射擊',
        name: '光束散彈步槍 (Shot Rifle)',
        rangeLabel: '150–1,450 m',
        killRadiusLabel: '1,050 m',
        extremeRangeLabel: '1,450 m',
        tier: 'mid',
        zoneStart: 30,
        zoneEnd: 78,
        effectiveRadiusPct: 56,
        extremeRadiusPct: 76,
        arcDegrees: 58,
        arcLabel: '前方 58° 散射/集中',
        note: '可切換散彈掃蕩與集中穿甲，兼具中近距突擊覆蓋率與爆發傷。',
      },
      {
        role: '感應兵器',
        name: '背部感應砲 (Funnel) × 6',
        rangeLabel: '350–2,900 m',
        killRadiusLabel: '2,150 m',
        extremeRangeLabel: '2,900 m',
        tier: 'long',
        zoneStart: 46,
        zoneEnd: 96,
        effectiveRadiusPct: 72,
        extremeRadiusPct: 96,
        arcDegrees: 360,
        arcLabel: '360° 全向包圍網',
        note: '六枚高機動感應砲執行遠程立體包夾，消除大型機體轉向死角。',
      },
      {
        role: '近戰斬擊',
        name: '高能光束戰斧 & 光束軍刀',
        rangeLabel: '2–25 m',
        killRadiusLabel: '18 m',
        extremeRangeLabel: '25 m',
        tier: 'melee',
        zoneStart: 0,
        zoneEnd: 25,
        effectiveRadiusPct: 15,
        extremeRadiusPct: 23,
        arcDegrees: 175,
        arcLabel: '前方 175° 重斬扇區',
        note: '大型光束戰斧擁有極長斬擊半徑，貼身強襲壓迫感冠絕同世代機體。',
      },
      {
        role: '攻防護盾',
        name: '內藏飛彈高強度專用盾',
        rangeLabel: '60–680 m',
        killRadiusLabel: '460 m',
        extremeRangeLabel: '680 m',
        tier: 'short',
        zoneStart: 20,
        zoneEnd: 58,
        effectiveRadiusPct: 38,
        extremeRadiusPct: 54,
        arcDegrees: 80,
        arcLabel: '前方 80° 齊射扇區',
        note: '重裝防禦同時可發射三枚內藏飛彈迫使敵機脫離有利射線。',
      },
    ],
    ratings: {
      output: 95,
      mobility: 84,
      armor: 92,
      firepower: 94,
      psycho: 88,
    },
  },
  {
    id: 'rx-0',
    code: 'RX-0',
    name: '獨角獸鋼彈 (Unicorn Gundam)',
    era: 'U.C. 0096',
    eraNumber: 96,
    universe: 'uc',
    faction: 'efsf',
    factionLabel: '畢斯特財團 / UC 計畫',
    psychoFrame: true,
    photoType: 'real',
    kitGrade: '實機檔案寫真',
    pilot: '巴納吉·林克斯',
    height: 19.7,
    weight: 23.7,
    weightMax: 42.7,
    output: 3480,
    overdriveOutput: 4920,
    thruster: 142600,
    overdriveThruster: 198000,
    armor: '鋼彈尼姆合金 + 全機精神感應框架',
    manufacturer: '阿納海姆電子公司 (格拉納達工廠)',
    engineeringNote:
      'NT-D（Newtype Destroyer）系統可強行接管敵方精神感應兵器之控制權；當駕駛員精神波長達成高度同步時，機體推進力與裝甲響應將進入極限覺醒狀態。',
    image: './src/assets/images/suit_unicorn_white_1794989046433.jpg',
    summary:
      '以全覆蓋式精神感應框架建構的實驗機種。平時以純白單角「獨角獸模式」隱藏真實面貌，偵測新人類感應波後即啟動 NT-D 系統展開裂甲型態。',
    modeStandardLabel: '獨角獸模式 · 單角偵察型態 (3,480 kW)',
    modeOverdriveLabel: 'NT-D 毀滅模式 · 全框架發光展開 (4,920 kW)',
    armaments: [
      '60mm 頭部火神砲 × 2',
      '光束麥格農 (Beam Magnum)',
      '光束拐棍 (Beam Tonfa) × 2',
      '超絕火箭砲',
      'I 力場內藏式感應防盾',
    ],
    weaponProfiles: [
      {
        role: '頭頂機砲',
        name: '60mm 頭部火神砲 × 2',
        rangeLabel: '60–420 m',
        killRadiusLabel: '280 m',
        extremeRangeLabel: '420 m',
        tier: 'short',
        zoneStart: 18,
        zoneEnd: 46,
        effectiveRadiusPct: 24,
        extremeRadiusPct: 36,
        arcDegrees: 110,
        arcLabel: '前方 110° 近防扇區',
        note: '高速連射近防武裝，輔助 NT-D 系統高速突入時牽制敵機視線。',
      },
      {
        role: '極限光束',
        name: '光束麥格農 (Beam Magnum)',
        rangeLabel: '500–3,500 m+',
        killRadiusLabel: '2,500 m',
        extremeRangeLabel: '3,500 m+',
        tier: 'long',
        zoneStart: 52,
        zoneEnd: 100,
        effectiveRadiusPct: 75,
        extremeRadiusPct: 98,
        arcDegrees: 18,
        arcLabel: '前方 18° 極限射線',
        note: '單發等同一般步槍四倍出力，超遠程光束氣流僅擦過便能蒸發目標。',
      },
      {
        role: '近戰光劍',
        name: '腕部光束拐棍 (Beam Tonfa) × 2',
        rangeLabel: '2–24 m',
        killRadiusLabel: '18 m',
        extremeRangeLabel: '24 m',
        tier: 'melee',
        zoneStart: 0,
        zoneEnd: 25,
        effectiveRadiusPct: 15,
        extremeRadiusPct: 23,
        arcDegrees: 180,
        arcLabel: '前方 180° 雙腕突刺',
        note: 'NT-D 展開雙腕直接點火突刺，零延遲覆蓋正面半圓所有近身死角。',
      },
      {
        role: '重砲壓制',
        name: '超絕火箭砲（彈匣式）',
        rangeLabel: '280–1,550 m',
        killRadiusLabel: '1,100 m',
        extremeRangeLabel: '1,550 m',
        tier: 'mid',
        zoneStart: 42,
        zoneEnd: 80,
        effectiveRadiusPct: 54,
        extremeRadiusPct: 76,
        arcDegrees: 34,
        arcLabel: '前方 34° 實彈射界',
        note: '可更換散彈彈匣對抗 I 力場與高機動機體，補足中距離實彈輸出。',
      },
      {
        role: '力場護盾',
        name: 'I 力場內藏感應防盾',
        rangeLabel: '0–2,400 m',
        killRadiusLabel: '1,650 m',
        extremeRangeLabel: '2,400 m',
        tier: 'long',
        zoneStart: 0,
        zoneEnd: 90,
        effectiveRadiusPct: 66,
        extremeRadiusPct: 88,
        arcDegrees: 360,
        arcLabel: '360° 力場／感應盾',
        note: '近身展開主動 I 力場中和光束，全感應框架共振下可遠距離體防禦。',
      },
    ],
    ratings: {
      output: 92,
      mobility: 96,
      armor: 88,
      firepower: 95,
      psycho: 99,
    },
  },
  {
    id: 'rx-93-v2',
    code: 'RX-93-ν2',
    name: 'Hi-ν 鋼彈 (Hi-Nu Gundam)',
    era: 'U.C. 0093',
    eraNumber: 94,
    universe: 'uc',
    faction: 'efsf',
    factionLabel: '地球聯邦軍（貝爾托蒂嘉的子嗣）',
    psychoFrame: true,
    photoType: 'model',
    kitGrade: 'RG 1/144 模型寫真',
    pilot: '阿姆羅·雷',
    height: 20.0,
    weight: 27.9,
    output: 3120,
    overdriveOutput: 3840,
    thruster: 108400,
    overdriveThruster: 132000,
    armor: '鋼彈尼姆合金 + 精神感應框架',
    image: './src/assets/images/model_hi_nu_1795006396879.jpg',
    summary:
      'ν 鋼彈完成熟成後的完全體設計。背部改採左右對稱雙翼推進器與可充電式 6 枚翼狀感應砲掛架，於模型市場以 RG 與 MG Ver.Ka 規格深受推崇。',
    modeStandardLabel: '對稱翼狀感應砲標準作戰模式 (3,120 kW)',
    modeOverdriveLabel: '超絕米加火箭砲 + 全感應砲共振 (3,840 kW)',
    armaments: [
      '腕部 2 連裝機關砲 & 光束軍刀',
      '可充電翼狀感應砲 × 6',
      '高出力光束步槍',
      '新型超絕火箭砲',
      '專用大型光束防盾',
    ],
    weaponProfiles: [
      {
        role: '腕部機砲',
        name: '腕部速射機砲／60mm 火神砲',
        rangeLabel: '60–440 m',
        killRadiusLabel: '290 m',
        extremeRangeLabel: '440 m',
        tier: 'short',
        zoneStart: 18,
        zoneEnd: 46,
        effectiveRadiusPct: 24,
        extremeRadiusPct: 36,
        arcDegrees: 115,
        arcLabel: '前方 115° 近防扇區',
        note: '整合於右前臂的高連射實彈防禦系統，適合迎擊飛彈與纏鬥牽制。',
      },
      {
        role: '感應兵器',
        name: '可充電翼狀感應砲 × 6',
        rangeLabel: '420–3,400 m+',
        killRadiusLabel: '2,500 m',
        extremeRangeLabel: '3,400 m+',
        tier: 'long',
        zoneStart: 48,
        zoneEnd: 100,
        effectiveRadiusPct: 75,
        extremeRadiusPct: 98,
        arcDegrees: 360,
        arcLabel: '360° 全方位攻防網',
        note: '可返回推進翼進行再充電，維持長時間全方位齊射與 I 力場屏障。',
      },
      {
        role: '主戰射擊',
        name: '專用高出力光束步槍',
        rangeLabel: '450–2,400 m',
        killRadiusLabel: '1,780 m',
        extremeRangeLabel: '2,400 m',
        tier: 'mid',
        zoneStart: 50,
        zoneEnd: 88,
        effectiveRadiusPct: 62,
        extremeRadiusPct: 84,
        arcDegrees: 22,
        arcLabel: '前方 22° 精密射界',
        note: '可切換長距離狙擊與速射連發，配合大型推進翼實施高速一擊脫離。',
      },
      {
        role: '近戰光劍',
        name: '左腕收納高能光束軍刀',
        rangeLabel: '2–24 m',
        killRadiusLabel: '18 m',
        extremeRangeLabel: '24 m',
        tier: 'melee',
        zoneStart: 0,
        zoneEnd: 24,
        effectiveRadiusPct: 14,
        extremeRadiusPct: 22,
        arcDegrees: 170,
        arcLabel: '前方 170° 雙向斬擊',
        note: '高出力光束刀刃可迅速拔刀應對高速接近戰。',
      },
      {
        role: '重砲支援',
        name: '新型超絕火箭砲 (Hyper Bazooka)',
        rangeLabel: '320–1,650 m',
        killRadiusLabel: '1,180 m',
        extremeRangeLabel: '1,650 m',
        tier: 'mid',
        zoneStart: 42,
        zoneEnd: 80,
        effectiveRadiusPct: 54,
        extremeRadiusPct: 76,
        arcDegrees: 36,
        arcLabel: '前方 36° 重裝射界',
        note: '大口徑高爆實彈火箭砲，對具備抗光束鍍膜的大型目標極具威脅。',
      },
    ],
    ratings: {
      output: 91,
      mobility: 92,
      armor: 85,
      firepower: 94,
      psycho: 93,
    },
  },
  {
    id: 'msn-06s',
    code: 'MSN-06S',
    name: '新安州 (Sinanju)',
    era: 'U.C. 0096',
    eraNumber: 97,
    universe: 'uc',
    faction: 'zeon',
    factionLabel: '新吉翁殘黨「帶袖的」',
    psychoFrame: true,
    photoType: 'model',
    kitGrade: 'MG 1/100 模型寫真',
    pilot: '弗爾·伏朗托',
    height: 22.6,
    weight: 25.2,
    output: 3240,
    overdriveOutput: 3920,
    thruster: 128600,
    overdriveThruster: 158000,
    armor: '鋼彈尼姆合金（可動感應測試骨架）',
    image: './src/assets/images/model_sinanju_1795006395711.jpg',
    summary:
      '原為亞納海姆電子研製的精神感應測試原型機「史坦因」，經帶袖的奪取後施以深紅塗裝與金邊雕飾，成為「夏亞再世」弗爾·伏朗托的高機動座機。',
    modeStandardLabel: '深紅彗星高機動壓制模式 (3,240 kW)',
    modeOverdriveLabel: '感應骨架極限向量推進 (3,920 kW)',
    armaments: [
      '60mm 頭部火神砲 × 2',
      '高出力長管光束步槍（附掛榴彈）',
      '腕部內藏光束戰斧 × 2',
      '光束軍刀 × 2',
      '帶袖徽章專用防盾',
    ],
    weaponProfiles: [
      {
        role: '頭頂機砲',
        name: '60mm 頭部火神砲 × 2',
        rangeLabel: '60–400 m',
        killRadiusLabel: '260 m',
        extremeRangeLabel: '400 m',
        tier: 'short',
        zoneStart: 18,
        zoneEnd: 46,
        effectiveRadiusPct: 24,
        extremeRadiusPct: 36,
        arcDegrees: 110,
        arcLabel: '前方 110° 近防彈幕',
        note: '高速掠襲時用以攔截追蹤飛彈與牽制敵方感測器。',
      },
      {
        role: '主戰射擊',
        name: '高出力長管光束步槍',
        rangeLabel: '420–2,350 m',
        killRadiusLabel: '1,720 m',
        extremeRangeLabel: '2,350 m',
        tier: 'mid',
        zoneStart: 48,
        zoneEnd: 88,
        effectiveRadiusPct: 62,
        extremeRadiusPct: 84,
        arcDegrees: 22,
        arcLabel: '前方 22° 精密射界',
        note: '可下掛火箭砲或榴彈發射器，兼具中遠距精密狙擊與瞬間爆破火力。',
      },
      {
        role: '近戰戰斧',
        name: '大型雙刃光束戰斧 (盾內收納)',
        rangeLabel: '2–26 m',
        killRadiusLabel: '19 m',
        extremeRangeLabel: '26 m',
        tier: 'melee',
        zoneStart: 0,
        zoneEnd: 26,
        effectiveRadiusPct: 16,
        extremeRadiusPct: 24,
        arcDegrees: 170,
        arcLabel: '前方 170° 雙刃揮斬',
        note: '可雙頭連結成大型光束長刀，搭配背部雙翼噴嘴發揮壓倒性突擊力。',
      },
      {
        role: '近戰光劍',
        name: '腕部高出力光束軍刀 × 2',
        rangeLabel: '2–20 m',
        killRadiusLabel: '15 m',
        extremeRangeLabel: '20 m',
        tier: 'melee',
        zoneStart: 0,
        zoneEnd: 22,
        effectiveRadiusPct: 13,
        extremeRadiusPct: 20,
        arcDegrees: 160,
        arcLabel: '前方 160° 速拔扇區',
        note: '內藏於護腕袖口的高速拔刀設計，近身瞬間展開刺擊。',
      },
      {
        role: '複合砲擊',
        name: '盾掛式雙聯榴彈／火箭砲',
        rangeLabel: '180–1,250 m',
        killRadiusLabel: '880 m',
        extremeRangeLabel: '1,250 m',
        tier: 'mid',
        zoneStart: 36,
        zoneEnd: 74,
        effectiveRadiusPct: 48,
        extremeRadiusPct: 70,
        arcDegrees: 42,
        arcLabel: '前方 42° 壓制射界',
        note: '掛載於專用盾牌內側，攻防一體實施中距實體爆破掩護。',
      },
    ],
    ratings: {
      output: 89,
      mobility: 95,
      armor: 84,
      firepower: 88,
      psycho: 85,
    },
  },
  {
    id: 'rx-105',
    code: 'RX-105',
    name: 'Ξ 鋼彈 (Xi Gundam)',
    era: 'U.C. 0105',
    eraNumber: 105,
    universe: 'uc',
    faction: 'efsf',
    factionLabel: '馬法堤·納比尤·艾林',
    psychoFrame: true,
    photoType: 'model',
    kitGrade: 'HGUC 1/144 模型寫真',
    pilot: '哈薩威·諾亞',
    height: 26.0,
    weight: 32.0,
    output: 3980,
    overdriveOutput: 4760,
    thruster: 160000,
    overdriveThruster: 198000,
    armor: '鋼彈尼姆合金（內藏米諾夫斯基飛行組件）',
    image: './src/assets/images/model_xi_gundam_1795006397321.jpg',
    summary:
      '全高 26 公尺的第五世代大型機動戰士，首度將米諾夫斯基飛行器直接內建於機身本體，能在大氣圈內持續超音速巡航並發射精神感應飛彈。',
    modeStandardLabel: '米諾夫斯基大氣圈巡航模式 (3,980 kW)',
    modeOverdriveLabel: '雙肩展開超音速高機動飛行型態 (4,760 kW)',
    armaments: [
      '60mm 頭部火神砲 × 2',
      '高出力光束步槍',
      '精神感應導引飛彈 (Funnel Missile)',
      '雙腕內藏大型米加粒子砲',
      '高出力光束軍刀 × 2',
    ],
    weaponProfiles: [
      {
        role: '頭頂機砲',
        name: '60mm 頭部火神砲 × 2',
        rangeLabel: '60–450 m',
        killRadiusLabel: '300 m',
        extremeRangeLabel: '450 m',
        tier: 'short',
        zoneStart: 18,
        zoneEnd: 46,
        effectiveRadiusPct: 24,
        extremeRadiusPct: 36,
        arcDegrees: 110,
        arcLabel: '前方 110° 空中點防',
        note: '高空俯衝攔截迎面飛彈與伴隨護航機的近防火力。',
      },
      {
        role: '感應飛彈',
        name: '精神感應導引飛彈 (Funnel Missile)',
        rangeLabel: '500–3,500 m+',
        killRadiusLabel: '2,550 m',
        extremeRangeLabel: '3,500 m+',
        tier: 'long',
        zoneStart: 50,
        zoneEnd: 100,
        effectiveRadiusPct: 76,
        extremeRadiusPct: 98,
        arcDegrees: 360,
        arcLabel: '360° 大氣圈追蹤',
        note: '透過腦波誘導在大氣層內以超音速曲折追擊敵機的實戰專用彈頭。',
      },
      {
        role: '主戰射擊',
        name: '專用高出力光束步槍',
        rangeLabel: '400–2,450 m',
        killRadiusLabel: '1,800 m',
        extremeRangeLabel: '2,450 m',
        tier: 'mid',
        zoneStart: 48,
        zoneEnd: 88,
        effectiveRadiusPct: 62,
        extremeRadiusPct: 84,
        arcDegrees: 24,
        arcLabel: '前方 24° 巡航射界',
        note: '配合超音速飛行姿態進行遠距離狙擊，單發貫穿戰艦防禦。',
      },
      {
        role: '肩部重砲',
        name: '肩部內藏米加粒子砲 × 2',
        rangeLabel: '300–1,900 m',
        killRadiusLabel: '1,350 m',
        extremeRangeLabel: '1,900 m',
        tier: 'mid',
        zoneStart: 40,
        zoneEnd: 82,
        effectiveRadiusPct: 54,
        extremeRadiusPct: 76,
        arcDegrees: 48,
        arcLabel: '前方 48° 重砲齊射',
        note: '由大出力反應爐直接供能的展開式砲門，瞬間傾瀉高密度能量。',
      },
      {
        role: '近戰光劍',
        name: '大型高出力光束軍刀 × 2',
        rangeLabel: '2–28 m',
        killRadiusLabel: '20 m',
        extremeRangeLabel: '28 m',
        tier: 'melee',
        zoneStart: 0,
        zoneEnd: 26,
        effectiveRadiusPct: 16,
        extremeRadiusPct: 24,
        arcDegrees: 170,
        arcLabel: '前方 170° 重型斬擊',
        note: '配合 26 公尺巨大機身與音速衝擊波進行近距強襲劈砍。',
      },
    ],
    ratings: {
      output: 94,
      mobility: 93,
      armor: 91,
      firepower: 94,
      psycho: 84,
    },
  },
  {
    id: 'xxxg-00w0',
    code: 'XXXG-00W0',
    name: '飛翼鋼彈零式 EW (Wing Zero EW)',
    era: 'A.C. 195',
    eraNumber: 201,
    universe: 'au',
    faction: 'efsf',
    factionLabel: 'L1 殖民地衛星群',
    psychoFrame: true,
    photoType: 'model',
    kitGrade: 'MG Ver.Ka 模型寫真',
    pilot: '希洛·唯',
    height: 16.7,
    weight: 8.0,
    output: 3732,
    overdriveOutput: 4320,
    thruster: 88150,
    overdriveThruster: 112000,
    armor: '鋼彈尼姆合金 (Gundanium Alloy)',
    image: './src/assets/images/model_wing_zero_ew_1795006398276.jpg',
    summary:
      '搭載 ZERO 系統與四片可動羽翼推進器的 A.C. 紀元終極原型機。輕量化至 8.0 噸卻擁有破壞殖民地等級的雙管破壞來福砲，MG Ver.Ka 與 RG 模型皆為市場長銷王牌。',
    modeStandardLabel: '大氣層飛行／標準武裝巡航 (3,732 kW)',
    modeOverdriveLabel: 'ZERO 系統全開 · 最大出力照射 (4,320 kW)',
    armaments: [
      '雙管破壞來福砲 (Twin Buster Rifle)',
      '光束軍刀 × 2（翼根收納）',
      '胸部 4 連裝機關砲 × 2',
      '背部天使羽翼裝甲組',
      '新鳥型變形防盾',
    ],
    weaponProfiles: [
      {
        role: '胸部機砲',
        name: '胸部 4 連裝機關砲 × 2',
        rangeLabel: '50–380 m',
        killRadiusLabel: '240 m',
        extremeRangeLabel: '380 m',
        tier: 'short',
        zoneStart: 18,
        zoneEnd: 44,
        effectiveRadiusPct: 24,
        extremeRadiusPct: 36,
        arcDegrees: 105,
        arcLabel: '前方 105° 近防彈幕',
        note: '高射速實體機砲，近身牽制大量無人機動人偶。',
      },
      {
        role: '極限主砲',
        name: '雙管破壞來福砲（合體最大出力）',
        rangeLabel: '800–3,800 m+',
        killRadiusLabel: '2,750 m',
        extremeRangeLabel: '3,800 m+',
        tier: 'long',
        zoneStart: 56,
        zoneEnd: 100,
        effectiveRadiusPct: 78,
        extremeRadiusPct: 99,
        arcDegrees: 16,
        arcLabel: '前方 16° 要塞殲滅線',
        note: '雙砲合體照射具備單發摧毀太空殖民地的超長程貫穿破壞力。',
      },
      {
        role: '雙管散射',
        name: '雙管破壞來福砲（分離連射型態）',
        rangeLabel: '350–2,200 m',
        killRadiusLabel: '1,620 m',
        extremeRangeLabel: '2,200 m',
        tier: 'mid',
        zoneStart: 44,
        zoneEnd: 84,
        effectiveRadiusPct: 60,
        extremeRadiusPct: 80,
        arcDegrees: 360,
        arcLabel: '360° 旋轉掃蕩射界',
        note: '雙手分持進行 360 度高速自轉掃射，瞬間清剿四面八方圍攻敵群。',
      },
      {
        role: '近戰光劍',
        name: '高出力光束軍刀 × 2',
        rangeLabel: '2–20 m',
        killRadiusLabel: '15 m',
        extremeRangeLabel: '20 m',
        tier: 'melee',
        zoneStart: 0,
        zoneEnd: 22,
        effectiveRadiusPct: 14,
        extremeRadiusPct: 21,
        arcDegrees: 165,
        arcLabel: '前方 165° 近戰扇區',
        note: '與 ZERO 系統未來預測運算同步，精準封鎖敵機閃避軌跡。',
      },
    ],
    ratings: {
      output: 91,
      mobility: 95,
      armor: 84,
      firepower: 98,
      psycho: 82,
    },
  },
  {
    id: 'gf13-017nj2',
    code: 'GF13-017NJII',
    name: '神威鋼彈 (God Gundam)',
    era: 'F.C. 0060',
    eraNumber: 202,
    universe: 'au',
    faction: 'efsf',
    factionLabel: '新日本代表 (MF)',
    psychoFrame: false,
    photoType: 'model',
    kitGrade: 'RG 1/144 模型寫真',
    pilot: '多蒙·卡修',
    height: 16.6,
    weight: 7.5,
    output: 3620,
    overdriveOutput: 5100,
    thruster: 92400,
    overdriveThruster: 128000,
    armor: '鋼彈尼姆合金超級陶瓷複合材',
    image: './src/assets/images/model_god_gundam_1795006399507.jpg',
    summary:
      '專為機動武鬥大會打造的格鬥特化型機動鬥士。透過胸部能量增幅器與背部六片日輪散熱翼釋放明鏡止水狀態，RG 版以極致人體工學關節廣受好評。',
    modeStandardLabel: '通常格鬥武裝型態 (3,620 kW)',
    modeOverdriveLabel: '明鏡止水 · Hyper Mode 金色日輪全開 (5,100 kW)',
    armaments: [
      '60mm 頭部火神砲 × 2',
      '鎖骨機砲 × 2',
      '神威斬擊光束劍 × 2',
      '爆熱神威掌 (Bakunetsu God Finger)',
      '石破天驚拳能量波',
    ],
    weaponProfiles: [
      {
        role: '鎖骨機砲',
        name: '胸部／頭部 4 門火神砲組',
        rangeLabel: '40–360 m',
        killRadiusLabel: '230 m',
        extremeRangeLabel: '360 m',
        tier: 'short',
        zoneStart: 16,
        zoneEnd: 42,
        effectiveRadiusPct: 24,
        extremeRadiusPct: 35,
        arcDegrees: 110,
        arcLabel: '前方 110° 牽制彈幕',
        note: '高速貼身突進前用以壓制敵機防禦架式的實彈火力。',
      },
      {
        role: '必殺格鬥',
        name: '爆熱神威掌 (God Finger)',
        rangeLabel: '0–16 m',
        killRadiusLabel: '12 m',
        extremeRangeLabel: '16 m',
        tier: 'melee',
        zoneStart: 0,
        zoneEnd: 20,
        effectiveRadiusPct: 16,
        extremeRadiusPct: 23,
        arcDegrees: 140,
        arcLabel: '前方 140° 零距貫穿',
        note: '將超高熱液態能量集中於右掌與護甲爪，零距離融穿敵機核心。',
      },
      {
        role: '劍術斬擊',
        name: '腰掛式神威光束劍 × 2',
        rangeLabel: '2–22 m',
        killRadiusLabel: '16 m',
        extremeRangeLabel: '22 m',
        tier: 'melee',
        zoneStart: 0,
        zoneEnd: 24,
        effectiveRadiusPct: 14,
        extremeRadiusPct: 22,
        arcDegrees: 180,
        arcLabel: '前方 180° 流派劍技',
        note: '配合柔軟可動關節施展二刀流高速拔刀斬擊。',
      },
      {
        role: '波動奧義',
        name: '流派東方不敗 · 石破天驚拳',
        rangeLabel: '180–2,200 m',
        killRadiusLabel: '1,550 m',
        extremeRangeLabel: '2,200 m',
        tier: 'long',
        zoneStart: 42,
        zoneEnd: 88,
        effectiveRadiusPct: 64,
        extremeRadiusPct: 86,
        arcDegrees: 30,
        arcLabel: '前方 30° 聚能波動',
        note: '自胸部日輪能量爐發射超高密度氣功能量球，具備遠距貫穿威力。',
      },
    ],
    ratings: {
      output: 90,
      mobility: 97,
      armor: 82,
      firepower: 86,
      psycho: 70,
    },
  },
  {
    id: 'wd-m01',
    code: 'WD-M01',
    name: '∀ 鋼彈 (Turn A Gundam)',
    era: 'C.C. 2345',
    eraNumber: 203,
    universe: 'au',
    faction: 'efsf',
    factionLabel: '民兵軍 / 黑歷史遺產',
    psychoFrame: true,
    photoType: 'model',
    kitGrade: 'MG 1/100 #100 模型寫真',
    pilot: '羅蘭·瑟亞克',
    height: 20.0,
    weight: 28.6,
    output: 27000,
    overdriveOutput: 45000,
    thruster: 118000,
    overdriveThruster: 165000,
    armor: 'IFBD 奈米機械自我修復裝甲',
    image: './src/assets/images/model_turn_a_1795006399066.jpg',
    summary:
      '於正曆年代挖掘出土的黑歷史終極遺產，採用縮退爐動力與可自我修復的奈米表面裝甲，背部可展開覆蓋行星級文明的「月光蝶」奈米分解翼。',
    modeStandardLabel: 'IFBD 縮退爐常態輸出 (27,000 kW)',
    modeOverdriveLabel: '月光蝶 (Moonlight Butterfly) 全域展開',
    armaments: [
      '專用高出力光束步槍',
      '高能光束軍刀 × 2',
      '胸部多功能格納倉飛彈',
      '鋼彈流星錘 (Hammer)',
      '月光蝶奈米分解系統',
    ],
    weaponProfiles: [
      {
        role: '主戰射擊',
        name: '高出力光束步槍（最大聚焦）',
        rangeLabel: '380–2,400 m',
        killRadiusLabel: '1,750 m',
        extremeRangeLabel: '2,400 m',
        tier: 'mid',
        zoneStart: 46,
        zoneEnd: 86,
        effectiveRadiusPct: 60,
        extremeRadiusPct: 82,
        arcDegrees: 20,
        arcLabel: '前方 20° 聚焦射線',
        note: '縮退爐供能的高密度能量束，可切換低出力威嚇與高出力貫穿。',
      },
      {
        role: '近戰光劍',
        name: '極細高頻光束軍刀 × 2',
        rangeLabel: '2–20 m',
        killRadiusLabel: '15 m',
        extremeRangeLabel: '20 m',
        tier: 'melee',
        zoneStart: 0,
        zoneEnd: 22,
        effectiveRadiusPct: 14,
        extremeRadiusPct: 21,
        arcDegrees: 165,
        arcLabel: '前方 165° 精密斬擊',
        note: '細刃高集中度設計，擅長精準切斷敵方武裝與關節而不致致命破壞。',
      },
      {
        role: '重型打擊',
        name: '強化型鋼彈流星錘 (Gundam Hammer)',
        rangeLabel: '15–140 m',
        killRadiusLabel: '95 m',
        extremeRangeLabel: '140 m',
        tier: 'short',
        zoneStart: 12,
        zoneEnd: 36,
        effectiveRadiusPct: 26,
        extremeRadiusPct: 36,
        arcDegrees: 145,
        arcLabel: '前方 145° 鏈錘揮擊',
        note: '附帶推進噴嘴的超質量鏈錘，以純物理動能碾碎 I 力場防禦。',
      },
      {
        role: '特殊全域',
        name: '月光蝶 (Moonlight Butterfly) 奈米波',
        rangeLabel: '0–4,000 m+',
        killRadiusLabel: '3,000 m',
        extremeRangeLabel: '4,000 m+',
        tier: 'long',
        zoneStart: 0,
        zoneEnd: 100,
        effectiveRadiusPct: 78,
        extremeRadiusPct: 99,
        arcDegrees: 360,
        arcLabel: '360° 全域奈米擴散',
        note: '釋放無數奈米機械將射程內一切人工結構與電子電路分解還原為砂塵。',
      },
    ],
    ratings: {
      output: 99,
      mobility: 88,
      armor: 96,
      firepower: 97,
      psycho: 92,
    },
  },
  {
    id: 'mbf-p02kai',
    code: 'MBF-P02KAI',
    name: '異端鋼彈紅色機改 (Astray Red Frame Kai)',
    era: 'C.E. 71',
    eraNumber: 210,
    universe: 'ce',
    faction: 'efsf',
    factionLabel: '奧布 / 廢物商公會',
    psychoFrame: false,
    photoType: 'model',
    kitGrade: 'MG 1/100 模型寫真',
    pilot: '羅·裘爾',
    height: 17.53,
    weight: 49.8,
    output: 1960,
    overdriveOutput: 2380,
    thruster: 82500,
    overdriveThruster: 104000,
    armor: '輕量化發泡金屬高可動外裝甲',
    image: './src/assets/images/model_astray_red_frame_1795006402357.jpg',
    summary:
      '奧布曙光社打造的紅色內骨架高機動原型機，後改裝搭載「戰術複合武裝 II L」與雙實體武士刀菊一文字、虎徹，為 PG / MG / Metal Build 最受歡迎的經典款。',
    modeStandardLabel: '近戰雙刀流高機動模式 (1,960 kW)',
    modeOverdriveLabel: '戰術複合武裝 V 型／弓箭型態展開 (2,380 kW)',
    armaments: [
      '實體日本刀 · 菊一文字 & 虎徹',
      '戰術複合武裝 II L（巨劍 / 大弓模式）',
      '75mm 自動近接防禦火神砲 × 2',
      '光束軍刀 × 2',
      '光束火把 / 光束飛刀',
    ],
    weaponProfiles: [
      {
        role: '雙刀斬擊',
        name: '實體太刀「菊一文字」＆「虎徹」',
        rangeLabel: '2–24 m',
        killRadiusLabel: '18 m',
        extremeRangeLabel: '24 m',
        tier: 'melee',
        zoneStart: 0,
        zoneEnd: 24,
        effectiveRadiusPct: 16,
        extremeRadiusPct: 24,
        arcDegrees: 180,
        arcLabel: '前方 180° 雙刀居合',
        note: '無須消耗電力的超硬度實體銳刃，可輕易切開光束或抗光束盾。',
      },
      {
        role: '巨劍重斬',
        name: '戰術複合武裝 II L · 巨劍型態',
        rangeLabel: '4–35 m',
        killRadiusLabel: '26 m',
        extremeRangeLabel: '35 m',
        tier: 'melee',
        zoneStart: 0,
        zoneEnd: 28,
        effectiveRadiusPct: 20,
        extremeRadiusPct: 29,
        arcDegrees: 165,
        arcLabel: '前方 165° 巨刃劈砍',
        note: '全長超過機體本身的大劍形態，具備壓倒性的斬擊半徑與破甲動能。',
      },
      {
        role: '光束長弓',
        name: '戰術複合武裝 II L · 大弓型態',
        rangeLabel: '400–2,300 m',
        killRadiusLabel: '1,680 m',
        extremeRangeLabel: '2,300 m',
        tier: 'mid',
        zoneStart: 46,
        zoneEnd: 86,
        effectiveRadiusPct: 60,
        extremeRadiusPct: 82,
        arcDegrees: 20,
        arcLabel: '前方 20° 光束箭矢',
        note: '將巨劍拆解變形為電磁加速長弓，發射高穿透力光束箭矢狙擊。',
      },
      {
        role: '近距防空',
        name: '75mm 自動近接對空火神砲',
        rangeLabel: '40–360 m',
        killRadiusLabel: '230 m',
        extremeRangeLabel: '360 m',
        tier: 'short',
        zoneStart: 16,
        zoneEnd: 42,
        effectiveRadiusPct: 24,
        extremeRadiusPct: 35,
        arcDegrees: 110,
        arcLabel: '前方 110° 近防扇區',
        note: '自動化近接彈幕防禦，掩護持刀突進過程的側面死角。',
      },
    ],
    ratings: {
      output: 72,
      mobility: 90,
      armor: 74,
      firepower: 84,
      psycho: 20,
    },
  },
  {
    id: 'zgmf-x10a',
    code: 'ZGMF-X10A',
    name: '自由鋼彈 (Freedom Gundam)',
    era: 'C.E. 71',
    eraNumber: 211,
    universe: 'ce',
    faction: 'zeon',
    factionLabel: '三艦同盟（獨立勢力）',
    psychoFrame: false,
    photoType: 'model',
    kitGrade: 'MG 1/100 Ver.2.0 模型寫真',
    pilot: '煌·大和',
    height: 18.03,
    weight: 71.5,
    weightMax: 71.5,
    output: 8826,
    overdriveOutput: 10500,
    thruster: 527000,
    overdriveThruster: 615000,
    armor: '相轉移裝甲 (Phase Shift Armor)',
    manufacturer: '札夫特統合設計局',
    engineeringNote:
      '反中子干擾器使核融合爐得以無限運作，讓相轉移裝甲與全砲門齊射（HiMAT 模式）不再受電池續航力限制，徹底改變戰場制空權的平衡。',
    image: './src/assets/images/model_freedom_gundam_1795007111557.jpg',
    summary:
      '札夫特秘密開發的核動力機體，搭載反中子干擾器與相轉移裝甲，能以高機動空戰姿態同時鎖定多目標執行 HiMAT 全砲門齊射。',
    modeStandardLabel: '反中子干擾器核能常態巡航 (8,826 kW)',
    modeOverdriveLabel: 'HiMAT 全砲門齊射 · 雙翼高機動展開 (10,500 kW)',
    armaments: [
      '鯨式等離子收束光束砲 × 2',
      '旗魚式電磁軌道砲 × 2',
      '狼式光束步槍 (MA-M20)',
      '雙刃高出力光束軍刀 × 2',
      '高機動主動空氣動力翼＆防盾',
    ],
    weaponProfiles: [
      {
        role: '電漿主砲',
        name: '鯨式等離子收束光束砲 × 2',
        rangeLabel: '600–3,200 m+',
        killRadiusLabel: '2,300 m',
        extremeRangeLabel: '3,200 m+',
        tier: 'long',
        zoneStart: 50,
        zoneEnd: 96,
        effectiveRadiusPct: 72,
        extremeRadiusPct: 96,
        arcDegrees: 24,
        arcLabel: '前方 24° 高能齊射',
        note: '收納於背部翼展系統中，可於全砲門展開時進行高出力遠距齊射貫穿戰艦裝甲。',
      },
      {
        role: '腰部磁軌',
        name: '旗魚式電磁軌道砲 × 2',
        rangeLabel: '220–1,650 m',
        killRadiusLabel: '1,180 m',
        extremeRangeLabel: '1,650 m',
        tier: 'mid',
        zoneStart: 36,
        zoneEnd: 78,
        effectiveRadiusPct: 54,
        extremeRadiusPct: 76,
        arcDegrees: 38,
        arcLabel: '前方 38° 高速實彈',
        note: '腰部折疊式實彈軌道砲，具備不耗費過多光束電能的高速貫穿能力。',
      },
      {
        role: '主戰射擊',
        name: '狼式光束步槍 (MA-M20)',
        rangeLabel: '280–1,950 m',
        killRadiusLabel: '1,420 m',
        extremeRangeLabel: '1,950 m',
        tier: 'mid',
        zoneStart: 42,
        zoneEnd: 84,
        effectiveRadiusPct: 60,
        extremeRadiusPct: 82,
        arcDegrees: 26,
        arcLabel: '前方 26° 速射射界',
        note: '高連射性標準光束武器，可與腰際光束軍刀形成近中距高速連攜。',
      },
      {
        role: '近戰光劍',
        name: '雙刃高出力光束軍刀 × 2',
        rangeLabel: '2–22 m',
        killRadiusLabel: '16 m',
        extremeRangeLabel: '22 m',
        tier: 'melee',
        zoneStart: 0,
        zoneEnd: 24,
        effectiveRadiusPct: 15,
        extremeRadiusPct: 23,
        arcDegrees: 170,
        arcLabel: '前方 170° 雙劍扇區',
        note: '可連結成雙頭薙刀形態，配合主動空戰翼執行高速近身纏鬥。',
      },
      {
        role: '全砲門網',
        name: '多重鎖定全砲門齊射 (HiMAT)',
        rangeLabel: '300–2,800 m',
        killRadiusLabel: '2,050 m',
        extremeRangeLabel: '2,800 m',
        tier: 'long',
        zoneStart: 44,
        zoneEnd: 92,
        effectiveRadiusPct: 68,
        extremeRadiusPct: 90,
        arcDegrees: 180,
        arcLabel: '前方 180° 多重鎖定',
        note: '多重目標鎖定系統同步啟動鯨式砲、旗魚砲與步槍，一瞬間壓制複數敵機。',
      },
    ],
    ratings: {
      output: 97,
      mobility: 96,
      armor: 92,
      firepower: 96,
      psycho: 45,
    },
  },
  {
    id: 'gn-0000-010',
    code: 'GN-0000+GNR-010',
    name: '00 強化模組 (00 Raiser)',
    era: 'A.D. 2312',
    eraNumber: 220,
    universe: 'au',
    faction: 'efsf',
    factionLabel: '天人組織 (Celestial Being)',
    psychoFrame: true,
    photoType: 'model',
    kitGrade: 'RG 1/144 模型寫真',
    pilot: '剎那·F·塞耶',
    height: 18.3,
    weight: 75.1,
    output: 5600,
    overdriveOutput: 11200,
    thruster: 158000,
    overdriveThruster: 245000,
    armor: 'E-碳纖維裝甲 + GN 力場護罩',
    image: './src/assets/images/model_00_raiser_1795006402048.jpg',
    summary:
      '雙肩搭載兩具原始太陽爐並與支援機 O Raiser 合體的革命性機體。藉由雙爐同步系統使 GN 粒子產量呈平方倍躍升，達成量子化閃避與超巨型光束劍斬擊。',
    modeStandardLabel: 'Twin Drive 雙爐常態同步模式 (5,600 kW)',
    modeOverdriveLabel: 'TRANS-AM RAISER · 量子化腦波共振模式',
    armaments: [
      'GN 劍 III（步槍 / 長劍雙用）',
      'GN 劍 II × 2',
      'GN 盾刃 × 2',
      'GN 光束軍刀 × 2',
      'RAISER SWORD 超大型光束劍',
    ],
    weaponProfiles: [
      {
        role: '主戰劍槍',
        name: 'GN 劍 III（步槍／實劍轉換）',
        rangeLabel: '120–1,950 m',
        killRadiusLabel: '1,420 m',
        extremeRangeLabel: '1,950 m',
        tier: 'mid',
        zoneStart: 38,
        zoneEnd: 82,
        effectiveRadiusPct: 56,
        extremeRadiusPct: 78,
        arcDegrees: 32,
        arcLabel: '前方 32° 連射／劍擊',
        note: '高透射率綠色結晶刃兼備三連裝 GN 光束槍，攻防轉換零延遲。',
      },
      {
        role: '近戰雙劍',
        name: 'GN 劍 II 雙刀流／光束軍刀',
        rangeLabel: '2–24 m',
        killRadiusLabel: '18 m',
        extremeRangeLabel: '24 m',
        tier: 'melee',
        zoneStart: 0,
        zoneEnd: 24,
        effectiveRadiusPct: 15,
        extremeRadiusPct: 23,
        arcDegrees: 180,
        arcLabel: '前方 180° 高速連斬',
        note: '配合雙太陽爐爆發加速度，於近身格鬥徹底貫穿 E-碳裝甲。',
      },
      {
        role: '量子領域',
        name: 'TRANS-AM 量子粒子廣域共振',
        rangeLabel: '0–1,200 m',
        killRadiusLabel: '850 m',
        extremeRangeLabel: '1,200 m',
        tier: 'short',
        zoneStart: 0,
        zoneEnd: 68,
        effectiveRadiusPct: 44,
        extremeRadiusPct: 64,
        arcDegrees: 360,
        arcLabel: '360° 量子感應領域',
        note: '高純度 GN 粒子展開全向力場並實現局部空間量子化閃避。',
      },
      {
        role: '極限斬艦',
        name: 'RAISER SWORD（超大型粒子巨劍）',
        rangeLabel: '300–3,800 m+',
        killRadiusLabel: '2,800 m',
        extremeRangeLabel: '3,800 m+',
        tier: 'long',
        zoneStart: 54,
        zoneEnd: 100,
        effectiveRadiusPct: 78,
        extremeRadiusPct: 99,
        arcDegrees: 18,
        arcLabel: '前方 18° 超巨刃橫掃',
        note: 'TRANS-AM 下將 GN 劍 III 粒子延伸數公里，一刀兩斷軌道衛星與艦隊。',
      },
    ],
    ratings: {
      output: 96,
      mobility: 98,
      armor: 89,
      firepower: 96,
      psycho: 95,
    },
  },
  {
    id: 'asw-g-08',
    code: 'ASW-G-08',
    name: '獵魔鋼彈天狼型帝王 (Barbatos Lupus Rex)',
    era: 'P.D. 323',
    eraNumber: 230,
    universe: 'au',
    faction: 'zeon',
    factionLabel: '鐵華團 (Tekkadan)',
    psychoFrame: true,
    photoType: 'model',
    kitGrade: 'MGSD / FM 1/100 模型寫真',
    pilot: '三日月·奧古斯',
    height: 19.0,
    weight: 32.1,
    output: 3150,
    overdriveOutput: 4400,
    thruster: 112000,
    overdriveThruster: 156000,
    armor: '奈米積層裝甲 + 雙亞哈反應爐骨架',
    image: './src/assets/images/model_barbatos_lupus_rex_1795006403514.jpg',
    summary:
      '配備雙亞哈反應爐與「阿賴耶識系統」直連操控的近戰野獸化機體。雙腕換裝巨型黃金銳爪並搭載可遠端操控的尾部線控刀，對光束武器具完全免疫。',
    modeStandardLabel: '阿賴耶識標準神經連結 (3,150 kW)',
    modeOverdriveLabel: '阿賴耶識解除限制 · 紅眼狂戰士模式 (4,400 kW)',
    armaments: [
      '超大型雙手鎚矛 (Ultra Large Mace)',
      '超硬質黃金銳爪 (Rex Nail) × 2',
      '線控式尾部刀刃 (Tail Blade)',
      '腕部 200mm 滑膛砲 × 2',
      '腳跟打樁機 (Pile Bunker) × 2',
    ],
    weaponProfiles: [
      {
        role: '重型鈍擊',
        name: '超大型雙手鎚矛 (Ultra Large Mace)',
        rangeLabel: '2–30 m',
        killRadiusLabel: '22 m',
        extremeRangeLabel: '30 m',
        tier: 'melee',
        zoneStart: 0,
        zoneEnd: 26,
        effectiveRadiusPct: 18,
        extremeRadiusPct: 26,
        arcDegrees: 170,
        arcLabel: '前方 170° 壓碎扇區',
        note: '依靠雙亞哈爐產生的壓倒性重力慣性，以純粹物理質量連帶奈米裝甲一同粉碎。',
      },
      {
        role: '野獸銳爪',
        name: '超硬質大型黃金銳爪 (Rex Nail)',
        rangeLabel: '0–16 m',
        killRadiusLabel: '12 m',
        extremeRangeLabel: '16 m',
        tier: 'melee',
        zoneStart: 0,
        zoneEnd: 20,
        effectiveRadiusPct: 13,
        extremeRadiusPct: 20,
        arcDegrees: 160,
        arcLabel: '前方 160° 撕裂爪擊',
        note: '採用稀有高強度合金鍛造的巨爪，近身直接撕裂敵機駕駛艙與關節。',
      },
      {
        role: '腕部實彈',
        name: '腕部雙聯 200mm 實彈砲',
        rangeLabel: '120–980 m',
        killRadiusLabel: '690 m',
        extremeRangeLabel: '980 m',
        tier: 'mid',
        zoneStart: 28,
        zoneEnd: 68,
        effectiveRadiusPct: 46,
        extremeRadiusPct: 66,
        arcDegrees: 48,
        arcLabel: '前方 48° 實彈壓制',
        note: '中近距實彈火力支援，對付奈米積層裝甲比光束武器更為有效。',
      },
      {
        role: '線控尾刃',
        name: '亞哈神經線控尾部刀刃 (Tail Blade)',
        rangeLabel: '25–480 m',
        killRadiusLabel: '340 m',
        extremeRangeLabel: '480 m',
        tier: 'short',
        zoneStart: 16,
        zoneEnd: 52,
        effectiveRadiusPct: 32,
        extremeRadiusPct: 48,
        arcDegrees: 360,
        arcLabel: '360° 無死角鞭擊',
        note: '源自 MA 哈斯蒙的殘骸兵器，透過神經直連執行 360 度高速突刺追擊。',
      },
    ],
    ratings: {
      output: 86,
      mobility: 94,
      armor: 91,
      firepower: 85,
      psycho: 88,
    },
  },
  {
    id: 'xvx-016rn',
    code: 'XVX-016RN',
    name: '風靈鋼彈改修型 (Gundam Aerial Rebuild)',
    era: 'A.S. 122',
    eraNumber: 240,
    universe: 'au',
    faction: 'efsf',
    factionLabel: '新世開發公社 / 地球寮',
    psychoFrame: true,
    photoType: 'model',
    kitGrade: 'HG TWFM / FM 模型寫真',
    pilot: '蘇萊塔·墨丘利',
    height: 18.2,
    weight: 47.2,
    output: 3420,
    overdriveOutput: 4680,
    thruster: 124000,
    overdriveThruster: 162000,
    armor: 'GUND-ARM 帕梅特共鳴殼層複合裝甲',
    image: './src/assets/images/model_aerial_rebuild_1795006403764.jpg',
    summary:
      '水星魔女代表性主角機的全面強化規格。背部換裝大型高機動推進背包，11 枚 GUND 子機可兼作全向防護盾或連結步槍成為超大出力砲擊形態。',
    modeStandardLabel: '帕梅特刻痕 4 · 子機聯動標準模式 (3,420 kW)',
    modeOverdriveLabel: '帕梅特刻痕 8 · 全機數據風暴共振 (4,680 kW)',
    armaments: [
      'GUND-BIT 步槍（長距離砲擊型態）',
      '11 枚聯動式浮游子機 (Bit Staves)',
      '高出力光束軍刀 × 2',
      '大型雙推進飛行背包',
      '數據風暴廣域覆寫場',
    ],
    weaponProfiles: [
      {
        role: '精準射擊',
        name: 'GUND-BIT 光束步槍（標準／連射）',
        rangeLabel: '280–2,050 m',
        killRadiusLabel: '1,480 m',
        extremeRangeLabel: '2,050 m',
        tier: 'mid',
        zoneStart: 42,
        zoneEnd: 82,
        effectiveRadiusPct: 56,
        extremeRadiusPct: 78,
        arcDegrees: 24,
        arcLabel: '前方 24° 精密點射',
        note: '槍管內置能量導流結構，可因應接戰距離調整光束收束率。',
      },
      {
        role: '重砲組合',
        name: 'GUND-BIT 長管高出力砲型態',
        rangeLabel: '600–3,300 m+',
        killRadiusLabel: '2,400 m',
        extremeRangeLabel: '3,300 m+',
        tier: 'long',
        zoneStart: 54,
        zoneEnd: 98,
        effectiveRadiusPct: 74,
        extremeRadiusPct: 96,
        arcDegrees: 16,
        arcLabel: '前方 16° 超遠貫穿',
        note: '將全部 11 枚子機鑲嵌至槍身構成高出力炮管，展現毀滅級貫穿火力。',
      },
      {
        role: '子機防網',
        name: '11 枚 GUND 子機全向攻防陣列',
        rangeLabel: '80–2,200 m',
        killRadiusLabel: '1,550 m',
        extremeRangeLabel: '2,200 m',
        tier: 'long',
        zoneStart: 24,
        zoneEnd: 86,
        effectiveRadiusPct: 62,
        extremeRadiusPct: 84,
        arcDegrees: 360,
        arcLabel: '360° 數據共振子機網',
        note: '艾莉克特與機體高度同步操控，同時進行多角度光束齊射與圓盾防禦。',
      },
      {
        role: '近戰光劍',
        name: '高出力光束軍刀 × 2',
        rangeLabel: '2–20 m',
        killRadiusLabel: '15 m',
        extremeRangeLabel: '20 m',
        tier: 'melee',
        zoneStart: 0,
        zoneEnd: 22,
        effectiveRadiusPct: 14,
        extremeRadiusPct: 21,
        arcDegrees: 165,
        arcLabel: '前方 165° 靈活斬擊',
        note: '搭配大推進力背包實施近距急速迂迴斬擊。',
      },
    ],
    ratings: {
      output: 90,
      mobility: 93,
      armor: 86,
      firepower: 93,
      psycho: 96,
    },
  },
  {
    id: 'zgmf-x42s-revo',
    code: 'ZGMF-X42S-REVO',
    name: '命運鋼彈 Spec II (Destiny Gundam Spec II)',
    era: 'C.E. 75',
    eraNumber: 250,
    universe: 'ce',
    faction: 'zeon',
    factionLabel: '世界和平監視機構「羅盤」',
    psychoFrame: false,
    photoType: 'model',
    kitGrade: 'HGCE / RG 模型寫真',
    pilot: '真·飛鳥',
    height: 18.08,
    weight: 79.44,
    output: 4650,
    overdriveOutput: 5820,
    thruster: 168000,
    overdriveThruster: 220000,
    armor: 'VPS 可變相轉移裝甲',
    image: './src/assets/images/model_destiny_spec2_1795006399815.jpg',
    summary:
      '《機動戰士鋼彈 SEED FREEDOM》登場的高機動萬能機體改修型。升級超重氫核融合爐與全新骨架，光之翼全開可產生大量分身殘影壓制多數敵機，市場極為熱門。',
    modeStandardLabel: '超重氫核能 VPS 裝甲常態模式 (4,650 kW)',
    modeOverdriveLabel: '光之翼全開 · 高速分身突擊模式 (5,820 kW)',
    armaments: [
      'MMI-714「亞隆戴特」對艦刀',
      'M2000GX 高能長距離光束砲',
      'MMI-X340「掌中槍」光束砲 × 2',
      'RQM60F 光束迴旋鏢 × 2',
      '「光之翼」分身推進系統',
    ],
    weaponProfiles: [
      {
        role: '對艦巨劍',
        name: '「亞隆戴特」大型對艦刀',
        rangeLabel: '3–32 m',
        killRadiusLabel: '24 m',
        extremeRangeLabel: '32 m',
        tier: 'melee',
        zoneStart: 0,
        zoneEnd: 26,
        effectiveRadiusPct: 18,
        extremeRadiusPct: 26,
        arcDegrees: 170,
        arcLabel: '前方 170° 高速斬艦',
        note: '結合實劍銳利度與光束刃高熱，配合光之翼高速突入一刀斷艦。',
      },
      {
        role: '掌中光砲',
        name: '雙腕「掌中槍」+ 光束迴旋鏢',
        rangeLabel: '0–420 m',
        killRadiusLabel: '280 m',
        extremeRangeLabel: '420 m',
        tier: 'short',
        zoneStart: 10,
        zoneEnd: 46,
        effectiveRadiusPct: 26,
        extremeRadiusPct: 38,
        arcDegrees: 145,
        arcLabel: '前方 145° 零距格鬥',
        note: '貼身抓握直接引爆零距離光束砲，或投擲迴旋鏢實施多向牽制。',
      },
      {
        role: '主戰長砲',
        name: '高能長距離光束砲 (M2000GX)',
        rangeLabel: '500–3,400 m+',
        killRadiusLabel: '2,450 m',
        extremeRangeLabel: '3,400 m+',
        tier: 'long',
        zoneStart: 52,
        zoneEnd: 98,
        effectiveRadiusPct: 74,
        extremeRadiusPct: 96,
        arcDegrees: 18,
        arcLabel: '前方 18° 長程狙擊',
        note: '由右肩展開向前方直射的超長射程高能粒子砲。',
      },
      {
        role: '光翼突襲',
        name: '光之翼分身突擊與多機同時壓制',
        rangeLabel: '80–1,450 m',
        killRadiusLabel: '1,020 m',
        extremeRangeLabel: '1,450 m',
        tier: 'mid',
        zoneStart: 28,
        zoneEnd: 74,
        effectiveRadiusPct: 50,
        extremeRadiusPct: 70,
        arcDegrees: 360,
        arcLabel: '360° 高速殘影領域',
        note: '散播高濃度幻象化粒子製造數十具立體殘影擾亂敵軍火控。',
      },
    ],
    ratings: {
      output: 95,
      mobility: 98,
      armor: 89,
      firepower: 94,
      psycho: 55,
    },
  },
  {
    id: 'zgmf-a262pd-p',
    code: 'ZGMF/A-262PD-P',
    name: '非凡攻擊自由鋼彈 (Mighty Strike Freedom)',
    era: 'C.E. 75',
    eraNumber: 251,
    universe: 'ce',
    faction: 'efsf',
    factionLabel: '世界和平監視機構「羅盤」',
    psychoFrame: true,
    photoType: 'model',
    kitGrade: 'HGCE / Metal Robot 模型寫真',
    pilot: '煌·大和 ＆ 拉克絲·克萊因',
    height: 18.88,
    weight: 78.9,
    output: 5400,
    overdriveOutput: 7200,
    thruster: 185000,
    overdriveThruster: 248000,
    armor: 'VPS 裝甲 + 金色相轉移關節骨架',
    image: './src/assets/images/model_mighty_strike_freedom_1795006399692.jpg',
    summary:
      '攻擊自由鋼彈貳式與「榮耀捍衛者 (Proud Defender)」合體後的最強決戰型態。配備奈米粒子雷暴、雙管光束步槍與額頭隱藏式空間收束砲「收斂火砲 (Disruptor)」。',
    modeStandardLabel: '榮耀捍衛者合體 · 全火力展開模式 (5,400 kW)',
    modeOverdriveLabel: '收斂火砲 (Disruptor) ＆ 奈米雷暴釋放 (7,200 kW)',
    armaments: [
      '額部「收斂火砲 (Disruptor)」',
      '實體日本刀「布都御魂」',
      '高能量光束步槍 × 2（連結射擊）',
      '旗魚 3 式磁軌砲 × 2',
      '榮耀捍衛者全向放電奈米雲',
    ],
    weaponProfiles: [
      {
        role: '實體名刀',
        name: '實體對艦刀「布都御魂」',
        rangeLabel: '2–26 m',
        killRadiusLabel: '19 m',
        extremeRangeLabel: '26 m',
        tier: 'melee',
        zoneStart: 0,
        zoneEnd: 24,
        effectiveRadiusPct: 16,
        extremeRadiusPct: 24,
        arcDegrees: 175,
        arcLabel: '前方 175° 破甲居合',
        note: '專為對抗抗光束裝甲所配備的高週波實體太刀，搭配金色骨架爆發斬擊。',
      },
      {
        role: '腰部磁軌',
        name: '旗魚 3 式雙聯磁軌砲＆腹部光束砲',
        rangeLabel: '240–1,850 m',
        killRadiusLabel: '1,320 m',
        extremeRangeLabel: '1,850 m',
        tier: 'mid',
        zoneStart: 38,
        zoneEnd: 80,
        effectiveRadiusPct: 54,
        extremeRadiusPct: 76,
        arcDegrees: 42,
        arcLabel: '前方 42° 複合作戰射界',
        note: '兼顧高速實彈電磁拋射與零延遲腹部能量束連擊。',
      },
      {
        role: '全向雷暴',
        name: '榮耀捍衛者 · 奈米粒子全向雷擊',
        rangeLabel: '100–2,500 m',
        killRadiusLabel: '1,850 m',
        extremeRangeLabel: '2,500 m',
        tier: 'long',
        zoneStart: 28,
        zoneEnd: 90,
        effectiveRadiusPct: 64,
        extremeRadiusPct: 86,
        arcDegrees: 360,
        arcLabel: '360° 全域雷暴鎖定',
        note: '釋放高壓黃金奈米粒子雲，瞬間鎖定並電擊毀滅射程內無數來襲飛彈與敵機。',
      },
      {
        role: '空間殲滅',
        name: '額部「收斂火砲 (Disruptor)」',
        rangeLabel: '800–4,200 m+',
        killRadiusLabel: '3,100 m',
        extremeRangeLabel: '4,200 m+',
        tier: 'long',
        zoneStart: 58,
        zoneEnd: 100,
        effectiveRadiusPct: 80,
        extremeRadiusPct: 99,
        arcDegrees: 14,
        arcLabel: '前方 14° 超高能收斂線',
        note: '由雙人聯動解鎖的究極光子收斂兵器，一擊貫穿月球要塞級護盾與戰艦。',
      },
    ],
    ratings: {
      output: 98,
      mobility: 97,
      armor: 92,
      firepower: 99,
      psycho: 86,
    },
  },
];

/** @type {Record<string, {kicker: string, title: string, prose: string, breakthrough: string, representative: string, armorGen: string, unitId: string, unitLabel: string}>} */
const ERA_TIMELINE = {
  '0079': {
    kicker: 'U.C. 0079 · 一年戰爭與 V 作戰',
    title: '人型機動兵器確立戰場主導權',
    prose:
      '由於米諾夫斯基粒子造成傳統雷達與長距離導彈失效，視距內肉眼接戰使吉翁公國的薩克 II 取得壓倒性優勢。地球聯邦軍隨即啟動 V 作戰，開發出搭載小型熱核反應爐與月神鈦合金裝甲的 RX-78-2 鋼彈，首度將戰艦級光束武器縮小至單機攜帶規格。',
    breakthrough: '小型米諾夫斯基核融合爐與光束步槍',
    representative: 'RX-78-2 鋼彈 / MS-06S 薩克 II',
    armorGen: '超高張力鋼 → 月神鈦合金',
    unitId: 'rx-78-2',
    unitLabel: '檢視 RX-78-2 鋼彈檔案',
  },
  '0087': {
    kicker: 'U.C. 0087 · 格里普斯戰役',
    title: '可動骨架與大氣層突入可變形機構',
    prose:
      '舊式單殼式裝甲結構限制了關節可動度與整備效率。亞納海姆電子公司與幽谷聯手導入「可動骨架 (Movable Frame)」概念，將動力管線與致動器整合於內部骨架中，造就兼具高機動力與單機變形突入大氣層能力的 MSZ-006 Z 鋼彈。',
    breakthrough: '全內部可動骨架與生物感測器',
    representative: 'MSZ-006 Z 鋼彈',
    armorGen: '鋼彈尼姆合金 γ',
    unitId: 'msz-006',
    unitLabel: '檢視 MSZ-006 Z 鋼彈檔案',
  },
  '0093': {
    kicker: 'U.C. 0093 · 第二次新吉翁戰爭',
    title: '精神感應框架微型化與翼狀感應砲',
    prose:
      '將過去僅能安裝在大型機動堡壘的精神感應系統晶片直接鑄造於金屬結構中，誕生出「精神感應框架 (Psycho-Frame)」。這項技術讓 MSN-04 沙薩比與 RX-93 ν 鋼彈在標準體積內實現近乎零延遲的念動操控與感應砲遠距立體火力網。',
    breakthrough: '金屬結晶化精神感應框架',
    representative: 'RX-93 ν 鋼彈 / MSN-04 沙薩比',
    armorGen: '局部精神感應框架複合裝甲',
    unitId: 'rx-93',
    unitLabel: '檢視 RX-93 ν 鋼彈檔案',
  },
  '0096': {
    kicker: 'U.C. 0096–0105 · 拉普拉斯之亂至馬法堤動亂',
    title: '全機精神感應框架與米諾夫斯基飛行內建化',
    prose:
      '從獨角獸鋼彈與新安州驗證全機可動感應框架後，U.C. 0105 的 RX-105 Ξ 鋼彈更突破性將米諾夫斯基飛行器直接整合進大型機體內部，無須輔助載具即可於大氣圈內超音速巡航與發射感應導引飛彈。',
    breakthrough: '全覆蓋感應框架與內建式米諾夫斯基飛行器',
    representative: 'RX-0 獨角獸 / MSN-06S 新安州 / RX-105 Ξ 鋼彈',
    armorGen: '全感應框架 → 飛行整合重裝甲',
    unitId: 'rx-0',
    unitLabel: '檢視 RX-0 獨角獸鋼彈檔案',
  },
  ce71: {
    kicker: 'C.E. 71.05 · 反中子干擾器實用化與自由鋼彈出擊',
    title: '核動力相轉移裝甲與全砲門制空時代',
    prose:
      '搭載核動力引擎、反中子干擾器與相轉移裝甲的 ZGMF-X10A 自由鋼彈投入戰線，徹底解除電池續航限制，能以主動高機動飛翼與 HiMAT 全砲門齊射同時鎖定多目標主導空戰制空權。',
    breakthrough: '反中子干擾器核能系統 + 相轉移裝甲',
    representative: 'ZGMF-X10A 自由鋼彈 / MBF-P02KAI 紅色機改',
    armorGen: 'PS 相轉移裝甲 / 輕量化發泡金屬',
    unitId: 'zgmf-x10a',
    unitLabel: '檢視 ZGMF-X10A 自由鋼彈檔案',
  },
  multiverse: {
    kicker: 'C.E. 75 / A.D. / P.D. / A.S. / C.C. · 跨紀元多元動力架構',
    title: '太陽爐、超重氫、亞哈爐與帕梅特共鳴世代',
    prose:
      '跳脫宇宙世紀米諾夫斯基體系，各大紀元發展出截然不同的機體動力源：C.E. 75 以超重氫核融合驅動 VPS 裝甲與光之翼；A.D. 紀元藉由 00 雙太陽爐實現量子化；P.D. 紀元以抗光束奈米積層裝甲與雙亞哈爐主宰近戰；A.S. 紀元則以 GUND-ARM 帕梅特刻痕構築全向子機系統。',
    breakthrough: 'Twin Drive 雙爐 / 超重氫 / 亞哈雙爐 / 帕梅特子機',
    representative: '非凡攻擊自由 / 00強化模組 / 獵魔帝王 / 風靈改修型',
    armorGen: 'VPS 相轉移 / E-碳 / 奈米積層 / GUND 殼層',
    unitId: 'zgmf-a262pd-p',
    unitLabel: '檢視非凡攻擊自由鋼彈檔案',
  },
};

/** @type {{filter: string, search: string, sort: string, compareA: string, compareB: string, scaleA: string, scaleB: string, activeEra: string, modalSuitId: string | null, modalOverdrive: boolean, hoveredAxisIndex: number | null, heatmapMode: 'matrix' | 'spectrum', maintenanceSuitId: string, maintenanceChecks: Record<string, Record<string, boolean>>, maintenanceCompletedAt: Record<string, string>, weaponViewSuits: Set<string>, selectedWeaponBySuit: Record<string, number>, radarWeaponsBySuit: Record<string, Set<number>>, modalRadarWeapons: Set<number>}} */
const state = {
  filter: 'all',
  search: '',
  sort: 'era',
  compareA: 'rx-78-2',
  compareB: 'zgmf-x10a',
  scaleA: 'rx-78-2',
  scaleB: 'rx-105',
  activeEra: '0079',
  modalSuitId: null,
  modalOverdrive: false,
  hoveredAxisIndex: null,
  heatmapMode: 'matrix',
  maintenanceSuitId: 'rx-78-2',
  maintenanceChecks: {},
  maintenanceCompletedAt: {},
  weaponViewSuits: new Set(),
  selectedWeaponBySuit: {
    'rx-78-2': 2,
    'ms-06s': 0,
    'msz-006': 4,
    'rx-93': 1,
    'msn-04': 2,
    'rx-0': 1,
    'rx-93-v2': 1,
    'msn-06s': 2,
    'rx-105': 1,
    'xxxg-00w0': 1,
    'gf13-017nj2': 1,
    'wd-m01': 3,
    'mbf-p02kai': 0,
    'zgmf-x10a': 0,
    'gn-0000-010': 3,
    'asw-g-08': 0,
    'xvx-016rn': 1,
    'zgmf-x42s-revo': 0,
    'zgmf-a262pd-p': 3,
  },
  radarWeaponsBySuit: {},
  modalRadarWeapons: new Set(),
};

// DOM Elements
const suitGrid = document.getElementById('suit-grid');
const emptyState = document.getElementById('empty-state');
const searchInput = document.getElementById('suit-search');
const sortSelect = document.getElementById('suit-sort');
const resetFiltersBtn = document.getElementById('reset-filters-btn');
const filterTabs = document.querySelectorAll('.filter-tab');
const scaleSelectA = document.getElementById('scale-select-a');
const scaleSelectB = document.getElementById('scale-select-b');
const scaleSwapBtn = document.getElementById('scale-swap-btn');
const scaleStage = document.getElementById('scale-stage');
const scaleMetrics = document.getElementById('scale-metrics');

const compareSelectA = document.getElementById('compare-select-a');
const compareSelectB = document.getElementById('compare-select-b');
const compareSwapBtn = document.getElementById('compare-swap-btn');
const canvasWrap = document.querySelector('.canvas-wrap');
const radarCanvas = document.getElementById('radar-canvas');
const radarTooltip = document.getElementById('radar-tooltip');
const legendNameA = document.getElementById('legend-name-a');
const legendNameB = document.getElementById('legend-name-b');
const thUnitA = document.getElementById('th-unit-a');
const thUnitB = document.getElementById('th-unit-b');
const compareTableBody = document.getElementById('compare-table-body');
const compareSummaryNote = document.getElementById('compare-summary-note');
const heatmapScaleA = document.getElementById('heatmap-scale-a');
const heatmapScaleB = document.getElementById('heatmap-scale-b');
const heatmapBody = document.getElementById('heatmap-body');
const heatmapSummary = document.getElementById('heatmap-summary');
const heatmapModeTabs = document.querySelectorAll('.heatmap-mode-tab');

const timelineTabs = document.querySelectorAll('.timeline-tab');
const timelineDetail = document.getElementById('timeline-detail');

const maintenanceSuitSelect = document.getElementById('maintenance-suit-select');
const maintenanceCheckAllBtn = document.getElementById('maintenance-check-all');
const maintenanceResetBtn = document.getElementById('maintenance-reset-btn');
const maintenanceProgressText = document.getElementById('maintenance-progress-text');
const maintenanceProgressFill = document.getElementById('maintenance-progress-fill');
const maintenanceChecklist = document.getElementById('maintenance-checklist');
const maintenanceReport = document.getElementById('maintenance-report');

const modal = document.getElementById('suit-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalMeta = document.getElementById('modal-meta');
const modalTitle = document.getElementById('modal-title');
const modalMediaFrame = document.getElementById('modal-media-frame');
const modalRadarOverlay = document.getElementById('modal-radar-overlay');
const modalImg = document.getElementById('modal-img');
const modalFallbackCode = document.getElementById('modal-fallback-code');
const modalModeToggle = document.getElementById('modal-mode-toggle');
const modalModeDesc = document.getElementById('modal-mode-desc');
const modalSummary = document.getElementById('modal-summary');
const modalSpecs = document.getElementById('modal-specs');
const modalArmaments = document.getElementById('modal-armaments');
const modalEngineeringBox = document.getElementById('modal-engineering-box');
const modalAssignA = document.getElementById('modal-assign-a');
const modalAssignB = document.getElementById('modal-assign-b');
const modalAssignScale = document.getElementById('modal-assign-scale');

const launchModal = document.getElementById('launch-modal');
const launchModalKicker = document.getElementById('launch-modal-kicker');
const launchModalTitle = document.getElementById('launch-modal-title');
const launchModalCloseBtn = document.getElementById('launch-modal-close-btn');
const launchCanvas = document.getElementById('launch-canvas');
const launchPhaseSteps = document.querySelectorAll('.launch-phase-step');
const launchBayMeta = document.getElementById('launch-bay-meta');
const launchCallout = document.getElementById('launch-callout');
const launchSceneDesc = document.getElementById('launch-scene-desc');
const launchReplayBtn = document.getElementById('launch-replay-btn');
const launchCloseBottomBtn = document.getElementById('launch-close-bottom-btn');

/**
 * @param {number} num
 * @returns {string}
 */
function formatNumber(num) {
  return new Intl.NumberFormat('zh-Hant').format(num);
}

/**
 * @param {string} id
 * @returns {MobileSuit}
 */
function getSuitById(id) {
  return MOBILE_SUITS.find((suit) => suit.id === id) || MOBILE_SUITS[0];
}

/**
 * Attaches clean error fallback behavior to any <img> inside a media frame
 * @param {Element | null} imgElement
 */
function bindImageFallback(imgElement) {
  if (!(imgElement instanceof HTMLImageElement)) return;
  const fallback = imgElement.nextElementSibling;
  if (!(fallback instanceof HTMLElement)) return;

  const showFallback = () => {
    imgElement.style.display = 'none';
    fallback.removeAttribute('hidden');
  };

  const showImage = () => {
    imgElement.style.display = 'block';
    fallback.setAttribute('hidden', '');
  };

  imgElement.onerror = showFallback;
  imgElement.onload = showImage;
}

/**
 * @returns {MobileSuit[]}
 */
function getFilteredSuits() {
  const query = state.search.trim().toLowerCase();

  const filtered = MOBILE_SUITS.filter((suit) => {
    if (state.filter === 'uc' && suit.universe !== 'uc') return false;
    if (state.filter === 'ce' && suit.universe !== 'ce') return false;
    if (state.filter === 'au' && suit.universe !== 'au') return false;
    if (state.filter === 'efsf' && suit.faction !== 'efsf') return false;
    if (state.filter === 'zeon' && suit.faction !== 'zeon') return false;
    if (state.filter === 'psycho' && !suit.psychoFrame) return false;

    if (!query) return true;

    const haystack = `${suit.code} ${suit.name} ${suit.pilot} ${suit.factionLabel} ${suit.era} ${suit.kitGrade} ${suit.armor} ${suit.manufacturer || ''}`.toLowerCase();
    return haystack.includes(query);
  });

  return filtered.sort((a, b) => {
    if (state.sort === 'output') return b.output - a.output;
    if (state.sort === 'height') return b.height - a.height;
    return a.eraNumber - b.eraNumber;
  });
}

/**
 * Renders a 3D isometric structural wireframe SVG tailored to each Mobile Suit
 * @param {MobileSuit} suit
 * @returns {string}
 */
function renderBlueprintSvg(suit) {
  const accent = suit.faction === 'zeon' ? '#f87171' : '#60a5fa';
  const accentFill = suit.faction === 'zeon' ? 'rgba(248, 113, 113, 0.14)' : 'rgba(96, 165, 250, 0.14)';
  const isMonoEye = suit.id === 'ms-06s' || suit.id === 'msn-04' || suit.id === 'msn-06s';
  const hasWingOrFunnel = [
    'msz-006',
    'rx-93',
    'rx-93-v2',
    'msn-06s',
    'rx-105',
    'xxxg-00w0',
    'gf13-017nj2',
    'wd-m01',
    'mbf-p02kai',
    'zgmf-x10a',
    'gn-0000-010',
    'xvx-016rn',
    'zgmf-x42s-revo',
    'zgmf-a262pd-p',
  ].includes(suit.id);

  const headDetail = isMonoEye
    ? `<ellipse cx="140" cy="40" rx="8" ry="6" fill="${accentFill}" stroke="${accent}" stroke-width="1.4" />
       <line x1="134" y1="40" x2="146" y2="40" stroke="#fbbf24" stroke-width="1.8" />`
    : `<polygon points="132,37 140,32 148,37 146,46 134,46" fill="${accentFill}" stroke="${accent}" stroke-width="1.3" />
       <polyline points="128,31 140,36 152,31" fill="none" stroke="#fbbf24" stroke-width="1.4" />`;

  const dorsalDetail = hasWingOrFunnel
    ? `<polygon points="104,54 78,34 86,68 112,72" fill="${accentFill}" stroke="${accent}" stroke-width="1.2" />
       <polygon points="176,54 202,34 194,68 168,72" fill="${accentFill}" stroke="${accent}" stroke-width="1.2" />`
    : `<polygon points="116,52 104,46 104,70 116,74" fill="${accentFill}" stroke="${accent}" stroke-width="1.1" />
       <polygon points="164,52 176,46 176,70 164,74" fill="${accentFill}" stroke="${accent}" stroke-width="1.1" />`;

  return `
    <svg class="blueprint-svg" viewBox="0 0 280 156" role="img" aria-label="${suit.code} 3D 結構概覽示意圖">
      <!-- Isometric floor projection plane -->
      <polygon points="140,144 218,120 140,98 62,120" fill="none" stroke="rgba(148,163,184,0.28)" stroke-width="1" stroke-dasharray="3 3" />
      <line x1="140" y1="18" x2="140" y2="144" stroke="rgba(148,163,184,0.22)" stroke-width="1" stroke-dasharray="2 3" />

      <!-- Dorsal Thruster / Wing Frame -->
      ${dorsalDetail}

      <!-- 3D Extruded Torso Block -->
      <polygon points="118,52 140,46 162,52 156,88 140,94 124,88" fill="${accentFill}" stroke="${accent}" stroke-width="1.4" />
      <polyline points="118,52 140,60 162,52" fill="none" stroke="${accent}" stroke-width="1.1" />
      <line x1="140" y1="60" x2="140" y2="94" stroke="${accent}" stroke-width="1.1" />

      <!-- Shoulder Armor Polyhedra -->
      <polygon points="104,54 118,50 118,70 100,68" fill="none" stroke="${accent}" stroke-width="1.2" />
      <polygon points="176,54 162,50 162,70 180,68" fill="none" stroke="${accent}" stroke-width="1.2" />

      <!-- Lower Frame & Legs -->
      <polyline points="126,90 120,126 130,128" fill="none" stroke="${accent}" stroke-width="1.2" />
      <polyline points="154,90 160,126 150,128" fill="none" stroke="${accent}" stroke-width="1.2" />

      <!-- Head Sensor Unit -->
      ${headDetail}

      <!-- Reactor Core Node -->
      <circle cx="140" cy="70" r="4" fill="#fbbf24" />

      <!-- Technical Callout Leaders -->
      <polyline points="148,38 184,22 268,22" fill="none" stroke="rgba(254,240,138,0.55)" stroke-width="1" />
      <text x="188" y="18" fill="#fef9c3" font-size="9.5" font-family="IBM Plex Mono, monospace">H: ${suit.height.toFixed(1)} m</text>

      <polyline points="144,70 192,84 268,84" fill="none" stroke="rgba(254,240,138,0.55)" stroke-width="1" />
      <text x="196" y="80" fill="#fef08a" font-size="9.5" font-family="IBM Plex Mono, monospace">${formatNumber(suit.output)} kW</text>

      <polyline points="108,66 76,104 12,104" fill="none" stroke="rgba(254,240,138,0.55)" stroke-width="1" />
      <text x="12" y="100" fill="#fde68a" font-size="9.5" font-family="IBM Plex Mono, monospace">${formatNumber(suit.thruster)} kg</text>
    </svg>
  `;
}

/** @type {Record<RangeTier, {label: string, stroke: string, fill: string}>} */
const RANGE_TIER_META = {
  melee: { label: '近接格鬥', stroke: '#fbbf24', fill: 'rgba(251, 191, 36, 0.28)' },
  short: { label: '近距防空', stroke: '#38bdf8', fill: 'rgba(56, 189, 248, 0.26)' },
  mid: { label: '中距射擊', stroke: '#60a5fa', fill: 'rgba(96, 165, 250, 0.28)' },
  long: { label: '超遠／感應', stroke: '#f87171', fill: 'rgba(248, 113, 113, 0.28)' },
};

/**
 * Builds an SVG annular sector (or 360-degree ring) path for the weapon's attack range envelope.
 * @param {number} zoneStart
 * @param {number} zoneEnd
 * @param {number} arcDegrees
 * @returns {string}
 */
function buildRangeSectorPath(zoneStart, zoneEnd, arcDegrees) {
  const cx = 48;
  const cy = 48;
  const maxR = 42;
  const rInner = Math.max(4, (zoneStart / 100) * maxR);
  const rOuter = Math.max(rInner + 4.5, (zoneEnd / 100) * maxR);

  if (arcDegrees >= 360) {
    return [
      `M ${cx} ${cy - rOuter}`,
      `A ${rOuter} ${rOuter} 0 1 1 ${cx} ${cy + rOuter}`,
      `A ${rOuter} ${rOuter} 0 1 1 ${cx} ${cy - rOuter} Z`,
      `M ${cx} ${cy - rInner}`,
      `A ${rInner} ${rInner} 0 1 0 ${cx} ${cy + rInner}`,
      `A ${rInner} ${rInner} 0 1 0 ${cx} ${cy - rInner} Z`,
    ].join(' ');
  }

  const halfRad = ((arcDegrees / 2) * Math.PI) / 180;
  const a1 = -Math.PI / 2 - halfRad;
  const a2 = -Math.PI / 2 + halfRad;
  const largeArc = arcDegrees > 180 ? 1 : 0;

  const x1In = (cx + rInner * Math.cos(a1)).toFixed(2);
  const y1In = (cy + rInner * Math.sin(a1)).toFixed(2);
  const x1Out = (cx + rOuter * Math.cos(a1)).toFixed(2);
  const y1Out = (cy + rOuter * Math.sin(a1)).toFixed(2);
  const x2Out = (cx + rOuter * Math.cos(a2)).toFixed(2);
  const y2Out = (cy + rOuter * Math.sin(a2)).toFixed(2);
  const x2In = (cx + rInner * Math.cos(a2)).toFixed(2);
  const y2In = (cy + rInner * Math.sin(a2)).toFixed(2);

  return `M ${x1In} ${y1In} L ${x1Out} ${y1Out} A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${x2Out} ${y2Out} L ${x2In} ${y2In} A ${rInner} ${rInner} 0 ${largeArc} 0 ${x1In} ${y1In} Z`;
}

/** @type {Array<{stroke: string, bandFill: string, badgeBg: string}>} */
const RADAR_RING_PALETTE = [
  { stroke: '#38bdf8', bandFill: 'rgba(56, 189, 248, 0.24)', badgeBg: 'rgba(8, 47, 73, 0.92)' },
  { stroke: '#fbbf24', bandFill: 'rgba(251, 191, 36, 0.24)', badgeBg: 'rgba(69, 26, 3, 0.92)' },
  { stroke: '#60a5fa', bandFill: 'rgba(96, 165, 250, 0.24)', badgeBg: 'rgba(23, 37, 84, 0.92)' },
  { stroke: '#f87171', bandFill: 'rgba(248, 113, 113, 0.24)', badgeBg: 'rgba(69, 10, 10, 0.92)' },
  { stroke: '#34d399', bandFill: 'rgba(52, 211, 153, 0.24)', badgeBg: 'rgba(6, 78, 59, 0.92)' },
];

/**
 * Returns the active radar weapon index set for a given Mobile Suit card.
 * @param {string} suitId
 * @returns {Set<number>}
 */
function getCardRadarSet(suitId) {
  if (!state.radarWeaponsBySuit[suitId]) {
    state.radarWeaponsBySuit[suitId] = new Set();
  }
  return state.radarWeaponsBySuit[suitId];
}

/**
 * Builds an even-odd full 360° annular ring SVG path between rInner and rOuter.
 * @param {number} cx
 * @param {number} cy
 * @param {number} rInner
 * @param {number} rOuter
 * @returns {string}
 */
function buildAnnulusRingPath(cx, cy, rInner, rOuter) {
  return [
    `M ${cx} ${cy - rOuter}`,
    `A ${rOuter} ${rOuter} 0 1 1 ${cx} ${cy + rOuter}`,
    `A ${rOuter} ${rOuter} 0 1 1 ${cx} ${cy - rOuter} Z`,
    `M ${cx} ${cy - rInner}`,
    `A ${rInner} ${rInner} 0 1 0 ${cx} ${cy + rInner}`,
    `A ${rInner} ${rInner} 0 1 0 ${cx} ${cy - rInner} Z`,
  ].join(' ');
}

/**
 * Generates the Mobile-Suit-centered concentric kill-radius & translucent extreme-range radar overlay HTML.
 * @param {MobileSuit} suit
 * @param {Set<number>} activeIndices
 * @param {'card' | 'modal'} context
 * @returns {string}
 */
function renderKillRadiusRadarOverlayHtml(suit, activeIndices, context) {
  const validIndices = Array.from(activeIndices).filter(
    (idx) => Number.isInteger(idx) && idx >= 0 && idx < suit.weaponProfiles.length
  );
  if (validIndices.length === 0) return '';

  const cx = 190;
  const cy = 118;
  const maxR = 82;

  // Draw outer rings first so smaller translucent extreme bands stack clearly on top
  const sortedBySize = [...validIndices].sort(
    (a, b) => suit.weaponProfiles[b].extremeRadiusPct - suit.weaponProfiles[a].extremeRadiusPct
  );

  const bandsAndCirclesHtml = sortedBySize
    .map((idx) => {
      const weapon = suit.weaponProfiles[idx];
      const palette = RADAR_RING_PALETTE[idx % RADAR_RING_PALETTE.length];
      const rEff = Math.max(10, (weapon.effectiveRadiusPct / 100) * maxR);
      const rExt = Math.max(rEff + 7, (weapon.extremeRadiusPct / 100) * maxR);
      const bandPath = buildAnnulusRingPath(cx, cy, rEff, rExt);

      return `
        <path d="${bandPath}" fill="${palette.bandFill}" fill-rule="evenodd" />
        <circle
          cx="${cx}"
          cy="${cy}"
          r="${rExt.toFixed(2)}"
          fill="none"
          stroke="${palette.stroke}"
          stroke-opacity="0.7"
          stroke-width="1"
          stroke-dasharray="4 3"
        />
        <circle
          cx="${cx}"
          cy="${cy}"
          r="${rEff.toFixed(2)}"
          fill="none"
          stroke="${palette.stroke}"
          stroke-width="2"
        />
      `;
    })
    .join('');

  // Distribute callout badges cleanly to right/left HUD margins so tags never collide
  const orderedIndices = [...validIndices].sort((a, b) => a - b);
  /** @type {number[]} */
  const rightList = [];
  /** @type {number[]} */
  const leftList = [];
  orderedIndices.forEach((idx, orderPos) => {
    if (orderPos % 2 === 0) {
      rightList.push(idx);
    } else {
      leftList.push(idx);
    }
  });

  /**
   * @param {number[]} list
   * @param {'left' | 'right'} side
   * @returns {string}
   */
  const renderCalloutSide = (list, side) => {
    const count = list.length;
    if (count === 0) return '';
    const ySlots =
      count === 1 ? [118] : count === 2 ? [70, 166] : [44, 118, 192];
    const angleSlotsDeg =
      side === 'right'
        ? count === 1
          ? [0]
          : count === 2
            ? [-34, 34]
            : [-48, 0, 48]
        : count === 1
          ? [180]
          : count === 2
            ? [-146, 146]
            : [-132, 180, 132];

    return list
      .map((idx, slotIdx) => {
        const weapon = suit.weaponProfiles[idx];
        const palette = RADAR_RING_PALETTE[idx % RADAR_RING_PALETTE.length];
        const rEff = Math.max(10, (weapon.effectiveRadiusPct / 100) * maxR);
        const rad = (angleSlotsDeg[slotIdx] * Math.PI) / 180;
        const dotX = cx + rEff * Math.cos(rad);
        const dotY = cy + rEff * Math.sin(rad);
        const labelY = ySlots[slotIdx];
        const boxW = 94;
        const boxH = 26;
        const boxX = side === 'right' ? 280 : 6;
        const boxY = labelY - boxH / 2;
        const elbowX = side === 'right' ? 274 : 106;
        const lineEndX = side === 'right' ? boxX : boxX + boxW;
        const textX = boxX + 5;

        return `
          <polyline
            points="${dotX.toFixed(1)},${dotY.toFixed(1)} ${elbowX},${labelY} ${lineEndX},${labelY}"
            fill="none"
            stroke="${palette.stroke}"
            stroke-width="1"
            stroke-opacity="0.88"
          />
          <circle cx="${dotX.toFixed(1)}" cy="${dotY.toFixed(1)}" r="2.7" fill="${palette.stroke}" stroke="#060f20" stroke-width="1" />
          <rect
            x="${boxX}"
            y="${boxY.toFixed(1)}"
            width="${boxW}"
            height="${boxH}"
            rx="4"
            fill="${palette.badgeBg}"
            stroke="${palette.stroke}"
            stroke-width="1"
          />
          <text x="${textX}" y="${(labelY - 2).toFixed(1)}" fill="#fef9c3" font-size="8.2" font-weight="700" font-family="IBM Plex Mono, monospace">${weapon.role} · ${weapon.killRadiusLabel}</text>
          <text x="${textX}" y="${(labelY + 8.5).toFixed(1)}" fill="#fef08a" font-size="7.4" font-weight="600" font-family="IBM Plex Mono, monospace">極限 ${weapon.extremeRangeLabel}</text>
        `;
      })
      .join('');
  };

  const calloutsHtml = `${renderCalloutSide(rightList, 'right')}${renderCalloutSide(leftList, 'left')}`;
  const allSelected = validIndices.length === suit.weaponProfiles.length;

  return `
    <div class="radar-overlay-head">
      <span class="radar-overlay-title">殺傷半徑雷達 · ${suit.code} (${validIndices.length}/${suit.weaponProfiles.length})</span>
      <div class="radar-overlay-controls">
        <button
          type="button"
          class="radar-overlay-btn js-radar-all ${allSelected ? 'is-active' : ''}"
          data-id="${suit.id}"
          data-context="${context}"
        >
          ${allSelected ? '已全選' : '標示全部'}
        </button>
        <button
          type="button"
          class="radar-overlay-btn js-radar-close"
          data-id="${suit.id}"
          data-context="${context}"
          aria-label="關閉有效射程雷達標示"
        >
          關閉
        </button>
      </div>
    </div>

    <svg class="radar-overlay-svg" viewBox="0 0 380 236" role="img" aria-label="${suit.code} 機體中心武器有效殺傷半徑與極限射程雷達圖">
      <!-- Reference concentric grid centered on the Mobile Suit -->
      <circle cx="${cx}" cy="${cy}" r="${maxR}" fill="rgba(5, 12, 26, 0.56)" stroke="rgba(148, 163, 184, 0.28)" stroke-width="1" />
      <circle cx="${cx}" cy="${cy}" r="${(maxR * 0.75).toFixed(1)}" fill="none" stroke="rgba(148, 163, 184, 0.18)" stroke-width="0.8" stroke-dasharray="2 3" />
      <circle cx="${cx}" cy="${cy}" r="${(maxR * 0.5).toFixed(1)}" fill="none" stroke="rgba(148, 163, 184, 0.2)" stroke-width="0.8" stroke-dasharray="2 3" />
      <circle cx="${cx}" cy="${cy}" r="${(maxR * 0.25).toFixed(1)}" fill="none" stroke="rgba(148, 163, 184, 0.24)" stroke-width="0.8" />
      <line x1="${cx - maxR - 6}" y1="${cy}" x2="${cx + maxR + 6}" y2="${cy}" stroke="rgba(148, 163, 184, 0.2)" stroke-width="0.8" />
      <line x1="${cx}" y1="${cy - maxR - 6}" x2="${cx}" y2="${cy + maxR + 6}" stroke="rgba(148, 163, 184, 0.2)" stroke-width="0.8" />

      <!-- Active weapon kill-radius rings & translucent extreme-range zones -->
      ${bandsAndCirclesHtml}

      <!-- Center Mobile Suit marker -->
      <polygon points="${cx},${cy - 8} ${cx + 6.5},${cy + 6} ${cx},${cy + 2.5} ${cx - 6.5},${cy + 6}" fill="#fef9c3" stroke="#38bdf8" stroke-width="1.1" />
      <text x="${cx}" y="${cy + 17}" text-anchor="middle" fill="#fef08a" font-size="8" font-weight="700" font-family="IBM Plex Mono, monospace">${suit.code}</text>

      <!-- Leader callouts -->
      ${calloutsHtml}
    </svg>

    <div class="radar-overlay-foot">
      <span class="radar-legend-item"><i class="legend-solid-dot" aria-hidden="true"></i>實線圓環：有效殺傷半徑</span>
      <span class="radar-legend-item"><i class="legend-band-dot" aria-hidden="true"></i>半透明區間：極限射程</span>
    </div>
  `;
}

/**
 * Synchronizes a Mobile Suit card's media radar overlay and button active states in-place.
 * @param {string} suitId
 */
function syncCardRadarOverlay(suitId) {
  if (!suitGrid) return;
  const card = suitGrid.querySelector(`.suit-card[data-suit-id="${suitId}"]`);
  if (!(card instanceof HTMLElement)) return;

  const suit = getSuitById(suitId);
  const activeSet = getCardRadarSet(suitId);
  const mediaEl = card.querySelector('.suit-card-media');
  const overlayEl = card.querySelector('.card-range-radar-overlay');

  if (mediaEl instanceof HTMLElement) {
    mediaEl.classList.toggle('has-radar-overlay', activeSet.size > 0);
  }
  if (overlayEl instanceof HTMLElement) {
    if (activeSet.size > 0) {
      overlayEl.innerHTML = renderKillRadiusRadarOverlayHtml(suit, activeSet, 'card');
      overlayEl.removeAttribute('hidden');
    } else {
      overlayEl.innerHTML = '';
      overlayEl.setAttribute('hidden', '');
    }
  }

  card.querySelectorAll('.js-effective-range').forEach((btn) => {
    const idx = Number(btn.getAttribute('data-weapon-idx'));
    const isActive = Number.isInteger(idx) && activeSet.has(idx);
    btn.classList.toggle('is-active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });
}

/**
 * Synchronizes the Dossier Modal's media radar overlay and armament button states.
 */
function syncModalRadarOverlay() {
  if (!state.modalSuitId) return;
  const suit = getSuitById(state.modalSuitId);
  const activeSet = state.modalRadarWeapons;

  if (modalMediaFrame instanceof HTMLElement) {
    modalMediaFrame.classList.toggle('has-radar-overlay', activeSet.size > 0);
  }
  if (modalRadarOverlay instanceof HTMLElement) {
    if (activeSet.size > 0) {
      modalRadarOverlay.innerHTML = renderKillRadiusRadarOverlayHtml(suit, activeSet, 'modal');
      modalRadarOverlay.removeAttribute('hidden');
    } else {
      modalRadarOverlay.innerHTML = '';
      modalRadarOverlay.setAttribute('hidden', '');
    }
  }

  modalArmaments?.querySelectorAll('.js-modal-effective-range').forEach((btn) => {
    const idx = Number(btn.getAttribute('data-weapon-idx'));
    const isActive = Number.isInteger(idx) && activeSet.has(idx);
    btn.classList.toggle('is-active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });
}

/**
 * Renders the interactive weapon range analysis panel HTML inside a Mobile Suit card.
 * @param {MobileSuit} suit
 * @returns {string}
 */
function renderWeaponsPanelInner(suit) {
  const selectedIdx = Math.min(
    Math.max(state.selectedWeaponBySuit[suit.id] ?? 0, 0),
    suit.weaponProfiles.length - 1
  );
  const activeWeapon = suit.weaponProfiles[selectedIdx];
  const tierMeta = RANGE_TIER_META[activeWeapon.tier];
  const activeRadarSet = getCardRadarSet(suit.id);

  const meleeCount = suit.weaponProfiles.filter((w) => w.tier === 'melee').length;
  const shortMidCount = suit.weaponProfiles.filter((w) => w.tier === 'short' || w.tier === 'mid').length;
  const longCount = suit.weaponProfiles.filter((w) => w.tier === 'long').length;

  const weaponRowsHtml = suit.weaponProfiles
    .map((weapon, idx) => {
      const isSelected = idx === selectedIdx;
      const isRadarActive = activeRadarSet.has(idx);
      const barWidth = Math.max(10, weapon.zoneEnd - weapon.zoneStart);
      return `
        <li class="suit-weapon-item ${isSelected ? 'is-selected' : ''}">
          <button
            type="button"
            class="suit-weapon-select-btn ${isSelected ? 'is-selected' : ''}"
            data-id="${suit.id}"
            data-weapon-idx="${idx}"
            aria-pressed="${String(isSelected)}"
          >
            <div class="suit-weapon-row-top">
              <span class="suit-weapon-role">${weapon.role}</span>
              <span class="suit-weapon-name">${weapon.name}</span>
              <span class="suit-weapon-range-tag is-${weapon.tier}">${weapon.rangeLabel}</span>
            </div>
            <div class="weapon-range-bar-track" aria-hidden="true">
              <span class="weapon-range-bar-fill is-${weapon.tier}" style="left: ${weapon.zoneStart}%; width: ${barWidth}%;"></span>
            </div>
          </button>
          <button
            type="button"
            class="btn-effective-range js-effective-range ${isRadarActive ? 'is-active' : ''}"
            data-id="${suit.id}"
            data-weapon-idx="${idx}"
            aria-pressed="${String(isRadarActive)}"
            title="在預覽圖上方繪製 ${weapon.name} 的殺傷半徑雷達圓環"
          >
            有效射程標示
          </button>
        </li>
      `;
    })
    .join('');

  return `
    <div class="suit-weapons-head">
      <span class="suit-weapons-title">配適武裝系統 · ${suit.code}</span>
      <button type="button" class="suit-weapons-close" data-id="${suit.id}">返回簡介</button>
    </div>

    <ul class="suit-weapons-list" aria-label="${suit.code} 武裝列表（點擊切換攻擊範圍或標示有效射程雷達）">
      ${weaponRowsHtml}
    </ul>

    <div class="weapon-range-analyzer">
      <div class="range-analyzer-head">
        <span class="range-analyzer-kicker">攻擊範圍分析 · ${activeWeapon.role}</span>
        <span class="range-tier-pill is-${activeWeapon.tier}">${tierMeta.label}</span>
      </div>

      <div class="range-analyzer-body">
        <svg class="range-polar-svg" viewBox="0 0 96 96" role="img" aria-label="${activeWeapon.name} ${activeWeapon.arcLabel} 攻擊範圍圖">
          <circle cx="48" cy="48" r="42" fill="rgba(8, 17, 34, 0.72)" stroke="rgba(148, 163, 184, 0.22)" stroke-width="0.9" />
          <circle cx="48" cy="48" r="31.5" fill="none" stroke="rgba(148, 163, 184, 0.16)" stroke-width="0.8" stroke-dasharray="2 2" />
          <circle cx="48" cy="48" r="21" fill="none" stroke="rgba(148, 163, 184, 0.18)" stroke-width="0.8" stroke-dasharray="2 2" />
          <circle cx="48" cy="48" r="10.5" fill="none" stroke="rgba(148, 163, 184, 0.2)" stroke-width="0.8" />
          <line x1="6" y1="48" x2="90" y2="48" stroke="rgba(148, 163, 184, 0.15)" stroke-width="0.8" />
          <line x1="48" y1="6" x2="48" y2="90" stroke="rgba(148, 163, 184, 0.15)" stroke-width="0.8" />
          <path
            d="${buildRangeSectorPath(activeWeapon.zoneStart, activeWeapon.zoneEnd, activeWeapon.arcDegrees)}"
            fill="${tierMeta.fill}"
            fill-rule="evenodd"
            stroke="${tierMeta.stroke}"
            stroke-width="1.35"
          />
          <polygon points="48,43 52,52 48,49.5 44,52" fill="#f8fafc" />
        </svg>

        <div class="range-analyzer-meta">
          <p class="range-weapon-focus">${activeWeapon.name}</p>
          <div class="range-stat-pair">
            <span>殺傷半徑：<strong>${activeWeapon.killRadiusLabel}</strong></span>
            <span>極限：<strong>${activeWeapon.extremeRangeLabel}</strong></span>
          </div>
          <p class="range-weapon-note">${activeWeapon.note}</p>
        </div>
      </div>

      <div class="range-coverage-foot">
        <span>點擊「有效射程標示」繪製機體雷達環</span>
        <span>近接 ${meleeCount} · 近中距 ${shortMidCount} · 超遠 ${longCount}</span>
      </div>
    </div>
  `;
}

function renderSuitGrid() {
  if (!suitGrid || !emptyState) return;
  const suits = getFilteredSuits();

  if (suits.length === 0) {
    suitGrid.innerHTML = '';
    emptyState.removeAttribute('hidden');
    return;
  }

  emptyState.setAttribute('hidden', '');
  suitGrid.innerHTML = suits
    .map((suit) => {
      const isWeaponsOpen = state.weaponViewSuits.has(suit.id);
      const cardRadarSet = getCardRadarSet(suit.id);
      const hasRadarOverlay = cardRadarSet.size > 0;
      const radarOverlayHtml = hasRadarOverlay
        ? renderKillRadiusRadarOverlayHtml(suit, cardRadarSet, 'card')
        : '';

      const cardActionsHtml = `
        <div class="suit-card-actions">
          <button
            type="button"
            class="btn-card-weapon js-weapons ${isWeaponsOpen ? 'is-active' : ''}"
            data-id="${suit.id}"
            aria-pressed="${String(isWeaponsOpen)}"
            aria-controls="weapons-panel-${suit.id}"
          >
            配適武器
          </button>
          <button type="button" class="btn-card-spec js-inspect" data-id="${suit.id}">
            檢視規格
          </button>
          <button type="button" class="btn-card-compare js-compare" data-id="${suit.id}">
            加入對比
          </button>
        </div>
      `;

      return `
      <article class="suit-card ${isWeaponsOpen ? 'is-weapons-open' : ''}" data-suit-id="${suit.id}">
        <div class="suit-card-inner">
          <!-- Front Face -->
          <div class="suit-card-face suit-card-front">
            <div class="suit-card-media ${hasRadarOverlay ? 'has-radar-overlay' : ''}">
              <img
                src="${suit.image}"
                alt="${suit.code} ${suit.name}"
                referrerpolicy="no-referrer"
                loading="lazy"
              />
              <div class="media-fallback" hidden>
                <span class="fallback-code">${suit.code}</span>
                <span class="fallback-label">${suit.name}</span>
              </div>
              <div class="card-range-radar-overlay" data-suit-radar="${suit.id}"${hasRadarOverlay ? '' : ' hidden'}>
                ${radarOverlayHtml}
              </div>
            </div>
            <div class="suit-card-body">
              <p class="suit-meta-line">
                <span class="suit-code">${suit.code}</span>
                <span aria-hidden="true">·</span>
                <span>${suit.era}</span>
                <span aria-hidden="true">·</span>
                <span>${suit.factionLabel}</span>
                <span aria-hidden="true">·</span>
                <span>${suit.photoType === 'model' ? '模型實拍' : '實機檔案'}</span>
              </p>
              <h3 class="suit-title">${suit.name}</h3>
              <p class="suit-summary"${isWeaponsOpen ? ' hidden' : ''}>${suit.summary}</p>
              <div class="suit-metrics"${isWeaponsOpen ? ' hidden' : ''}>
                <div class="metric-pair">
                  <span class="metric-label">發電機出力</span>
                  <span class="metric-val">${formatNumber(suit.output)} kW</span>
                </div>
                <div class="metric-pair">
                  <span class="metric-label">頭頂全高</span>
                  <span class="metric-val">${suit.height.toFixed(1)} m</span>
                </div>
              </div>
              <div class="suit-weapons-panel" id="weapons-panel-${suit.id}"${isWeaponsOpen ? '' : ' hidden'}>
                ${renderWeaponsPanelInner(suit)}
              </div>
              ${cardActionsHtml}
            </div>
          </div>

          <!-- Back Face (3D Structural Overview & Compact Spec Card) -->
          <div class="suit-card-face suit-card-back">
            <div class="card-back-head">
              <div>
                <span class="card-back-code">${suit.code}</span>
                <h3 class="card-back-title">${suit.name}</h3>
              </div>
              <span class="card-back-tag">3D 結構概覽</span>
            </div>

            <div class="blueprint-frame">
              ${renderBlueprintSvg(suit)}
            </div>

            <div class="back-spec-grid">
              <div class="back-spec-item">
                <span class="back-spec-label">主要駕駛員</span>
                <span class="back-spec-val">${suit.pilot}</span>
              </div>
              <div class="back-spec-item">
                <span class="back-spec-label">本體淨重</span>
                <span class="back-spec-val">${suit.weight.toFixed(1)} t</span>
              </div>
              <div class="back-spec-item">
                <span class="back-spec-label">極限反應出力</span>
                <span class="back-spec-val">${formatNumber(suit.overdriveOutput)} kW</span>
              </div>
              <div class="back-spec-item">
                <span class="back-spec-label">感應框架</span>
                <span class="back-spec-val">${suit.psychoFrame ? '已搭載' : '標準架構'}</span>
              </div>
            </div>

            ${cardActionsHtml}
          </div>
        </div>
      </article>
    `;
    })
    .join('');

  suitGrid.querySelectorAll('img').forEach(bindImageFallback);
}

/* ==========================================================================
   Modal Dossier Logic
   ========================================================================== */

function renderModalContent() {
  if (!state.modalSuitId) return;
  const suit = getSuitById(state.modalSuitId);
  const isOver = state.modalOverdrive;
  const currentOutput = isOver ? suit.overdriveOutput : suit.output;
  const currentThruster = isOver ? suit.overdriveThruster : suit.thruster;

  if (modalMeta) {
    modalMeta.textContent = `${suit.code} · ${suit.era} · ${suit.factionLabel} · ${suit.kitGrade}`;
  }
  if (modalTitle) {
    modalTitle.textContent = suit.name;
  }
  if (modalImg instanceof HTMLImageElement) {
    modalImg.src = suit.image;
    modalImg.alt = `${suit.code} ${suit.name} 機械檢視圖`;
    bindImageFallback(modalImg);
  }
  if (modalFallbackCode) {
    modalFallbackCode.textContent = suit.code;
  }
  if (modalSummary) {
    modalSummary.textContent = suit.summary;
  }

  if (modalModeToggle) {
    modalModeToggle.textContent = isOver ? '回復標準出力模式' : '切換極限出力模式';
    modalModeToggle.classList.toggle('is-overdrive', isOver);
  }
  if (modalModeDesc) {
    modalModeDesc.textContent = isOver ? suit.modeOverdriveLabel : suit.modeStandardLabel;
  }

  if (modalSpecs) {
    modalSpecs.innerHTML = `
      <div class="spec-item">
        <dt>主要駕駛員</dt>
        <dd>${suit.pilot}</dd>
      </div>
      <div class="spec-item">
        <dt>裝甲材質</dt>
        <dd>${suit.armor}</dd>
      </div>
      <div class="spec-item">
        <dt>頭頂高 / 本體重</dt>
        <dd>${suit.height.toFixed(2)} m / ${suit.weight.toFixed(1)} t</dd>
      </div>
      <div class="spec-item">
        <dt>即時發電機出力</dt>
        <dd>${formatNumber(currentOutput)} kW</dd>
      </div>
      <div class="spec-item">
        <dt>推進器總推力</dt>
        <dd>${formatNumber(currentThruster)} kg</dd>
      </div>
      <div class="spec-item">
        <dt>感應框架搭載</dt>
        <dd>${suit.psychoFrame ? '是（已實裝）' : '否（傳統控制）'}</dd>
      </div>
    `;
  }

  if (modalArmaments) {
    modalArmaments.innerHTML = suit.weaponProfiles
      .map((weapon, idx) => {
        const isRadarActive = state.modalRadarWeapons.has(idx);
        return `
          <li class="modal-armament-row">
            <div class="modal-armament-info">
              <span class="modal-armament-name">
                <span class="suit-weapon-role">${weapon.role}</span>
                ${weapon.name}
              </span>
              <span class="modal-armament-range">殺傷半徑 ${weapon.killRadiusLabel} · 極限 ${weapon.extremeRangeLabel}</span>
            </div>
            <button
              type="button"
              class="btn-effective-range js-modal-effective-range ${isRadarActive ? 'is-active' : ''}"
              data-weapon-idx="${idx}"
              aria-pressed="${String(isRadarActive)}"
            >
              有效射程標示
            </button>
          </li>
        `;
      })
      .join('');
  }

  if (modalEngineeringBox) {
    const weightInfo = suit.weightMax ? `全備重量 ${suit.weightMax.toFixed(1)} t` : `本體淨重 ${suit.weight.toFixed(1)} t`;
    const makerInfo = suit.manufacturer || suit.factionLabel;
    const noteText = suit.engineeringNote || suit.summary;
    modalEngineeringBox.innerHTML = `
      <h4 class="modal-engineering-title">結構與開發沿革</h4>
      <p class="modal-engineering-note">${noteText}</p>
      <p class="modal-engineering-meta">開發機構：${makerInfo} · ${weightInfo}</p>
    `;
  }

  syncModalRadarOverlay();
  experience.renderSuit(suit, isOver);
}

/**
 * @param {string} suitId
 */
function openSuitModal(suitId) {
  state.modalSuitId = suitId;
  state.modalOverdrive = false;
  state.modalRadarWeapons = new Set();
  renderModalContent();
  if (modal) {
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    modalCloseBtn?.focus();
  }
}

function closeSuitModal() {
  if (modal) {
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }
  state.modalSuitId = null;
}

/* ==========================================================================
   1:1 Scale Mobile Suit Size Comparison
   ========================================================================== */

function populateScaleSelects() {
  if (!(scaleSelectA instanceof HTMLSelectElement) || !(scaleSelectB instanceof HTMLSelectElement)) {
    return;
  }

  const optionsHtml = MOBILE_SUITS.map(
    (suit) => `<option value="${suit.id}">${suit.code} · ${suit.name} (${suit.height.toFixed(2)} m)</option>`
  ).join('');

  scaleSelectA.innerHTML = optionsHtml;
  scaleSelectB.innerHTML = optionsHtml;
  scaleSelectA.value = state.scaleA;
  scaleSelectB.value = state.scaleB;
}

/**
 * Returns normalized front-elevation SVG artwork for a Mobile Suit where
 * y = 0 is the exact top of the head (頭頂高) and y = 100 is the foot baseline.
 * Optional antennas/funnels extend cleanly into negative y without shifting head datum.
 * @param {string} suitId
 * @param {string} stroke
 * @param {string} fill
 * @returns {string}
 */
function getNormalizedSuitSilhouette(suitId, stroke, fill) {
  switch (suitId) {
    case 'ms-06s':
      return `
        <!-- Antenna & Mono-eye Dome Head -->
        <line x1="0" y1="0" x2="0" y2="-7.5" stroke="${stroke}" stroke-width="1.3" />
        <path d="M -5.5,11 C -5.5,3 -3,0 0,0 C 3,0 5.5,3 5.5,11 Z" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <line x1="-4.2" y1="6.5" x2="4.2" y2="6.5" stroke="${stroke}" stroke-width="1.1" />
        <!-- Broad Zeon Torso & Waist -->
        <polygon points="-13,12 13,12 11,36 14,48 -14,48 -11,36" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <!-- Spiked Right Shoulder & Shield Left Shoulder -->
        <polygon points="-24,11 -13,12 -14,26 -24,23" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="-24,14 -28,11 -24,18" fill="${stroke}" />
        <polygon points="13,12 24,12 25,31 15,31" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <!-- Arms -->
        <polygon points="-23,24 -15,24 -17,50 -24,49" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="15,24 23,24 24,49 17,50" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <!-- Heavy Flared Lower Legs -->
        <polygon points="-13,48 -2,48 -4,94 -16,94 -18,100 -3,100" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="2,48 13,48 16,94 18,100 3,100 4,94" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
      `;
    case 'msz-006':
      return `
        <!-- Wing Binders & Stabilizer -->
        <polygon points="-9,13 -27,2 -23,46 -11,35" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="9,13 27,2 23,46 11,35" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <!-- Zeta Head & Tall V-Fin -->
        <polyline points="-7,-5 0,0.5 7,-5" fill="none" stroke="${stroke}" stroke-width="1.3" />
        <polygon points="-4.5,0 4.5,0 5,11 -5,11" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <!-- Angular Torso & Skirt -->
        <polygon points="-11,12 11,12 9,34 12,48 -12,48 -9,34" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <!-- Sharp Shoulders & Arms -->
        <polygon points="-21,11 -11,12 -12,24 -22,20" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="11,12 21,11 22,20 12,24" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="-21,21 -14,22 -16,49 -22,48" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="14,22 21,21 22,48 16,49" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <!-- Sleek High-Mobility Legs -->
        <polygon points="-11,48 -2,48 -3.5,95 -13.5,95 -15,100 -3,100" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="2,48 11,48 13.5,95 15,100 3,100 3.5,95" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
      `;
    case 'rx-93':
      return `
        <!-- Asymmetrical Fin Funnel Array (Left Back) -->
        <polygon points="-10,14 -26,-13 -21,-13 -14,48 -24,48 -28,-11 -10,22" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <line x1="-22" y1="-10" x2="-20" y2="44" stroke="${stroke}" stroke-width="0.9" stroke-dasharray="2 2" />
        <!-- Nu Gundam Head & V-Fin -->
        <polyline points="-7.5,-5.5 0,0.5 7.5,-5.5" fill="none" stroke="${stroke}" stroke-width="1.3" />
        <polygon points="-4.5,0 4.5,0 5,11 -5,11" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <!-- Torso & Armor Skirt -->
        <polygon points="-12,12 12,12 9.5,35 13,49 -13,49 -9.5,35" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <!-- Shoulders & Arms -->
        <polygon points="-22,12 -12,12 -13,24 -22,22" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="12,12 22,12 22,22 13,24" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="-21,23 -14,23 -16,50 -22,49" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="14,23 21,23 22,49 16,50" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <!-- Long Proportioned Legs -->
        <polygon points="-12,49 -2,49 -3.5,95 -14,95 -16,100 -3,100" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="2,49 12,49 14,95 16,100 3,100 3.5,95" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
      `;
    case 'msn-04':
      return `
        <!-- Dorsal Funnel Containers -->
        <polygon points="-14,12 -28,-3 -22,26 -14,28" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="14,12 28,-3 22,26 14,28" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <!-- Sazabi Head & Long Horn -->
        <line x1="0" y1="0" x2="0" y2="-8" stroke="${stroke}" stroke-width="1.4" />
        <polygon points="-5,0 5,0 6,11 -6,11" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <!-- Heavy Wide Torso & Bulbous Waist -->
        <polygon points="-16,12 16,12 13,36 18,50 -18,50 -13,36" fill="${fill}" stroke="${stroke}" stroke-width="1.3" />
        <!-- Massive Broad Shoulder Pauldrons -->
        <polygon points="-30,10 -16,12 -16,29 -31,26" fill="${fill}" stroke="${stroke}" stroke-width="1.25" />
        <polygon points="16,12 30,10 31,26 16,29" fill="${fill}" stroke="${stroke}" stroke-width="1.25" />
        <!-- Heavy Arms -->
        <polygon points="-28,27 -19,27 -21,52 -29,51" fill="${fill}" stroke="${stroke}" stroke-width="1.15" />
        <polygon points="19,27 28,27 29,51 21,52" fill="${fill}" stroke="${stroke}" stroke-width="1.15" />
        <!-- Wide Heavy Thruster Legs -->
        <polygon points="-17,50 -3,50 -5,94 -20,94 -22,100 -4,100" fill="${fill}" stroke="${stroke}" stroke-width="1.25" />
        <polygon points="3,50 17,50 20,94 22,100 4,100 5,94" fill="${fill}" stroke="${stroke}" stroke-width="1.25" />
      `;
    case 'rx-0':
      return `
        <!-- Unicorn Single Horn & Slender Head -->
        <line x1="0" y1="0" x2="0" y2="-10.5" stroke="${stroke}" stroke-width="1.4" />
        <polygon points="-4,0 4,0 4.5,10.5 -4.5,10.5" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <!-- Slim High-Fashion Torso -->
        <polygon points="-10.5,11 10.5,11 8.5,33 11,46 -11,46 -8.5,33" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <!-- Tapered Shoulders & Arms -->
        <polygon points="-19.5,11 -10.5,11 -11,22 -20,19" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="10.5,11 19.5,11 20,19 11,22" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="-19,20 -13,20 -15,47 -20,46" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="13,20 19,20 20,46 15,47" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <!-- Long Slender Legs -->
        <polygon points="-10.5,46 -2,46 -3,95 -12.5,95 -14,100 -2.5,100" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="2,46 10.5,46 12.5,95 14,100 2.5,100 3,95" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
      `;
    case 'rx-93-v2':
      return `
        <!-- Symmetrical Twin Wing Thrusters & 6 Fin Funnels -->
        <polygon points="-10,14 -30,-11 -24,-11 -14,44 -28,44 -34,-8 -10,22" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="10,14 30,-11 24,-11 14,44 28,44 34,-8 10,22" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <!-- Hi-Nu Head & V-Fin -->
        <polyline points="-7.5,-5.5 0,0.5 7.5,-5.5" fill="none" stroke="${stroke}" stroke-width="1.3" />
        <polygon points="-4.5,0 4.5,0 5,11 -5,11" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <!-- Torso & Armored Skirt -->
        <polygon points="-12,12 12,12 9.5,35 13,49 -13,49 -9.5,35" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="-22,12 -12,12 -13,24 -22,22" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="12,12 22,12 22,22 13,24" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="-21,23 -14,23 -16,50 -22,49" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="14,23 21,23 22,49 16,50" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="-12,49 -2,49 -3.5,95 -14,95 -16,100 -3,100" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="2,49 12,49 14,95 16,100 3,100 3.5,95" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
      `;
    case 'msn-06s':
      return `
        <!-- Swept Wing Thruster Binders & Fuel Tanks -->
        <polygon points="-11,14 -33,-4 -26,38 -12,32" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="11,14 33,-4 26,38 12,32" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <line x1="-22" y1="34" x2="-27" y2="54" stroke="${stroke}" stroke-width="1.1" />
        <line x1="22" y1="34" x2="27" y2="54" stroke="${stroke}" stroke-width="1.1" />
        <!-- Sinanju Head & Long Horn -->
        <line x1="0" y1="0" x2="0" y2="-9" stroke="${stroke}" stroke-width="1.4" />
        <polygon points="-4.5,0 4.5,0 5,11 -5,11" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <!-- Sculpted Torso & Spiked Pauldrons -->
        <polygon points="-13,12 13,12 10.5,35 14,49 -14,49 -10.5,35" fill="${fill}" stroke="${stroke}" stroke-width="1.25" />
        <polygon points="-26,8 -13,12 -14,26 -27,23" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="13,12 26,8 27,23 14,26" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="-23,24 -15,24 -17,50 -24,49" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="15,24 23,24 24,49 17,50" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="-13,49 -2,49 -4,94 -15,94 -17,100 -3,100" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="2,49 13,49 15,94 17,100 3,100 4,94" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
      `;
    case 'rx-105':
      return `
        <!-- Massive Flight Wing Armor & Shoulder Stabilizers -->
        <polygon points="-14,10 -36,-9 -31,32 -15,34" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="14,10 36,-9 31,32 15,34" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="-18,34 -34,58 -15,54" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="18,34 34,58 15,54" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <!-- Xi Gundam Head & Wide V-Fin -->
        <polyline points="-9,-6 0,0.5 9,-6" fill="none" stroke="${stroke}" stroke-width="1.4" />
        <polygon points="-5,0 5,0 5.5,10.5 -5.5,10.5" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <!-- Heavy Geometric Torso & Chest Crest -->
        <polygon points="-15,11 15,11 12,38 17,52 -17,52 -12,38" fill="${fill}" stroke="${stroke}" stroke-width="1.3" />
        <polygon points="0,12 10,24 0,34 -10,24" fill="${fill}" stroke="${stroke}" stroke-width="1" />
        <!-- Heavy Arms & Flared Skirt Legs -->
        <polygon points="-24,22 -16,22 -18,52 -25,51" fill="${fill}" stroke="${stroke}" stroke-width="1.15" />
        <polygon points="16,22 24,22 25,51 18,52" fill="${fill}" stroke="${stroke}" stroke-width="1.15" />
        <polygon points="-16,52 -2.5,52 -4.5,94 -19,94 -21,100 -3.5,100" fill="${fill}" stroke="${stroke}" stroke-width="1.25" />
        <polygon points="2.5,52 16,52 19,94 21,100 3.5,100 4.5,94" fill="${fill}" stroke="${stroke}" stroke-width="1.25" />
      `;
    case 'xxxg-00w0':
      return `
        <!-- Angel Feathered Main & Sub Wings -->
        <path d="M -8,14 C -28,-8 -42,8 -38,52 C -26,42 -16,34 -9,26 Z" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <path d="M 8,14 C 28,-8 42,8 38,52 C 26,42 16,34 9,26 Z" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="-9,24 -28,46 -18,62 -8,36" fill="${fill}" stroke="${stroke}" stroke-width="1" />
        <polygon points="9,24 28,46 18,62 8,36" fill="${fill}" stroke="${stroke}" stroke-width="1" />
        <!-- Wing Zero Head & V-Fin -->
        <polyline points="-7.5,-5 0,0.5 7.5,-5" fill="none" stroke="${stroke}" stroke-width="1.3" />
        <polygon points="-4.5,0 4.5,0 5,11 -5,11" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <!-- Compact Torso & Legs -->
        <polygon points="-11,12 11,12 9,34 11.5,48 -11.5,48 -9,34" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="-20,12 -11,12 -12,24 -20,22" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="11,12 20,12 20,22 12,24" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="-19,23 -13,23 -15,49 -20,48" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="13,23 19,23 20,48 15,49" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="-11,48 -2,48 -3.5,95 -13,95 -14.5,100 -3,100" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="2,48 11,48 13,95 14.5,100 3,100 3.5,95" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
      `;
    case 'gf13-017nj2':
      return `
        <!-- Sun Ring Energy Halo & 6 Wing Fins -->
        <circle cx="0" cy="20" r="24" fill="none" stroke="${stroke}" stroke-width="1" stroke-dasharray="3 2" opacity="0.75" />
        <polygon points="-8,16 -27,-4 -29,8 -10,22" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="8,16 27,-4 29,8 10,22" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="-9,24 -28,22 -24,36 -9,30" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="9,24 28,22 24,36 9,30" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <!-- God Gundam Head & V-Fin -->
        <polyline points="-7.5,-5 0,0.5 7.5,-5" fill="none" stroke="${stroke}" stroke-width="1.3" />
        <polygon points="-4.5,0 4.5,0 5,11 -5,11" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <!-- Martial Artist Torso & Shoulders -->
        <polygon points="-11.5,12 11.5,12 9,34 11.5,47 -11.5,47 -9,34" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="-21,11 -11.5,12 -12,24 -22,20" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="11.5,12 21,11 22,20 12,24" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="-20,22 -13.5,22 -15,49 -21,48" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="13.5,22 20,22 21,48 15,49" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="-11,47 -2,47 -3.5,95 -13,95 -14.5,100 -3,100" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="2,47 11,47 13,95 14.5,100 3,100 3.5,95" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
      `;
    case 'wd-m01':
      return `
        <!-- Turn A Mustache Crest & Rounded Head -->
        <path d="M -9,5 Q 0,10 9,5" fill="none" stroke="${stroke}" stroke-width="1.4" />
        <polygon points="-4.5,0 4.5,0 5,11 -5,11" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <!-- Moonlight Butterfly Faint Wing Arcs -->
        <path d="M -9,18 C -26,8 -34,36 -16,56" fill="none" stroke="${stroke}" stroke-width="1" stroke-dasharray="3 2" opacity="0.7" />
        <path d="M 9,18 C 26,8 34,36 16,56" fill="none" stroke="${stroke}" stroke-width="1" stroke-dasharray="3 2" opacity="0.7" />
        <!-- Organic Curved Torso & Rounded Shoulders -->
        <polygon points="-11,12 11,12 9.5,35 12,48 -12,48 -9.5,35" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="-20,12 -11,12 -12,25 -20,23" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="11,12 20,12 20,23 12,25" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="-19,24 -13,24 -15,49 -20,48" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="13,24 19,24 20,48 15,49" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="-11.5,48 -2,48 -3.5,95 -13.5,95 -15,100 -3,100" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="2,48 11.5,48 13.5,95 15,100 3,100 3.5,95" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
      `;
    case 'mbf-p02kai':
      return `
        <!-- Tactical Arms II L Giant V-Wing & Katana Scabbards -->
        <polygon points="-7,16 -29,-8 -22,22 -9,26" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="7,16 29,-8 22,22 9,26" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <line x1="-13" y1="42" x2="-27" y2="74" stroke="${stroke}" stroke-width="1.3" />
        <line x1="-14" y1="45" x2="-25" y2="78" stroke="${stroke}" stroke-width="1.1" />
        <!-- Astray Head & V-Fin -->
        <polyline points="-7.5,-5 0,0.5 7.5,-5" fill="none" stroke="${stroke}" stroke-width="1.3" />
        <polygon points="-4.5,0 4.5,0 5,11 -5,11" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <!-- Exposed Red Frame Torso & Legs -->
        <polygon points="-11,12 11,12 9,34 11.5,48 -11.5,48 -9,34" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="-20,12 -11,12 -12,23 -20,21" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="11,12 20,12 20,21 12,23" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="-19,22 -13,22 -15,49 -20,48" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="13,22 19,22 20,48 15,49" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="-11,48 -2,48 -3.5,95 -13.5,95 -15,100 -3,100" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="2,48 11,48 13.5,95 15,100 3,100 3.5,95" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
      `;
    case 'gn-0000-010':
      return `
        <!-- Twin GN Drive Shoulder Cones + O Raiser Side Wing Binders -->
        <polygon points="-12,12 -25,4 -27,20 -13,22" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="12,12 25,4 27,20 13,22" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="-25,10 -34,-2 -30,42 -24,22" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="25,10 34,-2 30,42 24,22" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <!-- 00 Gundam Head & V-Fin -->
        <polyline points="-7.5,-5 0,0.5 7.5,-5" fill="none" stroke="${stroke}" stroke-width="1.3" />
        <polygon points="-4.5,0 4.5,0 5,11 -5,11" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <!-- Sleek Celestial Being Torso & Arms -->
        <polygon points="-11.5,12 11.5,12 9,34 12,48 -12,48 -9,34" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="-21,22 -14,22 -16,49 -22,48" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="14,22 21,22 22,48 16,49" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="-11,48 -2,48 -3.5,95 -13.5,95 -15,100 -3,100" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="2,48 11,48 13.5,95 15,100 3,100 3.5,95" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
      `;
    case 'asw-g-08':
      return `
        <!-- Tail Blade Stinger & Broad Beast Shoulders -->
        <polyline points="0,34 20,16 32,-6" fill="none" stroke="${stroke}" stroke-width="1.3" stroke-dasharray="3 2" />
        <polygon points="32,-6 35,-12 28,-8" fill="${stroke}" />
        <!-- Barbatos Lupine V-Fin -->
        <polyline points="-8,-6.5 0,0.5 8,-6.5" fill="none" stroke="${stroke}" stroke-width="1.4" />
        <polygon points="-4.5,0 4.5,0 5,11 -5,11" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <!-- Narrow Waist Gundam Frame Torso -->
        <polygon points="-12,12 12,12 6,34 11,48 -11,48 -6,34" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="-23,11 -12,12 -13,25 -24,21" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="12,12 23,11 24,21 13,25" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <!-- Oversized Clawed Forearms -->
        <polygon points="-22,23 -15,23 -18,57 -26,56" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="15,23 22,23 26,56 18,57" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="-11,48 -2,48 -3.5,94 -13.5,94 -15,100 -3,100" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="2,48 11,48 13.5,94 15,100 3,100 3.5,94" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
      `;
    case 'xvx-016rn':
      return `
        <!-- Large Flight Backpack & Bit-Stave Shoulder Wings -->
        <polygon points="-10,12 -28,0 -25,28 -11,26" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="10,12 28,0 25,28 11,26" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <!-- Aerial Rebuild Head & Crown V-Fin -->
        <polyline points="-7,-5 0,0.5 7,-5" fill="none" stroke="${stroke}" stroke-width="1.3" />
        <polygon points="-4.5,0 4.5,0 5,11 -5,11" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <!-- GUND-ARM Torso & Sculpted Thighs -->
        <polygon points="-11.5,12 11.5,12 9,34 12,48 -12,48 -9,34" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="-21,12 -11.5,12 -12,24 -21,21" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="11.5,12 21,12 21,21 12,24" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="-20,22 -13.5,22 -15,49 -21,48" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="13.5,22 20,22 21,48 15,49" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="-12,48 -2,48 -3.5,95 -14,95 -15.5,100 -3,100" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="2,48 12,48 14,95 15.5,100 3,100 3.5,95" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
      `;
    case 'zgmf-x42s-revo':
      return `
        <!-- Swept Wings of Light & Arondight / Long Cannon Tips -->
        <polygon points="-10,14 -36,-6 -32,36 -11,30" fill="${fill}" stroke="${stroke}" stroke-width="1.15" />
        <polygon points="10,14 36,-6 32,36 11,30" fill="${fill}" stroke="${stroke}" stroke-width="1.15" />
        <line x1="-12" y1="12" x2="-22" y2="-10" stroke="${stroke}" stroke-width="1.3" />
        <line x1="12" y1="12" x2="22" y2="-10" stroke="${stroke}" stroke-width="1.3" />
        <!-- Destiny Head & V-Fin -->
        <polyline points="-7.5,-5.5 0,0.5 7.5,-5.5" fill="none" stroke="${stroke}" stroke-width="1.3" />
        <polygon points="-4.5,0 4.5,0 5,11 -5,11" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <!-- Torso & Legs -->
        <polygon points="-11.5,12 11.5,12 9,34 12,48 -12,48 -9,34" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="-21,12 -11.5,12 -12,24 -21,21" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="11.5,12 21,12 21,21 12,24" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="-20,22 -13.5,22 -15,49 -21,48" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="13.5,22 20,22 21,48 15,49" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="-11.5,48 -2,48 -3.5,95 -13.5,95 -15,100 -3,100" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="2,48 11.5,48 13.5,95 15,100 3,100 3.5,95" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
      `;
    case 'zgmf-a262pd-p':
      return `
        <!-- Proud Defender Golden X-Wing Array -->
        <polygon points="-8,15 -38,-8 -34,12 -10,24" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="8,15 38,-8 34,12 10,24" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="-8,24 -34,36 -28,50 -9,32" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="8,24 34,36 28,50 9,32" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <!-- Mighty Strike Freedom Head & Forehead Disruptor V-Fin -->
        <polyline points="-8,-6 0,0.5 8,-6" fill="none" stroke="${stroke}" stroke-width="1.4" />
        <polygon points="-4.5,0 4.5,0 5,11 -5,11" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <!-- Torso, Waist Railguns & Sleek Legs -->
        <polygon points="-11.5,12 11.5,12 9,34 12,48 -12,48 -9,34" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="-21,12 -11.5,12 -12,24 -21,21" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="11.5,12 21,12 21,21 12,24" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="-20,22 -13.5,22 -15,49 -21,48" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="13.5,22 20,22 21,48 15,49" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="-11.5,48 -2,48 -3.5,95 -13.5,95 -15,100 -3,100" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="2,48 11.5,48 13.5,95 15,100 3,100 3.5,95" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
      `;
    case 'zgmf-x10a':
      return `
        <!-- Freedom Gundam Active Aero Wings & Balaena Plasma Cannons -->
        <polygon points="-9,13 -37,-10 -33,10 -11,22" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="9,13 37,-10 33,10 11,22" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="-9,22 -34,30 -27,48 -10,31" fill="${fill}" stroke="${stroke}" stroke-width="1.15" />
        <polygon points="9,22 34,30 27,48 10,31" fill="${fill}" stroke="${stroke}" stroke-width="1.15" />
        <line x1="-13" y1="12" x2="-21" y2="-8" stroke="${stroke}" stroke-width="1.5" />
        <line x1="13" y1="12" x2="21" y2="-8" stroke="${stroke}" stroke-width="1.5" />
        <!-- Freedom Head & Classic V-Fin -->
        <polyline points="-7.5,-5 0,0.5 7.5,-5" fill="none" stroke="${stroke}" stroke-width="1.35" />
        <polygon points="-4.5,0 4.5,0 5,11 -5,11" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <!-- Torso, Xiphias Waist Railguns & Legs -->
        <polygon points="-11.5,12 11.5,12 9,34 12,48 -12,48 -9,34" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="-21,12 -11.5,12 -12,24 -21,21" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="11.5,12 21,12 21,21 12,24" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="-20,22 -13.5,22 -15,49 -21,48" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="13.5,22 20,22 21,48 15,49" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="-11.5,48 -2,48 -3.5,95 -13.5,95 -15,100 -3,100" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="2,48 11.5,48 13.5,95 15,100 3,100 3.5,95" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
      `;
    case 'rx-78-2':
    default:
      return `
        <!-- Backpack Beam Saber Hilts -->
        <line x1="-7" y1="12" x2="-9" y2="4" stroke="${stroke}" stroke-width="1.3" />
        <line x1="7" y1="12" x2="9" y2="4" stroke="${stroke}" stroke-width="1.3" />
        <!-- Classic RX-78-2 Head & V-Fin -->
        <polyline points="-7,-5 0,0.5 7,-5" fill="none" stroke="${stroke}" stroke-width="1.3" />
        <polygon points="-4.5,0 4.5,0 5,11 -5,11" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <!-- Core Block Torso & Waist -->
        <polygon points="-12,12 12,12 10,35 12.5,48 -12.5,48 -10,35" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <!-- Square Shoulders & Arms + Shield Silhouette -->
        <polygon points="-21,12 -12,12 -12.5,24 -21,24" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="12,12 21,12 21,24 12.5,24" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="-20,24 -13.5,24 -15,49 -21,49" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <polygon points="13.5,24 20,24 21,49 15,49" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <rect x="21" y="23" width="4.5" height="28" rx="1" fill="${fill}" stroke="${stroke}" stroke-width="1.1" />
        <!-- Sturdy EFSF Legs -->
        <polygon points="-12,48 -2,48 -3.5,95 -14,95 -15.5,100 -3,100" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
        <polygon points="2,48 12,48 14,95 15.5,100 3,100 3.5,95" fill="${fill}" stroke="${stroke}" stroke-width="1.2" />
      `;
  }
}

function renderScaleComparator() {
  const suitA = getSuitById(state.scaleA);
  const suitB = getSuitById(state.scaleB);

  const maxMeter = Math.max(25, Math.ceil(Math.max(suitA.height, suitB.height) / 5) * 5);
  const pxPerMeter = 265 / maxMeter;
  const baselineY = 312;
  const xA = 220;
  const xHuman = 380;
  const xB = 540;

  const scaleA = (suitA.height * pxPerMeter) / 100;
  const scaleB = (suitB.height * pxPerMeter) / 100;
  const headYA = baselineY - suitA.height * pxPerMeter;
  const headYB = baselineY - suitB.height * pxPerMeter;
  const humanHeightPx = 1.75 * pxPerMeter;
  const humanTopY = baselineY - humanHeightPx;

  const heightDiff = suitA.height - suitB.height;
  const absHeightDiff = Math.abs(heightDiff);

  /** @type {number[]} */
  const rulerSteps = [];
  for (let m = 0; m <= maxMeter; m += 5) {
    rulerSteps.push(m);
  }

  const rulerMarks = rulerSteps
    .map((m) => {
      const y = baselineY - m * pxPerMeter;
      const isGround = m === 0;
      return `
        <line
          x1="66"
          y1="${y}"
          x2="722"
          y2="${y}"
          stroke="${isGround ? '#60a5fa' : 'rgba(148, 163, 184, 0.25)'}"
          stroke-width="${isGround ? '2' : '1'}"
          ${isGround ? '' : 'stroke-dasharray="4 4"'}
        />
        <text
          x="56"
          y="${y + 4}"
          text-anchor="end"
          fill="${isGround ? '#fef9c3' : '#e6d28a'}"
          font-size="11"
          font-weight="${isGround ? '700' : '500'}"
          font-family="IBM Plex Mono, monospace"
        >${m} m</text>
      `;
    })
    .join('');

  const deltaBracket =
    absHeightDiff >= 0.05
      ? `
        <line x1="${xA}" y1="${headYA}" x2="${xHuman + 8}" y2="${headYA}" stroke="#60a5fa" stroke-width="1" stroke-dasharray="3 3" opacity="0.75" />
        <line x1="${xHuman - 8}" y1="${headYB}" x2="${xB}" y2="${headYB}" stroke="#f87171" stroke-width="1" stroke-dasharray="3 3" opacity="0.75" />
        <line x1="${xHuman}" y1="${headYA}" x2="${xHuman}" y2="${headYB}" stroke="#fde68a" stroke-width="1.5" />
        <line x1="${xHuman - 5}" y1="${headYA}" x2="${xHuman + 5}" y2="${headYA}" stroke="#fde68a" stroke-width="1.5" />
        <line x1="${xHuman - 5}" y1="${headYB}" x2="${xHuman + 5}" y2="${headYB}" stroke="#fde68a" stroke-width="1.5" />
        <rect x="${xHuman - 36}" y="${(headYA + headYB) / 2 - 11}" width="72" height="22" rx="4" fill="#0f2347" stroke="rgba(56, 189, 248, 0.6)" />
        <text x="${xHuman}" y="${(headYA + headYB) / 2 + 4}" text-anchor="middle" fill="#fef9c3" font-size="10.5" font-weight="600" font-family="IBM Plex Mono, monospace">
          Δ ${absHeightDiff.toFixed(2)} m
        </text>
      `
      : `
        <line x1="${xA}" y1="${headYA}" x2="${xB}" y2="${headYB}" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 3" />
        <rect x="${xHuman - 42}" y="${headYA - 26}" width="84" height="20" rx="4" fill="#16294d" stroke="rgba(96, 165, 250, 0.45)" />
        <text x="${xHuman}" y="${headYA - 12}" text-anchor="middle" fill="#fef08a" font-size="10" font-weight="600" font-family="IBM Plex Mono, monospace">
          1:1 等高機體
        </text>
      `;

  if (scaleStage) {
    scaleStage.innerHTML = `
      <svg
        class="scale-svg"
        viewBox="0 0 760 352"
        role="img"
        aria-label="${suitA.code} (${suitA.height.toFixed(2)} 公尺) 與 ${suitB.code} (${suitB.height.toFixed(2)} 公尺) 1:1 高度比例對照圖"
      >
        <!-- Left & Right Elevation Axes -->
        <line x1="66" y1="36" x2="66" y2="${baselineY}" stroke="rgba(148, 163, 184, 0.45)" stroke-width="1.2" />
        ${rulerMarks}

        <!-- Head Datum Extension Lines to Ruler / Margin -->
        <line x1="66" y1="${headYA}" x2="${xA}" y2="${headYA}" stroke="#60a5fa" stroke-width="1" stroke-dasharray="3 3" opacity="0.7" />
        <line x1="${xB}" y1="${headYB}" x2="722" y2="${headYB}" stroke="#f87171" stroke-width="1" stroke-dasharray="3 3" opacity="0.7" />

        <!-- Suit A 1:1 Silhouette -->
        <g class="scale-suit-group" transform="translate(${xA}, ${headYA.toFixed(2)}) scale(${scaleA.toFixed(4)})">
          ${getNormalizedSuitSilhouette(suitA.id, '#60a5fa', 'rgba(59, 130, 246, 0.2)')}
        </g>

        <!-- 1.75m Human Reference Silhouette -->
        <g transform="translate(${xHuman}, ${humanTopY.toFixed(2)})">
          <circle cx="0" cy="2.4" r="2.1" fill="#fde68a" />
          <path d="M -2.6,5.4 L 2.6,5.4 L 2.2,12 L 1.6,18.55 L 0.4,18.55 L 0,12.8 L -0.4,18.55 L -1.6,18.55 L -2.2,12 Z" fill="#fde68a" />
        </g>
        <text x="${xHuman}" y="334" text-anchor="middle" fill="#e6d28a" font-size="10.5" font-family="IBM Plex Mono, monospace">
          1.75 m 人員基準
        </text>

        <!-- Suit B 1:1 Silhouette -->
        <g class="scale-suit-group" transform="translate(${xB}, ${headYB.toFixed(2)}) scale(${scaleB.toFixed(4)})">
          ${getNormalizedSuitSilhouette(suitB.id, '#f87171', 'rgba(248, 113, 113, 0.2)')}
        </g>

        <!-- Height Gap Callout -->
        ${deltaBracket}

        <!-- Head Height Readout Tags -->
        <rect x="74" y="${Math.max(12, headYA - 22).toFixed(1)}" width="112" height="19" rx="3" fill="rgba(29, 78, 216, 0.36)" stroke="rgba(96, 165, 250, 0.58)" />
        <text x="130" y="${Math.max(25, headYA - 9).toFixed(1)}" text-anchor="middle" fill="#fef08a" font-size="10.5" font-weight="600" font-family="IBM Plex Mono, monospace">
          ${suitA.code} · ${suitA.height.toFixed(2)} m
        </text>

        <rect x="604" y="${Math.max(12, headYB - 22).toFixed(1)}" width="114" height="19" rx="3" fill="rgba(220, 38, 38, 0.22)" stroke="rgba(248, 113, 113, 0.55)" />
        <text x="661" y="${Math.max(25, headYB - 9).toFixed(1)}" text-anchor="middle" fill="#fecaca" font-size="10.5" font-weight="600" font-family="IBM Plex Mono, monospace">
          ${suitB.code} · ${suitB.height.toFixed(2)} m
        </text>

        <!-- Baseline Captions -->
        <text x="${xA}" y="334" text-anchor="middle" fill="#fef08a" font-size="11.5" font-weight="700" font-family="Public Sans, Noto Sans TC, sans-serif">
          ${suitA.code} ${suitA.name}
        </text>
        <text x="${xB}" y="334" text-anchor="middle" fill="#f87171" font-size="11.5" font-weight="700" font-family="Public Sans, Noto Sans TC, sans-serif">
          ${suitB.code} ${suitB.name}
        </text>
      </svg>
    `;
  }

  if (scaleMetrics) {
    const ratioPct = ((suitA.height / suitB.height) * 100).toFixed(1);
    const diffSign = Math.abs(heightDiff) < 0.001 ? '±' : heightDiff > 0 ? '+' : '−';
    const diffClass = Math.abs(heightDiff) < 0.001 ? '' : heightDiff > 0 ? 'is-a' : 'is-b';
    const tallerLabel =
      Math.abs(heightDiff) < 0.001
        ? '兩機頭頂等高'
        : heightDiff > 0
        ? `${suitA.code} 較高（為 B 的 ${ratioPct}%）`
        : `${suitB.code} 較高（A 為 B 的 ${ratioPct}%）`;

    const weightDiff = suitA.weight - suitB.weight;
    const weightSign = Math.abs(weightDiff) < 0.05 ? '±' : weightDiff > 0 ? '+' : '−';

    scaleMetrics.innerHTML = `
      <div class="scale-metric-cell">
        <span class="scale-metric-label">機體 A 頭頂全高</span>
        <span class="scale-metric-val is-a">${suitA.height.toFixed(2)} m</span>
        <span class="scale-metric-sub">約 ${(suitA.height / 1.75).toFixed(1)} 倍人體身高</span>
      </div>
      <div class="scale-metric-cell">
        <span class="scale-metric-label">機體 B 頭頂全高</span>
        <span class="scale-metric-val is-b">${suitB.height.toFixed(2)} m</span>
        <span class="scale-metric-sub">約 ${(suitB.height / 1.75).toFixed(1)} 倍人體身高</span>
      </div>
      <div class="scale-metric-cell">
        <span class="scale-metric-label">1:1 高度差值 (A − B)</span>
        <span class="scale-metric-val ${diffClass}">${diffSign}${absHeightDiff.toFixed(2)} m</span>
        <span class="scale-metric-sub">${tallerLabel}</span>
      </div>
      <div class="scale-metric-cell">
        <span class="scale-metric-label">本體淨重對比</span>
        <span class="scale-metric-val">${suitA.weight.toFixed(1)} t vs ${suitB.weight.toFixed(1)} t</span>
        <span class="scale-metric-sub">重量差 ${weightSign}${Math.abs(weightDiff).toFixed(1)} t</span>
      </div>
    `;
  }
}

/* ==========================================================================
   Comparator & HTML5 Canvas 2D Radar Chart
   ========================================================================== */

function populateComparatorSelects() {
  if (!(compareSelectA instanceof HTMLSelectElement) || !(compareSelectB instanceof HTMLSelectElement)) {
    return;
  }

  const optionsHtml = MOBILE_SUITS.map(
    (suit) => `<option value="${suit.id}">${suit.code} · ${suit.name}</option>`
  ).join('');

  compareSelectA.innerHTML = optionsHtml;
  compareSelectB.innerHTML = optionsHtml;
  compareSelectA.value = state.compareA;
  compareSelectB.value = state.compareB;
}

const RADAR_GEOMETRY = {
  logicalWidth: 460,
  logicalHeight: 400,
  cx: 230,
  cy: 206,
  radius: 136,
  startAngle: -Math.PI / 2,
};

/** @type {Array<{key: keyof SuitRatings, label: string, getDetail: (suit: MobileSuit) => string}>} */
const RADAR_AXES = [
  {
    key: 'output',
    label: '動力出力',
    getDetail: (suit) => `發電機 ${formatNumber(suit.output)} kW（極限 ${formatNumber(suit.overdriveOutput)} kW）`,
  },
  {
    key: 'mobility',
    label: '機動推力',
    getDetail: (suit) =>
      `總推力 ${formatNumber(suit.thruster)} kg · 推重比 ${Math.round(suit.thruster / suit.weight)} kg/t`,
  },
  {
    key: 'armor',
    label: '裝甲防護',
    getDetail: (suit) => suit.armor,
  },
  {
    key: 'firepower',
    label: '武裝火力',
    getDetail: (suit) => `標準武裝 ${suit.armaments.length} 項`,
  },
  {
    key: 'psycho',
    label: '感應適性',
    getDetail: (suit) => (suit.psychoFrame ? '精神感應框架搭載' : '傳統 / 準感應操控架構'),
  },
];

/**
 * @param {MobileSuit} suitA
 * @param {MobileSuit} suitB
 * @param {number | null} [hoveredAxisIndex]
 */
function drawRadarChart(suitA, suitB, hoveredAxisIndex = state.hoveredAxisIndex) {
  if (!(radarCanvas instanceof HTMLCanvasElement)) return;
  const ctx = radarCanvas.getContext('2d');
  if (!ctx) return;

  const dpr = window.devicePixelRatio || 1;
  const { logicalWidth, logicalHeight, cx, cy, radius, startAngle } = RADAR_GEOMETRY;

  radarCanvas.width = logicalWidth * dpr;
  radarCanvas.height = logicalHeight * dpr;
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, logicalWidth, logicalHeight);

  const count = RADAR_AXES.length;
  const angleStep = (Math.PI * 2) / count;

  // Draw concentric reference pentagons (20%, 40%, 60%, 80%, 100%)
  for (let level = 1; level <= 5; level += 1) {
    const r = (radius / 5) * level;
    ctx.beginPath();
    for (let i = 0; i < count; i += 1) {
      const angle = startAngle + i * angleStep;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = level === 5 ? 'rgba(96, 165, 250, 0.45)' : 'rgba(148, 163, 184, 0.22)';
    ctx.lineWidth = level === 5 ? 1.5 : 1;
    ctx.stroke();
  }

  // Draw axis spokes & labels
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  RADAR_AXES.forEach((axis, i) => {
    const isHovered = hoveredAxisIndex === i;
    const angle = startAngle + i * angleStep;
    const xEnd = cx + Math.cos(angle) * radius;
    const yEnd = cy + Math.sin(angle) * radius;

    if (isHovered) {
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(xEnd, yEnd);
      ctx.strokeStyle = 'rgba(96, 165, 250, 0.22)';
      ctx.lineWidth = 8;
      ctx.lineCap = 'round';
      ctx.stroke();
      ctx.lineCap = 'butt';
    }

    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(xEnd, yEnd);
    ctx.strokeStyle = isHovered ? '#60a5fa' : 'rgba(148, 163, 184, 0.24)';
    ctx.lineWidth = isHovered ? 1.75 : 1;
    ctx.stroke();

    const labelDist = radius + 28;
    const lx = cx + Math.cos(angle) * labelDist;
    const ly = cy + Math.sin(angle) * labelDist;
    ctx.font = isHovered
      ? '700 13.5px "Public Sans", "Noto Sans TC", sans-serif'
      : '600 13px "Public Sans", "Noto Sans TC", sans-serif';
    ctx.fillStyle = isHovered ? '#fef08a' : '#fef9c3';
    ctx.fillText(axis.label, lx, ly);
  });

  /**
   * @param {MobileSuit} suit
   * @param {string} strokeColor
   * @param {string} fillColor
   */
  const drawPolygon = (suit, strokeColor, fillColor) => {
    ctx.beginPath();
    RADAR_AXES.forEach((axis, i) => {
      const val = suit.ratings[axis.key] / 100;
      const angle = startAngle + i * angleStep;
      const px = cx + Math.cos(angle) * radius * val;
      const py = cy + Math.sin(angle) * radius * val;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    });
    ctx.closePath();
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 2.25;
    ctx.stroke();

    RADAR_AXES.forEach((axis, i) => {
      const isHovered = hoveredAxisIndex === i;
      const val = suit.ratings[axis.key] / 100;
      const angle = startAngle + i * angleStep;
      const px = cx + Math.cos(angle) * radius * val;
      const py = cy + Math.sin(angle) * radius * val;

      if (isHovered) {
        ctx.beginPath();
        ctx.arc(px, py, 6.5, 0, Math.PI * 2);
        ctx.fillStyle = '#0b162b';
        ctx.fill();
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      ctx.beginPath();
      ctx.arc(px, py, isHovered ? 4 : 3.5, 0, Math.PI * 2);
      ctx.fillStyle = strokeColor;
      ctx.fill();
    });
  };

  drawPolygon(suitB, '#f87171', 'rgba(248, 113, 113, 0.22)');
  drawPolygon(suitA, '#60a5fa', 'rgba(59, 130, 246, 0.24)');
}

/**
 * Determines which radar axis spoke (0..4) is under the pointer, or null if none.
 * @param {number} clientX
 * @param {number} clientY
 * @returns {number | null}
 */
function getHoveredRadarAxis(clientX, clientY) {
  if (!(radarCanvas instanceof HTMLCanvasElement)) return null;
  const rect = radarCanvas.getBoundingClientRect();
  if (rect.width <= 0 || rect.height <= 0) return null;

  const { logicalWidth, logicalHeight, cx, cy, radius, startAngle } = RADAR_GEOMETRY;
  const mx = ((clientX - rect.left) / rect.width) * logicalWidth;
  const my = ((clientY - rect.top) / rect.height) * logicalHeight;
  const dx = mx - cx;
  const dy = my - cy;

  const count = RADAR_AXES.length;
  const angleStep = (Math.PI * 2) / count;
  let bestIndex = null;
  let bestPerp = Infinity;

  for (let i = 0; i < count; i += 1) {
    const angle = startAngle + i * angleStep;
    const ux = Math.cos(angle);
    const uy = Math.sin(angle);
    const proj = dx * ux + dy * uy;
    const perp = Math.abs(-dx * uy + dy * ux);

    if (proj >= 8 && proj <= radius + 54 && perp <= 34 && perp < bestPerp) {
      bestPerp = perp;
      bestIndex = i;
    }
  }

  return bestIndex;
}

function hideRadarTooltip() {
  if (state.hoveredAxisIndex !== null) {
    state.hoveredAxisIndex = null;
    drawRadarChart(getSuitById(state.compareA), getSuitById(state.compareB), null);
  }
  if (radarCanvas instanceof HTMLCanvasElement) {
    radarCanvas.classList.remove('is-axis-hovered');
  }
  if (radarTooltip instanceof HTMLElement) {
    radarTooltip.setAttribute('hidden', '');
  }
}

/**
 * @param {number} axisIndex
 * @param {number} clientX
 * @param {number} clientY
 */
function showRadarTooltip(axisIndex, clientX, clientY) {
  if (!(radarTooltip instanceof HTMLElement) || !(canvasWrap instanceof HTMLElement)) return;
  const axis = RADAR_AXES[axisIndex];
  if (!axis) return;

  const suitA = getSuitById(state.compareA);
  const suitB = getSuitById(state.compareB);
  const valA = suitA.ratings[axis.key];
  const valB = suitB.ratings[axis.key];
  const diff = valA - valB;
  const diffText = diff === 0 ? '±0 pt' : `${diff > 0 ? '+' : '−'}${Math.abs(diff)} pt`;
  const diffCls = diff === 0 ? 'is-neutral' : diff < 0 ? 'is-neg' : '';

  radarTooltip.innerHTML = `
    <div class="radar-tooltip-head">
      <span class="radar-tooltip-axis">${axis.label}</span>
      <span class="radar-tooltip-delta ${diffCls}">差值 ${diffText}</span>
    </div>
    <div class="radar-tooltip-rows">
      <div class="radar-tooltip-row">
        <div class="radar-tooltip-row-top">
          <span class="radar-tooltip-unit">
            <span class="radar-tooltip-swatch is-a" aria-hidden="true"></span>
            ${suitA.code}
          </span>
          <span class="radar-tooltip-score">${valA} / 100</span>
        </div>
        <span class="radar-tooltip-detail">${axis.getDetail(suitA)}</span>
      </div>
      <div class="radar-tooltip-row">
        <div class="radar-tooltip-row-top">
          <span class="radar-tooltip-unit">
            <span class="radar-tooltip-swatch is-b" aria-hidden="true"></span>
            ${suitB.code}
          </span>
          <span class="radar-tooltip-score">${valB} / 100</span>
        </div>
        <span class="radar-tooltip-detail">${axis.getDetail(suitB)}</span>
      </div>
    </div>
  `;

  radarTooltip.removeAttribute('hidden');

  const wrapRect = canvasWrap.getBoundingClientRect();
  const tipWidth = radarTooltip.offsetWidth;
  const tipHeight = radarTooltip.offsetHeight;
  const relX = clientX - wrapRect.left;
  const relY = clientY - wrapRect.top;

  let left = relX + 16;
  if (left + tipWidth > wrapRect.width - 6) {
    left = relX - tipWidth - 16;
  }
  left = Math.max(6, Math.min(left, wrapRect.width - tipWidth - 6));

  let top = relY - tipHeight - 12;
  if (top < 6) {
    top = relY + 16;
  }
  top = Math.max(6, Math.min(top, wrapRect.height - tipHeight - 6));

  radarTooltip.style.transform = `translate3d(${Math.round(left)}px, ${Math.round(top)}px, 0)`;
}

/**
 * @param {number} diff
 * @param {string} unit
 * @param {number} [decimals]
 * @returns {{text: string, cls: string}}
 */
function formatDelta(diff, unit, decimals = 0) {
  if (Math.abs(diff) < 0.001) {
    return { text: `±0 ${unit}`, cls: 'delta-neutral' };
  }
  const sign = diff > 0 ? '+' : '−';
  const absVal = decimals > 0 ? Math.abs(diff).toFixed(decimals) : formatNumber(Math.abs(diff));
  return {
    text: `${sign}${absVal} ${unit}`,
    cls: diff > 0 ? 'delta-pos' : 'delta-neg',
  };
}

/**
 * Computes diverging heat colors for an attribute difference (A - B).
 * @param {number} diff
 * @returns {{bg: string, border: string, color: string}}
 */
function getDivergingHeatColors(diff) {
  if (diff === 0) {
    return {
      bg: 'rgba(148, 163, 184, 0.14)',
      border: 'rgba(148, 163, 184, 0.32)',
      color: '#fef9c3',
    };
  }

  const intensity = Math.min(Math.abs(diff) / 55, 1);
  const alpha = 0.22 + intensity * 0.7;
  const borderAlpha = Math.min(0.36 + intensity * 0.52, 0.9);
  const useLightText = alpha >= 0.52;

  if (diff > 0) {
    return {
      bg: `rgba(29, 78, 216, ${alpha.toFixed(2)})`,
      border: `rgba(96, 165, 250, ${borderAlpha.toFixed(2)})`,
      color: useLightText ? '#fef9c3' : '#fef08a',
    };
  }

  return {
    bg: `rgba(220, 38, 38, ${alpha.toFixed(2)})`,
    border: `rgba(248, 113, 113, ${borderAlpha.toFixed(2)})`,
    color: useLightText ? '#ffffff' : '#fecaca',
  };
}

/**
 * Computes single-suit heat intensity colors for score (0-100).
 * @param {number} score
 * @param {'a' | 'b'} variant
 * @returns {{bg: string, border: string, color: string}}
 */
function getSuitHeatColors(score, variant) {
  const intensity = Math.max(0, Math.min(score / 100, 1));
  const alpha = 0.16 + intensity * 0.48;
  const borderAlpha = 0.28 + intensity * 0.42;
  const rgb = variant === 'a' ? '29, 78, 216' : '220, 38, 38';
  const borderRgb = variant === 'a' ? '96, 165, 250' : '248, 113, 113';
  const lightText = variant === 'a' ? '#fef08a' : '#fecaca';
  const highText = variant === 'a' ? '#fef9c3' : '#ffffff';

  return {
    bg: `rgba(${rgb}, ${alpha.toFixed(2)})`,
    border: `rgba(${borderRgb}, ${borderAlpha.toFixed(2)})`,
    color: alpha >= 0.46 ? highText : lightText,
  };
}

/**
 * @param {number} diff
 * @returns {string}
 */
function getAdvantageTierLabel(diff) {
  if (diff === 0) return '雙機均勢';
  const side = diff > 0 ? 'A' : 'B';
  const abs = Math.abs(diff);
  if (abs >= 35) return `${side} 壓倒優勢`;
  if (abs >= 15) return `${side} 顯著優勢`;
  return `${side} 小幅領先`;
}

/**
 * Syncs column/row highlight classes in the heatmap with hovered axis index.
 * @param {number | null} axisIndex
 */
function syncHeatmapHighlight(axisIndex) {
  if (!(heatmapBody instanceof HTMLElement)) return;
  heatmapBody.querySelectorAll('[data-axis-index]').forEach((el) => {
    const idx = Number(el.getAttribute('data-axis-index'));
    el.classList.toggle('is-highlighted', axisIndex !== null && idx === axisIndex);
  });
}

/**
 * Renders the 5-axis advantage distribution heatmap inside #comparator.
 * @param {MobileSuit} suitA
 * @param {MobileSuit} suitB
 */
function renderHeatmap(suitA, suitB) {
  if (heatmapScaleA) {
    heatmapScaleA.textContent = `${suitA.code} 優勢 (+60)`;
  }
  if (heatmapScaleB) {
    heatmapScaleB.textContent = `${suitB.code} 優勢 (−60)`;
  }

  const axisData = RADAR_AXES.map((axis, index) => {
    const valA = suitA.ratings[axis.key];
    const valB = suitB.ratings[axis.key];
    const diff = valA - valB;
    return {
      index,
      axis,
      valA,
      valB,
      diff,
      diffText: diff === 0 ? '±0' : `${diff > 0 ? '+' : '−'}${Math.abs(diff)}`,
      tier: getAdvantageTierLabel(diff),
      divColor: getDivergingHeatColors(diff),
      aColor: getSuitHeatColors(valA, 'a'),
      bColor: getSuitHeatColors(valB, 'b'),
    };
  });

  if (heatmapBody) {
    if (state.heatmapMode === 'spectrum') {
      heatmapBody.innerHTML = `
        <div class="heatmap-spectrum-list">
          ${axisData
            .map((item) => {
              const barWidth = Math.min((Math.abs(item.diff) / 60) * 50, 50);
              const barSideClass = item.diff >= 0 ? 'is-a' : 'is-b';
              return `
                <div class="heatmap-spectrum-row" data-axis-index="${item.index}" title="${item.axis.label}：${suitA.code} (${item.valA}) vs ${suitB.code} (${item.valB})">
                  <div class="spectrum-axis-info">
                    <span class="spectrum-axis-name">${item.axis.label}</span>
                    <span class="spectrum-axis-scores">${item.valA} vs ${item.valB}</span>
                  </div>
                  <div class="spectrum-track" aria-label="${item.axis.label} 差值 ${item.diffText}">
                    <div class="spectrum-center-line" aria-hidden="true"></div>
                    ${
                      item.diff !== 0
                        ? `<div class="spectrum-bar ${barSideClass}" style="width: ${barWidth.toFixed(1)}%; background-color: ${item.divColor.bg}; border: 1px solid ${item.divColor.border};"></div>`
                        : ''
                    }
                  </div>
                  <div class="spectrum-verdict">
                    <span class="spectrum-diff-badge" style="background-color: ${item.divColor.bg}; border-color: ${item.divColor.border}; color: ${item.divColor.color};">
                      ${item.diffText} · ${item.tier}
                    </span>
                  </div>
                </div>
              `;
            })
            .join('')}
        </div>
      `;
    } else {
      heatmapBody.innerHTML = `
        <div class="heatmap-matrix-scroll">
          <div class="heatmap-matrix" role="table" aria-label="五大屬性優勢分佈熱力矩陣">
            <div class="heatmap-corner" role="columnheader">對比機體 / 維度</div>
            ${axisData
              .map(
                (item) => `
                  <div class="heatmap-col-header" data-axis-index="${item.index}" role="columnheader">
                    <span class="heatmap-col-title">${item.axis.label}</span>
                    <span class="heatmap-col-sub">0–100 PT</span>
                  </div>
                `
              )
              .join('')}

            <div class="heatmap-row-label" role="rowheader">
              <span class="heatmap-row-code is-a">${suitA.code}</span>
              <span class="heatmap-row-name">${suitA.name}</span>
            </div>
            ${axisData
              .map(
                (item) => `
                  <div
                    class="heatmap-cell"
                    data-axis-index="${item.index}"
                    role="cell"
                    style="background-color: ${item.aColor.bg}; border-color: ${item.aColor.border}; color: ${item.aColor.color};"
                    title="${suitA.code} ${item.axis.label}：${item.valA} / 100"
                  >
                    <span class="heatmap-cell-val">${item.valA}</span>
                    <span class="heatmap-cell-tag">${suitA.code}</span>
                  </div>
                `
              )
              .join('')}

            <div class="heatmap-row-label" role="rowheader">
              <span class="heatmap-row-code is-b">${suitB.code}</span>
              <span class="heatmap-row-name">${suitB.name}</span>
            </div>
            ${axisData
              .map(
                (item) => `
                  <div
                    class="heatmap-cell"
                    data-axis-index="${item.index}"
                    role="cell"
                    style="background-color: ${item.bColor.bg}; border-color: ${item.bColor.border}; color: ${item.bColor.color};"
                    title="${suitB.code} ${item.axis.label}：${item.valB} / 100"
                  >
                    <span class="heatmap-cell-val">${item.valB}</span>
                    <span class="heatmap-cell-tag">${suitB.code}</span>
                  </div>
                `
              )
              .join('')}

            <div class="heatmap-row-label" role="rowheader">
              <span class="heatmap-row-code">優勢差值 (A − B)</span>
              <span class="heatmap-row-name">正值為 A 佔優</span>
            </div>
            ${axisData
              .map(
                (item) => `
                  <div
                    class="heatmap-cell"
                    data-axis-index="${item.index}"
                    role="cell"
                    style="background-color: ${item.divColor.bg}; border-color: ${item.divColor.border}; color: ${item.divColor.color};"
                    title="${item.axis.label} 差值：${item.diffText}（${item.tier}）"
                  >
                    <span class="heatmap-cell-val">${item.diffText}</span>
                    <span class="heatmap-cell-tag">${item.tier}</span>
                  </div>
                `
              )
              .join('')}
          </div>
        </div>
      `;
    }
  }

  if (heatmapSummary) {
    const aWins = axisData.filter((d) => d.diff > 0).length;
    const bWins = axisData.filter((d) => d.diff < 0).length;
    const ties = axisData.filter((d) => d.diff === 0).length;
    const netDiff = axisData.reduce((sum, d) => sum + d.diff, 0);
    const topAdvantage = [...axisData].sort((x, y) => Math.abs(y.diff) - Math.abs(x.diff))[0];

    const netText = netDiff === 0 ? '±0 pt' : `${netDiff > 0 ? '+' : '−'}${Math.abs(netDiff)} pt`;
    const netClass = netDiff > 0 ? 'is-a' : netDiff < 0 ? 'is-b' : '';

    heatmapSummary.innerHTML = `
      <div class="heatmap-summary-cell">
        <span class="heatmap-summary-label">${suitA.code} 優勢維度</span>
        <span class="heatmap-summary-val is-a">${aWins} / 5 項</span>
      </div>
      <div class="heatmap-summary-cell">
        <span class="heatmap-summary-label">${suitB.code} 優勢維度</span>
        <span class="heatmap-summary-val is-b">${bWins} / 5 項</span>
      </div>
      <div class="heatmap-summary-cell">
        <span class="heatmap-summary-label">綜合評分總差值${ties > 0 ? `（均勢 ${ties} 項）` : ''}</span>
        <span class="heatmap-summary-val ${netClass}">${netText}</span>
      </div>
      <div class="heatmap-summary-cell">
        <span class="heatmap-summary-label">最大差距指標</span>
        <span class="heatmap-summary-val">${topAdvantage.axis.label}（${topAdvantage.diffText}）</span>
      </div>
    `;
  }
}

function renderComparator() {
  const suitA = getSuitById(state.compareA);
  const suitB = getSuitById(state.compareB);

  if (legendNameA) legendNameA.textContent = `${suitA.code} ${suitA.name}`;
  if (legendNameB) legendNameB.textContent = `${suitB.code} ${suitB.name}`;
  if (thUnitA) thUnitA.textContent = suitA.code;
  if (thUnitB) thUnitB.textContent = suitB.code;

  drawRadarChart(suitA, suitB);
  renderHeatmap(suitA, suitB);

  if (compareTableBody) {
    const rows = [
      {
        label: '發電機出力',
        a: `${formatNumber(suitA.output)} kW`,
        b: `${formatNumber(suitB.output)} kW`,
        delta: formatDelta(suitA.output - suitB.output, 'kW'),
      },
      {
        label: '推進器總推力',
        a: `${formatNumber(suitA.thruster)} kg`,
        b: `${formatNumber(suitB.thruster)} kg`,
        delta: formatDelta(suitA.thruster - suitB.thruster, 'kg'),
      },
      {
        label: '頭頂全高',
        a: `${suitA.height.toFixed(2)} m`,
        b: `${suitB.height.toFixed(2)} m`,
        delta: formatDelta(suitA.height - suitB.height, 'm', 2),
      },
      {
        label: '本體重量',
        a: `${suitA.weight.toFixed(1)} t`,
        b: `${suitB.weight.toFixed(1)} t`,
        delta: formatDelta(suitA.weight - suitB.weight, 't', 1),
      },
      {
        label: '基準推重比',
        a: `${formatNumber(Math.round(suitA.thruster / suitA.weight))} kg/t`,
        b: `${formatNumber(Math.round(suitB.thruster / suitB.weight))} kg/t`,
        delta: formatDelta(
          Math.round(suitA.thruster / suitA.weight) - Math.round(suitB.thruster / suitB.weight),
          'kg/t'
        ),
      },
      {
        label: '登場紀年',
        a: suitA.era,
        b: suitB.era,
        delta: formatDelta(suitA.eraNumber - suitB.eraNumber, '年'),
      },
    ];

    compareTableBody.innerHTML = rows
      .map(
        (r) => `
        <tr>
          <td>${r.label}</td>
          <td>${r.a}</td>
          <td>${r.b}</td>
          <td class="${r.delta.cls}">${r.delta.text}</td>
        </tr>
      `
      )
      .join('');
  }

  if (compareSummaryNote) {
    const outputDiff = suitA.output - suitB.output;
    const outputLeader = outputDiff >= 0 ? suitA : suitB;
    const ratio = (suitA.thruster / suitA.weight - suitB.thruster / suitB.weight).toFixed(0);
    compareSummaryNote.innerHTML = `
      <strong>工程分析摘要：</strong>
      <strong>${outputLeader.code}</strong> 在反應爐出力上領先 ${formatNumber(Math.abs(outputDiff))} kW；
      以基準推重比（總推力 ÷ 本體重）計算，${suitA.code} 為 <span class="tabular">${Math.round(
      suitA.thruster / suitA.weight
    )} kg/t</span>，${suitB.code} 為 <span class="tabular">${Math.round(
      suitB.thruster / suitB.weight
    )} kg/t</span>（差值 ${Number(ratio) >= 0 ? '+' : ''}${ratio} kg/t）。
    `;
  }
}

/* ==========================================================================
   Timeline
   ========================================================================== */

function renderTimeline() {
  if (!timelineDetail) return;
  const info = ERA_TIMELINE[state.activeEra];
  if (!info) return;

  timelineDetail.innerHTML = `
    <p class="timeline-era-kicker">${info.kicker}</p>
    <h3 class="timeline-era-title">${info.title}</h3>
    <p class="timeline-era-prose">${info.prose}</p>
    <div class="timeline-facts">
      <div class="fact-box">
        <span class="fact-label">關鍵技術突破</span>
        <span class="fact-value">${info.breakthrough}</span>
      </div>
      <div class="fact-box">
        <span class="fact-label">代表性機體</span>
        <span class="fact-value">${info.representative}</span>
      </div>
      <div class="fact-box">
        <span class="fact-label">裝甲材料世代</span>
        <span class="fact-value">${info.armorGen}</span>
      </div>
    </div>
    <div class="timeline-unit-cta">
      <button type="button" class="btn-outline" data-open-suit="${info.unitId}">${info.unitLabel}</button>
    </div>
  `;
}

/* ==========================================================================
   Section 04: Mobile Suit Maintenance Checklist & Completion Simulation Report
   ========================================================================== */

/** @type {Array<{id: string, code: string, title: string, desc: string, getSpecRef: (suit: MobileSuit) => string}>} */
const MAINTENANCE_TASKS = [
  {
    id: 'sensor',
    code: 'CHK-01',
    title: '感應器校準',
    desc: '執行主攝影機、複合光學測距儀與米諾夫斯基粒子抗干擾雷達歸零校準。',
    getSpecRef: (suit) =>
      suit.psychoFrame ? '感測架構：主光學系統 + 精神感應波調校' : '感測架構：標準複合光學 / 雷射測距',
  },
  {
    id: 'thruster',
    code: 'CHK-02',
    title: '噴射口清理',
    desc: '清除主推進噴嘴與姿勢制御微調噴射口積碳，驗證推力向量閥門開度。',
    getSpecRef: (suit) => `基準總推力：${formatNumber(suit.thruster)} kg（極限 ${formatNumber(suit.overdriveThruster)} kg）`,
  },
  {
    id: 'frame',
    code: 'CHK-03',
    title: '骨架潤滑',
    desc: '完成四肢關節驅動軸、動力管線封環與內部骨架液壓致動器低溫潤滑。',
    getSpecRef: (suit) => `機體規格：全高 ${suit.height.toFixed(2)} m · 本體重 ${suit.weight.toFixed(1)} t`,
  },
  {
    id: 'reactor',
    code: 'CHK-04',
    title: '熱核反應爐巡檢',
    desc: '檢驗米諾夫斯基熱核反應爐冷卻迴路壓力與額定電功率輸出穩定性。',
    getSpecRef: (suit) => `額定出力：${formatNumber(suit.output)} kW`,
  },
  {
    id: 'armor',
    code: 'CHK-05',
    title: '裝甲接縫與氣密確認',
    desc: '確認外掛裝甲固定螺栓扭力、駕駛艙氣密閉鎖及盾牌掛架結構完整。',
    getSpecRef: (suit) => `裝甲材質：${suit.armor}`,
  },
  {
    id: 'firecontrol',
    code: 'CHK-06',
    title: '火控與武裝迴路測試',
    desc: '檢測能源電容連結端點、光束軍刀充能槽及攜帶武裝擊發安全鎖。',
    getSpecRef: (suit) => `標準武裝數：${suit.armaments.length} 項武裝完成測試`,
  },
];

function populateMaintenanceSelect() {
  if (!(maintenanceSuitSelect instanceof HTMLSelectElement)) return;
  maintenanceSuitSelect.innerHTML = MOBILE_SUITS.map(
    (suit) => `<option value="${suit.id}">${suit.code} · ${suit.name}</option>`
  ).join('');
  maintenanceSuitSelect.value = state.maintenanceSuitId;
}

/**
 * @param {string} suitId
 * @returns {Record<string, boolean>}
 */
function getSuitMaintenanceState(suitId) {
  if (!state.maintenanceChecks[suitId]) {
    state.maintenanceChecks[suitId] = {};
  }
  return state.maintenanceChecks[suitId];
}

function formatInspectionTimestamp() {
  return new Intl.DateTimeFormat('zh-Hant', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(new Date());
}

function renderMaintenance() {
  const suit = getSuitById(state.maintenanceSuitId);
  const checks = getSuitMaintenanceState(suit.id);
  const completedTasks = MAINTENANCE_TASKS.filter((task) => Boolean(checks[task.id]));
  const completedCount = completedTasks.length;
  const totalCount = MAINTENANCE_TASKS.length;
  const isAllDone = completedCount === totalCount;
  const pct = Math.round((completedCount / totalCount) * 100);

  if (isAllDone && !state.maintenanceCompletedAt[suit.id]) {
    state.maintenanceCompletedAt[suit.id] = formatInspectionTimestamp();
  } else if (!isAllDone && state.maintenanceCompletedAt[suit.id]) {
    delete state.maintenanceCompletedAt[suit.id];
  }

  if (maintenanceProgressText) {
    maintenanceProgressText.textContent = `${completedCount} / ${totalCount} 項已完成（${pct}%）`;
  }
  if (maintenanceProgressFill instanceof HTMLElement) {
    maintenanceProgressFill.style.width = `${pct}%`;
    maintenanceProgressFill.classList.toggle('is-complete', isAllDone);
  }

  if (maintenanceChecklist) {
    maintenanceChecklist.innerHTML = MAINTENANCE_TASKS.map((task) => {
      const checked = Boolean(checks[task.id]);
      return `
        <label class="maint-item ${checked ? 'is-checked' : ''}" for="maint-chk-${task.id}">
          <input
            type="checkbox"
            id="maint-chk-${task.id}"
            class="maint-checkbox"
            data-task-id="${task.id}"
            ${checked ? 'checked' : ''}
          />
          <div class="maint-content">
            <div class="maint-top-row">
              <div class="maint-title-group">
                <span class="maint-code">${task.code}</span>
                <span class="maint-title">${task.title}</span>
              </div>
              <span class="maint-status">${checked ? '✓ 已確認' : '待檢修'}</span>
            </div>
            <p class="maint-desc">${task.desc}</p>
            <p class="maint-spec-ref">${task.getSpecRef(suit)}</p>
          </div>
        </label>
      `;
    }).join('');
  }

  if (maintenanceReport) {
    if (isAllDone) {
      const timestamp = state.maintenanceCompletedAt[suit.id] || formatInspectionTimestamp();
      const thrustRatio = Math.round(suit.thruster / suit.weight);
      const topWeapons = suit.armaments.slice(0, 3).join('、');

      maintenanceReport.innerHTML = `
        <article class="report-card is-complete">
          <div class="report-banner">
            <p class="report-kicker">HANGAR DIAGNOSTIC · ALL SYSTEMS NOMINAL</p>
            <span class="report-badge">READY FOR SORTIE</span>
          </div>

          <h3 class="report-heading">機體整備完成</h3>
          <p class="report-lead">
            <strong>${suit.code} ${suit.name}</strong> 已完成全部 ${totalCount} 項基礎整備點檢，各項核心子系統數值皆處於出擊安全閾值內。
          </p>

          <dl class="report-spec-grid">
            <div class="report-spec-item">
              <dt>檢驗合格機體</dt>
              <dd>${suit.code} · ${suit.era}</dd>
            </div>
            <div class="report-spec-item">
              <dt>指派駕駛員</dt>
              <dd>${suit.pilot}</dd>
            </div>
            <div class="report-spec-item">
              <dt>發電機額定 / 極限出力</dt>
              <dd>${formatNumber(suit.output)} / ${formatNumber(suit.overdriveOutput)} kW</dd>
            </div>
            <div class="report-spec-item">
              <dt>推力與推重比測試</dt>
              <dd>${formatNumber(suit.thruster)} kg (${thrustRatio} kg/t)</dd>
            </div>
            <div class="report-spec-item">
              <dt>感應與骨架狀態</dt>
              <dd>${suit.psychoFrame ? '感應框架共振正常' : '可動關節潤滑合格'}</dd>
            </div>
            <div class="report-spec-item">
              <dt>模擬報告簽證時間</dt>
              <dd>${timestamp}</dd>
            </div>
          </dl>

          <div class="report-signoff">
            <strong>整備班模擬簽核總結：</strong>
            感應器零位誤差 &lt; 0.02°、推進噴嘴氣流平衡率 100%、${suit.armor}氣密檢驗通過；已掛載武裝（${topWeapons} 等共 ${suit.armaments.length} 項）均完成安全鎖釋放測試，准予移交彈射軌道待命。
          </div>

          <div class="report-actions">
            <button type="button" class="btn-outline js-report-reset">重新執行點檢</button>
            <button type="button" class="btn-launch js-report-launch">出發</button>
          </div>
        </article>
      `;
    } else {
      const pendingTasks = MAINTENANCE_TASKS.filter((task) => !checks[task.id]);
      maintenanceReport.innerHTML = `
        <article class="report-card">
          <div class="report-banner">
            <p class="report-kicker">HANGAR STATUS · INSPECTION IN PROGRESS</p>
            <span class="report-badge">已完成 ${completedCount} / ${totalCount}</span>
          </div>

          <h3 class="report-heading">整備作業進行中</h3>
          <p class="report-lead">
            目標機體 <strong>${suit.code} ${suit.name}</strong> 尚餘 ${pendingTasks.length} 項點檢項目未完成，全數勾選後將自動核發「機體整備完成」模擬報告。
          </p>

          <dl class="report-spec-grid">
            <div class="report-spec-item">
              <dt>隸屬陣營</dt>
              <dd>${suit.factionLabel}</dd>
            </div>
            <div class="report-spec-item">
              <dt>責任駕駛員</dt>
              <dd>${suit.pilot}</dd>
            </div>
          </dl>

          <div class="report-pending-box">
            <p class="report-pending-title">尚待確認的整備項目：</p>
            <ul class="report-pending-list">
              ${pendingTasks.map((t) => `<li>${t.code} ${t.title}</li>`).join('')}
            </ul>
          </div>
        </article>
      `;
    }
  }

  if (typeof ensureLaunchSuitAsset === 'function') {
    ensureLaunchSuitAsset(suit);
  }
}

/* ==========================================================================
   Per-Suit Hangar Launch Sequence Animation Engine
   ========================================================================== */

/**
 * @typedef {Object} SuitLaunchConfig
 * @property {string} bayName
 * @property {string} destination
 * @property {string} exitBackdrop
 * @property {string} specialEffect
 * @property {string} pilotCallout
 * @property {[string, string, string]} phaseNotes
 * @property {{primary: string, secondary: string, trim: string, glow: string, thruster: string, eye: string}} palette
 */

/** @type {Record<string, SuitLaunchConfig>} */
const SUIT_LAUNCH_SCENES = {
  'rx-78-2': {
    bayName: '白色基地 (White Base) · 第 2 彈射軌道',
    destination: 'Luna II / Side 7 宙域',
    exitBackdrop: 'lunar-orbit',
    specialEffect: 'vfin-flash',
    pilotCallout: '「阿姆羅·雷，RX-78-2 鋼彈，出擊！」',
    phaseNotes: [
      '固定鎖解除，主攝影機與 V 字天線雙眼閃光校準完成。',
      '線性彈射軌道全速推進，月神鈦合金防盾前舉突入氣閘。',
      '衝出白色基地機庫大門，雙噴嘴全開躍入月球軌道宙域！',
    ],
    palette: {
      primary: '#f8fafc',
      secondary: '#1d4ed8',
      trim: '#dc2626',
      glow: '#fde047',
      thruster: '#38bdf8',
      eye: '#fef08a',
    },
  },
  'ms-06s': {
    bayName: '法爾梅爾號 (Falmel) · 指揮官 MS 甲板',
    destination: '魯烏姆 / Side 7 前線宙域',
    exitBackdrop: 'side7-debris',
    specialEffect: 'monoeye-flare',
    pilotCallout: '「夏亞專用薩克 II，紅彗星三倍速發進！」',
    phaseNotes: [
      '氣閘解鎖瞬間，紅色單眼感測器發出招牌「ピコーン」閃光。',
      '取消出力限制器，背包與小腿噴嘴噴出三倍速深紅推進尾焰。',
      '突破戰艦發進閘門，伴隨熱能斧疾馳切入殘骸戰場！',
    ],
    palette: {
      primary: '#e11d48',
      secondary: '#881337',
      trim: '#fda4af',
      glow: '#fb7185',
      thruster: '#f97316',
      eye: '#ff3b9a',
    },
  },
  'msz-006': {
    bayName: '阿含號 (Argama) · 前部可變彈射道',
    destination: '大氣層突入與格里普斯宙域',
    exitBackdrop: 'reentry-sunset',
    specialEffect: 'waverider-transform',
    pilotCallout: '「卡密兒·維丹，Z 鋼彈，穿波機型態出擊！」',
    phaseNotes: [
      '可動骨架解鎖，生物感測器共振亮度提升至戰鬥水準。',
      '滑行中段展開穿波機 (Wave Rider) 變形，雙翼鎖定迎角。',
      '以超高速流線飛行姿態衝出機庫，劃破橘紅夕陽大氣邊界！',
    ],
    palette: {
      primary: '#f8fafc',
      secondary: '#2563eb',
      trim: '#dc2626',
      glow: '#38bdf8',
      thruster: '#60a5fa',
      eye: '#fde047',
    },
  },
  'rx-93': {
    bayName: '拉·凱拉姆號 (Ra Cailum) · 旗艦彈射軌',
    destination: '阿克西斯落下阻止宙域',
    exitBackdrop: 'axis-meteor',
    specialEffect: 'fin-funnel-ripple',
    pilotCallout: '「阿姆羅·雷，ν 鋼彈，翼狀感應砲部署出擊！」',
    phaseNotes: [
      '駕駛艙精神感應框架微光同步，左背 6 枚翼狀感應砲依序點亮。',
      '旗艦彈射台急加速，翼狀感應砲陣列預備脫離機背掛架。',
      '衝出機庫迎向阿克西斯隕石帶，6 枚感應砲展開護航陣形！',
    ],
    palette: {
      primary: '#f1f5f9',
      secondary: '#0f172a',
      trim: '#eab308',
      glow: '#4ade80',
      thruster: '#60a5fa',
      eye: '#fef08a',
    },
  },
  'msn-04': {
    bayName: '留露拉號 (Rewloola) · 總帥專用彈射台',
    destination: '阿克西斯宙域決戰空域',
    exitBackdrop: 'axis-meteor',
    specialEffect: 'funnel-pod-vent',
    pilotCallout: '「夏亞·阿茲納布爾，沙薩比，全艦隊跟隨發進！」',
    phaseNotes: [
      '重型整備鉗鬆脫，深紅重裝甲與金色單眼同時進入戰鬥模式。',
      '背部雙感應砲艙與燃料槽高壓排氣，超大推力推進器轟鳴。',
      '破門而出直撲前線，雙重赤紅粒子尾焰撕裂星空！',
    ],
    palette: {
      primary: '#dc2626',
      secondary: '#7f1d1d',
      trim: '#facc15',
      glow: '#fbbf24',
      thruster: '#ef4444',
      eye: '#fde047',
    },
  },
  'rx-0': {
    bayName: '擬·阿含號 (Nahel Argama) · 第 1 彈射軌',
    destination: '工業七號殖民地外宙域',
    exitBackdrop: 'industrial7-night',
    specialEffect: 'ntd-awakening',
    pilotCallout: '「巴納吉·林克斯，獨角獸鋼彈，NT-D 覺醒出擊！」',
    phaseNotes: [
      '純白獨角獸型態解除固定鎖，捕捉到新人類感應波訊號。',
      'NT-D 系統啟動！純白裝甲裂開釋放赤紅精神感應框架光芒！',
      'V 字天線綻開，全機輝光貫穿機庫門衝入工業七號夜空！',
    ],
    palette: {
      primary: '#f8fafc',
      secondary: '#e2e8f0',
      trim: '#f43f5e',
      glow: '#fb7185',
      thruster: '#38bdf8',
      eye: '#4ade80',
    },
  },
  'rx-93-v2': {
    bayName: '隆德·貝爾特別機動艦 · 整備甲板',
    destination: '深空高機動迎擊宙域',
    exitBackdrop: 'deep-space-nebula',
    specialEffect: 'twin-wing-surge',
    pilotCallout: '「阿姆羅·雷，Hi-ν 鋼彈，完全體發進！」',
    phaseNotes: [
      '左右對稱雙翼推進器與充電式感應砲掛架同步完成檢壓。',
      '寶藍白塗裝機體高速衝刺，雙翼展開穩定氣流並蓄能。',
      '飛離機庫進入星雲深空，6 枚翼狀感應砲對稱展開！',
    ],
    palette: {
      primary: '#f8fafc',
      secondary: '#3730a3',
      trim: '#818cf8',
      glow: '#a5b4fc',
      thruster: '#60a5fa',
      eye: '#fef08a',
    },
  },
  'msn-06s': {
    bayName: '葛蘭雪 / 新吉翁旗艦 · 專機格納庫',
    destination: '資源衛星帶深紅宙域',
    exitBackdrop: 'deep-space-nebula',
    specialEffect: 'gold-trim-afterburner',
    pilotCallout: '「弗爾·伏朗托，新安州，出擊。」',
    phaseNotes: [
      '金邊雕飾裝甲閃耀微光，單眼精準鎖定外部彈射航線。',
      '背部雙推進翼與超長燃料槽點火，金紅尾焰填滿軌道。',
      '化作深紅閃光貫穿閘門，展現夏亞再世之壓倒性機動！',
    ],
    palette: {
      primary: '#b91c1c',
      secondary: '#450a0a',
      trim: '#facc15',
      glow: '#fbbf24',
      thruster: '#fb923c',
      eye: '#4ade80',
    },
  },
  'rx-105': {
    bayName: '馬法堤運輸艦 · 大氣圈空中機庫',
    destination: '太平洋上空萬米平流層',
    exitBackdrop: 'high-altitude-clouds',
    specialEffect: 'minovsky-flight-rings',
    pilotCallout: '「哈薩威·諾亞，Ξ 鋼彈，米諾夫斯基飛行啟動！」',
    phaseNotes: [
      '26 公尺巨型機體解除支撐架，肩部大型飛行裝甲向外展開。',
      '機身內建米諾夫斯基飛行器震盪釋放反重力青藍光環。',
      '破門直衝雲海平流層，瞬間突破音障拉出白色音爆雲錐！',
    ],
    palette: {
      primary: '#f1f5f9',
      secondary: '#1e40af',
      trim: '#dc2626',
      glow: '#38bdf8',
      thruster: '#7dd3fc',
      eye: '#fef08a',
    },
  },
  'xxxg-00w0': {
    bayName: '宇宙要塞軌道 · 天使降臨發進艙',
    destination: '地球軌道 A.C. 195 空域',
    exitBackdrop: 'cosmic-fortress',
    specialEffect: 'angel-feathers',
    pilotCallout: '「希洛·唯，飛翼鋼彈零式 EW，任務確認，出擊。」',
    phaseNotes: [
      'ZERO 系統神經連線建立，四片天使羽翼推進器緩緩張開。',
      '彈射加速帶起漫天潔白羽毛飄散於機庫藍光氣流之中。',
      '雙破壞來福砲前指，展開天使雙翼飛入藍色地球軌道！',
    ],
    palette: {
      primary: '#f8fafc',
      secondary: '#1d4ed8',
      trim: '#eab308',
      glow: '#e0f2fe',
      thruster: '#38bdf8',
      eye: '#4ade80',
    },
  },
  'gf13-017nj2': {
    bayName: '新日本輸送艦 · 武鬥家專用格納庫',
    destination: '新香港鋼彈武鬥擂台黎明空域',
    exitBackdrop: 'martial-dojo-dawn',
    specialEffect: 'god-sun-halo',
    pilotCallout: '「多蒙·卡修，神威鋼彈！明鏡止水，出擊！」',
    phaseNotes: [
      '胸部能量增幅器打開，背部六片日輪散熱翼全數展開。',
      '黃金「明鏡止水」日輪光環在背後凝聚旋轉，金焰奔騰！',
      '蓄力縱躍衝出機庫閘門，迎向黎明朝日展開爆熱神威掌！',
    ],
    palette: {
      primary: '#f8fafc',
      secondary: '#1d4ed8',
      trim: '#dc2626',
      glow: '#fbbf24',
      thruster: '#f59e0b',
      eye: '#fef08a',
    },
  },
  'wd-m01': {
    bayName: '月面古代遺蹟挖掘坑道機庫',
    destination: '地球圈月光蝶黎明荒原',
    exitBackdrop: 'moonlight-desert',
    specialEffect: 'moonlight-butterfly',
    pilotCallout: '「羅蘭·塞亞克，∀ 鋼彈，出擊！」',
    phaseNotes: [
      '古文明 I 力場驅動骨骼啟動，標誌性白鬚天線微光閃爍。',
      '背部奈米機械放出微弱虹彩「月光蝶」光粉在機庫迴旋。',
      '躍出格納庫進入清新曙光大地，背負虹彩流光穩步升空！',
    ],
    palette: {
      primary: '#f8fafc',
      secondary: '#2563eb',
      trim: '#dc2626',
      glow: '#c4b5fd',
      thruster: '#67e8f9',
      eye: '#fef08a',
    },
  },
  'mbf-p02kai': {
    bayName: '廢物商公會「家居號」整備船塢',
    destination: '殖民地碎石廢墟軌道帶',
    exitBackdrop: 'orbital-junkyard',
    specialEffect: 'tactical-arms-draw',
    pilotCallout: '「羅·裘爾，異端鋼彈紅色機改，上工出擊啦！」',
    phaseNotes: [
      '外露紅色可動骨架加壓完成，雙腰武士刀「菊一文字」就位。',
      '背部「戰術複合武裝 II L」巨劍展開為 V 字高推力飛行翼。',
      '在橘紅火星與軌道碎片閃光中衝出船塢，熱血開闢航道！',
    ],
    palette: {
      primary: '#f8fafc',
      secondary: '#dc2626',
      trim: '#1e293b',
      glow: '#fb923c',
      thruster: '#f97316',
      eye: '#4ade80',
    },
  },
  'gn-0000-010': {
    bayName: '托勒密號 II (Ptolemaios II) · 線性彈射軌',
    destination: '低軌道天人極光空域',
    exitBackdrop: 'gn-aurora-orbit',
    specialEffect: 'gn-twin-drive-storm',
    pilotCallout: '「剎那·F·塞耶，00 強化模組，驅逐目標！」',
    phaseNotes: [
      '雙肩太陽爐 Twin-Drive 同步率突破 100%，翠綠 GN 粒子湧現。',
      'O 強化戰機合體鎖定，高濃度綠光粒子與極光氣流充斥機庫。',
      '躍出托勒密號破門直衝軌道極光帶，轉瞬開啟 Trans-Am 紅閃！',
    ],
    palette: {
      primary: '#f8fafc',
      secondary: '#1d4ed8',
      trim: '#dc2626',
      glow: '#34d399',
      thruster: '#10b981',
      eye: '#fef08a',
    },
  },
  'asw-g-08': {
    bayName: '鐵華團旗艦「漁火號」MS 格納庫',
    destination: '火星赤紅低軌道戰區',
    exitBackdrop: 'mars-red-orbit',
    specialEffect: 'alaya-sparks',
    pilotCallout: '「三日月·奧古斯，獵魔帝王，這點程度馬上解決。」',
    phaseNotes: [
      '阿賴耶識系統神經直連，雙眼爆發野獸般刺目赤紅雷光！',
      '雙亞哈反應爐轟鳴震動甲板，線控尾刃與黃金巨爪同時張開。',
      '攜帶滾滾鐵塵衝出漁火號大門，狂野突入火星赤紅空域！',
    ],
    palette: {
      primary: '#f8fafc',
      secondary: '#1e3a8a',
      trim: '#eab308',
      glow: '#ef4444',
      thruster: '#f59e0b',
      eye: '#ff2e2e',
    },
  },
  'xvx-016rn': {
    bayName: '亞斯提卡西亞學園 · 決鬥專用發進台',
    destination: '太陽系前線軌道決鬥空域',
    exitBackdrop: 'asticassia-front',
    specialEffect: 'permet-bit-orbit',
    pilotCallout: '「蘇萊塔·墨丘利，風靈改修型，一起前進吧！」',
    phaseNotes: [
      '帕梅特刻痕共振展開，胸肩殼層浮現璀璨藍青色數據迴路。',
      '11 枚 GUND 子機脫離背包，沿彈射通道環繞護航並蓄能。',
      '高速衝出學園決鬥閘門，迎向太陽能反射陣列閃耀的星空！',
    ],
    palette: {
      primary: '#f8fafc',
      secondary: '#1d4ed8',
      trim: '#eab308',
      glow: '#38bdf8',
      thruster: '#60a5fa',
      eye: '#22d3ee',
    },
  },
  'zgmf-x42s-revo': {
    bayName: '羅盤移動要塞「千禧年號」· 彈射軌',
    destination: '創世紀／黑騎士對決宙域',
    exitBackdrop: 'space-fortress-battle',
    specialEffect: 'wings-of-light',
    pilotCallout: '「真·飛鳥，命運鋼彈 Spec II，全速出擊！」',
    phaseNotes: [
      '超重氫核融合爐滿載，VPS 裝甲完成戰鬥色調通電轉移。',
      '背部展開赤紅「光之翼」，彈射軌瞬間殘留大量幻象化分身！',
      '伴隨赤紅光翼殘影破門而出，以亞隆戴特巨劍直斬前方空域！',
    ],
    palette: {
      primary: '#e2e8f0',
      secondary: '#1e3a8a',
      trim: '#dc2626',
      glow: '#fb7185',
      thruster: '#f43f5e',
      eye: '#4ade80',
    },
  },
  'zgmf-a262pd-p': {
    bayName: '旗艦「千禧年號」· 榮耀捍衛者合體軌道',
    destination: '鎮魂曲月球軌道決戰空域',
    exitBackdrop: 'lunar-requiem-sky',
    specialEffect: 'proud-defender-lightning',
    pilotCallout: '「煌·大和 ＆ 拉克絲，非凡攻擊自由，出擊！」',
    phaseNotes: [
      '榮耀捍衛者完成背部合體，金色相轉移關節骨架全機亮起。',
      '雙人聯動解鎖，金色 X 翼釋放電光閃爍的高壓黃金奈米粒子！',
      '金色雷霆環繞機身衝破大門，直飛月球鎮魂曲決戰戰場！',
    ],
    palette: {
      primary: '#f8fafc',
      secondary: '#1e3a8a',
      trim: '#facc15',
      glow: '#fde047',
      thruster: '#38bdf8',
      eye: '#4ade80',
    },
  },
  'zgmf-x10a': {
    bayName: '大天使號 / 永恆號 · 1 號核能彈射軌',
    destination: '大洋洲軌道 / 亞拉斯加防衛空域',
    exitBackdrop: 'plant-ocean-sky',
    specialEffect: 'himat-full-burst',
    pilotCallout: '「煌·大和，自由鋼彈，由我來守護這片天空！發進！」',
    phaseNotes: [
      '反中子干擾器與核動力引擎解鎖，相轉移裝甲切換戰時三色塗裝。',
      '背後五對蒼藍高機動飛翼與鯨式電漿砲預備展開 HiMAT 姿態。',
      '衝出機庫躍入湛藍地球軌道大空，雙青翼劃破天際！',
    ],
    palette: {
      primary: '#f8fafc',
      secondary: '#1e3a8a',
      trim: '#dc2626',
      glow: '#38bdf8',
      thruster: '#60a5fa',
      eye: '#4ade80',
    },
  },
};

/** @type {Record<string, {status: 'loading' | 'ready' | 'error', img: HTMLImageElement, cutout: HTMLCanvasElement | null, bounds: {x: number, y: number, w: number, h: number}}>} */
const launchSuitAssetCache = {};

/**
 * Extracts a clean cutout canvas for the Mobile Suit image so the real corresponding suit
 * integrates naturally inside the shared hangar bay and against its sortie backdrop.
 * @param {HTMLImageElement} img
 * @param {MobileSuit} suit
 * @returns {{cutout: HTMLCanvasElement, bounds: {x: number, y: number, w: number, h: number}}}
 */
function buildLaunchSuitCutout(img, suit) {
  const targetW = 480;
  const aspect = img.naturalHeight > 0 && img.naturalWidth > 0 ? img.naturalHeight / img.naturalWidth : 0.75;
  const w = targetW;
  const h = Math.max(240, Math.round(targetW * aspect));

  const offscreen = document.createElement('canvas');
  offscreen.width = w;
  offscreen.height = h;
  const octx = offscreen.getContext('2d', { willReadFrequently: true });
  if (!octx) {
    return { cutout: offscreen, bounds: { x: 0, y: 0, w, h } };
  }

  octx.drawImage(img, 0, 0, w, h);
  const imgData = octx.getImageData(0, 0, w, h);
  const data = imgData.data;

  if (suit.photoType === 'model') {
    // Sample top corners for dark studio background brightness
    let sampleSum = 0;
    let sampleCount = 0;
    const samplePts = [
      [3, 3],
      [w - 4, 3],
      [Math.floor(w * 0.15), 4],
      [Math.floor(w * 0.85), 4],
      [4, Math.floor(h * 0.25)],
      [w - 5, Math.floor(h * 0.25)],
    ];
    samplePts.forEach(([sx, sy]) => {
      const idx = (sy * w + sx) * 4;
      sampleSum += 0.299 * data[idx] + 0.587 * data[idx + 1] + 0.114 * data[idx + 2];
      sampleCount += 1;
    });
    const avgBgLuma = sampleSum / Math.max(1, sampleCount);

    const total = w * h;
    const bgMask = new Uint8Array(total);
    const visited = new Uint8Array(total);
    const lumaArr = new Float32Array(total);
    const satArr = new Float32Array(total);

    for (let i = 0; i < total; i += 1) {
      const p = i * 4;
      const r = data[p];
      const g = data[p + 1];
      const b = data[p + 2];
      lumaArr[i] = 0.299 * r + 0.587 * g + 0.114 * b;
      satArr[i] = Math.max(r, g, b) - Math.min(r, g, b);
    }

    const queue = new Int32Array(total);
    let qHead = 0;
    let qTail = 0;

    const trySeed = (x, y) => {
      const idx = y * w + x;
      if (visited[idx]) return;
      if (satArr[idx] <= 28 && lumaArr[idx] <= Math.max(92, avgBgLuma + 52)) {
        visited[idx] = 1;
        bgMask[idx] = 1;
        queue[qTail] = idx;
        qTail += 1;
      }
    };

    for (let x = 0; x < w; x += 1) {
      trySeed(x, 0);
      trySeed(x, 1);
    }
    for (let y = 0; y < Math.floor(h * 0.88); y += 1) {
      trySeed(0, y);
      trySeed(w - 1, y);
    }

    const dirs = [-1, 1, -w, w];
    while (qHead < qTail) {
      const curr = queue[qHead];
      qHead += 1;
      const cx = curr % w;
      const cy = Math.floor(curr / w);
      const currLuma = lumaArr[curr];

      for (let d = 0; d < 4; d += 1) {
        const next = curr + dirs[d];
        if (next < 0 || next >= total) continue;
        const nx = next % w;
        const ny = Math.floor(next / w);
        if (Math.abs(nx - cx) + Math.abs(ny - cy) !== 1) continue;
        if (visited[next]) continue;

        const nLuma = lumaArr[next];
        const nSat = satArr[next];
        const maxLuma = ny > h * 0.72 ? Math.max(115, avgBgLuma + 68) : Math.max(90, avgBgLuma + 46);
        const maxDiff = ny > h * 0.72 ? 18 : 13;

        if (nSat <= 24 && nLuma <= maxLuma && Math.abs(nLuma - currLuma) <= maxDiff) {
          visited[next] = 1;
          bgMask[next] = 1;
          queue[qTail] = next;
          qTail += 1;
        }
      }
    }

    // Apply alpha mask, soft bottom pedestal fade, and 1px edge feathering
    const alphaMask = new Uint8Array(total);
    for (let y = 0; y < h; y += 1) {
      const yFrac = y / h;
      const bottomFade = yFrac > 0.83 ? Math.max(0, 1 - (yFrac - 0.83) / 0.11) : 1;
      for (let x = 0; x < w; x += 1) {
        const idx = y * w + x;
        if (bgMask[idx]) {
          alphaMask[idx] = 0;
          continue;
        }
        // Trim studio table corners & accessories near bottom outer margins
        const xFrac = x / w;
        if (yFrac > 0.73 && (xFrac < 0.22 || xFrac > 0.78) && satArr[idx] < 18 && lumaArr[idx] < 135) {
          alphaMask[idx] = 0;
          continue;
        }
        alphaMask[idx] = Math.round(255 * bottomFade);
      }
    }

    for (let y = 1; y < h - 1; y += 1) {
      for (let x = 1; x < w - 1; x += 1) {
        const idx = y * w + x;
        let a = alphaMask[idx];
        if (a > 0) {
          const bgNeighbors =
            (alphaMask[idx - 1] === 0 ? 1 : 0) +
            (alphaMask[idx + 1] === 0 ? 1 : 0) +
            (alphaMask[idx - w] === 0 ? 1 : 0) +
            (alphaMask[idx + w] === 0 ? 1 : 0);
          if (bgNeighbors > 0) {
            a = Math.round(a * (1 - bgNeighbors * 0.18));
          }
        }
        data[idx * 4 + 3] = a;
      }
    }
    octx.putImageData(imgData, 0, 0);
  } else {
    // Real hangar/action photo: feathered vertical oval cutout focused tightly on the centered Mobile Suit
    const cx = w * 0.5;
    const cy = h * 0.48;
    const rx = w * 0.36;
    const ry = h * 0.45;
    for (let y = 0; y < h; y += 1) {
      for (let x = 0; x < w; x += 1) {
        const dx = (x - cx) / rx;
        const dy = (y - cy) / ry;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let alpha = 1;
        if (dist > 1) {
          alpha = 0;
        } else if (dist > 0.72) {
          alpha = Math.max(0, 1 - (dist - 0.72) / 0.28);
          alpha = alpha * alpha;
        }
        data[(y * w + x) * 4 + 3] = Math.round(alpha * 255);
      }
    }
    octx.putImageData(imgData, 0, 0);
  }

  // Find tight bounding box of non-transparent suit pixels
  let minX = w;
  let minY = h;
  let maxX = 0;
  let maxY = 0;
  const finalData = octx.getImageData(0, 0, w, h).data;
  for (let y = 0; y < h; y += 1) {
    for (let x = 0; x < w; x += 1) {
      if (finalData[(y * w + x) * 4 + 3] > 28) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  if (maxX <= minX || maxY <= minY) {
    return { cutout: offscreen, bounds: { x: 0, y: 0, w, h } };
  }
  return {
    cutout: offscreen,
    bounds: { x: minX, y: minY, w: maxX - minX + 1, h: maxY - minY + 1 },
  };
}

/**
 * Ensures the Mobile Suit's image and cutout canvas are preloaded for launch animation.
 * @param {MobileSuit} suit
 * @param {() => void} [onReady]
 */
function ensureLaunchSuitAsset(suit, onReady) {
  const existing = launchSuitAssetCache[suit.id];
  if (existing) {
    if (existing.status === 'ready' && onReady) onReady();
    return;
  }

  const img = new Image();
  img.crossOrigin = 'anonymous';
  const entry = {
    status: /** @type {'loading' | 'ready' | 'error'} */ ('loading'),
    img,
    cutout: /** @type {HTMLCanvasElement | null} */ (null),
    bounds: { x: 0, y: 0, w: 480, h: 360 },
  };
  launchSuitAssetCache[suit.id] = entry;

  img.onload = () => {
    try {
      const built = buildLaunchSuitCutout(img, suit);
      entry.cutout = built.cutout;
      entry.bounds = built.bounds;
      entry.status = 'ready';
    } catch {
      entry.status = 'ready';
    }
    if (onReady) onReady();
  };
  img.onerror = () => {
    entry.status = 'error';
  };
  img.src = suit.image;
}

/** @type {{rafId: number | null, startTime: number, suitId: string, particles: Array<{x: number, y: number, vx: number, vy: number, size: number, life: number, maxLife: number, color: string, kind: string}>}} */
const launchAnimState = {
  rafId: null,
  startTime: 0,
  suitId: 'rx-78-2',
  particles: [],
};

const LAUNCH_DURATION_MS = 4800;

/**
 * Draws the external sky/space battlefield environment tailored specifically to each Mobile Suit.
 * Visible through the parting Hangar Blast Doors in Phases 1-2, and fills the entire viewport in Phase 3.
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} W
 * @param {number} H
 * @param {MobileSuit} suit
 * @param {SuitLaunchConfig} cfg
 * @param {number} progress
 * @param {number} t
 */
function drawLaunchExitBackdrop(ctx, W, H, suit, cfg, progress, t) {
  const exitType = cfg.exitBackdrop;
  const cx = W / 2;
  const cy = H * 0.48;

  const skyGrad = ctx.createLinearGradient(0, 0, 0, H);
  if (exitType === 'reentry-sunset') {
    skyGrad.addColorStop(0, '#090d2c');
    skyGrad.addColorStop(0.45, '#7c2d12');
    skyGrad.addColorStop(0.82, '#ea580c');
    skyGrad.addColorStop(1, '#fbbf24');
  } else if (exitType === 'martial-dojo-dawn') {
    skyGrad.addColorStop(0, '#1e1b4b');
    skyGrad.addColorStop(0.45, '#b45309');
    skyGrad.addColorStop(0.85, '#f59e0b');
    skyGrad.addColorStop(1, '#fef08a');
  } else if (exitType === 'plant-ocean-sky') {
    // ZGMF-X10A Cosmic Era upper orbital atmosphere -> sunlit blue ocean Earth horizon
    skyGrad.addColorStop(0, '#02091c');
    skyGrad.addColorStop(0.38, '#082f68');
    skyGrad.addColorStop(0.72, '#0284c7');
    skyGrad.addColorStop(1, '#7dd3fc');
  } else if (exitType === 'high-altitude-clouds') {
    skyGrad.addColorStop(0, '#082f49');
    skyGrad.addColorStop(0.55, '#0369a1');
    skyGrad.addColorStop(1, '#e0f2fe');
  } else if (exitType === 'mars-red-orbit') {
    skyGrad.addColorStop(0, '#120305');
    skyGrad.addColorStop(0.55, '#5c0c12');
    skyGrad.addColorStop(1, '#dc2626');
  } else if (exitType === 'gn-aurora-orbit') {
    skyGrad.addColorStop(0, '#011815');
    skyGrad.addColorStop(0.5, '#064e3b');
    skyGrad.addColorStop(1, '#082f49');
  } else if (exitType === 'moonlight-desert') {
    skyGrad.addColorStop(0, '#0b0d2a');
    skyGrad.addColorStop(0.62, '#312e81');
    skyGrad.addColorStop(1, '#818cf8');
  } else if (exitType === 'space-fortress-battle') {
    skyGrad.addColorStop(0, '#12061c');
    skyGrad.addColorStop(0.55, '#3b0726');
    skyGrad.addColorStop(1, '#091026');
  } else if (exitType === 'lunar-requiem-sky') {
    skyGrad.addColorStop(0, '#05091a');
    skyGrad.addColorStop(0.55, '#1e1b4b');
    skyGrad.addColorStop(1, '#422006');
  } else {
    skyGrad.addColorStop(0, '#020617');
    skyGrad.addColorStop(0.58, '#07142e');
    skyGrad.addColorStop(1, '#0d2248');
  }
  ctx.fillStyle = skyGrad;
  ctx.fillRect(0, 0, W, H);

  // Starfield for orbital/space environments
  const isDenseDayClouds = exitType === 'high-altitude-clouds' || exitType === 'martial-dojo-dawn';
  if (!isDenseDayClouds) {
    const starCount = exitType === 'plant-ocean-sky' ? 52 : 76;
    for (let i = 0; i < starCount; i += 1) {
      const sx = ((i * 137 + 41) % (W - 20)) + 10;
      const sy = ((i * 89 + 19) % Math.floor(H * (exitType === 'plant-ocean-sky' ? 0.52 : 0.85))) + 8;
      const twinkle = 0.4 + 0.6 * Math.sin(t * 4.5 + i * 1.3);
      ctx.fillStyle = `rgba(254, 249, 195, ${twinkle.toFixed(2)})`;
      const sz = i % 5 === 0 ? 2.4 : 1.3;
      ctx.fillRect(sx, sy, sz, sz);
    }
  }

  // Suit-specific iconic cosmic / atmospheric landmarks
  if (exitType === 'plant-ocean-sky') {
    // ZGMF-X10A: Curved sunlit Earth ocean limb + Orbital sunlight flare + PLANT Hourglass colony + Archangel/Eternal silhouette
    ctx.save();
    // Orbital Sun glow behind upper-left
    const sunGlow = ctx.createRadialGradient(cx - 210, 105, 8, cx - 210, 105, 190);
    sunGlow.addColorStop(0, 'rgba(254, 249, 195, 0.92)');
    sunGlow.addColorStop(0.28, 'rgba(125, 211, 252, 0.45)');
    sunGlow.addColorStop(1, 'rgba(2, 132, 199, 0)');
    ctx.fillStyle = sunGlow;
    ctx.fillRect(0, 0, W, H);

    // Curved Planet Earth atmospheric arc
    ctx.beginPath();
    ctx.arc(cx, H * 2.15, H * 1.56, Math.PI * 1.28, Math.PI * 1.72);
    ctx.fillStyle = '#0369a1';
    ctx.fill();
    ctx.lineWidth = 10;
    ctx.strokeStyle = 'rgba(125, 211, 252, 0.65)';
    ctx.stroke();

    // Cloud swirls over Orb / South Pacific
    ctx.fillStyle = 'rgba(248, 250, 252, 0.45)';
    for (let c = -3; c <= 3; c += 1) {
      ctx.beginPath();
      ctx.ellipse(cx + c * 115 + Math.sin(t + c) * 8, H * 0.74 + Math.abs(c) * 14, 78, 13, c * 0.04, 0, Math.PI * 2);
      ctx.fill();
    }

    // Distant PLANT hourglass colony silhouette (upper-right)
    ctx.strokeStyle = 'rgba(186, 230, 253, 0.68)';
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.ellipse(cx + 215, 128, 36, 9, -0.25, 0, Math.PI * 2);
    ctx.ellipse(cx + 218, 144, 32, 8, -0.25, 0, Math.PI * 2);
    ctx.stroke();

    // Eternal / Archangel winged hull silhouette
    ctx.fillStyle = 'rgba(226, 232, 240, 0.55)';
    ctx.beginPath();
    ctx.moveTo(cx - 210, 185);
    ctx.lineTo(cx - 145, 178);
    ctx.lineTo(cx - 165, 192);
    ctx.lineTo(cx - 225, 194);
    ctx.closePath();
    ctx.fill();

    // ZGMF-X10A HiMAT Multi-Lock-On Target Reticles in phase 2/3
    if (progress > 0.35) {
      const lockAlpha = Math.min(0.85, (progress - 0.35) * 1.8);
      const targets = [
        [cx - 245, 135],
        [cx + 250, 125],
        [cx - 190, 225],
        [cx + 210, 220],
      ];
      targets.forEach(([tx, ty], idx) => {
        ctx.strokeStyle = `rgba(74, 222, 128, ${lockAlpha.toFixed(2)})`;
        ctx.lineWidth = 1.6;
        const r = 14 + Math.sin(t * 7 + idx) * 2;
        ctx.strokeRect(tx - r, ty - r, r * 2, r * 2);
        ctx.font = '600 9px "IBM Plex Mono", monospace';
        ctx.fillStyle = `rgba(254, 240, 138, ${lockAlpha.toFixed(2)})`;
        ctx.textAlign = 'left';
        ctx.fillText(`LOCK-0${idx + 1}`, tx + r + 4, ty + 3);
      });
    }
    ctx.restore();
  } else if (exitType === 'lunar-orbit') {
    // RX-78-2: Curved Earth limb + Crescent Moon + Side 7 Colony cylinder
    ctx.beginPath();
    ctx.arc(cx - 160, cy - 60, 56, 0, Math.PI * 2);
    ctx.fillStyle = '#bae6fd';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(cx - 175, cy - 68, 52, 0, Math.PI * 2);
    ctx.fillStyle = '#07142e';
    ctx.fill();
    // Side 7 O'Neill colony cylinder
    ctx.save();
    ctx.translate(cx + 185, 135);
    ctx.rotate(-0.32);
    ctx.fillStyle = '#334155';
    ctx.strokeStyle = '#93c5fd';
    ctx.lineWidth = 1.5;
    ctx.fillRect(-46, -13, 92, 26);
    ctx.strokeRect(-46, -13, 92, 26);
    ctx.restore();
  } else if (exitType === 'lunar-requiem-sky') {
    // Mighty Strike Freedom: Giant glowing Moon + Requiem orbital ring + golden nano-lightning
    ctx.beginPath();
    ctx.arc(cx + 165, 135, 68, 0, Math.PI * 2);
    ctx.fillStyle = '#fef08a';
    ctx.fill();
    ctx.strokeStyle = 'rgba(250, 204, 21, 0.55)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(cx, 175, 290, 54, -0.08, 0, Math.PI * 2);
    ctx.stroke();
  } else if (exitType === 'axis-meteor') {
    // RX-93 & MSN-04: Axis craggy asteroid + green Psycho-Frame Aurora ("Axis Shock")
    const aur = ctx.createLinearGradient(0, 70, W, 240);
    aur.addColorStop(0, 'rgba(74, 222, 128, 0)');
    aur.addColorStop(0.5, 'rgba(74, 222, 128, 0.36)');
    aur.addColorStop(1, 'rgba(56, 189, 248, 0)');
    ctx.fillStyle = aur;
    ctx.fillRect(0, 70, W, 170);

    ctx.beginPath();
    ctx.moveTo(cx - 210, cy + 45);
    ctx.lineTo(cx - 125, cy - 65);
    ctx.lineTo(cx + 15, cy - 92);
    ctx.lineTo(cx + 145, cy - 42);
    ctx.lineTo(cx + 215, cy + 48);
    ctx.closePath();
    ctx.fillStyle = '#334155';
    ctx.fill();
    ctx.strokeStyle = 'rgba(74, 222, 128, 0.65)';
    ctx.lineWidth = 2;
    ctx.stroke();
  } else if (exitType === 'side7-debris' || exitType === 'orbital-junkyard') {
    const glow = ctx.createRadialGradient(cx, cy, 20, cx, cy, 240);
    glow.addColorStop(0, 'rgba(249, 115, 22, 0.32)');
    glow.addColorStop(1, 'rgba(2, 6, 23, 0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = 'rgba(251, 146, 60, 0.6)';
    ctx.lineWidth = 1.8;
    for (let d = 0; d < 10; d += 1) {
      const dx = 80 + d * 85;
      const dy = 110 + (d % 3) * 58;
      ctx.strokeRect(dx, dy, 28, 11);
    }
  } else if (exitType === 'industrial7-night' || exitType === 'asticassia-front') {
    ctx.strokeStyle = exitType === 'industrial7-night' ? 'rgba(244, 63, 94, 0.55)' : 'rgba(56, 189, 248, 0.65)';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.ellipse(cx, cy - 25, 250, 58, -0.12, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(cx, cy - 25, 165, 36, -0.12, 0, Math.PI * 2);
    ctx.stroke();
  } else if (exitType === 'gn-aurora-orbit') {
    const aur = ctx.createLinearGradient(0, 75, W, 240);
    aur.addColorStop(0, 'rgba(16, 185, 129, 0)');
    aur.addColorStop(0.5, 'rgba(52, 211, 153, 0.58)');
    aur.addColorStop(1, 'rgba(56, 189, 248, 0)');
    ctx.fillStyle = aur;
    ctx.fillRect(0, 70, W, 175);
    // Orbital Elevator Ring arc
    ctx.strokeStyle = 'rgba(167, 243, 208, 0.65)';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(cx, H * 1.9, H * 1.4, Math.PI * 1.3, Math.PI * 1.7);
    ctx.stroke();
  } else if (exitType === 'high-altitude-clouds') {
    ctx.fillStyle = 'rgba(248, 250, 252, 0.78)';
    for (let c = -4; c <= 4; c += 1) {
      ctx.beginPath();
      ctx.ellipse(cx + c * 95, H * 0.72 + Math.abs(c) * 9, 85, 22, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (exitType === 'mars-red-orbit') {
    ctx.beginPath();
    ctx.arc(cx, H * 2.0, H * 1.45, Math.PI * 1.25, Math.PI * 1.75);
    ctx.fillStyle = '#991b1b';
    ctx.fill();
    ctx.strokeStyle = 'rgba(248, 113, 113, 0.6)';
    ctx.lineWidth = 6;
    ctx.stroke();
  } else if (exitType === 'space-fortress-battle') {
    ctx.strokeStyle = 'rgba(244, 63, 94, 0.8)';
    ctx.lineWidth = 2.6;
    ctx.beginPath();
    ctx.moveTo(70, 95);
    ctx.lineTo(W - 90, 265);
    ctx.moveTo(W - 80, 80);
    ctx.lineTo(130, 250);
    ctx.stroke();
  } else if (exitType === 'deep-space-nebula') {
    const neb = ctx.createRadialGradient(cx + 35, cy - 20, 18, cx + 35, cy - 20, 260);
    neb.addColorStop(0, suit.id === 'msn-06s' ? 'rgba(225, 29, 72, 0.45)' : 'rgba(129, 140, 248, 0.5)');
    neb.addColorStop(1, 'rgba(15, 23, 42, 0)');
    ctx.fillStyle = neb;
    ctx.fillRect(0, 0, W, H);
  } else if (exitType === 'martial-dojo-dawn') {
    ctx.beginPath();
    ctx.arc(cx, cy + 12, 86, 0, Math.PI * 2);
    ctx.fillStyle = '#fef08a';
    ctx.fill();
  } else if (exitType === 'cosmic-fortress') {
    ctx.beginPath();
    ctx.arc(cx, H * 2.1, H * 1.5, Math.PI * 1.28, Math.PI * 1.72);
    ctx.fillStyle = '#1d4ed8';
    ctx.fill();
    ctx.strokeStyle = '#93c5fd';
    ctx.lineWidth = 6;
    ctx.stroke();
  } else if (exitType === 'moonlight-desert') {
    ctx.beginPath();
    ctx.arc(cx + 170, 120, 48, 0, Math.PI * 2);
    ctx.fillStyle = '#fef9c3';
    ctx.fill();
  }
}

/**
 * Draws the shared Hangar Architecture & Catapult Runway.
 * In Phase 3 (progress > 0.64), the camera pushes through the open blast doors so the
 * hangar steel frame expands past the screen edges and reveals the suit's full sortie sky.
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} W
 * @param {number} H
 * @param {number} progress
 * @param {number} phase
 * @param {MobileSuit} suit
 * @param {SuitLaunchConfig} cfg
 * @param {number} timeSec
 */
function drawSharedHangarBackground(ctx, W, H, progress, phase, suit, cfg, timeSec) {
  const cx = W / 2;

  // Always render the suit-specific external battlefield behind the hangar doors
  drawLaunchExitBackdrop(ctx, W, H, suit, cfg, progress, timeSec);

  // Camera push-through zoom during Phase 3 so hangar walls peel cleanly off-screen
  const exitZoom = progress > 0.64 ? 1 + Math.pow((progress - 0.64) / 0.36, 1.45) * 2.2 : 1;
  const hangarAlpha = progress > 0.78 ? Math.max(0, 1 - (progress - 0.78) / 0.22) : 1;

  if (hangarAlpha <= 0.02) {
    drawLaunchCanvasHud(ctx, W, suit, cfg, phase);
    return;
  }

  ctx.save();
  ctx.globalAlpha = hangarAlpha;
  ctx.translate(cx, H * 0.44);
  ctx.scale(exitZoom, exitZoom);
  ctx.translate(-cx, -H * 0.44);

  const portalLeft = cx - 260;
  const portalRight = cx + 260;
  const portalTop = 48;
  const portalBottom = 290;

  // Blast Doors (slide wide open from progress 0.14 -> 0.56)
  const doorOpen = Math.max(0, Math.min(1, (progress - 0.12) / 0.44));
  const doorGapHalf = 260 * doorOpen;
  const leftDoorRight = cx - doorGapHalf;
  const rightDoorLeft = cx + doorGapHalf;

  if (leftDoorRight > portalLeft) {
    ctx.fillStyle = '#14223d';
    ctx.fillRect(portalLeft, portalTop, leftDoorRight - portalLeft, portalBottom - portalTop);
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 2;
    ctx.strokeRect(portalLeft, portalTop, leftDoorRight - portalLeft, portalBottom - portalTop);
    ctx.fillStyle = '#eab308';
    ctx.fillRect(leftDoorRight - 8, portalTop, 8, portalBottom - portalTop);
  }
  if (portalRight > rightDoorLeft) {
    ctx.fillStyle = '#14223d';
    ctx.fillRect(rightDoorLeft, portalTop, portalRight - rightDoorLeft, portalBottom - portalTop);
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 2;
    ctx.strokeRect(rightDoorLeft, portalTop, portalRight - rightDoorLeft, portalBottom - portalTop);
    ctx.fillStyle = '#eab308';
    ctx.fillRect(rightDoorLeft, portalTop, 8, portalBottom - portalTop);
  }

  // Hangar Side Walls & Ceiling Perspective Panels
  ctx.fillStyle = '#0b162c';
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(portalLeft, portalTop);
  ctx.lineTo(portalLeft, portalBottom);
  ctx.lineTo(0, H);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(W, 0);
  ctx.lineTo(portalRight, portalTop);
  ctx.lineTo(portalRight, portalBottom);
  ctx.lineTo(W, H);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(W, 0);
  ctx.lineTo(portalRight, portalTop);
  ctx.lineTo(portalLeft, portalTop);
  ctx.closePath();
  ctx.fillStyle = '#091225';
  ctx.fill();

  // Hangar Deck Floor
  const floorGrad = ctx.createLinearGradient(0, portalBottom, 0, H);
  floorGrad.addColorStop(0, '#0f1d38');
  floorGrad.addColorStop(1, '#070e1d');
  ctx.fillStyle = floorGrad;
  ctx.beginPath();
  ctx.moveTo(portalLeft, portalBottom);
  ctx.lineTo(portalRight, portalBottom);
  ctx.lineTo(W, H);
  ctx.lineTo(0, H);
  ctx.closePath();
  ctx.fill();

  // Perspective Steel Gantry Arches (identical hangar architecture across all suits)
  const archFactors = [0.22, 0.45, 0.72, 0.96];
  archFactors.forEach((f, idx) => {
    const xL = portalLeft * f;
    const xR = W - (W - portalRight) * f;
    const yT = portalTop * f;
    const yB = portalBottom + (H - portalBottom) * (1 - f);

    ctx.strokeStyle = idx === 3 ? 'rgba(96, 165, 250, 0.48)' : 'rgba(56, 189, 248, 0.25)';
    ctx.lineWidth = idx === 3 ? 3 : 2;
    ctx.strokeRect(xL, yT, xR - xL, yB - yT);

    const lightAlpha = phase === 1 ? 0.55 + 0.35 * Math.sin(timeSec * 8 + idx) : 0.88;
    ctx.fillStyle = `rgba(254, 240, 138, ${lightAlpha.toFixed(2)})`;
    ctx.fillRect(cx - 56 * (1.25 - f * 0.6), yT + 4, 26 * (1.2 - f * 0.5), 4);
    ctx.fillRect(cx + 30 * (1.25 - f * 0.6), yT + 4, 26 * (1.2 - f * 0.5), 4);
  });

  // Side Maintenance Catwalks
  ctx.strokeStyle = 'rgba(148, 163, 184, 0.35)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, H * 0.62);
  ctx.lineTo(portalLeft, portalBottom - 36);
  ctx.moveTo(W, H * 0.62);
  ctx.lineTo(portalRight, portalBottom - 36);
  ctx.stroke();

  // Central Linear Catapult Track
  ctx.fillStyle = '#111e38';
  ctx.beginPath();
  ctx.moveTo(cx - 38, portalBottom);
  ctx.lineTo(cx + 38, portalBottom);
  ctx.lineTo(cx + 170, H);
  ctx.lineTo(cx - 170, H);
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = '#60a5fa';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx - 38, portalBottom);
  ctx.lineTo(cx - 170, H);
  ctx.moveTo(cx + 38, portalBottom);
  ctx.lineTo(cx + 170, H);
  ctx.stroke();

  // Animated Sequential Catapult Guide Lights
  const steps = 10;
  for (let s = 0; s < steps; s += 1) {
    const u = s / steps;
    const yPos = H - (H - portalBottom) * u;
    const halfSpread = 138 - 104 * u;
    const wave = ((timeSec * 14 - s) % steps + steps) % steps;
    const lit = phase >= 2 ? wave < 3 : s % 2 === 0;
    ctx.fillStyle = lit ? '#fef08a' : 'rgba(56, 189, 248, 0.28)';
    ctx.fillRect(cx - halfSpread - 8, yPos - 2, 10, 4);
    ctx.fillRect(cx + halfSpread - 2, yPos - 2, 10, 4);
  }

  // Retractable Hydraulic Gantry Clamps (slide open during Phase 1)
  const clampOpen = Math.min(1, progress / 0.24);
  const clampOffset = clampOpen * 125;
  ctx.fillStyle = '#1e293b';
  ctx.strokeStyle = '#fbbf24';
  ctx.lineWidth = 1.6;
  ctx.fillRect(cx - 135 - clampOffset, H * 0.44, 56, 15);
  ctx.strokeRect(cx - 135 - clampOffset, H * 0.44, 56, 15);
  ctx.fillRect(cx + 79 + clampOffset, H * 0.44, 56, 15);
  ctx.strokeRect(cx + 79 + clampOffset, H * 0.44, 56, 15);

  ctx.restore();

  drawLaunchCanvasHud(ctx, W, suit, cfg, phase);
}

/**
 * Draws crisp gosling-yellow Hangar & Suit HUD telemetry at the top of the Launch Canvas.
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} W
 * @param {MobileSuit} suit
 * @param {SuitLaunchConfig} cfg
 * @param {number} phase
 */
function drawLaunchCanvasHud(ctx, W, suit, cfg, phase) {
  ctx.save();
  ctx.fillStyle = 'rgba(7, 15, 32, 0.65)';
  ctx.fillRect(0, 0, W, 34);
  ctx.font = '600 11.5px "IBM Plex Mono", "Noto Sans TC", monospace';
  ctx.fillStyle = '#fef08a';
  ctx.textAlign = 'left';
  ctx.fillText(`UNIT: ${suit.code} · ${cfg.bayName}`, 18, 22);
  ctx.textAlign = 'right';
  ctx.fillStyle = '#fef9c3';
  ctx.fillText(`PHASE 0${phase} · DEST: ${cfg.destination}`, W - 18, 22);
  ctx.restore();
}

/**
 * Composites the actual corresponding Mobile Suit photo cutout inside the launch sequence
 * together with suit-specific thrusters, energy fields, wing trails, and funnel/bit animations.
 * @param {CanvasRenderingContext2D} ctx
 * @param {MobileSuit} suit
 * @param {SuitLaunchConfig} cfg
 * @param {number} W
 * @param {number} H
 * @param {number} progress
 * @param {number} phase
 * @param {number} timeSec
 */
function drawLaunchMobileSuit(ctx, suit, cfg, W, H, progress, phase, timeSec) {
  const cx = W / 2;
  const pal = cfg.palette;
  const fx = cfg.specialEffect;

  // Dynamic flight trajectory across the 3 launch phases
  let centerY = H * 0.6;
  let scale = 1.0;
  let tiltRad = 0;

  if (progress < 0.28) {
    // Phase 1: Clamps unlock & launch crouch
    const crouch = Math.sin((progress / 0.28) * Math.PI) * 10;
    centerY = H * 0.61 + crouch;
    scale = 1.0;
  } else if (progress < 0.64) {
    // Phase 2: Catapult acceleration surge toward open blast doors
    const u = (progress - 0.28) / 0.36;
    const ease = u * u;
    centerY = H * 0.61 - ease * (H * 0.09);
    scale = 1.0 + ease * 0.08;
    tiltRad = -ease * 0.04;
  } else {
    // Phase 3: Bursting out of hangar into full-screen sortie battlefield
    const u = (progress - 0.64) / 0.36;
    const easeOut = 1 - Math.pow(1 - u, 2.2);
    centerY = H * 0.52 - easeOut * (H * 0.07);
    scale = 1.08 - easeOut * 0.26;
    tiltRad = -0.04 + easeOut * 0.04;
  }

  ctx.save();
  ctx.translate(cx, centerY);
  ctx.rotate(tiltRad);
  ctx.scale(scale, scale);

  // Behind-Suit Signature Energy Auras
  if (fx === 'god-sun-halo' && progress > 0.14) {
    ctx.save();
    ctx.rotate(timeSec * 2.2);
    ctx.strokeStyle = '#fde047';
    ctx.lineWidth = 4.5;
    ctx.beginPath();
    ctx.arc(0, -18, 128, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([14, 9]);
    ctx.strokeStyle = '#fb923c';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, -18, 142, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }

  if (fx === 'minovsky-flight-rings' && progress > 0.22) {
    for (let r = 0; r < 3; r += 1) {
      const ringPhase = (timeSec * 2.8 + r * 0.33) % 1;
      ctx.strokeStyle = `rgba(56, 189, 248, ${(0.75 * (1 - ringPhase)).toFixed(2)})`;
      ctx.lineWidth = 2.8;
      ctx.beginPath();
      ctx.ellipse(0, 88 + ringPhase * 46, 86 + ringPhase * 76, 18 + ringPhase * 12, 0, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  if (fx === 'gn-twin-drive-storm' && progress > 0.14) {
    const gnGrad = ctx.createRadialGradient(0, -10, 18, 0, -10, 185);
    gnGrad.addColorStop(0, 'rgba(52, 211, 153, 0.58)');
    gnGrad.addColorStop(1, 'rgba(16, 185, 129, 0)');
    ctx.fillStyle = gnGrad;
    ctx.beginPath();
    ctx.arc(0, -10, 185, 0, Math.PI * 2);
    ctx.fill();
  }

  if (fx === 'himat-full-burst' && progress > 0.24) {
    // ZGMF-X10A azure plasma wing trails
    const wingAlpha = Math.min(0.68, (progress - 0.24) * 1.4);
    const wingGrad = ctx.createRadialGradient(0, -18, 28, 0, -18, 210);
    wingGrad.addColorStop(0, `rgba(56, 189, 248, ${wingAlpha.toFixed(2)})`);
    wingGrad.addColorStop(0.6, `rgba(37, 99, 235, ${(wingAlpha * 0.45).toFixed(2)})`);
    wingGrad.addColorStop(1, 'rgba(37, 99, 235, 0)');
    ctx.fillStyle = wingGrad;
    ctx.beginPath();
    ctx.arc(0, -18, 210, 0, Math.PI * 2);
    ctx.fill();
  }

  if ((fx === 'wings-of-light' || fx === 'proud-defender-lightning') && progress > 0.22) {
    const spread = Math.min(1, (progress - 0.22) / 0.34);
    ctx.fillStyle = fx === 'wings-of-light' ? 'rgba(244, 63, 94, 0.42)' : 'rgba(250, 204, 21, 0.42)';
    ctx.beginPath();
    ctx.moveTo(-24, -28);
    ctx.lineTo(-225 * spread, -138);
    ctx.lineTo(-175 * spread, 28);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(24, -28);
    ctx.lineTo(225 * spread, -138);
    ctx.lineTo(175 * spread, 28);
    ctx.closePath();
    ctx.fill();
  }

  // Twin Main Thruster Plume Cones underneath the launching suit
  if (progress > 0.2) {
    const flameLen = 42 + Math.sin(timeSec * 42) * 14 + (phase === 3 ? 42 : 0);
    const drawFlame = (fxX, fxY, width) => {
      const fGrad = ctx.createLinearGradient(fxX, fxY, fxX, fxY + flameLen);
      fGrad.addColorStop(0, '#fef9c3');
      fGrad.addColorStop(0.42, pal.thruster);
      fGrad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = fGrad;
      ctx.beginPath();
      ctx.moveTo(fxX - width, fxY);
      ctx.lineTo(fxX + width, fxY);
      ctx.lineTo(fxX, fxY + flameLen);
      ctx.closePath();
      ctx.fill();
    };
    drawFlame(-34, 82, 13);
    drawFlame(34, 82, 13);
  }

  // Render the ACTUAL corresponding Mobile Suit photo / studio cutout
  const asset = launchSuitAssetCache[suit.id];
  const drawHeight = 258;
  if (asset && asset.status === 'ready' && asset.cutout) {
    const b = asset.bounds;
    const aspect = b.w / Math.max(1, b.h);
    const drawW = Math.min(370, drawHeight * aspect);
    const drawH = drawW / Math.max(0.2, aspect);

    // Destiny Spec II Mirage Afterimage Ghosts
    if (fx === 'wings-of-light' && progress > 0.32) {
      ctx.save();
      ctx.globalAlpha = 0.28;
      ctx.drawImage(asset.cutout, b.x, b.y, b.w, b.h, -drawW / 2 - 42, -drawH / 2 + 12, drawW, drawH);
      ctx.drawImage(asset.cutout, b.x, b.y, b.w, b.h, -drawW / 2 + 42, -drawH / 2 + 12, drawW, drawH);
      ctx.restore();
    }

    // Subtle colored rim glow behind the suit cutout
    ctx.save();
    ctx.shadowColor = pal.glow;
    ctx.shadowBlur = phase >= 2 ? 22 : 10;
    ctx.drawImage(asset.cutout, b.x, b.y, b.w, b.h, -drawW / 2, -drawH / 2, drawW, drawH);
    ctx.restore();

    if (suit.photoType === 'real') {
      // Sleek elliptical faction HUD ring around real-hangar cutout
      ctx.strokeStyle = pal.glow;
      ctx.lineWidth = 1.6;
      ctx.setLineDash([8, 6]);
      ctx.beginPath();
      ctx.ellipse(0, 0, drawW * 0.44, drawH * 0.46, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
    }
  } else {
    // Immediate placeholder frame only for the 10ms while local image decodes
    ctx.strokeStyle = pal.glow;
    ctx.lineWidth = 2;
    ctx.strokeRect(-70, -100, 140, 200);
    ctx.fillStyle = '#fef08a';
    ctx.font = '700 14px "IBM Plex Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText(suit.code, 0, 0);
  }

  // Dynamic In-Front / Orbiting Signature Weaponry Effects
  if (fx === 'fin-funnel-ripple' && progress > 0.25) {
    for (let f = 0; f < 6; f += 1) {
      const ang = -Math.PI * 0.8 + f * 0.34 + Math.sin(timeSec * 2 + f) * 0.1;
      const rad = 148 + (progress > 0.64 ? (progress - 0.64) * 75 : 0);
      const fxX = Math.cos(ang) * rad;
      const fxY = Math.sin(ang) * (rad * 0.72) - 20;
      ctx.fillStyle = '#f8fafc';
      ctx.strokeStyle = pal.glow;
      ctx.lineWidth = 1.5;
      ctx.fillRect(fxX - 4, fxY - 14, 8, 28);
      ctx.strokeRect(fxX - 4, fxY - 14, 8, 28);
    }
  } else if (fx === 'permet-bit-orbit' && progress > 0.2) {
    for (let b = 0; b < 11; b += 1) {
      const ang = timeSec * 2.8 + (b * Math.PI * 2) / 11;
      const bx = Math.cos(ang) * 145;
      const by = Math.sin(ang) * 62 - 12;
      ctx.fillStyle = '#38bdf8';
      ctx.fillRect(bx - 6, by - 3, 12, 6);
    }
  } else if (fx === 'ntd-awakening' && progress > 0.28) {
    const pulseAlpha = 0.25 + 0.25 * Math.sin(timeSec * 12);
    ctx.strokeStyle = `rgba(251, 113, 133, ${pulseAlpha.toFixed(2)})`;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, -10, 145 + Math.sin(timeSec * 8) * 10, 0, Math.PI * 2);
    ctx.stroke();
  } else if (fx === 'proud-defender-lightning' && progress > 0.3) {
    ctx.strokeStyle = '#fef08a';
    ctx.lineWidth = 2.2;
    for (let l = 0; l < 4; l += 1) {
      const lx = (Math.sin(timeSec * 18 + l * 2.1)) * 140;
      const ly = (Math.cos(timeSec * 15 + l * 1.7)) * 95;
      ctx.beginPath();
      ctx.moveTo(0, -10);
      ctx.lineTo(lx * 0.55, ly * 0.55 - 16);
      ctx.lineTo(lx, ly);
      ctx.stroke();
    }
  }

  // Phase 1 Eye / Sensor Ignition Flare
  if (progress > 0.08 && progress < 0.3) {
    const flareAlpha = Math.sin(((progress - 0.08) / 0.22) * Math.PI);
    ctx.strokeStyle = `rgba(254, 240, 138, ${flareAlpha.toFixed(2)})`;
    ctx.lineWidth = 2.4;
    ctx.beginPath();
    ctx.moveTo(-36, -86);
    ctx.lineTo(36, -86);
    ctx.moveTo(0, -112);
    ctx.lineTo(0, -60);
    ctx.stroke();
  }

  ctx.restore();
}

/**
 * Spawns and updates launch exhaust / special-effect particles on the Hangar Canvas.
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} W
 * @param {number} H
 * @param {SuitLaunchConfig} cfg
 * @param {number} progress
 */
function updateAndDrawLaunchParticles(ctx, W, H, cfg, progress) {
  const cx = W / 2;
  const fx = cfg.specialEffect;

  if (progress > 0.14 && progress < 0.94 && launchAnimState.particles.length < 95) {
    const spawnCount = progress > 0.28 ? 3 : 1;
    for (let i = 0; i < spawnCount; i += 1) {
      let color = '#cbd5e1';
      let kind = 'smoke';
      if (fx === 'angel-feathers') {
        color = '#f8fafc';
        kind = 'feather';
      } else if (fx === 'gn-twin-drive-storm') {
        color = '#34d399';
        kind = 'spark';
      } else if (fx === 'moonlight-butterfly') {
        color = i % 2 === 0 ? '#a78bfa' : '#38bdf8';
        kind = 'spark';
      } else if (fx === 'alaya-sparks' || fx === 'proud-defender-lightning') {
        color = fx === 'alaya-sparks' ? '#ef4444' : '#fde047';
        kind = 'spark';
      } else if (fx === 'ntd-awakening' && progress > 0.26) {
        color = '#fb7185';
        kind = 'spark';
      } else if (fx === 'himat-full-burst') {
        color = i % 2 === 0 ? '#38bdf8' : '#fef08a';
        kind = 'spark';
      }

      launchAnimState.particles.push({
        x: cx + (Math.random() - 0.5) * 260,
        y: H * (progress < 0.3 ? 0.72 : 0.54) + (Math.random() - 0.5) * 70,
        vx: (Math.random() - 0.5) * 3.2,
        vy: kind === 'feather' ? -0.7 - Math.random() : 0.9 + Math.random() * 2.0,
        size: kind === 'smoke' ? 4 + Math.random() * 5 : 2.5 + Math.random() * 3,
        life: 0,
        maxLife: 28 + Math.random() * 24,
        color,
        kind,
      });
    }
  }

  for (let i = launchAnimState.particles.length - 1; i >= 0; i -= 1) {
    const p = launchAnimState.particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.life += 1;
    if (p.life >= p.maxLife) {
      launchAnimState.particles.splice(i, 1);
      continue;
    }
    const alpha = Math.max(0, 1 - p.life / p.maxLife);
    ctx.save();
    ctx.globalAlpha = alpha * 0.85;
    ctx.fillStyle = p.color;
    if (p.kind === 'feather') {
      ctx.beginPath();
      ctx.ellipse(p.x, p.y, p.size * 2.1, p.size * 0.65, p.life * 0.1, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }
}

/**
 * Updates phase step pills and descriptive narration below the launch canvas.
 * @param {SuitLaunchConfig} cfg
 * @param {number} phase
 * @param {boolean} isFinished
 */
function syncLaunchPhaseUi(cfg, phase, isFinished) {
  launchPhaseSteps.forEach((stepEl) => {
    const stepNum = Number(stepEl.getAttribute('data-phase'));
    const active = !isFinished && stepNum === phase;
    const done = isFinished || stepNum < phase;
    stepEl.classList.toggle('is-active', active);
    stepEl.classList.toggle('is-done', done);
  });

  if (launchSceneDesc) {
    launchSceneDesc.textContent = cfg.phaseNotes[Math.min(2, Math.max(0, phase - 1))];
  }
}

function stopLaunchAnimation() {
  if (launchAnimState.rafId !== null) {
    cancelAnimationFrame(launchAnimState.rafId);
    launchAnimState.rafId = null;
  }
}

function startLaunchAnimation() {
  stopLaunchAnimation();
  launchAnimState.particles = [];
  launchAnimState.startTime = performance.now();

  const suit = getSuitById(launchAnimState.suitId);
  const cfg = SUIT_LAUNCH_SCENES[suit.id] || SUIT_LAUNCH_SCENES['rx-78-2'];
  ensureLaunchSuitAsset(suit);

  const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const renderFrame = (now) => {
    if (!(launchCanvas instanceof HTMLCanvasElement)) return;
    const ctx = launchCanvas.getContext('2d');
    if (!ctx) return;

    const elapsed = reducedMotion ? LAUNCH_DURATION_MS : now - launchAnimState.startTime;
    const progress = Math.min(1, elapsed / LAUNCH_DURATION_MS);
    const phase = progress < 0.28 ? 1 : progress < 0.64 ? 2 : 3;
    const isFinished = progress >= 1;

    const W = 960;
    const H = 480;
    if (launchCanvas.width !== W || launchCanvas.height !== H) {
      launchCanvas.width = W;
      launchCanvas.height = H;
    }

    drawSharedHangarBackground(ctx, W, H, progress, phase, suit, cfg, elapsed / 1000);
    drawLaunchMobileSuit(ctx, suit, cfg, W, H, progress, phase, elapsed / 1000);
    updateAndDrawLaunchParticles(ctx, W, H, cfg, progress);

    // Final Sortie Confirmed Overlay Stamp (placed cleanly at lower horizon so the suit remains clearly visible)
    if (isFinished) {
      ctx.fillStyle = 'rgba(8, 17, 34, 0.82)';
      ctx.fillRect(W / 2 - 220, H - 84, 440, 66);
      ctx.strokeStyle = '#fde047';
      ctx.lineWidth = 2;
      ctx.strokeRect(W / 2 - 220, H - 84, 440, 66);
      ctx.textAlign = 'center';
      ctx.font = '700 17px "IBM Plex Mono", monospace';
      ctx.fillStyle = '#fef08a';
      ctx.fillText(`SORTIE CONFIRMED · ${suit.code} ${suit.name}`, W / 2, H - 56);
      ctx.font = '600 12.5px "Noto Sans TC", sans-serif';
      ctx.fillStyle = '#fef9c3';
      ctx.fillText(`已從機庫發進至「${cfg.destination}」`, W / 2, H - 32);
    }

    syncLaunchPhaseUi(cfg, phase, isFinished);

    if (!isFinished) {
      launchAnimState.rafId = requestAnimationFrame(renderFrame);
    } else {
      launchAnimState.rafId = null;
    }
  };

  launchAnimState.rafId = requestAnimationFrame(renderFrame);
}

/**
 * Opens the Hangar Launch Sequence modal for the inspected Mobile Suit.
 * @param {string} suitId
 */
function openLaunchModal(suitId) {
  const suit = getSuitById(suitId);
  const cfg = SUIT_LAUNCH_SCENES[suit.id] || SUIT_LAUNCH_SCENES['rx-78-2'];
  launchAnimState.suitId = suit.id;
  ensureLaunchSuitAsset(suit);

  if (launchModalKicker) {
    launchModalKicker.textContent = `MS HANGAR SORTIE · ${suit.code} · ${suit.era}`;
  }
  if (launchModalTitle) {
    launchModalTitle.textContent = `${suit.code} ${suit.name} — 機庫出發動畫`;
  }
  if (launchBayMeta) {
    launchBayMeta.textContent = `${cfg.bayName} → ${cfg.destination}`;
  }
  if (launchCallout) {
    launchCallout.textContent = cfg.pilotCallout;
  }

  if (launchModal) {
    launchModal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    launchModalCloseBtn?.focus();
  }

  startLaunchAnimation();
}

function closeLaunchModal() {
  stopLaunchAnimation();
  if (launchModal) {
    launchModal.setAttribute('hidden', '');
    if (!state.modalSuitId) {
      document.body.style.overflow = '';
    }
  }
}

/* ==========================================================================
   Event Wiring & Initialization
   ========================================================================== */

function bindEvents() {
  filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      state.filter = tab.getAttribute('data-filter') || 'all';
      filterTabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', String(active));
      });
      renderSuitGrid();
    });
  });

  searchInput?.addEventListener('input', (e) => {
    const target = e.target;
    if (target instanceof HTMLInputElement) {
      state.search = target.value;
      renderSuitGrid();
    }
  });

  sortSelect?.addEventListener('change', (e) => {
    const target = e.target;
    if (target instanceof HTMLSelectElement) {
      state.sort = target.value;
      renderSuitGrid();
    }
  });

  resetFiltersBtn?.addEventListener('click', () => {
    state.filter = 'all';
    state.search = '';
    state.sort = 'era';
    if (searchInput instanceof HTMLInputElement) searchInput.value = '';
    if (sortSelect instanceof HTMLSelectElement) sortSelect.value = 'era';
    filterTabs.forEach((t) => {
      const isAll = t.getAttribute('data-filter') === 'all';
      t.classList.toggle('is-active', isAll);
      t.setAttribute('aria-selected', String(isAll));
    });
    renderSuitGrid();
  });

  suitGrid?.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;

    const weaponsTrigger = target.closest('.js-weapons, .suit-weapons-close');
    if (weaponsTrigger) {
      const id = weaponsTrigger.getAttribute('data-id');
      if (id) {
        const shouldClose = weaponsTrigger.classList.contains('suit-weapons-close');
        const nextOpen = shouldClose ? false : !state.weaponViewSuits.has(id);
        if (nextOpen) {
          state.weaponViewSuits.add(id);
        } else {
          state.weaponViewSuits.delete(id);
        }

        const card = weaponsTrigger.closest('.suit-card');
        if (card instanceof HTMLElement) {
          card.classList.toggle('is-weapons-open', nextOpen);
          if (nextOpen) {
            card.classList.remove('is-flipped');
          }

          const summaryEl = card.querySelector('.suit-summary');
          const metricsEl = card.querySelector('.suit-metrics');
          const panelEl = card.querySelector('.suit-weapons-panel');

          if (summaryEl instanceof HTMLElement) summaryEl.hidden = nextOpen;
          if (metricsEl instanceof HTMLElement) metricsEl.hidden = nextOpen;
          if (panelEl instanceof HTMLElement) panelEl.hidden = !nextOpen;

          card.querySelectorAll('.js-weapons').forEach((btn) => {
            btn.classList.toggle('is-active', nextOpen);
            btn.setAttribute('aria-pressed', String(nextOpen));
          });
        }
      }
      return;
    }

    const radarAllBtn = target.closest('.js-radar-all');
    if (radarAllBtn && radarAllBtn.getAttribute('data-context') === 'card') {
      const id = radarAllBtn.getAttribute('data-id');
      if (id) {
        const suit = getSuitById(id);
        const set = getCardRadarSet(id);
        if (set.size === suit.weaponProfiles.length) {
          set.clear();
        } else {
          suit.weaponProfiles.forEach((_, idx) => set.add(idx));
        }
        syncCardRadarOverlay(id);
      }
      return;
    }

    const radarCloseBtn = target.closest('.js-radar-close');
    if (radarCloseBtn && radarCloseBtn.getAttribute('data-context') === 'card') {
      const id = radarCloseBtn.getAttribute('data-id');
      if (id) {
        getCardRadarSet(id).clear();
        syncCardRadarOverlay(id);
      }
      return;
    }

    if (target.closest('.card-range-radar-overlay')) {
      return;
    }

    const effectiveRangeBtn = target.closest('.js-effective-range');
    if (effectiveRangeBtn) {
      const id = effectiveRangeBtn.getAttribute('data-id');
      const idx = Number(effectiveRangeBtn.getAttribute('data-weapon-idx'));
      if (id && Number.isInteger(idx)) {
        const set = getCardRadarSet(id);
        if (set.has(idx)) {
          set.delete(idx);
        } else {
          set.add(idx);
        }
        state.selectedWeaponBySuit[id] = idx;
        const panelEl = effectiveRangeBtn.closest('.suit-weapons-panel');
        if (panelEl instanceof HTMLElement) {
          panelEl.innerHTML = renderWeaponsPanelInner(getSuitById(id));
        }
        syncCardRadarOverlay(id);
      }
      return;
    }

    const weaponSelectBtn = target.closest('.suit-weapon-select-btn');
    if (weaponSelectBtn) {
      const id = weaponSelectBtn.getAttribute('data-id');
      const idx = Number(weaponSelectBtn.getAttribute('data-weapon-idx'));
      if (id && Number.isInteger(idx)) {
        state.selectedWeaponBySuit[id] = idx;
        const panelEl = weaponSelectBtn.closest('.suit-weapons-panel');
        if (panelEl instanceof HTMLElement) {
          panelEl.innerHTML = renderWeaponsPanelInner(getSuitById(id));
        }
      }
      return;
    }

    if (target.closest('.suit-weapons-panel')) {
      return;
    }

    const inspectBtn = target.closest('.js-inspect');
    if (inspectBtn) {
      const id = inspectBtn.getAttribute('data-id');
      if (id) openSuitModal(id);
      return;
    }

    const compareBtn = target.closest('.js-compare');
    if (compareBtn) {
      const id = compareBtn.getAttribute('data-id');
      if (id && compareSelectB instanceof HTMLSelectElement) {
        state.compareB = id;
        compareSelectB.value = id;
        renderComparator();
        document.getElementById('comparator')?.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const card = target.closest('.suit-card');
    if (card && !card.classList.contains('is-weapons-open')) {
      card.classList.toggle('is-flipped');
    }
  });

  compareSelectA?.addEventListener('change', (e) => {
    const target = e.target;
    if (target instanceof HTMLSelectElement) {
      state.compareA = target.value;
      hideRadarTooltip();
      renderComparator();
    }
  });

  compareSelectB?.addEventListener('change', (e) => {
    const target = e.target;
    if (target instanceof HTMLSelectElement) {
      state.compareB = target.value;
      hideRadarTooltip();
      renderComparator();
    }
  });

  compareSwapBtn?.addEventListener('click', () => {
    const prevA = state.compareA;
    state.compareA = state.compareB;
    state.compareB = prevA;
    if (compareSelectA instanceof HTMLSelectElement) compareSelectA.value = state.compareA;
    if (compareSelectB instanceof HTMLSelectElement) compareSelectB.value = state.compareB;
    hideRadarTooltip();
    renderComparator();
  });

  if (radarCanvas instanceof HTMLCanvasElement) {
    radarCanvas.addEventListener('mousemove', (e) => {
      const axisIndex = getHoveredRadarAxis(e.clientX, e.clientY);
      if (axisIndex === null) {
        hideRadarTooltip();
        syncHeatmapHighlight(null);
        return;
      }

      if (state.hoveredAxisIndex !== axisIndex) {
        state.hoveredAxisIndex = axisIndex;
        drawRadarChart(getSuitById(state.compareA), getSuitById(state.compareB), axisIndex);
        syncHeatmapHighlight(axisIndex);
      }
      radarCanvas.classList.add('is-axis-hovered');
      showRadarTooltip(axisIndex, e.clientX, e.clientY);
    });

    radarCanvas.addEventListener('mouseleave', () => {
      hideRadarTooltip();
      syncHeatmapHighlight(null);
    });

    radarCanvas.addEventListener('click', (e) => {
      const axisIndex = getHoveredRadarAxis(e.clientX, e.clientY);
      if (axisIndex === null) {
        hideRadarTooltip();
        syncHeatmapHighlight(null);
        return;
      }
      state.hoveredAxisIndex = axisIndex;
      drawRadarChart(getSuitById(state.compareA), getSuitById(state.compareB), axisIndex);
      syncHeatmapHighlight(axisIndex);
      radarCanvas.classList.add('is-axis-hovered');
      showRadarTooltip(axisIndex, e.clientX, e.clientY);
    });
  }

  heatmapModeTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const mode = tab.getAttribute('data-heatmap-mode');
      state.heatmapMode = mode === 'spectrum' ? 'spectrum' : 'matrix';
      heatmapModeTabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', String(active));
      });
      renderHeatmap(getSuitById(state.compareA), getSuitById(state.compareB));
    });
  });

  if (heatmapBody instanceof HTMLElement) {
    heatmapBody.addEventListener('mousemove', (e) => {
      const target = e.target;
      if (!(target instanceof HTMLElement)) return;
      const axisEl = target.closest('[data-axis-index]');
      const nextIndex = axisEl ? Number(axisEl.getAttribute('data-axis-index')) : null;
      if (state.hoveredAxisIndex !== nextIndex) {
        state.hoveredAxisIndex = nextIndex;
        drawRadarChart(getSuitById(state.compareA), getSuitById(state.compareB), nextIndex);
        syncHeatmapHighlight(nextIndex);
      }
    });

    heatmapBody.addEventListener('mouseleave', () => {
      if (state.hoveredAxisIndex !== null) {
        state.hoveredAxisIndex = null;
        drawRadarChart(getSuitById(state.compareA), getSuitById(state.compareB), null);
        syncHeatmapHighlight(null);
      }
    });
  }

  timelineTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      state.activeEra = tab.getAttribute('data-era') || '0079';
      timelineTabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', String(active));
      });
      renderTimeline();
    });
  });

  timelineDetail?.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    const btn = target.closest('[data-open-suit]');
    if (btn) {
      const suitId = btn.getAttribute('data-open-suit');
      if (suitId) openSuitModal(suitId);
    }
  });

  // Modal Events
  modalCloseBtn?.addEventListener('click', closeSuitModal);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeSuitModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (launchModal && !launchModal.hasAttribute('hidden')) {
        closeLaunchModal();
        return;
      }
      if (state.modalSuitId) {
        closeSuitModal();
      }
    }
  });

  modalModeToggle?.addEventListener('click', () => {
    state.modalOverdrive = !state.modalOverdrive;
    renderModalContent();
  });

  modalArmaments?.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement) || !state.modalSuitId) return;
    const btn = target.closest('.js-modal-effective-range');
    if (!btn) return;
    const idx = Number(btn.getAttribute('data-weapon-idx'));
    if (Number.isInteger(idx)) {
      if (state.modalRadarWeapons.has(idx)) {
        state.modalRadarWeapons.delete(idx);
      } else {
        state.modalRadarWeapons.add(idx);
      }
      syncModalRadarOverlay();
    }
  });

  modalRadarOverlay?.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement) || !state.modalSuitId) return;
    const suit = getSuitById(state.modalSuitId);

    if (target.closest('.js-radar-all')) {
      if (state.modalRadarWeapons.size === suit.weaponProfiles.length) {
        state.modalRadarWeapons.clear();
      } else {
        suit.weaponProfiles.forEach((_, idx) => state.modalRadarWeapons.add(idx));
      }
      syncModalRadarOverlay();
      return;
    }

    if (target.closest('.js-radar-close')) {
      state.modalRadarWeapons.clear();
      syncModalRadarOverlay();
    }
  });

  scaleSelectA?.addEventListener('change', (e) => {
    const target = e.target;
    if (target instanceof HTMLSelectElement) {
      state.scaleA = target.value;
      renderScaleComparator();
    }
  });

  scaleSelectB?.addEventListener('change', (e) => {
    const target = e.target;
    if (target instanceof HTMLSelectElement) {
      state.scaleB = target.value;
      renderScaleComparator();
    }
  });

  scaleSwapBtn?.addEventListener('click', () => {
    const prevA = state.scaleA;
    state.scaleA = state.scaleB;
    state.scaleB = prevA;
    if (scaleSelectA instanceof HTMLSelectElement) scaleSelectA.value = state.scaleA;
    if (scaleSelectB instanceof HTMLSelectElement) scaleSelectB.value = state.scaleB;
    renderScaleComparator();
  });

  modalAssignA?.addEventListener('click', () => {
    if (!state.modalSuitId) return;
    state.compareA = state.modalSuitId;
    if (compareSelectA instanceof HTMLSelectElement) compareSelectA.value = state.compareA;
    renderComparator();
    closeSuitModal();
    document.getElementById('comparator')?.scrollIntoView({ behavior: 'smooth' });
  });

  modalAssignB?.addEventListener('click', () => {
    if (!state.modalSuitId) return;
    state.compareB = state.modalSuitId;
    if (compareSelectB instanceof HTMLSelectElement) compareSelectB.value = state.compareB;
    renderComparator();
    closeSuitModal();
    document.getElementById('comparator')?.scrollIntoView({ behavior: 'smooth' });
  });

  modalAssignScale?.addEventListener('click', () => {
    if (!state.modalSuitId) return;
    state.scaleA = state.modalSuitId;
    if (scaleSelectA instanceof HTMLSelectElement) scaleSelectA.value = state.scaleA;
    renderScaleComparator();
    closeSuitModal();
    document.getElementById('scale-comparator')?.scrollIntoView({ behavior: 'smooth' });
  });

  maintenanceSuitSelect?.addEventListener('change', (e) => {
    const target = e.target;
    if (target instanceof HTMLSelectElement) {
      state.maintenanceSuitId = target.value;
      renderMaintenance();
    }
  });

  maintenanceChecklist?.addEventListener('change', (e) => {
    const target = e.target;
    if (!(target instanceof HTMLInputElement)) return;
    const taskId = target.getAttribute('data-task-id');
    if (!taskId) return;
    const checks = getSuitMaintenanceState(state.maintenanceSuitId);
    checks[taskId] = target.checked;
    renderMaintenance();
  });

  maintenanceCheckAllBtn?.addEventListener('click', () => {
    const checks = getSuitMaintenanceState(state.maintenanceSuitId);
    MAINTENANCE_TASKS.forEach((task) => {
      checks[task.id] = true;
    });
    renderMaintenance();
  });

  const resetCurrentMaintenance = () => {
    state.maintenanceChecks[state.maintenanceSuitId] = {};
    delete state.maintenanceCompletedAt[state.maintenanceSuitId];
    renderMaintenance();
  };

  maintenanceResetBtn?.addEventListener('click', resetCurrentMaintenance);

  maintenanceReport?.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.closest('.js-report-reset')) {
      resetCurrentMaintenance();
      return;
    }
    if (target.closest('.js-report-launch')) {
      openLaunchModal(state.maintenanceSuitId);
    }
  });

  launchModalCloseBtn?.addEventListener('click', closeLaunchModal);
  launchCloseBottomBtn?.addEventListener('click', closeLaunchModal);
  launchReplayBtn?.addEventListener('click', startLaunchAnimation);
  launchModal?.addEventListener('click', (e) => {
    if (e.target === launchModal) closeLaunchModal();
  });
}

function init() {
  document.querySelectorAll('.hero-figure img').forEach(bindImageFallback);
  populateScaleSelects();
  populateComparatorSelects();
  populateMaintenanceSelect();
  renderSuitGrid();
  renderScaleComparator();
  renderComparator();
  renderTimeline();
  renderMaintenance();
  bindEvents();
}

const experience = initExperience({
  getSuit: getSuitById,
  getScalePair: () => [getSuitById(state.scaleA), getSuitById(state.scaleB)],
  silhouette: getNormalizedSuitSilhouette,
  onWeapon: (index) => {
    state.modalRadarWeapons = new Set([index]);
    syncModalRadarOverlay();
  },
});
init();
