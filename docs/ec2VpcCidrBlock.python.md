# `ec2VpcCidrBlock` Submodule <a name="`ec2VpcCidrBlock` Submodule" id="@cdktn/provider-awscc.ec2VpcCidrBlock"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VpcCidrBlock <a name="Ec2VpcCidrBlock" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_cidr_block awscc_ec2_vpc_cidr_block}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpc_cidr_block

ec2VpcCidrBlock.Ec2VpcCidrBlock(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  vpc_id: str,
  amazon_provided_ipv6_cidr_block: bool | IResolvable = None,
  cidr_block: str = None,
  ipv4_ipam_pool_id: str = None,
  ipv4_netmask_length: typing.Union[int, float] = None,
  ipv6_cidr_block: str = None,
  ipv6_cidr_block_network_border_group: str = None,
  ipv6_ipam_pool_id: str = None,
  ipv6_netmask_length: typing.Union[int, float] = None,
  ipv6_pool: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | The ID of the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.amazonProvidedIpv6CidrBlock">amazon_provided_ipv6_cidr_block</a></code> | <code>bool \| cdktn.IResolvable</code> | Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.cidrBlock">cidr_block</a></code> | <code>str</code> | An IPv4 CIDR block to associate with the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.ipv4IpamPoolId">ipv4_ipam_pool_id</a></code> | <code>str</code> | The ID of the IPv4 IPAM pool to Associate a CIDR from to a VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.ipv4NetmaskLength">ipv4_netmask_length</a></code> | <code>typing.Union[int, float]</code> | The netmask length of the IPv4 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | An IPv6 CIDR block from the IPv6 address pool. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.ipv6CidrBlockNetworkBorderGroup">ipv6_cidr_block_network_border_group</a></code> | <code>str</code> | The name of the location from which we advertise the IPV6 CIDR block. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.ipv6IpamPoolId">ipv6_ipam_pool_id</a></code> | <code>str</code> | The ID of the IPv6 IPAM pool to Associate a CIDR from to a VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.ipv6NetmaskLength">ipv6_netmask_length</a></code> | <code>typing.Union[int, float]</code> | The netmask length of the IPv6 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.ipv6Pool">ipv6_pool</a></code> | <code>str</code> | The ID of an IPv6 address pool from which to allocate the IPv6 CIDR block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.vpcId"></a>

- *Type:* str

The ID of the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_cidr_block#vpc_id Ec2VpcCidrBlock#vpc_id}

---

##### `amazon_provided_ipv6_cidr_block`<sup>Optional</sup> <a name="amazon_provided_ipv6_cidr_block" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.amazonProvidedIpv6CidrBlock"></a>

- *Type:* bool | cdktn.IResolvable

Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC.

You cannot specify the range of IPv6 addresses, or the size of the CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_cidr_block#amazon_provided_ipv_6_cidr_block Ec2VpcCidrBlock#amazon_provided_ipv_6_cidr_block}

---

##### `cidr_block`<sup>Optional</sup> <a name="cidr_block" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.cidrBlock"></a>

- *Type:* str

An IPv4 CIDR block to associate with the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_cidr_block#cidr_block Ec2VpcCidrBlock#cidr_block}

---

##### `ipv4_ipam_pool_id`<sup>Optional</sup> <a name="ipv4_ipam_pool_id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.ipv4IpamPoolId"></a>

- *Type:* str

The ID of the IPv4 IPAM pool to Associate a CIDR from to a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_cidr_block#ipv_4_ipam_pool_id Ec2VpcCidrBlock#ipv_4_ipam_pool_id}

---

##### `ipv4_netmask_length`<sup>Optional</sup> <a name="ipv4_netmask_length" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.ipv4NetmaskLength"></a>

- *Type:* typing.Union[int, float]

The netmask length of the IPv4 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_cidr_block#ipv_4_netmask_length Ec2VpcCidrBlock#ipv_4_netmask_length}

---

##### `ipv6_cidr_block`<sup>Optional</sup> <a name="ipv6_cidr_block" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.ipv6CidrBlock"></a>

- *Type:* str

An IPv6 CIDR block from the IPv6 address pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_cidr_block#ipv_6_cidr_block Ec2VpcCidrBlock#ipv_6_cidr_block}

---

##### `ipv6_cidr_block_network_border_group`<sup>Optional</sup> <a name="ipv6_cidr_block_network_border_group" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.ipv6CidrBlockNetworkBorderGroup"></a>

- *Type:* str

The name of the location from which we advertise the IPV6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_cidr_block#ipv_6_cidr_block_network_border_group Ec2VpcCidrBlock#ipv_6_cidr_block_network_border_group}

---

##### `ipv6_ipam_pool_id`<sup>Optional</sup> <a name="ipv6_ipam_pool_id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.ipv6IpamPoolId"></a>

- *Type:* str

The ID of the IPv6 IPAM pool to Associate a CIDR from to a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_cidr_block#ipv_6_ipam_pool_id Ec2VpcCidrBlock#ipv_6_ipam_pool_id}

---

##### `ipv6_netmask_length`<sup>Optional</sup> <a name="ipv6_netmask_length" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.ipv6NetmaskLength"></a>

- *Type:* typing.Union[int, float]

The netmask length of the IPv6 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_cidr_block#ipv_6_netmask_length Ec2VpcCidrBlock#ipv_6_netmask_length}

---

##### `ipv6_pool`<sup>Optional</sup> <a name="ipv6_pool" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.Initializer.parameter.ipv6Pool"></a>

- *Type:* str

The ID of an IPv6 address pool from which to allocate the IPv6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_cidr_block#ipv_6_pool Ec2VpcCidrBlock#ipv_6_pool}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetAmazonProvidedIpv6CidrBlock">reset_amazon_provided_ipv6_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetCidrBlock">reset_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv4IpamPoolId">reset_ipv4_ipam_pool_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv4NetmaskLength">reset_ipv4_netmask_length</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6CidrBlock">reset_ipv6_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6CidrBlockNetworkBorderGroup">reset_ipv6_cidr_block_network_border_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6IpamPoolId">reset_ipv6_ipam_pool_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6NetmaskLength">reset_ipv6_netmask_length</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6Pool">reset_ipv6_pool</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_amazon_provided_ipv6_cidr_block` <a name="reset_amazon_provided_ipv6_cidr_block" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetAmazonProvidedIpv6CidrBlock"></a>

```python
def reset_amazon_provided_ipv6_cidr_block() -> None
```

##### `reset_cidr_block` <a name="reset_cidr_block" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetCidrBlock"></a>

```python
def reset_cidr_block() -> None
```

##### `reset_ipv4_ipam_pool_id` <a name="reset_ipv4_ipam_pool_id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv4IpamPoolId"></a>

```python
def reset_ipv4_ipam_pool_id() -> None
```

##### `reset_ipv4_netmask_length` <a name="reset_ipv4_netmask_length" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv4NetmaskLength"></a>

```python
def reset_ipv4_netmask_length() -> None
```

##### `reset_ipv6_cidr_block` <a name="reset_ipv6_cidr_block" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6CidrBlock"></a>

```python
def reset_ipv6_cidr_block() -> None
```

##### `reset_ipv6_cidr_block_network_border_group` <a name="reset_ipv6_cidr_block_network_border_group" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6CidrBlockNetworkBorderGroup"></a>

```python
def reset_ipv6_cidr_block_network_border_group() -> None
```

##### `reset_ipv6_ipam_pool_id` <a name="reset_ipv6_ipam_pool_id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6IpamPoolId"></a>

```python
def reset_ipv6_ipam_pool_id() -> None
```

##### `reset_ipv6_netmask_length` <a name="reset_ipv6_netmask_length" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6NetmaskLength"></a>

```python
def reset_ipv6_netmask_length() -> None
```

##### `reset_ipv6_pool` <a name="reset_ipv6_pool" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.resetIpv6Pool"></a>

```python
def reset_ipv6_pool() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2VpcCidrBlock resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_vpc_cidr_block

ec2VpcCidrBlock.Ec2VpcCidrBlock.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_vpc_cidr_block

ec2VpcCidrBlock.Ec2VpcCidrBlock.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_vpc_cidr_block

ec2VpcCidrBlock.Ec2VpcCidrBlock.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_vpc_cidr_block

ec2VpcCidrBlock.Ec2VpcCidrBlock.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2VpcCidrBlock resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2VpcCidrBlock to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2VpcCidrBlock that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_cidr_block#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VpcCidrBlock to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipSource">ip_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6AddressAttribute">ipv6_address_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.vpcCidrBlockId">vpc_cidr_block_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.amazonProvidedIpv6CidrBlockInput">amazon_provided_ipv6_cidr_block_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.cidrBlockInput">cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv4IpamPoolIdInput">ipv4_ipam_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv4NetmaskLengthInput">ipv4_netmask_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6CidrBlockInput">ipv6_cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6CidrBlockNetworkBorderGroupInput">ipv6_cidr_block_network_border_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6IpamPoolIdInput">ipv6_ipam_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6NetmaskLengthInput">ipv6_netmask_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6PoolInput">ipv6_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.amazonProvidedIpv6CidrBlock">amazon_provided_ipv6_cidr_block</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.cidrBlock">cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv4IpamPoolId">ipv4_ipam_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv4NetmaskLength">ipv4_netmask_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6CidrBlockNetworkBorderGroup">ipv6_cidr_block_network_border_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6IpamPoolId">ipv6_ipam_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6NetmaskLength">ipv6_netmask_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6Pool">ipv6_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_source`<sup>Required</sup> <a name="ip_source" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipSource"></a>

```python
ip_source: str
```

- *Type:* str

---

##### `ipv6_address_attribute`<sup>Required</sup> <a name="ipv6_address_attribute" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6AddressAttribute"></a>

```python
ipv6_address_attribute: str
```

- *Type:* str

---

##### `vpc_cidr_block_id`<sup>Required</sup> <a name="vpc_cidr_block_id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.vpcCidrBlockId"></a>

```python
vpc_cidr_block_id: str
```

- *Type:* str

---

##### `amazon_provided_ipv6_cidr_block_input`<sup>Optional</sup> <a name="amazon_provided_ipv6_cidr_block_input" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.amazonProvidedIpv6CidrBlockInput"></a>

```python
amazon_provided_ipv6_cidr_block_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cidr_block_input`<sup>Optional</sup> <a name="cidr_block_input" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.cidrBlockInput"></a>

```python
cidr_block_input: str
```

- *Type:* str

---

##### `ipv4_ipam_pool_id_input`<sup>Optional</sup> <a name="ipv4_ipam_pool_id_input" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv4IpamPoolIdInput"></a>

```python
ipv4_ipam_pool_id_input: str
```

- *Type:* str

---

##### `ipv4_netmask_length_input`<sup>Optional</sup> <a name="ipv4_netmask_length_input" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv4NetmaskLengthInput"></a>

```python
ipv4_netmask_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_cidr_block_input`<sup>Optional</sup> <a name="ipv6_cidr_block_input" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6CidrBlockInput"></a>

```python
ipv6_cidr_block_input: str
```

- *Type:* str

---

##### `ipv6_cidr_block_network_border_group_input`<sup>Optional</sup> <a name="ipv6_cidr_block_network_border_group_input" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6CidrBlockNetworkBorderGroupInput"></a>

```python
ipv6_cidr_block_network_border_group_input: str
```

- *Type:* str

---

##### `ipv6_ipam_pool_id_input`<sup>Optional</sup> <a name="ipv6_ipam_pool_id_input" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6IpamPoolIdInput"></a>

```python
ipv6_ipam_pool_id_input: str
```

- *Type:* str

---

##### `ipv6_netmask_length_input`<sup>Optional</sup> <a name="ipv6_netmask_length_input" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6NetmaskLengthInput"></a>

```python
ipv6_netmask_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_pool_input`<sup>Optional</sup> <a name="ipv6_pool_input" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6PoolInput"></a>

```python
ipv6_pool_input: str
```

- *Type:* str

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `amazon_provided_ipv6_cidr_block`<sup>Required</sup> <a name="amazon_provided_ipv6_cidr_block" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.amazonProvidedIpv6CidrBlock"></a>

```python
amazon_provided_ipv6_cidr_block: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

---

##### `ipv4_ipam_pool_id`<sup>Required</sup> <a name="ipv4_ipam_pool_id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv4IpamPoolId"></a>

```python
ipv4_ipam_pool_id: str
```

- *Type:* str

---

##### `ipv4_netmask_length`<sup>Required</sup> <a name="ipv4_netmask_length" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv4NetmaskLength"></a>

```python
ipv4_netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_cidr_block`<sup>Required</sup> <a name="ipv6_cidr_block" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

---

##### `ipv6_cidr_block_network_border_group`<sup>Required</sup> <a name="ipv6_cidr_block_network_border_group" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6CidrBlockNetworkBorderGroup"></a>

```python
ipv6_cidr_block_network_border_group: str
```

- *Type:* str

---

##### `ipv6_ipam_pool_id`<sup>Required</sup> <a name="ipv6_ipam_pool_id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6IpamPoolId"></a>

```python
ipv6_ipam_pool_id: str
```

- *Type:* str

---

##### `ipv6_netmask_length`<sup>Required</sup> <a name="ipv6_netmask_length" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6NetmaskLength"></a>

```python
ipv6_netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_pool`<sup>Required</sup> <a name="ipv6_pool" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.ipv6Pool"></a>

```python
ipv6_pool: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlock.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VpcCidrBlockConfig <a name="Ec2VpcCidrBlockConfig" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpc_cidr_block

ec2VpcCidrBlock.Ec2VpcCidrBlockConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  vpc_id: str,
  amazon_provided_ipv6_cidr_block: bool | IResolvable = None,
  cidr_block: str = None,
  ipv4_ipam_pool_id: str = None,
  ipv4_netmask_length: typing.Union[int, float] = None,
  ipv6_cidr_block: str = None,
  ipv6_cidr_block_network_border_group: str = None,
  ipv6_ipam_pool_id: str = None,
  ipv6_netmask_length: typing.Union[int, float] = None,
  ipv6_pool: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | The ID of the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.amazonProvidedIpv6CidrBlock">amazon_provided_ipv6_cidr_block</a></code> | <code>bool \| cdktn.IResolvable</code> | Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.cidrBlock">cidr_block</a></code> | <code>str</code> | An IPv4 CIDR block to associate with the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv4IpamPoolId">ipv4_ipam_pool_id</a></code> | <code>str</code> | The ID of the IPv4 IPAM pool to Associate a CIDR from to a VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv4NetmaskLength">ipv4_netmask_length</a></code> | <code>typing.Union[int, float]</code> | The netmask length of the IPv4 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6CidrBlock">ipv6_cidr_block</a></code> | <code>str</code> | An IPv6 CIDR block from the IPv6 address pool. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6CidrBlockNetworkBorderGroup">ipv6_cidr_block_network_border_group</a></code> | <code>str</code> | The name of the location from which we advertise the IPV6 CIDR block. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6IpamPoolId">ipv6_ipam_pool_id</a></code> | <code>str</code> | The ID of the IPv6 IPAM pool to Associate a CIDR from to a VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6NetmaskLength">ipv6_netmask_length</a></code> | <code>typing.Union[int, float]</code> | The netmask length of the IPv6 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6Pool">ipv6_pool</a></code> | <code>str</code> | The ID of an IPv6 address pool from which to allocate the IPv6 CIDR block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

The ID of the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_cidr_block#vpc_id Ec2VpcCidrBlock#vpc_id}

---

##### `amazon_provided_ipv6_cidr_block`<sup>Optional</sup> <a name="amazon_provided_ipv6_cidr_block" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.amazonProvidedIpv6CidrBlock"></a>

```python
amazon_provided_ipv6_cidr_block: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Requests an Amazon-provided IPv6 CIDR block with a /56 prefix length for the VPC.

You cannot specify the range of IPv6 addresses, or the size of the CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_cidr_block#amazon_provided_ipv_6_cidr_block Ec2VpcCidrBlock#amazon_provided_ipv_6_cidr_block}

---

##### `cidr_block`<sup>Optional</sup> <a name="cidr_block" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

An IPv4 CIDR block to associate with the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_cidr_block#cidr_block Ec2VpcCidrBlock#cidr_block}

---

##### `ipv4_ipam_pool_id`<sup>Optional</sup> <a name="ipv4_ipam_pool_id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv4IpamPoolId"></a>

```python
ipv4_ipam_pool_id: str
```

- *Type:* str

The ID of the IPv4 IPAM pool to Associate a CIDR from to a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_cidr_block#ipv_4_ipam_pool_id Ec2VpcCidrBlock#ipv_4_ipam_pool_id}

---

##### `ipv4_netmask_length`<sup>Optional</sup> <a name="ipv4_netmask_length" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv4NetmaskLength"></a>

```python
ipv4_netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The netmask length of the IPv4 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_cidr_block#ipv_4_netmask_length Ec2VpcCidrBlock#ipv_4_netmask_length}

---

##### `ipv6_cidr_block`<sup>Optional</sup> <a name="ipv6_cidr_block" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6CidrBlock"></a>

```python
ipv6_cidr_block: str
```

- *Type:* str

An IPv6 CIDR block from the IPv6 address pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_cidr_block#ipv_6_cidr_block Ec2VpcCidrBlock#ipv_6_cidr_block}

---

##### `ipv6_cidr_block_network_border_group`<sup>Optional</sup> <a name="ipv6_cidr_block_network_border_group" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6CidrBlockNetworkBorderGroup"></a>

```python
ipv6_cidr_block_network_border_group: str
```

- *Type:* str

The name of the location from which we advertise the IPV6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_cidr_block#ipv_6_cidr_block_network_border_group Ec2VpcCidrBlock#ipv_6_cidr_block_network_border_group}

---

##### `ipv6_ipam_pool_id`<sup>Optional</sup> <a name="ipv6_ipam_pool_id" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6IpamPoolId"></a>

```python
ipv6_ipam_pool_id: str
```

- *Type:* str

The ID of the IPv6 IPAM pool to Associate a CIDR from to a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_cidr_block#ipv_6_ipam_pool_id Ec2VpcCidrBlock#ipv_6_ipam_pool_id}

---

##### `ipv6_netmask_length`<sup>Optional</sup> <a name="ipv6_netmask_length" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6NetmaskLength"></a>

```python
ipv6_netmask_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The netmask length of the IPv6 CIDR you would like to associate from an Amazon VPC IP Address Manager (IPAM) pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_cidr_block#ipv_6_netmask_length Ec2VpcCidrBlock#ipv_6_netmask_length}

---

##### `ipv6_pool`<sup>Optional</sup> <a name="ipv6_pool" id="@cdktn/provider-awscc.ec2VpcCidrBlock.Ec2VpcCidrBlockConfig.property.ipv6Pool"></a>

```python
ipv6_pool: str
```

- *Type:* str

The ID of an IPv6 address pool from which to allocate the IPv6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_cidr_block#ipv_6_pool Ec2VpcCidrBlock#ipv_6_pool}

---



