# `iotsitewiseGateway` Submodule <a name="`iotsitewiseGateway` Submodule" id="@cdktn/provider-awscc.iotsitewiseGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotsitewiseGateway <a name="IotsitewiseGateway" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway awscc_iotsitewise_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_gateway

iotsitewiseGateway.IotsitewiseGateway(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  gateway_name: str,
  gateway_platform: IotsitewiseGatewayGatewayPlatform,
  gateway_capability_summaries: IResolvable | typing.List[IotsitewiseGatewayGatewayCapabilitySummaries] = None,
  gateway_version: str = None,
  tags: IResolvable | typing.List[IotsitewiseGatewayTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.gatewayName">gateway_name</a></code> | <code>str</code> | A unique, friendly name for the gateway. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.gatewayPlatform">gateway_platform</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform">IotsitewiseGatewayGatewayPlatform</a></code> | The gateway's platform. You can only specify one platform in a gateway. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.gatewayCapabilitySummaries">gateway_capability_summaries</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries">IotsitewiseGatewayGatewayCapabilitySummaries</a>]</code> | A list of gateway capability summaries that each contain a namespace and status. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.gatewayVersion">gateway_version</a></code> | <code>str</code> | The version of the gateway you want to create. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags">IotsitewiseGatewayTags</a>]</code> | A list of key-value pairs that contain metadata for the gateway. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `gateway_name`<sup>Required</sup> <a name="gateway_name" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.gatewayName"></a>

- *Type:* str

A unique, friendly name for the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#gateway_name IotsitewiseGateway#gateway_name}

---

##### `gateway_platform`<sup>Required</sup> <a name="gateway_platform" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.gatewayPlatform"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform">IotsitewiseGatewayGatewayPlatform</a>

The gateway's platform. You can only specify one platform in a gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#gateway_platform IotsitewiseGateway#gateway_platform}

---

##### `gateway_capability_summaries`<sup>Optional</sup> <a name="gateway_capability_summaries" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.gatewayCapabilitySummaries"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries">IotsitewiseGatewayGatewayCapabilitySummaries</a>]

A list of gateway capability summaries that each contain a namespace and status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#gateway_capability_summaries IotsitewiseGateway#gateway_capability_summaries}

---

##### `gateway_version`<sup>Optional</sup> <a name="gateway_version" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.gatewayVersion"></a>

- *Type:* str

The version of the gateway you want to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#gateway_version IotsitewiseGateway#gateway_version}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags">IotsitewiseGatewayTags</a>]

A list of key-value pairs that contain metadata for the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#tags IotsitewiseGateway#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.putGatewayCapabilitySummaries">put_gateway_capability_summaries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.putGatewayPlatform">put_gateway_platform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.resetGatewayCapabilitySummaries">reset_gateway_capability_summaries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.resetGatewayVersion">reset_gateway_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_gateway_capability_summaries` <a name="put_gateway_capability_summaries" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.putGatewayCapabilitySummaries"></a>

```python
def put_gateway_capability_summaries(
  value: IResolvable | typing.List[IotsitewiseGatewayGatewayCapabilitySummaries]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.putGatewayCapabilitySummaries.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries">IotsitewiseGatewayGatewayCapabilitySummaries</a>]

---

##### `put_gateway_platform` <a name="put_gateway_platform" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.putGatewayPlatform"></a>

```python
def put_gateway_platform(
  greengrass_v2: IotsitewiseGatewayGatewayPlatformGreengrassV2 = None,
  siemens_ie: IotsitewiseGatewayGatewayPlatformSiemensIe = None
) -> None
```

###### `greengrass_v2`<sup>Optional</sup> <a name="greengrass_v2" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.putGatewayPlatform.parameter.greengrassV2"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2">IotsitewiseGatewayGatewayPlatformGreengrassV2</a>

A gateway that runs on AWS IoT Greengrass V2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#greengrass_v2 IotsitewiseGateway#greengrass_v2}

---

###### `siemens_ie`<sup>Optional</sup> <a name="siemens_ie" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.putGatewayPlatform.parameter.siemensIe"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe">IotsitewiseGatewayGatewayPlatformSiemensIe</a>

A gateway that runs on Siemens Industrial Edge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#siemens_ie IotsitewiseGateway#siemens_ie}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[IotsitewiseGatewayTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags">IotsitewiseGatewayTags</a>]

---

##### `reset_gateway_capability_summaries` <a name="reset_gateway_capability_summaries" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.resetGatewayCapabilitySummaries"></a>

```python
def reset_gateway_capability_summaries() -> None
```

##### `reset_gateway_version` <a name="reset_gateway_version" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.resetGatewayVersion"></a>

```python
def reset_gateway_version() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IotsitewiseGateway resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.isConstruct"></a>

```python
from cdktn_provider_awscc import iotsitewise_gateway

iotsitewiseGateway.IotsitewiseGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.isTerraformElement"></a>

```python
from cdktn_provider_awscc import iotsitewise_gateway

iotsitewiseGateway.IotsitewiseGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.isTerraformResource"></a>

```python
from cdktn_provider_awscc import iotsitewise_gateway

iotsitewiseGateway.IotsitewiseGateway.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import iotsitewise_gateway

iotsitewiseGateway.IotsitewiseGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IotsitewiseGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IotsitewiseGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IotsitewiseGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotsitewiseGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayCapabilitySummaries">gateway_capability_summaries</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList">IotsitewiseGatewayGatewayCapabilitySummariesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayId">gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayPlatform">gateway_platform</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference">IotsitewiseGatewayGatewayPlatformOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList">IotsitewiseGatewayTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayCapabilitySummariesInput">gateway_capability_summaries_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries">IotsitewiseGatewayGatewayCapabilitySummaries</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayNameInput">gateway_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayPlatformInput">gateway_platform_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform">IotsitewiseGatewayGatewayPlatform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayVersionInput">gateway_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags">IotsitewiseGatewayTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayName">gateway_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayVersion">gateway_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `gateway_capability_summaries`<sup>Required</sup> <a name="gateway_capability_summaries" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayCapabilitySummaries"></a>

```python
gateway_capability_summaries: IotsitewiseGatewayGatewayCapabilitySummariesList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList">IotsitewiseGatewayGatewayCapabilitySummariesList</a>

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

---

##### `gateway_platform`<sup>Required</sup> <a name="gateway_platform" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayPlatform"></a>

```python
gateway_platform: IotsitewiseGatewayGatewayPlatformOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference">IotsitewiseGatewayGatewayPlatformOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.tags"></a>

```python
tags: IotsitewiseGatewayTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList">IotsitewiseGatewayTagsList</a>

---

##### `gateway_capability_summaries_input`<sup>Optional</sup> <a name="gateway_capability_summaries_input" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayCapabilitySummariesInput"></a>

```python
gateway_capability_summaries_input: IResolvable | typing.List[IotsitewiseGatewayGatewayCapabilitySummaries]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries">IotsitewiseGatewayGatewayCapabilitySummaries</a>]

---

##### `gateway_name_input`<sup>Optional</sup> <a name="gateway_name_input" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayNameInput"></a>

```python
gateway_name_input: str
```

- *Type:* str

---

##### `gateway_platform_input`<sup>Optional</sup> <a name="gateway_platform_input" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayPlatformInput"></a>

```python
gateway_platform_input: IResolvable | IotsitewiseGatewayGatewayPlatform
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform">IotsitewiseGatewayGatewayPlatform</a>

---

##### `gateway_version_input`<sup>Optional</sup> <a name="gateway_version_input" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayVersionInput"></a>

```python
gateway_version_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[IotsitewiseGatewayTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags">IotsitewiseGatewayTags</a>]

---

##### `gateway_name`<sup>Required</sup> <a name="gateway_name" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayName"></a>

```python
gateway_name: str
```

- *Type:* str

---

##### `gateway_version`<sup>Required</sup> <a name="gateway_version" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayVersion"></a>

```python
gateway_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotsitewiseGatewayConfig <a name="IotsitewiseGatewayConfig" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_gateway

iotsitewiseGateway.IotsitewiseGatewayConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  gateway_name: str,
  gateway_platform: IotsitewiseGatewayGatewayPlatform,
  gateway_capability_summaries: IResolvable | typing.List[IotsitewiseGatewayGatewayCapabilitySummaries] = None,
  gateway_version: str = None,
  tags: IResolvable | typing.List[IotsitewiseGatewayTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.gatewayName">gateway_name</a></code> | <code>str</code> | A unique, friendly name for the gateway. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.gatewayPlatform">gateway_platform</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform">IotsitewiseGatewayGatewayPlatform</a></code> | The gateway's platform. You can only specify one platform in a gateway. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.gatewayCapabilitySummaries">gateway_capability_summaries</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries">IotsitewiseGatewayGatewayCapabilitySummaries</a>]</code> | A list of gateway capability summaries that each contain a namespace and status. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.gatewayVersion">gateway_version</a></code> | <code>str</code> | The version of the gateway you want to create. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags">IotsitewiseGatewayTags</a>]</code> | A list of key-value pairs that contain metadata for the gateway. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `gateway_name`<sup>Required</sup> <a name="gateway_name" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.gatewayName"></a>

```python
gateway_name: str
```

- *Type:* str

A unique, friendly name for the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#gateway_name IotsitewiseGateway#gateway_name}

---

##### `gateway_platform`<sup>Required</sup> <a name="gateway_platform" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.gatewayPlatform"></a>

```python
gateway_platform: IotsitewiseGatewayGatewayPlatform
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform">IotsitewiseGatewayGatewayPlatform</a>

The gateway's platform. You can only specify one platform in a gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#gateway_platform IotsitewiseGateway#gateway_platform}

---

##### `gateway_capability_summaries`<sup>Optional</sup> <a name="gateway_capability_summaries" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.gatewayCapabilitySummaries"></a>

```python
gateway_capability_summaries: IResolvable | typing.List[IotsitewiseGatewayGatewayCapabilitySummaries]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries">IotsitewiseGatewayGatewayCapabilitySummaries</a>]

A list of gateway capability summaries that each contain a namespace and status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#gateway_capability_summaries IotsitewiseGateway#gateway_capability_summaries}

---

##### `gateway_version`<sup>Optional</sup> <a name="gateway_version" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.gatewayVersion"></a>

```python
gateway_version: str
```

- *Type:* str

The version of the gateway you want to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#gateway_version IotsitewiseGateway#gateway_version}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[IotsitewiseGatewayTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags">IotsitewiseGatewayTags</a>]

A list of key-value pairs that contain metadata for the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#tags IotsitewiseGateway#tags}

---

### IotsitewiseGatewayGatewayCapabilitySummaries <a name="IotsitewiseGatewayGatewayCapabilitySummaries" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_gateway

iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries(
  capability_configuration: str = None,
  capability_namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries.property.capabilityConfiguration">capability_configuration</a></code> | <code>str</code> | The JSON document that defines the gateway capability's configuration. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries.property.capabilityNamespace">capability_namespace</a></code> | <code>str</code> | The namespace of the capability configuration. |

---

##### `capability_configuration`<sup>Optional</sup> <a name="capability_configuration" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries.property.capabilityConfiguration"></a>

```python
capability_configuration: str
```

- *Type:* str

The JSON document that defines the gateway capability's configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#capability_configuration IotsitewiseGateway#capability_configuration}

---

##### `capability_namespace`<sup>Optional</sup> <a name="capability_namespace" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries.property.capabilityNamespace"></a>

```python
capability_namespace: str
```

- *Type:* str

The namespace of the capability configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#capability_namespace IotsitewiseGateway#capability_namespace}

---

### IotsitewiseGatewayGatewayPlatform <a name="IotsitewiseGatewayGatewayPlatform" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_gateway

iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform(
  greengrass_v2: IotsitewiseGatewayGatewayPlatformGreengrassV2 = None,
  siemens_ie: IotsitewiseGatewayGatewayPlatformSiemensIe = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform.property.greengrassV2">greengrass_v2</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2">IotsitewiseGatewayGatewayPlatformGreengrassV2</a></code> | A gateway that runs on AWS IoT Greengrass V2. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform.property.siemensIe">siemens_ie</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe">IotsitewiseGatewayGatewayPlatformSiemensIe</a></code> | A gateway that runs on Siemens Industrial Edge. |

---

##### `greengrass_v2`<sup>Optional</sup> <a name="greengrass_v2" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform.property.greengrassV2"></a>

```python
greengrass_v2: IotsitewiseGatewayGatewayPlatformGreengrassV2
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2">IotsitewiseGatewayGatewayPlatformGreengrassV2</a>

A gateway that runs on AWS IoT Greengrass V2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#greengrass_v2 IotsitewiseGateway#greengrass_v2}

---

##### `siemens_ie`<sup>Optional</sup> <a name="siemens_ie" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform.property.siemensIe"></a>

```python
siemens_ie: IotsitewiseGatewayGatewayPlatformSiemensIe
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe">IotsitewiseGatewayGatewayPlatformSiemensIe</a>

A gateway that runs on Siemens Industrial Edge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#siemens_ie IotsitewiseGateway#siemens_ie}

---

### IotsitewiseGatewayGatewayPlatformGreengrassV2 <a name="IotsitewiseGatewayGatewayPlatformGreengrassV2" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_gateway

iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2(
  core_device_operating_system: str = None,
  core_device_thing_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2.property.coreDeviceOperatingSystem">core_device_operating_system</a></code> | <code>str</code> | The operating system of the core device in AWS IoT Greengrass V2. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2.property.coreDeviceThingName">core_device_thing_name</a></code> | <code>str</code> | The name of the CoreDevice in GreenGrass V2. |

---

##### `core_device_operating_system`<sup>Optional</sup> <a name="core_device_operating_system" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2.property.coreDeviceOperatingSystem"></a>

```python
core_device_operating_system: str
```

- *Type:* str

The operating system of the core device in AWS IoT Greengrass V2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#core_device_operating_system IotsitewiseGateway#core_device_operating_system}

---

##### `core_device_thing_name`<sup>Optional</sup> <a name="core_device_thing_name" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2.property.coreDeviceThingName"></a>

```python
core_device_thing_name: str
```

- *Type:* str

The name of the CoreDevice in GreenGrass V2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#core_device_thing_name IotsitewiseGateway#core_device_thing_name}

---

### IotsitewiseGatewayGatewayPlatformSiemensIe <a name="IotsitewiseGatewayGatewayPlatformSiemensIe" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_gateway

iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe(
  iot_core_thing_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe.property.iotCoreThingName">iot_core_thing_name</a></code> | <code>str</code> | The name of the IoT Core Thing. |

---

##### `iot_core_thing_name`<sup>Optional</sup> <a name="iot_core_thing_name" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe.property.iotCoreThingName"></a>

```python
iot_core_thing_name: str
```

- *Type:* str

The name of the IoT Core Thing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#iot_core_thing_name IotsitewiseGateway#iot_core_thing_name}

---

### IotsitewiseGatewayTags <a name="IotsitewiseGatewayTags" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_gateway

iotsitewiseGateway.IotsitewiseGatewayTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#key IotsitewiseGateway#key}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#value IotsitewiseGateway#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#key IotsitewiseGateway#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#value IotsitewiseGateway#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotsitewiseGatewayGatewayCapabilitySummariesList <a name="IotsitewiseGatewayGatewayCapabilitySummariesList" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_gateway

iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotsitewiseGatewayGatewayCapabilitySummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries">IotsitewiseGatewayGatewayCapabilitySummaries</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotsitewiseGatewayGatewayCapabilitySummaries]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries">IotsitewiseGatewayGatewayCapabilitySummaries</a>]

---


### IotsitewiseGatewayGatewayCapabilitySummariesOutputReference <a name="IotsitewiseGatewayGatewayCapabilitySummariesOutputReference" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_gateway

iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.resetCapabilityConfiguration">reset_capability_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.resetCapabilityNamespace">reset_capability_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_capability_configuration` <a name="reset_capability_configuration" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.resetCapabilityConfiguration"></a>

```python
def reset_capability_configuration() -> None
```

##### `reset_capability_namespace` <a name="reset_capability_namespace" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.resetCapabilityNamespace"></a>

```python
def reset_capability_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityConfigurationInput">capability_configuration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityNamespaceInput">capability_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityConfiguration">capability_configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityNamespace">capability_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries">IotsitewiseGatewayGatewayCapabilitySummaries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capability_configuration_input`<sup>Optional</sup> <a name="capability_configuration_input" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityConfigurationInput"></a>

```python
capability_configuration_input: str
```

- *Type:* str

---

##### `capability_namespace_input`<sup>Optional</sup> <a name="capability_namespace_input" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityNamespaceInput"></a>

```python
capability_namespace_input: str
```

- *Type:* str

---

##### `capability_configuration`<sup>Required</sup> <a name="capability_configuration" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityConfiguration"></a>

```python
capability_configuration: str
```

- *Type:* str

---

##### `capability_namespace`<sup>Required</sup> <a name="capability_namespace" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityNamespace"></a>

```python
capability_namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotsitewiseGatewayGatewayCapabilitySummaries
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries">IotsitewiseGatewayGatewayCapabilitySummaries</a>

---


### IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference <a name="IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_gateway

iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.resetCoreDeviceOperatingSystem">reset_core_device_operating_system</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.resetCoreDeviceThingName">reset_core_device_thing_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_core_device_operating_system` <a name="reset_core_device_operating_system" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.resetCoreDeviceOperatingSystem"></a>

```python
def reset_core_device_operating_system() -> None
```

##### `reset_core_device_thing_name` <a name="reset_core_device_thing_name" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.resetCoreDeviceThingName"></a>

```python
def reset_core_device_thing_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceOperatingSystemInput">core_device_operating_system_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceThingNameInput">core_device_thing_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceOperatingSystem">core_device_operating_system</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceThingName">core_device_thing_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2">IotsitewiseGatewayGatewayPlatformGreengrassV2</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `core_device_operating_system_input`<sup>Optional</sup> <a name="core_device_operating_system_input" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceOperatingSystemInput"></a>

```python
core_device_operating_system_input: str
```

- *Type:* str

---

##### `core_device_thing_name_input`<sup>Optional</sup> <a name="core_device_thing_name_input" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceThingNameInput"></a>

```python
core_device_thing_name_input: str
```

- *Type:* str

---

##### `core_device_operating_system`<sup>Required</sup> <a name="core_device_operating_system" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceOperatingSystem"></a>

```python
core_device_operating_system: str
```

- *Type:* str

---

##### `core_device_thing_name`<sup>Required</sup> <a name="core_device_thing_name" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceThingName"></a>

```python
core_device_thing_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotsitewiseGatewayGatewayPlatformGreengrassV2
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2">IotsitewiseGatewayGatewayPlatformGreengrassV2</a>

---


### IotsitewiseGatewayGatewayPlatformOutputReference <a name="IotsitewiseGatewayGatewayPlatformOutputReference" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_gateway

iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.putGreengrassV2">put_greengrass_v2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.putSiemensIe">put_siemens_ie</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.resetGreengrassV2">reset_greengrass_v2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.resetSiemensIe">reset_siemens_ie</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_greengrass_v2` <a name="put_greengrass_v2" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.putGreengrassV2"></a>

```python
def put_greengrass_v2(
  core_device_operating_system: str = None,
  core_device_thing_name: str = None
) -> None
```

###### `core_device_operating_system`<sup>Optional</sup> <a name="core_device_operating_system" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.putGreengrassV2.parameter.coreDeviceOperatingSystem"></a>

- *Type:* str

The operating system of the core device in AWS IoT Greengrass V2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#core_device_operating_system IotsitewiseGateway#core_device_operating_system}

---

###### `core_device_thing_name`<sup>Optional</sup> <a name="core_device_thing_name" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.putGreengrassV2.parameter.coreDeviceThingName"></a>

- *Type:* str

The name of the CoreDevice in GreenGrass V2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#core_device_thing_name IotsitewiseGateway#core_device_thing_name}

---

##### `put_siemens_ie` <a name="put_siemens_ie" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.putSiemensIe"></a>

```python
def put_siemens_ie(
  iot_core_thing_name: str = None
) -> None
```

###### `iot_core_thing_name`<sup>Optional</sup> <a name="iot_core_thing_name" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.putSiemensIe.parameter.iotCoreThingName"></a>

- *Type:* str

The name of the IoT Core Thing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iotsitewise_gateway#iot_core_thing_name IotsitewiseGateway#iot_core_thing_name}

---

##### `reset_greengrass_v2` <a name="reset_greengrass_v2" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.resetGreengrassV2"></a>

```python
def reset_greengrass_v2() -> None
```

##### `reset_siemens_ie` <a name="reset_siemens_ie" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.resetSiemensIe"></a>

```python
def reset_siemens_ie() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.greengrassV2">greengrass_v2</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference">IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.siemensIe">siemens_ie</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference">IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.greengrassV2Input">greengrass_v2_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2">IotsitewiseGatewayGatewayPlatformGreengrassV2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.siemensIeInput">siemens_ie_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe">IotsitewiseGatewayGatewayPlatformSiemensIe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform">IotsitewiseGatewayGatewayPlatform</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `greengrass_v2`<sup>Required</sup> <a name="greengrass_v2" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.greengrassV2"></a>

```python
greengrass_v2: IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference">IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference</a>

---

##### `siemens_ie`<sup>Required</sup> <a name="siemens_ie" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.siemensIe"></a>

```python
siemens_ie: IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference">IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference</a>

---

##### `greengrass_v2_input`<sup>Optional</sup> <a name="greengrass_v2_input" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.greengrassV2Input"></a>

```python
greengrass_v2_input: IResolvable | IotsitewiseGatewayGatewayPlatformGreengrassV2
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2">IotsitewiseGatewayGatewayPlatformGreengrassV2</a>

---

##### `siemens_ie_input`<sup>Optional</sup> <a name="siemens_ie_input" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.siemensIeInput"></a>

```python
siemens_ie_input: IResolvable | IotsitewiseGatewayGatewayPlatformSiemensIe
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe">IotsitewiseGatewayGatewayPlatformSiemensIe</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotsitewiseGatewayGatewayPlatform
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform">IotsitewiseGatewayGatewayPlatform</a>

---


### IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference <a name="IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_gateway

iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.resetIotCoreThingName">reset_iot_core_thing_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_iot_core_thing_name` <a name="reset_iot_core_thing_name" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.resetIotCoreThingName"></a>

```python
def reset_iot_core_thing_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.iotCoreThingNameInput">iot_core_thing_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.iotCoreThingName">iot_core_thing_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe">IotsitewiseGatewayGatewayPlatformSiemensIe</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iot_core_thing_name_input`<sup>Optional</sup> <a name="iot_core_thing_name_input" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.iotCoreThingNameInput"></a>

```python
iot_core_thing_name_input: str
```

- *Type:* str

---

##### `iot_core_thing_name`<sup>Required</sup> <a name="iot_core_thing_name" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.iotCoreThingName"></a>

```python
iot_core_thing_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotsitewiseGatewayGatewayPlatformSiemensIe
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe">IotsitewiseGatewayGatewayPlatformSiemensIe</a>

---


### IotsitewiseGatewayTagsList <a name="IotsitewiseGatewayTagsList" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_gateway

iotsitewiseGateway.IotsitewiseGatewayTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotsitewiseGatewayTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags">IotsitewiseGatewayTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IotsitewiseGatewayTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags">IotsitewiseGatewayTags</a>]

---


### IotsitewiseGatewayTagsOutputReference <a name="IotsitewiseGatewayTagsOutputReference" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import iotsitewise_gateway

iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags">IotsitewiseGatewayTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IotsitewiseGatewayTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags">IotsitewiseGatewayTags</a>

---



