# `iotsitewiseAsset` Submodule <a name="`iotsitewiseAsset` Submodule" id="@cdktn/provider-awscc.iotsitewiseAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotsitewiseAsset <a name="IotsitewiseAsset" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_asset awscc_iotsitewise_asset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_asset

iotsitewiseAsset.IotsitewiseAsset(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  asset_model_id: str,
  asset_name: str,
  asset_description: str = None,
  asset_external_id: str = None,
  asset_hierarchies: IResolvable | typing.List[IotsitewiseAssetAssetHierarchies] = None,
  asset_properties: IResolvable | typing.List[IotsitewiseAssetAssetProperties] = None,
  tags: IResolvable | typing.List[IotsitewiseAssetTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.assetModelId">asset_model_id</a></code> | <code>str</code> | The ID of the asset model from which to create the asset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.assetName">asset_name</a></code> | <code>str</code> | A unique, friendly name for the asset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.assetDescription">asset_description</a></code> | <code>str</code> | A description for the asset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.assetExternalId">asset_external_id</a></code> | <code>str</code> | The External ID of the asset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.assetHierarchies">asset_hierarchies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_asset#asset_hierarchies IotsitewiseAsset#asset_hierarchies}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.assetProperties">asset_properties</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_asset#asset_properties IotsitewiseAsset#asset_properties}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a>]</code> | A list of key-value pairs that contain metadata for the asset. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `asset_model_id`<sup>Required</sup> <a name="asset_model_id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.assetModelId"></a>

- *Type:* str

The ID of the asset model from which to create the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_asset#asset_model_id IotsitewiseAsset#asset_model_id}

---

##### `asset_name`<sup>Required</sup> <a name="asset_name" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.assetName"></a>

- *Type:* str

A unique, friendly name for the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_asset#asset_name IotsitewiseAsset#asset_name}

---

##### `asset_description`<sup>Optional</sup> <a name="asset_description" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.assetDescription"></a>

- *Type:* str

A description for the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_asset#asset_description IotsitewiseAsset#asset_description}

---

##### `asset_external_id`<sup>Optional</sup> <a name="asset_external_id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.assetExternalId"></a>

- *Type:* str

The External ID of the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_asset#asset_external_id IotsitewiseAsset#asset_external_id}

---

##### `asset_hierarchies`<sup>Optional</sup> <a name="asset_hierarchies" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.assetHierarchies"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_asset#asset_hierarchies IotsitewiseAsset#asset_hierarchies}.

---

##### `asset_properties`<sup>Optional</sup> <a name="asset_properties" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.assetProperties"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_asset#asset_properties IotsitewiseAsset#asset_properties}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a>]

A list of key-value pairs that contain metadata for the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_asset#tags IotsitewiseAsset#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.putAssetHierarchies">put_asset_hierarchies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.putAssetProperties">put_asset_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetAssetDescription">reset_asset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetAssetExternalId">reset_asset_external_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetAssetHierarchies">reset_asset_hierarchies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetAssetProperties">reset_asset_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_asset_hierarchies` <a name="put_asset_hierarchies" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.putAssetHierarchies"></a>

```python
def put_asset_hierarchies(
  value: IResolvable | typing.List[IotsitewiseAssetAssetHierarchies]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.putAssetHierarchies.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a>]

---

##### `put_asset_properties` <a name="put_asset_properties" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.putAssetProperties"></a>

```python
def put_asset_properties(
  value: IResolvable | typing.List[IotsitewiseAssetAssetProperties]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.putAssetProperties.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[IotsitewiseAssetTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a>]

---

##### `reset_asset_description` <a name="reset_asset_description" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetAssetDescription"></a>

```python
def reset_asset_description() -> None
```

##### `reset_asset_external_id` <a name="reset_asset_external_id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetAssetExternalId"></a>

```python
def reset_asset_external_id() -> None
```

##### `reset_asset_hierarchies` <a name="reset_asset_hierarchies" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetAssetHierarchies"></a>

```python
def reset_asset_hierarchies() -> None
```

##### `reset_asset_properties` <a name="reset_asset_properties" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetAssetProperties"></a>

```python
def reset_asset_properties() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IotsitewiseAsset resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.isConstruct"></a>

```python
from cdktn_provider_awscc import iotsitewise_asset

iotsitewiseAsset.IotsitewiseAsset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.isTerraformElement"></a>

```python
from cdktn_provider_awscc import iotsitewise_asset

iotsitewiseAsset.IotsitewiseAsset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.isTerraformResource"></a>

```python
from cdktn_provider_awscc import iotsitewise_asset

iotsitewiseAsset.IotsitewiseAsset.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import iotsitewise_asset

iotsitewiseAsset.IotsitewiseAsset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IotsitewiseAsset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IotsitewiseAsset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IotsitewiseAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotsitewiseAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetArn">asset_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetHierarchies">asset_hierarchies</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList">IotsitewiseAssetAssetHierarchiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetId">asset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetProperties">asset_properties</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList">IotsitewiseAssetAssetPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList">IotsitewiseAssetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetDescriptionInput">asset_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetExternalIdInput">asset_external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetHierarchiesInput">asset_hierarchies_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetModelIdInput">asset_model_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetNameInput">asset_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetPropertiesInput">asset_properties_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetDescription">asset_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetExternalId">asset_external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetModelId">asset_model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetName">asset_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `asset_arn`<sup>Required</sup> <a name="asset_arn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetArn"></a>

```python
asset_arn: str
```

- *Type:* str

---

##### `asset_hierarchies`<sup>Required</sup> <a name="asset_hierarchies" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetHierarchies"></a>

```python
asset_hierarchies: IotsitewiseAssetAssetHierarchiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList">IotsitewiseAssetAssetHierarchiesList</a>

---

##### `asset_id`<sup>Required</sup> <a name="asset_id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetId"></a>

```python
asset_id: str
```

- *Type:* str

---

##### `asset_properties`<sup>Required</sup> <a name="asset_properties" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetProperties"></a>

```python
asset_properties: IotsitewiseAssetAssetPropertiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList">IotsitewiseAssetAssetPropertiesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.tags"></a>

```python
tags: IotsitewiseAssetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList">IotsitewiseAssetTagsList</a>

---

##### `asset_description_input`<sup>Optional</sup> <a name="asset_description_input" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetDescriptionInput"></a>

```python
asset_description_input: str
```

- *Type:* str

---

##### `asset_external_id_input`<sup>Optional</sup> <a name="asset_external_id_input" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetExternalIdInput"></a>

```python
asset_external_id_input: str
```

- *Type:* str

---

##### `asset_hierarchies_input`<sup>Optional</sup> <a name="asset_hierarchies_input" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetHierarchiesInput"></a>

```python
asset_hierarchies_input: IResolvable | typing.List[IotsitewiseAssetAssetHierarchies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a>]

---

##### `asset_model_id_input`<sup>Optional</sup> <a name="asset_model_id_input" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetModelIdInput"></a>

```python
asset_model_id_input: str
```

- *Type:* str

---

##### `asset_name_input`<sup>Optional</sup> <a name="asset_name_input" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetNameInput"></a>

```python
asset_name_input: str
```

- *Type:* str

---

##### `asset_properties_input`<sup>Optional</sup> <a name="asset_properties_input" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetPropertiesInput"></a>

```python
asset_properties_input: IResolvable | typing.List[IotsitewiseAssetAssetProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[IotsitewiseAssetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a>]

---

##### `asset_description`<sup>Required</sup> <a name="asset_description" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetDescription"></a>

```python
asset_description: str
```

- *Type:* str

---

##### `asset_external_id`<sup>Required</sup> <a name="asset_external_id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetExternalId"></a>

```python
asset_external_id: str
```

- *Type:* str

---

##### `asset_model_id`<sup>Required</sup> <a name="asset_model_id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetModelId"></a>

```python
asset_model_id: str
```

- *Type:* str

---

##### `asset_name`<sup>Required</sup> <a name="asset_name" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.assetName"></a>

```python
asset_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAsset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotsitewiseAssetAssetHierarchies <a name="IotsitewiseAssetAssetHierarchies" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_asset

iotsitewiseAsset.IotsitewiseAssetAssetHierarchies(
  child_asset_id: str = None,
  external_id: str = None,
  id: str = None,
  logical_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies.property.childAssetId">child_asset_id</a></code> | <code>str</code> | The ID of the child asset to be associated. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies.property.externalId">external_id</a></code> | <code>str</code> | String-friendly customer provided external ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies.property.id">id</a></code> | <code>str</code> | Customer provided actual UUID for property. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies.property.logicalId">logical_id</a></code> | <code>str</code> | The LogicalID of a hierarchy in the parent asset's model. |

---

##### `child_asset_id`<sup>Optional</sup> <a name="child_asset_id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies.property.childAssetId"></a>

```python
child_asset_id: str
```

- *Type:* str

The ID of the child asset to be associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_asset#child_asset_id IotsitewiseAsset#child_asset_id}

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

String-friendly customer provided external ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_asset#external_id IotsitewiseAsset#external_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies.property.id"></a>

```python
id: str
```

- *Type:* str

Customer provided actual UUID for property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_asset#id IotsitewiseAsset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logical_id`<sup>Optional</sup> <a name="logical_id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies.property.logicalId"></a>

```python
logical_id: str
```

- *Type:* str

The LogicalID of a hierarchy in the parent asset's model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_asset#logical_id IotsitewiseAsset#logical_id}

---

### IotsitewiseAssetAssetProperties <a name="IotsitewiseAssetAssetProperties" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_asset

iotsitewiseAsset.IotsitewiseAssetAssetProperties(
  alias: str = None,
  external_id: str = None,
  id: str = None,
  logical_id: str = None,
  notification_state: str = None,
  unit: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.alias">alias</a></code> | <code>str</code> | The property alias that identifies the property. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.externalId">external_id</a></code> | <code>str</code> | String-friendly customer provided external ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.id">id</a></code> | <code>str</code> | Customer provided actual UUID for property. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.logicalId">logical_id</a></code> | <code>str</code> | Customer provided ID for property. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.notificationState">notification_state</a></code> | <code>str</code> | The MQTT notification state (ENABLED or DISABLED) for this asset property. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.unit">unit</a></code> | <code>str</code> | The unit of measure (such as Newtons or RPM) of the asset property. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.alias"></a>

```python
alias: str
```

- *Type:* str

The property alias that identifies the property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_asset#alias IotsitewiseAsset#alias}

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

String-friendly customer provided external ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_asset#external_id IotsitewiseAsset#external_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.id"></a>

```python
id: str
```

- *Type:* str

Customer provided actual UUID for property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_asset#id IotsitewiseAsset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logical_id`<sup>Optional</sup> <a name="logical_id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.logicalId"></a>

```python
logical_id: str
```

- *Type:* str

Customer provided ID for property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_asset#logical_id IotsitewiseAsset#logical_id}

---

##### `notification_state`<sup>Optional</sup> <a name="notification_state" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.notificationState"></a>

```python
notification_state: str
```

- *Type:* str

The MQTT notification state (ENABLED or DISABLED) for this asset property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_asset#notification_state IotsitewiseAsset#notification_state}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties.property.unit"></a>

```python
unit: str
```

- *Type:* str

The unit of measure (such as Newtons or RPM) of the asset property.

If you don't specify a value for this parameter, the service uses the value of the assetModelProperty in the asset model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_asset#unit IotsitewiseAsset#unit}

---

### IotsitewiseAssetConfig <a name="IotsitewiseAssetConfig" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_asset

iotsitewiseAsset.IotsitewiseAssetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  asset_model_id: str,
  asset_name: str,
  asset_description: str = None,
  asset_external_id: str = None,
  asset_hierarchies: IResolvable | typing.List[IotsitewiseAssetAssetHierarchies] = None,
  asset_properties: IResolvable | typing.List[IotsitewiseAssetAssetProperties] = None,
  tags: IResolvable | typing.List[IotsitewiseAssetTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetModelId">asset_model_id</a></code> | <code>str</code> | The ID of the asset model from which to create the asset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetName">asset_name</a></code> | <code>str</code> | A unique, friendly name for the asset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetDescription">asset_description</a></code> | <code>str</code> | A description for the asset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetExternalId">asset_external_id</a></code> | <code>str</code> | The External ID of the asset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetHierarchies">asset_hierarchies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_asset#asset_hierarchies IotsitewiseAsset#asset_hierarchies}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetProperties">asset_properties</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_asset#asset_properties IotsitewiseAsset#asset_properties}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a>]</code> | A list of key-value pairs that contain metadata for the asset. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `asset_model_id`<sup>Required</sup> <a name="asset_model_id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetModelId"></a>

```python
asset_model_id: str
```

- *Type:* str

The ID of the asset model from which to create the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_asset#asset_model_id IotsitewiseAsset#asset_model_id}

---

##### `asset_name`<sup>Required</sup> <a name="asset_name" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetName"></a>

```python
asset_name: str
```

- *Type:* str

A unique, friendly name for the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_asset#asset_name IotsitewiseAsset#asset_name}

---

##### `asset_description`<sup>Optional</sup> <a name="asset_description" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetDescription"></a>

```python
asset_description: str
```

- *Type:* str

A description for the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_asset#asset_description IotsitewiseAsset#asset_description}

---

##### `asset_external_id`<sup>Optional</sup> <a name="asset_external_id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetExternalId"></a>

```python
asset_external_id: str
```

- *Type:* str

The External ID of the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_asset#asset_external_id IotsitewiseAsset#asset_external_id}

---

##### `asset_hierarchies`<sup>Optional</sup> <a name="asset_hierarchies" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetHierarchies"></a>

```python
asset_hierarchies: IResolvable | typing.List[IotsitewiseAssetAssetHierarchies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_asset#asset_hierarchies IotsitewiseAsset#asset_hierarchies}.

---

##### `asset_properties`<sup>Optional</sup> <a name="asset_properties" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.assetProperties"></a>

```python
asset_properties: IResolvable | typing.List[IotsitewiseAssetAssetProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_asset#asset_properties IotsitewiseAsset#asset_properties}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[IotsitewiseAssetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a>]

A list of key-value pairs that contain metadata for the asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_asset#tags IotsitewiseAsset#tags}

---

### IotsitewiseAssetTags <a name="IotsitewiseAssetTags" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_asset

iotsitewiseAsset.IotsitewiseAssetTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_asset#key IotsitewiseAsset#key}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_asset#value IotsitewiseAsset#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_asset#key IotsitewiseAsset#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_asset#value IotsitewiseAsset#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotsitewiseAssetAssetHierarchiesList <a name="IotsitewiseAssetAssetHierarchiesList" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_asset

iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotsitewiseAssetAssetHierarchiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotsitewiseAssetAssetHierarchies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a>]

---


### IotsitewiseAssetAssetHierarchiesOutputReference <a name="IotsitewiseAssetAssetHierarchiesOutputReference" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_asset

iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resetChildAssetId">reset_child_asset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resetExternalId">reset_external_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resetLogicalId">reset_logical_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_child_asset_id` <a name="reset_child_asset_id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resetChildAssetId"></a>

```python
def reset_child_asset_id() -> None
```

##### `reset_external_id` <a name="reset_external_id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resetExternalId"></a>

```python
def reset_external_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_logical_id` <a name="reset_logical_id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.resetLogicalId"></a>

```python
def reset_logical_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.childAssetIdInput">child_asset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.logicalIdInput">logical_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.childAssetId">child_asset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.logicalId">logical_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `child_asset_id_input`<sup>Optional</sup> <a name="child_asset_id_input" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.childAssetIdInput"></a>

```python
child_asset_id_input: str
```

- *Type:* str

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `logical_id_input`<sup>Optional</sup> <a name="logical_id_input" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.logicalIdInput"></a>

```python
logical_id_input: str
```

- *Type:* str

---

##### `child_asset_id`<sup>Required</sup> <a name="child_asset_id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.childAssetId"></a>

```python
child_asset_id: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `logical_id`<sup>Required</sup> <a name="logical_id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.logicalId"></a>

```python
logical_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotsitewiseAssetAssetHierarchies
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetHierarchies">IotsitewiseAssetAssetHierarchies</a>

---


### IotsitewiseAssetAssetPropertiesList <a name="IotsitewiseAssetAssetPropertiesList" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_asset

iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotsitewiseAssetAssetPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotsitewiseAssetAssetProperties]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a>]

---


### IotsitewiseAssetAssetPropertiesOutputReference <a name="IotsitewiseAssetAssetPropertiesOutputReference" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_asset

iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetExternalId">reset_external_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetLogicalId">reset_logical_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetNotificationState">reset_notification_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetUnit">reset_unit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_alias` <a name="reset_alias" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_external_id` <a name="reset_external_id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetExternalId"></a>

```python
def reset_external_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_logical_id` <a name="reset_logical_id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetLogicalId"></a>

```python
def reset_logical_id() -> None
```

##### `reset_notification_state` <a name="reset_notification_state" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetNotificationState"></a>

```python
def reset_notification_state() -> None
```

##### `reset_unit` <a name="reset_unit" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.resetUnit"></a>

```python
def reset_unit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.logicalIdInput">logical_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.notificationStateInput">notification_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.unitInput">unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.logicalId">logical_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.notificationState">notification_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `logical_id_input`<sup>Optional</sup> <a name="logical_id_input" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.logicalIdInput"></a>

```python
logical_id_input: str
```

- *Type:* str

---

##### `notification_state_input`<sup>Optional</sup> <a name="notification_state_input" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.notificationStateInput"></a>

```python
notification_state_input: str
```

- *Type:* str

---

##### `unit_input`<sup>Optional</sup> <a name="unit_input" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.unitInput"></a>

```python
unit_input: str
```

- *Type:* str

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `logical_id`<sup>Required</sup> <a name="logical_id" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.logicalId"></a>

```python
logical_id: str
```

- *Type:* str

---

##### `notification_state`<sup>Required</sup> <a name="notification_state" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.notificationState"></a>

```python
notification_state: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotsitewiseAssetAssetProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetAssetProperties">IotsitewiseAssetAssetProperties</a>

---


### IotsitewiseAssetTagsList <a name="IotsitewiseAssetTagsList" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_asset

iotsitewiseAsset.IotsitewiseAssetTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotsitewiseAssetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotsitewiseAssetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a>]

---


### IotsitewiseAssetTagsOutputReference <a name="IotsitewiseAssetTagsOutputReference" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_asset

iotsitewiseAsset.IotsitewiseAssetTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotsitewiseAssetTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseAsset.IotsitewiseAssetTags">IotsitewiseAssetTags</a>

---



