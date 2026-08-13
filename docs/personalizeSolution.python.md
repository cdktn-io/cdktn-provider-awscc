# `personalizeSolution` Submodule <a name="`personalizeSolution` Submodule" id="@cdktn/provider-awscc.personalizeSolution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PersonalizeSolution <a name="PersonalizeSolution" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution awscc_personalize_solution}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_solution

personalizeSolution.PersonalizeSolution(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  dataset_group_arn: str,
  name: str,
  event_type: str = None,
  perform_auto_ml: bool | IResolvable = None,
  perform_hpo: bool | IResolvable = None,
  recipe_arn: str = None,
  solution_config: PersonalizeSolutionSolutionConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.datasetGroupArn">dataset_group_arn</a></code> | <code>str</code> | The ARN of the dataset group that provides the training data. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.name">name</a></code> | <code>str</code> | The name for the solution. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.eventType">event_type</a></code> | <code>str</code> | When your have multiple event types (using an EVENT_TYPE schema field), this parameter specifies which event type (for example, 'click' or 'like') is used for training the model. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.performAutoMl">perform_auto_ml</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to perform automated machine learning (AutoML). The default is false. For this case, you must specify recipeArn. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.performHpo">perform_hpo</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to perform hyperparameter optimization (HPO) on the specified or selected recipe. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.recipeArn">recipe_arn</a></code> | <code>str</code> | The ARN of the recipe to use for model training. Only specified when performAutoML is false. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.solutionConfig">solution_config</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfig">PersonalizeSolutionSolutionConfig</a></code> | The configuration to use with the solution. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `dataset_group_arn`<sup>Required</sup> <a name="dataset_group_arn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.datasetGroupArn"></a>

- *Type:* str

The ARN of the dataset group that provides the training data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#dataset_group_arn PersonalizeSolution#dataset_group_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.name"></a>

- *Type:* str

The name for the solution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#name PersonalizeSolution#name}

---

##### `event_type`<sup>Optional</sup> <a name="event_type" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.eventType"></a>

- *Type:* str

When your have multiple event types (using an EVENT_TYPE schema field), this parameter specifies which event type (for example, 'click' or 'like') is used for training the model.

If you do not provide an eventType, Amazon Personalize will use all interactions for training with equal weight regardless of type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#event_type PersonalizeSolution#event_type}

---

##### `perform_auto_ml`<sup>Optional</sup> <a name="perform_auto_ml" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.performAutoMl"></a>

- *Type:* bool | cdktn.IResolvable

Whether to perform automated machine learning (AutoML). The default is false. For this case, you must specify recipeArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#perform_auto_ml PersonalizeSolution#perform_auto_ml}

---

##### `perform_hpo`<sup>Optional</sup> <a name="perform_hpo" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.performHpo"></a>

- *Type:* bool | cdktn.IResolvable

Whether to perform hyperparameter optimization (HPO) on the specified or selected recipe.

The default is false. When performing AutoML, this parameter is always true and you should not set it to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#perform_hpo PersonalizeSolution#perform_hpo}

---

##### `recipe_arn`<sup>Optional</sup> <a name="recipe_arn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.recipeArn"></a>

- *Type:* str

The ARN of the recipe to use for model training. Only specified when performAutoML is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#recipe_arn PersonalizeSolution#recipe_arn}

---

##### `solution_config`<sup>Optional</sup> <a name="solution_config" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.Initializer.parameter.solutionConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfig">PersonalizeSolutionSolutionConfig</a>

The configuration to use with the solution.

When performAutoML is set to true, Amazon Personalize only evaluates the autoMLConfig section of the solution configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#solution_config PersonalizeSolution#solution_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.putSolutionConfig">put_solution_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.resetEventType">reset_event_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.resetPerformAutoMl">reset_perform_auto_ml</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.resetPerformHpo">reset_perform_hpo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.resetRecipeArn">reset_recipe_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.resetSolutionConfig">reset_solution_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_solution_config` <a name="put_solution_config" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.putSolutionConfig"></a>

```python
def put_solution_config(
  algorithm_hyper_parameters: typing.Mapping[str] = None,
  auto_ml_config: PersonalizeSolutionSolutionConfigAutoMlConfig = None,
  event_value_threshold: str = None,
  feature_transformation_parameters: typing.Mapping[str] = None,
  hpo_config: PersonalizeSolutionSolutionConfigHpoConfig = None
) -> None
```

###### `algorithm_hyper_parameters`<sup>Optional</sup> <a name="algorithm_hyper_parameters" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.putSolutionConfig.parameter.algorithmHyperParameters"></a>

- *Type:* typing.Mapping[str]

Lists the hyperparameter names and ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#algorithm_hyper_parameters PersonalizeSolution#algorithm_hyper_parameters}

---

###### `auto_ml_config`<sup>Optional</sup> <a name="auto_ml_config" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.putSolutionConfig.parameter.autoMlConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfig">PersonalizeSolutionSolutionConfigAutoMlConfig</a>

The AutoMLConfig object containing a list of recipes to search when AutoML is performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#auto_ml_config PersonalizeSolution#auto_ml_config}

---

###### `event_value_threshold`<sup>Optional</sup> <a name="event_value_threshold" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.putSolutionConfig.parameter.eventValueThreshold"></a>

- *Type:* str

Only events with a value greater than or equal to this threshold are used for training a model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#event_value_threshold PersonalizeSolution#event_value_threshold}

---

###### `feature_transformation_parameters`<sup>Optional</sup> <a name="feature_transformation_parameters" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.putSolutionConfig.parameter.featureTransformationParameters"></a>

- *Type:* typing.Mapping[str]

Lists the feature transformation parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#feature_transformation_parameters PersonalizeSolution#feature_transformation_parameters}

---

###### `hpo_config`<sup>Optional</sup> <a name="hpo_config" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.putSolutionConfig.parameter.hpoConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfig">PersonalizeSolutionSolutionConfigHpoConfig</a>

Describes the properties for hyperparameter optimization (HPO).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#hpo_config PersonalizeSolution#hpo_config}

---

##### `reset_event_type` <a name="reset_event_type" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.resetEventType"></a>

```python
def reset_event_type() -> None
```

##### `reset_perform_auto_ml` <a name="reset_perform_auto_ml" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.resetPerformAutoMl"></a>

```python
def reset_perform_auto_ml() -> None
```

##### `reset_perform_hpo` <a name="reset_perform_hpo" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.resetPerformHpo"></a>

```python
def reset_perform_hpo() -> None
```

##### `reset_recipe_arn` <a name="reset_recipe_arn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.resetRecipeArn"></a>

```python
def reset_recipe_arn() -> None
```

##### `reset_solution_config` <a name="reset_solution_config" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.resetSolutionConfig"></a>

```python
def reset_solution_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a PersonalizeSolution resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.isConstruct"></a>

```python
from cdktn_provider_awscc import personalize_solution

personalizeSolution.PersonalizeSolution.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.isTerraformElement"></a>

```python
from cdktn_provider_awscc import personalize_solution

personalizeSolution.PersonalizeSolution.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.isTerraformResource"></a>

```python
from cdktn_provider_awscc import personalize_solution

personalizeSolution.PersonalizeSolution.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import personalize_solution

personalizeSolution.PersonalizeSolution.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a PersonalizeSolution resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PersonalizeSolution to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PersonalizeSolution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PersonalizeSolution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.solutionArn">solution_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.solutionConfig">solution_config</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference">PersonalizeSolutionSolutionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.datasetGroupArnInput">dataset_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.eventTypeInput">event_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.performAutoMlInput">perform_auto_ml_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.performHpoInput">perform_hpo_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.recipeArnInput">recipe_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.solutionConfigInput">solution_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfig">PersonalizeSolutionSolutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.datasetGroupArn">dataset_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.eventType">event_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.performAutoMl">perform_auto_ml</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.performHpo">perform_hpo</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.recipeArn">recipe_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `solution_arn`<sup>Required</sup> <a name="solution_arn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.solutionArn"></a>

```python
solution_arn: str
```

- *Type:* str

---

##### `solution_config`<sup>Required</sup> <a name="solution_config" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.solutionConfig"></a>

```python
solution_config: PersonalizeSolutionSolutionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference">PersonalizeSolutionSolutionConfigOutputReference</a>

---

##### `dataset_group_arn_input`<sup>Optional</sup> <a name="dataset_group_arn_input" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.datasetGroupArnInput"></a>

```python
dataset_group_arn_input: str
```

- *Type:* str

---

##### `event_type_input`<sup>Optional</sup> <a name="event_type_input" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.eventTypeInput"></a>

```python
event_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `perform_auto_ml_input`<sup>Optional</sup> <a name="perform_auto_ml_input" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.performAutoMlInput"></a>

```python
perform_auto_ml_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `perform_hpo_input`<sup>Optional</sup> <a name="perform_hpo_input" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.performHpoInput"></a>

```python
perform_hpo_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `recipe_arn_input`<sup>Optional</sup> <a name="recipe_arn_input" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.recipeArnInput"></a>

```python
recipe_arn_input: str
```

- *Type:* str

---

##### `solution_config_input`<sup>Optional</sup> <a name="solution_config_input" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.solutionConfigInput"></a>

```python
solution_config_input: IResolvable | PersonalizeSolutionSolutionConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfig">PersonalizeSolutionSolutionConfig</a>

---

##### `dataset_group_arn`<sup>Required</sup> <a name="dataset_group_arn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.datasetGroupArn"></a>

```python
dataset_group_arn: str
```

- *Type:* str

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `perform_auto_ml`<sup>Required</sup> <a name="perform_auto_ml" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.performAutoMl"></a>

```python
perform_auto_ml: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `perform_hpo`<sup>Required</sup> <a name="perform_hpo" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.performHpo"></a>

```python
perform_hpo: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `recipe_arn`<sup>Required</sup> <a name="recipe_arn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.recipeArn"></a>

```python
recipe_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolution.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PersonalizeSolutionConfig <a name="PersonalizeSolutionConfig" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_solution

personalizeSolution.PersonalizeSolutionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  dataset_group_arn: str,
  name: str,
  event_type: str = None,
  perform_auto_ml: bool | IResolvable = None,
  perform_hpo: bool | IResolvable = None,
  recipe_arn: str = None,
  solution_config: PersonalizeSolutionSolutionConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.datasetGroupArn">dataset_group_arn</a></code> | <code>str</code> | The ARN of the dataset group that provides the training data. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.name">name</a></code> | <code>str</code> | The name for the solution. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.eventType">event_type</a></code> | <code>str</code> | When your have multiple event types (using an EVENT_TYPE schema field), this parameter specifies which event type (for example, 'click' or 'like') is used for training the model. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.performAutoMl">perform_auto_ml</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to perform automated machine learning (AutoML). The default is false. For this case, you must specify recipeArn. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.performHpo">perform_hpo</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to perform hyperparameter optimization (HPO) on the specified or selected recipe. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.recipeArn">recipe_arn</a></code> | <code>str</code> | The ARN of the recipe to use for model training. Only specified when performAutoML is false. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.solutionConfig">solution_config</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfig">PersonalizeSolutionSolutionConfig</a></code> | The configuration to use with the solution. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `dataset_group_arn`<sup>Required</sup> <a name="dataset_group_arn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.datasetGroupArn"></a>

```python
dataset_group_arn: str
```

- *Type:* str

The ARN of the dataset group that provides the training data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#dataset_group_arn PersonalizeSolution#dataset_group_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name for the solution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#name PersonalizeSolution#name}

---

##### `event_type`<sup>Optional</sup> <a name="event_type" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

When your have multiple event types (using an EVENT_TYPE schema field), this parameter specifies which event type (for example, 'click' or 'like') is used for training the model.

If you do not provide an eventType, Amazon Personalize will use all interactions for training with equal weight regardless of type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#event_type PersonalizeSolution#event_type}

---

##### `perform_auto_ml`<sup>Optional</sup> <a name="perform_auto_ml" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.performAutoMl"></a>

```python
perform_auto_ml: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to perform automated machine learning (AutoML). The default is false. For this case, you must specify recipeArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#perform_auto_ml PersonalizeSolution#perform_auto_ml}

---

##### `perform_hpo`<sup>Optional</sup> <a name="perform_hpo" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.performHpo"></a>

```python
perform_hpo: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to perform hyperparameter optimization (HPO) on the specified or selected recipe.

The default is false. When performing AutoML, this parameter is always true and you should not set it to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#perform_hpo PersonalizeSolution#perform_hpo}

---

##### `recipe_arn`<sup>Optional</sup> <a name="recipe_arn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.recipeArn"></a>

```python
recipe_arn: str
```

- *Type:* str

The ARN of the recipe to use for model training. Only specified when performAutoML is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#recipe_arn PersonalizeSolution#recipe_arn}

---

##### `solution_config`<sup>Optional</sup> <a name="solution_config" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionConfig.property.solutionConfig"></a>

```python
solution_config: PersonalizeSolutionSolutionConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfig">PersonalizeSolutionSolutionConfig</a>

The configuration to use with the solution.

When performAutoML is set to true, Amazon Personalize only evaluates the autoMLConfig section of the solution configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#solution_config PersonalizeSolution#solution_config}

---

### PersonalizeSolutionSolutionConfig <a name="PersonalizeSolutionSolutionConfig" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_solution

personalizeSolution.PersonalizeSolutionSolutionConfig(
  algorithm_hyper_parameters: typing.Mapping[str] = None,
  auto_ml_config: PersonalizeSolutionSolutionConfigAutoMlConfig = None,
  event_value_threshold: str = None,
  feature_transformation_parameters: typing.Mapping[str] = None,
  hpo_config: PersonalizeSolutionSolutionConfigHpoConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfig.property.algorithmHyperParameters">algorithm_hyper_parameters</a></code> | <code>typing.Mapping[str]</code> | Lists the hyperparameter names and ranges. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfig.property.autoMlConfig">auto_ml_config</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfig">PersonalizeSolutionSolutionConfigAutoMlConfig</a></code> | The AutoMLConfig object containing a list of recipes to search when AutoML is performed. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfig.property.eventValueThreshold">event_value_threshold</a></code> | <code>str</code> | Only events with a value greater than or equal to this threshold are used for training a model. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfig.property.featureTransformationParameters">feature_transformation_parameters</a></code> | <code>typing.Mapping[str]</code> | Lists the feature transformation parameters. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfig.property.hpoConfig">hpo_config</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfig">PersonalizeSolutionSolutionConfigHpoConfig</a></code> | Describes the properties for hyperparameter optimization (HPO). |

---

##### `algorithm_hyper_parameters`<sup>Optional</sup> <a name="algorithm_hyper_parameters" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfig.property.algorithmHyperParameters"></a>

```python
algorithm_hyper_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Lists the hyperparameter names and ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#algorithm_hyper_parameters PersonalizeSolution#algorithm_hyper_parameters}

---

##### `auto_ml_config`<sup>Optional</sup> <a name="auto_ml_config" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfig.property.autoMlConfig"></a>

```python
auto_ml_config: PersonalizeSolutionSolutionConfigAutoMlConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfig">PersonalizeSolutionSolutionConfigAutoMlConfig</a>

The AutoMLConfig object containing a list of recipes to search when AutoML is performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#auto_ml_config PersonalizeSolution#auto_ml_config}

---

##### `event_value_threshold`<sup>Optional</sup> <a name="event_value_threshold" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfig.property.eventValueThreshold"></a>

```python
event_value_threshold: str
```

- *Type:* str

Only events with a value greater than or equal to this threshold are used for training a model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#event_value_threshold PersonalizeSolution#event_value_threshold}

---

##### `feature_transformation_parameters`<sup>Optional</sup> <a name="feature_transformation_parameters" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfig.property.featureTransformationParameters"></a>

```python
feature_transformation_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Lists the feature transformation parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#feature_transformation_parameters PersonalizeSolution#feature_transformation_parameters}

---

##### `hpo_config`<sup>Optional</sup> <a name="hpo_config" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfig.property.hpoConfig"></a>

```python
hpo_config: PersonalizeSolutionSolutionConfigHpoConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfig">PersonalizeSolutionSolutionConfigHpoConfig</a>

Describes the properties for hyperparameter optimization (HPO).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#hpo_config PersonalizeSolution#hpo_config}

---

### PersonalizeSolutionSolutionConfigAutoMlConfig <a name="PersonalizeSolutionSolutionConfigAutoMlConfig" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfig.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_solution

personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfig(
  metric_name: str = None,
  recipe_list: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfig.property.metricName">metric_name</a></code> | <code>str</code> | The metric to optimize. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfig.property.recipeList">recipe_list</a></code> | <code>typing.List[str]</code> | The list of candidate recipes. |

---

##### `metric_name`<sup>Optional</sup> <a name="metric_name" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfig.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

The metric to optimize.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#metric_name PersonalizeSolution#metric_name}

---

##### `recipe_list`<sup>Optional</sup> <a name="recipe_list" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfig.property.recipeList"></a>

```python
recipe_list: typing.List[str]
```

- *Type:* typing.List[str]

The list of candidate recipes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#recipe_list PersonalizeSolution#recipe_list}

---

### PersonalizeSolutionSolutionConfigHpoConfig <a name="PersonalizeSolutionSolutionConfigHpoConfig" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfig.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_solution

personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfig(
  algorithm_hyper_parameter_ranges: PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges = None,
  hpo_objective: PersonalizeSolutionSolutionConfigHpoConfigHpoObjective = None,
  hpo_resource_config: PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfig.property.algorithmHyperParameterRanges">algorithm_hyper_parameter_ranges</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges</a></code> | The hyperparameters and their allowable ranges. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfig.property.hpoObjective">hpo_objective</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjective">PersonalizeSolutionSolutionConfigHpoConfigHpoObjective</a></code> | The metric to optimize during HPO. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfig.property.hpoResourceConfig">hpo_resource_config</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig">PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig</a></code> | Describes the resource configuration for hyperparameter optimization (HPO). |

---

##### `algorithm_hyper_parameter_ranges`<sup>Optional</sup> <a name="algorithm_hyper_parameter_ranges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfig.property.algorithmHyperParameterRanges"></a>

```python
algorithm_hyper_parameter_ranges: PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges</a>

The hyperparameters and their allowable ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#algorithm_hyper_parameter_ranges PersonalizeSolution#algorithm_hyper_parameter_ranges}

---

##### `hpo_objective`<sup>Optional</sup> <a name="hpo_objective" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfig.property.hpoObjective"></a>

```python
hpo_objective: PersonalizeSolutionSolutionConfigHpoConfigHpoObjective
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjective">PersonalizeSolutionSolutionConfigHpoConfigHpoObjective</a>

The metric to optimize during HPO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#hpo_objective PersonalizeSolution#hpo_objective}

---

##### `hpo_resource_config`<sup>Optional</sup> <a name="hpo_resource_config" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfig.property.hpoResourceConfig"></a>

```python
hpo_resource_config: PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig">PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig</a>

Describes the resource configuration for hyperparameter optimization (HPO).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#hpo_resource_config PersonalizeSolution#hpo_resource_config}

---

### PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges <a name="PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_solution

personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges(
  categorical_hyper_parameter_ranges: IResolvable | typing.List[PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges] = None,
  continuous_hyper_parameter_ranges: IResolvable | typing.List[PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges] = None,
  integer_hyper_parameter_ranges: IResolvable | typing.List[PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges.property.categoricalHyperParameterRanges">categorical_hyper_parameter_ranges</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges</a>]</code> | The categorical hyperparameters and their ranges. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges.property.continuousHyperParameterRanges">continuous_hyper_parameter_ranges</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges</a>]</code> | The continuous hyperparameters and their ranges. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges.property.integerHyperParameterRanges">integer_hyper_parameter_ranges</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges</a>]</code> | The integer hyperparameters and their ranges. |

---

##### `categorical_hyper_parameter_ranges`<sup>Optional</sup> <a name="categorical_hyper_parameter_ranges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges.property.categoricalHyperParameterRanges"></a>

```python
categorical_hyper_parameter_ranges: IResolvable | typing.List[PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges</a>]

The categorical hyperparameters and their ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#categorical_hyper_parameter_ranges PersonalizeSolution#categorical_hyper_parameter_ranges}

---

##### `continuous_hyper_parameter_ranges`<sup>Optional</sup> <a name="continuous_hyper_parameter_ranges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges.property.continuousHyperParameterRanges"></a>

```python
continuous_hyper_parameter_ranges: IResolvable | typing.List[PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges</a>]

The continuous hyperparameters and their ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#continuous_hyper_parameter_ranges PersonalizeSolution#continuous_hyper_parameter_ranges}

---

##### `integer_hyper_parameter_ranges`<sup>Optional</sup> <a name="integer_hyper_parameter_ranges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges.property.integerHyperParameterRanges"></a>

```python
integer_hyper_parameter_ranges: IResolvable | typing.List[PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges</a>]

The integer hyperparameters and their ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#integer_hyper_parameter_ranges PersonalizeSolution#integer_hyper_parameter_ranges}

---

### PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges <a name="PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_solution

personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges(
  name: str = None,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges.property.name">name</a></code> | <code>str</code> | The name of the hyperparameter. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges.property.values">values</a></code> | <code>typing.List[str]</code> | A list of the categories for the hyperparameter. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the hyperparameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#name PersonalizeSolution#name}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

A list of the categories for the hyperparameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#values PersonalizeSolution#values}

---

### PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges <a name="PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_solution

personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges(
  max_value: typing.Union[int, float] = None,
  min_value: typing.Union[int, float] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges.property.maxValue">max_value</a></code> | <code>typing.Union[int, float]</code> | The maximum allowable value for the hyperparameter. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges.property.minValue">min_value</a></code> | <code>typing.Union[int, float]</code> | The minimum allowable value for the hyperparameter. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges.property.name">name</a></code> | <code>str</code> | The name of the hyperparameter. |

---

##### `max_value`<sup>Optional</sup> <a name="max_value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges.property.maxValue"></a>

```python
max_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum allowable value for the hyperparameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#max_value PersonalizeSolution#max_value}

---

##### `min_value`<sup>Optional</sup> <a name="min_value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges.property.minValue"></a>

```python
min_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum allowable value for the hyperparameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#min_value PersonalizeSolution#min_value}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the hyperparameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#name PersonalizeSolution#name}

---

### PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges <a name="PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_solution

personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges(
  max_value: typing.Union[int, float] = None,
  min_value: typing.Union[int, float] = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges.property.maxValue">max_value</a></code> | <code>typing.Union[int, float]</code> | The maximum allowable value for the hyperparameter. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges.property.minValue">min_value</a></code> | <code>typing.Union[int, float]</code> | The minimum allowable value for the hyperparameter. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges.property.name">name</a></code> | <code>str</code> | The name of the hyperparameter. |

---

##### `max_value`<sup>Optional</sup> <a name="max_value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges.property.maxValue"></a>

```python
max_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum allowable value for the hyperparameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#max_value PersonalizeSolution#max_value}

---

##### `min_value`<sup>Optional</sup> <a name="min_value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges.property.minValue"></a>

```python
min_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum allowable value for the hyperparameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#min_value PersonalizeSolution#min_value}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the hyperparameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#name PersonalizeSolution#name}

---

### PersonalizeSolutionSolutionConfigHpoConfigHpoObjective <a name="PersonalizeSolutionSolutionConfigHpoConfigHpoObjective" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjective"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjective.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_solution

personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjective(
  metric_name: str = None,
  metric_regex: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjective.property.metricName">metric_name</a></code> | <code>str</code> | The name of the metric. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjective.property.metricRegex">metric_regex</a></code> | <code>str</code> | A regular expression for finding the metric in the training job logs. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjective.property.type">type</a></code> | <code>str</code> | The type of the metric. Valid values are Maximize and Minimize. |

---

##### `metric_name`<sup>Optional</sup> <a name="metric_name" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjective.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

The name of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#metric_name PersonalizeSolution#metric_name}

---

##### `metric_regex`<sup>Optional</sup> <a name="metric_regex" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjective.property.metricRegex"></a>

```python
metric_regex: str
```

- *Type:* str

A regular expression for finding the metric in the training job logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#metric_regex PersonalizeSolution#metric_regex}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjective.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the metric. Valid values are Maximize and Minimize.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#type PersonalizeSolution#type}

---

### PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig <a name="PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_solution

personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig(
  max_number_of_training_jobs: str = None,
  max_parallel_training_jobs: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig.property.maxNumberOfTrainingJobs">max_number_of_training_jobs</a></code> | <code>str</code> | The maximum number of training jobs when you create a solution version. The maximum value for maxNumberOfTrainingJobs is 40. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig.property.maxParallelTrainingJobs">max_parallel_training_jobs</a></code> | <code>str</code> | The maximum number of parallel training jobs when you create a solution version. |

---

##### `max_number_of_training_jobs`<sup>Optional</sup> <a name="max_number_of_training_jobs" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig.property.maxNumberOfTrainingJobs"></a>

```python
max_number_of_training_jobs: str
```

- *Type:* str

The maximum number of training jobs when you create a solution version. The maximum value for maxNumberOfTrainingJobs is 40.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#max_number_of_training_jobs PersonalizeSolution#max_number_of_training_jobs}

---

##### `max_parallel_training_jobs`<sup>Optional</sup> <a name="max_parallel_training_jobs" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig.property.maxParallelTrainingJobs"></a>

```python
max_parallel_training_jobs: str
```

- *Type:* str

The maximum number of parallel training jobs when you create a solution version.

The maximum value for maxParallelTrainingJobs is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#max_parallel_training_jobs PersonalizeSolution#max_parallel_training_jobs}

---

## Classes <a name="Classes" id="Classes"></a>

### PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference <a name="PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_solution

personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.resetMetricName">reset_metric_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.resetRecipeList">reset_recipe_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metric_name` <a name="reset_metric_name" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.resetMetricName"></a>

```python
def reset_metric_name() -> None
```

##### `reset_recipe_list` <a name="reset_recipe_list" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.resetRecipeList"></a>

```python
def reset_recipe_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.recipeListInput">recipe_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.recipeList">recipe_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfig">PersonalizeSolutionSolutionConfigAutoMlConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `recipe_list_input`<sup>Optional</sup> <a name="recipe_list_input" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.recipeListInput"></a>

```python
recipe_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `recipe_list`<sup>Required</sup> <a name="recipe_list" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.recipeList"></a>

```python
recipe_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PersonalizeSolutionSolutionConfigAutoMlConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfig">PersonalizeSolutionSolutionConfigAutoMlConfig</a>

---


### PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList <a name="PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_solution

personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges</a>]

---


### PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference <a name="PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_solution

personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges</a>

---


### PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList <a name="PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_solution

personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges</a>]

---


### PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference <a name="PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_solution

personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.resetMaxValue">reset_max_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.resetMinValue">reset_min_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_value` <a name="reset_max_value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.resetMaxValue"></a>

```python
def reset_max_value() -> None
```

##### `reset_min_value` <a name="reset_min_value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.resetMinValue"></a>

```python
def reset_min_value() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.maxValueInput">max_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.minValueInput">min_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.maxValue">max_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.minValue">min_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_value_input`<sup>Optional</sup> <a name="max_value_input" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.maxValueInput"></a>

```python
max_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_value_input`<sup>Optional</sup> <a name="min_value_input" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.minValueInput"></a>

```python
min_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `max_value`<sup>Required</sup> <a name="max_value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.maxValue"></a>

```python
max_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_value`<sup>Required</sup> <a name="min_value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.minValue"></a>

```python
min_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges</a>

---


### PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList <a name="PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_solution

personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges</a>]

---


### PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference <a name="PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_solution

personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.resetMaxValue">reset_max_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.resetMinValue">reset_min_value</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_value` <a name="reset_max_value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.resetMaxValue"></a>

```python
def reset_max_value() -> None
```

##### `reset_min_value` <a name="reset_min_value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.resetMinValue"></a>

```python
def reset_min_value() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.maxValueInput">max_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.minValueInput">min_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.maxValue">max_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.minValue">min_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_value_input`<sup>Optional</sup> <a name="max_value_input" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.maxValueInput"></a>

```python
max_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_value_input`<sup>Optional</sup> <a name="min_value_input" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.minValueInput"></a>

```python
min_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `max_value`<sup>Required</sup> <a name="max_value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.maxValue"></a>

```python
max_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_value`<sup>Required</sup> <a name="min_value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.minValue"></a>

```python
min_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges</a>

---


### PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference <a name="PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_solution

personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.putCategoricalHyperParameterRanges">put_categorical_hyper_parameter_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.putContinuousHyperParameterRanges">put_continuous_hyper_parameter_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.putIntegerHyperParameterRanges">put_integer_hyper_parameter_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.resetCategoricalHyperParameterRanges">reset_categorical_hyper_parameter_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.resetContinuousHyperParameterRanges">reset_continuous_hyper_parameter_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.resetIntegerHyperParameterRanges">reset_integer_hyper_parameter_ranges</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_categorical_hyper_parameter_ranges` <a name="put_categorical_hyper_parameter_ranges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.putCategoricalHyperParameterRanges"></a>

```python
def put_categorical_hyper_parameter_ranges(
  value: IResolvable | typing.List[PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.putCategoricalHyperParameterRanges.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges</a>]

---

##### `put_continuous_hyper_parameter_ranges` <a name="put_continuous_hyper_parameter_ranges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.putContinuousHyperParameterRanges"></a>

```python
def put_continuous_hyper_parameter_ranges(
  value: IResolvable | typing.List[PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.putContinuousHyperParameterRanges.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges</a>]

---

##### `put_integer_hyper_parameter_ranges` <a name="put_integer_hyper_parameter_ranges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.putIntegerHyperParameterRanges"></a>

```python
def put_integer_hyper_parameter_ranges(
  value: IResolvable | typing.List[PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.putIntegerHyperParameterRanges.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges</a>]

---

##### `reset_categorical_hyper_parameter_ranges` <a name="reset_categorical_hyper_parameter_ranges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.resetCategoricalHyperParameterRanges"></a>

```python
def reset_categorical_hyper_parameter_ranges() -> None
```

##### `reset_continuous_hyper_parameter_ranges` <a name="reset_continuous_hyper_parameter_ranges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.resetContinuousHyperParameterRanges"></a>

```python
def reset_continuous_hyper_parameter_ranges() -> None
```

##### `reset_integer_hyper_parameter_ranges` <a name="reset_integer_hyper_parameter_ranges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.resetIntegerHyperParameterRanges"></a>

```python
def reset_integer_hyper_parameter_ranges() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.categoricalHyperParameterRanges">categorical_hyper_parameter_ranges</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.continuousHyperParameterRanges">continuous_hyper_parameter_ranges</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.integerHyperParameterRanges">integer_hyper_parameter_ranges</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.categoricalHyperParameterRangesInput">categorical_hyper_parameter_ranges_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.continuousHyperParameterRangesInput">continuous_hyper_parameter_ranges_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.integerHyperParameterRangesInput">integer_hyper_parameter_ranges_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `categorical_hyper_parameter_ranges`<sup>Required</sup> <a name="categorical_hyper_parameter_ranges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.categoricalHyperParameterRanges"></a>

```python
categorical_hyper_parameter_ranges: PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRangesList</a>

---

##### `continuous_hyper_parameter_ranges`<sup>Required</sup> <a name="continuous_hyper_parameter_ranges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.continuousHyperParameterRanges"></a>

```python
continuous_hyper_parameter_ranges: PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRangesList</a>

---

##### `integer_hyper_parameter_ranges`<sup>Required</sup> <a name="integer_hyper_parameter_ranges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.integerHyperParameterRanges"></a>

```python
integer_hyper_parameter_ranges: PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRangesList</a>

---

##### `categorical_hyper_parameter_ranges_input`<sup>Optional</sup> <a name="categorical_hyper_parameter_ranges_input" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.categoricalHyperParameterRangesInput"></a>

```python
categorical_hyper_parameter_ranges_input: IResolvable | typing.List[PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges</a>]

---

##### `continuous_hyper_parameter_ranges_input`<sup>Optional</sup> <a name="continuous_hyper_parameter_ranges_input" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.continuousHyperParameterRangesInput"></a>

```python
continuous_hyper_parameter_ranges_input: IResolvable | typing.List[PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges</a>]

---

##### `integer_hyper_parameter_ranges_input`<sup>Optional</sup> <a name="integer_hyper_parameter_ranges_input" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.integerHyperParameterRangesInput"></a>

```python
integer_hyper_parameter_ranges_input: IResolvable | typing.List[PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges</a>

---


### PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference <a name="PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_solution

personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.resetMetricName">reset_metric_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.resetMetricRegex">reset_metric_regex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_metric_name` <a name="reset_metric_name" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.resetMetricName"></a>

```python
def reset_metric_name() -> None
```

##### `reset_metric_regex` <a name="reset_metric_regex" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.resetMetricRegex"></a>

```python
def reset_metric_regex() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.metricNameInput">metric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.metricRegexInput">metric_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.metricRegex">metric_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjective">PersonalizeSolutionSolutionConfigHpoConfigHpoObjective</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_name_input`<sup>Optional</sup> <a name="metric_name_input" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.metricNameInput"></a>

```python
metric_name_input: str
```

- *Type:* str

---

##### `metric_regex_input`<sup>Optional</sup> <a name="metric_regex_input" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.metricRegexInput"></a>

```python
metric_regex_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `metric_regex`<sup>Required</sup> <a name="metric_regex" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.metricRegex"></a>

```python
metric_regex: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PersonalizeSolutionSolutionConfigHpoConfigHpoObjective
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjective">PersonalizeSolutionSolutionConfigHpoConfigHpoObjective</a>

---


### PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference <a name="PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_solution

personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.resetMaxNumberOfTrainingJobs">reset_max_number_of_training_jobs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.resetMaxParallelTrainingJobs">reset_max_parallel_training_jobs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_number_of_training_jobs` <a name="reset_max_number_of_training_jobs" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.resetMaxNumberOfTrainingJobs"></a>

```python
def reset_max_number_of_training_jobs() -> None
```

##### `reset_max_parallel_training_jobs` <a name="reset_max_parallel_training_jobs" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.resetMaxParallelTrainingJobs"></a>

```python
def reset_max_parallel_training_jobs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.maxNumberOfTrainingJobsInput">max_number_of_training_jobs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.maxParallelTrainingJobsInput">max_parallel_training_jobs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.maxNumberOfTrainingJobs">max_number_of_training_jobs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.maxParallelTrainingJobs">max_parallel_training_jobs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig">PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_number_of_training_jobs_input`<sup>Optional</sup> <a name="max_number_of_training_jobs_input" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.maxNumberOfTrainingJobsInput"></a>

```python
max_number_of_training_jobs_input: str
```

- *Type:* str

---

##### `max_parallel_training_jobs_input`<sup>Optional</sup> <a name="max_parallel_training_jobs_input" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.maxParallelTrainingJobsInput"></a>

```python
max_parallel_training_jobs_input: str
```

- *Type:* str

---

##### `max_number_of_training_jobs`<sup>Required</sup> <a name="max_number_of_training_jobs" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.maxNumberOfTrainingJobs"></a>

```python
max_number_of_training_jobs: str
```

- *Type:* str

---

##### `max_parallel_training_jobs`<sup>Required</sup> <a name="max_parallel_training_jobs" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.maxParallelTrainingJobs"></a>

```python
max_parallel_training_jobs: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig">PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig</a>

---


### PersonalizeSolutionSolutionConfigHpoConfigOutputReference <a name="PersonalizeSolutionSolutionConfigHpoConfigOutputReference" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_solution

personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.putAlgorithmHyperParameterRanges">put_algorithm_hyper_parameter_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.putHpoObjective">put_hpo_objective</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.putHpoResourceConfig">put_hpo_resource_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.resetAlgorithmHyperParameterRanges">reset_algorithm_hyper_parameter_ranges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.resetHpoObjective">reset_hpo_objective</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.resetHpoResourceConfig">reset_hpo_resource_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_algorithm_hyper_parameter_ranges` <a name="put_algorithm_hyper_parameter_ranges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.putAlgorithmHyperParameterRanges"></a>

```python
def put_algorithm_hyper_parameter_ranges(
  categorical_hyper_parameter_ranges: IResolvable | typing.List[PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges] = None,
  continuous_hyper_parameter_ranges: IResolvable | typing.List[PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges] = None,
  integer_hyper_parameter_ranges: IResolvable | typing.List[PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges] = None
) -> None
```

###### `categorical_hyper_parameter_ranges`<sup>Optional</sup> <a name="categorical_hyper_parameter_ranges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.putAlgorithmHyperParameterRanges.parameter.categoricalHyperParameterRanges"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesCategoricalHyperParameterRanges</a>]

The categorical hyperparameters and their ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#categorical_hyper_parameter_ranges PersonalizeSolution#categorical_hyper_parameter_ranges}

---

###### `continuous_hyper_parameter_ranges`<sup>Optional</sup> <a name="continuous_hyper_parameter_ranges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.putAlgorithmHyperParameterRanges.parameter.continuousHyperParameterRanges"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesContinuousHyperParameterRanges</a>]

The continuous hyperparameters and their ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#continuous_hyper_parameter_ranges PersonalizeSolution#continuous_hyper_parameter_ranges}

---

###### `integer_hyper_parameter_ranges`<sup>Optional</sup> <a name="integer_hyper_parameter_ranges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.putAlgorithmHyperParameterRanges.parameter.integerHyperParameterRanges"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesIntegerHyperParameterRanges</a>]

The integer hyperparameters and their ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#integer_hyper_parameter_ranges PersonalizeSolution#integer_hyper_parameter_ranges}

---

##### `put_hpo_objective` <a name="put_hpo_objective" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.putHpoObjective"></a>

```python
def put_hpo_objective(
  metric_name: str = None,
  metric_regex: str = None,
  type: str = None
) -> None
```

###### `metric_name`<sup>Optional</sup> <a name="metric_name" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.putHpoObjective.parameter.metricName"></a>

- *Type:* str

The name of the metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#metric_name PersonalizeSolution#metric_name}

---

###### `metric_regex`<sup>Optional</sup> <a name="metric_regex" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.putHpoObjective.parameter.metricRegex"></a>

- *Type:* str

A regular expression for finding the metric in the training job logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#metric_regex PersonalizeSolution#metric_regex}

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.putHpoObjective.parameter.type"></a>

- *Type:* str

The type of the metric. Valid values are Maximize and Minimize.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#type PersonalizeSolution#type}

---

##### `put_hpo_resource_config` <a name="put_hpo_resource_config" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.putHpoResourceConfig"></a>

```python
def put_hpo_resource_config(
  max_number_of_training_jobs: str = None,
  max_parallel_training_jobs: str = None
) -> None
```

###### `max_number_of_training_jobs`<sup>Optional</sup> <a name="max_number_of_training_jobs" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.putHpoResourceConfig.parameter.maxNumberOfTrainingJobs"></a>

- *Type:* str

The maximum number of training jobs when you create a solution version. The maximum value for maxNumberOfTrainingJobs is 40.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#max_number_of_training_jobs PersonalizeSolution#max_number_of_training_jobs}

---

###### `max_parallel_training_jobs`<sup>Optional</sup> <a name="max_parallel_training_jobs" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.putHpoResourceConfig.parameter.maxParallelTrainingJobs"></a>

- *Type:* str

The maximum number of parallel training jobs when you create a solution version.

The maximum value for maxParallelTrainingJobs is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#max_parallel_training_jobs PersonalizeSolution#max_parallel_training_jobs}

---

##### `reset_algorithm_hyper_parameter_ranges` <a name="reset_algorithm_hyper_parameter_ranges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.resetAlgorithmHyperParameterRanges"></a>

```python
def reset_algorithm_hyper_parameter_ranges() -> None
```

##### `reset_hpo_objective` <a name="reset_hpo_objective" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.resetHpoObjective"></a>

```python
def reset_hpo_objective() -> None
```

##### `reset_hpo_resource_config` <a name="reset_hpo_resource_config" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.resetHpoResourceConfig"></a>

```python
def reset_hpo_resource_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.algorithmHyperParameterRanges">algorithm_hyper_parameter_ranges</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.hpoObjective">hpo_objective</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference">PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.hpoResourceConfig">hpo_resource_config</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference">PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.algorithmHyperParameterRangesInput">algorithm_hyper_parameter_ranges_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.hpoObjectiveInput">hpo_objective_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjective">PersonalizeSolutionSolutionConfigHpoConfigHpoObjective</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.hpoResourceConfigInput">hpo_resource_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig">PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfig">PersonalizeSolutionSolutionConfigHpoConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm_hyper_parameter_ranges`<sup>Required</sup> <a name="algorithm_hyper_parameter_ranges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.algorithmHyperParameterRanges"></a>

```python
algorithm_hyper_parameter_ranges: PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRangesOutputReference</a>

---

##### `hpo_objective`<sup>Required</sup> <a name="hpo_objective" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.hpoObjective"></a>

```python
hpo_objective: PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference">PersonalizeSolutionSolutionConfigHpoConfigHpoObjectiveOutputReference</a>

---

##### `hpo_resource_config`<sup>Required</sup> <a name="hpo_resource_config" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.hpoResourceConfig"></a>

```python
hpo_resource_config: PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference">PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfigOutputReference</a>

---

##### `algorithm_hyper_parameter_ranges_input`<sup>Optional</sup> <a name="algorithm_hyper_parameter_ranges_input" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.algorithmHyperParameterRangesInput"></a>

```python
algorithm_hyper_parameter_ranges_input: IResolvable | PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges</a>

---

##### `hpo_objective_input`<sup>Optional</sup> <a name="hpo_objective_input" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.hpoObjectiveInput"></a>

```python
hpo_objective_input: IResolvable | PersonalizeSolutionSolutionConfigHpoConfigHpoObjective
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjective">PersonalizeSolutionSolutionConfigHpoConfigHpoObjective</a>

---

##### `hpo_resource_config_input`<sup>Optional</sup> <a name="hpo_resource_config_input" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.hpoResourceConfigInput"></a>

```python
hpo_resource_config_input: IResolvable | PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig">PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PersonalizeSolutionSolutionConfigHpoConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfig">PersonalizeSolutionSolutionConfigHpoConfig</a>

---


### PersonalizeSolutionSolutionConfigOutputReference <a name="PersonalizeSolutionSolutionConfigOutputReference" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_solution

personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.putAutoMlConfig">put_auto_ml_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.putHpoConfig">put_hpo_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.resetAlgorithmHyperParameters">reset_algorithm_hyper_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.resetAutoMlConfig">reset_auto_ml_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.resetEventValueThreshold">reset_event_value_threshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.resetFeatureTransformationParameters">reset_feature_transformation_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.resetHpoConfig">reset_hpo_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_auto_ml_config` <a name="put_auto_ml_config" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.putAutoMlConfig"></a>

```python
def put_auto_ml_config(
  metric_name: str = None,
  recipe_list: typing.List[str] = None
) -> None
```

###### `metric_name`<sup>Optional</sup> <a name="metric_name" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.putAutoMlConfig.parameter.metricName"></a>

- *Type:* str

The metric to optimize.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#metric_name PersonalizeSolution#metric_name}

---

###### `recipe_list`<sup>Optional</sup> <a name="recipe_list" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.putAutoMlConfig.parameter.recipeList"></a>

- *Type:* typing.List[str]

The list of candidate recipes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#recipe_list PersonalizeSolution#recipe_list}

---

##### `put_hpo_config` <a name="put_hpo_config" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.putHpoConfig"></a>

```python
def put_hpo_config(
  algorithm_hyper_parameter_ranges: PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges = None,
  hpo_objective: PersonalizeSolutionSolutionConfigHpoConfigHpoObjective = None,
  hpo_resource_config: PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig = None
) -> None
```

###### `algorithm_hyper_parameter_ranges`<sup>Optional</sup> <a name="algorithm_hyper_parameter_ranges" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.putHpoConfig.parameter.algorithmHyperParameterRanges"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges">PersonalizeSolutionSolutionConfigHpoConfigAlgorithmHyperParameterRanges</a>

The hyperparameters and their allowable ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#algorithm_hyper_parameter_ranges PersonalizeSolution#algorithm_hyper_parameter_ranges}

---

###### `hpo_objective`<sup>Optional</sup> <a name="hpo_objective" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.putHpoConfig.parameter.hpoObjective"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoObjective">PersonalizeSolutionSolutionConfigHpoConfigHpoObjective</a>

The metric to optimize during HPO.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#hpo_objective PersonalizeSolution#hpo_objective}

---

###### `hpo_resource_config`<sup>Optional</sup> <a name="hpo_resource_config" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.putHpoConfig.parameter.hpoResourceConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig">PersonalizeSolutionSolutionConfigHpoConfigHpoResourceConfig</a>

Describes the resource configuration for hyperparameter optimization (HPO).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/personalize_solution#hpo_resource_config PersonalizeSolution#hpo_resource_config}

---

##### `reset_algorithm_hyper_parameters` <a name="reset_algorithm_hyper_parameters" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.resetAlgorithmHyperParameters"></a>

```python
def reset_algorithm_hyper_parameters() -> None
```

##### `reset_auto_ml_config` <a name="reset_auto_ml_config" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.resetAutoMlConfig"></a>

```python
def reset_auto_ml_config() -> None
```

##### `reset_event_value_threshold` <a name="reset_event_value_threshold" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.resetEventValueThreshold"></a>

```python
def reset_event_value_threshold() -> None
```

##### `reset_feature_transformation_parameters` <a name="reset_feature_transformation_parameters" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.resetFeatureTransformationParameters"></a>

```python
def reset_feature_transformation_parameters() -> None
```

##### `reset_hpo_config` <a name="reset_hpo_config" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.resetHpoConfig"></a>

```python
def reset_hpo_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.autoMlConfig">auto_ml_config</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference">PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.hpoConfig">hpo_config</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference">PersonalizeSolutionSolutionConfigHpoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.algorithmHyperParametersInput">algorithm_hyper_parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.autoMlConfigInput">auto_ml_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfig">PersonalizeSolutionSolutionConfigAutoMlConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.eventValueThresholdInput">event_value_threshold_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.featureTransformationParametersInput">feature_transformation_parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.hpoConfigInput">hpo_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfig">PersonalizeSolutionSolutionConfigHpoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.algorithmHyperParameters">algorithm_hyper_parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.eventValueThreshold">event_value_threshold</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.featureTransformationParameters">feature_transformation_parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfig">PersonalizeSolutionSolutionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_ml_config`<sup>Required</sup> <a name="auto_ml_config" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.autoMlConfig"></a>

```python
auto_ml_config: PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference">PersonalizeSolutionSolutionConfigAutoMlConfigOutputReference</a>

---

##### `hpo_config`<sup>Required</sup> <a name="hpo_config" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.hpoConfig"></a>

```python
hpo_config: PersonalizeSolutionSolutionConfigHpoConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfigOutputReference">PersonalizeSolutionSolutionConfigHpoConfigOutputReference</a>

---

##### `algorithm_hyper_parameters_input`<sup>Optional</sup> <a name="algorithm_hyper_parameters_input" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.algorithmHyperParametersInput"></a>

```python
algorithm_hyper_parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `auto_ml_config_input`<sup>Optional</sup> <a name="auto_ml_config_input" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.autoMlConfigInput"></a>

```python
auto_ml_config_input: IResolvable | PersonalizeSolutionSolutionConfigAutoMlConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigAutoMlConfig">PersonalizeSolutionSolutionConfigAutoMlConfig</a>

---

##### `event_value_threshold_input`<sup>Optional</sup> <a name="event_value_threshold_input" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.eventValueThresholdInput"></a>

```python
event_value_threshold_input: str
```

- *Type:* str

---

##### `feature_transformation_parameters_input`<sup>Optional</sup> <a name="feature_transformation_parameters_input" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.featureTransformationParametersInput"></a>

```python
feature_transformation_parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `hpo_config_input`<sup>Optional</sup> <a name="hpo_config_input" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.hpoConfigInput"></a>

```python
hpo_config_input: IResolvable | PersonalizeSolutionSolutionConfigHpoConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigHpoConfig">PersonalizeSolutionSolutionConfigHpoConfig</a>

---

##### `algorithm_hyper_parameters`<sup>Required</sup> <a name="algorithm_hyper_parameters" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.algorithmHyperParameters"></a>

```python
algorithm_hyper_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `event_value_threshold`<sup>Required</sup> <a name="event_value_threshold" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.eventValueThreshold"></a>

```python
event_value_threshold: str
```

- *Type:* str

---

##### `feature_transformation_parameters`<sup>Required</sup> <a name="feature_transformation_parameters" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.featureTransformationParameters"></a>

```python
feature_transformation_parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PersonalizeSolutionSolutionConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeSolution.PersonalizeSolutionSolutionConfig">PersonalizeSolutionSolutionConfig</a>

---



