# `directconnectPublicVirtualInterface` Submodule <a name="`directconnectPublicVirtualInterface` Submodule" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectconnectPublicVirtualInterface <a name="DirectconnectPublicVirtualInterface" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_public_virtual_interface awscc_directconnect_public_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer"></a>

```python
from cdktn_provider_awscc import directconnect_public_virtual_interface

directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bgp_peers: IResolvable | typing.List[DirectconnectPublicVirtualInterfaceBgpPeers],
  connection_id: str,
  virtual_interface_name: str,
  vlan: typing.Union[int, float],
  allocate_public_virtual_interface_role_arn: str = None,
  rate_limit: str = None,
  route_filter_prefixes: typing.List[str] = None,
  tags: IResolvable | typing.List[DirectconnectPublicVirtualInterfaceTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.bgpPeers">bgp_peers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a>]</code> | The BGP peers configured on this virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.connectionId">connection_id</a></code> | <code>str</code> | The ID or ARN of the connection or LAG. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.virtualInterfaceName">virtual_interface_name</a></code> | <code>str</code> | The name of the virtual interface assigned by the customer network. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | The ID of the VLAN. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.allocatePublicVirtualInterfaceRoleArn">allocate_public_virtual_interface_role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the role to allocate the public virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.rateLimit">rate_limit</a></code> | <code>str</code> | The rate limit (bandwidth allocation) for the virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.routeFilterPrefixes">route_filter_prefixes</a></code> | <code>typing.List[str]</code> | The routes to be advertised to the AWS network in this region. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a>]</code> | The tags associated with the public virtual interface. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bgp_peers`<sup>Required</sup> <a name="bgp_peers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.bgpPeers"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a>]

The BGP peers configured on this virtual interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_public_virtual_interface#bgp_peers DirectconnectPublicVirtualInterface#bgp_peers}

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.connectionId"></a>

- *Type:* str

The ID or ARN of the connection or LAG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_public_virtual_interface#connection_id DirectconnectPublicVirtualInterface#connection_id}

---

##### `virtual_interface_name`<sup>Required</sup> <a name="virtual_interface_name" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.virtualInterfaceName"></a>

- *Type:* str

The name of the virtual interface assigned by the customer network.

The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_public_virtual_interface#virtual_interface_name DirectconnectPublicVirtualInterface#virtual_interface_name}

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.vlan"></a>

- *Type:* typing.Union[int, float]

The ID of the VLAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_public_virtual_interface#vlan DirectconnectPublicVirtualInterface#vlan}

---

##### `allocate_public_virtual_interface_role_arn`<sup>Optional</sup> <a name="allocate_public_virtual_interface_role_arn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.allocatePublicVirtualInterfaceRoleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the role to allocate the public virtual interface.

Needs directconnect:AllocatePublicVirtualInterface permissions and tag permissions if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_public_virtual_interface#allocate_public_virtual_interface_role_arn DirectconnectPublicVirtualInterface#allocate_public_virtual_interface_role_arn}

---

##### `rate_limit`<sup>Optional</sup> <a name="rate_limit" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.rateLimit"></a>

- *Type:* str

The rate limit (bandwidth allocation) for the virtual interface.

The value must be one of the supported bandwidth values (e.g., 50Mbps, 1Gbps, 10Gbps) and cannot exceed the bandwidth of the parent connection or LAG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_public_virtual_interface#rate_limit DirectconnectPublicVirtualInterface#rate_limit}

---

##### `route_filter_prefixes`<sup>Optional</sup> <a name="route_filter_prefixes" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.routeFilterPrefixes"></a>

- *Type:* typing.List[str]

The routes to be advertised to the AWS network in this region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_public_virtual_interface#route_filter_prefixes DirectconnectPublicVirtualInterface#route_filter_prefixes}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a>]

The tags associated with the public virtual interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_public_virtual_interface#tags DirectconnectPublicVirtualInterface#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.putBgpPeers">put_bgp_peers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetAllocatePublicVirtualInterfaceRoleArn">reset_allocate_public_virtual_interface_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetRateLimit">reset_rate_limit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetRouteFilterPrefixes">reset_route_filter_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_bgp_peers` <a name="put_bgp_peers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.putBgpPeers"></a>

