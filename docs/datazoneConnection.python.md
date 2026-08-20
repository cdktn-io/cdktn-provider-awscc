# `datazoneConnection` Submodule <a name="`datazoneConnection` Submodule" id="@cdktn/provider-awscc.datazoneConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneConnection <a name="DatazoneConnection" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection awscc_datazone_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnection(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain_identifier: str,
  name: str,
  aws_location: DatazoneConnectionAwsLocation = None,
  configurations: IResolvable | typing.List[DatazoneConnectionConfigurations] = None,
  description: str = None,
  enable_trusted_identity_propagation: bool | IResolvable = None,
  environment_identifier: str = None,
  project_identifier: str = None,
  props: DatazoneConnectionProps = None,
  scope: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.domainIdentifier">domain_identifier</a></code> | <code>str</code> | The identifier of the domain in which the connection is created. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the connection. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.awsLocation">aws_location</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation">DatazoneConnectionAwsLocation</a></code> | AWS Location of project. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.configurations">configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a>]</code> | The configurations of the connection. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the connection. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.enableTrustedIdentityPropagation">enable_trusted_identity_propagation</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the trusted identity propagation is enabled. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.environmentIdentifier">environment_identifier</a></code> | <code>str</code> | The identifier of the environment in which the connection is created. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.projectIdentifier">project_identifier</a></code> | <code>str</code> | The identifier of the project in which the connection should be created. If. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.props">props</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps">DatazoneConnectionProps</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#props DatazoneConnection#props}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.scope">scope</a></code> | <code>str</code> | The scope of the connection. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_identifier`<sup>Required</sup> <a name="domain_identifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.domainIdentifier"></a>

- *Type:* str

The identifier of the domain in which the connection is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#domain_identifier DatazoneConnection#domain_identifier}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.name"></a>

- *Type:* str

The name of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#name DatazoneConnection#name}

---

##### `aws_location`<sup>Optional</sup> <a name="aws_location" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.awsLocation"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation">DatazoneConnectionAwsLocation</a>

AWS Location of project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#aws_location DatazoneConnection#aws_location}

---

##### `configurations`<sup>Optional</sup> <a name="configurations" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.configurations"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a>]

The configurations of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#configurations DatazoneConnection#configurations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.description"></a>

- *Type:* str

The description of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#description DatazoneConnection#description}

---

##### `enable_trusted_identity_propagation`<sup>Optional</sup> <a name="enable_trusted_identity_propagation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.enableTrustedIdentityPropagation"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether the trusted identity propagation is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#enable_trusted_identity_propagation DatazoneConnection#enable_trusted_identity_propagation}

---

##### `environment_identifier`<sup>Optional</sup> <a name="environment_identifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.environmentIdentifier"></a>

- *Type:* str

The identifier of the environment in which the connection is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#environment_identifier DatazoneConnection#environment_identifier}

---

##### `project_identifier`<sup>Optional</sup> <a name="project_identifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.projectIdentifier"></a>

- *Type:* str

The identifier of the project in which the connection should be created. If.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#project_identifier DatazoneConnection#project_identifier}

---

##### `props`<sup>Optional</sup> <a name="props" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.props"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps">DatazoneConnectionProps</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#props DatazoneConnection#props}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.scope"></a>

- *Type:* str

The scope of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#scope DatazoneConnection#scope}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putAwsLocation">put_aws_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putConfigurations">put_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putProps">put_props</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetAwsLocation">reset_aws_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetConfigurations">reset_configurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetEnableTrustedIdentityPropagation">reset_enable_trusted_identity_propagation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetEnvironmentIdentifier">reset_environment_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetProjectIdentifier">reset_project_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetProps">reset_props</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetScope">reset_scope</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_aws_location` <a name="put_aws_location" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putAwsLocation"></a>

```python
def put_aws_location(
  access_role: str = None,
  aws_account_id: str = None,
  aws_region: str = None,
  iam_connection_id: str = None
) -> None
```

###### `access_role`<sup>Optional</sup> <a name="access_role" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putAwsLocation.parameter.accessRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#access_role DatazoneConnection#access_role}.

---

###### `aws_account_id`<sup>Optional</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putAwsLocation.parameter.awsAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#aws_account_id DatazoneConnection#aws_account_id}.

---

###### `aws_region`<sup>Optional</sup> <a name="aws_region" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putAwsLocation.parameter.awsRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#aws_region DatazoneConnection#aws_region}.

---

###### `iam_connection_id`<sup>Optional</sup> <a name="iam_connection_id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putAwsLocation.parameter.iamConnectionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#iam_connection_id DatazoneConnection#iam_connection_id}.

---

##### `put_configurations` <a name="put_configurations" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putConfigurations"></a>

```python
def put_configurations(
  value: IResolvable | typing.List[DatazoneConnectionConfigurations]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a>]

---

##### `put_props` <a name="put_props" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putProps"></a>

```python
def put_props(
  amazon_q_properties: DatazoneConnectionPropsAmazonQProperties = None,
  athena_properties: DatazoneConnectionPropsAthenaProperties = None,
  glue_properties: DatazoneConnectionPropsGlueProperties = None,
  hyper_pod_properties: DatazoneConnectionPropsHyperPodProperties = None,
  iam_properties: DatazoneConnectionPropsIamProperties = None,
  lakehouse_properties: DatazoneConnectionPropsLakehouseProperties = None,
  mlflow_properties: DatazoneConnectionPropsMlflowProperties = None,
  redshift_properties: DatazoneConnectionPropsRedshiftProperties = None,
  s3_properties: DatazoneConnectionPropsS3Properties = None,
  spark_emr_properties: DatazoneConnectionPropsSparkEmrProperties = None,
  spark_glue_properties: DatazoneConnectionPropsSparkGlueProperties = None,
  workflows_mwaa_properties: DatazoneConnectionPropsWorkflowsMwaaProperties = None,
  workflows_serverless_properties: str = None
) -> None
```

###### `amazon_q_properties`<sup>Optional</sup> <a name="amazon_q_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putProps.parameter.amazonQProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties">DatazoneConnectionPropsAmazonQProperties</a>

Amazon Q properties of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#amazon_q_properties DatazoneConnection#amazon_q_properties}

---

###### `athena_properties`<sup>Optional</sup> <a name="athena_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putProps.parameter.athenaProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties">DatazoneConnectionPropsAthenaProperties</a>

Athena Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#athena_properties DatazoneConnection#athena_properties}

---

###### `glue_properties`<sup>Optional</sup> <a name="glue_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putProps.parameter.glueProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties">DatazoneConnectionPropsGlueProperties</a>

Glue Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#glue_properties DatazoneConnection#glue_properties}

---

###### `hyper_pod_properties`<sup>Optional</sup> <a name="hyper_pod_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putProps.parameter.hyperPodProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties">DatazoneConnectionPropsHyperPodProperties</a>

HyperPod Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#hyper_pod_properties DatazoneConnection#hyper_pod_properties}

---

###### `iam_properties`<sup>Optional</sup> <a name="iam_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putProps.parameter.iamProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties">DatazoneConnectionPropsIamProperties</a>

IAM Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#iam_properties DatazoneConnection#iam_properties}

---

###### `lakehouse_properties`<sup>Optional</sup> <a name="lakehouse_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putProps.parameter.lakehouseProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties">DatazoneConnectionPropsLakehouseProperties</a>

Lakehouse Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#lakehouse_properties DatazoneConnection#lakehouse_properties}

---

###### `mlflow_properties`<sup>Optional</sup> <a name="mlflow_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putProps.parameter.mlflowProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties">DatazoneConnectionPropsMlflowProperties</a>

MLflow Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#mlflow_properties DatazoneConnection#mlflow_properties}

---

###### `redshift_properties`<sup>Optional</sup> <a name="redshift_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putProps.parameter.redshiftProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties">DatazoneConnectionPropsRedshiftProperties</a>

Redshift Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#redshift_properties DatazoneConnection#redshift_properties}

---

###### `s3_properties`<sup>Optional</sup> <a name="s3_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putProps.parameter.s3Properties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties">DatazoneConnectionPropsS3Properties</a>

S3 Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#s3_properties DatazoneConnection#s3_properties}

---

###### `spark_emr_properties`<sup>Optional</sup> <a name="spark_emr_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putProps.parameter.sparkEmrProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties">DatazoneConnectionPropsSparkEmrProperties</a>

Spark EMR Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#spark_emr_properties DatazoneConnection#spark_emr_properties}

---

###### `spark_glue_properties`<sup>Optional</sup> <a name="spark_glue_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putProps.parameter.sparkGlueProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties">DatazoneConnectionPropsSparkGlueProperties</a>

Spark Glue Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#spark_glue_properties DatazoneConnection#spark_glue_properties}

---

###### `workflows_mwaa_properties`<sup>Optional</sup> <a name="workflows_mwaa_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putProps.parameter.workflowsMwaaProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties">DatazoneConnectionPropsWorkflowsMwaaProperties</a>

Workflows MWAA Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#workflows_mwaa_properties DatazoneConnection#workflows_mwaa_properties}

---

###### `workflows_serverless_properties`<sup>Optional</sup> <a name="workflows_serverless_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putProps.parameter.workflowsServerlessProperties"></a>

- *Type:* str

Workflows Serverless Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#workflows_serverless_properties DatazoneConnection#workflows_serverless_properties}

---

##### `reset_aws_location` <a name="reset_aws_location" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetAwsLocation"></a>

```python
def reset_aws_location() -> None
```

##### `reset_configurations` <a name="reset_configurations" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetConfigurations"></a>

```python
def reset_configurations() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enable_trusted_identity_propagation` <a name="reset_enable_trusted_identity_propagation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetEnableTrustedIdentityPropagation"></a>

```python
def reset_enable_trusted_identity_propagation() -> None
```

##### `reset_environment_identifier` <a name="reset_environment_identifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetEnvironmentIdentifier"></a>

```python
def reset_environment_identifier() -> None
```

##### `reset_project_identifier` <a name="reset_project_identifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetProjectIdentifier"></a>

```python
def reset_project_identifier() -> None
```

##### `reset_props` <a name="reset_props" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetProps"></a>

```python
def reset_props() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetScope"></a>

```python
def reset_scope() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DatazoneConnection resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.isConstruct"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.isTerraformElement"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.isTerraformResource"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DatazoneConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatazoneConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatazoneConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatazoneConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.awsLocation">aws_location</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference">DatazoneConnectionAwsLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.configurations">configurations</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList">DatazoneConnectionConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.connectionId">connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.domainUnitId">domain_unit_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.environmentId">environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.environmentUserRole">environment_user_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.props">props</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference">DatazoneConnectionPropsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.awsLocationInput">aws_location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation">DatazoneConnectionAwsLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.configurationsInput">configurations_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.domainIdentifierInput">domain_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.enableTrustedIdentityPropagationInput">enable_trusted_identity_propagation_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.environmentIdentifierInput">environment_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.projectIdentifierInput">project_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.propsInput">props_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps">DatazoneConnectionProps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.domainIdentifier">domain_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.enableTrustedIdentityPropagation">enable_trusted_identity_propagation</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.environmentIdentifier">environment_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.projectIdentifier">project_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.scope">scope</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `aws_location`<sup>Required</sup> <a name="aws_location" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.awsLocation"></a>

```python
aws_location: DatazoneConnectionAwsLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference">DatazoneConnectionAwsLocationOutputReference</a>

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.configurations"></a>

```python
configurations: DatazoneConnectionConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList">DatazoneConnectionConfigurationsList</a>

---

##### `connection_id`<sup>Required</sup> <a name="connection_id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.connectionId"></a>

```python
connection_id: str
```

- *Type:* str

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `domain_unit_id`<sup>Required</sup> <a name="domain_unit_id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.domainUnitId"></a>

```python
domain_unit_id: str
```

- *Type:* str

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

---

##### `environment_user_role`<sup>Required</sup> <a name="environment_user_role" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.environmentUserRole"></a>

```python
environment_user_role: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `props`<sup>Required</sup> <a name="props" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.props"></a>

```python
props: DatazoneConnectionPropsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference">DatazoneConnectionPropsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `aws_location_input`<sup>Optional</sup> <a name="aws_location_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.awsLocationInput"></a>

```python
aws_location_input: IResolvable | DatazoneConnectionAwsLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation">DatazoneConnectionAwsLocation</a>

---

##### `configurations_input`<sup>Optional</sup> <a name="configurations_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.configurationsInput"></a>

```python
configurations_input: IResolvable | typing.List[DatazoneConnectionConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `domain_identifier_input`<sup>Optional</sup> <a name="domain_identifier_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.domainIdentifierInput"></a>

```python
domain_identifier_input: str
```

- *Type:* str

---

##### `enable_trusted_identity_propagation_input`<sup>Optional</sup> <a name="enable_trusted_identity_propagation_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.enableTrustedIdentityPropagationInput"></a>

```python
enable_trusted_identity_propagation_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `environment_identifier_input`<sup>Optional</sup> <a name="environment_identifier_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.environmentIdentifierInput"></a>

```python
environment_identifier_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_identifier_input`<sup>Optional</sup> <a name="project_identifier_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.projectIdentifierInput"></a>

```python
project_identifier_input: str
```

- *Type:* str

---

##### `props_input`<sup>Optional</sup> <a name="props_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.propsInput"></a>

```python
props_input: IResolvable | DatazoneConnectionProps
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps">DatazoneConnectionProps</a>

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_identifier`<sup>Required</sup> <a name="domain_identifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.domainIdentifier"></a>

```python
domain_identifier: str
```

- *Type:* str

---

##### `enable_trusted_identity_propagation`<sup>Required</sup> <a name="enable_trusted_identity_propagation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.enableTrustedIdentityPropagation"></a>

```python
enable_trusted_identity_propagation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `environment_identifier`<sup>Required</sup> <a name="environment_identifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.environmentIdentifier"></a>

```python
environment_identifier: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_identifier`<sup>Required</sup> <a name="project_identifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.projectIdentifier"></a>

```python
project_identifier: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneConnectionAwsLocation <a name="DatazoneConnectionAwsLocation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionAwsLocation(
  access_role: str = None,
  aws_account_id: str = None,
  aws_region: str = None,
  iam_connection_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation.property.accessRole">access_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#access_role DatazoneConnection#access_role}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#aws_account_id DatazoneConnection#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation.property.awsRegion">aws_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#aws_region DatazoneConnection#aws_region}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation.property.iamConnectionId">iam_connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#iam_connection_id DatazoneConnection#iam_connection_id}. |

---

##### `access_role`<sup>Optional</sup> <a name="access_role" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation.property.accessRole"></a>

```python
access_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#access_role DatazoneConnection#access_role}.

---

##### `aws_account_id`<sup>Optional</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#aws_account_id DatazoneConnection#aws_account_id}.

---

##### `aws_region`<sup>Optional</sup> <a name="aws_region" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#aws_region DatazoneConnection#aws_region}.

---

##### `iam_connection_id`<sup>Optional</sup> <a name="iam_connection_id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation.property.iamConnectionId"></a>

```python
iam_connection_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#iam_connection_id DatazoneConnection#iam_connection_id}.

---

### DatazoneConnectionConfig <a name="DatazoneConnectionConfig" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain_identifier: str,
  name: str,
  aws_location: DatazoneConnectionAwsLocation = None,
  configurations: IResolvable | typing.List[DatazoneConnectionConfigurations] = None,
  description: str = None,
  enable_trusted_identity_propagation: bool | IResolvable = None,
  environment_identifier: str = None,
  project_identifier: str = None,
  props: DatazoneConnectionProps = None,
  scope: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.domainIdentifier">domain_identifier</a></code> | <code>str</code> | The identifier of the domain in which the connection is created. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.name">name</a></code> | <code>str</code> | The name of the connection. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.awsLocation">aws_location</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation">DatazoneConnectionAwsLocation</a></code> | AWS Location of project. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.configurations">configurations</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a>]</code> | The configurations of the connection. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.description">description</a></code> | <code>str</code> | The description of the connection. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.enableTrustedIdentityPropagation">enable_trusted_identity_propagation</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the trusted identity propagation is enabled. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.environmentIdentifier">environment_identifier</a></code> | <code>str</code> | The identifier of the environment in which the connection is created. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.projectIdentifier">project_identifier</a></code> | <code>str</code> | The identifier of the project in which the connection should be created. If. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.props">props</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps">DatazoneConnectionProps</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#props DatazoneConnection#props}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.scope">scope</a></code> | <code>str</code> | The scope of the connection. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_identifier`<sup>Required</sup> <a name="domain_identifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.domainIdentifier"></a>

```python
domain_identifier: str
```

- *Type:* str

The identifier of the domain in which the connection is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#domain_identifier DatazoneConnection#domain_identifier}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#name DatazoneConnection#name}

---

##### `aws_location`<sup>Optional</sup> <a name="aws_location" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.awsLocation"></a>

```python
aws_location: DatazoneConnectionAwsLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation">DatazoneConnectionAwsLocation</a>

AWS Location of project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#aws_location DatazoneConnection#aws_location}

---

##### `configurations`<sup>Optional</sup> <a name="configurations" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.configurations"></a>

```python
configurations: IResolvable | typing.List[DatazoneConnectionConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a>]

The configurations of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#configurations DatazoneConnection#configurations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#description DatazoneConnection#description}

---

##### `enable_trusted_identity_propagation`<sup>Optional</sup> <a name="enable_trusted_identity_propagation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.enableTrustedIdentityPropagation"></a>

```python
enable_trusted_identity_propagation: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the trusted identity propagation is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#enable_trusted_identity_propagation DatazoneConnection#enable_trusted_identity_propagation}

