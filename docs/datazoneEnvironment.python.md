# `datazoneEnvironment` Submodule <a name="`datazoneEnvironment` Submodule" id="@cdktn/provider-awscc.datazoneEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneEnvironment <a name="DatazoneEnvironment" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_environment awscc_datazone_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_environment

datazoneEnvironment.DatazoneEnvironment(
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
  project_identifier: str,
  deployment_order: typing.Union[int, float] = None,
  description: str = None,
  environment_account_identifier: str = None,
  environment_account_region: str = None,
  environment_blueprint_identifier: str = None,
  environment_configuration_id: str = None,
  environment_profile_identifier: str = None,
  environment_role_arn: str = None,
  glossary_terms: typing.List[str] = None,
  user_parameters: IResolvable | typing.List[DatazoneEnvironmentUserParameters] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.domainIdentifier">domain_identifier</a></code> | <code>str</code> | The identifier of the Amazon DataZone domain in which the environment would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the environment. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.projectIdentifier">project_identifier</a></code> | <code>str</code> | The ID of the Amazon DataZone project in which the environment would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.deploymentOrder">deployment_order</a></code> | <code>typing.Union[int, float]</code> | The deployment order for the environment. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the Amazon DataZone environment. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.environmentAccountIdentifier">environment_account_identifier</a></code> | <code>str</code> | The AWS account in which the Amazon DataZone environment is created. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.environmentAccountRegion">environment_account_region</a></code> | <code>str</code> | The AWS region in which the Amazon DataZone environment is created. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.environmentBlueprintIdentifier">environment_blueprint_identifier</a></code> | <code>str</code> | The identifier of the environment blueprint. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.environmentConfigurationId">environment_configuration_id</a></code> | <code>str</code> | The identifier of the environment configuration. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.environmentProfileIdentifier">environment_profile_identifier</a></code> | <code>str</code> | The ID of the environment profile with which the Amazon DataZone environment would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.environmentRoleArn">environment_role_arn</a></code> | <code>str</code> | Environment role arn for custom aws environment permissions. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.glossaryTerms">glossary_terms</a></code> | <code>typing.List[str]</code> | The glossary terms that can be used in the Amazon DataZone environment. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.userParameters">user_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a>]</code> | The user parameters of the Amazon DataZone environment. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_identifier`<sup>Required</sup> <a name="domain_identifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.domainIdentifier"></a>

- *Type:* str

The identifier of the Amazon DataZone domain in which the environment would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_environment#domain_identifier DatazoneEnvironment#domain_identifier}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.name"></a>

- *Type:* str

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_environment#name DatazoneEnvironment#name}

---

##### `project_identifier`<sup>Required</sup> <a name="project_identifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.projectIdentifier"></a>

- *Type:* str

The ID of the Amazon DataZone project in which the environment would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_environment#project_identifier DatazoneEnvironment#project_identifier}

---

##### `deployment_order`<sup>Optional</sup> <a name="deployment_order" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.deploymentOrder"></a>

- *Type:* typing.Union[int, float]

The deployment order for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_environment#deployment_order DatazoneEnvironment#deployment_order}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.description"></a>

- *Type:* str

The description of the Amazon DataZone environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_environment#description DatazoneEnvironment#description}

---

##### `environment_account_identifier`<sup>Optional</sup> <a name="environment_account_identifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.environmentAccountIdentifier"></a>

- *Type:* str

The AWS account in which the Amazon DataZone environment is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_environment#environment_account_identifier DatazoneEnvironment#environment_account_identifier}

---

##### `environment_account_region`<sup>Optional</sup> <a name="environment_account_region" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.environmentAccountRegion"></a>

- *Type:* str

The AWS region in which the Amazon DataZone environment is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_environment#environment_account_region DatazoneEnvironment#environment_account_region}

---

##### `environment_blueprint_identifier`<sup>Optional</sup> <a name="environment_blueprint_identifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.environmentBlueprintIdentifier"></a>

- *Type:* str

The identifier of the environment blueprint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_environment#environment_blueprint_identifier DatazoneEnvironment#environment_blueprint_identifier}

---

##### `environment_configuration_id`<sup>Optional</sup> <a name="environment_configuration_id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.environmentConfigurationId"></a>

- *Type:* str

The identifier of the environment configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_environment#environment_configuration_id DatazoneEnvironment#environment_configuration_id}

---

##### `environment_profile_identifier`<sup>Optional</sup> <a name="environment_profile_identifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.environmentProfileIdentifier"></a>

- *Type:* str

The ID of the environment profile with which the Amazon DataZone environment would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_environment#environment_profile_identifier DatazoneEnvironment#environment_profile_identifier}

---

##### `environment_role_arn`<sup>Optional</sup> <a name="environment_role_arn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.environmentRoleArn"></a>

- *Type:* str

Environment role arn for custom aws environment permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_environment#environment_role_arn DatazoneEnvironment#environment_role_arn}

---

##### `glossary_terms`<sup>Optional</sup> <a name="glossary_terms" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.glossaryTerms"></a>

- *Type:* typing.List[str]

The glossary terms that can be used in the Amazon DataZone environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_environment#glossary_terms DatazoneEnvironment#glossary_terms}

---

##### `user_parameters`<sup>Optional</sup> <a name="user_parameters" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.Initializer.parameter.userParameters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a>]

The user parameters of the Amazon DataZone environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_environment#user_parameters DatazoneEnvironment#user_parameters}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.putUserParameters">put_user_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetDeploymentOrder">reset_deployment_order</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentAccountIdentifier">reset_environment_account_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentAccountRegion">reset_environment_account_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentBlueprintIdentifier">reset_environment_blueprint_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentConfigurationId">reset_environment_configuration_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentProfileIdentifier">reset_environment_profile_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentRoleArn">reset_environment_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetGlossaryTerms">reset_glossary_terms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetUserParameters">reset_user_parameters</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_user_parameters` <a name="put_user_parameters" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.putUserParameters"></a>

```python
def put_user_parameters(
  value: IResolvable | typing.List[DatazoneEnvironmentUserParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.putUserParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a>]

---

##### `reset_deployment_order` <a name="reset_deployment_order" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetDeploymentOrder"></a>

```python
def reset_deployment_order() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_environment_account_identifier` <a name="reset_environment_account_identifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentAccountIdentifier"></a>

```python
def reset_environment_account_identifier() -> None
```

##### `reset_environment_account_region` <a name="reset_environment_account_region" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentAccountRegion"></a>

```python
def reset_environment_account_region() -> None
```

##### `reset_environment_blueprint_identifier` <a name="reset_environment_blueprint_identifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentBlueprintIdentifier"></a>

```python
def reset_environment_blueprint_identifier() -> None
```

##### `reset_environment_configuration_id` <a name="reset_environment_configuration_id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentConfigurationId"></a>

```python
def reset_environment_configuration_id() -> None
```

##### `reset_environment_profile_identifier` <a name="reset_environment_profile_identifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentProfileIdentifier"></a>

```python
def reset_environment_profile_identifier() -> None
```

##### `reset_environment_role_arn` <a name="reset_environment_role_arn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetEnvironmentRoleArn"></a>

```python
def reset_environment_role_arn() -> None
```

##### `reset_glossary_terms` <a name="reset_glossary_terms" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetGlossaryTerms"></a>

```python
def reset_glossary_terms() -> None
```

##### `reset_user_parameters` <a name="reset_user_parameters" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.resetUserParameters"></a>

```python
def reset_user_parameters() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DatazoneEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.isConstruct"></a>

```python
from cdktn_provider_awscc import datazone_environment

datazoneEnvironment.DatazoneEnvironment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import datazone_environment

datazoneEnvironment.DatazoneEnvironment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.isTerraformResource"></a>

```python
from cdktn_provider_awscc import datazone_environment

datazoneEnvironment.DatazoneEnvironment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import datazone_environment

datazoneEnvironment.DatazoneEnvironment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DatazoneEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatazoneEnvironment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatazoneEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatazoneEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.awsAccountRegion">aws_account_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentBlueprintId">environment_blueprint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentId">environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentProfileId">environment_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.providerName">provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.userParameters">user_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList">DatazoneEnvironmentUserParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.deploymentOrderInput">deployment_order_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.domainIdentifierInput">domain_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentAccountIdentifierInput">environment_account_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentAccountRegionInput">environment_account_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentBlueprintIdentifierInput">environment_blueprint_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentConfigurationIdInput">environment_configuration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentProfileIdentifierInput">environment_profile_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentRoleArnInput">environment_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.glossaryTermsInput">glossary_terms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.projectIdentifierInput">project_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.userParametersInput">user_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.deploymentOrder">deployment_order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.domainIdentifier">domain_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentAccountIdentifier">environment_account_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentAccountRegion">environment_account_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentBlueprintIdentifier">environment_blueprint_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentConfigurationId">environment_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentProfileIdentifier">environment_profile_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentRoleArn">environment_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.glossaryTerms">glossary_terms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.projectIdentifier">project_identifier</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `aws_account_region`<sup>Required</sup> <a name="aws_account_region" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.awsAccountRegion"></a>

```python
aws_account_region: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `environment_blueprint_id`<sup>Required</sup> <a name="environment_blueprint_id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentBlueprintId"></a>

```python
environment_blueprint_id: str
```

- *Type:* str

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

---

##### `environment_profile_id`<sup>Required</sup> <a name="environment_profile_id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentProfileId"></a>

```python
environment_profile_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `user_parameters`<sup>Required</sup> <a name="user_parameters" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.userParameters"></a>

```python
user_parameters: DatazoneEnvironmentUserParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList">DatazoneEnvironmentUserParametersList</a>

---

##### `deployment_order_input`<sup>Optional</sup> <a name="deployment_order_input" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.deploymentOrderInput"></a>

```python
deployment_order_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `domain_identifier_input`<sup>Optional</sup> <a name="domain_identifier_input" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.domainIdentifierInput"></a>

```python
domain_identifier_input: str
```

- *Type:* str

---

##### `environment_account_identifier_input`<sup>Optional</sup> <a name="environment_account_identifier_input" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentAccountIdentifierInput"></a>

```python
environment_account_identifier_input: str
```

- *Type:* str

---

##### `environment_account_region_input`<sup>Optional</sup> <a name="environment_account_region_input" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentAccountRegionInput"></a>

```python
environment_account_region_input: str
```

- *Type:* str

---

##### `environment_blueprint_identifier_input`<sup>Optional</sup> <a name="environment_blueprint_identifier_input" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentBlueprintIdentifierInput"></a>

```python
environment_blueprint_identifier_input: str
```

- *Type:* str

---

##### `environment_configuration_id_input`<sup>Optional</sup> <a name="environment_configuration_id_input" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentConfigurationIdInput"></a>

```python
environment_configuration_id_input: str
```

- *Type:* str

---

##### `environment_profile_identifier_input`<sup>Optional</sup> <a name="environment_profile_identifier_input" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentProfileIdentifierInput"></a>

```python
environment_profile_identifier_input: str
```

- *Type:* str

---

##### `environment_role_arn_input`<sup>Optional</sup> <a name="environment_role_arn_input" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentRoleArnInput"></a>

```python
environment_role_arn_input: str
```

- *Type:* str

---

##### `glossary_terms_input`<sup>Optional</sup> <a name="glossary_terms_input" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.glossaryTermsInput"></a>

```python
glossary_terms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_identifier_input`<sup>Optional</sup> <a name="project_identifier_input" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.projectIdentifierInput"></a>

```python
project_identifier_input: str
```

- *Type:* str

---

##### `user_parameters_input`<sup>Optional</sup> <a name="user_parameters_input" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.userParametersInput"></a>

```python
user_parameters_input: IResolvable | typing.List[DatazoneEnvironmentUserParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a>]

---

##### `deployment_order`<sup>Required</sup> <a name="deployment_order" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.deploymentOrder"></a>

```python
deployment_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_identifier`<sup>Required</sup> <a name="domain_identifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.domainIdentifier"></a>

```python
domain_identifier: str
```

- *Type:* str

---

##### `environment_account_identifier`<sup>Required</sup> <a name="environment_account_identifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentAccountIdentifier"></a>

```python
environment_account_identifier: str
```

- *Type:* str

---

##### `environment_account_region`<sup>Required</sup> <a name="environment_account_region" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentAccountRegion"></a>

```python
environment_account_region: str
```

- *Type:* str

---

##### `environment_blueprint_identifier`<sup>Required</sup> <a name="environment_blueprint_identifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentBlueprintIdentifier"></a>

```python
environment_blueprint_identifier: str
```

- *Type:* str

---

##### `environment_configuration_id`<sup>Required</sup> <a name="environment_configuration_id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentConfigurationId"></a>

```python
environment_configuration_id: str
```

- *Type:* str

---

##### `environment_profile_identifier`<sup>Required</sup> <a name="environment_profile_identifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentProfileIdentifier"></a>

```python
environment_profile_identifier: str
```

- *Type:* str

---

##### `environment_role_arn`<sup>Required</sup> <a name="environment_role_arn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.environmentRoleArn"></a>

```python
environment_role_arn: str
```

- *Type:* str

---

##### `glossary_terms`<sup>Required</sup> <a name="glossary_terms" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.glossaryTerms"></a>

```python
glossary_terms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_identifier`<sup>Required</sup> <a name="project_identifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.projectIdentifier"></a>

```python
project_identifier: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneEnvironmentConfig <a name="DatazoneEnvironmentConfig" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_environment

datazoneEnvironment.DatazoneEnvironmentConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain_identifier: str,
  name: str,
  project_identifier: str,
  deployment_order: typing.Union[int, float] = None,
  description: str = None,
  environment_account_identifier: str = None,
  environment_account_region: str = None,
  environment_blueprint_identifier: str = None,
  environment_configuration_id: str = None,
  environment_profile_identifier: str = None,
  environment_role_arn: str = None,
  glossary_terms: typing.List[str] = None,
  user_parameters: IResolvable | typing.List[DatazoneEnvironmentUserParameters] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.domainIdentifier">domain_identifier</a></code> | <code>str</code> | The identifier of the Amazon DataZone domain in which the environment would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.name">name</a></code> | <code>str</code> | The name of the environment. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.projectIdentifier">project_identifier</a></code> | <code>str</code> | The ID of the Amazon DataZone project in which the environment would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.deploymentOrder">deployment_order</a></code> | <code>typing.Union[int, float]</code> | The deployment order for the environment. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.description">description</a></code> | <code>str</code> | The description of the Amazon DataZone environment. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentAccountIdentifier">environment_account_identifier</a></code> | <code>str</code> | The AWS account in which the Amazon DataZone environment is created. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentAccountRegion">environment_account_region</a></code> | <code>str</code> | The AWS region in which the Amazon DataZone environment is created. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentBlueprintIdentifier">environment_blueprint_identifier</a></code> | <code>str</code> | The identifier of the environment blueprint. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentConfigurationId">environment_configuration_id</a></code> | <code>str</code> | The identifier of the environment configuration. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentProfileIdentifier">environment_profile_identifier</a></code> | <code>str</code> | The ID of the environment profile with which the Amazon DataZone environment would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentRoleArn">environment_role_arn</a></code> | <code>str</code> | Environment role arn for custom aws environment permissions. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.glossaryTerms">glossary_terms</a></code> | <code>typing.List[str]</code> | The glossary terms that can be used in the Amazon DataZone environment. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.userParameters">user_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a>]</code> | The user parameters of the Amazon DataZone environment. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_identifier`<sup>Required</sup> <a name="domain_identifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.domainIdentifier"></a>

```python
domain_identifier: str
```

- *Type:* str

The identifier of the Amazon DataZone domain in which the environment would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_environment#domain_identifier DatazoneEnvironment#domain_identifier}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_environment#name DatazoneEnvironment#name}

---

##### `project_identifier`<sup>Required</sup> <a name="project_identifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.projectIdentifier"></a>

```python
project_identifier: str
```

- *Type:* str

The ID of the Amazon DataZone project in which the environment would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_environment#project_identifier DatazoneEnvironment#project_identifier}

---

##### `deployment_order`<sup>Optional</sup> <a name="deployment_order" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.deploymentOrder"></a>

```python
deployment_order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The deployment order for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_environment#deployment_order DatazoneEnvironment#deployment_order}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the Amazon DataZone environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_environment#description DatazoneEnvironment#description}

---

##### `environment_account_identifier`<sup>Optional</sup> <a name="environment_account_identifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentAccountIdentifier"></a>

```python
environment_account_identifier: str
```

- *Type:* str

The AWS account in which the Amazon DataZone environment is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_environment#environment_account_identifier DatazoneEnvironment#environment_account_identifier}

---

##### `environment_account_region`<sup>Optional</sup> <a name="environment_account_region" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentAccountRegion"></a>

```python
environment_account_region: str
```

- *Type:* str

The AWS region in which the Amazon DataZone environment is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_environment#environment_account_region DatazoneEnvironment#environment_account_region}

---

##### `environment_blueprint_identifier`<sup>Optional</sup> <a name="environment_blueprint_identifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentBlueprintIdentifier"></a>

```python
environment_blueprint_identifier: str
```

- *Type:* str

The identifier of the environment blueprint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_environment#environment_blueprint_identifier DatazoneEnvironment#environment_blueprint_identifier}

---

##### `environment_configuration_id`<sup>Optional</sup> <a name="environment_configuration_id" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentConfigurationId"></a>

```python
environment_configuration_id: str
```

- *Type:* str

The identifier of the environment configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_environment#environment_configuration_id DatazoneEnvironment#environment_configuration_id}

---

##### `environment_profile_identifier`<sup>Optional</sup> <a name="environment_profile_identifier" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentProfileIdentifier"></a>

```python
environment_profile_identifier: str
```

- *Type:* str

The ID of the environment profile with which the Amazon DataZone environment would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_environment#environment_profile_identifier DatazoneEnvironment#environment_profile_identifier}

---

##### `environment_role_arn`<sup>Optional</sup> <a name="environment_role_arn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.environmentRoleArn"></a>

```python
environment_role_arn: str
```

- *Type:* str

Environment role arn for custom aws environment permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_environment#environment_role_arn DatazoneEnvironment#environment_role_arn}

---

##### `glossary_terms`<sup>Optional</sup> <a name="glossary_terms" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.glossaryTerms"></a>

```python
glossary_terms: typing.List[str]
```

- *Type:* typing.List[str]

The glossary terms that can be used in the Amazon DataZone environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_environment#glossary_terms DatazoneEnvironment#glossary_terms}

---

##### `user_parameters`<sup>Optional</sup> <a name="user_parameters" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentConfig.property.userParameters"></a>

```python
user_parameters: IResolvable | typing.List[DatazoneEnvironmentUserParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a>]

The user parameters of the Amazon DataZone environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_environment#user_parameters DatazoneEnvironment#user_parameters}

---

### DatazoneEnvironmentUserParameters <a name="DatazoneEnvironmentUserParameters" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_environment

datazoneEnvironment.DatazoneEnvironmentUserParameters(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters.property.name">name</a></code> | <code>str</code> | The name of an environment parameter. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters.property.value">value</a></code> | <code>str</code> | The value of an environment parameter. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters.property.name"></a>

```python
name: str
```

- *Type:* str

The name of an environment parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_environment#name DatazoneEnvironment#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters.property.value"></a>

```python
value: str
```

- *Type:* str

The value of an environment parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_environment#value DatazoneEnvironment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneEnvironmentUserParametersList <a name="DatazoneEnvironmentUserParametersList" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_environment

datazoneEnvironment.DatazoneEnvironmentUserParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatazoneEnvironmentUserParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatazoneEnvironmentUserParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a>]

---


### DatazoneEnvironmentUserParametersOutputReference <a name="DatazoneEnvironmentUserParametersOutputReference" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_environment

datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneEnvironmentUserParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneEnvironment.DatazoneEnvironmentUserParameters">DatazoneEnvironmentUserParameters</a>

---



