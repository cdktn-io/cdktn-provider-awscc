# `chimeAppInstanceBot` Submodule <a name="`chimeAppInstanceBot` Submodule" id="@cdktn/provider-awscc.chimeAppInstanceBot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeAppInstanceBot <a name="ChimeAppInstanceBot" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_app_instance_bot awscc_chime_app_instance_bot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer"></a>

```python
from cdktn_provider_awscc import chime_app_instance_bot

chimeAppInstanceBot.ChimeAppInstanceBot(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app_instance_arn: str,
  configuration: ChimeAppInstanceBotConfiguration,
  metadata: str = None,
  name: str = None,
  tags: IResolvable | typing.List[ChimeAppInstanceBotTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.appInstanceArn">app_instance_arn</a></code> | <code>str</code> | The ARN of the AppInstance. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration">ChimeAppInstanceBotConfiguration</a></code> | A structure that contains configuration data. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.metadata">metadata</a></code> | <code>str</code> | The metadata of the AppInstanceBot. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the AppInstanceBot. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a>]</code> | The tags assigned to the AppInstanceBot. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app_instance_arn`<sup>Required</sup> <a name="app_instance_arn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.appInstanceArn"></a>

- *Type:* str

The ARN of the AppInstance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_app_instance_bot#app_instance_arn ChimeAppInstanceBot#app_instance_arn}

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.configuration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration">ChimeAppInstanceBotConfiguration</a>

A structure that contains configuration data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_app_instance_bot#configuration ChimeAppInstanceBot#configuration}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.metadata"></a>

- *Type:* str

The metadata of the AppInstanceBot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_app_instance_bot#metadata ChimeAppInstanceBot#metadata}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.name"></a>

- *Type:* str

The name of the AppInstanceBot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_app_instance_bot#name ChimeAppInstanceBot#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a>]

The tags assigned to the AppInstanceBot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_app_instance_bot#tags ChimeAppInstanceBot#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.putConfiguration">put_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_configuration` <a name="put_configuration" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.putConfiguration"></a>

```python
def put_configuration(
  lex: ChimeAppInstanceBotConfigurationLex
) -> None
```

###### `lex`<sup>Required</sup> <a name="lex" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.putConfiguration.parameter.lex"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex">ChimeAppInstanceBotConfigurationLex</a>

The configuration for an Amazon Lex V2 bot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_app_instance_bot#lex ChimeAppInstanceBot#lex}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ChimeAppInstanceBotTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a>]

---

##### `reset_metadata` <a name="reset_metadata" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ChimeAppInstanceBot resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.isConstruct"></a>

```python
from cdktn_provider_awscc import chime_app_instance_bot

chimeAppInstanceBot.ChimeAppInstanceBot.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.isTerraformElement"></a>

```python
from cdktn_provider_awscc import chime_app_instance_bot

chimeAppInstanceBot.ChimeAppInstanceBot.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.isTerraformResource"></a>

```python
from cdktn_provider_awscc import chime_app_instance_bot

chimeAppInstanceBot.ChimeAppInstanceBot.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import chime_app_instance_bot

chimeAppInstanceBot.ChimeAppInstanceBot.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ChimeAppInstanceBot resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ChimeAppInstanceBot to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ChimeAppInstanceBot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_app_instance_bot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ChimeAppInstanceBot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.appInstanceBotArn">app_instance_bot_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference">ChimeAppInstanceBotConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.createdTimestamp">created_timestamp</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.lastUpdatedTimestamp">last_updated_timestamp</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList">ChimeAppInstanceBotTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.appInstanceArnInput">app_instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.configurationInput">configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration">ChimeAppInstanceBotConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.metadataInput">metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.appInstanceArn">app_instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app_instance_bot_arn`<sup>Required</sup> <a name="app_instance_bot_arn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.appInstanceBotArn"></a>

```python
app_instance_bot_arn: str
```

- *Type:* str

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.configuration"></a>

```python
configuration: ChimeAppInstanceBotConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference">ChimeAppInstanceBotConfigurationOutputReference</a>

---

##### `created_timestamp`<sup>Required</sup> <a name="created_timestamp" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.createdTimestamp"></a>

```python
created_timestamp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_timestamp`<sup>Required</sup> <a name="last_updated_timestamp" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.lastUpdatedTimestamp"></a>

```python
last_updated_timestamp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.tags"></a>