---

##### `environment_identifier`<sup>Optional</sup> <a name="environment_identifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.environmentIdentifier"></a>

```python
environment_identifier: str
```

- *Type:* str

The identifier of the environment in which the connection is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#environment_identifier DatazoneConnection#environment_identifier}

---

##### `project_identifier`<sup>Optional</sup> <a name="project_identifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.projectIdentifier"></a>

```python
project_identifier: str
```

- *Type:* str

The identifier of the project in which the connection should be created. If.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#project_identifier DatazoneConnection#project_identifier}

---

##### `props`<sup>Optional</sup> <a name="props" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.props"></a>

```python
props: DatazoneConnectionProps
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps">DatazoneConnectionProps</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#props DatazoneConnection#props}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

The scope of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#scope DatazoneConnection#scope}

---

### DatazoneConnectionConfigurations <a name="DatazoneConnectionConfigurations" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionConfigurations(
  classification: str = None,
  properties: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations.property.classification">classification</a></code> | <code>str</code> | The classification of the connection configuration. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | Property Map. |

---

##### `classification`<sup>Optional</sup> <a name="classification" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations.property.classification"></a>

```python
classification: str
```

- *Type:* str

The classification of the connection configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#classification DatazoneConnection#classification}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Property Map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#properties DatazoneConnection#properties}

---

### DatazoneConnectionProps <a name="DatazoneConnectionProps" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionProps(
  amazon_q_properties: DatazoneConnectionPropsAmazonQProperties = None,
  athena_properties: DatazoneConnectionPropsAthenaProperties = None,
  glue_properties: DatazoneConnectionPropsGlueProperties = None,
  hyper_pod_properties: DatazoneConnectionPropsHyperPodProperties = None,
  iam_properties: DatazoneConnectionPropsIamProperties = None,
  lakehouse_properties: DatazoneConnectionPropsLakehouseProperties = None,
  mlflow_properties: DatazoneConnectionPropsMlflowProperties = None,
  redshift_properties: DatazoneConnectionPropsRedshiftProperties = None,
  s3_properties: DatazoneConnectionPropsS3Properties = None,
  spark_emr_properties: DatazoneConnectionPropsSparkEmrProperties = None,
  spark_glue_properties: DatazoneConnectionPropsSparkGlueProperties = None,
  workflows_mwaa_properties: DatazoneConnectionPropsWorkflowsMwaaProperties = None,
  workflows_serverless_properties: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.amazonQProperties">amazon_q_properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties">DatazoneConnectionPropsAmazonQProperties</a></code> | Amazon Q properties of the connection. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.athenaProperties">athena_properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties">DatazoneConnectionPropsAthenaProperties</a></code> | Athena Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.glueProperties">glue_properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties">DatazoneConnectionPropsGlueProperties</a></code> | Glue Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.hyperPodProperties">hyper_pod_properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties">DatazoneConnectionPropsHyperPodProperties</a></code> | HyperPod Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.iamProperties">iam_properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties">DatazoneConnectionPropsIamProperties</a></code> | IAM Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.lakehouseProperties">lakehouse_properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties">DatazoneConnectionPropsLakehouseProperties</a></code> | Lakehouse Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.mlflowProperties">mlflow_properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties">DatazoneConnectionPropsMlflowProperties</a></code> | MLflow Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.redshiftProperties">redshift_properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties">DatazoneConnectionPropsRedshiftProperties</a></code> | Redshift Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.s3Properties">s3_properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties">DatazoneConnectionPropsS3Properties</a></code> | S3 Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.sparkEmrProperties">spark_emr_properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties">DatazoneConnectionPropsSparkEmrProperties</a></code> | Spark EMR Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.sparkGlueProperties">spark_glue_properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties">DatazoneConnectionPropsSparkGlueProperties</a></code> | Spark Glue Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.workflowsMwaaProperties">workflows_mwaa_properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties">DatazoneConnectionPropsWorkflowsMwaaProperties</a></code> | Workflows MWAA Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.workflowsServerlessProperties">workflows_serverless_properties</a></code> | <code>str</code> | Workflows Serverless Properties Input. |

---

##### `amazon_q_properties`<sup>Optional</sup> <a name="amazon_q_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.amazonQProperties"></a>

```python
amazon_q_properties: DatazoneConnectionPropsAmazonQProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties">DatazoneConnectionPropsAmazonQProperties</a>

Amazon Q properties of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#amazon_q_properties DatazoneConnection#amazon_q_properties}

---

##### `athena_properties`<sup>Optional</sup> <a name="athena_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.athenaProperties"></a>

```python
athena_properties: DatazoneConnectionPropsAthenaProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties">DatazoneConnectionPropsAthenaProperties</a>

Athena Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#athena_properties DatazoneConnection#athena_properties}

---

##### `glue_properties`<sup>Optional</sup> <a name="glue_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.glueProperties"></a>

```python
glue_properties: DatazoneConnectionPropsGlueProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties">DatazoneConnectionPropsGlueProperties</a>

Glue Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#glue_properties DatazoneConnection#glue_properties}

---

##### `hyper_pod_properties`<sup>Optional</sup> <a name="hyper_pod_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.hyperPodProperties"></a>

```python
hyper_pod_properties: DatazoneConnectionPropsHyperPodProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties">DatazoneConnectionPropsHyperPodProperties</a>

HyperPod Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#hyper_pod_properties DatazoneConnection#hyper_pod_properties}

---

##### `iam_properties`<sup>Optional</sup> <a name="iam_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.iamProperties"></a>

```python
iam_properties: DatazoneConnectionPropsIamProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties">DatazoneConnectionPropsIamProperties</a>

IAM Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#iam_properties DatazoneConnection#iam_properties}

---

##### `lakehouse_properties`<sup>Optional</sup> <a name="lakehouse_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.lakehouseProperties"></a>

```python
lakehouse_properties: DatazoneConnectionPropsLakehouseProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties">DatazoneConnectionPropsLakehouseProperties</a>

Lakehouse Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#lakehouse_properties DatazoneConnection#lakehouse_properties}

---

##### `mlflow_properties`<sup>Optional</sup> <a name="mlflow_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.mlflowProperties"></a>

```python
mlflow_properties: DatazoneConnectionPropsMlflowProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties">DatazoneConnectionPropsMlflowProperties</a>

MLflow Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#mlflow_properties DatazoneConnection#mlflow_properties}

---

##### `redshift_properties`<sup>Optional</sup> <a name="redshift_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.redshiftProperties"></a>

```python
redshift_properties: DatazoneConnectionPropsRedshiftProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties">DatazoneConnectionPropsRedshiftProperties</a>

Redshift Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#redshift_properties DatazoneConnection#redshift_properties}

---

##### `s3_properties`<sup>Optional</sup> <a name="s3_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.s3Properties"></a>

```python
s3_properties: DatazoneConnectionPropsS3Properties
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties">DatazoneConnectionPropsS3Properties</a>

S3 Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#s3_properties DatazoneConnection#s3_properties}

---

##### `spark_emr_properties`<sup>Optional</sup> <a name="spark_emr_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.sparkEmrProperties"></a>

```python
spark_emr_properties: DatazoneConnectionPropsSparkEmrProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties">DatazoneConnectionPropsSparkEmrProperties</a>

Spark EMR Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#spark_emr_properties DatazoneConnection#spark_emr_properties}

---

##### `spark_glue_properties`<sup>Optional</sup> <a name="spark_glue_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.sparkGlueProperties"></a>

```python
spark_glue_properties: DatazoneConnectionPropsSparkGlueProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties">DatazoneConnectionPropsSparkGlueProperties</a>

Spark Glue Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#spark_glue_properties DatazoneConnection#spark_glue_properties}

---

##### `workflows_mwaa_properties`<sup>Optional</sup> <a name="workflows_mwaa_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.workflowsMwaaProperties"></a>

```python
workflows_mwaa_properties: DatazoneConnectionPropsWorkflowsMwaaProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties">DatazoneConnectionPropsWorkflowsMwaaProperties</a>

Workflows MWAA Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#workflows_mwaa_properties DatazoneConnection#workflows_mwaa_properties}

---

##### `workflows_serverless_properties`<sup>Optional</sup> <a name="workflows_serverless_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.workflowsServerlessProperties"></a>

```python
workflows_serverless_properties: str
```

- *Type:* str

Workflows Serverless Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#workflows_serverless_properties DatazoneConnection#workflows_serverless_properties}

---

### DatazoneConnectionPropsAmazonQProperties <a name="DatazoneConnectionPropsAmazonQProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsAmazonQProperties(
  auth_mode: str = None,
  is_enabled: bool | IResolvable = None,
  profile_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties.property.authMode">auth_mode</a></code> | <code>str</code> | The authentication mode of the connection's AmazonQ properties. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether Amazon Q is enabled for the connection. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties.property.profileArn">profile_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#profile_arn DatazoneConnection#profile_arn}. |

---

##### `auth_mode`<sup>Optional</sup> <a name="auth_mode" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties.property.authMode"></a>

```python
auth_mode: str
```

- *Type:* str

The authentication mode of the connection's AmazonQ properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#auth_mode DatazoneConnection#auth_mode}

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether Amazon Q is enabled for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#is_enabled DatazoneConnection#is_enabled}

---

##### `profile_arn`<sup>Optional</sup> <a name="profile_arn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties.property.profileArn"></a>

```python
profile_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#profile_arn DatazoneConnection#profile_arn}.

---

### DatazoneConnectionPropsAthenaProperties <a name="DatazoneConnectionPropsAthenaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsAthenaProperties(
  workgroup_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties.property.workgroupName">workgroup_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#workgroup_name DatazoneConnection#workgroup_name}. |

---

##### `workgroup_name`<sup>Optional</sup> <a name="workgroup_name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties.property.workgroupName"></a>

```python
workgroup_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#workgroup_name DatazoneConnection#workgroup_name}.

---

### DatazoneConnectionPropsGlueProperties <a name="DatazoneConnectionPropsGlueProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsGlueProperties(
  glue_connection_input: DatazoneConnectionPropsGluePropertiesGlueConnectionInput = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties.property.glueConnectionInput">glue_connection_input</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput">DatazoneConnectionPropsGluePropertiesGlueConnectionInput</a></code> | Glue Connection Input. |

---

##### `glue_connection_input`<sup>Optional</sup> <a name="glue_connection_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties.property.glueConnectionInput"></a>

```python
glue_connection_input: DatazoneConnectionPropsGluePropertiesGlueConnectionInput
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput">DatazoneConnectionPropsGluePropertiesGlueConnectionInput</a>

Glue Connection Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#glue_connection_input DatazoneConnection#glue_connection_input}

---

### DatazoneConnectionPropsGluePropertiesGlueConnectionInput <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput(
  athena_properties: typing.Mapping[str] = None,
  authentication_configuration: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration = None,
  connection_properties: typing.Mapping[str] = None,
  connection_type: str = None,
  description: str = None,
  match_criteria: str = None,
  name: str = None,
  physical_connection_requirements: DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements = None,
  python_properties: typing.Mapping[str] = None,
  spark_properties: typing.Mapping[str] = None,
  validate_credentials: bool | IResolvable = None,
  validate_for_compute_environments: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.athenaProperties">athena_properties</a></code> | <code>typing.Mapping[str]</code> | Property Map. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.authenticationConfiguration">authentication_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration</a></code> | Authentication Configuration Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.connectionProperties">connection_properties</a></code> | <code>typing.Mapping[str]</code> | Connection Properties. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.connectionType">connection_type</a></code> | <code>str</code> | Glue Connection Type. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#description DatazoneConnection#description}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.matchCriteria">match_criteria</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#match_criteria DatazoneConnection#match_criteria}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#name DatazoneConnection#name}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.physicalConnectionRequirements">physical_connection_requirements</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements">DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements</a></code> | Physical Connection Requirements. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.pythonProperties">python_properties</a></code> | <code>typing.Mapping[str]</code> | Property Map. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.sparkProperties">spark_properties</a></code> | <code>typing.Mapping[str]</code> | Property Map. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.validateCredentials">validate_credentials</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#validate_credentials DatazoneConnection#validate_credentials}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.validateForComputeEnvironments">validate_for_compute_environments</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#validate_for_compute_environments DatazoneConnection#validate_for_compute_environments}. |

---

##### `athena_properties`<sup>Optional</sup> <a name="athena_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.athenaProperties"></a>

```python
athena_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Property Map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#athena_properties DatazoneConnection#athena_properties}

---

##### `authentication_configuration`<sup>Optional</sup> <a name="authentication_configuration" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.authenticationConfiguration"></a>

```python
authentication_configuration: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration</a>

Authentication Configuration Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#authentication_configuration DatazoneConnection#authentication_configuration}

---

##### `connection_properties`<sup>Optional</sup> <a name="connection_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.connectionProperties"></a>

```python
connection_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Connection Properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#connection_properties DatazoneConnection#connection_properties}

---

##### `connection_type`<sup>Optional</sup> <a name="connection_type" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

Glue Connection Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#connection_type DatazoneConnection#connection_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#description DatazoneConnection#description}.

---

##### `match_criteria`<sup>Optional</sup> <a name="match_criteria" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.matchCriteria"></a>

```python
match_criteria: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#match_criteria DatazoneConnection#match_criteria}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#name DatazoneConnection#name}.

---

##### `physical_connection_requirements`<sup>Optional</sup> <a name="physical_connection_requirements" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.physicalConnectionRequirements"></a>

```python
physical_connection_requirements: DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements">DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements</a>

Physical Connection Requirements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#physical_connection_requirements DatazoneConnection#physical_connection_requirements}

---

##### `python_properties`<sup>Optional</sup> <a name="python_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.pythonProperties"></a>

```python
python_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Property Map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#python_properties DatazoneConnection#python_properties}

---

##### `spark_properties`<sup>Optional</sup> <a name="spark_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.sparkProperties"></a>

```python
spark_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Property Map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#spark_properties DatazoneConnection#spark_properties}

---

##### `validate_credentials`<sup>Optional</sup> <a name="validate_credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.validateCredentials"></a>

```python
validate_credentials: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#validate_credentials DatazoneConnection#validate_credentials}.

---

##### `validate_for_compute_environments`<sup>Optional</sup> <a name="validate_for_compute_environments" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.validateForComputeEnvironments"></a>

```python
validate_for_compute_environments: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#validate_for_compute_environments DatazoneConnection#validate_for_compute_environments}.

---

### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration(
  authentication_type: str = None,
  basic_authentication_credentials: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials = None,
  custom_authentication_credentials: typing.Mapping[str] = None,
  kms_key_arn: str = None,
  o_auth2_properties: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties = None,
  secret_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.authenticationType">authentication_type</a></code> | <code>str</code> | Authentication Type. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.basicAuthenticationCredentials">basic_authentication_credentials</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a></code> | Basic Authentication Credentials. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.customAuthenticationCredentials">custom_authentication_credentials</a></code> | <code>typing.Mapping[str]</code> | Credential Map. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#kms_key_arn DatazoneConnection#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.oAuth2Properties">o_auth2_properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties</a></code> | OAuth2 Properties. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.secretArn">secret_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#secret_arn DatazoneConnection#secret_arn}. |

---

##### `authentication_type`<sup>Optional</sup> <a name="authentication_type" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

Authentication Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#authentication_type DatazoneConnection#authentication_type}

---

##### `basic_authentication_credentials`<sup>Optional</sup> <a name="basic_authentication_credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.basicAuthenticationCredentials"></a>

```python
basic_authentication_credentials: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a>

Basic Authentication Credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#basic_authentication_credentials DatazoneConnection#basic_authentication_credentials}

---

##### `custom_authentication_credentials`<sup>Optional</sup> <a name="custom_authentication_credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.customAuthenticationCredentials"></a>

```python
custom_authentication_credentials: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Credential Map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#custom_authentication_credentials DatazoneConnection#custom_authentication_credentials}

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#kms_key_arn DatazoneConnection#kms_key_arn}.

---

##### `o_auth2_properties`<sup>Optional</sup> <a name="o_auth2_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.oAuth2Properties"></a>

```python
o_auth2_properties: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties</a>

OAuth2 Properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#o_auth_2_properties DatazoneConnection#o_auth_2_properties}

---

##### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#secret_arn DatazoneConnection#secret_arn}.

---

### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials(
  password: str = None,
  user_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#password DatazoneConnection#password}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#user_name DatazoneConnection#user_name}. |

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#password DatazoneConnection#password}.

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#user_name DatazoneConnection#user_name}.

---

### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties(
  authorization_code_properties: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties = None,
  o_auth2_client_application: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication = None,
  o_auth2_credentials: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials = None,
  o_auth2_grant_type: str = None,
  token_url: str = None,
  token_url_parameters_map: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.authorizationCodeProperties">authorization_code_properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a></code> | Authorization Code Properties. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2ClientApplication">o_auth2_client_application</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a></code> | OAuth2 Client Application. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2Credentials">o_auth2_credentials</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a></code> | Glue OAuth2 Credentials. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2GrantType">o_auth2_grant_type</a></code> | <code>str</code> | OAuth2 Grant Type. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.tokenUrl">token_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#token_url DatazoneConnection#token_url}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.tokenUrlParametersMap">token_url_parameters_map</a></code> | <code>typing.Mapping[str]</code> | The token URL parameters. |

---

##### `authorization_code_properties`<sup>Optional</sup> <a name="authorization_code_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.authorizationCodeProperties"></a>

```python
authorization_code_properties: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a>

Authorization Code Properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#authorization_code_properties DatazoneConnection#authorization_code_properties}

---

##### `o_auth2_client_application`<sup>Optional</sup> <a name="o_auth2_client_application" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2ClientApplication"></a>

```python
o_auth2_client_application: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a>

