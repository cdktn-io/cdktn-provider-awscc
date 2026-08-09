# `configAggregationAuthorization` Submodule <a name="`configAggregationAuthorization` Submodule" id="@cdktn/provider-awscc.configAggregationAuthorization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigAggregationAuthorization <a name="ConfigAggregationAuthorization" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_aggregation_authorization awscc_config_aggregation_authorization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.Initializer"></a>

```python
from cdktn_provider_awscc import config_aggregation_authorization

configAggregationAuthorization.ConfigAggregationAuthorization(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  authorized_account_id: str,
  authorized_aws_region: str,
  tags: IResolvable | typing.List[ConfigAggregationAuthorizationTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.Initializer.parameter.authorizedAccountId">authorized_account_id</a></code> | <code>str</code> | The 12-digit account ID of the account authorized to aggregate data. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.Initializer.parameter.authorizedAwsRegion">authorized_aws_region</a></code> | <code>str</code> | The region authorized to collect aggregated data. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTags">ConfigAggregationAuthorizationTags</a>]</code> | The tags for the AggregationAuthorization. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authorized_account_id`<sup>Required</sup> <a name="authorized_account_id" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.Initializer.parameter.authorizedAccountId"></a>

- *Type:* str

The 12-digit account ID of the account authorized to aggregate data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_aggregation_authorization#authorized_account_id ConfigAggregationAuthorization#authorized_account_id}

---

##### `authorized_aws_region`<sup>Required</sup> <a name="authorized_aws_region" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.Initializer.parameter.authorizedAwsRegion"></a>

- *Type:* str

The region authorized to collect aggregated data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_aggregation_authorization#authorized_aws_region ConfigAggregationAuthorization#authorized_aws_region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTags">ConfigAggregationAuthorizationTags</a>]

The tags for the AggregationAuthorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_aggregation_authorization#tags ConfigAggregationAuthorization#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ConfigAggregationAuthorizationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTags">ConfigAggregationAuthorizationTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ConfigAggregationAuthorization resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.isConstruct"></a>

```python
from cdktn_provider_awscc import config_aggregation_authorization

configAggregationAuthorization.ConfigAggregationAuthorization.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.isTerraformElement"></a>

```python
from cdktn_provider_awscc import config_aggregation_authorization

configAggregationAuthorization.ConfigAggregationAuthorization.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.isTerraformResource"></a>

```python
from cdktn_provider_awscc import config_aggregation_authorization

configAggregationAuthorization.ConfigAggregationAuthorization.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import config_aggregation_authorization

configAggregationAuthorization.ConfigAggregationAuthorization.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ConfigAggregationAuthorization resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConfigAggregationAuthorization to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConfigAggregationAuthorization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_aggregation_authorization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ConfigAggregationAuthorization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.aggregationAuthorizationArn">aggregation_authorization_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList">ConfigAggregationAuthorizationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.authorizedAccountIdInput">authorized_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.authorizedAwsRegionInput">authorized_aws_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTags">ConfigAggregationAuthorizationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.authorizedAccountId">authorized_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.authorizedAwsRegion">authorized_aws_region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `aggregation_authorization_arn`<sup>Required</sup> <a name="aggregation_authorization_arn" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.aggregationAuthorizationArn"></a>

```python
aggregation_authorization_arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.tags"></a>

```python
tags: ConfigAggregationAuthorizationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList">ConfigAggregationAuthorizationTagsList</a>

---

##### `authorized_account_id_input`<sup>Optional</sup> <a name="authorized_account_id_input" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.authorizedAccountIdInput"></a>

```python
authorized_account_id_input: str
```

- *Type:* str

---

##### `authorized_aws_region_input`<sup>Optional</sup> <a name="authorized_aws_region_input" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.authorizedAwsRegionInput"></a>

```python
authorized_aws_region_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ConfigAggregationAuthorizationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTags">ConfigAggregationAuthorizationTags</a>]

---

##### `authorized_account_id`<sup>Required</sup> <a name="authorized_account_id" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.authorizedAccountId"></a>

```python
authorized_account_id: str
```

- *Type:* str

---

##### `authorized_aws_region`<sup>Required</sup> <a name="authorized_aws_region" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.authorizedAwsRegion"></a>

```python
authorized_aws_region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorization.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigAggregationAuthorizationConfig <a name="ConfigAggregationAuthorizationConfig" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import config_aggregation_authorization

configAggregationAuthorization.ConfigAggregationAuthorizationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  authorized_account_id: str,
  authorized_aws_region: str,
  tags: IResolvable | typing.List[ConfigAggregationAuthorizationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.authorizedAccountId">authorized_account_id</a></code> | <code>str</code> | The 12-digit account ID of the account authorized to aggregate data. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.authorizedAwsRegion">authorized_aws_region</a></code> | <code>str</code> | The region authorized to collect aggregated data. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTags">ConfigAggregationAuthorizationTags</a>]</code> | The tags for the AggregationAuthorization. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `authorized_account_id`<sup>Required</sup> <a name="authorized_account_id" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.authorizedAccountId"></a>

```python
authorized_account_id: str
```

- *Type:* str

The 12-digit account ID of the account authorized to aggregate data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_aggregation_authorization#authorized_account_id ConfigAggregationAuthorization#authorized_account_id}

---

##### `authorized_aws_region`<sup>Required</sup> <a name="authorized_aws_region" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.authorizedAwsRegion"></a>

```python
authorized_aws_region: str
```

- *Type:* str

The region authorized to collect aggregated data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_aggregation_authorization#authorized_aws_region ConfigAggregationAuthorization#authorized_aws_region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ConfigAggregationAuthorizationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTags">ConfigAggregationAuthorizationTags</a>]

The tags for the AggregationAuthorization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_aggregation_authorization#tags ConfigAggregationAuthorization#tags}

---

### ConfigAggregationAuthorizationTags <a name="ConfigAggregationAuthorizationTags" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTags.Initializer"></a>

```python
from cdktn_provider_awscc import config_aggregation_authorization

configAggregationAuthorization.ConfigAggregationAuthorizationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_aggregation_authorization#key ConfigAggregationAuthorization#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/config_aggregation_authorization#value ConfigAggregationAuthorization#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigAggregationAuthorizationTagsList <a name="ConfigAggregationAuthorizationTagsList" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import config_aggregation_authorization

configAggregationAuthorization.ConfigAggregationAuthorizationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ConfigAggregationAuthorizationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTags">ConfigAggregationAuthorizationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ConfigAggregationAuthorizationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTags">ConfigAggregationAuthorizationTags</a>]

---


### ConfigAggregationAuthorizationTagsOutputReference <a name="ConfigAggregationAuthorizationTagsOutputReference" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import config_aggregation_authorization

configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTags">ConfigAggregationAuthorizationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ConfigAggregationAuthorizationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.configAggregationAuthorization.ConfigAggregationAuthorizationTags">ConfigAggregationAuthorizationTags</a>

---