```python
tags: ChimeAppInstanceBotTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList">ChimeAppInstanceBotTagsList</a>

---

##### `app_instance_arn_input`<sup>Optional</sup> <a name="app_instance_arn_input" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.appInstanceArnInput"></a>

```python
app_instance_arn_input: str
```

- *Type:* str

---

##### `configuration_input`<sup>Optional</sup> <a name="configuration_input" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.configurationInput"></a>

```python
configuration_input: IResolvable | ChimeAppInstanceBotConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration">ChimeAppInstanceBotConfiguration</a>

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.metadataInput"></a>

```python
metadata_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ChimeAppInstanceBotTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a>]

---

##### `app_instance_arn`<sup>Required</sup> <a name="app_instance_arn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.appInstanceArn"></a>

```python
app_instance_arn: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBot.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeAppInstanceBotConfig <a name="ChimeAppInstanceBotConfig" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.Initializer"></a>

```python
from cdktn_provider_awscc import chime_app_instance_bot

chimeAppInstanceBot.ChimeAppInstanceBotConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app_instance_arn: str,
  configuration: ChimeAppInstanceBotConfiguration,
  metadata: str = None,
  name: str = None,
  tags: IResolvable | typing.List[ChimeAppInstanceBotTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.appInstanceArn">app_instance_arn</a></code> | <code>str</code> | The ARN of the AppInstance. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.configuration">configuration</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration">ChimeAppInstanceBotConfiguration</a></code> | A structure that contains configuration data. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.metadata">metadata</a></code> | <code>str</code> | The metadata of the AppInstanceBot. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.name">name</a></code> | <code>str</code> | The name of the AppInstanceBot. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a>]</code> | The tags assigned to the AppInstanceBot. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app_instance_arn`<sup>Required</sup> <a name="app_instance_arn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.appInstanceArn"></a>

```python
app_instance_arn: str
```

- *Type:* str

The ARN of the AppInstance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_app_instance_bot#app_instance_arn ChimeAppInstanceBot#app_instance_arn}

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.configuration"></a>

```python
configuration: ChimeAppInstanceBotConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration">ChimeAppInstanceBotConfiguration</a>

A structure that contains configuration data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_app_instance_bot#configuration ChimeAppInstanceBot#configuration}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

The metadata of the AppInstanceBot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_app_instance_bot#metadata ChimeAppInstanceBot#metadata}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the AppInstanceBot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_app_instance_bot#name ChimeAppInstanceBot#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ChimeAppInstanceBotTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a>]

The tags assigned to the AppInstanceBot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_app_instance_bot#tags ChimeAppInstanceBot#tags}

---

### ChimeAppInstanceBotConfiguration <a name="ChimeAppInstanceBotConfiguration" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import chime_app_instance_bot

chimeAppInstanceBot.ChimeAppInstanceBotConfiguration(
  lex: ChimeAppInstanceBotConfigurationLex
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration.property.lex">lex</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex">ChimeAppInstanceBotConfigurationLex</a></code> | The configuration for an Amazon Lex V2 bot. |

---

##### `lex`<sup>Required</sup> <a name="lex" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration.property.lex"></a>

```python
lex: ChimeAppInstanceBotConfigurationLex
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex">ChimeAppInstanceBotConfigurationLex</a>

The configuration for an Amazon Lex V2 bot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_app_instance_bot#lex ChimeAppInstanceBot#lex}

---

### ChimeAppInstanceBotConfigurationLex <a name="ChimeAppInstanceBotConfigurationLex" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.Initializer"></a>