OAuth2 Client Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#o_auth_2_client_application DatazoneConnection#o_auth_2_client_application}

---

##### `o_auth2_credentials`<sup>Optional</sup> <a name="o_auth2_credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2Credentials"></a>

```python
o_auth2_credentials: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a>

Glue OAuth2 Credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#o_auth_2_credentials DatazoneConnection#o_auth_2_credentials}

---

##### `o_auth2_grant_type`<sup>Optional</sup> <a name="o_auth2_grant_type" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2GrantType"></a>

```python
o_auth2_grant_type: str
```

- *Type:* str

OAuth2 Grant Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#o_auth_2_grant_type DatazoneConnection#o_auth_2_grant_type}

---

##### `token_url`<sup>Optional</sup> <a name="token_url" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.tokenUrl"></a>

```python
token_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#token_url DatazoneConnection#token_url}.

---

##### `token_url_parameters_map`<sup>Optional</sup> <a name="token_url_parameters_map" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.tokenUrlParametersMap"></a>

```python
token_url_parameters_map: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The token URL parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#token_url_parameters_map DatazoneConnection#token_url_parameters_map}

---

### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties(
  authorization_code: str = None,
  redirect_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.property.authorizationCode">authorization_code</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#authorization_code DatazoneConnection#authorization_code}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.property.redirectUri">redirect_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#redirect_uri DatazoneConnection#redirect_uri}. |

---

##### `authorization_code`<sup>Optional</sup> <a name="authorization_code" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.property.authorizationCode"></a>

```python
authorization_code: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#authorization_code DatazoneConnection#authorization_code}.

---

##### `redirect_uri`<sup>Optional</sup> <a name="redirect_uri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.property.redirectUri"></a>

```python
redirect_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#redirect_uri DatazoneConnection#redirect_uri}.

---

### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication(
  aws_managed_client_application_reference: str = None,
  user_managed_client_application_client_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.property.awsManagedClientApplicationReference">aws_managed_client_application_reference</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#aws_managed_client_application_reference DatazoneConnection#aws_managed_client_application_reference}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.property.userManagedClientApplicationClientId">user_managed_client_application_client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#user_managed_client_application_client_id DatazoneConnection#user_managed_client_application_client_id}. |

---

##### `aws_managed_client_application_reference`<sup>Optional</sup> <a name="aws_managed_client_application_reference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.property.awsManagedClientApplicationReference"></a>

```python
aws_managed_client_application_reference: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#aws_managed_client_application_reference DatazoneConnection#aws_managed_client_application_reference}.

---

##### `user_managed_client_application_client_id`<sup>Optional</sup> <a name="user_managed_client_application_client_id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.property.userManagedClientApplicationClientId"></a>

```python
user_managed_client_application_client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#user_managed_client_application_client_id DatazoneConnection#user_managed_client_application_client_id}.

---

### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials(
  access_token: str = None,
  jwt_token: str = None,
  refresh_token: str = None,
  user_managed_client_application_client_secret: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.accessToken">access_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#access_token DatazoneConnection#access_token}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.jwtToken">jwt_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#jwt_token DatazoneConnection#jwt_token}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.refreshToken">refresh_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#refresh_token DatazoneConnection#refresh_token}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.userManagedClientApplicationClientSecret">user_managed_client_application_client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#user_managed_client_application_client_secret DatazoneConnection#user_managed_client_application_client_secret}. |

---

##### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#access_token DatazoneConnection#access_token}.

---

##### `jwt_token`<sup>Optional</sup> <a name="jwt_token" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.jwtToken"></a>

```python
jwt_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#jwt_token DatazoneConnection#jwt_token}.

---

##### `refresh_token`<sup>Optional</sup> <a name="refresh_token" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.refreshToken"></a>

```python
refresh_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#refresh_token DatazoneConnection#refresh_token}.

---

##### `user_managed_client_application_client_secret`<sup>Optional</sup> <a name="user_managed_client_application_client_secret" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.userManagedClientApplicationClientSecret"></a>

```python
user_managed_client_application_client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#user_managed_client_application_client_secret DatazoneConnection#user_managed_client_application_client_secret}.

---

### DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements(
  availability_zone: str = None,
  security_group_id_list: typing.List[str] = None,
  subnet_id: str = None,
  subnet_id_list: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#availability_zone DatazoneConnection#availability_zone}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.property.securityGroupIdList">security_group_id_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#security_group_id_list DatazoneConnection#security_group_id_list}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#subnet_id DatazoneConnection#subnet_id}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.property.subnetIdList">subnet_id_list</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#subnet_id_list DatazoneConnection#subnet_id_list}. |

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#availability_zone DatazoneConnection#availability_zone}.

---

##### `security_group_id_list`<sup>Optional</sup> <a name="security_group_id_list" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.property.securityGroupIdList"></a>

```python
security_group_id_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#security_group_id_list DatazoneConnection#security_group_id_list}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#subnet_id DatazoneConnection#subnet_id}.

---

##### `subnet_id_list`<sup>Optional</sup> <a name="subnet_id_list" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.property.subnetIdList"></a>

```python
subnet_id_list: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#subnet_id_list DatazoneConnection#subnet_id_list}.

---

### DatazoneConnectionPropsHyperPodProperties <a name="DatazoneConnectionPropsHyperPodProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsHyperPodProperties(
  cluster_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties.property.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#cluster_name DatazoneConnection#cluster_name}. |

---

##### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#cluster_name DatazoneConnection#cluster_name}.

---

### DatazoneConnectionPropsIamProperties <a name="DatazoneConnectionPropsIamProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsIamProperties(
  glue_lineage_sync_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties.property.glueLineageSyncEnabled">glue_lineage_sync_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#glue_lineage_sync_enabled DatazoneConnection#glue_lineage_sync_enabled}. |

---

##### `glue_lineage_sync_enabled`<sup>Optional</sup> <a name="glue_lineage_sync_enabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties.property.glueLineageSyncEnabled"></a>

```python
glue_lineage_sync_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#glue_lineage_sync_enabled DatazoneConnection#glue_lineage_sync_enabled}.

---

### DatazoneConnectionPropsLakehouseProperties <a name="DatazoneConnectionPropsLakehouseProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsLakehouseProperties(
  glue_lineage_sync_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties.property.glueLineageSyncEnabled">glue_lineage_sync_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether Glue lineage sync is enabled for the lakehouse connection. |

---

##### `glue_lineage_sync_enabled`<sup>Optional</sup> <a name="glue_lineage_sync_enabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties.property.glueLineageSyncEnabled"></a>

```python
glue_lineage_sync_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether Glue lineage sync is enabled for the lakehouse connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#glue_lineage_sync_enabled DatazoneConnection#glue_lineage_sync_enabled}

---

### DatazoneConnectionPropsMlflowProperties <a name="DatazoneConnectionPropsMlflowProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsMlflowProperties(
  tracking_server_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties.property.trackingServerArn">tracking_server_arn</a></code> | <code>str</code> | The ARN of the MLflow tracking server. |

---

##### `tracking_server_arn`<sup>Optional</sup> <a name="tracking_server_arn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties.property.trackingServerArn"></a>

```python
tracking_server_arn: str
```

- *Type:* str

The ARN of the MLflow tracking server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#tracking_server_arn DatazoneConnection#tracking_server_arn}

---

### DatazoneConnectionPropsRedshiftProperties <a name="DatazoneConnectionPropsRedshiftProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsRedshiftProperties(
  credentials: DatazoneConnectionPropsRedshiftPropertiesCredentials = None,
  database_name: str = None,
  host: str = None,
  lineage_sync: DatazoneConnectionPropsRedshiftPropertiesLineageSync = None,
  port: typing.Union[int, float] = None,
  storage: DatazoneConnectionPropsRedshiftPropertiesStorage = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials">DatazoneConnectionPropsRedshiftPropertiesCredentials</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#credentials DatazoneConnection#credentials}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#database_name DatazoneConnection#database_name}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#host DatazoneConnection#host}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.lineageSync">lineage_sync</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync">DatazoneConnectionPropsRedshiftPropertiesLineageSync</a></code> | Redshift Lineage Sync Configuration Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#port DatazoneConnection#port}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage">DatazoneConnectionPropsRedshiftPropertiesStorage</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#storage DatazoneConnection#storage}. |

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.credentials"></a>

```python
credentials: DatazoneConnectionPropsRedshiftPropertiesCredentials
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials">DatazoneConnectionPropsRedshiftPropertiesCredentials</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#credentials DatazoneConnection#credentials}.

---

##### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#database_name DatazoneConnection#database_name}.

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.host"></a>

```python
host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#host DatazoneConnection#host}.

---

##### `lineage_sync`<sup>Optional</sup> <a name="lineage_sync" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.lineageSync"></a>

```python
lineage_sync: DatazoneConnectionPropsRedshiftPropertiesLineageSync
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync">DatazoneConnectionPropsRedshiftPropertiesLineageSync</a>

Redshift Lineage Sync Configuration Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#lineage_sync DatazoneConnection#lineage_sync}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#port DatazoneConnection#port}.

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.storage"></a>

```python
storage: DatazoneConnectionPropsRedshiftPropertiesStorage
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage">DatazoneConnectionPropsRedshiftPropertiesStorage</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#storage DatazoneConnection#storage}.

---

### DatazoneConnectionPropsRedshiftPropertiesCredentials <a name="DatazoneConnectionPropsRedshiftPropertiesCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials(
  secret_arn: str = None,
  username_password: DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials.property.secretArn">secret_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#secret_arn DatazoneConnection#secret_arn}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials.property.usernamePassword">username_password</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword">DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword</a></code> | The username and password to be used for authentication. |

---

##### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#secret_arn DatazoneConnection#secret_arn}.

---

##### `username_password`<sup>Optional</sup> <a name="username_password" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials.property.usernamePassword"></a>

```python
username_password: DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword">DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword</a>

The username and password to be used for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#username_password DatazoneConnection#username_password}

---

### DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword <a name="DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword(
  password: str = None,
  username: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#password DatazoneConnection#password}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#username DatazoneConnection#username}. |

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#password DatazoneConnection#password}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#username DatazoneConnection#username}.

---

### DatazoneConnectionPropsRedshiftPropertiesLineageSync <a name="DatazoneConnectionPropsRedshiftPropertiesLineageSync" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync(
  enabled: bool | IResolvable = None,
  schedule: DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#enabled DatazoneConnection#enabled}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule">DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule</a></code> | Lineage Sync Schedule. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#enabled DatazoneConnection#enabled}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync.property.schedule"></a>

```python
schedule: DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule">DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule</a>

Lineage Sync Schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#schedule DatazoneConnection#schedule}

---

### DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule <a name="DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule(
  schedule: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule.property.schedule">schedule</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#schedule DatazoneConnection#schedule}. |

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#schedule DatazoneConnection#schedule}.

---

### DatazoneConnectionPropsRedshiftPropertiesStorage <a name="DatazoneConnectionPropsRedshiftPropertiesStorage" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage(
  cluster_name: str = None,
  workgroup_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage.property.clusterName">cluster_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#cluster_name DatazoneConnection#cluster_name}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage.property.workgroupName">workgroup_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#workgroup_name DatazoneConnection#workgroup_name}. |

---

##### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#cluster_name DatazoneConnection#cluster_name}.

---

##### `workgroup_name`<sup>Optional</sup> <a name="workgroup_name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage.property.workgroupName"></a>

```python
workgroup_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#workgroup_name DatazoneConnection#workgroup_name}.

---

### DatazoneConnectionPropsS3Properties <a name="DatazoneConnectionPropsS3Properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsS3Properties(
  register_s3_access_grant_location: bool | IResolvable = None,
  s3_access_grant_location_id: str = None,
  s3_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties.property.registerS3AccessGrantLocation">register_s3_access_grant_location</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to register the S3 Access Grant location. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties.property.s3AccessGrantLocationId">s3_access_grant_location_id</a></code> | <code>str</code> | The Amazon S3 Access Grant location ID that's part of the Amazon S3 properties of a connection. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties.property.s3Uri">s3_uri</a></code> | <code>str</code> | The Amazon S3 URI that's part of the Amazon S3 properties of a connection. |

---

##### `register_s3_access_grant_location`<sup>Optional</sup> <a name="register_s3_access_grant_location" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties.property.registerS3AccessGrantLocation"></a>

```python
register_s3_access_grant_location: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to register the S3 Access Grant location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#register_s3_access_grant_location DatazoneConnection#register_s3_access_grant_location}

---

##### `s3_access_grant_location_id`<sup>Optional</sup> <a name="s3_access_grant_location_id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties.property.s3AccessGrantLocationId"></a>

```python
s3_access_grant_location_id: str
```

- *Type:* str

The Amazon S3 Access Grant location ID that's part of the Amazon S3 properties of a connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#s3_access_grant_location_id DatazoneConnection#s3_access_grant_location_id}

---

##### `s3_uri`<sup>Optional</sup> <a name="s3_uri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

The Amazon S3 URI that's part of the Amazon S3 properties of a connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#s3_uri DatazoneConnection#s3_uri}

---

### DatazoneConnectionPropsSparkEmrProperties <a name="DatazoneConnectionPropsSparkEmrProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsSparkEmrProperties(
  compute_arn: str = None,
  instance_profile_arn: str = None,
  java_virtual_env: str = None,
  log_uri: str = None,
  managed_endpoint_arn: str = None,
  python_virtual_env: str = None,
  runtime_role: str = None,
  trusted_certificates_s3_uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.computeArn">compute_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#compute_arn DatazoneConnection#compute_arn}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.instanceProfileArn">instance_profile_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#instance_profile_arn DatazoneConnection#instance_profile_arn}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.javaVirtualEnv">java_virtual_env</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#java_virtual_env DatazoneConnection#java_virtual_env}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.logUri">log_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#log_uri DatazoneConnection#log_uri}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.managedEndpointArn">managed_endpoint_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#managed_endpoint_arn DatazoneConnection#managed_endpoint_arn}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.pythonVirtualEnv">python_virtual_env</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#python_virtual_env DatazoneConnection#python_virtual_env}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.runtimeRole">runtime_role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#runtime_role DatazoneConnection#runtime_role}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.trustedCertificatesS3Uri">trusted_certificates_s3_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#trusted_certificates_s3_uri DatazoneConnection#trusted_certificates_s3_uri}. |

---

##### `compute_arn`<sup>Optional</sup> <a name="compute_arn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.computeArn"></a>

```python
compute_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#compute_arn DatazoneConnection#compute_arn}.

---

##### `instance_profile_arn`<sup>Optional</sup> <a name="instance_profile_arn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.instanceProfileArn"></a>

```python
instance_profile_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#instance_profile_arn DatazoneConnection#instance_profile_arn}.

---

##### `java_virtual_env`<sup>Optional</sup> <a name="java_virtual_env" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.javaVirtualEnv"></a>

```python
java_virtual_env: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#java_virtual_env DatazoneConnection#java_virtual_env}.

---

##### `log_uri`<sup>Optional</sup> <a name="log_uri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.logUri"></a>

```python
log_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#log_uri DatazoneConnection#log_uri}.

---

##### `managed_endpoint_arn`<sup>Optional</sup> <a name="managed_endpoint_arn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.managedEndpointArn"></a>

```python
managed_endpoint_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#managed_endpoint_arn DatazoneConnection#managed_endpoint_arn}.

---

##### `python_virtual_env`<sup>Optional</sup> <a name="python_virtual_env" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.pythonVirtualEnv"></a>

```python
python_virtual_env: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#python_virtual_env DatazoneConnection#python_virtual_env}.

---

##### `runtime_role`<sup>Optional</sup> <a name="runtime_role" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.runtimeRole"></a>

```python
runtime_role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#runtime_role DatazoneConnection#runtime_role}.

---

##### `trusted_certificates_s3_uri`<sup>Optional</sup> <a name="trusted_certificates_s3_uri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.trustedCertificatesS3Uri"></a>

```python
trusted_certificates_s3_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#trusted_certificates_s3_uri DatazoneConnection#trusted_certificates_s3_uri}.

---

### DatazoneConnectionPropsSparkGlueProperties <a name="DatazoneConnectionPropsSparkGlueProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsSparkGlueProperties(
  additional_args: DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs = None,
  glue_connection_name: str = None,
  glue_version: str = None,
  idle_timeout: typing.Union[int, float] = None,
  java_virtual_env: str = None,
  number_of_workers: typing.Union[int, float] = None,
  python_virtual_env: str = None,
  worker_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.additionalArgs">additional_args</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs">DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs</a></code> | Spark Glue Args. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.glueConnectionName">glue_connection_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#glue_connection_name DatazoneConnection#glue_connection_name}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.glueVersion">glue_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#glue_version DatazoneConnection#glue_version}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.idleTimeout">idle_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#idle_timeout DatazoneConnection#idle_timeout}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.javaVirtualEnv">java_virtual_env</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#java_virtual_env DatazoneConnection#java_virtual_env}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.numberOfWorkers">number_of_workers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#number_of_workers DatazoneConnection#number_of_workers}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.pythonVirtualEnv">python_virtual_env</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#python_virtual_env DatazoneConnection#python_virtual_env}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.workerType">worker_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#worker_type DatazoneConnection#worker_type}. |

---

##### `additional_args`<sup>Optional</sup> <a name="additional_args" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.additionalArgs"></a>

```python
additional_args: DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs">DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs</a>

Spark Glue Args.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#additional_args DatazoneConnection#additional_args}

---

##### `glue_connection_name`<sup>Optional</sup> <a name="glue_connection_name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.glueConnectionName"></a>

```python
glue_connection_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#glue_connection_name DatazoneConnection#glue_connection_name}.

