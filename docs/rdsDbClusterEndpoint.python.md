# `rdsDbClusterEndpoint` Submodule <a name="`rdsDbClusterEndpoint` Submodule" id="@cdktn/provider-awscc.rdsDbClusterEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsDbClusterEndpointA <a name="RdsDbClusterEndpointA" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint awscc_rds_db_cluster_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_cluster_endpoint

rdsDbClusterEndpoint.RdsDbClusterEndpointA(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  custom_endpoint_type: str,
  db_cluster_endpoint_identifier: str,
  db_cluster_identifier: str,
  excluded_members: typing.List[str] = None,
  static_members: typing.List[str] = None,
  tags: IResolvable | typing.List[RdsDbClusterEndpointTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.customEndpointType">custom_endpoint_type</a></code> | <code>str</code> | The type of the custom endpoint. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.dbClusterEndpointIdentifier">db_cluster_endpoint_identifier</a></code> | <code>str</code> | The identifier to use for the new endpoint. This parameter is stored as a lowercase string. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.dbClusterIdentifier">db_cluster_identifier</a></code> | <code>str</code> | The DB cluster identifier of the DB cluster associated with the endpoint. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.excludedMembers">excluded_members</a></code> | <code>typing.List[str]</code> | List of DB instance identifiers that aren't part of the custom endpoint group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.staticMembers">static_members</a></code> | <code>typing.List[str]</code> | List of DB instance identifiers that are part of the custom endpoint group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a>]</code> | The tags to be assigned to the DB cluster endpoint. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `custom_endpoint_type`<sup>Required</sup> <a name="custom_endpoint_type" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.customEndpointType"></a>

- *Type:* str

The type of the custom endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#custom_endpoint_type RdsDbClusterEndpointA#custom_endpoint_type}

---

##### `db_cluster_endpoint_identifier`<sup>Required</sup> <a name="db_cluster_endpoint_identifier" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.dbClusterEndpointIdentifier"></a>

- *Type:* str

The identifier to use for the new endpoint. This parameter is stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#db_cluster_endpoint_identifier RdsDbClusterEndpointA#db_cluster_endpoint_identifier}

---

##### `db_cluster_identifier`<sup>Required</sup> <a name="db_cluster_identifier" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.dbClusterIdentifier"></a>

- *Type:* str

The DB cluster identifier of the DB cluster associated with the endpoint.

This parameter is stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#db_cluster_identifier RdsDbClusterEndpointA#db_cluster_identifier}

---

##### `excluded_members`<sup>Optional</sup> <a name="excluded_members" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.excludedMembers"></a>

- *Type:* typing.List[str]

List of DB instance identifiers that aren't part of the custom endpoint group.

All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty. Once either member list is set, it can be changed or replaced by the other list, but both lists cannot be removed in place; removing them requires replacing the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#excluded_members RdsDbClusterEndpointA#excluded_members}

---

##### `static_members`<sup>Optional</sup> <a name="static_members" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.staticMembers"></a>

- *Type:* typing.List[str]

List of DB instance identifiers that are part of the custom endpoint group.

Once either member list is set, it can be changed or replaced by the other list, but both lists cannot be removed in place; removing them requires replacing the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#static_members RdsDbClusterEndpointA#static_members}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a>]

The tags to be assigned to the DB cluster endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#tags RdsDbClusterEndpointA#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetExcludedMembers">reset_excluded_members</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetStaticMembers">reset_static_members</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[RdsDbClusterEndpointTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a>]

---

##### `reset_excluded_members` <a name="reset_excluded_members" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetExcludedMembers"></a>

```python
def reset_excluded_members() -> None
```

##### `reset_static_members` <a name="reset_static_members" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetStaticMembers"></a>

```python
def reset_static_members() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a RdsDbClusterEndpointA resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isConstruct"></a>

```python
from cdktn_provider_awscc import rds_db_cluster_endpoint

rdsDbClusterEndpoint.RdsDbClusterEndpointA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isTerraformElement"></a>

```python
from cdktn_provider_awscc import rds_db_cluster_endpoint

rdsDbClusterEndpoint.RdsDbClusterEndpointA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isTerraformResource"></a>

```python
from cdktn_provider_awscc import rds_db_cluster_endpoint

rdsDbClusterEndpoint.RdsDbClusterEndpointA.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import rds_db_cluster_endpoint

rdsDbClusterEndpoint.RdsDbClusterEndpointA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a RdsDbClusterEndpointA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RdsDbClusterEndpointA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RdsDbClusterEndpointA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RdsDbClusterEndpointA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointArn">db_cluster_endpoint_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointResourceIdentifier">db_cluster_endpoint_resource_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.endpointType">endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList">RdsDbClusterEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.customEndpointTypeInput">custom_endpoint_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointIdentifierInput">db_cluster_endpoint_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterIdentifierInput">db_cluster_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.excludedMembersInput">excluded_members_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.staticMembersInput">static_members_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.customEndpointType">custom_endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointIdentifier">db_cluster_endpoint_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterIdentifier">db_cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.excludedMembers">excluded_members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.staticMembers">static_members</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `db_cluster_endpoint_arn`<sup>Required</sup> <a name="db_cluster_endpoint_arn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointArn"></a>

```python
db_cluster_endpoint_arn: str
```

- *Type:* str

---

##### `db_cluster_endpoint_resource_identifier`<sup>Required</sup> <a name="db_cluster_endpoint_resource_identifier" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointResourceIdentifier"></a>

```python
db_cluster_endpoint_resource_identifier: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.tags"></a>

```python
tags: RdsDbClusterEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList">RdsDbClusterEndpointTagsList</a>

---

##### `custom_endpoint_type_input`<sup>Optional</sup> <a name="custom_endpoint_type_input" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.customEndpointTypeInput"></a>

```python
custom_endpoint_type_input: str
```

- *Type:* str

---

##### `db_cluster_endpoint_identifier_input`<sup>Optional</sup> <a name="db_cluster_endpoint_identifier_input" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointIdentifierInput"></a>

```python
db_cluster_endpoint_identifier_input: str
```

- *Type:* str

---

##### `db_cluster_identifier_input`<sup>Optional</sup> <a name="db_cluster_identifier_input" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterIdentifierInput"></a>

```python
db_cluster_identifier_input: str
```

- *Type:* str

---

##### `excluded_members_input`<sup>Optional</sup> <a name="excluded_members_input" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.excludedMembersInput"></a>

```python
excluded_members_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `static_members_input`<sup>Optional</sup> <a name="static_members_input" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.staticMembersInput"></a>

```python
static_members_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[RdsDbClusterEndpointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a>]

---

##### `custom_endpoint_type`<sup>Required</sup> <a name="custom_endpoint_type" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.customEndpointType"></a>

```python
custom_endpoint_type: str
```

- *Type:* str

---

##### `db_cluster_endpoint_identifier`<sup>Required</sup> <a name="db_cluster_endpoint_identifier" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterEndpointIdentifier"></a>

```python
db_cluster_endpoint_identifier: str
```

- *Type:* str

---

##### `db_cluster_identifier`<sup>Required</sup> <a name="db_cluster_identifier" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.dbClusterIdentifier"></a>

```python
db_cluster_identifier: str
```

- *Type:* str

---

##### `excluded_members`<sup>Required</sup> <a name="excluded_members" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.excludedMembers"></a>

```python
excluded_members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `static_members`<sup>Required</sup> <a name="static_members" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.staticMembers"></a>

```python
static_members: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RdsDbClusterEndpointAConfig <a name="RdsDbClusterEndpointAConfig" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_cluster_endpoint

rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  custom_endpoint_type: str,
  db_cluster_endpoint_identifier: str,
  db_cluster_identifier: str,
  excluded_members: typing.List[str] = None,
  static_members: typing.List[str] = None,
  tags: IResolvable | typing.List[RdsDbClusterEndpointTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.customEndpointType">custom_endpoint_type</a></code> | <code>str</code> | The type of the custom endpoint. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.dbClusterEndpointIdentifier">db_cluster_endpoint_identifier</a></code> | <code>str</code> | The identifier to use for the new endpoint. This parameter is stored as a lowercase string. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.dbClusterIdentifier">db_cluster_identifier</a></code> | <code>str</code> | The DB cluster identifier of the DB cluster associated with the endpoint. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.excludedMembers">excluded_members</a></code> | <code>typing.List[str]</code> | List of DB instance identifiers that aren't part of the custom endpoint group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.staticMembers">static_members</a></code> | <code>typing.List[str]</code> | List of DB instance identifiers that are part of the custom endpoint group. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a>]</code> | The tags to be assigned to the DB cluster endpoint. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `custom_endpoint_type`<sup>Required</sup> <a name="custom_endpoint_type" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.customEndpointType"></a>

```python
custom_endpoint_type: str
```

- *Type:* str

The type of the custom endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#custom_endpoint_type RdsDbClusterEndpointA#custom_endpoint_type}

---

##### `db_cluster_endpoint_identifier`<sup>Required</sup> <a name="db_cluster_endpoint_identifier" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.dbClusterEndpointIdentifier"></a>

```python
db_cluster_endpoint_identifier: str
```

- *Type:* str

The identifier to use for the new endpoint. This parameter is stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#db_cluster_endpoint_identifier RdsDbClusterEndpointA#db_cluster_endpoint_identifier}

---

##### `db_cluster_identifier`<sup>Required</sup> <a name="db_cluster_identifier" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.dbClusterIdentifier"></a>

```python
db_cluster_identifier: str
```

- *Type:* str

The DB cluster identifier of the DB cluster associated with the endpoint.

This parameter is stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#db_cluster_identifier RdsDbClusterEndpointA#db_cluster_identifier}

---

##### `excluded_members`<sup>Optional</sup> <a name="excluded_members" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.excludedMembers"></a>

```python
excluded_members: typing.List[str]
```

- *Type:* typing.List[str]

List of DB instance identifiers that aren't part of the custom endpoint group.

All other eligible instances are reachable through the custom endpoint. Only relevant if the list of static members is empty. Once either member list is set, it can be changed or replaced by the other list, but both lists cannot be removed in place; removing them requires replacing the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#excluded_members RdsDbClusterEndpointA#excluded_members}

---

##### `static_members`<sup>Optional</sup> <a name="static_members" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.staticMembers"></a>

```python
static_members: typing.List[str]
```

- *Type:* typing.List[str]

List of DB instance identifiers that are part of the custom endpoint group.

Once either member list is set, it can be changed or replaced by the other list, but both lists cannot be removed in place; removing them requires replacing the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#static_members RdsDbClusterEndpointA#static_members}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointAConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[RdsDbClusterEndpointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a>]

The tags to be assigned to the DB cluster endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#tags RdsDbClusterEndpointA#tags}

---

### RdsDbClusterEndpointTags <a name="RdsDbClusterEndpointTags" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_cluster_endpoint

rdsDbClusterEndpoint.RdsDbClusterEndpointTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#key RdsDbClusterEndpointA#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/rds_db_cluster_endpoint#value RdsDbClusterEndpointA#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RdsDbClusterEndpointTagsList <a name="RdsDbClusterEndpointTagsList" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_cluster_endpoint

rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RdsDbClusterEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[RdsDbClusterEndpointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a>]

---


### RdsDbClusterEndpointTagsOutputReference <a name="RdsDbClusterEndpointTagsOutputReference" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import rds_db_cluster_endpoint

rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | RdsDbClusterEndpointTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rdsDbClusterEndpoint.RdsDbClusterEndpointTags">RdsDbClusterEndpointTags</a>

---



