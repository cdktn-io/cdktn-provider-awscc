# `kendraFeaturedResultsSet` Submodule <a name="`kendraFeaturedResultsSet` Submodule" id="@cdktn/provider-awscc.kendraFeaturedResultsSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KendraFeaturedResultsSet <a name="KendraFeaturedResultsSet" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set awscc_kendra_featured_results_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer"></a>

```python
from cdktn_provider_awscc import kendra_featured_results_set

kendraFeaturedResultsSet.KendraFeaturedResultsSet(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  featured_results_set_name: str,
  index_id: str,
  description: str = None,
  featured_documents: IResolvable | typing.List[KendraFeaturedResultsSetFeaturedDocuments] = None,
  query_texts: typing.List[str] = None,
  status: str = None,
  tags: IResolvable | typing.List[KendraFeaturedResultsSetTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.featuredResultsSetName">featured_results_set_name</a></code> | <code>str</code> | A name for the set of featured results. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.indexId">index_id</a></code> | <code>str</code> | The identifier of the index that you want to use for featuring results. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.description">description</a></code> | <code>str</code> | A description for the set of featured results. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.featuredDocuments">featured_documents</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a>]</code> | A list of document IDs for the documents you want to feature at the top of the search results page. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.queryTexts">query_texts</a></code> | <code>typing.List[str]</code> | A list of queries for featuring results. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.status">status</a></code> | <code>str</code> | The current status of the set of featured results. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a>]</code> | A list of key-value pairs that identify or categorize the featured results set. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `featured_results_set_name`<sup>Required</sup> <a name="featured_results_set_name" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.featuredResultsSetName"></a>

- *Type:* str

A name for the set of featured results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#featured_results_set_name KendraFeaturedResultsSet#featured_results_set_name}

---

##### `index_id`<sup>Required</sup> <a name="index_id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.indexId"></a>

- *Type:* str

The identifier of the index that you want to use for featuring results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#index_id KendraFeaturedResultsSet#index_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.description"></a>

- *Type:* str

A description for the set of featured results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#description KendraFeaturedResultsSet#description}

---

##### `featured_documents`<sup>Optional</sup> <a name="featured_documents" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.featuredDocuments"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a>]

A list of document IDs for the documents you want to feature at the top of the search results page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#featured_documents KendraFeaturedResultsSet#featured_documents}

---

##### `query_texts`<sup>Optional</sup> <a name="query_texts" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.queryTexts"></a>

- *Type:* typing.List[str]

A list of queries for featuring results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#query_texts KendraFeaturedResultsSet#query_texts}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.status"></a>

- *Type:* str

The current status of the set of featured results.

When the value is ACTIVE, featured results are ready for use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#status KendraFeaturedResultsSet#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a>]

A list of key-value pairs that identify or categorize the featured results set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#tags KendraFeaturedResultsSet#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.putFeaturedDocuments">put_featured_documents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetFeaturedDocuments">reset_featured_documents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetQueryTexts">reset_query_texts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_featured_documents` <a name="put_featured_documents" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.putFeaturedDocuments"></a>

```python
def put_featured_documents(
  value: IResolvable | typing.List[KendraFeaturedResultsSetFeaturedDocuments]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.putFeaturedDocuments.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[KendraFeaturedResultsSetTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_featured_documents` <a name="reset_featured_documents" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetFeaturedDocuments"></a>

```python
def reset_featured_documents() -> None
```

##### `reset_query_texts` <a name="reset_query_texts" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetQueryTexts"></a>

```python
def reset_query_texts() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a KendraFeaturedResultsSet resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isConstruct"></a>

```python
from cdktn_provider_awscc import kendra_featured_results_set

kendraFeaturedResultsSet.KendraFeaturedResultsSet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isTerraformElement"></a>

```python
from cdktn_provider_awscc import kendra_featured_results_set

kendraFeaturedResultsSet.KendraFeaturedResultsSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isTerraformResource"></a>

```python
from cdktn_provider_awscc import kendra_featured_results_set

