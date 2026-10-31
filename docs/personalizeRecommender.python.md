# `personalizeRecommender` Submodule <a name="`personalizeRecommender` Submodule" id="@cdktn/provider-awscc.personalizeRecommender"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PersonalizeRecommender <a name="PersonalizeRecommender" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender awscc_personalize_recommender}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_recommender

personalizeRecommender.PersonalizeRecommender(
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
  recipe_arn: str,
  recommender_config: PersonalizeRecommenderRecommenderConfig = None,
  tags: IResolvable | typing.List[PersonalizeRecommenderTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.datasetGroupArn">dataset_group_arn</a></code> | <code>str</code> | The ARN of the Domain dataset group that the recommender is created for. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the recommender. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.recipeArn">recipe_arn</a></code> | <code>str</code> | The ARN of the recipe (Domain dataset group use case) that the recommender uses. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.recommenderConfig">recommender_config</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig">PersonalizeRecommenderRecommenderConfig</a></code> | The configuration details of the recommender. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags">PersonalizeRecommenderTags</a>]</code> | Tags to associate with the recommender. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `dataset_group_arn`<sup>Required</sup> <a name="dataset_group_arn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.datasetGroupArn"></a>

- *Type:* str

The ARN of the Domain dataset group that the recommender is created for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#dataset_group_arn PersonalizeRecommender#dataset_group_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.name"></a>

- *Type:* str

The name of the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#name PersonalizeRecommender#name}

---

##### `recipe_arn`<sup>Required</sup> <a name="recipe_arn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.recipeArn"></a>

- *Type:* str

The ARN of the recipe (Domain dataset group use case) that the recommender uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#recipe_arn PersonalizeRecommender#recipe_arn}

---

##### `recommender_config`<sup>Optional</sup> <a name="recommender_config" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.recommenderConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig">PersonalizeRecommenderRecommenderConfig</a>

The configuration details of the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#recommender_config PersonalizeRecommender#recommender_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags">PersonalizeRecommenderTags</a>]

Tags to associate with the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#tags PersonalizeRecommender#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.putRecommenderConfig">put_recommender_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.resetRecommenderConfig">reset_recommender_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_recommender_config` <a name="put_recommender_config" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.putRecommenderConfig"></a>

```python
def put_recommender_config(
  enable_metadata_with_recommendations: bool | IResolvable = None,
  item_exploration_config: typing.Mapping[str] = None,
  min_recommendation_requests_per_second: typing.Union[int, float] = None,
  training_data_config: PersonalizeRecommenderRecommenderConfigTrainingDataConfig = None
) -> None
```

###### `enable_metadata_with_recommendations`<sup>Optional</sup> <a name="enable_metadata_with_recommendations" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.putRecommenderConfig.parameter.enableMetadataWithRecommendations"></a>

- *Type:* bool | cdktn.IResolvable

Whether metadata with recommendations is enabled for the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#enable_metadata_with_recommendations PersonalizeRecommender#enable_metadata_with_recommendations}

---

###### `item_exploration_config`<sup>Optional</sup> <a name="item_exploration_config" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.putRecommenderConfig.parameter.itemExplorationConfig"></a>

- *Type:* typing.Mapping[str]

Specifies the exploration configuration hyperparameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#item_exploration_config PersonalizeRecommender#item_exploration_config}

---

###### `min_recommendation_requests_per_second`<sup>Optional</sup> <a name="min_recommendation_requests_per_second" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.putRecommenderConfig.parameter.minRecommendationRequestsPerSecond"></a>

- *Type:* typing.Union[int, float]

Specifies the requested minimum provisioned recommendation requests per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#min_recommendation_requests_per_second PersonalizeRecommender#min_recommendation_requests_per_second}

---

###### `training_data_config`<sup>Optional</sup> <a name="training_data_config" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.putRecommenderConfig.parameter.trainingDataConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfig">PersonalizeRecommenderRecommenderConfigTrainingDataConfig</a>

The training data configuration to use when creating a domain recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#training_data_config PersonalizeRecommender#training_data_config}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[PersonalizeRecommenderTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags">PersonalizeRecommenderTags</a>]

---

##### `reset_recommender_config` <a name="reset_recommender_config" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.resetRecommenderConfig"></a>

```python
def reset_recommender_config() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a PersonalizeRecommender resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.isConstruct"></a>

```python
from cdktn_provider_awscc import personalize_recommender

personalizeRecommender.PersonalizeRecommender.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.isTerraformElement"></a>

```python
from cdktn_provider_awscc import personalize_recommender

personalizeRecommender.PersonalizeRecommender.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.isTerraformResource"></a>

```python
from cdktn_provider_awscc import personalize_recommender

personalizeRecommender.PersonalizeRecommender.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import personalize_recommender

personalizeRecommender.PersonalizeRecommender.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a PersonalizeRecommender resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PersonalizeRecommender to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PersonalizeRecommender that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PersonalizeRecommender to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.creationDateTime">creation_date_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.lastUpdatedDateTime">last_updated_date_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.recommenderArn">recommender_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.recommenderConfig">recommender_config</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference">PersonalizeRecommenderRecommenderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList">PersonalizeRecommenderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.datasetGroupArnInput">dataset_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.recipeArnInput">recipe_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.recommenderConfigInput">recommender_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig">PersonalizeRecommenderRecommenderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags">PersonalizeRecommenderTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.datasetGroupArn">dataset_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.recipeArn">recipe_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `creation_date_time`<sup>Required</sup> <a name="creation_date_time" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.creationDateTime"></a>

```python
creation_date_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_date_time`<sup>Required</sup> <a name="last_updated_date_time" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.lastUpdatedDateTime"></a>

```python
last_updated_date_time: str
```

- *Type:* str

---

##### `recommender_arn`<sup>Required</sup> <a name="recommender_arn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.recommenderArn"></a>

```python
recommender_arn: str
```

- *Type:* str

---

##### `recommender_config`<sup>Required</sup> <a name="recommender_config" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.recommenderConfig"></a>

```python
recommender_config: PersonalizeRecommenderRecommenderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference">PersonalizeRecommenderRecommenderConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.tags"></a>

```python
tags: PersonalizeRecommenderTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList">PersonalizeRecommenderTagsList</a>

---

##### `dataset_group_arn_input`<sup>Optional</sup> <a name="dataset_group_arn_input" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.datasetGroupArnInput"></a>

```python
dataset_group_arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `recipe_arn_input`<sup>Optional</sup> <a name="recipe_arn_input" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.recipeArnInput"></a>

```python
recipe_arn_input: str
```

- *Type:* str

---

##### `recommender_config_input`<sup>Optional</sup> <a name="recommender_config_input" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.recommenderConfigInput"></a>

```python
recommender_config_input: IResolvable | PersonalizeRecommenderRecommenderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig">PersonalizeRecommenderRecommenderConfig</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[PersonalizeRecommenderTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags">PersonalizeRecommenderTags</a>]

---

##### `dataset_group_arn`<sup>Required</sup> <a name="dataset_group_arn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.datasetGroupArn"></a>

```python
dataset_group_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `recipe_arn`<sup>Required</sup> <a name="recipe_arn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.recipeArn"></a>

```python
recipe_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommender.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PersonalizeRecommenderConfig <a name="PersonalizeRecommenderConfig" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_recommender

personalizeRecommender.PersonalizeRecommenderConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  dataset_group_arn: str,
  name: str,
  recipe_arn: str,
  recommender_config: PersonalizeRecommenderRecommenderConfig = None,
  tags: IResolvable | typing.List[PersonalizeRecommenderTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.datasetGroupArn">dataset_group_arn</a></code> | <code>str</code> | The ARN of the Domain dataset group that the recommender is created for. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.name">name</a></code> | <code>str</code> | The name of the recommender. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.recipeArn">recipe_arn</a></code> | <code>str</code> | The ARN of the recipe (Domain dataset group use case) that the recommender uses. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.recommenderConfig">recommender_config</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig">PersonalizeRecommenderRecommenderConfig</a></code> | The configuration details of the recommender. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags">PersonalizeRecommenderTags</a>]</code> | Tags to associate with the recommender. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `dataset_group_arn`<sup>Required</sup> <a name="dataset_group_arn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.datasetGroupArn"></a>

```python
dataset_group_arn: str
```

- *Type:* str

The ARN of the Domain dataset group that the recommender is created for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#dataset_group_arn PersonalizeRecommender#dataset_group_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#name PersonalizeRecommender#name}

---

##### `recipe_arn`<sup>Required</sup> <a name="recipe_arn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.recipeArn"></a>

```python
recipe_arn: str
```

- *Type:* str

The ARN of the recipe (Domain dataset group use case) that the recommender uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#recipe_arn PersonalizeRecommender#recipe_arn}

---

##### `recommender_config`<sup>Optional</sup> <a name="recommender_config" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.recommenderConfig"></a>

```python
recommender_config: PersonalizeRecommenderRecommenderConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig">PersonalizeRecommenderRecommenderConfig</a>

The configuration details of the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#recommender_config PersonalizeRecommender#recommender_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[PersonalizeRecommenderTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags">PersonalizeRecommenderTags</a>]

Tags to associate with the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#tags PersonalizeRecommender#tags}

---

### PersonalizeRecommenderRecommenderConfig <a name="PersonalizeRecommenderRecommenderConfig" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_recommender

personalizeRecommender.PersonalizeRecommenderRecommenderConfig(
  enable_metadata_with_recommendations: bool | IResolvable = None,
  item_exploration_config: typing.Mapping[str] = None,
  min_recommendation_requests_per_second: typing.Union[int, float] = None,
  training_data_config: PersonalizeRecommenderRecommenderConfigTrainingDataConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig.property.enableMetadataWithRecommendations">enable_metadata_with_recommendations</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether metadata with recommendations is enabled for the recommender. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig.property.itemExplorationConfig">item_exploration_config</a></code> | <code>typing.Mapping[str]</code> | Specifies the exploration configuration hyperparameters. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig.property.minRecommendationRequestsPerSecond">min_recommendation_requests_per_second</a></code> | <code>typing.Union[int, float]</code> | Specifies the requested minimum provisioned recommendation requests per second. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig.property.trainingDataConfig">training_data_config</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfig">PersonalizeRecommenderRecommenderConfigTrainingDataConfig</a></code> | The training data configuration to use when creating a domain recommender. |

---

##### `enable_metadata_with_recommendations`<sup>Optional</sup> <a name="enable_metadata_with_recommendations" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig.property.enableMetadataWithRecommendations"></a>

```python
enable_metadata_with_recommendations: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether metadata with recommendations is enabled for the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#enable_metadata_with_recommendations PersonalizeRecommender#enable_metadata_with_recommendations}

---

##### `item_exploration_config`<sup>Optional</sup> <a name="item_exploration_config" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig.property.itemExplorationConfig"></a>

```python
item_exploration_config: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Specifies the exploration configuration hyperparameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#item_exploration_config PersonalizeRecommender#item_exploration_config}

---

##### `min_recommendation_requests_per_second`<sup>Optional</sup> <a name="min_recommendation_requests_per_second" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig.property.minRecommendationRequestsPerSecond"></a>

```python
min_recommendation_requests_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the requested minimum provisioned recommendation requests per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#min_recommendation_requests_per_second PersonalizeRecommender#min_recommendation_requests_per_second}

---

##### `training_data_config`<sup>Optional</sup> <a name="training_data_config" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig.property.trainingDataConfig"></a>

```python
training_data_config: PersonalizeRecommenderRecommenderConfigTrainingDataConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfig">PersonalizeRecommenderRecommenderConfigTrainingDataConfig</a>

The training data configuration to use when creating a domain recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#training_data_config PersonalizeRecommender#training_data_config}

---

### PersonalizeRecommenderRecommenderConfigTrainingDataConfig <a name="PersonalizeRecommenderRecommenderConfigTrainingDataConfig" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfig.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_recommender

personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfig(
  excluded_dataset_columns: IResolvable | typing.Mapping[typing.List[str]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfig.property.excludedDatasetColumns">excluded_dataset_columns</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | Specifies the columns to exclude from training. |

---

##### `excluded_dataset_columns`<sup>Optional</sup> <a name="excluded_dataset_columns" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfig.property.excludedDatasetColumns"></a>

```python
excluded_dataset_columns: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

Specifies the columns to exclude from training.

Each key is a dataset type, and each value is a list of columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#excluded_dataset_columns PersonalizeRecommender#excluded_dataset_columns}

---

### PersonalizeRecommenderTags <a name="PersonalizeRecommenderTags" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_recommender

personalizeRecommender.PersonalizeRecommenderTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#key PersonalizeRecommender#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#value PersonalizeRecommender#value}

---

## Classes <a name="Classes" id="Classes"></a>

### PersonalizeRecommenderRecommenderConfigOutputReference <a name="PersonalizeRecommenderRecommenderConfigOutputReference" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_recommender

personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.putTrainingDataConfig">put_training_data_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.resetEnableMetadataWithRecommendations">reset_enable_metadata_with_recommendations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.resetItemExplorationConfig">reset_item_exploration_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.resetMinRecommendationRequestsPerSecond">reset_min_recommendation_requests_per_second</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.resetTrainingDataConfig">reset_training_data_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_training_data_config` <a name="put_training_data_config" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.putTrainingDataConfig"></a>

```python
def put_training_data_config(
  excluded_dataset_columns: IResolvable | typing.Mapping[typing.List[str]] = None
) -> None
```

###### `excluded_dataset_columns`<sup>Optional</sup> <a name="excluded_dataset_columns" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.putTrainingDataConfig.parameter.excludedDatasetColumns"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

Specifies the columns to exclude from training.

Each key is a dataset type, and each value is a list of columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/personalize_recommender#excluded_dataset_columns PersonalizeRecommender#excluded_dataset_columns}

---

##### `reset_enable_metadata_with_recommendations` <a name="reset_enable_metadata_with_recommendations" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.resetEnableMetadataWithRecommendations"></a>

```python
def reset_enable_metadata_with_recommendations() -> None
```

##### `reset_item_exploration_config` <a name="reset_item_exploration_config" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.resetItemExplorationConfig"></a>

```python
def reset_item_exploration_config() -> None
```

##### `reset_min_recommendation_requests_per_second` <a name="reset_min_recommendation_requests_per_second" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.resetMinRecommendationRequestsPerSecond"></a>

```python
def reset_min_recommendation_requests_per_second() -> None
```

##### `reset_training_data_config` <a name="reset_training_data_config" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.resetTrainingDataConfig"></a>

```python
def reset_training_data_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.trainingDataConfig">training_data_config</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference">PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.enableMetadataWithRecommendationsInput">enable_metadata_with_recommendations_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.itemExplorationConfigInput">item_exploration_config_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.minRecommendationRequestsPerSecondInput">min_recommendation_requests_per_second_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.trainingDataConfigInput">training_data_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfig">PersonalizeRecommenderRecommenderConfigTrainingDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.enableMetadataWithRecommendations">enable_metadata_with_recommendations</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.itemExplorationConfig">item_exploration_config</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.minRecommendationRequestsPerSecond">min_recommendation_requests_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig">PersonalizeRecommenderRecommenderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `training_data_config`<sup>Required</sup> <a name="training_data_config" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.trainingDataConfig"></a>

```python
training_data_config: PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference">PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference</a>

---

##### `enable_metadata_with_recommendations_input`<sup>Optional</sup> <a name="enable_metadata_with_recommendations_input" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.enableMetadataWithRecommendationsInput"></a>

```python
enable_metadata_with_recommendations_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `item_exploration_config_input`<sup>Optional</sup> <a name="item_exploration_config_input" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.itemExplorationConfigInput"></a>

```python
item_exploration_config_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `min_recommendation_requests_per_second_input`<sup>Optional</sup> <a name="min_recommendation_requests_per_second_input" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.minRecommendationRequestsPerSecondInput"></a>

```python
min_recommendation_requests_per_second_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `training_data_config_input`<sup>Optional</sup> <a name="training_data_config_input" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.trainingDataConfigInput"></a>

```python
training_data_config_input: IResolvable | PersonalizeRecommenderRecommenderConfigTrainingDataConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfig">PersonalizeRecommenderRecommenderConfigTrainingDataConfig</a>

---

##### `enable_metadata_with_recommendations`<sup>Required</sup> <a name="enable_metadata_with_recommendations" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.enableMetadataWithRecommendations"></a>

```python
enable_metadata_with_recommendations: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `item_exploration_config`<sup>Required</sup> <a name="item_exploration_config" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.itemExplorationConfig"></a>

```python
item_exploration_config: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `min_recommendation_requests_per_second`<sup>Required</sup> <a name="min_recommendation_requests_per_second" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.minRecommendationRequestsPerSecond"></a>

```python
min_recommendation_requests_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PersonalizeRecommenderRecommenderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfig">PersonalizeRecommenderRecommenderConfig</a>

---


### PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference <a name="PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_recommender

personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.resetExcludedDatasetColumns">reset_excluded_dataset_columns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_excluded_dataset_columns` <a name="reset_excluded_dataset_columns" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.resetExcludedDatasetColumns"></a>

```python
def reset_excluded_dataset_columns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.property.excludedDatasetColumnsInput">excluded_dataset_columns_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.property.excludedDatasetColumns">excluded_dataset_columns</a></code> | <code>cdktn.IResolvable \| typing.Mapping[typing.List[str]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfig">PersonalizeRecommenderRecommenderConfigTrainingDataConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `excluded_dataset_columns_input`<sup>Optional</sup> <a name="excluded_dataset_columns_input" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.property.excludedDatasetColumnsInput"></a>

```python
excluded_dataset_columns_input: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

##### `excluded_dataset_columns`<sup>Required</sup> <a name="excluded_dataset_columns" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.property.excludedDatasetColumns"></a>

```python
excluded_dataset_columns: IResolvable | typing.Mapping[typing.List[str]]
```

- *Type:* cdktn.IResolvable | typing.Mapping[typing.List[str]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PersonalizeRecommenderRecommenderConfigTrainingDataConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderRecommenderConfigTrainingDataConfig">PersonalizeRecommenderRecommenderConfigTrainingDataConfig</a>

---


### PersonalizeRecommenderTagsList <a name="PersonalizeRecommenderTagsList" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_recommender

personalizeRecommender.PersonalizeRecommenderTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PersonalizeRecommenderTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags">PersonalizeRecommenderTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[PersonalizeRecommenderTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags">PersonalizeRecommenderTags</a>]

---


### PersonalizeRecommenderTagsOutputReference <a name="PersonalizeRecommenderTagsOutputReference" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import personalize_recommender

personalizeRecommender.PersonalizeRecommenderTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags">PersonalizeRecommenderTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PersonalizeRecommenderTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.personalizeRecommender.PersonalizeRecommenderTags">PersonalizeRecommenderTags</a>

---



