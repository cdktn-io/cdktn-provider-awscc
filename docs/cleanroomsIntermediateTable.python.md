# `cleanroomsIntermediateTable` Submodule <a name="`cleanroomsIntermediateTable` Submodule" id="@cdktn/provider-awscc.cleanroomsIntermediateTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsIntermediateTable <a name="CleanroomsIntermediateTable" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table awscc_cleanrooms_intermediate_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_intermediate_table

cleanroomsIntermediateTable.CleanroomsIntermediateTable(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  membership_identifier: str,
  name: str,
  population_analysis_configuration: CleanroomsIntermediateTablePopulationAnalysisConfiguration,
  analysis_rules: IResolvable | typing.List[CleanroomsIntermediateTableAnalysisRules] = None,
  description: str = None,
  kms_key_arn: str = None,
  tags: IResolvable | typing.List[CleanroomsIntermediateTableTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.membershipIdentifier">membership_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#membership_identifier CleanroomsIntermediateTable#membership_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#name CleanroomsIntermediateTable#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.populationAnalysisConfiguration">population_analysis_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration">CleanroomsIntermediateTablePopulationAnalysisConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#population_analysis_configuration CleanroomsIntermediateTable#population_analysis_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.analysisRules">analysis_rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#analysis_rules CleanroomsIntermediateTable#analysis_rules}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#description CleanroomsIntermediateTable#description}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#kms_key_arn CleanroomsIntermediateTable#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#tags CleanroomsIntermediateTable#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `membership_identifier`<sup>Required</sup> <a name="membership_identifier" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.membershipIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#membership_identifier CleanroomsIntermediateTable#membership_identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#name CleanroomsIntermediateTable#name}.

---

##### `population_analysis_configuration`<sup>Required</sup> <a name="population_analysis_configuration" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.populationAnalysisConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration">CleanroomsIntermediateTablePopulationAnalysisConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#population_analysis_configuration CleanroomsIntermediateTable#population_analysis_configuration}.

---

##### `analysis_rules`<sup>Optional</sup> <a name="analysis_rules" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.analysisRules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#analysis_rules CleanroomsIntermediateTable#analysis_rules}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#description CleanroomsIntermediateTable#description}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.kmsKeyArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#kms_key_arn CleanroomsIntermediateTable#kms_key_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#tags CleanroomsIntermediateTable#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putAnalysisRules">put_analysis_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putPopulationAnalysisConfiguration">put_population_analysis_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetAnalysisRules">reset_analysis_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_analysis_rules` <a name="put_analysis_rules" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putAnalysisRules"></a>

```python
def put_analysis_rules(
  value: IResolvable | typing.List[CleanroomsIntermediateTableAnalysisRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putAnalysisRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a>]

---

##### `put_population_analysis_configuration` <a name="put_population_analysis_configuration" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putPopulationAnalysisConfiguration"></a>

```python
def put_population_analysis_configuration(
  sql_parameters: CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters = None
) -> None
```

###### `sql_parameters`<sup>Optional</sup> <a name="sql_parameters" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putPopulationAnalysisConfiguration.parameter.sqlParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#sql_parameters CleanroomsIntermediateTable#sql_parameters}.

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CleanroomsIntermediateTableTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a>]

---

##### `reset_analysis_rules` <a name="reset_analysis_rules" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetAnalysisRules"></a>

```python
def reset_analysis_rules() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CleanroomsIntermediateTable resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isConstruct"></a>

```python
from cdktn_provider_awscc import cleanrooms_intermediate_table

cleanroomsIntermediateTable.CleanroomsIntermediateTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cleanrooms_intermediate_table

cleanroomsIntermediateTable.CleanroomsIntermediateTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cleanrooms_intermediate_table

cleanroomsIntermediateTable.CleanroomsIntermediateTable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cleanrooms_intermediate_table

cleanroomsIntermediateTable.CleanroomsIntermediateTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CleanroomsIntermediateTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CleanroomsIntermediateTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CleanroomsIntermediateTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CleanroomsIntermediateTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.analysisRules">analysis_rules</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList">CleanroomsIntermediateTableAnalysisRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.collaborationArn">collaboration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.collaborationIdentifier">collaboration_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.intermediateTableIdentifier">intermediate_table_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.membershipArn">membership_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.populationAnalysisConfiguration">population_analysis_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference">CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList">CleanroomsIntermediateTableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.analysisRulesInput">analysis_rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.membershipIdentifierInput">membership_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.populationAnalysisConfigurationInput">population_analysis_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration">CleanroomsIntermediateTablePopulationAnalysisConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.membershipIdentifier">membership_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `analysis_rules`<sup>Required</sup> <a name="analysis_rules" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.analysisRules"></a>

```python
analysis_rules: CleanroomsIntermediateTableAnalysisRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList">CleanroomsIntermediateTableAnalysisRulesList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `collaboration_arn`<sup>Required</sup> <a name="collaboration_arn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.collaborationArn"></a>

```python
collaboration_arn: str
```

- *Type:* str

---

##### `collaboration_identifier`<sup>Required</sup> <a name="collaboration_identifier" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.collaborationIdentifier"></a>

```python
collaboration_identifier: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `intermediate_table_identifier`<sup>Required</sup> <a name="intermediate_table_identifier" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.intermediateTableIdentifier"></a>

```python
intermediate_table_identifier: str
```

- *Type:* str

---

##### `membership_arn`<sup>Required</sup> <a name="membership_arn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.membershipArn"></a>

```python
membership_arn: str
```

- *Type:* str

---

##### `population_analysis_configuration`<sup>Required</sup> <a name="population_analysis_configuration" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.populationAnalysisConfiguration"></a>

```python
population_analysis_configuration: CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference">CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.tags"></a>

```python
tags: CleanroomsIntermediateTableTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList">CleanroomsIntermediateTableTagsList</a>

---

##### `analysis_rules_input`<sup>Optional</sup> <a name="analysis_rules_input" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.analysisRulesInput"></a>

```python
analysis_rules_input: IResolvable | typing.List[CleanroomsIntermediateTableAnalysisRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a>]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `membership_identifier_input`<sup>Optional</sup> <a name="membership_identifier_input" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.membershipIdentifierInput"></a>

```python
membership_identifier_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `population_analysis_configuration_input`<sup>Optional</sup> <a name="population_analysis_configuration_input" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.populationAnalysisConfigurationInput"></a>

```python
population_analysis_configuration_input: IResolvable | CleanroomsIntermediateTablePopulationAnalysisConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration">CleanroomsIntermediateTablePopulationAnalysisConfiguration</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CleanroomsIntermediateTableTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `membership_identifier`<sup>Required</sup> <a name="membership_identifier" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.membershipIdentifier"></a>

```python
membership_identifier: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsIntermediateTableAnalysisRules <a name="CleanroomsIntermediateTableAnalysisRules" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_intermediate_table

cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules(
  policy: CleanroomsIntermediateTableAnalysisRulesPolicy = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules.property.policy">policy</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy">CleanroomsIntermediateTableAnalysisRulesPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#policy CleanroomsIntermediateTable#policy}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#type CleanroomsIntermediateTable#type}. |

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules.property.policy"></a>

```python
policy: CleanroomsIntermediateTableAnalysisRulesPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy">CleanroomsIntermediateTableAnalysisRulesPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#policy CleanroomsIntermediateTable#policy}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#type CleanroomsIntermediateTable#type}.

---

### CleanroomsIntermediateTableAnalysisRulesPolicy <a name="CleanroomsIntermediateTableAnalysisRulesPolicy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_intermediate_table

cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy(
  v1: CleanroomsIntermediateTableAnalysisRulesPolicyV1 = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy.property.v1">v1</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1">CleanroomsIntermediateTableAnalysisRulesPolicyV1</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#v1 CleanroomsIntermediateTable#v1}. |

---

##### `v1`<sup>Optional</sup> <a name="v1" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy.property.v1"></a>

```python
v1: CleanroomsIntermediateTableAnalysisRulesPolicyV1
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1">CleanroomsIntermediateTableAnalysisRulesPolicyV1</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#v1 CleanroomsIntermediateTable#v1}.

---

### CleanroomsIntermediateTableAnalysisRulesPolicyV1 <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_intermediate_table

cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1(
  custom: CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom">CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#custom CleanroomsIntermediateTable#custom}. |

---

##### `custom`<sup>Optional</sup> <a name="custom" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1.property.custom"></a>

```python
custom: CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom">CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#custom CleanroomsIntermediateTable#custom}.

---

### CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_intermediate_table

cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom(
  additional_analyses: str = None,
  allowed_analyses: typing.List[str] = None,
  allowed_analysis_providers: typing.List[str] = None,
  allowed_result_receivers: typing.List[str] = None,
  differential_privacy: CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy = None,
  disallowed_output_columns: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.additionalAnalyses">additional_analyses</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#additional_analyses CleanroomsIntermediateTable#additional_analyses}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.allowedAnalyses">allowed_analyses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#allowed_analyses CleanroomsIntermediateTable#allowed_analyses}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.allowedAnalysisProviders">allowed_analysis_providers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#allowed_analysis_providers CleanroomsIntermediateTable#allowed_analysis_providers}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.allowedResultReceivers">allowed_result_receivers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#allowed_result_receivers CleanroomsIntermediateTable#allowed_result_receivers}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.differentialPrivacy">differential_privacy</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#differential_privacy CleanroomsIntermediateTable#differential_privacy}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.disallowedOutputColumns">disallowed_output_columns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#disallowed_output_columns CleanroomsIntermediateTable#disallowed_output_columns}. |

---

##### `additional_analyses`<sup>Optional</sup> <a name="additional_analyses" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.additionalAnalyses"></a>

```python
additional_analyses: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#additional_analyses CleanroomsIntermediateTable#additional_analyses}.

---

##### `allowed_analyses`<sup>Optional</sup> <a name="allowed_analyses" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.allowedAnalyses"></a>

```python
allowed_analyses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#allowed_analyses CleanroomsIntermediateTable#allowed_analyses}.

---

##### `allowed_analysis_providers`<sup>Optional</sup> <a name="allowed_analysis_providers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.allowedAnalysisProviders"></a>

```python
allowed_analysis_providers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#allowed_analysis_providers CleanroomsIntermediateTable#allowed_analysis_providers}.

---

##### `allowed_result_receivers`<sup>Optional</sup> <a name="allowed_result_receivers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.allowedResultReceivers"></a>

```python
allowed_result_receivers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#allowed_result_receivers CleanroomsIntermediateTable#allowed_result_receivers}.

---

##### `differential_privacy`<sup>Optional</sup> <a name="differential_privacy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.differentialPrivacy"></a>

```python
differential_privacy: CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#differential_privacy CleanroomsIntermediateTable#differential_privacy}.

---

##### `disallowed_output_columns`<sup>Optional</sup> <a name="disallowed_output_columns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom.property.disallowedOutputColumns"></a>

```python
disallowed_output_columns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#disallowed_output_columns CleanroomsIntermediateTable#disallowed_output_columns}.

---

### CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_intermediate_table

cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy(
  columns: IResolvable | typing.List[CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy.property.columns">columns</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#columns CleanroomsIntermediateTable#columns}. |

---

##### `columns`<sup>Optional</sup> <a name="columns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy.property.columns"></a>

```python
columns: IResolvable | typing.List[CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#columns CleanroomsIntermediateTable#columns}.

---

### CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_intermediate_table

cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns(
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#name CleanroomsIntermediateTable#name}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#name CleanroomsIntermediateTable#name}.

---

### CleanroomsIntermediateTableConfig <a name="CleanroomsIntermediateTableConfig" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_intermediate_table

cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  membership_identifier: str,
  name: str,
  population_analysis_configuration: CleanroomsIntermediateTablePopulationAnalysisConfiguration,
  analysis_rules: IResolvable | typing.List[CleanroomsIntermediateTableAnalysisRules] = None,
  description: str = None,
  kms_key_arn: str = None,
  tags: IResolvable | typing.List[CleanroomsIntermediateTableTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.membershipIdentifier">membership_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#membership_identifier CleanroomsIntermediateTable#membership_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#name CleanroomsIntermediateTable#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.populationAnalysisConfiguration">population_analysis_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration">CleanroomsIntermediateTablePopulationAnalysisConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#population_analysis_configuration CleanroomsIntermediateTable#population_analysis_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.analysisRules">analysis_rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#analysis_rules CleanroomsIntermediateTable#analysis_rules}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#description CleanroomsIntermediateTable#description}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#kms_key_arn CleanroomsIntermediateTable#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#tags CleanroomsIntermediateTable#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `membership_identifier`<sup>Required</sup> <a name="membership_identifier" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.membershipIdentifier"></a>

```python
membership_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#membership_identifier CleanroomsIntermediateTable#membership_identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#name CleanroomsIntermediateTable#name}.

---

##### `population_analysis_configuration`<sup>Required</sup> <a name="population_analysis_configuration" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.populationAnalysisConfiguration"></a>

```python
population_analysis_configuration: CleanroomsIntermediateTablePopulationAnalysisConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration">CleanroomsIntermediateTablePopulationAnalysisConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#population_analysis_configuration CleanroomsIntermediateTable#population_analysis_configuration}.

---

##### `analysis_rules`<sup>Optional</sup> <a name="analysis_rules" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.analysisRules"></a>

```python
analysis_rules: IResolvable | typing.List[CleanroomsIntermediateTableAnalysisRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#analysis_rules CleanroomsIntermediateTable#analysis_rules}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#description CleanroomsIntermediateTable#description}.

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#kms_key_arn CleanroomsIntermediateTable#kms_key_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CleanroomsIntermediateTableTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#tags CleanroomsIntermediateTable#tags}.

---

### CleanroomsIntermediateTablePopulationAnalysisConfiguration <a name="CleanroomsIntermediateTablePopulationAnalysisConfiguration" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_intermediate_table

cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration(
  sql_parameters: CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration.property.sqlParameters">sql_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#sql_parameters CleanroomsIntermediateTable#sql_parameters}. |

---

##### `sql_parameters`<sup>Optional</sup> <a name="sql_parameters" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration.property.sqlParameters"></a>

```python
sql_parameters: CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#sql_parameters CleanroomsIntermediateTable#sql_parameters}.

---

### CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters <a name="CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_intermediate_table

cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters(
  analysis_template_arn: str = None,
  query_string: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters.property.analysisTemplateArn">analysis_template_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#analysis_template_arn CleanroomsIntermediateTable#analysis_template_arn}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters.property.queryString">query_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#query_string CleanroomsIntermediateTable#query_string}. |

---

##### `analysis_template_arn`<sup>Optional</sup> <a name="analysis_template_arn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters.property.analysisTemplateArn"></a>

```python
analysis_template_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#analysis_template_arn CleanroomsIntermediateTable#analysis_template_arn}.

---

##### `query_string`<sup>Optional</sup> <a name="query_string" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters.property.queryString"></a>

```python
query_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#query_string CleanroomsIntermediateTable#query_string}.

---

### CleanroomsIntermediateTableTags <a name="CleanroomsIntermediateTableTags" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_intermediate_table

cleanroomsIntermediateTable.CleanroomsIntermediateTableTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#key CleanroomsIntermediateTable#key}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#value CleanroomsIntermediateTable#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#key CleanroomsIntermediateTable#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#value CleanroomsIntermediateTable#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsIntermediateTableAnalysisRulesList <a name="CleanroomsIntermediateTableAnalysisRulesList" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_intermediate_table

cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CleanroomsIntermediateTableAnalysisRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CleanroomsIntermediateTableAnalysisRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a>]

---


### CleanroomsIntermediateTableAnalysisRulesOutputReference <a name="CleanroomsIntermediateTableAnalysisRulesOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_intermediate_table

cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.putPolicy">put_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.resetPolicy">reset_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_policy` <a name="put_policy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.putPolicy"></a>

```python
def put_policy(
  v1: CleanroomsIntermediateTableAnalysisRulesPolicyV1 = None
) -> None
```

###### `v1`<sup>Optional</sup> <a name="v1" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.putPolicy.parameter.v1"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1">CleanroomsIntermediateTableAnalysisRulesPolicyV1</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#v1 CleanroomsIntermediateTable#v1}.

---

##### `reset_policy` <a name="reset_policy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.resetPolicy"></a>

```python
def reset_policy() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.policy">policy</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.policyInput">policy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy">CleanroomsIntermediateTableAnalysisRulesPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.policy"></a>

```python
policy: CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference</a>

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.policyInput"></a>

```python
policy_input: IResolvable | CleanroomsIntermediateTableAnalysisRulesPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy">CleanroomsIntermediateTableAnalysisRulesPolicy</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsIntermediateTableAnalysisRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRules">CleanroomsIntermediateTableAnalysisRules</a>

---


### CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference <a name="CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_intermediate_table

cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.putV1">put_v1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.resetV1">reset_v1</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_v1` <a name="put_v1" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.putV1"></a>

```python
def put_v1(
  custom: CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom = None
) -> None
```

###### `custom`<sup>Optional</sup> <a name="custom" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.putV1.parameter.custom"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom">CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#custom CleanroomsIntermediateTable#custom}.

---

##### `reset_v1` <a name="reset_v1" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.resetV1"></a>

```python
def reset_v1() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.v1">v1</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.v1Input">v1_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1">CleanroomsIntermediateTableAnalysisRulesPolicyV1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy">CleanroomsIntermediateTableAnalysisRulesPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `v1`<sup>Required</sup> <a name="v1" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.v1"></a>

```python
v1: CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference</a>

---

##### `v1_input`<sup>Optional</sup> <a name="v1_input" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.v1Input"></a>

```python
v1_input: IResolvable | CleanroomsIntermediateTableAnalysisRulesPolicyV1
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1">CleanroomsIntermediateTableAnalysisRulesPolicyV1</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsIntermediateTableAnalysisRulesPolicy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicy">CleanroomsIntermediateTableAnalysisRulesPolicy</a>

---


### CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_intermediate_table

cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>]

---


### CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_intermediate_table

cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>

---


### CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_intermediate_table

cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.putColumns">put_columns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resetColumns">reset_columns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_columns` <a name="put_columns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.putColumns"></a>

```python
def put_columns(
  value: IResolvable | typing.List[CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.putColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>]

---

##### `reset_columns` <a name="reset_columns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.resetColumns"></a>

```python
def reset_columns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.columnsInput">columns_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.columns"></a>

```python
columns: CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumnsList</a>

---

##### `columns_input`<sup>Optional</sup> <a name="columns_input" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.columnsInput"></a>

```python
columns_input: IResolvable | typing.List[CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a>

---


### CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_intermediate_table

cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.putDifferentialPrivacy">put_differential_privacy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAdditionalAnalyses">reset_additional_analyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedAnalyses">reset_allowed_analyses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedAnalysisProviders">reset_allowed_analysis_providers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedResultReceivers">reset_allowed_result_receivers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetDifferentialPrivacy">reset_differential_privacy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetDisallowedOutputColumns">reset_disallowed_output_columns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_differential_privacy` <a name="put_differential_privacy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.putDifferentialPrivacy"></a>

```python
def put_differential_privacy(
  columns: IResolvable | typing.List[CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns] = None
) -> None
```

###### `columns`<sup>Optional</sup> <a name="columns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.putDifferentialPrivacy.parameter.columns"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyColumns</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#columns CleanroomsIntermediateTable#columns}.

---

##### `reset_additional_analyses` <a name="reset_additional_analyses" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAdditionalAnalyses"></a>

```python
def reset_additional_analyses() -> None
```

##### `reset_allowed_analyses` <a name="reset_allowed_analyses" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedAnalyses"></a>

```python
def reset_allowed_analyses() -> None
```

##### `reset_allowed_analysis_providers` <a name="reset_allowed_analysis_providers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedAnalysisProviders"></a>

```python
def reset_allowed_analysis_providers() -> None
```

##### `reset_allowed_result_receivers` <a name="reset_allowed_result_receivers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetAllowedResultReceivers"></a>

```python
def reset_allowed_result_receivers() -> None
```

##### `reset_differential_privacy` <a name="reset_differential_privacy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetDifferentialPrivacy"></a>

```python
def reset_differential_privacy() -> None
```

##### `reset_disallowed_output_columns` <a name="reset_disallowed_output_columns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.resetDisallowedOutputColumns"></a>

```python
def reset_disallowed_output_columns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.differentialPrivacy">differential_privacy</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.additionalAnalysesInput">additional_analyses_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysesInput">allowed_analyses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysisProvidersInput">allowed_analysis_providers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceiversInput">allowed_result_receivers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.differentialPrivacyInput">differential_privacy_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.disallowedOutputColumnsInput">disallowed_output_columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.additionalAnalyses">additional_analyses</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalyses">allowed_analyses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysisProviders">allowed_analysis_providers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceivers">allowed_result_receivers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.disallowedOutputColumns">disallowed_output_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom">CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `differential_privacy`<sup>Required</sup> <a name="differential_privacy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.differentialPrivacy"></a>

```python
differential_privacy: CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacyOutputReference</a>

---

##### `additional_analyses_input`<sup>Optional</sup> <a name="additional_analyses_input" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.additionalAnalysesInput"></a>

```python
additional_analyses_input: str
```

- *Type:* str

---

##### `allowed_analyses_input`<sup>Optional</sup> <a name="allowed_analyses_input" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysesInput"></a>

```python
allowed_analyses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_analysis_providers_input`<sup>Optional</sup> <a name="allowed_analysis_providers_input" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysisProvidersInput"></a>

```python
allowed_analysis_providers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_result_receivers_input`<sup>Optional</sup> <a name="allowed_result_receivers_input" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceiversInput"></a>

```python
allowed_result_receivers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `differential_privacy_input`<sup>Optional</sup> <a name="differential_privacy_input" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.differentialPrivacyInput"></a>

```python
differential_privacy_input: IResolvable | CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a>

---

##### `disallowed_output_columns_input`<sup>Optional</sup> <a name="disallowed_output_columns_input" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.disallowedOutputColumnsInput"></a>

```python
disallowed_output_columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `additional_analyses`<sup>Required</sup> <a name="additional_analyses" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.additionalAnalyses"></a>

```python
additional_analyses: str
```

- *Type:* str

---

##### `allowed_analyses`<sup>Required</sup> <a name="allowed_analyses" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalyses"></a>

```python
allowed_analyses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_analysis_providers`<sup>Required</sup> <a name="allowed_analysis_providers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedAnalysisProviders"></a>

```python
allowed_analysis_providers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_result_receivers`<sup>Required</sup> <a name="allowed_result_receivers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.allowedResultReceivers"></a>

```python
allowed_result_receivers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disallowed_output_columns`<sup>Required</sup> <a name="disallowed_output_columns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.disallowedOutputColumns"></a>

```python
disallowed_output_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom">CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom</a>

---


### CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference <a name="CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_intermediate_table

cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.putCustom">put_custom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.resetCustom">reset_custom</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom` <a name="put_custom" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.putCustom"></a>

```python
def put_custom(
  additional_analyses: str = None,
  allowed_analyses: typing.List[str] = None,
  allowed_analysis_providers: typing.List[str] = None,
  allowed_result_receivers: typing.List[str] = None,
  differential_privacy: CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy = None,
  disallowed_output_columns: typing.List[str] = None
) -> None
```

###### `additional_analyses`<sup>Optional</sup> <a name="additional_analyses" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.putCustom.parameter.additionalAnalyses"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#additional_analyses CleanroomsIntermediateTable#additional_analyses}.

---

###### `allowed_analyses`<sup>Optional</sup> <a name="allowed_analyses" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.putCustom.parameter.allowedAnalyses"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#allowed_analyses CleanroomsIntermediateTable#allowed_analyses}.

---

###### `allowed_analysis_providers`<sup>Optional</sup> <a name="allowed_analysis_providers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.putCustom.parameter.allowedAnalysisProviders"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#allowed_analysis_providers CleanroomsIntermediateTable#allowed_analysis_providers}.

---

###### `allowed_result_receivers`<sup>Optional</sup> <a name="allowed_result_receivers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.putCustom.parameter.allowedResultReceivers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#allowed_result_receivers CleanroomsIntermediateTable#allowed_result_receivers}.

---

###### `differential_privacy`<sup>Optional</sup> <a name="differential_privacy" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.putCustom.parameter.differentialPrivacy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomDifferentialPrivacy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#differential_privacy CleanroomsIntermediateTable#differential_privacy}.

---

###### `disallowed_output_columns`<sup>Optional</sup> <a name="disallowed_output_columns" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.putCustom.parameter.disallowedOutputColumns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#disallowed_output_columns CleanroomsIntermediateTable#disallowed_output_columns}.

---

##### `reset_custom` <a name="reset_custom" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.resetCustom"></a>

```python
def reset_custom() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.custom">custom</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.customInput">custom_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom">CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1">CleanroomsIntermediateTableAnalysisRulesPolicyV1</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.custom"></a>

```python
custom: CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference">CleanroomsIntermediateTableAnalysisRulesPolicyV1CustomOutputReference</a>

---

##### `custom_input`<sup>Optional</sup> <a name="custom_input" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.customInput"></a>

```python
custom_input: IResolvable | CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom">CleanroomsIntermediateTableAnalysisRulesPolicyV1Custom</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1OutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsIntermediateTableAnalysisRulesPolicyV1
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableAnalysisRulesPolicyV1">CleanroomsIntermediateTableAnalysisRulesPolicyV1</a>

---


### CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference <a name="CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_intermediate_table

cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.putSqlParameters">put_sql_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.resetSqlParameters">reset_sql_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_sql_parameters` <a name="put_sql_parameters" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.putSqlParameters"></a>

```python
def put_sql_parameters(
  analysis_template_arn: str = None,
  query_string: str = None
) -> None
```

###### `analysis_template_arn`<sup>Optional</sup> <a name="analysis_template_arn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.putSqlParameters.parameter.analysisTemplateArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#analysis_template_arn CleanroomsIntermediateTable#analysis_template_arn}.

---

###### `query_string`<sup>Optional</sup> <a name="query_string" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.putSqlParameters.parameter.queryString"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/cleanrooms_intermediate_table#query_string CleanroomsIntermediateTable#query_string}.

---

##### `reset_sql_parameters` <a name="reset_sql_parameters" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.resetSqlParameters"></a>

```python
def reset_sql_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.sqlParameters">sql_parameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.sqlParametersInput">sql_parameters_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration">CleanroomsIntermediateTablePopulationAnalysisConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sql_parameters`<sup>Required</sup> <a name="sql_parameters" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.sqlParameters"></a>

```python
sql_parameters: CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference</a>

---

##### `sql_parameters_input`<sup>Optional</sup> <a name="sql_parameters_input" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.sqlParametersInput"></a>

```python
sql_parameters_input: IResolvable | CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsIntermediateTablePopulationAnalysisConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfiguration">CleanroomsIntermediateTablePopulationAnalysisConfiguration</a>

---


### CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference <a name="CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_intermediate_table

cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resetAnalysisTemplateArn">reset_analysis_template_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resetQueryString">reset_query_string</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_analysis_template_arn` <a name="reset_analysis_template_arn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resetAnalysisTemplateArn"></a>

```python
def reset_analysis_template_arn() -> None
```

##### `reset_query_string` <a name="reset_query_string" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.resetQueryString"></a>

```python
def reset_query_string() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.analysisTemplateArnInput">analysis_template_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.queryStringInput">query_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.analysisTemplateArn">analysis_template_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.queryString">query_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `analysis_template_arn_input`<sup>Optional</sup> <a name="analysis_template_arn_input" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.analysisTemplateArnInput"></a>

```python
analysis_template_arn_input: str
```

- *Type:* str

---

##### `query_string_input`<sup>Optional</sup> <a name="query_string_input" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.queryStringInput"></a>

```python
query_string_input: str
```

- *Type:* str

---

##### `analysis_template_arn`<sup>Required</sup> <a name="analysis_template_arn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.analysisTemplateArn"></a>

```python
analysis_template_arn: str
```

- *Type:* str

---

##### `query_string`<sup>Required</sup> <a name="query_string" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.queryString"></a>

```python
query_string: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters">CleanroomsIntermediateTablePopulationAnalysisConfigurationSqlParameters</a>

---


### CleanroomsIntermediateTableTagsList <a name="CleanroomsIntermediateTableTagsList" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_intermediate_table

cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CleanroomsIntermediateTableTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CleanroomsIntermediateTableTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a>]

---


### CleanroomsIntermediateTableTagsOutputReference <a name="CleanroomsIntermediateTableTagsOutputReference" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cleanrooms_intermediate_table

cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CleanroomsIntermediateTableTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cleanroomsIntermediateTable.CleanroomsIntermediateTableTags">CleanroomsIntermediateTableTags</a>

---



