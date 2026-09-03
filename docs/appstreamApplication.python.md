# `appstreamApplication` Submodule <a name="`appstreamApplication` Submodule" id="@cdktn/provider-awscc.appstreamApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppstreamApplication <a name="AppstreamApplication" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application awscc_appstream_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_application

appstreamApplication.AppstreamApplication(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app_block_arn: str,
  icon_s3_location: AppstreamApplicationIconS3Location,
  instance_families: typing.List[str],
  launch_path: str,
  name: str,
  platforms: typing.List[str],
  attributes_to_delete: typing.List[str] = None,
  description: str = None,
  display_name: str = None,
  launch_parameters: str = None,
  tags: IResolvable | typing.List[AppstreamApplicationTags] = None,
  working_directory: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.appBlockArn">app_block_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#app_block_arn AppstreamApplication#app_block_arn}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.iconS3Location">icon_s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3Location">AppstreamApplicationIconS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#icon_s3_location AppstreamApplication#icon_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.instanceFamilies">instance_families</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#instance_families AppstreamApplication#instance_families}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.launchPath">launch_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#launch_path AppstreamApplication#launch_path}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#name AppstreamApplication#name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.platforms">platforms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#platforms AppstreamApplication#platforms}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.attributesToDelete">attributes_to_delete</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#attributes_to_delete AppstreamApplication#attributes_to_delete}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#description AppstreamApplication#description}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#display_name AppstreamApplication#display_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.launchParameters">launch_parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#launch_parameters AppstreamApplication#launch_parameters}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags">AppstreamApplicationTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#tags AppstreamApplication#tags}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.workingDirectory">working_directory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#working_directory AppstreamApplication#working_directory}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app_block_arn`<sup>Required</sup> <a name="app_block_arn" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.appBlockArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#app_block_arn AppstreamApplication#app_block_arn}.

---

##### `icon_s3_location`<sup>Required</sup> <a name="icon_s3_location" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.iconS3Location"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3Location">AppstreamApplicationIconS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#icon_s3_location AppstreamApplication#icon_s3_location}.

---

##### `instance_families`<sup>Required</sup> <a name="instance_families" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.instanceFamilies"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#instance_families AppstreamApplication#instance_families}.

---

##### `launch_path`<sup>Required</sup> <a name="launch_path" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.launchPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#launch_path AppstreamApplication#launch_path}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#name AppstreamApplication#name}.

---

##### `platforms`<sup>Required</sup> <a name="platforms" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.platforms"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#platforms AppstreamApplication#platforms}.

---

##### `attributes_to_delete`<sup>Optional</sup> <a name="attributes_to_delete" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.attributesToDelete"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#attributes_to_delete AppstreamApplication#attributes_to_delete}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#description AppstreamApplication#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#display_name AppstreamApplication#display_name}.

---

##### `launch_parameters`<sup>Optional</sup> <a name="launch_parameters" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.launchParameters"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#launch_parameters AppstreamApplication#launch_parameters}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags">AppstreamApplicationTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#tags AppstreamApplication#tags}.

---

##### `working_directory`<sup>Optional</sup> <a name="working_directory" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.Initializer.parameter.workingDirectory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#working_directory AppstreamApplication#working_directory}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.putIconS3Location">put_icon_s3_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.resetAttributesToDelete">reset_attributes_to_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.resetLaunchParameters">reset_launch_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.resetWorkingDirectory">reset_working_directory</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_icon_s3_location` <a name="put_icon_s3_location" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.putIconS3Location"></a>

```python
def put_icon_s3_location(
  s3_bucket: str,
  s3_key: str
) -> None
```

###### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.putIconS3Location.parameter.s3Bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#s3_bucket AppstreamApplication#s3_bucket}.

---

###### `s3_key`<sup>Required</sup> <a name="s3_key" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.putIconS3Location.parameter.s3Key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#s3_key AppstreamApplication#s3_key}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[AppstreamApplicationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags">AppstreamApplicationTags</a>]

---

##### `reset_attributes_to_delete` <a name="reset_attributes_to_delete" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.resetAttributesToDelete"></a>

```python
def reset_attributes_to_delete() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_launch_parameters` <a name="reset_launch_parameters" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.resetLaunchParameters"></a>

```python
def reset_launch_parameters() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_working_directory` <a name="reset_working_directory" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.resetWorkingDirectory"></a>

```python
def reset_working_directory() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AppstreamApplication resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.isConstruct"></a>

```python
from cdktn_provider_awscc import appstream_application

appstreamApplication.AppstreamApplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.isTerraformElement"></a>

```python
from cdktn_provider_awscc import appstream_application

appstreamApplication.AppstreamApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.isTerraformResource"></a>

```python
from cdktn_provider_awscc import appstream_application

appstreamApplication.AppstreamApplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import appstream_application

appstreamApplication.AppstreamApplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AppstreamApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppstreamApplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppstreamApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppstreamApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.iconS3Location">icon_s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference">AppstreamApplicationIconS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList">AppstreamApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.appBlockArnInput">app_block_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.attributesToDeleteInput">attributes_to_delete_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.iconS3LocationInput">icon_s3_location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3Location">AppstreamApplicationIconS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.instanceFamiliesInput">instance_families_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.launchParametersInput">launch_parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.launchPathInput">launch_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.platformsInput">platforms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags">AppstreamApplicationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.workingDirectoryInput">working_directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.appBlockArn">app_block_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.attributesToDelete">attributes_to_delete</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.instanceFamilies">instance_families</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.launchParameters">launch_parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.launchPath">launch_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.platforms">platforms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.workingDirectory">working_directory</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `icon_s3_location`<sup>Required</sup> <a name="icon_s3_location" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.iconS3Location"></a>

```python
icon_s3_location: AppstreamApplicationIconS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference">AppstreamApplicationIconS3LocationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.tags"></a>

```python
tags: AppstreamApplicationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList">AppstreamApplicationTagsList</a>

---

##### `app_block_arn_input`<sup>Optional</sup> <a name="app_block_arn_input" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.appBlockArnInput"></a>

```python
app_block_arn_input: str
```

- *Type:* str

---

##### `attributes_to_delete_input`<sup>Optional</sup> <a name="attributes_to_delete_input" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.attributesToDeleteInput"></a>

```python
attributes_to_delete_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `icon_s3_location_input`<sup>Optional</sup> <a name="icon_s3_location_input" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.iconS3LocationInput"></a>

```python
icon_s3_location_input: IResolvable | AppstreamApplicationIconS3Location
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3Location">AppstreamApplicationIconS3Location</a>

---

##### `instance_families_input`<sup>Optional</sup> <a name="instance_families_input" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.instanceFamiliesInput"></a>

```python
instance_families_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `launch_parameters_input`<sup>Optional</sup> <a name="launch_parameters_input" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.launchParametersInput"></a>

```python
launch_parameters_input: str
```

- *Type:* str

---

##### `launch_path_input`<sup>Optional</sup> <a name="launch_path_input" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.launchPathInput"></a>

```python
launch_path_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `platforms_input`<sup>Optional</sup> <a name="platforms_input" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.platformsInput"></a>

```python
platforms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[AppstreamApplicationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags">AppstreamApplicationTags</a>]

---

##### `working_directory_input`<sup>Optional</sup> <a name="working_directory_input" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.workingDirectoryInput"></a>

```python
working_directory_input: str
```

- *Type:* str

---

##### `app_block_arn`<sup>Required</sup> <a name="app_block_arn" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.appBlockArn"></a>

```python
app_block_arn: str
```

- *Type:* str

---

##### `attributes_to_delete`<sup>Required</sup> <a name="attributes_to_delete" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.attributesToDelete"></a>

```python
attributes_to_delete: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `instance_families`<sup>Required</sup> <a name="instance_families" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.instanceFamilies"></a>

```python
instance_families: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `launch_parameters`<sup>Required</sup> <a name="launch_parameters" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.launchParameters"></a>

```python
launch_parameters: str
```

- *Type:* str

---

##### `launch_path`<sup>Required</sup> <a name="launch_path" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.launchPath"></a>

```python
launch_path: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `platforms`<sup>Required</sup> <a name="platforms" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.platforms"></a>

```python
platforms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `working_directory`<sup>Required</sup> <a name="working_directory" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.workingDirectory"></a>

```python
working_directory: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppstreamApplicationConfig <a name="AppstreamApplicationConfig" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_application

appstreamApplication.AppstreamApplicationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app_block_arn: str,
  icon_s3_location: AppstreamApplicationIconS3Location,
  instance_families: typing.List[str],
  launch_path: str,
  name: str,
  platforms: typing.List[str],
  attributes_to_delete: typing.List[str] = None,
  description: str = None,
  display_name: str = None,
  launch_parameters: str = None,
  tags: IResolvable | typing.List[AppstreamApplicationTags] = None,
  working_directory: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.appBlockArn">app_block_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#app_block_arn AppstreamApplication#app_block_arn}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.iconS3Location">icon_s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3Location">AppstreamApplicationIconS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#icon_s3_location AppstreamApplication#icon_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.instanceFamilies">instance_families</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#instance_families AppstreamApplication#instance_families}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.launchPath">launch_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#launch_path AppstreamApplication#launch_path}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#name AppstreamApplication#name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.platforms">platforms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#platforms AppstreamApplication#platforms}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.attributesToDelete">attributes_to_delete</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#attributes_to_delete AppstreamApplication#attributes_to_delete}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#description AppstreamApplication#description}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#display_name AppstreamApplication#display_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.launchParameters">launch_parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#launch_parameters AppstreamApplication#launch_parameters}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags">AppstreamApplicationTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#tags AppstreamApplication#tags}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.workingDirectory">working_directory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#working_directory AppstreamApplication#working_directory}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app_block_arn`<sup>Required</sup> <a name="app_block_arn" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.appBlockArn"></a>

```python
app_block_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#app_block_arn AppstreamApplication#app_block_arn}.

---

##### `icon_s3_location`<sup>Required</sup> <a name="icon_s3_location" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.iconS3Location"></a>

```python
icon_s3_location: AppstreamApplicationIconS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3Location">AppstreamApplicationIconS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#icon_s3_location AppstreamApplication#icon_s3_location}.

---

##### `instance_families`<sup>Required</sup> <a name="instance_families" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.instanceFamilies"></a>

```python
instance_families: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#instance_families AppstreamApplication#instance_families}.

---

##### `launch_path`<sup>Required</sup> <a name="launch_path" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.launchPath"></a>

```python
launch_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#launch_path AppstreamApplication#launch_path}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#name AppstreamApplication#name}.

---

##### `platforms`<sup>Required</sup> <a name="platforms" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.platforms"></a>

```python
platforms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#platforms AppstreamApplication#platforms}.

---

##### `attributes_to_delete`<sup>Optional</sup> <a name="attributes_to_delete" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.attributesToDelete"></a>

```python
attributes_to_delete: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#attributes_to_delete AppstreamApplication#attributes_to_delete}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#description AppstreamApplication#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#display_name AppstreamApplication#display_name}.

---

##### `launch_parameters`<sup>Optional</sup> <a name="launch_parameters" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.launchParameters"></a>

```python
launch_parameters: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#launch_parameters AppstreamApplication#launch_parameters}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[AppstreamApplicationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags">AppstreamApplicationTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#tags AppstreamApplication#tags}.

---

##### `working_directory`<sup>Optional</sup> <a name="working_directory" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationConfig.property.workingDirectory"></a>

```python
working_directory: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#working_directory AppstreamApplication#working_directory}.

---

### AppstreamApplicationIconS3Location <a name="AppstreamApplicationIconS3Location" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3Location.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_application

appstreamApplication.AppstreamApplicationIconS3Location(
  s3_bucket: str,
  s3_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3Location.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#s3_bucket AppstreamApplication#s3_bucket}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3Location.property.s3Key">s3_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#s3_key AppstreamApplication#s3_key}. |

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3Location.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#s3_bucket AppstreamApplication#s3_bucket}.

---

##### `s3_key`<sup>Required</sup> <a name="s3_key" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3Location.property.s3Key"></a>

```python
s3_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#s3_key AppstreamApplication#s3_key}.

---

### AppstreamApplicationTags <a name="AppstreamApplicationTags" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_application

appstreamApplication.AppstreamApplicationTags(
  key: str = None,
  tag_key: str = None,
  tag_value: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#key AppstreamApplication#key}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags.property.tagKey">tag_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#tag_key AppstreamApplication#tag_key}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags.property.tagValue">tag_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#tag_value AppstreamApplication#tag_value}. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#value AppstreamApplication#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#key AppstreamApplication#key}.

---

##### `tag_key`<sup>Optional</sup> <a name="tag_key" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#tag_key AppstreamApplication#tag_key}.

---

##### `tag_value`<sup>Optional</sup> <a name="tag_value" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#tag_value AppstreamApplication#tag_value}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_application#value AppstreamApplication#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppstreamApplicationIconS3LocationOutputReference <a name="AppstreamApplicationIconS3LocationOutputReference" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_application

appstreamApplication.AppstreamApplicationIconS3LocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.property.s3BucketInput">s3_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.property.s3KeyInput">s3_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.property.s3Key">s3_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3Location">AppstreamApplicationIconS3Location</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_bucket_input`<sup>Optional</sup> <a name="s3_bucket_input" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.property.s3BucketInput"></a>

```python
s3_bucket_input: str
```

- *Type:* str

---

##### `s3_key_input`<sup>Optional</sup> <a name="s3_key_input" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.property.s3KeyInput"></a>

```python
s3_key_input: str
```

- *Type:* str

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

---

##### `s3_key`<sup>Required</sup> <a name="s3_key" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.property.s3Key"></a>

```python
s3_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3LocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppstreamApplicationIconS3Location
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationIconS3Location">AppstreamApplicationIconS3Location</a>

---


### AppstreamApplicationTagsList <a name="AppstreamApplicationTagsList" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_application

appstreamApplication.AppstreamApplicationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppstreamApplicationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags">AppstreamApplicationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AppstreamApplicationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags">AppstreamApplicationTags</a>]

---


### AppstreamApplicationTagsOutputReference <a name="AppstreamApplicationTagsOutputReference" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_application

appstreamApplication.AppstreamApplicationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.resetTagKey">reset_tag_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.resetTagValue">reset_tag_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_tag_key` <a name="reset_tag_key" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.resetTagKey"></a>

```python
def reset_tag_key() -> None
```

##### `reset_tag_value` <a name="reset_tag_value" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.resetTagValue"></a>

```python
def reset_tag_value() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.tagKeyInput">tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.tagValueInput">tag_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.tagValue">tag_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags">AppstreamApplicationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `tag_key_input`<sup>Optional</sup> <a name="tag_key_input" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.tagKeyInput"></a>

```python
tag_key_input: str
```

- *Type:* str

---

##### `tag_value_input`<sup>Optional</sup> <a name="tag_value_input" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.tagValueInput"></a>

```python
tag_value_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `tag_value`<sup>Required</sup> <a name="tag_value" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppstreamApplicationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamApplication.AppstreamApplicationTags">AppstreamApplicationTags</a>

---



