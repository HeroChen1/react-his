import {
    HomeOutlined,
    AppstoreOutlined,
    UserOutlined,
    SafetyOutlined,
    AreaChartOutlined,
} from '@ant-design/icons';
export const menu = [
    {
        label: '门诊收费',
        key: '1',
        icon: <HomeOutlined />,
        children: [
            {
                label: '挂号收费',
                key: '11',
                icon: <HomeOutlined />,
                children: [
                    {
                        label: '挂号单',
                        key: '111',
                        icon: <HomeOutlined />,
                    },
                    {
                        label: '门诊收费',
                        key: '112',
                        icon: <HomeOutlined />,
                    },
                    {
                        label: '门诊退费',
                        key: '113',
                        icon: <HomeOutlined />,
                    },
                    {
                        label: '门诊收费日结',
                        key: '114',
                        icon: <HomeOutlined />,
                    }
                ]
            },
            {
                label: '单据查询',
                key: '12',
                icon: <HomeOutlined />,
                children: [
                    {
                        label: '挂号单查询',
                        key: '121',
                        icon: <HomeOutlined />,
                    },
                    {
                        label: '收费单查询',
                        key: '122',
                        icon: <HomeOutlined />,
                    },
                    {
                        label: '退费单查询',
                        key: '123',
                        icon: <HomeOutlined />,
                    }
                ]
            },
            {
                label: '报表查询',
                key: '13',
                icon: <HomeOutlined />,
                children: [
                    {
                        label: '门诊报表',
                        key: '131',
                        icon: <HomeOutlined />,
                    }
                ]
            }
        ]
    },
    {
        label: '药房药库',
        key: '2',
        icon: <HomeOutlined />,
        children: [
            {
                label: '药房管理',
                key: '21',
                icon: <HomeOutlined />,
                children: [
                    {
                        label: '药房规划',
                        key: '211',
                        icon: <HomeOutlined />,
                    },
                    {
                        label: '药房请领',
                        key: '212',
                        icon: <HomeOutlined />,
                    },
                    {
                        label: '发药管理',
                        key: '213',
                        icon: <HomeOutlined />,
                    },
                    {
                        label: '退药管理',
                        key: '214',
                        icon: <HomeOutlined />,
                    },
                    {
                        label: '药房入库',
                        key: '215',
                        icon: <HomeOutlined />,
                    },
                    {
                        label: '药房出库',
                        key: '216',
                        icon: <HomeOutlined />,
                    },
                    {
                        label: '药房盘点',
                        key: '217',
                        icon: <HomeOutlined />,
                    },
                    {
                        label: '药房调价',
                        key: '218',
                        icon: <HomeOutlined />,
                    },
                    {
                        label: '审核中心',
                        key: '219',
                        icon: <HomeOutlined />,
                    }
                ]
            },
            {
                label: '药库管理',
                key: '22',
                icon: <HomeOutlined />,
                children: [
                    {
                        label: '药库入库',
                        key: '221',
                        icon: <HomeOutlined />,
                    },
                    {
                        label: '药库出库',
                        key: '222',
                        icon: <HomeOutlined />,
                    },
                    {
                        label: '销售退库',
                        key: '223',
                        icon: <HomeOutlined />,
                    },
                    {
                        label: '药库调拨',
                        key: '224',
                        icon: <HomeOutlined />,
                    },
                    {
                        label: '药库盘点',
                        key: '225',
                        icon: <HomeOutlined />,
                    },
                    {
                        label: '付款单',
                        key: '226',
                        icon: <HomeOutlined />,
                    },
                    {
                        label: '收款单',
                        key: '227',
                        icon: <HomeOutlined />,
                    }
                ]
            },
            {
                label: '药房单据查询',
                key: '23',
                icon: <HomeOutlined />,
                children: [
                    {
                        label: '请领单查询',
                        key: '231',
                        icon: <HomeOutlined />,
                    },
                    {
                        label: '发药单查询',
                        key: '232',
                        icon: <HomeOutlined />,
                    },
                    {
                        label: '退药单查询',
                        key: '233',
                        icon: <HomeOutlined />,
                    },
                    {
                        label: '药房入库查询',
                        key: '234',
                        icon: <HomeOutlined />,
                    },
                    {
                        label: '药房出库查询',
                        key: '235',
                        icon: <HomeOutlined />,
                    },
                    {
                        label: '划价单查询',
                        key: '236',
                        icon: <HomeOutlined />,
                    },
                    {
                        label: '盘点单查询',
                        key: '237',
                        icon: <HomeOutlined />,
                    },
                    {
                        label: '调价单查询',
                        key: '237',
                        icon: <HomeOutlined />,
                    }
                ]
            },
            {
                label: '药库单据查询',
                key: '24',
                icon: <HomeOutlined />,
                children: [
                    {
                        label: '入库单查询',
                        key: '241',
                        icon: <HomeOutlined />,
                    },
                    {
                        label: '出库单查询',
                        key: '242',
                        icon: <HomeOutlined />,
                    },
                    {
                        label: '盘点单查询',
                        key: '243',
                        icon: <HomeOutlined />,
                    },
                    {
                        label: '调拨单查询',
                        key: '244',
                        icon: <HomeOutlined />,
                    },
                    {
                        label: '付款单查询',
                        key: '245',
                        icon: <HomeOutlined />,
                    },
                    {
                        label: '收款单查询',
                        key: '236',
                        icon: <HomeOutlined />,
                    }
                ]
            }
        ]
    },
    {
        label: '住院管理',
        key: '3',
        icon: <AppstoreOutlined />,
        children: [
            {
                label: '住院管理',
                key: '31',
                icon: <AppstoreOutlined />,
                children: [
                    {
                        label: '住院登记',
                        key: '311',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '床位安排',
                        key: '312',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '住院收费',
                        key: '313',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '住院退费',
                        key: '314',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '押金管理',
                        key: '315',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '出院管理',
                        key: '316',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '病区收费',
                        key: '317',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '住院收费',
                        key: '318',
                        icon: <AppstoreOutlined />,
                    }
                ]
            },
            {
                label: '单据查询',
                key: '32',
                icon: <AppstoreOutlined />,
                children: [
                    {
                        label: '住院登记查询',
                        key: '321',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '住院收费查询',
                        key: '322',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '住院退费查询',
                        key: '323',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '出院查询',
                        key: '324',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '在院查询',
                        key: '325',
                        icon: <AppstoreOutlined />,
                    },
                ]
            },
            {
                label: '报表查询',
                key: '33',
                icon: <AppstoreOutlined />,
                children: [
                    {
                        label: '住院报表',
                        key: '331',
                        icon: <AppstoreOutlined />,
                    }
                ]
            },
        ]
    },
    {
        label: '医生站',
        key: '4',
        icon: <AppstoreOutlined />,
        children: [
            {
                label: '处方病历',
                key: '41',
                icon: <AppstoreOutlined />,
                children: [
                    {
                        label: '处方管理',
                        key: '411',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '门诊病历',
                        key: '412',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '住院病案',
                        key: '413',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '住院医嘱',
                        key: '414',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '医技报告',
                        key: '415',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '床位信息',
                        key: '416',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '住院通知',
                        key: '417',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '皮试结果',
                        key: '418',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '检查申请',
                        key: '419',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '检验申请',
                        key: '410',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '门诊日志',
                        key: '4101',
                        icon: <AppstoreOutlined />,
                    },
                ]
            },
            {
                label: '单据查询',
                key: '42',
                icon: <AppstoreOutlined />,
                children: [
                    {
                        label: '处方查询',
                        key: '421',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '门诊病历查询',
                        key: '422',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '住院医嘱查询',
                        key: '423',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '医技申请查询',
                        key: '424',
                        icon: <AppstoreOutlined />,
                    }
                ]
            }
        ]
    },
    {
        label: '护士站',
        key: '5',
        icon: <AppstoreOutlined />,
        children: [
            {
                label: '单据管理',
                key: '51',
                icon: <AppstoreOutlined />,
                children: [
                    {
                        label: '床位安排',
                        key: '511',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '医嘱管理',
                        key: '512',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '医嘱清单',
                        key: '513',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '医嘱执行',
                        key: '514',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '护理记录',
                        key: '515',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '输液管理',
                        key: '516',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '出院申请',
                        key: '517',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '皮试管理',
                        key: '518',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '手术通知',
                        key: '519',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '退药申请',
                        key: '510',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '门诊输液',
                        key: '5101',
                        icon: <AppstoreOutlined />,
                    },
                ]
            },
            {
                label: '单据查询',
                key: '52',
                icon: <AppstoreOutlined />,
                children: [
                    {
                        label: '住院登记查询',
                        key: '521',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '医嘱查询',
                        key: '522',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '出院查询',
                        key: '523',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '发药单查询',
                        key: '524',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '出院申请查询',
                        key: '525',
                        icon: <AppstoreOutlined />,
                    }
                ]
            }
        ]
    },
    {
        label: '物资管理',
        key: '6',
        icon: <AppstoreOutlined />,
        children: [
            {
                label: '单据管理',
                key: '61',
                icon: <AppstoreOutlined />,
                children: [
                    {
                        label: '物资入库单',
                        key: '611',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '物资领用单',
                        key: '612',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '物资出库单',
                        key: '613',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '物资退库单',
                        key: '614',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '物质调拨单',
                        key: '615',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '物资月结处理',
                        key: '616',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '物资盘点单',
                        key: '617',
                        icon: <AppstoreOutlined />,
                    }
                ]
            },
            {
                label: '单据查询',
                key: '62',
                icon: <AppstoreOutlined />,
                children: [
                    {
                        label: '物资入库单查询',
                        key: '621',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '物资领用单查询',
                        key: '622',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '物资出库单查询',
                        key: '623',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '物资退库单查询',
                        key: '624',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '物资调拨单查询',
                        key: '625',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '物资盘点单查询',
                        key: '626',
                        icon: <AppstoreOutlined />,
                    }
                ]
            },
            {
                label: '报表查询',
                key: '63',
                icon: <AppstoreOutlined />,
                children: [
                    {
                        label: '报表查询',
                        key: '631',
                        icon: <AppstoreOutlined />,
                    }
                ]
            }
        ]
    },
    {
        label: '医技管理',
        key: '7',
        icon: <AppstoreOutlined />,
        children: [
            {
                label: '单据管理',
                key: '71',
                icon: <AppstoreOutlined />,
                children: [
                    {
                        label: '检查申请',
                        key: '711',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '检验申请',
                        key: '712',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '检查单执行',
                        key: '713',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '检查单执行取消',
                        key: '714',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '医技检查报告',
                        key: '715',
                        icon: <AppstoreOutlined />,
                    },
                ]
            },
            {
                label: '单据查询',
                key: '72',
                icon: <AppstoreOutlined />,
                children: [
                    {
                        label: '医技申请单查询',
                        key: '721',
                        icon: <AppstoreOutlined />,
                    }
                ]
            },
            {
                label: '报表查询',
                key: '73',
                icon: <AppstoreOutlined />,
                children: [
                    {
                        label: '医技报表',
                        key: '731',
                        icon: <AppstoreOutlined />,
                    }
                ]
            }
        ]
    },
    {
        label: '手术管理',
        key: '8',
        icon: <AppstoreOutlined />,
        children: [
            {
                label: '手术管理',
                key: '81',
                icon: <AppstoreOutlined />,
                children: [
                    {
                        label: '手术管理',
                        key: '811',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '手术管理',
                        key: '812',
                        icon: <AppstoreOutlined />,
                    }
                ]
            },
            {
                label: '单据查询',
                key: '82',
                icon: <AppstoreOutlined />,
                children: [
                    {
                        label: '手术单据查询',
                        key: '821',
                        icon: <AppstoreOutlined />,
                    }
                ]
            }
        ]
    },
    {
        label: '病历管理',
        key: '9',
        icon: <AppstoreOutlined />,
    },
    {
        label: '院长财务',
        key: '10',
        icon: <AppstoreOutlined />,
        children: [
            {
                label: '院长财务',
                key: '101',
                icon: <AppstoreOutlined />,
                children: [
                    {
                        label: '门诊管理报表',
                        key: '1011',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '药房药库报表',
                        key: '1012',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '住院管理报表',
                        key: '1013',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '物资管理报表',
                        key: '1014',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '财务管理报表',
                        key: '1015',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '社区管理报表',
                        key: '1016',
                        icon: <AppstoreOutlined />,
                    },
                ]
            }
        ]
    },
    {
        label: '系统设置',
        key: '0',
        icon: <AppstoreOutlined />,
        children: [
            {
                label: '基础数据',
                key: '01',
                icon: <AppstoreOutlined />,
                children: [
                    {
                        label: '科室设置',
                        key: '/admin/departments',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '病区设置',
                        key: '/admin/inpatient',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '床位设置',
                        key: '/admin/beds',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '医护设置',
                        key: '/admin/medic',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '药房设置',
                        key: '/admin/pharmacy',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '项目设置',
                        key: '016',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '往来单位',
                        key: '017',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '患者设置',
                        key: '018',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '套餐设置',
                        key: '019',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '套餐组设置',
                        key: '0191',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '物资编码',
                        key: '0192',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '数据字典',
                        key: '0193',
                        icon: <AppstoreOutlined />,
                    },
                ]
            },
            {
                label: '其他设置',
                key: '02',
                icon: <AppstoreOutlined />,
                children: [
                    {
                        label: '参数设置',
                        key: '021',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '打印格式设置',
                        key: '022',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '打印格式内容',
                        key: '023',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '权限设置',
                        key: '024',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '用户设置',
                        key: '025',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '口令设置',
                        key: '026',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '医技申请格式设置',
                        key: '027',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '门诊套打格式',
                        key: '028',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '单据格式设置',
                        key: '029',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '农合接口',
                        key: '0291',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '日志管理',
                        key: '0292',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '居民医保接口',
                        key: '0293',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '职工医保接口',
                        key: '0294',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '省医保接口管理',
                        key: '0295',
                        icon: <AppstoreOutlined />,
                    },
                ]
            },
            {
                label: '医保管理',
                key: '03',
                icon: <AppstoreOutlined />,
                children: [
                    {
                        label: '病种设置',
                        key: '031',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '医保药品',
                        key: '032',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '医农保项目对照',
                        key: '033',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '医农保项目查询',
                        key: '034',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: 'ICD疾病库对照',
                        key: '035',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: '手术库对照',
                        key: '036',
                        icon: <AppstoreOutlined />,
                    },
                ]
            }
        ]
    },
    // {
    //     label: '科室设置',
    //     key: '/admin/departments',
    //     icon: <AppstoreOutlined />
    // },
    // {
    //     label: '医护设置',
    //     key: '/admin/medic',
    //     icon: <UserOutlined />
    // },
    // {
    //     label: '病区设置',
    //     key: '/admin/inpatient',
    //     icon: <SafetyOutlined />
    // },
    // {
    //     label: '床位设置',
    //     key: '/admin/beds',
    //     icon: <AreaChartOutlined />
    // },
    // {
    //     label: '药房设置',
    //     key: '/admin/pharmacy',
    //     icon: <SafetyOutlined />
    // },
    {
        label: '药品设置',
        key: '/admin/drug',
        icon: <SafetyOutlined />
    },
]
