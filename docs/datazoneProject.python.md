# `datazoneProject` Submodule <a name="`datazoneProject` Submodule" id="@cdktn/provider-awscc.datazoneProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneProject <a name="DatazoneProject" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project awscc_datazone_project}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_project

datazoneProject.DatazoneProject(
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
  description: str = None,
  domain_unit_id: str = None,
  glossary_terms: typing.List[str] = None,
  membership_assignments: IResolvable | typing.List[DatazoneProjectMembershipAssignments] = None,
  project_category: str = None,
  project_execution_role: str = None,
  project_profile_id: str = None,
  project_profile_version: str = None,
  resource_tags: IResolvable | typing.List[DatazoneProjectResourceTags] = None,
  user_parameters: IResolvable | typing.List[DatazoneProjectUserParameters] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.domainIdentifier">domain_identifier</a></code> | <code>str</code> | The ID of the Amazon DataZone domain in which this project is created. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the Amazon DataZone project. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the Amazon DataZone project. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.domainUnitId">domain_unit_id</a></code> | <code>str</code> | The ID of the domain unit. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.glossaryTerms">glossary_terms</a></code> | <code>typing.List[str]</code> | The glossary terms that can be used in this Amazon DataZone project. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.membershipAssignments">membership_assignments</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments">DatazoneProjectMembershipAssignments</a>]</code> | The project membership assignments. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.projectCategory">project_category</a></code> | <code>str</code> | The project category. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.projectExecutionRole">project_execution_role</a></code> | <code>str</code> | The project execution role ARN. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.projectProfileId">project_profile_id</a></code> | <code>str</code> | The project profile ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.projectProfileVersion">project_profile_version</a></code> | <code>str</code> | The project profile version to which the project should be updated. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.resourceTags">resource_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags">DatazoneProjectResourceTags</a>]</code> | The resource tags of the project. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.userParameters">user_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters">DatazoneProjectUserParameters</a>]</code> | The user parameters of the project. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_identifier`<sup>Required</sup> <a name="domain_identifier" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.domainIdentifier"></a>

- *Type:* str

The ID of the Amazon DataZone domain in which this project is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#domain_identifier DatazoneProject#domain_identifier}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.name"></a>

- *Type:* str

The name of the Amazon DataZone project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#name DatazoneProject#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.description"></a>

- *Type:* str

The description of the Amazon DataZone project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#description DatazoneProject#description}

---

##### `domain_unit_id`<sup>Optional</sup> <a name="domain_unit_id" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.domainUnitId"></a>

- *Type:* str

The ID of the domain unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#domain_unit_id DatazoneProject#domain_unit_id}

---

##### `glossary_terms`<sup>Optional</sup> <a name="glossary_terms" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.glossaryTerms"></a>

- *Type:* typing.List[str]

The glossary terms that can be used in this Amazon DataZone project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#glossary_terms DatazoneProject#glossary_terms}

---

##### `membership_assignments`<sup>Optional</sup> <a name="membership_assignments" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.membershipAssignments"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments">DatazoneProjectMembershipAssignments</a>]

The project membership assignments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#membership_assignments DatazoneProject#membership_assignments}

---

##### `project_category`<sup>Optional</sup> <a name="project_category" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.projectCategory"></a>

- *Type:* str

The project category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#project_category DatazoneProject#project_category}

---

##### `project_execution_role`<sup>Optional</sup> <a name="project_execution_role" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.projectExecutionRole"></a>

- *Type:* str

The project execution role ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#project_execution_role DatazoneProject#project_execution_role}

---

##### `project_profile_id`<sup>Optional</sup> <a name="project_profile_id" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.projectProfileId"></a>

- *Type:* str

The project profile ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#project_profile_id DatazoneProject#project_profile_id}

---

##### `project_profile_version`<sup>Optional</sup> <a name="project_profile_version" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.projectProfileVersion"></a>

- *Type:* str

The project profile version to which the project should be updated.

You can only specify the following string for this parameter: latest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#project_profile_version DatazoneProject#project_profile_version}

---

##### `resource_tags`<sup>Optional</sup> <a name="resource_tags" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.resourceTags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags">DatazoneProjectResourceTags</a>]

The resource tags of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#resource_tags DatazoneProject#resource_tags}

---

##### `user_parameters`<sup>Optional</sup> <a name="user_parameters" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.Initializer.parameter.userParameters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters">DatazoneProjectUserParameters</a>]

The user parameters of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#user_parameters DatazoneProject#user_parameters}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.putMembershipAssignments">put_membership_assignments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.putResourceTags">put_resource_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.putUserParameters">put_user_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetDomainUnitId">reset_domain_unit_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetGlossaryTerms">reset_glossary_terms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetMembershipAssignments">reset_membership_assignments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetProjectCategory">reset_project_category</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetProjectExecutionRole">reset_project_execution_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetProjectProfileId">reset_project_profile_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetProjectProfileVersion">reset_project_profile_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetResourceTags">reset_resource_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetUserParameters">reset_user_parameters</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_membership_assignments` <a name="put_membership_assignments" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.putMembershipAssignments"></a>

```python
def put_membership_assignments(
  value: IResolvable | typing.List[DatazoneProjectMembershipAssignments]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.putMembershipAssignments.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments">DatazoneProjectMembershipAssignments</a>]

---

##### `put_resource_tags` <a name="put_resource_tags" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.putResourceTags"></a>

```python
def put_resource_tags(
  value: IResolvable | typing.List[DatazoneProjectResourceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.putResourceTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags">DatazoneProjectResourceTags</a>]

---

##### `put_user_parameters` <a name="put_user_parameters" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.putUserParameters"></a>

```python
def put_user_parameters(
  value: IResolvable | typing.List[DatazoneProjectUserParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.putUserParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters">DatazoneProjectUserParameters</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_domain_unit_id` <a name="reset_domain_unit_id" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetDomainUnitId"></a>

```python
def reset_domain_unit_id() -> None
```

##### `reset_glossary_terms` <a name="reset_glossary_terms" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetGlossaryTerms"></a>

```python
def reset_glossary_terms() -> None
```

##### `reset_membership_assignments` <a name="reset_membership_assignments" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetMembershipAssignments"></a>

```python
def reset_membership_assignments() -> None
```

##### `reset_project_category` <a name="reset_project_category" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetProjectCategory"></a>

```python
def reset_project_category() -> None
```

##### `reset_project_execution_role` <a name="reset_project_execution_role" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetProjectExecutionRole"></a>

```python
def reset_project_execution_role() -> None
```

##### `reset_project_profile_id` <a name="reset_project_profile_id" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetProjectProfileId"></a>

```python
def reset_project_profile_id() -> None
```

##### `reset_project_profile_version` <a name="reset_project_profile_version" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetProjectProfileVersion"></a>

```python
def reset_project_profile_version() -> None
```

##### `reset_resource_tags` <a name="reset_resource_tags" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetResourceTags"></a>

```python
def reset_resource_tags() -> None
```

##### `reset_user_parameters` <a name="reset_user_parameters" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.resetUserParameters"></a>

```python
def reset_user_parameters() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DatazoneProject resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.isConstruct"></a>

```python
from cdktn_provider_awscc import datazone_project

datazoneProject.DatazoneProject.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.isTerraformElement"></a>

```python
from cdktn_provider_awscc import datazone_project

datazoneProject.DatazoneProject.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.isTerraformResource"></a>

```python
from cdktn_provider_awscc import datazone_project

datazoneProject.DatazoneProject.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import datazone_project

datazoneProject.DatazoneProject.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DatazoneProject resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatazoneProject to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatazoneProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatazoneProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.lastUpdatedAt">last_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.membershipAssignments">membership_assignments</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList">DatazoneProjectMembershipAssignmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectStatus">project_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.resourceTags">resource_tags</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList">DatazoneProjectResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.userParameters">user_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList">DatazoneProjectUserParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.domainIdentifierInput">domain_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.domainUnitIdInput">domain_unit_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.glossaryTermsInput">glossary_terms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.membershipAssignmentsInput">membership_assignments_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments">DatazoneProjectMembershipAssignments</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectCategoryInput">project_category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectExecutionRoleInput">project_execution_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectProfileIdInput">project_profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectProfileVersionInput">project_profile_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.resourceTagsInput">resource_tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags">DatazoneProjectResourceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.userParametersInput">user_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters">DatazoneProjectUserParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.domainIdentifier">domain_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.domainUnitId">domain_unit_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.glossaryTerms">glossary_terms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectCategory">project_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectExecutionRole">project_execution_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectProfileId">project_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectProfileVersion">project_profile_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_at`<sup>Required</sup> <a name="last_updated_at" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.lastUpdatedAt"></a>

```python
last_updated_at: str
```

- *Type:* str

---

##### `membership_assignments`<sup>Required</sup> <a name="membership_assignments" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.membershipAssignments"></a>

```python
membership_assignments: DatazoneProjectMembershipAssignmentsList
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList">DatazoneProjectMembershipAssignmentsList</a>

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `project_status`<sup>Required</sup> <a name="project_status" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectStatus"></a>

```python
project_status: str
```

- *Type:* str

---

##### `resource_tags`<sup>Required</sup> <a name="resource_tags" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.resourceTags"></a>

```python
resource_tags: DatazoneProjectResourceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList">DatazoneProjectResourceTagsList</a>

---

##### `user_parameters`<sup>Required</sup> <a name="user_parameters" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.userParameters"></a>

```python
user_parameters: DatazoneProjectUserParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList">DatazoneProjectUserParametersList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `domain_identifier_input`<sup>Optional</sup> <a name="domain_identifier_input" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.domainIdentifierInput"></a>

```python
domain_identifier_input: str
```

- *Type:* str

---

##### `domain_unit_id_input`<sup>Optional</sup> <a name="domain_unit_id_input" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.domainUnitIdInput"></a>

```python
domain_unit_id_input: str
```

- *Type:* str

---

##### `glossary_terms_input`<sup>Optional</sup> <a name="glossary_terms_input" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.glossaryTermsInput"></a>

```python
glossary_terms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `membership_assignments_input`<sup>Optional</sup> <a name="membership_assignments_input" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.membershipAssignmentsInput"></a>

```python
membership_assignments_input: IResolvable | typing.List[DatazoneProjectMembershipAssignments]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments">DatazoneProjectMembershipAssignments</a>]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_category_input`<sup>Optional</sup> <a name="project_category_input" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectCategoryInput"></a>

```python
project_category_input: str
```

- *Type:* str

---

##### `project_execution_role_input`<sup>Optional</sup> <a name="project_execution_role_input" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectExecutionRoleInput"></a>

```python
project_execution_role_input: str
```

- *Type:* str

---

##### `project_profile_id_input`<sup>Optional</sup> <a name="project_profile_id_input" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectProfileIdInput"></a>

```python
project_profile_id_input: str
```

- *Type:* str

---

##### `project_profile_version_input`<sup>Optional</sup> <a name="project_profile_version_input" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectProfileVersionInput"></a>

```python
project_profile_version_input: str
```

- *Type:* str

---

##### `resource_tags_input`<sup>Optional</sup> <a name="resource_tags_input" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.resourceTagsInput"></a>

```python
resource_tags_input: IResolvable | typing.List[DatazoneProjectResourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags">DatazoneProjectResourceTags</a>]

---

##### `user_parameters_input`<sup>Optional</sup> <a name="user_parameters_input" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.userParametersInput"></a>

```python
user_parameters_input: IResolvable | typing.List[DatazoneProjectUserParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters">DatazoneProjectUserParameters</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_identifier`<sup>Required</sup> <a name="domain_identifier" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.domainIdentifier"></a>

```python
domain_identifier: str
```

- *Type:* str

---

##### `domain_unit_id`<sup>Required</sup> <a name="domain_unit_id" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.domainUnitId"></a>

```python
domain_unit_id: str
```

- *Type:* str

---

##### `glossary_terms`<sup>Required</sup> <a name="glossary_terms" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.glossaryTerms"></a>

```python
glossary_terms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_category`<sup>Required</sup> <a name="project_category" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectCategory"></a>

```python
project_category: str
```

- *Type:* str

---

##### `project_execution_role`<sup>Required</sup> <a name="project_execution_role" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectExecutionRole"></a>

```python
project_execution_role: str
```

- *Type:* str

---

##### `project_profile_id`<sup>Required</sup> <a name="project_profile_id" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectProfileId"></a>

```python
project_profile_id: str
```

- *Type:* str

---

##### `project_profile_version`<sup>Required</sup> <a name="project_profile_version" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.projectProfileVersion"></a>

```python
project_profile_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datazoneProject.DatazoneProject.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneProjectConfig <a name="DatazoneProjectConfig" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_project

datazoneProject.DatazoneProjectConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain_identifier: str,
  name: str,
  description: str = None,
  domain_unit_id: str = None,
  glossary_terms: typing.List[str] = None,
  membership_assignments: IResolvable | typing.List[DatazoneProjectMembershipAssignments] = None,
  project_category: str = None,
  project_execution_role: str = None,
  project_profile_id: str = None,
  project_profile_version: str = None,
  resource_tags: IResolvable | typing.List[DatazoneProjectResourceTags] = None,
  user_parameters: IResolvable | typing.List[DatazoneProjectUserParameters] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.domainIdentifier">domain_identifier</a></code> | <code>str</code> | The ID of the Amazon DataZone domain in which this project is created. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.name">name</a></code> | <code>str</code> | The name of the Amazon DataZone project. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.description">description</a></code> | <code>str</code> | The description of the Amazon DataZone project. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.domainUnitId">domain_unit_id</a></code> | <code>str</code> | The ID of the domain unit. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.glossaryTerms">glossary_terms</a></code> | <code>typing.List[str]</code> | The glossary terms that can be used in this Amazon DataZone project. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.membershipAssignments">membership_assignments</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments">DatazoneProjectMembershipAssignments</a>]</code> | The project membership assignments. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.projectCategory">project_category</a></code> | <code>str</code> | The project category. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.projectExecutionRole">project_execution_role</a></code> | <code>str</code> | The project execution role ARN. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.projectProfileId">project_profile_id</a></code> | <code>str</code> | The project profile ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.projectProfileVersion">project_profile_version</a></code> | <code>str</code> | The project profile version to which the project should be updated. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.resourceTags">resource_tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags">DatazoneProjectResourceTags</a>]</code> | The resource tags of the project. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.userParameters">user_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters">DatazoneProjectUserParameters</a>]</code> | The user parameters of the project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_identifier`<sup>Required</sup> <a name="domain_identifier" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.domainIdentifier"></a>

```python
domain_identifier: str
```

- *Type:* str

The ID of the Amazon DataZone domain in which this project is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#domain_identifier DatazoneProject#domain_identifier}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Amazon DataZone project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#name DatazoneProject#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the Amazon DataZone project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#description DatazoneProject#description}

---

##### `domain_unit_id`<sup>Optional</sup> <a name="domain_unit_id" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.domainUnitId"></a>

```python
domain_unit_id: str
```

- *Type:* str

The ID of the domain unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#domain_unit_id DatazoneProject#domain_unit_id}

---

##### `glossary_terms`<sup>Optional</sup> <a name="glossary_terms" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.glossaryTerms"></a>

```python
glossary_terms: typing.List[str]
```

- *Type:* typing.List[str]

The glossary terms that can be used in this Amazon DataZone project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#glossary_terms DatazoneProject#glossary_terms}

---

##### `membership_assignments`<sup>Optional</sup> <a name="membership_assignments" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.membershipAssignments"></a>

```python
membership_assignments: IResolvable | typing.List[DatazoneProjectMembershipAssignments]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments">DatazoneProjectMembershipAssignments</a>]

The project membership assignments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#membership_assignments DatazoneProject#membership_assignments}

---

##### `project_category`<sup>Optional</sup> <a name="project_category" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.projectCategory"></a>

```python
project_category: str
```

- *Type:* str

The project category.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#project_category DatazoneProject#project_category}

---

##### `project_execution_role`<sup>Optional</sup> <a name="project_execution_role" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.projectExecutionRole"></a>

```python
project_execution_role: str
```

- *Type:* str

The project execution role ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#project_execution_role DatazoneProject#project_execution_role}

---

##### `project_profile_id`<sup>Optional</sup> <a name="project_profile_id" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.projectProfileId"></a>

```python
project_profile_id: str
```

- *Type:* str

The project profile ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#project_profile_id DatazoneProject#project_profile_id}

---

##### `project_profile_version`<sup>Optional</sup> <a name="project_profile_version" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.projectProfileVersion"></a>

```python
project_profile_version: str
```

- *Type:* str

The project profile version to which the project should be updated.

You can only specify the following string for this parameter: latest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#project_profile_version DatazoneProject#project_profile_version}

---

##### `resource_tags`<sup>Optional</sup> <a name="resource_tags" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.resourceTags"></a>

```python
resource_tags: IResolvable | typing.List[DatazoneProjectResourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags">DatazoneProjectResourceTags</a>]

The resource tags of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#resource_tags DatazoneProject#resource_tags}

---

##### `user_parameters`<sup>Optional</sup> <a name="user_parameters" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectConfig.property.userParameters"></a>

```python
user_parameters: IResolvable | typing.List[DatazoneProjectUserParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters">DatazoneProjectUserParameters</a>]

The user parameters of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#user_parameters DatazoneProject#user_parameters}

---

### DatazoneProjectMembershipAssignments <a name="DatazoneProjectMembershipAssignments" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_project

datazoneProject.DatazoneProjectMembershipAssignments(
  designation: str = None,
  member: DatazoneProjectMembershipAssignmentsMember = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments.property.designation">designation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#designation DatazoneProject#designation}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments.property.member">member</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember">DatazoneProjectMembershipAssignmentsMember</a></code> | The member of the project. |

---

##### `designation`<sup>Optional</sup> <a name="designation" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments.property.designation"></a>

```python
designation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#designation DatazoneProject#designation}.

---

##### `member`<sup>Optional</sup> <a name="member" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments.property.member"></a>

```python
member: DatazoneProjectMembershipAssignmentsMember
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember">DatazoneProjectMembershipAssignmentsMember</a>

The member of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#member DatazoneProject#member}

---

### DatazoneProjectMembershipAssignmentsMember <a name="DatazoneProjectMembershipAssignmentsMember" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_project

datazoneProject.DatazoneProjectMembershipAssignmentsMember(
  group_identifier: str = None,
  user_identifier: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember.property.groupIdentifier">group_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#group_identifier DatazoneProject#group_identifier}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember.property.userIdentifier">user_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#user_identifier DatazoneProject#user_identifier}. |

---

##### `group_identifier`<sup>Optional</sup> <a name="group_identifier" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember.property.groupIdentifier"></a>

```python
group_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#group_identifier DatazoneProject#group_identifier}.

---

##### `user_identifier`<sup>Optional</sup> <a name="user_identifier" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember.property.userIdentifier"></a>

```python
user_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#user_identifier DatazoneProject#user_identifier}.

---

### DatazoneProjectResourceTags <a name="DatazoneProjectResourceTags" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_project

datazoneProject.DatazoneProjectResourceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#key DatazoneProject#key}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#value DatazoneProject#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#key DatazoneProject#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#value DatazoneProject#value}.

---

### DatazoneProjectUserParameters <a name="DatazoneProjectUserParameters" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_project

datazoneProject.DatazoneProjectUserParameters(
  environment_configuration_name: str = None,
  environment_id: str = None,
  environment_parameters: IResolvable | typing.List[DatazoneProjectUserParametersEnvironmentParameters] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters.property.environmentConfigurationName">environment_configuration_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#environment_configuration_name DatazoneProject#environment_configuration_name}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters.property.environmentId">environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#environment_id DatazoneProject#environment_id}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters.property.environmentParameters">environment_parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters">DatazoneProjectUserParametersEnvironmentParameters</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#environment_parameters DatazoneProject#environment_parameters}. |

---

##### `environment_configuration_name`<sup>Optional</sup> <a name="environment_configuration_name" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters.property.environmentConfigurationName"></a>

```python
environment_configuration_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#environment_configuration_name DatazoneProject#environment_configuration_name}.

---

##### `environment_id`<sup>Optional</sup> <a name="environment_id" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#environment_id DatazoneProject#environment_id}.

---

##### `environment_parameters`<sup>Optional</sup> <a name="environment_parameters" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters.property.environmentParameters"></a>

```python
environment_parameters: IResolvable | typing.List[DatazoneProjectUserParametersEnvironmentParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters">DatazoneProjectUserParametersEnvironmentParameters</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#environment_parameters DatazoneProject#environment_parameters}.

---

### DatazoneProjectUserParametersEnvironmentParameters <a name="DatazoneProjectUserParametersEnvironmentParameters" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_project

datazoneProject.DatazoneProjectUserParametersEnvironmentParameters(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#name DatazoneProject#name}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#value DatazoneProject#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#name DatazoneProject#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#value DatazoneProject#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneProjectMembershipAssignmentsList <a name="DatazoneProjectMembershipAssignmentsList" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_project

datazoneProject.DatazoneProjectMembershipAssignmentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatazoneProjectMembershipAssignmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments">DatazoneProjectMembershipAssignments</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatazoneProjectMembershipAssignments]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments">DatazoneProjectMembershipAssignments</a>]

---


### DatazoneProjectMembershipAssignmentsMemberOutputReference <a name="DatazoneProjectMembershipAssignmentsMemberOutputReference" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_project

datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.resetGroupIdentifier">reset_group_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.resetUserIdentifier">reset_user_identifier</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group_identifier` <a name="reset_group_identifier" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.resetGroupIdentifier"></a>

```python
def reset_group_identifier() -> None
```

##### `reset_user_identifier` <a name="reset_user_identifier" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.resetUserIdentifier"></a>

```python
def reset_user_identifier() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.groupIdentifierInput">group_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.userIdentifierInput">user_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.groupIdentifier">group_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.userIdentifier">user_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember">DatazoneProjectMembershipAssignmentsMember</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_identifier_input`<sup>Optional</sup> <a name="group_identifier_input" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.groupIdentifierInput"></a>

```python
group_identifier_input: str
```

- *Type:* str

---

##### `user_identifier_input`<sup>Optional</sup> <a name="user_identifier_input" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.userIdentifierInput"></a>

```python
user_identifier_input: str
```

- *Type:* str

---

##### `group_identifier`<sup>Required</sup> <a name="group_identifier" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.groupIdentifier"></a>

```python
group_identifier: str
```

- *Type:* str

---

##### `user_identifier`<sup>Required</sup> <a name="user_identifier" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.userIdentifier"></a>

```python
user_identifier: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneProjectMembershipAssignmentsMember
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember">DatazoneProjectMembershipAssignmentsMember</a>

---


### DatazoneProjectMembershipAssignmentsOutputReference <a name="DatazoneProjectMembershipAssignmentsOutputReference" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_project

datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.putMember">put_member</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.resetDesignation">reset_designation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.resetMember">reset_member</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_member` <a name="put_member" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.putMember"></a>

```python
def put_member(
  group_identifier: str = None,
  user_identifier: str = None
) -> None
```

###### `group_identifier`<sup>Optional</sup> <a name="group_identifier" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.putMember.parameter.groupIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#group_identifier DatazoneProject#group_identifier}.

---

###### `user_identifier`<sup>Optional</sup> <a name="user_identifier" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.putMember.parameter.userIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_project#user_identifier DatazoneProject#user_identifier}.

---

##### `reset_designation` <a name="reset_designation" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.resetDesignation"></a>

```python
def reset_designation() -> None
```

##### `reset_member` <a name="reset_member" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.resetMember"></a>

```python
def reset_member() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.member">member</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference">DatazoneProjectMembershipAssignmentsMemberOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.designationInput">designation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.memberInput">member_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember">DatazoneProjectMembershipAssignmentsMember</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.designation">designation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments">DatazoneProjectMembershipAssignments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.member"></a>

```python
member: DatazoneProjectMembershipAssignmentsMemberOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMemberOutputReference">DatazoneProjectMembershipAssignmentsMemberOutputReference</a>

---

##### `designation_input`<sup>Optional</sup> <a name="designation_input" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.designationInput"></a>

```python
designation_input: str
```

- *Type:* str

---

##### `member_input`<sup>Optional</sup> <a name="member_input" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.memberInput"></a>

```python
member_input: IResolvable | DatazoneProjectMembershipAssignmentsMember
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsMember">DatazoneProjectMembershipAssignmentsMember</a>

---

##### `designation`<sup>Required</sup> <a name="designation" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.designation"></a>

```python
designation: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignmentsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneProjectMembershipAssignments
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectMembershipAssignments">DatazoneProjectMembershipAssignments</a>

---


### DatazoneProjectResourceTagsList <a name="DatazoneProjectResourceTagsList" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_project

datazoneProject.DatazoneProjectResourceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatazoneProjectResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags">DatazoneProjectResourceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatazoneProjectResourceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags">DatazoneProjectResourceTags</a>]

---


### DatazoneProjectResourceTagsOutputReference <a name="DatazoneProjectResourceTagsOutputReference" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_project

datazoneProject.DatazoneProjectResourceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags">DatazoneProjectResourceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneProjectResourceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectResourceTags">DatazoneProjectResourceTags</a>

---


### DatazoneProjectUserParametersEnvironmentParametersList <a name="DatazoneProjectUserParametersEnvironmentParametersList" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_project

datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatazoneProjectUserParametersEnvironmentParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters">DatazoneProjectUserParametersEnvironmentParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatazoneProjectUserParametersEnvironmentParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters">DatazoneProjectUserParametersEnvironmentParameters</a>]

---


### DatazoneProjectUserParametersEnvironmentParametersOutputReference <a name="DatazoneProjectUserParametersEnvironmentParametersOutputReference" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_project

datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters">DatazoneProjectUserParametersEnvironmentParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneProjectUserParametersEnvironmentParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters">DatazoneProjectUserParametersEnvironmentParameters</a>

---


### DatazoneProjectUserParametersList <a name="DatazoneProjectUserParametersList" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_project

datazoneProject.DatazoneProjectUserParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatazoneProjectUserParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters">DatazoneProjectUserParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DatazoneProjectUserParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters">DatazoneProjectUserParameters</a>]

---


### DatazoneProjectUserParametersOutputReference <a name="DatazoneProjectUserParametersOutputReference" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import datazone_project

datazoneProject.DatazoneProjectUserParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.putEnvironmentParameters">put_environment_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.resetEnvironmentConfigurationName">reset_environment_configuration_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.resetEnvironmentId">reset_environment_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.resetEnvironmentParameters">reset_environment_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_environment_parameters` <a name="put_environment_parameters" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.putEnvironmentParameters"></a>

```python
def put_environment_parameters(
  value: IResolvable | typing.List[DatazoneProjectUserParametersEnvironmentParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.putEnvironmentParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters">DatazoneProjectUserParametersEnvironmentParameters</a>]

---

##### `reset_environment_configuration_name` <a name="reset_environment_configuration_name" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.resetEnvironmentConfigurationName"></a>

```python
def reset_environment_configuration_name() -> None
```

##### `reset_environment_id` <a name="reset_environment_id" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.resetEnvironmentId"></a>

```python
def reset_environment_id() -> None
```

##### `reset_environment_parameters` <a name="reset_environment_parameters" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.resetEnvironmentParameters"></a>

```python
def reset_environment_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.environmentParameters">environment_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList">DatazoneProjectUserParametersEnvironmentParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.environmentConfigurationNameInput">environment_configuration_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.environmentIdInput">environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.environmentParametersInput">environment_parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters">DatazoneProjectUserParametersEnvironmentParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.environmentConfigurationName">environment_configuration_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.environmentId">environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters">DatazoneProjectUserParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `environment_parameters`<sup>Required</sup> <a name="environment_parameters" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.environmentParameters"></a>

```python
environment_parameters: DatazoneProjectUserParametersEnvironmentParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParametersList">DatazoneProjectUserParametersEnvironmentParametersList</a>

---

##### `environment_configuration_name_input`<sup>Optional</sup> <a name="environment_configuration_name_input" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.environmentConfigurationNameInput"></a>

```python
environment_configuration_name_input: str
```

- *Type:* str

---

##### `environment_id_input`<sup>Optional</sup> <a name="environment_id_input" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.environmentIdInput"></a>

```python
environment_id_input: str
```

- *Type:* str

---

##### `environment_parameters_input`<sup>Optional</sup> <a name="environment_parameters_input" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.environmentParametersInput"></a>

```python
environment_parameters_input: IResolvable | typing.List[DatazoneProjectUserParametersEnvironmentParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersEnvironmentParameters">DatazoneProjectUserParametersEnvironmentParameters</a>]

---

##### `environment_configuration_name`<sup>Required</sup> <a name="environment_configuration_name" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.environmentConfigurationName"></a>

```python
environment_configuration_name: str
```

- *Type:* str

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DatazoneProjectUserParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.datazoneProject.DatazoneProjectUserParameters">DatazoneProjectUserParameters</a>

---