---

##### `glue_version`<sup>Optional</sup> <a name="glue_version" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.glueVersion"></a>

```python
glue_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#glue_version DatazoneConnection#glue_version}.

---

##### `idle_timeout`<sup>Optional</sup> <a name="idle_timeout" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.idleTimeout"></a>

```python
idle_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#idle_timeout DatazoneConnection#idle_timeout}.

---

##### `java_virtual_env`<sup>Optional</sup> <a name="java_virtual_env" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.javaVirtualEnv"></a>

```python
java_virtual_env: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#java_virtual_env DatazoneConnection#java_virtual_env}.

---

##### `number_of_workers`<sup>Optional</sup> <a name="number_of_workers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.numberOfWorkers"></a>

```python
number_of_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#number_of_workers DatazoneConnection#number_of_workers}.

---

##### `python_virtual_env`<sup>Optional</sup> <a name="python_virtual_env" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.pythonVirtualEnv"></a>

```python
python_virtual_env: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#python_virtual_env DatazoneConnection#python_virtual_env}.

---

##### `worker_type`<sup>Optional</sup> <a name="worker_type" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.workerType"></a>

```python
worker_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#worker_type DatazoneConnection#worker_type}.

---

### DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs <a name="DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs(
  connection: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs.property.connection">connection</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#connection DatazoneConnection#connection}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs.property.connection"></a>

```python
connection: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#connection DatazoneConnection#connection}.

---

### DatazoneConnectionPropsWorkflowsMwaaProperties <a name="DatazoneConnectionPropsWorkflowsMwaaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties(
  mwaa_environment_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties.property.mwaaEnvironmentName">mwaa_environment_name</a></code> | <code>str</code> | The name of the MWAA environment. |

---

##### `mwaa_environment_name`<sup>Optional</sup> <a name="mwaa_environment_name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties.property.mwaaEnvironmentName"></a>

```python
mwaa_environment_name: str
```

- *Type:* str

The name of the MWAA environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#mwaa_environment_name DatazoneConnection#mwaa_environment_name}

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneConnectionAwsLocationOutputReference <a name="DatazoneConnectionAwsLocationOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionAwsLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resetAccessRole">reset_access_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resetAwsAccountId">reset_aws_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resetAwsRegion">reset_aws_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resetIamConnectionId">reset_iam_connection_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_role` <a name="reset_access_role" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resetAccessRole"></a>

```python
def reset_access_role() -> None
```

##### `reset_aws_account_id` <a name="reset_aws_account_id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resetAwsAccountId"></a>

```python
def reset_aws_account_id() -> None
```

##### `reset_aws_region` <a name="reset_aws_region" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resetAwsRegion"></a>

```python
def reset_aws_region() -> None
```

##### `reset_iam_connection_id` <a name="reset_iam_connection_id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resetIamConnectionId"></a>

```python
def reset_iam_connection_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.accessRoleInput">access_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.awsAccountIdInput">aws_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.awsRegionInput">aws_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.iamConnectionIdInput">iam_connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.accessRole">access_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.awsRegion">aws_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.iamConnectionId">iam_connection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation">DatazoneConnectionAwsLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_role_input`<sup>Optional</sup> <a name="access_role_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.accessRoleInput"></a>

```python
access_role_input: str
```

- *Type:* str

---

##### `aws_account_id_input`<sup>Optional</sup> <a name="aws_account_id_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.awsAccountIdInput"></a>

```python
aws_account_id_input: str
```

- *Type:* str

---

##### `aws_region_input`<sup>Optional</sup> <a name="aws_region_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.awsRegionInput"></a>

```python
aws_region_input: str
```

- *Type:* str

---

##### `iam_connection_id_input`<sup>Optional</sup> <a name="iam_connection_id_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.iamConnectionIdInput"></a>

```python
iam_connection_id_input: str
```

- *Type:* str

---

##### `access_role`<sup>Required</sup> <a name="access_role" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.accessRole"></a>

```python
access_role: str
```

- *Type:* str

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `aws_region`<sup>Required</sup> <a name="aws_region" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.awsRegion"></a>

```python
aws_region: str
```

- *Type:* str

---

##### `iam_connection_id`<sup>Required</sup> <a name="iam_connection_id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.iamConnectionId"></a>

```python
iam_connection_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneConnectionAwsLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation">DatazoneConnectionAwsLocation</a>

---


### DatazoneConnectionConfigurationsList <a name="DatazoneConnectionConfigurationsList" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatazoneConnectionConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatazoneConnectionConfigurations]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a>]

---


### DatazoneConnectionConfigurationsOutputReference <a name="DatazoneConnectionConfigurationsOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.resetClassification">reset_classification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.resetProperties">reset_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_classification` <a name="reset_classification" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.resetClassification"></a>

```python
def reset_classification() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.classificationInput">classification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.propertiesInput">properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.classification">classification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.properties">properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `classification_input`<sup>Optional</sup> <a name="classification_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.classificationInput"></a>

```python
classification_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.propertiesInput"></a>

```python
properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `classification`<sup>Required</sup> <a name="classification" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.classification"></a>

```python
classification: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.properties"></a>

```python
properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneConnectionConfigurations
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a>

---


### DatazoneConnectionPropsAmazonQPropertiesOutputReference <a name="DatazoneConnectionPropsAmazonQPropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.resetAuthMode">reset_auth_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.resetProfileArn">reset_profile_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_auth_mode` <a name="reset_auth_mode" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.resetAuthMode"></a>

```python
def reset_auth_mode() -> None
```

##### `reset_is_enabled` <a name="reset_is_enabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```

##### `reset_profile_arn` <a name="reset_profile_arn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.resetProfileArn"></a>

```python
def reset_profile_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.authModeInput">auth_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.profileArnInput">profile_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.authMode">auth_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.isEnabled">is_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.profileArn">profile_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties">DatazoneConnectionPropsAmazonQProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auth_mode_input`<sup>Optional</sup> <a name="auth_mode_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.authModeInput"></a>

```python
auth_mode_input: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `profile_arn_input`<sup>Optional</sup> <a name="profile_arn_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.profileArnInput"></a>

```python
profile_arn_input: str
```

- *Type:* str

---

##### `auth_mode`<sup>Required</sup> <a name="auth_mode" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.authMode"></a>

```python
auth_mode: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.isEnabled"></a>

```python
is_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `profile_arn`<sup>Required</sup> <a name="profile_arn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.profileArn"></a>

```python
profile_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneConnectionPropsAmazonQProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties">DatazoneConnectionPropsAmazonQProperties</a>

---


### DatazoneConnectionPropsAthenaPropertiesOutputReference <a name="DatazoneConnectionPropsAthenaPropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.resetWorkgroupName">reset_workgroup_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workgroup_name` <a name="reset_workgroup_name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.resetWorkgroupName"></a>

```python
def reset_workgroup_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.workgroupNameInput">workgroup_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.workgroupName">workgroup_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties">DatazoneConnectionPropsAthenaProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workgroup_name_input`<sup>Optional</sup> <a name="workgroup_name_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.workgroupNameInput"></a>

```python
workgroup_name_input: str
```

- *Type:* str

---

##### `workgroup_name`<sup>Required</sup> <a name="workgroup_name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.workgroupName"></a>

```python
workgroup_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneConnectionPropsAthenaProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties">DatazoneConnectionPropsAthenaProperties</a>

---


### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resetUserName">reset_user_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_password` <a name="reset_password" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_user_name` <a name="reset_user_name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resetUserName"></a>

```python
def reset_user_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a>

---


### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resetAuthorizationCode">reset_authorization_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resetRedirectUri">reset_redirect_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authorization_code` <a name="reset_authorization_code" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resetAuthorizationCode"></a>

```python
def reset_authorization_code() -> None
```

##### `reset_redirect_uri` <a name="reset_redirect_uri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resetRedirectUri"></a>

```python
def reset_redirect_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCodeInput">authorization_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUriInput">redirect_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCode">authorization_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUri">redirect_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_code_input`<sup>Optional</sup> <a name="authorization_code_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCodeInput"></a>

```python
authorization_code_input: str
```

- *Type:* str

---

##### `redirect_uri_input`<sup>Optional</sup> <a name="redirect_uri_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUriInput"></a>

```python
redirect_uri_input: str
```

- *Type:* str

---

##### `authorization_code`<sup>Required</sup> <a name="authorization_code" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCode"></a>

```python
authorization_code: str
```

- *Type:* str

---

##### `redirect_uri`<sup>Required</sup> <a name="redirect_uri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUri"></a>

```python
redirect_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a>

---


### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resetAwsManagedClientApplicationReference">reset_aws_managed_client_application_reference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resetUserManagedClientApplicationClientId">reset_user_managed_client_application_client_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aws_managed_client_application_reference` <a name="reset_aws_managed_client_application_reference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resetAwsManagedClientApplicationReference"></a>

```python
def reset_aws_managed_client_application_reference() -> None
```

##### `reset_user_managed_client_application_client_id` <a name="reset_user_managed_client_application_client_id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resetUserManagedClientApplicationClientId"></a>

```python
def reset_user_managed_client_application_client_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.awsManagedClientApplicationReferenceInput">aws_managed_client_application_reference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.userManagedClientApplicationClientIdInput">user_managed_client_application_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.awsManagedClientApplicationReference">aws_managed_client_application_reference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.userManagedClientApplicationClientId">user_managed_client_application_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_managed_client_application_reference_input`<sup>Optional</sup> <a name="aws_managed_client_application_reference_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.awsManagedClientApplicationReferenceInput"></a>

```python
aws_managed_client_application_reference_input: str
```

- *Type:* str

---

##### `user_managed_client_application_client_id_input`<sup>Optional</sup> <a name="user_managed_client_application_client_id_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.userManagedClientApplicationClientIdInput"></a>

```python
user_managed_client_application_client_id_input: str
```

- *Type:* str

---

##### `aws_managed_client_application_reference`<sup>Required</sup> <a name="aws_managed_client_application_reference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.awsManagedClientApplicationReference"></a>

```python
aws_managed_client_application_reference: str
```

- *Type:* str

---

##### `user_managed_client_application_client_id`<sup>Required</sup> <a name="user_managed_client_application_client_id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.userManagedClientApplicationClientId"></a>

```python
user_managed_client_application_client_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a>

---


### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetAccessToken">reset_access_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetJwtToken">reset_jwt_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetRefreshToken">reset_refresh_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetUserManagedClientApplicationClientSecret">reset_user_managed_client_application_client_secret</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_token` <a name="reset_access_token" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetAccessToken"></a>

```python
def reset_access_token() -> None
```

##### `reset_jwt_token` <a name="reset_jwt_token" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetJwtToken"></a>

```python
def reset_jwt_token() -> None
```

##### `reset_refresh_token` <a name="reset_refresh_token" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetRefreshToken"></a>

```python
def reset_refresh_token() -> None
```

##### `reset_user_managed_client_application_client_secret` <a name="reset_user_managed_client_application_client_secret" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetUserManagedClientApplicationClientSecret"></a>

```python
def reset_user_managed_client_application_client_secret() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.accessTokenInput">access_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.jwtTokenInput">jwt_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.refreshTokenInput">refresh_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.userManagedClientApplicationClientSecretInput">user_managed_client_application_client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.accessToken">access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.jwtToken">jwt_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.refreshToken">refresh_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.userManagedClientApplicationClientSecret">user_managed_client_application_client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_token_input`<sup>Optional</sup> <a name="access_token_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.accessTokenInput"></a>

```python
access_token_input: str
```

- *Type:* str

---

##### `jwt_token_input`<sup>Optional</sup> <a name="jwt_token_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.jwtTokenInput"></a>

```python
jwt_token_input: str
```

- *Type:* str

---

##### `refresh_token_input`<sup>Optional</sup> <a name="refresh_token_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.refreshTokenInput"></a>

```python
refresh_token_input: str
```

- *Type:* str

---

##### `user_managed_client_application_client_secret_input`<sup>Optional</sup> <a name="user_managed_client_application_client_secret_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.userManagedClientApplicationClientSecretInput"></a>

```python
user_managed_client_application_client_secret_input: str
```

- *Type:* str

---

##### `access_token`<sup>Required</sup> <a name="access_token" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

---

##### `jwt_token`<sup>Required</sup> <a name="jwt_token" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.jwtToken"></a>

```python
jwt_token: str
```

- *Type:* str

---

##### `refresh_token`<sup>Required</sup> <a name="refresh_token" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.refreshToken"></a>

```python
refresh_token: str
```

- *Type:* str

---

##### `user_managed_client_application_client_secret`<sup>Required</sup> <a name="user_managed_client_application_client_secret" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.userManagedClientApplicationClientSecret"></a>

```python
user_managed_client_application_client_secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a>

---


### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putAuthorizationCodeProperties">put_authorization_code_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2ClientApplication">put_o_auth2_client_application</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2Credentials">put_o_auth2_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetAuthorizationCodeProperties">reset_authorization_code_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2ClientApplication">reset_o_auth2_client_application</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2Credentials">reset_o_auth2_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2GrantType">reset_o_auth2_grant_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetTokenUrl">reset_token_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetTokenUrlParametersMap">reset_token_url_parameters_map</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authorization_code_properties` <a name="put_authorization_code_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putAuthorizationCodeProperties"></a>

```python
def put_authorization_code_properties(
  authorization_code: str = None,
  redirect_uri: str = None
) -> None
```

###### `authorization_code`<sup>Optional</sup> <a name="authorization_code" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putAuthorizationCodeProperties.parameter.authorizationCode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#authorization_code DatazoneConnection#authorization_code}.

---

###### `redirect_uri`<sup>Optional</sup> <a name="redirect_uri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putAuthorizationCodeProperties.parameter.redirectUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#redirect_uri DatazoneConnection#redirect_uri}.

---

##### `put_o_auth2_client_application` <a name="put_o_auth2_client_application" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2ClientApplication"></a>

```python
def put_o_auth2_client_application(
  aws_managed_client_application_reference: str = None,
  user_managed_client_application_client_id: str = None
) -> None
```

###### `aws_managed_client_application_reference`<sup>Optional</sup> <a name="aws_managed_client_application_reference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2ClientApplication.parameter.awsManagedClientApplicationReference"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#aws_managed_client_application_reference DatazoneConnection#aws_managed_client_application_reference}.

---

###### `user_managed_client_application_client_id`<sup>Optional</sup> <a name="user_managed_client_application_client_id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2ClientApplication.parameter.userManagedClientApplicationClientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#user_managed_client_application_client_id DatazoneConnection#user_managed_client_application_client_id}.

---

##### `put_o_auth2_credentials` <a name="put_o_auth2_credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2Credentials"></a>

```python
def put_o_auth2_credentials(
  access_token: str = None,
  jwt_token: str = None,
  refresh_token: str = None,
  user_managed_client_application_client_secret: str = None
) -> None
```

###### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2Credentials.parameter.accessToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#access_token DatazoneConnection#access_token}.

---

###### `jwt_token`<sup>Optional</sup> <a name="jwt_token" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2Credentials.parameter.jwtToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#jwt_token DatazoneConnection#jwt_token}.

---

###### `refresh_token`<sup>Optional</sup> <a name="refresh_token" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2Credentials.parameter.refreshToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#refresh_token DatazoneConnection#refresh_token}.

---

###### `user_managed_client_application_client_secret`<sup>Optional</sup> <a name="user_managed_client_application_client_secret" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2Credentials.parameter.userManagedClientApplicationClientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#user_managed_client_application_client_secret DatazoneConnection#user_managed_client_application_client_secret}.

---

##### `reset_authorization_code_properties` <a name="reset_authorization_code_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetAuthorizationCodeProperties"></a>

```python
def reset_authorization_code_properties() -> None
```

##### `reset_o_auth2_client_application` <a name="reset_o_auth2_client_application" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2ClientApplication"></a>

```python
def reset_o_auth2_client_application() -> None
```

##### `reset_o_auth2_credentials` <a name="reset_o_auth2_credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2Credentials"></a>

```python
def reset_o_auth2_credentials() -> None
```

##### `reset_o_auth2_grant_type` <a name="reset_o_auth2_grant_type" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2GrantType"></a>

```python
def reset_o_auth2_grant_type() -> None
```

##### `reset_token_url` <a name="reset_token_url" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetTokenUrl"></a>

```python
def reset_token_url() -> None
```

##### `reset_token_url_parameters_map` <a name="reset_token_url_parameters_map" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetTokenUrlParametersMap"></a>

```python
def reset_token_url_parameters_map() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.authorizationCodeProperties">authorization_code_properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2ClientApplication">o_auth2_client_application</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2Credentials">o_auth2_credentials</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.authorizationCodePropertiesInput">authorization_code_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2ClientApplicationInput">o_auth2_client_application_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2CredentialsInput">o_auth2_credentials_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2GrantTypeInput">o_auth2_grant_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlInput">token_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlParametersMapInput">token_url_parameters_map_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2GrantType">o_auth2_grant_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrl">token_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlParametersMap">token_url_parameters_map</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_code_properties`<sup>Required</sup> <a name="authorization_code_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.authorizationCodeProperties"></a>

```python
authorization_code_properties: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference</a>

---

##### `o_auth2_client_application`<sup>Required</sup> <a name="o_auth2_client_application" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2ClientApplication"></a>

```python
o_auth2_client_application: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference</a>

---

##### `o_auth2_credentials`<sup>Required</sup> <a name="o_auth2_credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2Credentials"></a>

