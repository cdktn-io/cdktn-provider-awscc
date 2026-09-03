# `rdsDbProxy` Submodule <a name="`rdsDbProxy` Submodule" id="@cdktn/provider-awscc.rdsDbProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsDbProxy <a name="RdsDbProxy" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy awscc_rds_db_proxy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_proxy

rdsDbProxy.RdsDbProxy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  db_proxy_name: str,
  engine_family: str,
  role_arn: str,
  vpc_subnet_ids: typing.List[str],
  auth: IResolvable | typing.List[RdsDbProxyAuth] = None,
  debug_logging: bool | IResolvable = None,
  default_auth_scheme: str = None,
  endpoint_network_type: str = None,
  idle_client_timeout: typing.Union[int, float] = None,
  require_tls: bool | IResolvable = None,
  tags: IResolvable | typing.List[RdsDbProxyTags] = None,
  target_connection_network_type: str = None,
  vpc_security_group_ids: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.dbProxyName">db_proxy_name</a></code> | <code>str</code> | The identifier for the proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.engineFamily">engine_family</a></code> | <code>str</code> | The kinds of databases that the proxy can connect to. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.vpcSubnetIds">vpc_subnet_ids</a></code> | <code>typing.List[str]</code> | VPC subnet IDs to associate with the new proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.auth">auth</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a>]</code> | The authorization mechanism that the proxy uses. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.debugLogging">debug_logging</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the proxy includes detailed information about SQL statements in its logs. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.defaultAuthScheme">default_auth_scheme</a></code> | <code>str</code> | The default authentication scheme that the proxy uses for client connections to the proxy and connections from the proxy to the underlying database. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.endpointNetworkType">endpoint_network_type</a></code> | <code>str</code> | The network type of the DB proxy endpoint. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.idleClientTimeout">idle_client_timeout</a></code> | <code>typing.Union[int, float]</code> | The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.requireTls">require_tls</a></code> | <code>bool \| cdktn.IResolvable</code> | A Boolean parameter that specifies whether Transport Layer Security (TLS) encryption is required for connections to the proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a>]</code> | An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.targetConnectionNetworkType">target_connection_network_type</a></code> | <code>str</code> | The network type that the proxy uses to connect to the target database. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | VPC security group IDs to associate with the new proxy. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `db_proxy_name`<sup>Required</sup> <a name="db_proxy_name" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.dbProxyName"></a>

- *Type:* str

The identifier for the proxy.

This name must be unique for all proxies owned by your AWS account in the specified AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#db_proxy_name RdsDbProxy#db_proxy_name}

---

##### `engine_family`<sup>Required</sup> <a name="engine_family" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.engineFamily"></a>

- *Type:* str

The kinds of databases that the proxy can connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#engine_family RdsDbProxy#engine_family}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.roleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#role_arn RdsDbProxy#role_arn}

---

##### `vpc_subnet_ids`<sup>Required</sup> <a name="vpc_subnet_ids" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.vpcSubnetIds"></a>

- *Type:* typing.List[str]

VPC subnet IDs to associate with the new proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#vpc_subnet_ids RdsDbProxy#vpc_subnet_ids}

---

##### `auth`<sup>Optional</sup> <a name="auth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.auth"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a>]

The authorization mechanism that the proxy uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#auth RdsDbProxy#auth}

---

##### `debug_logging`<sup>Optional</sup> <a name="debug_logging" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.debugLogging"></a>

- *Type:* bool | cdktn.IResolvable

Whether the proxy includes detailed information about SQL statements in its logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#debug_logging RdsDbProxy#debug_logging}

---

##### `default_auth_scheme`<sup>Optional</sup> <a name="default_auth_scheme" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.defaultAuthScheme"></a>

- *Type:* str

The default authentication scheme that the proxy uses for client connections to the proxy and connections from the proxy to the underlying database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#default_auth_scheme RdsDbProxy#default_auth_scheme}

---

##### `endpoint_network_type`<sup>Optional</sup> <a name="endpoint_network_type" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.endpointNetworkType"></a>

