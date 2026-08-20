# `mediaconnectBridge` Submodule <a name="`mediaconnectBridge` Submodule" id="@cdktn/provider-awscc.mediaconnectBridge"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconnectBridge <a name="MediaconnectBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge awscc_mediaconnect_bridge}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge

mediaconnectBridge.MediaconnectBridge(
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
  placement_arn: str,
  sources: IResolvable | typing.List[MediaconnectBridgeSources],
  egress_gateway_bridge: MediaconnectBridgeEgressGatewayBridge = None,
  ingress_gateway_bridge: MediaconnectBridgeIngressGatewayBridge = None,
  outputs: IResolvable | typing.List[MediaconnectBridgeOutputs] = None,
  source_failover_config: MediaconnectBridgeSourceFailoverConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.placementArn">placement_arn</a></code> | <code>str</code> | The placement Amazon Resource Number (ARN) of the bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.sources">sources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources">MediaconnectBridgeSources</a>]</code> | The sources on this bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.egressGatewayBridge">egress_gateway_bridge</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge">MediaconnectBridgeEgressGatewayBridge</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#egress_gateway_bridge MediaconnectBridge#egress_gateway_bridge}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.ingressGatewayBridge">ingress_gateway_bridge</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge">MediaconnectBridgeIngressGatewayBridge</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#ingress_gateway_bridge MediaconnectBridge#ingress_gateway_bridge}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.outputs">outputs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs">MediaconnectBridgeOutputs</a>]</code> | The outputs on this bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.sourceFailoverConfig">source_failover_config</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig">MediaconnectBridgeSourceFailoverConfig</a></code> | The settings for source failover. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.name"></a>

- *Type:* str

The name of the bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#name MediaconnectBridge#name}

---

##### `placement_arn`<sup>Required</sup> <a name="placement_arn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.placementArn"></a>

- *Type:* str

The placement Amazon Resource Number (ARN) of the bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#placement_arn MediaconnectBridge#placement_arn}

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.sources"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources">MediaconnectBridgeSources</a>]

The sources on this bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#sources MediaconnectBridge#sources}

---

##### `egress_gateway_bridge`<sup>Optional</sup> <a name="egress_gateway_bridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.egressGatewayBridge"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge">MediaconnectBridgeEgressGatewayBridge</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#egress_gateway_bridge MediaconnectBridge#egress_gateway_bridge}.

---

##### `ingress_gateway_bridge`<sup>Optional</sup> <a name="ingress_gateway_bridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.ingressGatewayBridge"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge">MediaconnectBridgeIngressGatewayBridge</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#ingress_gateway_bridge MediaconnectBridge#ingress_gateway_bridge}.

---

##### `outputs`<sup>Optional</sup> <a name="outputs" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.outputs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs">MediaconnectBridgeOutputs</a>]

The outputs on this bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#outputs MediaconnectBridge#outputs}

---

##### `source_failover_config`<sup>Optional</sup> <a name="source_failover_config" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.sourceFailoverConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig">MediaconnectBridgeSourceFailoverConfig</a>

The settings for source failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#source_failover_config MediaconnectBridge#source_failover_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putEgressGatewayBridge">put_egress_gateway_bridge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putIngressGatewayBridge">put_ingress_gateway_bridge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putOutputs">put_outputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putSourceFailoverConfig">put_source_failover_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putSources">put_sources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetEgressGatewayBridge">reset_egress_gateway_bridge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetIngressGatewayBridge">reset_ingress_gateway_bridge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetOutputs">reset_outputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetSourceFailoverConfig">reset_source_failover_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_egress_gateway_bridge` <a name="put_egress_gateway_bridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putEgressGatewayBridge"></a>

```python
def put_egress_gateway_bridge(
  max_bitrate: typing.Union[int, float] = None
) -> None
```

###### `max_bitrate`<sup>Optional</sup> <a name="max_bitrate" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putEgressGatewayBridge.parameter.maxBitrate"></a>

- *Type:* typing.Union[int, float]

The maximum expected bitrate of the egress bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#max_bitrate MediaconnectBridge#max_bitrate}

---

##### `put_ingress_gateway_bridge` <a name="put_ingress_gateway_bridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putIngressGatewayBridge"></a>

```python
def put_ingress_gateway_bridge(
  max_bitrate: typing.Union[int, float] = None,
  max_outputs: typing.Union[int, float] = None
) -> None
```

###### `max_bitrate`<sup>Optional</sup> <a name="max_bitrate" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putIngressGatewayBridge.parameter.maxBitrate"></a>

- *Type:* typing.Union[int, float]

The maximum expected bitrate of the ingress bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#max_bitrate MediaconnectBridge#max_bitrate}

---

###### `max_outputs`<sup>Optional</sup> <a name="max_outputs" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putIngressGatewayBridge.parameter.maxOutputs"></a>

- *Type:* typing.Union[int, float]

The maximum number of outputs on the ingress bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#max_outputs MediaconnectBridge#max_outputs}

---

##### `put_outputs` <a name="put_outputs" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putOutputs"></a>