```python
def put_bgp_peers(
  value: IResolvable | typing.List[DirectconnectPublicVirtualInterfaceBgpPeers]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.putBgpPeers.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[DirectconnectPublicVirtualInterfaceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a>]

---

##### `reset_allocate_public_virtual_interface_role_arn` <a name="reset_allocate_public_virtual_interface_role_arn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetAllocatePublicVirtualInterfaceRoleArn"></a>

```python
def reset_allocate_public_virtual_interface_role_arn() -> None
```

##### `reset_rate_limit` <a name="reset_rate_limit" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetRateLimit"></a>

```python
def reset_rate_limit() -> None
```

##### `reset_route_filter_prefixes` <a name="reset_route_filter_prefixes" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetRouteFilterPrefixes"></a>

```python
def reset_route_filter_prefixes() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DirectconnectPublicVirtualInterface resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isConstruct"></a>

```python
from cdktn_provider_awscc import directconnect_public_virtual_interface

directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isTerraformElement"></a>

```python
from cdktn_provider_awscc import directconnect_public_virtual_interface

directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isTerraformResource"></a>

```python
from cdktn_provider_awscc import directconnect_public_virtual_interface

directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import directconnect_public_virtual_interface

directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DirectconnectPublicVirtualInterface resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DirectconnectPublicVirtualInterface to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DirectconnectPublicVirtualInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_public_virtual_interface#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DirectconnectPublicVirtualInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.bgpPeers">bgp_peers</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList">DirectconnectPublicVirtualInterfaceBgpPeersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList">DirectconnectPublicVirtualInterfaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceArn">virtual_interface_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceId">virtual_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.allocatePublicVirtualInterfaceRoleArnInput">allocate_public_virtual_interface_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.bgpPeersInput">bgp_peers_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.connectionIdInput">connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.rateLimitInput">rate_limit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.routeFilterPrefixesInput">route_filter_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceNameInput">virtual_interface_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.vlanInput">vlan_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.allocatePublicVirtualInterfaceRoleArn">allocate_public_virtual_interface_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.rateLimit">rate_limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.routeFilterPrefixes">route_filter_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceName">virtual_interface_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bgp_peers`<sup>Required</sup> <a name="bgp_peers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.bgpPeers"></a>

```python
bgp_peers: DirectconnectPublicVirtualInterfaceBgpPeersList
```

- *Type:* <a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList">DirectconnectPublicVirtualInterfaceBgpPeersList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.tags"></a>

```python
tags: DirectconnectPublicVirtualInterfaceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList">DirectconnectPublicVirtualInterfaceTagsList</a>

---

##### `virtual_interface_arn`<sup>Required</sup> <a name="virtual_interface_arn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceArn"></a>

```python
virtual_interface_arn: str
```

- *Type:* str

---

##### `virtual_interface_id`<sup>Required</sup> <a name="virtual_interface_id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceId"></a>

```python
virtual_interface_id: str
```

- *Type:* str

---

##### `allocate_public_virtual_interface_role_arn_input`<sup>Optional</sup> <a name="allocate_public_virtual_interface_role_arn_input" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.allocatePublicVirtualInterfaceRoleArnInput"></a>

```python
allocate_public_virtual_interface_role_arn_input: str
```

- *Type:* str

---

##### `bgp_peers_input`<sup>Optional</sup> <a name="bgp_peers_input" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.bgpPeersInput"></a>

```python
bgp_peers_input: IResolvable | typing.List[DirectconnectPublicVirtualInterfaceBgpPeers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a>]

---

##### `connection_id_input`<sup>Optional</sup> <a name="connection_id_input" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.connectionIdInput"></a>

```python
connection_id_input: str
```

- *Type:* str

---

##### `rate_limit_input`<sup>Optional</sup> <a name="rate_limit_input" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.rateLimitInput"></a>

```python
rate_limit_input: str
```

- *Type:* str

---

##### `route_filter_prefixes_input`<sup>Optional</sup> <a name="route_filter_prefixes_input" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.routeFilterPrefixesInput"></a>

