# `resourcegroupsTagSyncTask` Submodule <a name="`resourcegroupsTagSyncTask` Submodule" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourcegroupsTagSyncTask <a name="ResourcegroupsTagSyncTask" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resourcegroups_tag_sync_task awscc_resourcegroups_tag_sync_task}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer"></a>

```python
from cdktn_provider_awscc import resourcegroups_tag_sync_task

resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  group: str,
  role_arn: str,
  tag_key: str,
  tag_value: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.group">group</a></code> | <code>str</code> | The Amazon resource name (ARN) or name of the application group for which you want to create a tag-sync task. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | The Amazon resource name (ARN) of the role assumed by the service to tag and untag resources on your behalf. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.tagKey">tag_key</a></code> | <code>str</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.tagValue">tag_value</a></code> | <code>str</code> | The tag value. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.group"></a>

- *Type:* str

The Amazon resource name (ARN) or name of the application group for which you want to create a tag-sync task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resourcegroups_tag_sync_task#group ResourcegroupsTagSyncTask#group}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.roleArn"></a>

- *Type:* str

The Amazon resource name (ARN) of the role assumed by the service to tag and untag resources on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resourcegroups_tag_sync_task#role_arn ResourcegroupsTagSyncTask#role_arn}

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.tagKey"></a>

- *Type:* str

The tag key.

Resources tagged with this tag key-value pair will be added to the application. If a resource with this tag is later untagged, the tag-sync task removes the resource from the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resourcegroups_tag_sync_task#tag_key ResourcegroupsTagSyncTask#tag_key}

---

##### `tag_value`<sup>Required</sup> <a name="tag_value" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.Initializer.parameter.tagValue"></a>

- *Type:* str

The tag value.

Resources tagged with this tag key-value pair will be added to the application. If a resource with this tag is later untagged, the tag-sync task removes the resource from the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resourcegroups_tag_sync_task#tag_value ResourcegroupsTagSyncTask#tag_value}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ResourcegroupsTagSyncTask resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.isConstruct"></a>

```python
from cdktn_provider_awscc import resourcegroups_tag_sync_task

resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.isTerraformElement"></a>

```python
from cdktn_provider_awscc import resourcegroups_tag_sync_task

resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.isTerraformResource"></a>

```python
from cdktn_provider_awscc import resourcegroups_tag_sync_task

resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import resourcegroups_tag_sync_task

resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ResourcegroupsTagSyncTask resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ResourcegroupsTagSyncTask to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ResourcegroupsTagSyncTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resourcegroups_tag_sync_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ResourcegroupsTagSyncTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.groupArn">group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.groupName">group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.taskArn">task_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.groupInput">group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.tagKeyInput">tag_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.tagValueInput">tag_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.tagValue">tag_value</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `group_arn`<sup>Required</sup> <a name="group_arn" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.groupArn"></a>

```python
group_arn: str
```

- *Type:* str

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `task_arn`<sup>Required</sup> <a name="task_arn" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.taskArn"></a>

```python
task_arn: str
```

- *Type:* str

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.groupInput"></a>

```python
group_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `tag_key_input`<sup>Optional</sup> <a name="tag_key_input" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.tagKeyInput"></a>

```python
tag_key_input: str
```

- *Type:* str

---

##### `tag_value_input`<sup>Optional</sup> <a name="tag_value_input" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.tagValueInput"></a>

```python
tag_value_input: str
```

- *Type:* str

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `tag_value`<sup>Required</sup> <a name="tag_value" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTask.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ResourcegroupsTagSyncTaskConfig <a name="ResourcegroupsTagSyncTaskConfig" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.Initializer"></a>

```python
from cdktn_provider_awscc import resourcegroups_tag_sync_task

resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  group: str,
  role_arn: str,
  tag_key: str,
  tag_value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.group">group</a></code> | <code>str</code> | The Amazon resource name (ARN) or name of the application group for which you want to create a tag-sync task. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.roleArn">role_arn</a></code> | <code>str</code> | The Amazon resource name (ARN) of the role assumed by the service to tag and untag resources on your behalf. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.tagKey">tag_key</a></code> | <code>str</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.tagValue">tag_value</a></code> | <code>str</code> | The tag value. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.group"></a>

```python
group: str
```

- *Type:* str

The Amazon resource name (ARN) or name of the application group for which you want to create a tag-sync task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resourcegroups_tag_sync_task#group ResourcegroupsTagSyncTask#group}

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

The Amazon resource name (ARN) of the role assumed by the service to tag and untag resources on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resourcegroups_tag_sync_task#role_arn ResourcegroupsTagSyncTask#role_arn}

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

The tag key.

Resources tagged with this tag key-value pair will be added to the application. If a resource with this tag is later untagged, the tag-sync task removes the resource from the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resourcegroups_tag_sync_task#tag_key ResourcegroupsTagSyncTask#tag_key}

---

##### `tag_value`<sup>Required</sup> <a name="tag_value" id="@cdktn/provider-awscc.resourcegroupsTagSyncTask.ResourcegroupsTagSyncTaskConfig.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

The tag value.

Resources tagged with this tag key-value pair will be added to the application. If a resource with this tag is later untagged, the tag-sync task removes the resource from the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/resourcegroups_tag_sync_task#tag_value ResourcegroupsTagSyncTask#tag_value}

---



