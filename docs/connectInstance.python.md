# `connectInstance` Submodule <a name="`connectInstance` Submodule" id="@cdktn/provider-awscc.connectInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectInstance <a name="ConnectInstance" id="@cdktn/provider-awscc.connectInstance.ConnectInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance awscc_connect_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer"></a>

```python
from cdktn_provider_awscc import connect_instance

connectInstance.ConnectInstance(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  attributes: ConnectInstanceAttributes,
  identity_management_type: str,
  directory_id: str = None,
  instance_alias: str = None,
  tags: IResolvable | typing.List[ConnectInstanceTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes">ConnectInstanceAttributes</a></code> | The attributes for the instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.identityManagementType">identity_management_type</a></code> | <code>str</code> | Specifies the type of directory integration for new instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.directoryId">directory_id</a></code> | <code>str</code> | Existing directoryId user wants to map to the new Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.instanceAlias">instance_alias</a></code> | <code>str</code> | Alias of the new directory created as part of new instance creation. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.attributes"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes">ConnectInstanceAttributes</a>

The attributes for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#attributes ConnectInstance#attributes}

---

##### `identity_management_type`<sup>Required</sup> <a name="identity_management_type" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.identityManagementType"></a>

- *Type:* str

Specifies the type of directory integration for new instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#identity_management_type ConnectInstance#identity_management_type}

---

##### `directory_id`<sup>Optional</sup> <a name="directory_id" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.directoryId"></a>

- *Type:* str

Existing directoryId user wants to map to the new Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#directory_id ConnectInstance#directory_id}

---

##### `instance_alias`<sup>Optional</sup> <a name="instance_alias" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.instanceAlias"></a>

- *Type:* str

Alias of the new directory created as part of new instance creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#instance_alias ConnectInstance#instance_alias}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#tags ConnectInstance#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.putAttributes">put_attributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.resetDirectoryId">reset_directory_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.resetInstanceAlias">reset_instance_alias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_attributes` <a name="put_attributes" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.putAttributes"></a>

```python
def put_attributes(
  inbound_calls: bool | IResolvable,
  outbound_calls: bool | IResolvable,
  auto_resolve_best_voices: bool | IResolvable = None,
  contactflow_logs: bool | IResolvable = None,
  contact_lens: bool | IResolvable = None,
  early_media: bool | IResolvable = None,
  enhanced_chat_monitoring: bool | IResolvable = None,
  enhanced_contact_monitoring: bool | IResolvable = None,
  high_volume_out_bound: bool | IResolvable = None,
  message_streaming: bool | IResolvable = None,
  multi_party_chat_conference: bool | IResolvable = None,
  multi_party_conference: bool | IResolvable = None,
  use_custom_tts_voices: bool | IResolvable = None
) -> None
```

###### `inbound_calls`<sup>Required</sup> <a name="inbound_calls" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.putAttributes.parameter.inboundCalls"></a>

- *Type:* bool | cdktn.IResolvable

Mandatory element which enables inbound calls on new instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#inbound_calls ConnectInstance#inbound_calls}

---

###### `outbound_calls`<sup>Required</sup> <a name="outbound_calls" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.putAttributes.parameter.outboundCalls"></a>

- *Type:* bool | cdktn.IResolvable

Mandatory element which enables outbound calls on new instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#outbound_calls ConnectInstance#outbound_calls}

---

###### `auto_resolve_best_voices`<sup>Optional</sup> <a name="auto_resolve_best_voices" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.putAttributes.parameter.autoResolveBestVoices"></a>

- *Type:* bool | cdktn.IResolvable

Boolean flag which enables AUTO_RESOLVE_BEST_VOICES on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#auto_resolve_best_voices ConnectInstance#auto_resolve_best_voices}

---

###### `contactflow_logs`<sup>Optional</sup> <a name="contactflow_logs" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.putAttributes.parameter.contactflowLogs"></a>

- *Type:* bool | cdktn.IResolvable

