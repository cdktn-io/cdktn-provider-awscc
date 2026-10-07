# `eventsv2EventBus` Submodule <a name="`eventsv2EventBus` Submodule" id="@cdktn/provider-awscc.eventsv2EventBus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Eventsv2EventBus <a name="Eventsv2EventBus" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_event_bus awscc_eventsv2_event_bus}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_event_bus

eventsv2EventBus.Eventsv2EventBus(
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
  encryption_configuration: Eventsv2EventBusEncryptionConfiguration = None,
  storage_configuration: Eventsv2EventBusStorageConfiguration = None,
  tags: IResolvable | typing.List[Eventsv2EventBusTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the event bus. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the event bus. Control characters and Unicode line separators are not allowed. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.Initializer.parameter.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfiguration">Eventsv2EventBusEncryptionConfiguration</a></code> | Encryption configuration for the event bus. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.Initializer.parameter.storageConfiguration">storage_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfiguration">Eventsv2EventBusStorageConfiguration</a></code> | The event storage configuration for the event bus, which controls the number of days events are retained on the bus. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTags">Eventsv2EventBusTags</a>]</code> | The tags assigned to the event bus. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.Initializer.parameter.name"></a>

- *Type:* str

The name of the event bus.

The first character must be alphanumeric; the remaining characters may also include '.', '-', and '_'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_event_bus#name Eventsv2EventBus#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.Initializer.parameter.description"></a>

- *Type:* str

A description of the event bus. Control characters and Unicode line separators are not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_event_bus#description Eventsv2EventBus#description}

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.Initializer.parameter.encryptionConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfiguration">Eventsv2EventBusEncryptionConfiguration</a>

Encryption configuration for the event bus.

The service stores and returns the customer managed key as its key ARN. The key ARN is recommended so that drift detection stays accurate. A key ID is also accepted and is matched to the returned key ARN when CloudFormation checks for drift; a key alias is accepted but can be reported as a value difference, because an alias cannot be matched to the key ARN it points to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_event_bus#encryption_configuration Eventsv2EventBus#encryption_configuration}

---

##### `storage_configuration`<sup>Optional</sup> <a name="storage_configuration" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.Initializer.parameter.storageConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfiguration">Eventsv2EventBusStorageConfiguration</a>

The event storage configuration for the event bus, which controls the number of days events are retained on the bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_event_bus#storage_configuration Eventsv2EventBus#storage_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTags">Eventsv2EventBusTags</a>]

The tags assigned to the event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_event_bus#tags Eventsv2EventBus#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.putEncryptionConfiguration">put_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.putStorageConfiguration">put_storage_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.resetEncryptionConfiguration">reset_encryption_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.resetStorageConfiguration">reset_storage_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_encryption_configuration` <a name="put_encryption_configuration" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.putEncryptionConfiguration"></a>

```python
def put_encryption_configuration(
  kms_key_identifier: str = None
) -> None
```

###### `kms_key_identifier`<sup>Optional</sup> <a name="kms_key_identifier" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.putEncryptionConfiguration.parameter.kmsKeyIdentifier"></a>

- *Type:* str

The identifier of the AWS KMS customer managed key that the event bus uses to encrypt events.

You can specify the key ARN, key ID, alias name, or alias ARN. If you do not specify a key, EventBridge uses an AWS owned key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_event_bus#kms_key_identifier Eventsv2EventBus#kms_key_identifier}

---

##### `put_storage_configuration` <a name="put_storage_configuration" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.putStorageConfiguration"></a>

```python
def put_storage_configuration(
  retention_period_in_days: typing.Union[int, float] = None
) -> None
```

###### `retention_period_in_days`<sup>Optional</sup> <a name="retention_period_in_days" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.putStorageConfiguration.parameter.retentionPeriodInDays"></a>

- *Type:* typing.Union[int, float]

The number of days events are retained on the event bus for replay, 1-365.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_event_bus#retention_period_in_days Eventsv2EventBus#retention_period_in_days}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Eventsv2EventBusTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTags">Eventsv2EventBusTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_encryption_configuration` <a name="reset_encryption_configuration" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.resetEncryptionConfiguration"></a>

```python
def reset_encryption_configuration() -> None
```

##### `reset_storage_configuration` <a name="reset_storage_configuration" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.resetStorageConfiguration"></a>

```python
def reset_storage_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Eventsv2EventBus resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.isConstruct"></a>

```python
from cdktn_provider_awscc import eventsv2_event_bus

eventsv2EventBus.Eventsv2EventBus.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.isTerraformElement"></a>

```python
from cdktn_provider_awscc import eventsv2_event_bus

eventsv2EventBus.Eventsv2EventBus.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.isTerraformResource"></a>

```python
from cdktn_provider_awscc import eventsv2_event_bus

eventsv2EventBus.Eventsv2EventBus.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import eventsv2_event_bus

eventsv2EventBus.Eventsv2EventBus.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Eventsv2EventBus resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Eventsv2EventBus to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Eventsv2EventBus that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_event_bus#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Eventsv2EventBus to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference">Eventsv2EventBusEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.eventBusArn">event_bus_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.lastModifiedTime">last_modified_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.storageConfiguration">storage_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference">Eventsv2EventBusStorageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsList">Eventsv2EventBusTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.encryptionConfigurationInput">encryption_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfiguration">Eventsv2EventBusEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.storageConfigurationInput">storage_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfiguration">Eventsv2EventBusStorageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTags">Eventsv2EventBusTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `encryption_configuration`<sup>Required</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.encryptionConfiguration"></a>

```python
encryption_configuration: Eventsv2EventBusEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference">Eventsv2EventBusEncryptionConfigurationOutputReference</a>

---

##### `event_bus_arn`<sup>Required</sup> <a name="event_bus_arn" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.eventBusArn"></a>

```python
event_bus_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modified_time`<sup>Required</sup> <a name="last_modified_time" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.lastModifiedTime"></a>

```python
last_modified_time: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `storage_configuration`<sup>Required</sup> <a name="storage_configuration" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.storageConfiguration"></a>

```python
storage_configuration: Eventsv2EventBusStorageConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference">Eventsv2EventBusStorageConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.tags"></a>

```python
tags: Eventsv2EventBusTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsList">Eventsv2EventBusTagsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `encryption_configuration_input`<sup>Optional</sup> <a name="encryption_configuration_input" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.encryptionConfigurationInput"></a>

```python
encryption_configuration_input: IResolvable | Eventsv2EventBusEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfiguration">Eventsv2EventBusEncryptionConfiguration</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `storage_configuration_input`<sup>Optional</sup> <a name="storage_configuration_input" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.storageConfigurationInput"></a>

```python
storage_configuration_input: IResolvable | Eventsv2EventBusStorageConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfiguration">Eventsv2EventBusStorageConfiguration</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Eventsv2EventBusTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTags">Eventsv2EventBusTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBus.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Eventsv2EventBusConfig <a name="Eventsv2EventBusConfig" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusConfig.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_event_bus

eventsv2EventBus.Eventsv2EventBusConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  description: str = None,
  encryption_configuration: Eventsv2EventBusEncryptionConfiguration = None,
  storage_configuration: Eventsv2EventBusStorageConfiguration = None,
  tags: IResolvable | typing.List[Eventsv2EventBusTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusConfig.property.name">name</a></code> | <code>str</code> | The name of the event bus. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusConfig.property.description">description</a></code> | <code>str</code> | A description of the event bus. Control characters and Unicode line separators are not allowed. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusConfig.property.encryptionConfiguration">encryption_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfiguration">Eventsv2EventBusEncryptionConfiguration</a></code> | Encryption configuration for the event bus. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusConfig.property.storageConfiguration">storage_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfiguration">Eventsv2EventBusStorageConfiguration</a></code> | The event storage configuration for the event bus, which controls the number of days events are retained on the bus. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTags">Eventsv2EventBusTags</a>]</code> | The tags assigned to the event bus. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the event bus.

The first character must be alphanumeric; the remaining characters may also include '.', '-', and '_'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_event_bus#name Eventsv2EventBus#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the event bus. Control characters and Unicode line separators are not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_event_bus#description Eventsv2EventBus#description}

---

##### `encryption_configuration`<sup>Optional</sup> <a name="encryption_configuration" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusConfig.property.encryptionConfiguration"></a>

```python
encryption_configuration: Eventsv2EventBusEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfiguration">Eventsv2EventBusEncryptionConfiguration</a>

Encryption configuration for the event bus.

The service stores and returns the customer managed key as its key ARN. The key ARN is recommended so that drift detection stays accurate. A key ID is also accepted and is matched to the returned key ARN when CloudFormation checks for drift; a key alias is accepted but can be reported as a value difference, because an alias cannot be matched to the key ARN it points to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_event_bus#encryption_configuration Eventsv2EventBus#encryption_configuration}

---

##### `storage_configuration`<sup>Optional</sup> <a name="storage_configuration" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusConfig.property.storageConfiguration"></a>

```python
storage_configuration: Eventsv2EventBusStorageConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfiguration">Eventsv2EventBusStorageConfiguration</a>

The event storage configuration for the event bus, which controls the number of days events are retained on the bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_event_bus#storage_configuration Eventsv2EventBus#storage_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Eventsv2EventBusTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTags">Eventsv2EventBusTags</a>]

The tags assigned to the event bus.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_event_bus#tags Eventsv2EventBus#tags}

---

### Eventsv2EventBusEncryptionConfiguration <a name="Eventsv2EventBusEncryptionConfiguration" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_event_bus

eventsv2EventBus.Eventsv2EventBusEncryptionConfiguration(
  kms_key_identifier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfiguration.property.kmsKeyIdentifier">kms_key_identifier</a></code> | <code>str</code> | The identifier of the AWS KMS customer managed key that the event bus uses to encrypt events. |

---

##### `kms_key_identifier`<sup>Optional</sup> <a name="kms_key_identifier" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfiguration.property.kmsKeyIdentifier"></a>

```python
kms_key_identifier: str
```

- *Type:* str

The identifier of the AWS KMS customer managed key that the event bus uses to encrypt events.

You can specify the key ARN, key ID, alias name, or alias ARN. If you do not specify a key, EventBridge uses an AWS owned key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_event_bus#kms_key_identifier Eventsv2EventBus#kms_key_identifier}

---

### Eventsv2EventBusStorageConfiguration <a name="Eventsv2EventBusStorageConfiguration" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_event_bus

eventsv2EventBus.Eventsv2EventBusStorageConfiguration(
  retention_period_in_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfiguration.property.retentionPeriodInDays">retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | The number of days events are retained on the event bus for replay, 1-365. |

---

##### `retention_period_in_days`<sup>Optional</sup> <a name="retention_period_in_days" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfiguration.property.retentionPeriodInDays"></a>

```python
retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of days events are retained on the event bus for replay, 1-365.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_event_bus#retention_period_in_days Eventsv2EventBus#retention_period_in_days}

---

### Eventsv2EventBusTags <a name="Eventsv2EventBusTags" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTags.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_event_bus

eventsv2EventBus.Eventsv2EventBusTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTags.property.key">key</a></code> | <code>str</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTags.property.value">value</a></code> | <code>str</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key.

For each resource, each tag key must be unique and each key can have only one value; keys are case sensitive. A key cannot begin or end with a whitespace character; whitespace inside the key is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_event_bus#key Eventsv2EventBus#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag value.

May be empty. A value cannot begin or end with a whitespace character; whitespace inside the value is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/eventsv2_event_bus#value Eventsv2EventBus#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Eventsv2EventBusEncryptionConfigurationOutputReference <a name="Eventsv2EventBusEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_event_bus

eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.resetKmsKeyIdentifier">reset_kms_key_identifier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_identifier` <a name="reset_kms_key_identifier" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.resetKmsKeyIdentifier"></a>

```python
def reset_kms_key_identifier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.property.kmsKeyIdentifierInput">kms_key_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.property.kmsKeyIdentifier">kms_key_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfiguration">Eventsv2EventBusEncryptionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_identifier_input`<sup>Optional</sup> <a name="kms_key_identifier_input" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.property.kmsKeyIdentifierInput"></a>

```python
kms_key_identifier_input: str
```

- *Type:* str

---

##### `kms_key_identifier`<sup>Required</sup> <a name="kms_key_identifier" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.property.kmsKeyIdentifier"></a>

```python
kms_key_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Eventsv2EventBusEncryptionConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusEncryptionConfiguration">Eventsv2EventBusEncryptionConfiguration</a>

---


### Eventsv2EventBusStorageConfigurationOutputReference <a name="Eventsv2EventBusStorageConfigurationOutputReference" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_event_bus

eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.resetRetentionPeriodInDays">reset_retention_period_in_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_retention_period_in_days` <a name="reset_retention_period_in_days" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.resetRetentionPeriodInDays"></a>

```python
def reset_retention_period_in_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.property.retentionPeriodInDaysInput">retention_period_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.property.retentionPeriodInDays">retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfiguration">Eventsv2EventBusStorageConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `retention_period_in_days_input`<sup>Optional</sup> <a name="retention_period_in_days_input" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.property.retentionPeriodInDaysInput"></a>

```python
retention_period_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_period_in_days`<sup>Required</sup> <a name="retention_period_in_days" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.property.retentionPeriodInDays"></a>

```python
retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Eventsv2EventBusStorageConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusStorageConfiguration">Eventsv2EventBusStorageConfiguration</a>

---


### Eventsv2EventBusTagsList <a name="Eventsv2EventBusTagsList" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_event_bus

eventsv2EventBus.Eventsv2EventBusTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Eventsv2EventBusTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTags">Eventsv2EventBusTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Eventsv2EventBusTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTags">Eventsv2EventBusTags</a>]

---


### Eventsv2EventBusTagsOutputReference <a name="Eventsv2EventBusTagsOutputReference" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import eventsv2_event_bus

eventsv2EventBus.Eventsv2EventBusTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTags">Eventsv2EventBusTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Eventsv2EventBusTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.eventsv2EventBus.Eventsv2EventBusTags">Eventsv2EventBusTags</a>

---



