# `devopsguruResourceCollection` Submodule <a name="`devopsguruResourceCollection` Submodule" id="@cdktn/provider-awscc.devopsguruResourceCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsguruResourceCollection <a name="DevopsguruResourceCollection" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_resource_collection awscc_devopsguru_resource_collection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer"></a>

```python
from cdktn_provider_awscc import devopsguru_resource_collection

devopsguruResourceCollection.DevopsguruResourceCollection(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  resource_collection_filter: DevopsguruResourceCollectionResourceCollectionFilter
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.resourceCollectionFilter">resource_collection_filter</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter">DevopsguruResourceCollectionResourceCollectionFilter</a></code> | Information about a filter used to specify which AWS resources are analyzed for anomalous behavior by DevOps Guru. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `resource_collection_filter`<sup>Required</sup> <a name="resource_collection_filter" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.resourceCollectionFilter"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter">DevopsguruResourceCollectionResourceCollectionFilter</a>

Information about a filter used to specify which AWS resources are analyzed for anomalous behavior by DevOps Guru.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_resource_collection#resource_collection_filter DevopsguruResourceCollection#resource_collection_filter}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.putResourceCollectionFilter">put_resource_collection_filter</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_resource_collection_filter` <a name="put_resource_collection_filter" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.putResourceCollectionFilter"></a>

```python
def put_resource_collection_filter(
  cloudformation: DevopsguruResourceCollectionResourceCollectionFilterCloudformation = None,
  tags: IResolvable | typing.List[DevopsguruResourceCollectionResourceCollectionFilterTags] = None
) -> None
```

###### `cloudformation`<sup>Optional</sup> <a name="cloudformation" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.putResourceCollectionFilter.parameter.cloudformation"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation">DevopsguruResourceCollectionResourceCollectionFilterCloudformation</a>

CloudFormation resource for DevOps Guru to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_resource_collection#cloudformation DevopsguruResourceCollection#cloudformation}

---

###### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.putResourceCollectionFilter.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags">DevopsguruResourceCollectionResourceCollectionFilterTags</a>]

Tagged resources for DevOps Guru to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_resource_collection#tags DevopsguruResourceCollection#tags}

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DevopsguruResourceCollection resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isConstruct"></a>

```python
from cdktn_provider_awscc import devopsguru_resource_collection

devopsguruResourceCollection.DevopsguruResourceCollection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformElement"></a>

```python
from cdktn_provider_awscc import devopsguru_resource_collection

devopsguruResourceCollection.DevopsguruResourceCollection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformResource"></a>

```python
from cdktn_provider_awscc import devopsguru_resource_collection

devopsguruResourceCollection.DevopsguruResourceCollection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import devopsguru_resource_collection

devopsguruResourceCollection.DevopsguruResourceCollection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DevopsguruResourceCollection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DevopsguruResourceCollection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DevopsguruResourceCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_resource_collection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DevopsguruResourceCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.resourceCollectionFilter">resource_collection_filter</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference">DevopsguruResourceCollectionResourceCollectionFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.resourceCollectionType">resource_collection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.resourceCollectionFilterInput">resource_collection_filter_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter">DevopsguruResourceCollectionResourceCollectionFilter</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resource_collection_filter`<sup>Required</sup> <a name="resource_collection_filter" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.resourceCollectionFilter"></a>

```python
resource_collection_filter: DevopsguruResourceCollectionResourceCollectionFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference">DevopsguruResourceCollectionResourceCollectionFilterOutputReference</a>

---

##### `resource_collection_type`<sup>Required</sup> <a name="resource_collection_type" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.resourceCollectionType"></a>

```python
resource_collection_type: str
```

- *Type:* str

---

##### `resource_collection_filter_input`<sup>Optional</sup> <a name="resource_collection_filter_input" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.resourceCollectionFilterInput"></a>

```python
resource_collection_filter_input: IResolvable | DevopsguruResourceCollectionResourceCollectionFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter">DevopsguruResourceCollectionResourceCollectionFilter</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsguruResourceCollectionConfig <a name="DevopsguruResourceCollectionConfig" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import devopsguru_resource_collection

devopsguruResourceCollection.DevopsguruResourceCollectionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  resource_collection_filter: DevopsguruResourceCollectionResourceCollectionFilter
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.resourceCollectionFilter">resource_collection_filter</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter">DevopsguruResourceCollectionResourceCollectionFilter</a></code> | Information about a filter used to specify which AWS resources are analyzed for anomalous behavior by DevOps Guru. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `resource_collection_filter`<sup>Required</sup> <a name="resource_collection_filter" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.resourceCollectionFilter"></a>