```python
from cdktn_provider_awscc import chime_app_instance_bot

chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex(
  lex_bot_alias_arn: str,
  locale_id: str,
  invoked_by: ChimeAppInstanceBotConfigurationLexInvokedBy = None,
  responds_to: str = None,
  welcome_intent: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.lexBotAliasArn">lex_bot_alias_arn</a></code> | <code>str</code> | The ARN of the Amazon Lex V2 bot's alias. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.localeId">locale_id</a></code> | <code>str</code> | Identifies the Amazon Lex V2 bot's language and locale. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.invokedBy">invoked_by</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy">ChimeAppInstanceBotConfigurationLexInvokedBy</a></code> | Specifies the type of message that triggers a bot. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.respondsTo">responds_to</a></code> | <code>str</code> | Determines whether the Amazon Lex V2 bot responds to all standard messages. Control messages are not supported. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.welcomeIntent">welcome_intent</a></code> | <code>str</code> | The name of the welcome intent configured in the Amazon Lex V2 bot. |

---

##### `lex_bot_alias_arn`<sup>Required</sup> <a name="lex_bot_alias_arn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.lexBotAliasArn"></a>

```python
lex_bot_alias_arn: str
```

- *Type:* str

The ARN of the Amazon Lex V2 bot's alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_app_instance_bot#lex_bot_alias_arn ChimeAppInstanceBot#lex_bot_alias_arn}

---

##### `locale_id`<sup>Required</sup> <a name="locale_id" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.localeId"></a>

```python
locale_id: str
```

- *Type:* str

Identifies the Amazon Lex V2 bot's language and locale.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_app_instance_bot#locale_id ChimeAppInstanceBot#locale_id}

---

##### `invoked_by`<sup>Optional</sup> <a name="invoked_by" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.invokedBy"></a>

```python
invoked_by: ChimeAppInstanceBotConfigurationLexInvokedBy
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy">ChimeAppInstanceBotConfigurationLexInvokedBy</a>

Specifies the type of message that triggers a bot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_app_instance_bot#invoked_by ChimeAppInstanceBot#invoked_by}

---

##### `responds_to`<sup>Optional</sup> <a name="responds_to" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.respondsTo"></a>

```python
responds_to: str
```

- *Type:* str

Determines whether the Amazon Lex V2 bot responds to all standard messages. Control messages are not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_app_instance_bot#responds_to ChimeAppInstanceBot#responds_to}

---

##### `welcome_intent`<sup>Optional</sup> <a name="welcome_intent" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex.property.welcomeIntent"></a>

```python
welcome_intent: str
```

- *Type:* str

The name of the welcome intent configured in the Amazon Lex V2 bot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_app_instance_bot#welcome_intent ChimeAppInstanceBot#welcome_intent}

---

### ChimeAppInstanceBotConfigurationLexInvokedBy <a name="ChimeAppInstanceBotConfigurationLexInvokedBy" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy.Initializer"></a>

```python
from cdktn_provider_awscc import chime_app_instance_bot

chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy(
  standard_messages: str = None,
  targeted_messages: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy.property.standardMessages">standard_messages</a></code> | <code>str</code> | Sets standard messages as the bot trigger. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy.property.targetedMessages">targeted_messages</a></code> | <code>str</code> | Sets targeted messages as the bot trigger. |

---

##### `standard_messages`<sup>Optional</sup> <a name="standard_messages" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy.property.standardMessages"></a>

```python
standard_messages: str
```

- *Type:* str

Sets standard messages as the bot trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_app_instance_bot#standard_messages ChimeAppInstanceBot#standard_messages}

---

##### `targeted_messages`<sup>Optional</sup> <a name="targeted_messages" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy.property.targetedMessages"></a>

```python
targeted_messages: str
```

- *Type:* str

Sets targeted messages as the bot trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_app_instance_bot#targeted_messages ChimeAppInstanceBot#targeted_messages}

---

### ChimeAppInstanceBotTags <a name="ChimeAppInstanceBotTags" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags.Initializer"></a>

```python
from cdktn_provider_awscc import chime_app_instance_bot

chimeAppInstanceBot.ChimeAppInstanceBotTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags.property.key">key</a></code> | <code>str</code> | The key in a tag. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags.property.value">value</a></code> | <code>str</code> | The value in a tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key in a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_app_instance_bot#key ChimeAppInstanceBot#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value in a tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_app_instance_bot#value ChimeAppInstanceBot#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeAppInstanceBotConfigurationLexInvokedByOutputReference <a name="ChimeAppInstanceBotConfigurationLexInvokedByOutputReference" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import chime_app_instance_bot

chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.resetStandardMessages">reset_standard_messages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.resetTargetedMessages">reset_targeted_messages</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_standard_messages` <a name="reset_standard_messages" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.resetStandardMessages"></a>

```python
def reset_standard_messages() -> None
```

##### `reset_targeted_messages` <a name="reset_targeted_messages" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.resetTargetedMessages"></a>

```python
def reset_targeted_messages() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.standardMessagesInput">standard_messages_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.targetedMessagesInput">targeted_messages_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.standardMessages">standard_messages</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.targetedMessages">targeted_messages</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy">ChimeAppInstanceBotConfigurationLexInvokedBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `standard_messages_input`<sup>Optional</sup> <a name="standard_messages_input" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.standardMessagesInput"></a>

