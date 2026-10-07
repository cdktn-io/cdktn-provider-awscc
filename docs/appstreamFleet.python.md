# `appstreamFleet` Submodule <a name="`appstreamFleet` Submodule" id="@cdktn/provider-awscc.appstreamFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppstreamFleet <a name="AppstreamFleet" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet awscc_appstream_fleet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_fleet

appstreamFleet.AppstreamFleet(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_type: str,
  name: str,
  attributes_to_delete: typing.List[str] = None,
  compute_capacity: AppstreamFleetComputeCapacity = None,
  description: str = None,
  disable_imdsv1: bool | IResolvable = None,
  disconnect_timeout_in_seconds: typing.Union[int, float] = None,
  display_name: str = None,
  domain_join_info: AppstreamFleetDomainJoinInfo = None,
  enable_default_internet_access: bool | IResolvable = None,
  fleet_type: str = None,
  iam_role_arn: str = None,
  idle_disconnect_timeout_in_seconds: typing.Union[int, float] = None,
  image_arn: str = None,
  image_name: str = None,
  max_concurrent_sessions: typing.Union[int, float] = None,
  max_sessions_per_instance: typing.Union[int, float] = None,
  max_user_duration_in_seconds: typing.Union[int, float] = None,
  platform: str = None,
  root_volume_config: AppstreamFleetRootVolumeConfig = None,
  session_script_s3_location: AppstreamFleetSessionScriptS3Location = None,
  stream_view: str = None,
  tags: IResolvable | typing.List[AppstreamFleetTags] = None,
  usb_device_filter_strings: typing.List[str] = None,
  vpc_config: AppstreamFleetVpcConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#instance_type AppstreamFleet#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#name AppstreamFleet#name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.attributesToDelete">attributes_to_delete</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#attributes_to_delete AppstreamFleet#attributes_to_delete}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.computeCapacity">compute_capacity</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#compute_capacity AppstreamFleet#compute_capacity}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#description AppstreamFleet#description}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.disableImdsv1">disable_imdsv1</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#disable_imdsv1 AppstreamFleet#disable_imdsv1}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.disconnectTimeoutInSeconds">disconnect_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#disconnect_timeout_in_seconds AppstreamFleet#disconnect_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#display_name AppstreamFleet#display_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.domainJoinInfo">domain_join_info</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#domain_join_info AppstreamFleet#domain_join_info}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.enableDefaultInternetAccess">enable_default_internet_access</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#enable_default_internet_access AppstreamFleet#enable_default_internet_access}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.fleetType">fleet_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#fleet_type AppstreamFleet#fleet_type}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#iam_role_arn AppstreamFleet#iam_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.idleDisconnectTimeoutInSeconds">idle_disconnect_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#idle_disconnect_timeout_in_seconds AppstreamFleet#idle_disconnect_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.imageArn">image_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#image_arn AppstreamFleet#image_arn}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.imageName">image_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#image_name AppstreamFleet#image_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.maxConcurrentSessions">max_concurrent_sessions</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#max_concurrent_sessions AppstreamFleet#max_concurrent_sessions}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.maxSessionsPerInstance">max_sessions_per_instance</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#max_sessions_per_instance AppstreamFleet#max_sessions_per_instance}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.maxUserDurationInSeconds">max_user_duration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#max_user_duration_in_seconds AppstreamFleet#max_user_duration_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.platform">platform</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#platform AppstreamFleet#platform}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.rootVolumeConfig">root_volume_config</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig">AppstreamFleetRootVolumeConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#root_volume_config AppstreamFleet#root_volume_config}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.sessionScriptS3Location">session_script_s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location">AppstreamFleetSessionScriptS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#session_script_s3_location AppstreamFleet#session_script_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.streamView">stream_view</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#stream_view AppstreamFleet#stream_view}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#tags AppstreamFleet#tags}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.usbDeviceFilterStrings">usb_device_filter_strings</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#usb_device_filter_strings AppstreamFleet#usb_device_filter_strings}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#vpc_config AppstreamFleet#vpc_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.instanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#instance_type AppstreamFleet#instance_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#name AppstreamFleet#name}.

---

##### `attributes_to_delete`<sup>Optional</sup> <a name="attributes_to_delete" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.attributesToDelete"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#attributes_to_delete AppstreamFleet#attributes_to_delete}.

---

##### `compute_capacity`<sup>Optional</sup> <a name="compute_capacity" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.computeCapacity"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#compute_capacity AppstreamFleet#compute_capacity}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#description AppstreamFleet#description}.

---

##### `disable_imdsv1`<sup>Optional</sup> <a name="disable_imdsv1" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.disableImdsv1"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#disable_imdsv1 AppstreamFleet#disable_imdsv1}.

---

##### `disconnect_timeout_in_seconds`<sup>Optional</sup> <a name="disconnect_timeout_in_seconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.disconnectTimeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#disconnect_timeout_in_seconds AppstreamFleet#disconnect_timeout_in_seconds}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#display_name AppstreamFleet#display_name}.

---

##### `domain_join_info`<sup>Optional</sup> <a name="domain_join_info" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.domainJoinInfo"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#domain_join_info AppstreamFleet#domain_join_info}.

---

##### `enable_default_internet_access`<sup>Optional</sup> <a name="enable_default_internet_access" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.enableDefaultInternetAccess"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#enable_default_internet_access AppstreamFleet#enable_default_internet_access}.

---

##### `fleet_type`<sup>Optional</sup> <a name="fleet_type" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.fleetType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#fleet_type AppstreamFleet#fleet_type}.

---

##### `iam_role_arn`<sup>Optional</sup> <a name="iam_role_arn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.iamRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#iam_role_arn AppstreamFleet#iam_role_arn}.

---

##### `idle_disconnect_timeout_in_seconds`<sup>Optional</sup> <a name="idle_disconnect_timeout_in_seconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.idleDisconnectTimeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#idle_disconnect_timeout_in_seconds AppstreamFleet#idle_disconnect_timeout_in_seconds}.

---

##### `image_arn`<sup>Optional</sup> <a name="image_arn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.imageArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#image_arn AppstreamFleet#image_arn}.

---

##### `image_name`<sup>Optional</sup> <a name="image_name" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.imageName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#image_name AppstreamFleet#image_name}.

---

##### `max_concurrent_sessions`<sup>Optional</sup> <a name="max_concurrent_sessions" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.maxConcurrentSessions"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#max_concurrent_sessions AppstreamFleet#max_concurrent_sessions}.

---

##### `max_sessions_per_instance`<sup>Optional</sup> <a name="max_sessions_per_instance" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.maxSessionsPerInstance"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#max_sessions_per_instance AppstreamFleet#max_sessions_per_instance}.

---

##### `max_user_duration_in_seconds`<sup>Optional</sup> <a name="max_user_duration_in_seconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.maxUserDurationInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#max_user_duration_in_seconds AppstreamFleet#max_user_duration_in_seconds}.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.platform"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#platform AppstreamFleet#platform}.

---

##### `root_volume_config`<sup>Optional</sup> <a name="root_volume_config" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.rootVolumeConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig">AppstreamFleetRootVolumeConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#root_volume_config AppstreamFleet#root_volume_config}.

---

##### `session_script_s3_location`<sup>Optional</sup> <a name="session_script_s3_location" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.sessionScriptS3Location"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location">AppstreamFleetSessionScriptS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#session_script_s3_location AppstreamFleet#session_script_s3_location}.

---

##### `stream_view`<sup>Optional</sup> <a name="stream_view" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.streamView"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#stream_view AppstreamFleet#stream_view}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#tags AppstreamFleet#tags}.

---

##### `usb_device_filter_strings`<sup>Optional</sup> <a name="usb_device_filter_strings" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.usbDeviceFilterStrings"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#usb_device_filter_strings AppstreamFleet#usb_device_filter_strings}.

---

##### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.Initializer.parameter.vpcConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#vpc_config AppstreamFleet#vpc_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putComputeCapacity">put_compute_capacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putDomainJoinInfo">put_domain_join_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putRootVolumeConfig">put_root_volume_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putSessionScriptS3Location">put_session_script_s3_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putVpcConfig">put_vpc_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetAttributesToDelete">reset_attributes_to_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetComputeCapacity">reset_compute_capacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDisableImdsv1">reset_disable_imdsv1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDisconnectTimeoutInSeconds">reset_disconnect_timeout_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDomainJoinInfo">reset_domain_join_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetEnableDefaultInternetAccess">reset_enable_default_internet_access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetFleetType">reset_fleet_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetIamRoleArn">reset_iam_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetIdleDisconnectTimeoutInSeconds">reset_idle_disconnect_timeout_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetImageArn">reset_image_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetImageName">reset_image_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetMaxConcurrentSessions">reset_max_concurrent_sessions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetMaxSessionsPerInstance">reset_max_sessions_per_instance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetMaxUserDurationInSeconds">reset_max_user_duration_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetPlatform">reset_platform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetRootVolumeConfig">reset_root_volume_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetSessionScriptS3Location">reset_session_script_s3_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetStreamView">reset_stream_view</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetUsbDeviceFilterStrings">reset_usb_device_filter_strings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetVpcConfig">reset_vpc_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_compute_capacity` <a name="put_compute_capacity" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putComputeCapacity"></a>

```python
def put_compute_capacity(
  desired_instances: typing.Union[int, float] = None,
  desired_sessions: typing.Union[int, float] = None
) -> None
```

###### `desired_instances`<sup>Optional</sup> <a name="desired_instances" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putComputeCapacity.parameter.desiredInstances"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#desired_instances AppstreamFleet#desired_instances}.

---

###### `desired_sessions`<sup>Optional</sup> <a name="desired_sessions" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putComputeCapacity.parameter.desiredSessions"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#desired_sessions AppstreamFleet#desired_sessions}.

---

##### `put_domain_join_info` <a name="put_domain_join_info" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putDomainJoinInfo"></a>

```python
def put_domain_join_info(
  directory_name: str = None,
  organizational_unit_distinguished_name: str = None
) -> None
```

###### `directory_name`<sup>Optional</sup> <a name="directory_name" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putDomainJoinInfo.parameter.directoryName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#directory_name AppstreamFleet#directory_name}.

---

###### `organizational_unit_distinguished_name`<sup>Optional</sup> <a name="organizational_unit_distinguished_name" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putDomainJoinInfo.parameter.organizationalUnitDistinguishedName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#organizational_unit_distinguished_name AppstreamFleet#organizational_unit_distinguished_name}.

---

##### `put_root_volume_config` <a name="put_root_volume_config" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putRootVolumeConfig"></a>

```python
def put_root_volume_config(
  volume_size_in_gb: typing.Union[int, float] = None
) -> None
```

###### `volume_size_in_gb`<sup>Optional</sup> <a name="volume_size_in_gb" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putRootVolumeConfig.parameter.volumeSizeInGb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#volume_size_in_gb AppstreamFleet#volume_size_in_gb}.

---

##### `put_session_script_s3_location` <a name="put_session_script_s3_location" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putSessionScriptS3Location"></a>

```python
def put_session_script_s3_location(
  s3_bucket: str = None,
  s3_key: str = None
) -> None
```

###### `s3_bucket`<sup>Optional</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putSessionScriptS3Location.parameter.s3Bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#s3_bucket AppstreamFleet#s3_bucket}.

---

###### `s3_key`<sup>Optional</sup> <a name="s3_key" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putSessionScriptS3Location.parameter.s3Key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#s3_key AppstreamFleet#s3_key}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[AppstreamFleetTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a>]

---

##### `put_vpc_config` <a name="put_vpc_config" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putVpcConfig"></a>

```python
def put_vpc_config(
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None
) -> None
```

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putVpcConfig.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#security_group_ids AppstreamFleet#security_group_ids}.

---

###### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.putVpcConfig.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#subnet_ids AppstreamFleet#subnet_ids}.

---

##### `reset_attributes_to_delete` <a name="reset_attributes_to_delete" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetAttributesToDelete"></a>

```python
def reset_attributes_to_delete() -> None
```

##### `reset_compute_capacity` <a name="reset_compute_capacity" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetComputeCapacity"></a>

```python
def reset_compute_capacity() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disable_imdsv1` <a name="reset_disable_imdsv1" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDisableImdsv1"></a>

```python
def reset_disable_imdsv1() -> None
```

##### `reset_disconnect_timeout_in_seconds` <a name="reset_disconnect_timeout_in_seconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDisconnectTimeoutInSeconds"></a>

```python
def reset_disconnect_timeout_in_seconds() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_domain_join_info` <a name="reset_domain_join_info" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetDomainJoinInfo"></a>

```python
def reset_domain_join_info() -> None
```

##### `reset_enable_default_internet_access` <a name="reset_enable_default_internet_access" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetEnableDefaultInternetAccess"></a>

```python
def reset_enable_default_internet_access() -> None
```

##### `reset_fleet_type` <a name="reset_fleet_type" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetFleetType"></a>

```python
def reset_fleet_type() -> None
```

##### `reset_iam_role_arn` <a name="reset_iam_role_arn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetIamRoleArn"></a>

```python
def reset_iam_role_arn() -> None
```

##### `reset_idle_disconnect_timeout_in_seconds` <a name="reset_idle_disconnect_timeout_in_seconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetIdleDisconnectTimeoutInSeconds"></a>

```python
def reset_idle_disconnect_timeout_in_seconds() -> None
```

##### `reset_image_arn` <a name="reset_image_arn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetImageArn"></a>

```python
def reset_image_arn() -> None
```

##### `reset_image_name` <a name="reset_image_name" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetImageName"></a>

```python
def reset_image_name() -> None
```

##### `reset_max_concurrent_sessions` <a name="reset_max_concurrent_sessions" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetMaxConcurrentSessions"></a>

```python
def reset_max_concurrent_sessions() -> None
```

##### `reset_max_sessions_per_instance` <a name="reset_max_sessions_per_instance" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetMaxSessionsPerInstance"></a>

```python
def reset_max_sessions_per_instance() -> None
```

##### `reset_max_user_duration_in_seconds` <a name="reset_max_user_duration_in_seconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetMaxUserDurationInSeconds"></a>

```python
def reset_max_user_duration_in_seconds() -> None
```

##### `reset_platform` <a name="reset_platform" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetPlatform"></a>

```python
def reset_platform() -> None
```

##### `reset_root_volume_config` <a name="reset_root_volume_config" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetRootVolumeConfig"></a>

```python
def reset_root_volume_config() -> None
```

##### `reset_session_script_s3_location` <a name="reset_session_script_s3_location" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetSessionScriptS3Location"></a>

```python
def reset_session_script_s3_location() -> None
```

##### `reset_stream_view` <a name="reset_stream_view" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetStreamView"></a>

```python
def reset_stream_view() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_usb_device_filter_strings` <a name="reset_usb_device_filter_strings" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetUsbDeviceFilterStrings"></a>

```python
def reset_usb_device_filter_strings() -> None
```

##### `reset_vpc_config` <a name="reset_vpc_config" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.resetVpcConfig"></a>

```python
def reset_vpc_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AppstreamFleet resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.isConstruct"></a>

```python
from cdktn_provider_awscc import appstream_fleet

appstreamFleet.AppstreamFleet.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.isTerraformElement"></a>

```python
from cdktn_provider_awscc import appstream_fleet

appstreamFleet.AppstreamFleet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.isTerraformResource"></a>

```python
from cdktn_provider_awscc import appstream_fleet

appstreamFleet.AppstreamFleet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import appstream_fleet

appstreamFleet.AppstreamFleet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AppstreamFleet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppstreamFleet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppstreamFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppstreamFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.computeCapacity">compute_capacity</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference">AppstreamFleetComputeCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.domainJoinInfo">domain_join_info</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference">AppstreamFleetDomainJoinInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.rootVolumeConfig">root_volume_config</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference">AppstreamFleetRootVolumeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.sessionScriptS3Location">session_script_s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference">AppstreamFleetSessionScriptS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList">AppstreamFleetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference">AppstreamFleetVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.attributesToDeleteInput">attributes_to_delete_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.computeCapacityInput">compute_capacity_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.disableImdsv1Input">disable_imdsv1_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.disconnectTimeoutInSecondsInput">disconnect_timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.domainJoinInfoInput">domain_join_info_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.enableDefaultInternetAccessInput">enable_default_internet_access_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.fleetTypeInput">fleet_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.iamRoleArnInput">iam_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.idleDisconnectTimeoutInSecondsInput">idle_disconnect_timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.imageArnInput">image_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.imageNameInput">image_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxConcurrentSessionsInput">max_concurrent_sessions_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxSessionsPerInstanceInput">max_sessions_per_instance_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxUserDurationInSecondsInput">max_user_duration_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.platformInput">platform_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.rootVolumeConfigInput">root_volume_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig">AppstreamFleetRootVolumeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.sessionScriptS3LocationInput">session_script_s3_location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location">AppstreamFleetSessionScriptS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.streamViewInput">stream_view_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.usbDeviceFilterStringsInput">usb_device_filter_strings_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.vpcConfigInput">vpc_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.attributesToDelete">attributes_to_delete</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.disableImdsv1">disable_imdsv1</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.disconnectTimeoutInSeconds">disconnect_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.enableDefaultInternetAccess">enable_default_internet_access</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.fleetType">fleet_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.idleDisconnectTimeoutInSeconds">idle_disconnect_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.imageArn">image_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.imageName">image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxConcurrentSessions">max_concurrent_sessions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxSessionsPerInstance">max_sessions_per_instance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxUserDurationInSeconds">max_user_duration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.streamView">stream_view</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.usbDeviceFilterStrings">usb_device_filter_strings</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `compute_capacity`<sup>Required</sup> <a name="compute_capacity" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.computeCapacity"></a>

```python
compute_capacity: AppstreamFleetComputeCapacityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference">AppstreamFleetComputeCapacityOutputReference</a>

---

##### `domain_join_info`<sup>Required</sup> <a name="domain_join_info" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.domainJoinInfo"></a>

```python
domain_join_info: AppstreamFleetDomainJoinInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference">AppstreamFleetDomainJoinInfoOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `root_volume_config`<sup>Required</sup> <a name="root_volume_config" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.rootVolumeConfig"></a>

```python
root_volume_config: AppstreamFleetRootVolumeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference">AppstreamFleetRootVolumeConfigOutputReference</a>

---

##### `session_script_s3_location`<sup>Required</sup> <a name="session_script_s3_location" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.sessionScriptS3Location"></a>

```python
session_script_s3_location: AppstreamFleetSessionScriptS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference">AppstreamFleetSessionScriptS3LocationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.tags"></a>

```python
tags: AppstreamFleetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList">AppstreamFleetTagsList</a>

---

##### `vpc_config`<sup>Required</sup> <a name="vpc_config" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.vpcConfig"></a>

```python
vpc_config: AppstreamFleetVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference">AppstreamFleetVpcConfigOutputReference</a>

---

##### `attributes_to_delete_input`<sup>Optional</sup> <a name="attributes_to_delete_input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.attributesToDeleteInput"></a>

```python
attributes_to_delete_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compute_capacity_input`<sup>Optional</sup> <a name="compute_capacity_input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.computeCapacityInput"></a>

```python
compute_capacity_input: IResolvable | AppstreamFleetComputeCapacity
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disable_imdsv1_input`<sup>Optional</sup> <a name="disable_imdsv1_input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.disableImdsv1Input"></a>

```python
disable_imdsv1_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disconnect_timeout_in_seconds_input`<sup>Optional</sup> <a name="disconnect_timeout_in_seconds_input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.disconnectTimeoutInSecondsInput"></a>

```python
disconnect_timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `domain_join_info_input`<sup>Optional</sup> <a name="domain_join_info_input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.domainJoinInfoInput"></a>

```python
domain_join_info_input: IResolvable | AppstreamFleetDomainJoinInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a>

---

##### `enable_default_internet_access_input`<sup>Optional</sup> <a name="enable_default_internet_access_input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.enableDefaultInternetAccessInput"></a>

```python
enable_default_internet_access_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `fleet_type_input`<sup>Optional</sup> <a name="fleet_type_input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.fleetTypeInput"></a>

```python
fleet_type_input: str
```

- *Type:* str

---

##### `iam_role_arn_input`<sup>Optional</sup> <a name="iam_role_arn_input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.iamRoleArnInput"></a>

```python
iam_role_arn_input: str
```

- *Type:* str

---

##### `idle_disconnect_timeout_in_seconds_input`<sup>Optional</sup> <a name="idle_disconnect_timeout_in_seconds_input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.idleDisconnectTimeoutInSecondsInput"></a>

```python
idle_disconnect_timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `image_arn_input`<sup>Optional</sup> <a name="image_arn_input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.imageArnInput"></a>

```python
image_arn_input: str
```

- *Type:* str

---

##### `image_name_input`<sup>Optional</sup> <a name="image_name_input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.imageNameInput"></a>

```python
image_name_input: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `max_concurrent_sessions_input`<sup>Optional</sup> <a name="max_concurrent_sessions_input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxConcurrentSessionsInput"></a>

```python
max_concurrent_sessions_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_sessions_per_instance_input`<sup>Optional</sup> <a name="max_sessions_per_instance_input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxSessionsPerInstanceInput"></a>

```python
max_sessions_per_instance_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_user_duration_in_seconds_input`<sup>Optional</sup> <a name="max_user_duration_in_seconds_input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxUserDurationInSecondsInput"></a>

```python
max_user_duration_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `platform_input`<sup>Optional</sup> <a name="platform_input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.platformInput"></a>

```python
platform_input: str
```

- *Type:* str

---

##### `root_volume_config_input`<sup>Optional</sup> <a name="root_volume_config_input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.rootVolumeConfigInput"></a>

```python
root_volume_config_input: IResolvable | AppstreamFleetRootVolumeConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig">AppstreamFleetRootVolumeConfig</a>

---

##### `session_script_s3_location_input`<sup>Optional</sup> <a name="session_script_s3_location_input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.sessionScriptS3LocationInput"></a>

```python
session_script_s3_location_input: IResolvable | AppstreamFleetSessionScriptS3Location
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location">AppstreamFleetSessionScriptS3Location</a>

---

##### `stream_view_input`<sup>Optional</sup> <a name="stream_view_input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.streamViewInput"></a>

```python
stream_view_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[AppstreamFleetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a>]

---

##### `usb_device_filter_strings_input`<sup>Optional</sup> <a name="usb_device_filter_strings_input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.usbDeviceFilterStringsInput"></a>

```python
usb_device_filter_strings_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_config_input`<sup>Optional</sup> <a name="vpc_config_input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.vpcConfigInput"></a>

```python
vpc_config_input: IResolvable | AppstreamFleetVpcConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a>

---

##### `attributes_to_delete`<sup>Required</sup> <a name="attributes_to_delete" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.attributesToDelete"></a>

```python
attributes_to_delete: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disable_imdsv1`<sup>Required</sup> <a name="disable_imdsv1" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.disableImdsv1"></a>

```python
disable_imdsv1: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `disconnect_timeout_in_seconds`<sup>Required</sup> <a name="disconnect_timeout_in_seconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.disconnectTimeoutInSeconds"></a>

```python
disconnect_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enable_default_internet_access`<sup>Required</sup> <a name="enable_default_internet_access" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.enableDefaultInternetAccess"></a>

```python
enable_default_internet_access: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `fleet_type`<sup>Required</sup> <a name="fleet_type" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.fleetType"></a>

```python
fleet_type: str
```

- *Type:* str

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

---

##### `idle_disconnect_timeout_in_seconds`<sup>Required</sup> <a name="idle_disconnect_timeout_in_seconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.idleDisconnectTimeoutInSeconds"></a>

```python
idle_disconnect_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `image_arn`<sup>Required</sup> <a name="image_arn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.imageArn"></a>

```python
image_arn: str
```

- *Type:* str

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `max_concurrent_sessions`<sup>Required</sup> <a name="max_concurrent_sessions" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxConcurrentSessions"></a>

```python
max_concurrent_sessions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_sessions_per_instance`<sup>Required</sup> <a name="max_sessions_per_instance" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxSessionsPerInstance"></a>

```python
max_sessions_per_instance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_user_duration_in_seconds`<sup>Required</sup> <a name="max_user_duration_in_seconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.maxUserDurationInSeconds"></a>

```python
max_user_duration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `stream_view`<sup>Required</sup> <a name="stream_view" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.streamView"></a>

```python
stream_view: str
```

- *Type:* str

---

##### `usb_device_filter_strings`<sup>Required</sup> <a name="usb_device_filter_strings" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.usbDeviceFilterStrings"></a>

```python
usb_device_filter_strings: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppstreamFleetComputeCapacity <a name="AppstreamFleetComputeCapacity" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_fleet

appstreamFleet.AppstreamFleetComputeCapacity(
  desired_instances: typing.Union[int, float] = None,
  desired_sessions: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity.property.desiredInstances">desired_instances</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#desired_instances AppstreamFleet#desired_instances}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity.property.desiredSessions">desired_sessions</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#desired_sessions AppstreamFleet#desired_sessions}. |

---

##### `desired_instances`<sup>Optional</sup> <a name="desired_instances" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity.property.desiredInstances"></a>

```python
desired_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#desired_instances AppstreamFleet#desired_instances}.

---

##### `desired_sessions`<sup>Optional</sup> <a name="desired_sessions" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity.property.desiredSessions"></a>

```python
desired_sessions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#desired_sessions AppstreamFleet#desired_sessions}.

---

### AppstreamFleetConfig <a name="AppstreamFleetConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_fleet

appstreamFleet.AppstreamFleetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_type: str,
  name: str,
  attributes_to_delete: typing.List[str] = None,
  compute_capacity: AppstreamFleetComputeCapacity = None,
  description: str = None,
  disable_imdsv1: bool | IResolvable = None,
  disconnect_timeout_in_seconds: typing.Union[int, float] = None,
  display_name: str = None,
  domain_join_info: AppstreamFleetDomainJoinInfo = None,
  enable_default_internet_access: bool | IResolvable = None,
  fleet_type: str = None,
  iam_role_arn: str = None,
  idle_disconnect_timeout_in_seconds: typing.Union[int, float] = None,
  image_arn: str = None,
  image_name: str = None,
  max_concurrent_sessions: typing.Union[int, float] = None,
  max_sessions_per_instance: typing.Union[int, float] = None,
  max_user_duration_in_seconds: typing.Union[int, float] = None,
  platform: str = None,
  root_volume_config: AppstreamFleetRootVolumeConfig = None,
  session_script_s3_location: AppstreamFleetSessionScriptS3Location = None,
  stream_view: str = None,
  tags: IResolvable | typing.List[AppstreamFleetTags] = None,
  usb_device_filter_strings: typing.List[str] = None,
  vpc_config: AppstreamFleetVpcConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#instance_type AppstreamFleet#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#name AppstreamFleet#name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.attributesToDelete">attributes_to_delete</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#attributes_to_delete AppstreamFleet#attributes_to_delete}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.computeCapacity">compute_capacity</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#compute_capacity AppstreamFleet#compute_capacity}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#description AppstreamFleet#description}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.disableImdsv1">disable_imdsv1</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#disable_imdsv1 AppstreamFleet#disable_imdsv1}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.disconnectTimeoutInSeconds">disconnect_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#disconnect_timeout_in_seconds AppstreamFleet#disconnect_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#display_name AppstreamFleet#display_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.domainJoinInfo">domain_join_info</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#domain_join_info AppstreamFleet#domain_join_info}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.enableDefaultInternetAccess">enable_default_internet_access</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#enable_default_internet_access AppstreamFleet#enable_default_internet_access}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.fleetType">fleet_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#fleet_type AppstreamFleet#fleet_type}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#iam_role_arn AppstreamFleet#iam_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.idleDisconnectTimeoutInSeconds">idle_disconnect_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#idle_disconnect_timeout_in_seconds AppstreamFleet#idle_disconnect_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.imageArn">image_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#image_arn AppstreamFleet#image_arn}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.imageName">image_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#image_name AppstreamFleet#image_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.maxConcurrentSessions">max_concurrent_sessions</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#max_concurrent_sessions AppstreamFleet#max_concurrent_sessions}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.maxSessionsPerInstance">max_sessions_per_instance</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#max_sessions_per_instance AppstreamFleet#max_sessions_per_instance}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.maxUserDurationInSeconds">max_user_duration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#max_user_duration_in_seconds AppstreamFleet#max_user_duration_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.platform">platform</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#platform AppstreamFleet#platform}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.rootVolumeConfig">root_volume_config</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig">AppstreamFleetRootVolumeConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#root_volume_config AppstreamFleet#root_volume_config}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.sessionScriptS3Location">session_script_s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location">AppstreamFleetSessionScriptS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#session_script_s3_location AppstreamFleet#session_script_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.streamView">stream_view</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#stream_view AppstreamFleet#stream_view}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#tags AppstreamFleet#tags}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.usbDeviceFilterStrings">usb_device_filter_strings</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#usb_device_filter_strings AppstreamFleet#usb_device_filter_strings}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#vpc_config AppstreamFleet#vpc_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#instance_type AppstreamFleet#instance_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#name AppstreamFleet#name}.

---

##### `attributes_to_delete`<sup>Optional</sup> <a name="attributes_to_delete" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.attributesToDelete"></a>

```python
attributes_to_delete: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#attributes_to_delete AppstreamFleet#attributes_to_delete}.

---

##### `compute_capacity`<sup>Optional</sup> <a name="compute_capacity" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.computeCapacity"></a>

```python
compute_capacity: AppstreamFleetComputeCapacity
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#compute_capacity AppstreamFleet#compute_capacity}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#description AppstreamFleet#description}.

---

##### `disable_imdsv1`<sup>Optional</sup> <a name="disable_imdsv1" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.disableImdsv1"></a>

```python
disable_imdsv1: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#disable_imdsv1 AppstreamFleet#disable_imdsv1}.

---

##### `disconnect_timeout_in_seconds`<sup>Optional</sup> <a name="disconnect_timeout_in_seconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.disconnectTimeoutInSeconds"></a>

```python
disconnect_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#disconnect_timeout_in_seconds AppstreamFleet#disconnect_timeout_in_seconds}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#display_name AppstreamFleet#display_name}.

---

##### `domain_join_info`<sup>Optional</sup> <a name="domain_join_info" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.domainJoinInfo"></a>

```python
domain_join_info: AppstreamFleetDomainJoinInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#domain_join_info AppstreamFleet#domain_join_info}.

---

##### `enable_default_internet_access`<sup>Optional</sup> <a name="enable_default_internet_access" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.enableDefaultInternetAccess"></a>

```python
enable_default_internet_access: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#enable_default_internet_access AppstreamFleet#enable_default_internet_access}.

---

##### `fleet_type`<sup>Optional</sup> <a name="fleet_type" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.fleetType"></a>

```python
fleet_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#fleet_type AppstreamFleet#fleet_type}.

---

##### `iam_role_arn`<sup>Optional</sup> <a name="iam_role_arn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#iam_role_arn AppstreamFleet#iam_role_arn}.

---

##### `idle_disconnect_timeout_in_seconds`<sup>Optional</sup> <a name="idle_disconnect_timeout_in_seconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.idleDisconnectTimeoutInSeconds"></a>

```python
idle_disconnect_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#idle_disconnect_timeout_in_seconds AppstreamFleet#idle_disconnect_timeout_in_seconds}.

---

##### `image_arn`<sup>Optional</sup> <a name="image_arn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.imageArn"></a>

```python
image_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#image_arn AppstreamFleet#image_arn}.

---

##### `image_name`<sup>Optional</sup> <a name="image_name" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#image_name AppstreamFleet#image_name}.

---

##### `max_concurrent_sessions`<sup>Optional</sup> <a name="max_concurrent_sessions" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.maxConcurrentSessions"></a>

```python
max_concurrent_sessions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#max_concurrent_sessions AppstreamFleet#max_concurrent_sessions}.

---

##### `max_sessions_per_instance`<sup>Optional</sup> <a name="max_sessions_per_instance" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.maxSessionsPerInstance"></a>

```python
max_sessions_per_instance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#max_sessions_per_instance AppstreamFleet#max_sessions_per_instance}.

---

##### `max_user_duration_in_seconds`<sup>Optional</sup> <a name="max_user_duration_in_seconds" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.maxUserDurationInSeconds"></a>

```python
max_user_duration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#max_user_duration_in_seconds AppstreamFleet#max_user_duration_in_seconds}.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.platform"></a>

```python
platform: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#platform AppstreamFleet#platform}.

---

##### `root_volume_config`<sup>Optional</sup> <a name="root_volume_config" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.rootVolumeConfig"></a>

```python
root_volume_config: AppstreamFleetRootVolumeConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig">AppstreamFleetRootVolumeConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#root_volume_config AppstreamFleet#root_volume_config}.

---

##### `session_script_s3_location`<sup>Optional</sup> <a name="session_script_s3_location" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.sessionScriptS3Location"></a>

```python
session_script_s3_location: AppstreamFleetSessionScriptS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location">AppstreamFleetSessionScriptS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#session_script_s3_location AppstreamFleet#session_script_s3_location}.

---

##### `stream_view`<sup>Optional</sup> <a name="stream_view" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.streamView"></a>

```python
stream_view: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#stream_view AppstreamFleet#stream_view}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[AppstreamFleetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#tags AppstreamFleet#tags}.

---

##### `usb_device_filter_strings`<sup>Optional</sup> <a name="usb_device_filter_strings" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.usbDeviceFilterStrings"></a>

```python
usb_device_filter_strings: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#usb_device_filter_strings AppstreamFleet#usb_device_filter_strings}.

---

##### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetConfig.property.vpcConfig"></a>

```python
vpc_config: AppstreamFleetVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#vpc_config AppstreamFleet#vpc_config}.

---

### AppstreamFleetDomainJoinInfo <a name="AppstreamFleetDomainJoinInfo" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_fleet

appstreamFleet.AppstreamFleetDomainJoinInfo(
  directory_name: str = None,
  organizational_unit_distinguished_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo.property.directoryName">directory_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#directory_name AppstreamFleet#directory_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo.property.organizationalUnitDistinguishedName">organizational_unit_distinguished_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#organizational_unit_distinguished_name AppstreamFleet#organizational_unit_distinguished_name}. |

---

##### `directory_name`<sup>Optional</sup> <a name="directory_name" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo.property.directoryName"></a>

```python
directory_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#directory_name AppstreamFleet#directory_name}.

---

##### `organizational_unit_distinguished_name`<sup>Optional</sup> <a name="organizational_unit_distinguished_name" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo.property.organizationalUnitDistinguishedName"></a>

```python
organizational_unit_distinguished_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#organizational_unit_distinguished_name AppstreamFleet#organizational_unit_distinguished_name}.

---

### AppstreamFleetRootVolumeConfig <a name="AppstreamFleetRootVolumeConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_fleet

appstreamFleet.AppstreamFleetRootVolumeConfig(
  volume_size_in_gb: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig.property.volumeSizeInGb">volume_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#volume_size_in_gb AppstreamFleet#volume_size_in_gb}. |

---

##### `volume_size_in_gb`<sup>Optional</sup> <a name="volume_size_in_gb" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig.property.volumeSizeInGb"></a>

```python
volume_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#volume_size_in_gb AppstreamFleet#volume_size_in_gb}.

---

### AppstreamFleetSessionScriptS3Location <a name="AppstreamFleetSessionScriptS3Location" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_fleet

appstreamFleet.AppstreamFleetSessionScriptS3Location(
  s3_bucket: str = None,
  s3_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#s3_bucket AppstreamFleet#s3_bucket}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location.property.s3Key">s3_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#s3_key AppstreamFleet#s3_key}. |

---

##### `s3_bucket`<sup>Optional</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#s3_bucket AppstreamFleet#s3_bucket}.

---

##### `s3_key`<sup>Optional</sup> <a name="s3_key" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location.property.s3Key"></a>

```python
s3_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#s3_key AppstreamFleet#s3_key}.

---

### AppstreamFleetTags <a name="AppstreamFleetTags" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_fleet

appstreamFleet.AppstreamFleetTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#key AppstreamFleet#key}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#value AppstreamFleet#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#key AppstreamFleet#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#value AppstreamFleet#value}.

---

### AppstreamFleetVpcConfig <a name="AppstreamFleetVpcConfig" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_fleet

appstreamFleet.AppstreamFleetVpcConfig(
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#security_group_ids AppstreamFleet#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#subnet_ids AppstreamFleet#subnet_ids}. |

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#security_group_ids AppstreamFleet#security_group_ids}.

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/appstream_fleet#subnet_ids AppstreamFleet#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppstreamFleetComputeCapacityOutputReference <a name="AppstreamFleetComputeCapacityOutputReference" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_fleet

appstreamFleet.AppstreamFleetComputeCapacityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.resetDesiredInstances">reset_desired_instances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.resetDesiredSessions">reset_desired_sessions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_desired_instances` <a name="reset_desired_instances" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.resetDesiredInstances"></a>

```python
def reset_desired_instances() -> None
```

##### `reset_desired_sessions` <a name="reset_desired_sessions" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.resetDesiredSessions"></a>

```python
def reset_desired_sessions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.desiredInstancesInput">desired_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.desiredSessionsInput">desired_sessions_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.desiredInstances">desired_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.desiredSessions">desired_sessions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `desired_instances_input`<sup>Optional</sup> <a name="desired_instances_input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.desiredInstancesInput"></a>

```python
desired_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `desired_sessions_input`<sup>Optional</sup> <a name="desired_sessions_input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.desiredSessionsInput"></a>

```python
desired_sessions_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `desired_instances`<sup>Required</sup> <a name="desired_instances" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.desiredInstances"></a>

```python
desired_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `desired_sessions`<sup>Required</sup> <a name="desired_sessions" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.desiredSessions"></a>

```python
desired_sessions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacityOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppstreamFleetComputeCapacity
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetComputeCapacity">AppstreamFleetComputeCapacity</a>

---


### AppstreamFleetDomainJoinInfoOutputReference <a name="AppstreamFleetDomainJoinInfoOutputReference" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_fleet

appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.resetDirectoryName">reset_directory_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.resetOrganizationalUnitDistinguishedName">reset_organizational_unit_distinguished_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_directory_name` <a name="reset_directory_name" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.resetDirectoryName"></a>

```python
def reset_directory_name() -> None
```

##### `reset_organizational_unit_distinguished_name` <a name="reset_organizational_unit_distinguished_name" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.resetOrganizationalUnitDistinguishedName"></a>

```python
def reset_organizational_unit_distinguished_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.directoryNameInput">directory_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedNameInput">organizational_unit_distinguished_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.directoryName">directory_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedName">organizational_unit_distinguished_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `directory_name_input`<sup>Optional</sup> <a name="directory_name_input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.directoryNameInput"></a>

```python
directory_name_input: str
```

- *Type:* str

---

##### `organizational_unit_distinguished_name_input`<sup>Optional</sup> <a name="organizational_unit_distinguished_name_input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedNameInput"></a>

```python
organizational_unit_distinguished_name_input: str
```

- *Type:* str

---

##### `directory_name`<sup>Required</sup> <a name="directory_name" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.directoryName"></a>

```python
directory_name: str
```

- *Type:* str

---

##### `organizational_unit_distinguished_name`<sup>Required</sup> <a name="organizational_unit_distinguished_name" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedName"></a>

```python
organizational_unit_distinguished_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfoOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppstreamFleetDomainJoinInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetDomainJoinInfo">AppstreamFleetDomainJoinInfo</a>

---


### AppstreamFleetRootVolumeConfigOutputReference <a name="AppstreamFleetRootVolumeConfigOutputReference" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_fleet

appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.resetVolumeSizeInGb">reset_volume_size_in_gb</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_volume_size_in_gb` <a name="reset_volume_size_in_gb" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.resetVolumeSizeInGb"></a>

```python
def reset_volume_size_in_gb() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.volumeSizeInGbInput">volume_size_in_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.volumeSizeInGb">volume_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig">AppstreamFleetRootVolumeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `volume_size_in_gb_input`<sup>Optional</sup> <a name="volume_size_in_gb_input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.volumeSizeInGbInput"></a>

```python
volume_size_in_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size_in_gb`<sup>Required</sup> <a name="volume_size_in_gb" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.volumeSizeInGb"></a>

```python
volume_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppstreamFleetRootVolumeConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetRootVolumeConfig">AppstreamFleetRootVolumeConfig</a>

---


### AppstreamFleetSessionScriptS3LocationOutputReference <a name="AppstreamFleetSessionScriptS3LocationOutputReference" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_fleet

appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.resetS3Bucket">reset_s3_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.resetS3Key">reset_s3_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_s3_bucket` <a name="reset_s3_bucket" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.resetS3Bucket"></a>

```python
def reset_s3_bucket() -> None
```

##### `reset_s3_key` <a name="reset_s3_key" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.resetS3Key"></a>

```python
def reset_s3_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.s3BucketInput">s3_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.s3KeyInput">s3_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.s3Key">s3_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location">AppstreamFleetSessionScriptS3Location</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_bucket_input`<sup>Optional</sup> <a name="s3_bucket_input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.s3BucketInput"></a>

```python
s3_bucket_input: str
```

- *Type:* str

---

##### `s3_key_input`<sup>Optional</sup> <a name="s3_key_input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.s3KeyInput"></a>

```python
s3_key_input: str
```

- *Type:* str

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

---

##### `s3_key`<sup>Required</sup> <a name="s3_key" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.s3Key"></a>

```python
s3_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3LocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppstreamFleetSessionScriptS3Location
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetSessionScriptS3Location">AppstreamFleetSessionScriptS3Location</a>

---


### AppstreamFleetTagsList <a name="AppstreamFleetTagsList" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_fleet

appstreamFleet.AppstreamFleetTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppstreamFleetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AppstreamFleetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a>]

---


### AppstreamFleetTagsOutputReference <a name="AppstreamFleetTagsOutputReference" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_fleet

appstreamFleet.AppstreamFleetTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppstreamFleetTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetTags">AppstreamFleetTags</a>

---


### AppstreamFleetVpcConfigOutputReference <a name="AppstreamFleetVpcConfigOutputReference" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_fleet

appstreamFleet.AppstreamFleetVpcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppstreamFleetVpcConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamFleet.AppstreamFleetVpcConfig">AppstreamFleetVpcConfig</a>

---



