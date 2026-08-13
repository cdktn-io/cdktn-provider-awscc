# `ec2Eip` Submodule <a name="`ec2Eip` Submodule" id="@cdktn/provider-awscc.ec2Eip"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2Eip <a name="Ec2Eip" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip awscc_ec2_eip}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_eip

ec2Eip.Ec2Eip(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  address: str = None,
  domain: str = None,
  instance_id: str = None,
  ipam_pool_id: str = None,
  network_border_group: str = None,
  public_ipv4_pool: str = None,
  tags: IResolvable | typing.List[Ec2EipTags] = None,
  transfer_address: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.Initializer.parameter.address">address</a></code> | <code>str</code> | An Elastic IP address or a carrier IP address in a Wavelength Zone. |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.Initializer.parameter.domain">domain</a></code> | <code>str</code> | The network (``vpc``). |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | The ID of the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.Initializer.parameter.ipamPoolId">ipam_pool_id</a></code> | <code>str</code> | The ID of an IPAM pool which has an Amazon-provided or BYOIP public IPv4 CIDR provisioned to it. |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.Initializer.parameter.networkBorderGroup">network_border_group</a></code> | <code>str</code> | A unique set of Availability Zones, Local Zones, or Wavelength Zones from which AWS advertises IP addresses. |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.Initializer.parameter.publicIpv4Pool">public_ipv4_pool</a></code> | <code>str</code> | The ID of an address pool that you own. |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTags">Ec2EipTags</a>]</code> | Any tags assigned to the Elastic IP address. |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.Initializer.parameter.transferAddress">transfer_address</a></code> | <code>str</code> | The Elastic IP address you are accepting for transfer. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.Initializer.parameter.address"></a>

- *Type:* str

An Elastic IP address or a carrier IP address in a Wavelength Zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip#address Ec2Eip#address}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.Initializer.parameter.domain"></a>

- *Type:* str

The network (``vpc``).

If you define an Elastic IP address and associate it with a VPC that is defined in the same template, you must declare a dependency on the VPC-gateway attachment by using the [DependsOn Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html) on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip#domain Ec2Eip#domain}

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.Initializer.parameter.instanceId"></a>

- *Type:* str

The ID of the instance.

Updates to the `InstanceId` property may require *some interruptions*. Updates on an EIP reassociates the address on its associated resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip#instance_id Ec2Eip#instance_id}

---

##### `ipam_pool_id`<sup>Optional</sup> <a name="ipam_pool_id" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.Initializer.parameter.ipamPoolId"></a>

- *Type:* str

The ID of an IPAM pool which has an Amazon-provided or BYOIP public IPv4 CIDR provisioned to it.

