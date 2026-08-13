# `cleanroomsConfiguredTableAssociation` Submodule <a name="`cleanroomsConfiguredTableAssociation` Submodule" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsConfiguredTableAssociation <a name="CleanroomsConfiguredTableAssociation" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association awscc_cleanrooms_configured_table_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_configured_table_association

cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  configured_table_identifier: str,
  membership_identifier: str,
  name: str,
  role_arn: str,
  configured_table_association_analysis_rules: IResolvable | typing.List[CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules] = None,
  description: str = None,
  tags: IResolvable | typing.List[CleanroomsConfiguredTableAssociationTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.configuredTableIdentifier">configured_table_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#configured_table_identifier CleanroomsConfiguredTableAssociation#configured_table_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.membershipIdentifier">membership_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#membership_identifier CleanroomsConfiguredTableAssociation#membership_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#name CleanroomsConfiguredTableAssociation#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#role_arn CleanroomsConfiguredTableAssociation#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.configuredTableAssociationAnalysisRules">configured_table_association_analysis_rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#configured_table_association_analysis_rules CleanroomsConfiguredTableAssociation#configured_table_association_analysis_rules}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#description CleanroomsConfiguredTableAssociation#description}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags">CleanroomsConfiguredTableAssociationTags</a>]</code> | An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configured_table_identifier`<sup>Required</sup> <a name="configured_table_identifier" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.configuredTableIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#configured_table_identifier CleanroomsConfiguredTableAssociation#configured_table_identifier}.

---

##### `membership_identifier`<sup>Required</sup> <a name="membership_identifier" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.membershipIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#membership_identifier CleanroomsConfiguredTableAssociation#membership_identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#name CleanroomsConfiguredTableAssociation#name}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#role_arn CleanroomsConfiguredTableAssociation#role_arn}.

---

##### `configured_table_association_analysis_rules`<sup>Optional</sup> <a name="configured_table_association_analysis_rules" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.configuredTableAssociationAnalysisRules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#configured_table_association_analysis_rules CleanroomsConfiguredTableAssociation#configured_table_association_analysis_rules}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#description CleanroomsConfiguredTableAssociation#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags">CleanroomsConfiguredTableAssociationTags</a>]

An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#tags CleanroomsConfiguredTableAssociation#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.putConfiguredTableAssociationAnalysisRules">put_configured_table_association_analysis_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.resetConfiguredTableAssociationAnalysisRules">reset_configured_table_association_analysis_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_configured_table_association_analysis_rules` <a name="put_configured_table_association_analysis_rules" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.putConfiguredTableAssociationAnalysisRules"></a>

```python
def put_configured_table_association_analysis_rules(
  value: IResolvable | typing.List[CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.putConfiguredTableAssociationAnalysisRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CleanroomsConfiguredTableAssociationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags">CleanroomsConfiguredTableAssociationTags</a>]

---

##### `reset_configured_table_association_analysis_rules` <a name="reset_configured_table_association_analysis_rules" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.resetConfiguredTableAssociationAnalysisRules"></a>

```python
def reset_configured_table_association_analysis_rules() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CleanroomsConfiguredTableAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.isConstruct"></a>

```python
from cdktn_provider_awscc import cleanrooms_configured_table_association

cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cleanrooms_configured_table_association

cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cleanrooms_configured_table_association

cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cleanrooms_configured_table_association

cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CleanroomsConfiguredTableAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CleanroomsConfiguredTableAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CleanroomsConfiguredTableAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CleanroomsConfiguredTableAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.configuredTableAssociationAnalysisRules">configured_table_association_analysis_rules</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.configuredTableAssociationIdentifier">configured_table_association_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList">CleanroomsConfiguredTableAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.configuredTableAssociationAnalysisRulesInput">configured_table_association_analysis_rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.configuredTableIdentifierInput">configured_table_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.membershipIdentifierInput">membership_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags">CleanroomsConfiguredTableAssociationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.configuredTableIdentifier">configured_table_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.membershipIdentifier">membership_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `configured_table_association_analysis_rules`<sup>Required</sup> <a name="configured_table_association_analysis_rules" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.configuredTableAssociationAnalysisRules"></a>

```python
configured_table_association_analysis_rules: CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList</a>

---

##### `configured_table_association_identifier`<sup>Required</sup> <a name="configured_table_association_identifier" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.configuredTableAssociationIdentifier"></a>

```python
configured_table_association_identifier: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.tags"></a>

```python
tags: CleanroomsConfiguredTableAssociationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList">CleanroomsConfiguredTableAssociationTagsList</a>

---

##### `configured_table_association_analysis_rules_input`<sup>Optional</sup> <a name="configured_table_association_analysis_rules_input" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.configuredTableAssociationAnalysisRulesInput"></a>

```python
configured_table_association_analysis_rules_input: IResolvable | typing.List[CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules</a>]

---

##### `configured_table_identifier_input`<sup>Optional</sup> <a name="configured_table_identifier_input" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.configuredTableIdentifierInput"></a>

```python
configured_table_identifier_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `membership_identifier_input`<sup>Optional</sup> <a name="membership_identifier_input" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.membershipIdentifierInput"></a>

```python
membership_identifier_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CleanroomsConfiguredTableAssociationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags">CleanroomsConfiguredTableAssociationTags</a>]

---

##### `configured_table_identifier`<sup>Required</sup> <a name="configured_table_identifier" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.configuredTableIdentifier"></a>

```python
configured_table_identifier: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `membership_identifier`<sup>Required</sup> <a name="membership_identifier" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.membershipIdentifier"></a>

```python
membership_identifier: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsConfiguredTableAssociationConfig <a name="CleanroomsConfiguredTableAssociationConfig" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_configured_table_association

cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  configured_table_identifier: str,
  membership_identifier: str,
  name: str,
  role_arn: str,
  configured_table_association_analysis_rules: IResolvable | typing.List[CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules] = None,
  description: str = None,
  tags: IResolvable | typing.List[CleanroomsConfiguredTableAssociationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.configuredTableIdentifier">configured_table_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#configured_table_identifier CleanroomsConfiguredTableAssociation#configured_table_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.membershipIdentifier">membership_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#membership_identifier CleanroomsConfiguredTableAssociation#membership_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#name CleanroomsConfiguredTableAssociation#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#role_arn CleanroomsConfiguredTableAssociation#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.configuredTableAssociationAnalysisRules">configured_table_association_analysis_rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#configured_table_association_analysis_rules CleanroomsConfiguredTableAssociation#configured_table_association_analysis_rules}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#description CleanroomsConfiguredTableAssociation#description}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags">CleanroomsConfiguredTableAssociationTags</a>]</code> | An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `configured_table_identifier`<sup>Required</sup> <a name="configured_table_identifier" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.configuredTableIdentifier"></a>

```python
configured_table_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#configured_table_identifier CleanroomsConfiguredTableAssociation#configured_table_identifier}.

---

##### `membership_identifier`<sup>Required</sup> <a name="membership_identifier" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.membershipIdentifier"></a>

```python
membership_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#membership_identifier CleanroomsConfiguredTableAssociation#membership_identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#name CleanroomsConfiguredTableAssociation#name}.

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#role_arn CleanroomsConfiguredTableAssociation#role_arn}.

---

##### `configured_table_association_analysis_rules`<sup>Optional</sup> <a name="configured_table_association_analysis_rules" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.configuredTableAssociationAnalysisRules"></a>

```python
configured_table_association_analysis_rules: IResolvable | typing.List[CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#configured_table_association_analysis_rules CleanroomsConfiguredTableAssociation#configured_table_association_analysis_rules}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#description CleanroomsConfiguredTableAssociation#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CleanroomsConfiguredTableAssociationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags">CleanroomsConfiguredTableAssociationTags</a>]

An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#tags CleanroomsConfiguredTableAssociation#tags}

---

### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_configured_table_association

cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules(
  policy: CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules.property.policy">policy</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#policy CleanroomsConfiguredTableAssociation#policy}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#type CleanroomsConfiguredTableAssociation#type}. |

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules.property.policy"></a>

```python
policy: CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#policy CleanroomsConfiguredTableAssociation#policy}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#type CleanroomsConfiguredTableAssociation#type}.

---

### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_configured_table_association

cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy(
  v1: CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1 = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy.property.v1">v1</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#v1 CleanroomsConfiguredTableAssociation#v1}. |

---

##### `v1`<sup>Optional</sup> <a name="v1" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy.property.v1"></a>

```python
v1: CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#v1 CleanroomsConfiguredTableAssociation#v1}.

---

### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1 <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_configured_table_association

cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1(
  aggregation: CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation = None,
  custom: CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom = None,
  list: CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1.property.aggregation">aggregation</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#aggregation CleanroomsConfiguredTableAssociation#aggregation}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#custom CleanroomsConfiguredTableAssociation#custom}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1.property.list">list</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#list CleanroomsConfiguredTableAssociation#list}. |

---

##### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1.property.aggregation"></a>

```python
aggregation: CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#aggregation CleanroomsConfiguredTableAssociation#aggregation}.

---

##### `custom`<sup>Optional</sup> <a name="custom" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1.property.custom"></a>

```python
custom: CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#custom CleanroomsConfiguredTableAssociation#custom}.

---

##### `list`<sup>Optional</sup> <a name="list" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1.property.list"></a>

```python
list: CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#list CleanroomsConfiguredTableAssociation#list}.

---

### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_configured_table_association

cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation(
  allowed_additional_analyses: typing.List[str] = None,
  allowed_result_receivers: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation.property.allowedAdditionalAnalyses">allowed_additional_analyses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#allowed_additional_analyses CleanroomsConfiguredTableAssociation#allowed_additional_analyses}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation.property.allowedResultReceivers">allowed_result_receivers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#allowed_result_receivers CleanroomsConfiguredTableAssociation#allowed_result_receivers}. |

---

##### `allowed_additional_analyses`<sup>Optional</sup> <a name="allowed_additional_analyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation.property.allowedAdditionalAnalyses"></a>

```python
allowed_additional_analyses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#allowed_additional_analyses CleanroomsConfiguredTableAssociation#allowed_additional_analyses}.

---

##### `allowed_result_receivers`<sup>Optional</sup> <a name="allowed_result_receivers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation.property.allowedResultReceivers"></a>

```python
allowed_result_receivers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#allowed_result_receivers CleanroomsConfiguredTableAssociation#allowed_result_receivers}.

---

### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_configured_table_association

cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom(
  allowed_additional_analyses: typing.List[str] = None,
  allowed_result_receivers: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom.property.allowedAdditionalAnalyses">allowed_additional_analyses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#allowed_additional_analyses CleanroomsConfiguredTableAssociation#allowed_additional_analyses}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom.property.allowedResultReceivers">allowed_result_receivers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#allowed_result_receivers CleanroomsConfiguredTableAssociation#allowed_result_receivers}. |

---

##### `allowed_additional_analyses`<sup>Optional</sup> <a name="allowed_additional_analyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom.property.allowedAdditionalAnalyses"></a>

```python
allowed_additional_analyses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#allowed_additional_analyses CleanroomsConfiguredTableAssociation#allowed_additional_analyses}.

---

##### `allowed_result_receivers`<sup>Optional</sup> <a name="allowed_result_receivers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom.property.allowedResultReceivers"></a>

```python
allowed_result_receivers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#allowed_result_receivers CleanroomsConfiguredTableAssociation#allowed_result_receivers}.

---

### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_configured_table_association

cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct(
  allowed_additional_analyses: typing.List[str] = None,
  allowed_result_receivers: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct.property.allowedAdditionalAnalyses">allowed_additional_analyses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#allowed_additional_analyses CleanroomsConfiguredTableAssociation#allowed_additional_analyses}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct.property.allowedResultReceivers">allowed_result_receivers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#allowed_result_receivers CleanroomsConfiguredTableAssociation#allowed_result_receivers}. |

---

##### `allowed_additional_analyses`<sup>Optional</sup> <a name="allowed_additional_analyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct.property.allowedAdditionalAnalyses"></a>

```python
allowed_additional_analyses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#allowed_additional_analyses CleanroomsConfiguredTableAssociation#allowed_additional_analyses}.

---

##### `allowed_result_receivers`<sup>Optional</sup> <a name="allowed_result_receivers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct.property.allowedResultReceivers"></a>

```python
allowed_result_receivers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#allowed_result_receivers CleanroomsConfiguredTableAssociation#allowed_result_receivers}.

---

### CleanroomsConfiguredTableAssociationTags <a name="CleanroomsConfiguredTableAssociationTags" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_configured_table_association

cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#key CleanroomsConfiguredTableAssociation#key}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#value CleanroomsConfiguredTableAssociation#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#key CleanroomsConfiguredTableAssociation#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#value CleanroomsConfiguredTableAssociation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_configured_table_association

cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules</a>]

---


### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_configured_table_association

cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.putPolicy">put_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.resetPolicy">reset_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_policy` <a name="put_policy" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.putPolicy"></a>

```python
def put_policy(
  v1: CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1 = None
) -> None
```

###### `v1`<sup>Optional</sup> <a name="v1" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.putPolicy.parameter.v1"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#v1 CleanroomsConfiguredTableAssociation#v1}.

---

##### `reset_policy` <a name="reset_policy" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.resetPolicy"></a>

```python
def reset_policy() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.policy">policy</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.policyInput">policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.policy"></a>

```python
policy: CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference</a>

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.policyInput"></a>

```python
policy_input: IResolvable | CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRules</a>

---


### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_configured_table_association

cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.putV1">put_v1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.resetV1">reset_v1</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_v1` <a name="put_v1" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.putV1"></a>

```python
def put_v1(
  aggregation: CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation = None,
  custom: CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom = None,
  list: CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct = None
) -> None
```

###### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.putV1.parameter.aggregation"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#aggregation CleanroomsConfiguredTableAssociation#aggregation}.

---

###### `custom`<sup>Optional</sup> <a name="custom" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.putV1.parameter.custom"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#custom CleanroomsConfiguredTableAssociation#custom}.

---

###### `list`<sup>Optional</sup> <a name="list" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.putV1.parameter.list"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#list CleanroomsConfiguredTableAssociation#list}.

---

##### `reset_v1` <a name="reset_v1" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.resetV1"></a>

```python
def reset_v1() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.v1">v1</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.v1Input">v1_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `v1`<sup>Required</sup> <a name="v1" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.v1"></a>

```python
v1: CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference</a>

---

##### `v1_input`<sup>Optional</sup> <a name="v1_input" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.v1Input"></a>

```python
v1_input: IResolvable | CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicy</a>

---


### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_configured_table_association

cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.resetAllowedAdditionalAnalyses">reset_allowed_additional_analyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.resetAllowedResultReceivers">reset_allowed_result_receivers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_additional_analyses` <a name="reset_allowed_additional_analyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.resetAllowedAdditionalAnalyses"></a>

```python
def reset_allowed_additional_analyses() -> None
```

##### `reset_allowed_result_receivers` <a name="reset_allowed_result_receivers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.resetAllowedResultReceivers"></a>

```python
def reset_allowed_result_receivers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.allowedAdditionalAnalysesInput">allowed_additional_analyses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.allowedResultReceiversInput">allowed_result_receivers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.allowedAdditionalAnalyses">allowed_additional_analyses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.allowedResultReceivers">allowed_result_receivers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_additional_analyses_input`<sup>Optional</sup> <a name="allowed_additional_analyses_input" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.allowedAdditionalAnalysesInput"></a>

```python
allowed_additional_analyses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_result_receivers_input`<sup>Optional</sup> <a name="allowed_result_receivers_input" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.allowedResultReceiversInput"></a>

```python
allowed_result_receivers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_additional_analyses`<sup>Required</sup> <a name="allowed_additional_analyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.allowedAdditionalAnalyses"></a>

```python
allowed_additional_analyses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_result_receivers`<sup>Required</sup> <a name="allowed_result_receivers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.allowedResultReceivers"></a>

```python
allowed_result_receivers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation</a>

---


### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_configured_table_association

cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.resetAllowedAdditionalAnalyses">reset_allowed_additional_analyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.resetAllowedResultReceivers">reset_allowed_result_receivers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_additional_analyses` <a name="reset_allowed_additional_analyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.resetAllowedAdditionalAnalyses"></a>

```python
def reset_allowed_additional_analyses() -> None
```

##### `reset_allowed_result_receivers` <a name="reset_allowed_result_receivers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.resetAllowedResultReceivers"></a>

```python
def reset_allowed_result_receivers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.allowedAdditionalAnalysesInput">allowed_additional_analyses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceiversInput">allowed_result_receivers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.allowedAdditionalAnalyses">allowed_additional_analyses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceivers">allowed_result_receivers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_additional_analyses_input`<sup>Optional</sup> <a name="allowed_additional_analyses_input" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.allowedAdditionalAnalysesInput"></a>

```python
allowed_additional_analyses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_result_receivers_input`<sup>Optional</sup> <a name="allowed_result_receivers_input" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceiversInput"></a>

```python
allowed_result_receivers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_additional_analyses`<sup>Required</sup> <a name="allowed_additional_analyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.allowedAdditionalAnalyses"></a>

```python
allowed_additional_analyses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_result_receivers`<sup>Required</sup> <a name="allowed_result_receivers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceivers"></a>

```python
allowed_result_receivers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom</a>

---


### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_configured_table_association

cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.resetAllowedAdditionalAnalyses">reset_allowed_additional_analyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.resetAllowedResultReceivers">reset_allowed_result_receivers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_additional_analyses` <a name="reset_allowed_additional_analyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.resetAllowedAdditionalAnalyses"></a>

```python
def reset_allowed_additional_analyses() -> None
```

##### `reset_allowed_result_receivers` <a name="reset_allowed_result_receivers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.resetAllowedResultReceivers"></a>

```python
def reset_allowed_result_receivers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.allowedAdditionalAnalysesInput">allowed_additional_analyses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.allowedResultReceiversInput">allowed_result_receivers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.allowedAdditionalAnalyses">allowed_additional_analyses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.allowedResultReceivers">allowed_result_receivers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_additional_analyses_input`<sup>Optional</sup> <a name="allowed_additional_analyses_input" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.allowedAdditionalAnalysesInput"></a>

```python
allowed_additional_analyses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_result_receivers_input`<sup>Optional</sup> <a name="allowed_result_receivers_input" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.allowedResultReceiversInput"></a>

```python
allowed_result_receivers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_additional_analyses`<sup>Required</sup> <a name="allowed_additional_analyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.allowedAdditionalAnalyses"></a>

```python
allowed_additional_analyses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_result_receivers`<sup>Required</sup> <a name="allowed_result_receivers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.allowedResultReceivers"></a>

```python
allowed_result_receivers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct</a>

---


### CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference <a name="CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_configured_table_association

cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.putAggregation">put_aggregation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.putCustom">put_custom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.putList">put_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.resetAggregation">reset_aggregation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.resetCustom">reset_custom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.resetList">reset_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aggregation` <a name="put_aggregation" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.putAggregation"></a>

```python
def put_aggregation(
  allowed_additional_analyses: typing.List[str] = None,
  allowed_result_receivers: typing.List[str] = None
) -> None
```

###### `allowed_additional_analyses`<sup>Optional</sup> <a name="allowed_additional_analyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.putAggregation.parameter.allowedAdditionalAnalyses"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#allowed_additional_analyses CleanroomsConfiguredTableAssociation#allowed_additional_analyses}.

---

###### `allowed_result_receivers`<sup>Optional</sup> <a name="allowed_result_receivers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.putAggregation.parameter.allowedResultReceivers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#allowed_result_receivers CleanroomsConfiguredTableAssociation#allowed_result_receivers}.

---

##### `put_custom` <a name="put_custom" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.putCustom"></a>

```python
def put_custom(
  allowed_additional_analyses: typing.List[str] = None,
  allowed_result_receivers: typing.List[str] = None
) -> None
```

###### `allowed_additional_analyses`<sup>Optional</sup> <a name="allowed_additional_analyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.putCustom.parameter.allowedAdditionalAnalyses"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#allowed_additional_analyses CleanroomsConfiguredTableAssociation#allowed_additional_analyses}.

---

###### `allowed_result_receivers`<sup>Optional</sup> <a name="allowed_result_receivers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.putCustom.parameter.allowedResultReceivers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#allowed_result_receivers CleanroomsConfiguredTableAssociation#allowed_result_receivers}.

---

##### `put_list` <a name="put_list" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.putList"></a>

```python
def put_list(
  allowed_additional_analyses: typing.List[str] = None,
  allowed_result_receivers: typing.List[str] = None
) -> None
```

###### `allowed_additional_analyses`<sup>Optional</sup> <a name="allowed_additional_analyses" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.putList.parameter.allowedAdditionalAnalyses"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#allowed_additional_analyses CleanroomsConfiguredTableAssociation#allowed_additional_analyses}.

---

###### `allowed_result_receivers`<sup>Optional</sup> <a name="allowed_result_receivers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.putList.parameter.allowedResultReceivers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_configured_table_association#allowed_result_receivers CleanroomsConfiguredTableAssociation#allowed_result_receivers}.

---

##### `reset_aggregation` <a name="reset_aggregation" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.resetAggregation"></a>

```python
def reset_aggregation() -> None
```

##### `reset_custom` <a name="reset_custom" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.resetCustom"></a>

```python
def reset_custom() -> None
```

##### `reset_list` <a name="reset_list" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.resetList"></a>

```python
def reset_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.aggregation">aggregation</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.list">list</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.aggregationInput">aggregation_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.customInput">custom_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.listInput">list_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.aggregation"></a>

```python
aggregation: CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1AggregationOutputReference</a>

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.custom"></a>

```python
custom: CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1CustomOutputReference</a>

---

##### `list`<sup>Required</sup> <a name="list" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.list"></a>

```python
list: CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStructOutputReference</a>

---

##### `aggregation_input`<sup>Optional</sup> <a name="aggregation_input" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.aggregationInput"></a>

```python
aggregation_input: IResolvable | CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Aggregation</a>

---

##### `custom_input`<sup>Optional</sup> <a name="custom_input" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.customInput"></a>

```python
custom_input: IResolvable | CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1Custom</a>

---

##### `list_input`<sup>Optional</sup> <a name="list_input" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.listInput"></a>

```python
list_input: IResolvable | CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1ListStruct</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1">CleanroomsConfiguredTableAssociationConfiguredTableAssociationAnalysisRulesPolicyV1</a>

---


### CleanroomsConfiguredTableAssociationTagsList <a name="CleanroomsConfiguredTableAssociationTagsList" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_configured_table_association

cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CleanroomsConfiguredTableAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags">CleanroomsConfiguredTableAssociationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CleanroomsConfiguredTableAssociationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags">CleanroomsConfiguredTableAssociationTags</a>]

---


### CleanroomsConfiguredTableAssociationTagsOutputReference <a name="CleanroomsConfiguredTableAssociationTagsOutputReference" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_configured_table_association

cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags">CleanroomsConfiguredTableAssociationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsConfiguredTableAssociationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsConfiguredTableAssociation.CleanroomsConfiguredTableAssociationTags">CleanroomsConfiguredTableAssociationTags</a>

---



