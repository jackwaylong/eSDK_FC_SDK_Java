function LanguageControllerEN()
{
	this.language = {
		buttons : {
			"queryDataStoresBtn" : "Query DataStore",
			"queryPortGroupsBtn" : "Query PortGroups",
			"getPortGroupsBtn" : "Get PortGroup",
			"getDatastoreUrnBtn" : "Get Datestore",
			"addUserDiskBtn" : "Add Disk",
			"addNicsBtn" : "Add Network Interface Card",
			"createVMBtn" : "Create VM"
		},

		titles : {
			"descriptionFC" : "This Demo contains three eSDK Cloud FC functions and their samples: queryPortGroups, queryDataStores, createVM.",
			"copyright" : "Copyright © Huawei Technologies Co., Ltd. 1998-2016. All rights reserved.",
			"description" : "Description",
			"exection" : "Execution",
			"sourceCode" : "Source Code",
			"inputParam" : "Input:",
			"outputParam" : "Output:",
			"resultCode" : "Result Code:",
			"inputParameterDesc" : "input parameters description:",
			"outputParameterDesc" : "output parameters description:",
			"inputParameterTd" : "parameter",
			"inputTypeTd" : "type",
			"inputRestrictionTd" : "restriction",
			"inputDescriptionTd" : "description",
			"outputParameterTd" : "parameter",
			"outputTypeTd" : "type",
			"outputRestrictionTd" : "restriction",
			"outputDescriptionTd" : "description",
			"optional" : "Optional",
			"required" : "Required",
			"alternative" : "either of them",
			"codeTd" : "for successful return 0000000000, and failed return other codes",
			"messageTd" : "fault string",
			"operationSuccess" : "operation success",
			"operationFailed" : "operation failed",
			
			"FMTree_1_span" : "Typical functions",
			"FMTree_2_span" : "Query PortGroups",
			"FMTree_3_span" : "queryPortGroups",
			"FMTree_4_span" : "Query DataStores",
			"FMTree_5_span" : "queryDataStores",
			"FMTree_6_span" : "Create VM",
			"FMTree_7_span" : "createVM",
			
			"FMTree_3_span_tag" : "Query PortGroup",
			"FMTree_5_span_tag" : "Query DataStore",
			"FMTree_7_span_tag" : "Create VM",
			
			"querySiteReqEx_uriLabel" : "Site",
			"queryDVSwitchEx_uriLabel" : "DVSwitch Uri",
			"queryDVSwitchEx_uriNullTip" : "There is nothing DVSwitchUri under the SiteUri",
			"queryDVSwitchEx_uriTip" : "DVSwitch Uri is required",
			"queryDVSwitchEx_uriFirstSiteTip" : "Please first select one SiteUri",
			
			"querySiteUriEx_uriNotNullTip" : "Site Uri is required",
			
			"createVMReq_VM_diskNotNull" : "Disk size is required",
			"queryDataStores_limit_numRangeNull" : "Please input integer, the range is 1-100",
			"queryDataStores_offset_numRangeNull" : "Please input integer (no less than 0)",
			"createVMReq_vmParameters_dataStoreNotNull" : "dateStore Urn is requried",
			"createVMReq_VM_sequenceNumNotNull" : "Sequence Num is requried",
			"createVMReq_vmParameters_portGroupNotNull" : "port Group is requried",
			"createVMReq_MemorySet_limit_illegalNull" : "memory limit's size is memory size",
			
			"PortGroupResourceInterface" : "Interface Name：",
			"PortGroupResourceInterfaceName" : "Query All PortGroup of under the DVSwitch ",
			"PortGroupDesc" : "The Interface is for to Paging Query All PortGroup of under the DVSwitch.",
			"QueryVPCReqExTd" : "Query VPC request.",
			"queryPortGroupsReqEx_dvswitchUriTd" : "DVSwitchURI.",
			"queryPortGroupsReqEx_offsetTd" : "offset",
			"queryPortGroupsReqEx_limitTd" : "limit, max value is 100.",
			"queryPortGroupsReqEx_portGroupNameTd" : "portGroupName,fuzzy search, the same of capital or samll, value is not null or '' ",
			"queryPortGroupsResp_totalTd" : "total of response.",
			"queryPortGroupsResp_listTd" : "portGroup list.",
			
			"queryPortGroupsResp_PortGroup_urn" : "Portgroup sign.",
			"queryPortGroupsResp_PortGroup_uri" : "Portgroup uri Address.",
			"queryPortGroupsResp_PortGroup_name" : "Portgroup Name, the length is [1, 256], no repeat.",
			"queryPortGroupsResp_PortGroup_subnetUrn" : "linked Subnet, While thie portType is Access, the field is optional, or and vlanId、vlanRange、vxlanId is at least one.",
			"queryPortGroupsResp_PortGroup_portType" : "Port Type, default value is Access; 0:Access, 1:Trunk.",
			"queryPortGroupsResp_PortGroup_vlanId" : "linked VlanId, the range is 0-4094, while portType is Access, the field is optional.",
			"queryPortGroupsResp_PortGroup_vxlanId" : "linked VxlanId, the range is 4096-16777215",
			"queryPortGroupsResp_PortGroup_vlanRange" : "linked vlan range,the most is 20 vlan ranges .",
			"queryPortGroupsResp_PortGroup_description" : "description, the length is [0,1024].",
			"queryPortGroupsResp_PortGroup_txLimit" : "The average of sending bandwidth(Mbps) range:1-（10 * 1000）.",
			"queryPortGroupsResp_PortGroup_txPeakLimit" : "The peak of sending bandwidth(Mbps) range:txLimit-（10 * 1000）.",
			"queryPortGroupsResp_PortGroup_txBurstSize" : "The sending emergent range:1-10000Mbits.",
			"queryPortGroupsResp_PortGroup_priority" : "The sending priority(2~7),the priority is smaller and faster, default value is 7.",
			"queryPortGroupsResp_PortGroup_rxLimit" : "The average of receive bandwidth(Mbps),range:1-（10 * 1000）..",
			"queryPortGroupsResp_PortGroup_rxBurstSize" : "The receive emergent range:1-10000Mbits.",
			"queryPortGroupsResp_PortGroup_rxPeakLimit" : "The peak of receive bandwidth(Mbps) range:txLimit-（10 * 1000）.",
			"queryPortGroupsResp_PortGroup_isDhcpIsolation" : "Dhcp isolation switch, true: on, false:off. ",
			"queryPortGroupsResp_PortGroup_isIpMacBind" : "The Bindswitch of IP and Mac true: on, false:off.",
			"queryPortGroupsResp_PortGroup_multicastIp" : "multicastIp Address。",
			"queryPortGroupsResp_PortGroup_arpBcstSuppress" : "ARP BcstSuppres bandwith(Kbps) range:1Kbps~1024Kbps",
			"queryPortGroupsResp_PortGroup_ipBcstSuppress" : "IP BcstSuppress bandwieth(Kbps) range:5Kbps~1024Kbps.",
			"queryPortGroupsResp_PortGroup_txWeight" : "Qos share，the range is 1-100，default is 0。（reserve property，limit business）",
			
			"queryPortGroupsReqEx_nameLabel" : "portGroupName",
			"queryPortGroupsReqEx_limitLabel" : "limit：",
			"queryPortGroupsReqEx_offsetLabel" : "offset：",
			"PortGroupsLabel" : "PortGroups List Info:",
			"createVMReq_portGroupErrTip" : "First query portGroup",
			"createVMReq_dataStoreErrTip" : "First query dataStore",
			
			
			"queryDataStoresInterface" : "Interface Name:",
			"queryDataStoresInterfaceName" : "Paging query all of dataStore from Site/Host/Cluster",
			"queryDataStoresDesc" : "The Interface is for to Paging query all of dataStore from Site/Host/Cluster.",
			"queryDataStoresReqEx_siteUriTd" : "Site URI.",
			"queryDataStoresReqEx_datastoreQueryParamsTd" : "The information of query dataStore .",
			"queryDataStoresReqEx_datastoreQueryParams_limitTd" : "The response of this query, 1-100, if limit and offset out of set, query all datastore .",
			"queryDataStoresReqEx_datastoreQueryParams_offsetTd" : "offset,number is requried, if limit and offset out of set, query all datastore .",
			"queryDataStoresReqEx_datastoreQueryParams_scopeTd" : "The scope is clusterUrn or hostUrn or storageUnitUrn.",
			"queryDataStoresReqEx_datastoreQueryParams_statusTd" : "While scope is clusterUrn or storageUnitUrn sign dataStore status, enum value: NORMAL availablel; ABNORMAL not available; CREATING，DELETING,READONLY，EXPANDING，RESTORING<br> When the scope for the hostUrn (host), identify the host and data storage association state, enumeration value: CONNECTING association; CONNECTED has been associated; DISCONNECTING solution association; ABNORMAL exception; READONLY read-only",
			"queryDataStoresReqEx_datastoreQueryParams_nameTd" : "dataStore Name, fuzzy search.",
			"queryDataStoresReqEx_datastoreQueryParams_exceptDatastoreTypeTd" : "dataStore type.",
			"queryDataStoresResp_totalTd" : "The total of response。",
			"queryDataStoresResp_listTd" : "dataStore list。",

			"queryDataStoresResp_Datastore_urn" : "The only dataStore urn.",
			"queryDataStoresResp_Datastore_uri" : "The only dataStore uri.",
			"queryDataStoresResp_Datastore_suUrn" : "The linked store Urn ofdatastore.",
			"queryDataStoresResp_Datastore_suName" : "he linked store name ofdatastore.",
			"queryDataStoresResp_Datastore_storageType" : "storageType:storageType divide four group，[advanceSan] /[DSWARE] /[local,san,LUN]/[LOCALPOME, LUNPOME,NAS]<br> local，local dataStore；<br> san<br> advanceSan，DSWARE，<br> NAS，<br> LOCALPOME.",
			"queryDataStoresResp_Datastore_clusterSize" : "clusterSize，unit:KB。",
			"queryDataStoresResp_Datastore_name" : "reading dataStore name。",
			"queryDataStoresResp_Datastore_status" : "1. Data storage status (NORMAL, ABNORMAL, CREATING, DELETING) (NORMAL: indicates that the storage device has been added as a data storage, does not reflect the true physical state of the data storage).<br>2. The association status of the host and the datastore (CONNECTING, CONNECTED, DISCONNECTING, ABNORMAL).",
			"queryDataStoresResp_Datastore_capacityGB" : "The thin provisioning scheme is changed and is no longer used, but is retained.The max capacity of dataStore unit:G.",
			"queryDataStoresResp_Datastore_usedSizeGB" : "The userd of dataStore，unit:G.",
			"queryDataStoresResp_Datastore_freeSizeGB" : "The thin provisioning scheme is changed and is no longer used, but is retained.The free of dataStore，unit:G.",
			"queryDataStoresResp_Datastore_hosts" : "DataStore linked Host",
			"queryDataStoresResp_Datastore_isThin" : "It is simplified Setting yes or no?",
			"queryDataStoresResp_Datastore_description" : "description",
			"queryDataStoresResp_Datastore_thinRate" : "Thin rate，100-300；If is not thin，100；else，you can set.",
			"queryDataStoresResp_Datastore_actualCapacityGB" : "Actual capacity；It is only thin set.",
			"queryDataStoresResp_Datastore_actualFreeSizeGB" : "Actual Free；It is only thin set.",
			"queryDataStoresResp_Datastore_refreshTime" : "Refresh Time，UTC， Format：\"2012-08-27 20:29:19\".",
			"queryDataStoresResp_Datastore_version" : "Datastore version，now VIMS、advanceSan v3 datastore can return version.",
			"queryDataStoresResp_Datastore_ioDelay" : "reserve field（datastore io delay time）。",
			"queryDataStoresResp_Datastore_expandCount" : "expansion times.",
			"queryDataStoresResp_Datastore_suIdList" : "datastore device list，one is host device LUN.",
			"queryDataStoresResp_Datastore_siocFlag" : "reserve field（IO control flag，1  start SIOC，0 closed SIOC）.",
			"queryDataStoresResp_Datastore_storageUnits" : "datastore device list.",
			"queryDataStoresResp_StorageUnit_urn" : "unique flag datastore device urn.",
			"queryDataStoresResp_StorageUnit_suName" : "datastore device name.",
			"queryDataStoresResp_StorageUnit_sdName" : "associate datastore resource name.",
			
			"queryDataStoresReqEx_nameLabel" : "dataStoreName: ",
			"queryDataStoresReqEx_limitLabel" : "limit：",
			"queryDataStoresReqEx_offsetLabel" : "offset：",
			"queryDataStoresLabel" : "dataStore Info:",
			
			"createVMInterface" : "Interface Name:",
			"createVMInterfaceName" : "Create VM",
			"CreateVmDesc" : "The Interface is for to Create VM.",
			"CreateVmReq_siteUriTd" : "Site URI.",
			"CreateVmReq_volumeCreateParamsTd" : "The need of Config infomation to create VM .",
			
			"CreateVmReq_VolumeCreateParams_name" : "Vm name，the range:[0,256].",
			"CreateVmReq_VolumeCreateParams_description" : "Vm description，the length:[0,1024].",
			"CreateVmReq_VolumeCreateParams_group" : "Vm Gruop Name，the length:[0,1024]。<br>While client is FM or VDI，the using rule is ：<br>\"FC_\" – FC；\"FM_\" – FM；\"VDI\" – VDI.",
			"CreateVmReq_VolumeCreateParams_location" : "Vm location，it is clusterUrn or hostUrn.",
			"CreateVmReq_VolumeCreateParams_isBindingHost" : "Is Binding Host <br>true：Binding Host；<br>false:Not Bingding Host.",
			"CreateVmReq_VolumeCreateParams_vmConfig" : "Vm Config",
			"CreateVmReq_VolumeCreateParams_autoBoot" : "autoBoot，default start",
			"CreateVmReq_VolumeCreateParams_osOptions" : "Vm OS.",
			"CreateVmReq_VolumeCreateParams_vncAccessInfo" : "VNC Setting，now is only vncPassword。",
			"CreateVmReq_VolumeCreateParams_occupiedVm" : "Is Occupy VM，default is false。",
			"CreateVmReq_VolumeCreateParams_uuid" : "uuid, When create occupy VM is required。",
			"CreateVmReq_VolumeCreateParams_securityGroupSet" : "secure group information（reserve）。",
			"CreateVmReq_VolumeCreateParams_isMultiDiskSpeedup" : "Is open disk speed，default is false。",
			
			"CreateVmReq_VolumeCreateParams_VmConfig_cpu" : "CPU Specification.",
			"CreateVmReq_VolumeCreateParams_VmConfig_memory" : "Memory Specification.",
			"CreateVmReq_VolumeCreateParams_VmConfig_disks" : "Disk Specification，the most is 11.",
			"CreateVmReq_VolumeCreateParams_VmConfig_nics" : "Nic Setting，the most is 8.",
			"CreateVmReq_VolumeCreateParams_VmConfig_usb" : "USB Setting.",
			"CreateVmReq_VolumeCreateParams_VmConfig_gpu" : "GPU.",
			"CreateVmReq_VolumeCreateParams_VmConfig_properties" : "VM Other Config.",
			
			"CreateVmReq_VolumeCreateParams_VmConfig_CPU_quantity" : "Cpu quantity,the range is [1,64]。",
			"CreateVmReq_VolumeCreateParams_VmConfig_CPU_coresPerSocket" : "every CPU slot quantity，it is divided by cpu quantity。",
			"CreateVmReq_VolumeCreateParams_VmConfig_CPU_reservation" : "The reservation of CPU, unit:MHz。<br>default is 0.",
			"CreateVmReq_VolumeCreateParams_VmConfig_CPU_weight" : "CPU weight，the range is[1, 64*2000]；default:quantity*1000。",
			"CreateVmReq_VolumeCreateParams_VmConfig_CPU_limit" : "CPU limit，unit:MHz。<br>default:0.",
			"CreateVmReq_VolumeCreateParams_VmConfig_CPU_cpuHotPlug" : "CPU Hot plug.",
			
			"CreateVmReq_VolumeCreateParams_VmConfig_Memory_quantityMB" : "Memory quantityMB unit:M，128~1024*1024.",
			"CreateVmReq_VolumeCreateParams_VmConfig_Memory_reservation" : "Memory reservation unit:M.default 0",
			"CreateVmReq_VolumeCreateParams_VmConfig_Memory_weight" : "Memory weight，the range:[1, 1024*1024*20]，default:quantity*10.",
			"CreateVmReq_VolumeCreateParams_VmConfig_Memory_limit" : "Memory limit unit:M.",
			"CreateVmReq_VolumeCreateParams_VmConfig_Memory_memHotPlug" : "Memory Hot Plug.",
			
			"CreateVmReq_VolumeCreateParams_VmConfig_Disk_pciType" : "Disk Pci Type，Now the version is ：“IDE”，“SCSI”.",
			"CreateVmReq_VolumeCreateParams_VmConfig_Disk_sequenceNum" : "Disk sequence Num，every sequence num is 1-60.",
			"CreateVmReq_VolumeCreateParams_VmConfig_Disk_volumeUrn" : "Disk volumeUrn<br>",
			"CreateVmReq_VolumeCreateParams_VmConfig_Disk_volumeUuid" : "Disk volumeUuid",
			"CreateVmReq_VolumeCreateParams_VmConfig_Disk_quantityGB" : "Virtual machine disk size. The system volume size is less than 2T, 3 kinds of specifications, specific scope: <br>advanceSan/FusionStorage/local data storage, support 1G~2048G, advanceSan version of V3, support 1G~255T <br>LOCALPOME; data storage, support 1G~2043G; <br>san types of data storage, support <br>*NAS, LUNPOME 1G~30T; data storage, support 1G~64T.",
			"CreateVmReq_VolumeCreateParams_VmConfig_Disk_isDataCopy" : "Disk isDataCopy.",
			"CreateVmReq_VolumeCreateParams_VmConfig_Disk_datastoreUrn" : "Disk datastoreUrn",
			"CreateVmReq_VolumeCreateParams_VmConfig_Disk_isThin" : "Is thin.",
			"CreateVmReq_VolumeCreateParams_VmConfig_Disk_indepDisk" : "Is indep Disk",
			"CreateVmReq_VolumeCreateParams_VmConfig_Disk_persistentDisk" : "Disk persistentDisk",
			"CreateVmReq_VolumeCreateParams_VmConfig_Disk_storageType" : "Storage Type.",
			"CreateVmReq_VolumeCreateParams_VmConfig_Disk_volType" : "vol Type.",
			"CreateVmReq_VolumeCreateParams_VmConfig_Disk_maxReadBytes" : "Max ReadBytes unit:KB/s.",
			"CreateVmReq_VolumeCreateParams_VmConfig_Disk_maxWriteBytes" : "Max WriteBytes，unit:KB/s.",
			"CreateVmReq_VolumeCreateParams_VmConfig_Disk_maxReadRequest" : "Max ReadRequest，unit:one/s.",
			"CreateVmReq_VolumeCreateParams_VmConfig_Disk_maxWriteRequest" : "MaxWriteRequest，unit:one/s。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Disk_type" : "Disk Type，the value is normal（normal）、share",
			"CreateVmReq_VolumeCreateParams_VmConfig_Disk_diskName" : "volume name, the length is [0,256]，repeat。If the name is null in request ，or name is ””，is auto create name。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Disk_ioWeight" : "Disk IO contral，is used for IO adjusting（reserve）。Notice：Only query it is valid 。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Disk_datastoreName" : "the name is disk on datastore，Notice：Only query it is valid 。",
			
			"CreateVmReq_VolumeCreateParams_VmConfig_Nic_name" : "Nic name.",
			"CreateVmReq_VolumeCreateParams_VmConfig_Nic_urn" : "Nic urn.",
			"CreateVmReq_VolumeCreateParams_VmConfig_Nic_uri" : "Nic uri.",
			"CreateVmReq_VolumeCreateParams_VmConfig_Nic_portGroupUrn" : "portGroup URN.",
			"CreateVmReq_VolumeCreateParams_VmConfig_Nic_portGroupName" : "portGroup Name",
			"CreateVmReq_VolumeCreateParams_VmConfig_Nic_mac" : " Mac Address.",
			"CreateVmReq_VolumeCreateParams_VmConfig_Nic_ip" : "IP Address.",
			"CreateVmReq_VolumeCreateParams_VmConfig_Nic_ips6" : "IPv6 Address.",
			"CreateVmReq_VolumeCreateParams_VmConfig_Nic_sequenceNum" : "Nic sequence Num，1-12，no repeat.",
			"CreateVmReq_VolumeCreateParams_VmConfig_Nic_virtIo" : "Nic virtIo，0: HW_X_NET (default)；1: HW_V_NET；optional.",
			"CreateVmReq_VolumeCreateParams_VmConfig_Nic_ipList" : "Nic ip address.",
			"CreateVmReq_VolumeCreateParams_VmConfig_Nic_nicType" : "Nic Type：1：inic；other：normal nic.",
			
			"CreateVmReq_VolumeCreateParams_VmConfig_Usb_controllerType" : "USB controller Type:EHCI+UHCI，xHCI（reservation）.",
			"CreateVmReq_VolumeCreateParams_VmConfig_Usb_device" : "USB device，the most is 4.",
			"CreateVmReq_VolumeCreateParams_VmConfig_Usb_usbHostName" : "the host name is USB，it is valid in query.",
			
			"CreateVmReq_VolumeCreateParams_VmConfig_Usb_UsbDevice_usbUrn" : "USB device usbUrn.",
			
			"CreateVmReq_VolumeCreateParams_VmConfig_GPU_gpuUrn" : "gpuUrn.",
			"CreateVmReq_VolumeCreateParams_VmConfig_GPU_isEffected" : "Is graph process valid，only used for query VM.",
			
			"CreateVmReq_VolumeCreateParams_VmConfig_Property_bootOption" : "bootOption，include network(pxe)，harddisk (disk)and driver(cdrom)boot method。default disk.",
			"CreateVmReq_VolumeCreateParams_VmConfig_Property_isEnableHa" : "Is EnableHa, default:true.",
			"CreateVmReq_VolumeCreateParams_VmConfig_Property_vmFaultProcess" : "Vm FaultProcess：No process(notprocess)，HA(ha)or reboot(reboot)。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Property_reoverByHost" : "reover ByHost，default:false.",
			"CreateVmReq_VolumeCreateParams_VmConfig_Property_clockMode" : "Clock Mode，include free clock(freeClock)and synchclock(synchClock),default free clock.",
			"CreateVmReq_VolumeCreateParams_VmConfig_Property_isEnableMemVol" : "Is Enable MemVol，default:true.",
			"CreateVmReq_VolumeCreateParams_VmConfig_Property_isEnableFt" : "Is Enable Ft(reservation)，default:false，not support FT。",
			"CreateVmReq_VolumeCreateParams_VmConfig_Property_isAutoUpgrade" : "PV driver is Auto Upgrade，true：auto Upgrade，false:manual Upgrade，default:true.",
			"CreateVmReq_VolumeCreateParams_VmConfig_Property_attachType" : "Attach Type.",
			"CreateVmReq_VolumeCreateParams_VmConfig_Property_gpuShareType" : "GPU Share Type：server，client，normal；default:normal.",
			"CreateVmReq_VolumeCreateParams_VmConfig_Property_isReserveResource" : "Is Reserve Resource，；true reserve，false not reserve；default:false.",
			"CreateVmReq_VolumeCreateParams_VmConfig_Property_secureVmType" : "VM secure strategy：SVM secure service VM，GVM secure user VM.",
			"CreateVmReq_VolumeCreateParams_VmConfig_Property_isHpet" : "Is open highly clock，only query is valid.",
			
			"CreateVmReq_VolumeCreateParams_OsOption_osType" : "Vm OsOption OsType。the value：Windows，Linux，Other.",
			"CreateVmReq_VolumeCreateParams_OsOption_osVersion" : "Os version",
			"CreateVmReq_VolumeCreateParams_OsOption_guestOSName" : "guest OS name，the length:[0,64].",
			"CreateVmReq_VolumeCreateParams_OsOption_hostname" : "Vm host name.",
			"CreateVmReq_VolumeCreateParams_OsOption_password" : "Vm password.",
			
			"CreateVmReq_VolumeCreateParams_VncAccessInfo_hostIp" : "Host Ip address，null is illegal.",
			"CreateVmReq_VolumeCreateParams_VncAccessInfo_vncPort" : "VM VNC port，-1 is illegal，other is legal.",
			"CreateVmReq_VolumeCreateParams_VncAccessInfo_vncPassword" : "VM VNC password；Modify VNC password，the max length is 8 char.",
			"CreateVmReq_VolumeCreateParams_VncAccessInfo_vncOldPassword" : "Now VM VNC password，modify VNC password is valid,the max length is 8 char.",
			
			"CreateVmResp_urnTd" : "urn.",
			"CreateVmResp_uriTd" : "Resource uri.",
			"CreateVmResp_taskUrnTd" : "task Urn.",
			"CreateVmResp_taskUriTd" : "task uri.",
			
			
			"CreateVmReq_templateIdTd" : "template ID。",
			"CreateVmReq_vpcIdTd" : "VPC ID。",
			"CreateVmReq_countTd" : "created VM number，1-30。",
			"CreateVmReq_namePrefixTd" : "Vm prefix name the length is 1-56 .",
			"CreateVmReq_hostNamePrefixTd" : "VM prefix host naem，1-13.",
			"CreateVmReq_descriptionTd" : "decription>",
			"CreateVmReq_CreateVmSpecTd" : "VM specfication",
			"CreateVmReq_VmUniqueInfoTd" : "Vm unique info.",
			"CreateVmReq_CreateVmAttributeTd" : "VmAttribute.",
			"CreateVmReq_CreateVmSpec_idTd" : "VM spec Id.",
			"CreateVMBtnLabel" : "Create VM",
			"vmLocationClusterOption" : "Cluster",
			"vmLocationHostOption" : "Host",
			"createVMReq_nameLabel" : "VM Name：",
			"createVMReq_SystemStyleLabel" : "OS Option：",
			"createVMReq_SystemVersionLabel" : "OS Version：",
			"createVMReq_vmParametersLabel" : "VM parameters:",
			"batchCreateVMReq_vmFlavorLabel" : "VM flavor:",
			"createVMReq_vmParameters_CPUSetLabel" : "CPU:",
			"createVMReq_vmParameters_CPUSet_cpuNumLabel" : "&nbsp;&nbsp;CPU Core：",
			"createVMReq_vmParameters_CPUSet_ReservationLabel" : " CPU Reservation",
			"createVMReq_vmParameters_CPUSet_WeightLabel" : "&nbsp;&nbsp;CPU Weight",
			"createVMReq_vmParameters_CPUSet_limitLabel" : "&nbsp;&nbsp;CPU Limit",
			"createVMReq_vmParameters_MemorySetLabel" : "Memory:",
			"createVMReq_vmParameters_MemorySet_memoryNumLabel" : "&nbsp;&nbsp;Memory Count：",
			"createVMReq_vmParameters_MemorySet_reservationLabel" : "&nbsp;&nbsp;Memory Reservation",
			"createVMReq_vmParameters_MemorySet_weightLabel" : "&nbsp;&nbsp;Memory Weight",
			"createVMReq_vmParameters_MemorySet_limitLabel" : "&nbsp;&nbsp;Memory Limit",
			"createVMReq_vmParameters_userDisksLabel" : "New Disks Info:",
			"createVMReq_vmParameters_userDisks_bsSizeLabel" : "Disk size",
			"createVMReq_vmParameters_userDisks_bsQosInfoLabel" : "Disk Qos",
			"createVMReq_vmParameters_userDisks_datastoreUrnLabel" : "StoreURN",
			"createVMReq_vmParameters_userDisks_sequenceNumLabel" : "Sequence Num",
			"createVMReq_vmParameters_userDisks_delUserDiskLabel" : "Delete",
			"createVMReq_vmParameters_nicsLabel" : "New NIC Info:",
			"createVMReq_vmParameters_nics_nicOrderLabel" : "NIC order",
			"createVMReq_vmParameters_nics_portGroupUrnLabel" : "portGroup Urn",
			"createVMReq_vmParameters_nics_nameLabel" : "Nic Name",
			"createVMReq_vmParameters_nics_sequenceNumLabel" : "Sequence Num",
			"createVMReq_vmParameters_nics_ipLabel" : "IP",
			"createVMReq_vmParameters_nics_delNicLabel" : "Delete",

			"VMInfoLabel" : "VM Info:",
			"createVMReq_clusterAndHostTip" : "Please select one cluster or host.",
			"createVMReq_OsVersionsTip" : "Please select Os version.",
			"createVMReq_vmConfig_cpu_quantityTip" : "Please input Integer Num",
			"createVMReq_vmConfig_cpu_quantityoutRangeTip" : "The range:1~64.",
			"createVMReq_vmParameters_MemorySet_memoryNumErr_notNumTip" : "Please input Integer Num.",
			"createVMReq_vmParameters_MemorySet_memoryNumErr_outRangeTip" : "The range:128~1024*1024."
		
		}
	};
}