```python
standard_messages_input: str
```

- *Type:* str

---

##### `targeted_messages_input`<sup>Optional</sup> <a name="targeted_messages_input" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.targetedMessagesInput"></a>

```python
targeted_messages_input: str
```

- *Type:* str

---

##### `standard_messages`<sup>Required</sup> <a name="standard_messages" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.standardMessages"></a>

```python
standard_messages: str
```

- *Type:* str

---

##### `targeted_messages`<sup>Required</sup> <a name="targeted_messages" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.targetedMessages"></a>

```python
targeted_messages: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChimeAppInstanceBotConfigurationLexInvokedBy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy">ChimeAppInstanceBotConfigurationLexInvokedBy</a>

---


### ChimeAppInstanceBotConfigurationLexOutputReference <a name="ChimeAppInstanceBotConfigurationLexOutputReference" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import chime_app_instance_bot

chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.putInvokedBy">put_invoked_by</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.resetInvokedBy">reset_invoked_by</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.resetRespondsTo">reset_responds_to</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.resetWelcomeIntent">reset_welcome_intent</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_invoked_by` <a name="put_invoked_by" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.putInvokedBy"></a>

```python
def put_invoked_by(
  standard_messages: str = None,
  targeted_messages: str = None
) -> None
```

###### `standard_messages`<sup>Optional</sup> <a name="standard_messages" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.putInvokedBy.parameter.standardMessages"></a>

- *Type:* str

Sets standard messages as the bot trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_app_instance_bot#standard_messages ChimeAppInstanceBot#standard_messages}

---

###### `targeted_messages`<sup>Optional</sup> <a name="targeted_messages" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.putInvokedBy.parameter.targetedMessages"></a>

- *Type:* str

Sets targeted messages as the bot trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_app_instance_bot#targeted_messages ChimeAppInstanceBot#targeted_messages}

---

##### `reset_invoked_by` <a name="reset_invoked_by" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.resetInvokedBy"></a>

```python
def reset_invoked_by() -> None
```

##### `reset_responds_to` <a name="reset_responds_to" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.resetRespondsTo"></a>

```python
def reset_responds_to() -> None
```

##### `reset_welcome_intent` <a name="reset_welcome_intent" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.resetWelcomeIntent"></a>

```python
def reset_welcome_intent() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.invokedBy">invoked_by</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference">ChimeAppInstanceBotConfigurationLexInvokedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.invokedByInput">invoked_by_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy">ChimeAppInstanceBotConfigurationLexInvokedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.lexBotAliasArnInput">lex_bot_alias_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.localeIdInput">locale_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.respondsToInput">responds_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.welcomeIntentInput">welcome_intent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.lexBotAliasArn">lex_bot_alias_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.localeId">locale_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.respondsTo">responds_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.welcomeIntent">welcome_intent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex">ChimeAppInstanceBotConfigurationLex</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `invoked_by`<sup>Required</sup> <a name="invoked_by" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.invokedBy"></a>

```python
invoked_by: ChimeAppInstanceBotConfigurationLexInvokedByOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedByOutputReference">ChimeAppInstanceBotConfigurationLexInvokedByOutputReference</a>

---

##### `invoked_by_input`<sup>Optional</sup> <a name="invoked_by_input" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.invokedByInput"></a>

```python
invoked_by_input: IResolvable | ChimeAppInstanceBotConfigurationLexInvokedBy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy">ChimeAppInstanceBotConfigurationLexInvokedBy</a>

---

##### `lex_bot_alias_arn_input`<sup>Optional</sup> <a name="lex_bot_alias_arn_input" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.lexBotAliasArnInput"></a>

```python
lex_bot_alias_arn_input: str
```

- *Type:* str

---

##### `locale_id_input`<sup>Optional</sup> <a name="locale_id_input" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.localeIdInput"></a>

```python
locale_id_input: str
```

- *Type:* str

---

##### `responds_to_input`<sup>Optional</sup> <a name="responds_to_input" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.respondsToInput"></a>

```python
responds_to_input: str
```

- *Type:* str

---

##### `welcome_intent_input`<sup>Optional</sup> <a name="welcome_intent_input" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.welcomeIntentInput"></a>

```python
welcome_intent_input: str
```

- *Type:* str

---

##### `lex_bot_alias_arn`<sup>Required</sup> <a name="lex_bot_alias_arn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.lexBotAliasArn"></a>

```python
lex_bot_alias_arn: str
```

- *Type:* str

---

##### `locale_id`<sup>Required</sup> <a name="locale_id" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.localeId"></a>

```python
locale_id: str
```

- *Type:* str

---

##### `responds_to`<sup>Required</sup> <a name="responds_to" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.respondsTo"></a>

```python
responds_to: str
```

- *Type:* str

---

##### `welcome_intent`<sup>Required</sup> <a name="welcome_intent" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.welcomeIntent"></a>

```python
welcome_intent: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChimeAppInstanceBotConfigurationLex
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex">ChimeAppInstanceBotConfigurationLex</a>

