# `apiportalManagedApi` Submodule <a name="`apiportalManagedApi` Submodule" id="@cdktn/provider-awscc.apiportalManagedApi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiportalManagedApi <a name="ApiportalManagedApi" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_managed_api awscc_apiportal_managed_api}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_managed_api

apiportalManagedApi.ApiportalManagedApi(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  api_signature: ApiportalManagedApiApiSignature,
  tags: IResolvable | typing.List[ApiportalManagedApiTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.apiSignature">api_signature</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature">ApiportalManagedApiApiSignature</a></code> | Identifies a discovered API by its source resource, method, hostname, port, and path. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTags">ApiportalManagedApiTags</a>]</code> | The tags associated with the managed API. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_signature`<sup>Required</sup> <a name="api_signature" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.apiSignature"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature">ApiportalManagedApiApiSignature</a>

Identifies a discovered API by its source resource, method, hostname, port, and path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_managed_api#api_signature ApiportalManagedApi#api_signature}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTags">ApiportalManagedApiTags</a>]

The tags associated with the managed API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_managed_api#tags ApiportalManagedApi#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.putApiSignature">put_api_signature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_api_signature` <a name="put_api_signature" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.putApiSignature"></a>

```python
def put_api_signature(
  hostname: str,
  method: str,
  path: str,
  port: typing.Union[int, float],
  resource_arn: str
) -> None
```

###### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.putApiSignature.parameter.hostname"></a>

- *Type:* str

The front-door hostname of the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_managed_api#hostname ApiportalManagedApi#hostname}

---

###### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.putApiSignature.parameter.method"></a>

- *Type:* str

The HTTP method of the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_managed_api#method ApiportalManagedApi#method}

---

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.putApiSignature.parameter.path"></a>

- *Type:* str

The route path of the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_managed_api#path ApiportalManagedApi#path}

---

###### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.putApiSignature.parameter.port"></a>

- *Type:* typing.Union[int, float]

The port the API is served on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_managed_api#port ApiportalManagedApi#port}

---

###### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.putApiSignature.parameter.resourceArn"></a>

- *Type:* str

ARN of the source-service resource (API Gateway stage, load balancer, or CloudFront distribution).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_managed_api#resource_arn ApiportalManagedApi#resource_arn}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ApiportalManagedApiTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTags">ApiportalManagedApiTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApiportalManagedApi resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.isConstruct"></a>

```python
from cdktn_provider_awscc import apiportal_managed_api

apiportalManagedApi.ApiportalManagedApi.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.isTerraformElement"></a>

```python
from cdktn_provider_awscc import apiportal_managed_api

apiportalManagedApi.ApiportalManagedApi.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.isTerraformResource"></a>

```python
from cdktn_provider_awscc import apiportal_managed_api

apiportalManagedApi.ApiportalManagedApi.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import apiportal_managed_api

apiportalManagedApi.ApiportalManagedApi.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApiportalManagedApi resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApiportalManagedApi to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApiportalManagedApi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_managed_api#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApiportalManagedApi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.apiSignature">api_signature</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference">ApiportalManagedApiApiSignatureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.managedApiArn">managed_api_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.managedApiId">managed_api_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList">ApiportalManagedApiTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.apiSignatureInput">api_signature_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature">ApiportalManagedApiApiSignature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTags">ApiportalManagedApiTags</a>]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_signature`<sup>Required</sup> <a name="api_signature" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.apiSignature"></a>

```python
api_signature: ApiportalManagedApiApiSignatureOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference">ApiportalManagedApiApiSignatureOutputReference</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_api_arn`<sup>Required</sup> <a name="managed_api_arn" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.managedApiArn"></a>

```python
managed_api_arn: str
```

- *Type:* str

---

##### `managed_api_id`<sup>Required</sup> <a name="managed_api_id" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.managedApiId"></a>

```python
managed_api_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.tags"></a>

```python
tags: ApiportalManagedApiTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList">ApiportalManagedApiTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `api_signature_input`<sup>Optional</sup> <a name="api_signature_input" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.apiSignatureInput"></a>

```python
api_signature_input: IResolvable | ApiportalManagedApiApiSignature
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature">ApiportalManagedApiApiSignature</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ApiportalManagedApiTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTags">ApiportalManagedApiTags</a>]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApi.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiportalManagedApiApiSignature <a name="ApiportalManagedApiApiSignature" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_managed_api

apiportalManagedApi.ApiportalManagedApiApiSignature(
  hostname: str,
  method: str,
  path: str,
  port: typing.Union[int, float],
  resource_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature.property.hostname">hostname</a></code> | <code>str</code> | The front-door hostname of the API. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature.property.method">method</a></code> | <code>str</code> | The HTTP method of the API. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature.property.path">path</a></code> | <code>str</code> | The route path of the API. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature.property.port">port</a></code> | <code>typing.Union[int, float]</code> | The port the API is served on. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature.property.resourceArn">resource_arn</a></code> | <code>str</code> | ARN of the source-service resource (API Gateway stage, load balancer, or CloudFront distribution). |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

The front-door hostname of the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_managed_api#hostname ApiportalManagedApi#hostname}

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature.property.method"></a>

```python
method: str
```

- *Type:* str

The HTTP method of the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_managed_api#method ApiportalManagedApi#method}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature.property.path"></a>

```python
path: str
```

- *Type:* str

The route path of the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_managed_api#path ApiportalManagedApi#path}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The port the API is served on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_managed_api#port ApiportalManagedApi#port}

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

ARN of the source-service resource (API Gateway stage, load balancer, or CloudFront distribution).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_managed_api#resource_arn ApiportalManagedApi#resource_arn}

---

### ApiportalManagedApiConfig <a name="ApiportalManagedApiConfig" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_managed_api

apiportalManagedApi.ApiportalManagedApiConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  api_signature: ApiportalManagedApiApiSignature,
  tags: IResolvable | typing.List[ApiportalManagedApiTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.property.apiSignature">api_signature</a></code> | <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature">ApiportalManagedApiApiSignature</a></code> | Identifies a discovered API by its source resource, method, hostname, port, and path. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTags">ApiportalManagedApiTags</a>]</code> | The tags associated with the managed API. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `api_signature`<sup>Required</sup> <a name="api_signature" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.property.apiSignature"></a>

```python
api_signature: ApiportalManagedApiApiSignature
```

- *Type:* <a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature">ApiportalManagedApiApiSignature</a>

Identifies a discovered API by its source resource, method, hostname, port, and path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_managed_api#api_signature ApiportalManagedApi#api_signature}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ApiportalManagedApiTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTags">ApiportalManagedApiTags</a>]

The tags associated with the managed API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_managed_api#tags ApiportalManagedApi#tags}

---

### ApiportalManagedApiTags <a name="ApiportalManagedApiTags" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTags.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_managed_api

apiportalManagedApi.ApiportalManagedApiTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_managed_api#key ApiportalManagedApi#key}. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_managed_api#value ApiportalManagedApi#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_managed_api#key ApiportalManagedApi#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/apiportal_managed_api#value ApiportalManagedApi#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiportalManagedApiApiSignatureOutputReference <a name="ApiportalManagedApiApiSignatureOutputReference" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_managed_api

apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.methodInput">method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.resourceArnInput">resource_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature">ApiportalManagedApiApiSignature</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `method_input`<sup>Optional</sup> <a name="method_input" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.methodInput"></a>

```python
method_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_arn_input`<sup>Optional</sup> <a name="resource_arn_input" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.resourceArnInput"></a>

```python
resource_arn_input: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignatureOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApiportalManagedApiApiSignature
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiApiSignature">ApiportalManagedApiApiSignature</a>

---


### ApiportalManagedApiTagsList <a name="ApiportalManagedApiTagsList" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_managed_api

apiportalManagedApi.ApiportalManagedApiTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApiportalManagedApiTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTags">ApiportalManagedApiTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ApiportalManagedApiTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTags">ApiportalManagedApiTags</a>]

---


### ApiportalManagedApiTagsOutputReference <a name="ApiportalManagedApiTagsOutputReference" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apiportal_managed_api

apiportalManagedApi.ApiportalManagedApiTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTags">ApiportalManagedApiTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApiportalManagedApiTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apiportalManagedApi.ApiportalManagedApiTags">ApiportalManagedApiTags</a>

---