- *Type:* str

The network type of the DB proxy endpoint.

The network type determines the IP version that the proxy endpoint supports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#endpoint_network_type RdsDbProxy#endpoint_network_type}

---

##### `idle_client_timeout`<sup>Optional</sup> <a name="idle_client_timeout" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.idleClientTimeout"></a>

- *Type:* typing.Union[int, float]

The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#idle_client_timeout RdsDbProxy#idle_client_timeout}

---

##### `require_tls`<sup>Optional</sup> <a name="require_tls" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.requireTls"></a>

- *Type:* bool | cdktn.IResolvable

A Boolean parameter that specifies whether Transport Layer Security (TLS) encryption is required for connections to the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#require_tls RdsDbProxy#require_tls}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a>]

An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#tags RdsDbProxy#tags}

---

##### `target_connection_network_type`<sup>Optional</sup> <a name="target_connection_network_type" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.targetConnectionNetworkType"></a>

- *Type:* str

The network type that the proxy uses to connect to the target database.

The network type determines the IP version that the proxy uses for connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#target_connection_network_type RdsDbProxy#target_connection_network_type}

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.Initializer.parameter.vpcSecurityGroupIds"></a>

- *Type:* typing.List[str]

VPC security group IDs to associate with the new proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#vpc_security_group_ids RdsDbProxy#vpc_security_group_ids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.putAuth">put_auth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetAuth">reset_auth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetDebugLogging">reset_debug_logging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetDefaultAuthScheme">reset_default_auth_scheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetEndpointNetworkType">reset_endpoint_network_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetIdleClientTimeout">reset_idle_client_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetRequireTls">reset_require_tls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetTargetConnectionNetworkType">reset_target_connection_network_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetVpcSecurityGroupIds">reset_vpc_security_group_ids</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_auth` <a name="put_auth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.putAuth"></a>

```python
def put_auth(
  value: IResolvable | typing.List[RdsDbProxyAuth]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.putAuth.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[RdsDbProxyTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a>]

---

##### `reset_auth` <a name="reset_auth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetAuth"></a>

```python
def reset_auth() -> None
```

##### `reset_debug_logging` <a name="reset_debug_logging" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetDebugLogging"></a>

```python
def reset_debug_logging() -> None
```

##### `reset_default_auth_scheme` <a name="reset_default_auth_scheme" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetDefaultAuthScheme"></a>

```python
def reset_default_auth_scheme() -> None
```

##### `reset_endpoint_network_type` <a name="reset_endpoint_network_type" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetEndpointNetworkType"></a>

```python
def reset_endpoint_network_type() -> None
```

##### `reset_idle_client_timeout` <a name="reset_idle_client_timeout" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetIdleClientTimeout"></a>

```python
def reset_idle_client_timeout() -> None
```

##### `reset_require_tls` <a name="reset_require_tls" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetRequireTls"></a>

```python
def reset_require_tls() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_target_connection_network_type` <a name="reset_target_connection_network_type" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetTargetConnectionNetworkType"></a>

```python
def reset_target_connection_network_type() -> None
```

##### `reset_vpc_security_group_ids` <a name="reset_vpc_security_group_ids" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.resetVpcSecurityGroupIds"></a>

```python
def reset_vpc_security_group_ids() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RdsDbProxy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isConstruct"></a>

```python
from cdktn_provider_awscc import rds_db_proxy

rdsDbProxy.RdsDbProxy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isTerraformElement"></a>

```python
from cdktn_provider_awscc import rds_db_proxy

rdsDbProxy.RdsDbProxy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isTerraformResource"></a>

