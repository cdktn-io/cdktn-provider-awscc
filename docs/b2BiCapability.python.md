# `b2BiCapability` Submodule <a name="`b2BiCapability` Submodule" id="@cdktn/provider-awscc.b2BiCapability"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### B2BiCapability <a name="B2BiCapability" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability awscc_b2bi_capability}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_capability

b2BiCapability.B2BiCapability(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  configuration: B2BiCapabilityConfiguration,
  name: str,
  type: str,
  instructions_documents: IResolvable | typing.List[B2BiCapabilityInstructionsDocuments] = None,
  tags: IResolvable | typing.List[B2BiCapabilityTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfiguration">B2BiCapabilityConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#configuration B2BiCapability#configuration}. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#name B2BiCapability#name}. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#type B2BiCapability#type}. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.Initializer.parameter.instructionsDocuments">instructions_documents</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocuments">B2BiCapabilityInstructionsDocuments</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#instructions_documents B2BiCapability#instructions_documents}. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTags">B2BiCapabilityTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#tags B2BiCapability#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfiguration">B2BiCapabilityConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#configuration B2BiCapability#configuration}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#name B2BiCapability#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#type B2BiCapability#type}.

---

##### `instructions_documents`<sup>Optional</sup> <a name="instructions_documents" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.Initializer.parameter.instructionsDocuments"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocuments">B2BiCapabilityInstructionsDocuments</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#instructions_documents B2BiCapability#instructions_documents}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTags">B2BiCapabilityTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#tags B2BiCapability#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.putConfiguration">put_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.putInstructionsDocuments">put_instructions_documents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.resetInstructionsDocuments">reset_instructions_documents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_configuration` <a name="put_configuration" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.putConfiguration"></a>

```python
def put_configuration(
  edi: B2BiCapabilityConfigurationEdi = None
) -> None
```

###### `edi`<sup>Optional</sup> <a name="edi" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.putConfiguration.parameter.edi"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi">B2BiCapabilityConfigurationEdi</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#edi B2BiCapability#edi}.

---

##### `put_instructions_documents` <a name="put_instructions_documents" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.putInstructionsDocuments"></a>

```python
def put_instructions_documents(
  value: IResolvable | typing.List[B2BiCapabilityInstructionsDocuments]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.putInstructionsDocuments.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocuments">B2BiCapabilityInstructionsDocuments</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[B2BiCapabilityTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTags">B2BiCapabilityTags</a>]

---

##### `reset_instructions_documents` <a name="reset_instructions_documents" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.resetInstructionsDocuments"></a>

```python
def reset_instructions_documents() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a B2BiCapability resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.isConstruct"></a>

```python
from cdktn_provider_awscc import b2_bi_capability

b2BiCapability.B2BiCapability.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.isTerraformElement"></a>

```python
from cdktn_provider_awscc import b2_bi_capability

b2BiCapability.B2BiCapability.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.isTerraformResource"></a>

```python
from cdktn_provider_awscc import b2_bi_capability

b2BiCapability.B2BiCapability.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import b2_bi_capability

b2BiCapability.B2BiCapability.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a B2BiCapability resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the B2BiCapability to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing B2BiCapability that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the B2BiCapability to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.capabilityArn">capability_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.capabilityId">capability_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference">B2BiCapabilityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.instructionsDocuments">instructions_documents</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList">B2BiCapabilityInstructionsDocumentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList">B2BiCapabilityTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.configurationInput">configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfiguration">B2BiCapabilityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.instructionsDocumentsInput">instructions_documents_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocuments">B2BiCapabilityInstructionsDocuments</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTags">B2BiCapabilityTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `capability_arn`<sup>Required</sup> <a name="capability_arn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.capabilityArn"></a>

```python
capability_arn: str
```

- *Type:* str

---

##### `capability_id`<sup>Required</sup> <a name="capability_id" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.capabilityId"></a>

```python
capability_id: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.configuration"></a>

```python
configuration: B2BiCapabilityConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference">B2BiCapabilityConfigurationOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instructions_documents`<sup>Required</sup> <a name="instructions_documents" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.instructionsDocuments"></a>

```python
instructions_documents: B2BiCapabilityInstructionsDocumentsList
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList">B2BiCapabilityInstructionsDocumentsList</a>

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.tags"></a>

```python
tags: B2BiCapabilityTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList">B2BiCapabilityTagsList</a>

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.configurationInput"></a>

```python
configuration_input: IResolvable | B2BiCapabilityConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfiguration">B2BiCapabilityConfiguration</a>

---

##### `instructions_documents_input`<sup>Optional</sup> <a name="instructions_documents_input" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.instructionsDocumentsInput"></a>

```python
instructions_documents_input: IResolvable | typing.List[B2BiCapabilityInstructionsDocuments]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocuments">B2BiCapabilityInstructionsDocuments</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[B2BiCapabilityTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTags">B2BiCapabilityTags</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapability.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### B2BiCapabilityConfig <a name="B2BiCapabilityConfig" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_capability

b2BiCapability.B2BiCapabilityConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  configuration: B2BiCapabilityConfiguration,
  name: str,
  type: str,
  instructions_documents: IResolvable | typing.List[B2BiCapabilityInstructionsDocuments] = None,
  tags: IResolvable | typing.List[B2BiCapabilityTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfiguration">B2BiCapabilityConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#configuration B2BiCapability#configuration}. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#name B2BiCapability#name}. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#type B2BiCapability#type}. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.instructionsDocuments">instructions_documents</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocuments">B2BiCapabilityInstructionsDocuments</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#instructions_documents B2BiCapability#instructions_documents}. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTags">B2BiCapabilityTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#tags B2BiCapability#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.configuration"></a>

```python
configuration: B2BiCapabilityConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfiguration">B2BiCapabilityConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#configuration B2BiCapability#configuration}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#name B2BiCapability#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#type B2BiCapability#type}.

---

##### `instructions_documents`<sup>Optional</sup> <a name="instructions_documents" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.instructionsDocuments"></a>

```python
instructions_documents: IResolvable | typing.List[B2BiCapabilityInstructionsDocuments]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocuments">B2BiCapabilityInstructionsDocuments</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#instructions_documents B2BiCapability#instructions_documents}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[B2BiCapabilityTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTags">B2BiCapabilityTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#tags B2BiCapability#tags}.

---

### B2BiCapabilityConfiguration <a name="B2BiCapabilityConfiguration" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_capability

b2BiCapability.B2BiCapabilityConfiguration(
  edi: B2BiCapabilityConfigurationEdi = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfiguration.property.edi">edi</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi">B2BiCapabilityConfigurationEdi</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#edi B2BiCapability#edi}. |

---

##### `edi`<sup>Optional</sup> <a name="edi" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfiguration.property.edi"></a>

```python
edi: B2BiCapabilityConfigurationEdi
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi">B2BiCapabilityConfigurationEdi</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#edi B2BiCapability#edi}.

---

### B2BiCapabilityConfigurationEdi <a name="B2BiCapabilityConfigurationEdi" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_capability

b2BiCapability.B2BiCapabilityConfigurationEdi(
  capability_direction: str = None,
  input_location: B2BiCapabilityConfigurationEdiInputLocation = None,
  output_location: B2BiCapabilityConfigurationEdiOutputLocation = None,
  transformer_id: str = None,
  type: B2BiCapabilityConfigurationEdiType = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi.property.capabilityDirection">capability_direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#capability_direction B2BiCapability#capability_direction}. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi.property.inputLocation">input_location</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocation">B2BiCapabilityConfigurationEdiInputLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#input_location B2BiCapability#input_location}. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi.property.outputLocation">output_location</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocation">B2BiCapabilityConfigurationEdiOutputLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#output_location B2BiCapability#output_location}. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi.property.transformerId">transformer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#transformer_id B2BiCapability#transformer_id}. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi.property.type">type</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiType">B2BiCapabilityConfigurationEdiType</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#type B2BiCapability#type}. |

---

##### `capability_direction`<sup>Optional</sup> <a name="capability_direction" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi.property.capabilityDirection"></a>

```python
capability_direction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#capability_direction B2BiCapability#capability_direction}.

---

##### `input_location`<sup>Optional</sup> <a name="input_location" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi.property.inputLocation"></a>

```python
input_location: B2BiCapabilityConfigurationEdiInputLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocation">B2BiCapabilityConfigurationEdiInputLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#input_location B2BiCapability#input_location}.

---

##### `output_location`<sup>Optional</sup> <a name="output_location" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi.property.outputLocation"></a>

```python
output_location: B2BiCapabilityConfigurationEdiOutputLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocation">B2BiCapabilityConfigurationEdiOutputLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#output_location B2BiCapability#output_location}.

---

##### `transformer_id`<sup>Optional</sup> <a name="transformer_id" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi.property.transformerId"></a>

```python
transformer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#transformer_id B2BiCapability#transformer_id}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi.property.type"></a>

```python
type: B2BiCapabilityConfigurationEdiType
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiType">B2BiCapabilityConfigurationEdiType</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#type B2BiCapability#type}.

---

### B2BiCapabilityConfigurationEdiInputLocation <a name="B2BiCapabilityConfigurationEdiInputLocation" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocation.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_capability

b2BiCapability.B2BiCapabilityConfigurationEdiInputLocation(
  bucket_name: str = None,
  key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocation.property.bucketName">bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#bucket_name B2BiCapability#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocation.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#key B2BiCapability#key}. |

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocation.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#bucket_name B2BiCapability#bucket_name}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocation.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#key B2BiCapability#key}.

---

### B2BiCapabilityConfigurationEdiOutputLocation <a name="B2BiCapabilityConfigurationEdiOutputLocation" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocation.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_capability

b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocation(
  bucket_name: str = None,
  key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocation.property.bucketName">bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#bucket_name B2BiCapability#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocation.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#key B2BiCapability#key}. |

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocation.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#bucket_name B2BiCapability#bucket_name}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocation.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#key B2BiCapability#key}.

---

### B2BiCapabilityConfigurationEdiType <a name="B2BiCapabilityConfigurationEdiType" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiType.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_capability

b2BiCapability.B2BiCapabilityConfigurationEdiType(
  x12_details: B2BiCapabilityConfigurationEdiTypeX12Details = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiType.property.x12Details">x12_details</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12Details">B2BiCapabilityConfigurationEdiTypeX12Details</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#x12_details B2BiCapability#x12_details}. |

---

##### `x12_details`<sup>Optional</sup> <a name="x12_details" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiType.property.x12Details"></a>

```python
x12_details: B2BiCapabilityConfigurationEdiTypeX12Details
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12Details">B2BiCapabilityConfigurationEdiTypeX12Details</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#x12_details B2BiCapability#x12_details}.

---

### B2BiCapabilityConfigurationEdiTypeX12Details <a name="B2BiCapabilityConfigurationEdiTypeX12Details" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12Details"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12Details.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_capability

b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12Details(
  transaction_set: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12Details.property.transactionSet">transaction_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#transaction_set B2BiCapability#transaction_set}. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12Details.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#version B2BiCapability#version}. |

---

##### `transaction_set`<sup>Optional</sup> <a name="transaction_set" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12Details.property.transactionSet"></a>

```python
transaction_set: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#transaction_set B2BiCapability#transaction_set}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12Details.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#version B2BiCapability#version}.

---

### B2BiCapabilityInstructionsDocuments <a name="B2BiCapabilityInstructionsDocuments" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocuments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocuments.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_capability

b2BiCapability.B2BiCapabilityInstructionsDocuments(
  bucket_name: str = None,
  key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocuments.property.bucketName">bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#bucket_name B2BiCapability#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocuments.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#key B2BiCapability#key}. |

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocuments.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#bucket_name B2BiCapability#bucket_name}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocuments.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#key B2BiCapability#key}.

---

### B2BiCapabilityTags <a name="B2BiCapabilityTags" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTags.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_capability

b2BiCapability.B2BiCapabilityTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#key B2BiCapability#key}. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#value B2BiCapability#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#key B2BiCapability#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#value B2BiCapability#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### B2BiCapabilityConfigurationEdiInputLocationOutputReference <a name="B2BiCapabilityConfigurationEdiInputLocationOutputReference" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_capability

b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.resetKey">reset_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.resetKey"></a>

```python
def reset_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocation">B2BiCapabilityConfigurationEdiInputLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | B2BiCapabilityConfigurationEdiInputLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocation">B2BiCapabilityConfigurationEdiInputLocation</a>

---


### B2BiCapabilityConfigurationEdiOutputLocationOutputReference <a name="B2BiCapabilityConfigurationEdiOutputLocationOutputReference" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_capability

b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.resetKey">reset_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.resetKey"></a>

```python
def reset_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocation">B2BiCapabilityConfigurationEdiOutputLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | B2BiCapabilityConfigurationEdiOutputLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocation">B2BiCapabilityConfigurationEdiOutputLocation</a>

---


### B2BiCapabilityConfigurationEdiOutputReference <a name="B2BiCapabilityConfigurationEdiOutputReference" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_capability

b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.putInputLocation">put_input_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.putOutputLocation">put_output_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.putType">put_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.resetCapabilityDirection">reset_capability_direction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.resetInputLocation">reset_input_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.resetOutputLocation">reset_output_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.resetTransformerId">reset_transformer_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_input_location` <a name="put_input_location" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.putInputLocation"></a>

```python
def put_input_location(
  bucket_name: str = None,
  key: str = None
) -> None
```

###### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.putInputLocation.parameter.bucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#bucket_name B2BiCapability#bucket_name}.

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.putInputLocation.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#key B2BiCapability#key}.

---

##### `put_output_location` <a name="put_output_location" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.putOutputLocation"></a>

```python
def put_output_location(
  bucket_name: str = None,
  key: str = None
) -> None
```

###### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.putOutputLocation.parameter.bucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#bucket_name B2BiCapability#bucket_name}.

---

###### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.putOutputLocation.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#key B2BiCapability#key}.

---

##### `put_type` <a name="put_type" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.putType"></a>

```python
def put_type(
  x12_details: B2BiCapabilityConfigurationEdiTypeX12Details = None
) -> None
```

###### `x12_details`<sup>Optional</sup> <a name="x12_details" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.putType.parameter.x12Details"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12Details">B2BiCapabilityConfigurationEdiTypeX12Details</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#x12_details B2BiCapability#x12_details}.

---

##### `reset_capability_direction` <a name="reset_capability_direction" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.resetCapabilityDirection"></a>

```python
def reset_capability_direction() -> None
```

##### `reset_input_location` <a name="reset_input_location" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.resetInputLocation"></a>

```python
def reset_input_location() -> None
```

##### `reset_output_location` <a name="reset_output_location" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.resetOutputLocation"></a>

```python
def reset_output_location() -> None
```

##### `reset_transformer_id` <a name="reset_transformer_id" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.resetTransformerId"></a>

```python
def reset_transformer_id() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.inputLocation">input_location</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference">B2BiCapabilityConfigurationEdiInputLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.outputLocation">output_location</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference">B2BiCapabilityConfigurationEdiOutputLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.type">type</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference">B2BiCapabilityConfigurationEdiTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.capabilityDirectionInput">capability_direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.inputLocationInput">input_location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocation">B2BiCapabilityConfigurationEdiInputLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.outputLocationInput">output_location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocation">B2BiCapabilityConfigurationEdiOutputLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.transformerIdInput">transformer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.typeInput">type_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiType">B2BiCapabilityConfigurationEdiType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.capabilityDirection">capability_direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.transformerId">transformer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi">B2BiCapabilityConfigurationEdi</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_location`<sup>Required</sup> <a name="input_location" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.inputLocation"></a>

```python
input_location: B2BiCapabilityConfigurationEdiInputLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocationOutputReference">B2BiCapabilityConfigurationEdiInputLocationOutputReference</a>

---

##### `output_location`<sup>Required</sup> <a name="output_location" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.outputLocation"></a>

```python
output_location: B2BiCapabilityConfigurationEdiOutputLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocationOutputReference">B2BiCapabilityConfigurationEdiOutputLocationOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.type"></a>

```python
type: B2BiCapabilityConfigurationEdiTypeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference">B2BiCapabilityConfigurationEdiTypeOutputReference</a>

---

##### `capability_direction_input`<sup>Optional</sup> <a name="capability_direction_input" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.capabilityDirectionInput"></a>

```python
capability_direction_input: str
```

- *Type:* str

---

##### `input_location_input`<sup>Optional</sup> <a name="input_location_input" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.inputLocationInput"></a>

```python
input_location_input: IResolvable | B2BiCapabilityConfigurationEdiInputLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocation">B2BiCapabilityConfigurationEdiInputLocation</a>

---

##### `output_location_input`<sup>Optional</sup> <a name="output_location_input" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.outputLocationInput"></a>

```python
output_location_input: IResolvable | B2BiCapabilityConfigurationEdiOutputLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocation">B2BiCapabilityConfigurationEdiOutputLocation</a>

---

##### `transformer_id_input`<sup>Optional</sup> <a name="transformer_id_input" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.transformerIdInput"></a>

```python
transformer_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.typeInput"></a>

```python
type_input: IResolvable | B2BiCapabilityConfigurationEdiType
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiType">B2BiCapabilityConfigurationEdiType</a>

---

##### `capability_direction`<sup>Required</sup> <a name="capability_direction" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.capabilityDirection"></a>

```python
capability_direction: str
```

- *Type:* str

---

##### `transformer_id`<sup>Required</sup> <a name="transformer_id" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.transformerId"></a>

```python
transformer_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | B2BiCapabilityConfigurationEdi
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi">B2BiCapabilityConfigurationEdi</a>

---


### B2BiCapabilityConfigurationEdiTypeOutputReference <a name="B2BiCapabilityConfigurationEdiTypeOutputReference" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_capability

b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.putX12Details">put_x12_details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.resetX12Details">reset_x12_details</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_x12_details` <a name="put_x12_details" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.putX12Details"></a>

```python
def put_x12_details(
  transaction_set: str = None,
  version: str = None
) -> None
```

###### `transaction_set`<sup>Optional</sup> <a name="transaction_set" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.putX12Details.parameter.transactionSet"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#transaction_set B2BiCapability#transaction_set}.

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.putX12Details.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#version B2BiCapability#version}.

---

##### `reset_x12_details` <a name="reset_x12_details" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.resetX12Details"></a>

```python
def reset_x12_details() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.property.x12Details">x12_details</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference">B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.property.x12DetailsInput">x12_details_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12Details">B2BiCapabilityConfigurationEdiTypeX12Details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiType">B2BiCapabilityConfigurationEdiType</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x12_details`<sup>Required</sup> <a name="x12_details" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.property.x12Details"></a>

```python
x12_details: B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference">B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference</a>

---

##### `x12_details_input`<sup>Optional</sup> <a name="x12_details_input" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.property.x12DetailsInput"></a>

```python
x12_details_input: IResolvable | B2BiCapabilityConfigurationEdiTypeX12Details
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12Details">B2BiCapabilityConfigurationEdiTypeX12Details</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | B2BiCapabilityConfigurationEdiType
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiType">B2BiCapabilityConfigurationEdiType</a>

---


### B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference <a name="B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_capability

b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.resetTransactionSet">reset_transaction_set</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_transaction_set` <a name="reset_transaction_set" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.resetTransactionSet"></a>

```python
def reset_transaction_set() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.transactionSetInput">transaction_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.transactionSet">transaction_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12Details">B2BiCapabilityConfigurationEdiTypeX12Details</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `transaction_set_input`<sup>Optional</sup> <a name="transaction_set_input" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.transactionSetInput"></a>

```python
transaction_set_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `transaction_set`<sup>Required</sup> <a name="transaction_set" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.transactionSet"></a>

```python
transaction_set: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12DetailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | B2BiCapabilityConfigurationEdiTypeX12Details
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiTypeX12Details">B2BiCapabilityConfigurationEdiTypeX12Details</a>

---


### B2BiCapabilityConfigurationOutputReference <a name="B2BiCapabilityConfigurationOutputReference" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_capability

b2BiCapability.B2BiCapabilityConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.putEdi">put_edi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.resetEdi">reset_edi</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_edi` <a name="put_edi" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.putEdi"></a>

```python
def put_edi(
  capability_direction: str = None,
  input_location: B2BiCapabilityConfigurationEdiInputLocation = None,
  output_location: B2BiCapabilityConfigurationEdiOutputLocation = None,
  transformer_id: str = None,
  type: B2BiCapabilityConfigurationEdiType = None
) -> None
```

###### `capability_direction`<sup>Optional</sup> <a name="capability_direction" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.putEdi.parameter.capabilityDirection"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#capability_direction B2BiCapability#capability_direction}.

---

###### `input_location`<sup>Optional</sup> <a name="input_location" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.putEdi.parameter.inputLocation"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiInputLocation">B2BiCapabilityConfigurationEdiInputLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#input_location B2BiCapability#input_location}.

---

###### `output_location`<sup>Optional</sup> <a name="output_location" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.putEdi.parameter.outputLocation"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputLocation">B2BiCapabilityConfigurationEdiOutputLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#output_location B2BiCapability#output_location}.

---

###### `transformer_id`<sup>Optional</sup> <a name="transformer_id" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.putEdi.parameter.transformerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#transformer_id B2BiCapability#transformer_id}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.putEdi.parameter.type"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiType">B2BiCapabilityConfigurationEdiType</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_capability#type B2BiCapability#type}.

---

##### `reset_edi` <a name="reset_edi" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.resetEdi"></a>

```python
def reset_edi() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.property.edi">edi</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference">B2BiCapabilityConfigurationEdiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.property.ediInput">edi_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi">B2BiCapabilityConfigurationEdi</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfiguration">B2BiCapabilityConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `edi`<sup>Required</sup> <a name="edi" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.property.edi"></a>

```python
edi: B2BiCapabilityConfigurationEdiOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdiOutputReference">B2BiCapabilityConfigurationEdiOutputReference</a>

---

##### `edi_input`<sup>Optional</sup> <a name="edi_input" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.property.ediInput"></a>

```python
edi_input: IResolvable | B2BiCapabilityConfigurationEdi
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationEdi">B2BiCapabilityConfigurationEdi</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | B2BiCapabilityConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityConfiguration">B2BiCapabilityConfiguration</a>

---


### B2BiCapabilityInstructionsDocumentsList <a name="B2BiCapabilityInstructionsDocumentsList" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_capability

b2BiCapability.B2BiCapabilityInstructionsDocumentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> B2BiCapabilityInstructionsDocumentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocuments">B2BiCapabilityInstructionsDocuments</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[B2BiCapabilityInstructionsDocuments]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocuments">B2BiCapabilityInstructionsDocuments</a>]

---


### B2BiCapabilityInstructionsDocumentsOutputReference <a name="B2BiCapabilityInstructionsDocumentsOutputReference" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_capability

b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.resetKey">reset_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocuments">B2BiCapabilityInstructionsDocuments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocumentsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | B2BiCapabilityInstructionsDocuments
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityInstructionsDocuments">B2BiCapabilityInstructionsDocuments</a>

---


### B2BiCapabilityTagsList <a name="B2BiCapabilityTagsList" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_capability

b2BiCapability.B2BiCapabilityTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> B2BiCapabilityTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTags">B2BiCapabilityTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[B2BiCapabilityTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTags">B2BiCapabilityTags</a>]

---


### B2BiCapabilityTagsOutputReference <a name="B2BiCapabilityTagsOutputReference" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import b2_bi_capability

b2BiCapability.B2BiCapabilityTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTags">B2BiCapabilityTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | B2BiCapabilityTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.b2BiCapability.B2BiCapabilityTags">B2BiCapabilityTags</a>

---



