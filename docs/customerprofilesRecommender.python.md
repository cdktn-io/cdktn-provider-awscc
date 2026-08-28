# `customerprofilesRecommender` Submodule <a name="`customerprofilesRecommender` Submodule" id="@cdktn/provider-awscc.customerprofilesRecommender"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomerprofilesRecommender <a name="CustomerprofilesRecommender" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender awscc_customerprofiles_recommender}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender

customerprofilesRecommender.CustomerprofilesRecommender(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain_name: str,
  recommender_name: str,
  recommender_recipe_name: str,
  description: str = None,
  recommender_config: CustomerprofilesRecommenderRecommenderConfig = None,
  tags: IResolvable | typing.List[CustomerprofilesRecommenderTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | The name of the domain for which the recommender will be created. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.recommenderName">recommender_name</a></code> | <code>str</code> | The name of the recommender. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.recommenderRecipeName">recommender_recipe_name</a></code> | <code>str</code> | The name of the recommender recipe. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the recommender. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.recommenderConfig">recommender_config</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig">CustomerprofilesRecommenderRecommenderConfig</a></code> | Configuration for the recommender. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags">CustomerprofilesRecommenderTags</a>]</code> | The tags used to organize, track, or control access for this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.domainName"></a>

- *Type:* str

The name of the domain for which the recommender will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#domain_name CustomerprofilesRecommender#domain_name}

---

##### `recommender_name`<sup>Required</sup> <a name="recommender_name" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.recommenderName"></a>

- *Type:* str

The name of the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#recommender_name CustomerprofilesRecommender#recommender_name}

---

##### `recommender_recipe_name`<sup>Required</sup> <a name="recommender_recipe_name" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.recommenderRecipeName"></a>

- *Type:* str

The name of the recommender recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#recommender_recipe_name CustomerprofilesRecommender#recommender_recipe_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.description"></a>

- *Type:* str

The description of the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#description CustomerprofilesRecommender#description}

---

##### `recommender_config`<sup>Optional</sup> <a name="recommender_config" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.recommenderConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig">CustomerprofilesRecommenderRecommenderConfig</a>

Configuration for the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#recommender_config CustomerprofilesRecommender#recommender_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags">CustomerprofilesRecommenderTags</a>]

The tags used to organize, track, or control access for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#tags CustomerprofilesRecommender#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.putRecommenderConfig">put_recommender_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.resetRecommenderConfig">reset_recommender_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_recommender_config` <a name="put_recommender_config" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.putRecommenderConfig"></a>

```python
def put_recommender_config(
  events_config: CustomerprofilesRecommenderRecommenderConfigEventsConfig = None
) -> None
```

###### `events_config`<sup>Optional</sup> <a name="events_config" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.putRecommenderConfig.parameter.eventsConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig">CustomerprofilesRecommenderRecommenderConfigEventsConfig</a>

Configuration for events used in the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#events_config CustomerprofilesRecommender#events_config}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CustomerprofilesRecommenderTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags">CustomerprofilesRecommenderTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_recommender_config` <a name="reset_recommender_config" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.resetRecommenderConfig"></a>

```python
def reset_recommender_config() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CustomerprofilesRecommender resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.isConstruct"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender

customerprofilesRecommender.CustomerprofilesRecommender.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.isTerraformElement"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender

customerprofilesRecommender.CustomerprofilesRecommender.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.isTerraformResource"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender

customerprofilesRecommender.CustomerprofilesRecommender.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender

customerprofilesRecommender.CustomerprofilesRecommender.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CustomerprofilesRecommender resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CustomerprofilesRecommender to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CustomerprofilesRecommender that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CustomerprofilesRecommender to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.failureReason">failure_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.lastUpdatedAt">last_updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.latestRecommenderUpdate">latest_recommender_update</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference">CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderArn">recommender_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderConfig">recommender_config</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference">CustomerprofilesRecommenderRecommenderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList">CustomerprofilesRecommenderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.trainingMetrics">training_metrics</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList">CustomerprofilesRecommenderTrainingMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderConfigInput">recommender_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig">CustomerprofilesRecommenderRecommenderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderNameInput">recommender_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderRecipeNameInput">recommender_recipe_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags">CustomerprofilesRecommenderTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderName">recommender_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderRecipeName">recommender_recipe_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `failure_reason`<sup>Required</sup> <a name="failure_reason" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.failureReason"></a>

```python
failure_reason: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_at`<sup>Required</sup> <a name="last_updated_at" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.lastUpdatedAt"></a>

```python
last_updated_at: str
```

- *Type:* str

---

##### `latest_recommender_update`<sup>Required</sup> <a name="latest_recommender_update" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.latestRecommenderUpdate"></a>

```python
latest_recommender_update: CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference">CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference</a>

---

##### `recommender_arn`<sup>Required</sup> <a name="recommender_arn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderArn"></a>

```python
recommender_arn: str
```

- *Type:* str

---

##### `recommender_config`<sup>Required</sup> <a name="recommender_config" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderConfig"></a>

```python
recommender_config: CustomerprofilesRecommenderRecommenderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference">CustomerprofilesRecommenderRecommenderConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.tags"></a>

```python
tags: CustomerprofilesRecommenderTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList">CustomerprofilesRecommenderTagsList</a>

---

##### `training_metrics`<sup>Required</sup> <a name="training_metrics" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.trainingMetrics"></a>

```python
training_metrics: CustomerprofilesRecommenderTrainingMetricsList
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList">CustomerprofilesRecommenderTrainingMetricsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `recommender_config_input`<sup>Optional</sup> <a name="recommender_config_input" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderConfigInput"></a>

```python
recommender_config_input: IResolvable | CustomerprofilesRecommenderRecommenderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig">CustomerprofilesRecommenderRecommenderConfig</a>

---

##### `recommender_name_input`<sup>Optional</sup> <a name="recommender_name_input" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderNameInput"></a>

```python
recommender_name_input: str
```

- *Type:* str

---

##### `recommender_recipe_name_input`<sup>Optional</sup> <a name="recommender_recipe_name_input" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderRecipeNameInput"></a>

```python
recommender_recipe_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CustomerprofilesRecommenderTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags">CustomerprofilesRecommenderTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `recommender_name`<sup>Required</sup> <a name="recommender_name" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderName"></a>

```python
recommender_name: str
```

- *Type:* str

---

##### `recommender_recipe_name`<sup>Required</sup> <a name="recommender_recipe_name" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderRecipeName"></a>

```python
recommender_recipe_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CustomerprofilesRecommenderConfig <a name="CustomerprofilesRecommenderConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender

customerprofilesRecommender.CustomerprofilesRecommenderConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain_name: str,
  recommender_name: str,
  recommender_recipe_name: str,
  description: str = None,
  recommender_config: CustomerprofilesRecommenderRecommenderConfig = None,
  tags: IResolvable | typing.List[CustomerprofilesRecommenderTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.domainName">domain_name</a></code> | <code>str</code> | The name of the domain for which the recommender will be created. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.recommenderName">recommender_name</a></code> | <code>str</code> | The name of the recommender. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.recommenderRecipeName">recommender_recipe_name</a></code> | <code>str</code> | The name of the recommender recipe. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.description">description</a></code> | <code>str</code> | The description of the recommender. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.recommenderConfig">recommender_config</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig">CustomerprofilesRecommenderRecommenderConfig</a></code> | Configuration for the recommender. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags">CustomerprofilesRecommenderTags</a>]</code> | The tags used to organize, track, or control access for this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

The name of the domain for which the recommender will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#domain_name CustomerprofilesRecommender#domain_name}

---

##### `recommender_name`<sup>Required</sup> <a name="recommender_name" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.recommenderName"></a>

```python
recommender_name: str
```

- *Type:* str

The name of the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#recommender_name CustomerprofilesRecommender#recommender_name}

---

##### `recommender_recipe_name`<sup>Required</sup> <a name="recommender_recipe_name" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.recommenderRecipeName"></a>

```python
recommender_recipe_name: str
```

- *Type:* str

The name of the recommender recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#recommender_recipe_name CustomerprofilesRecommender#recommender_recipe_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#description CustomerprofilesRecommender#description}

---

##### `recommender_config`<sup>Optional</sup> <a name="recommender_config" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.recommenderConfig"></a>

```python
recommender_config: CustomerprofilesRecommenderRecommenderConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig">CustomerprofilesRecommenderRecommenderConfig</a>

Configuration for the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#recommender_config CustomerprofilesRecommender#recommender_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CustomerprofilesRecommenderTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags">CustomerprofilesRecommenderTags</a>]

The tags used to organize, track, or control access for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#tags CustomerprofilesRecommender#tags}

---

### CustomerprofilesRecommenderLatestRecommenderUpdate <a name="CustomerprofilesRecommenderLatestRecommenderUpdate" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdate.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender

customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdate()
```


### CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig <a name="CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender

customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig()
```


### CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig <a name="CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender

customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig()
```


### CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct <a name="CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender

customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct()
```


### CustomerprofilesRecommenderRecommenderConfig <a name="CustomerprofilesRecommenderRecommenderConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender

customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig(
  events_config: CustomerprofilesRecommenderRecommenderConfigEventsConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig.property.eventsConfig">events_config</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig">CustomerprofilesRecommenderRecommenderConfigEventsConfig</a></code> | Configuration for events used in the recommender. |

---

##### `events_config`<sup>Optional</sup> <a name="events_config" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig.property.eventsConfig"></a>

```python
events_config: CustomerprofilesRecommenderRecommenderConfigEventsConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig">CustomerprofilesRecommenderRecommenderConfigEventsConfig</a>

Configuration for events used in the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#events_config CustomerprofilesRecommender#events_config}

---

### CustomerprofilesRecommenderRecommenderConfigEventsConfig <a name="CustomerprofilesRecommenderRecommenderConfigEventsConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender

customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig(
  event_parameters_list: IResolvable | typing.List[CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig.property.eventParametersList">event_parameters_list</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct">CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct</a>]</code> | List of event parameters with their value thresholds. |

---

##### `event_parameters_list`<sup>Optional</sup> <a name="event_parameters_list" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig.property.eventParametersList"></a>

```python
event_parameters_list: IResolvable | typing.List[CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct">CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct</a>]

List of event parameters with their value thresholds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#event_parameters_list CustomerprofilesRecommender#event_parameters_list}

---

### CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct <a name="CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender

customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct(
  event_type: str = None,
  event_value_threshold: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct.property.eventType">event_type</a></code> | <code>str</code> | The type of event. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct.property.eventValueThreshold">event_value_threshold</a></code> | <code>typing.Union[int, float]</code> | The threshold of the event type. |

---

##### `event_type`<sup>Optional</sup> <a name="event_type" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

The type of event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#event_type CustomerprofilesRecommender#event_type}

---

##### `event_value_threshold`<sup>Optional</sup> <a name="event_value_threshold" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct.property.eventValueThreshold"></a>

```python
event_value_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The threshold of the event type.

Only events with a value greater or equal to this threshold will be considered for solution creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#event_value_threshold CustomerprofilesRecommender#event_value_threshold}

---

### CustomerprofilesRecommenderTags <a name="CustomerprofilesRecommenderTags" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender

customerprofilesRecommender.CustomerprofilesRecommenderTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#key CustomerprofilesRecommender#key}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#value CustomerprofilesRecommender#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#key CustomerprofilesRecommender#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#value CustomerprofilesRecommender#value}.

---

### CustomerprofilesRecommenderTrainingMetrics <a name="CustomerprofilesRecommenderTrainingMetrics" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetrics.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender

customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetrics()
```


### CustomerprofilesRecommenderTrainingMetricsMetrics <a name="CustomerprofilesRecommenderTrainingMetricsMetrics" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetrics.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender

customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetrics()
```


## Classes <a name="Classes" id="Classes"></a>

### CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference <a name="CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender

customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.creationDateTime">creation_date_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.failureReason">failure_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.lastUpdatedDateTime">last_updated_date_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.recommenderConfig">recommender_config</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdate">CustomerprofilesRecommenderLatestRecommenderUpdate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `creation_date_time`<sup>Required</sup> <a name="creation_date_time" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.creationDateTime"></a>

```python
creation_date_time: str
```

- *Type:* str

---

##### `failure_reason`<sup>Required</sup> <a name="failure_reason" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.failureReason"></a>

```python
failure_reason: str
```

- *Type:* str

---

##### `last_updated_date_time`<sup>Required</sup> <a name="last_updated_date_time" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.lastUpdatedDateTime"></a>

```python
last_updated_date_time: str
```

- *Type:* str

---

##### `recommender_config`<sup>Required</sup> <a name="recommender_config" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.recommenderConfig"></a>

```python
recommender_config: CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.internalValue"></a>

```python
internal_value: CustomerprofilesRecommenderLatestRecommenderUpdate
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdate">CustomerprofilesRecommenderLatestRecommenderUpdate</a>

---


### CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList <a name="CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender

customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference <a name="CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender

customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventType">event_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventValueThreshold">event_value_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

---

##### `event_value_threshold`<sup>Required</sup> <a name="event_value_threshold" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventValueThreshold"></a>

```python
event_value_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.internalValue"></a>

```python
internal_value: CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct</a>

---


### CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference <a name="CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender

customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.eventParametersList">event_parameters_list</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_parameters_list`<sup>Required</sup> <a name="event_parameters_list" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.eventParametersList"></a>

```python
event_parameters_list: CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.internalValue"></a>

```python
internal_value: CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig</a>

---


### CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference <a name="CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender

customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.eventsConfig">events_config</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `events_config`<sup>Required</sup> <a name="events_config" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.eventsConfig"></a>

```python
events_config: CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.internalValue"></a>

```python
internal_value: CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig</a>

---


### CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList <a name="CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender

customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct">CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct">CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct</a>]

---


### CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference <a name="CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender

customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.resetEventType">reset_event_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.resetEventValueThreshold">reset_event_value_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_event_type` <a name="reset_event_type" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.resetEventType"></a>

```python
def reset_event_type() -> None
```

##### `reset_event_value_threshold` <a name="reset_event_value_threshold" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.resetEventValueThreshold"></a>

```python
def reset_event_value_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventTypeInput">event_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventValueThresholdInput">event_value_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventType">event_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventValueThreshold">event_value_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct">CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_type_input`<sup>Optional</sup> <a name="event_type_input" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventTypeInput"></a>

```python
event_type_input: str
```

- *Type:* str

---

##### `event_value_threshold_input`<sup>Optional</sup> <a name="event_value_threshold_input" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventValueThresholdInput"></a>

```python
event_value_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `event_type`<sup>Required</sup> <a name="event_type" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventType"></a>

```python
event_type: str
```

- *Type:* str

---

##### `event_value_threshold`<sup>Required</sup> <a name="event_value_threshold" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventValueThreshold"></a>

```python
event_value_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct">CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct</a>

---


### CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference <a name="CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender

customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.putEventParametersList">put_event_parameters_list</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.resetEventParametersList">reset_event_parameters_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_event_parameters_list` <a name="put_event_parameters_list" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.putEventParametersList"></a>

```python
def put_event_parameters_list(
  value: IResolvable | typing.List[CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.putEventParametersList.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct">CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct</a>]

---

##### `reset_event_parameters_list` <a name="reset_event_parameters_list" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.resetEventParametersList"></a>

```python
def reset_event_parameters_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.eventParametersList">event_parameters_list</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList">CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.eventParametersListInput">event_parameters_list_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct">CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig">CustomerprofilesRecommenderRecommenderConfigEventsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_parameters_list`<sup>Required</sup> <a name="event_parameters_list" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.eventParametersList"></a>

```python
event_parameters_list: CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList">CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList</a>

---

##### `event_parameters_list_input`<sup>Optional</sup> <a name="event_parameters_list_input" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.eventParametersListInput"></a>

```python
event_parameters_list_input: IResolvable | typing.List[CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct">CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesRecommenderRecommenderConfigEventsConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig">CustomerprofilesRecommenderRecommenderConfigEventsConfig</a>

---


### CustomerprofilesRecommenderRecommenderConfigOutputReference <a name="CustomerprofilesRecommenderRecommenderConfigOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender

customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.putEventsConfig">put_events_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.resetEventsConfig">reset_events_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_events_config` <a name="put_events_config" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.putEventsConfig"></a>

```python
def put_events_config(
  event_parameters_list: IResolvable | typing.List[CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct] = None
) -> None
```

###### `event_parameters_list`<sup>Optional</sup> <a name="event_parameters_list" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.putEventsConfig.parameter.eventParametersList"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct">CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct</a>]

List of event parameters with their value thresholds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/customerprofiles_recommender#event_parameters_list CustomerprofilesRecommender#event_parameters_list}

---

##### `reset_events_config` <a name="reset_events_config" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.resetEventsConfig"></a>

```python
def reset_events_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.eventsConfig">events_config</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference">CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.eventsConfigInput">events_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig">CustomerprofilesRecommenderRecommenderConfigEventsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig">CustomerprofilesRecommenderRecommenderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `events_config`<sup>Required</sup> <a name="events_config" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.eventsConfig"></a>

```python
events_config: CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference">CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference</a>

---

##### `events_config_input`<sup>Optional</sup> <a name="events_config_input" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.eventsConfigInput"></a>

```python
events_config_input: IResolvable | CustomerprofilesRecommenderRecommenderConfigEventsConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig">CustomerprofilesRecommenderRecommenderConfigEventsConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesRecommenderRecommenderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig">CustomerprofilesRecommenderRecommenderConfig</a>

---


### CustomerprofilesRecommenderTagsList <a name="CustomerprofilesRecommenderTagsList" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender

customerprofilesRecommender.CustomerprofilesRecommenderTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CustomerprofilesRecommenderTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags">CustomerprofilesRecommenderTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CustomerprofilesRecommenderTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags">CustomerprofilesRecommenderTags</a>]

---


### CustomerprofilesRecommenderTagsOutputReference <a name="CustomerprofilesRecommenderTagsOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender

customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags">CustomerprofilesRecommenderTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesRecommenderTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags">CustomerprofilesRecommenderTags</a>

---


### CustomerprofilesRecommenderTrainingMetricsList <a name="CustomerprofilesRecommenderTrainingMetricsList" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender

customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CustomerprofilesRecommenderTrainingMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference <a name="CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender

customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.coverage">coverage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.freshness">freshness</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.hit">hit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.popularity">popularity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.recall">recall</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.similarity">similarity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetrics">CustomerprofilesRecommenderTrainingMetricsMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `coverage`<sup>Required</sup> <a name="coverage" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.coverage"></a>

```python
coverage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `freshness`<sup>Required</sup> <a name="freshness" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.freshness"></a>

```python
freshness: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hit`<sup>Required</sup> <a name="hit" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.hit"></a>

```python
hit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `popularity`<sup>Required</sup> <a name="popularity" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.popularity"></a>

```python
popularity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `recall`<sup>Required</sup> <a name="recall" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.recall"></a>

```python
recall: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `similarity`<sup>Required</sup> <a name="similarity" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.similarity"></a>

```python
similarity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.internalValue"></a>

```python
internal_value: CustomerprofilesRecommenderTrainingMetricsMetrics
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetrics">CustomerprofilesRecommenderTrainingMetricsMetrics</a>

---


### CustomerprofilesRecommenderTrainingMetricsOutputReference <a name="CustomerprofilesRecommenderTrainingMetricsOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender

customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.metrics">metrics</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference">CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetrics">CustomerprofilesRecommenderTrainingMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.metrics"></a>

```python
metrics: CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference">CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference</a>

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.internalValue"></a>

```python
internal_value: CustomerprofilesRecommenderTrainingMetrics
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetrics">CustomerprofilesRecommenderTrainingMetrics</a>

---



