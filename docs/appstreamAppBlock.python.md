# `appstreamAppBlock` Submodule <a name="`appstreamAppBlock` Submodule" id="@cdktn/provider-awscc.appstreamAppBlock"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppstreamAppBlock <a name="AppstreamAppBlock" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block awscc_appstream_app_block}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_app_block

appstreamAppBlock.AppstreamAppBlock(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  source_s3_location: AppstreamAppBlockSourceS3Location,
  description: str = None,
  display_name: str = None,
  packaging_type: str = None,
  post_setup_script_details: AppstreamAppBlockPostSetupScriptDetails = None,
  setup_script_details: AppstreamAppBlockSetupScriptDetails = None,
  tags: IResolvable | typing.List[AppstreamAppBlockTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#name AppstreamAppBlock#name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.sourceS3Location">source_s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location">AppstreamAppBlockSourceS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#source_s3_location AppstreamAppBlock#source_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#description AppstreamAppBlock#description}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#display_name AppstreamAppBlock#display_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.packagingType">packaging_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#packaging_type AppstreamAppBlock#packaging_type}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.postSetupScriptDetails">post_setup_script_details</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails">AppstreamAppBlockPostSetupScriptDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#post_setup_script_details AppstreamAppBlock#post_setup_script_details}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.setupScriptDetails">setup_script_details</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails">AppstreamAppBlockSetupScriptDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#setup_script_details AppstreamAppBlock#setup_script_details}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#tags AppstreamAppBlock#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#name AppstreamAppBlock#name}.

---

##### `source_s3_location`<sup>Required</sup> <a name="source_s3_location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.sourceS3Location"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location">AppstreamAppBlockSourceS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#source_s3_location AppstreamAppBlock#source_s3_location}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#description AppstreamAppBlock#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#display_name AppstreamAppBlock#display_name}.

---

##### `packaging_type`<sup>Optional</sup> <a name="packaging_type" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.packagingType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#packaging_type AppstreamAppBlock#packaging_type}.

---

##### `post_setup_script_details`<sup>Optional</sup> <a name="post_setup_script_details" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.postSetupScriptDetails"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails">AppstreamAppBlockPostSetupScriptDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#post_setup_script_details AppstreamAppBlock#post_setup_script_details}.

---

##### `setup_script_details`<sup>Optional</sup> <a name="setup_script_details" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.setupScriptDetails"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails">AppstreamAppBlockSetupScriptDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#setup_script_details AppstreamAppBlock#setup_script_details}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#tags AppstreamAppBlock#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putPostSetupScriptDetails">put_post_setup_script_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putSetupScriptDetails">put_setup_script_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putSourceS3Location">put_source_s3_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetPackagingType">reset_packaging_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetPostSetupScriptDetails">reset_post_setup_script_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetSetupScriptDetails">reset_setup_script_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_post_setup_script_details` <a name="put_post_setup_script_details" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putPostSetupScriptDetails"></a>

```python
def put_post_setup_script_details(
  executable_parameters: str = None,
  executable_path: str = None,
  script_s3_location: AppstreamAppBlockPostSetupScriptDetailsScriptS3Location = None,
  timeout_in_seconds: typing.Union[int, float] = None
) -> None
```

###### `executable_parameters`<sup>Optional</sup> <a name="executable_parameters" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putPostSetupScriptDetails.parameter.executableParameters"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#executable_parameters AppstreamAppBlock#executable_parameters}.

---

###### `executable_path`<sup>Optional</sup> <a name="executable_path" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putPostSetupScriptDetails.parameter.executablePath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#executable_path AppstreamAppBlock#executable_path}.

---

###### `script_s3_location`<sup>Optional</sup> <a name="script_s3_location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putPostSetupScriptDetails.parameter.scriptS3Location"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location">AppstreamAppBlockPostSetupScriptDetailsScriptS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#script_s3_location AppstreamAppBlock#script_s3_location}.

---

###### `timeout_in_seconds`<sup>Optional</sup> <a name="timeout_in_seconds" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putPostSetupScriptDetails.parameter.timeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#timeout_in_seconds AppstreamAppBlock#timeout_in_seconds}.

---

##### `put_setup_script_details` <a name="put_setup_script_details" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putSetupScriptDetails"></a>

```python
def put_setup_script_details(
  executable_parameters: str = None,
  executable_path: str = None,
  script_s3_location: AppstreamAppBlockSetupScriptDetailsScriptS3Location = None,
  timeout_in_seconds: typing.Union[int, float] = None
) -> None
```

###### `executable_parameters`<sup>Optional</sup> <a name="executable_parameters" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putSetupScriptDetails.parameter.executableParameters"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#executable_parameters AppstreamAppBlock#executable_parameters}.

---

###### `executable_path`<sup>Optional</sup> <a name="executable_path" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putSetupScriptDetails.parameter.executablePath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#executable_path AppstreamAppBlock#executable_path}.

---

###### `script_s3_location`<sup>Optional</sup> <a name="script_s3_location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putSetupScriptDetails.parameter.scriptS3Location"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location">AppstreamAppBlockSetupScriptDetailsScriptS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#script_s3_location AppstreamAppBlock#script_s3_location}.

---

###### `timeout_in_seconds`<sup>Optional</sup> <a name="timeout_in_seconds" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putSetupScriptDetails.parameter.timeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#timeout_in_seconds AppstreamAppBlock#timeout_in_seconds}.

---

##### `put_source_s3_location` <a name="put_source_s3_location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putSourceS3Location"></a>

```python
def put_source_s3_location(
  s3_bucket: str,
  s3_key: str = None
) -> None
```

###### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putSourceS3Location.parameter.s3Bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#s3_bucket AppstreamAppBlock#s3_bucket}.

---

###### `s3_key`<sup>Optional</sup> <a name="s3_key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putSourceS3Location.parameter.s3Key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#s3_key AppstreamAppBlock#s3_key}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[AppstreamAppBlockTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_packaging_type` <a name="reset_packaging_type" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetPackagingType"></a>

```python
def reset_packaging_type() -> None
```

##### `reset_post_setup_script_details` <a name="reset_post_setup_script_details" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetPostSetupScriptDetails"></a>

```python
def reset_post_setup_script_details() -> None
```

##### `reset_setup_script_details` <a name="reset_setup_script_details" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetSetupScriptDetails"></a>

```python
def reset_setup_script_details() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AppstreamAppBlock resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isConstruct"></a>

```python
from cdktn_provider_awscc import appstream_app_block

appstreamAppBlock.AppstreamAppBlock.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isTerraformElement"></a>

```python
from cdktn_provider_awscc import appstream_app_block

appstreamAppBlock.AppstreamAppBlock.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isTerraformResource"></a>

```python
from cdktn_provider_awscc import appstream_app_block

appstreamAppBlock.AppstreamAppBlock.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import appstream_app_block

appstreamAppBlock.AppstreamAppBlock.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AppstreamAppBlock resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppstreamAppBlock to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppstreamAppBlock that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppstreamAppBlock to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.postSetupScriptDetails">post_setup_script_details</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference">AppstreamAppBlockPostSetupScriptDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.setupScriptDetails">setup_script_details</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference">AppstreamAppBlockSetupScriptDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.sourceS3Location">source_s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference">AppstreamAppBlockSourceS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList">AppstreamAppBlockTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.packagingTypeInput">packaging_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.postSetupScriptDetailsInput">post_setup_script_details_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails">AppstreamAppBlockPostSetupScriptDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.setupScriptDetailsInput">setup_script_details_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails">AppstreamAppBlockSetupScriptDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.sourceS3LocationInput">source_s3_location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location">AppstreamAppBlockSourceS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.packagingType">packaging_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `post_setup_script_details`<sup>Required</sup> <a name="post_setup_script_details" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.postSetupScriptDetails"></a>

```python
post_setup_script_details: AppstreamAppBlockPostSetupScriptDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference">AppstreamAppBlockPostSetupScriptDetailsOutputReference</a>

---

##### `setup_script_details`<sup>Required</sup> <a name="setup_script_details" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.setupScriptDetails"></a>

```python
setup_script_details: AppstreamAppBlockSetupScriptDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference">AppstreamAppBlockSetupScriptDetailsOutputReference</a>

---

##### `source_s3_location`<sup>Required</sup> <a name="source_s3_location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.sourceS3Location"></a>

```python
source_s3_location: AppstreamAppBlockSourceS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference">AppstreamAppBlockSourceS3LocationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.tags"></a>

```python
tags: AppstreamAppBlockTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList">AppstreamAppBlockTagsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `packaging_type_input`<sup>Optional</sup> <a name="packaging_type_input" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.packagingTypeInput"></a>

```python
packaging_type_input: str
```

- *Type:* str

---

##### `post_setup_script_details_input`<sup>Optional</sup> <a name="post_setup_script_details_input" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.postSetupScriptDetailsInput"></a>

```python
post_setup_script_details_input: IResolvable | AppstreamAppBlockPostSetupScriptDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails">AppstreamAppBlockPostSetupScriptDetails</a>

---

##### `setup_script_details_input`<sup>Optional</sup> <a name="setup_script_details_input" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.setupScriptDetailsInput"></a>

```python
setup_script_details_input: IResolvable | AppstreamAppBlockSetupScriptDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails">AppstreamAppBlockSetupScriptDetails</a>

---

##### `source_s3_location_input`<sup>Optional</sup> <a name="source_s3_location_input" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.sourceS3LocationInput"></a>

```python
source_s3_location_input: IResolvable | AppstreamAppBlockSourceS3Location
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location">AppstreamAppBlockSourceS3Location</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[AppstreamAppBlockTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `packaging_type`<sup>Required</sup> <a name="packaging_type" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.packagingType"></a>

```python
packaging_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppstreamAppBlockConfig <a name="AppstreamAppBlockConfig" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_app_block

appstreamAppBlock.AppstreamAppBlockConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  source_s3_location: AppstreamAppBlockSourceS3Location,
  description: str = None,
  display_name: str = None,
  packaging_type: str = None,
  post_setup_script_details: AppstreamAppBlockPostSetupScriptDetails = None,
  setup_script_details: AppstreamAppBlockSetupScriptDetails = None,
  tags: IResolvable | typing.List[AppstreamAppBlockTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#name AppstreamAppBlock#name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.sourceS3Location">source_s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location">AppstreamAppBlockSourceS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#source_s3_location AppstreamAppBlock#source_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#description AppstreamAppBlock#description}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#display_name AppstreamAppBlock#display_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.packagingType">packaging_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#packaging_type AppstreamAppBlock#packaging_type}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.postSetupScriptDetails">post_setup_script_details</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails">AppstreamAppBlockPostSetupScriptDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#post_setup_script_details AppstreamAppBlock#post_setup_script_details}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.setupScriptDetails">setup_script_details</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails">AppstreamAppBlockSetupScriptDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#setup_script_details AppstreamAppBlock#setup_script_details}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#tags AppstreamAppBlock#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#name AppstreamAppBlock#name}.

---

##### `source_s3_location`<sup>Required</sup> <a name="source_s3_location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.sourceS3Location"></a>

```python
source_s3_location: AppstreamAppBlockSourceS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location">AppstreamAppBlockSourceS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#source_s3_location AppstreamAppBlock#source_s3_location}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#description AppstreamAppBlock#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#display_name AppstreamAppBlock#display_name}.

---

##### `packaging_type`<sup>Optional</sup> <a name="packaging_type" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.packagingType"></a>

```python
packaging_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#packaging_type AppstreamAppBlock#packaging_type}.

---

##### `post_setup_script_details`<sup>Optional</sup> <a name="post_setup_script_details" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.postSetupScriptDetails"></a>

```python
post_setup_script_details: AppstreamAppBlockPostSetupScriptDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails">AppstreamAppBlockPostSetupScriptDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#post_setup_script_details AppstreamAppBlock#post_setup_script_details}.

---

##### `setup_script_details`<sup>Optional</sup> <a name="setup_script_details" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.setupScriptDetails"></a>

```python
setup_script_details: AppstreamAppBlockSetupScriptDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails">AppstreamAppBlockSetupScriptDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#setup_script_details AppstreamAppBlock#setup_script_details}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[AppstreamAppBlockTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#tags AppstreamAppBlock#tags}.

---

### AppstreamAppBlockPostSetupScriptDetails <a name="AppstreamAppBlockPostSetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_app_block

appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails(
  executable_parameters: str = None,
  executable_path: str = None,
  script_s3_location: AppstreamAppBlockPostSetupScriptDetailsScriptS3Location = None,
  timeout_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.executableParameters">executable_parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#executable_parameters AppstreamAppBlock#executable_parameters}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.executablePath">executable_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#executable_path AppstreamAppBlock#executable_path}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.scriptS3Location">script_s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location">AppstreamAppBlockPostSetupScriptDetailsScriptS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#script_s3_location AppstreamAppBlock#script_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#timeout_in_seconds AppstreamAppBlock#timeout_in_seconds}. |

---

##### `executable_parameters`<sup>Optional</sup> <a name="executable_parameters" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.executableParameters"></a>

```python
executable_parameters: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#executable_parameters AppstreamAppBlock#executable_parameters}.

---

##### `executable_path`<sup>Optional</sup> <a name="executable_path" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.executablePath"></a>

```python
executable_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#executable_path AppstreamAppBlock#executable_path}.

---

##### `script_s3_location`<sup>Optional</sup> <a name="script_s3_location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.scriptS3Location"></a>

```python
script_s3_location: AppstreamAppBlockPostSetupScriptDetailsScriptS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location">AppstreamAppBlockPostSetupScriptDetailsScriptS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#script_s3_location AppstreamAppBlock#script_s3_location}.

---

##### `timeout_in_seconds`<sup>Optional</sup> <a name="timeout_in_seconds" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#timeout_in_seconds AppstreamAppBlock#timeout_in_seconds}.

---

### AppstreamAppBlockPostSetupScriptDetailsScriptS3Location <a name="AppstreamAppBlockPostSetupScriptDetailsScriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_app_block

appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location(
  s3_bucket: str = None,
  s3_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#s3_bucket AppstreamAppBlock#s3_bucket}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location.property.s3Key">s3_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#s3_key AppstreamAppBlock#s3_key}. |

---

##### `s3_bucket`<sup>Optional</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#s3_bucket AppstreamAppBlock#s3_bucket}.

---

##### `s3_key`<sup>Optional</sup> <a name="s3_key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location.property.s3Key"></a>

```python
s3_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#s3_key AppstreamAppBlock#s3_key}.

---

### AppstreamAppBlockSetupScriptDetails <a name="AppstreamAppBlockSetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_app_block

appstreamAppBlock.AppstreamAppBlockSetupScriptDetails(
  executable_parameters: str = None,
  executable_path: str = None,
  script_s3_location: AppstreamAppBlockSetupScriptDetailsScriptS3Location = None,
  timeout_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.executableParameters">executable_parameters</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#executable_parameters AppstreamAppBlock#executable_parameters}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.executablePath">executable_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#executable_path AppstreamAppBlock#executable_path}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.scriptS3Location">script_s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location">AppstreamAppBlockSetupScriptDetailsScriptS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#script_s3_location AppstreamAppBlock#script_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#timeout_in_seconds AppstreamAppBlock#timeout_in_seconds}. |

---

##### `executable_parameters`<sup>Optional</sup> <a name="executable_parameters" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.executableParameters"></a>

```python
executable_parameters: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#executable_parameters AppstreamAppBlock#executable_parameters}.

---

##### `executable_path`<sup>Optional</sup> <a name="executable_path" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.executablePath"></a>

```python
executable_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#executable_path AppstreamAppBlock#executable_path}.

---

##### `script_s3_location`<sup>Optional</sup> <a name="script_s3_location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.scriptS3Location"></a>

```python
script_s3_location: AppstreamAppBlockSetupScriptDetailsScriptS3Location
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location">AppstreamAppBlockSetupScriptDetailsScriptS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#script_s3_location AppstreamAppBlock#script_s3_location}.

---

##### `timeout_in_seconds`<sup>Optional</sup> <a name="timeout_in_seconds" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#timeout_in_seconds AppstreamAppBlock#timeout_in_seconds}.

---

### AppstreamAppBlockSetupScriptDetailsScriptS3Location <a name="AppstreamAppBlockSetupScriptDetailsScriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_app_block

appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location(
  s3_bucket: str = None,
  s3_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#s3_bucket AppstreamAppBlock#s3_bucket}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location.property.s3Key">s3_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#s3_key AppstreamAppBlock#s3_key}. |

---

##### `s3_bucket`<sup>Optional</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#s3_bucket AppstreamAppBlock#s3_bucket}.

---

##### `s3_key`<sup>Optional</sup> <a name="s3_key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location.property.s3Key"></a>

```python
s3_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#s3_key AppstreamAppBlock#s3_key}.

---

### AppstreamAppBlockSourceS3Location <a name="AppstreamAppBlockSourceS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_app_block

appstreamAppBlock.AppstreamAppBlockSourceS3Location(
  s3_bucket: str,
  s3_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#s3_bucket AppstreamAppBlock#s3_bucket}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location.property.s3Key">s3_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#s3_key AppstreamAppBlock#s3_key}. |

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#s3_bucket AppstreamAppBlock#s3_bucket}.

---

##### `s3_key`<sup>Optional</sup> <a name="s3_key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location.property.s3Key"></a>

```python
s3_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#s3_key AppstreamAppBlock#s3_key}.

---

### AppstreamAppBlockTags <a name="AppstreamAppBlockTags" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_app_block

appstreamAppBlock.AppstreamAppBlockTags(
  key: str = None,
  tag_key: str = None,
  tag_value: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#key AppstreamAppBlock#key}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.tagKey">tag_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#tag_key AppstreamAppBlock#tag_key}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.tagValue">tag_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#tag_value AppstreamAppBlock#tag_value}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#value AppstreamAppBlock#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#key AppstreamAppBlock#key}.

---

##### `tag_key`<sup>Optional</sup> <a name="tag_key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#tag_key AppstreamAppBlock#tag_key}.

---

##### `tag_value`<sup>Optional</sup> <a name="tag_value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#tag_value AppstreamAppBlock#tag_value}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#value AppstreamAppBlock#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppstreamAppBlockPostSetupScriptDetailsOutputReference <a name="AppstreamAppBlockPostSetupScriptDetailsOutputReference" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_app_block

appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.putScriptS3Location">put_script_s3_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetExecutableParameters">reset_executable_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetExecutablePath">reset_executable_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetScriptS3Location">reset_script_s3_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetTimeoutInSeconds">reset_timeout_in_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_script_s3_location` <a name="put_script_s3_location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.putScriptS3Location"></a>

```python
def put_script_s3_location(
  s3_bucket: str = None,
  s3_key: str = None
) -> None
```

###### `s3_bucket`<sup>Optional</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.putScriptS3Location.parameter.s3Bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#s3_bucket AppstreamAppBlock#s3_bucket}.

---

###### `s3_key`<sup>Optional</sup> <a name="s3_key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.putScriptS3Location.parameter.s3Key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#s3_key AppstreamAppBlock#s3_key}.

---

##### `reset_executable_parameters` <a name="reset_executable_parameters" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetExecutableParameters"></a>

```python
def reset_executable_parameters() -> None
```

##### `reset_executable_path` <a name="reset_executable_path" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetExecutablePath"></a>

```python
def reset_executable_path() -> None
```

##### `reset_script_s3_location` <a name="reset_script_s3_location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetScriptS3Location"></a>

```python
def reset_script_s3_location() -> None
```

##### `reset_timeout_in_seconds` <a name="reset_timeout_in_seconds" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetTimeoutInSeconds"></a>

```python
def reset_timeout_in_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.scriptS3Location">script_s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference">AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executableParametersInput">executable_parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executablePathInput">executable_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.scriptS3LocationInput">script_s3_location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location">AppstreamAppBlockPostSetupScriptDetailsScriptS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.timeoutInSecondsInput">timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executableParameters">executable_parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executablePath">executable_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails">AppstreamAppBlockPostSetupScriptDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `script_s3_location`<sup>Required</sup> <a name="script_s3_location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.scriptS3Location"></a>

```python
script_s3_location: AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference">AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference</a>

---

##### `executable_parameters_input`<sup>Optional</sup> <a name="executable_parameters_input" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executableParametersInput"></a>

```python
executable_parameters_input: str
```

- *Type:* str

---

##### `executable_path_input`<sup>Optional</sup> <a name="executable_path_input" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executablePathInput"></a>

```python
executable_path_input: str
```

- *Type:* str

---

##### `script_s3_location_input`<sup>Optional</sup> <a name="script_s3_location_input" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.scriptS3LocationInput"></a>

```python
script_s3_location_input: IResolvable | AppstreamAppBlockPostSetupScriptDetailsScriptS3Location
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location">AppstreamAppBlockPostSetupScriptDetailsScriptS3Location</a>

---

##### `timeout_in_seconds_input`<sup>Optional</sup> <a name="timeout_in_seconds_input" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.timeoutInSecondsInput"></a>

```python
timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `executable_parameters`<sup>Required</sup> <a name="executable_parameters" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executableParameters"></a>

```python
executable_parameters: str
```

- *Type:* str

---

##### `executable_path`<sup>Required</sup> <a name="executable_path" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executablePath"></a>

```python
executable_path: str
```

- *Type:* str

---

##### `timeout_in_seconds`<sup>Required</sup> <a name="timeout_in_seconds" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppstreamAppBlockPostSetupScriptDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails">AppstreamAppBlockPostSetupScriptDetails</a>

---


### AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference <a name="AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_app_block

appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.resetS3Bucket">reset_s3_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.resetS3Key">reset_s3_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_s3_bucket` <a name="reset_s3_bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.resetS3Bucket"></a>

```python
def reset_s3_bucket() -> None
```

##### `reset_s3_key` <a name="reset_s3_key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.resetS3Key"></a>

```python
def reset_s3_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3BucketInput">s3_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3KeyInput">s3_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3Key">s3_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location">AppstreamAppBlockPostSetupScriptDetailsScriptS3Location</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_bucket_input`<sup>Optional</sup> <a name="s3_bucket_input" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3BucketInput"></a>

```python
s3_bucket_input: str
```

- *Type:* str

---

##### `s3_key_input`<sup>Optional</sup> <a name="s3_key_input" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3KeyInput"></a>

```python
s3_key_input: str
```

- *Type:* str

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

---

##### `s3_key`<sup>Required</sup> <a name="s3_key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3Key"></a>

```python
s3_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppstreamAppBlockPostSetupScriptDetailsScriptS3Location
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location">AppstreamAppBlockPostSetupScriptDetailsScriptS3Location</a>

---


### AppstreamAppBlockSetupScriptDetailsOutputReference <a name="AppstreamAppBlockSetupScriptDetailsOutputReference" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_app_block

appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.putScriptS3Location">put_script_s3_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetExecutableParameters">reset_executable_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetExecutablePath">reset_executable_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetScriptS3Location">reset_script_s3_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetTimeoutInSeconds">reset_timeout_in_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_script_s3_location` <a name="put_script_s3_location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.putScriptS3Location"></a>

```python
def put_script_s3_location(
  s3_bucket: str = None,
  s3_key: str = None
) -> None
```

###### `s3_bucket`<sup>Optional</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.putScriptS3Location.parameter.s3Bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#s3_bucket AppstreamAppBlock#s3_bucket}.

---

###### `s3_key`<sup>Optional</sup> <a name="s3_key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.putScriptS3Location.parameter.s3Key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#s3_key AppstreamAppBlock#s3_key}.

---

##### `reset_executable_parameters` <a name="reset_executable_parameters" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetExecutableParameters"></a>

```python
def reset_executable_parameters() -> None
```

##### `reset_executable_path` <a name="reset_executable_path" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetExecutablePath"></a>

```python
def reset_executable_path() -> None
```

##### `reset_script_s3_location` <a name="reset_script_s3_location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetScriptS3Location"></a>

```python
def reset_script_s3_location() -> None
```

##### `reset_timeout_in_seconds` <a name="reset_timeout_in_seconds" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetTimeoutInSeconds"></a>

```python
def reset_timeout_in_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.scriptS3Location">script_s3_location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference">AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executableParametersInput">executable_parameters_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executablePathInput">executable_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.scriptS3LocationInput">script_s3_location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location">AppstreamAppBlockSetupScriptDetailsScriptS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.timeoutInSecondsInput">timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executableParameters">executable_parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executablePath">executable_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails">AppstreamAppBlockSetupScriptDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `script_s3_location`<sup>Required</sup> <a name="script_s3_location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.scriptS3Location"></a>

```python
script_s3_location: AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference">AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference</a>

---

##### `executable_parameters_input`<sup>Optional</sup> <a name="executable_parameters_input" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executableParametersInput"></a>

```python
executable_parameters_input: str
```

- *Type:* str

---

##### `executable_path_input`<sup>Optional</sup> <a name="executable_path_input" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executablePathInput"></a>

```python
executable_path_input: str
```

- *Type:* str

---

##### `script_s3_location_input`<sup>Optional</sup> <a name="script_s3_location_input" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.scriptS3LocationInput"></a>

```python
script_s3_location_input: IResolvable | AppstreamAppBlockSetupScriptDetailsScriptS3Location
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location">AppstreamAppBlockSetupScriptDetailsScriptS3Location</a>

---

##### `timeout_in_seconds_input`<sup>Optional</sup> <a name="timeout_in_seconds_input" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.timeoutInSecondsInput"></a>

```python
timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `executable_parameters`<sup>Required</sup> <a name="executable_parameters" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executableParameters"></a>

```python
executable_parameters: str
```

- *Type:* str

---

##### `executable_path`<sup>Required</sup> <a name="executable_path" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executablePath"></a>

```python
executable_path: str
```

- *Type:* str

---

##### `timeout_in_seconds`<sup>Required</sup> <a name="timeout_in_seconds" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppstreamAppBlockSetupScriptDetails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails">AppstreamAppBlockSetupScriptDetails</a>

---


### AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference <a name="AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_app_block

appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.resetS3Bucket">reset_s3_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.resetS3Key">reset_s3_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_s3_bucket` <a name="reset_s3_bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.resetS3Bucket"></a>

```python
def reset_s3_bucket() -> None
```

##### `reset_s3_key` <a name="reset_s3_key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.resetS3Key"></a>

```python
def reset_s3_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3BucketInput">s3_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3KeyInput">s3_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3Key">s3_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location">AppstreamAppBlockSetupScriptDetailsScriptS3Location</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_bucket_input`<sup>Optional</sup> <a name="s3_bucket_input" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3BucketInput"></a>

```python
s3_bucket_input: str
```

- *Type:* str

---

##### `s3_key_input`<sup>Optional</sup> <a name="s3_key_input" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3KeyInput"></a>

```python
s3_key_input: str
```

- *Type:* str

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

---

##### `s3_key`<sup>Required</sup> <a name="s3_key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3Key"></a>

```python
s3_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppstreamAppBlockSetupScriptDetailsScriptS3Location
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location">AppstreamAppBlockSetupScriptDetailsScriptS3Location</a>

---


### AppstreamAppBlockSourceS3LocationOutputReference <a name="AppstreamAppBlockSourceS3LocationOutputReference" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_app_block

appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.resetS3Key">reset_s3_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_s3_key` <a name="reset_s3_key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.resetS3Key"></a>

```python
def reset_s3_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3BucketInput">s3_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3KeyInput">s3_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3Key">s3_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location">AppstreamAppBlockSourceS3Location</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3_bucket_input`<sup>Optional</sup> <a name="s3_bucket_input" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3BucketInput"></a>

```python
s3_bucket_input: str
```

- *Type:* str

---

##### `s3_key_input`<sup>Optional</sup> <a name="s3_key_input" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3KeyInput"></a>

```python
s3_key_input: str
```

- *Type:* str

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

---

##### `s3_key`<sup>Required</sup> <a name="s3_key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3Key"></a>

```python
s3_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppstreamAppBlockSourceS3Location
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location">AppstreamAppBlockSourceS3Location</a>

---


### AppstreamAppBlockTagsList <a name="AppstreamAppBlockTagsList" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_app_block

appstreamAppBlock.AppstreamAppBlockTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppstreamAppBlockTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AppstreamAppBlockTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a>]

---


### AppstreamAppBlockTagsOutputReference <a name="AppstreamAppBlockTagsOutputReference" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import appstream_app_block

appstreamAppBlock.AppstreamAppBlockTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetTagKey">reset_tag_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetTagValue">reset_tag_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_tag_key` <a name="reset_tag_key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetTagKey"></a>

```python
def reset_tag_key() -> None
```

##### `reset_tag_value` <a name="reset_tag_value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetTagValue"></a>

```python
def reset_tag_value() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagKeyInput">tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagValueInput">tag_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagValue">tag_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `tag_key_input`<sup>Optional</sup> <a name="tag_key_input" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagKeyInput"></a>

```python
tag_key_input: str
```

- *Type:* str

---

##### `tag_value_input`<sup>Optional</sup> <a name="tag_value_input" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagValueInput"></a>

```python
tag_value_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `tag_value`<sup>Required</sup> <a name="tag_value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AppstreamAppBlockTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a>

---