```python
o_auth2_credentials: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference</a>

---

##### `authorization_code_properties_input`<sup>Optional</sup> <a name="authorization_code_properties_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.authorizationCodePropertiesInput"></a>

```python
authorization_code_properties_input: IResolvable | DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a>

---

##### `o_auth2_client_application_input`<sup>Optional</sup> <a name="o_auth2_client_application_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2ClientApplicationInput"></a>

```python
o_auth2_client_application_input: IResolvable | DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a>

---

##### `o_auth2_credentials_input`<sup>Optional</sup> <a name="o_auth2_credentials_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2CredentialsInput"></a>

```python
o_auth2_credentials_input: IResolvable | DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a>

---

##### `o_auth2_grant_type_input`<sup>Optional</sup> <a name="o_auth2_grant_type_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2GrantTypeInput"></a>

```python
o_auth2_grant_type_input: str
```

- *Type:* str

---

##### `token_url_input`<sup>Optional</sup> <a name="token_url_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlInput"></a>

```python
token_url_input: str
```

- *Type:* str

---

##### `token_url_parameters_map_input`<sup>Optional</sup> <a name="token_url_parameters_map_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlParametersMapInput"></a>

```python
token_url_parameters_map_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `o_auth2_grant_type`<sup>Required</sup> <a name="o_auth2_grant_type" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2GrantType"></a>

```python
o_auth2_grant_type: str
```

- *Type:* str

---

##### `token_url`<sup>Required</sup> <a name="token_url" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrl"></a>

```python
token_url: str
```

- *Type:* str

---

##### `token_url_parameters_map`<sup>Required</sup> <a name="token_url_parameters_map" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlParametersMap"></a>

```python
token_url_parameters_map: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties</a>

---


### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.putBasicAuthenticationCredentials">put_basic_authentication_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.putOAuth2Properties">put_o_auth2_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetAuthenticationType">reset_authentication_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetBasicAuthenticationCredentials">reset_basic_authentication_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetCustomAuthenticationCredentials">reset_custom_authentication_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetOAuth2Properties">reset_o_auth2_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetSecretArn">reset_secret_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_basic_authentication_credentials` <a name="put_basic_authentication_credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.putBasicAuthenticationCredentials"></a>

```python
def put_basic_authentication_credentials(
  password: str = None,
  user_name: str = None
) -> None
```

###### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.putBasicAuthenticationCredentials.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#password DatazoneConnection#password}.

---

###### `user_name`<sup>Optional</sup> <a name="user_name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.putBasicAuthenticationCredentials.parameter.userName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#user_name DatazoneConnection#user_name}.

---

##### `put_o_auth2_properties` <a name="put_o_auth2_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.putOAuth2Properties"></a>

```python
def put_o_auth2_properties(
  authorization_code_properties: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties = None,
  o_auth2_client_application: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication = None,
  o_auth2_credentials: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials = None,
  o_auth2_grant_type: str = None,
  token_url: str = None,
  token_url_parameters_map: typing.Mapping[str] = None
) -> None
```

###### `authorization_code_properties`<sup>Optional</sup> <a name="authorization_code_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.putOAuth2Properties.parameter.authorizationCodeProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a>

Authorization Code Properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#authorization_code_properties DatazoneConnection#authorization_code_properties}

---

###### `o_auth2_client_application`<sup>Optional</sup> <a name="o_auth2_client_application" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.putOAuth2Properties.parameter.oAuth2ClientApplication"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a>

OAuth2 Client Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#o_auth_2_client_application DatazoneConnection#o_auth_2_client_application}

---

###### `o_auth2_credentials`<sup>Optional</sup> <a name="o_auth2_credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.putOAuth2Properties.parameter.oAuth2Credentials"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a>

Glue OAuth2 Credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#o_auth_2_credentials DatazoneConnection#o_auth_2_credentials}

---

###### `o_auth2_grant_type`<sup>Optional</sup> <a name="o_auth2_grant_type" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.putOAuth2Properties.parameter.oAuth2GrantType"></a>

- *Type:* str

OAuth2 Grant Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#o_auth_2_grant_type DatazoneConnection#o_auth_2_grant_type}

---

###### `token_url`<sup>Optional</sup> <a name="token_url" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.putOAuth2Properties.parameter.tokenUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#token_url DatazoneConnection#token_url}.

---

###### `token_url_parameters_map`<sup>Optional</sup> <a name="token_url_parameters_map" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.putOAuth2Properties.parameter.tokenUrlParametersMap"></a>

- *Type:* typing.Mapping[str]

The token URL parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#token_url_parameters_map DatazoneConnection#token_url_parameters_map}

---

##### `reset_authentication_type` <a name="reset_authentication_type" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetAuthenticationType"></a>

```python
def reset_authentication_type() -> None
```

##### `reset_basic_authentication_credentials` <a name="reset_basic_authentication_credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetBasicAuthenticationCredentials"></a>

```python
def reset_basic_authentication_credentials() -> None
```

##### `reset_custom_authentication_credentials` <a name="reset_custom_authentication_credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetCustomAuthenticationCredentials"></a>

```python
def reset_custom_authentication_credentials() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_o_auth2_properties` <a name="reset_o_auth2_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetOAuth2Properties"></a>

```python
def reset_o_auth2_properties() -> None
```

##### `reset_secret_arn` <a name="reset_secret_arn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetSecretArn"></a>

```python
def reset_secret_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentials">basic_authentication_credentials</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.oAuth2Properties">o_auth2_properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.authenticationTypeInput">authentication_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentialsInput">basic_authentication_credentials_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.customAuthenticationCredentialsInput">custom_authentication_credentials_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.oAuth2PropertiesInput">o_auth2_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.secretArnInput">secret_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.authenticationType">authentication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.customAuthenticationCredentials">custom_authentication_credentials</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `basic_authentication_credentials`<sup>Required</sup> <a name="basic_authentication_credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentials"></a>

```python
basic_authentication_credentials: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference</a>

---

##### `o_auth2_properties`<sup>Required</sup> <a name="o_auth2_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.oAuth2Properties"></a>

```python
o_auth2_properties: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference</a>

---

##### `authentication_type_input`<sup>Optional</sup> <a name="authentication_type_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.authenticationTypeInput"></a>

```python
authentication_type_input: str
```

- *Type:* str

---

##### `basic_authentication_credentials_input`<sup>Optional</sup> <a name="basic_authentication_credentials_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentialsInput"></a>

```python
basic_authentication_credentials_input: IResolvable | DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a>

---

##### `custom_authentication_credentials_input`<sup>Optional</sup> <a name="custom_authentication_credentials_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.customAuthenticationCredentialsInput"></a>

```python
custom_authentication_credentials_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `o_auth2_properties_input`<sup>Optional</sup> <a name="o_auth2_properties_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.oAuth2PropertiesInput"></a>

```python
o_auth2_properties_input: IResolvable | DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties</a>

---

##### `secret_arn_input`<sup>Optional</sup> <a name="secret_arn_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.secretArnInput"></a>

```python
secret_arn_input: str
```

- *Type:* str

---

##### `authentication_type`<sup>Required</sup> <a name="authentication_type" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.authenticationType"></a>

```python
authentication_type: str
```

- *Type:* str

---

##### `custom_authentication_credentials`<sup>Required</sup> <a name="custom_authentication_credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.customAuthenticationCredentials"></a>

```python
custom_authentication_credentials: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration</a>

---


### DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.putAuthenticationConfiguration">put_authentication_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.putPhysicalConnectionRequirements">put_physical_connection_requirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetAthenaProperties">reset_athena_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetAuthenticationConfiguration">reset_authentication_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetConnectionProperties">reset_connection_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetConnectionType">reset_connection_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetMatchCriteria">reset_match_criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetPhysicalConnectionRequirements">reset_physical_connection_requirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetPythonProperties">reset_python_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetSparkProperties">reset_spark_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetValidateCredentials">reset_validate_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetValidateForComputeEnvironments">reset_validate_for_compute_environments</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_authentication_configuration` <a name="put_authentication_configuration" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.putAuthenticationConfiguration"></a>

```python
def put_authentication_configuration(
  authentication_type: str = None,
  basic_authentication_credentials: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials = None,
  custom_authentication_credentials: typing.Mapping[str] = None,
  kms_key_arn: str = None,
  o_auth2_properties: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties = None,
  secret_arn: str = None
) -> None
```

###### `authentication_type`<sup>Optional</sup> <a name="authentication_type" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.putAuthenticationConfiguration.parameter.authenticationType"></a>

- *Type:* str

Authentication Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#authentication_type DatazoneConnection#authentication_type}

---

###### `basic_authentication_credentials`<sup>Optional</sup> <a name="basic_authentication_credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.putAuthenticationConfiguration.parameter.basicAuthenticationCredentials"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a>

Basic Authentication Credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#basic_authentication_credentials DatazoneConnection#basic_authentication_credentials}

---

###### `custom_authentication_credentials`<sup>Optional</sup> <a name="custom_authentication_credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.putAuthenticationConfiguration.parameter.customAuthenticationCredentials"></a>

- *Type:* typing.Mapping[str]

Credential Map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#custom_authentication_credentials DatazoneConnection#custom_authentication_credentials}

---

###### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.putAuthenticationConfiguration.parameter.kmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#kms_key_arn DatazoneConnection#kms_key_arn}.

---

###### `o_auth2_properties`<sup>Optional</sup> <a name="o_auth2_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.putAuthenticationConfiguration.parameter.oAuth2Properties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties</a>

OAuth2 Properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#o_auth_2_properties DatazoneConnection#o_auth_2_properties}

---

###### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.putAuthenticationConfiguration.parameter.secretArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#secret_arn DatazoneConnection#secret_arn}.

---

##### `put_physical_connection_requirements` <a name="put_physical_connection_requirements" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.putPhysicalConnectionRequirements"></a>

```python
def put_physical_connection_requirements(
  availability_zone: str = None,
  security_group_id_list: typing.List[str] = None,
  subnet_id: str = None,
  subnet_id_list: typing.List[str] = None
) -> None
```

###### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.putPhysicalConnectionRequirements.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#availability_zone DatazoneConnection#availability_zone}.

---

###### `security_group_id_list`<sup>Optional</sup> <a name="security_group_id_list" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.putPhysicalConnectionRequirements.parameter.securityGroupIdList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#security_group_id_list DatazoneConnection#security_group_id_list}.

---

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.putPhysicalConnectionRequirements.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#subnet_id DatazoneConnection#subnet_id}.

---

###### `subnet_id_list`<sup>Optional</sup> <a name="subnet_id_list" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.putPhysicalConnectionRequirements.parameter.subnetIdList"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#subnet_id_list DatazoneConnection#subnet_id_list}.

---

##### `reset_athena_properties` <a name="reset_athena_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetAthenaProperties"></a>

```python
def reset_athena_properties() -> None
```

##### `reset_authentication_configuration` <a name="reset_authentication_configuration" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetAuthenticationConfiguration"></a>

```python
def reset_authentication_configuration() -> None
```

##### `reset_connection_properties` <a name="reset_connection_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetConnectionProperties"></a>

```python
def reset_connection_properties() -> None
```

##### `reset_connection_type` <a name="reset_connection_type" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetConnectionType"></a>

```python
def reset_connection_type() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_match_criteria` <a name="reset_match_criteria" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetMatchCriteria"></a>

```python
def reset_match_criteria() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_physical_connection_requirements` <a name="reset_physical_connection_requirements" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetPhysicalConnectionRequirements"></a>

```python
def reset_physical_connection_requirements() -> None
```

##### `reset_python_properties` <a name="reset_python_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetPythonProperties"></a>

```python
def reset_python_properties() -> None
```

##### `reset_spark_properties` <a name="reset_spark_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetSparkProperties"></a>

```python
def reset_spark_properties() -> None
```

##### `reset_validate_credentials` <a name="reset_validate_credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetValidateCredentials"></a>

```python
def reset_validate_credentials() -> None
```

##### `reset_validate_for_compute_environments` <a name="reset_validate_for_compute_environments" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetValidateForComputeEnvironments"></a>

```python
def reset_validate_for_compute_environments() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.authenticationConfiguration">authentication_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.physicalConnectionRequirements">physical_connection_requirements</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.athenaPropertiesInput">athena_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.authenticationConfigurationInput">authentication_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionPropertiesInput">connection_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionTypeInput">connection_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.matchCriteriaInput">match_criteria_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.physicalConnectionRequirementsInput">physical_connection_requirements_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements">DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.pythonPropertiesInput">python_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.sparkPropertiesInput">spark_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateCredentialsInput">validate_credentials_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateForComputeEnvironmentsInput">validate_for_compute_environments_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.athenaProperties">athena_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionProperties">connection_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionType">connection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.matchCriteria">match_criteria</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.pythonProperties">python_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.sparkProperties">spark_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateCredentials">validate_credentials</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateForComputeEnvironments">validate_for_compute_environments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput">DatazoneConnectionPropsGluePropertiesGlueConnectionInput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_configuration`<sup>Required</sup> <a name="authentication_configuration" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.authenticationConfiguration"></a>

```python
authentication_configuration: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference</a>

---

##### `physical_connection_requirements`<sup>Required</sup> <a name="physical_connection_requirements" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.physicalConnectionRequirements"></a>

```python
physical_connection_requirements: DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference</a>

---

##### `athena_properties_input`<sup>Optional</sup> <a name="athena_properties_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.athenaPropertiesInput"></a>

```python
athena_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `authentication_configuration_input`<sup>Optional</sup> <a name="authentication_configuration_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.authenticationConfigurationInput"></a>

```python
authentication_configuration_input: IResolvable | DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration</a>

---

##### `connection_properties_input`<sup>Optional</sup> <a name="connection_properties_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionPropertiesInput"></a>

```python
connection_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `connection_type_input`<sup>Optional</sup> <a name="connection_type_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionTypeInput"></a>

```python
connection_type_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `match_criteria_input`<sup>Optional</sup> <a name="match_criteria_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.matchCriteriaInput"></a>

```python
match_criteria_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `physical_connection_requirements_input`<sup>Optional</sup> <a name="physical_connection_requirements_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.physicalConnectionRequirementsInput"></a>

```python
physical_connection_requirements_input: IResolvable | DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements">DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements</a>

---

##### `python_properties_input`<sup>Optional</sup> <a name="python_properties_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.pythonPropertiesInput"></a>

```python
python_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `spark_properties_input`<sup>Optional</sup> <a name="spark_properties_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.sparkPropertiesInput"></a>

```python
spark_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `validate_credentials_input`<sup>Optional</sup> <a name="validate_credentials_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateCredentialsInput"></a>

```python
validate_credentials_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `validate_for_compute_environments_input`<sup>Optional</sup> <a name="validate_for_compute_environments_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateForComputeEnvironmentsInput"></a>

```python
validate_for_compute_environments_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `athena_properties`<sup>Required</sup> <a name="athena_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.athenaProperties"></a>

```python
athena_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `connection_properties`<sup>Required</sup> <a name="connection_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionProperties"></a>

```python
connection_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `match_criteria`<sup>Required</sup> <a name="match_criteria" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.matchCriteria"></a>

```python
match_criteria: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `python_properties`<sup>Required</sup> <a name="python_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.pythonProperties"></a>

```python
python_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `spark_properties`<sup>Required</sup> <a name="spark_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.sparkProperties"></a>

```python
spark_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `validate_credentials`<sup>Required</sup> <a name="validate_credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateCredentials"></a>

```python
validate_credentials: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `validate_for_compute_environments`<sup>Required</sup> <a name="validate_for_compute_environments" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateForComputeEnvironments"></a>

```python
validate_for_compute_environments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneConnectionPropsGluePropertiesGlueConnectionInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput">DatazoneConnectionPropsGluePropertiesGlueConnectionInput</a>

---


### DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resetSecurityGroupIdList">reset_security_group_id_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resetSubnetIdList">reset_subnet_id_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_security_group_id_list` <a name="reset_security_group_id_list" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resetSecurityGroupIdList"></a>

```python
def reset_security_group_id_list() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_subnet_id_list` <a name="reset_subnet_id_list" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resetSubnetIdList"></a>

```python
def reset_subnet_id_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.securityGroupIdListInput">security_group_id_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetIdListInput">subnet_id_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.securityGroupIdList">security_group_id_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetIdList">subnet_id_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements">DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `security_group_id_list_input`<sup>Optional</sup> <a name="security_group_id_list_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.securityGroupIdListInput"></a>

```python
security_group_id_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `subnet_id_list_input`<sup>Optional</sup> <a name="subnet_id_list_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetIdListInput"></a>

```python
subnet_id_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `security_group_id_list`<sup>Required</sup> <a name="security_group_id_list" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.securityGroupIdList"></a>

```python
security_group_id_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `subnet_id_list`<sup>Required</sup> <a name="subnet_id_list" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetIdList"></a>

```python
subnet_id_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements">DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements</a>

---


### DatazoneConnectionPropsGluePropertiesOutputReference <a name="DatazoneConnectionPropsGluePropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.putGlueConnectionInput">put_glue_connection_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.resetGlueConnectionInput">reset_glue_connection_input</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_glue_connection_input` <a name="put_glue_connection_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.putGlueConnectionInput"></a>

```python
def put_glue_connection_input(
  athena_properties: typing.Mapping[str] = None,
  authentication_configuration: DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration = None,
  connection_properties: typing.Mapping[str] = None,
  connection_type: str = None,
  description: str = None,
  match_criteria: str = None,
  name: str = None,
  physical_connection_requirements: DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements = None,
  python_properties: typing.Mapping[str] = None,
  spark_properties: typing.Mapping[str] = None,
  validate_credentials: bool | IResolvable = None,
  validate_for_compute_environments: typing.List[str] = None
) -> None
```

