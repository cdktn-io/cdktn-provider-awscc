# `mediaconnectBridgeOutput` Submodule <a name="`mediaconnectBridgeOutput` Submodule" id="@cdktn/provider-awscc.mediaconnectBridgeOutput"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconnectBridgeOutput <a name="MediaconnectBridgeOutput" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_bridge_output awscc_mediaconnect_bridge_output}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge_output

mediaconnectBridgeOutput.MediaconnectBridgeOutput(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bridge_arn: str,
  name: str,
  network_output: MediaconnectBridgeOutputNetworkOutput
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.Initializer.parameter.bridgeArn">bridge_arn</a></code> | <code>str</code> | The Amazon Resource Number (ARN) of the bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.Initializer.parameter.name">name</a></code> | <code>str</code> | The network output name. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.Initializer.parameter.networkOutput">network_output</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutput">MediaconnectBridgeOutputNetworkOutput</a></code> | The output of the bridge. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bridge_arn`<sup>Required</sup> <a name="bridge_arn" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.Initializer.parameter.bridgeArn"></a>

- *Type:* str

The Amazon Resource Number (ARN) of the bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_bridge_output#bridge_arn MediaconnectBridgeOutput#bridge_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.Initializer.parameter.name"></a>

- *Type:* str

The network output name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_bridge_output#name MediaconnectBridgeOutput#name}

---

##### `network_output`<sup>Required</sup> <a name="network_output" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.Initializer.parameter.networkOutput"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutput">MediaconnectBridgeOutputNetworkOutput</a>

The output of the bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_bridge_output#network_output MediaconnectBridgeOutput#network_output}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.putNetworkOutput">put_network_output</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_network_output` <a name="put_network_output" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.putNetworkOutput"></a>

```python
def put_network_output(
  ip_address: str,
  network_name: str,
  port: typing.Union[int, float],
  protocol: str,
  ttl: typing.Union[int, float]
) -> None
```

###### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.putNetworkOutput.parameter.ipAddress"></a>

- *Type:* str

The network output IP Address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_bridge_output#ip_address MediaconnectBridgeOutput#ip_address}

---

###### `network_name`<sup>Required</sup> <a name="network_name" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.putNetworkOutput.parameter.networkName"></a>

- *Type:* str

The network output's gateway network name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_bridge_output#network_name MediaconnectBridgeOutput#network_name}

---

###### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.putNetworkOutput.parameter.port"></a>

- *Type:* typing.Union[int, float]

The network output port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_bridge_output#port MediaconnectBridgeOutput#port}

---

###### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.putNetworkOutput.parameter.protocol"></a>

- *Type:* str

The network output protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_bridge_output#protocol MediaconnectBridgeOutput#protocol}

---

###### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.putNetworkOutput.parameter.ttl"></a>

- *Type:* typing.Union[int, float]

The network output TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_bridge_output#ttl MediaconnectBridgeOutput#ttl}

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MediaconnectBridgeOutput resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.isConstruct"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge_output

mediaconnectBridgeOutput.MediaconnectBridgeOutput.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.isTerraformElement"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge_output

mediaconnectBridgeOutput.MediaconnectBridgeOutput.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.isTerraformResource"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge_output

mediaconnectBridgeOutput.MediaconnectBridgeOutput.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge_output

mediaconnectBridgeOutput.MediaconnectBridgeOutput.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MediaconnectBridgeOutput resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MediaconnectBridgeOutput to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MediaconnectBridgeOutput that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_bridge_output#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MediaconnectBridgeOutput to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.networkOutput">network_output</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference">MediaconnectBridgeOutputNetworkOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.bridgeArnInput">bridge_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.networkOutputInput">network_output_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutput">MediaconnectBridgeOutputNetworkOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.bridgeArn">bridge_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `network_output`<sup>Required</sup> <a name="network_output" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.networkOutput"></a>

```python
network_output: MediaconnectBridgeOutputNetworkOutputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference">MediaconnectBridgeOutputNetworkOutputOutputReference</a>

---

##### `bridge_arn_input`<sup>Optional</sup> <a name="bridge_arn_input" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.bridgeArnInput"></a>

```python
bridge_arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_output_input`<sup>Optional</sup> <a name="network_output_input" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.networkOutputInput"></a>

```python
network_output_input: IResolvable | MediaconnectBridgeOutputNetworkOutput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutput">MediaconnectBridgeOutputNetworkOutput</a>

---

##### `bridge_arn`<sup>Required</sup> <a name="bridge_arn" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.bridgeArn"></a>

```python
bridge_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutput.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconnectBridgeOutputConfig <a name="MediaconnectBridgeOutputConfig" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputConfig.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge_output

mediaconnectBridgeOutput.MediaconnectBridgeOutputConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bridge_arn: str,
  name: str,
  network_output: MediaconnectBridgeOutputNetworkOutput
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputConfig.property.bridgeArn">bridge_arn</a></code> | <code>str</code> | The Amazon Resource Number (ARN) of the bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputConfig.property.name">name</a></code> | <code>str</code> | The network output name. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputConfig.property.networkOutput">network_output</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutput">MediaconnectBridgeOutputNetworkOutput</a></code> | The output of the bridge. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bridge_arn`<sup>Required</sup> <a name="bridge_arn" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputConfig.property.bridgeArn"></a>

```python
bridge_arn: str
```

- *Type:* str

The Amazon Resource Number (ARN) of the bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_bridge_output#bridge_arn MediaconnectBridgeOutput#bridge_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The network output name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_bridge_output#name MediaconnectBridgeOutput#name}

---

##### `network_output`<sup>Required</sup> <a name="network_output" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputConfig.property.networkOutput"></a>

```python
network_output: MediaconnectBridgeOutputNetworkOutput
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutput">MediaconnectBridgeOutputNetworkOutput</a>

The output of the bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_bridge_output#network_output MediaconnectBridgeOutput#network_output}

---

### MediaconnectBridgeOutputNetworkOutput <a name="MediaconnectBridgeOutputNetworkOutput" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutput.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge_output

mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutput(
  ip_address: str,
  network_name: str,
  port: typing.Union[int, float],
  protocol: str,
  ttl: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutput.property.ipAddress">ip_address</a></code> | <code>str</code> | The network output IP Address. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutput.property.networkName">network_name</a></code> | <code>str</code> | The network output's gateway network name. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutput.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The network output port. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutput.property.protocol">protocol</a></code> | <code>str</code> | The network output protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutput.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | The network output TTL. |

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutput.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

The network output IP Address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_bridge_output#ip_address MediaconnectBridgeOutput#ip_address}

---

##### `network_name`<sup>Required</sup> <a name="network_name" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutput.property.networkName"></a>

```python
network_name: str
```

- *Type:* str

The network output's gateway network name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_bridge_output#network_name MediaconnectBridgeOutput#network_name}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutput.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The network output port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_bridge_output#port MediaconnectBridgeOutput#port}

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutput.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

The network output protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_bridge_output#protocol MediaconnectBridgeOutput#protocol}

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutput.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The network output TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/mediaconnect_bridge_output#ttl MediaconnectBridgeOutput#ttl}

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconnectBridgeOutputNetworkOutputOutputReference <a name="MediaconnectBridgeOutputNetworkOutputOutputReference" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge_output

mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.property.networkNameInput">network_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.property.networkName">network_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutput">MediaconnectBridgeOutputNetworkOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `network_name_input`<sup>Optional</sup> <a name="network_name_input" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.property.networkNameInput"></a>

```python
network_name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `network_name`<sup>Required</sup> <a name="network_name" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.property.networkName"></a>

```python
network_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectBridgeOutputNetworkOutput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridgeOutput.MediaconnectBridgeOutputNetworkOutput">MediaconnectBridgeOutputNetworkOutput</a>

---



