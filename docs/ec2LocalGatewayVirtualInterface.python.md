# `ec2LocalGatewayVirtualInterface` Submodule <a name="`ec2LocalGatewayVirtualInterface` Submodule" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2LocalGatewayVirtualInterface <a name="Ec2LocalGatewayVirtualInterface" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_local_gateway_virtual_interface awscc_ec2_local_gateway_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_local_gateway_virtual_interface

ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  local_address: str,
  local_gateway_virtual_interface_group_id: str,
  outpost_lag_id: str,
  peer_address: str,
  vlan: typing.Union[int, float],
  peer_bgp_asn: typing.Union[int, float] = None,
  peer_bgp_asn_extended: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[Ec2LocalGatewayVirtualInterfaceTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.localAddress">local_address</a></code> | <code>str</code> | The local address. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.localGatewayVirtualInterfaceGroupId">local_gateway_virtual_interface_group_id</a></code> | <code>str</code> | The ID of the virtual interface group. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.outpostLagId">outpost_lag_id</a></code> | <code>str</code> | The Outpost LAG ID. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.peerAddress">peer_address</a></code> | <code>str</code> | The peer address. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | The ID of the VLAN. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.peerBgpAsn">peer_bgp_asn</a></code> | <code>typing.Union[int, float]</code> | The peer BGP ASN. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.peerBgpAsnExtended">peer_bgp_asn_extended</a></code> | <code>typing.Union[int, float]</code> | The extended 32-bit ASN of the BGP peer for use with larger ASN values. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags">Ec2LocalGatewayVirtualInterfaceTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `local_address`<sup>Required</sup> <a name="local_address" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.localAddress"></a>

- *Type:* str

The local address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_local_gateway_virtual_interface#local_address Ec2LocalGatewayVirtualInterface#local_address}

---

##### `local_gateway_virtual_interface_group_id`<sup>Required</sup> <a name="local_gateway_virtual_interface_group_id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.localGatewayVirtualInterfaceGroupId"></a>

- *Type:* str

The ID of the virtual interface group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_local_gateway_virtual_interface#local_gateway_virtual_interface_group_id Ec2LocalGatewayVirtualInterface#local_gateway_virtual_interface_group_id}

---

##### `outpost_lag_id`<sup>Required</sup> <a name="outpost_lag_id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.outpostLagId"></a>

- *Type:* str

The Outpost LAG ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_local_gateway_virtual_interface#outpost_lag_id Ec2LocalGatewayVirtualInterface#outpost_lag_id}

---

##### `peer_address`<sup>Required</sup> <a name="peer_address" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.peerAddress"></a>

- *Type:* str

The peer address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_local_gateway_virtual_interface#peer_address Ec2LocalGatewayVirtualInterface#peer_address}

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.vlan"></a>

- *Type:* typing.Union[int, float]

The ID of the VLAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_local_gateway_virtual_interface#vlan Ec2LocalGatewayVirtualInterface#vlan}

---

##### `peer_bgp_asn`<sup>Optional</sup> <a name="peer_bgp_asn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.peerBgpAsn"></a>

- *Type:* typing.Union[int, float]

The peer BGP ASN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_local_gateway_virtual_interface#peer_bgp_asn Ec2LocalGatewayVirtualInterface#peer_bgp_asn}

---

##### `peer_bgp_asn_extended`<sup>Optional</sup> <a name="peer_bgp_asn_extended" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.peerBgpAsnExtended"></a>

- *Type:* typing.Union[int, float]

The extended 32-bit ASN of the BGP peer for use with larger ASN values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_local_gateway_virtual_interface#peer_bgp_asn_extended Ec2LocalGatewayVirtualInterface#peer_bgp_asn_extended}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags">Ec2LocalGatewayVirtualInterfaceTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_local_gateway_virtual_interface#tags Ec2LocalGatewayVirtualInterface#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.resetPeerBgpAsn">reset_peer_bgp_asn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.resetPeerBgpAsnExtended">reset_peer_bgp_asn_extended</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Ec2LocalGatewayVirtualInterfaceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags">Ec2LocalGatewayVirtualInterfaceTags</a>]

---

##### `reset_peer_bgp_asn` <a name="reset_peer_bgp_asn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.resetPeerBgpAsn"></a>

```python
def reset_peer_bgp_asn() -> None
```

##### `reset_peer_bgp_asn_extended` <a name="reset_peer_bgp_asn_extended" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.resetPeerBgpAsnExtended"></a>

```python
def reset_peer_bgp_asn_extended() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2LocalGatewayVirtualInterface resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_local_gateway_virtual_interface

ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_local_gateway_virtual_interface

ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_local_gateway_virtual_interface

ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_local_gateway_virtual_interface

ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2LocalGatewayVirtualInterface resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2LocalGatewayVirtualInterface to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2LocalGatewayVirtualInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_local_gateway_virtual_interface#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2LocalGatewayVirtualInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.configurationState">configuration_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localBgpAsn">local_bgp_asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localGatewayId">local_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceId">local_gateway_virtual_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList">Ec2LocalGatewayVirtualInterfaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localAddressInput">local_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceGroupIdInput">local_gateway_virtual_interface_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.outpostLagIdInput">outpost_lag_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerAddressInput">peer_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerBgpAsnExtendedInput">peer_bgp_asn_extended_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerBgpAsnInput">peer_bgp_asn_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags">Ec2LocalGatewayVirtualInterfaceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.vlanInput">vlan_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localAddress">local_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceGroupId">local_gateway_virtual_interface_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.outpostLagId">outpost_lag_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerAddress">peer_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerBgpAsn">peer_bgp_asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerBgpAsnExtended">peer_bgp_asn_extended</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configuration_state`<sup>Required</sup> <a name="configuration_state" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.configurationState"></a>

```python
configuration_state: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `local_bgp_asn`<sup>Required</sup> <a name="local_bgp_asn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localBgpAsn"></a>

```python
local_bgp_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_gateway_id`<sup>Required</sup> <a name="local_gateway_id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localGatewayId"></a>

```python
local_gateway_id: str
```

- *Type:* str

---

##### `local_gateway_virtual_interface_id`<sup>Required</sup> <a name="local_gateway_virtual_interface_id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceId"></a>

```python
local_gateway_virtual_interface_id: str
```

- *Type:* str

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.tags"></a>

```python
tags: Ec2LocalGatewayVirtualInterfaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList">Ec2LocalGatewayVirtualInterfaceTagsList</a>

---

##### `local_address_input`<sup>Optional</sup> <a name="local_address_input" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localAddressInput"></a>

```python
local_address_input: str
```

- *Type:* str

---

##### `local_gateway_virtual_interface_group_id_input`<sup>Optional</sup> <a name="local_gateway_virtual_interface_group_id_input" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceGroupIdInput"></a>

```python
local_gateway_virtual_interface_group_id_input: str
```

- *Type:* str

---

##### `outpost_lag_id_input`<sup>Optional</sup> <a name="outpost_lag_id_input" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.outpostLagIdInput"></a>

```python
outpost_lag_id_input: str
```

- *Type:* str

---

##### `peer_address_input`<sup>Optional</sup> <a name="peer_address_input" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerAddressInput"></a>

```python
peer_address_input: str
```

- *Type:* str

---

##### `peer_bgp_asn_extended_input`<sup>Optional</sup> <a name="peer_bgp_asn_extended_input" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerBgpAsnExtendedInput"></a>

```python
peer_bgp_asn_extended_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peer_bgp_asn_input`<sup>Optional</sup> <a name="peer_bgp_asn_input" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerBgpAsnInput"></a>

```python
peer_bgp_asn_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Ec2LocalGatewayVirtualInterfaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags">Ec2LocalGatewayVirtualInterfaceTags</a>]

---

##### `vlan_input`<sup>Optional</sup> <a name="vlan_input" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.vlanInput"></a>

```python
vlan_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_address`<sup>Required</sup> <a name="local_address" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localAddress"></a>

```python
local_address: str
```

- *Type:* str

---

##### `local_gateway_virtual_interface_group_id`<sup>Required</sup> <a name="local_gateway_virtual_interface_group_id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceGroupId"></a>

```python
local_gateway_virtual_interface_group_id: str
```

- *Type:* str

---

##### `outpost_lag_id`<sup>Required</sup> <a name="outpost_lag_id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.outpostLagId"></a>

```python
outpost_lag_id: str
```

- *Type:* str

---

##### `peer_address`<sup>Required</sup> <a name="peer_address" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerAddress"></a>

```python
peer_address: str
```

- *Type:* str

---

##### `peer_bgp_asn`<sup>Required</sup> <a name="peer_bgp_asn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerBgpAsn"></a>

```python
peer_bgp_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `peer_bgp_asn_extended`<sup>Required</sup> <a name="peer_bgp_asn_extended" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerBgpAsnExtended"></a>

```python
peer_bgp_asn_extended: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.vlan"></a>

```python
vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2LocalGatewayVirtualInterfaceConfig <a name="Ec2LocalGatewayVirtualInterfaceConfig" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_local_gateway_virtual_interface

ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  local_address: str,
  local_gateway_virtual_interface_group_id: str,
  outpost_lag_id: str,
  peer_address: str,
  vlan: typing.Union[int, float],
  peer_bgp_asn: typing.Union[int, float] = None,
  peer_bgp_asn_extended: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[Ec2LocalGatewayVirtualInterfaceTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.localAddress">local_address</a></code> | <code>str</code> | The local address. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.localGatewayVirtualInterfaceGroupId">local_gateway_virtual_interface_group_id</a></code> | <code>str</code> | The ID of the virtual interface group. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.outpostLagId">outpost_lag_id</a></code> | <code>str</code> | The Outpost LAG ID. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.peerAddress">peer_address</a></code> | <code>str</code> | The peer address. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | The ID of the VLAN. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.peerBgpAsn">peer_bgp_asn</a></code> | <code>typing.Union[int, float]</code> | The peer BGP ASN. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.peerBgpAsnExtended">peer_bgp_asn_extended</a></code> | <code>typing.Union[int, float]</code> | The extended 32-bit ASN of the BGP peer for use with larger ASN values. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags">Ec2LocalGatewayVirtualInterfaceTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `local_address`<sup>Required</sup> <a name="local_address" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.localAddress"></a>

```python
local_address: str
```

- *Type:* str

The local address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_local_gateway_virtual_interface#local_address Ec2LocalGatewayVirtualInterface#local_address}

---

##### `local_gateway_virtual_interface_group_id`<sup>Required</sup> <a name="local_gateway_virtual_interface_group_id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.localGatewayVirtualInterfaceGroupId"></a>

```python
local_gateway_virtual_interface_group_id: str
```

- *Type:* str

The ID of the virtual interface group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_local_gateway_virtual_interface#local_gateway_virtual_interface_group_id Ec2LocalGatewayVirtualInterface#local_gateway_virtual_interface_group_id}

---

##### `outpost_lag_id`<sup>Required</sup> <a name="outpost_lag_id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.outpostLagId"></a>

```python
outpost_lag_id: str
```

- *Type:* str

The Outpost LAG ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_local_gateway_virtual_interface#outpost_lag_id Ec2LocalGatewayVirtualInterface#outpost_lag_id}

---

##### `peer_address`<sup>Required</sup> <a name="peer_address" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.peerAddress"></a>

```python
peer_address: str
```

- *Type:* str

The peer address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_local_gateway_virtual_interface#peer_address Ec2LocalGatewayVirtualInterface#peer_address}

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.vlan"></a>

```python
vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the VLAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_local_gateway_virtual_interface#vlan Ec2LocalGatewayVirtualInterface#vlan}

---

##### `peer_bgp_asn`<sup>Optional</sup> <a name="peer_bgp_asn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.peerBgpAsn"></a>

```python
peer_bgp_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The peer BGP ASN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_local_gateway_virtual_interface#peer_bgp_asn Ec2LocalGatewayVirtualInterface#peer_bgp_asn}

---

##### `peer_bgp_asn_extended`<sup>Optional</sup> <a name="peer_bgp_asn_extended" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.peerBgpAsnExtended"></a>

```python
peer_bgp_asn_extended: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The extended 32-bit ASN of the BGP peer for use with larger ASN values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_local_gateway_virtual_interface#peer_bgp_asn_extended Ec2LocalGatewayVirtualInterface#peer_bgp_asn_extended}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Ec2LocalGatewayVirtualInterfaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags">Ec2LocalGatewayVirtualInterfaceTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_local_gateway_virtual_interface#tags Ec2LocalGatewayVirtualInterface#tags}

---

### Ec2LocalGatewayVirtualInterfaceTags <a name="Ec2LocalGatewayVirtualInterfaceTags" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_local_gateway_virtual_interface

ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_local_gateway_virtual_interface#key Ec2LocalGatewayVirtualInterface#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_local_gateway_virtual_interface#value Ec2LocalGatewayVirtualInterface#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2LocalGatewayVirtualInterfaceTagsList <a name="Ec2LocalGatewayVirtualInterfaceTagsList" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_local_gateway_virtual_interface

ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2LocalGatewayVirtualInterfaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags">Ec2LocalGatewayVirtualInterfaceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2LocalGatewayVirtualInterfaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags">Ec2LocalGatewayVirtualInterfaceTags</a>]

---


### Ec2LocalGatewayVirtualInterfaceTagsOutputReference <a name="Ec2LocalGatewayVirtualInterfaceTagsOutputReference" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_local_gateway_virtual_interface

ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags">Ec2LocalGatewayVirtualInterfaceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2LocalGatewayVirtualInterfaceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags">Ec2LocalGatewayVirtualInterfaceTags</a>

---