###### `athena_properties`<sup>Optional</sup> <a name="athena_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.putGlueConnectionInput.parameter.athenaProperties"></a>

- *Type:* typing.Mapping[str]

Property Map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#athena_properties DatazoneConnection#athena_properties}

---

###### `authentication_configuration`<sup>Optional</sup> <a name="authentication_configuration" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.putGlueConnectionInput.parameter.authenticationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration</a>

Authentication Configuration Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#authentication_configuration DatazoneConnection#authentication_configuration}

---

###### `connection_properties`<sup>Optional</sup> <a name="connection_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.putGlueConnectionInput.parameter.connectionProperties"></a>

- *Type:* typing.Mapping[str]

Connection Properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#connection_properties DatazoneConnection#connection_properties}

---

###### `connection_type`<sup>Optional</sup> <a name="connection_type" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.putGlueConnectionInput.parameter.connectionType"></a>

- *Type:* str

Glue Connection Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#connection_type DatazoneConnection#connection_type}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.putGlueConnectionInput.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#description DatazoneConnection#description}.

---

###### `match_criteria`<sup>Optional</sup> <a name="match_criteria" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.putGlueConnectionInput.parameter.matchCriteria"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#match_criteria DatazoneConnection#match_criteria}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.putGlueConnectionInput.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#name DatazoneConnection#name}.

---

###### `physical_connection_requirements`<sup>Optional</sup> <a name="physical_connection_requirements" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.putGlueConnectionInput.parameter.physicalConnectionRequirements"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements">DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements</a>

Physical Connection Requirements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#physical_connection_requirements DatazoneConnection#physical_connection_requirements}

---

###### `python_properties`<sup>Optional</sup> <a name="python_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.putGlueConnectionInput.parameter.pythonProperties"></a>

- *Type:* typing.Mapping[str]

Property Map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#python_properties DatazoneConnection#python_properties}

---

###### `spark_properties`<sup>Optional</sup> <a name="spark_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.putGlueConnectionInput.parameter.sparkProperties"></a>

- *Type:* typing.Mapping[str]

Property Map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#spark_properties DatazoneConnection#spark_properties}

---

###### `validate_credentials`<sup>Optional</sup> <a name="validate_credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.putGlueConnectionInput.parameter.validateCredentials"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#validate_credentials DatazoneConnection#validate_credentials}.

---

###### `validate_for_compute_environments`<sup>Optional</sup> <a name="validate_for_compute_environments" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.putGlueConnectionInput.parameter.validateForComputeEnvironments"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#validate_for_compute_environments DatazoneConnection#validate_for_compute_environments}.

---

##### `reset_glue_connection_input` <a name="reset_glue_connection_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.resetGlueConnectionInput"></a>

```python
def reset_glue_connection_input() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.glueConnectionInput">glue_connection_input</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.glueConnectionInputInput">glue_connection_input_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput">DatazoneConnectionPropsGluePropertiesGlueConnectionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties">DatazoneConnectionPropsGlueProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `glue_connection_input`<sup>Required</sup> <a name="glue_connection_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.glueConnectionInput"></a>

```python
glue_connection_input: DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference</a>

---

##### `glue_connection_input_input`<sup>Optional</sup> <a name="glue_connection_input_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.glueConnectionInputInput"></a>

```python
glue_connection_input_input: IResolvable | DatazoneConnectionPropsGluePropertiesGlueConnectionInput
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput">DatazoneConnectionPropsGluePropertiesGlueConnectionInput</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneConnectionPropsGlueProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties">DatazoneConnectionPropsGlueProperties</a>

---


### DatazoneConnectionPropsHyperPodPropertiesOutputReference <a name="DatazoneConnectionPropsHyperPodPropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.resetClusterName">reset_cluster_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cluster_name` <a name="reset_cluster_name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.resetClusterName"></a>

```python
def reset_cluster_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties">DatazoneConnectionPropsHyperPodProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneConnectionPropsHyperPodProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties">DatazoneConnectionPropsHyperPodProperties</a>

---


### DatazoneConnectionPropsIamPropertiesOutputReference <a name="DatazoneConnectionPropsIamPropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.resetGlueLineageSyncEnabled">reset_glue_lineage_sync_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_glue_lineage_sync_enabled` <a name="reset_glue_lineage_sync_enabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.resetGlueLineageSyncEnabled"></a>

```python
def reset_glue_lineage_sync_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.glueLineageSyncEnabledInput">glue_lineage_sync_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.glueLineageSyncEnabled">glue_lineage_sync_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties">DatazoneConnectionPropsIamProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `glue_lineage_sync_enabled_input`<sup>Optional</sup> <a name="glue_lineage_sync_enabled_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.glueLineageSyncEnabledInput"></a>

```python
glue_lineage_sync_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `glue_lineage_sync_enabled`<sup>Required</sup> <a name="glue_lineage_sync_enabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.glueLineageSyncEnabled"></a>

```python
glue_lineage_sync_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneConnectionPropsIamProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties">DatazoneConnectionPropsIamProperties</a>

---


### DatazoneConnectionPropsLakehousePropertiesOutputReference <a name="DatazoneConnectionPropsLakehousePropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.resetGlueLineageSyncEnabled">reset_glue_lineage_sync_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_glue_lineage_sync_enabled` <a name="reset_glue_lineage_sync_enabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.resetGlueLineageSyncEnabled"></a>

```python
def reset_glue_lineage_sync_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.glueLineageSyncEnabledInput">glue_lineage_sync_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.glueLineageSyncEnabled">glue_lineage_sync_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties">DatazoneConnectionPropsLakehouseProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `glue_lineage_sync_enabled_input`<sup>Optional</sup> <a name="glue_lineage_sync_enabled_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.glueLineageSyncEnabledInput"></a>

```python
glue_lineage_sync_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `glue_lineage_sync_enabled`<sup>Required</sup> <a name="glue_lineage_sync_enabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.glueLineageSyncEnabled"></a>

```python
glue_lineage_sync_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneConnectionPropsLakehouseProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties">DatazoneConnectionPropsLakehouseProperties</a>

---


### DatazoneConnectionPropsMlflowPropertiesOutputReference <a name="DatazoneConnectionPropsMlflowPropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.resetTrackingServerArn">reset_tracking_server_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tracking_server_arn` <a name="reset_tracking_server_arn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.resetTrackingServerArn"></a>

```python
def reset_tracking_server_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.trackingServerArnInput">tracking_server_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.trackingServerArn">tracking_server_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties">DatazoneConnectionPropsMlflowProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tracking_server_arn_input`<sup>Optional</sup> <a name="tracking_server_arn_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.trackingServerArnInput"></a>

```python
tracking_server_arn_input: str
```

- *Type:* str

---

##### `tracking_server_arn`<sup>Required</sup> <a name="tracking_server_arn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.trackingServerArn"></a>

```python
tracking_server_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneConnectionPropsMlflowProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties">DatazoneConnectionPropsMlflowProperties</a>

---


### DatazoneConnectionPropsOutputReference <a name="DatazoneConnectionPropsOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putAmazonQProperties">put_amazon_q_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putAthenaProperties">put_athena_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putGlueProperties">put_glue_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putHyperPodProperties">put_hyper_pod_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putIamProperties">put_iam_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putLakehouseProperties">put_lakehouse_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putMlflowProperties">put_mlflow_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putRedshiftProperties">put_redshift_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putS3Properties">put_s3_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkEmrProperties">put_spark_emr_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkGlueProperties">put_spark_glue_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putWorkflowsMwaaProperties">put_workflows_mwaa_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetAmazonQProperties">reset_amazon_q_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetAthenaProperties">reset_athena_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetGlueProperties">reset_glue_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetHyperPodProperties">reset_hyper_pod_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetIamProperties">reset_iam_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetLakehouseProperties">reset_lakehouse_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetMlflowProperties">reset_mlflow_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetRedshiftProperties">reset_redshift_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetS3Properties">reset_s3_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetSparkEmrProperties">reset_spark_emr_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetSparkGlueProperties">reset_spark_glue_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetWorkflowsMwaaProperties">reset_workflows_mwaa_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetWorkflowsServerlessProperties">reset_workflows_serverless_properties</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_amazon_q_properties` <a name="put_amazon_q_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putAmazonQProperties"></a>

```python
def put_amazon_q_properties(
  auth_mode: str = None,
  is_enabled: bool | IResolvable = None,
  profile_arn: str = None
) -> None
```

###### `auth_mode`<sup>Optional</sup> <a name="auth_mode" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putAmazonQProperties.parameter.authMode"></a>

- *Type:* str

The authentication mode of the connection's AmazonQ properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#auth_mode DatazoneConnection#auth_mode}

---

###### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putAmazonQProperties.parameter.isEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether Amazon Q is enabled for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#is_enabled DatazoneConnection#is_enabled}

---

###### `profile_arn`<sup>Optional</sup> <a name="profile_arn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putAmazonQProperties.parameter.profileArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#profile_arn DatazoneConnection#profile_arn}.

---

##### `put_athena_properties` <a name="put_athena_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putAthenaProperties"></a>

```python
def put_athena_properties(
  workgroup_name: str = None
) -> None
```

###### `workgroup_name`<sup>Optional</sup> <a name="workgroup_name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putAthenaProperties.parameter.workgroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#workgroup_name DatazoneConnection#workgroup_name}.

---

##### `put_glue_properties` <a name="put_glue_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putGlueProperties"></a>

```python
def put_glue_properties(
  glue_connection_input: DatazoneConnectionPropsGluePropertiesGlueConnectionInput = None
) -> None
```

###### `glue_connection_input`<sup>Optional</sup> <a name="glue_connection_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putGlueProperties.parameter.glueConnectionInput"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput">DatazoneConnectionPropsGluePropertiesGlueConnectionInput</a>

Glue Connection Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#glue_connection_input DatazoneConnection#glue_connection_input}

---

##### `put_hyper_pod_properties` <a name="put_hyper_pod_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putHyperPodProperties"></a>

```python
def put_hyper_pod_properties(
  cluster_name: str = None
) -> None
```

###### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putHyperPodProperties.parameter.clusterName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#cluster_name DatazoneConnection#cluster_name}.

---

##### `put_iam_properties` <a name="put_iam_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putIamProperties"></a>

```python
def put_iam_properties(
  glue_lineage_sync_enabled: bool | IResolvable = None
) -> None
```

###### `glue_lineage_sync_enabled`<sup>Optional</sup> <a name="glue_lineage_sync_enabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putIamProperties.parameter.glueLineageSyncEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#glue_lineage_sync_enabled DatazoneConnection#glue_lineage_sync_enabled}.

---

##### `put_lakehouse_properties` <a name="put_lakehouse_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putLakehouseProperties"></a>

```python
def put_lakehouse_properties(
  glue_lineage_sync_enabled: bool | IResolvable = None
) -> None
```

###### `glue_lineage_sync_enabled`<sup>Optional</sup> <a name="glue_lineage_sync_enabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putLakehouseProperties.parameter.glueLineageSyncEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether Glue lineage sync is enabled for the lakehouse connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#glue_lineage_sync_enabled DatazoneConnection#glue_lineage_sync_enabled}

---

##### `put_mlflow_properties` <a name="put_mlflow_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putMlflowProperties"></a>

```python
def put_mlflow_properties(
  tracking_server_arn: str = None
) -> None
```

###### `tracking_server_arn`<sup>Optional</sup> <a name="tracking_server_arn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putMlflowProperties.parameter.trackingServerArn"></a>

- *Type:* str

The ARN of the MLflow tracking server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#tracking_server_arn DatazoneConnection#tracking_server_arn}

---

##### `put_redshift_properties` <a name="put_redshift_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putRedshiftProperties"></a>

```python
def put_redshift_properties(
  credentials: DatazoneConnectionPropsRedshiftPropertiesCredentials = None,
  database_name: str = None,
  host: str = None,
  lineage_sync: DatazoneConnectionPropsRedshiftPropertiesLineageSync = None,
  port: typing.Union[int, float] = None,
  storage: DatazoneConnectionPropsRedshiftPropertiesStorage = None
) -> None
```

###### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putRedshiftProperties.parameter.credentials"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials">DatazoneConnectionPropsRedshiftPropertiesCredentials</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#credentials DatazoneConnection#credentials}.

---

###### `database_name`<sup>Optional</sup> <a name="database_name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putRedshiftProperties.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#database_name DatazoneConnection#database_name}.

---

###### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putRedshiftProperties.parameter.host"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#host DatazoneConnection#host}.

---

###### `lineage_sync`<sup>Optional</sup> <a name="lineage_sync" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putRedshiftProperties.parameter.lineageSync"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync">DatazoneConnectionPropsRedshiftPropertiesLineageSync</a>

Redshift Lineage Sync Configuration Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#lineage_sync DatazoneConnection#lineage_sync}

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putRedshiftProperties.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#port DatazoneConnection#port}.

---

###### `storage`<sup>Optional</sup> <a name="storage" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putRedshiftProperties.parameter.storage"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage">DatazoneConnectionPropsRedshiftPropertiesStorage</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#storage DatazoneConnection#storage}.

---

##### `put_s3_properties` <a name="put_s3_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putS3Properties"></a>

```python
def put_s3_properties(
  register_s3_access_grant_location: bool | IResolvable = None,
  s3_access_grant_location_id: str = None,
  s3_uri: str = None
) -> None
```

###### `register_s3_access_grant_location`<sup>Optional</sup> <a name="register_s3_access_grant_location" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putS3Properties.parameter.registerS3AccessGrantLocation"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether to register the S3 Access Grant location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#register_s3_access_grant_location DatazoneConnection#register_s3_access_grant_location}

---

###### `s3_access_grant_location_id`<sup>Optional</sup> <a name="s3_access_grant_location_id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putS3Properties.parameter.s3AccessGrantLocationId"></a>

- *Type:* str

The Amazon S3 Access Grant location ID that's part of the Amazon S3 properties of a connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#s3_access_grant_location_id DatazoneConnection#s3_access_grant_location_id}

---

###### `s3_uri`<sup>Optional</sup> <a name="s3_uri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putS3Properties.parameter.s3Uri"></a>

- *Type:* str

The Amazon S3 URI that's part of the Amazon S3 properties of a connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#s3_uri DatazoneConnection#s3_uri}

---

##### `put_spark_emr_properties` <a name="put_spark_emr_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkEmrProperties"></a>

```python
def put_spark_emr_properties(
  compute_arn: str = None,
  instance_profile_arn: str = None,
  java_virtual_env: str = None,
  log_uri: str = None,
  managed_endpoint_arn: str = None,
  python_virtual_env: str = None,
  runtime_role: str = None,
  trusted_certificates_s3_uri: str = None
) -> None
```

###### `compute_arn`<sup>Optional</sup> <a name="compute_arn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkEmrProperties.parameter.computeArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#compute_arn DatazoneConnection#compute_arn}.

---

###### `instance_profile_arn`<sup>Optional</sup> <a name="instance_profile_arn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkEmrProperties.parameter.instanceProfileArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#instance_profile_arn DatazoneConnection#instance_profile_arn}.

---

###### `java_virtual_env`<sup>Optional</sup> <a name="java_virtual_env" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkEmrProperties.parameter.javaVirtualEnv"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#java_virtual_env DatazoneConnection#java_virtual_env}.

---

###### `log_uri`<sup>Optional</sup> <a name="log_uri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkEmrProperties.parameter.logUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#log_uri DatazoneConnection#log_uri}.

---

###### `managed_endpoint_arn`<sup>Optional</sup> <a name="managed_endpoint_arn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkEmrProperties.parameter.managedEndpointArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#managed_endpoint_arn DatazoneConnection#managed_endpoint_arn}.

---

###### `python_virtual_env`<sup>Optional</sup> <a name="python_virtual_env" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkEmrProperties.parameter.pythonVirtualEnv"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#python_virtual_env DatazoneConnection#python_virtual_env}.

---

###### `runtime_role`<sup>Optional</sup> <a name="runtime_role" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkEmrProperties.parameter.runtimeRole"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#runtime_role DatazoneConnection#runtime_role}.

---

###### `trusted_certificates_s3_uri`<sup>Optional</sup> <a name="trusted_certificates_s3_uri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkEmrProperties.parameter.trustedCertificatesS3Uri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#trusted_certificates_s3_uri DatazoneConnection#trusted_certificates_s3_uri}.

---

##### `put_spark_glue_properties` <a name="put_spark_glue_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkGlueProperties"></a>

```python
def put_spark_glue_properties(
  additional_args: DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs = None,
  glue_connection_name: str = None,
  glue_version: str = None,
  idle_timeout: typing.Union[int, float] = None,
  java_virtual_env: str = None,
  number_of_workers: typing.Union[int, float] = None,
  python_virtual_env: str = None,
  worker_type: str = None
) -> None
```

###### `additional_args`<sup>Optional</sup> <a name="additional_args" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkGlueProperties.parameter.additionalArgs"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs">DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs</a>

Spark Glue Args.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#additional_args DatazoneConnection#additional_args}

---

###### `glue_connection_name`<sup>Optional</sup> <a name="glue_connection_name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkGlueProperties.parameter.glueConnectionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#glue_connection_name DatazoneConnection#glue_connection_name}.

---

###### `glue_version`<sup>Optional</sup> <a name="glue_version" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkGlueProperties.parameter.glueVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#glue_version DatazoneConnection#glue_version}.

---

###### `idle_timeout`<sup>Optional</sup> <a name="idle_timeout" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkGlueProperties.parameter.idleTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#idle_timeout DatazoneConnection#idle_timeout}.

---

