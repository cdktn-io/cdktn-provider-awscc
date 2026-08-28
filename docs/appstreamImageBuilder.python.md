# `appstreamImageBuilder` Submodule <a name="`appstreamImageBuilder` Submodule" id="@cdktn/provider-awscc.appstreamImageBuilder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppstreamImageBuilder <a name="AppstreamImageBuilder" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder awscc_appstream_image_builder}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_image_builder

appstreamImageBuilder.AppstreamImageBuilder(
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
  access_endpoints: IResolvable | typing.List[AppstreamImageBuilderAccessEndpoints] = None,
  appstream_agent_version: str = None,
  description: str = None,
  display_name: str = None,
  domain_join_info: AppstreamImageBuilderDomainJoinInfo = None,
  enable_default_internet_access: bool | IResolvable = None,
  iam_role_arn: str = None,
  image_arn: str = None,
  image_name: str = None,
  root_volume_config: AppstreamImageBuilderRootVolumeConfig = None,
  softwares_to_install: typing.List[str] = None,
  softwares_to_uninstall: typing.List[str] = None,
  tags: IResolvable | typing.List[AppstreamImageBuilderTags] = None,
  vpc_config: AppstreamImageBuilderVpcConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#instance_type AppstreamImageBuilder#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#name AppstreamImageBuilder#name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.accessEndpoints">access_endpoints</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints">AppstreamImageBuilderAccessEndpoints</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#access_endpoints AppstreamImageBuilder#access_endpoints}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.appstreamAgentVersion">appstream_agent_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#appstream_agent_version AppstreamImageBuilder#appstream_agent_version}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#description AppstreamImageBuilder#description}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#display_name AppstreamImageBuilder#display_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.domainJoinInfo">domain_join_info</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#domain_join_info AppstreamImageBuilder#domain_join_info}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.enableDefaultInternetAccess">enable_default_internet_access</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#enable_default_internet_access AppstreamImageBuilder#enable_default_internet_access}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#iam_role_arn AppstreamImageBuilder#iam_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.imageArn">image_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#image_arn AppstreamImageBuilder#image_arn}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.imageName">image_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#image_name AppstreamImageBuilder#image_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.rootVolumeConfig">root_volume_config</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfig">AppstreamImageBuilderRootVolumeConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#root_volume_config AppstreamImageBuilder#root_volume_config}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.softwaresToInstall">softwares_to_install</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#softwares_to_install AppstreamImageBuilder#softwares_to_install}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.softwaresToUninstall">softwares_to_uninstall</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#softwares_to_uninstall AppstreamImageBuilder#softwares_to_uninstall}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags">AppstreamImageBuilderTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#tags AppstreamImageBuilder#tags}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#vpc_config AppstreamImageBuilder#vpc_config}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.instanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#instance_type AppstreamImageBuilder#instance_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#name AppstreamImageBuilder#name}.

---

##### `access_endpoints`<sup>Optional</sup> <a name="access_endpoints" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.accessEndpoints"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints">AppstreamImageBuilderAccessEndpoints</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#access_endpoints AppstreamImageBuilder#access_endpoints}.

---

##### `appstream_agent_version`<sup>Optional</sup> <a name="appstream_agent_version" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.appstreamAgentVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#appstream_agent_version AppstreamImageBuilder#appstream_agent_version}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#description AppstreamImageBuilder#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#display_name AppstreamImageBuilder#display_name}.

---

##### `domain_join_info`<sup>Optional</sup> <a name="domain_join_info" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.domainJoinInfo"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#domain_join_info AppstreamImageBuilder#domain_join_info}.

---

##### `enable_default_internet_access`<sup>Optional</sup> <a name="enable_default_internet_access" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.enableDefaultInternetAccess"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#enable_default_internet_access AppstreamImageBuilder#enable_default_internet_access}.

---

##### `iam_role_arn`<sup>Optional</sup> <a name="iam_role_arn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.iamRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#iam_role_arn AppstreamImageBuilder#iam_role_arn}.

---

##### `image_arn`<sup>Optional</sup> <a name="image_arn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.imageArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#image_arn AppstreamImageBuilder#image_arn}.

---

##### `image_name`<sup>Optional</sup> <a name="image_name" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.imageName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#image_name AppstreamImageBuilder#image_name}.

---

##### `root_volume_config`<sup>Optional</sup> <a name="root_volume_config" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.rootVolumeConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfig">AppstreamImageBuilderRootVolumeConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#root_volume_config AppstreamImageBuilder#root_volume_config}.

---

##### `softwares_to_install`<sup>Optional</sup> <a name="softwares_to_install" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.softwaresToInstall"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#softwares_to_install AppstreamImageBuilder#softwares_to_install}.

---

##### `softwares_to_uninstall`<sup>Optional</sup> <a name="softwares_to_uninstall" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.softwaresToUninstall"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#softwares_to_uninstall AppstreamImageBuilder#softwares_to_uninstall}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags">AppstreamImageBuilderTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#tags AppstreamImageBuilder#tags}.

---

##### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.Initializer.parameter.vpcConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#vpc_config AppstreamImageBuilder#vpc_config}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putAccessEndpoints">put_access_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putDomainJoinInfo">put_domain_join_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putRootVolumeConfig">put_root_volume_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putVpcConfig">put_vpc_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetAccessEndpoints">reset_access_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetAppstreamAgentVersion">reset_appstream_agent_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetDomainJoinInfo">reset_domain_join_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetEnableDefaultInternetAccess">reset_enable_default_internet_access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetIamRoleArn">reset_iam_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetImageArn">reset_image_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetImageName">reset_image_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetRootVolumeConfig">reset_root_volume_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetSoftwaresToInstall">reset_softwares_to_install</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetSoftwaresToUninstall">reset_softwares_to_uninstall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetVpcConfig">reset_vpc_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_access_endpoints` <a name="put_access_endpoints" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putAccessEndpoints"></a>

```python
def put_access_endpoints(
  value: IResolvable | typing.List[AppstreamImageBuilderAccessEndpoints]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putAccessEndpoints.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints">AppstreamImageBuilderAccessEndpoints</a>]

---

##### `put_domain_join_info` <a name="put_domain_join_info" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putDomainJoinInfo"></a>

```python
def put_domain_join_info(
  directory_name: str = None,
  organizational_unit_distinguished_name: str = None
) -> None
```

###### `directory_name`<sup>Optional</sup> <a name="directory_name" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putDomainJoinInfo.parameter.directoryName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#directory_name AppstreamImageBuilder#directory_name}.

---

###### `organizational_unit_distinguished_name`<sup>Optional</sup> <a name="organizational_unit_distinguished_name" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putDomainJoinInfo.parameter.organizationalUnitDistinguishedName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#organizational_unit_distinguished_name AppstreamImageBuilder#organizational_unit_distinguished_name}.

---

##### `put_root_volume_config` <a name="put_root_volume_config" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putRootVolumeConfig"></a>

```python
def put_root_volume_config(
  volume_size_in_gb: typing.Union[int, float] = None
) -> None
```

###### `volume_size_in_gb`<sup>Optional</sup> <a name="volume_size_in_gb" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putRootVolumeConfig.parameter.volumeSizeInGb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#volume_size_in_gb AppstreamImageBuilder#volume_size_in_gb}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[AppstreamImageBuilderTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags">AppstreamImageBuilderTags</a>]

---

##### `put_vpc_config` <a name="put_vpc_config" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putVpcConfig"></a>

```python
def put_vpc_config(
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None
) -> None
```

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putVpcConfig.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#security_group_ids AppstreamImageBuilder#security_group_ids}.

---

###### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.putVpcConfig.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#subnet_ids AppstreamImageBuilder#subnet_ids}.

---

##### `reset_access_endpoints` <a name="reset_access_endpoints" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetAccessEndpoints"></a>

```python
def reset_access_endpoints() -> None
```

##### `reset_appstream_agent_version` <a name="reset_appstream_agent_version" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetAppstreamAgentVersion"></a>

```python
def reset_appstream_agent_version() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_domain_join_info` <a name="reset_domain_join_info" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetDomainJoinInfo"></a>

```python
def reset_domain_join_info() -> None
```

##### `reset_enable_default_internet_access` <a name="reset_enable_default_internet_access" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetEnableDefaultInternetAccess"></a>

```python
def reset_enable_default_internet_access() -> None
```

##### `reset_iam_role_arn` <a name="reset_iam_role_arn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetIamRoleArn"></a>

```python
def reset_iam_role_arn() -> None
```

##### `reset_image_arn` <a name="reset_image_arn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetImageArn"></a>

```python
def reset_image_arn() -> None
```

##### `reset_image_name` <a name="reset_image_name" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetImageName"></a>

```python
def reset_image_name() -> None
```

##### `reset_root_volume_config` <a name="reset_root_volume_config" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetRootVolumeConfig"></a>

```python
def reset_root_volume_config() -> None
```

##### `reset_softwares_to_install` <a name="reset_softwares_to_install" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetSoftwaresToInstall"></a>

```python
def reset_softwares_to_install() -> None
```

##### `reset_softwares_to_uninstall` <a name="reset_softwares_to_uninstall" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetSoftwaresToUninstall"></a>

```python
def reset_softwares_to_uninstall() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_vpc_config` <a name="reset_vpc_config" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.resetVpcConfig"></a>

```python
def reset_vpc_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AppstreamImageBuilder resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.isConstruct"></a>

```python
from cdktn_provider_awscc import appstream_image_builder

appstreamImageBuilder.AppstreamImageBuilder.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.isTerraformElement"></a>

```python
from cdktn_provider_awscc import appstream_image_builder

appstreamImageBuilder.AppstreamImageBuilder.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.isTerraformResource"></a>

```python
from cdktn_provider_awscc import appstream_image_builder

appstreamImageBuilder.AppstreamImageBuilder.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import appstream_image_builder

appstreamImageBuilder.AppstreamImageBuilder.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AppstreamImageBuilder resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppstreamImageBuilder to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppstreamImageBuilder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppstreamImageBuilder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.accessEndpoints">access_endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList">AppstreamImageBuilderAccessEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.domainJoinInfo">domain_join_info</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference">AppstreamImageBuilderDomainJoinInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.rootVolumeConfig">root_volume_config</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference">AppstreamImageBuilderRootVolumeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.streamingUrl">streaming_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList">AppstreamImageBuilderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference">AppstreamImageBuilderVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.accessEndpointsInput">access_endpoints_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints">AppstreamImageBuilderAccessEndpoints</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.appstreamAgentVersionInput">appstream_agent_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.domainJoinInfoInput">domain_join_info_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.enableDefaultInternetAccessInput">enable_default_internet_access_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.iamRoleArnInput">iam_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.imageArnInput">image_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.imageNameInput">image_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.rootVolumeConfigInput">root_volume_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfig">AppstreamImageBuilderRootVolumeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.softwaresToInstallInput">softwares_to_install_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.softwaresToUninstallInput">softwares_to_uninstall_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags">AppstreamImageBuilderTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.vpcConfigInput">vpc_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.appstreamAgentVersion">appstream_agent_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.enableDefaultInternetAccess">enable_default_internet_access</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.imageArn">image_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.imageName">image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.softwaresToInstall">softwares_to_install</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.softwaresToUninstall">softwares_to_uninstall</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_endpoints`<sup>Required</sup> <a name="access_endpoints" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.accessEndpoints"></a>

```python
access_endpoints: AppstreamImageBuilderAccessEndpointsList
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList">AppstreamImageBuilderAccessEndpointsList</a>

---

##### `domain_join_info`<sup>Required</sup> <a name="domain_join_info" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.domainJoinInfo"></a>

```python
domain_join_info: AppstreamImageBuilderDomainJoinInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference">AppstreamImageBuilderDomainJoinInfoOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `root_volume_config`<sup>Required</sup> <a name="root_volume_config" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.rootVolumeConfig"></a>

```python
root_volume_config: AppstreamImageBuilderRootVolumeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference">AppstreamImageBuilderRootVolumeConfigOutputReference</a>

---

##### `streaming_url`<sup>Required</sup> <a name="streaming_url" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.streamingUrl"></a>

```python
streaming_url: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.tags"></a>

```python
tags: AppstreamImageBuilderTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList">AppstreamImageBuilderTagsList</a>

---

##### `vpc_config`<sup>Required</sup> <a name="vpc_config" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.vpcConfig"></a>

```python
vpc_config: AppstreamImageBuilderVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference">AppstreamImageBuilderVpcConfigOutputReference</a>

---

##### `access_endpoints_input`<sup>Optional</sup> <a name="access_endpoints_input" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.accessEndpointsInput"></a>

```python
access_endpoints_input: IResolvable | typing.List[AppstreamImageBuilderAccessEndpoints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints">AppstreamImageBuilderAccessEndpoints</a>]

---

##### `appstream_agent_version_input`<sup>Optional</sup> <a name="appstream_agent_version_input" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.appstreamAgentVersionInput"></a>

```python
appstream_agent_version_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `domain_join_info_input`<sup>Optional</sup> <a name="domain_join_info_input" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.domainJoinInfoInput"></a>

```python
domain_join_info_input: IResolvable | AppstreamImageBuilderDomainJoinInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a>

---

##### `enable_default_internet_access_input`<sup>Optional</sup> <a name="enable_default_internet_access_input" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.enableDefaultInternetAccessInput"></a>

```python
enable_default_internet_access_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `iam_role_arn_input`<sup>Optional</sup> <a name="iam_role_arn_input" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.iamRoleArnInput"></a>

```python
iam_role_arn_input: str
```

- *Type:* str

---

##### `image_arn_input`<sup>Optional</sup> <a name="image_arn_input" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.imageArnInput"></a>

```python
image_arn_input: str
```

- *Type:* str

---

##### `image_name_input`<sup>Optional</sup> <a name="image_name_input" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.imageNameInput"></a>

```python
image_name_input: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `root_volume_config_input`<sup>Optional</sup> <a name="root_volume_config_input" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.rootVolumeConfigInput"></a>

```python
root_volume_config_input: IResolvable | AppstreamImageBuilderRootVolumeConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfig">AppstreamImageBuilderRootVolumeConfig</a>

---

##### `softwares_to_install_input`<sup>Optional</sup> <a name="softwares_to_install_input" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.softwaresToInstallInput"></a>

```python
softwares_to_install_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `softwares_to_uninstall_input`<sup>Optional</sup> <a name="softwares_to_uninstall_input" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.softwaresToUninstallInput"></a>

```python
softwares_to_uninstall_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[AppstreamImageBuilderTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags">AppstreamImageBuilderTags</a>]

---

##### `vpc_config_input`<sup>Optional</sup> <a name="vpc_config_input" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.vpcConfigInput"></a>

```python
vpc_config_input: IResolvable | AppstreamImageBuilderVpcConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a>

---

##### `appstream_agent_version`<sup>Required</sup> <a name="appstream_agent_version" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.appstreamAgentVersion"></a>

```python
appstream_agent_version: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enable_default_internet_access`<sup>Required</sup> <a name="enable_default_internet_access" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.enableDefaultInternetAccess"></a>

```python
enable_default_internet_access: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

---

##### `image_arn`<sup>Required</sup> <a name="image_arn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.imageArn"></a>

```python
image_arn: str
```

- *Type:* str

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `softwares_to_install`<sup>Required</sup> <a name="softwares_to_install" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.softwaresToInstall"></a>

```python
softwares_to_install: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `softwares_to_uninstall`<sup>Required</sup> <a name="softwares_to_uninstall" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.softwaresToUninstall"></a>

```python
softwares_to_uninstall: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilder.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppstreamImageBuilderAccessEndpoints <a name="AppstreamImageBuilderAccessEndpoints" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_image_builder

appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints(
  endpoint_type: str = None,
  vpce_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints.property.endpointType">endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#endpoint_type AppstreamImageBuilder#endpoint_type}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints.property.vpceId">vpce_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#vpce_id AppstreamImageBuilder#vpce_id}. |

---

##### `endpoint_type`<sup>Optional</sup> <a name="endpoint_type" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#endpoint_type AppstreamImageBuilder#endpoint_type}.

---

##### `vpce_id`<sup>Optional</sup> <a name="vpce_id" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints.property.vpceId"></a>

```python
vpce_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#vpce_id AppstreamImageBuilder#vpce_id}.

---

### AppstreamImageBuilderConfig <a name="AppstreamImageBuilderConfig" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_image_builder

appstreamImageBuilder.AppstreamImageBuilderConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_type: str,
  name: str,
  access_endpoints: IResolvable | typing.List[AppstreamImageBuilderAccessEndpoints] = None,
  appstream_agent_version: str = None,
  description: str = None,
  display_name: str = None,
  domain_join_info: AppstreamImageBuilderDomainJoinInfo = None,
  enable_default_internet_access: bool | IResolvable = None,
  iam_role_arn: str = None,
  image_arn: str = None,
  image_name: str = None,
  root_volume_config: AppstreamImageBuilderRootVolumeConfig = None,
  softwares_to_install: typing.List[str] = None,
  softwares_to_uninstall: typing.List[str] = None,
  tags: IResolvable | typing.List[AppstreamImageBuilderTags] = None,
  vpc_config: AppstreamImageBuilderVpcConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#instance_type AppstreamImageBuilder#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#name AppstreamImageBuilder#name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.accessEndpoints">access_endpoints</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints">AppstreamImageBuilderAccessEndpoints</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#access_endpoints AppstreamImageBuilder#access_endpoints}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.appstreamAgentVersion">appstream_agent_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#appstream_agent_version AppstreamImageBuilder#appstream_agent_version}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#description AppstreamImageBuilder#description}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#display_name AppstreamImageBuilder#display_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.domainJoinInfo">domain_join_info</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#domain_join_info AppstreamImageBuilder#domain_join_info}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.enableDefaultInternetAccess">enable_default_internet_access</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#enable_default_internet_access AppstreamImageBuilder#enable_default_internet_access}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#iam_role_arn AppstreamImageBuilder#iam_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.imageArn">image_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#image_arn AppstreamImageBuilder#image_arn}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.imageName">image_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#image_name AppstreamImageBuilder#image_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.rootVolumeConfig">root_volume_config</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfig">AppstreamImageBuilderRootVolumeConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#root_volume_config AppstreamImageBuilder#root_volume_config}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.softwaresToInstall">softwares_to_install</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#softwares_to_install AppstreamImageBuilder#softwares_to_install}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.softwaresToUninstall">softwares_to_uninstall</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#softwares_to_uninstall AppstreamImageBuilder#softwares_to_uninstall}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags">AppstreamImageBuilderTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#tags AppstreamImageBuilder#tags}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#vpc_config AppstreamImageBuilder#vpc_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#instance_type AppstreamImageBuilder#instance_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#name AppstreamImageBuilder#name}.

---

##### `access_endpoints`<sup>Optional</sup> <a name="access_endpoints" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.accessEndpoints"></a>

```python
access_endpoints: IResolvable | typing.List[AppstreamImageBuilderAccessEndpoints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints">AppstreamImageBuilderAccessEndpoints</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#access_endpoints AppstreamImageBuilder#access_endpoints}.

---

##### `appstream_agent_version`<sup>Optional</sup> <a name="appstream_agent_version" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.appstreamAgentVersion"></a>

```python
appstream_agent_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#appstream_agent_version AppstreamImageBuilder#appstream_agent_version}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#description AppstreamImageBuilder#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#display_name AppstreamImageBuilder#display_name}.

---

##### `domain_join_info`<sup>Optional</sup> <a name="domain_join_info" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.domainJoinInfo"></a>

```python
domain_join_info: AppstreamImageBuilderDomainJoinInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#domain_join_info AppstreamImageBuilder#domain_join_info}.

---

##### `enable_default_internet_access`<sup>Optional</sup> <a name="enable_default_internet_access" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.enableDefaultInternetAccess"></a>

```python
enable_default_internet_access: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#enable_default_internet_access AppstreamImageBuilder#enable_default_internet_access}.

---

##### `iam_role_arn`<sup>Optional</sup> <a name="iam_role_arn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#iam_role_arn AppstreamImageBuilder#iam_role_arn}.

---

##### `image_arn`<sup>Optional</sup> <a name="image_arn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.imageArn"></a>

```python
image_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#image_arn AppstreamImageBuilder#image_arn}.

---

##### `image_name`<sup>Optional</sup> <a name="image_name" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#image_name AppstreamImageBuilder#image_name}.

---

##### `root_volume_config`<sup>Optional</sup> <a name="root_volume_config" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.rootVolumeConfig"></a>

```python
root_volume_config: AppstreamImageBuilderRootVolumeConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfig">AppstreamImageBuilderRootVolumeConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#root_volume_config AppstreamImageBuilder#root_volume_config}.

---

##### `softwares_to_install`<sup>Optional</sup> <a name="softwares_to_install" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.softwaresToInstall"></a>

```python
softwares_to_install: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#softwares_to_install AppstreamImageBuilder#softwares_to_install}.

---

##### `softwares_to_uninstall`<sup>Optional</sup> <a name="softwares_to_uninstall" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.softwaresToUninstall"></a>

```python
softwares_to_uninstall: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#softwares_to_uninstall AppstreamImageBuilder#softwares_to_uninstall}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[AppstreamImageBuilderTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags">AppstreamImageBuilderTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#tags AppstreamImageBuilder#tags}.

---

##### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderConfig.property.vpcConfig"></a>

```python
vpc_config: AppstreamImageBuilderVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#vpc_config AppstreamImageBuilder#vpc_config}.

---

### AppstreamImageBuilderDomainJoinInfo <a name="AppstreamImageBuilderDomainJoinInfo" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_image_builder

appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo(
  directory_name: str = None,
  organizational_unit_distinguished_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo.property.directoryName">directory_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#directory_name AppstreamImageBuilder#directory_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo.property.organizationalUnitDistinguishedName">organizational_unit_distinguished_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#organizational_unit_distinguished_name AppstreamImageBuilder#organizational_unit_distinguished_name}. |

---

##### `directory_name`<sup>Optional</sup> <a name="directory_name" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo.property.directoryName"></a>

```python
directory_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#directory_name AppstreamImageBuilder#directory_name}.

---

##### `organizational_unit_distinguished_name`<sup>Optional</sup> <a name="organizational_unit_distinguished_name" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo.property.organizationalUnitDistinguishedName"></a>

```python
organizational_unit_distinguished_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#organizational_unit_distinguished_name AppstreamImageBuilder#organizational_unit_distinguished_name}.

---

### AppstreamImageBuilderRootVolumeConfig <a name="AppstreamImageBuilderRootVolumeConfig" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_image_builder

appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfig(
  volume_size_in_gb: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfig.property.volumeSizeInGb">volume_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#volume_size_in_gb AppstreamImageBuilder#volume_size_in_gb}. |

---

##### `volume_size_in_gb`<sup>Optional</sup> <a name="volume_size_in_gb" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfig.property.volumeSizeInGb"></a>

```python
volume_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#volume_size_in_gb AppstreamImageBuilder#volume_size_in_gb}.

---

### AppstreamImageBuilderTags <a name="AppstreamImageBuilderTags" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_image_builder

appstreamImageBuilder.AppstreamImageBuilderTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#key AppstreamImageBuilder#key}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#value AppstreamImageBuilder#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#key AppstreamImageBuilder#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#value AppstreamImageBuilder#value}.

---

### AppstreamImageBuilderVpcConfig <a name="AppstreamImageBuilderVpcConfig" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_image_builder

appstreamImageBuilder.AppstreamImageBuilderVpcConfig(
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#security_group_ids AppstreamImageBuilder#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#subnet_ids AppstreamImageBuilder#subnet_ids}. |

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#security_group_ids AppstreamImageBuilder#security_group_ids}.

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appstream_image_builder#subnet_ids AppstreamImageBuilder#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppstreamImageBuilderAccessEndpointsList <a name="AppstreamImageBuilderAccessEndpointsList" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_image_builder

appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppstreamImageBuilderAccessEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints">AppstreamImageBuilderAccessEndpoints</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AppstreamImageBuilderAccessEndpoints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints">AppstreamImageBuilderAccessEndpoints</a>]

---


### AppstreamImageBuilderAccessEndpointsOutputReference <a name="AppstreamImageBuilderAccessEndpointsOutputReference" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_image_builder

appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.resetEndpointType">reset_endpoint_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.resetVpceId">reset_vpce_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_endpoint_type` <a name="reset_endpoint_type" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.resetEndpointType"></a>

```python
def reset_endpoint_type() -> None
```

##### `reset_vpce_id` <a name="reset_vpce_id" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.resetVpceId"></a>

```python
def reset_vpce_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.endpointTypeInput">endpoint_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.vpceIdInput">vpce_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.endpointType">endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.vpceId">vpce_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints">AppstreamImageBuilderAccessEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint_type_input`<sup>Optional</sup> <a name="endpoint_type_input" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.endpointTypeInput"></a>

```python
endpoint_type_input: str
```

- *Type:* str

---

##### `vpce_id_input`<sup>Optional</sup> <a name="vpce_id_input" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.vpceIdInput"></a>

```python
vpce_id_input: str
```

- *Type:* str

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

---

##### `vpce_id`<sup>Required</sup> <a name="vpce_id" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.vpceId"></a>

```python
vpce_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppstreamImageBuilderAccessEndpoints
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderAccessEndpoints">AppstreamImageBuilderAccessEndpoints</a>

---


### AppstreamImageBuilderDomainJoinInfoOutputReference <a name="AppstreamImageBuilderDomainJoinInfoOutputReference" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_image_builder

appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resetDirectoryName">reset_directory_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resetOrganizationalUnitDistinguishedName">reset_organizational_unit_distinguished_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_directory_name` <a name="reset_directory_name" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resetDirectoryName"></a>

```python
def reset_directory_name() -> None
```

##### `reset_organizational_unit_distinguished_name` <a name="reset_organizational_unit_distinguished_name" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.resetOrganizationalUnitDistinguishedName"></a>

```python
def reset_organizational_unit_distinguished_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.directoryNameInput">directory_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedNameInput">organizational_unit_distinguished_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.directoryName">directory_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedName">organizational_unit_distinguished_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `directory_name_input`<sup>Optional</sup> <a name="directory_name_input" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.directoryNameInput"></a>

```python
directory_name_input: str
```

- *Type:* str

---

##### `organizational_unit_distinguished_name_input`<sup>Optional</sup> <a name="organizational_unit_distinguished_name_input" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedNameInput"></a>

```python
organizational_unit_distinguished_name_input: str
```

- *Type:* str

---

##### `directory_name`<sup>Required</sup> <a name="directory_name" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.directoryName"></a>

```python
directory_name: str
```

- *Type:* str

---

##### `organizational_unit_distinguished_name`<sup>Required</sup> <a name="organizational_unit_distinguished_name" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.organizationalUnitDistinguishedName"></a>

```python
organizational_unit_distinguished_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfoOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppstreamImageBuilderDomainJoinInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderDomainJoinInfo">AppstreamImageBuilderDomainJoinInfo</a>

---


### AppstreamImageBuilderRootVolumeConfigOutputReference <a name="AppstreamImageBuilderRootVolumeConfigOutputReference" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_image_builder

appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.resetVolumeSizeInGb">reset_volume_size_in_gb</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_volume_size_in_gb` <a name="reset_volume_size_in_gb" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.resetVolumeSizeInGb"></a>

```python
def reset_volume_size_in_gb() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.property.volumeSizeInGbInput">volume_size_in_gb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.property.volumeSizeInGb">volume_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfig">AppstreamImageBuilderRootVolumeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `volume_size_in_gb_input`<sup>Optional</sup> <a name="volume_size_in_gb_input" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.property.volumeSizeInGbInput"></a>

```python
volume_size_in_gb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size_in_gb`<sup>Required</sup> <a name="volume_size_in_gb" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.property.volumeSizeInGb"></a>

```python
volume_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppstreamImageBuilderRootVolumeConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderRootVolumeConfig">AppstreamImageBuilderRootVolumeConfig</a>

---


### AppstreamImageBuilderTagsList <a name="AppstreamImageBuilderTagsList" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_image_builder

appstreamImageBuilder.AppstreamImageBuilderTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppstreamImageBuilderTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags">AppstreamImageBuilderTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AppstreamImageBuilderTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags">AppstreamImageBuilderTags</a>]

---


### AppstreamImageBuilderTagsOutputReference <a name="AppstreamImageBuilderTagsOutputReference" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_image_builder

appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags">AppstreamImageBuilderTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppstreamImageBuilderTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderTags">AppstreamImageBuilderTags</a>

---


### AppstreamImageBuilderVpcConfigOutputReference <a name="AppstreamImageBuilderVpcConfigOutputReference" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_image_builder

appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppstreamImageBuilderVpcConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamImageBuilder.AppstreamImageBuilderVpcConfig">AppstreamImageBuilderVpcConfig</a>

---