```python
def put_outputs(
  value: IResolvable | typing.List[MediaconnectBridgeOutputs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putOutputs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs">MediaconnectBridgeOutputs</a>]

---

##### `put_source_failover_config` <a name="put_source_failover_config" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putSourceFailoverConfig"></a>

```python
def put_source_failover_config(
  failover_mode: str = None,
  source_priority: MediaconnectBridgeSourceFailoverConfigSourcePriority = None,
  state: str = None
) -> None
```

###### `failover_mode`<sup>Optional</sup> <a name="failover_mode" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putSourceFailoverConfig.parameter.failoverMode"></a>

- *Type:* str

The type of failover you choose for this flow. FAILOVER allows switching between different streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#failover_mode MediaconnectBridge#failover_mode}

---

###### `source_priority`<sup>Optional</sup> <a name="source_priority" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putSourceFailoverConfig.parameter.sourcePriority"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority">MediaconnectBridgeSourceFailoverConfigSourcePriority</a>

The priority you want to assign to a source.

You can have a primary stream and a backup stream or two equally prioritized streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#source_priority MediaconnectBridge#source_priority}

---

###### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putSourceFailoverConfig.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#state MediaconnectBridge#state}.

---

##### `put_sources` <a name="put_sources" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putSources"></a>

```python
def put_sources(
  value: IResolvable | typing.List[MediaconnectBridgeSources]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putSources.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources">MediaconnectBridgeSources</a>]

---

##### `reset_egress_gateway_bridge` <a name="reset_egress_gateway_bridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetEgressGatewayBridge"></a>

```python
def reset_egress_gateway_bridge() -> None
```

##### `reset_ingress_gateway_bridge` <a name="reset_ingress_gateway_bridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetIngressGatewayBridge"></a>

```python
def reset_ingress_gateway_bridge() -> None
```

##### `reset_outputs` <a name="reset_outputs" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetOutputs"></a>

```python
def reset_outputs() -> None
```

##### `reset_source_failover_config` <a name="reset_source_failover_config" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetSourceFailoverConfig"></a>

```python
def reset_source_failover_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MediaconnectBridge resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.isConstruct"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge

mediaconnectBridge.MediaconnectBridge.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.isTerraformElement"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge

mediaconnectBridge.MediaconnectBridge.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.isTerraformResource"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge

mediaconnectBridge.MediaconnectBridge.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge

mediaconnectBridge.MediaconnectBridge.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MediaconnectBridge resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MediaconnectBridge to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MediaconnectBridge that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MediaconnectBridge to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.bridgeArn">bridge_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.bridgeState">bridge_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.egressGatewayBridge">egress_gateway_bridge</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference">MediaconnectBridgeEgressGatewayBridgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.ingressGatewayBridge">ingress_gateway_bridge</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference">MediaconnectBridgeIngressGatewayBridgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.outputs">outputs</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList">MediaconnectBridgeOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.sourceFailoverConfig">source_failover_config</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference">MediaconnectBridgeSourceFailoverConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.sources">sources</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList">MediaconnectBridgeSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.egressGatewayBridgeInput">egress_gateway_bridge_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge">MediaconnectBridgeEgressGatewayBridge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.ingressGatewayBridgeInput">ingress_gateway_bridge_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge">MediaconnectBridgeIngressGatewayBridge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.outputsInput">outputs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs">MediaconnectBridgeOutputs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.placementArnInput">placement_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.sourceFailoverConfigInput">source_failover_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig">MediaconnectBridgeSourceFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.sourcesInput">sources_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources">MediaconnectBridgeSources</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.placementArn">placement_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bridge_arn`<sup>Required</sup> <a name="bridge_arn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.bridgeArn"></a>

```python
bridge_arn: str
```

- *Type:* str

---

##### `bridge_state`<sup>Required</sup> <a name="bridge_state" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.bridgeState"></a>

```python
bridge_state: str
```

- *Type:* str

---

##### `egress_gateway_bridge`<sup>Required</sup> <a name="egress_gateway_bridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.egressGatewayBridge"></a>

```python
egress_gateway_bridge: MediaconnectBridgeEgressGatewayBridgeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference">MediaconnectBridgeEgressGatewayBridgeOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ingress_gateway_bridge`<sup>Required</sup> <a name="ingress_gateway_bridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.ingressGatewayBridge"></a>

```python
ingress_gateway_bridge: MediaconnectBridgeIngressGatewayBridgeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference">MediaconnectBridgeIngressGatewayBridgeOutputReference</a>

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.outputs"></a>

```python
outputs: MediaconnectBridgeOutputsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList">MediaconnectBridgeOutputsList</a>

---

##### `source_failover_config`<sup>Required</sup> <a name="source_failover_config" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.sourceFailoverConfig"></a>

```python
source_failover_config: MediaconnectBridgeSourceFailoverConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference">MediaconnectBridgeSourceFailoverConfigOutputReference</a>

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.sources"></a>

```python
sources: MediaconnectBridgeSourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList">MediaconnectBridgeSourcesList</a>

---

##### `egress_gateway_bridge_input`<sup>Optional</sup> <a name="egress_gateway_bridge_input" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.egressGatewayBridgeInput"></a>

```python
egress_gateway_bridge_input: IResolvable | MediaconnectBridgeEgressGatewayBridge
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge">MediaconnectBridgeEgressGatewayBridge</a>

---

##### `ingress_gateway_bridge_input`<sup>Optional</sup> <a name="ingress_gateway_bridge_input" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.ingressGatewayBridgeInput"></a>

```python
ingress_gateway_bridge_input: IResolvable | MediaconnectBridgeIngressGatewayBridge
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge">MediaconnectBridgeIngressGatewayBridge</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `outputs_input`<sup>Optional</sup> <a name="outputs_input" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.outputsInput"></a>

```python
outputs_input: IResolvable | typing.List[MediaconnectBridgeOutputs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs">MediaconnectBridgeOutputs</a>]

---

##### `placement_arn_input`<sup>Optional</sup> <a name="placement_arn_input" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.placementArnInput"></a>

```python
placement_arn_input: str
```

- *Type:* str

---

##### `source_failover_config_input`<sup>Optional</sup> <a name="source_failover_config_input" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.sourceFailoverConfigInput"></a>

```python
source_failover_config_input: IResolvable | MediaconnectBridgeSourceFailoverConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig">MediaconnectBridgeSourceFailoverConfig</a>

---

##### `sources_input`<sup>Optional</sup> <a name="sources_input" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.sourcesInput"></a>

```python
sources_input: IResolvable | typing.List[MediaconnectBridgeSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources">MediaconnectBridgeSources</a>]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `placement_arn`<sup>Required</sup> <a name="placement_arn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.placementArn"></a>

```python
placement_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconnectBridgeConfig <a name="MediaconnectBridgeConfig" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge

mediaconnectBridge.MediaconnectBridgeConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  placement_arn: str,
  sources: IResolvable | typing.List[MediaconnectBridgeSources],
  egress_gateway_bridge: MediaconnectBridgeEgressGatewayBridge = None,
  ingress_gateway_bridge: MediaconnectBridgeIngressGatewayBridge = None,
  outputs: IResolvable | typing.List[MediaconnectBridgeOutputs] = None,
  source_failover_config: MediaconnectBridgeSourceFailoverConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.name">name</a></code> | <code>str</code> | The name of the bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.placementArn">placement_arn</a></code> | <code>str</code> | The placement Amazon Resource Number (ARN) of the bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.sources">sources</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources">MediaconnectBridgeSources</a>]</code> | The sources on this bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.egressGatewayBridge">egress_gateway_bridge</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge">MediaconnectBridgeEgressGatewayBridge</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#egress_gateway_bridge MediaconnectBridge#egress_gateway_bridge}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.ingressGatewayBridge">ingress_gateway_bridge</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge">MediaconnectBridgeIngressGatewayBridge</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#ingress_gateway_bridge MediaconnectBridge#ingress_gateway_bridge}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.outputs">outputs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs">MediaconnectBridgeOutputs</a>]</code> | The outputs on this bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.sourceFailoverConfig">source_failover_config</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig">MediaconnectBridgeSourceFailoverConfig</a></code> | The settings for source failover. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#name MediaconnectBridge#name}