kendraFeaturedResultsSet.KendraFeaturedResultsSet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import kendra_featured_results_set

kendraFeaturedResultsSet.KendraFeaturedResultsSet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a KendraFeaturedResultsSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KendraFeaturedResultsSet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KendraFeaturedResultsSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the KendraFeaturedResultsSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredDocuments">featured_documents</a></code> | <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList">KendraFeaturedResultsSetFeaturedDocumentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredResultsSetId">featured_results_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList">KendraFeaturedResultsSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredDocumentsInput">featured_documents_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredResultsSetNameInput">featured_results_set_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.indexIdInput">index_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.queryTextsInput">query_texts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredResultsSetName">featured_results_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.indexId">index_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.queryTexts">query_texts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `featured_documents`<sup>Required</sup> <a name="featured_documents" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredDocuments"></a>

```python
featured_documents: KendraFeaturedResultsSetFeaturedDocumentsList
```

- *Type:* <a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList">KendraFeaturedResultsSetFeaturedDocumentsList</a>

---

##### `featured_results_set_id`<sup>Required</sup> <a name="featured_results_set_id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredResultsSetId"></a>

```python
featured_results_set_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.tags"></a>

```python
tags: KendraFeaturedResultsSetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList">KendraFeaturedResultsSetTagsList</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `featured_documents_input`<sup>Optional</sup> <a name="featured_documents_input" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredDocumentsInput"></a>

```python
featured_documents_input: IResolvable | typing.List[KendraFeaturedResultsSetFeaturedDocuments]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a>]

---

##### `featured_results_set_name_input`<sup>Optional</sup> <a name="featured_results_set_name_input" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredResultsSetNameInput"></a>

```python
featured_results_set_name_input: str
```

- *Type:* str

---

##### `index_id_input`<sup>Optional</sup> <a name="index_id_input" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.indexIdInput"></a>

```python
index_id_input: str
```

- *Type:* str

---

##### `query_texts_input`<sup>Optional</sup> <a name="query_texts_input" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.queryTextsInput"></a>

```python
query_texts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[KendraFeaturedResultsSetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `featured_results_set_name`<sup>Required</sup> <a name="featured_results_set_name" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.featuredResultsSetName"></a>

```python
featured_results_set_name: str
```

- *Type:* str

---

##### `index_id`<sup>Required</sup> <a name="index_id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.indexId"></a>

```python
index_id: str
```

- *Type:* str

---

##### `query_texts`<sup>Required</sup> <a name="query_texts" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.queryTexts"></a>

```python
query_texts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KendraFeaturedResultsSetConfig <a name="KendraFeaturedResultsSetConfig" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import kendra_featured_results_set

kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  featured_results_set_name: str,
  index_id: str,
  description: str = None,
  featured_documents: IResolvable | typing.List[KendraFeaturedResultsSetFeaturedDocuments] = None,
  query_texts: typing.List[str] = None,
  status: str = None,
  tags: IResolvable | typing.List[KendraFeaturedResultsSetTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.featuredResultsSetName">featured_results_set_name</a></code> | <code>str</code> | A name for the set of featured results. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.indexId">index_id</a></code> | <code>str</code> | The identifier of the index that you want to use for featuring results. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.description">description</a></code> | <code>str</code> | A description for the set of featured results. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.featuredDocuments">featured_documents</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a>]</code> | A list of document IDs for the documents you want to feature at the top of the search results page. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.queryTexts">query_texts</a></code> | <code>typing.List[str]</code> | A list of queries for featuring results. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.status">status</a></code> | <code>str</code> | The current status of the set of featured results. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a>]</code> | A list of key-value pairs that identify or categorize the featured results set. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `featured_results_set_name`<sup>Required</sup> <a name="featured_results_set_name" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.featuredResultsSetName"></a>

```python
featured_results_set_name: str
```

- *Type:* str

A name for the set of featured results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#featured_results_set_name KendraFeaturedResultsSet#featured_results_set_name}

---

##### `index_id`<sup>Required</sup> <a name="index_id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.indexId"></a>

```python
index_id: str
```

- *Type:* str

The identifier of the index that you want to use for featuring results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#index_id KendraFeaturedResultsSet#index_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description for the set of featured results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#description KendraFeaturedResultsSet#description}

---

##### `featured_documents`<sup>Optional</sup> <a name="featured_documents" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.featuredDocuments"></a>

```python
featured_documents: IResolvable | typing.List[KendraFeaturedResultsSetFeaturedDocuments]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a>]

