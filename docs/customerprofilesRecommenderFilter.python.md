# `customerprofilesRecommenderFilter` Submodule <a name="`customerprofilesRecommenderFilter` Submodule" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomerprofilesRecommenderFilter <a name="CustomerprofilesRecommenderFilter" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/customerprofiles_recommender_filter awscc_customerprofiles_recommender_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender_filter

customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter(
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
  recommender_filter_expression: str,
  recommender_filter_name: str,
  description: str = None,
  recommender_schema_name: str = None,
  tags: IResolvable | typing.List[CustomerprofilesRecommenderFilterTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.domainName">domain_name</a></code> | <code>str</code> | The unique name of the domain. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.recommenderFilterExpression">recommender_filter_expression</a></code> | <code>str</code> | The filter expression that defines which items to include or exclude from recommendations. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.recommenderFilterName">recommender_filter_name</a></code> | <code>str</code> | The name of the recommender filter. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the recommender filter. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.recommenderSchemaName">recommender_schema_name</a></code> | <code>str</code> | The name of the recommender schema to use for this recommender filter. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags">CustomerprofilesRecommenderFilterTags</a>]</code> | The tags used to organize, track, or control access for this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.domainName"></a>

- *Type:* str

The unique name of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/customerprofiles_recommender_filter#domain_name CustomerprofilesRecommenderFilter#domain_name}

---

##### `recommender_filter_expression`<sup>Required</sup> <a name="recommender_filter_expression" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.recommenderFilterExpression"></a>

- *Type:* str

The filter expression that defines which items to include or exclude from recommendations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/customerprofiles_recommender_filter#recommender_filter_expression CustomerprofilesRecommenderFilter#recommender_filter_expression}

---

##### `recommender_filter_name`<sup>Required</sup> <a name="recommender_filter_name" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.recommenderFilterName"></a>

- *Type:* str

The name of the recommender filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/customerprofiles_recommender_filter#recommender_filter_name CustomerprofilesRecommenderFilter#recommender_filter_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.description"></a>

- *Type:* str

The description of the recommender filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/customerprofiles_recommender_filter#description CustomerprofilesRecommenderFilter#description}

---

##### `recommender_schema_name`<sup>Optional</sup> <a name="recommender_schema_name" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.recommenderSchemaName"></a>

- *Type:* str

The name of the recommender schema to use for this recommender filter.

If not specified, the default schema is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/customerprofiles_recommender_filter#recommender_schema_name CustomerprofilesRecommenderFilter#recommender_schema_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags">CustomerprofilesRecommenderFilterTags</a>]

The tags used to organize, track, or control access for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/customerprofiles_recommender_filter#tags CustomerprofilesRecommenderFilter#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.resetRecommenderSchemaName">reset_recommender_schema_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CustomerprofilesRecommenderFilterTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags">CustomerprofilesRecommenderFilterTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_recommender_schema_name` <a name="reset_recommender_schema_name" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.resetRecommenderSchemaName"></a>

```python
def reset_recommender_schema_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CustomerprofilesRecommenderFilter resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.isConstruct"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender_filter

customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.isTerraformElement"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender_filter

customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.isTerraformResource"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender_filter

customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender_filter

customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CustomerprofilesRecommenderFilter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CustomerprofilesRecommenderFilter to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CustomerprofilesRecommenderFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/customerprofiles_recommender_filter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CustomerprofilesRecommenderFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderFilterArn">recommender_filter_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList">CustomerprofilesRecommenderFilterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.domainNameInput">domain_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderFilterExpressionInput">recommender_filter_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderFilterNameInput">recommender_filter_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderSchemaNameInput">recommender_schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags">CustomerprofilesRecommenderFilterTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderFilterExpression">recommender_filter_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderFilterName">recommender_filter_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderSchemaName">recommender_schema_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `recommender_filter_arn`<sup>Required</sup> <a name="recommender_filter_arn" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderFilterArn"></a>

```python
recommender_filter_arn: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.tags"></a>

```python
tags: CustomerprofilesRecommenderFilterTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList">CustomerprofilesRecommenderFilterTagsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `domain_name_input`<sup>Optional</sup> <a name="domain_name_input" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.domainNameInput"></a>

```python
domain_name_input: str
```

- *Type:* str

---

##### `recommender_filter_expression_input`<sup>Optional</sup> <a name="recommender_filter_expression_input" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderFilterExpressionInput"></a>

```python
recommender_filter_expression_input: str
```

- *Type:* str

---

##### `recommender_filter_name_input`<sup>Optional</sup> <a name="recommender_filter_name_input" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderFilterNameInput"></a>

```python
recommender_filter_name_input: str
```

- *Type:* str

---

##### `recommender_schema_name_input`<sup>Optional</sup> <a name="recommender_schema_name_input" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderSchemaNameInput"></a>

```python
recommender_schema_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CustomerprofilesRecommenderFilterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags">CustomerprofilesRecommenderFilterTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `recommender_filter_expression`<sup>Required</sup> <a name="recommender_filter_expression" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderFilterExpression"></a>

```python
recommender_filter_expression: str
```

- *Type:* str

---

##### `recommender_filter_name`<sup>Required</sup> <a name="recommender_filter_name" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderFilterName"></a>

```python
recommender_filter_name: str
```

- *Type:* str

---

##### `recommender_schema_name`<sup>Required</sup> <a name="recommender_schema_name" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderSchemaName"></a>

```python
recommender_schema_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CustomerprofilesRecommenderFilterConfig <a name="CustomerprofilesRecommenderFilterConfig" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender_filter

customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  domain_name: str,
  recommender_filter_expression: str,
  recommender_filter_name: str,
  description: str = None,
  recommender_schema_name: str = None,
  tags: IResolvable | typing.List[CustomerprofilesRecommenderFilterTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.domainName">domain_name</a></code> | <code>str</code> | The unique name of the domain. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.recommenderFilterExpression">recommender_filter_expression</a></code> | <code>str</code> | The filter expression that defines which items to include or exclude from recommendations. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.recommenderFilterName">recommender_filter_name</a></code> | <code>str</code> | The name of the recommender filter. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.description">description</a></code> | <code>str</code> | The description of the recommender filter. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.recommenderSchemaName">recommender_schema_name</a></code> | <code>str</code> | The name of the recommender schema to use for this recommender filter. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags">CustomerprofilesRecommenderFilterTags</a>]</code> | The tags used to organize, track, or control access for this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

The unique name of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/customerprofiles_recommender_filter#domain_name CustomerprofilesRecommenderFilter#domain_name}

---

##### `recommender_filter_expression`<sup>Required</sup> <a name="recommender_filter_expression" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.recommenderFilterExpression"></a>

```python
recommender_filter_expression: str
```

- *Type:* str

The filter expression that defines which items to include or exclude from recommendations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/customerprofiles_recommender_filter#recommender_filter_expression CustomerprofilesRecommenderFilter#recommender_filter_expression}

---

##### `recommender_filter_name`<sup>Required</sup> <a name="recommender_filter_name" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.recommenderFilterName"></a>

```python
recommender_filter_name: str
```

- *Type:* str

The name of the recommender filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/customerprofiles_recommender_filter#recommender_filter_name CustomerprofilesRecommenderFilter#recommender_filter_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the recommender filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/customerprofiles_recommender_filter#description CustomerprofilesRecommenderFilter#description}

---

##### `recommender_schema_name`<sup>Optional</sup> <a name="recommender_schema_name" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.recommenderSchemaName"></a>

```python
recommender_schema_name: str
```

- *Type:* str

The name of the recommender schema to use for this recommender filter.

If not specified, the default schema is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/customerprofiles_recommender_filter#recommender_schema_name CustomerprofilesRecommenderFilter#recommender_schema_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CustomerprofilesRecommenderFilterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags">CustomerprofilesRecommenderFilterTags</a>]

The tags used to organize, track, or control access for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/customerprofiles_recommender_filter#tags CustomerprofilesRecommenderFilter#tags}

---

### CustomerprofilesRecommenderFilterTags <a name="CustomerprofilesRecommenderFilterTags" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender_filter

customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/customerprofiles_recommender_filter#key CustomerprofilesRecommenderFilter#key}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/customerprofiles_recommender_filter#value CustomerprofilesRecommenderFilter#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/customerprofiles_recommender_filter#key CustomerprofilesRecommenderFilter#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/customerprofiles_recommender_filter#value CustomerprofilesRecommenderFilter#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CustomerprofilesRecommenderFilterTagsList <a name="CustomerprofilesRecommenderFilterTagsList" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender_filter

customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CustomerprofilesRecommenderFilterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags">CustomerprofilesRecommenderFilterTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CustomerprofilesRecommenderFilterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags">CustomerprofilesRecommenderFilterTags</a>]

---


### CustomerprofilesRecommenderFilterTagsOutputReference <a name="CustomerprofilesRecommenderFilterTagsOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import customerprofiles_recommender_filter

customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags">CustomerprofilesRecommenderFilterTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CustomerprofilesRecommenderFilterTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags">CustomerprofilesRecommenderFilterTags</a>

---