---

##### `placement_arn`<sup>Required</sup> <a name="placement_arn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.placementArn"></a>

```python
placement_arn: str
```

- *Type:* str

The placement Amazon Resource Number (ARN) of the bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#placement_arn MediaconnectBridge#placement_arn}

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.sources"></a>

```python
sources: IResolvable | typing.List[MediaconnectBridgeSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources">MediaconnectBridgeSources</a>]

The sources on this bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#sources MediaconnectBridge#sources}

---

##### `egress_gateway_bridge`<sup>Optional</sup> <a name="egress_gateway_bridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.egressGatewayBridge"></a>

```python
egress_gateway_bridge: MediaconnectBridgeEgressGatewayBridge
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge">MediaconnectBridgeEgressGatewayBridge</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#egress_gateway_bridge MediaconnectBridge#egress_gateway_bridge}.

---

##### `ingress_gateway_bridge`<sup>Optional</sup> <a name="ingress_gateway_bridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.ingressGatewayBridge"></a>

```python
ingress_gateway_bridge: MediaconnectBridgeIngressGatewayBridge
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge">MediaconnectBridgeIngressGatewayBridge</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#ingress_gateway_bridge MediaconnectBridge#ingress_gateway_bridge}.

---

##### `outputs`<sup>Optional</sup> <a name="outputs" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.outputs"></a>

```python
outputs: IResolvable | typing.List[MediaconnectBridgeOutputs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs">MediaconnectBridgeOutputs</a>]

The outputs on this bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#outputs MediaconnectBridge#outputs}

---

##### `source_failover_config`<sup>Optional</sup> <a name="source_failover_config" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.sourceFailoverConfig"></a>

```python
source_failover_config: MediaconnectBridgeSourceFailoverConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig">MediaconnectBridgeSourceFailoverConfig</a>

The settings for source failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#source_failover_config MediaconnectBridge#source_failover_config}

---

### MediaconnectBridgeEgressGatewayBridge <a name="MediaconnectBridgeEgressGatewayBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge

mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge(
  max_bitrate: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge.property.maxBitrate">max_bitrate</a></code> | <code>typing.Union[int, float]</code> | The maximum expected bitrate of the egress bridge. |

---

##### `max_bitrate`<sup>Optional</sup> <a name="max_bitrate" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge.property.maxBitrate"></a>

```python
max_bitrate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum expected bitrate of the egress bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#max_bitrate MediaconnectBridge#max_bitrate}

---

### MediaconnectBridgeIngressGatewayBridge <a name="MediaconnectBridgeIngressGatewayBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge

mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge(
  max_bitrate: typing.Union[int, float] = None,
  max_outputs: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge.property.maxBitrate">max_bitrate</a></code> | <code>typing.Union[int, float]</code> | The maximum expected bitrate of the ingress bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge.property.maxOutputs">max_outputs</a></code> | <code>typing.Union[int, float]</code> | The maximum number of outputs on the ingress bridge. |

---

##### `max_bitrate`<sup>Optional</sup> <a name="max_bitrate" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge.property.maxBitrate"></a>

```python
max_bitrate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum expected bitrate of the ingress bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#max_bitrate MediaconnectBridge#max_bitrate}

---

##### `max_outputs`<sup>Optional</sup> <a name="max_outputs" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge.property.maxOutputs"></a>

```python
max_outputs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of outputs on the ingress bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#max_outputs MediaconnectBridge#max_outputs}

---

### MediaconnectBridgeOutputs <a name="MediaconnectBridgeOutputs" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge

mediaconnectBridge.MediaconnectBridgeOutputs(
  network_output: MediaconnectBridgeOutputsNetworkOutput = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs.property.networkOutput">network_output</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput">MediaconnectBridgeOutputsNetworkOutput</a></code> | The output of the bridge. A network output is delivered to your premises. |

---

##### `network_output`<sup>Optional</sup> <a name="network_output" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs.property.networkOutput"></a>

```python
network_output: MediaconnectBridgeOutputsNetworkOutput
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput">MediaconnectBridgeOutputsNetworkOutput</a>

The output of the bridge. A network output is delivered to your premises.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#network_output MediaconnectBridge#network_output}

---

### MediaconnectBridgeOutputsNetworkOutput <a name="MediaconnectBridgeOutputsNetworkOutput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge

mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput(
  ip_address: str = None,
  name: str = None,
  network_name: str = None,
  port: typing.Union[int, float] = None,
  protocol: str = None,
  ttl: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.ipAddress">ip_address</a></code> | <code>str</code> | The network output IP Address. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.name">name</a></code> | <code>str</code> | The network output name. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.networkName">network_name</a></code> | <code>str</code> | The network output's gateway network name. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The network output port. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.protocol">protocol</a></code> | <code>str</code> | The network output protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | The network output TTL. |

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

The network output IP Address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#ip_address MediaconnectBridge#ip_address}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.name"></a>

```python
name: str
```

- *Type:* str

The network output name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#name MediaconnectBridge#name}

---

##### `network_name`<sup>Optional</sup> <a name="network_name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.networkName"></a>

```python
network_name: str
```

- *Type:* str

The network output's gateway network name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#network_name MediaconnectBridge#network_name}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The network output port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#port MediaconnectBridge#port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

The network output protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#protocol MediaconnectBridge#protocol}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The network output TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#ttl MediaconnectBridge#ttl}

---

### MediaconnectBridgeSourceFailoverConfig <a name="MediaconnectBridgeSourceFailoverConfig" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge

mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig(
  failover_mode: str = None,
  source_priority: MediaconnectBridgeSourceFailoverConfigSourcePriority = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig.property.failoverMode">failover_mode</a></code> | <code>str</code> | The type of failover you choose for this flow. FAILOVER allows switching between different streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig.property.sourcePriority">source_priority</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority">MediaconnectBridgeSourceFailoverConfigSourcePriority</a></code> | The priority you want to assign to a source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#state MediaconnectBridge#state}. |

---

##### `failover_mode`<sup>Optional</sup> <a name="failover_mode" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig.property.failoverMode"></a>

```python
failover_mode: str
```

- *Type:* str

The type of failover you choose for this flow. FAILOVER allows switching between different streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#failover_mode MediaconnectBridge#failover_mode}

---

##### `source_priority`<sup>Optional</sup> <a name="source_priority" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig.property.sourcePriority"></a>

```python
source_priority: MediaconnectBridgeSourceFailoverConfigSourcePriority
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority">MediaconnectBridgeSourceFailoverConfigSourcePriority</a>

The priority you want to assign to a source.

You can have a primary stream and a backup stream or two equally prioritized streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#source_priority MediaconnectBridge#source_priority}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#state MediaconnectBridge#state}.

---

### MediaconnectBridgeSourceFailoverConfigSourcePriority <a name="MediaconnectBridgeSourceFailoverConfigSourcePriority" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge

mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority(
  primary_source: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority.property.primarySource">primary_source</a></code> | <code>str</code> | The name of the source you choose as the primary source for this flow. |

---

##### `primary_source`<sup>Optional</sup> <a name="primary_source" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority.property.primarySource"></a>

```python
primary_source: str
```

- *Type:* str

The name of the source you choose as the primary source for this flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#primary_source MediaconnectBridge#primary_source}

---

### MediaconnectBridgeSources <a name="MediaconnectBridgeSources" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge

mediaconnectBridge.MediaconnectBridgeSources(
  flow_source: MediaconnectBridgeSourcesFlowSource = None,
  network_source: MediaconnectBridgeSourcesNetworkSource = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources.property.flowSource">flow_source</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource">MediaconnectBridgeSourcesFlowSource</a></code> | The source of the bridge. A flow source originates in MediaConnect as an existing cloud flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources.property.networkSource">network_source</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource">MediaconnectBridgeSourcesNetworkSource</a></code> | The source of the bridge. A network source originates at your premises. |

---

##### `flow_source`<sup>Optional</sup> <a name="flow_source" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources.property.flowSource"></a>

```python
flow_source: MediaconnectBridgeSourcesFlowSource
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource">MediaconnectBridgeSourcesFlowSource</a>

The source of the bridge. A flow source originates in MediaConnect as an existing cloud flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#flow_source MediaconnectBridge#flow_source}

---

##### `network_source`<sup>Optional</sup> <a name="network_source" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources.property.networkSource"></a>

```python
network_source: MediaconnectBridgeSourcesNetworkSource
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource">MediaconnectBridgeSourcesNetworkSource</a>

The source of the bridge. A network source originates at your premises.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#network_source MediaconnectBridge#network_source}

---

### MediaconnectBridgeSourcesFlowSource <a name="MediaconnectBridgeSourcesFlowSource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge

mediaconnectBridge.MediaconnectBridgeSourcesFlowSource(
  flow_arn: str = None,
  flow_vpc_interface_attachment: MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource.property.flowArn">flow_arn</a></code> | <code>str</code> | The ARN of the cloud flow used as a source of this bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource.property.flowVpcInterfaceAttachment">flow_vpc_interface_attachment</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment</a></code> | The name of the VPC interface attachment to use for this source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource.property.name">name</a></code> | <code>str</code> | The name of the flow source. |

---

##### `flow_arn`<sup>Optional</sup> <a name="flow_arn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource.property.flowArn"></a>

```python
flow_arn: str
```

- *Type:* str

The ARN of the cloud flow used as a source of this bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#flow_arn MediaconnectBridge#flow_arn}

---

##### `flow_vpc_interface_attachment`<sup>Optional</sup> <a name="flow_vpc_interface_attachment" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource.property.flowVpcInterfaceAttachment"></a>

```python
flow_vpc_interface_attachment: MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment</a>

The name of the VPC interface attachment to use for this source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#flow_vpc_interface_attachment MediaconnectBridge#flow_vpc_interface_attachment}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the flow source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#name MediaconnectBridge#name}

---

### MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment <a name="MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge

mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment(
  vpc_interface_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment.property.vpcInterfaceName">vpc_interface_name</a></code> | <code>str</code> | The name of the VPC interface to use for this resource. |

---

##### `vpc_interface_name`<sup>Optional</sup> <a name="vpc_interface_name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment.property.vpcInterfaceName"></a>

```python
vpc_interface_name: str
```

- *Type:* str

The name of the VPC interface to use for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#vpc_interface_name MediaconnectBridge#vpc_interface_name}

---

### MediaconnectBridgeSourcesNetworkSource <a name="MediaconnectBridgeSourcesNetworkSource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge

mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource(
  multicast_ip: str = None,
  multicast_source_settings: MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings = None,
  name: str = None,
  network_name: str = None,
  port: typing.Union[int, float] = None,
  protocol: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.multicastIp">multicast_ip</a></code> | <code>str</code> | The network source multicast IP. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.multicastSourceSettings">multicast_source_settings</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings</a></code> | The settings related to the multicast source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.name">name</a></code> | <code>str</code> | The name of the network source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.networkName">network_name</a></code> | <code>str</code> | The network source's gateway network name. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The network source port. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.protocol">protocol</a></code> | <code>str</code> | The network source protocol. |

---

##### `multicast_ip`<sup>Optional</sup> <a name="multicast_ip" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.multicastIp"></a>

```python
multicast_ip: str
```

- *Type:* str

The network source multicast IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#multicast_ip MediaconnectBridge#multicast_ip}

---

##### `multicast_source_settings`<sup>Optional</sup> <a name="multicast_source_settings" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.multicastSourceSettings"></a>

```python
multicast_source_settings: MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings</a>

The settings related to the multicast source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#multicast_source_settings MediaconnectBridge#multicast_source_settings}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the network source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#name MediaconnectBridge#name}

---

##### `network_name`<sup>Optional</sup> <a name="network_name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.networkName"></a>

```python
network_name: str
```

- *Type:* str

The network source's gateway network name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#network_name MediaconnectBridge#network_name}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The network source port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#port MediaconnectBridge#port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

The network source protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#protocol MediaconnectBridge#protocol}

---

### MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings <a name="MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge

mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings(
  multicast_source_ip: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings.property.multicastSourceIp">multicast_source_ip</a></code> | <code>str</code> | The IP address of the source for source-specific multicast (SSM). |

---

##### `multicast_source_ip`<sup>Optional</sup> <a name="multicast_source_ip" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings.property.multicastSourceIp"></a>

```python
multicast_source_ip: str
```

- *Type:* str

The IP address of the source for source-specific multicast (SSM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#multicast_source_ip MediaconnectBridge#multicast_source_ip}

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconnectBridgeEgressGatewayBridgeOutputReference <a name="MediaconnectBridgeEgressGatewayBridgeOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge

mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.resetMaxBitrate">reset_max_bitrate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_bitrate` <a name="reset_max_bitrate" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.resetMaxBitrate"></a>

```python
def reset_max_bitrate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.maxBitrateInput">max_bitrate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.maxBitrate">max_bitrate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge">MediaconnectBridgeEgressGatewayBridge</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_bitrate_input`<sup>Optional</sup> <a name="max_bitrate_input" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.maxBitrateInput"></a>

```python
max_bitrate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_bitrate`<sup>Required</sup> <a name="max_bitrate" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.maxBitrate"></a>

```python
max_bitrate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectBridgeEgressGatewayBridge
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge">MediaconnectBridgeEgressGatewayBridge</a>

---


### MediaconnectBridgeIngressGatewayBridgeOutputReference <a name="MediaconnectBridgeIngressGatewayBridgeOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge

mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.resetMaxBitrate">reset_max_bitrate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.resetMaxOutputs">reset_max_outputs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_bitrate` <a name="reset_max_bitrate" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.resetMaxBitrate"></a>

```python
def reset_max_bitrate() -> None
```

##### `reset_max_outputs` <a name="reset_max_outputs" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.resetMaxOutputs"></a>

```python
def reset_max_outputs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.maxBitrateInput">max_bitrate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.maxOutputsInput">max_outputs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.maxBitrate">max_bitrate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.maxOutputs">max_outputs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge">MediaconnectBridgeIngressGatewayBridge</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_bitrate_input`<sup>Optional</sup> <a name="max_bitrate_input" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.maxBitrateInput"></a>

```python
max_bitrate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_outputs_input`<sup>Optional</sup> <a name="max_outputs_input" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.maxOutputsInput"></a>

```python
max_outputs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_bitrate`<sup>Required</sup> <a name="max_bitrate" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.maxBitrate"></a>

```python
max_bitrate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_outputs`<sup>Required</sup> <a name="max_outputs" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.maxOutputs"></a>

```python
max_outputs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectBridgeIngressGatewayBridge
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge">MediaconnectBridgeIngressGatewayBridge</a>

---


### MediaconnectBridgeOutputsList <a name="MediaconnectBridgeOutputsList" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge

mediaconnectBridge.MediaconnectBridgeOutputsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaconnectBridgeOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs">MediaconnectBridgeOutputs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediaconnectBridgeOutputs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs">MediaconnectBridgeOutputs</a>]

---


### MediaconnectBridgeOutputsNetworkOutputOutputReference <a name="MediaconnectBridgeOutputsNetworkOutputOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge

mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetNetworkName">reset_network_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_network_name` <a name="reset_network_name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetNetworkName"></a>

```python
def reset_network_name() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetTtl"></a>

```python
def reset_ttl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.networkNameInput">network_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.networkName">network_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput">MediaconnectBridgeOutputsNetworkOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_name_input`<sup>Optional</sup> <a name="network_name_input" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.networkNameInput"></a>

```python
network_name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_name`<sup>Required</sup> <a name="network_name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.networkName"></a>

```python
network_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectBridgeOutputsNetworkOutput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput">MediaconnectBridgeOutputsNetworkOutput</a>

---


### MediaconnectBridgeOutputsOutputReference <a name="MediaconnectBridgeOutputsOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge

mediaconnectBridge.MediaconnectBridgeOutputsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.putNetworkOutput">put_network_output</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.resetNetworkOutput">reset_network_output</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_network_output` <a name="put_network_output" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.putNetworkOutput"></a>

```python
def put_network_output(
  ip_address: str = None,
  name: str = None,
  network_name: str = None,
  port: typing.Union[int, float] = None,
  protocol: str = None,
  ttl: typing.Union[int, float] = None
) -> None
```

###### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.putNetworkOutput.parameter.ipAddress"></a>

- *Type:* str

The network output IP Address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#ip_address MediaconnectBridge#ip_address}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.putNetworkOutput.parameter.name"></a>

- *Type:* str

The network output name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#name MediaconnectBridge#name}

---

###### `network_name`<sup>Optional</sup> <a name="network_name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.putNetworkOutput.parameter.networkName"></a>

- *Type:* str

The network output's gateway network name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#network_name MediaconnectBridge#network_name}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.putNetworkOutput.parameter.port"></a>

- *Type:* typing.Union[int, float]

The network output port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#port MediaconnectBridge#port}

---

###### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.putNetworkOutput.parameter.protocol"></a>

- *Type:* str

The network output protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#protocol MediaconnectBridge#protocol}

---

###### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.putNetworkOutput.parameter.ttl"></a>

- *Type:* typing.Union[int, float]

The network output TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#ttl MediaconnectBridge#ttl}

---

##### `reset_network_output` <a name="reset_network_output" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.resetNetworkOutput"></a>

```python
def reset_network_output() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.networkOutput">network_output</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference">MediaconnectBridgeOutputsNetworkOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.networkOutputInput">network_output_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput">MediaconnectBridgeOutputsNetworkOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs">MediaconnectBridgeOutputs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_output`<sup>Required</sup> <a name="network_output" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.networkOutput"></a>

```python
network_output: MediaconnectBridgeOutputsNetworkOutputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference">MediaconnectBridgeOutputsNetworkOutputOutputReference</a>

---

##### `network_output_input`<sup>Optional</sup> <a name="network_output_input" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.networkOutputInput"></a>

```python
network_output_input: IResolvable | MediaconnectBridgeOutputsNetworkOutput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput">MediaconnectBridgeOutputsNetworkOutput</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectBridgeOutputs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs">MediaconnectBridgeOutputs</a>

---


### MediaconnectBridgeSourceFailoverConfigOutputReference <a name="MediaconnectBridgeSourceFailoverConfigOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge

mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.putSourcePriority">put_source_priority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.resetFailoverMode">reset_failover_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.resetSourcePriority">reset_source_priority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.resetState">reset_state</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_source_priority` <a name="put_source_priority" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.putSourcePriority"></a>

```python
def put_source_priority(
  primary_source: str = None
) -> None
```

###### `primary_source`<sup>Optional</sup> <a name="primary_source" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.putSourcePriority.parameter.primarySource"></a>

- *Type:* str

The name of the source you choose as the primary source for this flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#primary_source MediaconnectBridge#primary_source}

---

##### `reset_failover_mode` <a name="reset_failover_mode" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.resetFailoverMode"></a>

```python
def reset_failover_mode() -> None
```

##### `reset_source_priority` <a name="reset_source_priority" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.resetSourcePriority"></a>

```python
def reset_source_priority() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.resetState"></a>

```python
def reset_state() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.sourcePriority">source_priority</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference">MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.failoverModeInput">failover_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.sourcePriorityInput">source_priority_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority">MediaconnectBridgeSourceFailoverConfigSourcePriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.failoverMode">failover_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig">MediaconnectBridgeSourceFailoverConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_priority`<sup>Required</sup> <a name="source_priority" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.sourcePriority"></a>

```python
source_priority: MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference">MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference</a>

---

##### `failover_mode_input`<sup>Optional</sup> <a name="failover_mode_input" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.failoverModeInput"></a>

```python
failover_mode_input: str
```

- *Type:* str

---

##### `source_priority_input`<sup>Optional</sup> <a name="source_priority_input" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.sourcePriorityInput"></a>

```python
source_priority_input: IResolvable | MediaconnectBridgeSourceFailoverConfigSourcePriority
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority">MediaconnectBridgeSourceFailoverConfigSourcePriority</a>

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `failover_mode`<sup>Required</sup> <a name="failover_mode" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.failoverMode"></a>

```python
failover_mode: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectBridgeSourceFailoverConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig">MediaconnectBridgeSourceFailoverConfig</a>

---


### MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference <a name="MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge

mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.resetPrimarySource">reset_primary_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_primary_source` <a name="reset_primary_source" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.resetPrimarySource"></a>

```python
def reset_primary_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.primarySourceInput">primary_source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.primarySource">primary_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority">MediaconnectBridgeSourceFailoverConfigSourcePriority</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `primary_source_input`<sup>Optional</sup> <a name="primary_source_input" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.primarySourceInput"></a>

```python
primary_source_input: str
```

- *Type:* str

---

##### `primary_source`<sup>Required</sup> <a name="primary_source" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.primarySource"></a>

```python
primary_source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectBridgeSourceFailoverConfigSourcePriority
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority">MediaconnectBridgeSourceFailoverConfigSourcePriority</a>

---


### MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference <a name="MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge

mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.resetVpcInterfaceName">reset_vpc_interface_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_vpc_interface_name` <a name="reset_vpc_interface_name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.resetVpcInterfaceName"></a>

```python
def reset_vpc_interface_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.vpcInterfaceNameInput">vpc_interface_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName">vpc_interface_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_interface_name_input`<sup>Optional</sup> <a name="vpc_interface_name_input" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.vpcInterfaceNameInput"></a>

```python
vpc_interface_name_input: str
```

- *Type:* str

---

##### `vpc_interface_name`<sup>Required</sup> <a name="vpc_interface_name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName"></a>

```python
vpc_interface_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment</a>

---


### MediaconnectBridgeSourcesFlowSourceOutputReference <a name="MediaconnectBridgeSourcesFlowSourceOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge

mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.putFlowVpcInterfaceAttachment">put_flow_vpc_interface_attachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.resetFlowArn">reset_flow_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.resetFlowVpcInterfaceAttachment">reset_flow_vpc_interface_attachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_flow_vpc_interface_attachment` <a name="put_flow_vpc_interface_attachment" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.putFlowVpcInterfaceAttachment"></a>

```python
def put_flow_vpc_interface_attachment(
  vpc_interface_name: str = None
) -> None
```

###### `vpc_interface_name`<sup>Optional</sup> <a name="vpc_interface_name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.putFlowVpcInterfaceAttachment.parameter.vpcInterfaceName"></a>

- *Type:* str

The name of the VPC interface to use for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#vpc_interface_name MediaconnectBridge#vpc_interface_name}

---

##### `reset_flow_arn` <a name="reset_flow_arn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.resetFlowArn"></a>

```python
def reset_flow_arn() -> None
```

##### `reset_flow_vpc_interface_attachment` <a name="reset_flow_vpc_interface_attachment" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.resetFlowVpcInterfaceAttachment"></a>

```python
def reset_flow_vpc_interface_attachment() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.flowVpcInterfaceAttachment">flow_vpc_interface_attachment</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference">MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.flowArnInput">flow_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.flowVpcInterfaceAttachmentInput">flow_vpc_interface_attachment_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.flowArn">flow_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource">MediaconnectBridgeSourcesFlowSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `flow_vpc_interface_attachment`<sup>Required</sup> <a name="flow_vpc_interface_attachment" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.flowVpcInterfaceAttachment"></a>

```python
flow_vpc_interface_attachment: MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference">MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference</a>

---

##### `flow_arn_input`<sup>Optional</sup> <a name="flow_arn_input" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.flowArnInput"></a>

```python
flow_arn_input: str
```

- *Type:* str

---

##### `flow_vpc_interface_attachment_input`<sup>Optional</sup> <a name="flow_vpc_interface_attachment_input" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.flowVpcInterfaceAttachmentInput"></a>

```python
flow_vpc_interface_attachment_input: IResolvable | MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `flow_arn`<sup>Required</sup> <a name="flow_arn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.flowArn"></a>

```python
flow_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectBridgeSourcesFlowSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource">MediaconnectBridgeSourcesFlowSource</a>

---


### MediaconnectBridgeSourcesList <a name="MediaconnectBridgeSourcesList" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge

mediaconnectBridge.MediaconnectBridgeSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MediaconnectBridgeSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources">MediaconnectBridgeSources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[MediaconnectBridgeSources]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources">MediaconnectBridgeSources</a>]

---


### MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference <a name="MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge

mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.resetMulticastSourceIp">reset_multicast_source_ip</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_multicast_source_ip` <a name="reset_multicast_source_ip" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.resetMulticastSourceIp"></a>

```python
def reset_multicast_source_ip() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.multicastSourceIpInput">multicast_source_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.multicastSourceIp">multicast_source_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `multicast_source_ip_input`<sup>Optional</sup> <a name="multicast_source_ip_input" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.multicastSourceIpInput"></a>

```python
multicast_source_ip_input: str
```

- *Type:* str

---

##### `multicast_source_ip`<sup>Required</sup> <a name="multicast_source_ip" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.multicastSourceIp"></a>

```python
multicast_source_ip: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings</a>

---


### MediaconnectBridgeSourcesNetworkSourceOutputReference <a name="MediaconnectBridgeSourcesNetworkSourceOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge

mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.putMulticastSourceSettings">put_multicast_source_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetMulticastIp">reset_multicast_ip</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetMulticastSourceSettings">reset_multicast_source_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetNetworkName">reset_network_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_multicast_source_settings` <a name="put_multicast_source_settings" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.putMulticastSourceSettings"></a>

```python
def put_multicast_source_settings(
  multicast_source_ip: str = None
) -> None
```

###### `multicast_source_ip`<sup>Optional</sup> <a name="multicast_source_ip" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.putMulticastSourceSettings.parameter.multicastSourceIp"></a>

- *Type:* str

The IP address of the source for source-specific multicast (SSM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#multicast_source_ip MediaconnectBridge#multicast_source_ip}

---

##### `reset_multicast_ip` <a name="reset_multicast_ip" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetMulticastIp"></a>

```python
def reset_multicast_ip() -> None
```

##### `reset_multicast_source_settings` <a name="reset_multicast_source_settings" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetMulticastSourceSettings"></a>

```python
def reset_multicast_source_settings() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_network_name` <a name="reset_network_name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetNetworkName"></a>

```python
def reset_network_name() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.multicastSourceSettings">multicast_source_settings</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference">MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.multicastIpInput">multicast_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.multicastSourceSettingsInput">multicast_source_settings_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.networkNameInput">network_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.multicastIp">multicast_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.networkName">network_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource">MediaconnectBridgeSourcesNetworkSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `multicast_source_settings`<sup>Required</sup> <a name="multicast_source_settings" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.multicastSourceSettings"></a>

```python
multicast_source_settings: MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference">MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference</a>

---

##### `multicast_ip_input`<sup>Optional</sup> <a name="multicast_ip_input" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.multicastIpInput"></a>

```python
multicast_ip_input: str
```

- *Type:* str

---

##### `multicast_source_settings_input`<sup>Optional</sup> <a name="multicast_source_settings_input" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.multicastSourceSettingsInput"></a>

```python
multicast_source_settings_input: IResolvable | MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_name_input`<sup>Optional</sup> <a name="network_name_input" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.networkNameInput"></a>

```python
network_name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `multicast_ip`<sup>Required</sup> <a name="multicast_ip" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.multicastIp"></a>

```python
multicast_ip: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_name`<sup>Required</sup> <a name="network_name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.networkName"></a>

```python
network_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectBridgeSourcesNetworkSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource">MediaconnectBridgeSourcesNetworkSource</a>

---


### MediaconnectBridgeSourcesOutputReference <a name="MediaconnectBridgeSourcesOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import mediaconnect_bridge

mediaconnectBridge.MediaconnectBridgeSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.putFlowSource">put_flow_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.putNetworkSource">put_network_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.resetFlowSource">reset_flow_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.resetNetworkSource">reset_network_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_flow_source` <a name="put_flow_source" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.putFlowSource"></a>

```python
def put_flow_source(
  flow_arn: str = None,
  flow_vpc_interface_attachment: MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment = None,
  name: str = None
) -> None
```

###### `flow_arn`<sup>Optional</sup> <a name="flow_arn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.putFlowSource.parameter.flowArn"></a>

- *Type:* str

The ARN of the cloud flow used as a source of this bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#flow_arn MediaconnectBridge#flow_arn}

---

###### `flow_vpc_interface_attachment`<sup>Optional</sup> <a name="flow_vpc_interface_attachment" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.putFlowSource.parameter.flowVpcInterfaceAttachment"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment</a>

The name of the VPC interface attachment to use for this source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#flow_vpc_interface_attachment MediaconnectBridge#flow_vpc_interface_attachment}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.putFlowSource.parameter.name"></a>

- *Type:* str

The name of the flow source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#name MediaconnectBridge#name}

---

##### `put_network_source` <a name="put_network_source" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.putNetworkSource"></a>

```python
def put_network_source(
  multicast_ip: str = None,
  multicast_source_settings: MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings = None,
  name: str = None,
  network_name: str = None,
  port: typing.Union[int, float] = None,
  protocol: str = None
) -> None
```

###### `multicast_ip`<sup>Optional</sup> <a name="multicast_ip" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.putNetworkSource.parameter.multicastIp"></a>

- *Type:* str

The network source multicast IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#multicast_ip MediaconnectBridge#multicast_ip}

---

###### `multicast_source_settings`<sup>Optional</sup> <a name="multicast_source_settings" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.putNetworkSource.parameter.multicastSourceSettings"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings</a>

The settings related to the multicast source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#multicast_source_settings MediaconnectBridge#multicast_source_settings}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.putNetworkSource.parameter.name"></a>

- *Type:* str

The name of the network source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#name MediaconnectBridge#name}

---

###### `network_name`<sup>Optional</sup> <a name="network_name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.putNetworkSource.parameter.networkName"></a>

- *Type:* str

The network source's gateway network name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#network_name MediaconnectBridge#network_name}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.putNetworkSource.parameter.port"></a>

- *Type:* typing.Union[int, float]

The network source port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#port MediaconnectBridge#port}

---

###### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.putNetworkSource.parameter.protocol"></a>

- *Type:* str

The network source protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediaconnect_bridge#protocol MediaconnectBridge#protocol}

---

##### `reset_flow_source` <a name="reset_flow_source" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.resetFlowSource"></a>

```python
def reset_flow_source() -> None
```

##### `reset_network_source` <a name="reset_network_source" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.resetNetworkSource"></a>

```python
def reset_network_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.flowSource">flow_source</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference">MediaconnectBridgeSourcesFlowSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.networkSource">network_source</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference">MediaconnectBridgeSourcesNetworkSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.flowSourceInput">flow_source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource">MediaconnectBridgeSourcesFlowSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.networkSourceInput">network_source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource">MediaconnectBridgeSourcesNetworkSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources">MediaconnectBridgeSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `flow_source`<sup>Required</sup> <a name="flow_source" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.flowSource"></a>

```python
flow_source: MediaconnectBridgeSourcesFlowSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference">MediaconnectBridgeSourcesFlowSourceOutputReference</a>

---

##### `network_source`<sup>Required</sup> <a name="network_source" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.networkSource"></a>

```python
network_source: MediaconnectBridgeSourcesNetworkSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference">MediaconnectBridgeSourcesNetworkSourceOutputReference</a>

---

##### `flow_source_input`<sup>Optional</sup> <a name="flow_source_input" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.flowSourceInput"></a>

```python
flow_source_input: IResolvable | MediaconnectBridgeSourcesFlowSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource">MediaconnectBridgeSourcesFlowSource</a>

---

##### `network_source_input`<sup>Optional</sup> <a name="network_source_input" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.networkSourceInput"></a>

```python
network_source_input: IResolvable | MediaconnectBridgeSourcesNetworkSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource">MediaconnectBridgeSourcesNetworkSource</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MediaconnectBridgeSources
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources">MediaconnectBridgeSources</a>

---



