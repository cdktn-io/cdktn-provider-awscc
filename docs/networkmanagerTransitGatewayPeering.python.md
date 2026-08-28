# `networkmanagerTransitGatewayPeering` Submodule <a name="`networkmanagerTransitGatewayPeering` Submodule" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerTransitGatewayPeering <a name="NetworkmanagerTransitGatewayPeering" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_transit_gateway_peering awscc_networkmanager_transit_gateway_peering}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_transit_gateway_peering

networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  core_network_id: str,
  transit_gateway_arn: str,
  tags: IResolvable | typing.List[NetworkmanagerTransitGatewayPeeringTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.coreNetworkId">core_network_id</a></code> | <code>str</code> | The Id of the core network that you want to peer a transit gateway to. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.transitGatewayArn">transit_gateway_arn</a></code> | <code>str</code> | The ARN (Amazon Resource Name) of the transit gateway that you will peer to a core network. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTags">NetworkmanagerTransitGatewayPeeringTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `core_network_id`<sup>Required</sup> <a name="core_network_id" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.coreNetworkId"></a>

- *Type:* str

The Id of the core network that you want to peer a transit gateway to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_transit_gateway_peering#core_network_id NetworkmanagerTransitGatewayPeering#core_network_id}

---

##### `transit_gateway_arn`<sup>Required</sup> <a name="transit_gateway_arn" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.transitGatewayArn"></a>

- *Type:* str

The ARN (Amazon Resource Name) of the transit gateway that you will peer to a core network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_transit_gateway_peering#transit_gateway_arn NetworkmanagerTransitGatewayPeering#transit_gateway_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTags">NetworkmanagerTransitGatewayPeeringTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_transit_gateway_peering#tags NetworkmanagerTransitGatewayPeering#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[NetworkmanagerTransitGatewayPeeringTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTags">NetworkmanagerTransitGatewayPeeringTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetworkmanagerTransitGatewayPeering resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.isConstruct"></a>

```python
from cdktn_provider_awscc import networkmanager_transit_gateway_peering

networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.isTerraformElement"></a>

```python
from cdktn_provider_awscc import networkmanager_transit_gateway_peering

networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.isTerraformResource"></a>

```python
from cdktn_provider_awscc import networkmanager_transit_gateway_peering

networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import networkmanager_transit_gateway_peering

networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetworkmanagerTransitGatewayPeering resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkmanagerTransitGatewayPeering to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkmanagerTransitGatewayPeering that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_transit_gateway_peering#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkmanagerTransitGatewayPeering to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.coreNetworkArn">core_network_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.edgeLocation">edge_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.lastModificationErrors">last_modification_errors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.ownerAccountId">owner_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.peeringId">peering_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.peeringType">peering_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList">NetworkmanagerTransitGatewayPeeringTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.transitGatewayPeeringAttachmentId">transit_gateway_peering_attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.coreNetworkIdInput">core_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTags">NetworkmanagerTransitGatewayPeeringTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.transitGatewayArnInput">transit_gateway_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.coreNetworkId">core_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.transitGatewayArn">transit_gateway_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `core_network_arn`<sup>Required</sup> <a name="core_network_arn" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.coreNetworkArn"></a>

```python
core_network_arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `edge_location`<sup>Required</sup> <a name="edge_location" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.edgeLocation"></a>

```python
edge_location: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_modification_errors`<sup>Required</sup> <a name="last_modification_errors" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.lastModificationErrors"></a>

```python
last_modification_errors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `owner_account_id`<sup>Required</sup> <a name="owner_account_id" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.ownerAccountId"></a>

```python
owner_account_id: str
```

- *Type:* str

---

##### `peering_id`<sup>Required</sup> <a name="peering_id" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.peeringId"></a>

```python
peering_id: str
```

- *Type:* str

---

##### `peering_type`<sup>Required</sup> <a name="peering_type" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.peeringType"></a>

```python
peering_type: str
```

- *Type:* str

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.tags"></a>

```python
tags: NetworkmanagerTransitGatewayPeeringTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList">NetworkmanagerTransitGatewayPeeringTagsList</a>

---

##### `transit_gateway_peering_attachment_id`<sup>Required</sup> <a name="transit_gateway_peering_attachment_id" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.transitGatewayPeeringAttachmentId"></a>

```python
transit_gateway_peering_attachment_id: str
```

- *Type:* str

---

##### `core_network_id_input`<sup>Optional</sup> <a name="core_network_id_input" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.coreNetworkIdInput"></a>

```python
core_network_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[NetworkmanagerTransitGatewayPeeringTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTags">NetworkmanagerTransitGatewayPeeringTags</a>]

---

##### `transit_gateway_arn_input`<sup>Optional</sup> <a name="transit_gateway_arn_input" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.transitGatewayArnInput"></a>

```python
transit_gateway_arn_input: str
```

- *Type:* str

---

##### `core_network_id`<sup>Required</sup> <a name="core_network_id" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.coreNetworkId"></a>

```python
core_network_id: str
```

- *Type:* str

---

##### `transit_gateway_arn`<sup>Required</sup> <a name="transit_gateway_arn" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.transitGatewayArn"></a>

```python
transit_gateway_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeering.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerTransitGatewayPeeringConfig <a name="NetworkmanagerTransitGatewayPeeringConfig" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_transit_gateway_peering

networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  core_network_id: str,
  transit_gateway_arn: str,
  tags: IResolvable | typing.List[NetworkmanagerTransitGatewayPeeringTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.coreNetworkId">core_network_id</a></code> | <code>str</code> | The Id of the core network that you want to peer a transit gateway to. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.transitGatewayArn">transit_gateway_arn</a></code> | <code>str</code> | The ARN (Amazon Resource Name) of the transit gateway that you will peer to a core network. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTags">NetworkmanagerTransitGatewayPeeringTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `core_network_id`<sup>Required</sup> <a name="core_network_id" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.coreNetworkId"></a>

```python
core_network_id: str
```

- *Type:* str

The Id of the core network that you want to peer a transit gateway to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_transit_gateway_peering#core_network_id NetworkmanagerTransitGatewayPeering#core_network_id}

---

##### `transit_gateway_arn`<sup>Required</sup> <a name="transit_gateway_arn" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.transitGatewayArn"></a>

```python
transit_gateway_arn: str
```

- *Type:* str

The ARN (Amazon Resource Name) of the transit gateway that you will peer to a core network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_transit_gateway_peering#transit_gateway_arn NetworkmanagerTransitGatewayPeering#transit_gateway_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[NetworkmanagerTransitGatewayPeeringTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTags">NetworkmanagerTransitGatewayPeeringTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_transit_gateway_peering#tags NetworkmanagerTransitGatewayPeering#tags}

---

### NetworkmanagerTransitGatewayPeeringTags <a name="NetworkmanagerTransitGatewayPeeringTags" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTags.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_transit_gateway_peering

networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_transit_gateway_peering#key NetworkmanagerTransitGatewayPeering#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/networkmanager_transit_gateway_peering#value NetworkmanagerTransitGatewayPeering#value}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerTransitGatewayPeeringTagsList <a name="NetworkmanagerTransitGatewayPeeringTagsList" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_transit_gateway_peering

networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkmanagerTransitGatewayPeeringTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTags">NetworkmanagerTransitGatewayPeeringTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworkmanagerTransitGatewayPeeringTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTags">NetworkmanagerTransitGatewayPeeringTags</a>]

---


### NetworkmanagerTransitGatewayPeeringTagsOutputReference <a name="NetworkmanagerTransitGatewayPeeringTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkmanager_transit_gateway_peering

networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTags">NetworkmanagerTransitGatewayPeeringTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkmanagerTransitGatewayPeeringTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkmanagerTransitGatewayPeering.NetworkmanagerTransitGatewayPeeringTags">NetworkmanagerTransitGatewayPeeringTags</a>

---



