# `ec2DhcpOptions` Submodule <a name="`ec2DhcpOptions` Submodule" id="@cdktn/provider-awscc.ec2DhcpOptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2DhcpOptions <a name="Ec2DhcpOptions" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_dhcp_options awscc_ec2_dhcp_options}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_dhcp_options

ec2DhcpOptions.Ec2DhcpOptions(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain_name: str = None,
  domain_name_servers: typing.List[str] = None,
  ipv6_address_preferred_lease_time: typing.Union[int, float] = None,
  netbios_name_servers: typing.List[str] = None,
  netbios_node_type: typing.Union[int, float] = None,
  ntp_servers: typing.List[str] = None,
  tags: IResolvable | typing.List[Ec2DhcpOptionsTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | This value is used to complete unqualified DNS hostnames. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.domainNameServers">domain_name_servers</a></code> | <code>typing.List[str]</code> | The IPv4 addresses of up to four domain name servers, or AmazonProvidedDNS. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.ipv6AddressPreferredLeaseTime">ipv6_address_preferred_lease_time</a></code> | <code>typing.Union[int, float]</code> | The preferred Lease Time for ipV6 address in seconds. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.netbiosNameServers">netbios_name_servers</a></code> | <code>typing.List[str]</code> | The IPv4 addresses of up to four NetBIOS name servers. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.netbiosNodeType">netbios_node_type</a></code> | <code>typing.Union[int, float]</code> | The NetBIOS node type (1, 2, 4, or 8). |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.ntpServers">ntp_servers</a></code> | <code>typing.List[str]</code> | The IPv4 addresses of up to four Network Time Protocol (NTP) servers. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags">Ec2DhcpOptionsTags</a>]</code> | Any tags assigned to the DHCP options set. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_name`<sup>Optional</sup> <a name="domain_name" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.domainName"></a>

- *Type:* str

This value is used to complete unqualified DNS hostnames.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_dhcp_options#domain_name Ec2DhcpOptions#domain_name}

---

##### `domain_name_servers`<sup>Optional</sup> <a name="domain_name_servers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.domainNameServers"></a>

- *Type:* typing.List[str]

The IPv4 addresses of up to four domain name servers, or AmazonProvidedDNS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_dhcp_options#domain_name_servers Ec2DhcpOptions#domain_name_servers}

---

##### `ipv6_address_preferred_lease_time`<sup>Optional</sup> <a name="ipv6_address_preferred_lease_time" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.ipv6AddressPreferredLeaseTime"></a>

- *Type:* typing.Union[int, float]

The preferred Lease Time for ipV6 address in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_dhcp_options#ipv_6_address_preferred_lease_time Ec2DhcpOptions#ipv_6_address_preferred_lease_time}

---

##### `netbios_name_servers`<sup>Optional</sup> <a name="netbios_name_servers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.netbiosNameServers"></a>

- *Type:* typing.List[str]

The IPv4 addresses of up to four NetBIOS name servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_dhcp_options#netbios_name_servers Ec2DhcpOptions#netbios_name_servers}

---

##### `netbios_node_type`<sup>Optional</sup> <a name="netbios_node_type" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.netbiosNodeType"></a>

- *Type:* typing.Union[int, float]

The NetBIOS node type (1, 2, 4, or 8).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_dhcp_options#netbios_node_type Ec2DhcpOptions#netbios_node_type}

---

##### `ntp_servers`<sup>Optional</sup> <a name="ntp_servers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.ntpServers"></a>

- *Type:* typing.List[str]

The IPv4 addresses of up to four Network Time Protocol (NTP) servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_dhcp_options#ntp_servers Ec2DhcpOptions#ntp_servers}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags">Ec2DhcpOptionsTags</a>]

Any tags assigned to the DHCP options set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_dhcp_options#tags Ec2DhcpOptions#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetDomainName">reset_domain_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetDomainNameServers">reset_domain_name_servers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetIpv6AddressPreferredLeaseTime">reset_ipv6_address_preferred_lease_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetNetbiosNameServers">reset_netbios_name_servers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetNetbiosNodeType">reset_netbios_node_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetNtpServers">reset_ntp_servers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Ec2DhcpOptionsTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags">Ec2DhcpOptionsTags</a>]

---

##### `reset_domain_name` <a name="reset_domain_name" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetDomainName"></a>

```python
def reset_domain_name() -> None
```

##### `reset_domain_name_servers` <a name="reset_domain_name_servers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetDomainNameServers"></a>

```python
def reset_domain_name_servers() -> None
```

##### `reset_ipv6_address_preferred_lease_time` <a name="reset_ipv6_address_preferred_lease_time" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetIpv6AddressPreferredLeaseTime"></a>

```python
def reset_ipv6_address_preferred_lease_time() -> None
```

##### `reset_netbios_name_servers` <a name="reset_netbios_name_servers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetNetbiosNameServers"></a>

```python
def reset_netbios_name_servers() -> None
```

##### `reset_netbios_node_type` <a name="reset_netbios_node_type" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetNetbiosNodeType"></a>

```python
def reset_netbios_node_type() -> None
```

##### `reset_ntp_servers` <a name="reset_ntp_servers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetNtpServers"></a>

```python
def reset_ntp_servers() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2DhcpOptions resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_dhcp_options

ec2DhcpOptions.Ec2DhcpOptions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_dhcp_options

ec2DhcpOptions.Ec2DhcpOptions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_dhcp_options

ec2DhcpOptions.Ec2DhcpOptions.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_dhcp_options

ec2DhcpOptions.Ec2DhcpOptions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2DhcpOptions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2DhcpOptions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2DhcpOptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_dhcp_options#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2DhcpOptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.dhcpOptionsId">dhcp_options_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList">Ec2DhcpOptionsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.domainNameServersInput">domain_name_servers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.ipv6AddressPreferredLeaseTimeInput">ipv6_address_preferred_lease_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.netbiosNameServersInput">netbios_name_servers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.netbiosNodeTypeInput">netbios_node_type_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.ntpServersInput">ntp_servers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags">Ec2DhcpOptionsTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.domainNameServers">domain_name_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.ipv6AddressPreferredLeaseTime">ipv6_address_preferred_lease_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.netbiosNameServers">netbios_name_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.netbiosNodeType">netbios_node_type</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.ntpServers">ntp_servers</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `dhcp_options_id`<sup>Required</sup> <a name="dhcp_options_id" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.dhcpOptionsId"></a>

```python
dhcp_options_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.tags"></a>

```python
tags: Ec2DhcpOptionsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList">Ec2DhcpOptionsTagsList</a>

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `domain_name_servers_input`<sup>Optional</sup> <a name="domain_name_servers_input" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.domainNameServersInput"></a>

```python
domain_name_servers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipv6_address_preferred_lease_time_input`<sup>Optional</sup> <a name="ipv6_address_preferred_lease_time_input" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.ipv6AddressPreferredLeaseTimeInput"></a>

```python
ipv6_address_preferred_lease_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `netbios_name_servers_input`<sup>Optional</sup> <a name="netbios_name_servers_input" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.netbiosNameServersInput"></a>

```python
netbios_name_servers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `netbios_node_type_input`<sup>Optional</sup> <a name="netbios_node_type_input" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.netbiosNodeTypeInput"></a>

```python
netbios_node_type_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ntp_servers_input`<sup>Optional</sup> <a name="ntp_servers_input" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.ntpServersInput"></a>

```python
ntp_servers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Ec2DhcpOptionsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags">Ec2DhcpOptionsTags</a>]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `domain_name_servers`<sup>Required</sup> <a name="domain_name_servers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.domainNameServers"></a>

```python
domain_name_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipv6_address_preferred_lease_time`<sup>Required</sup> <a name="ipv6_address_preferred_lease_time" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.ipv6AddressPreferredLeaseTime"></a>

```python
ipv6_address_preferred_lease_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `netbios_name_servers`<sup>Required</sup> <a name="netbios_name_servers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.netbiosNameServers"></a>

```python
netbios_name_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `netbios_node_type`<sup>Required</sup> <a name="netbios_node_type" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.netbiosNodeType"></a>

```python
netbios_node_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ntp_servers`<sup>Required</sup> <a name="ntp_servers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.ntpServers"></a>

```python
ntp_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2DhcpOptionsConfig <a name="Ec2DhcpOptionsConfig" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_dhcp_options

ec2DhcpOptions.Ec2DhcpOptionsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain_name: str = None,
  domain_name_servers: typing.List[str] = None,
  ipv6_address_preferred_lease_time: typing.Union[int, float] = None,
  netbios_name_servers: typing.List[str] = None,
  netbios_node_type: typing.Union[int, float] = None,
  ntp_servers: typing.List[str] = None,
  tags: IResolvable | typing.List[Ec2DhcpOptionsTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.domainName">domain_name</a></code> | <code>str</code> | This value is used to complete unqualified DNS hostnames. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.domainNameServers">domain_name_servers</a></code> | <code>typing.List[str]</code> | The IPv4 addresses of up to four domain name servers, or AmazonProvidedDNS. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.ipv6AddressPreferredLeaseTime">ipv6_address_preferred_lease_time</a></code> | <code>typing.Union[int, float]</code> | The preferred Lease Time for ipV6 address in seconds. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.netbiosNameServers">netbios_name_servers</a></code> | <code>typing.List[str]</code> | The IPv4 addresses of up to four NetBIOS name servers. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.netbiosNodeType">netbios_node_type</a></code> | <code>typing.Union[int, float]</code> | The NetBIOS node type (1, 2, 4, or 8). |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.ntpServers">ntp_servers</a></code> | <code>typing.List[str]</code> | The IPv4 addresses of up to four Network Time Protocol (NTP) servers. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags">Ec2DhcpOptionsTags</a>]</code> | Any tags assigned to the DHCP options set. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_name`<sup>Optional</sup> <a name="domain_name" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

This value is used to complete unqualified DNS hostnames.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_dhcp_options#domain_name Ec2DhcpOptions#domain_name}

---

##### `domain_name_servers`<sup>Optional</sup> <a name="domain_name_servers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.domainNameServers"></a>

```python
domain_name_servers: typing.List[str]
```

- *Type:* typing.List[str]

The IPv4 addresses of up to four domain name servers, or AmazonProvidedDNS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_dhcp_options#domain_name_servers Ec2DhcpOptions#domain_name_servers}

---

##### `ipv6_address_preferred_lease_time`<sup>Optional</sup> <a name="ipv6_address_preferred_lease_time" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.ipv6AddressPreferredLeaseTime"></a>

```python
ipv6_address_preferred_lease_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The preferred Lease Time for ipV6 address in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_dhcp_options#ipv_6_address_preferred_lease_time Ec2DhcpOptions#ipv_6_address_preferred_lease_time}

---

##### `netbios_name_servers`<sup>Optional</sup> <a name="netbios_name_servers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.netbiosNameServers"></a>

```python
netbios_name_servers: typing.List[str]
```

- *Type:* typing.List[str]

The IPv4 addresses of up to four NetBIOS name servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_dhcp_options#netbios_name_servers Ec2DhcpOptions#netbios_name_servers}

---

##### `netbios_node_type`<sup>Optional</sup> <a name="netbios_node_type" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.netbiosNodeType"></a>

```python
netbios_node_type: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The NetBIOS node type (1, 2, 4, or 8).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_dhcp_options#netbios_node_type Ec2DhcpOptions#netbios_node_type}

---

##### `ntp_servers`<sup>Optional</sup> <a name="ntp_servers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.ntpServers"></a>

```python
ntp_servers: typing.List[str]
```

- *Type:* typing.List[str]

The IPv4 addresses of up to four Network Time Protocol (NTP) servers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_dhcp_options#ntp_servers Ec2DhcpOptions#ntp_servers}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Ec2DhcpOptionsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags">Ec2DhcpOptionsTags</a>]

Any tags assigned to the DHCP options set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_dhcp_options#tags Ec2DhcpOptions#tags}

---

### Ec2DhcpOptionsTags <a name="Ec2DhcpOptionsTags" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_dhcp_options

ec2DhcpOptions.Ec2DhcpOptionsTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_dhcp_options#key Ec2DhcpOptions#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_dhcp_options#value Ec2DhcpOptions#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_dhcp_options#key Ec2DhcpOptions#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_dhcp_options#value Ec2DhcpOptions#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2DhcpOptionsTagsList <a name="Ec2DhcpOptionsTagsList" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_dhcp_options

ec2DhcpOptions.Ec2DhcpOptionsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2DhcpOptionsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags">Ec2DhcpOptionsTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2DhcpOptionsTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags">Ec2DhcpOptionsTags</a>]

---


### Ec2DhcpOptionsTagsOutputReference <a name="Ec2DhcpOptionsTagsOutputReference" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_dhcp_options

ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags">Ec2DhcpOptionsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2DhcpOptionsTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2DhcpOptions.Ec2DhcpOptionsTags">Ec2DhcpOptionsTags</a>

---