For more information, see [Allocate sequential Elastic IP addresses from an IPAM pool](https://docs.aws.amazon.com/vpc/latest/ipam/tutorials-eip-pool.html) in the *Amazon VPC IPAM User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip#ipam_pool_id Ec2Eip#ipam_pool_id}

---

##### `network_border_group`<sup>Optional</sup> <a name="network_border_group" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.Initializer.parameter.networkBorderGroup"></a>

- *Type:* str

A unique set of Availability Zones, Local Zones, or Wavelength Zones from which AWS advertises IP addresses.

Use this parameter to limit the IP address to this location. IP addresses cannot move between network border groups.
Use [DescribeAvailabilityZones](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAvailabilityZones.html) to view the network border groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip#network_border_group Ec2Eip#network_border_group}

---

##### `public_ipv4_pool`<sup>Optional</sup> <a name="public_ipv4_pool" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.Initializer.parameter.publicIpv4Pool"></a>

- *Type:* str

The ID of an address pool that you own.

Use this parameter to let Amazon EC2 select an address from the address pool.
Updates to the `PublicIpv4Pool` property may require *some interruptions*. Updates on an EIP reassociates the address on its associated resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip#public_ipv_4_pool Ec2Eip#public_ipv_4_pool}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTags">Ec2EipTags</a>]

Any tags assigned to the Elastic IP address.

Updates to the `Tags` property may require *some interruptions*. Updates on an EIP reassociates the address on its associated resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip#tags Ec2Eip#tags}

---

##### `transfer_address`<sup>Optional</sup> <a name="transfer_address" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.Initializer.parameter.transferAddress"></a>

- *Type:* str

The Elastic IP address you are accepting for transfer.

You can only accept one transferred address. For more information on Elastic IP address transfers, see [Transfer Elastic IP addresses](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-eips.html#transfer-EIPs-intro) in the *Amazon Virtual Private Cloud User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip#transfer_address Ec2Eip#transfer_address}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.resetAddress">reset_address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.resetDomain">reset_domain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.resetInstanceId">reset_instance_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.resetIpamPoolId">reset_ipam_pool_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.resetNetworkBorderGroup">reset_network_border_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.resetPublicIpv4Pool">reset_public_ipv4_pool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.resetTransferAddress">reset_transfer_address</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Ec2EipTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTags">Ec2EipTags</a>]

---

##### `reset_address` <a name="reset_address" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.resetAddress"></a>

```python
def reset_address() -> None
```

##### `reset_domain` <a name="reset_domain" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.resetDomain"></a>

```python
def reset_domain() -> None
```

##### `reset_instance_id` <a name="reset_instance_id" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.resetInstanceId"></a>

```python
def reset_instance_id() -> None
```

##### `reset_ipam_pool_id` <a name="reset_ipam_pool_id" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.resetIpamPoolId"></a>

```python
def reset_ipam_pool_id() -> None
```

##### `reset_network_border_group` <a name="reset_network_border_group" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.resetNetworkBorderGroup"></a>

```python
def reset_network_border_group() -> None
```

##### `reset_public_ipv4_pool` <a name="reset_public_ipv4_pool" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.resetPublicIpv4Pool"></a>

```python
def reset_public_ipv4_pool() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_transfer_address` <a name="reset_transfer_address" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.resetTransferAddress"></a>

```python
def reset_transfer_address() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2Eip resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_eip

ec2Eip.Ec2Eip.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_eip

ec2Eip.Ec2Eip.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_eip

ec2Eip.Ec2Eip.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_eip

ec2Eip.Ec2Eip.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2Eip resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2Eip to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2Eip that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2Eip to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.allocationId">allocation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.publicIp">public_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsList">Ec2EipTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.ipamPoolIdInput">ipam_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.networkBorderGroupInput">network_border_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.publicIpv4PoolInput">public_ipv4_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTags">Ec2EipTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.transferAddressInput">transfer_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.ipamPoolId">ipam_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.networkBorderGroup">network_border_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.publicIpv4Pool">public_ipv4_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.transferAddress">transfer_address</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `allocation_id`<sup>Required</sup> <a name="allocation_id" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.allocationId"></a>

```python
allocation_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `public_ip`<sup>Required</sup> <a name="public_ip" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.publicIp"></a>

```python
public_ip: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.tags"></a>

```python
tags: Ec2EipTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsList">Ec2EipTagsList</a>

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `ipam_pool_id_input`<sup>Optional</sup> <a name="ipam_pool_id_input" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.ipamPoolIdInput"></a>

```python
ipam_pool_id_input: str
```

- *Type:* str

---

##### `network_border_group_input`<sup>Optional</sup> <a name="network_border_group_input" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.networkBorderGroupInput"></a>

```python
network_border_group_input: str
```

- *Type:* str

---

##### `public_ipv4_pool_input`<sup>Optional</sup> <a name="public_ipv4_pool_input" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.publicIpv4PoolInput"></a>

```python
public_ipv4_pool_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Ec2EipTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTags">Ec2EipTags</a>]

---

##### `transfer_address_input`<sup>Optional</sup> <a name="transfer_address_input" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.transferAddressInput"></a>

```python
transfer_address_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `ipam_pool_id`<sup>Required</sup> <a name="ipam_pool_id" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.ipamPoolId"></a>

```python
ipam_pool_id: str
```

- *Type:* str

---

##### `network_border_group`<sup>Required</sup> <a name="network_border_group" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.networkBorderGroup"></a>

```python
network_border_group: str
```

- *Type:* str

---

##### `public_ipv4_pool`<sup>Required</sup> <a name="public_ipv4_pool" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.publicIpv4Pool"></a>

```python
public_ipv4_pool: str
```

- *Type:* str

---

##### `transfer_address`<sup>Required</sup> <a name="transfer_address" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.transferAddress"></a>

```python
transfer_address: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2Eip.Ec2Eip.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2EipConfig <a name="Ec2EipConfig" id="@cdktn/provider-awscc.ec2Eip.Ec2EipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Eip.Ec2EipConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_eip

ec2Eip.Ec2EipConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  address: str = None,
  domain: str = None,
  instance_id: str = None,
  ipam_pool_id: str = None,
  network_border_group: str = None,
  public_ipv4_pool: str = None,
  tags: IResolvable | typing.List[Ec2EipTags] = None,
  transfer_address: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipConfig.property.address">address</a></code> | <code>str</code> | An Elastic IP address or a carrier IP address in a Wavelength Zone. |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipConfig.property.domain">domain</a></code> | <code>str</code> | The network (``vpc``). |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipConfig.property.instanceId">instance_id</a></code> | <code>str</code> | The ID of the instance. |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipConfig.property.ipamPoolId">ipam_pool_id</a></code> | <code>str</code> | The ID of an IPAM pool which has an Amazon-provided or BYOIP public IPv4 CIDR provisioned to it. |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipConfig.property.networkBorderGroup">network_border_group</a></code> | <code>str</code> | A unique set of Availability Zones, Local Zones, or Wavelength Zones from which AWS advertises IP addresses. |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipConfig.property.publicIpv4Pool">public_ipv4_pool</a></code> | <code>str</code> | The ID of an address pool that you own. |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTags">Ec2EipTags</a>]</code> | Any tags assigned to the Elastic IP address. |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipConfig.property.transferAddress">transfer_address</a></code> | <code>str</code> | The Elastic IP address you are accepting for transfer. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2Eip.Ec2EipConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2Eip.Ec2EipConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2Eip.Ec2EipConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2Eip.Ec2EipConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2Eip.Ec2EipConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Eip.Ec2EipConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2Eip.Ec2EipConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktn/provider-awscc.ec2Eip.Ec2EipConfig.property.address"></a>

```python
address: str
```

- *Type:* str

An Elastic IP address or a carrier IP address in a Wavelength Zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip#address Ec2Eip#address}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-awscc.ec2Eip.Ec2EipConfig.property.domain"></a>

```python
domain: str
```

- *Type:* str

The network (``vpc``).

If you define an Elastic IP address and associate it with a VPC that is defined in the same template, you must declare a dependency on the VPC-gateway attachment by using the [DependsOn Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html) on this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip#domain Ec2Eip#domain}

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="@cdktn/provider-awscc.ec2Eip.Ec2EipConfig.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

The ID of the instance.

Updates to the `InstanceId` property may require *some interruptions*. Updates on an EIP reassociates the address on its associated resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip#instance_id Ec2Eip#instance_id}

---

##### `ipam_pool_id`<sup>Optional</sup> <a name="ipam_pool_id" id="@cdktn/provider-awscc.ec2Eip.Ec2EipConfig.property.ipamPoolId"></a>

```python
ipam_pool_id: str
```

- *Type:* str

The ID of an IPAM pool which has an Amazon-provided or BYOIP public IPv4 CIDR provisioned to it.

For more information, see [Allocate sequential Elastic IP addresses from an IPAM pool](https://docs.aws.amazon.com/vpc/latest/ipam/tutorials-eip-pool.html) in the *Amazon VPC IPAM User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip#ipam_pool_id Ec2Eip#ipam_pool_id}

---

##### `network_border_group`<sup>Optional</sup> <a name="network_border_group" id="@cdktn/provider-awscc.ec2Eip.Ec2EipConfig.property.networkBorderGroup"></a>

```python
network_border_group: str
```

- *Type:* str

A unique set of Availability Zones, Local Zones, or Wavelength Zones from which AWS advertises IP addresses.

Use this parameter to limit the IP address to this location. IP addresses cannot move between network border groups.
Use [DescribeAvailabilityZones](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAvailabilityZones.html) to view the network border groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip#network_border_group Ec2Eip#network_border_group}

---

##### `public_ipv4_pool`<sup>Optional</sup> <a name="public_ipv4_pool" id="@cdktn/provider-awscc.ec2Eip.Ec2EipConfig.property.publicIpv4Pool"></a>

```python
public_ipv4_pool: str
```

- *Type:* str

The ID of an address pool that you own.

Use this parameter to let Amazon EC2 select an address from the address pool.
Updates to the `PublicIpv4Pool` property may require *some interruptions*. Updates on an EIP reassociates the address on its associated resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip#public_ipv_4_pool Ec2Eip#public_ipv_4_pool}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2Eip.Ec2EipConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Ec2EipTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTags">Ec2EipTags</a>]

Any tags assigned to the Elastic IP address.

Updates to the `Tags` property may require *some interruptions*. Updates on an EIP reassociates the address on its associated resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip#tags Ec2Eip#tags}

---

##### `transfer_address`<sup>Optional</sup> <a name="transfer_address" id="@cdktn/provider-awscc.ec2Eip.Ec2EipConfig.property.transferAddress"></a>

```python
transfer_address: str
```

- *Type:* str

The Elastic IP address you are accepting for transfer.

You can only accept one transferred address. For more information on Elastic IP address transfers, see [Transfer Elastic IP addresses](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-eips.html#transfer-EIPs-intro) in the *Amazon Virtual Private Cloud User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip#transfer_address Ec2Eip#transfer_address}

---

### Ec2EipTags <a name="Ec2EipTags" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTags.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_eip

ec2Eip.Ec2EipTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTags.property.key">key</a></code> | <code>str</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTags.property.value">value</a></code> | <code>str</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip#key Ec2Eip#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_eip#value Ec2Eip#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2EipTagsList <a name="Ec2EipTagsList" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_eip

ec2Eip.Ec2EipTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2EipTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTags">Ec2EipTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2EipTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTags">Ec2EipTags</a>]

---


### Ec2EipTagsOutputReference <a name="Ec2EipTagsOutputReference" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_eip

ec2Eip.Ec2EipTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTags">Ec2EipTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Eip.Ec2EipTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2EipTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Eip.Ec2EipTags">Ec2EipTags</a>

---