```python
from cdktn_provider_awscc import rds_db_proxy

rdsDbProxy.RdsDbProxy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import rds_db_proxy

rdsDbProxy.RdsDbProxy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RdsDbProxy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RdsDbProxy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RdsDbProxy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RdsDbProxy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.auth">auth</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList">RdsDbProxyAuthList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dbProxyArn">db_proxy_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList">RdsDbProxyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.authInput">auth_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dbProxyNameInput">db_proxy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.debugLoggingInput">debug_logging_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.defaultAuthSchemeInput">default_auth_scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.endpointNetworkTypeInput">endpoint_network_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.engineFamilyInput">engine_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.idleClientTimeoutInput">idle_client_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.requireTlsInput">require_tls_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.targetConnectionNetworkTypeInput">target_connection_network_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSecurityGroupIdsInput">vpc_security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSubnetIdsInput">vpc_subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dbProxyName">db_proxy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.debugLogging">debug_logging</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.defaultAuthScheme">default_auth_scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.endpointNetworkType">endpoint_network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.engineFamily">engine_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.idleClientTimeout">idle_client_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.requireTls">require_tls</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.targetConnectionNetworkType">target_connection_network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSubnetIds">vpc_subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auth`<sup>Required</sup> <a name="auth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.auth"></a>

```python
auth: RdsDbProxyAuthList
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList">RdsDbProxyAuthList</a>

---

##### `db_proxy_arn`<sup>Required</sup> <a name="db_proxy_arn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dbProxyArn"></a>

```python
db_proxy_arn: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.tags"></a>

```python
tags: RdsDbProxyTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList">RdsDbProxyTagsList</a>

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `auth_input`<sup>Optional</sup> <a name="auth_input" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.authInput"></a>

```python
auth_input: IResolvable | typing.List[RdsDbProxyAuth]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a>]

---

##### `db_proxy_name_input`<sup>Optional</sup> <a name="db_proxy_name_input" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dbProxyNameInput"></a>

```python
db_proxy_name_input: str
```

- *Type:* str

---

##### `debug_logging_input`<sup>Optional</sup> <a name="debug_logging_input" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.debugLoggingInput"></a>

```python
debug_logging_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `default_auth_scheme_input`<sup>Optional</sup> <a name="default_auth_scheme_input" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.defaultAuthSchemeInput"></a>

```python
default_auth_scheme_input: str
```

- *Type:* str

---

##### `endpoint_network_type_input`<sup>Optional</sup> <a name="endpoint_network_type_input" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.endpointNetworkTypeInput"></a>

```python
endpoint_network_type_input: str
```

- *Type:* str

---

##### `engine_family_input`<sup>Optional</sup> <a name="engine_family_input" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.engineFamilyInput"></a>

```python
engine_family_input: str
```

- *Type:* str

---

##### `idle_client_timeout_input`<sup>Optional</sup> <a name="idle_client_timeout_input" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.idleClientTimeoutInput"></a>

```python
idle_client_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `require_tls_input`<sup>Optional</sup> <a name="require_tls_input" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.requireTlsInput"></a>

```python
require_tls_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[RdsDbProxyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a>]

---

##### `target_connection_network_type_input`<sup>Optional</sup> <a name="target_connection_network_type_input" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.targetConnectionNetworkTypeInput"></a>

```python
target_connection_network_type_input: str
```

- *Type:* str

---

##### `vpc_security_group_ids_input`<sup>Optional</sup> <a name="vpc_security_group_ids_input" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSecurityGroupIdsInput"></a>

```python
vpc_security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_subnet_ids_input`<sup>Optional</sup> <a name="vpc_subnet_ids_input" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSubnetIdsInput"></a>

```python
vpc_subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `db_proxy_name`<sup>Required</sup> <a name="db_proxy_name" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.dbProxyName"></a>

```python
db_proxy_name: str
```

- *Type:* str

---

##### `debug_logging`<sup>Required</sup> <a name="debug_logging" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.debugLogging"></a>