```python
route_filter_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[DirectconnectPublicVirtualInterfaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a>]

---

##### `virtual_interface_name_input`<sup>Optional</sup> <a name="virtual_interface_name_input" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceNameInput"></a>

```python
virtual_interface_name_input: str
```

- *Type:* str

---

##### `vlan_input`<sup>Optional</sup> <a name="vlan_input" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.vlanInput"></a>

```python
vlan_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allocate_public_virtual_interface_role_arn`<sup>Required</sup> <a name="allocate_public_virtual_interface_role_arn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.allocatePublicVirtualInterfaceRoleArn"></a>

```python
allocate_public_virtual_interface_role_arn: str
```

- *Type:* str

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `rate_limit`<sup>Required</sup> <a name="rate_limit" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.rateLimit"></a>

```python
rate_limit: str
```

- *Type:* str

---

##### `route_filter_prefixes`<sup>Required</sup> <a name="route_filter_prefixes" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.routeFilterPrefixes"></a>

```python
route_filter_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `virtual_interface_name`<sup>Required</sup> <a name="virtual_interface_name" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceName"></a>

```python
virtual_interface_name: str
```

- *Type:* str

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.vlan"></a>

```python
vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DirectconnectPublicVirtualInterfaceBgpPeers <a name="DirectconnectPublicVirtualInterfaceBgpPeers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.Initializer"></a>

```python
from cdktn_provider_awscc import directconnect_public_virtual_interface

directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers(
  address_family: str,
  asn: str,
  amazon_address: str = None,
  auth_key: str = None,
  bgp_peer_id: str = None,
  customer_address: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.addressFamily">address_family</a></code> | <code>str</code> | The address family for the BGP peer. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.asn">asn</a></code> | <code>str</code> | The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.amazonAddress">amazon_address</a></code> | <code>str</code> | The IP address assigned to the Amazon interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.authKey">auth_key</a></code> | <code>str</code> | The authentication key for BGP configuration. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.bgpPeerId">bgp_peer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_public_virtual_interface#bgp_peer_id DirectconnectPublicVirtualInterface#bgp_peer_id}. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.customerAddress">customer_address</a></code> | <code>str</code> | The IP address assigned to the customer interface. |

---

##### `address_family`<sup>Required</sup> <a name="address_family" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.addressFamily"></a>

```python
address_family: str
```

- *Type:* str

The address family for the BGP peer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_public_virtual_interface#address_family DirectconnectPublicVirtualInterface#address_family}

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.asn"></a>

```python
asn: str
```

- *Type:* str

The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_public_virtual_interface#asn DirectconnectPublicVirtualInterface#asn}

---

##### `amazon_address`<sup>Optional</sup> <a name="amazon_address" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.amazonAddress"></a>

```python
amazon_address: str
```

- *Type:* str

The IP address assigned to the Amazon interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_public_virtual_interface#amazon_address DirectconnectPublicVirtualInterface#amazon_address}

---

##### `auth_key`<sup>Optional</sup> <a name="auth_key" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.authKey"></a>

```python
auth_key: str
```

- *Type:* str

The authentication key for BGP configuration.

This string has a minimum length of 6 characters and and a maximum length of 80 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_public_virtual_interface#auth_key DirectconnectPublicVirtualInterface#auth_key}

---

##### `bgp_peer_id`<sup>Optional</sup> <a name="bgp_peer_id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.bgpPeerId"></a>

```python
bgp_peer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_public_virtual_interface#bgp_peer_id DirectconnectPublicVirtualInterface#bgp_peer_id}.

---

##### `customer_address`<sup>Optional</sup> <a name="customer_address" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.customerAddress"></a>

```python
customer_address: str
```

- *Type:* str

The IP address assigned to the customer interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_public_virtual_interface#customer_address DirectconnectPublicVirtualInterface#customer_address}

---

### DirectconnectPublicVirtualInterfaceConfig <a name="DirectconnectPublicVirtualInterfaceConfig" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import directconnect_public_virtual_interface

directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  bgp_peers: IResolvable | typing.List[DirectconnectPublicVirtualInterfaceBgpPeers],
  connection_id: str,
  virtual_interface_name: str,
  vlan: typing.Union[int, float],
  allocate_public_virtual_interface_role_arn: str = None,
  rate_limit: str = None,
  route_filter_prefixes: typing.List[str] = None,
  tags: IResolvable | typing.List[DirectconnectPublicVirtualInterfaceTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.bgpPeers">bgp_peers</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a>]</code> | The BGP peers configured on this virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.connectionId">connection_id</a></code> | <code>str</code> | The ID or ARN of the connection or LAG. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.virtualInterfaceName">virtual_interface_name</a></code> | <code>str</code> | The name of the virtual interface assigned by the customer network. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.vlan">vlan</a></code> | <code>typing.Union[int, float]</code> | The ID of the VLAN. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.allocatePublicVirtualInterfaceRoleArn">allocate_public_virtual_interface_role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the role to allocate the public virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.rateLimit">rate_limit</a></code> | <code>str</code> | The rate limit (bandwidth allocation) for the virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.routeFilterPrefixes">route_filter_prefixes</a></code> | <code>typing.List[str]</code> | The routes to be advertised to the AWS network in this region. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a>]</code> | The tags associated with the public virtual interface. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `bgp_peers`<sup>Required</sup> <a name="bgp_peers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.bgpPeers"></a>

```python
bgp_peers: IResolvable | typing.List[DirectconnectPublicVirtualInterfaceBgpPeers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a>]

The BGP peers configured on this virtual interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_public_virtual_interface#bgp_peers DirectconnectPublicVirtualInterface#bgp_peers}

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

The ID or ARN of the connection or LAG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_public_virtual_interface#connection_id DirectconnectPublicVirtualInterface#connection_id}

---

##### `virtual_interface_name`<sup>Required</sup> <a name="virtual_interface_name" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.virtualInterfaceName"></a>

```python
virtual_interface_name: str
```

- *Type:* str

The name of the virtual interface assigned by the customer network.

The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_public_virtual_interface#virtual_interface_name DirectconnectPublicVirtualInterface#virtual_interface_name}

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.vlan"></a>

```python
vlan: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the VLAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_public_virtual_interface#vlan DirectconnectPublicVirtualInterface#vlan}

---

##### `allocate_public_virtual_interface_role_arn`<sup>Optional</sup> <a name="allocate_public_virtual_interface_role_arn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.allocatePublicVirtualInterfaceRoleArn"></a>

```python
allocate_public_virtual_interface_role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the role to allocate the public virtual interface.

Needs directconnect:AllocatePublicVirtualInterface permissions and tag permissions if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_public_virtual_interface#allocate_public_virtual_interface_role_arn DirectconnectPublicVirtualInterface#allocate_public_virtual_interface_role_arn}

---

##### `rate_limit`<sup>Optional</sup> <a name="rate_limit" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.rateLimit"></a>

```python
rate_limit: str
```

- *Type:* str

The rate limit (bandwidth allocation) for the virtual interface.

The value must be one of the supported bandwidth values (e.g., 50Mbps, 1Gbps, 10Gbps) and cannot exceed the bandwidth of the parent connection or LAG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_public_virtual_interface#rate_limit DirectconnectPublicVirtualInterface#rate_limit}

---

##### `route_filter_prefixes`<sup>Optional</sup> <a name="route_filter_prefixes" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.routeFilterPrefixes"></a>

```python
route_filter_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

The routes to be advertised to the AWS network in this region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_public_virtual_interface#route_filter_prefixes DirectconnectPublicVirtualInterface#route_filter_prefixes}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[DirectconnectPublicVirtualInterfaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a>]

The tags associated with the public virtual interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_public_virtual_interface#tags DirectconnectPublicVirtualInterface#tags}

---

### DirectconnectPublicVirtualInterfaceTags <a name="DirectconnectPublicVirtualInterfaceTags" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags.Initializer"></a>

```python
from cdktn_provider_awscc import directconnect_public_virtual_interface

directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_public_virtual_interface#key DirectconnectPublicVirtualInterface#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/directconnect_public_virtual_interface#value DirectconnectPublicVirtualInterface#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DirectconnectPublicVirtualInterfaceBgpPeersList <a name="DirectconnectPublicVirtualInterfaceBgpPeersList" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.Initializer"></a>

```python
from cdktn_provider_awscc import directconnect_public_virtual_interface

directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DirectconnectPublicVirtualInterfaceBgpPeersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DirectconnectPublicVirtualInterfaceBgpPeers]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a>]

---


### DirectconnectPublicVirtualInterfaceBgpPeersOutputReference <a name="DirectconnectPublicVirtualInterfaceBgpPeersOutputReference" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import directconnect_public_virtual_interface

directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetAmazonAddress">reset_amazon_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetAuthKey">reset_auth_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetBgpPeerId">reset_bgp_peer_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetCustomerAddress">reset_customer_address</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_amazon_address` <a name="reset_amazon_address" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetAmazonAddress"></a>

```python
def reset_amazon_address() -> None
```

##### `reset_auth_key` <a name="reset_auth_key" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetAuthKey"></a>

```python
def reset_auth_key() -> None
```

##### `reset_bgp_peer_id` <a name="reset_bgp_peer_id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetBgpPeerId"></a>

```python
def reset_bgp_peer_id() -> None
```

##### `reset_customer_address` <a name="reset_customer_address" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetCustomerAddress"></a>

```python
def reset_customer_address() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.addressFamilyInput">address_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.amazonAddressInput">amazon_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.asnInput">asn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.authKeyInput">auth_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.bgpPeerIdInput">bgp_peer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.customerAddressInput">customer_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.addressFamily">address_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.amazonAddress">amazon_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.asn">asn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.authKey">auth_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId">bgp_peer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.customerAddress">customer_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_family_input`<sup>Optional</sup> <a name="address_family_input" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.addressFamilyInput"></a>

```python
address_family_input: str
```

- *Type:* str

---

##### `amazon_address_input`<sup>Optional</sup> <a name="amazon_address_input" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.amazonAddressInput"></a>

```python
amazon_address_input: str
```

- *Type:* str

---

##### `asn_input`<sup>Optional</sup> <a name="asn_input" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.asnInput"></a>

```python
asn_input: str
```

- *Type:* str

---

##### `auth_key_input`<sup>Optional</sup> <a name="auth_key_input" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.authKeyInput"></a>

```python
auth_key_input: str
```

- *Type:* str

---

##### `bgp_peer_id_input`<sup>Optional</sup> <a name="bgp_peer_id_input" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.bgpPeerIdInput"></a>

```python
bgp_peer_id_input: str
```

- *Type:* str

---

##### `customer_address_input`<sup>Optional</sup> <a name="customer_address_input" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.customerAddressInput"></a>

```python
customer_address_input: str
```

- *Type:* str

---

##### `address_family`<sup>Required</sup> <a name="address_family" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.addressFamily"></a>

```python
address_family: str
```

- *Type:* str

---

##### `amazon_address`<sup>Required</sup> <a name="amazon_address" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.amazonAddress"></a>

```python
amazon_address: str
```

- *Type:* str

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.asn"></a>

```python
asn: str
```

- *Type:* str

---

##### `auth_key`<sup>Required</sup> <a name="auth_key" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.authKey"></a>

```python
auth_key: str
```

- *Type:* str

---

##### `bgp_peer_id`<sup>Required</sup> <a name="bgp_peer_id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId"></a>

```python
bgp_peer_id: str
```

- *Type:* str

---

##### `customer_address`<sup>Required</sup> <a name="customer_address" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.customerAddress"></a>

```python
customer_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DirectconnectPublicVirtualInterfaceBgpPeers
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a>

---


### DirectconnectPublicVirtualInterfaceTagsList <a name="DirectconnectPublicVirtualInterfaceTagsList" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import directconnect_public_virtual_interface

directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DirectconnectPublicVirtualInterfaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DirectconnectPublicVirtualInterfaceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a>]

---


### DirectconnectPublicVirtualInterfaceTagsOutputReference <a name="DirectconnectPublicVirtualInterfaceTagsOutputReference" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import directconnect_public_virtual_interface

directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DirectconnectPublicVirtualInterfaceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a>

---