###### `java_virtual_env`<sup>Optional</sup> <a name="java_virtual_env" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkGlueProperties.parameter.javaVirtualEnv"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#java_virtual_env DatazoneConnection#java_virtual_env}.

---

###### `number_of_workers`<sup>Optional</sup> <a name="number_of_workers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkGlueProperties.parameter.numberOfWorkers"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#number_of_workers DatazoneConnection#number_of_workers}.

---

###### `python_virtual_env`<sup>Optional</sup> <a name="python_virtual_env" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkGlueProperties.parameter.pythonVirtualEnv"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#python_virtual_env DatazoneConnection#python_virtual_env}.

---

###### `worker_type`<sup>Optional</sup> <a name="worker_type" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkGlueProperties.parameter.workerType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#worker_type DatazoneConnection#worker_type}.

---

##### `put_workflows_mwaa_properties` <a name="put_workflows_mwaa_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putWorkflowsMwaaProperties"></a>

```python
def put_workflows_mwaa_properties(
  mwaa_environment_name: str = None
) -> None
```

###### `mwaa_environment_name`<sup>Optional</sup> <a name="mwaa_environment_name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putWorkflowsMwaaProperties.parameter.mwaaEnvironmentName"></a>

- *Type:* str

The name of the MWAA environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#mwaa_environment_name DatazoneConnection#mwaa_environment_name}

---

##### `reset_amazon_q_properties` <a name="reset_amazon_q_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetAmazonQProperties"></a>

```python
def reset_amazon_q_properties() -> None
```

##### `reset_athena_properties` <a name="reset_athena_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetAthenaProperties"></a>

```python
def reset_athena_properties() -> None
```

##### `reset_glue_properties` <a name="reset_glue_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetGlueProperties"></a>

```python
def reset_glue_properties() -> None
```

##### `reset_hyper_pod_properties` <a name="reset_hyper_pod_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetHyperPodProperties"></a>

```python
def reset_hyper_pod_properties() -> None
```

##### `reset_iam_properties` <a name="reset_iam_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetIamProperties"></a>

```python
def reset_iam_properties() -> None
```

##### `reset_lakehouse_properties` <a name="reset_lakehouse_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetLakehouseProperties"></a>

```python
def reset_lakehouse_properties() -> None
```

##### `reset_mlflow_properties` <a name="reset_mlflow_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetMlflowProperties"></a>

```python
def reset_mlflow_properties() -> None
```

##### `reset_redshift_properties` <a name="reset_redshift_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetRedshiftProperties"></a>

```python
def reset_redshift_properties() -> None
```

##### `reset_s3_properties` <a name="reset_s3_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetS3Properties"></a>

```python
def reset_s3_properties() -> None
```

##### `reset_spark_emr_properties` <a name="reset_spark_emr_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetSparkEmrProperties"></a>

```python
def reset_spark_emr_properties() -> None
```

##### `reset_spark_glue_properties` <a name="reset_spark_glue_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetSparkGlueProperties"></a>

```python
def reset_spark_glue_properties() -> None
```

##### `reset_workflows_mwaa_properties` <a name="reset_workflows_mwaa_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetWorkflowsMwaaProperties"></a>

```python
def reset_workflows_mwaa_properties() -> None
```

##### `reset_workflows_serverless_properties` <a name="reset_workflows_serverless_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetWorkflowsServerlessProperties"></a>

```python
def reset_workflows_serverless_properties() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.amazonQProperties">amazon_q_properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference">DatazoneConnectionPropsAmazonQPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.athenaProperties">athena_properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference">DatazoneConnectionPropsAthenaPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.glueProperties">glue_properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference">DatazoneConnectionPropsGluePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.hyperPodProperties">hyper_pod_properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference">DatazoneConnectionPropsHyperPodPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.iamProperties">iam_properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference">DatazoneConnectionPropsIamPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.lakehouseProperties">lakehouse_properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference">DatazoneConnectionPropsLakehousePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.mlflowProperties">mlflow_properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference">DatazoneConnectionPropsMlflowPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.redshiftProperties">redshift_properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference">DatazoneConnectionPropsRedshiftPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.s3Properties">s3_properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference">DatazoneConnectionPropsS3PropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.sparkEmrProperties">spark_emr_properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference">DatazoneConnectionPropsSparkEmrPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.sparkGlueProperties">spark_glue_properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference">DatazoneConnectionPropsSparkGluePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.workflowsMwaaProperties">workflows_mwaa_properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference">DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.amazonQPropertiesInput">amazon_q_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties">DatazoneConnectionPropsAmazonQProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.athenaPropertiesInput">athena_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties">DatazoneConnectionPropsAthenaProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.gluePropertiesInput">glue_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties">DatazoneConnectionPropsGlueProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.hyperPodPropertiesInput">hyper_pod_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties">DatazoneConnectionPropsHyperPodProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.iamPropertiesInput">iam_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties">DatazoneConnectionPropsIamProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.lakehousePropertiesInput">lakehouse_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties">DatazoneConnectionPropsLakehouseProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.mlflowPropertiesInput">mlflow_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties">DatazoneConnectionPropsMlflowProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.redshiftPropertiesInput">redshift_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties">DatazoneConnectionPropsRedshiftProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.s3PropertiesInput">s3_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties">DatazoneConnectionPropsS3Properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.sparkEmrPropertiesInput">spark_emr_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties">DatazoneConnectionPropsSparkEmrProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.sparkGluePropertiesInput">spark_glue_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties">DatazoneConnectionPropsSparkGlueProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.workflowsMwaaPropertiesInput">workflows_mwaa_properties_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties">DatazoneConnectionPropsWorkflowsMwaaProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.workflowsServerlessPropertiesInput">workflows_serverless_properties_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.workflowsServerlessProperties">workflows_serverless_properties</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps">DatazoneConnectionProps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `amazon_q_properties`<sup>Required</sup> <a name="amazon_q_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.amazonQProperties"></a>

```python
amazon_q_properties: DatazoneConnectionPropsAmazonQPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference">DatazoneConnectionPropsAmazonQPropertiesOutputReference</a>

---

##### `athena_properties`<sup>Required</sup> <a name="athena_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.athenaProperties"></a>

```python
athena_properties: DatazoneConnectionPropsAthenaPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference">DatazoneConnectionPropsAthenaPropertiesOutputReference</a>

---

##### `glue_properties`<sup>Required</sup> <a name="glue_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.glueProperties"></a>

```python
glue_properties: DatazoneConnectionPropsGluePropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference">DatazoneConnectionPropsGluePropertiesOutputReference</a>

---

##### `hyper_pod_properties`<sup>Required</sup> <a name="hyper_pod_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.hyperPodProperties"></a>

```python
hyper_pod_properties: DatazoneConnectionPropsHyperPodPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference">DatazoneConnectionPropsHyperPodPropertiesOutputReference</a>

---

##### `iam_properties`<sup>Required</sup> <a name="iam_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.iamProperties"></a>

```python
iam_properties: DatazoneConnectionPropsIamPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference">DatazoneConnectionPropsIamPropertiesOutputReference</a>

---

##### `lakehouse_properties`<sup>Required</sup> <a name="lakehouse_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.lakehouseProperties"></a>

```python
lakehouse_properties: DatazoneConnectionPropsLakehousePropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference">DatazoneConnectionPropsLakehousePropertiesOutputReference</a>

---

##### `mlflow_properties`<sup>Required</sup> <a name="mlflow_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.mlflowProperties"></a>

```python
mlflow_properties: DatazoneConnectionPropsMlflowPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference">DatazoneConnectionPropsMlflowPropertiesOutputReference</a>

---

##### `redshift_properties`<sup>Required</sup> <a name="redshift_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.redshiftProperties"></a>

```python
redshift_properties: DatazoneConnectionPropsRedshiftPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference">DatazoneConnectionPropsRedshiftPropertiesOutputReference</a>

---

##### `s3_properties`<sup>Required</sup> <a name="s3_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.s3Properties"></a>

```python
s3_properties: DatazoneConnectionPropsS3PropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference">DatazoneConnectionPropsS3PropertiesOutputReference</a>

---

##### `spark_emr_properties`<sup>Required</sup> <a name="spark_emr_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.sparkEmrProperties"></a>

```python
spark_emr_properties: DatazoneConnectionPropsSparkEmrPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference">DatazoneConnectionPropsSparkEmrPropertiesOutputReference</a>

---

##### `spark_glue_properties`<sup>Required</sup> <a name="spark_glue_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.sparkGlueProperties"></a>

```python
spark_glue_properties: DatazoneConnectionPropsSparkGluePropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference">DatazoneConnectionPropsSparkGluePropertiesOutputReference</a>

---

##### `workflows_mwaa_properties`<sup>Required</sup> <a name="workflows_mwaa_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.workflowsMwaaProperties"></a>

```python
workflows_mwaa_properties: DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference">DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference</a>

---

##### `amazon_q_properties_input`<sup>Optional</sup> <a name="amazon_q_properties_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.amazonQPropertiesInput"></a>

```python
amazon_q_properties_input: IResolvable | DatazoneConnectionPropsAmazonQProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties">DatazoneConnectionPropsAmazonQProperties</a>

---

##### `athena_properties_input`<sup>Optional</sup> <a name="athena_properties_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.athenaPropertiesInput"></a>

```python
athena_properties_input: IResolvable | DatazoneConnectionPropsAthenaProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties">DatazoneConnectionPropsAthenaProperties</a>

---

##### `glue_properties_input`<sup>Optional</sup> <a name="glue_properties_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.gluePropertiesInput"></a>

```python
glue_properties_input: IResolvable | DatazoneConnectionPropsGlueProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties">DatazoneConnectionPropsGlueProperties</a>

---

##### `hyper_pod_properties_input`<sup>Optional</sup> <a name="hyper_pod_properties_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.hyperPodPropertiesInput"></a>

```python
hyper_pod_properties_input: IResolvable | DatazoneConnectionPropsHyperPodProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties">DatazoneConnectionPropsHyperPodProperties</a>

---

##### `iam_properties_input`<sup>Optional</sup> <a name="iam_properties_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.iamPropertiesInput"></a>

```python
iam_properties_input: IResolvable | DatazoneConnectionPropsIamProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties">DatazoneConnectionPropsIamProperties</a>

---

##### `lakehouse_properties_input`<sup>Optional</sup> <a name="lakehouse_properties_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.lakehousePropertiesInput"></a>

```python
lakehouse_properties_input: IResolvable | DatazoneConnectionPropsLakehouseProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties">DatazoneConnectionPropsLakehouseProperties</a>

---

##### `mlflow_properties_input`<sup>Optional</sup> <a name="mlflow_properties_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.mlflowPropertiesInput"></a>

```python
mlflow_properties_input: IResolvable | DatazoneConnectionPropsMlflowProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties">DatazoneConnectionPropsMlflowProperties</a>

---

##### `redshift_properties_input`<sup>Optional</sup> <a name="redshift_properties_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.redshiftPropertiesInput"></a>

```python
redshift_properties_input: IResolvable | DatazoneConnectionPropsRedshiftProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties">DatazoneConnectionPropsRedshiftProperties</a>

---

##### `s3_properties_input`<sup>Optional</sup> <a name="s3_properties_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.s3PropertiesInput"></a>

```python
s3_properties_input: IResolvable | DatazoneConnectionPropsS3Properties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties">DatazoneConnectionPropsS3Properties</a>

---

##### `spark_emr_properties_input`<sup>Optional</sup> <a name="spark_emr_properties_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.sparkEmrPropertiesInput"></a>

```python
spark_emr_properties_input: IResolvable | DatazoneConnectionPropsSparkEmrProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties">DatazoneConnectionPropsSparkEmrProperties</a>

---

##### `spark_glue_properties_input`<sup>Optional</sup> <a name="spark_glue_properties_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.sparkGluePropertiesInput"></a>

```python
spark_glue_properties_input: IResolvable | DatazoneConnectionPropsSparkGlueProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties">DatazoneConnectionPropsSparkGlueProperties</a>

---

##### `workflows_mwaa_properties_input`<sup>Optional</sup> <a name="workflows_mwaa_properties_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.workflowsMwaaPropertiesInput"></a>

```python
workflows_mwaa_properties_input: IResolvable | DatazoneConnectionPropsWorkflowsMwaaProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties">DatazoneConnectionPropsWorkflowsMwaaProperties</a>

---

##### `workflows_serverless_properties_input`<sup>Optional</sup> <a name="workflows_serverless_properties_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.workflowsServerlessPropertiesInput"></a>

```python
workflows_serverless_properties_input: str
```

- *Type:* str

---

##### `workflows_serverless_properties`<sup>Required</sup> <a name="workflows_serverless_properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.workflowsServerlessProperties"></a>

```python
workflows_serverless_properties: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneConnectionProps
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps">DatazoneConnectionProps</a>

---


### DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference <a name="DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.putUsernamePassword">put_username_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.resetSecretArn">reset_secret_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.resetUsernamePassword">reset_username_password</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_username_password` <a name="put_username_password" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.putUsernamePassword"></a>

```python
def put_username_password(
  password: str = None,
  username: str = None
) -> None
```

###### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.putUsernamePassword.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#password DatazoneConnection#password}.

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.putUsernamePassword.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#username DatazoneConnection#username}.

---

##### `reset_secret_arn` <a name="reset_secret_arn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.resetSecretArn"></a>

```python
def reset_secret_arn() -> None
```

##### `reset_username_password` <a name="reset_username_password" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.resetUsernamePassword"></a>

```python
def reset_username_password() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.usernamePassword">username_password</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference">DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.secretArnInput">secret_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.usernamePasswordInput">username_password_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword">DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.secretArn">secret_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials">DatazoneConnectionPropsRedshiftPropertiesCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `username_password`<sup>Required</sup> <a name="username_password" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.usernamePassword"></a>

```python
username_password: DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference">DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference</a>

---

##### `secret_arn_input`<sup>Optional</sup> <a name="secret_arn_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.secretArnInput"></a>

```python
secret_arn_input: str
```

- *Type:* str

---

##### `username_password_input`<sup>Optional</sup> <a name="username_password_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.usernamePasswordInput"></a>

```python
username_password_input: IResolvable | DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword">DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword</a>

---

##### `secret_arn`<sup>Required</sup> <a name="secret_arn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.secretArn"></a>

```python
secret_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneConnectionPropsRedshiftPropertiesCredentials
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials">DatazoneConnectionPropsRedshiftPropertiesCredentials</a>

---


### DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference <a name="DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.resetUsername">reset_username</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_password` <a name="reset_password" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword">DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword">DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword</a>

---


### DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference <a name="DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.resetSchedule">reset_schedule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_schedule` <a name="put_schedule" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.putSchedule"></a>

```python
def put_schedule(
  schedule: str = None
) -> None
```

###### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.putSchedule.parameter.schedule"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#schedule DatazoneConnection#schedule}.

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.resetSchedule"></a>

```python
def reset_schedule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference">DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.scheduleInput">schedule_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule">DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync">DatazoneConnectionPropsRedshiftPropertiesLineageSync</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.schedule"></a>

```python
schedule: DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference">DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.scheduleInput"></a>

```python
schedule_input: IResolvable | DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule">DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneConnectionPropsRedshiftPropertiesLineageSync
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync">DatazoneConnectionPropsRedshiftPropertiesLineageSync</a>

---


### DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference <a name="DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.resetSchedule">reset_schedule</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_schedule` <a name="reset_schedule" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.resetSchedule"></a>

```python
def reset_schedule() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.scheduleInput">schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.schedule">schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule">DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.scheduleInput"></a>

```python
schedule_input: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule">DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule</a>

---


### DatazoneConnectionPropsRedshiftPropertiesOutputReference <a name="DatazoneConnectionPropsRedshiftPropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putCredentials">put_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putLineageSync">put_lineage_sync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putStorage">put_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetCredentials">reset_credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetDatabaseName">reset_database_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetLineageSync">reset_lineage_sync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetStorage">reset_storage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_credentials` <a name="put_credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putCredentials"></a>

```python
def put_credentials(
  secret_arn: str = None,
  username_password: DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword = None
) -> None
```

###### `secret_arn`<sup>Optional</sup> <a name="secret_arn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putCredentials.parameter.secretArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#secret_arn DatazoneConnection#secret_arn}.

---

###### `username_password`<sup>Optional</sup> <a name="username_password" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putCredentials.parameter.usernamePassword"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword">DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword</a>

The username and password to be used for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#username_password DatazoneConnection#username_password}

---

##### `put_lineage_sync` <a name="put_lineage_sync" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putLineageSync"></a>

```python
def put_lineage_sync(
  enabled: bool | IResolvable = None,
  schedule: DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putLineageSync.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#enabled DatazoneConnection#enabled}.

---

###### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putLineageSync.parameter.schedule"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule">DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule</a>

Lineage Sync Schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#schedule DatazoneConnection#schedule}

---

##### `put_storage` <a name="put_storage" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putStorage"></a>

```python
def put_storage(
  cluster_name: str = None,
  workgroup_name: str = None
) -> None
```

###### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putStorage.parameter.clusterName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#cluster_name DatazoneConnection#cluster_name}.

---

###### `workgroup_name`<sup>Optional</sup> <a name="workgroup_name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putStorage.parameter.workgroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#workgroup_name DatazoneConnection#workgroup_name}.

---

##### `reset_credentials` <a name="reset_credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetCredentials"></a>

```python
def reset_credentials() -> None
```

##### `reset_database_name` <a name="reset_database_name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetDatabaseName"></a>

```python
def reset_database_name() -> None
```

##### `reset_host` <a name="reset_host" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_lineage_sync` <a name="reset_lineage_sync" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetLineageSync"></a>

