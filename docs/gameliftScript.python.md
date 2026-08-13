# `gameliftScript` Submodule <a name="`gameliftScript` Submodule" id="@cdktn/provider-awscc.gameliftScript"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameliftScript <a name="GameliftScript" id="@cdktn/provider-awscc.gameliftScript.GameliftScript"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_script awscc_gamelift_script}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_script

gameliftScript.GameliftScript(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  storage_location: GameliftScriptStorageLocation,
  name: str = None,
  node_js_version: str = None,
  tags: IResolvable | typing.List[GameliftScriptTags] = None,
  version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.Initializer.parameter.storageLocation">storage_location</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocation">GameliftScriptStorageLocation</a></code> | The location of the Amazon S3 bucket where a zipped file containing your Realtime scripts is stored. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.Initializer.parameter.name">name</a></code> | <code>str</code> | A descriptive label that is associated with a script. Script names do not need to be unique. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.Initializer.parameter.nodeJsVersion">node_js_version</a></code> | <code>str</code> | The Node.js version used for execution of the Realtime script. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTags">GameliftScriptTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.Initializer.parameter.version">version</a></code> | <code>str</code> | The version that is associated with a script. Version strings do not need to be unique. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `storage_location`<sup>Required</sup> <a name="storage_location" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.Initializer.parameter.storageLocation"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocation">GameliftScriptStorageLocation</a>

The location of the Amazon S3 bucket where a zipped file containing your Realtime scripts is stored.

The storage location must specify the Amazon S3 bucket name, the zip file name (the "key"), and a role ARN that allows Amazon GameLift to access the Amazon S3 storage location. The S3 bucket must be in the same Region where you want to create a new script. By default, Amazon GameLift uploads the latest version of the zip file; if you have S3 object versioning turned on, you can use the ObjectVersion parameter to specify an earlier version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_script#storage_location GameliftScript#storage_location}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.Initializer.parameter.name"></a>

- *Type:* str

A descriptive label that is associated with a script. Script names do not need to be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_script#name GameliftScript#name}

---

##### `node_js_version`<sup>Optional</sup> <a name="node_js_version" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.Initializer.parameter.nodeJsVersion"></a>

- *Type:* str

The Node.js version used for execution of the Realtime script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_script#node_js_version GameliftScript#node_js_version}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTags">GameliftScriptTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_script#tags GameliftScript#tags}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.Initializer.parameter.version"></a>

- *Type:* str

The version that is associated with a script. Version strings do not need to be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_script#version GameliftScript#version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.putStorageLocation">put_storage_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.resetNodeJsVersion">reset_node_js_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_storage_location` <a name="put_storage_location" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.putStorageLocation"></a>

```python
def put_storage_location(
  bucket: str,
  key: str,
  role_arn: str,
  object_version: str = None
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.putStorageLocation.parameter.bucket"></a>

- *Type:* str

An Amazon S3 bucket identifier. This is the name of the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_script#bucket GameliftScript#bucket}

---

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.putStorageLocation.parameter.key"></a>

- *Type:* str

The name of the zip file that contains the script files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_script#key GameliftScript#key}

---

###### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.putStorageLocation.parameter.roleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) for an IAM role that allows Amazon GameLift to access the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_script#role_arn GameliftScript#role_arn}

---

###### `object_version`<sup>Optional</sup> <a name="object_version" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.putStorageLocation.parameter.objectVersion"></a>

- *Type:* str

The version of the file, if object versioning is turned on for the bucket.

Amazon GameLift uses this information when retrieving files from your S3 bucket. To retrieve a specific version of the file, provide an object version. To retrieve the latest version of the file, do not set this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_script#object_version GameliftScript#object_version}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[GameliftScriptTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTags">GameliftScriptTags</a>]

---

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_node_js_version` <a name="reset_node_js_version" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.resetNodeJsVersion"></a>

```python
def reset_node_js_version() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a GameliftScript resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.isConstruct"></a>

```python
from cdktn_provider_awscc import gamelift_script

gameliftScript.GameliftScript.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.isTerraformElement"></a>

```python
from cdktn_provider_awscc import gamelift_script

gameliftScript.GameliftScript.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.isTerraformResource"></a>

```python
from cdktn_provider_awscc import gamelift_script

gameliftScript.GameliftScript.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import gamelift_script

gameliftScript.GameliftScript.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a GameliftScript resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GameliftScript to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GameliftScript that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_script#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GameliftScript to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.property.scriptId">script_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.property.sizeOnDisk">size_on_disk</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.property.storageLocation">storage_location</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference">GameliftScriptStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsList">GameliftScriptTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.property.nodeJsVersionInput">node_js_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.property.storageLocationInput">storage_location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocation">GameliftScriptStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTags">GameliftScriptTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.property.nodeJsVersion">node_js_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `script_id`<sup>Required</sup> <a name="script_id" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.property.scriptId"></a>

```python
script_id: str
```

- *Type:* str

---

##### `size_on_disk`<sup>Required</sup> <a name="size_on_disk" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.property.sizeOnDisk"></a>

```python
size_on_disk: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_location`<sup>Required</sup> <a name="storage_location" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.property.storageLocation"></a>

```python
storage_location: GameliftScriptStorageLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference">GameliftScriptStorageLocationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.property.tags"></a>

```python
tags: GameliftScriptTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsList">GameliftScriptTagsList</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_js_version_input`<sup>Optional</sup> <a name="node_js_version_input" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.property.nodeJsVersionInput"></a>

```python
node_js_version_input: str
```

- *Type:* str

---

##### `storage_location_input`<sup>Optional</sup> <a name="storage_location_input" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.property.storageLocationInput"></a>

```python
storage_location_input: IResolvable | GameliftScriptStorageLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocation">GameliftScriptStorageLocation</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[GameliftScriptTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTags">GameliftScriptTags</a>]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_js_version`<sup>Required</sup> <a name="node_js_version" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.property.nodeJsVersion"></a>

```python
node_js_version: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScript.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.gameliftScript.GameliftScript.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GameliftScriptConfig <a name="GameliftScriptConfig" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptConfig.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_script

gameliftScript.GameliftScriptConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  storage_location: GameliftScriptStorageLocation,
  name: str = None,
  node_js_version: str = None,
  tags: IResolvable | typing.List[GameliftScriptTags] = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptConfig.property.storageLocation">storage_location</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocation">GameliftScriptStorageLocation</a></code> | The location of the Amazon S3 bucket where a zipped file containing your Realtime scripts is stored. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptConfig.property.name">name</a></code> | <code>str</code> | A descriptive label that is associated with a script. Script names do not need to be unique. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptConfig.property.nodeJsVersion">node_js_version</a></code> | <code>str</code> | The Node.js version used for execution of the Realtime script. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTags">GameliftScriptTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptConfig.property.version">version</a></code> | <code>str</code> | The version that is associated with a script. Version strings do not need to be unique. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `storage_location`<sup>Required</sup> <a name="storage_location" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptConfig.property.storageLocation"></a>

```python
storage_location: GameliftScriptStorageLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocation">GameliftScriptStorageLocation</a>

The location of the Amazon S3 bucket where a zipped file containing your Realtime scripts is stored.

The storage location must specify the Amazon S3 bucket name, the zip file name (the "key"), and a role ARN that allows Amazon GameLift to access the Amazon S3 storage location. The S3 bucket must be in the same Region where you want to create a new script. By default, Amazon GameLift uploads the latest version of the zip file; if you have S3 object versioning turned on, you can use the ObjectVersion parameter to specify an earlier version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_script#storage_location GameliftScript#storage_location}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A descriptive label that is associated with a script. Script names do not need to be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_script#name GameliftScript#name}

---

##### `node_js_version`<sup>Optional</sup> <a name="node_js_version" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptConfig.property.nodeJsVersion"></a>

```python
node_js_version: str
```

- *Type:* str

The Node.js version used for execution of the Realtime script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_script#node_js_version GameliftScript#node_js_version}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[GameliftScriptTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTags">GameliftScriptTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_script#tags GameliftScript#tags}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptConfig.property.version"></a>

```python
version: str
```

- *Type:* str

The version that is associated with a script. Version strings do not need to be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_script#version GameliftScript#version}

---

### GameliftScriptStorageLocation <a name="GameliftScriptStorageLocation" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocation.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_script

gameliftScript.GameliftScriptStorageLocation(
  bucket: str,
  key: str,
  role_arn: str,
  object_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocation.property.bucket">bucket</a></code> | <code>str</code> | An Amazon S3 bucket identifier. This is the name of the S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocation.property.key">key</a></code> | <code>str</code> | The name of the zip file that contains the script files. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocation.property.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) for an IAM role that allows Amazon GameLift to access the S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocation.property.objectVersion">object_version</a></code> | <code>str</code> | The version of the file, if object versioning is turned on for the bucket. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocation.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

An Amazon S3 bucket identifier. This is the name of the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_script#bucket GameliftScript#bucket}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocation.property.key"></a>

```python
key: str
```

- *Type:* str

The name of the zip file that contains the script files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_script#key GameliftScript#key}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocation.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) for an IAM role that allows Amazon GameLift to access the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_script#role_arn GameliftScript#role_arn}

---

##### `object_version`<sup>Optional</sup> <a name="object_version" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocation.property.objectVersion"></a>

```python
object_version: str
```

- *Type:* str

The version of the file, if object versioning is turned on for the bucket.

Amazon GameLift uses this information when retrieving files from your S3 bucket. To retrieve a specific version of the file, provide an object version. To retrieve the latest version of the file, do not set this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_script#object_version GameliftScript#object_version}

---

### GameliftScriptTags <a name="GameliftScriptTags" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTags.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_script

gameliftScript.GameliftScriptTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTags.property.value">value</a></code> | <code>str</code> | The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_script#key GameliftScript#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/gamelift_script#value GameliftScript#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GameliftScriptStorageLocationOutputReference <a name="GameliftScriptStorageLocationOutputReference" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_script

gameliftScript.GameliftScriptStorageLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.resetObjectVersion">reset_object_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_object_version` <a name="reset_object_version" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.resetObjectVersion"></a>

```python
def reset_object_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.property.objectVersionInput">object_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.property.objectVersion">object_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocation">GameliftScriptStorageLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `object_version_input`<sup>Optional</sup> <a name="object_version_input" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.property.objectVersionInput"></a>

```python
object_version_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `object_version`<sup>Required</sup> <a name="object_version" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.property.objectVersion"></a>

```python
object_version: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftScriptStorageLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptStorageLocation">GameliftScriptStorageLocation</a>

---


### GameliftScriptTagsList <a name="GameliftScriptTagsList" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_script

gameliftScript.GameliftScriptTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GameliftScriptTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTags">GameliftScriptTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[GameliftScriptTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTags">GameliftScriptTags</a>]

---


### GameliftScriptTagsOutputReference <a name="GameliftScriptTagsOutputReference" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import gamelift_script

gameliftScript.GameliftScriptTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTags">GameliftScriptTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.gameliftScript.GameliftScriptTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | GameliftScriptTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.gameliftScript.GameliftScriptTags">GameliftScriptTags</a>

---