A list of document IDs for the documents you want to feature at the top of the search results page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#featured_documents KendraFeaturedResultsSet#featured_documents}

---

##### `query_texts`<sup>Optional</sup> <a name="query_texts" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.queryTexts"></a>

```python
query_texts: typing.List[str]
```

- *Type:* typing.List[str]

A list of queries for featuring results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#query_texts KendraFeaturedResultsSet#query_texts}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.status"></a>

```python
status: str
```

- *Type:* str

The current status of the set of featured results.

When the value is ACTIVE, featured results are ready for use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#status KendraFeaturedResultsSet#status}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[KendraFeaturedResultsSetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a>]

A list of key-value pairs that identify or categorize the featured results set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#tags KendraFeaturedResultsSet#tags}

---

### KendraFeaturedResultsSetFeaturedDocuments <a name="KendraFeaturedResultsSetFeaturedDocuments" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments.Initializer"></a>

```python
from cdktn_provider_awscc import kendra_featured_results_set

kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments(
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments.property.id">id</a></code> | <code>str</code> | The identifier of the document to feature in the search results. |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments.property.id"></a>

```python
id: str
```

- *Type:* str

The identifier of the document to feature in the search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#id KendraFeaturedResultsSet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### KendraFeaturedResultsSetTags <a name="KendraFeaturedResultsSetTags" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags.Initializer"></a>

```python
from cdktn_provider_awscc import kendra_featured_results_set

kendraFeaturedResultsSet.KendraFeaturedResultsSetTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags.property.key">key</a></code> | <code>str</code> | The key for the tag. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags.property.value">value</a></code> | <code>str</code> | The value associated with the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#key KendraFeaturedResultsSet#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value associated with the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/kendra_featured_results_set#value KendraFeaturedResultsSet#value}

---

## Classes <a name="Classes" id="Classes"></a>

### KendraFeaturedResultsSetFeaturedDocumentsList <a name="KendraFeaturedResultsSetFeaturedDocumentsList" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.Initializer"></a>

```python
from cdktn_provider_awscc import kendra_featured_results_set

kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KendraFeaturedResultsSetFeaturedDocumentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[KendraFeaturedResultsSetFeaturedDocuments]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a>]

---


### KendraFeaturedResultsSetFeaturedDocumentsOutputReference <a name="KendraFeaturedResultsSetFeaturedDocumentsOutputReference" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kendra_featured_results_set

kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.resetId">reset_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.resetId"></a>

```python
def reset_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocumentsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KendraFeaturedResultsSetFeaturedDocuments
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetFeaturedDocuments">KendraFeaturedResultsSetFeaturedDocuments</a>

---


### KendraFeaturedResultsSetTagsList <a name="KendraFeaturedResultsSetTagsList" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import kendra_featured_results_set

kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KendraFeaturedResultsSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[KendraFeaturedResultsSetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a>]

---


### KendraFeaturedResultsSetTagsOutputReference <a name="KendraFeaturedResultsSetTagsOutputReference" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import kendra_featured_results_set

kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | KendraFeaturedResultsSetTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kendraFeaturedResultsSet.KendraFeaturedResultsSetTags">KendraFeaturedResultsSetTags</a>

---



