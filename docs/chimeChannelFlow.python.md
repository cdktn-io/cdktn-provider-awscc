# `chimeChannelFlow` Submodule <a name="`chimeChannelFlow` Submodule" id="@cdktn/provider-awscc.chimeChannelFlow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeChannelFlow <a name="ChimeChannelFlow" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow awscc_chime_channel_flow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer"></a>

```python
from cdktn_provider_awscc import chime_channel_flow

chimeChannelFlow.ChimeChannelFlow(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app_instance_arn: str,
  name: str,
  processors: IResolvable | typing.List[ChimeChannelFlowProcessors],
  tags: IResolvable | typing.List[ChimeChannelFlowTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.appInstanceArn">app_instance_arn</a></code> | <code>str</code> | The ARN of the app instance. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the channel flow. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.processors">processors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors">ChimeChannelFlowProcessors</a>]</code> | Information about the processor Lambda functions. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags">ChimeChannelFlowTags</a>]</code> | The tags for the channel flow. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app_instance_arn`<sup>Required</sup> <a name="app_instance_arn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.appInstanceArn"></a>

- *Type:* str

The ARN of the app instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#app_instance_arn ChimeChannelFlow#app_instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.name"></a>

- *Type:* str

The name of the channel flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#name ChimeChannelFlow#name}

---

##### `processors`<sup>Required</sup> <a name="processors" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.processors"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors">ChimeChannelFlowProcessors</a>]

Information about the processor Lambda functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#processors ChimeChannelFlow#processors}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags">ChimeChannelFlowTags</a>]

The tags for the channel flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#tags ChimeChannelFlow#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.putProcessors">put_processors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_processors` <a name="put_processors" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.putProcessors"></a>

```python
def put_processors(
  value: IResolvable | typing.List[ChimeChannelFlowProcessors]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.putProcessors.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors">ChimeChannelFlowProcessors</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ChimeChannelFlowTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags">ChimeChannelFlowTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ChimeChannelFlow resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.isConstruct"></a>

```python
from cdktn_provider_awscc import chime_channel_flow

chimeChannelFlow.ChimeChannelFlow.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.isTerraformElement"></a>

```python
from cdktn_provider_awscc import chime_channel_flow

chimeChannelFlow.ChimeChannelFlow.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.isTerraformResource"></a>

```python
from cdktn_provider_awscc import chime_channel_flow

chimeChannelFlow.ChimeChannelFlow.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import chime_channel_flow

chimeChannelFlow.ChimeChannelFlow.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ChimeChannelFlow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ChimeChannelFlow to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ChimeChannelFlow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ChimeChannelFlow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.appInstanceId">app_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.channelFlowId">channel_flow_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.createdTimestamp">created_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.lastUpdatedTimestamp">last_updated_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.processors">processors</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList">ChimeChannelFlowProcessorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList">ChimeChannelFlowTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.appInstanceArnInput">app_instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.processorsInput">processors_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors">ChimeChannelFlowProcessors</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags">ChimeChannelFlowTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.appInstanceArn">app_instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app_instance_id`<sup>Required</sup> <a name="app_instance_id" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.appInstanceId"></a>

```python
app_instance_id: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `channel_flow_id`<sup>Required</sup> <a name="channel_flow_id" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.channelFlowId"></a>

```python
channel_flow_id: str
```

- *Type:* str

---

##### `created_timestamp`<sup>Required</sup> <a name="created_timestamp" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.createdTimestamp"></a>

```python
created_timestamp: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_timestamp`<sup>Required</sup> <a name="last_updated_timestamp" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.lastUpdatedTimestamp"></a>

```python
last_updated_timestamp: str
```

- *Type:* str

---

##### `processors`<sup>Required</sup> <a name="processors" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.processors"></a>

```python
processors: ChimeChannelFlowProcessorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList">ChimeChannelFlowProcessorsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.tags"></a>

```python
tags: ChimeChannelFlowTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList">ChimeChannelFlowTagsList</a>

---

##### `app_instance_arn_input`<sup>Optional</sup> <a name="app_instance_arn_input" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.appInstanceArnInput"></a>

```python
app_instance_arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `processors_input`<sup>Optional</sup> <a name="processors_input" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.processorsInput"></a>

```python
processors_input: IResolvable | typing.List[ChimeChannelFlowProcessors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors">ChimeChannelFlowProcessors</a>]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ChimeChannelFlowTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags">ChimeChannelFlowTags</a>]

---

##### `app_instance_arn`<sup>Required</sup> <a name="app_instance_arn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.appInstanceArn"></a>

```python
app_instance_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlow.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeChannelFlowConfig <a name="ChimeChannelFlowConfig" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.Initializer"></a>

```python
from cdktn_provider_awscc import chime_channel_flow

chimeChannelFlow.ChimeChannelFlowConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app_instance_arn: str,
  name: str,
  processors: IResolvable | typing.List[ChimeChannelFlowProcessors],
  tags: IResolvable | typing.List[ChimeChannelFlowTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.appInstanceArn">app_instance_arn</a></code> | <code>str</code> | The ARN of the app instance. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.name">name</a></code> | <code>str</code> | The name of the channel flow. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.processors">processors</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors">ChimeChannelFlowProcessors</a>]</code> | Information about the processor Lambda functions. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags">ChimeChannelFlowTags</a>]</code> | The tags for the channel flow. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app_instance_arn`<sup>Required</sup> <a name="app_instance_arn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.appInstanceArn"></a>

