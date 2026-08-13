# `transferConnector` Submodule <a name="`transferConnector` Submodule" id="@cdktn/provider-awscc.transferConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferConnector <a name="TransferConnector" id="@cdktn/provider-awscc.transferConnector.TransferConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector awscc_transfer_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_connector

transferConnector.TransferConnector(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_role: str,
  as2_config: TransferConnectorAs2Config = None,
  egress_config: TransferConnectorEgressConfig = None,
  egress_type: str = None,
  ip_address_type: str = None,
  logging_role: str = None,
  security_policy_name: str = None,
  sftp_config: TransferConnectorSftpConfig = None,
  tags: IResolvable | typing.List[TransferConnectorTags] = None,
  url: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.accessRole">access_role</a></code> | <code>str</code> | Specifies the access role for the connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.as2Config">as2_config</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a></code> | Configuration for an AS2 connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.egressConfig">egress_config</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig">TransferConnectorEgressConfig</a></code> | Egress configuration for the connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.egressType">egress_type</a></code> | <code>str</code> | Specifies the egress type for the connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.ipAddressType">ip_address_type</a></code> | <code>str</code> | IP address type for Connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.loggingRole">logging_role</a></code> | <code>str</code> | Specifies the logging role for the connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.securityPolicyName">security_policy_name</a></code> | <code>str</code> | Security policy for SFTP Connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.sftpConfig">sftp_config</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a></code> | Configuration for an SFTP connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a>]</code> | Key-value pairs that can be used to group and search for connectors. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.url">url</a></code> | <code>str</code> | URL for Connector. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_role`<sup>Required</sup> <a name="access_role" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.accessRole"></a>

- *Type:* str

Specifies the access role for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#access_role TransferConnector#access_role}

---

##### `as2_config`<sup>Optional</sup> <a name="as2_config" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.as2Config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a>

Configuration for an AS2 connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#as_2_config TransferConnector#as_2_config}

---

##### `egress_config`<sup>Optional</sup> <a name="egress_config" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.egressConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig">TransferConnectorEgressConfig</a>

Egress configuration for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#egress_config TransferConnector#egress_config}

---

##### `egress_type`<sup>Optional</sup> <a name="egress_type" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.egressType"></a>

- *Type:* str

Specifies the egress type for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#egress_type TransferConnector#egress_type}

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.ipAddressType"></a>

- *Type:* str

IP address type for Connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#ip_address_type TransferConnector#ip_address_type}

---

##### `logging_role`<sup>Optional</sup> <a name="logging_role" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.loggingRole"></a>

- *Type:* str

Specifies the logging role for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#logging_role TransferConnector#logging_role}

---

##### `security_policy_name`<sup>Optional</sup> <a name="security_policy_name" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.securityPolicyName"></a>

- *Type:* str

Security policy for SFTP Connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#security_policy_name TransferConnector#security_policy_name}

---

##### `sftp_config`<sup>Optional</sup> <a name="sftp_config" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.sftpConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a>

Configuration for an SFTP connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#sftp_config TransferConnector#sftp_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a>]

Key-value pairs that can be used to group and search for connectors.

Tags are metadata attached to connectors for any purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#tags TransferConnector#tags}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.transferConnector.TransferConnector.Initializer.parameter.url"></a>

- *Type:* str

URL for Connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#url TransferConnector#url}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.putAs2Config">put_as2_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.putEgressConfig">put_egress_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.putSftpConfig">put_sftp_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetAs2Config">reset_as2_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetEgressConfig">reset_egress_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetEgressType">reset_egress_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetIpAddressType">reset_ip_address_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetLoggingRole">reset_logging_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetSecurityPolicyName">reset_security_policy_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetSftpConfig">reset_sftp_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.resetUrl">reset_url</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transferConnector.TransferConnector.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.transferConnector.TransferConnector.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.transferConnector.TransferConnector.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.transferConnector.TransferConnector.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.transferConnector.TransferConnector.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferConnector.TransferConnector.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.transferConnector.TransferConnector.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.transferConnector.TransferConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.transferConnector.TransferConnector.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.transferConnector.TransferConnector.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.transferConnector.TransferConnector.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.transferConnector.TransferConnector.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.transferConnector.TransferConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.transferConnector.TransferConnector.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.transferConnector.TransferConnector.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferConnector.TransferConnector.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferConnector.TransferConnector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.transferConnector.TransferConnector.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferConnector.TransferConnector.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.transferConnector.TransferConnector.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.transferConnector.TransferConnector.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.transferConnector.TransferConnector.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.transferConnector.TransferConnector.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferConnector.TransferConnector.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_as2_config` <a name="put_as2_config" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putAs2Config"></a>

```python
def put_as2_config(
  async_mdn_config: TransferConnectorAs2ConfigAsyncMdnConfig = None,
  basic_auth_secret_id: str = None,
  compression: str = None,
  encryption_algorithm: str = None,
  local_profile_id: str = None,
  mdn_response: str = None,
  mdn_signing_algorithm: str = None,
  message_subject: str = None,
  partner_profile_id: str = None,
  preserve_content_type: str = None,
  signing_algorithm: str = None
) -> None
```

###### `async_mdn_config`<sup>Optional</sup> <a name="async_mdn_config" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putAs2Config.parameter.asyncMdnConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig">TransferConnectorAs2ConfigAsyncMdnConfig</a>

Configuration for an AS2 connector with ASYNC MDN Response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#async_mdn_config TransferConnector#async_mdn_config}

---

###### `basic_auth_secret_id`<sup>Optional</sup> <a name="basic_auth_secret_id" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putAs2Config.parameter.basicAuthSecretId"></a>

- *Type:* str

ARN or name of the secret in AWS Secrets Manager which contains the credentials for Basic authentication.

If empty, Basic authentication is disabled for the AS2 connector

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#basic_auth_secret_id TransferConnector#basic_auth_secret_id}

---

###### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putAs2Config.parameter.compression"></a>

- *Type:* str

Compression setting for this AS2 connector configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#compression TransferConnector#compression}

---

###### `encryption_algorithm`<sup>Optional</sup> <a name="encryption_algorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putAs2Config.parameter.encryptionAlgorithm"></a>

- *Type:* str

Encryption algorithm for this AS2 connector configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#encryption_algorithm TransferConnector#encryption_algorithm}

---

###### `local_profile_id`<sup>Optional</sup> <a name="local_profile_id" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putAs2Config.parameter.localProfileId"></a>

- *Type:* str

A unique identifier for the local profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#local_profile_id TransferConnector#local_profile_id}

---

###### `mdn_response`<sup>Optional</sup> <a name="mdn_response" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putAs2Config.parameter.mdnResponse"></a>

- *Type:* str

MDN Response setting for this AS2 connector configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#mdn_response TransferConnector#mdn_response}

---

###### `mdn_signing_algorithm`<sup>Optional</sup> <a name="mdn_signing_algorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putAs2Config.parameter.mdnSigningAlgorithm"></a>

- *Type:* str

MDN Signing algorithm for this AS2 connector configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#mdn_signing_algorithm TransferConnector#mdn_signing_algorithm}

---

###### `message_subject`<sup>Optional</sup> <a name="message_subject" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putAs2Config.parameter.messageSubject"></a>

- *Type:* str

The message subject for this AS2 connector configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#message_subject TransferConnector#message_subject}

---

###### `partner_profile_id`<sup>Optional</sup> <a name="partner_profile_id" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putAs2Config.parameter.partnerProfileId"></a>

- *Type:* str

A unique identifier for the partner profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#partner_profile_id TransferConnector#partner_profile_id}

---

###### `preserve_content_type`<sup>Optional</sup> <a name="preserve_content_type" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putAs2Config.parameter.preserveContentType"></a>

- *Type:* str

Specifies whether to use the AWS S3 object content-type as the content-type for the AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#preserve_content_type TransferConnector#preserve_content_type}

---

###### `signing_algorithm`<sup>Optional</sup> <a name="signing_algorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putAs2Config.parameter.signingAlgorithm"></a>

- *Type:* str

Signing algorithm for this AS2 connector configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#signing_algorithm TransferConnector#signing_algorithm}

---

##### `put_egress_config` <a name="put_egress_config" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putEgressConfig"></a>

```python
def put_egress_config(
  vpc_lattice: TransferConnectorEgressConfigVpcLattice = None
) -> None
```

###### `vpc_lattice`<sup>Optional</sup> <a name="vpc_lattice" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putEgressConfig.parameter.vpcLattice"></a>

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice">TransferConnectorEgressConfigVpcLattice</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#vpc_lattice TransferConnector#vpc_lattice}.

---

##### `put_sftp_config` <a name="put_sftp_config" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putSftpConfig"></a>

```python
def put_sftp_config(
  max_concurrent_connections: typing.Union[int, float] = None,
  trusted_host_keys: typing.List[str] = None,
  user_secret_id: str = None
) -> None
```

###### `max_concurrent_connections`<sup>Optional</sup> <a name="max_concurrent_connections" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putSftpConfig.parameter.maxConcurrentConnections"></a>

- *Type:* typing.Union[int, float]

Specifies the number of active connections that your connector can establish with the remote server at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#max_concurrent_connections TransferConnector#max_concurrent_connections}

---

###### `trusted_host_keys`<sup>Optional</sup> <a name="trusted_host_keys" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putSftpConfig.parameter.trustedHostKeys"></a>

- *Type:* typing.List[str]

List of public host keys, for the external server to which you are connecting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#trusted_host_keys TransferConnector#trusted_host_keys}

---

###### `user_secret_id`<sup>Optional</sup> <a name="user_secret_id" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putSftpConfig.parameter.userSecretId"></a>

- *Type:* str

ARN or name of the secret in AWS Secrets Manager which contains the SFTP user's private keys or passwords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#user_secret_id TransferConnector#user_secret_id}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[TransferConnectorTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferConnector.TransferConnector.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a>]

---

##### `reset_as2_config` <a name="reset_as2_config" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetAs2Config"></a>

```python
def reset_as2_config() -> None
```

##### `reset_egress_config` <a name="reset_egress_config" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetEgressConfig"></a>

```python
def reset_egress_config() -> None
```

##### `reset_egress_type` <a name="reset_egress_type" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetEgressType"></a>

```python
def reset_egress_type() -> None
```

##### `reset_ip_address_type` <a name="reset_ip_address_type" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetIpAddressType"></a>

```python
def reset_ip_address_type() -> None
```

##### `reset_logging_role` <a name="reset_logging_role" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetLoggingRole"></a>

```python
def reset_logging_role() -> None
```

##### `reset_security_policy_name` <a name="reset_security_policy_name" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetSecurityPolicyName"></a>

```python
def reset_security_policy_name() -> None
```

##### `reset_sftp_config` <a name="reset_sftp_config" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetSftpConfig"></a>

```python
def reset_sftp_config() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktn/provider-awscc.transferConnector.TransferConnector.resetUrl"></a>

```python
def reset_url() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a TransferConnector resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.transferConnector.TransferConnector.isConstruct"></a>

```python
from cdktn_provider_awscc import transfer_connector

transferConnector.TransferConnector.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferConnector.TransferConnector.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.transferConnector.TransferConnector.isTerraformElement"></a>

```python
from cdktn_provider_awscc import transfer_connector

transferConnector.TransferConnector.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferConnector.TransferConnector.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.transferConnector.TransferConnector.isTerraformResource"></a>

```python
from cdktn_provider_awscc import transfer_connector

transferConnector.TransferConnector.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.transferConnector.TransferConnector.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.transferConnector.TransferConnector.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import transfer_connector

transferConnector.TransferConnector.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a TransferConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.transferConnector.TransferConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.transferConnector.TransferConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TransferConnector to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.transferConnector.TransferConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TransferConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferConnector.TransferConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the TransferConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.as2Config">as2_config</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference">TransferConnectorAs2ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.connectorId">connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.egressConfig">egress_config</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference">TransferConnectorEgressConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.serviceManagedEgressIpAddresses">service_managed_egress_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.sftpConfig">sftp_config</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference">TransferConnectorSftpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList">TransferConnectorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.accessRoleInput">access_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.as2ConfigInput">as2_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.egressConfigInput">egress_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig">TransferConnectorEgressConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.egressTypeInput">egress_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.ipAddressTypeInput">ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.loggingRoleInput">logging_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.securityPolicyNameInput">security_policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.sftpConfigInput">sftp_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.accessRole">access_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.egressType">egress_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.loggingRole">logging_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.securityPolicyName">security_policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.url">url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `as2_config`<sup>Required</sup> <a name="as2_config" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.as2Config"></a>

```python
as2_config: TransferConnectorAs2ConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference">TransferConnectorAs2ConfigOutputReference</a>

---

##### `connector_id`<sup>Required</sup> <a name="connector_id" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.connectorId"></a>

```python
connector_id: str
```

- *Type:* str

---

##### `egress_config`<sup>Required</sup> <a name="egress_config" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.egressConfig"></a>

```python
egress_config: TransferConnectorEgressConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference">TransferConnectorEgressConfigOutputReference</a>

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `service_managed_egress_ip_addresses`<sup>Required</sup> <a name="service_managed_egress_ip_addresses" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.serviceManagedEgressIpAddresses"></a>

```python
service_managed_egress_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sftp_config`<sup>Required</sup> <a name="sftp_config" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.sftpConfig"></a>

```python
sftp_config: TransferConnectorSftpConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference">TransferConnectorSftpConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.tags"></a>

```python
tags: TransferConnectorTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList">TransferConnectorTagsList</a>

---

##### `access_role_input`<sup>Optional</sup> <a name="access_role_input" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.accessRoleInput"></a>

```python
access_role_input: str
```

- *Type:* str

---

##### `as2_config_input`<sup>Optional</sup> <a name="as2_config_input" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.as2ConfigInput"></a>

```python
as2_config_input: IResolvable | TransferConnectorAs2Config
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a>

---

##### `egress_config_input`<sup>Optional</sup> <a name="egress_config_input" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.egressConfigInput"></a>

```python
egress_config_input: IResolvable | TransferConnectorEgressConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig">TransferConnectorEgressConfig</a>

---

##### `egress_type_input`<sup>Optional</sup> <a name="egress_type_input" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.egressTypeInput"></a>

```python
egress_type_input: str
```

- *Type:* str

---

##### `ip_address_type_input`<sup>Optional</sup> <a name="ip_address_type_input" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.ipAddressTypeInput"></a>

```python
ip_address_type_input: str
```

- *Type:* str

---

##### `logging_role_input`<sup>Optional</sup> <a name="logging_role_input" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.loggingRoleInput"></a>

```python
logging_role_input: str
```

- *Type:* str

---

##### `security_policy_name_input`<sup>Optional</sup> <a name="security_policy_name_input" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.securityPolicyNameInput"></a>

```python
security_policy_name_input: str
```

- *Type:* str

---

##### `sftp_config_input`<sup>Optional</sup> <a name="sftp_config_input" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.sftpConfigInput"></a>

```python
sftp_config_input: IResolvable | TransferConnectorSftpConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[TransferConnectorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a>]

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `access_role`<sup>Required</sup> <a name="access_role" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.accessRole"></a>

```python
access_role: str
```

- *Type:* str

---

##### `egress_type`<sup>Required</sup> <a name="egress_type" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.egressType"></a>

```python
egress_type: str
```

- *Type:* str

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `logging_role`<sup>Required</sup> <a name="logging_role" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.loggingRole"></a>

```python
logging_role: str
```

- *Type:* str

---

##### `security_policy_name`<sup>Required</sup> <a name="security_policy_name" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.securityPolicyName"></a>

```python
security_policy_name: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.url"></a>

```python
url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnector.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.transferConnector.TransferConnector.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TransferConnectorAs2Config <a name="TransferConnectorAs2Config" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_connector

transferConnector.TransferConnectorAs2Config(
  async_mdn_config: TransferConnectorAs2ConfigAsyncMdnConfig = None,
  basic_auth_secret_id: str = None,
  compression: str = None,
  encryption_algorithm: str = None,
  local_profile_id: str = None,
  mdn_response: str = None,
  mdn_signing_algorithm: str = None,
  message_subject: str = None,
  partner_profile_id: str = None,
  preserve_content_type: str = None,
  signing_algorithm: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.asyncMdnConfig">async_mdn_config</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig">TransferConnectorAs2ConfigAsyncMdnConfig</a></code> | Configuration for an AS2 connector with ASYNC MDN Response. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.basicAuthSecretId">basic_auth_secret_id</a></code> | <code>str</code> | ARN or name of the secret in AWS Secrets Manager which contains the credentials for Basic authentication. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.compression">compression</a></code> | <code>str</code> | Compression setting for this AS2 connector configuration. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.encryptionAlgorithm">encryption_algorithm</a></code> | <code>str</code> | Encryption algorithm for this AS2 connector configuration. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.localProfileId">local_profile_id</a></code> | <code>str</code> | A unique identifier for the local profile. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.mdnResponse">mdn_response</a></code> | <code>str</code> | MDN Response setting for this AS2 connector configuration. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.mdnSigningAlgorithm">mdn_signing_algorithm</a></code> | <code>str</code> | MDN Signing algorithm for this AS2 connector configuration. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.messageSubject">message_subject</a></code> | <code>str</code> | The message subject for this AS2 connector configuration. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.partnerProfileId">partner_profile_id</a></code> | <code>str</code> | A unique identifier for the partner profile. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.preserveContentType">preserve_content_type</a></code> | <code>str</code> | Specifies whether to use the AWS S3 object content-type as the content-type for the AS2 message. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.signingAlgorithm">signing_algorithm</a></code> | <code>str</code> | Signing algorithm for this AS2 connector configuration. |

---

##### `async_mdn_config`<sup>Optional</sup> <a name="async_mdn_config" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.asyncMdnConfig"></a>

```python
async_mdn_config: TransferConnectorAs2ConfigAsyncMdnConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig">TransferConnectorAs2ConfigAsyncMdnConfig</a>

Configuration for an AS2 connector with ASYNC MDN Response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#async_mdn_config TransferConnector#async_mdn_config}

---

##### `basic_auth_secret_id`<sup>Optional</sup> <a name="basic_auth_secret_id" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.basicAuthSecretId"></a>

```python
basic_auth_secret_id: str
```

- *Type:* str

ARN or name of the secret in AWS Secrets Manager which contains the credentials for Basic authentication.

If empty, Basic authentication is disabled for the AS2 connector

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#basic_auth_secret_id TransferConnector#basic_auth_secret_id}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.compression"></a>

```python
compression: str
```

- *Type:* str

Compression setting for this AS2 connector configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#compression TransferConnector#compression}

---

##### `encryption_algorithm`<sup>Optional</sup> <a name="encryption_algorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.encryptionAlgorithm"></a>

```python
encryption_algorithm: str
```

- *Type:* str

Encryption algorithm for this AS2 connector configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#encryption_algorithm TransferConnector#encryption_algorithm}

---

##### `local_profile_id`<sup>Optional</sup> <a name="local_profile_id" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.localProfileId"></a>

```python
local_profile_id: str
```

- *Type:* str

A unique identifier for the local profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#local_profile_id TransferConnector#local_profile_id}

---

##### `mdn_response`<sup>Optional</sup> <a name="mdn_response" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.mdnResponse"></a>

```python
mdn_response: str
```

- *Type:* str

MDN Response setting for this AS2 connector configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#mdn_response TransferConnector#mdn_response}

---

##### `mdn_signing_algorithm`<sup>Optional</sup> <a name="mdn_signing_algorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.mdnSigningAlgorithm"></a>

```python
mdn_signing_algorithm: str
```

- *Type:* str

MDN Signing algorithm for this AS2 connector configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#mdn_signing_algorithm TransferConnector#mdn_signing_algorithm}

---

##### `message_subject`<sup>Optional</sup> <a name="message_subject" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.messageSubject"></a>

```python
message_subject: str
```

- *Type:* str

The message subject for this AS2 connector configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#message_subject TransferConnector#message_subject}

---

##### `partner_profile_id`<sup>Optional</sup> <a name="partner_profile_id" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.partnerProfileId"></a>

```python
partner_profile_id: str
```

- *Type:* str

A unique identifier for the partner profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#partner_profile_id TransferConnector#partner_profile_id}

---

##### `preserve_content_type`<sup>Optional</sup> <a name="preserve_content_type" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.preserveContentType"></a>

```python
preserve_content_type: str
```

- *Type:* str

Specifies whether to use the AWS S3 object content-type as the content-type for the AS2 message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#preserve_content_type TransferConnector#preserve_content_type}

---

##### `signing_algorithm`<sup>Optional</sup> <a name="signing_algorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config.property.signingAlgorithm"></a>

```python
signing_algorithm: str
```

- *Type:* str

Signing algorithm for this AS2 connector configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#signing_algorithm TransferConnector#signing_algorithm}

---

### TransferConnectorAs2ConfigAsyncMdnConfig <a name="TransferConnectorAs2ConfigAsyncMdnConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_connector

transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig(
  server_ids: typing.List[str] = None,
  url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig.property.serverIds">server_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#server_ids TransferConnector#server_ids}. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig.property.url">url</a></code> | <code>str</code> | URL of the server to receive the MDN response on. |

---

##### `server_ids`<sup>Optional</sup> <a name="server_ids" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig.property.serverIds"></a>

```python
server_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#server_ids TransferConnector#server_ids}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig.property.url"></a>

```python
url: str
```

- *Type:* str

URL of the server to receive the MDN response on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#url TransferConnector#url}

---

### TransferConnectorConfig <a name="TransferConnectorConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_connector

transferConnector.TransferConnectorConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  access_role: str,
  as2_config: TransferConnectorAs2Config = None,
  egress_config: TransferConnectorEgressConfig = None,
  egress_type: str = None,
  ip_address_type: str = None,
  logging_role: str = None,
  security_policy_name: str = None,
  sftp_config: TransferConnectorSftpConfig = None,
  tags: IResolvable | typing.List[TransferConnectorTags] = None,
  url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.accessRole">access_role</a></code> | <code>str</code> | Specifies the access role for the connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.as2Config">as2_config</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a></code> | Configuration for an AS2 connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.egressConfig">egress_config</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig">TransferConnectorEgressConfig</a></code> | Egress configuration for the connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.egressType">egress_type</a></code> | <code>str</code> | Specifies the egress type for the connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | IP address type for Connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.loggingRole">logging_role</a></code> | <code>str</code> | Specifies the logging role for the connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.securityPolicyName">security_policy_name</a></code> | <code>str</code> | Security policy for SFTP Connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.sftpConfig">sftp_config</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a></code> | Configuration for an SFTP connector. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a>]</code> | Key-value pairs that can be used to group and search for connectors. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.url">url</a></code> | <code>str</code> | URL for Connector. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `access_role`<sup>Required</sup> <a name="access_role" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.accessRole"></a>

```python
access_role: str
```

- *Type:* str

Specifies the access role for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#access_role TransferConnector#access_role}

---

##### `as2_config`<sup>Optional</sup> <a name="as2_config" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.as2Config"></a>

```python
as2_config: TransferConnectorAs2Config
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a>

Configuration for an AS2 connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#as_2_config TransferConnector#as_2_config}

---

##### `egress_config`<sup>Optional</sup> <a name="egress_config" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.egressConfig"></a>

```python
egress_config: TransferConnectorEgressConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig">TransferConnectorEgressConfig</a>

Egress configuration for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#egress_config TransferConnector#egress_config}

---

##### `egress_type`<sup>Optional</sup> <a name="egress_type" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.egressType"></a>

```python
egress_type: str
```

- *Type:* str

Specifies the egress type for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#egress_type TransferConnector#egress_type}

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

IP address type for Connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#ip_address_type TransferConnector#ip_address_type}

---

##### `logging_role`<sup>Optional</sup> <a name="logging_role" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.loggingRole"></a>

```python
logging_role: str
```

- *Type:* str

Specifies the logging role for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#logging_role TransferConnector#logging_role}

---

##### `security_policy_name`<sup>Optional</sup> <a name="security_policy_name" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.securityPolicyName"></a>

```python
security_policy_name: str
```

- *Type:* str

Security policy for SFTP Connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#security_policy_name TransferConnector#security_policy_name}

---

##### `sftp_config`<sup>Optional</sup> <a name="sftp_config" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.sftpConfig"></a>

```python
sftp_config: TransferConnectorSftpConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a>

Configuration for an SFTP connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#sftp_config TransferConnector#sftp_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[TransferConnectorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a>]

Key-value pairs that can be used to group and search for connectors.

Tags are metadata attached to connectors for any purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#tags TransferConnector#tags}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.transferConnector.TransferConnectorConfig.property.url"></a>

```python
url: str
```

- *Type:* str

URL for Connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#url TransferConnector#url}

---

### TransferConnectorEgressConfig <a name="TransferConnectorEgressConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_connector

transferConnector.TransferConnectorEgressConfig(
  vpc_lattice: TransferConnectorEgressConfigVpcLattice = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig.property.vpcLattice">vpc_lattice</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice">TransferConnectorEgressConfigVpcLattice</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#vpc_lattice TransferConnector#vpc_lattice}. |

---

##### `vpc_lattice`<sup>Optional</sup> <a name="vpc_lattice" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig.property.vpcLattice"></a>

```python
vpc_lattice: TransferConnectorEgressConfigVpcLattice
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice">TransferConnectorEgressConfigVpcLattice</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#vpc_lattice TransferConnector#vpc_lattice}.

---

### TransferConnectorEgressConfigVpcLattice <a name="TransferConnectorEgressConfigVpcLattice" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_connector

transferConnector.TransferConnectorEgressConfigVpcLattice(
  port_number: typing.Union[int, float] = None,
  resource_configuration_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice.property.portNumber">port_number</a></code> | <code>typing.Union[int, float]</code> | Port to connect to on the target VPC Lattice resource. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice.property.resourceConfigurationArn">resource_configuration_arn</a></code> | <code>str</code> | ARN of the VPC Lattice resource configuration. |

---

##### `port_number`<sup>Optional</sup> <a name="port_number" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice.property.portNumber"></a>

```python
port_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Port to connect to on the target VPC Lattice resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#port_number TransferConnector#port_number}

---

##### `resource_configuration_arn`<sup>Optional</sup> <a name="resource_configuration_arn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice.property.resourceConfigurationArn"></a>

```python
resource_configuration_arn: str
```

- *Type:* str

ARN of the VPC Lattice resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#resource_configuration_arn TransferConnector#resource_configuration_arn}

---

### TransferConnectorSftpConfig <a name="TransferConnectorSftpConfig" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_connector

transferConnector.TransferConnectorSftpConfig(
  max_concurrent_connections: typing.Union[int, float] = None,
  trusted_host_keys: typing.List[str] = None,
  user_secret_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig.property.maxConcurrentConnections">max_concurrent_connections</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of active connections that your connector can establish with the remote server at the same time. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig.property.trustedHostKeys">trusted_host_keys</a></code> | <code>typing.List[str]</code> | List of public host keys, for the external server to which you are connecting. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig.property.userSecretId">user_secret_id</a></code> | <code>str</code> | ARN or name of the secret in AWS Secrets Manager which contains the SFTP user's private keys or passwords. |

---

##### `max_concurrent_connections`<sup>Optional</sup> <a name="max_concurrent_connections" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig.property.maxConcurrentConnections"></a>

```python
max_concurrent_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the number of active connections that your connector can establish with the remote server at the same time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#max_concurrent_connections TransferConnector#max_concurrent_connections}

---

##### `trusted_host_keys`<sup>Optional</sup> <a name="trusted_host_keys" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig.property.trustedHostKeys"></a>

```python
trusted_host_keys: typing.List[str]
```

- *Type:* typing.List[str]

List of public host keys, for the external server to which you are connecting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#trusted_host_keys TransferConnector#trusted_host_keys}

---

##### `user_secret_id`<sup>Optional</sup> <a name="user_secret_id" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig.property.userSecretId"></a>

```python
user_secret_id: str
```

- *Type:* str

ARN or name of the secret in AWS Secrets Manager which contains the SFTP user's private keys or passwords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#user_secret_id TransferConnector#user_secret_id}

---

### TransferConnectorTags <a name="TransferConnectorTags" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTags.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_connector

transferConnector.TransferConnectorTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags.property.key">key</a></code> | <code>str</code> | The name assigned to the tag that you create. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags.property.value">value</a></code> | <code>str</code> | Contains one or more values that you assigned to the key name you create. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTags.property.key"></a>

```python
key: str
```

- *Type:* str

The name assigned to the tag that you create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#key TransferConnector#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTags.property.value"></a>

```python
value: str
```

- *Type:* str

Contains one or more values that you assigned to the key name you create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#value TransferConnector#value}

---

## Classes <a name="Classes" id="Classes"></a>

### TransferConnectorAs2ConfigAsyncMdnConfigOutputReference <a name="TransferConnectorAs2ConfigAsyncMdnConfigOutputReference" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_connector

transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.resetServerIds">reset_server_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.resetUrl">reset_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_server_ids` <a name="reset_server_ids" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.resetServerIds"></a>

```python
def reset_server_ids() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.serverIdsInput">server_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.serverIds">server_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig">TransferConnectorAs2ConfigAsyncMdnConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `server_ids_input`<sup>Optional</sup> <a name="server_ids_input" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.serverIdsInput"></a>

```python
server_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `server_ids`<sup>Required</sup> <a name="server_ids" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.serverIds"></a>

```python
server_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TransferConnectorAs2ConfigAsyncMdnConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig">TransferConnectorAs2ConfigAsyncMdnConfig</a>

---


### TransferConnectorAs2ConfigOutputReference <a name="TransferConnectorAs2ConfigOutputReference" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_connector

transferConnector.TransferConnectorAs2ConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.putAsyncMdnConfig">put_async_mdn_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetAsyncMdnConfig">reset_async_mdn_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetBasicAuthSecretId">reset_basic_auth_secret_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetCompression">reset_compression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetEncryptionAlgorithm">reset_encryption_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetLocalProfileId">reset_local_profile_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMdnResponse">reset_mdn_response</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMdnSigningAlgorithm">reset_mdn_signing_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMessageSubject">reset_message_subject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetPartnerProfileId">reset_partner_profile_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetPreserveContentType">reset_preserve_content_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetSigningAlgorithm">reset_signing_algorithm</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_async_mdn_config` <a name="put_async_mdn_config" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.putAsyncMdnConfig"></a>

```python
def put_async_mdn_config(
  server_ids: typing.List[str] = None,
  url: str = None
) -> None
```

###### `server_ids`<sup>Optional</sup> <a name="server_ids" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.putAsyncMdnConfig.parameter.serverIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#server_ids TransferConnector#server_ids}.

---

###### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.putAsyncMdnConfig.parameter.url"></a>

- *Type:* str

URL of the server to receive the MDN response on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#url TransferConnector#url}

---

##### `reset_async_mdn_config` <a name="reset_async_mdn_config" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetAsyncMdnConfig"></a>

```python
def reset_async_mdn_config() -> None
```

##### `reset_basic_auth_secret_id` <a name="reset_basic_auth_secret_id" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetBasicAuthSecretId"></a>

```python
def reset_basic_auth_secret_id() -> None
```

##### `reset_compression` <a name="reset_compression" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetCompression"></a>

```python
def reset_compression() -> None
```

##### `reset_encryption_algorithm` <a name="reset_encryption_algorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetEncryptionAlgorithm"></a>

```python
def reset_encryption_algorithm() -> None
```

##### `reset_local_profile_id` <a name="reset_local_profile_id" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetLocalProfileId"></a>

```python
def reset_local_profile_id() -> None
```

##### `reset_mdn_response` <a name="reset_mdn_response" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMdnResponse"></a>

```python
def reset_mdn_response() -> None
```

##### `reset_mdn_signing_algorithm` <a name="reset_mdn_signing_algorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMdnSigningAlgorithm"></a>

```python
def reset_mdn_signing_algorithm() -> None
```

##### `reset_message_subject` <a name="reset_message_subject" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetMessageSubject"></a>

```python
def reset_message_subject() -> None
```

##### `reset_partner_profile_id` <a name="reset_partner_profile_id" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetPartnerProfileId"></a>

```python
def reset_partner_profile_id() -> None
```

##### `reset_preserve_content_type` <a name="reset_preserve_content_type" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetPreserveContentType"></a>

```python
def reset_preserve_content_type() -> None
```

##### `reset_signing_algorithm` <a name="reset_signing_algorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.resetSigningAlgorithm"></a>

```python
def reset_signing_algorithm() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.asyncMdnConfig">async_mdn_config</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference">TransferConnectorAs2ConfigAsyncMdnConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.asyncMdnConfigInput">async_mdn_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig">TransferConnectorAs2ConfigAsyncMdnConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.basicAuthSecretIdInput">basic_auth_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.compressionInput">compression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.encryptionAlgorithmInput">encryption_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.localProfileIdInput">local_profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnResponseInput">mdn_response_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnSigningAlgorithmInput">mdn_signing_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.messageSubjectInput">message_subject_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.partnerProfileIdInput">partner_profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.preserveContentTypeInput">preserve_content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.signingAlgorithmInput">signing_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.basicAuthSecretId">basic_auth_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.compression">compression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.encryptionAlgorithm">encryption_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.localProfileId">local_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnResponse">mdn_response</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnSigningAlgorithm">mdn_signing_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.messageSubject">message_subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.partnerProfileId">partner_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.preserveContentType">preserve_content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.signingAlgorithm">signing_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `async_mdn_config`<sup>Required</sup> <a name="async_mdn_config" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.asyncMdnConfig"></a>

```python
async_mdn_config: TransferConnectorAs2ConfigAsyncMdnConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfigOutputReference">TransferConnectorAs2ConfigAsyncMdnConfigOutputReference</a>

---

##### `async_mdn_config_input`<sup>Optional</sup> <a name="async_mdn_config_input" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.asyncMdnConfigInput"></a>

```python
async_mdn_config_input: IResolvable | TransferConnectorAs2ConfigAsyncMdnConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigAsyncMdnConfig">TransferConnectorAs2ConfigAsyncMdnConfig</a>

---

##### `basic_auth_secret_id_input`<sup>Optional</sup> <a name="basic_auth_secret_id_input" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.basicAuthSecretIdInput"></a>

```python
basic_auth_secret_id_input: str
```

- *Type:* str

---

##### `compression_input`<sup>Optional</sup> <a name="compression_input" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.compressionInput"></a>

```python
compression_input: str
```

- *Type:* str

---

##### `encryption_algorithm_input`<sup>Optional</sup> <a name="encryption_algorithm_input" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.encryptionAlgorithmInput"></a>

```python
encryption_algorithm_input: str
```

- *Type:* str

---

##### `local_profile_id_input`<sup>Optional</sup> <a name="local_profile_id_input" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.localProfileIdInput"></a>

```python
local_profile_id_input: str
```

- *Type:* str

---

##### `mdn_response_input`<sup>Optional</sup> <a name="mdn_response_input" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnResponseInput"></a>

```python
mdn_response_input: str
```

- *Type:* str

---

##### `mdn_signing_algorithm_input`<sup>Optional</sup> <a name="mdn_signing_algorithm_input" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnSigningAlgorithmInput"></a>

```python
mdn_signing_algorithm_input: str
```

- *Type:* str

---

##### `message_subject_input`<sup>Optional</sup> <a name="message_subject_input" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.messageSubjectInput"></a>

```python
message_subject_input: str
```

- *Type:* str

---

##### `partner_profile_id_input`<sup>Optional</sup> <a name="partner_profile_id_input" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.partnerProfileIdInput"></a>

```python
partner_profile_id_input: str
```

- *Type:* str

---

##### `preserve_content_type_input`<sup>Optional</sup> <a name="preserve_content_type_input" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.preserveContentTypeInput"></a>

```python
preserve_content_type_input: str
```

- *Type:* str

---

##### `signing_algorithm_input`<sup>Optional</sup> <a name="signing_algorithm_input" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.signingAlgorithmInput"></a>

```python
signing_algorithm_input: str
```

- *Type:* str

---

##### `basic_auth_secret_id`<sup>Required</sup> <a name="basic_auth_secret_id" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.basicAuthSecretId"></a>

```python
basic_auth_secret_id: str
```

- *Type:* str

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.compression"></a>

```python
compression: str
```

- *Type:* str

---

##### `encryption_algorithm`<sup>Required</sup> <a name="encryption_algorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.encryptionAlgorithm"></a>

```python
encryption_algorithm: str
```

- *Type:* str

---

##### `local_profile_id`<sup>Required</sup> <a name="local_profile_id" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.localProfileId"></a>

```python
local_profile_id: str
```

- *Type:* str

---

##### `mdn_response`<sup>Required</sup> <a name="mdn_response" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnResponse"></a>

```python
mdn_response: str
```

- *Type:* str

---

##### `mdn_signing_algorithm`<sup>Required</sup> <a name="mdn_signing_algorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.mdnSigningAlgorithm"></a>

```python
mdn_signing_algorithm: str
```

- *Type:* str

---

##### `message_subject`<sup>Required</sup> <a name="message_subject" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.messageSubject"></a>

```python
message_subject: str
```

- *Type:* str

---

##### `partner_profile_id`<sup>Required</sup> <a name="partner_profile_id" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.partnerProfileId"></a>

```python
partner_profile_id: str
```

- *Type:* str

---

##### `preserve_content_type`<sup>Required</sup> <a name="preserve_content_type" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.preserveContentType"></a>

```python
preserve_content_type: str
```

- *Type:* str

---

##### `signing_algorithm`<sup>Required</sup> <a name="signing_algorithm" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.signingAlgorithm"></a>

```python
signing_algorithm: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transferConnector.TransferConnectorAs2ConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TransferConnectorAs2Config
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorAs2Config">TransferConnectorAs2Config</a>

---


### TransferConnectorEgressConfigOutputReference <a name="TransferConnectorEgressConfigOutputReference" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_connector

transferConnector.TransferConnectorEgressConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.putVpcLattice">put_vpc_lattice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.resetVpcLattice">reset_vpc_lattice</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_vpc_lattice` <a name="put_vpc_lattice" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.putVpcLattice"></a>

```python
def put_vpc_lattice(
  port_number: typing.Union[int, float] = None,
  resource_configuration_arn: str = None
) -> None
```

###### `port_number`<sup>Optional</sup> <a name="port_number" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.putVpcLattice.parameter.portNumber"></a>

- *Type:* typing.Union[int, float]

Port to connect to on the target VPC Lattice resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#port_number TransferConnector#port_number}

---

###### `resource_configuration_arn`<sup>Optional</sup> <a name="resource_configuration_arn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.putVpcLattice.parameter.resourceConfigurationArn"></a>

- *Type:* str

ARN of the VPC Lattice resource configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/transfer_connector#resource_configuration_arn TransferConnector#resource_configuration_arn}

---

##### `reset_vpc_lattice` <a name="reset_vpc_lattice" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.resetVpcLattice"></a>

```python
def reset_vpc_lattice() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.vpcLattice">vpc_lattice</a></code> | <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference">TransferConnectorEgressConfigVpcLatticeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.vpcLatticeInput">vpc_lattice_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice">TransferConnectorEgressConfigVpcLattice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig">TransferConnectorEgressConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_lattice`<sup>Required</sup> <a name="vpc_lattice" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.vpcLattice"></a>

```python
vpc_lattice: TransferConnectorEgressConfigVpcLatticeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference">TransferConnectorEgressConfigVpcLatticeOutputReference</a>

---

##### `vpc_lattice_input`<sup>Optional</sup> <a name="vpc_lattice_input" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.vpcLatticeInput"></a>

```python
vpc_lattice_input: IResolvable | TransferConnectorEgressConfigVpcLattice
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice">TransferConnectorEgressConfigVpcLattice</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TransferConnectorEgressConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfig">TransferConnectorEgressConfig</a>

---


### TransferConnectorEgressConfigVpcLatticeOutputReference <a name="TransferConnectorEgressConfigVpcLatticeOutputReference" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_connector

transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.resetPortNumber">reset_port_number</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.resetResourceConfigurationArn">reset_resource_configuration_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port_number` <a name="reset_port_number" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.resetPortNumber"></a>

```python
def reset_port_number() -> None
```

##### `reset_resource_configuration_arn` <a name="reset_resource_configuration_arn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.resetResourceConfigurationArn"></a>

```python
def reset_resource_configuration_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.portNumberInput">port_number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.resourceConfigurationArnInput">resource_configuration_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.portNumber">port_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.resourceConfigurationArn">resource_configuration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice">TransferConnectorEgressConfigVpcLattice</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_number_input`<sup>Optional</sup> <a name="port_number_input" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.portNumberInput"></a>

```python
port_number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_configuration_arn_input`<sup>Optional</sup> <a name="resource_configuration_arn_input" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.resourceConfigurationArnInput"></a>

```python
resource_configuration_arn_input: str
```

- *Type:* str

---

##### `port_number`<sup>Required</sup> <a name="port_number" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.portNumber"></a>

```python
port_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_configuration_arn`<sup>Required</sup> <a name="resource_configuration_arn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.resourceConfigurationArn"></a>

```python
resource_configuration_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLatticeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TransferConnectorEgressConfigVpcLattice
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorEgressConfigVpcLattice">TransferConnectorEgressConfigVpcLattice</a>

---


### TransferConnectorSftpConfigOutputReference <a name="TransferConnectorSftpConfigOutputReference" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_connector

transferConnector.TransferConnectorSftpConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.resetMaxConcurrentConnections">reset_max_concurrent_connections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.resetTrustedHostKeys">reset_trusted_host_keys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.resetUserSecretId">reset_user_secret_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_concurrent_connections` <a name="reset_max_concurrent_connections" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.resetMaxConcurrentConnections"></a>

```python
def reset_max_concurrent_connections() -> None
```

##### `reset_trusted_host_keys` <a name="reset_trusted_host_keys" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.resetTrustedHostKeys"></a>

```python
def reset_trusted_host_keys() -> None
```

##### `reset_user_secret_id` <a name="reset_user_secret_id" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.resetUserSecretId"></a>

```python
def reset_user_secret_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.maxConcurrentConnectionsInput">max_concurrent_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.trustedHostKeysInput">trusted_host_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.userSecretIdInput">user_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.maxConcurrentConnections">max_concurrent_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.trustedHostKeys">trusted_host_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.userSecretId">user_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_concurrent_connections_input`<sup>Optional</sup> <a name="max_concurrent_connections_input" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.maxConcurrentConnectionsInput"></a>

```python
max_concurrent_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `trusted_host_keys_input`<sup>Optional</sup> <a name="trusted_host_keys_input" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.trustedHostKeysInput"></a>

```python
trusted_host_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_secret_id_input`<sup>Optional</sup> <a name="user_secret_id_input" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.userSecretIdInput"></a>

```python
user_secret_id_input: str
```

- *Type:* str

---

##### `max_concurrent_connections`<sup>Required</sup> <a name="max_concurrent_connections" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.maxConcurrentConnections"></a>

```python
max_concurrent_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `trusted_host_keys`<sup>Required</sup> <a name="trusted_host_keys" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.trustedHostKeys"></a>

```python
trusted_host_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_secret_id`<sup>Required</sup> <a name="user_secret_id" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.userSecretId"></a>

```python
user_secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TransferConnectorSftpConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorSftpConfig">TransferConnectorSftpConfig</a>

---


### TransferConnectorTagsList <a name="TransferConnectorTagsList" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_connector

transferConnector.TransferConnectorTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TransferConnectorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[TransferConnectorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a>]

---


### TransferConnectorTagsOutputReference <a name="TransferConnectorTagsOutputReference" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import transfer_connector

transferConnector.TransferConnectorTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.transferConnector.TransferConnectorTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | TransferConnectorTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.transferConnector.TransferConnectorTags">TransferConnectorTags</a>

---