Boolean flag which enables CONTACTFLOW_LOGS on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#contactflow_logs ConnectInstance#contactflow_logs}

---

###### `contact_lens`<sup>Optional</sup> <a name="contact_lens" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.putAttributes.parameter.contactLens"></a>

- *Type:* bool | cdktn.IResolvable

Boolean flag which enables CONTACT_LENS on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#contact_lens ConnectInstance#contact_lens}

---

###### `early_media`<sup>Optional</sup> <a name="early_media" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.putAttributes.parameter.earlyMedia"></a>

- *Type:* bool | cdktn.IResolvable

Boolean flag which enables EARLY_MEDIA on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#early_media ConnectInstance#early_media}

---

###### `enhanced_chat_monitoring`<sup>Optional</sup> <a name="enhanced_chat_monitoring" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.putAttributes.parameter.enhancedChatMonitoring"></a>

- *Type:* bool | cdktn.IResolvable

Boolean flag which enables ENHANCED_CHAT_MONITORING on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#enhanced_chat_monitoring ConnectInstance#enhanced_chat_monitoring}

---

###### `enhanced_contact_monitoring`<sup>Optional</sup> <a name="enhanced_contact_monitoring" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.putAttributes.parameter.enhancedContactMonitoring"></a>

- *Type:* bool | cdktn.IResolvable

Boolean flag which enables ENHANCED_CONTACT_MONITORING on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#enhanced_contact_monitoring ConnectInstance#enhanced_contact_monitoring}

---

###### `high_volume_out_bound`<sup>Optional</sup> <a name="high_volume_out_bound" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.putAttributes.parameter.highVolumeOutBound"></a>

- *Type:* bool | cdktn.IResolvable

Boolean flag which enables HIGH_VOLUME_OUTBOUND on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#high_volume_out_bound ConnectInstance#high_volume_out_bound}

---

###### `message_streaming`<sup>Optional</sup> <a name="message_streaming" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.putAttributes.parameter.messageStreaming"></a>

- *Type:* bool | cdktn.IResolvable

Boolean flag which enables MESSAGE_STREAMING on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#message_streaming ConnectInstance#message_streaming}

---

###### `multi_party_chat_conference`<sup>Optional</sup> <a name="multi_party_chat_conference" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.putAttributes.parameter.multiPartyChatConference"></a>

- *Type:* bool | cdktn.IResolvable

Boolean flag which enables MULTI_PARTY_CHAT_CONFERENCE on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#multi_party_chat_conference ConnectInstance#multi_party_chat_conference}

---

###### `multi_party_conference`<sup>Optional</sup> <a name="multi_party_conference" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.putAttributes.parameter.multiPartyConference"></a>

- *Type:* bool | cdktn.IResolvable

Boolean flag which enables MULTI_PARTY_CONFERENCE on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#multi_party_conference ConnectInstance#multi_party_conference}

---

###### `use_custom_tts_voices`<sup>Optional</sup> <a name="use_custom_tts_voices" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.putAttributes.parameter.useCustomTtsVoices"></a>

- *Type:* bool | cdktn.IResolvable

Boolean flag which enables USE_CUSTOM_TTS_VOICES on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#use_custom_tts_voices ConnectInstance#use_custom_tts_voices}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ConnectInstanceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a>]

---

##### `reset_directory_id` <a name="reset_directory_id" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.resetDirectoryId"></a>

```python
def reset_directory_id() -> None
```

##### `reset_instance_alias` <a name="reset_instance_alias" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.resetInstanceAlias"></a>

```python
def reset_instance_alias() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ConnectInstance resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.isConstruct"></a>

```python
from cdktn_provider_awscc import connect_instance

connectInstance.ConnectInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.isTerraformElement"></a>

```python
from cdktn_provider_awscc import connect_instance

connectInstance.ConnectInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.isTerraformResource"></a>

```python
from cdktn_provider_awscc import connect_instance

