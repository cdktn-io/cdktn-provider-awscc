# `ec2CustomerGateway` Submodule <a name="`ec2CustomerGateway` Submodule" id="@cdktn/provider-awscc.ec2CustomerGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2CustomerGateway <a name="Ec2CustomerGateway" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_customer_gateway awscc_ec2_customer_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_customer_gateway

ec2CustomerGateway.Ec2CustomerGateway(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  ip_address: str,
  type: str,
  bgp_asn: typing.Union[int, float] = None,
  bgp_asn_extended: typing.Union[int, float] = None,
  certificate_arn: str = None,
  device_name: str = None,
  tags: IResolvable | typing.List[Ec2CustomerGatewayTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.ipAddress">ip_address</a></code> | <code>str</code> | The IP address for the customer gateway device's outside interface. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of VPN connection that this customer gateway supports (``ipsec.1``). |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.bgpAsn">bgp_asn</a></code> | <code>typing.Union[int, float]</code> | For customer gateway devices that support BGP, specify the device's ASN. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.bgpAsnExtended">bgp_asn_extended</a></code> | <code>typing.Union[int, float]</code> | For customer gateway devices that support BGP, specify the device's ASN. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.certificateArn">certificate_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) for the customer gateway certificate. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.deviceName">device_name</a></code> | <code>str</code> | The name of customer gateway device. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTags">Ec2CustomerGatewayTags</a>]</code> | One or more tags for the customer gateway. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.ipAddress"></a>

- *Type:* str

The IP address for the customer gateway device's outside interface.

The address must be static. If `OutsideIpAddressType` in your VPN connection options is set to `PrivateIpv4`, you can use an RFC6598 or RFC1918 private IPv4 address. If `OutsideIpAddressType` is set to `Ipv6`, you can use an IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_customer_gateway#ip_address Ec2CustomerGateway#ip_address}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.type"></a>

- *Type:* str

The type of VPN connection that this customer gateway supports (``ipsec.1``).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_customer_gateway#type Ec2CustomerGateway#type}

---

##### `bgp_asn`<sup>Optional</sup> <a name="bgp_asn" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.bgpAsn"></a>

- *Type:* typing.Union[int, float]

For customer gateway devices that support BGP, specify the device's ASN.

You must specify either `BgpAsn` or `BgpAsnExtended` when creating the customer gateway. If the ASN is larger than `2,147,483,647`, you must use `BgpAsnExtended`.
Default: 65000
Valid values: `1` to `2,147,483,647`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_customer_gateway#bgp_asn Ec2CustomerGateway#bgp_asn}

---

##### `bgp_asn_extended`<sup>Optional</sup> <a name="bgp_asn_extended" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.bgpAsnExtended"></a>

- *Type:* typing.Union[int, float]

For customer gateway devices that support BGP, specify the device's ASN.

You must specify either `BgpAsn` or `BgpAsnExtended` when creating the customer gateway. If the ASN is larger than `2,147,483,647`, you must use `BgpAsnExtended`.
Valid values: `2,147,483,648` to `4,294,967,295`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_customer_gateway#bgp_asn_extended Ec2CustomerGateway#bgp_asn_extended}

---

##### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.certificateArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) for the customer gateway certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_customer_gateway#certificate_arn Ec2CustomerGateway#certificate_arn}

---

##### `device_name`<sup>Optional</sup> <a name="device_name" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.deviceName"></a>

- *Type:* str

The name of customer gateway device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_customer_gateway#device_name Ec2CustomerGateway#device_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTags">Ec2CustomerGatewayTags</a>]

One or more tags for the customer gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_customer_gateway#tags Ec2CustomerGateway#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.resetBgpAsn">reset_bgp_asn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.resetBgpAsnExtended">reset_bgp_asn_extended</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.resetCertificateArn">reset_certificate_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.resetDeviceName">reset_device_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Ec2CustomerGatewayTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTags">Ec2CustomerGatewayTags</a>]

---

##### `reset_bgp_asn` <a name="reset_bgp_asn" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.resetBgpAsn"></a>

```python
def reset_bgp_asn() -> None
```

##### `reset_bgp_asn_extended` <a name="reset_bgp_asn_extended" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.resetBgpAsnExtended"></a>

```python
def reset_bgp_asn_extended() -> None
```

##### `reset_certificate_arn` <a name="reset_certificate_arn" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.resetCertificateArn"></a>

```python
def reset_certificate_arn() -> None
```

##### `reset_device_name` <a name="reset_device_name" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.resetDeviceName"></a>

```python
def reset_device_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2CustomerGateway resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_customer_gateway

ec2CustomerGateway.Ec2CustomerGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_customer_gateway

ec2CustomerGateway.Ec2CustomerGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_customer_gateway

ec2CustomerGateway.Ec2CustomerGateway.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_customer_gateway

ec2CustomerGateway.Ec2CustomerGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2CustomerGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2CustomerGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2CustomerGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_customer_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2CustomerGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.customerGatewayId">customer_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList">Ec2CustomerGatewayTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.bgpAsnExtendedInput">bgp_asn_extended_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.bgpAsnInput">bgp_asn_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.certificateArnInput">certificate_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.deviceNameInput">device_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTags">Ec2CustomerGatewayTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.bgpAsn">bgp_asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.bgpAsnExtended">bgp_asn_extended</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `customer_gateway_id`<sup>Required</sup> <a name="customer_gateway_id" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.customerGatewayId"></a>

```python
customer_gateway_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.tags"></a>

```python
tags: Ec2CustomerGatewayTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList">Ec2CustomerGatewayTagsList</a>

---

##### `bgp_asn_extended_input`<sup>Optional</sup> <a name="bgp_asn_extended_input" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.bgpAsnExtendedInput"></a>

```python
bgp_asn_extended_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgp_asn_input`<sup>Optional</sup> <a name="bgp_asn_input" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.bgpAsnInput"></a>

```python
bgp_asn_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `certificate_arn_input`<sup>Optional</sup> <a name="certificate_arn_input" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.certificateArnInput"></a>

```python
certificate_arn_input: str
```

- *Type:* str

---

##### `device_name_input`<sup>Optional</sup> <a name="device_name_input" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.deviceNameInput"></a>

```python
device_name_input: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Ec2CustomerGatewayTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTags">Ec2CustomerGatewayTags</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `bgp_asn`<sup>Required</sup> <a name="bgp_asn" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.bgpAsn"></a>

```python
bgp_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bgp_asn_extended`<sup>Required</sup> <a name="bgp_asn_extended" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.bgpAsnExtended"></a>

```python
bgp_asn_extended: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2CustomerGatewayConfig <a name="Ec2CustomerGatewayConfig" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_customer_gateway

ec2CustomerGateway.Ec2CustomerGatewayConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  ip_address: str,
  type: str,
  bgp_asn: typing.Union[int, float] = None,
  bgp_asn_extended: typing.Union[int, float] = None,
  certificate_arn: str = None,
  device_name: str = None,
  tags: IResolvable | typing.List[Ec2CustomerGatewayTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.ipAddress">ip_address</a></code> | <code>str</code> | The IP address for the customer gateway device's outside interface. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.type">type</a></code> | <code>str</code> | The type of VPN connection that this customer gateway supports (``ipsec.1``). |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.bgpAsn">bgp_asn</a></code> | <code>typing.Union[int, float]</code> | For customer gateway devices that support BGP, specify the device's ASN. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.bgpAsnExtended">bgp_asn_extended</a></code> | <code>typing.Union[int, float]</code> | For customer gateway devices that support BGP, specify the device's ASN. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.certificateArn">certificate_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) for the customer gateway certificate. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.deviceName">device_name</a></code> | <code>str</code> | The name of customer gateway device. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTags">Ec2CustomerGatewayTags</a>]</code> | One or more tags for the customer gateway. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

The IP address for the customer gateway device's outside interface.

The address must be static. If `OutsideIpAddressType` in your VPN connection options is set to `PrivateIpv4`, you can use an RFC6598 or RFC1918 private IPv4 address. If `OutsideIpAddressType` is set to `Ipv6`, you can use an IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_customer_gateway#ip_address Ec2CustomerGateway#ip_address}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of VPN connection that this customer gateway supports (``ipsec.1``).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_customer_gateway#type Ec2CustomerGateway#type}

---

##### `bgp_asn`<sup>Optional</sup> <a name="bgp_asn" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.bgpAsn"></a>

```python
bgp_asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

For customer gateway devices that support BGP, specify the device's ASN.

You must specify either `BgpAsn` or `BgpAsnExtended` when creating the customer gateway. If the ASN is larger than `2,147,483,647`, you must use `BgpAsnExtended`.
Default: 65000
Valid values: `1` to `2,147,483,647`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_customer_gateway#bgp_asn Ec2CustomerGateway#bgp_asn}

---

##### `bgp_asn_extended`<sup>Optional</sup> <a name="bgp_asn_extended" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.bgpAsnExtended"></a>

```python
bgp_asn_extended: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

For customer gateway devices that support BGP, specify the device's ASN.

You must specify either `BgpAsn` or `BgpAsnExtended` when creating the customer gateway. If the ASN is larger than `2,147,483,647`, you must use `BgpAsnExtended`.
Valid values: `2,147,483,648` to `4,294,967,295`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_customer_gateway#bgp_asn_extended Ec2CustomerGateway#bgp_asn_extended}

---

##### `certificate_arn`<sup>Optional</sup> <a name="certificate_arn" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) for the customer gateway certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_customer_gateway#certificate_arn Ec2CustomerGateway#certificate_arn}

---

##### `device_name`<sup>Optional</sup> <a name="device_name" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

The name of customer gateway device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_customer_gateway#device_name Ec2CustomerGateway#device_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Ec2CustomerGatewayTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTags">Ec2CustomerGatewayTags</a>]

One or more tags for the customer gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_customer_gateway#tags Ec2CustomerGateway#tags}

---

### Ec2CustomerGatewayTags <a name="Ec2CustomerGatewayTags" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTags.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_customer_gateway

ec2CustomerGateway.Ec2CustomerGatewayTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTags.property.key">key</a></code> | <code>str</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTags.property.value">value</a></code> | <code>str</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTags.property.key"></a>

```python
key: str
```

- *Type:* str

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_customer_gateway#key Ec2CustomerGateway#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTags.property.value"></a>

```python
value: str
```

- *Type:* str

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_customer_gateway#value Ec2CustomerGateway#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2CustomerGatewayTagsList <a name="Ec2CustomerGatewayTagsList" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_customer_gateway

ec2CustomerGateway.Ec2CustomerGatewayTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2CustomerGatewayTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTags">Ec2CustomerGatewayTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2CustomerGatewayTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTags">Ec2CustomerGatewayTags</a>]

---


### Ec2CustomerGatewayTagsOutputReference <a name="Ec2CustomerGatewayTagsOutputReference" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_customer_gateway

ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTags">Ec2CustomerGatewayTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2CustomerGatewayTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTags">Ec2CustomerGatewayTags</a>

---