```python
debug_logging: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `default_auth_scheme`<sup>Required</sup> <a name="default_auth_scheme" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.defaultAuthScheme"></a>

```python
default_auth_scheme: str
```

- *Type:* str

---

##### `endpoint_network_type`<sup>Required</sup> <a name="endpoint_network_type" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.endpointNetworkType"></a>

```python
endpoint_network_type: str
```

- *Type:* str

---

##### `engine_family`<sup>Required</sup> <a name="engine_family" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.engineFamily"></a>

```python
engine_family: str
```

- *Type:* str

---

##### `idle_client_timeout`<sup>Required</sup> <a name="idle_client_timeout" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.idleClientTimeout"></a>

```python
idle_client_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `require_tls`<sup>Required</sup> <a name="require_tls" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.requireTls"></a>

```python
require_tls: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `target_connection_network_type`<sup>Required</sup> <a name="target_connection_network_type" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.targetConnectionNetworkType"></a>

```python
target_connection_network_type: str
```

- *Type:* str

---

##### `vpc_security_group_ids`<sup>Required</sup> <a name="vpc_security_group_ids" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_subnet_ids`<sup>Required</sup> <a name="vpc_subnet_ids" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.vpcSubnetIds"></a>

```python
vpc_subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RdsDbProxyAuth <a name="RdsDbProxyAuth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_proxy

rdsDbProxy.RdsDbProxyAuth(
  auth_scheme: str = None,
  client_password_auth_type: str = None,
  description: str = None,
  iam_auth: str = None,
  secret_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.authScheme">auth_scheme</a></code> | <code>str</code> | The type of authentication that the proxy uses for connections from the proxy to the underlying database. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.clientPasswordAuthType">client_password_auth_type</a></code> | <code>str</code> | The type of authentication the proxy uses for connections from clients. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.description">description</a></code> | <code>str</code> | A user-specified description about the authentication used by a proxy to log in as a specific database user. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.iamAuth">iam_auth</a></code> | <code>str</code> | Whether to require or disallow Amazon Web Services Identity and Access Management (IAM) authentication for connections to the proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.secretArn">secret_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) representing the secret that the proxy uses to authenticate to the RDS DB instance or Aurora DB cluster. |

---

##### `auth_scheme`<sup>Optional</sup> <a name="auth_scheme" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.authScheme"></a>

```python
auth_scheme: str
```

- *Type:* str

The type of authentication that the proxy uses for connections from the proxy to the underlying database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#auth_scheme RdsDbProxy#auth_scheme}

---

##### `client_password_auth_type`<sup>Optional</sup> <a name="client_password_auth_type" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.clientPasswordAuthType"></a>

```python
client_password_auth_type: str
```

- *Type:* str

The type of authentication the proxy uses for connections from clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#client_password_auth_type RdsDbProxy#client_password_auth_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.description"></a>

```python
description: str
```

- *Type:* str

A user-specified description about the authentication used by a proxy to log in as a specific database user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#description RdsDbProxy#description}

---

##### `iam_auth`<sup>Optional</sup> <a name="iam_auth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.iamAuth"></a>

```python
iam_auth: str
```

- *Type:* str

Whether to require or disallow Amazon Web Services Identity and Access Management (IAM) authentication for connections to the proxy.

The ENABLED value is valid only for proxies with RDS for Microsoft SQL Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#iam_auth RdsDbProxy#iam_auth}

---

##### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) representing the secret that the proxy uses to authenticate to the RDS DB instance or Aurora DB cluster.

These secrets are stored within Amazon Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#secret_arn RdsDbProxy#secret_arn}

---

### RdsDbProxyConfig <a name="RdsDbProxyConfig" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_proxy

rdsDbProxy.RdsDbProxyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  db_proxy_name: str,
  engine_family: str,
  role_arn: str,
  vpc_subnet_ids: typing.List[str],
  auth: IResolvable | typing.List[RdsDbProxyAuth] = None,
  debug_logging: bool | IResolvable = None,
  default_auth_scheme: str = None,
  endpoint_network_type: str = None,
  idle_client_timeout: typing.Union[int, float] = None,
  require_tls: bool | IResolvable = None,
  tags: IResolvable | typing.List[RdsDbProxyTags] = None,
  target_connection_network_type: str = None,
  vpc_security_group_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.dbProxyName">db_proxy_name</a></code> | <code>str</code> | The identifier for the proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.engineFamily">engine_family</a></code> | <code>str</code> | The kinds of databases that the proxy can connect to. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.roleArn">role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in AWS Secrets Manager. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.vpcSubnetIds">vpc_subnet_ids</a></code> | <code>typing.List[str]</code> | VPC subnet IDs to associate with the new proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.auth">auth</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a>]</code> | The authorization mechanism that the proxy uses. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.debugLogging">debug_logging</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the proxy includes detailed information about SQL statements in its logs. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.defaultAuthScheme">default_auth_scheme</a></code> | <code>str</code> | The default authentication scheme that the proxy uses for client connections to the proxy and connections from the proxy to the underlying database. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.endpointNetworkType">endpoint_network_type</a></code> | <code>str</code> | The network type of the DB proxy endpoint. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.idleClientTimeout">idle_client_timeout</a></code> | <code>typing.Union[int, float]</code> | The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.requireTls">require_tls</a></code> | <code>bool \| cdktn.IResolvable</code> | A Boolean parameter that specifies whether Transport Layer Security (TLS) encryption is required for connections to the proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a>]</code> | An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.targetConnectionNetworkType">target_connection_network_type</a></code> | <code>str</code> | The network type that the proxy uses to connect to the target database. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | VPC security group IDs to associate with the new proxy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `db_proxy_name`<sup>Required</sup> <a name="db_proxy_name" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.dbProxyName"></a>

```python
db_proxy_name: str
```

- *Type:* str

The identifier for the proxy.

This name must be unique for all proxies owned by your AWS account in the specified AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#db_proxy_name RdsDbProxy#db_proxy_name}

---

##### `engine_family`<sup>Required</sup> <a name="engine_family" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.engineFamily"></a>

```python
engine_family: str
```

- *Type:* str

The kinds of databases that the proxy can connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#engine_family RdsDbProxy#engine_family}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#role_arn RdsDbProxy#role_arn}

---

##### `vpc_subnet_ids`<sup>Required</sup> <a name="vpc_subnet_ids" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.vpcSubnetIds"></a>

```python
vpc_subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