connectInstance.ConnectInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import connect_instance

connectInstance.ConnectInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ConnectInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConnectInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConnectInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConnectInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference">ConnectInstanceAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceStatus">instance_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.serviceRole">service_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList">ConnectInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.attributesInput">attributes_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes">ConnectInstanceAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.directoryIdInput">directory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.identityManagementTypeInput">identity_management_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceAliasInput">instance_alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.directoryId">directory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.identityManagementType">identity_management_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceAlias">instance_alias</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.attributes"></a>

```python
attributes: ConnectInstanceAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference">ConnectInstanceAttributesOutputReference</a>

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `instance_status`<sup>Required</sup> <a name="instance_status" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceStatus"></a>

```python
instance_status: str
```

- *Type:* str

---

##### `service_role`<sup>Required</sup> <a name="service_role" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.serviceRole"></a>

```python
service_role: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.tags"></a>

```python
tags: ConnectInstanceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList">ConnectInstanceTagsList</a>

---

##### `attributes_input`<sup>Optional</sup> <a name="attributes_input" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.attributesInput"></a>

```python
attributes_input: IResolvable | ConnectInstanceAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes">ConnectInstanceAttributes</a>

---

##### `directory_id_input`<sup>Optional</sup> <a name="directory_id_input" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.directoryIdInput"></a>

```python
directory_id_input: str
```

- *Type:* str

---

##### `identity_management_type_input`<sup>Optional</sup> <a name="identity_management_type_input" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.identityManagementTypeInput"></a>

```python
identity_management_type_input: str
```

- *Type:* str

---

##### `instance_alias_input`<sup>Optional</sup> <a name="instance_alias_input" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceAliasInput"></a>

```python
instance_alias_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ConnectInstanceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a>]

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

---

##### `identity_management_type`<sup>Required</sup> <a name="identity_management_type" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.identityManagementType"></a>

```python
identity_management_type: str
```

- *Type:* str

---

##### `instance_alias`<sup>Required</sup> <a name="instance_alias" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.instanceAlias"></a>

```python
instance_alias: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectInstance.ConnectInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectInstanceAttributes <a name="ConnectInstanceAttributes" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import connect_instance

