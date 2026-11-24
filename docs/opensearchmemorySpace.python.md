# `opensearchmemorySpace` Submodule <a name="`opensearchmemorySpace` Submodule" id="@cdktn/provider-awscc.opensearchmemorySpace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchmemorySpace <a name="OpensearchmemorySpace" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space awscc_opensearchmemory_space}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchmemory_space

opensearchmemorySpace.OpensearchmemorySpace(
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
  encryption_configuration: OpensearchmemorySpaceEncryptionConfiguration = None,
  event_expiry_days: typing.Union[int, float] = None,
  extraction_model_id: str = None,
  memory_expiry_days: typing.Union[int, float] = None,
  memory_strategies: IResolvable | typing.List[OpensearchmemorySpaceMemoryStrategies] = None,
  tags: IResolvable | typing.List[OpensearchmemorySpaceTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#name OpensearchmemorySpace#name}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration">OpensearchmemorySpaceEncryptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#encryption_configuration OpensearchmemorySpace#encryption_configuration}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.eventExpiryDays">event_expiry_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#event_expiry_days OpensearchmemorySpace#event_expiry_days}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.extractionModelId">extraction_model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_model_id OpensearchmemorySpace#extraction_model_id}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.memoryExpiryDays">memory_expiry_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#memory_expiry_days OpensearchmemorySpace#memory_expiry_days}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.memoryStrategies">memory_strategies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#memory_strategies OpensearchmemorySpace#memory_strategies}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#name OpensearchmemorySpace#name}.

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.encryptionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration">OpensearchmemorySpaceEncryptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#encryption_configuration OpensearchmemorySpace#encryption_configuration}.

---

##### `event_expiry_days`<sup>Optional</sup> <a name="event_expiry_days" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.eventExpiryDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#event_expiry_days OpensearchmemorySpace#event_expiry_days}.

---

##### `extraction_model_id`<sup>Optional</sup> <a name="extraction_model_id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.extractionModelId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_model_id OpensearchmemorySpace#extraction_model_id}.

---

##### `memory_expiry_days`<sup>Optional</sup> <a name="memory_expiry_days" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.memoryExpiryDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#memory_expiry_days OpensearchmemorySpace#memory_expiry_days}.

---

##### `memory_strategies`<sup>Optional</sup> <a name="memory_strategies" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.memoryStrategies"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#memory_strategies OpensearchmemorySpace#memory_strategies}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#tags OpensearchmemorySpace#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putEncryptionConfiguration">put_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putMemoryStrategies">put_memory_strategies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetEncryptionConfiguration">reset_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetEventExpiryDays">reset_event_expiry_days</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetExtractionModelId">reset_extraction_model_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetMemoryExpiryDays">reset_memory_expiry_days</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetMemoryStrategies">reset_memory_strategies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_configuration` <a name="put_encryption_configuration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putEncryptionConfiguration"></a>

```python
def put_encryption_configuration(
  kms_key_arn: str = None
) -> None
```

###### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putEncryptionConfiguration.parameter.kmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#kms_key_arn OpensearchmemorySpace#kms_key_arn}.

---

##### `put_memory_strategies` <a name="put_memory_strategies" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putMemoryStrategies"></a>

```python
def put_memory_strategies(
  value: IResolvable | typing.List[OpensearchmemorySpaceMemoryStrategies]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putMemoryStrategies.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[OpensearchmemorySpaceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a>]

---

##### `reset_encryption_configuration` <a name="reset_encryption_configuration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetEncryptionConfiguration"></a>

```python
def reset_encryption_configuration() -> None
```

##### `reset_event_expiry_days` <a name="reset_event_expiry_days" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetEventExpiryDays"></a>

```python
def reset_event_expiry_days() -> None
```

##### `reset_extraction_model_id` <a name="reset_extraction_model_id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetExtractionModelId"></a>

```python
def reset_extraction_model_id() -> None
```

##### `reset_memory_expiry_days` <a name="reset_memory_expiry_days" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetMemoryExpiryDays"></a>

```python
def reset_memory_expiry_days() -> None
```

##### `reset_memory_strategies` <a name="reset_memory_strategies" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetMemoryStrategies"></a>

```python
def reset_memory_strategies() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OpensearchmemorySpace resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isConstruct"></a>

```python
from cdktn_provider_awscc import opensearchmemory_space

opensearchmemorySpace.OpensearchmemorySpace.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isTerraformElement"></a>

```python
from cdktn_provider_awscc import opensearchmemory_space

opensearchmemorySpace.OpensearchmemorySpace.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isTerraformResource"></a>

```python
from cdktn_provider_awscc import opensearchmemory_space

opensearchmemorySpace.OpensearchmemorySpace.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import opensearchmemory_space

opensearchmemorySpace.OpensearchmemorySpace.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OpensearchmemorySpace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OpensearchmemorySpace to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OpensearchmemorySpace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OpensearchmemorySpace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference">OpensearchmemorySpaceEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryStrategies">memory_strategies</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList">OpensearchmemorySpaceMemoryStrategiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.spaceId">space_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList">OpensearchmemorySpaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.encryptionConfigurationInput">encryption_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration">OpensearchmemorySpaceEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.eventExpiryDaysInput">event_expiry_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.extractionModelIdInput">extraction_model_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryExpiryDaysInput">memory_expiry_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryStrategiesInput">memory_strategies_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.eventExpiryDays">event_expiry_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.extractionModelId">extraction_model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryExpiryDays">memory_expiry_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `encryption_configuration`<sup>Required</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.encryptionConfiguration"></a>

```python
encryption_configuration: OpensearchmemorySpaceEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference">OpensearchmemorySpaceEncryptionConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `memory_strategies`<sup>Required</sup> <a name="memory_strategies" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryStrategies"></a>

```python
memory_strategies: OpensearchmemorySpaceMemoryStrategiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList">OpensearchmemorySpaceMemoryStrategiesList</a>

---

##### `space_id`<sup>Required</sup> <a name="space_id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.spaceId"></a>

```python
space_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.tags"></a>

```python
tags: OpensearchmemorySpaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList">OpensearchmemorySpaceTagsList</a>

---

##### `encryption_configuration_input`<sup>Optional</sup> <a name="encryption_configuration_input" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.encryptionConfigurationInput"></a>

```python
encryption_configuration_input: IResolvable | OpensearchmemorySpaceEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration">OpensearchmemorySpaceEncryptionConfiguration</a>

---

##### `event_expiry_days_input`<sup>Optional</sup> <a name="event_expiry_days_input" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.eventExpiryDaysInput"></a>

```python
event_expiry_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `extraction_model_id_input`<sup>Optional</sup> <a name="extraction_model_id_input" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.extractionModelIdInput"></a>

```python
extraction_model_id_input: str
```

- *Type:* str

---

##### `memory_expiry_days_input`<sup>Optional</sup> <a name="memory_expiry_days_input" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryExpiryDaysInput"></a>

```python
memory_expiry_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_strategies_input`<sup>Optional</sup> <a name="memory_strategies_input" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryStrategiesInput"></a>

```python
memory_strategies_input: IResolvable | typing.List[OpensearchmemorySpaceMemoryStrategies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[OpensearchmemorySpaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a>]

---

##### `event_expiry_days`<sup>Required</sup> <a name="event_expiry_days" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.eventExpiryDays"></a>

```python
event_expiry_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `extraction_model_id`<sup>Required</sup> <a name="extraction_model_id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.extractionModelId"></a>

```python
extraction_model_id: str
```

- *Type:* str

---

##### `memory_expiry_days`<sup>Required</sup> <a name="memory_expiry_days" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.memoryExpiryDays"></a>

```python
memory_expiry_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpace.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchmemorySpaceConfig <a name="OpensearchmemorySpaceConfig" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchmemory_space

opensearchmemorySpace.OpensearchmemorySpaceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  encryption_configuration: OpensearchmemorySpaceEncryptionConfiguration = None,
  event_expiry_days: typing.Union[int, float] = None,
  extraction_model_id: str = None,
  memory_expiry_days: typing.Union[int, float] = None,
  memory_strategies: IResolvable | typing.List[OpensearchmemorySpaceMemoryStrategies] = None,
  tags: IResolvable | typing.List[OpensearchmemorySpaceTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#name OpensearchmemorySpace#name}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration">OpensearchmemorySpaceEncryptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#encryption_configuration OpensearchmemorySpace#encryption_configuration}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.eventExpiryDays">event_expiry_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#event_expiry_days OpensearchmemorySpace#event_expiry_days}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.extractionModelId">extraction_model_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_model_id OpensearchmemorySpace#extraction_model_id}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.memoryExpiryDays">memory_expiry_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#memory_expiry_days OpensearchmemorySpace#memory_expiry_days}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.memoryStrategies">memory_strategies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#memory_strategies OpensearchmemorySpace#memory_strategies}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#name OpensearchmemorySpace#name}.

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.encryptionConfiguration"></a>

```python
encryption_configuration: OpensearchmemorySpaceEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration">OpensearchmemorySpaceEncryptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#encryption_configuration OpensearchmemorySpace#encryption_configuration}.

---

##### `event_expiry_days`<sup>Optional</sup> <a name="event_expiry_days" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.eventExpiryDays"></a>

```python
event_expiry_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#event_expiry_days OpensearchmemorySpace#event_expiry_days}.

---

##### `extraction_model_id`<sup>Optional</sup> <a name="extraction_model_id" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.extractionModelId"></a>

```python
extraction_model_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_model_id OpensearchmemorySpace#extraction_model_id}.

---

##### `memory_expiry_days`<sup>Optional</sup> <a name="memory_expiry_days" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.memoryExpiryDays"></a>

```python
memory_expiry_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#memory_expiry_days OpensearchmemorySpace#memory_expiry_days}.

---

##### `memory_strategies`<sup>Optional</sup> <a name="memory_strategies" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.memoryStrategies"></a>

```python
memory_strategies: IResolvable | typing.List[OpensearchmemorySpaceMemoryStrategies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#memory_strategies OpensearchmemorySpace#memory_strategies}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[OpensearchmemorySpaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#tags OpensearchmemorySpace#tags}

---

### OpensearchmemorySpaceEncryptionConfiguration <a name="OpensearchmemorySpaceEncryptionConfiguration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchmemory_space

opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration(
  kms_key_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#kms_key_arn OpensearchmemorySpace#kms_key_arn}. |

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#kms_key_arn OpensearchmemorySpace#kms_key_arn}.

---

### OpensearchmemorySpaceMemoryStrategies <a name="OpensearchmemorySpaceMemoryStrategies" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchmemory_space

opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies(
  configuration: OpensearchmemorySpaceMemoryStrategiesConfiguration = None,
  description: str = None,
  name: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration">OpensearchmemorySpaceMemoryStrategiesConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#configuration OpensearchmemorySpace#configuration}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#description OpensearchmemorySpace#description}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#name OpensearchmemorySpace#name}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#type OpensearchmemorySpace#type}. |

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.configuration"></a>

```python
configuration: OpensearchmemorySpaceMemoryStrategiesConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration">OpensearchmemorySpaceMemoryStrategiesConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#configuration OpensearchmemorySpace#configuration}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#description OpensearchmemorySpace#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#name OpensearchmemorySpace#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#type OpensearchmemorySpace#type}.

---

### OpensearchmemorySpaceMemoryStrategiesConfiguration <a name="OpensearchmemorySpaceMemoryStrategiesConfiguration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchmemory_space

opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration(
  consolidation_enabled: bool | IResolvable = None,
  extract_every_n_messages: typing.Union[int, float] = None,
  extract_every_n_tokens: typing.Union[int, float] = None,
  extraction_prompt: str = None,
  extraction_seed_recent_n: typing.Union[int, float] = None,
  extraction_seed_top_k: typing.Union[int, float] = None,
  idle_timeout_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.consolidationEnabled">consolidation_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#consolidation_enabled OpensearchmemorySpace#consolidation_enabled}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractEveryNMessages">extract_every_n_messages</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extract_every_n_messages OpensearchmemorySpace#extract_every_n_messages}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractEveryNTokens">extract_every_n_tokens</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extract_every_n_tokens OpensearchmemorySpace#extract_every_n_tokens}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractionPrompt">extraction_prompt</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_prompt OpensearchmemorySpace#extraction_prompt}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractionSeedRecentN">extraction_seed_recent_n</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_seed_recent_n OpensearchmemorySpace#extraction_seed_recent_n}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractionSeedTopK">extraction_seed_top_k</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_seed_top_k OpensearchmemorySpace#extraction_seed_top_k}. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.idleTimeoutSeconds">idle_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#idle_timeout_seconds OpensearchmemorySpace#idle_timeout_seconds}. |

---

##### `consolidation_enabled`<sup>Optional</sup> <a name="consolidation_enabled" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.consolidationEnabled"></a>

```python
consolidation_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#consolidation_enabled OpensearchmemorySpace#consolidation_enabled}.

---

##### `extract_every_n_messages`<sup>Optional</sup> <a name="extract_every_n_messages" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractEveryNMessages"></a>

```python
extract_every_n_messages: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extract_every_n_messages OpensearchmemorySpace#extract_every_n_messages}.

---

##### `extract_every_n_tokens`<sup>Optional</sup> <a name="extract_every_n_tokens" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractEveryNTokens"></a>

```python
extract_every_n_tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extract_every_n_tokens OpensearchmemorySpace#extract_every_n_tokens}.

---

##### `extraction_prompt`<sup>Optional</sup> <a name="extraction_prompt" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractionPrompt"></a>

```python
extraction_prompt: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_prompt OpensearchmemorySpace#extraction_prompt}.

---

##### `extraction_seed_recent_n`<sup>Optional</sup> <a name="extraction_seed_recent_n" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractionSeedRecentN"></a>

```python
extraction_seed_recent_n: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_seed_recent_n OpensearchmemorySpace#extraction_seed_recent_n}.

---

##### `extraction_seed_top_k`<sup>Optional</sup> <a name="extraction_seed_top_k" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.extractionSeedTopK"></a>

```python
extraction_seed_top_k: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_seed_top_k OpensearchmemorySpace#extraction_seed_top_k}.

---

##### `idle_timeout_seconds`<sup>Optional</sup> <a name="idle_timeout_seconds" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration.property.idleTimeoutSeconds"></a>

```python
idle_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#idle_timeout_seconds OpensearchmemorySpace#idle_timeout_seconds}.

---

### OpensearchmemorySpaceTags <a name="OpensearchmemorySpaceTags" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchmemory_space

opensearchmemorySpace.OpensearchmemorySpaceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#key OpensearchmemorySpace#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#value OpensearchmemorySpace#value}

---

## Classes <a name="Classes" id="Classes"></a>

### OpensearchmemorySpaceEncryptionConfigurationOutputReference <a name="OpensearchmemorySpaceEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchmemory_space

opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration">OpensearchmemorySpaceEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchmemorySpaceEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceEncryptionConfiguration">OpensearchmemorySpaceEncryptionConfiguration</a>

---


### OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference <a name="OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchmemory_space

opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetConsolidationEnabled">reset_consolidation_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractEveryNMessages">reset_extract_every_n_messages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractEveryNTokens">reset_extract_every_n_tokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractionPrompt">reset_extraction_prompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractionSeedRecentN">reset_extraction_seed_recent_n</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractionSeedTopK">reset_extraction_seed_top_k</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetIdleTimeoutSeconds">reset_idle_timeout_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_consolidation_enabled` <a name="reset_consolidation_enabled" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetConsolidationEnabled"></a>

```python
def reset_consolidation_enabled() -> None
```

##### `reset_extract_every_n_messages` <a name="reset_extract_every_n_messages" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractEveryNMessages"></a>

```python
def reset_extract_every_n_messages() -> None
```

##### `reset_extract_every_n_tokens` <a name="reset_extract_every_n_tokens" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractEveryNTokens"></a>

```python
def reset_extract_every_n_tokens() -> None
```

##### `reset_extraction_prompt` <a name="reset_extraction_prompt" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractionPrompt"></a>

```python
def reset_extraction_prompt() -> None
```

##### `reset_extraction_seed_recent_n` <a name="reset_extraction_seed_recent_n" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractionSeedRecentN"></a>

```python
def reset_extraction_seed_recent_n() -> None
```

##### `reset_extraction_seed_top_k` <a name="reset_extraction_seed_top_k" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetExtractionSeedTopK"></a>

```python
def reset_extraction_seed_top_k() -> None
```

##### `reset_idle_timeout_seconds` <a name="reset_idle_timeout_seconds" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.resetIdleTimeoutSeconds"></a>

```python
def reset_idle_timeout_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.consolidationEnabledInput">consolidation_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNMessagesInput">extract_every_n_messages_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNTokensInput">extract_every_n_tokens_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionPromptInput">extraction_prompt_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedRecentNInput">extraction_seed_recent_n_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedTopKInput">extraction_seed_top_k_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.idleTimeoutSecondsInput">idle_timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.consolidationEnabled">consolidation_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNMessages">extract_every_n_messages</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNTokens">extract_every_n_tokens</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionPrompt">extraction_prompt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedRecentN">extraction_seed_recent_n</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedTopK">extraction_seed_top_k</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.idleTimeoutSeconds">idle_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration">OpensearchmemorySpaceMemoryStrategiesConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `consolidation_enabled_input`<sup>Optional</sup> <a name="consolidation_enabled_input" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.consolidationEnabledInput"></a>

```python
consolidation_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `extract_every_n_messages_input`<sup>Optional</sup> <a name="extract_every_n_messages_input" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNMessagesInput"></a>

```python
extract_every_n_messages_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `extract_every_n_tokens_input`<sup>Optional</sup> <a name="extract_every_n_tokens_input" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNTokensInput"></a>

```python
extract_every_n_tokens_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `extraction_prompt_input`<sup>Optional</sup> <a name="extraction_prompt_input" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionPromptInput"></a>

```python
extraction_prompt_input: str
```

- *Type:* str

---

##### `extraction_seed_recent_n_input`<sup>Optional</sup> <a name="extraction_seed_recent_n_input" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedRecentNInput"></a>

```python
extraction_seed_recent_n_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `extraction_seed_top_k_input`<sup>Optional</sup> <a name="extraction_seed_top_k_input" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedTopKInput"></a>

```python
extraction_seed_top_k_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `idle_timeout_seconds_input`<sup>Optional</sup> <a name="idle_timeout_seconds_input" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.idleTimeoutSecondsInput"></a>

```python
idle_timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `consolidation_enabled`<sup>Required</sup> <a name="consolidation_enabled" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.consolidationEnabled"></a>

```python
consolidation_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `extract_every_n_messages`<sup>Required</sup> <a name="extract_every_n_messages" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNMessages"></a>

```python
extract_every_n_messages: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `extract_every_n_tokens`<sup>Required</sup> <a name="extract_every_n_tokens" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractEveryNTokens"></a>

```python
extract_every_n_tokens: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `extraction_prompt`<sup>Required</sup> <a name="extraction_prompt" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionPrompt"></a>

```python
extraction_prompt: str
```

- *Type:* str

---

##### `extraction_seed_recent_n`<sup>Required</sup> <a name="extraction_seed_recent_n" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedRecentN"></a>

```python
extraction_seed_recent_n: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `extraction_seed_top_k`<sup>Required</sup> <a name="extraction_seed_top_k" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.extractionSeedTopK"></a>

```python
extraction_seed_top_k: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `idle_timeout_seconds`<sup>Required</sup> <a name="idle_timeout_seconds" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.idleTimeoutSeconds"></a>

```python
idle_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchmemorySpaceMemoryStrategiesConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration">OpensearchmemorySpaceMemoryStrategiesConfiguration</a>

---


### OpensearchmemorySpaceMemoryStrategiesList <a name="OpensearchmemorySpaceMemoryStrategiesList" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchmemory_space

opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpensearchmemorySpaceMemoryStrategiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OpensearchmemorySpaceMemoryStrategies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a>]

---


### OpensearchmemorySpaceMemoryStrategiesOutputReference <a name="OpensearchmemorySpaceMemoryStrategiesOutputReference" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchmemory_space

opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.putConfiguration">put_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetConfiguration">reset_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_configuration` <a name="put_configuration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.putConfiguration"></a>

```python
def put_configuration(
  consolidation_enabled: bool | IResolvable = None,
  extract_every_n_messages: typing.Union[int, float] = None,
  extract_every_n_tokens: typing.Union[int, float] = None,
  extraction_prompt: str = None,
  extraction_seed_recent_n: typing.Union[int, float] = None,
  extraction_seed_top_k: typing.Union[int, float] = None,
  idle_timeout_seconds: typing.Union[int, float] = None
) -> None
```

###### `consolidation_enabled`<sup>Optional</sup> <a name="consolidation_enabled" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.putConfiguration.parameter.consolidationEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#consolidation_enabled OpensearchmemorySpace#consolidation_enabled}.

---

###### `extract_every_n_messages`<sup>Optional</sup> <a name="extract_every_n_messages" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.putConfiguration.parameter.extractEveryNMessages"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extract_every_n_messages OpensearchmemorySpace#extract_every_n_messages}.

---

###### `extract_every_n_tokens`<sup>Optional</sup> <a name="extract_every_n_tokens" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.putConfiguration.parameter.extractEveryNTokens"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extract_every_n_tokens OpensearchmemorySpace#extract_every_n_tokens}.

---

###### `extraction_prompt`<sup>Optional</sup> <a name="extraction_prompt" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.putConfiguration.parameter.extractionPrompt"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_prompt OpensearchmemorySpace#extraction_prompt}.

---

###### `extraction_seed_recent_n`<sup>Optional</sup> <a name="extraction_seed_recent_n" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.putConfiguration.parameter.extractionSeedRecentN"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_seed_recent_n OpensearchmemorySpace#extraction_seed_recent_n}.

---

###### `extraction_seed_top_k`<sup>Optional</sup> <a name="extraction_seed_top_k" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.putConfiguration.parameter.extractionSeedTopK"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#extraction_seed_top_k OpensearchmemorySpace#extraction_seed_top_k}.

---

###### `idle_timeout_seconds`<sup>Optional</sup> <a name="idle_timeout_seconds" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.putConfiguration.parameter.idleTimeoutSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/opensearchmemory_space#idle_timeout_seconds OpensearchmemorySpace#idle_timeout_seconds}.

---

##### `reset_configuration` <a name="reset_configuration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetConfiguration"></a>

```python
def reset_configuration() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference">OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.configurationInput">configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration">OpensearchmemorySpaceMemoryStrategiesConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.configuration"></a>

```python
configuration: OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference">OpensearchmemorySpaceMemoryStrategiesConfigurationOutputReference</a>

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.configurationInput"></a>

```python
configuration_input: IResolvable | OpensearchmemorySpaceMemoryStrategiesConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesConfiguration">OpensearchmemorySpaceMemoryStrategiesConfiguration</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchmemorySpaceMemoryStrategies
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceMemoryStrategies">OpensearchmemorySpaceMemoryStrategies</a>

---


### OpensearchmemorySpaceTagsList <a name="OpensearchmemorySpaceTagsList" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchmemory_space

opensearchmemorySpace.OpensearchmemorySpaceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OpensearchmemorySpaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[OpensearchmemorySpaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a>]

---


### OpensearchmemorySpaceTagsOutputReference <a name="OpensearchmemorySpaceTagsOutputReference" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import opensearchmemory_space

opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OpensearchmemorySpaceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.opensearchmemorySpace.OpensearchmemorySpaceTags">OpensearchmemorySpaceTags</a>

---



