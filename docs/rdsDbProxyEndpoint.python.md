# `rdsDbProxyEndpoint` Submodule <a name="`rdsDbProxyEndpoint` Submodule" id="@cdktn/provider-awscc.rdsDbProxyEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsDbProxyEndpoint <a name="RdsDbProxyEndpoint" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_endpoint awscc_rds_db_proxy_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_proxy_endpoint

rdsDbProxyEndpoint.RdsDbProxyEndpoint(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  db_proxy_endpoint_name: str,
  db_proxy_name: str,
  vpc_subnet_ids: typing.List[str],
  endpoint_network_type: str = None,
  tags: IResolvable | typing.List[RdsDbProxyEndpointTags] = None,
  target_role: str = None,
  vpc_security_group_ids: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.Initializer.parameter.dbProxyEndpointName">db_proxy_endpoint_name</a></code> | <code>str</code> | The identifier for the DB proxy endpoint. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.Initializer.parameter.dbProxyName">db_proxy_name</a></code> | <code>str</code> | The identifier for the proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.Initializer.parameter.vpcSubnetIds">vpc_subnet_ids</a></code> | <code>typing.List[str]</code> | VPC subnet IDs to associate with the new DB proxy endpoint. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.Initializer.parameter.endpointNetworkType">endpoint_network_type</a></code> | <code>str</code> | The network type of the DB proxy endpoint. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTags">RdsDbProxyEndpointTags</a>]</code> | An optional set of key-value pairs to associate arbitrary data of your choosing with the DB proxy endpoint. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.Initializer.parameter.targetRole">target_role</a></code> | <code>str</code> | A value that indicates whether the DB proxy endpoint can be used for read/write or read-only operations. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.Initializer.parameter.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | VPC security group IDs to associate with the new DB proxy endpoint. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `db_proxy_endpoint_name`<sup>Required</sup> <a name="db_proxy_endpoint_name" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.Initializer.parameter.dbProxyEndpointName"></a>

- *Type:* str

The identifier for the DB proxy endpoint.

This name must be unique for all DB proxy endpoints owned by your AWS account in the specified AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_endpoint#db_proxy_endpoint_name RdsDbProxyEndpoint#db_proxy_endpoint_name}

---

##### `db_proxy_name`<sup>Required</sup> <a name="db_proxy_name" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.Initializer.parameter.dbProxyName"></a>

- *Type:* str

The identifier for the proxy.

This name must be unique for all proxies owned by your AWS account in the specified AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_endpoint#db_proxy_name RdsDbProxyEndpoint#db_proxy_name}

---

##### `vpc_subnet_ids`<sup>Required</sup> <a name="vpc_subnet_ids" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.Initializer.parameter.vpcSubnetIds"></a>

- *Type:* typing.List[str]

VPC subnet IDs to associate with the new DB proxy endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_endpoint#vpc_subnet_ids RdsDbProxyEndpoint#vpc_subnet_ids}

---

##### `endpoint_network_type`<sup>Optional</sup> <a name="endpoint_network_type" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.Initializer.parameter.endpointNetworkType"></a>

- *Type:* str

The network type of the DB proxy endpoint.

The network type determines the IP version that the proxy endpoint supports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_endpoint#endpoint_network_type RdsDbProxyEndpoint#endpoint_network_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTags">RdsDbProxyEndpointTags</a>]

An optional set of key-value pairs to associate arbitrary data of your choosing with the DB proxy endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_endpoint#tags RdsDbProxyEndpoint#tags}

---

##### `target_role`<sup>Optional</sup> <a name="target_role" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.Initializer.parameter.targetRole"></a>

- *Type:* str

A value that indicates whether the DB proxy endpoint can be used for read/write or read-only operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_endpoint#target_role RdsDbProxyEndpoint#target_role}

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.Initializer.parameter.vpcSecurityGroupIds"></a>

- *Type:* typing.List[str]

VPC security group IDs to associate with the new DB proxy endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_endpoint#vpc_security_group_ids RdsDbProxyEndpoint#vpc_security_group_ids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.resetEndpointNetworkType">reset_endpoint_network_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.resetTargetRole">reset_target_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.resetVpcSecurityGroupIds">reset_vpc_security_group_ids</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[RdsDbProxyEndpointTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTags">RdsDbProxyEndpointTags</a>]

---

##### `reset_endpoint_network_type` <a name="reset_endpoint_network_type" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.resetEndpointNetworkType"></a>

```python
def reset_endpoint_network_type() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_target_role` <a name="reset_target_role" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.resetTargetRole"></a>

```python
def reset_target_role() -> None
```

##### `reset_vpc_security_group_ids` <a name="reset_vpc_security_group_ids" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.resetVpcSecurityGroupIds"></a>

```python
def reset_vpc_security_group_ids() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RdsDbProxyEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.isConstruct"></a>

```python
from cdktn_provider_awscc import rds_db_proxy_endpoint

rdsDbProxyEndpoint.RdsDbProxyEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.isTerraformElement"></a>

```python
from cdktn_provider_awscc import rds_db_proxy_endpoint

rdsDbProxyEndpoint.RdsDbProxyEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.isTerraformResource"></a>

```python
from cdktn_provider_awscc import rds_db_proxy_endpoint

rdsDbProxyEndpoint.RdsDbProxyEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import rds_db_proxy_endpoint

rdsDbProxyEndpoint.RdsDbProxyEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RdsDbProxyEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RdsDbProxyEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RdsDbProxyEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RdsDbProxyEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.dbProxyEndpointArn">db_proxy_endpoint_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.isDefault">is_default</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsList">RdsDbProxyEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.dbProxyEndpointNameInput">db_proxy_endpoint_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.dbProxyNameInput">db_proxy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.endpointNetworkTypeInput">endpoint_network_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTags">RdsDbProxyEndpointTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.targetRoleInput">target_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.vpcSecurityGroupIdsInput">vpc_security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.vpcSubnetIdsInput">vpc_subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.dbProxyEndpointName">db_proxy_endpoint_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.dbProxyName">db_proxy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.endpointNetworkType">endpoint_network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.targetRole">target_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.vpcSubnetIds">vpc_subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `db_proxy_endpoint_arn`<sup>Required</sup> <a name="db_proxy_endpoint_arn" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.dbProxyEndpointArn"></a>

```python
db_proxy_endpoint_arn: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.isDefault"></a>

```python
is_default: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.tags"></a>

```python
tags: RdsDbProxyEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsList">RdsDbProxyEndpointTagsList</a>

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `db_proxy_endpoint_name_input`<sup>Optional</sup> <a name="db_proxy_endpoint_name_input" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.dbProxyEndpointNameInput"></a>

```python
db_proxy_endpoint_name_input: str
```

- *Type:* str

---

##### `db_proxy_name_input`<sup>Optional</sup> <a name="db_proxy_name_input" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.dbProxyNameInput"></a>

```python
db_proxy_name_input: str
```

- *Type:* str

---

##### `endpoint_network_type_input`<sup>Optional</sup> <a name="endpoint_network_type_input" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.endpointNetworkTypeInput"></a>

```python
endpoint_network_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[RdsDbProxyEndpointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTags">RdsDbProxyEndpointTags</a>]

---

##### `target_role_input`<sup>Optional</sup> <a name="target_role_input" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.targetRoleInput"></a>

```python
target_role_input: str
```

- *Type:* str

---

##### `vpc_security_group_ids_input`<sup>Optional</sup> <a name="vpc_security_group_ids_input" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.vpcSecurityGroupIdsInput"></a>

```python
vpc_security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_subnet_ids_input`<sup>Optional</sup> <a name="vpc_subnet_ids_input" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.vpcSubnetIdsInput"></a>

```python
vpc_subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `db_proxy_endpoint_name`<sup>Required</sup> <a name="db_proxy_endpoint_name" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.dbProxyEndpointName"></a>

```python
db_proxy_endpoint_name: str
```

- *Type:* str

---

##### `db_proxy_name`<sup>Required</sup> <a name="db_proxy_name" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.dbProxyName"></a>

```python
db_proxy_name: str
```

- *Type:* str

---

##### `endpoint_network_type`<sup>Required</sup> <a name="endpoint_network_type" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.endpointNetworkType"></a>

```python
endpoint_network_type: str
```

- *Type:* str

---

##### `target_role`<sup>Required</sup> <a name="target_role" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.targetRole"></a>

```python
target_role: str
```

- *Type:* str

---

##### `vpc_security_group_ids`<sup>Required</sup> <a name="vpc_security_group_ids" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_subnet_ids`<sup>Required</sup> <a name="vpc_subnet_ids" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.vpcSubnetIds"></a>

```python
vpc_subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RdsDbProxyEndpointConfig <a name="RdsDbProxyEndpointConfig" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointConfig.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_proxy_endpoint

rdsDbProxyEndpoint.RdsDbProxyEndpointConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  db_proxy_endpoint_name: str,
  db_proxy_name: str,
  vpc_subnet_ids: typing.List[str],
  endpoint_network_type: str = None,
  tags: IResolvable | typing.List[RdsDbProxyEndpointTags] = None,
  target_role: str = None,
  vpc_security_group_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointConfig.property.dbProxyEndpointName">db_proxy_endpoint_name</a></code> | <code>str</code> | The identifier for the DB proxy endpoint. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointConfig.property.dbProxyName">db_proxy_name</a></code> | <code>str</code> | The identifier for the proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointConfig.property.vpcSubnetIds">vpc_subnet_ids</a></code> | <code>typing.List[str]</code> | VPC subnet IDs to associate with the new DB proxy endpoint. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointConfig.property.endpointNetworkType">endpoint_network_type</a></code> | <code>str</code> | The network type of the DB proxy endpoint. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTags">RdsDbProxyEndpointTags</a>]</code> | An optional set of key-value pairs to associate arbitrary data of your choosing with the DB proxy endpoint. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointConfig.property.targetRole">target_role</a></code> | <code>str</code> | A value that indicates whether the DB proxy endpoint can be used for read/write or read-only operations. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointConfig.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | VPC security group IDs to associate with the new DB proxy endpoint. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `db_proxy_endpoint_name`<sup>Required</sup> <a name="db_proxy_endpoint_name" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointConfig.property.dbProxyEndpointName"></a>

```python
db_proxy_endpoint_name: str
```

- *Type:* str

The identifier for the DB proxy endpoint.

This name must be unique for all DB proxy endpoints owned by your AWS account in the specified AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_endpoint#db_proxy_endpoint_name RdsDbProxyEndpoint#db_proxy_endpoint_name}

---

##### `db_proxy_name`<sup>Required</sup> <a name="db_proxy_name" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointConfig.property.dbProxyName"></a>

```python
db_proxy_name: str
```

- *Type:* str

The identifier for the proxy.

This name must be unique for all proxies owned by your AWS account in the specified AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_endpoint#db_proxy_name RdsDbProxyEndpoint#db_proxy_name}

---

##### `vpc_subnet_ids`<sup>Required</sup> <a name="vpc_subnet_ids" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointConfig.property.vpcSubnetIds"></a>

```python
vpc_subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

VPC subnet IDs to associate with the new DB proxy endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_endpoint#vpc_subnet_ids RdsDbProxyEndpoint#vpc_subnet_ids}

---

##### `endpoint_network_type`<sup>Optional</sup> <a name="endpoint_network_type" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointConfig.property.endpointNetworkType"></a>

```python
endpoint_network_type: str
```

- *Type:* str

The network type of the DB proxy endpoint.

The network type determines the IP version that the proxy endpoint supports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_endpoint#endpoint_network_type RdsDbProxyEndpoint#endpoint_network_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[RdsDbProxyEndpointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTags">RdsDbProxyEndpointTags</a>]

An optional set of key-value pairs to associate arbitrary data of your choosing with the DB proxy endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_endpoint#tags RdsDbProxyEndpoint#tags}

---

##### `target_role`<sup>Optional</sup> <a name="target_role" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointConfig.property.targetRole"></a>

```python
target_role: str
```

- *Type:* str

A value that indicates whether the DB proxy endpoint can be used for read/write or read-only operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_endpoint#target_role RdsDbProxyEndpoint#target_role}

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointConfig.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

VPC security group IDs to associate with the new DB proxy endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_endpoint#vpc_security_group_ids RdsDbProxyEndpoint#vpc_security_group_ids}

---

### RdsDbProxyEndpointTags <a name="RdsDbProxyEndpointTags" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTags.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_proxy_endpoint

rdsDbProxyEndpoint.RdsDbProxyEndpointTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_endpoint#key RdsDbProxyEndpoint#key}. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_endpoint#value RdsDbProxyEndpoint#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_endpoint#key RdsDbProxyEndpoint#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_proxy_endpoint#value RdsDbProxyEndpoint#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### RdsDbProxyEndpointTagsList <a name="RdsDbProxyEndpointTagsList" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_proxy_endpoint

rdsDbProxyEndpoint.RdsDbProxyEndpointTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RdsDbProxyEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTags">RdsDbProxyEndpointTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RdsDbProxyEndpointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTags">RdsDbProxyEndpointTags</a>]

---


### RdsDbProxyEndpointTagsOutputReference <a name="RdsDbProxyEndpointTagsOutputReference" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_proxy_endpoint

rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTags">RdsDbProxyEndpointTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RdsDbProxyEndpointTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbProxyEndpoint.RdsDbProxyEndpointTags">RdsDbProxyEndpointTags</a>

---