connectInstance.ConnectInstanceAttributes(
  inbound_calls: bool | IResolvable,
  outbound_calls: bool | IResolvable,
  auto_resolve_best_voices: bool | IResolvable = None,
  contactflow_logs: bool | IResolvable = None,
  contact_lens: bool | IResolvable = None,
  early_media: bool | IResolvable = None,
  enhanced_chat_monitoring: bool | IResolvable = None,
  enhanced_contact_monitoring: bool | IResolvable = None,
  high_volume_out_bound: bool | IResolvable = None,
  message_streaming: bool | IResolvable = None,
  multi_party_chat_conference: bool | IResolvable = None,
  multi_party_conference: bool | IResolvable = None,
  use_custom_tts_voices: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.inboundCalls">inbound_calls</a></code> | <code>bool \| cdktn.IResolvable</code> | Mandatory element which enables inbound calls on new instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.outboundCalls">outbound_calls</a></code> | <code>bool \| cdktn.IResolvable</code> | Mandatory element which enables outbound calls on new instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.autoResolveBestVoices">auto_resolve_best_voices</a></code> | <code>bool \| cdktn.IResolvable</code> | Boolean flag which enables AUTO_RESOLVE_BEST_VOICES on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.contactflowLogs">contactflow_logs</a></code> | <code>bool \| cdktn.IResolvable</code> | Boolean flag which enables CONTACTFLOW_LOGS on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.contactLens">contact_lens</a></code> | <code>bool \| cdktn.IResolvable</code> | Boolean flag which enables CONTACT_LENS on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.earlyMedia">early_media</a></code> | <code>bool \| cdktn.IResolvable</code> | Boolean flag which enables EARLY_MEDIA on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.enhancedChatMonitoring">enhanced_chat_monitoring</a></code> | <code>bool \| cdktn.IResolvable</code> | Boolean flag which enables ENHANCED_CHAT_MONITORING on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.enhancedContactMonitoring">enhanced_contact_monitoring</a></code> | <code>bool \| cdktn.IResolvable</code> | Boolean flag which enables ENHANCED_CONTACT_MONITORING on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.highVolumeOutBound">high_volume_out_bound</a></code> | <code>bool \| cdktn.IResolvable</code> | Boolean flag which enables HIGH_VOLUME_OUTBOUND on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.messageStreaming">message_streaming</a></code> | <code>bool \| cdktn.IResolvable</code> | Boolean flag which enables MESSAGE_STREAMING on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.multiPartyChatConference">multi_party_chat_conference</a></code> | <code>bool \| cdktn.IResolvable</code> | Boolean flag which enables MULTI_PARTY_CHAT_CONFERENCE on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.multiPartyConference">multi_party_conference</a></code> | <code>bool \| cdktn.IResolvable</code> | Boolean flag which enables MULTI_PARTY_CONFERENCE on an instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.useCustomTtsVoices">use_custom_tts_voices</a></code> | <code>bool \| cdktn.IResolvable</code> | Boolean flag which enables USE_CUSTOM_TTS_VOICES on an instance. |

---

##### `inbound_calls`<sup>Required</sup> <a name="inbound_calls" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.inboundCalls"></a>

```python
inbound_calls: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Mandatory element which enables inbound calls on new instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#inbound_calls ConnectInstance#inbound_calls}

---

##### `outbound_calls`<sup>Required</sup> <a name="outbound_calls" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.outboundCalls"></a>

```python
outbound_calls: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Mandatory element which enables outbound calls on new instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#outbound_calls ConnectInstance#outbound_calls}

---

##### `auto_resolve_best_voices`<sup>Optional</sup> <a name="auto_resolve_best_voices" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.autoResolveBestVoices"></a>

```python
auto_resolve_best_voices: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Boolean flag which enables AUTO_RESOLVE_BEST_VOICES on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#auto_resolve_best_voices ConnectInstance#auto_resolve_best_voices}

---

##### `contactflow_logs`<sup>Optional</sup> <a name="contactflow_logs" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.contactflowLogs"></a>

```python
contactflow_logs: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Boolean flag which enables CONTACTFLOW_LOGS on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#contactflow_logs ConnectInstance#contactflow_logs}

---

##### `contact_lens`<sup>Optional</sup> <a name="contact_lens" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.contactLens"></a>

```python
contact_lens: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Boolean flag which enables CONTACT_LENS on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#contact_lens ConnectInstance#contact_lens}

---

##### `early_media`<sup>Optional</sup> <a name="early_media" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.earlyMedia"></a>

```python
early_media: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Boolean flag which enables EARLY_MEDIA on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#early_media ConnectInstance#early_media}

---

##### `enhanced_chat_monitoring`<sup>Optional</sup> <a name="enhanced_chat_monitoring" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.enhancedChatMonitoring"></a>

```python
enhanced_chat_monitoring: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Boolean flag which enables ENHANCED_CHAT_MONITORING on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#enhanced_chat_monitoring ConnectInstance#enhanced_chat_monitoring}

---

##### `enhanced_contact_monitoring`<sup>Optional</sup> <a name="enhanced_contact_monitoring" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.enhancedContactMonitoring"></a>

```python
enhanced_contact_monitoring: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Boolean flag which enables ENHANCED_CONTACT_MONITORING on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#enhanced_contact_monitoring ConnectInstance#enhanced_contact_monitoring}

---

##### `high_volume_out_bound`<sup>Optional</sup> <a name="high_volume_out_bound" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.highVolumeOutBound"></a>

```python
high_volume_out_bound: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Boolean flag which enables HIGH_VOLUME_OUTBOUND on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#high_volume_out_bound ConnectInstance#high_volume_out_bound}

---

##### `message_streaming`<sup>Optional</sup> <a name="message_streaming" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.messageStreaming"></a>

```python
message_streaming: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Boolean flag which enables MESSAGE_STREAMING on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#message_streaming ConnectInstance#message_streaming}

---

##### `multi_party_chat_conference`<sup>Optional</sup> <a name="multi_party_chat_conference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.multiPartyChatConference"></a>

```python
multi_party_chat_conference: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Boolean flag which enables MULTI_PARTY_CHAT_CONFERENCE on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#multi_party_chat_conference ConnectInstance#multi_party_chat_conference}

---

##### `multi_party_conference`<sup>Optional</sup> <a name="multi_party_conference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.multiPartyConference"></a>

```python
multi_party_conference: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Boolean flag which enables MULTI_PARTY_CONFERENCE on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#multi_party_conference ConnectInstance#multi_party_conference}

---

##### `use_custom_tts_voices`<sup>Optional</sup> <a name="use_custom_tts_voices" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes.property.useCustomTtsVoices"></a>

```python
use_custom_tts_voices: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Boolean flag which enables USE_CUSTOM_TTS_VOICES on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#use_custom_tts_voices ConnectInstance#use_custom_tts_voices}

---

### ConnectInstanceConfig <a name="ConnectInstanceConfig" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import connect_instance

connectInstance.ConnectInstanceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  attributes: ConnectInstanceAttributes,
  identity_management_type: str,
  directory_id: str = None,
  instance_alias: str = None,
  tags: IResolvable | typing.List[ConnectInstanceTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes">ConnectInstanceAttributes</a></code> | The attributes for the instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.identityManagementType">identity_management_type</a></code> | <code>str</code> | Specifies the type of directory integration for new instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.directoryId">directory_id</a></code> | <code>str</code> | Existing directoryId user wants to map to the new Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.instanceAlias">instance_alias</a></code> | <code>str</code> | Alias of the new directory created as part of new instance creation. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.attributes"></a>

```python
attributes: ConnectInstanceAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes">ConnectInstanceAttributes</a>

The attributes for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#attributes ConnectInstance#attributes}

---

##### `identity_management_type`<sup>Required</sup> <a name="identity_management_type" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.identityManagementType"></a>

```python
identity_management_type: str
```

- *Type:* str

Specifies the type of directory integration for new instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#identity_management_type ConnectInstance#identity_management_type}

---

##### `directory_id`<sup>Optional</sup> <a name="directory_id" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

Existing directoryId user wants to map to the new Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#directory_id ConnectInstance#directory_id}

---

##### `instance_alias`<sup>Optional</sup> <a name="instance_alias" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.instanceAlias"></a>

```python
instance_alias: str
```

- *Type:* str

Alias of the new directory created as part of new instance creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#instance_alias ConnectInstance#instance_alias}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ConnectInstanceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#tags ConnectInstance#tags}

---

### ConnectInstanceTags <a name="ConnectInstanceTags" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTags.Initializer"></a>

```python
from cdktn_provider_awscc import connect_instance

connectInstance.ConnectInstanceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#key ConnectInstance#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance#value ConnectInstance#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectInstanceAttributesOutputReference <a name="ConnectInstanceAttributesOutputReference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_instance

connectInstance.ConnectInstanceAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetAutoResolveBestVoices">reset_auto_resolve_best_voices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetContactflowLogs">reset_contactflow_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetContactLens">reset_contact_lens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetEarlyMedia">reset_early_media</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetEnhancedChatMonitoring">reset_enhanced_chat_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetEnhancedContactMonitoring">reset_enhanced_contact_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetHighVolumeOutBound">reset_high_volume_out_bound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetMessageStreaming">reset_message_streaming</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetMultiPartyChatConference">reset_multi_party_chat_conference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetMultiPartyConference">reset_multi_party_conference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetUseCustomTtsVoices">reset_use_custom_tts_voices</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auto_resolve_best_voices` <a name="reset_auto_resolve_best_voices" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetAutoResolveBestVoices"></a>

```python
def reset_auto_resolve_best_voices() -> None
```

##### `reset_contactflow_logs` <a name="reset_contactflow_logs" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetContactflowLogs"></a>

```python
def reset_contactflow_logs() -> None
```

##### `reset_contact_lens` <a name="reset_contact_lens" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetContactLens"></a>

```python
def reset_contact_lens() -> None
```

##### `reset_early_media` <a name="reset_early_media" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetEarlyMedia"></a>

```python
def reset_early_media() -> None
```

##### `reset_enhanced_chat_monitoring` <a name="reset_enhanced_chat_monitoring" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetEnhancedChatMonitoring"></a>

```python
def reset_enhanced_chat_monitoring() -> None
```

##### `reset_enhanced_contact_monitoring` <a name="reset_enhanced_contact_monitoring" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetEnhancedContactMonitoring"></a>

```python
def reset_enhanced_contact_monitoring() -> None
```

##### `reset_high_volume_out_bound` <a name="reset_high_volume_out_bound" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetHighVolumeOutBound"></a>

```python
def reset_high_volume_out_bound() -> None
```

##### `reset_message_streaming` <a name="reset_message_streaming" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetMessageStreaming"></a>

```python
def reset_message_streaming() -> None
```

##### `reset_multi_party_chat_conference` <a name="reset_multi_party_chat_conference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetMultiPartyChatConference"></a>

```python
def reset_multi_party_chat_conference() -> None
```

##### `reset_multi_party_conference` <a name="reset_multi_party_conference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetMultiPartyConference"></a>

```python
def reset_multi_party_conference() -> None
```

##### `reset_use_custom_tts_voices` <a name="reset_use_custom_tts_voices" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.resetUseCustomTtsVoices"></a>

```python
def reset_use_custom_tts_voices() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.autoResolveBestVoicesInput">auto_resolve_best_voices_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactflowLogsInput">contactflow_logs_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactLensInput">contact_lens_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.earlyMediaInput">early_media_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedChatMonitoringInput">enhanced_chat_monitoring_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedContactMonitoringInput">enhanced_contact_monitoring_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.highVolumeOutBoundInput">high_volume_out_bound_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.inboundCallsInput">inbound_calls_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.messageStreamingInput">message_streaming_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyChatConferenceInput">multi_party_chat_conference_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyConferenceInput">multi_party_conference_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.outboundCallsInput">outbound_calls_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.useCustomTtsVoicesInput">use_custom_tts_voices_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.autoResolveBestVoices">auto_resolve_best_voices</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactflowLogs">contactflow_logs</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactLens">contact_lens</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.earlyMedia">early_media</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedChatMonitoring">enhanced_chat_monitoring</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedContactMonitoring">enhanced_contact_monitoring</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.highVolumeOutBound">high_volume_out_bound</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.inboundCalls">inbound_calls</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.messageStreaming">message_streaming</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyChatConference">multi_party_chat_conference</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyConference">multi_party_conference</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.outboundCalls">outbound_calls</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.useCustomTtsVoices">use_custom_tts_voices</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes">ConnectInstanceAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_resolve_best_voices_input`<sup>Optional</sup> <a name="auto_resolve_best_voices_input" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.autoResolveBestVoicesInput"></a>

```python
auto_resolve_best_voices_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `contactflow_logs_input`<sup>Optional</sup> <a name="contactflow_logs_input" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactflowLogsInput"></a>

```python
contactflow_logs_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `contact_lens_input`<sup>Optional</sup> <a name="contact_lens_input" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactLensInput"></a>

```python
contact_lens_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `early_media_input`<sup>Optional</sup> <a name="early_media_input" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.earlyMediaInput"></a>

```python
early_media_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enhanced_chat_monitoring_input`<sup>Optional</sup> <a name="enhanced_chat_monitoring_input" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedChatMonitoringInput"></a>

```python
enhanced_chat_monitoring_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enhanced_contact_monitoring_input`<sup>Optional</sup> <a name="enhanced_contact_monitoring_input" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedContactMonitoringInput"></a>

```python
enhanced_contact_monitoring_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `high_volume_out_bound_input`<sup>Optional</sup> <a name="high_volume_out_bound_input" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.highVolumeOutBoundInput"></a>

```python
high_volume_out_bound_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `inbound_calls_input`<sup>Optional</sup> <a name="inbound_calls_input" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.inboundCallsInput"></a>

```python
inbound_calls_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `message_streaming_input`<sup>Optional</sup> <a name="message_streaming_input" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.messageStreamingInput"></a>

```python
message_streaming_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `multi_party_chat_conference_input`<sup>Optional</sup> <a name="multi_party_chat_conference_input" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyChatConferenceInput"></a>

```python
multi_party_chat_conference_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `multi_party_conference_input`<sup>Optional</sup> <a name="multi_party_conference_input" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyConferenceInput"></a>

```python
multi_party_conference_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `outbound_calls_input`<sup>Optional</sup> <a name="outbound_calls_input" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.outboundCallsInput"></a>

```python
outbound_calls_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `use_custom_tts_voices_input`<sup>Optional</sup> <a name="use_custom_tts_voices_input" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.useCustomTtsVoicesInput"></a>

```python
use_custom_tts_voices_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `auto_resolve_best_voices`<sup>Required</sup> <a name="auto_resolve_best_voices" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.autoResolveBestVoices"></a>

```python
auto_resolve_best_voices: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `contactflow_logs`<sup>Required</sup> <a name="contactflow_logs" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactflowLogs"></a>

```python
contactflow_logs: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `contact_lens`<sup>Required</sup> <a name="contact_lens" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.contactLens"></a>

```python
contact_lens: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `early_media`<sup>Required</sup> <a name="early_media" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.earlyMedia"></a>

```python
early_media: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enhanced_chat_monitoring`<sup>Required</sup> <a name="enhanced_chat_monitoring" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedChatMonitoring"></a>

```python
enhanced_chat_monitoring: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enhanced_contact_monitoring`<sup>Required</sup> <a name="enhanced_contact_monitoring" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.enhancedContactMonitoring"></a>

```python
enhanced_contact_monitoring: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `high_volume_out_bound`<sup>Required</sup> <a name="high_volume_out_bound" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.highVolumeOutBound"></a>

```python
high_volume_out_bound: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `inbound_calls`<sup>Required</sup> <a name="inbound_calls" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.inboundCalls"></a>

```python
inbound_calls: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `message_streaming`<sup>Required</sup> <a name="message_streaming" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.messageStreaming"></a>

```python
message_streaming: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `multi_party_chat_conference`<sup>Required</sup> <a name="multi_party_chat_conference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyChatConference"></a>

```python
multi_party_chat_conference: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `multi_party_conference`<sup>Required</sup> <a name="multi_party_conference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.multiPartyConference"></a>

```python
multi_party_conference: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `outbound_calls`<sup>Required</sup> <a name="outbound_calls" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.outboundCalls"></a>

```python
outbound_calls: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `use_custom_tts_voices`<sup>Required</sup> <a name="use_custom_tts_voices" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.useCustomTtsVoices"></a>

```python
use_custom_tts_voices: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectInstanceAttributes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceAttributes">ConnectInstanceAttributes</a>

---


### ConnectInstanceTagsList <a name="ConnectInstanceTagsList" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import connect_instance

connectInstance.ConnectInstanceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConnectInstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConnectInstanceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a>]

---


### ConnectInstanceTagsOutputReference <a name="ConnectInstanceTagsOutputReference" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import connect_instance

connectInstance.ConnectInstanceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.connectInstance.ConnectInstanceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConnectInstanceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.connectInstance.ConnectInstanceTags">ConnectInstanceTags</a>

---