```python
resource_collection_filter: DevopsguruResourceCollectionResourceCollectionFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter">DevopsguruResourceCollectionResourceCollectionFilter</a>

Information about a filter used to specify which AWS resources are analyzed for anomalous behavior by DevOps Guru.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_resource_collection#resource_collection_filter DevopsguruResourceCollection#resource_collection_filter}

---

### DevopsguruResourceCollectionResourceCollectionFilter <a name="DevopsguruResourceCollectionResourceCollectionFilter" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter.Initializer"></a>

```python
from cdktn_provider_awscc import devopsguru_resource_collection

devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter(
  cloudformation: DevopsguruResourceCollectionResourceCollectionFilterCloudformation = None,
  tags: IResolvable | typing.List[DevopsguruResourceCollectionResourceCollectionFilterTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter.property.cloudformation">cloudformation</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation">DevopsguruResourceCollectionResourceCollectionFilterCloudformation</a></code> | CloudFormation resource for DevOps Guru to monitor. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags">DevopsguruResourceCollectionResourceCollectionFilterTags</a>]</code> | Tagged resources for DevOps Guru to monitor. |

---

##### `cloudformation`<sup>Optional</sup> <a name="cloudformation" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter.property.cloudformation"></a>

```python
cloudformation: DevopsguruResourceCollectionResourceCollectionFilterCloudformation
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation">DevopsguruResourceCollectionResourceCollectionFilterCloudformation</a>

CloudFormation resource for DevOps Guru to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_resource_collection#cloudformation DevopsguruResourceCollection#cloudformation}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter.property.tags"></a>

```python
tags: IResolvable | typing.List[DevopsguruResourceCollectionResourceCollectionFilterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags">DevopsguruResourceCollectionResourceCollectionFilterTags</a>]

Tagged resources for DevOps Guru to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_resource_collection#tags DevopsguruResourceCollection#tags}

---

### DevopsguruResourceCollectionResourceCollectionFilterCloudformation <a name="DevopsguruResourceCollectionResourceCollectionFilterCloudformation" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation.Initializer"></a>

```python
from cdktn_provider_awscc import devopsguru_resource_collection

devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation(
  stack_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation.property.stackNames">stack_names</a></code> | <code>typing.List[str]</code> | An array of CloudFormation stack names. |

---

##### `stack_names`<sup>Optional</sup> <a name="stack_names" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation.property.stackNames"></a>

```python
stack_names: typing.List[str]
```

- *Type:* typing.List[str]

An array of CloudFormation stack names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_resource_collection#stack_names DevopsguruResourceCollection#stack_names}

---

### DevopsguruResourceCollectionResourceCollectionFilterTags <a name="DevopsguruResourceCollectionResourceCollectionFilterTags" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags.Initializer"></a>

```python
from cdktn_provider_awscc import devopsguru_resource_collection

devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags(
  app_boundary_key: str = None,
  tag_values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags.property.appBoundaryKey">app_boundary_key</a></code> | <code>str</code> | A Tag key for DevOps Guru app boundary. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags.property.tagValues">tag_values</a></code> | <code>typing.List[str]</code> | Tag values of DevOps Guru app boundary. |

---

##### `app_boundary_key`<sup>Optional</sup> <a name="app_boundary_key" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags.property.appBoundaryKey"></a>

```python
app_boundary_key: str
```

- *Type:* str

A Tag key for DevOps Guru app boundary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_resource_collection#app_boundary_key DevopsguruResourceCollection#app_boundary_key}

---

##### `tag_values`<sup>Optional</sup> <a name="tag_values" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags.property.tagValues"></a>

```python
tag_values: typing.List[str]
```

- *Type:* typing.List[str]

Tag values of DevOps Guru app boundary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_resource_collection#tag_values DevopsguruResourceCollection#tag_values}

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference <a name="DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsguru_resource_collection

devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.resetStackNames">reset_stack_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_stack_names` <a name="reset_stack_names" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.resetStackNames"></a>

```python
def reset_stack_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.stackNamesInput">stack_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.stackNames">stack_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation">DevopsguruResourceCollectionResourceCollectionFilterCloudformation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `stack_names_input`<sup>Optional</sup> <a name="stack_names_input" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.stackNamesInput"></a>

```python
stack_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `stack_names`<sup>Required</sup> <a name="stack_names" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.stackNames"></a>

```python
stack_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsguruResourceCollectionResourceCollectionFilterCloudformation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation">DevopsguruResourceCollectionResourceCollectionFilterCloudformation</a>

---


### DevopsguruResourceCollectionResourceCollectionFilterOutputReference <a name="DevopsguruResourceCollectionResourceCollectionFilterOutputReference" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsguru_resource_collection

devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.putCloudformation">put_cloudformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.resetCloudformation">reset_cloudformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloudformation` <a name="put_cloudformation" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.putCloudformation"></a>

```python
def put_cloudformation(
  stack_names: typing.List[str] = None
) -> None
```

###### `stack_names`<sup>Optional</sup> <a name="stack_names" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.putCloudformation.parameter.stackNames"></a>

- *Type:* typing.List[str]

An array of CloudFormation stack names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_resource_collection#stack_names DevopsguruResourceCollection#stack_names}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[DevopsguruResourceCollectionResourceCollectionFilterTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags">DevopsguruResourceCollectionResourceCollectionFilterTags</a>]

---

##### `reset_cloudformation` <a name="reset_cloudformation" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.resetCloudformation"></a>

```python
def reset_cloudformation() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.cloudformation">cloudformation</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference">DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList">DevopsguruResourceCollectionResourceCollectionFilterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.cloudformationInput">cloudformation_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation">DevopsguruResourceCollectionResourceCollectionFilterCloudformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags">DevopsguruResourceCollectionResourceCollectionFilterTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter">DevopsguruResourceCollectionResourceCollectionFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudformation`<sup>Required</sup> <a name="cloudformation" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.cloudformation"></a>

```python
cloudformation: DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference">DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.tags"></a>

```python
tags: DevopsguruResourceCollectionResourceCollectionFilterTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList">DevopsguruResourceCollectionResourceCollectionFilterTagsList</a>

---

##### `cloudformation_input`<sup>Optional</sup> <a name="cloudformation_input" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.cloudformationInput"></a>

```python
cloudformation_input: IResolvable | DevopsguruResourceCollectionResourceCollectionFilterCloudformation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation">DevopsguruResourceCollectionResourceCollectionFilterCloudformation</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[DevopsguruResourceCollectionResourceCollectionFilterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags">DevopsguruResourceCollectionResourceCollectionFilterTags</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsguruResourceCollectionResourceCollectionFilter
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter">DevopsguruResourceCollectionResourceCollectionFilter</a>

---


### DevopsguruResourceCollectionResourceCollectionFilterTagsList <a name="DevopsguruResourceCollectionResourceCollectionFilterTagsList" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import devopsguru_resource_collection

devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags">DevopsguruResourceCollectionResourceCollectionFilterTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DevopsguruResourceCollectionResourceCollectionFilterTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags">DevopsguruResourceCollectionResourceCollectionFilterTags</a>]

---


### DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference <a name="DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import devopsguru_resource_collection

devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resetAppBoundaryKey">reset_app_boundary_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resetTagValues">reset_tag_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_app_boundary_key` <a name="reset_app_boundary_key" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resetAppBoundaryKey"></a>

```python
def reset_app_boundary_key() -> None
```

##### `reset_tag_values` <a name="reset_tag_values" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resetTagValues"></a>

```python
def reset_tag_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.appBoundaryKeyInput">app_boundary_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.tagValuesInput">tag_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.appBoundaryKey">app_boundary_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.tagValues">tag_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags">DevopsguruResourceCollectionResourceCollectionFilterTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_boundary_key_input`<sup>Optional</sup> <a name="app_boundary_key_input" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.appBoundaryKeyInput"></a>

```python
app_boundary_key_input: str
```

- *Type:* str

---

##### `tag_values_input`<sup>Optional</sup> <a name="tag_values_input" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.tagValuesInput"></a>

```python
tag_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `app_boundary_key`<sup>Required</sup> <a name="app_boundary_key" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.appBoundaryKey"></a>

```python
app_boundary_key: str
```

- *Type:* str

---

##### `tag_values`<sup>Required</sup> <a name="tag_values" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.tagValues"></a>

```python
tag_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DevopsguruResourceCollectionResourceCollectionFilterTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags">DevopsguruResourceCollectionResourceCollectionFilterTags</a>

---