```python
app_instance_arn: str
```

- *Type:* str

The ARN of the app instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#app_instance_arn ChimeChannelFlow#app_instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the channel flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#name ChimeChannelFlow#name}

---

##### `processors`<sup>Required</sup> <a name="processors" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.processors"></a>

```python
processors: IResolvable | typing.List[ChimeChannelFlowProcessors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors">ChimeChannelFlowProcessors</a>]

Information about the processor Lambda functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#processors ChimeChannelFlow#processors}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ChimeChannelFlowTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags">ChimeChannelFlowTags</a>]

The tags for the channel flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#tags ChimeChannelFlow#tags}

---

### ChimeChannelFlowProcessors <a name="ChimeChannelFlowProcessors" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors.Initializer"></a>

```python
from cdktn_provider_awscc import chime_channel_flow

chimeChannelFlow.ChimeChannelFlowProcessors(
  configuration: ChimeChannelFlowProcessorsConfiguration,
  execution_order: typing.Union[int, float],
  fallback_action: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfiguration">ChimeChannelFlowProcessorsConfiguration</a></code> | A processor's metadata. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors.property.executionOrder">execution_order</a></code> | <code>typing.Union[int, float]</code> | The sequence in which processors run. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors.property.fallbackAction">fallback_action</a></code> | <code>str</code> | Determines whether to continue or stop processing when communication with a processor fails. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors.property.name">name</a></code> | <code>str</code> | The name of the processor. |

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors.property.configuration"></a>

```python
configuration: ChimeChannelFlowProcessorsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfiguration">ChimeChannelFlowProcessorsConfiguration</a>

A processor's metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#configuration ChimeChannelFlow#configuration}

---

##### `execution_order`<sup>Required</sup> <a name="execution_order" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors.property.executionOrder"></a>

```python
execution_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The sequence in which processors run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#execution_order ChimeChannelFlow#execution_order}

---

##### `fallback_action`<sup>Required</sup> <a name="fallback_action" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors.property.fallbackAction"></a>

```python
fallback_action: str
```

- *Type:* str

Determines whether to continue or stop processing when communication with a processor fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#fallback_action ChimeChannelFlow#fallback_action}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#name ChimeChannelFlow#name}

---

### ChimeChannelFlowProcessorsConfiguration <a name="ChimeChannelFlowProcessorsConfiguration" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import chime_channel_flow

chimeChannelFlow.ChimeChannelFlowProcessorsConfiguration(
  lambda: ChimeChannelFlowProcessorsConfigurationLambda
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfiguration.property.lambda">lambda</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda">ChimeChannelFlowProcessorsConfigurationLambda</a></code> | Stores metadata about a Lambda processor. |

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfiguration.property.lambda"></a>

```python
lambda: ChimeChannelFlowProcessorsConfigurationLambda
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda">ChimeChannelFlowProcessorsConfigurationLambda</a>

Stores metadata about a Lambda processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#lambda ChimeChannelFlow#lambda}

---

### ChimeChannelFlowProcessorsConfigurationLambda <a name="ChimeChannelFlowProcessorsConfigurationLambda" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda.Initializer"></a>

```python
from cdktn_provider_awscc import chime_channel_flow

chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda(
  invocation_type: str,
  resource_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda.property.invocationType">invocation_type</a></code> | <code>str</code> | Controls how the Lambda function is invoked. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda.property.resourceArn">resource_arn</a></code> | <code>str</code> | The ARN of the Lambda message processing function. |

---

##### `invocation_type`<sup>Required</sup> <a name="invocation_type" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda.property.invocationType"></a>

```python
invocation_type: str
```

- *Type:* str

Controls how the Lambda function is invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#invocation_type ChimeChannelFlow#invocation_type}

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

The ARN of the Lambda message processing function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#resource_arn ChimeChannelFlow#resource_arn}

---

### ChimeChannelFlowTags <a name="ChimeChannelFlowTags" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags.Initializer"></a>

```python
from cdktn_provider_awscc import chime_channel_flow

chimeChannelFlow.ChimeChannelFlowTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags.property.key">key</a></code> | <code>str</code> | The key in a tag. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags.property.value">value</a></code> | <code>str</code> | The value in a tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key in a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#key ChimeChannelFlow#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value in a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#value ChimeChannelFlow#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeChannelFlowProcessorsConfigurationLambdaOutputReference <a name="ChimeChannelFlowProcessorsConfigurationLambdaOutputReference" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import chime_channel_flow

chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.invocationTypeInput">invocation_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.resourceArnInput">resource_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.invocationType">invocation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda">ChimeChannelFlowProcessorsConfigurationLambda</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `invocation_type_input`<sup>Optional</sup> <a name="invocation_type_input" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.invocationTypeInput"></a>

```python
invocation_type_input: str
```

- *Type:* str

---

##### `resource_arn_input`<sup>Optional</sup> <a name="resource_arn_input" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.resourceArnInput"></a>

```python
resource_arn_input: str
```

- *Type:* str

---

##### `invocation_type`<sup>Required</sup> <a name="invocation_type" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.invocationType"></a>

```python
invocation_type: str
```

- *Type:* str

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChimeChannelFlowProcessorsConfigurationLambda
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda">ChimeChannelFlowProcessorsConfigurationLambda</a>

---


### ChimeChannelFlowProcessorsConfigurationOutputReference <a name="ChimeChannelFlowProcessorsConfigurationOutputReference" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import chime_channel_flow

chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.putLambda">put_lambda</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_lambda` <a name="put_lambda" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.putLambda"></a>

```python
def put_lambda(
  invocation_type: str,
  resource_arn: str
) -> None
```

###### `invocation_type`<sup>Required</sup> <a name="invocation_type" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.putLambda.parameter.invocationType"></a>

- *Type:* str

Controls how the Lambda function is invoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#invocation_type ChimeChannelFlow#invocation_type}

---

###### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.putLambda.parameter.resourceArn"></a>

- *Type:* str

The ARN of the Lambda message processing function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#resource_arn ChimeChannelFlow#resource_arn}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.property.lambda">lambda</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference">ChimeChannelFlowProcessorsConfigurationLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.property.lambdaInput">lambda_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda">ChimeChannelFlowProcessorsConfigurationLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfiguration">ChimeChannelFlowProcessorsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.property.lambda"></a>

```python
lambda: ChimeChannelFlowProcessorsConfigurationLambdaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambdaOutputReference">ChimeChannelFlowProcessorsConfigurationLambdaOutputReference</a>

---

##### `lambda_input`<sup>Optional</sup> <a name="lambda_input" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.property.lambdaInput"></a>

```python
lambda_input: IResolvable | ChimeChannelFlowProcessorsConfigurationLambda
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda">ChimeChannelFlowProcessorsConfigurationLambda</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChimeChannelFlowProcessorsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfiguration">ChimeChannelFlowProcessorsConfiguration</a>

---


### ChimeChannelFlowProcessorsList <a name="ChimeChannelFlowProcessorsList" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.Initializer"></a>

```python
from cdktn_provider_awscc import chime_channel_flow

chimeChannelFlow.ChimeChannelFlowProcessorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChimeChannelFlowProcessorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors">ChimeChannelFlowProcessors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ChimeChannelFlowProcessors]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors">ChimeChannelFlowProcessors</a>]

---


### ChimeChannelFlowProcessorsOutputReference <a name="ChimeChannelFlowProcessorsOutputReference" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import chime_channel_flow

chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.putConfiguration">put_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_configuration` <a name="put_configuration" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.putConfiguration"></a>

```python
def put_configuration(
  lambda: ChimeChannelFlowProcessorsConfigurationLambda
) -> None
```

###### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.putConfiguration.parameter.lambda"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationLambda">ChimeChannelFlowProcessorsConfigurationLambda</a>

Stores metadata about a Lambda processor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_channel_flow#lambda ChimeChannelFlow#lambda}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference">ChimeChannelFlowProcessorsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.configurationInput">configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfiguration">ChimeChannelFlowProcessorsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.executionOrderInput">execution_order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.fallbackActionInput">fallback_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.executionOrder">execution_order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.fallbackAction">fallback_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors">ChimeChannelFlowProcessors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.configuration"></a>

```python
configuration: ChimeChannelFlowProcessorsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfigurationOutputReference">ChimeChannelFlowProcessorsConfigurationOutputReference</a>

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.configurationInput"></a>

```python
configuration_input: IResolvable | ChimeChannelFlowProcessorsConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsConfiguration">ChimeChannelFlowProcessorsConfiguration</a>

---

##### `execution_order_input`<sup>Optional</sup> <a name="execution_order_input" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.executionOrderInput"></a>

```python
execution_order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fallback_action_input`<sup>Optional</sup> <a name="fallback_action_input" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.fallbackActionInput"></a>

```python
fallback_action_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `execution_order`<sup>Required</sup> <a name="execution_order" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.executionOrder"></a>

```python
execution_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fallback_action`<sup>Required</sup> <a name="fallback_action" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.fallbackAction"></a>

```python
fallback_action: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessorsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChimeChannelFlowProcessors
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowProcessors">ChimeChannelFlowProcessors</a>

---


### ChimeChannelFlowTagsList <a name="ChimeChannelFlowTagsList" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import chime_channel_flow

chimeChannelFlow.ChimeChannelFlowTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChimeChannelFlowTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags">ChimeChannelFlowTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ChimeChannelFlowTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags">ChimeChannelFlowTags</a>]

---


### ChimeChannelFlowTagsOutputReference <a name="ChimeChannelFlowTagsOutputReference" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import chime_channel_flow

chimeChannelFlow.ChimeChannelFlowTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags">ChimeChannelFlowTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChimeChannelFlowTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeChannelFlow.ChimeChannelFlowTags">ChimeChannelFlowTags</a>

---



