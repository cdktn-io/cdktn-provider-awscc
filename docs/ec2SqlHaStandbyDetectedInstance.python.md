# `ec2SqlHaStandbyDetectedInstance` Submodule <a name="`ec2SqlHaStandbyDetectedInstance` Submodule" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2SqlHaStandbyDetectedInstance <a name="Ec2SqlHaStandbyDetectedInstance" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_sql_ha_standby_detected_instance awscc_ec2_sql_ha_standby_detected_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_sql_ha_standby_detected_instance

ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_id: str,
  sql_server_credentials: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | The ID of the EC2 instance to enable for SQL Server high availability standby detection. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.sqlServerCredentials">sql_server_credentials</a></code> | <code>str</code> | The ARN of the AWS Secrets Manager secret containing SQL Server access credentials to the EC2 instance. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.instanceId"></a>

- *Type:* str

The ID of the EC2 instance to enable for SQL Server high availability standby detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_sql_ha_standby_detected_instance#instance_id Ec2SqlHaStandbyDetectedInstance#instance_id}

---

##### `sql_server_credentials`<sup>Optional</sup> <a name="sql_server_credentials" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.sqlServerCredentials"></a>

- *Type:* str

The ARN of the AWS Secrets Manager secret containing SQL Server access credentials to the EC2 instance.

If not specified, AWS Systems Manager agent will use default local user credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_sql_ha_standby_detected_instance#sql_server_credentials Ec2SqlHaStandbyDetectedInstance#sql_server_credentials}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.resetSqlServerCredentials">reset_sql_server_credentials</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_sql_server_credentials` <a name="reset_sql_server_credentials" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.resetSqlServerCredentials"></a>

```python
def reset_sql_server_credentials() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2SqlHaStandbyDetectedInstance resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_sql_ha_standby_detected_instance

ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_sql_ha_standby_detected_instance

ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_sql_ha_standby_detected_instance

ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_sql_ha_standby_detected_instance

ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2SqlHaStandbyDetectedInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2SqlHaStandbyDetectedInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2SqlHaStandbyDetectedInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_sql_ha_standby_detected_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2SqlHaStandbyDetectedInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.haStatus">ha_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.sqlServerLicenseUsage">sql_server_license_usage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.sqlServerCredentialsInput">sql_server_credentials_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.sqlServerCredentials">sql_server_credentials</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ha_status`<sup>Required</sup> <a name="ha_status" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.haStatus"></a>

```python
ha_status: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `sql_server_license_usage`<sup>Required</sup> <a name="sql_server_license_usage" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.sqlServerLicenseUsage"></a>

```python
sql_server_license_usage: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `sql_server_credentials_input`<sup>Optional</sup> <a name="sql_server_credentials_input" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.sqlServerCredentialsInput"></a>

```python
sql_server_credentials_input: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `sql_server_credentials`<sup>Required</sup> <a name="sql_server_credentials" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.sqlServerCredentials"></a>

```python
sql_server_credentials: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2SqlHaStandbyDetectedInstanceConfig <a name="Ec2SqlHaStandbyDetectedInstanceConfig" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_sql_ha_standby_detected_instance

ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_id: str,
  sql_server_credentials: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.instanceId">instance_id</a></code> | <code>str</code> | The ID of the EC2 instance to enable for SQL Server high availability standby detection. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.sqlServerCredentials">sql_server_credentials</a></code> | <code>str</code> | The ARN of the AWS Secrets Manager secret containing SQL Server access credentials to the EC2 instance. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

The ID of the EC2 instance to enable for SQL Server high availability standby detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_sql_ha_standby_detected_instance#instance_id Ec2SqlHaStandbyDetectedInstance#instance_id}

---

##### `sql_server_credentials`<sup>Optional</sup> <a name="sql_server_credentials" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.sqlServerCredentials"></a>

```python
sql_server_credentials: str
```

- *Type:* str

The ARN of the AWS Secrets Manager secret containing SQL Server access credentials to the EC2 instance.

If not specified, AWS Systems Manager agent will use default local user credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_sql_ha_standby_detected_instance#sql_server_credentials Ec2SqlHaStandbyDetectedInstance#sql_server_credentials}

---