```python
def reset_lineage_sync() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_storage` <a name="reset_storage" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetStorage"></a>

```python
def reset_storage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference">DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.lineageSync">lineage_sync</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference">DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference">DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.credentialsInput">credentials_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials">DatazoneConnectionPropsRedshiftPropertiesCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.lineageSyncInput">lineage_sync_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync">DatazoneConnectionPropsRedshiftPropertiesLineageSync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.storageInput">storage_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage">DatazoneConnectionPropsRedshiftPropertiesStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties">DatazoneConnectionPropsRedshiftProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.credentials"></a>

```python
credentials: DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference">DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference</a>

---

##### `lineage_sync`<sup>Required</sup> <a name="lineage_sync" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.lineageSync"></a>

```python
lineage_sync: DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference">DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.storage"></a>

```python
storage: DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference">DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference</a>

---

##### `credentials_input`<sup>Optional</sup> <a name="credentials_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.credentialsInput"></a>

```python
credentials_input: IResolvable | DatazoneConnectionPropsRedshiftPropertiesCredentials
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials">DatazoneConnectionPropsRedshiftPropertiesCredentials</a>

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `lineage_sync_input`<sup>Optional</sup> <a name="lineage_sync_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.lineageSyncInput"></a>

```python
lineage_sync_input: IResolvable | DatazoneConnectionPropsRedshiftPropertiesLineageSync
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync">DatazoneConnectionPropsRedshiftPropertiesLineageSync</a>

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_input`<sup>Optional</sup> <a name="storage_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.storageInput"></a>

```python
storage_input: IResolvable | DatazoneConnectionPropsRedshiftPropertiesStorage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage">DatazoneConnectionPropsRedshiftPropertiesStorage</a>

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneConnectionPropsRedshiftProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties">DatazoneConnectionPropsRedshiftProperties</a>

---


### DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference <a name="DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.resetClusterName">reset_cluster_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.resetWorkgroupName">reset_workgroup_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cluster_name` <a name="reset_cluster_name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.resetClusterName"></a>

```python
def reset_cluster_name() -> None
```

##### `reset_workgroup_name` <a name="reset_workgroup_name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.resetWorkgroupName"></a>

```python
def reset_workgroup_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.workgroupNameInput">workgroup_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.workgroupName">workgroup_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage">DatazoneConnectionPropsRedshiftPropertiesStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `workgroup_name_input`<sup>Optional</sup> <a name="workgroup_name_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.workgroupNameInput"></a>

```python
workgroup_name_input: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `workgroup_name`<sup>Required</sup> <a name="workgroup_name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.workgroupName"></a>

```python
workgroup_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneConnectionPropsRedshiftPropertiesStorage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage">DatazoneConnectionPropsRedshiftPropertiesStorage</a>

---


### DatazoneConnectionPropsS3PropertiesOutputReference <a name="DatazoneConnectionPropsS3PropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.resetRegisterS3AccessGrantLocation">reset_register_s3_access_grant_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.resetS3AccessGrantLocationId">reset_s3_access_grant_location_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.resetS3Uri">reset_s3_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_register_s3_access_grant_location` <a name="reset_register_s3_access_grant_location" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.resetRegisterS3AccessGrantLocation"></a>

```python
def reset_register_s3_access_grant_location() -> None
```

##### `reset_s3_access_grant_location_id` <a name="reset_s3_access_grant_location_id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.resetS3AccessGrantLocationId"></a>

```python
def reset_s3_access_grant_location_id() -> None
```

##### `reset_s3_uri` <a name="reset_s3_uri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.resetS3Uri"></a>

```python
def reset_s3_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.registerS3AccessGrantLocationInput">register_s3_access_grant_location_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.s3AccessGrantLocationIdInput">s3_access_grant_location_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.s3UriInput">s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.registerS3AccessGrantLocation">register_s3_access_grant_location</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.s3AccessGrantLocationId">s3_access_grant_location_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.s3Uri">s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties">DatazoneConnectionPropsS3Properties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `register_s3_access_grant_location_input`<sup>Optional</sup> <a name="register_s3_access_grant_location_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.registerS3AccessGrantLocationInput"></a>

```python
register_s3_access_grant_location_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `s3_access_grant_location_id_input`<sup>Optional</sup> <a name="s3_access_grant_location_id_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.s3AccessGrantLocationIdInput"></a>

```python
s3_access_grant_location_id_input: str
```

- *Type:* str

---

##### `s3_uri_input`<sup>Optional</sup> <a name="s3_uri_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.s3UriInput"></a>

```python
s3_uri_input: str
```

- *Type:* str

---

##### `register_s3_access_grant_location`<sup>Required</sup> <a name="register_s3_access_grant_location" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.registerS3AccessGrantLocation"></a>

```python
register_s3_access_grant_location: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `s3_access_grant_location_id`<sup>Required</sup> <a name="s3_access_grant_location_id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.s3AccessGrantLocationId"></a>

```python
s3_access_grant_location_id: str
```

- *Type:* str

---

##### `s3_uri`<sup>Required</sup> <a name="s3_uri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.s3Uri"></a>

```python
s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneConnectionPropsS3Properties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties">DatazoneConnectionPropsS3Properties</a>

---


### DatazoneConnectionPropsSparkEmrPropertiesOutputReference <a name="DatazoneConnectionPropsSparkEmrPropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetComputeArn">reset_compute_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetInstanceProfileArn">reset_instance_profile_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetJavaVirtualEnv">reset_java_virtual_env</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetLogUri">reset_log_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetManagedEndpointArn">reset_managed_endpoint_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetPythonVirtualEnv">reset_python_virtual_env</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetRuntimeRole">reset_runtime_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetTrustedCertificatesS3Uri">reset_trusted_certificates_s3_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_compute_arn` <a name="reset_compute_arn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetComputeArn"></a>

```python
def reset_compute_arn() -> None
```

##### `reset_instance_profile_arn` <a name="reset_instance_profile_arn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetInstanceProfileArn"></a>

```python
def reset_instance_profile_arn() -> None
```

##### `reset_java_virtual_env` <a name="reset_java_virtual_env" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetJavaVirtualEnv"></a>

```python
def reset_java_virtual_env() -> None
```

##### `reset_log_uri` <a name="reset_log_uri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetLogUri"></a>

```python
def reset_log_uri() -> None
```

##### `reset_managed_endpoint_arn` <a name="reset_managed_endpoint_arn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetManagedEndpointArn"></a>

```python
def reset_managed_endpoint_arn() -> None
```

##### `reset_python_virtual_env` <a name="reset_python_virtual_env" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetPythonVirtualEnv"></a>

```python
def reset_python_virtual_env() -> None
```

##### `reset_runtime_role` <a name="reset_runtime_role" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetRuntimeRole"></a>

```python
def reset_runtime_role() -> None
```

##### `reset_trusted_certificates_s3_uri` <a name="reset_trusted_certificates_s3_uri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetTrustedCertificatesS3Uri"></a>

```python
def reset_trusted_certificates_s3_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.computeArnInput">compute_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.instanceProfileArnInput">instance_profile_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.javaVirtualEnvInput">java_virtual_env_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.logUriInput">log_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.managedEndpointArnInput">managed_endpoint_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.pythonVirtualEnvInput">python_virtual_env_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.runtimeRoleInput">runtime_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.trustedCertificatesS3UriInput">trusted_certificates_s3_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.computeArn">compute_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.instanceProfileArn">instance_profile_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.javaVirtualEnv">java_virtual_env</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.logUri">log_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.managedEndpointArn">managed_endpoint_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.pythonVirtualEnv">python_virtual_env</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.runtimeRole">runtime_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.trustedCertificatesS3Uri">trusted_certificates_s3_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties">DatazoneConnectionPropsSparkEmrProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute_arn_input`<sup>Optional</sup> <a name="compute_arn_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.computeArnInput"></a>

```python
compute_arn_input: str
```

- *Type:* str

---

##### `instance_profile_arn_input`<sup>Optional</sup> <a name="instance_profile_arn_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.instanceProfileArnInput"></a>

```python
instance_profile_arn_input: str
```

- *Type:* str

---

##### `java_virtual_env_input`<sup>Optional</sup> <a name="java_virtual_env_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.javaVirtualEnvInput"></a>

```python
java_virtual_env_input: str
```

- *Type:* str

---

##### `log_uri_input`<sup>Optional</sup> <a name="log_uri_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.logUriInput"></a>

```python
log_uri_input: str
```

- *Type:* str

---

##### `managed_endpoint_arn_input`<sup>Optional</sup> <a name="managed_endpoint_arn_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.managedEndpointArnInput"></a>

```python
managed_endpoint_arn_input: str
```

- *Type:* str

---

##### `python_virtual_env_input`<sup>Optional</sup> <a name="python_virtual_env_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.pythonVirtualEnvInput"></a>

```python
python_virtual_env_input: str
```

- *Type:* str

---

##### `runtime_role_input`<sup>Optional</sup> <a name="runtime_role_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.runtimeRoleInput"></a>

```python
runtime_role_input: str
```

- *Type:* str

---

##### `trusted_certificates_s3_uri_input`<sup>Optional</sup> <a name="trusted_certificates_s3_uri_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.trustedCertificatesS3UriInput"></a>

```python
trusted_certificates_s3_uri_input: str
```

- *Type:* str

---

##### `compute_arn`<sup>Required</sup> <a name="compute_arn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.computeArn"></a>

```python
compute_arn: str
```

- *Type:* str

---

##### `instance_profile_arn`<sup>Required</sup> <a name="instance_profile_arn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.instanceProfileArn"></a>

```python
instance_profile_arn: str
```

- *Type:* str

---

##### `java_virtual_env`<sup>Required</sup> <a name="java_virtual_env" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.javaVirtualEnv"></a>

```python
java_virtual_env: str
```

- *Type:* str

---

##### `log_uri`<sup>Required</sup> <a name="log_uri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.logUri"></a>

```python
log_uri: str
```

- *Type:* str

---

##### `managed_endpoint_arn`<sup>Required</sup> <a name="managed_endpoint_arn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.managedEndpointArn"></a>

```python
managed_endpoint_arn: str
```

- *Type:* str

---

##### `python_virtual_env`<sup>Required</sup> <a name="python_virtual_env" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.pythonVirtualEnv"></a>

```python
python_virtual_env: str
```

- *Type:* str

---

##### `runtime_role`<sup>Required</sup> <a name="runtime_role" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.runtimeRole"></a>

```python
runtime_role: str
```

- *Type:* str

---

##### `trusted_certificates_s3_uri`<sup>Required</sup> <a name="trusted_certificates_s3_uri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.trustedCertificatesS3Uri"></a>

```python
trusted_certificates_s3_uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneConnectionPropsSparkEmrProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties">DatazoneConnectionPropsSparkEmrProperties</a>

---


### DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference <a name="DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.resetConnection">reset_connection</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connection` <a name="reset_connection" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.resetConnection"></a>

```python
def reset_connection() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.connectionInput">connection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.connection">connection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs">DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_input`<sup>Optional</sup> <a name="connection_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.connectionInput"></a>

```python
connection_input: str
```

- *Type:* str

---

##### `connection`<sup>Required</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.connection"></a>

```python
connection: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs">DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs</a>

---


### DatazoneConnectionPropsSparkGluePropertiesOutputReference <a name="DatazoneConnectionPropsSparkGluePropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.putAdditionalArgs">put_additional_args</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetAdditionalArgs">reset_additional_args</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetGlueConnectionName">reset_glue_connection_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetGlueVersion">reset_glue_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetIdleTimeout">reset_idle_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetJavaVirtualEnv">reset_java_virtual_env</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetNumberOfWorkers">reset_number_of_workers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetPythonVirtualEnv">reset_python_virtual_env</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetWorkerType">reset_worker_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_additional_args` <a name="put_additional_args" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.putAdditionalArgs"></a>

```python
def put_additional_args(
  connection: str = None
) -> None
```

###### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.putAdditionalArgs.parameter.connection"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/datazone_connection#connection DatazoneConnection#connection}.

---

##### `reset_additional_args` <a name="reset_additional_args" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetAdditionalArgs"></a>

```python
def reset_additional_args() -> None
```

##### `reset_glue_connection_name` <a name="reset_glue_connection_name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetGlueConnectionName"></a>

```python
def reset_glue_connection_name() -> None
```

##### `reset_glue_version` <a name="reset_glue_version" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetGlueVersion"></a>

```python
def reset_glue_version() -> None
```

##### `reset_idle_timeout` <a name="reset_idle_timeout" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetIdleTimeout"></a>

```python
def reset_idle_timeout() -> None
```

##### `reset_java_virtual_env` <a name="reset_java_virtual_env" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetJavaVirtualEnv"></a>

```python
def reset_java_virtual_env() -> None
```

##### `reset_number_of_workers` <a name="reset_number_of_workers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetNumberOfWorkers"></a>

```python
def reset_number_of_workers() -> None
```

##### `reset_python_virtual_env` <a name="reset_python_virtual_env" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetPythonVirtualEnv"></a>

```python
def reset_python_virtual_env() -> None
```

##### `reset_worker_type` <a name="reset_worker_type" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetWorkerType"></a>

```python
def reset_worker_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.additionalArgs">additional_args</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference">DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.additionalArgsInput">additional_args_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs">DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueConnectionNameInput">glue_connection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueVersionInput">glue_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.idleTimeoutInput">idle_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.javaVirtualEnvInput">java_virtual_env_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.numberOfWorkersInput">number_of_workers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.pythonVirtualEnvInput">python_virtual_env_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.workerTypeInput">worker_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueConnectionName">glue_connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueVersion">glue_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.idleTimeout">idle_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.javaVirtualEnv">java_virtual_env</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.numberOfWorkers">number_of_workers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.pythonVirtualEnv">python_virtual_env</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.workerType">worker_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties">DatazoneConnectionPropsSparkGlueProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_args`<sup>Required</sup> <a name="additional_args" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.additionalArgs"></a>

```python
additional_args: DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference">DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference</a>

---

##### `additional_args_input`<sup>Optional</sup> <a name="additional_args_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.additionalArgsInput"></a>

```python
additional_args_input: IResolvable | DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs">DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs</a>

---

##### `glue_connection_name_input`<sup>Optional</sup> <a name="glue_connection_name_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueConnectionNameInput"></a>

```python
glue_connection_name_input: str
```

- *Type:* str

---

##### `glue_version_input`<sup>Optional</sup> <a name="glue_version_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueVersionInput"></a>

```python
glue_version_input: str
```

- *Type:* str

---

##### `idle_timeout_input`<sup>Optional</sup> <a name="idle_timeout_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.idleTimeoutInput"></a>

```python
idle_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `java_virtual_env_input`<sup>Optional</sup> <a name="java_virtual_env_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.javaVirtualEnvInput"></a>

```python
java_virtual_env_input: str
```

- *Type:* str

---

##### `number_of_workers_input`<sup>Optional</sup> <a name="number_of_workers_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.numberOfWorkersInput"></a>

```python
number_of_workers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `python_virtual_env_input`<sup>Optional</sup> <a name="python_virtual_env_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.pythonVirtualEnvInput"></a>

```python
python_virtual_env_input: str
```

- *Type:* str

---

##### `worker_type_input`<sup>Optional</sup> <a name="worker_type_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.workerTypeInput"></a>

```python
worker_type_input: str
```

- *Type:* str

---

##### `glue_connection_name`<sup>Required</sup> <a name="glue_connection_name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueConnectionName"></a>

```python
glue_connection_name: str
```

- *Type:* str

---

##### `glue_version`<sup>Required</sup> <a name="glue_version" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueVersion"></a>

```python
glue_version: str
```

- *Type:* str

---

##### `idle_timeout`<sup>Required</sup> <a name="idle_timeout" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.idleTimeout"></a>

```python
idle_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `java_virtual_env`<sup>Required</sup> <a name="java_virtual_env" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.javaVirtualEnv"></a>

```python
java_virtual_env: str
```

- *Type:* str

---

##### `number_of_workers`<sup>Required</sup> <a name="number_of_workers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.numberOfWorkers"></a>

```python
number_of_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `python_virtual_env`<sup>Required</sup> <a name="python_virtual_env" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.pythonVirtualEnv"></a>

```python
python_virtual_env: str
```

- *Type:* str

---

##### `worker_type`<sup>Required</sup> <a name="worker_type" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.workerType"></a>

```python
worker_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneConnectionPropsSparkGlueProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties">DatazoneConnectionPropsSparkGlueProperties</a>

---


### DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference <a name="DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_connection

datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.resetMwaaEnvironmentName">reset_mwaa_environment_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mwaa_environment_name` <a name="reset_mwaa_environment_name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.resetMwaaEnvironmentName"></a>

```python
def reset_mwaa_environment_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.mwaaEnvironmentNameInput">mwaa_environment_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.mwaaEnvironmentName">mwaa_environment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties">DatazoneConnectionPropsWorkflowsMwaaProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mwaa_environment_name_input`<sup>Optional</sup> <a name="mwaa_environment_name_input" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.mwaaEnvironmentNameInput"></a>

```python
mwaa_environment_name_input: str
```

- *Type:* str

---

##### `mwaa_environment_name`<sup>Required</sup> <a name="mwaa_environment_name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.mwaaEnvironmentName"></a>

```python
mwaa_environment_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneConnectionPropsWorkflowsMwaaProperties
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties">DatazoneConnectionPropsWorkflowsMwaaProperties</a>

---