---


### ChimeAppInstanceBotConfigurationOutputReference <a name="ChimeAppInstanceBotConfigurationOutputReference" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import chime_app_instance_bot

chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.putLex">put_lex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_lex` <a name="put_lex" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.putLex"></a>

```python
def put_lex(
  lex_bot_alias_arn: str,
  locale_id: str,
  invoked_by: ChimeAppInstanceBotConfigurationLexInvokedBy = None,
  responds_to: str = None,
  welcome_intent: str = None
) -> None
```

###### `lex_bot_alias_arn`<sup>Required</sup> <a name="lex_bot_alias_arn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.putLex.parameter.lexBotAliasArn"></a>

- *Type:* str

The ARN of the Amazon Lex V2 bot's alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_app_instance_bot#lex_bot_alias_arn ChimeAppInstanceBot#lex_bot_alias_arn}

---

###### `locale_id`<sup>Required</sup> <a name="locale_id" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.putLex.parameter.localeId"></a>

- *Type:* str

Identifies the Amazon Lex V2 bot's language and locale.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_app_instance_bot#locale_id ChimeAppInstanceBot#locale_id}

---

###### `invoked_by`<sup>Optional</sup> <a name="invoked_by" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.putLex.parameter.invokedBy"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexInvokedBy">ChimeAppInstanceBotConfigurationLexInvokedBy</a>

Specifies the type of message that triggers a bot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_app_instance_bot#invoked_by ChimeAppInstanceBot#invoked_by}

---

###### `responds_to`<sup>Optional</sup> <a name="responds_to" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.putLex.parameter.respondsTo"></a>

- *Type:* str

Determines whether the Amazon Lex V2 bot responds to all standard messages. Control messages are not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_app_instance_bot#responds_to ChimeAppInstanceBot#responds_to}

---

###### `welcome_intent`<sup>Optional</sup> <a name="welcome_intent" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.putLex.parameter.welcomeIntent"></a>

- *Type:* str

The name of the welcome intent configured in the Amazon Lex V2 bot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/chime_app_instance_bot#welcome_intent ChimeAppInstanceBot#welcome_intent}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.lex">lex</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference">ChimeAppInstanceBotConfigurationLexOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.lexInput">lex_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex">ChimeAppInstanceBotConfigurationLex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration">ChimeAppInstanceBotConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lex`<sup>Required</sup> <a name="lex" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.lex"></a>

```python
lex: ChimeAppInstanceBotConfigurationLexOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLexOutputReference">ChimeAppInstanceBotConfigurationLexOutputReference</a>

---

##### `lex_input`<sup>Optional</sup> <a name="lex_input" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.lexInput"></a>

```python
lex_input: IResolvable | ChimeAppInstanceBotConfigurationLex
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationLex">ChimeAppInstanceBotConfigurationLex</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChimeAppInstanceBotConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotConfiguration">ChimeAppInstanceBotConfiguration</a>

---


### ChimeAppInstanceBotTagsList <a name="ChimeAppInstanceBotTagsList" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import chime_app_instance_bot

chimeAppInstanceBot.ChimeAppInstanceBotTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChimeAppInstanceBotTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ChimeAppInstanceBotTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a>]

---


### ChimeAppInstanceBotTagsOutputReference <a name="ChimeAppInstanceBotTagsOutputReference" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import chime_app_instance_bot

chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ChimeAppInstanceBotTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.chimeAppInstanceBot.ChimeAppInstanceBotTags">ChimeAppInstanceBotTags</a>

---



