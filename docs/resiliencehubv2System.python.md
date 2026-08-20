# `resiliencehubv2System` Submodule <a name="`resiliencehubv2System` Submodule" id="@cdktn/provider-awscc.resiliencehubv2System"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Resiliencehubv2System <a name="Resiliencehubv2System" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_system awscc_resiliencehubv2_system}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_system

resiliencehubv2System.Resiliencehubv2System(
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
  description: str = None,
  kms_key_id: str = None,
  sharing_enabled: bool | IResolvable = None,
  tags: IResolvable | typing.List[Resiliencehubv2SystemTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the system. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the system. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The KMS key ID for encrypting system data. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.Initializer.parameter.sharingEnabled">sharing_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the system is enabled to be shared with other members of the Organization. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTags">Resiliencehubv2SystemTags</a>]</code> | Tags assigned to the system. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.Initializer.parameter.name"></a>

- *Type:* str

The name of the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_system#name Resiliencehubv2System#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.Initializer.parameter.description"></a>

- *Type:* str

The description of the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_system#description Resiliencehubv2System#description}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

The KMS key ID for encrypting system data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_system#kms_key_id Resiliencehubv2System#kms_key_id}

---

##### `sharing_enabled`<sup>Optional</sup> <a name="sharing_enabled" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.Initializer.parameter.sharingEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the system is enabled to be shared with other members of the Organization.

Only applicable if the system owner is a management account or delegated admin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_system#sharing_enabled Resiliencehubv2System#sharing_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTags">Resiliencehubv2SystemTags</a>]

Tags assigned to the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_system#tags Resiliencehubv2System#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.resetSharingEnabled">reset_sharing_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Resiliencehubv2SystemTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTags">Resiliencehubv2SystemTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_sharing_enabled` <a name="reset_sharing_enabled" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.resetSharingEnabled"></a>

```python
def reset_sharing_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Resiliencehubv2System resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.isConstruct"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_system

resiliencehubv2System.Resiliencehubv2System.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.isTerraformElement"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_system

resiliencehubv2System.Resiliencehubv2System.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.isTerraformResource"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_system

resiliencehubv2System.Resiliencehubv2System.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_system

resiliencehubv2System.Resiliencehubv2System.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Resiliencehubv2System resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Resiliencehubv2System to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Resiliencehubv2System that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Resiliencehubv2System to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.systemArn">system_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.systemId">system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsList">Resiliencehubv2SystemTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.sharingEnabledInput">sharing_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTags">Resiliencehubv2SystemTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.sharingEnabled">sharing_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `system_arn`<sup>Required</sup> <a name="system_arn" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.systemArn"></a>

```python
system_arn: str
```

- *Type:* str

---

##### `system_id`<sup>Required</sup> <a name="system_id" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.systemId"></a>

```python
system_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.tags"></a>

```python
tags: Resiliencehubv2SystemTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsList">Resiliencehubv2SystemTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `sharing_enabled_input`<sup>Optional</sup> <a name="sharing_enabled_input" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.sharingEnabledInput"></a>

```python
sharing_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Resiliencehubv2SystemTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTags">Resiliencehubv2SystemTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `sharing_enabled`<sup>Required</sup> <a name="sharing_enabled" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.sharingEnabled"></a>

```python
sharing_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2System.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Resiliencehubv2SystemConfig <a name="Resiliencehubv2SystemConfig" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemConfig.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_system

resiliencehubv2System.Resiliencehubv2SystemConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  description: str = None,
  kms_key_id: str = None,
  sharing_enabled: bool | IResolvable = None,
  tags: IResolvable | typing.List[Resiliencehubv2SystemTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemConfig.property.name">name</a></code> | <code>str</code> | The name of the system. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemConfig.property.description">description</a></code> | <code>str</code> | The description of the system. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | The KMS key ID for encrypting system data. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemConfig.property.sharingEnabled">sharing_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the system is enabled to be shared with other members of the Organization. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTags">Resiliencehubv2SystemTags</a>]</code> | Tags assigned to the system. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_system#name Resiliencehubv2System#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_system#description Resiliencehubv2System#description}

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

The KMS key ID for encrypting system data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_system#kms_key_id Resiliencehubv2System#kms_key_id}

---

##### `sharing_enabled`<sup>Optional</sup> <a name="sharing_enabled" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemConfig.property.sharingEnabled"></a>

```python
sharing_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the system is enabled to be shared with other members of the Organization.

Only applicable if the system owner is a management account or delegated admin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_system#sharing_enabled Resiliencehubv2System#sharing_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Resiliencehubv2SystemTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTags">Resiliencehubv2SystemTags</a>]

Tags assigned to the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_system#tags Resiliencehubv2System#tags}

---

### Resiliencehubv2SystemTags <a name="Resiliencehubv2SystemTags" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTags.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_system

resiliencehubv2System.Resiliencehubv2SystemTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTags.property.key">key</a></code> | <code>str</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTags.property.value">value</a></code> | <code>str</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_system#key Resiliencehubv2System#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resiliencehubv2_system#value Resiliencehubv2System#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Resiliencehubv2SystemTagsList <a name="Resiliencehubv2SystemTagsList" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_system

resiliencehubv2System.Resiliencehubv2SystemTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Resiliencehubv2SystemTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTags">Resiliencehubv2SystemTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Resiliencehubv2SystemTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTags">Resiliencehubv2SystemTags</a>]

---


### Resiliencehubv2SystemTagsOutputReference <a name="Resiliencehubv2SystemTagsOutputReference" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import resiliencehubv2_system

resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTags">Resiliencehubv2SystemTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Resiliencehubv2SystemTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.resiliencehubv2System.Resiliencehubv2SystemTags">Resiliencehubv2SystemTags</a>

---