VPC subnet IDs to associate with the new proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#vpc_subnet_ids RdsDbProxy#vpc_subnet_ids}

---

##### `auth`<sup>Optional</sup> <a name="auth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.auth"></a>

```python
auth: IResolvable | typing.List[RdsDbProxyAuth]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a>]

The authorization mechanism that the proxy uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#auth RdsDbProxy#auth}

---

##### `debug_logging`<sup>Optional</sup> <a name="debug_logging" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.debugLogging"></a>

```python
debug_logging: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the proxy includes detailed information about SQL statements in its logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#debug_logging RdsDbProxy#debug_logging}

---

##### `default_auth_scheme`<sup>Optional</sup> <a name="default_auth_scheme" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.defaultAuthScheme"></a>

```python
default_auth_scheme: str
```

- *Type:* str

The default authentication scheme that the proxy uses for client connections to the proxy and connections from the proxy to the underlying database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#default_auth_scheme RdsDbProxy#default_auth_scheme}

---

##### `endpoint_network_type`<sup>Optional</sup> <a name="endpoint_network_type" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.endpointNetworkType"></a>

```python
endpoint_network_type: str
```

- *Type:* str

The network type of the DB proxy endpoint.

The network type determines the IP version that the proxy endpoint supports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#endpoint_network_type RdsDbProxy#endpoint_network_type}

---

##### `idle_client_timeout`<sup>Optional</sup> <a name="idle_client_timeout" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.idleClientTimeout"></a>

```python
idle_client_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#idle_client_timeout RdsDbProxy#idle_client_timeout}

---

##### `require_tls`<sup>Optional</sup> <a name="require_tls" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.requireTls"></a>

```python
require_tls: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

A Boolean parameter that specifies whether Transport Layer Security (TLS) encryption is required for connections to the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#require_tls RdsDbProxy#require_tls}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[RdsDbProxyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a>]

