# `appstreamAppBlockBuilder` Submodule <a name="`appstreamAppBlockBuilder` Submodule" id="@cdktn/provider-awscc.appstreamAppBlockBuilder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppstreamAppBlockBuilder <a name="AppstreamAppBlockBuilder" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder awscc_appstream_app_block_builder}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_app_block_builder

appstreamAppBlockBuilder.AppstreamAppBlockBuilder(
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
  platform: str,
  vpc_config: AppstreamAppBlockBuilderVpcConfig,
  access_endpoints: IResolvable | typing.List[AppstreamAppBlockBuilderAccessEndpoints] = None,
  app_block_arns: typing.List[str] = None,
  description: str = None,
  display_name: str = None,
  enable_default_internet_access: bool | IResolvable = None,
  iam_role_arn: str = None,
  tags: IResolvable | typing.List[AppstreamAppBlockBuilderTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#instance_type AppstreamAppBlockBuilder#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#name AppstreamAppBlockBuilder#name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.platform">platform</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#platform AppstreamAppBlockBuilder#platform}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig">AppstreamAppBlockBuilderVpcConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#vpc_config AppstreamAppBlockBuilder#vpc_config}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.accessEndpoints">access_endpoints</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints">AppstreamAppBlockBuilderAccessEndpoints</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#access_endpoints AppstreamAppBlockBuilder#access_endpoints}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.appBlockArns">app_block_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#app_block_arns AppstreamAppBlockBuilder#app_block_arns}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#description AppstreamAppBlockBuilder#description}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#display_name AppstreamAppBlockBuilder#display_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.enableDefaultInternetAccess">enable_default_internet_access</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#enable_default_internet_access AppstreamAppBlockBuilder#enable_default_internet_access}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#iam_role_arn AppstreamAppBlockBuilder#iam_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags">AppstreamAppBlockBuilderTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#tags AppstreamAppBlockBuilder#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.instanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#instance_type AppstreamAppBlockBuilder#instance_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#name AppstreamAppBlockBuilder#name}.

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.platform"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#platform AppstreamAppBlockBuilder#platform}.

---

##### `vpc_config`<sup>Required</sup> <a name="vpc_config" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.vpcConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig">AppstreamAppBlockBuilderVpcConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#vpc_config AppstreamAppBlockBuilder#vpc_config}.

---

##### `access_endpoints`<sup>Optional</sup> <a name="access_endpoints" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.accessEndpoints"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints">AppstreamAppBlockBuilderAccessEndpoints</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#access_endpoints AppstreamAppBlockBuilder#access_endpoints}.

---

##### `app_block_arns`<sup>Optional</sup> <a name="app_block_arns" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.appBlockArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#app_block_arns AppstreamAppBlockBuilder#app_block_arns}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#description AppstreamAppBlockBuilder#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#display_name AppstreamAppBlockBuilder#display_name}.

---

##### `enable_default_internet_access`<sup>Optional</sup> <a name="enable_default_internet_access" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.enableDefaultInternetAccess"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#enable_default_internet_access AppstreamAppBlockBuilder#enable_default_internet_access}.

---

##### `iam_role_arn`<sup>Optional</sup> <a name="iam_role_arn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.iamRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#iam_role_arn AppstreamAppBlockBuilder#iam_role_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags">AppstreamAppBlockBuilderTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#tags AppstreamAppBlockBuilder#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.putAccessEndpoints">put_access_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.putVpcConfig">put_vpc_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetAccessEndpoints">reset_access_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetAppBlockArns">reset_app_block_arns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetEnableDefaultInternetAccess">reset_enable_default_internet_access</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetIamRoleArn">reset_iam_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_access_endpoints` <a name="put_access_endpoints" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.putAccessEndpoints"></a>

```python
def put_access_endpoints(
  value: IResolvable | typing.List[AppstreamAppBlockBuilderAccessEndpoints]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.putAccessEndpoints.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints">AppstreamAppBlockBuilderAccessEndpoints</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[AppstreamAppBlockBuilderTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags">AppstreamAppBlockBuilderTags</a>]

---

##### `put_vpc_config` <a name="put_vpc_config" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.putVpcConfig"></a>

```python
def put_vpc_config(
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None
) -> None
```

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.putVpcConfig.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#security_group_ids AppstreamAppBlockBuilder#security_group_ids}.

---

###### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.putVpcConfig.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#subnet_ids AppstreamAppBlockBuilder#subnet_ids}.

---

##### `reset_access_endpoints` <a name="reset_access_endpoints" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetAccessEndpoints"></a>

```python
def reset_access_endpoints() -> None
```

##### `reset_app_block_arns` <a name="reset_app_block_arns" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetAppBlockArns"></a>

```python
def reset_app_block_arns() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_enable_default_internet_access` <a name="reset_enable_default_internet_access" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetEnableDefaultInternetAccess"></a>

```python
def reset_enable_default_internet_access() -> None
```

##### `reset_iam_role_arn` <a name="reset_iam_role_arn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetIamRoleArn"></a>

```python
def reset_iam_role_arn() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AppstreamAppBlockBuilder resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.isConstruct"></a>

```python
from cdktn_provider_awscc import appstream_app_block_builder

appstreamAppBlockBuilder.AppstreamAppBlockBuilder.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.isTerraformElement"></a>

```python
from cdktn_provider_awscc import appstream_app_block_builder

appstreamAppBlockBuilder.AppstreamAppBlockBuilder.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.isTerraformResource"></a>

```python
from cdktn_provider_awscc import appstream_app_block_builder

appstreamAppBlockBuilder.AppstreamAppBlockBuilder.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import appstream_app_block_builder

appstreamAppBlockBuilder.AppstreamAppBlockBuilder.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AppstreamAppBlockBuilder resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppstreamAppBlockBuilder to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppstreamAppBlockBuilder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppstreamAppBlockBuilder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.accessEndpoints">access_endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList">AppstreamAppBlockBuilderAccessEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList">AppstreamAppBlockBuilderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference">AppstreamAppBlockBuilderVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.accessEndpointsInput">access_endpoints_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints">AppstreamAppBlockBuilderAccessEndpoints</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.appBlockArnsInput">app_block_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.enableDefaultInternetAccessInput">enable_default_internet_access_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.iamRoleArnInput">iam_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.platformInput">platform_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags">AppstreamAppBlockBuilderTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.vpcConfigInput">vpc_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig">AppstreamAppBlockBuilderVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.appBlockArns">app_block_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.enableDefaultInternetAccess">enable_default_internet_access</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.platform">platform</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_endpoints`<sup>Required</sup> <a name="access_endpoints" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.accessEndpoints"></a>

```python
access_endpoints: AppstreamAppBlockBuilderAccessEndpointsList
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList">AppstreamAppBlockBuilderAccessEndpointsList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.tags"></a>

```python
tags: AppstreamAppBlockBuilderTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList">AppstreamAppBlockBuilderTagsList</a>

---

##### `vpc_config`<sup>Required</sup> <a name="vpc_config" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.vpcConfig"></a>

```python
vpc_config: AppstreamAppBlockBuilderVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference">AppstreamAppBlockBuilderVpcConfigOutputReference</a>

---

##### `access_endpoints_input`<sup>Optional</sup> <a name="access_endpoints_input" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.accessEndpointsInput"></a>

```python
access_endpoints_input: IResolvable | typing.List[AppstreamAppBlockBuilderAccessEndpoints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints">AppstreamAppBlockBuilderAccessEndpoints</a>]

---

##### `app_block_arns_input`<sup>Optional</sup> <a name="app_block_arns_input" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.appBlockArnsInput"></a>

```python
app_block_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enable_default_internet_access_input`<sup>Optional</sup> <a name="enable_default_internet_access_input" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.enableDefaultInternetAccessInput"></a>

```python
enable_default_internet_access_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `iam_role_arn_input`<sup>Optional</sup> <a name="iam_role_arn_input" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.iamRoleArnInput"></a>

```python
iam_role_arn_input: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `platform_input`<sup>Optional</sup> <a name="platform_input" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.platformInput"></a>

```python
platform_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[AppstreamAppBlockBuilderTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags">AppstreamAppBlockBuilderTags</a>]

---

##### `vpc_config_input`<sup>Optional</sup> <a name="vpc_config_input" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.vpcConfigInput"></a>

```python
vpc_config_input: IResolvable | AppstreamAppBlockBuilderVpcConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig">AppstreamAppBlockBuilderVpcConfig</a>

---

##### `app_block_arns`<sup>Required</sup> <a name="app_block_arns" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.appBlockArns"></a>

```python
app_block_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enable_default_internet_access`<sup>Required</sup> <a name="enable_default_internet_access" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.enableDefaultInternetAccess"></a>

```python
enable_default_internet_access: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilder.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppstreamAppBlockBuilderAccessEndpoints <a name="AppstreamAppBlockBuilderAccessEndpoints" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_app_block_builder

appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints(
  endpoint_type: str = None,
  vpce_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints.property.endpointType">endpoint_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#endpoint_type AppstreamAppBlockBuilder#endpoint_type}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints.property.vpceId">vpce_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#vpce_id AppstreamAppBlockBuilder#vpce_id}. |

---

##### `endpoint_type`<sup>Optional</sup> <a name="endpoint_type" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#endpoint_type AppstreamAppBlockBuilder#endpoint_type}.

---

##### `vpce_id`<sup>Optional</sup> <a name="vpce_id" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints.property.vpceId"></a>

```python
vpce_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#vpce_id AppstreamAppBlockBuilder#vpce_id}.

---

### AppstreamAppBlockBuilderConfig <a name="AppstreamAppBlockBuilderConfig" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_app_block_builder

appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_type: str,
  name: str,
  platform: str,
  vpc_config: AppstreamAppBlockBuilderVpcConfig,
  access_endpoints: IResolvable | typing.List[AppstreamAppBlockBuilderAccessEndpoints] = None,
  app_block_arns: typing.List[str] = None,
  description: str = None,
  display_name: str = None,
  enable_default_internet_access: bool | IResolvable = None,
  iam_role_arn: str = None,
  tags: IResolvable | typing.List[AppstreamAppBlockBuilderTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.instanceType">instance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#instance_type AppstreamAppBlockBuilder#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#name AppstreamAppBlockBuilder#name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.platform">platform</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#platform AppstreamAppBlockBuilder#platform}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig">AppstreamAppBlockBuilderVpcConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#vpc_config AppstreamAppBlockBuilder#vpc_config}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.accessEndpoints">access_endpoints</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints">AppstreamAppBlockBuilderAccessEndpoints</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#access_endpoints AppstreamAppBlockBuilder#access_endpoints}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.appBlockArns">app_block_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#app_block_arns AppstreamAppBlockBuilder#app_block_arns}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#description AppstreamAppBlockBuilder#description}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#display_name AppstreamAppBlockBuilder#display_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.enableDefaultInternetAccess">enable_default_internet_access</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#enable_default_internet_access AppstreamAppBlockBuilder#enable_default_internet_access}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#iam_role_arn AppstreamAppBlockBuilder#iam_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags">AppstreamAppBlockBuilderTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#tags AppstreamAppBlockBuilder#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#instance_type AppstreamAppBlockBuilder#instance_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#name AppstreamAppBlockBuilder#name}.

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.platform"></a>

```python
platform: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#platform AppstreamAppBlockBuilder#platform}.

---

##### `vpc_config`<sup>Required</sup> <a name="vpc_config" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.vpcConfig"></a>

```python
vpc_config: AppstreamAppBlockBuilderVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig">AppstreamAppBlockBuilderVpcConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#vpc_config AppstreamAppBlockBuilder#vpc_config}.

---

##### `access_endpoints`<sup>Optional</sup> <a name="access_endpoints" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.accessEndpoints"></a>

```python
access_endpoints: IResolvable | typing.List[AppstreamAppBlockBuilderAccessEndpoints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints">AppstreamAppBlockBuilderAccessEndpoints</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#access_endpoints AppstreamAppBlockBuilder#access_endpoints}.

---

##### `app_block_arns`<sup>Optional</sup> <a name="app_block_arns" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.appBlockArns"></a>

```python
app_block_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#app_block_arns AppstreamAppBlockBuilder#app_block_arns}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#description AppstreamAppBlockBuilder#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#display_name AppstreamAppBlockBuilder#display_name}.

---

##### `enable_default_internet_access`<sup>Optional</sup> <a name="enable_default_internet_access" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.enableDefaultInternetAccess"></a>

```python
enable_default_internet_access: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#enable_default_internet_access AppstreamAppBlockBuilder#enable_default_internet_access}.

---

##### `iam_role_arn`<sup>Optional</sup> <a name="iam_role_arn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#iam_role_arn AppstreamAppBlockBuilder#iam_role_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[AppstreamAppBlockBuilderTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags">AppstreamAppBlockBuilderTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#tags AppstreamAppBlockBuilder#tags}.

---

### AppstreamAppBlockBuilderTags <a name="AppstreamAppBlockBuilderTags" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_app_block_builder

appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#key AppstreamAppBlockBuilder#key}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#value AppstreamAppBlockBuilder#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#key AppstreamAppBlockBuilder#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#value AppstreamAppBlockBuilder#value}.

---

### AppstreamAppBlockBuilderVpcConfig <a name="AppstreamAppBlockBuilderVpcConfig" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_app_block_builder

appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig(
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#security_group_ids AppstreamAppBlockBuilder#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#subnet_ids AppstreamAppBlockBuilder#subnet_ids}. |

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#security_group_ids AppstreamAppBlockBuilder#security_group_ids}.

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/appstream_app_block_builder#subnet_ids AppstreamAppBlockBuilder#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppstreamAppBlockBuilderAccessEndpointsList <a name="AppstreamAppBlockBuilderAccessEndpointsList" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_app_block_builder

appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppstreamAppBlockBuilderAccessEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints">AppstreamAppBlockBuilderAccessEndpoints</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AppstreamAppBlockBuilderAccessEndpoints]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints">AppstreamAppBlockBuilderAccessEndpoints</a>]

---


### AppstreamAppBlockBuilderAccessEndpointsOutputReference <a name="AppstreamAppBlockBuilderAccessEndpointsOutputReference" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_app_block_builder

appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.resetEndpointType">reset_endpoint_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.resetVpceId">reset_vpce_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_endpoint_type` <a name="reset_endpoint_type" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.resetEndpointType"></a>

```python
def reset_endpoint_type() -> None
```

##### `reset_vpce_id` <a name="reset_vpce_id" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.resetVpceId"></a>

```python
def reset_vpce_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.endpointTypeInput">endpoint_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.vpceIdInput">vpce_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.endpointType">endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.vpceId">vpce_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints">AppstreamAppBlockBuilderAccessEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint_type_input`<sup>Optional</sup> <a name="endpoint_type_input" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.endpointTypeInput"></a>

```python
endpoint_type_input: str
```

- *Type:* str

---

##### `vpce_id_input`<sup>Optional</sup> <a name="vpce_id_input" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.vpceIdInput"></a>

```python
vpce_id_input: str
```

- *Type:* str

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

---

##### `vpce_id`<sup>Required</sup> <a name="vpce_id" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.vpceId"></a>

```python
vpce_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppstreamAppBlockBuilderAccessEndpoints
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderAccessEndpoints">AppstreamAppBlockBuilderAccessEndpoints</a>

---


### AppstreamAppBlockBuilderTagsList <a name="AppstreamAppBlockBuilderTagsList" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_app_block_builder

appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppstreamAppBlockBuilderTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags">AppstreamAppBlockBuilderTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AppstreamAppBlockBuilderTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags">AppstreamAppBlockBuilderTags</a>]

---


### AppstreamAppBlockBuilderTagsOutputReference <a name="AppstreamAppBlockBuilderTagsOutputReference" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_app_block_builder

appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags">AppstreamAppBlockBuilderTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppstreamAppBlockBuilderTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderTags">AppstreamAppBlockBuilderTags</a>

---


### AppstreamAppBlockBuilderVpcConfigOutputReference <a name="AppstreamAppBlockBuilderVpcConfigOutputReference" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_app_block_builder

appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig">AppstreamAppBlockBuilderVpcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppstreamAppBlockBuilderVpcConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlockBuilder.AppstreamAppBlockBuilderVpcConfig">AppstreamAppBlockBuilderVpcConfig</a>

---



