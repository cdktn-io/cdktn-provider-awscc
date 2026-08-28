# `datazoneOwner` Submodule <a name="`datazoneOwner` Submodule" id="@cdktn/provider-awscc.datazoneOwner"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneOwner <a name="DatazoneOwner" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_owner awscc_datazone_owner}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_owner

datazoneOwner.DatazoneOwner(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain_identifier: str,
  entity_identifier: str,
  entity_type: str,
  owner: DatazoneOwnerOwner
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.Initializer.parameter.domainIdentifier">domain_identifier</a></code> | <code>str</code> | The ID of the domain in which you want to add the entity owner. |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.Initializer.parameter.entityIdentifier">entity_identifier</a></code> | <code>str</code> | The ID of the entity to which you want to add an owner. |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.Initializer.parameter.entityType">entity_type</a></code> | <code>str</code> | The type of an entity. |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.Initializer.parameter.owner">owner</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwner">DatazoneOwnerOwner</a></code> | The owner that you want to add to the entity. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_identifier`<sup>Required</sup> <a name="domain_identifier" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.Initializer.parameter.domainIdentifier"></a>

- *Type:* str

The ID of the domain in which you want to add the entity owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_owner#domain_identifier DatazoneOwner#domain_identifier}

---

##### `entity_identifier`<sup>Required</sup> <a name="entity_identifier" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.Initializer.parameter.entityIdentifier"></a>

- *Type:* str

The ID of the entity to which you want to add an owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_owner#entity_identifier DatazoneOwner#entity_identifier}

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.Initializer.parameter.entityType"></a>

- *Type:* str

The type of an entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_owner#entity_type DatazoneOwner#entity_type}

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.Initializer.parameter.owner"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwner">DatazoneOwnerOwner</a>

The owner that you want to add to the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_owner#owner DatazoneOwner#owner}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.putOwner">put_owner</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_owner` <a name="put_owner" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.putOwner"></a>

```python
def put_owner(
  group: DatazoneOwnerOwnerGroup = None,
  user: DatazoneOwnerOwnerUser = None
) -> None
```

###### `group`<sup>Optional</sup> <a name="group" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.putOwner.parameter.group"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroup">DatazoneOwnerOwnerGroup</a>

The properties of the domain unit owners group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_owner#group DatazoneOwner#group}

---

###### `user`<sup>Optional</sup> <a name="user" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.putOwner.parameter.user"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUser">DatazoneOwnerOwnerUser</a>

The properties of the owner user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_owner#user DatazoneOwner#user}

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DatazoneOwner resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.isConstruct"></a>

```python
from cdktn_provider_awscc import datazone_owner

datazoneOwner.DatazoneOwner.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.isTerraformElement"></a>

```python
from cdktn_provider_awscc import datazone_owner

datazoneOwner.DatazoneOwner.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.isTerraformResource"></a>

```python
from cdktn_provider_awscc import datazone_owner

datazoneOwner.DatazoneOwner.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import datazone_owner

datazoneOwner.DatazoneOwner.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DatazoneOwner resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatazoneOwner to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatazoneOwner that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_owner#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatazoneOwner to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.owner">owner</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference">DatazoneOwnerOwnerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.ownerIdentifier">owner_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.ownerType">owner_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.domainIdentifierInput">domain_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.entityIdentifierInput">entity_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.entityTypeInput">entity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.ownerInput">owner_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwner">DatazoneOwnerOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.domainIdentifier">domain_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.entityIdentifier">entity_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.entityType">entity_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.owner"></a>

```python
owner: DatazoneOwnerOwnerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference">DatazoneOwnerOwnerOutputReference</a>

---

##### `owner_identifier`<sup>Required</sup> <a name="owner_identifier" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.ownerIdentifier"></a>

```python
owner_identifier: str
```

- *Type:* str

---

##### `owner_type`<sup>Required</sup> <a name="owner_type" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.ownerType"></a>

```python
owner_type: str
```

- *Type:* str

---

##### `domain_identifier_input`<sup>Optional</sup> <a name="domain_identifier_input" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.domainIdentifierInput"></a>

```python
domain_identifier_input: str
```

- *Type:* str

---

##### `entity_identifier_input`<sup>Optional</sup> <a name="entity_identifier_input" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.entityIdentifierInput"></a>

```python
entity_identifier_input: str
```

- *Type:* str

---

##### `entity_type_input`<sup>Optional</sup> <a name="entity_type_input" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.entityTypeInput"></a>

```python
entity_type_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.ownerInput"></a>

```python
owner_input: IResolvable | DatazoneOwnerOwner
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwner">DatazoneOwnerOwner</a>

---

##### `domain_identifier`<sup>Required</sup> <a name="domain_identifier" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.domainIdentifier"></a>

```python
domain_identifier: str
```

- *Type:* str

---

##### `entity_identifier`<sup>Required</sup> <a name="entity_identifier" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.entityIdentifier"></a>

```python
entity_identifier: str
```

- *Type:* str

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwner.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneOwnerConfig <a name="DatazoneOwnerConfig" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerConfig.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_owner

datazoneOwner.DatazoneOwnerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain_identifier: str,
  entity_identifier: str,
  entity_type: str,
  owner: DatazoneOwnerOwner
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerConfig.property.domainIdentifier">domain_identifier</a></code> | <code>str</code> | The ID of the domain in which you want to add the entity owner. |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerConfig.property.entityIdentifier">entity_identifier</a></code> | <code>str</code> | The ID of the entity to which you want to add an owner. |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerConfig.property.entityType">entity_type</a></code> | <code>str</code> | The type of an entity. |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerConfig.property.owner">owner</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwner">DatazoneOwnerOwner</a></code> | The owner that you want to add to the entity. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_identifier`<sup>Required</sup> <a name="domain_identifier" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerConfig.property.domainIdentifier"></a>

```python
domain_identifier: str
```

- *Type:* str

The ID of the domain in which you want to add the entity owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_owner#domain_identifier DatazoneOwner#domain_identifier}

---

##### `entity_identifier`<sup>Required</sup> <a name="entity_identifier" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerConfig.property.entityIdentifier"></a>

```python
entity_identifier: str
```

- *Type:* str

The ID of the entity to which you want to add an owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_owner#entity_identifier DatazoneOwner#entity_identifier}

---

##### `entity_type`<sup>Required</sup> <a name="entity_type" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerConfig.property.entityType"></a>

```python
entity_type: str
```

- *Type:* str

The type of an entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_owner#entity_type DatazoneOwner#entity_type}

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerConfig.property.owner"></a>

```python
owner: DatazoneOwnerOwner
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwner">DatazoneOwnerOwner</a>

The owner that you want to add to the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_owner#owner DatazoneOwner#owner}

---

### DatazoneOwnerOwner <a name="DatazoneOwnerOwner" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwner"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwner.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_owner

datazoneOwner.DatazoneOwnerOwner(
  group: DatazoneOwnerOwnerGroup = None,
  user: DatazoneOwnerOwnerUser = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwner.property.group">group</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroup">DatazoneOwnerOwnerGroup</a></code> | The properties of the domain unit owners group. |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwner.property.user">user</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUser">DatazoneOwnerOwnerUser</a></code> | The properties of the owner user. |

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwner.property.group"></a>

```python
group: DatazoneOwnerOwnerGroup
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroup">DatazoneOwnerOwnerGroup</a>

The properties of the domain unit owners group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_owner#group DatazoneOwner#group}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwner.property.user"></a>

```python
user: DatazoneOwnerOwnerUser
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUser">DatazoneOwnerOwnerUser</a>

The properties of the owner user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_owner#user DatazoneOwner#user}

---

### DatazoneOwnerOwnerGroup <a name="DatazoneOwnerOwnerGroup" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroup.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_owner

datazoneOwner.DatazoneOwnerOwnerGroup(
  group_identifier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroup.property.groupIdentifier">group_identifier</a></code> | <code>str</code> | The ID of the domain unit owners group. |

---

##### `group_identifier`<sup>Optional</sup> <a name="group_identifier" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroup.property.groupIdentifier"></a>

```python
group_identifier: str
```

- *Type:* str

The ID of the domain unit owners group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_owner#group_identifier DatazoneOwner#group_identifier}

---

### DatazoneOwnerOwnerUser <a name="DatazoneOwnerOwnerUser" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUser.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_owner

datazoneOwner.DatazoneOwnerOwnerUser(
  user_identifier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUser.property.userIdentifier">user_identifier</a></code> | <code>str</code> | The ID of the owner user. |

---

##### `user_identifier`<sup>Optional</sup> <a name="user_identifier" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUser.property.userIdentifier"></a>

```python
user_identifier: str
```

- *Type:* str

The ID of the owner user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_owner#user_identifier DatazoneOwner#user_identifier}

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneOwnerOwnerGroupOutputReference <a name="DatazoneOwnerOwnerGroupOutputReference" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_owner

datazoneOwner.DatazoneOwnerOwnerGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.resetGroupIdentifier">reset_group_identifier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group_identifier` <a name="reset_group_identifier" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.resetGroupIdentifier"></a>

```python
def reset_group_identifier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.property.groupIdentifierInput">group_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.property.groupIdentifier">group_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroup">DatazoneOwnerOwnerGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_identifier_input`<sup>Optional</sup> <a name="group_identifier_input" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.property.groupIdentifierInput"></a>

```python
group_identifier_input: str
```

- *Type:* str

---

##### `group_identifier`<sup>Required</sup> <a name="group_identifier" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.property.groupIdentifier"></a>

```python
group_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneOwnerOwnerGroup
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroup">DatazoneOwnerOwnerGroup</a>

---


### DatazoneOwnerOwnerOutputReference <a name="DatazoneOwnerOwnerOutputReference" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_owner

datazoneOwner.DatazoneOwnerOwnerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.putGroup">put_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.putUser">put_user</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.resetGroup">reset_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.resetUser">reset_user</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_group` <a name="put_group" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.putGroup"></a>

```python
def put_group(
  group_identifier: str = None
) -> None
```

###### `group_identifier`<sup>Optional</sup> <a name="group_identifier" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.putGroup.parameter.groupIdentifier"></a>

- *Type:* str

The ID of the domain unit owners group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_owner#group_identifier DatazoneOwner#group_identifier}

---

##### `put_user` <a name="put_user" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.putUser"></a>

```python
def put_user(
  user_identifier: str = None
) -> None
```

###### `user_identifier`<sup>Optional</sup> <a name="user_identifier" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.putUser.parameter.userIdentifier"></a>

- *Type:* str

The ID of the owner user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_owner#user_identifier DatazoneOwner#user_identifier}

---

##### `reset_group` <a name="reset_group" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.resetGroup"></a>

```python
def reset_group() -> None
```

##### `reset_user` <a name="reset_user" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.resetUser"></a>

```python
def reset_user() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.property.group">group</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference">DatazoneOwnerOwnerGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.property.user">user</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference">DatazoneOwnerOwnerUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.property.groupInput">group_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroup">DatazoneOwnerOwnerGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.property.userInput">user_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUser">DatazoneOwnerOwnerUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwner">DatazoneOwnerOwner</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.property.group"></a>

```python
group: DatazoneOwnerOwnerGroupOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroupOutputReference">DatazoneOwnerOwnerGroupOutputReference</a>

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.property.user"></a>

```python
user: DatazoneOwnerOwnerUserOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference">DatazoneOwnerOwnerUserOutputReference</a>

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.property.groupInput"></a>

```python
group_input: IResolvable | DatazoneOwnerOwnerGroup
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerGroup">DatazoneOwnerOwnerGroup</a>

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.property.userInput"></a>

```python
user_input: IResolvable | DatazoneOwnerOwnerUser
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUser">DatazoneOwnerOwnerUser</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneOwnerOwner
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwner">DatazoneOwnerOwner</a>

---


### DatazoneOwnerOwnerUserOutputReference <a name="DatazoneOwnerOwnerUserOutputReference" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_owner

datazoneOwner.DatazoneOwnerOwnerUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.resetUserIdentifier">reset_user_identifier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_user_identifier` <a name="reset_user_identifier" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.resetUserIdentifier"></a>

```python
def reset_user_identifier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.property.userIdentifierInput">user_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.property.userIdentifier">user_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUser">DatazoneOwnerOwnerUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `user_identifier_input`<sup>Optional</sup> <a name="user_identifier_input" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.property.userIdentifierInput"></a>

```python
user_identifier_input: str
```

- *Type:* str

---

##### `user_identifier`<sup>Required</sup> <a name="user_identifier" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.property.userIdentifier"></a>

```python
user_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUserOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneOwnerOwnerUser
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneOwner.DatazoneOwnerOwnerUser">DatazoneOwnerOwnerUser</a>

---