An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#tags RdsDbProxy#tags}

---

##### `target_connection_network_type`<sup>Optional</sup> <a name="target_connection_network_type" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.targetConnectionNetworkType"></a>

```python
target_connection_network_type: str
```

- *Type:* str

The network type that the proxy uses to connect to the target database.

The network type determines the IP version that the proxy uses for connections to the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#target_connection_network_type RdsDbProxy#target_connection_network_type}

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyConfig.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

VPC security group IDs to associate with the new proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#vpc_security_group_ids RdsDbProxy#vpc_security_group_ids}

---

### RdsDbProxyTags <a name="RdsDbProxyTags" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_proxy

rdsDbProxy.RdsDbProxyTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#key RdsDbProxy#key}. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#value RdsDbProxy#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#key RdsDbProxy#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rds_db_proxy#value RdsDbProxy#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### RdsDbProxyAuthList <a name="RdsDbProxyAuthList" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_proxy

rdsDbProxy.RdsDbProxyAuthList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RdsDbProxyAuthOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RdsDbProxyAuth]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a>]

---


### RdsDbProxyAuthOutputReference <a name="RdsDbProxyAuthOutputReference" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_proxy

rdsDbProxy.RdsDbProxyAuthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetAuthScheme">reset_auth_scheme</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetClientPasswordAuthType">reset_client_password_auth_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetIamAuth">reset_iam_auth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetSecretArn">reset_secret_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auth_scheme` <a name="reset_auth_scheme" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetAuthScheme"></a>

```python
def reset_auth_scheme() -> None
```

##### `reset_client_password_auth_type` <a name="reset_client_password_auth_type" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetClientPasswordAuthType"></a>

```python
def reset_client_password_auth_type() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_iam_auth` <a name="reset_iam_auth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetIamAuth"></a>

```python
def reset_iam_auth() -> None
```

##### `reset_secret_arn` <a name="reset_secret_arn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.resetSecretArn"></a>

```python
def reset_secret_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.authSchemeInput">auth_scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.clientPasswordAuthTypeInput">client_password_auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.iamAuthInput">iam_auth_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.secretArnInput">secret_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.authScheme">auth_scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.clientPasswordAuthType">client_password_auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.iamAuth">iam_auth</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_scheme_input`<sup>Optional</sup> <a name="auth_scheme_input" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.authSchemeInput"></a>

```python
auth_scheme_input: str
```

- *Type:* str

---

##### `client_password_auth_type_input`<sup>Optional</sup> <a name="client_password_auth_type_input" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.clientPasswordAuthTypeInput"></a>

```python
client_password_auth_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `iam_auth_input`<sup>Optional</sup> <a name="iam_auth_input" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.iamAuthInput"></a>

```python
iam_auth_input: str
```

- *Type:* str

---

##### `secret_arn_input`<sup>Optional</sup> <a name="secret_arn_input" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.secretArnInput"></a>

```python
secret_arn_input: str
```

- *Type:* str

---

##### `auth_scheme`<sup>Required</sup> <a name="auth_scheme" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.authScheme"></a>

```python
auth_scheme: str
```

- *Type:* str

---

##### `client_password_auth_type`<sup>Required</sup> <a name="client_password_auth_type" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.clientPasswordAuthType"></a>

```python
client_password_auth_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `iam_auth`<sup>Required</sup> <a name="iam_auth" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.iamAuth"></a>

```python
iam_auth: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuthOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RdsDbProxyAuth
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyAuth">RdsDbProxyAuth</a>

---


### RdsDbProxyTagsList <a name="RdsDbProxyTagsList" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_proxy

rdsDbProxy.RdsDbProxyTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RdsDbProxyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RdsDbProxyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a>]

---


### RdsDbProxyTagsOutputReference <a name="RdsDbProxyTagsOutputReference" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_proxy

rdsDbProxy.RdsDbProxyTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RdsDbProxyTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbProxy.RdsDbProxyTags">RdsDbProxyTags</a>

---



