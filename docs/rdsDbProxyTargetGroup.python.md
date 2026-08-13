# `rdsDbProxyTargetGroup` Submodule <a name="`rdsDbProxyTargetGroup` Submodule" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsDbProxyTargetGroup <a name="RdsDbProxyTargetGroup" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group awscc_rds_db_proxy_target_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_proxy_target_group

rdsDbProxyTargetGroup.RdsDbProxyTargetGroup(
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
  target_group_name: str,
  connection_pool_configuration_info: RdsDbProxyTargetGroupConnectionPoolConfigurationInfo = None,
  db_cluster_identifiers: typing.List[str] = None,
  db_instance_identifiers: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.dbProxyName">db_proxy_name</a></code> | <code>str</code> | The identifier for the proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.targetGroupName">target_group_name</a></code> | <code>str</code> | The identifier for the DBProxyTargetGroup. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.connectionPoolConfigurationInfo">connection_pool_configuration_info</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo">RdsDbProxyTargetGroupConnectionPoolConfigurationInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#connection_pool_configuration_info RdsDbProxyTargetGroup#connection_pool_configuration_info}. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.dbClusterIdentifiers">db_cluster_identifiers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#db_cluster_identifiers RdsDbProxyTargetGroup#db_cluster_identifiers}. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.dbInstanceIdentifiers">db_instance_identifiers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#db_instance_identifiers RdsDbProxyTargetGroup#db_instance_identifiers}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `db_proxy_name`<sup>Required</sup> <a name="db_proxy_name" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.dbProxyName"></a>

- *Type:* str

The identifier for the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#db_proxy_name RdsDbProxyTargetGroup#db_proxy_name}

---

##### `target_group_name`<sup>Required</sup> <a name="target_group_name" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.targetGroupName"></a>

- *Type:* str

The identifier for the DBProxyTargetGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#target_group_name RdsDbProxyTargetGroup#target_group_name}

---

##### `connection_pool_configuration_info`<sup>Optional</sup> <a name="connection_pool_configuration_info" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.connectionPoolConfigurationInfo"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo">RdsDbProxyTargetGroupConnectionPoolConfigurationInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#connection_pool_configuration_info RdsDbProxyTargetGroup#connection_pool_configuration_info}.

---

##### `db_cluster_identifiers`<sup>Optional</sup> <a name="db_cluster_identifiers" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.dbClusterIdentifiers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#db_cluster_identifiers RdsDbProxyTargetGroup#db_cluster_identifiers}.

---

##### `db_instance_identifiers`<sup>Optional</sup> <a name="db_instance_identifiers" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.Initializer.parameter.dbInstanceIdentifiers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#db_instance_identifiers RdsDbProxyTargetGroup#db_instance_identifiers}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.putConnectionPoolConfigurationInfo">put_connection_pool_configuration_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.resetConnectionPoolConfigurationInfo">reset_connection_pool_configuration_info</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.resetDbClusterIdentifiers">reset_db_cluster_identifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.resetDbInstanceIdentifiers">reset_db_instance_identifiers</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_connection_pool_configuration_info` <a name="put_connection_pool_configuration_info" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.putConnectionPoolConfigurationInfo"></a>

```python
def put_connection_pool_configuration_info(
  connection_borrow_timeout: typing.Union[int, float] = None,
  init_query: str = None,
  max_connections_percent: typing.Union[int, float] = None,
  max_idle_connections_percent: typing.Union[int, float] = None,
  session_pinning_filters: typing.List[str] = None
) -> None
```

###### `connection_borrow_timeout`<sup>Optional</sup> <a name="connection_borrow_timeout" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.putConnectionPoolConfigurationInfo.parameter.connectionBorrowTimeout"></a>

- *Type:* typing.Union[int, float]

The number of seconds for a proxy to wait for a connection to become available in the connection pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#connection_borrow_timeout RdsDbProxyTargetGroup#connection_borrow_timeout}

---

###### `init_query`<sup>Optional</sup> <a name="init_query" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.putConnectionPoolConfigurationInfo.parameter.initQuery"></a>

- *Type:* str

One or more SQL statements for the proxy to run when opening each new database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#init_query RdsDbProxyTargetGroup#init_query}

---

###### `max_connections_percent`<sup>Optional</sup> <a name="max_connections_percent" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.putConnectionPoolConfigurationInfo.parameter.maxConnectionsPercent"></a>

- *Type:* typing.Union[int, float]

The maximum size of the connection pool for each target in a target group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#max_connections_percent RdsDbProxyTargetGroup#max_connections_percent}

---

###### `max_idle_connections_percent`<sup>Optional</sup> <a name="max_idle_connections_percent" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.putConnectionPoolConfigurationInfo.parameter.maxIdleConnectionsPercent"></a>

- *Type:* typing.Union[int, float]

Controls how actively the proxy closes idle database connections in the connection pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#max_idle_connections_percent RdsDbProxyTargetGroup#max_idle_connections_percent}

---

###### `session_pinning_filters`<sup>Optional</sup> <a name="session_pinning_filters" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.putConnectionPoolConfigurationInfo.parameter.sessionPinningFilters"></a>

- *Type:* typing.List[str]

Each item in the list represents a class of SQL operations that normally cause all later statements in a session using a proxy to be pinned to the same underlying database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#session_pinning_filters RdsDbProxyTargetGroup#session_pinning_filters}

---

##### `reset_connection_pool_configuration_info` <a name="reset_connection_pool_configuration_info" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.resetConnectionPoolConfigurationInfo"></a>

```python
def reset_connection_pool_configuration_info() -> None
```

##### `reset_db_cluster_identifiers` <a name="reset_db_cluster_identifiers" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.resetDbClusterIdentifiers"></a>

```python
def reset_db_cluster_identifiers() -> None
```

##### `reset_db_instance_identifiers` <a name="reset_db_instance_identifiers" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.resetDbInstanceIdentifiers"></a>

```python
def reset_db_instance_identifiers() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RdsDbProxyTargetGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isConstruct"></a>

```python
from cdktn_provider_awscc import rds_db_proxy_target_group

rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isTerraformElement"></a>

```python
from cdktn_provider_awscc import rds_db_proxy_target_group

rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isTerraformResource"></a>

```python
from cdktn_provider_awscc import rds_db_proxy_target_group

rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import rds_db_proxy_target_group

rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RdsDbProxyTargetGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RdsDbProxyTargetGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RdsDbProxyTargetGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RdsDbProxyTargetGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.connectionPoolConfigurationInfo">connection_pool_configuration_info</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference">RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.targetGroupArn">target_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.connectionPoolConfigurationInfoInput">connection_pool_configuration_info_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo">RdsDbProxyTargetGroupConnectionPoolConfigurationInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbClusterIdentifiersInput">db_cluster_identifiers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbInstanceIdentifiersInput">db_instance_identifiers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbProxyNameInput">db_proxy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.targetGroupNameInput">target_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbClusterIdentifiers">db_cluster_identifiers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbInstanceIdentifiers">db_instance_identifiers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbProxyName">db_proxy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.targetGroupName">target_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `connection_pool_configuration_info`<sup>Required</sup> <a name="connection_pool_configuration_info" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.connectionPoolConfigurationInfo"></a>

```python
connection_pool_configuration_info: RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference">RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `target_group_arn`<sup>Required</sup> <a name="target_group_arn" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.targetGroupArn"></a>

```python
target_group_arn: str
```

- *Type:* str

---

##### `connection_pool_configuration_info_input`<sup>Optional</sup> <a name="connection_pool_configuration_info_input" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.connectionPoolConfigurationInfoInput"></a>

```python
connection_pool_configuration_info_input: IResolvable | RdsDbProxyTargetGroupConnectionPoolConfigurationInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo">RdsDbProxyTargetGroupConnectionPoolConfigurationInfo</a>

---

##### `db_cluster_identifiers_input`<sup>Optional</sup> <a name="db_cluster_identifiers_input" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbClusterIdentifiersInput"></a>

```python
db_cluster_identifiers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `db_instance_identifiers_input`<sup>Optional</sup> <a name="db_instance_identifiers_input" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbInstanceIdentifiersInput"></a>

```python
db_instance_identifiers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `db_proxy_name_input`<sup>Optional</sup> <a name="db_proxy_name_input" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbProxyNameInput"></a>

```python
db_proxy_name_input: str
```

- *Type:* str

---

##### `target_group_name_input`<sup>Optional</sup> <a name="target_group_name_input" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.targetGroupNameInput"></a>

```python
target_group_name_input: str
```

- *Type:* str

---

##### `db_cluster_identifiers`<sup>Required</sup> <a name="db_cluster_identifiers" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbClusterIdentifiers"></a>

```python
db_cluster_identifiers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `db_instance_identifiers`<sup>Required</sup> <a name="db_instance_identifiers" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbInstanceIdentifiers"></a>

```python
db_instance_identifiers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `db_proxy_name`<sup>Required</sup> <a name="db_proxy_name" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.dbProxyName"></a>

```python
db_proxy_name: str
```

- *Type:* str

---

##### `target_group_name`<sup>Required</sup> <a name="target_group_name" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.targetGroupName"></a>

```python
target_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RdsDbProxyTargetGroupConfig <a name="RdsDbProxyTargetGroupConfig" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_proxy_target_group

rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  db_proxy_name: str,
  target_group_name: str,
  connection_pool_configuration_info: RdsDbProxyTargetGroupConnectionPoolConfigurationInfo = None,
  db_cluster_identifiers: typing.List[str] = None,
  db_instance_identifiers: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.dbProxyName">db_proxy_name</a></code> | <code>str</code> | The identifier for the proxy. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.targetGroupName">target_group_name</a></code> | <code>str</code> | The identifier for the DBProxyTargetGroup. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.connectionPoolConfigurationInfo">connection_pool_configuration_info</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo">RdsDbProxyTargetGroupConnectionPoolConfigurationInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#connection_pool_configuration_info RdsDbProxyTargetGroup#connection_pool_configuration_info}. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.dbClusterIdentifiers">db_cluster_identifiers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#db_cluster_identifiers RdsDbProxyTargetGroup#db_cluster_identifiers}. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.dbInstanceIdentifiers">db_instance_identifiers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#db_instance_identifiers RdsDbProxyTargetGroup#db_instance_identifiers}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `db_proxy_name`<sup>Required</sup> <a name="db_proxy_name" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.dbProxyName"></a>

```python
db_proxy_name: str
```

- *Type:* str

The identifier for the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#db_proxy_name RdsDbProxyTargetGroup#db_proxy_name}

---

##### `target_group_name`<sup>Required</sup> <a name="target_group_name" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.targetGroupName"></a>

```python
target_group_name: str
```

- *Type:* str

The identifier for the DBProxyTargetGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#target_group_name RdsDbProxyTargetGroup#target_group_name}

---

##### `connection_pool_configuration_info`<sup>Optional</sup> <a name="connection_pool_configuration_info" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.connectionPoolConfigurationInfo"></a>

```python
connection_pool_configuration_info: RdsDbProxyTargetGroupConnectionPoolConfigurationInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo">RdsDbProxyTargetGroupConnectionPoolConfigurationInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#connection_pool_configuration_info RdsDbProxyTargetGroup#connection_pool_configuration_info}.

---

##### `db_cluster_identifiers`<sup>Optional</sup> <a name="db_cluster_identifiers" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.dbClusterIdentifiers"></a>

```python
db_cluster_identifiers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#db_cluster_identifiers RdsDbProxyTargetGroup#db_cluster_identifiers}.

---

##### `db_instance_identifiers`<sup>Optional</sup> <a name="db_instance_identifiers" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConfig.property.dbInstanceIdentifiers"></a>

```python
db_instance_identifiers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#db_instance_identifiers RdsDbProxyTargetGroup#db_instance_identifiers}.

---

### RdsDbProxyTargetGroupConnectionPoolConfigurationInfo <a name="RdsDbProxyTargetGroupConnectionPoolConfigurationInfo" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_proxy_target_group

rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo(
  connection_borrow_timeout: typing.Union[int, float] = None,
  init_query: str = None,
  max_connections_percent: typing.Union[int, float] = None,
  max_idle_connections_percent: typing.Union[int, float] = None,
  session_pinning_filters: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.connectionBorrowTimeout">connection_borrow_timeout</a></code> | <code>typing.Union[int, float]</code> | The number of seconds for a proxy to wait for a connection to become available in the connection pool. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.initQuery">init_query</a></code> | <code>str</code> | One or more SQL statements for the proxy to run when opening each new database connection. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.maxConnectionsPercent">max_connections_percent</a></code> | <code>typing.Union[int, float]</code> | The maximum size of the connection pool for each target in a target group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.maxIdleConnectionsPercent">max_idle_connections_percent</a></code> | <code>typing.Union[int, float]</code> | Controls how actively the proxy closes idle database connections in the connection pool. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.sessionPinningFilters">session_pinning_filters</a></code> | <code>typing.List[str]</code> | Each item in the list represents a class of SQL operations that normally cause all later statements in a session using a proxy to be pinned to the same underlying database connection. |

---

##### `connection_borrow_timeout`<sup>Optional</sup> <a name="connection_borrow_timeout" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.connectionBorrowTimeout"></a>

```python
connection_borrow_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of seconds for a proxy to wait for a connection to become available in the connection pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#connection_borrow_timeout RdsDbProxyTargetGroup#connection_borrow_timeout}

---

##### `init_query`<sup>Optional</sup> <a name="init_query" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.initQuery"></a>

```python
init_query: str
```

- *Type:* str

One or more SQL statements for the proxy to run when opening each new database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#init_query RdsDbProxyTargetGroup#init_query}

---

##### `max_connections_percent`<sup>Optional</sup> <a name="max_connections_percent" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.maxConnectionsPercent"></a>

```python
max_connections_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum size of the connection pool for each target in a target group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#max_connections_percent RdsDbProxyTargetGroup#max_connections_percent}

---

##### `max_idle_connections_percent`<sup>Optional</sup> <a name="max_idle_connections_percent" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.maxIdleConnectionsPercent"></a>

```python
max_idle_connections_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Controls how actively the proxy closes idle database connections in the connection pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#max_idle_connections_percent RdsDbProxyTargetGroup#max_idle_connections_percent}

---

##### `session_pinning_filters`<sup>Optional</sup> <a name="session_pinning_filters" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo.property.sessionPinningFilters"></a>

```python
session_pinning_filters: typing.List[str]
```

- *Type:* typing.List[str]

Each item in the list represents a class of SQL operations that normally cause all later statements in a session using a proxy to be pinned to the same underlying database connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_db_proxy_target_group#session_pinning_filters RdsDbProxyTargetGroup#session_pinning_filters}

---

## Classes <a name="Classes" id="Classes"></a>

### RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference <a name="RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_proxy_target_group

rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetConnectionBorrowTimeout">reset_connection_borrow_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetInitQuery">reset_init_query</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetMaxConnectionsPercent">reset_max_connections_percent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetMaxIdleConnectionsPercent">reset_max_idle_connections_percent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetSessionPinningFilters">reset_session_pinning_filters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connection_borrow_timeout` <a name="reset_connection_borrow_timeout" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetConnectionBorrowTimeout"></a>

```python
def reset_connection_borrow_timeout() -> None
```

##### `reset_init_query` <a name="reset_init_query" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetInitQuery"></a>

```python
def reset_init_query() -> None
```

##### `reset_max_connections_percent` <a name="reset_max_connections_percent" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetMaxConnectionsPercent"></a>

```python
def reset_max_connections_percent() -> None
```

##### `reset_max_idle_connections_percent` <a name="reset_max_idle_connections_percent" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetMaxIdleConnectionsPercent"></a>

```python
def reset_max_idle_connections_percent() -> None
```

##### `reset_session_pinning_filters` <a name="reset_session_pinning_filters" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.resetSessionPinningFilters"></a>

```python
def reset_session_pinning_filters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.connectionBorrowTimeoutInput">connection_borrow_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.initQueryInput">init_query_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxConnectionsPercentInput">max_connections_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxIdleConnectionsPercentInput">max_idle_connections_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.sessionPinningFiltersInput">session_pinning_filters_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.connectionBorrowTimeout">connection_borrow_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.initQuery">init_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxConnectionsPercent">max_connections_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxIdleConnectionsPercent">max_idle_connections_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.sessionPinningFilters">session_pinning_filters</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo">RdsDbProxyTargetGroupConnectionPoolConfigurationInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_borrow_timeout_input`<sup>Optional</sup> <a name="connection_borrow_timeout_input" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.connectionBorrowTimeoutInput"></a>

```python
connection_borrow_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `init_query_input`<sup>Optional</sup> <a name="init_query_input" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.initQueryInput"></a>

```python
init_query_input: str
```

- *Type:* str

---

##### `max_connections_percent_input`<sup>Optional</sup> <a name="max_connections_percent_input" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxConnectionsPercentInput"></a>

```python
max_connections_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_idle_connections_percent_input`<sup>Optional</sup> <a name="max_idle_connections_percent_input" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxIdleConnectionsPercentInput"></a>

```python
max_idle_connections_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_pinning_filters_input`<sup>Optional</sup> <a name="session_pinning_filters_input" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.sessionPinningFiltersInput"></a>

```python
session_pinning_filters_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `connection_borrow_timeout`<sup>Required</sup> <a name="connection_borrow_timeout" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.connectionBorrowTimeout"></a>

```python
connection_borrow_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `init_query`<sup>Required</sup> <a name="init_query" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.initQuery"></a>

```python
init_query: str
```

- *Type:* str

---

##### `max_connections_percent`<sup>Required</sup> <a name="max_connections_percent" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxConnectionsPercent"></a>

```python
max_connections_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_idle_connections_percent`<sup>Required</sup> <a name="max_idle_connections_percent" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.maxIdleConnectionsPercent"></a>

```python
max_idle_connections_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_pinning_filters`<sup>Required</sup> <a name="session_pinning_filters" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.sessionPinningFilters"></a>

```python
session_pinning_filters: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfoOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RdsDbProxyTargetGroupConnectionPoolConfigurationInfo
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbProxyTargetGroup.RdsDbProxyTargetGroupConnectionPoolConfigurationInfo">RdsDbProxyTargetGroupConnectionPoolConfigurationInfo</a>

---



